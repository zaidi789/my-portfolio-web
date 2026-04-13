"use client";

import { useEffect } from "react";

/** Old /projects URL → same content as home #projects (single source of truth). */
const ProjectsLegacyRedirect = () => {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return (
    <div
      className="flex min-h-[40vh] items-center justify-center bg-background text-muted-foreground text-sm"
      aria-live="polite"
    >
      Opening projects…
    </div>
  );
};

export default ProjectsLegacyRedirect;
