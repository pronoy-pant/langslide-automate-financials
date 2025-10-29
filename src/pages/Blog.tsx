import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { getAllPosts, getPostsByCategory, BlogPostMeta } from "@/lib/blog-utils";
import { BookOpen, Sparkles } from "lucide-react";

const categories: Array<BlogPostMeta['category'] | 'All'> = ['All', 'Finance', 'Marketing', 'Technology', 'Best Practices'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const allPosts = getAllPosts();
  const posts = useMemo(
    () => (activeCategory === 'All' ? allPosts : getPostsByCategory(activeCategory as BlogPostMeta['category'])),
    [activeCategory, allPosts]
  );

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-border bg-gradient-mesh">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 gradient-text text-sm font-semibold border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Insights & Updates
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Langslide <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Thoughts on AI agents, workflow automation, and building scalable operations
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{allPosts.length} Articles</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div>
                <span>{categories.length - 1} Categories</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white border border-border hover:border-primary/50 text-foreground hover:bg-primary/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post + Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {featuredPost && (
              <div className="mb-16">
                <FeaturedPostCard post={featuredPost} />
              </div>
            )}

            {regularPosts.length > 0 && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {activeCategory === 'All' ? 'Latest' : activeCategory} <span className="gradient-text">Articles</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post, index) => (
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
              </>
            )}

            {posts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      <Footer />
    </div>
  );
};

export default Blog;
