const btn = document.querySelectorAll('.btn');

function watch() {
  const mSeconds = document.querySelector('.milliseconds');
  const seconds = document.querySelector('.seconds');
  const minutes = document.querySelector('.minutes');

  let ms = +mSeconds.innerHTML;
  let s = +seconds.innerHTML;
  let m = +minutes.innerHTML;

  let watch = setInterval(function tick() {
    ms++
    if (ms < 10) {
      mSeconds.innerHTML = '0' + ms;
    } else if (ms < 100) {
      mSeconds.innerHTML = ms;
    } else {
      ms = 0;
      s++;
    }

    if (s < 10) {
      seconds.innerHTML = '0' + s;
    } else if (s < 60) {
      seconds.innerHTML = s;
    } else {
      s = 0;
      m++;
    }

    if (m < 10) {
      minutes.innerHTML = '0' + m;
    } else if (m < 60) {
      minutes.innerHTML = m;
    } else {
      m = 0
    }
  }, 10)

  btn[1].addEventListener('click', () => clearInterval(watch));
  btn[2].addEventListener('click', () => {
    mSeconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    ms = 0;
    s = 0;
    m = 0;
  })
}

btn[0].addEventListener('click', () => watch())