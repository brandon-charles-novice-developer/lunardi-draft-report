interface CommentaryProps {
  readonly text: string;
}

function renderInlineFormatting(paragraph: string): React.ReactNode[] {
  const parts = paragraph.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

function isPullQuote(paragraph: string): boolean {
  return paragraph.includes('\u2014') || paragraph.startsWith('>');
}

function Commentary({ text }: CommentaryProps) {
  const paragraphs = text.split('\n\n').filter((p) => p.trim().length > 0);

  return (
    <div className="font-body text-text-secondary leading-7 space-y-5 max-w-3xl mx-auto">
      {paragraphs.map((paragraph, index) => {
        const cleanParagraph = paragraph.startsWith('>')
          ? paragraph.slice(1).trim()
          : paragraph;

        if (isPullQuote(paragraph)) {
          return (
            <p
              key={index}
              className="border-l-4 border-accent-purple pl-4 ml-2 text-base italic text-text-secondary"
            >
              {renderInlineFormatting(cleanParagraph)}
            </p>
          );
        }

        return (
          <p
            key={index}
            className={
              index === 0
                ? 'text-lg md:text-xl text-text-primary leading-8'
                : 'text-base leading-7'
            }
          >
            {renderInlineFormatting(cleanParagraph)}
          </p>
        );
      })}
    </div>
  );
}

export default Commentary;
