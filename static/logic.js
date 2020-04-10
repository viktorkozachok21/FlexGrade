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
function compressArray(original) {
  var compressed = [];
  var copy = original.slice(0);
  for (var i = 0; i < original.length; i++) {
    var myCount = 0;
    for (var w = 0; w < copy.length; w++) {
      if (original[i] == copy[w]) {
        myCount++;
        delete copy[w];
      }
    }
    if (myCount > 0) {
      var a = new Object();
      a.value = original[i];
      a.count = myCount;
      compressed.push(a);
    }
  }
  return compressed;
};
function compareValues(key) {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison;
  };
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
