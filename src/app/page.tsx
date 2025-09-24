use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'none' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          navItems={navItems} 
          logoSrc="/images/logo.svg" 
          logoWidth={100} 
          logoHeight={50} 
          buttonText="Join Barney"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero 
          title="Welcome to Barnie Coin" 
          subtitle="Join the revolution!" 
          primaryButtonText="Join Now" 
          secondaryButtonText="Learn More" 
          onPrimaryButtonClick={() => {}} 
          onSecondaryButtonClick={() => {}} 
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout 
          title="About Barnie" 
          descriptions={["Barnie Coin is designed to empower the community.", "Join us in this exciting journey."]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics" 
          description="Understand the value of Barnie Coin" 
          kpiItems={[
            { value: "10M", description: "Total Supply", longDescription: "Total Barnie Coins available.", icon: LucideIcon }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase 
          logoSrc="/images/logo.svg" 
          logoWidth={100} 
          logoHeight={50} 
          columns={[
            { title: 'Community', items: [{ label: 'Join us', onClick: () => {} }] },
            { title: 'Resources', items: [{ label: 'Documentation', onClick: () => {} }] },
            { title: 'Contact', items: [{ label: 'Support', onClick: () => {} }] }
          ]} 
          copyrightText="© 2023 Barnie Coin" 
          onPrivacyClick={() => {}} 
        />
      </div>
    </SiteThemeProvider>
  );
}
