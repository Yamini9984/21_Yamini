import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { MessageSquare, Shield, Clock, Pill, Activity, AlertTriangle, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-gradient" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
              <Activity className="h-4 w-4" />
              Powered by AI Technology
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
              Your Personal{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Medicine Assistant
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty animate-in fade-in slide-in-from-bottom-5 duration-900">
              Get instant, accurate information about medications, dosages, warnings, and personalized reminder
              schedules. Healthcare guidance made simple and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <Button asChild size="lg" className="text-lg h-12 px-8 animate-glow">
                <Link href="/ask">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask About Your Medicine
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-12 px-8 bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Everything You Need to Know About Your Medicine</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Our AI-powered platform provides comprehensive medication information at your fingertips.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Pill className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dosage Information</CardTitle>
                <CardDescription>
                  Get precise dosage recommendations, administration guidelines, and usage instructions for any
                  medication.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <AlertTriangle className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Safety Warnings</CardTitle>
                <CardDescription>
                  Understand potential side effects, drug interactions, and contraindications before taking any
                  medicine.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Reminder Plans</CardTitle>
                <CardDescription>
                  Receive personalized medication schedules with morning, afternoon, and evening reminders tailored to
                  your needs.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 4 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Chat Interface</CardTitle>
                <CardDescription>
                  Ask questions naturally and get instant, easy-to-understand answers about any medication.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 5 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Search History</CardTitle>
                <CardDescription>
                  Access your previous medication queries anytime and review past information at your convenience.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 6 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>
                  Our platform prioritizes your health with verified information and clear safety disclaimers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">How It Works</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Get medication information in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="relative text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Ask Your Question</h3>
              <p className="text-muted-foreground text-pretty">
                Type the name of any medication or ask about symptoms, dosages, or interactions.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Get AI-Powered Insights</h3>
              <p className="text-muted-foreground text-pretty">
                Our AI analyzes trusted medical databases to provide accurate, comprehensive information.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Receive Personalized Plan</h3>
              <p className="text-muted-foreground text-pretty">
                Get detailed information along with a customized reminder schedule for your medication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Join thousands of users who trust MediCare AI for accurate medication information and personalized health
            guidance.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg h-12 px-8">
            <Link href="/ask">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Asking Questions
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Medical Disclaimer:</strong> This platform provides general information only. Always consult a
            healthcare professional for medical advice.
          </p>
          <p>© 2026 MediCare AI. Built for healthcare education and awareness.</p>
        </div>
      </footer>
    </div>
  )
}
