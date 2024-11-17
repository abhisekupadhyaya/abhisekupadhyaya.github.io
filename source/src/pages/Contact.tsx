import { Button } from "../components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together.
        </p>
        <Button size="lg" className="mb-12">
          Start a Project
        </Button>
        <div className="flex justify-center gap-6">
          <Button variant="ghost" size="icon"><Github className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><Twitter className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><Linkedin className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><Mail className="w-5 h-5" /></Button>
        </div>
      </div>
    </section>
  );
};
