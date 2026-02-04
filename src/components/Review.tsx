import { Star } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  comment: string;
  role?: string;
};

const reviews: Review[] = [
  {
    name: "Rakesh Patel",
    role: "ICU Patient Family",
    rating: 5,
    comment:
      "Dr. Shivang Patel provided exceptional critical care support during a very difficult time. His calm approach and clear communication gave us confidence and comfort.",
  },
  {
    name: "Neha Shah",
    role: "Patient",
    rating: 5,
    comment:
      "Extremely knowledgeable and compassionate doctor. Explained everything clearly and ensured the best treatment plan.",
  },
  {
    name: "Dr. Amit Mehta",
    role: "Medical Colleague",
    rating: 5,
    comment:
      "Highly skilled intensivist with strong clinical judgment and leadership in ICU management. A pleasure to work with.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-narrow">

        <h2 className="text-center mb-4">Patient & Professional Reviews</h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Feedback from patients, families, and medical professionals reflecting
          commitment to compassionate and high-quality critical care.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((review, index) => (
            <div key={index} className="card-medical">

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm leading-relaxed mb-4">
                "{review.comment}"
              </p>

              {/* Name */}
              <div>
                <p className="font-semibold">{review.name}</p>
                {review.role && (
                  <p className="text-xs text-muted-foreground">
                    {review.role}
                  </p>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;
