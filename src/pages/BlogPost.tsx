import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import BlogContent from "@/components/blog/BlogContent";
import AuthorCard from "@/components/blog/AuthorCard";
import SocialShare from "@/components/blog/SocialShare";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-utils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRelatedPosts(slug!, 3) : [];
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const postUrl = post ? `${baseUrl}/blog/${post.slug}` : "";
  const ogImage = post?.featuredImage ? `${baseUrl}${post.featuredImage}` : `${baseUrl}/favicon.ico`;

  if (!post) {
    return (
      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
        <Navigation />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary underline hover:text-primary/80">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{`${post.title} | Langslide Blog`}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.description} />
        <meta name="author" content={post.author} />
        <meta name="keywords" content={post.tags.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Article Meta */}
        <meta property="article:published_time" content={new Date(post.publishDate).toISOString()} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Canonical URL */}
        <link rel="canonical" href={postUrl} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "image": ogImage,
            "datePublished": new Date(post.publishDate).toISOString(),
            "dateModified": new Date(post.publishDate).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Langslide",
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/favicon.ico`,
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": postUrl,
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
        <ReadingProgress />
        <Navigation />

        <article className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            <div className="flex gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-3xl">
                {/* Header */}
                <header className="mb-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {post.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                      </>
                    )}
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  {post.featuredImage && (
                    <div className="mb-8 rounded-2xl overflow-hidden border border-border shadow-xl">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                  )}
                </header>

                {/* Content */}
                <div className="prose-wrapper">
                  <BlogContent content={post.content} />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                    <span className="text-sm font-semibold text-foreground mr-2">Tags:</span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Share */}
                <SocialShare url={`/blog/${post.slug}`} title={post.title} description={post.description} />

                {/* Author Card */}
                <AuthorCard author={post.author} date={post.publishDate} />
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents content={post.content} />
              </aside>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
