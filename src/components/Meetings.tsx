import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Meetings = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Join Our Meetings
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with fellow beekeepers and expand your knowledge at our regular gatherings.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-border/50 shadow-xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Monthly Meetings</h3>
                  <p className="text-muted-foreground">
                    Third Thursday of every month
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Time</h3>
                  <p className="text-muted-foreground">
                    7:00 PM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Rutherford County Extension Office<br />
                    Check our newsletter for specific addresses and any location changes
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">What to Expect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Guest speakers and expert presentations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Q&A sessions and problem-solving discussions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Networking with local beekeepers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Equipment demonstrations and tips
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
