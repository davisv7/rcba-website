import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Home, Mail, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Spring 2026 Beekeeping School
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Join us for our comprehensive beekeeping school and learn everything you need to become a certified beekeeper.
            </p>

            <a href="/2026_Bee_School_Registration_Form.docx" download>
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Download className="h-6 w-6" />
                Download Registration Form
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* How to Register Card */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">How to Register</CardTitle>
              <CardDescription>Follow these simple steps to secure your spot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-foreground">Download and fill out the registration form completely and clearly.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="text-foreground mb-2">Submit your form in one of two ways:</p>
                  <div className="ml-6 space-y-2">
                    <p className="text-muted-foreground">
                      <strong>By Mail:</strong> Send completed form with check to Rutherford County Beekeepers Association (RCBA)<br />
                      <strong className="text-foreground">RCBA / 459 Railroad Ave. Rutherfordton, NC 28139</strong>
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By Email:</strong> Scan and send to{" "}
                      <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="text-primary hover:underline">
                        rutherfordcountyncbeekeepers@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-foreground">Upon receipt, we will contact you with further instructions.</p>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong className="block mb-1">About Pre-Registration</strong>
                If you submit without payment, you will be pre-registered. With limited seats, PAID registrations take priority. We'll keep you updated if the class is filling up.
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong className="block mb-1">Refund Policy</strong>
                Registration fees are refundable up to 7 days before the school starts.
              </AlertDescription>
            </Alert>
          </div>

          {/* Contact Information */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Questions?</CardTitle>
              <CardDescription>We're here to help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:rutherfordcountyncbeekeepers@gmail.com" className="hover:text-primary transition-colors">
                  rutherfordcountyncbeekeepers@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:864-921-7032" className="hover:text-primary transition-colors">
                  864-921-7032
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BeeSchool;
