import ResearchCard from "../../../components/ui/ResearchCard"

export const ResearchBlog = () => {
  return (
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Machine Learning Research & Blogs</h1>
          <div className="h-1 w-24 bg-primary rounded"></div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Exploring the frontiers of AI and deep learning at NYU DICE Labs
          </p>
        </div>
        
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
    )
  }