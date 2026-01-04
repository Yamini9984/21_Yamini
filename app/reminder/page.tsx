"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Sunrise, Sun, Sunset, Moon, Bell, AlertTriangle, Download, Share2 } from "lucide-react"
import Link from "next/link"

const reminderPlan = {
  medicine: "Ibuprofen 400mg",
  duration: "7 days",
  schedule: [
    {
      time: "Morning",
      icon: Sunrise,
      period: "8:00 AM",
      dosage: "1 tablet (400mg)",
      instructions: "Take with breakfast",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      time: "Afternoon",
      icon: Sun,
      period: "2:00 PM",
      dosage: "1 tablet (400mg)",
      instructions: "Take with lunch or snack",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      time: "Evening",
      icon: Sunset,
      period: "8:00 PM",
      dosage: "1 tablet (400mg)",
      instructions: "Take with dinner",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ],
  warnings: [
    "Do not exceed 3 tablets (1200mg) in 24 hours",
    "Always take with food or milk",
    "Drink plenty of water",
    "If pain persists after 3 days, consult your doctor",
  ],
  notes:
    "This reminder plan is personalized based on typical adult dosing. Adjust timing as needed to fit your daily routine.",
}

export default function ReminderPage() {
  const handleDownload = () => {
    const data = JSON.stringify(reminderPlan, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "medication-reminder-plan.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 animate-pulse">
                <Bell className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-balance">Medication Reminder Plan</h1>
                <p className="text-muted-foreground">Your personalized dosing schedule</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medicine Info Card */}
        <Card className="mb-6 border-2 border-primary/20 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{reminderPlan.medicine}</CardTitle>
                <CardDescription className="text-base mt-1">
                  Duration: {reminderPlan.duration} • Daily Schedule
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{reminderPlan.notes}</p>
          </CardContent>
        </Card>

        {/* Timeline Schedule */}
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Moon className="h-5 w-5" />
            Daily Schedule
          </h2>

          {reminderPlan.schedule.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={item.time}
                className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 animate-in slide-in-from-left-4 ${item.bgColor} border-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`} />
                <CardContent className="p-6 pl-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.bgColor}`}>
                      <Icon className={`h-7 w-7 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.time}</h3>
                        <Badge variant="outline" className="text-sm">
                          {item.period}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-1">{item.dosage}</p>
                      <p className="text-sm text-muted-foreground">{item.instructions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Warnings */}
        <Alert className="mb-6 border-warning bg-warning/10 animate-in fade-in slide-in-from-bottom-5">
          <AlertTriangle className="h-5 w-5 text-warning-foreground" />
          <AlertDescription className="text-warning-foreground">
            <strong className="block mb-2 text-base">Important Reminders:</strong>
            <ul className="space-y-1 text-sm">
              {reminderPlan.warnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-warning-foreground">•</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>

        {/* Action Buttons */}
        <div className="grid gap-4 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-6">
          <Button size="lg" onClick={handleDownload} variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download Plan (JSON)
          </Button>
          <Button size="lg" variant="outline">
            <Share2 className="mr-2 h-5 w-5" />
            Share with Doctor
          </Button>
        </div>

        {/* Footer Note */}
        <Card className="mt-8 bg-muted/50 animate-in fade-in slide-in-from-bottom-7">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Tip:</strong> Set phone alarms for each reminder time to ensure you never miss a dose. Consistency
              is key for effective treatment.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button asChild variant="link">
                <Link href="/drug-info">View Drug Information</Link>
              </Button>
              <Button asChild variant="link">
                <Link href="/safety">Safety Guidelines</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
