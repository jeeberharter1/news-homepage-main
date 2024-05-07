// utility functions

// open side navigation by adjusting width and darken background
function openNav() {
  document.getElementById("side-nav").style.width = "250px";
  document.getElementById('bg').classList.add('bg-on');
  document.getElementById('bg').classList.remove('bg-off');
}

// close side nav by adjusting width and remove background darkness
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById('bg').classList.add('bg-off');
  document.getElementById('bg').classList.remove('bg-on');
}
