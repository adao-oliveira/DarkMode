const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorball: getStyle(html, "--color-ball"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
    colorball: "#ff0000"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 15) + 'px';
  curs.style.top = (y - 15) + 'px';
});

document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  
  curs.classList.add('explosion');
  setTimeout(function() {
    curs.classList.remove('explosion');
  }, 900);
  
  let blackhole = document.createElement('blackhole');
  blackhole.style.left = x + 'px';
  blackhole.style.top = y + 'px';
  document.body.appendChild(blackhole);
  let size = Math.random() * 40;
  blackhole.style.width = 1 + size + 'px';
  blackhole.style.height = 1 + size + 'px';
  
  setTimeout(function() {
    blackhole.remove();
  }, 2000);
});