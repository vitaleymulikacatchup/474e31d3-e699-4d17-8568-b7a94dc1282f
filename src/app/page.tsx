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
          logoAlt="Barnie Logo"
          logoText="hey, I'm barney!"
          leftButtonText="Join Barney"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Barnie Coin"
          subtitle="The future of meme coins!"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Barnie"
          descriptions={["Barnie Coin is a community-driven meme coin.", "We aim to bring joy and utility to the blockchain space.", "Join us in this fun journey!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie"
          steps={[
            { title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase BNB", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap for Barnie Coin", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Clear and concise breakdown of our token structure."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Billion" },
            { id: 2, title: "Market Cap", description: "$10 Million" },
            { id: 3, title: "Liquidity", description: "20%" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Logo"
          logoText="hey, I'm barney!"
          className="bg-white"
        />
      </div>
    </SiteThemeProvider>
  );
}
