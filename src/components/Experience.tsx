import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Freelance Youtube Video Editor",
      company: "7M+ Views",
      period: "2023 - Present",
      description: [
        "Created engaging video content for various clients, enhancing their brand presence.",
        "Assisted clients in understanding Youtube algorithms to maximize video reach and engagement.",
        "Helped clients understand video production process and best practices.",
        "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction.",
      ],
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Solutions Co.",
    //   period: "2020 - 2022",
    //   description: [
    //     "Developed and maintained multiple client-facing web applications",
    //     "Collaborated with UX/UI designers to implement responsive designs",
    //     "Optimized application performance resulting in 40% faster load times",
    //   ],
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "StartUp Ventures",
    //   period: "2019 - 2020",
    //   description: [
    //     "Built RESTful APIs and integrated third-party services",
    //     "Participated in agile development processes and sprint planning",
    //     "Contributed to open-source projects and internal tools",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            My professional journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0">
              <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary rounded-full p-2">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3>{exp.title}</h3>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary">{exp.company}</p>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
