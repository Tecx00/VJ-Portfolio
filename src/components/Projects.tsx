import summarizer from "/src/MeetingSummarizer.png";
import skinalyzer from "/src/Skinalyzer.png";
import dogDetect from "/src/dog-detector.png";
import discBot from "/src/discBot.png";
import kyredPort from "/src/kyredPort.png";
import stepCounter from "/src/stepCounter.png";
import kawaii from "/src/dashboard.png";
import spacegame from "/src/spacegame.png";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [fullViewImage, setFullViewImage] = useState<{ src: string; title: string } | null>(null);

  const projects = [
    {
      title: "Resort Booking and Management System",
      role: "Assistant Backend Developer",
      description: "A full-featured booking and management platform with real-time analytics, payment processing, and admin dashboard.",
      image: kawaii,
      tags: ["Django", "React", "Vue", "PostgreSQL", "Paymongo", "DigitalOcean"],
      featured: true,
      codeUrl: "https://github.com/",
      demoUrl: "https://youtu.be/nfA3tLsWmW0"
    },
    {
      title: "Skin Severity Analyzer & Care App",
      role: "UI/UX Designer & Model Trainer",
      description: "Skin care tool that utilizes computer vision to analyze skin conditions and provide personalized care recommendations.",
      image: skinalyzer,
      tags: ["Java", "TensorFlow", "Keras", "OpenCV", "Android Studio"],
      featured: true,
      codeUrl: "https://github.com/Shobea/Skinalyzer",
      demoUrl: "https://malayancollegesmindanaoo365-my.sharepoint.com/:v:/g/personal/syap_mcm_edu_ph/EbHbfPTRMV9PjJJouGriUokBIqBcGxfwQORawXzumj_hhw?e=O2A6H2&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D"
    },
    {
      title: "AI Powered Meeting Summarizer",
      role: "Backend Developer",
      description: "Language model-powered meeting summarization tool that generates concise summaries from meeting transcripts.",
      image: summarizer,
      tags: ["Django", "React", "Vue", "REST API", "Whisper AI", "BART"],
      featured: true,
      codeUrl: "https://github.com/Tecx00/IS-Backend"
    },
    {
      title: "Step Counter Using Arduino Nano With Mobile Application",
      role: "Hardware + Assistant Assembly Developer",
      description: "Add your project description here. This project will be shown when the user clicks 'Show More'.",
      image: stepCounter,
      tags: ["Assembly", "Android Studio", "Arduino Nano", "IOT"],
      featured: false,
    },
    {
      title: "Canine Keypoint Detection Using Deep Learning",
      role: "Model Trainer",
      description: "A deep learning model that detects keypoints on canine videos for health and activity monitoring.",
      image: dogDetect,
      tags: ["YOLOv11", "Python", "Keras", "TensorFlow", "OpenCV"],
      featured: false,
    },
    {
      title: "Portfolio and E-Commerce Website",
      role: "Developer",
      description: "Portfolio and e-commerce website showcasing projects and products.",
      image: kyredPort,
      tags: ["Technology 1", "Technology 2", "Technology 3"],
      featured: false,
    },
    {
      title: "Space Shooter Game",
      role: "Lead Developer",
      description: "Space shooter game with multiple enemies, bosses and power-ups, with a leaderboard system.",
      image: spacegame,
      tags: ["Godot", "C#", "Game Design"],
      featured: false,
    },
    {
      title: "Discord Bot for Automatic Disconnection",
      role: "Developer",
      description: "A Discord bot that automatically disconnects users from voice channels after a specified timeout or a specific time.",
      image: discBot,
      tags: ["Discord.js", "Node.js", "JavaScript"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const additionalProjects = projects.filter(p => !p.featured);

  const renderProjectCard = (project: typeof projects[0], index: number) => (
    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="aspect-video overflow-hidden bg-muted cursor-pointer"
        onClick={() => setFullViewImage({ src: project.image, title: project.title })}
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: '0.5px 0.5px' }}
        />
      </div>
      <div className="p-6 space-y-4">
        <h3>{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{project.role}</p>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          {project.codeUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.codeUrl, "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
          {project.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.demoUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => renderProjectCard(project, index))}
          </div>

          <AnimatePresence>
            {showAllProjects && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {additionalProjects.map((project, index) => renderProjectCard(project, index))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {projects.length > featuredProjects.length && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Projects
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      <Dialog
        open={fullViewImage !== null}
        onOpenChange={(open) => {
          if (!open) {
            setFullViewImage(null);
          }
        }}
      >
        <DialogContent className="max-w-7xl w-[95vw] p-2">
          <DialogTitle className="sr-only">
            {fullViewImage?.title || "Project Image"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Full view of the project image
          </DialogDescription>
          {fullViewImage && (
            <div className="w-full flex items-center justify-center">
              <ImageWithFallback
                src={fullViewImage.src}
                alt={fullViewImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
