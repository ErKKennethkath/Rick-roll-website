
  const video = document.getElementById("myVideo");
  const heading = document.getElementById("myHeading");

  const navbarIcon = document.querySelector('.navbar-icon');
  const popupMessage = document.querySelector(".popup-message");
  const sidebar = document.querySelector('.sidenav');


  video.addEventListener("timeupdate", function() {
    if (video.currentTime >= 2.5 && !heading.classList.contains('show')) {
        heading.classList.add('show');
        console.log('show');
    }
  });
  $(function() {
    $('.toggle').on('click',function() {
      $('.sidenav').toggleClass('show');
    });
  });

function toggleSidebar(){
    alert("Never gonna make you cry");
}
function linka(){
    alert("Never gonna run around and desert you ~2023");
}
function img1(){
    alert("Never gonna give you up ~Rick")
}
function img2(){
    alert("Never gonna let you down")
}

// Never gonna give you up
// Never gonna let you down
// Never gonna run around and desert you
// Never gonna make you cry