import type { Animal } from "../types/Animal"
import { Link } from "react-router-dom"

interface Props {
    animal: Animal
}

export default function AnimalCard({ animal }: Props) {
    return (
        <div>
            <img src={animal.imagen} width="200" />
            <h2>{animal.nombre}</h2>
            <p>{animal.especie}</p>
            <Link to={`/animal/${animal.nombre}`}>Ver detalle</Link>
        </div>
    )
}
