"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider 
      theme={{ 
        styleVariant: 'futuristicAndOutOfBox', 
        colorTemplate: 1, 
        textAnimation: 'none' 
      }}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="/images/logo.svg"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' }
          ]}
          buttonText="Join Barney"
          onButtonClick={() => { console.log('Join Barney clicked'); }}
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero 
          title="Welcome to Barnie Coin"
          subtitle="Join the future of currency."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { console.log('Primary button clicked'); }}
          onSecondaryButtonClick={() => { console.log('Secondary button clicked'); }}
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout 
          title="About Barnie Coin"
          descriptions={[
            "Barney Coin is the future of meme currencies.",
            "Join a community-driven ecosystem.",
            "Easy to buy, trade, and engage with."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D 
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics"
          description="Discover the value and distribution of Barnie Coin."
          kpiItems={[
            { value: '10M', description: 'Total Supply', longDescription: 'The total number of tokens created.', icon: 'Shield' },
            { value: '1M', description: 'Market Cap', longDescription: 'The total market value of Barnie Coin.', icon: 'Shield' },
            { value: '500K', description: 'Liquidity', longDescription: 'Tokens available for trading.', icon: 'Shield' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase 
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: 'Links', items: [
                { label: 'Home', onClick: () => { console.log('Home clicked'); } },
                { label: 'About Us', onClick: () => { console.log('About clicked'); } },
                { label: 'Contact', onClick: () => { console.log('Contact clicked'); } }
              ]
            },
            { title: 'Legal', items: [
                { label: 'Privacy Policy', onClick: () => { console.log('Privacy clicked'); } },
                { label: 'Terms of Service', onClick: () => { console.log('Terms clicked'); } }
              ]
            },
            { title: 'Socials', items: [
                { label: 'Twitter', onClick: () => { console.log('Twitter clicked'); } },
                { label: 'Discord', onClick: () => { console.log('Discord clicked'); } }
              ]
            }
          ]}
          copyrightText="© 2023 Barnie Coin"
          onPrivacyClick={() => { console.log('Privacy Policy clicked'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}