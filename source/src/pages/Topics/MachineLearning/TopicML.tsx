import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Topics } from "../../Topics"
import { Button } from "../../../components/ui/button"
import { Navigation } from "../../Navigation"
import { Contact } from "../../Contact"

export const TopicML = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <Topics />
      
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <section className="mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Machine Learning Research & Blogs
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl">
            Exploring the frontiers of AI and deep learning at NYU DICE Labs
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ResearchCard
              title="FlowBench: Large Scale Benchmark for Flow Simulation"
              description="A comprehensive dataset of 10K+ fluid simulations for evaluating deep learning models in continuous dynamical systems."
              link="https://arxiv.org/abs/2409.18032"
            />
            <ResearchCard
              title="MPF-Bench: Multi-Phase-Flows Dataset"
              description="Large-scale dataset for SciML of droplet and bubble dynamics, submitted to ICLR 2025."
              link="#"
            />
            <ResearchCard
              title="Chaotic Discrete Breathers in Triangular Lattices"
              description="Study on nonlinear vibrations and their effects on macroscopic properties of triangular lattices."
              link="https://doi.org/10.1016/j.cnsns.2022.106541"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Blog Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <BlogPostCard
              title="Retrieval-Augmented Generation in NLP"
              description="Exploring the synergy between information retrieval and language generation for improved AI performance."
              date="October 15, 2024"
              readTime="8 min read"
            />
            <BlogPostCard
              title="Scaling Deep Learning Models: Lessons from FlowBench"
              description="Insights gained from developing and evaluating large-scale models for fluid dynamics simulations."
              date="September 22, 2024"
              readTime="12 min read"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Current Research Focus</h2>
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
      </main>

      <Contact />
    </div>
  )
}

interface ResearchCardProps {
  title: string
  description: string
  link: string
}

const ResearchCard = ({ title, description, link }: ResearchCardProps) => {
  return (
    <Card className="bg-zinc-900 border-white/10 overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src="/placeholder.svg?height=400&width=600" 
            alt="Project img" 
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a href={link} className="inline-flex items-center text-white border-white">
              Read paper
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  readTime: string
}

const BlogPostCard = ({ title, description, date, readTime }: BlogPostCardProps) => {
  return (
    <Card className="bg-zinc-900 border-white/10 overflow-hidden group">
      <CardContent className="flex-grow flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <time dateTime={date}>{date}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <Button variant="outline">Read Post</Button>
      </CardContent>
    </Card>
  )
}