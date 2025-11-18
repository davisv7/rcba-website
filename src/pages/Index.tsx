import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Meetings } from "@/components/Meetings";
import { Membership } from "@/components/Membership";
import { Resources } from "@/components/Resources";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Announcement } from "@/components/Announcement";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Announcement />
      <Nav />
      <Hero />
      <About />
      <Meetings />
      <Membership />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
