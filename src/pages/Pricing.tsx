import Navigation from "@/components/Navigation";

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 gradient-text">Pricing</h1>
        <p className="text-xl text-muted-foreground">Contact us for custom pricing tailored to your needs.</p>
        <div className="mt-8">
          <a href="mailto:hello@langslide.com" className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
