import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Testimonials
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-16 text-lg">
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {dummyTestimonial.map((item, index) => (
            <div
              key={index}
              className="text-sm text-left border border-gray-200 
              shadow-lg rounded-xl bg-white w-full max-w-85 overflow-hidden"
            >
              {/* Header: Profile Info (Greyish background) */}
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h1>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Body: Stars & Feedback */}
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {/* Fixed the Star Rendering Logic */}
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="h-4 w-4"
                      src={
                        i < Math.floor(item.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{item.feedback}"
                </p>

                <p className="text-blue-600 font-medium mt-4 cursor-pointer hover:underline text-xs">
                  Read more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
