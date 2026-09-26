import React from 'react';
import { Star, Heart, Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';

interface WeddingsSectionProps {
  onOpenBooking: (type?: string) => void;
}

export const WeddingsSection: React.FC<WeddingsSectionProps> = ({ onOpenBooking }) => {
  const weddingReviews = [
    {
      quote: "Eastwood gave us the wedding of our dreams. The mountaintop ceremony view took everyone's breath away, and Emma went above and beyond from day one to make the entire day seamless.",
      author: "Brianna & Taylor M.",
      source: "WeddingWire · 5.0 of 5.0"
    },
    {
      quote: "Our guests cannot stop talking about the food, the Blanc de Blancs sparkling wine, and watching the sunset behind the Blue Ridge from the veranda. Best decision we ever made!",
      author: "Caroline & Devin K.",
      source: "The Knot · 5.0 of 5.0"
    },
    {
      quote: "Emma and the entire Eastwood staff are incredible. Having the Winery Cottage on-site for getting ready made our wedding morning completely stress-free.",
      author: "Stephanie & Marcus R.",
      source: "Google Verified Review · 5.0 of 5.0"
    }
  ];

  return (
    <section id="weddings" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left text column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Blue Ridge Mountain Nuptials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
            Say &ldquo;I Do&rdquo; Above the Clouds
          </h2>

          <p className="text-stone-300 text-base leading-relaxed">
            Perched atop our private mountain ridge with panoramic vistas of Carter&apos;s Mountain and the rolling Virginia countryside, Eastwood offers an intimate, unforgettable setting for your celebration.
          </p>

          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800">
              <p className="text-2xl font-serif font-bold text-amber-400">5.0 / 5.0</p>
              <div className="flex items-center gap-1 mt-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500" />
                ))}
              </div>
              <p className="text-[11px] text-stone-400 mt-1">WeddingWire & The Knot</p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800">
              <p className="text-2xl font-serif font-bold text-amber-400">From $8k</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-300 mt-1 font-medium">Bespoke Packages</p>
              <p className="text-[11px] text-stone-400 mt-0.5">Customized to your vision</p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Dedicated event coordination led by Emma and our senior bridal concierge</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Full weekend access with on-site Winery Cottage bridal suite</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Accommodates intimate gatherings of 50 to grand celebrations of 200</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Wedding & Event Inquiry')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-950/40 transition-all flex items-center gap-2"
            >
              <span>Schedule Private Venue Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right column: Reviews & Photo Cards */}
        <div className="lg:col-span-6 space-y-4">
          {weddingReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800/80 hover:border-amber-700/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-[11px] text-amber-400 font-medium">{rev.source}</span>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>

              <p className="mt-3 text-xs font-serif text-white font-medium">
                — {rev.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
