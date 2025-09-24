"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'none' }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Barney Coin Logo"
          leftButtonText="Menu"
          rightButtonText="Join Barney"
          className="sticky"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Barnie Coin"
          subtitle="The future of meme currencies"
          contractAddress="0x..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Barnie"
          descriptions={["Barnie is your friendly cryptocurrency mascot.", "Join us on this fantastic journey!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie"
          steps={[
            { title: "Step 1", description: "Do your research!", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Join our community!", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Purchase on your favorite exchange!", image: "", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Here's a quick overview of the Barnie Coin tokenomics."
          cardItems={[{ id: 1, title: 'Supply', description: 'Amount available.' }, { id: 2, title: 'Liquidity', description: 'Amount set aside for trading.' }]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Logo"
          logoText="hey, i'm barney!"
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}
