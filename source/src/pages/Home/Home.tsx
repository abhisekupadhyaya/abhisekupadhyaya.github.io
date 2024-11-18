import { Profile } from "./Profile"
import { Navigation } from "../Navigation"
import { Topics } from "../Topics"
import { FeaturedWork } from "./FeaturedWork"
import { Contact } from "../Contact"


export const Home = () => {

  return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <Navigation />

        {/* Profile Section */}
        <Profile />
        
        {/* Topics Section */}
        <Topics />

        {/* Featured Work */}
        <FeaturedWork />

        {/* Contact Section */}
        <Contact />
      </div>
    )
  }