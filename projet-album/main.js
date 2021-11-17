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

function ajoutUnAlbum(album) {
  let maSection = document.querySelector("section");
  let ul = document.createElement("ul");

  ul.innerHTML += `

  <li><img src="${album.image}"></li>
  <li>
      <div class="nom">${album.nom}</div>
      <div class="nom">${album.artiste}</div>
      <div class="label">${album.label}</div>
      <div class="date">${album.anneeParution}</div>
      <div class="genre">${album.genre}</div>
      <div class="duree">${album.duree}</div>
  </li>
`;

  maSection.append(ul);

  let boutonSupp = document.createElement("button");
  boutonSupp.innerText = "supprimer";
  ul.append(boutonSupp);
  boutonSupp.addEventListener("click", function () {
    ul.remove();
    let index = tabAlbum.indexOf(album);
    tabAlbum.splice(index, 1);
  });
}

function ajoutToutAlbums() {
  for (const album of tabAlbum) {
    ajoutUnAlbum(album);
  }
}

ajoutToutAlbums();

document
  .querySelector("#ajoutAlbum")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let objAlbum = {
      image: this.url.value,
      nom: this.name.value,
      artiste: this.artiste.value,
      label: this.label.value,
      anneeParution: this.date.value,
      genre: this.style.value,
      duree: this.time.value,
    };
    tabAlbum.push(objAlbum);
    ajoutUnAlbum(objAlbum);
  });
