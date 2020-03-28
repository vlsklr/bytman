$(document).ready(function () {
let tabs_item =$(".tabs-item");
tabs_item.on('click', function (event) {
  event.preventDefault();
  //отменяет всё, что было в стандартном действии. В нашем случае переход по якорной ссылке
//ID кликнутого элемента
  let activeTab =  $(this).attr('href');
  //находим элемент с классом visible
  $('.visible').toggleClass('visible');
  $('.animated .fadeInUp').toggleClass('animated fadeInUp');
  $('.active').toggleClass('active');

  console.log(activeTab);
  $(activeTab).toggleClass('visible animated fadeInUp');
  $(this).toggleClass('active');


});
});
