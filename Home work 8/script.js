var linkMore = document.querySelectorAll('.link-more'),
    text = document.querySelectorAll('.text');

linkMore.forEach((link, i) => {
  link.onclick = function(e) {
      e.preventDefault();
      text[i].classList.toggle('text-open');
  };
});

