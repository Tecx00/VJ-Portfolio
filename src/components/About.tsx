import { Award, Code, Users } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "3+ Years",
      description: "Development Experience",
    },
    {
      icon: Award,
      title: "5+ Projects",
      description: "Successfully Delivered",
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate full-stack developer with a strong focus on creating 
            intuitive and performant web applications. With expertise in modern frameworks 
            and a keen eye for design, I bridge the gap between functionality and user experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
