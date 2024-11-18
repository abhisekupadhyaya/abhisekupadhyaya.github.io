//src/pages/Topics/TopicPage.tsx
import { Navigation } from "../Navigation"
import { Topics } from "../Topics"
import { Contact } from "../Contact"
import { TopicML } from "./MachineLearning/TopicML"

export const TopicPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Topics />
      <TopicML />
      <Contact />
    </div>
  )
}