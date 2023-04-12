
function search() {
    var searchTerm = document.getElementById("searchInput").value;
    fetch("https://digimon-api.vercel.app/api/digimon/name/:name" + searchTerm)
      .then(response => response.json())
      .then(data => {
        var resultsContainer = document.getElementById("searchResults");
        resultsContainer.innerHTML = "";
        if (data.length > 0) {
          data.forEach(digimon => {
            var digimonDiv = document.createElement("div");
            digimonDiv.innerHTML = digimon.name;
            resultsContainer.appendChild(digimonDiv);
          });
        } else {
          var noResultsDiv = document.createElement("div");
          noResultsDiv.innerHTML = "No results found.";
          resultsContainer.appendChild(noResultsDiv);
        }
      });
  }
 



   fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(data => {
    const digimons = data.map(digimon => {
      return `
        <div class="col-md-4">
          <div class="card">
            <img src="${digimon.img}" alt="${digimon.name} image" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">Level: ${digimon.level}</p>
            </div>
          </div>
        </div>
      `
    })

    document.querySelector('.row').innerHTML = digimons.join('')
  })


