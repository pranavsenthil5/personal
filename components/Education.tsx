const education = [
  {
    degree: "B.S. Computer Science",
    institution: "University of Maryland Baltimore County (UMBC)",
    period: "Expected Graduation: Dec 2024",
    gpa: "3.885",
    highlights: ["President's List", "Dean's List"],
    description:
      "Focused on algorithms, data structures, software engineering, machine learning, and systems programming.",
    logo: "🎓",
  },
  {
    degree: "High School Diploma",
    institution: "Isha Home School, India",
    period: "Graduated: May 2020",
    highlights: [],
    description:
      "Completed secondary education with strong foundations in mathematics and sciences.",
    logo: "📚",
  },
];

const certifications = [
  { name: "Machine Learning (CMSC 468)", issuer: "UMBC" },
  { name: "Software Engineering (CMSC 447)", issuer: "UMBC" },
  { name: "Data Structures & Algorithms (CMSC 341)", issuer: "UMBC" },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase text-sm">
            Academic Background
          </p>
          <h2 className="section-title text-4xl">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">My academic journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu) => (
            <div key={edu.institution} className="card">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{edu.logo}</span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mb-3">{edu.period}</p>

                  {edu.gpa && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-slate-400 text-sm">GPA:</span>
                      <span className="text-white font-bold">{edu.gpa}</span>
                      <span className="text-indigo-400 text-xs">/ 4.0</span>
                    </div>
                  )}

                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {edu.highlights.map((h) => (
                        <span key={h} className="tag text-xs">
                          🏆 {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-slate-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="card">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <span>📋</span> Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2"
              >
                <span className="text-indigo-400 text-sm font-medium">{cert.name}</span>
                <span className="text-slate-500 text-xs">· {cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
