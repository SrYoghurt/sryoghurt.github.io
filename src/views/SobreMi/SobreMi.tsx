const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Git',
  'Node.js'
];

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-16 md:px-10">
        <p className="font-semibold text-primary">Desarrollador Frontend</p>
        <h1 className="mb-10 mt-1 text-3xl font-bold md:text-4xl">Sobre mí</h1>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex justify-center lg:shrink-0">
            <img
              src="../src/assets/img/perfilsobremi.jpg"
              alt="Milton Monsalves"
              className="h-56 w-56 rounded-2xl object-cover shadow-xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Hola, soy Milton Monsalves</h2>
            <p className="leading-relaxed">
              Desarrollador web junior de 31 años, de San Felipe y actualmente vivo en Santiago.
            </p>
            <p className="leading-relaxed">
              Me enfoco en el desarrollo frontend con HTML, CSS, JavaScript y React,
              creando interfaces claras, usables y fáciles de mantener.
            </p>
            <p className="leading-relaxed">
              También estoy estudiando backend y Node.js para ampliar mis conocimientos
              y poder trabajar en aplicaciones full stack en el futuro.
            </p>
            <p className="leading-relaxed">
              Busco mi primera oportunidad como desarrollador frontend junior
              para seguir aprendiendo y aportar en proyectos reales.
            </p>

            <div className="mt-2">
              <h3 className="mb-3 text-lg font-semibold">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="badge badge-outline badge-primary badge-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
