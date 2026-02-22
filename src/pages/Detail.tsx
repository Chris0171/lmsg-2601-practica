import { useParams } from "react-router-dom"
import { animals } from "../data/animals"

function Detail() {
    const { nombre } = useParams()

    const animal = animals.find(a => a.nombre === nombre)

    if (!animal) {
        return <p>Animal no encontrado</p>
    }

    return (
       <div className="flex flex-col items-left p-5">
           <div>
               <h1 className="border-l-4 border-b-indigo-300 pl-3 rounded-sm">{animal.nombre}</h1>
               <img className="rounded-xl border-3 border-b-blue-950 shadow-black" src={animal.imagen} width="300" />
               <p>{animal.descripcion}</p>
               <p>Edad: {animal.edad} años</p>
           </div>
       </div>
    )
}

export default Detail
