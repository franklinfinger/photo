$(document).ready(function () {

  var allPhotos = _.template($('#landingTmpl').html());
  var photoHtml = "";
  // var justFirstPhotos = albumall.map(function(el) { return { name: el.name, photo1: el.photo1, tag: el.tag }      })
  _.each(albumall, function (currVal, idx, arr){

    photoHtml += allPhotos(currVal);
  });

  $('.container').html(photoHtml);

});




  $('nav').on('click', 'a', function (event) {
     event.preventDefault();
       var navClick = "." + $(this).attr('rel');
    console.log(navClick);



    //  $(clickedSection).addClass('active-section');
      // $(clickedSection).siblings('section').removeClass('active-section');
});

$('.container').on('click','img',function(event) {
  event.preventDefault();
  globalVar = $(this);
  console.log(this);
  globalVar.siblings('h2').text();
  var clickedText = globalVar.siblings('h2').text();
  var correctAlbum = _.filter(albumall, function(element) {
    return element.tag === clickedText;
});

  //1). Get the siblings of the clicked item `$(this).siblings()` ... and grab text of the sibling
  //2). Store step 1, as variable. "clickedText"
  //3). filter of albumall, and return the one where its `tag` attribute === clickedText
 var manyphotos = _.template($('#photoTmpl').html());
  var myphotos = "";
  _.each(correctAlbum, function (currVal, idx, arr){

    myphotos += manyphotos(currVal);
    console.log(myphotos);
  });
  $('.container').html(myphotos);



});
