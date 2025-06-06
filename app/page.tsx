"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Plug, Zap, Globe, Tv } from "lucide-react"

export default function ZezvuLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-soft-white font-inter flex flex-col items-center px-0 py-0">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-soft-white to-gray-50 pt-0">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto pt-0">

          {/* Logo */}
          <Image
            src="/zezvu-logo.png"
            alt="ZEZVU"
            width={800}
            height={250}
            className="h-80 w-auto mb-0"
          />

          {/* Hero Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-0 font-poppins">
            Break Language Barriers
            <br />
            <span className="text-deep-blue">Instantly</span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ZEZVU is the AI-powered translator box that connects between your streaming device and TV, delivering
            real-time subtitles for any content in any language.
          </p>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 justify-center mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base border-2 border-gray-200 focus:border-deep-blue max-w-md"
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-deep-blue hover:bg-blue-700 text-white font-semibold"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Joined!" : "Join Waitlist"}
            </Button>
          </form>

          {isSubmitted && (
            <p className="text-green-600 mt-2 text-sm">
              Thank you! We'll notify you when ZEZVU is available.
            </p>
          )}

        </div>
      </section>

      {/* HDMI Diagram Placeholder */}
      <div className="max-w-4xl mx-auto my-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <img src="/zezvu-hdmi.png" alt="HDMI Diagram" />
        </div>
      </div>
      {/* How It Works Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-dark-charcoal text-center mb-16 font-poppins">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Plug className="w-8 h-8" />,
                title: "Connect",
                description: "Plug ZEZVU between your streaming device and TV via HDMI",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Listen",
                description: "AI analyzes audio in real-time from any content source",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Translate",
                description: "Advanced AI generates accurate subtitles in your language",
              },
              {
                icon: <Tv className="w-8 h-8" />,
                title: "Display",
                description: "Subtitles appear instantly on your TV screen",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-3 font-poppins">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-dark-charcoal text-center mb-16 font-poppins">Why Choose ZEZVU?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Real-time AI translation for any content",
              "Works with all HDMI devices and streaming services",
              "Support for 100+ languages",
              "No internet required after setup",
              "Plug-and-play installation in seconds",
              "Crystal-clear subtitle display",
              "Perfect for travelers and expats",
              "Ideal for language learning",
              "Compatible with all TV sizes",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-deep-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark-charcoal text-center mb-16 font-poppins">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Does ZEZVU work with all streaming services?",
                answer:
                  "Yes! ZEZVU works with any device that outputs audio via HDMI, including Netflix, Amazon Prime, Disney+, YouTube, gaming consoles, and more.",
              },
              {
                question: "How accurate are the translations?",
                answer:
                  "ZEZVU uses advanced AI models trained on millions of hours of content, achieving 95%+ accuracy for most languages and content types.",
              },
              {
                question: "Do I need an internet connection?",
                answer:
                  "Only for initial setup and language pack downloads. Once configured, ZEZVU works completely offline for maximum privacy and reliability.",
              },
              {
                question: "What languages are supported?",
                answer:
                  "ZEZVU supports over 100 languages including Spanish, French, German, Japanese, Korean, Arabic, Hindi, and many more.",
              },
              {
                question: "Will it work with my TV?",
                answer:
                  "ZEZVU is compatible with any TV or display that has HDMI input. It works with TVs from all major brands and sizes.",
              },
              {
                question: "When will ZEZVU be available?",
                answer:
                  "We're currently in final testing phases. Join our waitlist to be notified as soon as ZEZVU becomes available for pre-order.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-dark-charcoal hover:text-deep-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="px-6 py-20 bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Transform Your Viewing Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of early adopters waiting for ZEZVU. Be the first to experience seamless, real-time
            translation for all your favorite content.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base bg-white border-0"
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-accent-cyan hover:bg-cyan-400 text-dark-charcoal font-semibold"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Joined!" : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-dark-charcoal w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 ZEZVU. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}