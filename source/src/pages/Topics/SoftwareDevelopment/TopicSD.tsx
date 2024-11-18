import { FeaturedPosts } from "./FeaturedPosts"
import { CodeBlog } from "./CodeBlog"

export const TopicSD = () => {
  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <CodeBlog />
      <FeaturedPosts />
    </main>
  )
}