import React from 'react';
import { Wine, MapPin, Phone, Mail, Clock, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#080706] border-t border-stone-800/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-stone-800/70">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Wine className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] uppercase font-semibold text-white">
                  Eastwood
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-500 uppercase -mt-0.5 font-medium">
                  Farm & Winery
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Women-owned family winery perched in Charlottesville, Virginia. Four-time Governor&apos;s Cup Gold Medal winner, on-site brewery, and premier Blue Ridge wedding venue.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-rose-300">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
              <span>Proudly Women-Owned & Family Operated</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              The Estate & Offerings
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  The Mountaintop Overlook
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  The Barn & Veranda Dining
                </a>
              </li>
              <li>
                <a href="#vintages" className="hover:text-amber-400 transition-colors">
                  Governor&apos;s Cup Gold Wines
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-amber-400 transition-colors">
                  Bespoke Mountain Weddings
                </a>
              </li>
              <li>
                <a href="#club" className="hover:text-amber-400 transition-colors">
                  Wine & Cider Club
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Winery Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">The Farm (Scottsville Rd)</p>
                  <p className="text-stone-400">Wed - Fri: 12:00 PM - 7:00 PM</p>
                  <p className="text-stone-400">Sat: 11:00 AM - 8:00 PM</p>
                  <p className="text-stone-400">Sun: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">Virginia Wine Collective</p>
                  <p className="text-stone-400">Wed - Sun: Open Afternoon & Evenings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>2531 Scottsville Road, Charlottesville, VA 22902</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:4342646727" className="hover:text-amber-400 transition-colors">
                  (434) 264-6727
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="mailto:info@eastwoodfarmandwinery.com" className="hover:text-amber-400 transition-colors">
                  info@eastwoodfarmandwinery.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Eastwood Farm and Winery. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#experiences" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#experiences" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Terms of Service</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
