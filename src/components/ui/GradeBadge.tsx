interface GradeBadgeProps {
  readonly grade: string;
  readonly color: string;
}

function GradeBadge({ grade, color }: GradeBadgeProps) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full font-display font-bold uppercase text-sm tracking-wide"
      style={{
        backgroundColor: `${color}33`,
        border: `1px solid ${color}`,
        color,
      }}
    >
      {grade}
    </span>
  );
}

export default GradeBadge;
