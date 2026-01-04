import { Suspense } from "react"
import { HistoryPageClient } from "./client"

export default function HistoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <HistoryPageClient />
    </Suspense>
  )
}
