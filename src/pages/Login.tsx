import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent font-sans text-on-surface antialiased w-full min-h-screen flex"
    >
      <div className="hidden lg:block lg:w-5/12 relative bg-surface-container overflow-hidden">
        <img 
          alt="Massage therapy room" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMRl6K4_e9jvZxTeelbyctz3KZC6bLui8DBAjNhR4xcXCQCfVWicTAEWmvYXGD5d18Fe98bwHJWbXug4P7L0hnu9sHrH3QVkzg0zhpChuzNxENweGdoUcIy7bu3IjEt0l_5ZYZITSHW6TQr5gGFo52mdqaqk2ht8Xnfkr8Xk7-OIu-tL9n_ZtOB4DtfCoFtwTLdPzVaDI6NZuQrFiESTlHBGPKi4kuobLyVgL6y6M2SwKBRm-FGqb0bh9EnZm2ukhb5_0ot2CuHwn" 
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors group-hover:bg-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-on-primary">
          <Flower2 className="w-12 h-12 mb-4 text-white" />
          <h2 className="text-3xl font-headline font-semibold mb-2 text-white">Sanación integral</h2>
          <p className="text-lg text-slate-200">Restaurando el equilibrio natural de tu cuerpo a través de terapia profesional.</p>
        </div>
      </div>

      <main className="w-full lg:w-7/12 flex items-center justify-center p-6 sm:p-12 md:p-24 bg-transparent backdrop-blur-sm">
        <div className="w-full max-w-md flex flex-col items-center glass-card p-8 md:p-12">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-primary shadow-lg backdrop-blur-md">
              <Flower2 className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-headline font-semibold text-white mb-2">Serenidad Masoterapia</h1>
            <p className="text-on-surface-variant">Inicia sesión en tu espacio de bienestar.</p>
          </div>

          <button 
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 mb-8 group active:scale-95" 
            type="button"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="font-semibold text-white">Continuar con Google</span>
          </button>

          <div className="w-full flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">O con tu email</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="email">Email</label>
              <div className="relative">
                <input 
                  className="glass-input w-full pr-12" 
                  id="email" 
                  name="email" 
                  placeholder="tu@correo.com" 
                  required 
                  type="email" 
                />
                <Mail className="absolute right-4 top-3.5 w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="password">Password</label>
                <button className="text-[10px] text-primary hover:text-white transition-colors uppercase tracking-wider font-bold" type="button">Forgot?</button>
              </div>
              <div className="relative">
                <input 
                  className="glass-input w-full pr-12" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
                <Lock className="absolute right-4 top-3.5 w-4 h-4 text-slate-500" />
              </div>
            </div>

            <Link 
              to="/"
              className="glass-button-primary w-full py-4 mt-4 flex items-center justify-center gap-2"
            >
              Ingresar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </form>

          <p className="mt-8 text-sm text-on-surface-variant text-center">
            ¿No tienes una cuenta? {' '}
            <button className="text-primary font-bold hover:text-white transition-colors">Regístrate</button>
          </p>
        </div>
      </main>
    </motion.div>
  );
}
