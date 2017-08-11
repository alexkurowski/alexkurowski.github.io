function ready() {
  var galleries = document.getElementsByClassName('project-gallery');

  for (var i = 0; i < galleries.length; i++) {
    setNextImage(galleries[i]);
  }
}


function setNextImage(gallery) {
  var images = JSON.parse( gallery.dataset['images'] );
  var index  = Number( gallery.dataset['index'] );

  if (!images.length) return;

  gallery.style.backgroundImage = 'url(' + images[index] + ')';
  gallery.dataset['index'] = ( index + 1 ) % images.length;
}
