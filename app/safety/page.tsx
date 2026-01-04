import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ShieldAlert, AlertTriangle, CheckCircle, XCircle, Phone, AlertCircle } from "lucide-react"

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 animate-pulse">
              <ShieldAlert className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-balance">Safety & Disclaimer</h1>
              <p className="text-muted-foreground">Important healthcare information and guidelines</p>
            </div>
          </div>
        </div>

        {/* Critical Warning */}
        <Alert className="mb-8 border-2 border-destructive bg-destructive/10 animate-in fade-in slide-in-from-bottom-4">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-lg font-bold text-destructive mb-2">Medical Disclaimer</AlertTitle>
          <AlertDescription className="text-destructive-foreground text-base leading-relaxed">
            <strong>This platform is for educational and informational purposes only.</strong> It is NOT a substitute
            for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have regarding a medical condition or medication.
          </AlertDescription>
        </Alert>

        {/* Emergency Notice */}
        <Alert className="mb-8 border-2 border-warning bg-warning/10 animate-in fade-in slide-in-from-bottom-5">
          <Phone className="h-5 w-5 text-warning-foreground" />
          <AlertTitle className="text-lg font-bold text-warning-foreground mb-2">Emergency Situations</AlertTitle>
          <AlertDescription className="text-warning-foreground text-base leading-relaxed space-y-2">
            <p>
              <strong>If you are experiencing a medical emergency, call emergency services immediately:</strong>
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <Badge variant="outline" className="w-fit text-sm py-1 px-3 border-warning text-warning-foreground">
                🚨 US/Canada: 911
              </Badge>
              <Badge variant="outline" className="w-fit text-sm py-1 px-3 border-warning text-warning-foreground">
                🚨 UK: 999 or 112
              </Badge>
              <Badge variant="outline" className="w-fit text-sm py-1 px-3 border-warning text-warning-foreground">
                🚨 Australia: 000
              </Badge>
              <Badge variant="outline" className="w-fit text-sm py-1 px-3 border-warning text-warning-foreground">
                ☎️ Poison Control (US): 1-800-222-1222
              </Badge>
            </div>
          </AlertDescription>
        </Alert>

        {/* Do's and Don'ts */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Do's */}
          <Card className="border-2 border-success/50 animate-in fade-in slide-in-from-left-4">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <CardTitle className="text-xl text-success">Do's ✓</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Consult your doctor or pharmacist before starting any new medication
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Follow prescription instructions exactly as written</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Read medication labels and package inserts carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Inform your doctor about all medications and supplements you take
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Store medications properly according to instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Check expiration dates before taking any medication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Report any side effects or adverse reactions to your healthcare provider
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Use this platform as a supplementary information resource</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Don'ts */}
          <Card className="border-2 border-destructive/50 animate-in fade-in slide-in-from-right-4">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <CardTitle className="text-xl text-destructive">Don'ts ✗</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Never self-diagnose or self-medicate based solely on online information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Don't exceed recommended dosages without medical supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Never share prescription medications with others</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Don't stop taking prescribed medications without consulting your doctor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Avoid mixing medications with alcohol unless approved by your doctor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Don't rely on this platform for emergency medical situations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Never ignore serious side effects or allergic reactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Don't use expired or improperly stored medications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Safety Information */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-6">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-primary" />
              Important Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Information Accuracy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date information, medication guidelines, recommendations,
                and regulations can change. The information provided should not be considered complete or exhaustive.
                Always verify information with your healthcare provider or pharmacist.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-secondary">Allergies and Reactions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you experience any signs of an allergic reaction (rash, itching, swelling, difficulty breathing,
                dizziness), seek immediate medical attention. Stop taking the medication and contact your doctor right
                away.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Drug Interactions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many medications can interact with other drugs, supplements, foods, or beverages. Always inform your
                healthcare provider about everything you are taking, including over-the-counter medications, vitamins,
                and herbal supplements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Pregnancy and Breastfeeding</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are pregnant, planning to become pregnant, or breastfeeding, consult your doctor before taking
                any medication. Many drugs can affect fetal development or pass into breast milk.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-secondary">Children and Elderly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dosages for children and elderly patients often differ from adult recommendations. Always use
                age-appropriate formulations and dosing as prescribed by a healthcare provider.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Liability Disclaimer */}
        <Card className="bg-muted animate-in fade-in slide-in-from-bottom-7">
          <CardHeader>
            <CardTitle className="text-xl">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              MediCare AI and its developers make no warranties, expressed or implied, regarding the accuracy,
              completeness, or reliability of the information provided. Use of this platform is at your own risk.
            </p>
            <p>
              We are not liable for any damages, losses, or injuries resulting from the use or misuse of information
              obtained through this platform. This includes, but is not limited to, direct, indirect, incidental, or
              consequential damages.
            </p>
            <p className="font-semibold text-foreground">
              By using this platform, you acknowledge and agree to these terms and understand that this service does not
              replace professional medical consultation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
