import { CurrentResearch } from "./CurrentResearch"
import { FeaturedPosts } from "./FeaturedPosts"
import { ResearchBlog } from "./ResearchBlog"

export const TopicML = () => {
  return (
    <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-24">
      <CurrentResearch />
      <ResearchBlog />
      <FeaturedPosts />
    </main>
  )
}