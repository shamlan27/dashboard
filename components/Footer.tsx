interface FooterProps {
  footer: {
    leftText: string[];
    links: { label: string; url: string }[];
    copyright: string;
  };
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-[rgb(var(--border))] bg-[rgb(var(--background-soft))] text-[rgb(var(--label))] text-sm p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left text section */}
        <div className="space-y-4 leading-relaxed">
          {footer.leftText.map((p, i) => (
            <p key={i} className="text-[rgb(var(--label))]">
              {p}
            </p>
          ))}

          <p className="text-xs text-[rgb(var(--label))]">
            {footer.copyright}
          </p>
        </div>

        {/* Right links section */}
        <div className="grid grid-cols-2 gap-3 text-[rgb(var(--label))]">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="hover:text-[rgb(var(--label-hover))]"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
