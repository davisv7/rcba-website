import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toolsImage from "@/assets/beekeeping-tools.jpg";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Beginner Guides",
    description: "Essential reading for new beekeepers starting their journey"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step demonstrations of key beekeeping techniques"
  },
  {
    icon: FileText,
    title: "Monthly Newsletter",
    description: "Stay updated with local beekeeping news and seasonal tips"
  }
];

export const Resources = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Educational Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our collection of guides, tutorials, and helpful materials to 
            enhance your beekeeping knowledge and skills.
          </p>
        </div>

        <TooltipProvider>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resourceCategories.map((category, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Card 
                    className="p-6 hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-border/50 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Button variant="outline" size="sm" className="group">
                      Explore
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Coming Soon</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <Card className="overflow-hidden bg-gradient-to-br from-muted/50 to-background border-border/50">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Equipment Library
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Members have access to our shared equipment library, including extractors, 
                smokers, protective gear, and specialized tools. Save money while learning 
                what works best for your operation.
              </p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="w-fit shadow-[var(--shadow-warm)] hover:scale-105 transition-all">
                      View Available Equipment
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src={toolsImage}
                alt="Beekeeping equipment and tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
