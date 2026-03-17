import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: image + stats */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30" />
              <Image
                src="https://avatars.githubusercontent.com/pranavsenthil5"
                alt="Pranav Vedasendur Senthilvel"
                width={288}
                height={288}
                className="relative rounded-2xl object-cover border border-slate-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { value: "5+", label: "Years of coding" },
                { value: "10+", label: "Projects built" },
                { value: "3.88", label: "GPA at UMBC" },
                { value: "2", label: "Research positions" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="section-title text-4xl mb-6">
              Passionate Developer &amp;{" "}
              <span className="gradient-text">Researcher</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m Pranav Vedasendur Senthilvel, a Computer Science graduate from the University
                of Maryland Baltimore County (UMBC) where I maintained a 3.885 GPA and earned
                both Dean&apos;s List and President&apos;s List recognition.
              </p>
              <p>
                My work spans full-stack web development, IoT and embedded systems, machine learning,
                and robotics. I enjoy building practical solutions—from autonomous rovers to medical
                AI tools and social platforms.
              </p>
              <p>
                I served as Head Teaching Fellow for CMSC 201 at UMBC and conducted undergraduate
                research at Michigan State University, where I worked on sensor networks and
                autonomous navigation systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/pranavsenthil5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pranavvs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:pranavsenthil5@gmail.com"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
