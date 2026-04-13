const PageSectionSkeleton = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full animate-pulse rounded-xl bg-muted/25 ${className}`}
    aria-hidden
  />
);

export const HeroLoadingShell = () => (
  <div
    className="min-h-screen bg-background"
    aria-busy="true"
    aria-label="Loading"
  >
    <div className="site-width grid min-h-[70vh] grid-cols-1 items-center gap-10 pt-28 pb-16 lg:grid-cols-2">
      <div className="order-2 space-y-5 lg:order-1">
        <PageSectionSkeleton className="h-9 max-w-md" />
        <PageSectionSkeleton className="h-14 max-w-lg" />
        <PageSectionSkeleton className="h-24 max-w-xl" />
        <div className="flex flex-wrap gap-3 pt-4">
          <PageSectionSkeleton className="h-11 w-36" />
          <PageSectionSkeleton className="h-11 w-36" />
        </div>
      </div>
      <PageSectionSkeleton className="order-1 min-h-[320px] border border-border/30 lg:order-2 lg:min-h-[420px]" />
    </div>
  </div>
);

export const SectionLoadingShell = ({
  minHeight = "min-h-64",
}: {
  minHeight?: string;
}) => <PageSectionSkeleton className={`${minHeight}`} />;
