

import fotoCv from '../../assets/img/fotocv.jpg'

export default function Main() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <main className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={fotoCv}
                    className="max-w-sm rounded-lg shadow-2xl mask mask-hexagon-2"
                />
                <div>
                    <p className="font-semibold text-primary">Desarrollador Frontend React/JS</p>
                    <h1 className="text-5xl font-bold">Hola, soy Milton. Bienvenido a mi portafolio personal.</h1>
                    <p className="py-6">
                        Acá encontrarás algunos de mis proyectos y si quieres saber un poco sobre mí. Si quieres contactarme, no dudes en enviarme un mensaje. ¡Gracias por visitar mi sitio!.
                    </p>
                </div>
            </main>
        </div>
    )
}
