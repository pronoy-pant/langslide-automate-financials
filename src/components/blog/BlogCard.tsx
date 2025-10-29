import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogPostMeta } from "@/lib/blog-utils";
import { ArrowRight } from "lucide-react";

type Props = {
  post: BlogPostMeta;
  variant?: "default" | "compact";
};

const BlogCard = ({ post, variant = "default" }: Props) => {
  const isCompact = variant === "compact";

  const getRelativeDate = (date: string): string => {
    const now = new Date();
    const postDate = new Date(date);
    const diffTime = Math.abs(now.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        className="h-full rounded-2xl border border-border bg-white hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
      >
        {post.featuredImage && !isCompact && (
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary border border-primary/20">
                {post.category}
              </span>
            </div>
          </div>
        )}
        
        <div className={isCompact ? "p-4" : "p-6"}>
          {isCompact && (
            <div className="mb-2">
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                {post.category}
              </span>
            </div>
          )}
          
          <div className={`text-xs text-muted-foreground mb-2 ${isCompact ? "mb-2" : "mb-3"}`}>
            <time dateTime={post.publishDate} title={new Date(post.publishDate).toLocaleDateString()}>
              {getRelativeDate(post.publishDate)}
            </time>
            {post.readingTime && (
              <>
                <span className="mx-1.5">•</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
          
          <h3 className={`font-bold text-foreground mb-2 group-hover:gradient-text transition-all ${isCompact ? "text-base" : "text-xl"}`}>
            {post.title}
          </h3>
          
          {!isCompact && (
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
              {post.description}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-4">
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, isCompact ? 1 : 2).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">Read</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;


