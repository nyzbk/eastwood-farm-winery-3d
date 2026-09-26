import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Table & Tasting Reservation'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: initialType,
    date: '',
    guests: '2 Guests',
    location: 'Eastwood Farm & Winery (Scottsville Rd)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Inquiry Received</h3>
            <p className="mt-3 text-stone-300 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name || 'guest'}. Our estate hospitality team will be in touch shortly to confirm your booking for <span className="text-amber-400 font-medium">{formData.type}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-amber-600 text-stone-950 font-semibold text-xs tracking-wider uppercase hover:bg-amber-500 transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Eastwood Hospitality</span>
            </div>
            <h3 className="text-2xl font-serif text-white">Reserve Your Eastwood Experience</h3>
            <p className="text-stone-400 text-xs mt-1 mb-6">
              Tasting reservations, private celebrations, and mountaintop wedding consultations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Katherine & Julian"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(434) 264-6727"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Experience Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Table & Tasting Reservation">Table & Tasting Reservation</option>
                    <option value="Mountaintop Sunset Tasting">Mountaintop Sunset Tasting</option>
                    <option value="Wedding & Event Inquiry">Wedding & Private Event Tour</option>
                    <option value="Winery Cottage Stay Inquiry">Winery Cottage Stay Inquiry</option>
                    <option value="Wine Club Membership Inquiry">Wine Club Inquiries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Eastwood Farm & Winery (Scottsville Rd)">Eastwood Farm (2531 Scottsville Rd)</option>
                    <option value="Virginia Wine Collective (Downtown)">Virginia Wine Collective (Downtown Mall)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-6 Guests">3-6 Guests</option>
                    <option value="7-12 Guests">7-12 Guests</option>
                    <option value="15-50 Guests (Private Event)">15-50 Guests (Private Event)</option>
                    <option value="50-200 Guests (Wedding / Gala)">50-200 Guests (Wedding / Gala)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-amber-950/40 transition-all"
                >
                  Send Reservation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
