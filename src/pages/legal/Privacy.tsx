import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Langslide, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered enterprise automation services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Account information (name, email, company details)</li>
                <li>Usage data and interaction with our services</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Communication data when you contact our support team</li>
                <li>Data processed through our AI agents as part of your workflows</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and automation workflows</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Protect against fraudulent or illegal activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement enterprise-grade security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>SOC 2 Type II Certified:</strong> We maintain rigorous security controls and compliance standards</li>
                <li><strong>GDPR Compliant:</strong> Full data protection and privacy compliance for EU users</li>
                <li><strong>Encryption:</strong> End-to-end encryption for data at rest and in transit</li>
                <li><strong>Access Controls:</strong> Fine-grained permissions and role-based access control</li>
                <li><strong>SSO/SCIM Support:</strong> Enterprise authentication and user management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">5. Data Privacy Principles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Your data stays your data.</strong> We follow strict privacy principles:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your data is never used for AI model training</li>
                <li>We do not sell or share your data with third parties for marketing purposes</li>
                <li>You maintain full ownership and control of your data</li>
                <li>You can export or delete your data at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">6. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain data residency options for enterprise customers and ensure that all international data transfers comply with applicable laws, including GDPR requirements for EU data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to improve your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text hover:underline">
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

export default Privacy;
