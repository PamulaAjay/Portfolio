import type { CSSProperties } from "react";

export type IconName =
  | "monitor" | "phone" | "signal" | "layers" | "code"
  | "mail" | "linkedin" | "pin" | "briefcase" | "graduation"
  | "download" | "sparkles" | "check" | "git";

const paths: Record<IconName, React.ReactNode> = {
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4M7 9l3 2-3 2m6 0h4" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
  signal: <><path d="M5 5a10 10 0 0 0 0 14m14-14a10 10 0 0 1 0 14M8 8a6 6 0 0 0 0 8m8-8a6 6 0 0 1 0 8" /><circle cx="12" cy="12" r="1.5" /></>,
  layers: <><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></>,
  code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7m4-7v7m0-4a3 3 0 0 1 6 0v4" /><circle cx="7.5" cy="7" r=".6" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 12a21 21 0 0 0 18 0m-9 0v3" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" /></>,
  sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm8-1v4m-2-2h4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  git: <><circle cx="7" cy="5" r="2" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="5" r="2" /><path d="M7 7v10m10-10v3a3 3 0 0 1-3 3H7" /></>,
};

export function Icon({ name, size = 20, className = "", style }: { name: IconName; size?: number; className?: string; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className={`icon ${className}`} style={style}>{paths[name]}</svg>;
}

export function TechnologyMark({ name }: { name: string }) {
  if (name === "React" || name === "React Native") {
    return <svg className="technology-mark react-mark" width="20" height="20" viewBox="-12 -12 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><circle r="1.7" fill="currentColor" stroke="none" />{[0, 60, 120].map(angle => <ellipse key={angle} rx="10" ry="3.7" transform={`rotate(${angle})`} />)}</svg>;
  }
  if (name === "Next.js") {
    return <svg className="technology-mark next-mark" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor" /><path d="M8 17V7l10 14M16 7v7" fill="none" stroke="white" strokeWidth="1.6" /></svg>;
  }
  const label = name === "TypeScript" ? "TS" : name === "JavaScript" ? "JS" : name.slice(0, 2);
  return <span className={`technology-mark letter-mark ${name === "TypeScript" ? "typescript-mark" : "javascript-mark"}`} aria-hidden="true">{label}</span>;
}
