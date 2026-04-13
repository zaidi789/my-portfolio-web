"use client";

import { motion } from "framer-motion";
import { Battery, Bell, Signal, Smartphone, Wifi } from "lucide-react";

type PhoneFrameProps = {
  variant: "primary" | "secondary";
};

const PhoneFrame = ({ variant }: PhoneFrameProps) => {
  const isPrimary = variant === "primary";

  const bezel =
    "rounded-[2.4rem] border border-border/80 bg-linear-to-b from-muted/90 via-muted/70 to-muted/50 p-[11px] shadow-[0_20px_50px_-12px_hsl(var(--foreground)/0.12)] ring-1 ring-border/50 dark:from-zinc-800/95 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] dark:ring-white/10";

  const bezelBack =
    "rounded-[2.15rem] border border-border/70 bg-linear-to-b from-muted/80 to-muted/50 p-[9px] opacity-[0.97] shadow-lg ring-1 ring-border/40 dark:from-zinc-900/90 dark:to-zinc-950 dark:ring-white/5";

  return (
    <div className={isPrimary ? bezel : bezelBack}>
      <div
        className={`relative overflow-hidden rounded-[1.9rem] border border-border/30 bg-background ${isPrimary ? "aspect-[9/19.2]" : "aspect-[9/19.5]"}`}
      >
        <div className="absolute inset-x-8 top-2 z-10 flex justify-center">
          <div className="h-[26px] w-[92px] rounded-full bg-zinc-900 dark:bg-black" />
        </div>

        <div className="flex h-full flex-col px-3 pb-5 pt-[2.65rem]">
          <div className="mb-3 flex items-center justify-between px-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
            <span>9:41</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Signal className="h-3 w-3" aria-hidden />
              <Wifi className="h-3 w-3" aria-hidden />
              <Battery className="h-3.5 w-3.5" aria-hidden />
            </div>
          </div>

          {isPrimary ? (
            <>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Capabilities
              </p>
              <p className="mt-1 text-[17px] font-semibold tracking-tight text-foreground">
                Real device depth
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                Push, payments, and resilience are wired end to end.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  {
                    title: "Push notifications",
                    sub: "FCM and APNs with channels, badges, and foreground handling.",
                    meta: "Engage",
                  },
                  {
                    title: "Payment methods",
                    sub: "Cards, Apple Pay, Google Pay, wallets, and subscriptions.",
                    meta: "Pay",
                  },
                  {
                    title: "Offline and sync",
                    sub: "Queued writes, retries, and background tasks keep data reliable.",
                    meta: "Stable",
                  },
                ].map((row) => (
                  <div
                    key={row.title}
                    className="rounded-[14px] border border-border/60 bg-muted/50 px-3 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-medium text-foreground">
                        {row.title}
                      </p>
                      <span className="shrink-0 rounded-md bg-primary/15 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                        {row.meta}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                      {row.sub}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3">
                <div className="rounded-[14px] border border-primary/25 bg-primary/10 px-3 py-2 text-center dark:border-primary/30 dark:bg-primary/15">
                  <p className="text-[11px] font-semibold text-primary">
                    TypeScript and React Native
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Platform
                  </p>
                  <p className="mt-1 text-[17px] font-semibold tracking-tight text-foreground">
                    Ship and harden
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-muted/40 dark:bg-white/[0.06]">
                  <Bell className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                </div>
              </div>
              <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
                Navigation, native hooks, and release hygiene stay consistent.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  {
                    title: "Deep links and navigation",
                    sub: "Universal links, state restore, and guarded routes.",
                    pill: "Nav",
                  },
                  {
                    title: "Native integrations",
                    sub: "Camera, maps, biometrics, and secure storage when the platform matters.",
                    pill: "Bridge",
                  },
                  {
                    title: "Observability",
                    sub: "Crash reporting, analytics, and remote configuration.",
                    pill: "Ops",
                  },
                ].map((row) => (
                  <div
                    key={row.title}
                    className="rounded-[14px] border border-border/60 bg-muted/40 px-3 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[12px] font-semibold leading-tight text-foreground">
                        {row.title}
                      </p>
                      <span className="shrink-0 rounded-md border border-border/50 bg-background/80 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground dark:border-white/10 dark:bg-zinc-900/80">
                        {row.pill}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                      {row.sub}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3">
                <div className="rounded-[14px] border border-border/50 bg-muted/30 px-3 py-2 dark:border-white/[0.06] dark:bg-white/[0.04]">
                  <p className="text-[10px] font-medium text-muted-foreground">
                    Stores and CI
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-foreground">
                    TestFlight, Play Console tracks, signing, and phased rollout.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

type HeroMobileShowcaseProps = {
  reduceMotion?: boolean;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const HeroMobileShowcase = ({ reduceMotion = false }: HeroMobileShowcaseProps) => {
  const backMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0, rotate: -7 } }
    : {
        initial: { opacity: 0, y: 24, rotate: -7 },
        animate: { opacity: 1, y: 0, rotate: -7 },
        transition: { duration: 0.55, delay: 0.1, ease: easeOut },
      };

  const frontMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: 0.02, ease: easeOut },
      };

  const chipMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 0.3, ease: easeOut },
      };

  return (
    <div className="relative mx-auto flex w-full max-w-[420px] justify-center lg:mx-0 lg:max-w-none lg:justify-end">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90%,420px)] w-[min(100%,380px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/[0.12]"
        aria-hidden
      />
      <div className="relative h-[min(68dvh,500px)] w-full min-h-[360px] sm:min-h-[400px]">
        <motion.div
          {...backMotion}
          className="absolute right-1 top-[3.5rem] w-[46%] max-w-[198px] sm:right-3 sm:top-16 sm:max-w-[214px]"
        >
          <PhoneFrame variant="secondary" />
        </motion.div>

        <motion.div
          {...frontMotion}
          className="absolute left-0 top-0 w-[58%] max-w-[252px] sm:left-2 sm:max-w-[274px]"
        >
          <PhoneFrame variant="primary" />
        </motion.div>

        <motion.div
          {...chipMotion}
          className="absolute bottom-1 left-1/2 z-20 flex max-w-[calc(100%-1rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-border/70 bg-card/95 px-3.5 py-2 text-[11px] font-medium text-foreground shadow-lg backdrop-blur-md dark:border-white/12 dark:bg-zinc-950/92 dark:text-zinc-200 sm:bottom-4 sm:px-4 sm:text-xs"
        >
          <Smartphone className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
          <span className="whitespace-nowrap">
            Push, payments, native, TypeScript
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMobileShowcase;
