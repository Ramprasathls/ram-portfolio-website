"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock feedback data - replace with Supabase later
const mockFeedback = [
  {
    id: 1,
    name: "Sarah Chen",
    message: "Excellent work on the e-commerce project! The user experience is fantastic.",
    rating: 5,
    timestamp: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    message: "Great attention to detail and very responsive to feedback. Highly recommend!",
    rating: 5,
    timestamp: "2024-01-12T14:20:00Z",
  },
  {
    id: 3,
    name: "Emily Johnson",
    message: "Professional and delivered exactly what was needed. Will work with again.",
    rating: 4,
    timestamp: "2024-01-08T09:15:00Z",
  },
]

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with Supabase integration
    console.log("Feedback submitted:", formData)
    alert("Thank you for your feedback! (This will be connected to Supabase later)")
    setFormData({ name: "", message: "", rating: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

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
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
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
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
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
                      <label htmlFor="rating" className="block text-sm font-medium mb-2">
                        Rating
                      </label>
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

                    <Button type="submit" className="w-full">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Recent Feedback */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Recent Feedback</h3>
              <div className="space-y-4">
                {mockFeedback.map((feedback) => (
                  <Card key={feedback.id} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{feedback.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">{renderStars(feedback.rating)}</div>
                            <span className="text-sm text-muted-foreground">{formatDate(feedback.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feedback.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
