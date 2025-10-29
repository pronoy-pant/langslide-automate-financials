import { useEffect, useState } from "react";
import { extractHeadings } from "@/lib/blog-utils";

type Props = {
  content: string;
};

const TableOfContents = ({ content }: Props) => {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(content);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-24 hidden lg:block w-64">
      <div className="border-l-2 border-border pl-6 py-2">
        <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Contents</h4>
        <nav className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(id);
              }}
              className={`block text-sm transition-colors ${
                level === 1
                  ? "font-semibold text-foreground"
                  : level === 2
                  ? "text-foreground/80 ml-4"
                  : "text-muted-foreground ml-8 text-xs"
              } ${
                activeId === id
                  ? "text-primary font-medium"
                  : "hover:text-primary"
              }`}
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;

