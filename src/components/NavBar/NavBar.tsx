
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <header className="navbar sticky top-0 z-10 border-b border-base-300 bg-base-100/90 backdrop-blur">
        <div className="navbar-start">
          <div className="md:hidden">
            <button
              aria-label="Abrir menú"
              className="btn btn-square btn-ghost"
              onClick={() => setIsSidebarOpen(true)}
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </button>
          </div>
          <NavLink to="/" className="text-base font-bold sm:text-lg">MILTON</NavLink>
        </div>
        <div className="navbar-end gap-4">
          <nav className="hidden gap-4 text-sm md:flex">
            <Link className="link link-hover no-underline" to="/proyectos">Proyectos</Link>
            <Link className="link link-hover no-underline" to="/sobre-mi">Sobre mí</Link>
            <Link className="link link-hover no-underline" to="/contacto">Contacto</Link>
          </nav>
          <button
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="btn btn-ghost btn-sm btn-circle"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            type="button"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 md:hidden ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          aria-label="Cerrar menú"
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsSidebarOpen(false)}
          type="button"
        />
        <aside
          className={`absolute left-0 top-0 h-full w-80 max-w-[88vw] overflow-hidden border-r border-base-300/70 bg-base-100/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-0 top-40 h-28 w-28 rounded-full bg-secondary/15 blur-3xl" />
          </div>

          <div className="relative flex h-full flex-col p-5">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Navegación</p>
                <span className="mt-2 block text-2xl font-black tracking-tight text-base-content">MENU</span>
              </div>
              <button
                aria-label="Cerrar menú"
                className="btn btn-ghost btn-sm btn-circle border border-base-300/70 bg-base-100/70"
                onClick={() => setIsSidebarOpen(false)}
                type="button"
              >
                ✕
              </button>
            </div>



            <nav className="flex flex-1 flex-col gap-2 text-base">
              <NavLink
                className={({ isActive }) => `group rounded-2xl border px-4 py-3 transition-all duration-200 ${isActive ? 'border-primary/30 bg-primary/12 text-primary shadow-sm' : 'border-base-300/50 bg-base-100/60 text-base-content hover:border-base-300 hover:bg-base-200/80'}`}
                onClick={() => setIsSidebarOpen(false)}
                to="/"
              >
              
                <span className="mt-1 block text-base font-semibold">Volver al inicio</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `group rounded-2xl border px-4 py-3 transition-all duration-200 ${isActive ? 'border-primary/30 bg-primary/12 text-primary shadow-sm' : 'border-base-300/50 bg-base-100/60 text-base-content hover:border-base-300 hover:bg-base-200/80'}`}
                onClick={() => setIsSidebarOpen(false)}
                to="/proyectos"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45 group-hover:text-base-content/60">Trabajo</span>
                <span className="mt-1 block text-base font-semibold">Proyectos</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `group rounded-2xl border px-4 py-3 transition-all duration-200 ${isActive ? 'border-primary/30 bg-primary/12 text-primary shadow-sm' : 'border-base-300/50 bg-base-100/60 text-base-content hover:border-base-300 hover:bg-base-200/80'}`}
                onClick={() => setIsSidebarOpen(false)}
                to="/sobre-mi"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45 group-hover:text-base-content/60">Perfil</span>
                <span className="mt-1 block text-base font-semibold">Sobre mí</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => `group rounded-2xl border px-4 py-3 transition-all duration-200 ${isActive ? 'border-primary/30 bg-primary/12 text-primary shadow-sm' : 'border-base-300/50 bg-base-100/60 text-base-content hover:border-base-300 hover:bg-base-200/80'}`}
                onClick={() => setIsSidebarOpen(false)}
                to="/contacto"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45 group-hover:text-base-content/60">Contacto</span>
                <span className="mt-1 block text-base font-semibold">Hablemos</span>
              </NavLink>
            </nav>

          </div>
        </aside>
      </div>
    </>
  )
}
