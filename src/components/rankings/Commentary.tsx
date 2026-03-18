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
    <div className="font-body text-text-secondary leading-relaxed space-y-4">
      {paragraphs.map((paragraph, index) => {
        const cleanParagraph = paragraph.startsWith('>')
          ? paragraph.slice(1).trim()
          : paragraph;

        if (isPullQuote(paragraph)) {
          return (
            <p key={index} className="pull-quote text-base">
              {renderInlineFormatting(cleanParagraph)}
            </p>
          );
        }

        return (
          <p
            key={index}
            className={index === 0 ? 'text-lg text-text-primary' : 'text-base'}
          >
            {renderInlineFormatting(cleanParagraph)}
          </p>
        );
      })}
    </div>
  );
}

export default Commentary;
