import { motion } from 'motion/react';
import { 
  HeartPulse, 
  Home as HomeIcon, 
  Stethoscope, 
  Calendar, 
  User, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  CalendarPlus, 
  RefreshCw,
  Clock,
  MapPin,
  Check,
  Flower2,
  Dumbbell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Booking() {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    {
      id: 0,
      name: "Descontracturante",
      desc: "Alivio profundo para tensiones musculares severas.",
      duration: "60 min",
      price: "$45.000",
      icon: Stethoscope
    },
    {
      id: 1,
      name: "Relajante",
      desc: "Terapia suave para reducir el estrés y promover el descanso.",
      duration: "50 min",
      price: "$35.000",
      icon: Flower2
    },
    {
      id: 2,
      name: "Deportivo",
      desc: "Preparación y recuperación muscular para atletas.",
      duration: "60 min",
      price: "$40.000",
      icon: Dumbbell
    }
  ];

  const timeSlots = ["09:00", "10:30", "12:00", "15:00", "16:30", "18:00"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent text-on-background antialiased pb-24 md:pb-0 font-sans min-h-screen"
    >
      {/* TopAppBar - Desktop */}
      <header className="fixed top-0 left-0 w-full z-50 hidden md:flex justify-between items-center px-8 h-20 glass-nav border-b border-white/5 transition-all duration-300">
        <div className="flex items-center gap-4 text-primary">
          <HeartPulse className="w-8 h-8" />
          <span className="text-xl font-bold font-headline tracking-tight text-white">Serenidad Masoterapia</span>
        </div>
        <nav className="flex gap-8">
          <Link to="/" className="text-on-surface-variant hover:text-white px-3 py-2 rounded-md font-semibold transition-colors">Inicio</Link>
          <button className="text-on-surface-variant hover:text-white px-3 py-2 rounded-md font-semibold transition-colors">Servicios</button>
          <button className="text-primary font-bold px-3 py-2 border-b-2 border-primary">Citas</button>
          <Link to="/login" className="text-on-surface-variant hover:text-white px-3 py-2 rounded-md font-semibold transition-colors">Perfil</Link>
        </nav>
        <div className="w-10 h-10 rounded-full overflow-hidden glass-card flex items-center justify-center">
          <User className="w-5 h-5 text-on-surface-variant" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 pt-12 md:pt-32 pb-20 flex flex-col gap-12">
        {/* Header Section */}
        <section className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-headline font-bold text-white">Reserva tu momento de calma</h1>
          <p className="text-lg text-on-surface-variant">Sigue estos sencillos pasos para asegurar tu sesión de masoterapia. Tu bienestar está a unos clics de distancia.</p>
        </section>

        {/* Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Step 1: Selección de Servicio */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold glass-card">1</div>
                <h2 className="text-2xl font-headline font-bold text-white">Selección de servicio</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;
                  return (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`relative glass-card p-5 flex flex-col gap-4 cursor-pointer transition-all duration-300 ${
                        isSelected 
                        ? 'bg-primary/20 border-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                        : 'hover:bg-white/5 border-white/5'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4 text-primary">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                      )}
                      <Icon className={`w-10 h-10 ${isSelected ? 'text-primary' : 'text-slate-500'}`} />
                      <div className="flex flex-col gap-1">
                        <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-slate-400'}`}>{service.name}</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{service.desc}</p>
                      </div>
                      <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-center text-sm">
                        <span className="text-on-surface-variant font-medium">{service.duration}</span>
                        <span className={`font-bold ${isSelected ? 'text-white' : 'text-primary'}`}>{service.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Calendario y Horario */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold glass-card ${
                  selectedService !== null ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-600'
                }`}>2</div>
                <h2 className={`text-2xl font-headline font-bold ${
                  selectedService !== null ? 'text-white' : 'text-slate-600'
                }`}>Fecha y hora</h2>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-opacity duration-300 ${selectedService !== null ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                {/* Calendar */}
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <button className="p-2 rounded-full glass-card hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5 text-white" /></button>
                    <span className="font-bold text-white">Octubre 2024</span>
                    <button className="p-2 rounded-full glass-card hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5 text-white" /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest pb-2 border-b border-white/5">
                    <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {[28, 29, 30].map(d => <div key={`prev-${d}`} className="p-2 text-slate-800 text-sm">{d}</div>)}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                      <button 
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`p-2 rounded-xl text-sm font-semibold transition-all ${
                          selectedDate === d 
                          ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-110' 
                          : 'hover:bg-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="flex flex-col gap-6">
                  <span className="font-bold text-white mb-2">Horarios para el {selectedDate}</span>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 glass-card font-semibold transition-all ${
                          selectedTime === time 
                          ? 'bg-primary/20 text-white border-primary border' 
                          : 'text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="glass-card p-8 flex flex-col gap-8 bg-white/5">
              <h3 className="text-2xl font-headline font-bold text-white border-b border-white/5 pb-4">Resumen</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Servicio</span>
                    <span className="text-lg font-bold text-primary">{services[selectedService].name}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{services[selectedService].price}</span>
                </div>

                <div className={`flex flex-col transition-opacity ${selectedTime ? 'opacity-100' : 'opacity-30'}`}>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Fecha y Hora</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-white">
                      {selectedTime ? `${selectedDate} Oct, ${selectedTime}` : 'Selecciona horario'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Lugar</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-white">Providencia, Santiago</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 flex justify-between items-center font-headline">
                <span className="text-2xl font-bold text-white">Total</span>
                <span className="text-3xl font-bold text-primary">{services[selectedService].price}</span>
              </div>

              <button 
                disabled={!selectedTime}
                className={`glass-button-primary w-full py-5 flex items-center justify-center gap-3 ${
                  !selectedTime ? 'opacity-30 grayscale cursor-not-allowed' : ''
                }`}
              >
                <CalendarPlus className="w-6 h-6" />
                Confirmar
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-600">
                <RefreshCw className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Asistente Virtual Activo</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav - Mobile */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 glass-nav border-t border-white/5 md:hidden">
        <Link to="/" className="flex flex-col items-center justify-center text-slate-500 hover:text-white transition-all active:scale-90">
          <HomeIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Inicio</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-slate-500 hover:text-white transition-all active:scale-90">
          <Flower2 className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Servicios</span>
        </button>
        <button className="flex flex-col items-center justify-center text-primary scale-110">
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-white">Citas</span>
        </button>
        <Link to="/login" className="flex flex-col items-center justify-center text-slate-500 hover:text-white transition-all active:scale-90">
          <User className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
        </Link>
      </nav>

      {/* Desktop Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 glass-nav border-t border-white/5 text-slate-500 mb-16 md:mb-0">
        <div className="font-bold text-primary">
          © 2024 Serenidad Masoterapia
        </div>
        <div className="flex gap-8 font-semibold text-xs uppercase tracking-widest">
          <button className="hover:text-white transition-colors">Privacidad</button>
          <button className="hover:text-white transition-colors">Términos</button>
          <button className="hover:text-primary transition-colors">Soporte</button>
        </div>
      </footer>
    </motion.div>
  );
}
