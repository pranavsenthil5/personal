const experiences = [
  {
    role: "Head Teaching Fellow, CMSC 201 – Computer Science I",
    company: "University of Maryland Baltimore County (UMBC)",
    period: "Dec 2023 – Present",
    type: "Academic",
    bullets: [
      "Designed clear and comprehensive rubrics for assignments and created Makefiles to test them, allowing graders to assess student work fairly and efficiently",
      "Developed a course website using Next.js and Auth0 to allow authorized students to view course material and assignments",
      "Initiated development of a terminal UI system to establish a centralized platform for evaluating tasks and improving the overall grading process",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Michigan State University",
    period: "May 2023 – Present",
    type: "Research",
    bullets: [
      "Interfaced with various sensors (including METER Group devices) and created new UI widgets and libraries on IoT platforms like Ubidots and Particle",
      "Installed sensors and data loggers on farms across Michigan, equipping researchers to collect data for their experiments",
      "Integrated LoRa technology with existing data loggers to create sensor networks for farms, reducing operational costs",
      "Implemented a navigation stack using ROS for an autonomous rover, presented at MSU's Mid-SURE event",
    ],
  },
  {
    role: "Teaching Fellow, CMSC 201 – Computer Science I",
    company: "University of Maryland Baltimore County (UMBC)",
    period: "Aug 2023 – Nov 2023",
    type: "Academic",
    bullets: [
      "Presented and conducted weekly lab sessions to facilitate effective learning of Python fundamentals",
      "Provided support by hosting office hours, offering personalized assistance to students",
      "Graded homework, projects, and exams using Makefiles",
    ],
  },
  {
    role: "Coverage Test Intern",
    company: "SBP Consulting LLC, Laurel, MD",
    period: "Aug 2022",
    type: "Internship",
    bullets: [
      "Coordinated with a 911 dispatch center to measure radio coverage of a new Motorola radio system",
      "Performed BER and DAQ tests across Shenandoah County using proprietary software Voyager",
      "Developed a PyQt application to automate the editing of XML files with geo-data storing test results",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Mu Sigma, India",
    period: "Apr 2019 – May 2019",
    type: "Internship",
    bullets: [
      "Analyzed and cleaned raw ATM transaction data and performed EDA and hypothesis testing",
      "Used trend prediction models to optimize ATM cash refill schedules",
      "Presented findings to leaders at Mu Sigma",
    ],
  },
];

const typeColors: Record<string, string> = {
  Academic: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Research: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Internship: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm">
            Work History
          </p>
          <h2 className="section-title text-4xl">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">Where I&apos;ve worked and what I&apos;ve done</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role + exp.period}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Content card */}
                <div className="md:w-1/2 card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                      <p className="text-indigo-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    <span
                      className={`inline-block border rounded-full px-3 py-1 text-xs font-medium ${
                        typeColors[exp.type]
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-slate-400 text-sm">
                        <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer on the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
