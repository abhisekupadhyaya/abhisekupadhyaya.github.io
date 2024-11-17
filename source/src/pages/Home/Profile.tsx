import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import profilePic from "../../assets/profile_pic.jpg";

export const Profile = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Deep Learning. Code. Physics. Poetry. Photography
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Researcher @ New York University | Undergrad @ IIT Kharagpur
            </p>
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20" />
            <Avatar className="w-80 h-80 mx-auto relative">
              <AvatarImage src={profilePic} alt="Profile" className="object-cover" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};
