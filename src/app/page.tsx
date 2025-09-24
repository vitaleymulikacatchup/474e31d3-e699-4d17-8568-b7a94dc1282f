"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'none' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          buttonText="Join Barney"
          onButtonClick={() => console.log('Join clicked')}
          className="bg-transparent"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Barnie Coin"
          subtitle="Join the most vibrant community of meme lovers!"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy"
          copiedText="Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Barnie"
          descriptions={[
            "Barnie Coin is a fun and friendly cryptocurrency aimed at meme collectors.",
            "Be part of our thriving community and enjoy exclusive perks!"
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie"
          steps={[
            { title: "Step 1: Get a Wallet", description: "Download any cryptocurrency wallet of your choice.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2: Buy ETH", description: "Acquire Ethereum from any trusted exchange.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3: Swap for Barnie", description: "Use a DEX to swap ETH for Barnie Coin.", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Our tokenomics structure is designed for long-term success and community benefit."
          kpiItems={[
            { value: "1B", description: "Total Supply", icon: "Star" },
            { value: "50%", description: "Liquidity", icon: "Shield" },
            { value: "0%", description: "Burn Rate", icon: "Fire" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoText="Hey, I'm Barney!"
          className="bg-transparent"
          columns={[
            { title: "About", items: [{ label: "FAQ", onClick: () => console.log('FAQ clicked') }] },
            { title: "Contact", items: [{ label: "Support", onClick: () => console.log('Contact clicked') }] },
            { title: "Terms", items: [{ label: "Privacy Policy", onClick: () => console.log('Privacy clicked') }] }
          ]}
          copyrightText="© 2023 Barnie Coin."
          onPrivacyClick={() => console.log('Privacy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
