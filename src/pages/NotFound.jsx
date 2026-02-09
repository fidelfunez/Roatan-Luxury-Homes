import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <div className="max-w-md mx-auto">
        <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/properties">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View Properties
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
