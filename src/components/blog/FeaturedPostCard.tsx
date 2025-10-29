import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogPostMeta } from "@/lib/blog-utils";
import { ArrowRight } from "lucide-react";

type Props = {
  post: BlogPostMeta;
};

const FeaturedPostCard = ({ post }: Props) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border group-hover:border-primary/30 transition-all duration-300"
      >
        {post.featuredImage ? (
          <div className="absolute inset-0">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20" />
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-sm font-semibold border border-primary/30">
              {post.category}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-lg text-white/90 mb-6 line-clamp-2 max-w-3xl">
            {post.description}
          </p>
          
          <div className="flex items-center gap-4 text-white/80 mb-6">
            <time dateTime={post.publishDate} className="text-sm">
              {new Date(post.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            {post.readingTime && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-sm">{post.readingTime} min read</span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
            Read article
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedPostCard;

