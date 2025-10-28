import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About — LangSlide";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-mesh">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Coming{" "}
              <span className="gradient-text">Soon</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We're working on something amazing. Our About page will be here soon with our story, mission, and vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border text-foreground hover:bg-secondary transition-colors font-medium"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

