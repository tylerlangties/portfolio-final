const particlesOptions = {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#34275C"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#11082b"
        },
        "image": {
          "src": "img/github.svg",
          "width": 50,
          "height": 50
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#201542",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true
  }

  export default particlesOptions;