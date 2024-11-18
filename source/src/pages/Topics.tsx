import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';

interface Topic {
  name: string;
  description: string;
  link: string;
}

const topics: Topic[] = [
  {
    name: "Machine Learning",
    description: "Deep learning research and Blog",
    link: "/topics/machine-learning"
  },
  {
    name: "Software Development", 
    description: "Scalable microsopics and full-stack applications",
    link: "/topics/software-development"
  },
  {
    name: "Physics",
    description: "Physics Research and Blog",
    link: "/topics/physics"
  },
  {
    name: "Poetry & Photography",
    description: "Visual and storytelling through words and lens",
    link: "/topics/poetry-&-photography"
  }
];

export const Topics = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <Link 
              key={topic.name}
              to={topic.link}
              className="block h-full no-underline"
            >
              <Card className="bg-black border-white/10 transition-transform duration-300 hover:-translate-y-2 cursor-pointer h-full"> 
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                  <h3 className="text-white text-lg font-bold leading-tight mb-2">
                    {topic.name}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};