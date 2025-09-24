"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[{ name: "hero", id: "hero" }, { name: "about", id: "about" }, { name: "how-to-buy", id: "how-to-buy" }, { name: "tokenomics", id: "tokenomics" }, { name: "footer", id: "footer" }]}
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Coin Logo"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero title="Welcome to Barnie Coin" description="Join us on this playful journey of making waves in the crypto world!" primaryButtonText="Join Now" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About Barnie Coin" descriptions={["Barnie Coin is a fun and energetic meme coin that embraces community and creativity.", "We aim to build a vibrant ecosystem around our playful mascot, Barnie the golden retriever.", "Join us to make a difference and enjoy the ride!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics title="Tokenomics" description="Our transparent and fair token distribution ensures everyone's stake is secured." cardItems={[{ id: 1, title: "Total Supply", description: "1,000,000,000 BARNIE" }, { id: 2, title: "Liquidity", description: "60% locked in liquidity pools" }, { id: 3, title: "Community Fund", description: "30% reserved for community efforts" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }] },
            { title: "Support", items: [{ label: "FAQ", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Barnie Coin"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
