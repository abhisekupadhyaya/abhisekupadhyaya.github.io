import BlogPostCard from "../../../components/ui/BlogPost"
export const FeaturedPosts = () => {
    return (
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
    )
  }