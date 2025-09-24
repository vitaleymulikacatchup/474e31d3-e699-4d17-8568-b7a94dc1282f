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
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 1,
      textAnimation: "none",
    }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Logo"
          logoWidth={40}
          logoHeight={40}
          buttonText="Join Barney"
          onButtonClick={() => {}}
          className="bg-white"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Barnie Coin"
          subtitle="Your gateway to the meme-coin revolution."
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Barnie"
          descriptions={[
            "Barnie Coin is your friendly face in the world of cryptocurrency.",
            "Join our community and be part of the future.",
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie"
          steps={[
            { title: "Step 1", description: "Download a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Barnie tokens", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understand the Barnie Coin economics."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Billion Barnie Coins" },
            { id: 2, title: "Circulating Supply", description: "500 Million Barnie Coins" },
            { id: 3, title: "Market Cap", description: "1 Million Dollar Market Cap" },
          ]}
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
