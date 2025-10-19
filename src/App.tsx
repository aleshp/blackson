import { useState, useEffect } from 'react'
import { Ghost, Brain, Play, ChevronDown } from 'lucide-react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeChapter, setActiveChapter] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <div
        className="fixed w-96 h-96 pointer-events-none z-50 opacity-20 blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)'
        }}
      />

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
            style={{
              backgroundImage: 'url(/src/assets/bg rain.jpg)',
              transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.5}px)`,
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div
            className="transform transition-all duration-700"
            style={{
              opacity: 1 - scrollY * 0.003,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-center mb-6 tracking-wider">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                THE
              </span>
              <br />
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
                BLACKSON
              </span>
              <br />
              <span className="inline-block text-6xl md:text-7xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                INVESTIGATIONS
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-slate-300 mb-8 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              An AI-Powered Detective Visual Novel
              <br />
              <span className="text-lg text-slate-400">Where Logic Meets Horror</span>
            </p>

            <div className="flex gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-lg font-semibold">
                  <Play size={20} />
                  Play Now
                </span>
              </button>

              <button className="px-8 py-4 bg-transparent border border-slate-600 rounded-lg transition-all duration-300 hover:bg-slate-800/30 hover:border-slate-400">
                <span className="text-lg font-semibold">Watch Trailer</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Experience True Detective Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={48} />, title: 'AI-Driven NPCs', desc: 'Interrogate intelligent characters powered by advanced AI. Every conversation is unique.' },
              { icon: <Ghost size={48} />, title: 'Psychological Horror', desc: 'Face supernatural mysteries that challenge your perception of reality.' },
              { icon: '🧩', title: 'Critical Thinking', desc: 'Solve complex cases using logic, deduction, and careful observation.' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-slate-500 hover:shadow-2xl hover:shadow-slate-700/50"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${idx * 0.2}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-slate-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {typeof feature.icon === 'string' ? <span className="text-5xl">{feature.icon}</span> : feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/src/assets/bg rain.jpg)',
            transform: `translateY(${(scrollY - 800) * 0.3}px)`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div
            className="transform transition-all duration-700"
            onMouseEnter={() => setActiveChapter(1)}
            onMouseLeave={() => setActiveChapter(null)}
          >
            <div className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-full mb-6">
              <span className="text-sm font-semibold text-slate-300">CHAPTER I</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-slate-100 to-amber-300 bg-clip-text text-transparent">
                London
              </span>
              <br />
              <span className="text-slate-300">1980s</span>
            </h2>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The fog-shrouded streets of London hide more than just shadows.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Detective Blackson must navigate a world where the supernatural
                bleeds into reality, where ghosts whisper secrets of unsolved murders,
                and where the line between this world and the next grows dangerously thin.
              </p>
              <p className="animate-fade-in-up text-slate-400" style={{ animationDelay: '0.6s' }}>
                <span className="text-amber-400 font-semibold">Themes:</span> Victorian Gothic Horror, Paranormal Investigation, British Folklore
              </p>
            </div>

            <button className="mt-8 group relative px-8 py-4 bg-gradient-to-r from-amber-900/50 to-slate-800/50 backdrop-blur-sm border border-amber-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/50">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-lg font-semibold text-amber-100">
                Explore London
                <ChevronDown size={20} className="rotate-[-90deg]" />
              </span>
            </button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl group-hover:border-amber-600/50 transition-all duration-500">
              <img
                src="/src/assets/bg rain.jpg"
                alt="London 1980s"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/src/assets/bg sc sh shal.png)',
            transform: `translateY(${(scrollY - 1800) * 0.3}px)`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 to-transparent blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl group-hover:border-teal-600/50 transition-all duration-500">
              <img
                src="/src/assets/bg sc sh shal.png"
                alt="Kazakhstan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>

          <div
            className="transform transition-all duration-700 order-1 md:order-2 text-right"
            onMouseEnter={() => setActiveChapter(2)}
            onMouseLeave={() => setActiveChapter(null)}
          >
            <div className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-full mb-6">
              <span className="text-sm font-semibold text-slate-300">CHAPTER II</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-300 via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                Kazakhstan
              </span>
              <br />
              <span className="text-slate-300">Shaitan Tales</span>
            </h2>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The vast steppes hold ancient secrets and darker folklore.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Blackson ventures into Central Asian mysticism, confronting the Shaitan—
                malevolent spirits from Kazakh legends. Here, traditional beliefs clash
                with modern investigation as the detective unravels mysteries that locals
                have feared for generations.
              </p>
              <p className="animate-fade-in-up text-slate-400" style={{ animationDelay: '0.6s' }}>
                <span className="text-teal-400 font-semibold">Themes:</span> Central Asian Folklore, Demonic Entities, Cultural Mysticism
              </p>
            </div>

            <button className="mt-8 group relative px-8 py-4 bg-gradient-to-r from-teal-900/50 to-slate-800/50 backdrop-blur-sm border border-teal-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-900/50">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-lg font-semibold text-teal-100">
                Explore Kazakhstan
                <ChevronDown size={20} className="rotate-[-90deg]" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 bg-gradient-to-b from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Are You Ready to Investigate?
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Test your logic. Face your fears. Uncover the truth.
          </p>
          <button className="group relative px-12 py-6 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 text-xl font-bold">
              <Play size={24} />
              Start Your Investigation
            </span>
          </button>
        </div>
      </section>

      <footer className="relative py-12 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p className="mb-2">&copy; 2025 The Blackson Investigations. All rights reserved.</p>
          <p className="text-sm">An AI-Powered Visual Novel Experience</p>
        </div>
      </footer>
    </div>
  )
}

export default App
