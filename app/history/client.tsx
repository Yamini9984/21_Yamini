"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { History, Search, Trash2, Clock, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface HistoryItem {
  id: string
  query: string
  timestamp: string
}

export function HistoryPageClient() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedHistory = localStorage.getItem("medicineHistory")
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const filteredHistory = history.filter((item) => item.query.toLowerCase().includes(searchTerm.toLowerCase()))

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear all history?")) {
      localStorage.removeItem("medicineHistory")
      setHistory([])
    }
  }

  const deleteItem = (id: string) => {
    const newHistory = history.filter((item) => item.id !== id)
    setHistory(newHistory)
    localStorage.setItem("medicineHistory", JSON.stringify(newHistory))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
    return date.toLocaleDateString()
  }

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <History className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-balance">Search History</h1>
                <p className="text-muted-foreground">Your previous medication queries</p>
              </div>
            </div>
            {history.length > 0 && (
              <Button variant="destructive" size="sm" onClick={clearHistory}>
                <Trash2 className="mr-2 h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Search Bar */}
        {history.length > 0 && (
          <div className="mb-6 relative animate-in fade-in slide-in-from-bottom-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search your history..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {/* History List */}
        {filteredHistory.length === 0 ? (
          <Card className="text-center py-12 animate-in fade-in slide-in-from-bottom-5">
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  {history.length === 0 ? (
                    <History className="h-10 w-10 text-muted-foreground" />
                  ) : (
                    <Search className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {history.length === 0 ? "No History Yet" : "No Results Found"}
                </h3>
                <p className="text-muted-foreground max-w-md mb-6 text-pretty">
                  {history.length === 0
                    ? "Your medication search history will appear here. Start by asking about a medicine!"
                    : `No results found for "${searchTerm}". Try a different search term.`}
                </p>
                {history.length === 0 && (
                  <Button asChild>
                    <Link href="/ask">
                      Start Asking Questions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredHistory.map((item, index) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Search className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold mb-1 truncate">{item.query}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{formatDate(item.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/ask?query=${encodeURIComponent(item.query)}`}>
                          <ArrowRight className="h-4 w-4" />
                          <span className="sr-only">View query</span>
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Info Alert */}
        {history.length > 0 && (
          <Alert className="mt-8 animate-in fade-in slide-in-from-bottom-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              History is stored locally on your device. Clearing your browser data will remove this history.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
