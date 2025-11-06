import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Javascript", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Django", "Java", "Python", "C#", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
