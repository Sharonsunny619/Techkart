export function PageHeaderSection({ heading, description }: { heading: string; description?: string }) {
  return (
    <header className="mb-6 pb-4 border-b-2 border-primary/10">
      <h1 className="text-3xl font-bold mb-1">{heading}</h1>
      {description && <p className="text-base text-muted m-0">{description}</p>}
    </header>
  );
}
