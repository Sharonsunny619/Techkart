import type { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
}

export function Grid({ children, columns = 3, gap = '1.5rem' }: GridProps) {
  return (
    <div
      className="grid-responsive"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
    >
      {children}
    </div>
  );
}
