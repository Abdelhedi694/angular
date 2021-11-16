let tabAlbum = [
  {
    image:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/5a/c4/77/7849050/1540-1/tsp20160311150535/Thriller.jpg",
    nom: "thriller",
    artiste: "mickael jackson",
    label: "epic",
    anneeParution: 1983,
    genre: "pop",
    duree: "42:30",
  },
  {
    image:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/5d/20/51/5316701/1540-1/tsp20130711150035/Quand-la-musique-est-bonne.jpg",
    nom: "quand la musique est bonne",
    artiste: "goldman",
    label: "epic",
    anneeParution: 1982,
    genre: "pop",
    duree: "35:30",
  },
];

function stockHtmlDuTableau() {
  let html = `<ul>`;
  for (let unAlbum of tabAlbum) {
    html += `<li><img src="${unAlbum.image}"></li>`;
    html += ` <li>
        <div class="nom">${unAlbum.nom}</div>
        <div class="artiste">${unAlbum.artiste}</div>
        <div class="label">${unAlbum.label}</div>
        <div class="date">${unAlbum.anneeParution}</div>
        <div class="genre">${unAlbum.genre}</div>
        <div class="duree">${unAlbum.duree}</div>
    </li>`;
  }
  html += `</ul>`;
  return html;
}

function displayAlbum() {
  let mesUl = document.querySelector("section");
  mesUl.innerHTML = stockHtmlDuTableau();
}

displayAlbum();

// function afficherFilm(film) {
//   let blocFilm = document.createElement("div");
//   blocFilm.innerHTML = `<p>${film.id} - ${film.nom}</p>`;

//   document.getElementById("listeFilms").append(blocFilm);
// }

// function afficherListeFilms(tab) {
//   for (let film of tab) {
//     afficherFilm(film);
//   }
// }

// let tabFilms = [
//   { id: 1, nom: "Film 1" },
//   { id: 2, nom: "Film 2" },
// ];

// afficherListeFilms(tabFilms);
// function searchIndex(nomArtiste) {
//   let i = 0;
//   let isHere = false;
//   while (!isHere && i < tabAlbum.length) {
//     isHere = tabAlbum[i].artiste == nomArtiste;
//     i++;
//   }
//   if (isHere) {
//     return i - 1;
//   } else {
//     return -1;
//   }
// }

// console.log(searchIndex("hedi"));
