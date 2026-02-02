const experiences = [
  {
    period: "Jan 2023 – Present",
    role: "Consultant, Critical Care Medicine",
    institution: "Marengo CIMS Hospital",
    location: "Ahmedabad, India",
    description:
      "Consultant intensivist in mixed medical-surgical ICU and CVTS ICU at a 350-bed tertiary care hospital. Actively involved in management of high-acuity medical, surgical, cardiac, and post-operative ICU patients.",
    highlights: [
      "Mixed Medical-Surgical ICU",
      "CVTS ICU",
      "Fellowship Training Program",
    ],
  },
  {
    period: "Sep 2020 – Jan 2023",
    role: "Consultant, Critical Care Medicine",
    institution: "Mansi Multispecialty Hospital",
    location: "Ahmedabad, India",
    description:
      "Managed critically ill medical and post-surgical patients in a 10-bed mixed ICU. Played a key role in ICU care during the COVID-19 pandemic.",
    highlights: [
      "COVID-19 ICU Care",
      "10-bed Mixed ICU",
      "Ventilator Management",
    ],
  },
  {
    period: "Jan 2021 – Oct 2021",
    role: "Consultant, Critical Care Medicine",
    institution: "GCS Medical College, Hospital & Research Centre",
    location: "Ahmedabad, India",
    description:
      "Consultant intensivist in a 1000-bed tertiary care teaching hospital. Managed patients from multiple specialties including cardiology, neurology, nephrology, oncology, and cardiothoracic surgery.",
    highlights: [
      "Teaching Hospital",
      "Medical & Surgical ICU",
      "Multidisciplinary ICU Care",
    ],
  },
  {
    period: "July 2018 – July 2020",
    role: "Post-Doctoral Fellow, Critical Care Medicine",
    institution: "Christian Medical College (CMC), Vellore",
    location: "Tamil Nadu, India",
    description:
      "Comprehensive fellowship training across medical, surgical, neuro, cardiothoracic, pediatric, and trauma ICUs in one of India’s premier academic institutions.",
    highlights: [
      "Medical & Surgical ICU",
      "Neuro & Cardiac ICU",
      "POCUS Training",
    ],
  },
  {
    period: "Aug 2017 – June 2018",
    role: "Freelance ICU Registrar",
    institution: "Creators Anesthesia Associate Pvt. Ltd.",
    location: "Ahmedabad, India",
    description:
      "Worked as registrar in medical ICUs of multiple corporate hospitals, managing critically ill patients under consultant supervision.",
    highlights: [
      "Corporate ICUs",
      "Emergency & ICU Care",
      "Ventilator Management",
    ],
  },
  {
    period: "June 2014 – July 2017",
    role: "Resident Doctor (MD General Medicine)",
    institution: "Sawai Man Singh Medical College & Hospital",
    location: "Jaipur, India",
    description:
      "Postgraduate residency with extensive exposure to OPD, wards, emergency services, and ICU care across multiple medical specialties.",
    highlights: [
      "46-bed ICU",
      "Emergency Medicine",
      "Specialty Rotations",
    ],
  },
];


const Experience = () => {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Professional Experience</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Over 15 years of progressive clinical experience in critical care medicine.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 flex justify-end">
                  <div
                    className={`card-medical max-w-lg w-full ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="inline-block text-sm font-medium text-primary mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-foreground font-medium mb-1">
                      {exp.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Spacer */}
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
