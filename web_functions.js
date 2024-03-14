/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav(x) {
  /* NOTE: The boolean is a temp solution should work but need
     but need some way to track whether nav is open or not
  */
  // console.log(document.getElementById("mySideNav").style.width) 
  //        ^^^^^ this checks size of nav ^^^^^^
  var sNav = document.getElementById("mySideNav");
  var mPage = document.getElementById("main");
  var head = document.getElementById("headImg");
  var navBtn = document.getElementById("sideNavBtn");
  var first_game = document.getElementById("2DGame");

  var backColor = document.body.style.backgroundColor;
  if(sNav.style.width > "0px"){
    sNav.style.width = "0px";
    if(mPage != null){
      mPage.style.marginLeft = "0px";
    }
    if(head != null){
      head.style.marginLeft = "0px";
    }
    if(navBtn != null){
      navBtn.style.marginLeft = "0px";
    }
    if(first_game != null){
      first_game.style.marginLeft = "0px";
    }
    backColor = "white";
  }
  else{
    sNav.style.width = "250px";
    if(mPage != null){
      mPage.style.marginLeft = "250px";
    }
    if(head != null){
      head.style.marginLeft = "250px";
    }
    if(first_game != null){
      navBtn.style.marginLeft = "-250px";
    }
    if(first_game != null){
      first_game.style.marginLeft = "250px";
    }
    backColor = "rgba(0,0,0,0.4)";
  }
  navBtn.classList.toggle("change");
}
