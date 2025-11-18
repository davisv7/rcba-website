import { Button } from "@/components/ui/button";
import { Download, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BeeSchool = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            RCBA
          </Link>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spring 2026 Beekeeping School
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join us for our comprehensive beekeeping school and learn everything you need to start your own hive.
          </p>

          {/* Download Button */}
          <div className="mb-12">
            <a href="/2026_Bee_School_Registration_Form.docx" download>
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Registration Form
              </Button>
            </a>
          </div>

          {/* Instructions */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Instructions</h2>
            <ul className="space-y-4 text-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Please fill out all the information above as completely and clearly as possible.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  Return the completed form, along with a check made to Rutherford County Beekeepers Association (RCBA) by mail to:{" "}
                  <strong>RCBA / 459 Railroad Ave. Rutherfordton, NC 28139</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Upon receipt of your completed application, we will contact you for further instructions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  You can also scan the completed form and email it to{" "}
                  <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="text-primary hover:underline">
                    rutherfordcountyncbeekeepers@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>ABOUT PRE-REGISTRATION:</strong> If you complete and submit the registration form WITHOUT PAYMENT, you will be pre-registered. 
                  With a limited number of seats available, PAID registrations will take priority over PRE-registrations. 
                  We will stay in communication with you concerning this, to let you know if the class is getting close to filling-up.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>REFUNDS:</strong> If you have to cancel, we will refund registration tuitions up to 7 days before the school starts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  If you have any questions, please contact us at{" "}
                  <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="text-primary hover:underline">
                    rutherfordcountyncbeekeepers@gmail.com
                  </a>{" "}
                  or call <a href="tel:864-921-7032" className="text-primary hover:underline">864-921-7032</a>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  For more information about our group or bee school visit{" "}
                  <a href="https://rutherfordcountybeekeepers.com" className="text-primary hover:underline">
                    rutherfordcountybeekeepers.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BeeSchool;
