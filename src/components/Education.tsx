import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    type: "Diploma",
    title: "European Diploma in Intensive Care (EDIC)",
    institution: "European Society of Intensive Care Medicine (ESICM)",
    year: "2025",
    icon: Award,
  },
  {
    type: "Post-Doctoral Fellowship",
    title: "Critical Care Medicine",
    institution: "Christian Medical College (CMC), Vellore",
    year: "2018 – 2020",
    icon: BookOpen,
  },
  {
    type: "Postgraduate Degree",
    title: "MD – General Medicine",
    institution: "SMS Medical College, Jaipur",
    year: "2014 – 2017",
    icon: GraduationCap,
  },
  {
    type: "Diplomate",
    title: "DNB – General Medicine",
    institution: "National Board of Examinations (NBE), India",
    year: "2019",
    icon: GraduationCap,
  },
  {
    type: "Medical Degree",
    title: "MBBS",
    institution: "B.J. Medical College, Ahmedabad",
    year: "2007 – 2013",
    icon: GraduationCap,
  },
];

const certifications = [
  "MRCP (UK) – Part 1 & Part 2 Completed",
  "Post Doctoral Fellowship in Critical Care Medicine (PDFCCM)",
  "Indian Diploma in Critical Care Medicine (IDCCM)",
  "Instructor – Indian Resuscitation Council (IRC)",
  "Gujarat Medical Council – G-49512, G-25719",
  "Rajasthan Medical Council – 39451",
  "Tamil Nadu Medical Council – 132960",
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Education & Qualifications</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Structured training in internal medicine and critical care from
          leading academic institutions in India and Europe.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education & Training
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="card-medical">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {item.type}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications & Registrations
            </h3>
            <div className="card-medical">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
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

export default Education;
