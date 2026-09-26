import React, { useState } from 'react';
import { Wine, ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [flightType, setFlightType] = useState<'governor' | 'artisan-cider' | 'red-reserve'>('governor');
  const [seating, setSeating] = useState<'hearth' | 'sunset-lawn' | 'barrel-room'>('sunset-lawn');

  const flights = {
    'governor': {
      title: "Governor's Cup Gold Flight",
      wines: ['2023 Viognier Reserve (Top Virginia White)', 'Estate Rosé of Cabernet Franc', '2022 Meritage Proprietary Blend', 'Carters Mountain Apple Wine'],
      price: '$28 per guest'
    },
    'artisan-cider': {
      title: "Artisanal Orchard & Craft Flight",
      wines: ['Blackberry Orchard Crisp Cider', 'Heritage Pippin Dry Cider', 'Mountain Hops Hard Cider', 'Barrel-Aged Spiced Winter Cider'],
      price: '$22 per guest'
    },
    'red-reserve': {
      title: "Blue Ridge Red Cellar Reserve",
      wines: ['2021 Cabernet Sauvignon Reserve', 'Old Oak Petit Verdot', '2022 Mountain Franc', 'Estate Port-Style Fortified'],
      price: '$34 per guest'
    }
  };

  const activeFlight = flights[flightType];

  return (
    <section id="flight-selector" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#1D1714] text-[#F7F3EB] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-['Outfit'] uppercase tracking-widest text-[#E09F3E] block mb-3 font-medium">
            Blue Ridge Mountains Terroir
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Newsreader'] font-normal text-[#F7F3EB] tracking-tight">
            Terroir Harvest & Sunset Flight Selector
          </h2>
          <p className="mt-4 text-[#9E978E] text-sm sm:text-base max-w-2xl mx-auto font-['Outfit'] font-light">
            Plan your mountaintop afternoon just 5 miles from Charlottesville. Pair award-winning Virginia vintages with breathtaking panoramic ridge views.
          </p>
        </div>

        <div className="bg-[#1D1714] rounded-2xl p-6 sm:p-12 border border-[#E09F3E]/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Flight Selection */}
              <div>
                <label className="block text-xs font-semibold font-['Outfit'] uppercase tracking-wider text-[#E09F3E] mb-3">
                  1. Select Tasting Flight
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'governor', name: "Governor's Cup Gold" },
                    { id: 'artisan-cider', name: 'Estate Cider Flight' },
                    { id: 'red-reserve', name: 'Cellar Red Reserve' }
                  ].map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFlightType(f.id as any)}
                      className={`p-3.5 rounded-xl text-xs font-['Outfit'] font-medium transition-all text-left ${
                        flightType === f.id
                          ? 'bg-[#5E192B] text-white border border-[#E09F3E]/50 shadow-md'
                          : 'bg-black/30 text-[#9E978E] border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Zone */}
              <div>
                <label className="block text-xs font-semibold font-['Outfit'] uppercase tracking-wider text-[#E09F3E] mb-3">
                  2. Mountaintop Atmosphere Zone
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'sunset-lawn', name: 'Hilltop Sunset Lawn' },
                    { id: 'hearth', name: 'Stone Fireplace Veranda' },
                    { id: 'barrel-room', name: 'Historic Barrel Cellar' }
                  ].map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSeating(s.id as any)}
                      className={`p-3.5 rounded-xl text-xs font-['Outfit'] font-medium transition-all text-left ${
                        seating === s.id
                          ? 'bg-[#B3583E] text-white shadow-md'
                          : 'bg-black/30 text-[#9E978E] border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Flight Summary Card */}
            <div className="bg-[#5E192B]/20 p-6 rounded-xl border border-[#E09F3E]/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-['Outfit'] uppercase tracking-widest text-[#E09F3E] block mb-1">
                  Selected Experience
                </span>
                <h3 className="font-['Newsreader'] text-xl text-[#F7F3EB] font-normal mb-1">{activeFlight.title}</h3>
                <p className="text-xs font-mono text-[#E09F3E] mb-4">{activeFlight.price}</p>

                <div className="space-y-2 mb-6">
                  {activeFlight.wines.map(w => (
                    <div key={w} className="flex items-center gap-2 text-xs text-[#9E978E]">
                      <Wine className="w-3.5 h-3.5 text-[#E09F3E] shrink-0" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#E09F3E] text-[#1D1714] font-['Outfit'] font-semibold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-300 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Reserve Vineyard Tasting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
