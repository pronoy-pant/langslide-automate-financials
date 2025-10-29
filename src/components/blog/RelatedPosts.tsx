import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogPostMeta } from "@/lib/blog-utils";

type Props = {
  posts: BlogPostMeta[];
};

const RelatedPosts = ({ posts }: Props) => {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 border-t border-border mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Related <span className="gradient-text">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;

