import { Linkedin, Twitter } from "lucide-react";

interface AuthorInfo {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  twitter?: string;
  linkedin?: string;
}

type Props = {
  author: string;
  date: string;
};

// Author database - can be expanded later
const authors: Record<string, AuthorInfo> = {
  "Langslide Team": {
    name: "Langslide Team",
    role: "Product & Engineering",
    bio: "Building intelligent automation solutions for modern enterprises.",
    twitter: "langslide",
    linkedin: "company/langslide"
  }
};

const AuthorCard = ({ author, date }: Props) => {
  const authorInfo = authors[author] || { name: author };

  return (
    <div className="border-t border-b border-border py-8 my-12">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {authorInfo.avatar ? (
          <img
            src={authorInfo.avatar}
            alt={authorInfo.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-border"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold border-2 border-border">
            {authorInfo.name.charAt(0).toUpperCase()}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-foreground">{authorInfo.name}</h3>
            {(authorInfo.twitter || authorInfo.linkedin) && (
              <div className="flex gap-2">
                {authorInfo.twitter && (
                  <a
                    href={`https://twitter.com/${authorInfo.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {authorInfo.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${authorInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>
          
          {authorInfo.role && (
            <p className="text-sm text-muted-foreground mb-2">{authorInfo.role}</p>
          )}
          
          {authorInfo.bio && (
            <p className="text-muted-foreground leading-relaxed">{authorInfo.bio}</p>
          )}
          
          <time dateTime={date} className="text-sm text-muted-foreground mt-3 block">
            Published {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;

