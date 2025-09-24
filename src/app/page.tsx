use client
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
          logoAlt="hey, i'm barney!"
          leftButtonText=""
          rightButtonText="Join Barney"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Barnie Coin"
          subtitle="The cryptocurrency that's light on the wallet and heavy on the fun!"
          contractAddress="0xabc123"
          copyButtonText="Copy Address"
          copiedText="Address Copied"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Barnie Coin"
          descriptions={[
            "Barnie Coin is a community-driven cryptocurrency aimed at reimagining financial accessibility.",
            "Join Barnie's journey to make cryptocurrency fun and accessible to everyone!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie Coin"
          steps={[
            { title: "Step 1: Setup Wallet", description: "Create a cryptocurrency wallet to store your Barnie Coins.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2: Buy Barnie Coin", description: "Purchase Barnie Coin through a supported exchange.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3: Hold or Trade", description: "Decide whether to hold or trade your Barnie Coins for profit.", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Barnie Coin Tokenomics"
          description="Discover the tokens behind Barnie Coin and how they distribute."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 Barnie Coins" },
            { id: 2, title: "Distribution", description: "50% for community rewards" },
            { id: 3, title: "Liquidity", description: "20% locked in liquidity" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Coin Logo"
          logoText="hey, i'm barney!"
          className="footer"
          svgClassName="svg-footer"
        />
      </div>
    </SiteThemeProvider>
  );
}