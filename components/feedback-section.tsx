"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient"; // ← use the client you created

type FeedbackRow = {
  id: string;
  name: string;
  message: string;
  rating: number;
  created_at: string;
};

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "5", // keep as string for Select; convert on submit
  });
  const [items, setItems] = useState<FeedbackRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch existing feedback (newest first)
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setItems(data as FeedbackRow[]);
      setLoading(false);
    })();
  }, []);

  // Realtime updates on INSERT
  useEffect(() => {
    const channel = supabase
      .channel("feedback-inserts")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => setItems((prev) => [payload.new as FeedbackRow, ...prev])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim() || !formData.rating) return;

    setSubmitting(true);
    const ratingNum = parseInt(formData.rating, 10);
    const { error } = await supabase
      .from("feedback")
      .insert([{ name: formData.name, message: formData.message, rating: ratingNum }]);

    setSubmitting(false);
    if (error) {
      alert(error.message);
      return;
    }
    // Clear the form; the new row will appear via realtime subscription
    setFormData({ name: "", message: "", rating: "5" });
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
    ));

  const formatDate = (ts: string) =>
    new Date(ts).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <section id="feedback" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Feedback</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Share your thoughts..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="rating" className="block text-sm font-medium mb-2">Rating</label>
                      <Select
                        value={formData.rating}
                        onValueChange={(value) => handleInputChange("rating", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 Stars - Excellent</SelectItem>
                          <SelectItem value="4">4 Stars - Very Good</SelectItem>
                          <SelectItem value="3">3 Stars - Good</SelectItem>
                          <SelectItem value="2">2 Stars - Fair</SelectItem>
                          <SelectItem value="1">1 Star - Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Feedback"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Recent Feedback */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Recent Feedback</h3>
              {loading ? (
                <p className="text-muted-foreground">Loading…</p>
              ) : items.length === 0 ? (
                <p className="text-muted-foreground">No feedback yet.</p>
              ) : (
                <div className="space-y-4">
                  {items.map((f) => (
                    <Card key={f.id} className="border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground">{f.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">{renderStars(f.rating)}</div>
                              <span className="text-sm text-muted-foreground">{formatDate(f.created_at)}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{f.message}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}