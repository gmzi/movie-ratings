// Capture title and rating of movie, append them to the catalog

const $btnSubmit = $('input[type="submit"]');

$btnSubmit.on('click', function (e) {
  e.preventDefault();
  let $newTitle = $('#title').val();
  let $newRating = $('#rating').val();
  let $newMovie = `<li class="new-title">${$newTitle.toUpperCase()}. <span class="new-rating">Rated: ${$newRating} stars</span><span class="remove"><button id="remove-btn">Remove</button></span></li>`;
  $('ul').append($newMovie);
  $('ul #remove-btn').on('click', function () {
    $(this).parent().parent().remove();
  });
});
