interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-radius-full border border-border text-text-muted ${className}`}
    >
      {children}
    </span>
  );
}
