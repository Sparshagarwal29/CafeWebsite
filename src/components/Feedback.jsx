import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Shatashi Thakur",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "I dropped by to have a cappuccino and honestly, after 30 days here we did not have high expectations, but if this cappuccino was served, I would be just as satisfied! Great place with perfectly normal prices that I recommend!"
  },
  {
    id: 2,
    name: "Sparsh Agarwal",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "I've been ordering beans from you for ten years. The quality of the product is consistently high! I'm grateful for the care that is apparently put into the roasts and the excellent customer service. Your beans give way to the best cups of coffee."
  },
  {
    id: 3,
    name: "Kavya Singh",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "I've been ordering beans from you for ten years. The quality of the product is consistently high! I'm grateful for the care that is apparently put into the roasts and the excellent customer service. Your beans give way to the best cups of coffee."
  },
  {
    id: 4,
    name: "Ravi Mehta",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=59",
    text: "The filter coffee here reminds me of home. Perfectly brewed with just the right chicory ratio. This is the kind of place you visit once and never stop coming back to."
  }
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map(star => (
      <span key={star} className={`text-base ${star <= rating ? 'text-[#D4A017]' : 'text-gray-300'}`}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isActive }) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4 transition-all duration-300 w-[300px] flex-shrink-0
      ${isActive ? 'scale-105 shadow-xl ring-2 ring-[#6F4E37]/30' : 'opacity-80'}`}
  >
    <div className="flex items-center gap-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E3E0D7]"
      />
      <div>
        <p className="font-bold text-[#2C1810] text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-400">{testimonial.role}</p>
      </div>
      <div className="ml-auto">
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{testimonial.text}</p>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const visibleTestimonials = [
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <section className="bg-[#F5F1EA] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="font-serif italic text-[#6F4E37] text-lg mb-1">Come and join</p>
        <h2 className="text-2xl font-bold tracking-widest text-[#2C1810] uppercase">
          Our Happy Customers
        </h2>
      </div>

      {/* Cards Row */}
      <div className="flex justify-center items-center gap-5 overflow-hidden">
        {visibleTestimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            isActive={i === 1}
          />
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
              ${activeIndex === i ? 'bg-[#2C1810] w-6' : 'bg-[#C4B5A0]'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;