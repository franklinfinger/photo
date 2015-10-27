$(document).ready(function () {

// var allPhotos = _.template($('#landingTmpl').html());
// var photoHtml = "";
// // var justFirstPhotos = albumall.map(function(el) { return { name: el.name, photo1: el.photo1, tag: el.tag }      })
// _.each(albumall, function (currVal, idx, arr){
//
//   photoHtml += allPhotos(currVal);
//   console.log(photoHtml);
// });
// $('.container').html(photoHtml);
//
//
//
// var manyphotos = _.template($('#phototmpl').html());
// var myphotos = "";
// // var justFirstPhotos = albumall.map(function(el) { return { name: el.name, photo1: el.photo1, tag: el.tag }      })
// _.each(albumall, function (currVal, idx, arr){
//
//   myphotos += manyphotos(currVal);
//   console.log(myphotos);
// });
// $('.container').html(myphotos);



























 $('.box img').on('click', function (event) {
     event.preventDefault();

       var clickedSection = "." + $(this).attr('rel');
     console.log(clickedSection);
     $(clickedSection).addClass('active-section');
       $(clickedSection).siblings('section').removeClass('active-section');

 });
});
