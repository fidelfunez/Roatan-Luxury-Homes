import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <SEO
        title={t('notFound.title')}
        description={t('notFound.desc')}
        noindex={true}
      />
      <div className="max-w-md mx-auto">
        <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('notFound.title')}</h1>
        <p className="text-muted-foreground mb-8">
          {t('notFound.desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              {t('common.backToHome')}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/properties">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('common.viewProperties')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
