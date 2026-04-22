import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ChevronDown, 
  Mail,
  Globe,
  Calendar,
  Flower2,
  HeartPulse,
  Dumbbell,
  Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cuánto dura una sesión típica?",
      a: "Una sesión estándar tiene una duración de 50 a 60 minutos, lo que incluye una breve evaluación inicial (en caso de ser la primera visita) y el tratamiento manual enfocado en las áreas problemáticas."
    },
    {
      q: "¿Qué debo llevar o usar para la cita?",
      a: "Te recomendamos asistir con ropa cómoda y holgada. Para la mayoría de los masajes, se te pedirá que te desvistas hasta tu nivel de comodidad, y siempre estarás cubierto con sábanas limpias, dejando expuesta solo el área que se está tratando."
    },
    {
      q: "¿El masaje descontracturante duele?",
      a: "El masaje descontracturante trabaja tejidos profundos, por lo que puedes sentir cierta presión o una molestia 'buena' en zonas muy tensas. Sin embargo, la presión siempre se ajusta a tu tolerancia; la comunicación constante es clave durante la sesión."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent text-on-background font-sans antialiased pt-20 pb-24 md:pb-0"
    >
      {/* TopAppBar */}
      <header className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 h-20">
          <div className="flex items-center gap-2 text-primary hover:text-white transition-all duration-300 active:scale-95 cursor-pointer">
            <HeartPulse className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight font-headline">Marcos Di Sparti</span>
          </div>
          <div className="hidden md:flex items-center gap-6 mr-8">
            <button className="text-on-surface-variant hover:text-white transition-colors font-semibold">Servicios</button>
            <button className="text-on-surface-variant hover:text-white transition-colors font-semibold">Preguntas</button>
            <button className="text-on-surface-variant hover:text-white transition-colors font-semibold">Contacto</button>
          </div>
          <Link 
            to="/booking"
            className="glass-button-primary px-6 py-2.5"
          >
            Agendar Sesión
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto overflow-hidden">
        {/* Hero Section */}
        <section className="px-8 pt-12 pb-20 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <span className="px-3 py-1 bg-white/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">Tu bienestar es prioridad</span>
              <h1 className="text-5xl md:text-6xl font-headline font-bold text-white leading-tight">
                Recupera tu bienestar con masoterapia profesional
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Tratamientos especializados para aliviar el dolor, reducir el estrés y mejorar tu calidad de vida. Salud física integral.
              </p>
              <div className="pt-4">
                <Link 
                  to="/booking"
                  className="glass-button-primary px-8 py-4 flex items-center w-fit gap-2"
                >
                  Agendar Sesión
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2">
              <img 
                alt="Massage therapy" 
                className="w-full h-full object-cover rounded-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB7xiUk1PbUGou76IFciB1CJzcn15BwQg3W1UjSm3nL9XhyfNACg6pCkgEL8vkVF8SiuQsjAQqJw4RB544M6dMNWl8EqT1wKv_7sIcB7sDQWD_B5q9aKvdN_qZm_bLYQoKP5ZfjBjPJx4d05Jx7C9mFVQj2XWRwYKbVz2Xv5VBwGg4qg4bhmcasnVjJhcjOymm5OhnqSwY1YmMZAwZI2SQQSZNrnKQqJxNfSyQ8ZvoxKtCBABxQROWqoo1xshvesBB1Yh0CsiTj9dJ" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 glass-card group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-white mb-2">Masoterapeutas certificados</h3>
                <p className="text-on-surface-variant text-sm">Profesionales altamente capacitados y con experiencia comprobada.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 glass-card group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-white mb-2">Atención personalizada</h3>
                <p className="text-on-surface-variant text-sm">Tratamientos adaptados a las necesidades específicas de tu cuerpo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 glass-card group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-white mb-2">Resultados desde la 1era sesión</h3>
                <p className="text-on-surface-variant text-sm">Alivio inmediato y progreso constante hacia tu bienestar total.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Focus */}
        <section className="px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">Tu salud en manos expertas</h2>
            <p className="text-lg text-on-surface-variant">Nuestros tratamientos están diseñados para abordar diferentes necesidades físicas, combinando técnicas comprobadas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="glass-card p-8 relative overflow-hidden group hover:bg-white/[0.08] transition-colors duration-300">
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase py-1 px-3 glass-card rounded-full">
                Más solicitado
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-3">Masaje Descontracturante</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Tratamiento profundo enfocado en liberar tensiones musculares acumuladas, ideal para dolores crónicos de espalda.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Espalda</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Cuello</span>
              </div>
              <Link to="/booking" className="block w-full py-3 text-center rounded-full border border-white/10 font-semibold text-white hover:bg-primary transition-all duration-300">Saber más</Link>
            </div>
            {/* Service Card 2 */}
            <div className="glass-card p-8 relative overflow-hidden group hover:bg-white/[0.08] transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                <Flower2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-3">Masaje Relajante</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Técnicas suaves y continuas diseñadas para reducir el estrés mental y físico, promoviendo calma profunda.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Estrés</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Relax</span>
              </div>
              <Link to="/booking" className="block w-full py-3 text-center rounded-full border border-white/10 font-semibold text-white hover:bg-primary transition-all duration-300">Saber más</Link>
            </div>
            {/* Service Card 3 */}
            <div className="glass-card p-8 relative overflow-hidden group hover:bg-white/[0.08] transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-sm">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-3">Masaje Deportivo</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Preparación y recuperación muscular para atletas. Ayuda a prevenir lesiones y mejora el rendimiento.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Atletas</span>
                <span className="px-3 py-1 bg-white/5 rounded-md text-on-surface-variant text-[10px] uppercase font-bold">Recuperación</span>
              </div>
              <Link to="/booking" className="block w-full py-3 text-center rounded-full border border-white/10 font-semibold text-white hover:bg-primary transition-all duration-300">Saber más</Link>
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="px-8 py-20 font-sans">
          <div className="glass-card bg-primary/20 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex-1">
              <span className="inline-block px-4 py-1 bg-white/10 text-primary-container rounded-full text-xs font-bold mb-4 uppercase tracking-wider backdrop-blur-md">Promoción del Mes</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 leading-tight text-white">1era Sesión de Evaluación + Tratamiento</h2>
              <p className="text-lg text-slate-300 mb-0">Comienza tu camino hacia el bienestar con un diagnóstico completo y tu primer masaje terapéutico a un valor especial.</p>
            </div>
            <div className="relative z-10 glass-card p-8 text-center min-w-[280px] bg-white/10">
              <p className="text-slate-400 line-through mb-1 font-semibold">Valor Normal: $45.000</p>
              <p className="text-5xl font-headline font-bold text-white mb-6">$30.000</p>
              <Link 
                to="/booking"
                className="block w-full glass-button-primary py-4 text-center"
              >
                Reservar Promo
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-bold text-white mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-on-surface-variant">Resolvemos tus dudas antes de tu primera consulta.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="glass-card overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex cursor-pointer items-center justify-between gap-4 p-6 text-left w-full"
                  >
                    <h3 className="text-lg font-headline font-semibold text-white">{faq.q}</h3>
                    <div className={`p-2 rounded-full glass-card transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass-nav w-full py-16 mt-20 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm leading-relaxed text-slate-300">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <HeartPulse className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold tracking-tight font-headline text-white">Marcos Di Sparti</span>
            </div>
            <p className="text-slate-400 mb-6">© 2024 Marcos Di Sparti Masoterapia. Especialistas en bienestar y recuperación física.</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 glass-card flex items-center justify-center text-white hover:bg-primary transition-all">
                <Globe className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 glass-card flex items-center justify-center text-white hover:bg-primary transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-[10px] text-slate-500">Navegación</h4>
            <ul className="space-y-4 font-semibold">
              <li><button className="text-slate-400 hover:text-white transition-colors">Servicios</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors">Especialidades</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors">Preguntas</button></li>
              <li><button className="text-primary hover:text-primary-container">Contacto</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-[10px] text-slate-500">Contacto</h4>
            <ul className="space-y-5 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>La Concepción 165<br />Providencia, Santiago</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Lun - Vie: 09:00 a 20:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-[10px] text-slate-500">Ubicación</h4>
            <div className="w-full h-32 glass-card overflow-hidden relative overflow-hidden group">
              <img 
                alt="Map" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXskdCHlSXtxD7oblwbYiRpuLwwgvWG1wxhTM9YENoTnEzY7PSULwX_GSCEoxIWnUEvXScanKxEbfTMrmx-A0du-PXKFltw3miJzOYViWKs0mM7mTLOStPK5d2qqqYcCzRmI5eincCC6pTLrlbxclTIV5iyI7F8d5eZd-K_CIlAX0AKirsuAqJg7vFIf7Fwpef6NHz_4gQZlj48_1UKYZ8D_IalAdSYRKxqVJRValZb8djAI2h_8_D38lAP49eHVT1VeJ8eErTKUa2" 
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-nav p-4 z-40 md:hidden backdrop-blur-xl">
        <Link 
          to="/booking"
          className="w-full glass-button-primary py-4 flex items-center justify-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Agendar Sesión
        </Link>
      </div>
    </motion.div>
  );
}
