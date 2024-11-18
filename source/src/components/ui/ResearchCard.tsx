import { Card, CardContent } from "./card"

interface ResearchCardProps {
  title: string;
  description: string;
  link: string;
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
  );
};

export default ResearchCard;