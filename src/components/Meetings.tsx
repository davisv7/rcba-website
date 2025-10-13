import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Meetings = () => {
  return (
    <section id="meetings" className="py-24 bg-background">
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
                    Third Tuesday of every month (except December)
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
                    6:00 PM - 7:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground mb-3">
                    Rutherford County Extension Office<br />
                    193 Callahan Koon Rd, Spindale, NC 28160
                  </p>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8!2d-81.9314!3d35.3581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850f3e5c9d5e5e5%3A0x1234567890!2s193%20Callahan%20Koon%20Rd%2C%20Spindale%2C%20NC%2028160!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Meeting Location Map"
                    />
                  </div>
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
