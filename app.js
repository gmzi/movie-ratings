// Capture title and rating of movie, append them to the catalog

const $btnSubmit = $('input[type="submit"]');

$btnSubmit.on('click', function (e) {
  e.preventDefault();
  console.log($('#title').val());
  let $newTitle = $('#title').val();
  let $stars = $('.rating').children();
  console.log($stars);
  const newRating = () => {
    for (let i = 0; i < $stars.length; i++) {
      if ($stars[i].checked) {
        return $stars[i].value;
      }
    }
    return false;
  };

  const newMovie = `<li class='new-movie'> ${$newTitle.toUpperCase()} <span id="rated">rated ${newRating()} stars</span><span><button id="remove-btn">Remove film</button></span></li>`;
  if (!newRating()) {
    return alert('please rate');
  } else {
    if ($('#title').val() === '') {
      alert('please set movie title');
    } else {
      $(newMovie).appendTo('ul');
      $('input[type="text"]').val('');
      for (let star of $stars) {
        star.checked = false;
      }
      $('ul #remove-btn').on('click', function () {
        $(this).parent().parent().remove();
      });
    }
  }
});
