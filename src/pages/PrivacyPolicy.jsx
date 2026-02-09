import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Roatán Luxury Homes. How we collect, use, and protect your information."
        canonical="/privacy-policy"
      />
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <h1 className="text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: February 2025</p>

      <div className="prose prose-slate max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">1. Introduction</h2>
          <p>
            Roatán Luxury Homes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">2. Information We Collect</h2>
          <p>
            We may collect information you provide directly, such as name, email address, phone number, and property preferences when you contact us, submit a property inquiry, or sign up for updates.
            We may also collect usage data (e.g., pages visited, device type) to improve our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">3. How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide real estate services, send relevant property updates (with your consent), improve our website, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">4. Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information with service providers who assist our operations (e.g., hosting, email) or when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">5. Security and Retention</h2>
          <p>
            We take reasonable measures to protect your data. We retain your information only as long as needed for the purposes described in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">6. Your Rights and Contact</h2>
          <p>
            You may request access, correction, or deletion of your personal information by contacting us at the email or phone number provided on our Contact page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2">7. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect any changes.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
