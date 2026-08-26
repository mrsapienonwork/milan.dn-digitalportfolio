import { motion } from 'motion/react';
import { BarChart3, Database, Code2, LineChart, Cpu, PieChart, Activity, Layers, FileJson, Share2 } from 'lucide-react';

export default function DeepExpertise() {
  return (
    <div className="bg-[#02050A]">
      {/* 5. DATA ANALYTICS */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="w-6 h-6 text-electric-blue" />
                <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Data Analytics</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                From raw data to meaningful conclusions.
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Identifying patterns, trends, relationships, and anomalies that support better decisions. Turning the chaos of raw information into structured, actionable insights.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Data Cleaning', 'Exploratory Data Analysis', 'Data Transformation', 'Pattern Detection', 'Trend Analysis', 'Statistical Analysis', 'Insight Generation'].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold tracking-widest text-slate-300 hover:border-electric-blue/50 hover:text-white transition-colors cursor-default bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-2xl border border-white/10 glass-panel overflow-hidden p-6 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10 w-full flex flex-col gap-4">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="w-full bg-navy-900/50 border border-white/5 rounded-xl p-4 flex items-center justify-between group hover:border-electric-blue/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-electric-blue group-hover:bg-electric-blue/10 transition-colors">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="h-2 w-24 bg-white/20 rounded-full mb-2 group-hover:bg-white/40 transition-colors" />
                        <div className="h-2 w-16 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors" />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-8 bg-electric-blue/20 rounded-full group-hover:bg-electric-blue transition-colors duration-500" style={{ height: `${20 + Math.random() * 30}px` }} />
                      <div className="w-1 h-12 bg-electric-blue/40 rounded-full group-hover:bg-electric-blue transition-colors duration-500 delay-75" style={{ height: `${30 + Math.random() * 30}px` }} />
                      <div className="w-1 h-6 bg-cyan-400/20 rounded-full group-hover:bg-cyan-400 transition-colors duration-500 delay-150" style={{ height: `${10 + Math.random() * 40}px` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. DATA VISUALIZATION */}
      <section className="py-24 relative overflow-hidden border-t border-white/5 bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video lg:aspect-square w-full rounded-2xl border border-white/10 glass-panel overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Visualization Toolkit
              </div>
              <div className="relative z-10 w-full h-full pt-8 flex flex-col gap-4">
                <div className="flex-1 border border-white/5 bg-navy-900/60 rounded-xl p-4 flex items-end gap-2 justify-between">
                  {[40, 70, 45, 90, 65, 30, 80].map((height, i) => (
                    <motion.div 
                      key={i} 
                      className="w-full bg-gradient-to-t from-electric-blue/20 to-electric-blue/80 rounded-t-sm"
                      initial={{ height: "10%" }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 h-1/3">
                  <div className="border border-white/5 bg-navy-900/60 rounded-xl relative overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="20" />
                      <motion.circle 
                        cx="50" cy="50" r="40" fill="transparent" stroke="#00E5FF" strokeWidth="20"
                        strokeDasharray="251"
                        initial={{ strokeDashoffset: 251 }}
                        whileInView={{ strokeDashoffset: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                  <div className="border border-white/5 bg-navy-900/60 rounded-xl p-4 flex flex-col justify-center">
                    <div className="h-1.5 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
                      <motion.div className="h-full bg-cyan-400" initial={{ width: "0%" }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} />
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
                      <motion.div className="h-full bg-electric-blue" initial={{ width: "0%" }} whileInView={{ width: "65%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} />
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-white/40" initial={{ width: "0%" }} whileInView={{ width: "40%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <PieChart className="w-6 h-6 text-electric-blue" />
                <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Data Visualization</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Communicating complex information.
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Through clear, purposeful, and visually compelling dashboards and charts. Designing visual stories that executives and stakeholders can understand at a glance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Excel'].map((tech) => (
                  <div key={tech} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 7. PYTHON */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Code2 className="w-6 h-6 text-electric-blue" />
                <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Python</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                The core analytical environment.
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Using Python as the core environment for data preparation, analysis, visualization, and machine learning workflows.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-md text-[10px] font-bold tracking-widest text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 font-mono text-xs text-slate-400 overflow-hidden relative"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-slate-500">analysis.py</span>
              </div>
              <pre className="overflow-x-auto leading-relaxed">
<span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd
<span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np
<span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns

<span className="text-slate-500"># Load and clean dataset</span>
df = pd.read_csv(<span className="text-green-400">'dataset.csv'</span>)
df = df.dropna().reset_index(drop=<span className="text-orange-400">True</span>)

<span className="text-slate-500"># Perform analytical aggregations</span>
insights = df.groupby(<span className="text-green-400">'category'</span>).agg(&#123;
    <span className="text-green-400">'revenue'</span>: <span className="text-green-400">'sum'</span>,
    <span className="text-green-400">'growth'</span>: <span className="text-green-400">'mean'</span>
&#125;).sort_values(<span className="text-green-400">'revenue'</span>, ascending=<span className="text-orange-400">False</span>)

<span className="text-slate-500"># Visualize core findings</span>
sns.heatmap(df.corr(), annot=<span className="text-orange-400">True</span>, cmap=<span className="text-green-400">'Blues'</span>)
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SQL & DATABASES */}
      <section className="py-24 relative overflow-hidden border-t border-white/5 bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full rounded-2xl border border-white/10 glass-panel overflow-hidden p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10 w-full max-w-sm">
                <div className="flex flex-col gap-3">
                  {[1, 2, 3].map((layer, i) => (
                    <motion.div 
                      key={layer}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className={`h-16 rounded-xl border border-electric-blue/20 flex items-center px-6 gap-4 ${i === 1 ? 'bg-electric-blue/10 ml-8' : 'bg-navy-900/60'}`}
                    >
                      <Database className={`w-5 h-5 ${i === 1 ? 'text-electric-blue' : 'text-slate-500'}`} />
                      <div className={`h-2 rounded-full ${i === 1 ? 'w-32 bg-electric-blue/50' : 'w-24 bg-white/10'}`} />
                    </motion.div>
                  ))}
                </div>
                <div className="absolute top-1/2 right-12 w-16 h-px bg-electric-blue/40" />
                <div className="absolute top-1/4 bottom-1/4 right-12 w-px bg-electric-blue/40" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Database className="w-6 h-6 text-electric-blue" />
                <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">SQL & Databases</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Extracting the foundation.
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Interrogating relational databases to extract, filter, and aggregate the raw materials needed for deep analysis.
              </p>
              
              <ul className="space-y-4">
                {['SQL Queries & Scripts', 'Data Extraction & Filtering', 'Table Joins & Relationships', 'Complex Aggregations', 'Database Analysis'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-electric-blue mt-1">▪</span>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 9. STATISTICS & 10. MACHINE LEARNING (Side by side on desktop) */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <LineChart className="w-32 h-32 text-electric-blue" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-8">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">STATISTICS</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 min-h-[80px]">
                  Validating analytical findings with mathematical rigor. Moving beyond basic averages to understand true distributions and correlations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Descriptive Statistics', 'Probability', 'Correlation', 'Distribution Analysis', 'Hypothesis Testing', 'Regression', 'Statistical Interpretation'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Machine Learning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu className="w-32 h-32 text-cyan-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-8">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">MACHINE LEARNING</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 min-h-[80px]">
                  Applying predictive algorithms to classify data, forecast future trends, and uncover hidden groupings within complex datasets.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Data Preparation', 'Feature Analysis', 'Model Training', 'Model Evaluation', 'Classification', 'Regression', 'Predictive Analysis'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">Primary Toolkit</div>
                  <div className="text-sm font-bold text-cyan-400 tracking-widest">SCIKIT-LEARN</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
