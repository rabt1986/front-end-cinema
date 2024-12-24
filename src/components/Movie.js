import React from "react";

export const Movie = ({titulo, imagen , sinopsis, duracion, genero, puntuacion, boton}) => {
    return (
        <div className="card">
            <h3>Titulo: {titulo}</h3>
            <img src={imagen} alt="Imagen" />
            <p>Sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Genero: {genero}</p>
            <p>Puntuación: {puntuacion}</p>
            <button>{boton}</button>
        </div>
    );
}