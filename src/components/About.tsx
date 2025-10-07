import { Card } from "@/components/ui/card";
import { Users, BookOpen, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community",
    description: "Join a passionate group of beekeepers sharing knowledge and experiences."
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Learn from experts through workshops, mentorship, and hands-on training."
  },
  {
    icon: Heart,
    title: "Support",
    description: "Get help with your hives, troubleshoot issues, and celebrate successes together."
  },
  {
    icon: Leaf,
    title: "Conservation",
    description: "Contribute to pollinator health and environmental stewardship in our region."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Our Association
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Rutherford County Beekeepers Association has been supporting local beekeepers 
            since our founding, providing education, resources, and a welcoming community for 
            everyone from beginners to experienced apiarists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
