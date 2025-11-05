import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import profileImg from "/src/my-profile.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary">Hello, I'm</p>
              <h1>Vince Jiro Saco</h1>
              <h2 className="text-muted-foreground">4th Year Computer Science Student</h2>
            </div>
            
            <p className="text-muted-foreground max-w-lg">
              Passionate about building exceptional digital experiences. Specializing in React, Node.js, 
              and modern web technologies. I turn ideas into elegant, scalable solutions.
            </p>

            <div className="flex gap-4">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get In Touch
              </Button>
              <Button variant="outline" onClick={() => window.open("#", "_blank")}>
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </button>
              <button className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </button>
              <button className="hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <ImageWithFallback
                src={profileImg}
                alt="Workspace"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', objectPosition: '47% 60%' }} // move image 5% to the right
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
