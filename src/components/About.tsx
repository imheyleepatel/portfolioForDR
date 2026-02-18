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
    <section id="about" className="py-12 px-4 md:px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-semibold">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* TEXT */}
          <div className="text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              Dr. Shivang Patel is a Consultant Critical Care Physician with over 10 years of clinical experience in managing critically ill patients across high-acuity tertiary care ICU settings.
            </p>

            <p className="mb-4">
              He completed his Post-Doctoral Fellowship in Critical Care Medicine at Christian Medical College (CMC), Vellore.
            </p>

            <p className="mb-4">
              Currently practices as a Consultant Intensivist at Marengo CIMS Hospital, Ahmedabad with expertise in advanced ventilation, POCUS, and complex ICU care.
            </p>

            <p className="mb-6">
              Actively involved in medical education, protocol-driven ICU management, and quality improvement initiatives.
            </p>

            <div className="flex flex-wrap gap-2">
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

          {/* IMAGE */}
          <div>
            <div className="relative mb-3">
              <img
                src={activeImage.img}
                alt={activeImage.label}
                className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover rounded-2xl shadow-md"
              />

              <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs md:text-sm px-3 py-1 rounded-lg">
                {activeImage.label}
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt={slide.label}
                  onClick={() => setActiveImage(slide)}
                  className={`h-14 w-20 sm:h-16 sm:w-24 md:h-20 md:w-28 min-w-[80px] object-cover rounded-lg cursor-pointer transition ${
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
