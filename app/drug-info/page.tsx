"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Pill, AlertTriangle, Info, Clock, ShieldAlert, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

function DrugInfoContent() {
  const searchParams = useSearchParams()
  const medicine = searchParams.get("medicine") || "Ibuprofen"

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Pill className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-balance">{medicine}</h1>
              <p className="text-muted-foreground">Nonsteroidal Anti-Inflammatory Drug (NSAID)</p>
            </div>
          </div>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-6 border-warning bg-warning/10 animate-in fade-in slide-in-from-bottom-4">
          <AlertTriangle className="h-4 w-4 text-warning-foreground" />
          <AlertDescription className="text-warning-foreground">
            <strong>Important:</strong> This information is for educational purposes only. Always consult your
            healthcare provider before taking any medication.
          </AlertDescription>
        </Alert>

        {/* Quick Info Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">FDA Approved</p>
              <p className="font-semibold">Available OTC</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Available as</p>
              <p className="font-semibold">Tablet, Capsule, Liquid</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-7">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Typical course</p>
              <p className="font-semibold">As needed, 4-6 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Accordion */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-8">
          <CardHeader>
            <CardTitle className="text-2xl">Detailed Information</CardTitle>
            <CardDescription>Click to expand each section for more details</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Description & Uses</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    <strong className="text-foreground">Ibuprofen</strong> is a nonsteroidal anti-inflammatory drug
                    (NSAID) used to reduce fever and treat pain or inflammation caused by many conditions such as
                    headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Common Uses:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Relief of mild to moderate pain</li>
                      <li>Reduction of fever</li>
                      <li>Treatment of inflammation</li>
                      <li>Management of arthritis symptoms</li>
                      <li>Menstrual cramp relief</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dosage">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Dosage Guidelines</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Adults (12 years and older):</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Typical dose: 200-400mg every 4-6 hours</li>
                      <li>Maximum single dose: 400mg</li>
                      <li>Maximum daily dose: 1200mg (without medical supervision)</li>
                      <li>Take with food or milk to reduce stomach upset</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Children:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Dosage based on weight and age</li>
                      <li>Consult pediatrician for appropriate dosing</li>
                      <li>Available in liquid form for easier administration</li>
                    </ul>
                  </div>
                  <Alert className="bg-accent/10 border-accent">
                    <Clock className="h-4 w-4 text-accent" />
                    <AlertDescription className="text-accent-foreground">
                      <strong>Timing:</strong> For best results, take at the first sign of pain. Do not exceed
                      recommended dosage.
                    </AlertDescription>
                  </Alert>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warnings">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <span className="font-semibold">Warnings & Precautions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <Alert className="bg-destructive/10 border-destructive">
                    <ShieldAlert className="h-4 w-4 text-destructive" />
                    <AlertDescription className="text-destructive-foreground">
                      <strong>Serious Warnings:</strong> May increase risk of heart attack or stroke, especially with
                      long-term use or in people with heart disease.
                    </AlertDescription>
                  </Alert>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do Not Use If:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Allergic to ibuprofen, aspirin, or other NSAIDs</li>
                      <li>History of stomach ulcers or bleeding</li>
                      <li>Severe kidney or liver disease</li>
                      <li>Just before or after heart bypass surgery</li>
                      <li>In the last trimester of pregnancy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Consult Doctor If You Have:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>High blood pressure or heart disease</li>
                      <li>Asthma or breathing problems</li>
                      <li>Kidney or liver problems</li>
                      <li>History of stomach problems</li>
                      <li>Bleeding or clotting disorders</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="side-effects">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-destructive" />
                    <span className="font-semibold">Side Effects</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Common Side Effects:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Upset stomach, nausea</li>
                      <li>Heartburn, gas</li>
                      <li>Dizziness, headache</li>
                      <li>Mild rash or itching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Serious Side Effects (Seek Medical Help):</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Black or bloody stools</li>
                      <li>Coughing up blood or vomit that looks like coffee grounds</li>
                      <li>Chest pain, shortness of breath</li>
                      <li>Sudden vision changes</li>
                      <li>Severe allergic reaction (rash, swelling, difficulty breathing)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="interactions">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Drug Interactions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                  <p>
                    Ibuprofen may interact with other medications. Always inform your healthcare provider about all
                    medications you are taking.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">May Interact With:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Blood thinners (warfarin, aspirin)</li>
                      <li>Other NSAIDs</li>
                      <li>Blood pressure medications</li>
                      <li>Antidepressants (SSRIs, SNRIs)</li>
                      <li>Corticosteroids</li>
                      <li>Lithium</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-9">
          <Button asChild size="lg" className="flex-1">
            <Link href="/reminder">
              <Clock className="mr-2 h-5 w-5" />
              Create Reminder Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
            <Link href="/safety">
              <ShieldAlert className="mr-2 h-5 w-5" />
              View Safety Guidelines
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function DrugInfoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <DrugInfoContent />
    </Suspense>
  )
}
