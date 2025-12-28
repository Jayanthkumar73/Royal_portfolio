import React from 'react';
import Section from './Section';
import profilePic from './vyshnavi_profile.jpeg';

const About: React.FC = () => {
  return (
    <Section id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio & Image */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-white/10">
                {/* Placeholder for the profile image */}
                <img
                  src={profilePic}
                  alt="P. Vyshnavi Royal"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                I am a passionate Computer Science student with over 2 years of hands-on experience in AI/ML and full-stack development.
                My journey involves building scalable web applications and designing intelligent machine learning solutions.
                Currently, I am seeking an entry-level software development or AI/ML engineer position to apply my skills in solving real-world problems.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Data Science', 'Machine Learning', 'Full Stack'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="glass-panel p-6 rounded-2xl mt-8 border-l-4 border-l-neon-blue">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5 text-neon-blue" />
              Work Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Data Science Intern</h4>
                  <span className="text-sm font-mono text-slate-500">June 2024 - July 2024</span>
                </div>
                <p className="text-neon-blue font-medium mb-2">EDUBOT</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                  <li>Worked on a Smart Urban Transportation Management System using Python, ML, and Google Colab.</li>
                  <li>Focused on data preprocessing, model development, and traffic pattern analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <GraduationCapIcon className="w-6 h-6 text-neon-cyan" />
            Education
          </h3>

          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-neon-cyan transition-colors">B.Tech in CSE</h4>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">2022 - 2026</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">SRM University AP</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                GPA: 7.69/10.0
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-neon-cyan transition-colors">Intermediate (Class 12th)</h4>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">2020 - 2022</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">Resonance College</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                GPA: 9.4/10.0
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-neon-cyan">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Science', 'Python Programming', 'MongoDB'].map(cert => (
                  <span key={cert} className="px-2 py-1 text-xs border border-slate-300 dark:border-slate-700 rounded bg-slate-100 dark:bg-slate-900">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const GraduationCapIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 0 6-1 6-1v-4c-6 0-6-1-6-1z" /></svg>
);

const BriefcaseIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

export default About;