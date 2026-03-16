const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "C"],
  },
  {
    title: "Web & Frameworks",
    icon: "🌐",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Linux", "Git", "Docker", "Cloud Platforms"],
  },
  {
    title: "IoT & Robotics",
    icon: "🤖",
    skills: ["Arduino", "ROS", "LoRa", "Sensor Integration", "IoT Platforms"],
  },
  {
    title: "Machine Learning",
    icon: "🧠",
    skills: ["PyTorch", "HuggingFace", "T5", "BERT", "EDA", "Data Science"],
  },
  {
    title: "Tools & Practices",
    icon: "🛠️",
    skills: ["Agile", "REST APIs", "PostgreSQL", "Supabase", "Auth0"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm">
            What I Know
          </p>
          <h2 className="section-title text-4xl">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A broad set of tools and technologies I&apos;ve worked with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
