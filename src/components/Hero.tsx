import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bees.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Rutherford County
            </span>
            <br />
            <span className="text-foreground">Beekeepers Association</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Connecting local beekeepers, promoting education, and fostering a thriving community 
            dedicated to the health and prosperity of honeybees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg shadow-[var(--shadow-warm)] hover:scale-105 transition-all">
              Join Our Club
            </Button>
            <Button size="lg" variant="outline" className="text-lg hover:scale-105 transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
