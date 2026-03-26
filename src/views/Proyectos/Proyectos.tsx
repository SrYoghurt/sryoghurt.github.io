// Ejemplo: Projects.jsx
export default function Proyectos() {
  const proyectos = [
    {
      titulo: "App de pizzería",
      descripcion:
        "Tienda online de pizzas con login, carrito, contextos y rutas protegidas.",
      tech: ["React", "Vite", "React Router", "JWT", "Tailwind CSS"],
      linkDemo: "https://tu-demo-pizzeria.vercel.app",
      linkRepo: "https://github.com/tu-usuario/app-pizzeria",
    },
    {
      titulo: "Landing de producto SaaS",
      descripcion:
        "Landing page moderna, responsive, con animaciones suaves y form de contacto.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      linkDemo: "https://tu-landing.vercel.app",
      linkRepo: "https://github.com/tu-usuario/landing-saas",
    },
    // ... más proyectos
  ];

  return (
    <div className="min-h-screen bg-base-200 py-16 px-5 md:px-10">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Proyectos</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p, i) => (
          <div key={i} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">{p.titulo}</h2>
              <p className="mt-2 text-base leading-relaxed">{p.descripcion}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="badge badge-outline badge-ghost badge-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="card-actions mt-4 flex gap-3">
                <a
                  href={p.linkDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Ver demo
                </a>
                <a
                  href={p.linkRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Código en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
