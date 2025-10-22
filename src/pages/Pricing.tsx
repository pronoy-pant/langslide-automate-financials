import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Pricing = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="container mx-auto px-6 py-32 md:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            Flexible Pricing
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Pricing</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Contact us for custom pricing tailored to your needs.
        </p>
        <Button asChild size="lg">
          <a href="mailto:hello@langslide.com">
            Get in Touch
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default Pricing;
