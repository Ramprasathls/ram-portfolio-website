
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import StarRating from "./StarRating";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial fetch
  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setItems(data || []);
      setLoading(false);
    };
    load();
  }, []);

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("feedback-insert-channel")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "feedback" }, (payload) => {
        setItems((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !rating) return;
    const { error } = await supabase.from("feedback").insert([{ name, message, rating }]);
    if (!error) {
      setName("");
      setMessage("");
      setRating(5);
    } else {
      alert(error.message);
    }
  };

  return (
    <section id="feedback" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Feedback</h2>
      <form onSubmit={submit} className="card">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              className="mt-1 w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Rating</label>
            <div className="mt-1">
              <StarRating value={rating} onChange={setRating} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              className="mt-1 w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 h-28"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white"
        >
          Submit
        </button>
      </form>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="text-gray-300">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-gray-300">No feedback yet.</div>
        ) : (
          items.map((f) => (
            <div className="card" key={f.id}>
              <div className="flex items-center justify-between">
                <div className="font-semibold">{f.name}</div>
                <div className="text-yellow-300">{"★".repeat(f.rating)}{"☆".repeat(5-f.rating)}</div>
              </div>
              <p className="mt-2 text-gray-200">{f.message}</p>
              <div className="mt-3 text-xs text-gray-400">
                {new Date(f.created_at).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
