let switchMode = document.getElementById("switchMode");


switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "/css/white-mode.css") {
        theme.href = "/css/black-mode.css";
    } else {
        theme.href = "/css/white-mode.css";
    }
};

// export let isDarkMode = false;  //смена цвета палочек в партиклес

// const changeParticleShapesColor = (color) => {
//     const pJS = window.pJSDom[0].pJS;
//     const particles =  pJS.particles;

//     particles.color.value = color; 
//     particles.shape.stroke.color = color; 
//     particles.line_linked.color = color;

//     pJS.fn.particlesRefresh();
// };

// switchMode.onclick = function () {
//     let theme = document.getElementById("theme");
//     let particlesColor = '#000';

//     if (theme.getAttribute("href") == "/css/white-mode.css") {
//         particlesColor = '#fff';
//         theme.href = "/css/black-mode.css";
//     } else {
//         particlesColor = '#000';
//         theme.href = "/css/white-mode.css";
//     }

//     changeParticleShapesColor(particlesColor);
// };
