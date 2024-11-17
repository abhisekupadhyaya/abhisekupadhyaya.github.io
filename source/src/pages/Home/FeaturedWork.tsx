import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export const FeaturedWork = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="bg-zinc-900 border-white/10 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${item}`}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-gray-400">UI Design • Development</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
