import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code2, Database, Cpu, Sparkles, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-3">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            About This Project
          </div>
          <h1 className="text-4xl font-bold mb-4 text-balance">MediCare AI Platform</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            An innovative healthcare application that leverages artificial intelligence to provide accessible medication
            information and personalized reminder systems.
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="mb-8 border-2 border-primary/20 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Problem Statement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Healthcare information accessibility</strong> remains a significant
              challenge. Many patients struggle to understand medication instructions, proper dosages, potential side
              effects, and drug interactions. This knowledge gap can lead to medication errors, missed doses, and
              adverse health outcomes.
            </p>
            <p>
              Traditional methods of obtaining this information—reading lengthy medical literature, waiting for doctor
              appointments, or searching through unreliable online sources—are time-consuming and often confusing.
              Patients need instant, accurate, and easy-to-understand medication information available 24/7.
            </p>
            <p className="text-foreground font-medium">
              MediCare AI bridges this gap by providing an intelligent, conversational interface that delivers
              personalized medication guidance in seconds.
            </p>
          </CardContent>
        </Card>

        {/* Solution Overview */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-5">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            Our Solution
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Cpu className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle>AI-Powered Chatbot</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Natural language processing enables users to ask questions about medications in plain English and
                receive instant, accurate responses with comprehensive information about dosages, warnings, and
                interactions.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Database className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>Comprehensive Database</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Access to extensive medication databases ensures users receive verified, up-to-date information about
                thousands of drugs, including generic and brand names, with detailed safety profiles.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Personalized Reminders</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Automatically generated medication schedules with morning, afternoon, and evening reminders help users
                maintain consistency in their treatment plans and improve medication adherence.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle>User-Friendly Interface</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Clean, intuitive design with accessibility features ensures that people of all ages and technical
                abilities can easily navigate and use the platform effectively.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-6">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Code2 className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js 16</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS v4</Badge>
                  <Badge variant="secondary">Shadcn UI</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-secondary">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AI/ML Models</Badge>
                  <Badge variant="secondary">REST API</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-accent">Features</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Dark Mode</Badge>
                  <Badge variant="secondary">Responsive</Badge>
                  <Badge variant="secondary">Animations</Badge>
                  <Badge variant="secondary">Local Storage</Badge>
                  <Badge variant="secondary">PWA Ready</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-7">
          <CardHeader>
            <CardTitle className="text-2xl">System Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">User Interface Layer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Modern React-based frontend with server and client components, optimized for performance and
                    accessibility. Features include real-time chat interface, history tracking, and responsive design.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">API Layer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    FastAPI backend handles requests, processes natural language queries, and interfaces with medical
                    databases. Implements caching and rate limiting for optimal performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AI Processing Engine</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Machine learning models analyze queries, extract medication information from databases, and generate
                    personalized reminder schedules based on usage patterns and medical guidelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data Storage</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Client-side storage for history and preferences, with optional backend integration for cross-device
                    synchronization and advanced analytics.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact */}
        <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 animate-in fade-in slide-in-from-bottom-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Project Impact</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Improved Medication Adherence:</strong> Personalized reminders help
              users take medications on time, improving treatment outcomes.
            </p>
            <p>
              <strong className="text-foreground">Reduced Medical Errors:</strong> Clear, accessible information helps
              prevent dosage mistakes and dangerous drug interactions.
            </p>
            <p>
              <strong className="text-foreground">Healthcare Cost Reduction:</strong> Fewer emergency room visits and
              complications due to better-informed patients.
            </p>
            <p>
              <strong className="text-foreground">Increased Health Literacy:</strong> Empowers users to make informed
              decisions about their medications and health.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
