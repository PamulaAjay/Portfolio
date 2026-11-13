import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { Icon, TechnologyMark, type IconName } from "@/components/icon";
import { MotionEffects } from "@/components/motion-effects";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { profile, skillGroups } from "@/content/portfolio";

const skillIcons: IconName[] = ["code", "phone", "layers", "git"];

export default function Home() {
  return <>
    <Header />
    <MotionEffects />
    <main id="main">
      <section id="home" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-label"><Icon name="sparkles" className="hero-sparkle" /> AJAY PAMULA / FRONTEND DEVELOPER</p>
          <h1 id="hero-title">Thoughtful<br />interfaces.<br /><span>Complex problems,<br />handled.</span></h1>
          <p className="hero-description">I build responsive web and mobile applications with React, React Native, and Next.js. Bringing clarity to the interface—and care to the details.</p>
          <div className="hero-stack" aria-label="Core technologies">{["React", "Next.js", "TypeScript"].map(name => <span className="technology-chip" key={name}><TechnologyMark name={name} />{name}</span>)}</div>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href={profile.resume} download>Download resume <Icon name="download" size={16} /></a></div>
          <div className="hero-meta"><Icon name="pin" size={13} />{profile.location}<span className="meta-divider" />Frontend Developer at Synchroni</div>
        </div>
        <div className="capability-panel">
          <div className="panel-top"><span className="mono">THE WAY I BUILD</span><span className="panel-dots" aria-hidden="true">● ● ●</span></div>
          <div className="interface-art" aria-hidden="true">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-browser"><div className="art-browser-bar"><i /><i /><i /><span /></div><div className="art-browser-content"><div className="art-sidebar"><b /><b /><b /></div><div className="art-content"><div className="art-line wide" /><div className="art-line" /><div className="art-grid"><div /><div /></div><div className="art-chart"><i /><i /><i /><i /><i /><i /><i /></div></div></div></div>
            <div className="art-phone"><div className="phone-notch" /><div className="phone-top" /><div className="phone-block" /><div className="phone-line" /><div className="phone-line short" /><div className="phone-button" /></div>
            <div className="art-code"><Icon name="code" size={23} /></div>
            <div className="art-label"><Icon name="check" size={12} />Responsive by design</div>
          </div>
          <div className="capability-row"><span className="capability-icon"><Icon name="monitor" /></span><div><h3>Web interfaces</h3><p>React · Next.js · TypeScript</p></div><Arrow diagonal /></div>
          <div className="capability-row"><span className="capability-icon"><Icon name="phone" /></span><div><h3>Mobile experiences</h3><p>React Native · Redux</p></div><Arrow diagonal /></div>
          <div className="capability-row"><span className="capability-icon"><Icon name="signal" /></span><div><h3>Real-time interactions</h3><p>WebSockets · LiveKit · REST APIs</p></div><Arrow diagonal /></div>
          <p className="panel-footnote">A frontend focus. An application-wide perspective.</p>
        </div>
      </section>

      <div className="principles-strip"><div className="shell"><span>Built with intention.</span><p><span><Icon name="monitor" size={16} />Responsive by design</span><span><Icon name="layers" size={16} />Reusable at the core</span><span><Icon name="signal" size={16} />Connected through APIs</span></p><span className="strip-symbol" aria-hidden="true">↘</span></div></div>

      <section id="work" className="section shell" aria-labelledby="work-title">
        <SectionHeading id="work-title" number="01" label="SELECTED WORK" title="From an idea to the browser." />
        <p className="section-intro">An independently developed website, built with Next.js.</p>
        <article className="project">
          <div className="project-visual">
            <Image src="/images/solar-cover.webp" alt="Concept illustration of cobalt solar panels on softly lit ivory terrain." fill sizes="(max-width: 640px) 100vw, (max-width: 850px) 50vw, 680px" className="project-cover-image" />
            <div className="project-visual-top"><span><Icon name="sparkles" size={13} />AUROREAN SOLAR</span><span>WEB / NEXT.JS</span></div>
            <div className="project-visual-bottom"><span>Solar energy / Concept artwork</span><span className="project-art-icon"><Icon name="code" size={18} /></span></div>
          </div>
          <div className="project-copy"><span className="mono project-number">PROJECT / 001</span><h3>Aurorean Solar<span>.</span></h3><p>A website frontend I developed independently using Next.js. A standalone example of my work beyond enterprise applications.</p><dl><div><dt>My role</dt><dd>Frontend development</dd></div><div><dt>Framework</dt><dd>Next.js</dd></div></dl><a className="text-link" href="https://auroreansolar.com" target="_blank" rel="noopener noreferrer">Visit live website <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a></div>
        </article>
      </section>

      <section id="experience" className="section experience-section" aria-label="Experience"><div className="shell experience-layout"><SectionHeading number="02" label="EXPERIENCE" title="Building in the real world." /><div className="experience-entry"><span className="experience-icon"><Icon name="briefcase" size={22} /></span><div className="experience-top"><p className="mono">FEB 2024 — PRESENT</p><span className="current-label">Current role</span></div><h3>Frontend Developer</h3><p className="company">Synchroni Global IT Solutions Pvt. Ltd.</p><p className="experience-description">Developing web and mobile interfaces, integrating application services, and working with backend, QA, and design teams.</p><ul className="contribution-list"><li>Build reusable, responsive components with React, React Native, and Material UI.</li><li>Connect interfaces to REST APIs and manage application state.</li><li>Implement frontend authentication and role-based access flows.</li><li>Coordinate asynchronous media operations and real-time communication.</li></ul><div className="tags"><span>React</span><span>React Native</span><span>Redux</span><span>REST APIs</span></div></div></div></section>

      <section id="skills" className="section shell" aria-label="Technical skills"><SectionHeading number="03" label="TOOLKIT" title="The tools behind the interfaces." /><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.name}><div className="skill-group-top"><span className="skill-icon"><Icon name={skillIcons[index]} size={24} /></span><span className="mono skill-index">0{index + 1} /</span></div><h3>{group.name}</h3><p>{group.detail}</p><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>

      <section id="about" className="section about-section" aria-label="About Ajay"><div className="shell about-layout"><SectionHeading number="04" label="A LITTLE ABOUT ME" title="A developer who cares about the details." /><div className="about-copy"><p>I’m Ajay, a frontend developer based in Hyderabad. Since February 2024, I’ve been building web and mobile applications at Synchroni.</p><p>My work spans learning applications and real-time interfaces. I enjoy bringing the moving pieces together: reusable UI, application state, API calls, and browser media controls.</p><p>I focus on making complex functionality feel clear and usable, while collaborating closely with the people building the rest of the application.</p><div className="education"><Icon name="graduation" className="education-icon" size={24} /><span className="mono">EDUCATION / 2024</span><h3>B.Tech, Computer Science & Engineering</h3><p>JNTUH University · CGPA 7.1 / 10</p></div></div></div></section>

      <section id="contact" className="section shell contact-section" aria-labelledby="contact-title"><p className="eyebrow"><span>05</span> LET’S CONNECT</p><div className="contact-layout"><div><h2 id="contact-title">Your next frontend<br />challenge. <span>Let’s talk.</span></h2><p>Have a role or a project in mind? I’d love to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}><Icon name="mail" size={22} />{profile.email}<Arrow diagonal /></a></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span><Icon name="linkedin" size={19} />Connect on LinkedIn</span> <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.resume} download><span><Icon name="download" size={19} />Download my resume</span><Arrow diagonal /></a><span className="contact-location"><Icon name="pin" size={14} />Based in Hyderabad, India</span></div></div></section>
    </main>
    <footer className="shell footer"><a className="wordmark" href="#home" aria-label="Back to top">AP<span>.</span></a><p>© {new Date().getUTCFullYear()} Ajay Pamula</p><a className="back-top" href="#home">Back to top ↑</a></footer>
  </>;
}
