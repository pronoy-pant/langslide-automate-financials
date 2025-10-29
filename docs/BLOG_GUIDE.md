# Blog Guide

This guide explains how to add new blog posts, handle images, and follow SEO best practices.

## Adding a New Blog Post

### Step 1: Create Markdown File

Create a new `.md` file in `src/content/blog/` with a descriptive filename using kebab-case:

```
src/content/blog/my-awesome-blog-post.md
```

### Step 2: Add Frontmatter

Every blog post must start with YAML frontmatter (metadata between `---`):

```markdown
---
slug: my-awesome-blog-post
title: My Awesome Blog Post
description: A compelling 150-160 character description for SEO and previews.
author: Langslide Team
publishDate: 2024-01-15
category: Finance
tags: [automation, ai-agents, workflow]
featuredImage: /images/blog/featured-image.jpg
readingTime: 8
---

# Your Blog Post Content Here
```

### Step 3: Import in blog-utils.ts

Add an import statement in `src/lib/blog-utils.ts`:

```typescript
import myPostRaw from '@/content/blog/my-awesome-blog-post.md?raw';
```

Then add it to the `postsRaw` array:

```typescript
const postsRaw: string[] = [post1Raw, post2Raw, post3Raw, myPostRaw];
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL-friendly identifier (kebab-case) |
| `title` | string | Yes | Blog post title (used in SEO) |
| `description` | string | Yes | 150-160 char meta description |
| `author` | string | Yes | Author name |
| `publishDate` | string | Yes | Date in YYYY-MM-DD format |
| `category` | string | Yes | One of: Finance, Marketing, Technology, Best Practices |
| `tags` | array | Yes | Array of tags: `[tag1, tag2, tag3]` |
| `featuredImage` | string | No | Path to featured image: `/images/blog/image.jpg` |
| `readingTime` | number | No | Estimated reading time in minutes |

## Image Handling

### Directory Structure

All blog images go in `public/images/blog/`:

```
public/
└── images/
    └── blog/
        ├── featured-image-1.jpg
        ├── inline-image-1.jpg
        └── inline-image-2.jpg
```

### Adding Images

#### Featured Image

Set in frontmatter:
```markdown
featuredImage: /images/blog/my-featured-image.jpg
```

**Recommended specs:**
- Dimensions: 1200x630px (for Open Graph)
- Format: JPG or WebP
- File size: < 200KB

#### Inline Images

Use markdown syntax in your blog post content:

```markdown
![Alt text describing the image](/images/blog/inline-image.jpg)
```

#### Image with Caption

```markdown
![Alt text](/images/blog/image.jpg "This is the caption")
```

#### Image Best Practices

1. **Always use descriptive alt text** for accessibility and SEO
2. **Optimize images** before uploading (compress, resize)
3. **Use WebP format** when possible for better compression
4. **Keep file sizes reasonable** (< 500KB per image)
5. **Use descriptive filenames**: `finance-automation-diagram.jpg` not `image1.jpg`

### Image Dimensions

- **Featured images**: 1200x630px (16:8.4 aspect ratio)
- **Inline images**: Max width 800px, height auto (maintain aspect ratio)

## Markdown Formatting

### Headings

```markdown
# H1 - Main heading (one per post)
## H2 - Section heading
### H3 - Subsection heading
```

Headings automatically generate IDs for table of contents.

### Lists

**Unordered:**
```markdown
- Item one
- Item two
- Item three
```

**Ordered:**
```markdown
1. First item
2. Second item
3. Third item
```

### Code

**Inline code:**
```markdown
Use `code` inline
```

**Code block:**
````markdown
```javascript
const example = "code";
```
````

### Links

```markdown
[Link text](https://example.com)
[Internal link](/functions/finance)
```

External links automatically open in new tabs.

### Blockquotes

```markdown
> This is a blockquote
> spanning multiple lines
```

### Bold and Italic

```markdown
**Bold text**
*Italic text*
```

## SEO Best Practices

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Make it compelling

### Meta Descriptions
- 150-160 characters
- Include call-to-action when possible
- Use target keywords naturally

### Content Structure
- Use proper heading hierarchy (H1 → H2 → H3)
- Include keywords naturally in first paragraph
- Use internal links to relevant pages

### Images
- Always include descriptive alt text
- Optimize file sizes
- Use descriptive filenames

## Internal Linking

Link to relevant pages within the site:

```markdown
Check out our [Finance automation page](/functions/finance) for more details.
```

## Preview Your Post

1. Start the dev server: `npm run dev`
2. Navigate to `/blog`
3. Click on your new post to preview

## Publishing Checklist

- [ ] Frontmatter is complete and correct
- [ ] Post is imported in `blog-utils.ts`
- [ ] Featured image is added (if applicable)
- [ ] All inline images have alt text
- [ ] Content is proofread
- [ ] Links are tested
- [ ] Meta description is 150-160 characters
- [ ] Reading time is estimated accurately

## Troubleshooting

### Post not showing up
- Check that the import is added to `blog-utils.ts`
- Verify frontmatter syntax (no missing colons, proper array format)
- Check browser console for errors

### Images not loading
- Verify image path starts with `/images/blog/`
- Ensure image exists in `public/images/blog/`
- Check image filename matches exactly (case-sensitive)

### Frontmatter parsing errors
- Ensure arrays use bracket syntax: `[item1, item2]`
- Check for proper YAML formatting (colons after keys)
- Verify no special characters in keys

