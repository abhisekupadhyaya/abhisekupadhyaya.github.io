import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"

export const CurrentResearch = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Current Research Focus</h2>
        <div className="h-1 w-24 bg-primary rounded"></div>
      </div>
      <Card className="bg-zinc-900 border-white/10 overflow-hidden group">
        <CardHeader>
          <CardTitle className="text-2xl">
            Foundation Model for Continuous Dynamical Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-gray-400">
            At NYU DICE Labs, I'm developing a groundbreaking foundation model aimed at solving complex continuous dynamical systems. This research has potential applications in fluid dynamics, climate modeling, and beyond.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-400">
            <li>Created FlowBench, a comprehensive dataset of fluid simulations</li>
            <li>Evaluated 13 state-of-the-art deep learning models</li>
            <li>Developed multi-GPU training pipeline for sequence-based neural operators</li>
          </ul>
          <Button variant="outline" className="group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}