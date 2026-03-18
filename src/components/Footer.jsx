import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '@/lib/useContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

import Logo from './Logo';
import OptimizedImage from './OptimizedImage';

const Footer = () => {
  const { t } = useTranslation();
  const { getContent } = useContent();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.explore'),
      links: [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.properties'), to: '/properties' },
        { label: t('nav.services'), to: '/services' },
        { label: t('nav.blog'), to: '/blog' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('nav.about'), to: '/about' },
        { label: t('footer.contactUs'), to: '/contact' },
        { label: t('footer.testimonials'), to: '/#testimonials' }, 
        { label: t('footer.privacyPolicy'), to: '/privacy-policy' },
      ],
    },
  ];

  const whatsappUrl = `https://wa.me/50433419532?text=${encodeURIComponent(t('contact.whatsappMessage'))}`;
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-6 w-6" />, href: '#', label: 'Instagram' },
    { icon: <TikTokIcon className="h-6 w-6" />, href: 'https://tiktok.com/@roatanluxuryhomesforrent', label: 'TikTok' },
    { icon: <WhatsAppIcon className="h-6 w-6" />, href: whatsappUrl, label: 'WhatsApp' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="relative text-foreground py-12 border-t-2 border-primary/30 overflow-hidden">
      {/* Background Image */}
      <OptimizedImage
        src="/Photos/sand-optimized.jpg"
        webpSrc="/Photos/sand-optimized.webp"
        alt="Caribbean sand"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-sandy-dark/80 via-sandy-DEFAULT/70 to-sandy-light/60"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div className="space-y-4">
              <Logo textClassName="text-lg" imgClassName="h-7" />
              <p className="text-sm text-muted-foreground">{getContent('footer', 'companyInfo', 'description')}</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> {getContent('footer', 'companyInfo', 'address')}</p>
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> {getContent('footer', 'companyInfo', 'phone')}</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> {getContent('footer', 'companyInfo', 'email')}</p>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={section.title}>
                <p className="font-semibold text-lg text-primary mb-4">
                  {index === 0 ? getContent('footer', 'links', 'exploreTitle') : getContent('footer', 'links', 'companyTitle')}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div>
              <p className="font-semibold text-lg text-primary mb-4">{getContent('footer', 'newsletter', 'title')}</p>
              <p className="text-sm text-muted-foreground mb-3">{getContent('footer', 'newsletter', 'description')}</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="footer-email" className="sr-only">Email address</Label>
                  <Input type="email" id="footer-email" placeholder={getContent('footer', 'newsletter', 'placeholder')} className="bg-white/80 focus:bg-white" autoComplete="off" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {getContent('footer', 'newsletter', 'buttonText')}
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} {getContent('footer', 'links', 'copyright')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;