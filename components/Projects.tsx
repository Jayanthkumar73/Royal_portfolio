import React from 'react';
import Section from './Section';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Urban Transportation System",
      tech: "Python, ML, Google Colab",
      description: "A data-driven Smart Urban Transportation Management System designed to optimize networks, reduce congestion, and improve efficiency using real-time data.",
      features: [
        "Traffic congestion classification using Random Forest & Gradient Boosting",
        "Time series analysis for traffic forecasting",
        "Anomaly detection for unusual events"
      ],

    },
    {
      title: "Expense Tracker",
      tech: "React.js, Node.js, Express, MongoDB",
      description: "A comprehensive full-stack web application to track income, expenses, and budgets with a focus on clean UI and user privacy.",
      features: [
        "JWT-based secure authentication",
        "Dynamic visualizations & budget alerts",
        "Modular, scalable architecture"
      ],

    }
  ];

  return (
    <Section id="projects" className="py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Innovation through code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-panel rounded-3xl p-8 border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,243,255,0.15)] group relative overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neon-cyan">
                  {project.tech}
                </span>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-neon-purple shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>


            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CheckCircleIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);

const ArrowUpRightIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);

export default Projects;