export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishDate: string; // YYYY-MM-DD
  category: 'Finance' | 'Marketing' | 'Technology' | 'Best Practices';
  tags: string[];
  featuredImage?: string;
  readingTime?: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Simple frontmatter parser for markdown files imported with ?raw
function parseFrontmatter(raw: string): BlogPost {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) {
    throw new Error('Invalid blog post: missing frontmatter');
  }
  const [, fm, body] = fmMatch;
  const meta: Record<string, any> = {};
  fm.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    
    // Handle array values (tags: [item1, item2, item3])
    if (trimmed.match(/^[a-zA-Z0-9_]+:\s*\[/)) {
      const kvMatch = trimmed.match(/^([a-zA-Z0-9_]+):\s*\[(.*)\]/);
      if (kvMatch) {
        const key = kvMatch[1];
        const arrayValue = kvMatch[2]
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
        meta[key] = arrayValue;
      }
      return;
    }
    
    // Handle regular key-value pairs
    const kv = trimmed.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!kv) return;
    const key = kv[1];
    let value: any = kv[2].trim();
    
    // Parse numbers
    if (/^\d+$/.test(value)) {
      value = parseInt(value, 10);
    }
    
    meta[key] = value;
  });
  
  // Ensure tags is always an array
  if (meta.tags && !Array.isArray(meta.tags)) {
    meta.tags = [meta.tags];
  }
  
  return { ...(meta as BlogPostMeta), content: body.trim() } as BlogPost;
}

// Import sample posts as raw strings (Vite supports ?raw)
// Add new posts by creating a .md file in src/content/blog and adding an import+entry below
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Vite will resolve ?raw at build time
import post1Raw from '@/content/blog/how-ai-agents-transform-financial-operations.md?raw';
// @ts-ignore
import post2Raw from '@/content/blog/automating-marketing-campaigns-with-intelligent-workflows.md?raw';
// @ts-ignore
import post3Raw from '@/content/blog/building-scalable-workflow-automation.md?raw';

const postsRaw: string[] = [post1Raw, post2Raw, post3Raw];

const postsParsed: BlogPost[] = postsRaw.map(parseFrontmatter).sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

export function getAllPosts(): BlogPostMeta[] {
  return postsParsed.map(({ content, ...meta }) => meta);
}

export function getPostsByCategory(category?: BlogPostMeta['category']): BlogPostMeta[] {
  const all = getAllPosts();
  if (!category) return all;
  return all.filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postsParsed.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      // Calculate similarity score based on category and tags
      let score = 0;
      if (post.category === current.category) score += 2;
      const commonTags = post.tags.filter((tag) => current.tags.includes(tag));
      score += commonTags.length;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

export function extractHeadings(content: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({ id, text, level });
  }
  
  return headings;
}


