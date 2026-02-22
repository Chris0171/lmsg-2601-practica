
import { Link } from "react-router-dom"
import AnimalCard from "../components/AnimalCard"
import { animals } from "../data/animals"

function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 to-blue-300">
            <header className="py-12 text-center">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Protectora de Animales</h1>
                <p className="text-lg text-blue-700 mb-6">Un lugar donde cada animal encuentra una segunda oportunidad. Únete a nuestra comunidad y descubre un mundo de cariño.</p>
                <div className="flex justify-center gap-4 mb-6">
                    <Link to="/animal/1" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Conoce a Luna</Link>
                    <Link to="/animal/2" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Conoce a Milo</Link>
                </div>
                <div className="flex justify-center gap-4 mb-6">
                    <img className="rounded-3xl border-b-gray-950 shadow-blue-950 " src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/wk3n9xokiyah84pr7uqv" alt="Protectora de animales"/>
                </div>
            </header>
            <main className="flex-1 flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Nuestros Animales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {animals.map(a => (
                        <AnimalCard key={a.nombre} animal={a} />
                    ))}
                </div>
            </main>
            <footer className="py-6 text-center bg-blue-200 text-blue-900 mt-8">
                © 2026 Protectora de Animales. Todos los derechos reservados.
            </footer>
        </div>
    )
}

export default Home
