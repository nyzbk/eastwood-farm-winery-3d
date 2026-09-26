import React from 'react';
import { AWARD_WINNING_WINES } from '../data/winery';
import type { WineItem } from '../data/winery';
import { Award, Wine, Sparkles, Check } from 'lucide-react';

interface WineCollectionSectionProps {
  onOpenBooking: (type?: string) => void;
}

export const WineCollectionSection: React.FC<WineCollectionSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="vintages" className="py-24 bg-stone-900/40 border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Cellar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Governor&apos;s Cup Gold Medal Vintages
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Crafted with passion, restraint, and deep respect for Albemarle County terroir. Each vintage reflects our dedication to sustainable viticulture.
          </p>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARD_WINNING_WINES.map((wine: WineItem) => (
            <div
              key={wine.id}
              className="rounded-2xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-600/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-amber-500 font-medium mb-3">
                  <span>{wine.vintage}</span>
                  <span className="text-stone-300 font-serif text-base">{wine.price}</span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Wine className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg text-white font-medium group-hover:text-amber-300 transition-colors">
                  {wine.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1 italic">{wine.varietal}</p>

                <div className="mt-3 inline-block px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-semibold tracking-wide">
                  {wine.award}
                </div>

                <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                  {wine.description}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-800/80 space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                    Tasting Profile:
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {wine.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-300"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <button
                  onClick={() => onOpenBooking(`Wine Acquisition: ${wine.name}`)}
                  className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-stone-950 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Acquire Vintage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wine Club Callout */}
        <div id="club" className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-600/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Eastwood Wine & Cider Club</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Join Our Family of Wine & Cider Aficionados
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Receive quarterly hand-selected shipments of limited production reserve wines, complimentary tasting flights for you and three guests at both locations, and exclusive invitations to winemaker harvest dinners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>20% Savings on All Wine, Cider & Beer</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Complimentary Flights at Farm & Downtown</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>First Access to Library & Gold Vintages</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Private Member Lounge & Harvest Parties</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking('Wine Club Membership Inquiry')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-xl transition-all text-center"
            >
              Join The Wine Club
            </button>
            <p className="text-center text-[11px] text-stone-400">
              No fee to join · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
