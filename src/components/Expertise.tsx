import {
  Activity,
  HeartPulse,
  Stethoscope,
  Syringe,
  Wind,
  Monitor,
  Pill,
  ShieldCheck,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Wind,
    title: "Mechanical Ventilation",
    description:
      "Advanced invasive and non-invasive ventilation, lung-protective strategies, ARDS management, and structured weaning protocols.",
  },
  {
    icon: HeartPulse,
    title: "Hemodynamic Management",
    description:
      "Management of shock states using vasopressors, inotropes, fluid optimization, and invasive hemodynamic monitoring.",
  },
  {
    icon: Activity,
    title: "Sepsis & Multiorgan Failure",
    description:
      "Evidence-based management of sepsis, septic shock, and multisystem organ dysfunction syndrome.",
  },
  {
    icon: Syringe,
    title: "Critical Care Procedures",
    description:
      "Central venous and arterial catheterization, thoracentesis, bronchoscopy assistance, and bedside ICU procedures.",
  },
  {
    icon: Monitor,
    title: "Point-of-Care Ultrasound (POCUS)",
    description:
      "Bedside echocardiography, lung ultrasound, DVT screening, eFAST, and ultrasound-guided vascular access.",
  },
  {
    icon: Stethoscope,
    title: "Pulmonary Critical Care",
    description:
      "Management of ARDS, pneumonia, pulmonary embolism, and acute-on-chronic respiratory failure.",
  },
  {
    icon: Pill,
    title: "Critical Care Pharmacology",
    description:
      "Sedation and analgesia protocols, antimicrobial stewardship, and vasoactive drug management in ICU.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Patient Safety",
    description:
      "Protocol-driven ICU care, infection control practices, and quality improvement initiatives.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Areas of Expertise</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive critical care services focused on evidence-based practice,
          patient safety, and high-acuity ICU management.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="card-medical flex flex-col items-start">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;