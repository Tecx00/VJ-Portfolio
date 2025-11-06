import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vjsaco003@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 927 420 4956",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Davao City, Philippines",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a need from me? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2">{info.title}</h3>
              <p className="text-muted-foreground">{info.value}</p>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="What would you like to discuss?"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
