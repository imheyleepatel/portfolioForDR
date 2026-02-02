import { BookOpen, Users, FileText } from "lucide-react";

const publications = [
  {
    title:
      "Association of Portal Vein Diameter and Splenic Size with Gastro-Oesophageal Varices in Liver Cirrhosis",
    journal: "IOSR Journal of Dental and Medical Sciences (IOSR-JDMS)",
    year: "2016",
  },
  {
    title:
      "Neurofibromatosis Type 1 with Internal Carotid Artery Dissection and Bilateral Embolic Cerebral Infarcts",
    journal: "RajAPICON, Jodhpur",
    year: "2016",
  },
  {
    title:
      "Rosai-Dorfman Disease with Associated Autoimmune Hypothyroidism: A Rare Case Report",
    journal: "RajAPICON, Jodhpur",
    year: "2016",
  },
  {
    title:
      "Cranio-Cerebral Aspergillosis in an Immunocompetent Patient: A Rare Case",
    journal: "RajAPICON, Jodhpur",
    year: "2016",
  },
  {
    title:
      "Conn’s Syndrome Presenting as Hypokalemic Periodic Paralysis",
    journal: "RajAPICON, Jodhpur",
    year: "2016",
  },
];

const teachingRoles = [
  "Instructor – Indian Resuscitation Council (IRC)",
  "Faculty for Critical Care Fellowship Training Program",
  "Teaching and supervision of residents and fellows in ICU",
  "Bedside teaching in mechanical ventilation and ICU procedures",
];

const researchInterests = [
  "Sepsis and Septic Shock",
  "Mechanical Ventilation & ARDS",
  "Point-of-Care Ultrasound (POCUS)",
  "ICU Quality Improvement",
  "Multisystem Organ Dysfunction",
  "Critical Care Pharmacology",
];

const Academic = () => {
  return (
    <section id="academic" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Academic & Teaching</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Contributions to critical care education, research, and academic
          development through publications and teaching activities.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Publications & Presentations
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="card-medical">
                  <h4 className="font-medium text-foreground mb-2 leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="italic">{pub.journal}</span> • {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Teaching & Education
            </h3>
            <div className="card-medical">
              <ul className="space-y-3">
                {teachingRoles.map((role, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Interests */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
