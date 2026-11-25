import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { WhyReviewsMatter } from './components/WhyReviewsMatter';
import { NFCProductShowcase } from './components/NFCProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { IndustriesSection } from './components/IndustriesSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { FeedbackSection } from './components/FeedbackSection';
import { PricingCalculator } from './components/PricingCalculator';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ActionModals, ActiveModalType } from './components/ActionModals';
import { calculatePricing } from './utils/pricing';

export default function App() {
  const [cardQuantity, setCardQuantity] = useState<number>(2);
  const [modal, setModal] = useState<ActiveModalType>(null);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openOrderFromCurrentQuantity = () => {
    setModal({ type: 'order', breakdown: calculatePricing(cardQuantity) });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E68A]/30 selection:text-white">
        <Navbar
          onOpenLogin={() => setModal({ type: 'login' })}
          onOpenOrder={() => scrollTo('#pricing')}
        />

        <main>
          <HeroSection
            onGetCard={() => scrollTo('#pricing')}
            onExploreHowItWorks={() => scrollTo('#how-it-works')}
          />

          <TrustSection />

          <WhyReviewsMatter />

          <NFCProductShowcase onGetCard={() => scrollTo('#pricing')} />

          <HowItWorks />

          <IndustriesSection />

          <DashboardShowcase />

          <FeedbackSection />

          <PricingCalculator
            quantity={cardQuantity}
            onQuantityChange={setCardQuantity}
            onOrderCards={(breakdown) => setModal({ type: 'order', breakdown })}
          />

          <FAQ />

          <FinalCTA
            onGetStarted={openOrderFromCurrentQuantity}
            onTalkToTeam={() => setModal({ type: 'contact' })}
          />
        </main>

        <Footer
          onOpenContact={() => setModal({ type: 'contact' })}
          onOpenLegal={(doc) => setModal({ type: 'legal', doc })}
        />

        <ActionModals modal={modal} onClose={() => setModal(null)} />
      </div>
    </MotionConfig>
  );
}
