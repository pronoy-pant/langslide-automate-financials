import { useEffect } from "react";

type Props = {
  content: string;
};

// Enhanced markdown to HTML converter with image support
function mdToHtml(md: string): string {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Images with optional caption: ![alt text](/path/to/image.jpg "Caption")
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)(?:\s+"([^"]+)")?\)/g, (_match, alt, src, caption) => {
    const captionHtml = caption ? `<figcaption class="text-center text-sm text-muted-foreground mt-2">${caption}</figcaption>` : '';
    return `<figure class="my-8">
      <img src="${src}" alt="${alt || ''}" class="w-full rounded-xl border border-border shadow-md" loading="lazy" />
      ${captionHtml}
    </figure>`;
  });

  // Code blocks (triple backticks)
  html = html.replace(/```([\w]*)\n([\s\S]*?)```/g, (_m, lang, code) => {
    return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto border border-border my-6"><code class="text-sm">${code.trim()}</code></pre>`;
  });

  // Headings with IDs for TOC
  html = html.replace(/^###\s+(.*)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h3 id="${id}" class="text-2xl font-bold mt-12 mb-4 text-foreground scroll-mt-20">${text}</h3>`;
  });
  html = html.replace(/^##\s+(.*)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h2 id="${id}" class="text-3xl font-bold mt-16 mb-6 text-foreground scroll-mt-20">${text}</h2>`;
  });
  html = html.replace(/^#\s+(.*)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h1 id="${id}" class="text-4xl font-bold mt-20 mb-8 text-foreground scroll-mt-20">${text}</h1>`;
  });

  // Blockquotes
  html = html.replace(/^>\s+(.*)$/gm, '<blockquote class="border-l-4 border-primary pl-6 py-2 my-6 italic text-foreground/80 bg-primary/5 rounded-r">$1</blockquote>');

  // Bold/Italic/Inline code
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-0.5 rounded text-sm font-mono border border-border">$1</code>');

  // Links (external links open in new tab)
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, (_match, text, url) => {
    const isExternal = url.startsWith('http');
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="text-primary hover:text-primary/80 underline font-medium" href="${url}"${target}>${text}</a>`;
  });

  // Unordered lists
  html = html.replace(/^(?:-\s+.+\n?)+/gm, (block) => {
    const items = block.trim().split(/\n/).map((line) => line.replace(/^[-*]\s+/, ''));
    return `<ul class="list-disc pl-6 my-6 space-y-2">${items.map((i) => `<li class="text-foreground/90 leading-relaxed">${i}</li>`).join('')}</ul>`;
  });

  // Ordered lists
  html = html.replace(/^(?:\d+\.\s+.+\n?)+/gm, (block) => {
    const items = block.trim().split(/\n/).map((line) => line.replace(/^\d+\.\s+/, ''));
    return `<ol class="list-decimal pl-6 my-6 space-y-2">${items.map((i) => `<li class="text-foreground/90 leading-relaxed">${i}</li>`).join('')}</ol>`;
  });

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-12 border-border" />');

  // Paragraphs
  html = html
    .split(/\n{2,}/)
    .map((chunk) => {
      if (/(<h\d|<ul|<ol|<pre|<blockquote|<figure|<hr|^<)/.test(chunk)) {
        return chunk;
      }
      return `<p class="leading-8 text-foreground/90 text-base mb-6">${chunk.replace(/\n/g, '<br/>')}</p>`;
    })
    .join('\n');

  return html;
}

const BlogContent = ({ content }: Props) => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const html = mdToHtml(content);
  return (
    <div
      className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogContent;


