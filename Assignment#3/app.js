const url = "https://image.tmdb.org/t/p/w45";

(async () => {
  const response = await fetch("./data.json");
  const result = await response.json();

  const genDropDown = document.getElementById("genre");
  const yearDropDown = document.getElementById("year");
  const langDropDown = document.getElementById("language");
  const ratingDropDown = document.getElementById("rating");
  const films = document.getElementById("movies");

  const genre = new Set(result.flatMap(({ genres }) => genres));
  const year = new Set(
    result.map(({ release_date }) => release_date.slice(0, 4))
  );
  const lang = new Set(
    result.map(({ original_language }) => original_language)
  );
  const rating = new Set(result.map(({ vote_average }) => vote_average));

  for (const o of genre) {
    genDropDown.innerHTML += `<option value="${o}">${o}</option>`;
  }
  for (const y of year) {
    yearDropDown.innerHTML += `<option value="${y}">${y}</option>`;
  }
  for (const l of lang) {
    langDropDown.innerHTML += `<option value="${l}">${l}</option>`;
  }
  for (const r of rating) {
    ratingDropDown.innerHTML += `<option value="${r}">${r}</option>`;
  }

  const renderMovies = (obj) => {
    films.innerHTML = `
      <div class="movieheading">
        <h5 id="rank">RANK</h5>
        <h5 id="content">MOVIE</h5>
        <h5>YEAR</h5>
      </div>
    `;
    let count = 1;
    try {
      obj.forEach(
        ({ title, genres, homepage, poster_path, release_date, runtime }) => {
          films.innerHTML += `
          <div class="movie">
            <p id="rank">${count++}</p>
            <div id="content">
              <a href="${homepage}">
                <img class="image" src="${url + poster_path}">
              </a>
              <div style="display:inline-block;margin:0 0 0 2%;" class="para">
                <p style="display:inline-block;color: skyblue;">${title}</p>
                <p>${genres.join(", ")} .${runtime} Minutes</p>
              </div>
            </div>
            <div id="year"><p>${release_date.slice(0, 4)}</p></div>
          </div>
        `;
          if (count >= 90) {
            throw new Error("Maximum number of movies reached.");
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  function filterMovies() {
    let genVal = genDropDown.value;
    let langVal = langDropDown.value;
    let yearVal = yearDropDown.value;
    let ratingVal = ratingDropDown.value;
    let resQuery;
    if (
      genVal != "all" &&
      langVal != "all" &&
      yearVal != "all" &&
      ratingVal != "all"
    ) {
      resQuery = result.filter((obj) => {
        if (
          obj["genres"].includes(genVal) &&
          obj["release_date"].slice(0, 4).includes(yearVal) &&
          obj["original_language"].includes(langVal) &&
          String(obj["vote_average"]).includes(String(ratingVal))
        ) {
          return true;
        }
      });
    } else if (
      genVal === "all" &&
      langVal === "all" &&
      yearVal === "all" &&
      ratingVal === "all"
    ) {
      resQuery = result;
    } else {
      resQuery = result.filter((obj) => {
        if (
          obj["genres"].includes(genVal) ||
          obj["release_date"].slice(0, 4).includes(yearVal) ||
          obj["original_language"].includes(langVal) ||
          String(obj["vote_average"]).includes(String(ratingVal))
        ) {
          return true;
        }
      });
    }
    renderMovies(resQuery);
  }

  setInterval(filterMovies, 1000);
})();
