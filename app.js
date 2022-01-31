const productos = [
    {
        title: "HomeCare",
        description: "Articulos para el hogar, ayudas para personas de la tercera edad, incontinencia, encamado, sillas de ruedas, bastones, almohadas.",
    },
    {
        title: "Masajes y Spa",
        description: "Masajeadores electronicos, masajeadores de espalda, masajeadores de pies, masajeadores portatil. Todo para el cuidado de tus dolores musculares, alivia el estres con los masajeadores de percusion."
    },
    {
        title: "Calzado",
        description: "Todo para el cuidado de tus pies, calzado para pie diabetico, calzado terapeutico, calzado para cabellero, dama. Calzado de playa y de descanso."
    },
    {
        title: "Cuidado Personal",
        description: "Articulos para el cuidado personal, cuidado de los pies y manos, cremas para tu piel, podologia, plantillas para el calzado, calcetines, Medias para tu circulacion, Medias para varices."
    },
    {
        title: "Laboratorio",
        description: "Articulos de laboratorio, cristaleria, medidores."
    }
]

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

productos.forEach(el => {

    $template.querySelector("article").classList.add("card");

    $template.querySelector("h2").textContent = el.title;
    $template.querySelector("p").textContent = el.description;
    $template.querySelector("a").setAttribute("href", "#");
    $template.querySelector("a").textContent = "view more";

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

})


$cards.appendChild($fragment);



