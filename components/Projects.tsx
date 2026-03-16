const projects = [
  {
    title: "Drift – Social Travel Platform",
    description:
      "A platform for travelers to share experiences, connect with fellow travelers, and plan upcoming journeys. Built with a team of 6.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Python API"],
    period: "Sep 2023 – Dec 2023",
    course: "CMSC 447 – Software Engineering",
    github: "https://github.com/pranavsenthil5/CMSC447-TravelApp",
  },
  {
    title: "Medical Form Question-Answering",
    description:
      "Finetuned T5 (small) and BERT (distilled) to classify medical form questions. Built a React app using the Hugging Face API for an interactive demo.",
    tags: ["Machine Learning", "T5", "BERT", "HuggingFace", "React"],
    period: "Oct 2023 – Dec 2023",
    course: "CMSC 468 – Machine Learning",
  },
  {
    title: "Sophér – Medical Form Auto-filler",
    description:
      "Hackathon project that scans medical forms and automatically populates answer fields using Document AI and GPT-3.",
    tags: ["Next.js", "Capacitor", "Google Document AI", "OpenAI GPT-3"],
    period: "HopHacks 2023",
  },
  {
    title: "Audio Logger Dashboard",
    description:
      "A dashboard for visualizing and analyzing audio logger data from sensors deployed on research farms.",
    tags: ["HTML", "JavaScript", "Dashboard", "IoT"],
    github: "https://github.com/pranavsenthil5/audio-logger-dashboard",
  },
  {
    title: "Grit Meals Scraper",
    description:
      "A Python web scraper to extract and organize meal data, making it easier to track and analyze nutritional information.",
    tags: ["Python", "Web Scraping"],
    github: "https://github.com/pranavsenthil5/GritMealsScraper",
  },
  {
    title: "Drone Indoor Navigation",
    description:
      "Implemented an indoor navigation stack for autonomous drone operation using Python and robotics libraries.",
    tags: ["Python", "ROS", "Robotics", "Computer Vision"],
    github: "https://github.com/pranavsenthil5/drone-indoor-navigation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm">
            What I&apos;ve Built
          </p>
          <h2 className="section-title text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some of the things I&apos;ve created</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card flex flex-col hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <svg
                  className="w-8 h-8 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={`GitHub for ${project.title}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>

              {(project.period || project.course) && (
                <p className="text-slate-500 text-xs mb-2">
                  {project.course && <span>{project.course} &middot; </span>}
                  {project.period}
                </p>
              )}

              <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/pranavsenthil5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
