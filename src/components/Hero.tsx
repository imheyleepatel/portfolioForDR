import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src={doctorPortrait}
                  alt="Dr. Shivang Patel - Critical Care Physician"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -bottom-3 -right-3 w-64 md:w-72 h-80 md:h-96 rounded-lg border-2 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Critical Care Specialist
            </p>
            <h1 className="mb-4 text-balance">
              Dr. Shivang Patel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
              MD, FCCP, FCCM
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Consultant Intensivist specializing in critical care medicine, mechanical ventilation, and complex ICU management.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
