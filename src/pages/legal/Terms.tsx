import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">
            Terms & Policies
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using Langslide's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use Langslide's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in Langslide's services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">3. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Langslide provides AI-powered enterprise automation solutions. We build custom AI agents that handle end-to-end workflows, integrate with existing systems, and scale with business needs across various industries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">4. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of account credentials</li>
                <li>Notify Langslide immediately of any unauthorized use</li>
                <li>Use the service in compliance with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">5. Data Security and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Langslide is committed to protecting your data with enterprise-grade security measures including SOC 2 Type II compliance, GDPR compliance, end-to-end encryption, and single sign-on (SSO) capabilities. For detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, features, and functionality of Langslide's services are owned by Langslide and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event shall Langslide be liable for any damages arising out of the use or inability to use the service, even if Langslide or an authorized representative has been notified of the possibility of such damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Langslide reserves the right to revise these terms at any time. By continuing to use the service after changes are posted, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Policies, please contact us at:{" "}
                <a href="mailto:hello@langslide.com" className="text-primary hover:underline">
                  hello@langslide.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
