import { Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type Props = {
  url: string;
  title: string;
  description: string;
};

const SocialShare = ({ url, title, description }: Props) => {
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

  const share = (platform: string) => {
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description);

    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-3 pt-8 border-t border-border">
      <span className="text-sm font-semibold text-foreground flex items-center">Share:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => share("twitter")}
        className="gap-2"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => share("linkedin")}
        className="gap-2"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => share("facebook")}
        className="gap-2"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="gap-2"
      >
        <LinkIcon className="w-4 h-4" />
        Copy Link
      </Button>
    </div>
  );
};

export default SocialShare;

