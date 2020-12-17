// Capture title and rating of movie, append them to the catalog

const $btnSubmit = $('input[type="submit"]');

$btnSubmit.on('click', function (e) {
  e.preventDefault();
  let $newTitle = $('#title').val();
  const $stars = $('input[type="radio"]').get();
  const newRating = () => {
    for (let i = 0; i < $stars.length; i++) {
      if ($stars[i].checked) {
        console.log($stars[i]);
        return $stars[i].value;
      }
    }
  };

  let $newMovie = `<li class="new-title">${$newTitle.toUpperCase()}. 
  <span class="new-rating">Rated: ${newRating()} 
  stars</span><span class="remove">
  <button id="remove-btn">Remove</button></span></li>`;
  $('ul').append($newMovie);
  $('ul #remove-btn').on('click', function () {
    $(this).parent().parent().remove();
  });
});

function findValue(arr) {
  console.log('vamos');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      console.log(arr[i]);
      return arr[i].value;
    }
    console.log('listo');
    return arr[i];
  }
}
