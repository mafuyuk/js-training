// import "web-animations-js"; TODO polifill使えない

const elem = document.getElementById("contents");
elem.animate([
    {
        opacity: 0,
        color: 'white',
    },
    {
        opacity: 1,
        color: 'black',
    }
], 1000);