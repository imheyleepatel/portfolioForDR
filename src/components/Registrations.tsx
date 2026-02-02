import { ShieldCheck, Building2 } from "lucide-react";

const registrations = [
  {
    type: "Medical Registration",
    details: "Gujarat Medical Council – G-49512, G-25719",
  },
  {
    type: "Medical Registration",
    details: "Rajasthan Medical Council – 39451",
  },
  {
    type: "Medical Registration",
    details: "Tamil Nadu Medical Council – 132960",
  },
];

const memberships = [
  "Indian Medical Association (IMA) – GUJ/20344/1/6144/191826/2014-15/L",
  "European Society of Intensive Care Medicine (ESICM)",
  "Indian Resuscitation Council (IRC)",
];

const Registrations = () => {
  return (
    <section id="registrations" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Registrations & Memberships</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Active medical registrations and professional society memberships.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registrations */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Medical Registrations
            </h3>
            <div className="card-medical">
              <ul className="space-y-4">
                {registrations.map((reg, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {reg.type}
                      </span>
                      <p className="text-foreground text-sm">{reg.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Memberships */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Professional Memberships
            </h3>
            <div className="card-medical">
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registrations;
