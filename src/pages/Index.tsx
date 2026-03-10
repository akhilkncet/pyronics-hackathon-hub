import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SCHEDULE", href: "#schedule" },
  { label: "RULES", href: "#rules" },
  { label: "REGISTER", href: "#register" },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [flashed, setFlashed] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const fullText = "PYRONICS";

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayText(fullText.slice(0, i));
        if (i === fullText.length) {
          clearInterval(interval);
          setFlashed(true);
          setTimeout(() => {
            setFlashed(false);
            setAnimDone(true);
          }, 150);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1
        className={`font-heading font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight transition-colors duration-75 ${
          flashed ? "text-accent" : "text-foreground"
        }`}
      >
        {displayText}
        {!animDone && <span className="animate-pulse">_</span>}
      </h1>
      {animDone && (
        <div className="mt-12 text-center font-body space-y-4">
          <p className="text-lg sm:text-xl text-muted-foreground tracking-widest uppercase">
            April 18 — 20, 2026
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground tracking-widest uppercase">
            Bangalore, India
          </p>
          <a
            href="#register"
            className="inline-block mt-8 font-heading font-bold text-sm tracking-widest border border-foreground px-8 py-4 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            REGISTER NOW
          </a>
        </div>
      )}
    </section>
  );
};

const SectionHeading = ({ children, id }: { children: string; id: string }) => (
  <h2
    id={id}
    className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight mb-16 sm:mb-24"
  >
    {children}
  </h2>
);

const About = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto py-32">
    <SectionHeading id="about">ABOUT</SectionHeading>
    <div className="space-y-8 font-body text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
      <p>
        Pyronics is not another hackathon. It is 48 hours of focused, relentless building — where code meets circuit, and software meets the physical world.
      </p>
      <p>
        We bring together engineers, designers, and makers who refuse to build another to-do app. If it doesn't spark, it doesn't ship.
      </p>
      <p>
        Python. Hardware. Robotics. AI at the edge. Build something that exists in the real world or don't build at all.
      </p>
    </div>
  </section>
);

const SCHEDULE_DATA = [
  { time: "FRI 18:00", event: "DOORS OPEN / CHECK-IN" },
  { time: "FRI 19:00", event: "OPENING CEREMONY" },
  { time: "FRI 20:00", event: "HACKING BEGINS" },
  { time: "SAT 08:00", event: "BREAKFAST" },
  { time: "SAT 12:00", event: "MENTOR SESSIONS" },
  { time: "SAT 18:00", event: "MIDPOINT CHECK-IN" },
  { time: "SUN 08:00", event: "FINAL SPRINT" },
  { time: "SUN 14:00", event: "SUBMISSIONS CLOSE" },
  { time: "SUN 16:00", event: "DEMOS + JUDGING" },
  { time: "SUN 19:00", event: "AWARDS CEREMONY" },
];

const Schedule = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto py-32">
    <SectionHeading id="schedule">SCHEDULE</SectionHeading>
    <div className="space-y-0">
      {SCHEDULE_DATA.map((item, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-baseline border-t border-foreground/20 py-5 gap-1 sm:gap-0"
        >
          <span className="font-heading font-bold text-sm tracking-widest text-foreground sm:w-48 shrink-0">
            {item.time}
          </span>
          <span className="font-body text-lg text-muted-foreground">
            {item.event}
          </span>
        </div>
      ))}
      <div className="border-t border-foreground/20" />
    </div>
  </section>
);

const RULES = [
  "Teams of 2–4 members. No solo entries.",
  "All code must be written during the event. Pre-existing libraries and frameworks are permitted.",
  "Projects must incorporate a hardware or physical-world component.",
  "Python must be a primary language in the stack.",
  "Submissions must include a working demo and a 3-minute presentation.",
  "All intellectual property remains with the creators.",
  "Judges' decisions are final.",
  "Code of conduct violations result in immediate disqualification.",
];

const Rules = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto py-32">
    <SectionHeading id="rules">RULES</SectionHeading>
    <div className="space-y-0">
      {RULES.map((rule, i) => (
        <div
          key={i}
          className="border-t border-foreground/20 py-5 flex gap-6 items-baseline"
        >
          <span className="font-heading font-bold text-sm text-foreground/40 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-lg text-muted-foreground">
            {rule}
          </span>
        </div>
      ))}
      <div className="border-t border-foreground/20" />
    </div>
  </section>
);

const PRIZES = [
  { place: "01", title: "GRAND PRIZE", value: "₹2,00,000 + Hardware Kit" },
  { place: "02", title: "RUNNER UP", value: "₹1,00,000 + Hardware Kit" },
  { place: "03", title: "THIRD PLACE", value: "₹50,000" },
  { place: "—", title: "BEST HARDWARE HACK", value: "₹25,000 + Sponsor Prize" },
  { place: "—", title: "BEST AI INTEGRATION", value: "₹25,000 + Sponsor Prize" },
];

const Prizes = () => (
  <section className="px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto py-32">
    <SectionHeading id="prizes">PRIZES</SectionHeading>
    <div className="bg-secondary p-6 sm:p-10">
      {PRIZES.map((prize, i) => (
        <div
          key={i}
          className="border-t border-foreground/20 first:border-t-0 py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0"
        >
          <span className="font-heading font-bold text-sm text-foreground/40 sm:w-16 shrink-0">
            {prize.place}
          </span>
          <span className="font-heading font-bold text-foreground sm:w-64 shrink-0 text-sm tracking-widest">
            {prize.title}
          </span>
          <span className="font-body text-lg text-muted-foreground">
            {prize.value}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const Register = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center">
    <h2
      id="register"
      className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground tracking-tight mb-8"
    >
      BUILD IT.
    </h2>
    <p className="font-body text-xl text-muted-foreground mb-12 max-w-lg">
      48 hours. Real hardware. No excuses.
    </p>
    <a
      href="https://forms.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-heading font-bold text-sm tracking-widest border border-foreground px-10 py-5 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
    >
      REGISTER YOUR TEAM
    </a>
  </section>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 z-50 p-6 sm:p-8 hidden md:flex flex-col gap-3">
    {NAV_LINKS.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="font-heading text-xs tracking-widest text-foreground/40 hover:text-accent transition-colors"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t border-foreground/10 flex justify-around py-4 px-2">
    {NAV_LINKS.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="font-heading text-[10px] tracking-widest text-foreground/60 hover:text-accent transition-colors"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

const Footer = () => (
  <footer className="px-6 sm:px-12 lg:px-24 py-12 border-t border-foreground/10">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <span className="font-heading font-bold text-sm text-foreground/40 tracking-widest">
        PYRONICS 2026
      </span>
      <span className="font-body text-sm text-muted-foreground">
        Questions? pyronics@event.dev
      </span>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-accent-foreground">
      <BottomNav />
      <MobileNav />
      <Hero />
      <About />
      <Schedule />
      <Rules />
      <Prizes />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
