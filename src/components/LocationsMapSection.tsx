import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, CheckCircle } from 'lucide-react';

export const LocationsMapSection: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<'farm' | 'downtown'>('farm');

  const locations = {
    farm: {
      name: 'Eastwood Farm & Winery (Estate Grounds)',
      address: '2531 Scottsville Road, Charlottesville, VA 22902',
      phone: '(434) 264-6727',
      distance: 'Just 5 miles south of Downtown Charlottesville',
      hours: [
        'Wednesday – Friday: 12:00 PM – 7:00 PM',
        'Saturday: 11:00 AM – 8:00 PM (Live Music & Sunset)',
        'Sunday: 11:00 AM – 6:00 PM',
        'Monday & Tuesday: Available for Private Events & Weddings'
      ],
      features: [
        'The Barn & Covered Dining Veranda',
        'Mountaintop Sunset Overlook',
        'Wood-Fired Hearth Kitchen & Seasonal Pairings',
        'On-Site Craft Brewery & Cider House',
        'Dog-Friendly Outdoor Grounds & Fire Pits'
      ],
      mapUrl: 'https://maps.google.com/?q=2531+Scottsville+Road+Charlottesville+VA+22902'
    },
    downtown: {
      name: 'Virginia Wine Collective (Downtown)',
      address: '108 2nd St SW, Charlottesville, VA 22902',
      phone: '(434) 264-6727',
      distance: 'In the heart of Historic Downtown Charlottesville',
      hours: [
        'Wednesday – Thursday: 2:00 PM – 8:00 PM',
        'Friday: 1:00 PM – 9:00 PM',
        'Saturday: 12:00 PM – 9:00 PM',
        'Sunday: 12:00 PM – 6:00 PM'
      ],
      features: [
        'Curated Tasting Flights of Eastwood & VA Winemakers',
        'Express Wine Club Allocation Pick-Up',
        'Walkable to Downtown Historic Mall & Restaurants',
        'Charcuterie & Small Plate Pairings'
      ],
      mapUrl: 'https://maps.google.com/?q=Charlottesville+Historic+Downtown+Mall+VA'
    }
  };

  const current = locations[activeLoc];

  return (
    <section id="locations" className="py-24 bg-stone-900/30 border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mt-3">
            Two Welcoming Locations, Three Miles Apart
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base">
            Whether you seek a sunset mountaintop retreat or an afternoon tasting in the city center, we look forward to welcoming you.
          </p>

          {/* Toggle buttons */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-950 border border-stone-800 mt-8">
            <button
              onClick={() => setActiveLoc('farm')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeLoc === 'farm'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              The Farm & Mountaintop
            </button>
            <button
              onClick={() => setActiveLoc('downtown')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeLoc === 'downtown'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Virginia Wine Collective (City)
            </button>
          </div>
        </div>

        {/* Location Details Card */}
        <div className="rounded-2xl bg-stone-900/90 border border-stone-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>{current.distance}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              {current.name}
            </h3>
            <p className="text-stone-300 text-sm mt-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{current.address}</span>
            </p>
            <p className="text-stone-300 text-sm mt-1.5 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`tel:${current.phone.replace(/[^0-9]/g, '')}`} className="hover:text-amber-400 transition-colors">
                {current.phone}
              </a>
            </p>

            <div className="mt-8 pt-6 border-t border-stone-800">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {current.hours.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={current.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs tracking-wider uppercase border border-stone-700 hover:border-amber-500 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800/80 space-y-4">
            <h4 className="text-sm font-serif text-white font-medium">
              Destination Amenities & Experiences
            </h4>
            <div className="space-y-3">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-stone-300">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-stone-800/80">
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Reservations are recommended for weekend veranda tables, fire pits, and indoor dining. Walk-ins warmly welcomed across the outdoor lawn and bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
