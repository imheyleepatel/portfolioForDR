"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

type Review = {
  Name: string;
  Review: string;
  Stars: string;
};

const SHEET_ID = "1UGBK79-TVd0Ii4DsygIn0B0cldqLvwKSW5x3cqS1LlM";
const API_URL = `https://opensheet.elk.sh/${SHEET_ID}/Reviews`;

const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?sca_esv=a370d6b80d2c0c5a&sxsrf=ANbL-n7Mwnm7OwwDDMbbzi0uQ20mEqn0lw:1771423723492&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOW5WCExbdFzuQcsDDd0DCnDgPHY16dEwN66x8QaU_EQZ6LiDNvrdyPYcdZvZCzau49DtkmL72x7LQB34yk7yaDUKnoIfD-kvGja3tTQ4LTmi8g-UUbCZxvCRULEKVmIKokwx4TOevagoVSmovrBzCGWQhGhEF-KGw0gR3HdNA2qV9Nrp_R_KoK35nrBREcTZmMAUBu-FYlGUWZZyfxf5q4zlc8UX&q=Dr+Shivang+Patel+%28CMC+Vellore%29+%7C+Best+ICU+specialist+%7C+Critical+Care+Specialist+%7C+Intensivist+%7C+Physician+Reviews&sa=X&ved=2ahUKEwjJ_KPOm-OSAxUekq8BHaevBC8Q0bkNegQIPhAF";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const startSlider = () => {
    if (intervalRef.current || reviews.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [reviews]);

  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="container-narrow">

        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Patient Reviews
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Experiences shared by patients and their families.
          </p>

          <div className="mt-6">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Write a Review on Google
            </a>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative bg-white border border-muted rounded-2xl h-[260px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <p className="text-sm font-medium text-foreground">
                      {review.Name}
                    </p>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-5 mb-6">
                      {review.Review}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(Number(review.Stars))].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
