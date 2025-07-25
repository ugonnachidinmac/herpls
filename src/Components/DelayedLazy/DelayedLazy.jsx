import React, { lazy, Suspense } from "react";

/**
 * DelayedLazy
 * -----------
 * Props:
 * • import   → () => import("…")   (required)
 * • delay    → ms of minimum spinner time (default 1200 ms)
 * • fallback → optional custom fallback JSX
 *
 * Usage example:
 * <DelayedLazy import={() => import('./Pages/HomePage')} delay={1200} />
 */
const DelayedLazy = ({ import: importFn, delay = 1000, fallback }) => {
  // Wrap the dynamic import with a fixed delay
  const LazyComp = lazy(() =>
    Promise.all([
      importFn(),
      new Promise((res) => setTimeout(res, delay)),
    ]).then(([mod]) => mod)
  );

  return (
    <Suspense
      fallback={
        fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-headers border-t-transparent rounded-full animate-spin"></div>
              <p className="text-headers font-semibold text-lg">
                Please wait…
              </p>
            </div>
          </div>
        )
      }
    >
      <LazyComp />
    </Suspense>
  );
};

export default DelayedLazy;
