"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=47",
    quote: "Very smooth experience. I booked an airport transfer and everything was on time. The driver was professional and the communication on WhatsApp made it really easy.",
    quoteAr: "تجربة سلسة جداً. حجزت نقل مطار وكان كل شيء في الموعد المحدد. السائق كان محترفاً والتواصل عبر واتساب جعل الأمر سهلاً جداً.",
  },
  {
    name: "Daniel R.",
    location: "Australia",
    avatar: "https://i.pravatar.cc/96?img=12",
    quote: "I used this service for a full day trip across North Lebanon. The driver knew all the best spots and made the whole experience stress-free. Highly recommended.",
    quoteAr: "استخدمت هذه الخدمة لرحلة يوم كامل في شمال لبنان. السائق كان يعرف أفضل الأماكن وجعل التجربة بأكملها خالية من التوتر. أنصح به بشدة.",
  },
  {
    name: "Karim H.",
    location: "Tripoli",
    avatar: "https://i.pravatar.cc/96?img=57",
    quote: "I've used this taxi service multiple times now for intercity rides. Always reliable, fair pricing, and quick responses. It's my go-to option in Lebanon.",
    quoteAr: "استخدمت خدمة التاكسي هذه عدة مرات للرحلات بين المدن. دائماً موثوق، أسعار عادلة، وردود سريعة. هو خياري الأول في لبنان.",
  },
  {
    name: "Lina A.",
    location: "Batroun",
    avatar: "https://i.pravatar.cc/96?img=44",
    quote: "Super easy to book through WhatsApp. I got a quick reply and the pickup was exactly as agreed. Everything was clear and professional.",
    quoteAr: "سهل جداً الحجز عبر واتساب. حصلت على رد سريع والاستلام كان كما تم الاتفاق عليه. كل شيء كان واضحاً ومهنياً.",
  },
  {
    name: "Omar K.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=53",
    quote: "I needed a ride late at night and wasn't sure what to expect, but everything went perfectly. Quick response and safe, comfortable trip.",
    quoteAr: "احتجت إلى رحلة في وقت متأخر من الليل ولم أكن متأكداً مما أتوقعه، لكن كل شيء سار بشكل مثالي. رد سريع ورحلة آمنة ومريحة.",
  },
  {
    name: "Nadine S.",
    location: "Jounieh",
    avatar: "https://i.pravatar.cc/96?img=45",
    quote: "The price was exactly within the estimate I got before booking, which I really appreciated. No surprises, just a smooth ride.",
    quoteAr: "كان السعر ضمن التقدير الذي حصلت عليه قبل الحجز، وهذا ما أقدرته كثيراً. بلا مفاجآت، فقط رحلة سلسة.",
  },
  {
    name: "Alex T.",
    location: "UK",
    avatar: "https://i.pravatar.cc/96?img=8",
    quote: "First time in Lebanon and this made getting around so much easier. Clear communication, friendly service, and very professional overall.",
    quoteAr: "المرة الأولى في لبنان وهذا جعل التنقل أسهل بكثير. تواصل واضح، خدمة ودية، ومهنية جداً.",
  },
  {
    name: "Lina R.",
    location: "Byblos",
    avatar: "https://i.pravatar.cc/96?img=49",
    quote: "The car was clean, the ride was smooth, and everything felt very professional. Would definitely use again.",
    quoteAr: "السيارة كانت نظيفة، الرحلة كانت سلسة، وكل شيء شعر بأنه احترافي. سأستخدمه مجدداً بالتأكيد.",
  },
  {
    name: "Emma W.",
    location: "Germany",
    avatar: "https://i.pravatar.cc/96?img=33",
    quote: "As a visitor, it can be hard to find reliable transport, but this service made everything simple and stress-free.",
    quoteAr: "كزائرة، يمكن أن يكون من الصعب إيجاد وسيلة نقل موثوقة، لكن هذه الخدمة جعلت كل شيء بسيطاً وخالياً من التوتر.",
  },
  {
    name: "Samir A.",
    location: "Tripoli",
    avatar: "https://i.pravatar.cc/96?img=58",
    quote: "I had an early morning pickup and everything went exactly as planned. On time and very organized.",
    quoteAr: "كان لدي استلام في الصباح الباكر وكل شيء سار كما تم التخطيط له. في الوقت المحدد ومنظم جداً.",
  },
  {
    name: "Fadi N.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=61",
    quote: "Plans changed slightly and it was handled without any issues. Very flexible and easy to deal with.",
    quoteAr: "تغيرت الخطط قليلاً وتم التعامل معها دون أي مشاكل. مرن جداً وسهل التعامل.",
  },
  {
    name: "Hala M.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=5",
    quote: "Communication was very clear from the beginning. I knew exactly what to expect and everything went as planned.",
    quoteAr: "التواصل كان واضحاً جداً من البداية. علمت بالضبط ما يمكن توقعه وكل شيء سار كما تم التخطيط.",
  },
  {
    name: "Mark D.",
    location: "UK",
    avatar: "https://i.pravatar.cc/96?img=3",
    quote: "Made traveling between cities much easier than expected. No stress, everything was handled smoothly.",
    quoteAr: "جعل السفر بين المدن أسهل مما توقعت. بلا توتر، كل شيء تم بسلاسة.",
  },
  {
    name: "Ziad K.",
    location: "Tripoli",
    avatar: "https://i.pravatar.cc/96?img=59",
    quote: "Booked on short notice and still got a quick response. Everything worked out perfectly.",
    quoteAr: "حجزت في اللحظة الأخيرة وحصلت على رد سريع. كل شيء سار بشكل مثالي.",
  },
  {
    name: "Nour A.",
    location: "Batroun",
    avatar: "https://i.pravatar.cc/96?img=20",
    quote: "Used the service more than once and the experience has been consistent every time. Very reliable.",
    quoteAr: "استخدمت الخدمة أكثر من مرة والتجربة كانت متسقة في كل مرة. موثوق جداً.",
  },
  {
    name: "Elias S.",
    location: "Byblos",
    avatar: "https://i.pravatar.cc/96?img=62",
    quote: "Very comfortable ride and a smooth trip overall. Everything felt organized and professional.",
    quoteAr: "رحلة مريحة جداً وسلسة بشكل عام. كل شيء شعر بأنه منظم ومهني.",
  },
  {
    name: "Jad T.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=64",
    quote: "Everything was handled professionally from the first message to the end of the ride.",
    quoteAr: "كل شيء تم التعامل معه باحترافية من أول رسالة حتى نهاية الرحلة.",
  },
  {
    name: "Carla M.",
    location: "France",
    avatar: "https://i.pravatar.cc/96?img=27",
    quote: "Perfect for airport trips. Arrived on time and everything was well coordinated.",
    quoteAr: "مثالي لرحلات المطار. وصل في الوقت المحدد وكل شيء كان منسقاً جيداً.",
  },
  {
    name: "Bilal N.",
    location: "Tripoli",
    avatar: "https://i.pravatar.cc/96?img=65",
    quote: "The whole process is simple and efficient. No unnecessary steps, just clear communication.",
    quoteAr: "العملية بأكملها بسيطة وفعالة. لا خطوات غير ضرورية، فقط تواصل واضح.",
  },
  {
    name: "Hiba S.",
    location: "Saida",
    avatar: "https://i.pravatar.cc/96?img=43",
    quote: "Timing adjustments were handled easily. Very flexible and accommodating service.",
    quoteAr: "تعديلات التوقيت تمت بسهولة. خدمة مرنة ومتجاوبة جداً.",
  },
  {
    name: "Lucas P.",
    location: "Netherlands",
    avatar: "https://i.pravatar.cc/96?img=18",
    quote: "As a visitor, I felt comfortable using this service. Everything was straightforward and trustworthy.",
    quoteAr: "كزائر، شعرت بالراحة عند استخدام هذه الخدمة. كل شيء كان واضحاً وجديراً بالثقة.",
  },
  {
    name: "George R.",
    location: "Beirut",
    avatar: "https://i.pravatar.cc/96?img=66",
    quote: "Took a longer intercity trip and everything went smoothly from start to finish.",
    quoteAr: "قمت برحلة طويلة بين المدن وكل شيء سار بسلاسة من البداية حتى النهاية.",
  },
  {
    name: "Dana K.",
    location: "Jounieh",
    avatar: "https://i.pravatar.cc/96?img=26",
    quote: "Very fast replies and clear answers. Made planning the trip much easier.",
    quoteAr: "ردود سريعة جداً وإجابات واضحة. جعل التخطيط للرحلة أسهل بكثير.",
  },
  {
    name: "Samer L.",
    location: "Tripoli",
    avatar: "https://i.pravatar.cc/96?img=67",
    quote: "Everything felt organized and well managed. No confusion at any point.",
    quoteAr: "كل شيء شعر بأنه منظم وُيدار بشكل جيد. لا لبس في أي نقطة.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-amber-400">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const { t, isArabic } = useLanguage();

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {t.testimonialsLabel}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {t.testimonialsTitle}
        </h2>
      </div>

      <div className="-mx-4 px-4 sm:-mx-6 sm:px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="snap-start shrink-0 w-[80vw] max-w-[19rem] sm:w-72 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-4"
            >
              <Stars />
              <p className="flex-1 text-sm leading-6 text-slate-600">
                &ldquo;{isArabic ? testimonial.quoteAr : testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
