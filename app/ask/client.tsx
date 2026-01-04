"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function AskPageClient() {
  const searchParams = useSearchParams()
  const queryParam = searchParams.get("query")

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (queryParam) {
      setInput(queryParam)
    }
  }, [queryParam])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Save to history
    const history = JSON.parse(localStorage.getItem("medicineHistory") || "[]")
    history.unshift({
      id: userMessage.id,
      query: input,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem("medicineHistory", JSON.stringify(history.slice(0, 50)))

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateMockResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)

      // Check if response includes drug information
      if (
        input.toLowerCase().includes("ibuprofen") ||
        input.toLowerCase().includes("aspirin") ||
        input.toLowerCase().includes("paracetamol")
      ) {
        setTimeout(() => {
          router.push("/drug-info?medicine=" + input.split(" ")[0])
        }, 2000)
      }
    }, 1500)
  }

  const generateMockResponse = (query: string) => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("ibuprofen")) {
      return `**Ibuprofen** is a nonsteroidal anti-inflammatory drug (NSAID) commonly used to reduce fever and treat pain or inflammation.

**Common Uses:**
- Pain relief (headaches, dental pain, menstrual cramps)
- Reducing inflammation
- Fever reduction

**Typical Dosage:**
- Adults: 200-400mg every 4-6 hours as needed
- Maximum daily dose: 1200mg (without medical supervision)

**Important Warnings:**
- Take with food to reduce stomach upset
- Avoid if you have stomach ulcers or kidney problems
- May increase risk of heart attack or stroke with long-term use

I'll show you detailed drug information and create a reminder plan for you...`
    }

    return `I've received your question about "${query}". For accurate medical information, I recommend consulting the detailed drug information page. 

**General Advice:**
- Always follow your doctor's prescription
- Check for drug interactions
- Be aware of side effects
- Never exceed recommended dosages

Would you like me to provide more specific information about this medication?`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-balance">Ask About Your Medicine</h1>
          <p className="text-muted-foreground text-pretty">
            Get instant information about medications, dosages, and safety guidelines.
          </p>
        </div>

        {/* Chat Messages */}
        <Card className="flex-1 mb-4 p-4 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
                <p className="text-muted-foreground max-w-md text-pretty">
                  Ask me anything about medications, dosages, side effects, or drug interactions.
                </p>
                <div className="mt-6 grid gap-2 max-w-md w-full">
                  <Button
                    variant="outline"
                    className="justify-start text-left bg-transparent"
                    onClick={() => setInput("What are the side effects of ibuprofen?")}
                  >
                    What are the side effects of ibuprofen?
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start text-left bg-transparent"
                    onClick={() => setInput("How much aspirin should I take for a headache?")}
                  >
                    How much aspirin should I take for a headache?
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start text-left bg-transparent"
                    onClick={() => setInput("Can I take paracetamol with antibiotics?")}
                  >
                    Can I take paracetamol with antibiotics?
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 animate-in slide-in-from-bottom-2 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                      <div className="mt-1 text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <User className="h-5 w-5 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 animate-in slide-in-from-bottom-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-muted">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-foreground/60 animate-typing" />
                        <span className="h-2 w-2 rounded-full bg-foreground/60 animate-typing animation-delay-200" />
                        <span className="h-2 w-2 rounded-full bg-foreground/60 animate-typing animation-delay-400" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </Card>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about any medication..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
