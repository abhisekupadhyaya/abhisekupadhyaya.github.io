import { Card, CardContent } from '../../components/ui/card';

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Machine Learning",
    description: "Deep learning research and Blog"
  },
  {
    name: "Software Development", 
    description: "Scalable microservices and full-stack applications"
  },
  {
    name: "Physics",
    description: "Physics Research and Blog"
  },
  {
    name: "Poetry/Photography",
    description: "Visual and storytelling through words and lens"
  }
];

export const Topics = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="bg-black border-white/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full" />
                </div>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};