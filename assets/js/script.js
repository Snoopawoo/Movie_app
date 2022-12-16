var searchInput = $('.search');
var itemWrapper = $('main');

function displayMatches(matches) {
  itemWrapper.html('');

  if(!matches) {
    return itemWrapper.html(`<p class='no-search'>No resoults found.</p>`);
  }
  for (var match of matches) {
       itemWrapper.append(`
       <div style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${match.Poster});
       }' class="movie-item">
      <h3>${match.Title}</h3>
       <p>
         Release Year: ${match.Year}
       </p>
       <a href="https://www.imdb.com/title/${match.imdbID}" target='_blank'>More detailes</a>
    </div>
    `);
   }
  
}

function getMovieData(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.val().trim();

    if (keyCode === 13 && searchText) {
        $.get(`https://www.omdbapi.com/?apikey=ee479d&s=${searchText}`)
          .then(function (data) {
            displayMatches(data.Search);
         });
      }
};

function init() {
    searchInput.keydown(getMovieData);
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