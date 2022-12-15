var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches) {
    itemWrapper.innerHTML = '';
    for (var match of matches) {
        itemWrapper.insertAdjacentHTML('beforeend',`
        <div style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${match.image_url});
        }' class="movie-item">
        <h3>${match.title}</h3>
        <p>
          ${match.description}
        </p>
        <a href="${match.imdb_url}">More detailes</a>
      </div>
      `);
    }
}

function getMovieData(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase();

    if (keyCode === 13 && searchText) {
        var matches = [];
        for (var movie of movieData) {
            if (movie.title.toLowerCase().includes(searchText)) {
                matches.push(movie);
            }
        }
        var responsePromise = fetch('https://www.omdbapi.com/?apikey=ee479d&t=jurassic%20park');

        function handleResponse(responseObj)  {
          return responseObj.json();
        }
        
        responsePromise
          .then(handleResponse)
          .then(function  (data) {
            console.log(data);
          });
          
        //  responsePromise.then(function(responseObj){
        //   var dataPromise = responseObj.json();

        //   dataPromise.then(function(data){

        //   });
        //  });



        displayMatches(matches);
      }
};

function init() {
    searchInput.addEventListener('keydown', getMovieData);
}
init();







/* <div class="movie-item">
        <h3>Movie Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
          voluptate, eligendi sapiente officiis saepe nisi eius odit pariatur
        </p>
        <a href="#">More detailes</a>
      </div> */