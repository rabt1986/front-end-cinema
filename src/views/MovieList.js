import React from 'react';
import '../styles/styles.css';
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const MovieList = () => {
    const peliculas = [
        { titulo: "Rambo IV", imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPVTa4PmyNVQSRW_26-BiuCwVdv-kDAFML1w04EHJNA9w-w8n7", sinopsis: "El ex boina verde John Rambo lleva una solitaria y apacible vida en la selva. Todo cambia cuando un grupo de misioneros católicos le pide que les sirva de guía hasta la frontera con Birmania para suministrar medicinas y alimentos a los refugiados", duracion: "1h 30m", genero: "Acción", puntuacion: 5.4, boton: "Seleccionar Asientos" },
        { titulo: "Bajo la misma estrella", imagen: "https://books.google.com.ec/books/content?id=cvnINtLUcLMC&hl=es&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U3s0POOStS8qVH_7HJy9IyvPYAjgQ&w=1280", sinopsis: "Hazel tiene dieciséis años, está enferma de cáncer desde pequeña y sobrevive gracias a un pequeño milagro médico y a la bombona de oxígeno que la acompaña todo el tiempo. Un día, Hazel conoce a Gus, que ya ha superado la enfermedad", duracion: "2h 06m", genero: "Drama", puntuacion: 4.2, boton: "Seleccionar Asientos" },
    ];

    return (
        <div>
            <Header />
            <h2 className="center-text">Peliculas Disponibles</h2>
            <div className="peliculas-container">
                {peliculas.map((pelicula, index) => (
                    <Movie
                        key={index}
                        titulo={pelicula.titulo}
                        imagen={pelicula.imagen}
                        sinopsis={pelicula.sinopsis}
                        duracion={pelicula.duracion}
                        genero={pelicula.genero}
                        puntuacion={pelicula.puntuacion}
                        boton={pelicula.boton}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}