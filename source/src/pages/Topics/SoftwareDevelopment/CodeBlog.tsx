import ResearchCard from "../../../components/ui/ResearchCard"

export const CodeBlog = () => {
    return (
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl mb-6">
          Code Blogs
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
    )
  }