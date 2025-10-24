import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CTAProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

function CTA({
  badge = "Get started",
  title = "Try our platform today!",
  description = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  primaryButtonText = "Sign up here",
  primaryButtonHref = "mailto:hello@langslide.com",
  secondaryButtonText = "Jump on a call",
  secondaryButtonHref = "mailto:hello@langslide.com"
}: CTAProps) {
  return (
    <div className="w-full py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col text-center bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/30 rounded-3xl p-12 lg:p-20 gap-10 items-center border border-primary/20 shadow-large">
          <div>
            <Badge className="px-4 py-2 text-sm font-semibold">{badge}</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
              {title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-3">
              <a href={primaryButtonHref}>
                {primaryButtonText} <MoveRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" className="gap-3" variant="outline">
              <a href={secondaryButtonHref}>
                {secondaryButtonText} <PhoneCall className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
