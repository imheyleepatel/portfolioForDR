import { useState } from "react";

import doctor from "@/assets/doctor.png";
import icu from "@/assets/icu.png";
import examing from "@/assets/examing.jpg";
import vital from "@/assets/vital.png";
import graduation from "@/assets/graduation.jpeg";
import conference from "@/assets/conference.jpg";
import monitoring from "@/assets/monitoring.jpeg";

type Slide = {
  img: string;
  label: string;
};

const slides: Slide[] = [
  { img: doctor, label: "Clinical Practice" },
  { img: icu, label: "Procedural Care" },
  { img: vital, label: "Physical Examination" },
  { img: monitoring, label: "Critical Monitoring" },
  { img: graduation, label: "Graduation" },
  { img: conference, label: "Medical Conference" },
  { img: examing, label: "Medical Care" },
];

const About = () => {
  const [activeImage, setActiveImage] = useState<Slide>(slides[0]);

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="mb-8 text-center md:text-left">About</h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">


          {/* TEXT SIDE */}
          <div className="max-w-3xl">
            <p className="text-lg mb-4 leading-relaxed">
              Dr. Shivang Patel, MD, DNB, EDIC is a Consultant Critical Care Physician with over 10 years of clinical experience in managing critically ill patients across high-acuity tertiary care ICU settings.
            He is known for delivering patient-centered, evidence-based critical care in complex ICU environments.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              He completed his Post-Doctoral Fellowship in Critical Care Medicine at Christian Medical College (CMC), Vellore, one of India’s premier academic institutions.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Dr. Patel currently practices as a Consultant Intensivist at Marengo CIMS Hospital, Ahmedabad, with expertise in advanced ventilation, POCUS, and complex ICU care.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              He is actively involved in medical education, protocol-driven ICU management, and quality improvement initiatives.
            </p>
                {/* BADGES */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                10+ Years ICU Experience
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                Advanced Ventilation
              </span>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                POCUS Specialist
              </span>

            </div>
          </div>

          {/* IMAGE SIDE */}
          <div>
            {/* MAIN IMAGE */}
            <div className="relative mb-4">
              <img
                src={activeImage.img}
                alt={activeImage.label}
                className="w-full aspect-[4/5] md:h-[400px] object-cover rounded-2xl shadow-lg"

              />

              <span className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-lg">
                {activeImage.label}
              </span>
            </div>

            {/* SCROLLABLE THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt={slide.label}
                  onClick={() => setActiveImage(slide)}
                  className={`h-16 w-24 md:h-20 md:w-28 min-w-[90px] md:min-w-[110px] object-cover rounded-lg cursor-pointer transition
                    ${
                      activeImage.img === slide.img
                        ? "ring-2 ring-primary"
                        : "hover:opacity-80"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
