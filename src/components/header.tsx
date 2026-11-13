"use client";

import { useState } from "react";
import { navigation, profile } from "@/content/portfolio";
import { Arrow } from "./arrow";
import { Icon } from "./icon";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="shell header-inner">
      <a href="#home" className="wordmark brand-name" aria-label="Ajay Pamula, home" onClick={() => setOpen(false)}>Ajay Pamula<span>.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="header-resume" href={profile.resume} download><Icon name="download" size={15} />Resume</a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav shell" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-button")?.focus(); } }}>{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<Arrow diagonal /></a>)}</nav>}
  </header>;
}
