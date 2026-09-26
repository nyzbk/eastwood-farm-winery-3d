import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { ExperiencesSection } from './components/ExperiencesSection';
import { WineCollectionSection } from './components/WineCollectionSection';
import { WeddingsSection } from './components/WeddingsSection';
import { LocationsMapSection } from './components/LocationsMapSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('Table & Tasting Reservation');

  const handleOpenBooking = (experienceTitle?: string) => {
    if (experienceTitle) {
      setSelectedExperience(experienceTitle);
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1D1714] text-[#F9F6F0] font-['Outfit'] selection:bg-[#B3583E] selection:text-white">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        
        {/* Bespoke Terroir & Vintage Tasting Matcher Widget */}
        <SignatureWidget onOpenBooking={handleOpenBooking} />

        <ExperiencesSection onOpenBooking={handleOpenBooking} />
        <WineCollectionSection onOpenBooking={handleOpenBooking} />
        <WeddingsSection onOpenBooking={handleOpenBooking} />
        <LocationsMapSection />
      </main>

      <Footer />

      <ReservationModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialType={selectedExperience}
      />
    </div>
  );
};

export default App;
