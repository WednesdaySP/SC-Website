// function inVisible(element) {
//     //Checking if the element is
//     //visible in the viewport
//     var WindowTop = $(window).scrollTop();
//     var WindowBottom = WindowTop + $(window).height();
//     var ElementTop = element.offset().top;
//     var ElementBottom = ElementTop + element.height();
//     //animating the element if it is
//     //visible in the viewport
//     if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
//       animate(element);
//   }
  
//   function animate(element) {
//     //Animating the element if not animated before
//     if (!element.hasClass("ms-animated")) {
//       var maxval = element.data("max");
//       var html = element.html();
//       element.addClass("ms-animated");
//       $({
//         countNum: element.html()
//       }).animate(
//         {
//           countNum: maxval
//         },
//         {
//           //duration 5 seconds
//           duration: 5000,
//           easing: "linear",
//           step: function () {
//             element.html(Math.floor(this.countNum) + html);
//           },
//           complete: function () {
//             element.html(this.countNum + html);
//           }
//         }
//       );
//     }
//   }
  
//   //When the document is ready
//   $(function () {
//     //This is triggered when the
//     //user scrolls the page
//     $(window).scroll(function () {
//       //Checking if each items to animate are
//       //visible in the viewport
//       $("h2[data-max]").each(function () {
//         inVisible($(this));
//       });
//     });
//   });
  

// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it 
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it 
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Services",44,100);
numCounter("Clients",501,30);
numCounter("Partners",428,20);