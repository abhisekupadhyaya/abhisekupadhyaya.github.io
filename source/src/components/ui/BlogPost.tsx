import { Card, CardContent } from "./card"
import { Button } from "./button"

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const BlogPostCard = ({ title, description, date, readTime }: BlogPostCardProps) => {
  return (
    <Card className="bg-zinc-900 border-white/10 overflow-hidden group hover:shadow-xl transition-all duration-300 relative">
      <CardContent className="flex-grow flex flex-col justify-between gap-4 p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-gray-400 line-clamp-3">{description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <Button 
            variant="outline" 
            className="w-full transition-colors hover:bg-white/10"
          >
            Read Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;