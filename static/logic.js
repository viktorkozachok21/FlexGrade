function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const goTop = document.getElementById("go-top-btn");
window.onscroll = () => {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {

    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
};
const toggle = document.getElementById("full-toggle");
document.addEventListener('fullscreenchange', (event) => {
  if (!document.fullscreenElement) {
    toggle.innerHTML = '<span class="mdi mdi-fullscreen" title="Увімкнути повноекранний режим"></span>';
  } else {
    if (document.exitFullscreen) {
      toggle.innerHTML = '<span class="mdi mdi-fullscreen-exit" title="Вимкнути повноекранний режим"></span>';
    }
  }
});
toggle.addEventListener('click', (event) => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});
