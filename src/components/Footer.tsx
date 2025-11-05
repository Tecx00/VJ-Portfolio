import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </button>
            <button className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>
          <p className="text-muted-foreground text-center">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
