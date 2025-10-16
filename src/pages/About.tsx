import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import beeFlower from "@/assets/bee-flower.jpg";
import beekeepingTools from "@/assets/beekeeping-tools.jpg";
import heroBees from "@/assets/hero-bees.jpg";

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          About Us
        </h1>

        {/* Section 1 - Image Left */}
        <div className="scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700 grid md:grid-cols-2 gap-8 items-center mb-16">
          <img 
            src={beeFlower} 
            alt="Bee on flower" 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Section 2 - Image Right */}
        <div className="scroll-animate opacity-0 translate-x-[50px] transition-all duration-700 grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our History</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <img 
            src={beekeepingTools} 
            alt="Beekeeping tools" 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover order-1 md:order-2"
          />
        </div>

        {/* Section 3 - Image Left */}
        <div className="scroll-animate opacity-0 translate-x-[-50px] transition-all duration-700 grid md:grid-cols-2 gap-8 items-center mb-16">
          <img 
            src={heroBees} 
            alt="Bees working" 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Community</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
        </div>

        {/* Section 4 - Full Width Text */}
        <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-700 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Looking Forward</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
