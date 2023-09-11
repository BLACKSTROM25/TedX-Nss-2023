function detectMob() {
  return ( ( window.innerWidth <= 800 ) );
}
console.log(detectMob());

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 160,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
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
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // End particle .js



  $(document).ready(function() {
  
    $(document).on("scroll", onScroll);
  
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');

        $(this).blur();


        $('html, body').stop().animate({
            'scrollTop': $(this.hash).offset().top
        }, 500, 'swing', function () {
            window.location.hash = this.hash;
            $(document).on('scroll', onScroll);
        });
    });
  
});

function onScroll(ev){
    var scrollPosition = $(document).scrollTop();
    $('.navbar-right a').each(function () {
        var navbarLink = $(this),
            sectionElement = $(navbarLink.attr("href"));
        if (sectionElement.position().top <= scrollPosition && sectionElement.position().top + sectionElement.height() > scrollPosition) {
            $('.navbar-right li').removeClass("active");
            navbarLink.parent('li').addClass("active");
        }
    });
}

//nav on top
$(window).scroll(function() {
    var nav = $('#navbarMain');
    var top = 100;
    if ($(window).scrollTop() >= top) {
        nav.addClass('navbar-bg');
    } else {
        nav.removeClass('navbar-bg');
        
    }
});


//

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.to('#wheel', 1, { scale: 0.85, rotation: 17.5, ease: 'none' },0) // Power1.easeIn
.to('#wheel', 1, { scale: 0.7, rotation: 35, opacity: 0, boxShadow: 0, ease: 'none' },1)
.to('#wheel-group', 0, { backgroundColor: 'none', boxShadow:0, ease: 'none' },1)
.to('#x',1, {scale: 6, transformOrigin:"center", ease: 'none'  }, 0 )
.to('#x',1, {scale: 9, transformOrigin:"center",opacity: detectMob() ? 0:1 , backgroundColor: detectMob() ? 'transparent':'rgba(235,0,40,0)',x: detectMob() ? -42.5 : 340, ease: Power1.easeOut }, 1 )
.to( detectMob() ? '' : '#about-head', 1, { opacity: 1, width: 520,  ease: 'none' },1 )
.to( detectMob() ? '' : '.about-text', 1, { opacity: 1, width: 720, ease: 'none' },1 )


new ScrollMagic.Scene({
  duration: 1400, // the scene should last for a scroll distance of 100px
  trigerElement: '#wheel-group',
  //offset: 100 // start this scene after scrolling for 50px
})
  .setPin('#hero-wrap') // pins the element for the the scene's duration
  .setTween(tl)  

  .addTo(controller); // assign the scene to the controller

// Timer Scene//
new ScrollMagic.Scene({
  triggerElement: "#timer",
  triggerHook: 0.8, // show, when scrolled 20% into view
  duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
.setClassToggle(".timer-wrap", "visible") // add class to reveal
//.addIndicators() // add indicators (requires plug
.addTo(controller);
var cardReveal = document.getElementsByClassName("cardContainer");
for (var i=0; i < cardReveal.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
            triggerElement: cardReveal[i], // y value not modified, so we can use element as trigger as well
            offset: detectMob() ? i*50 : i*80,												 // start a little later
            triggerHook: 0.9,
          })
          .setClassToggle(cardReveal[i], "visible") // add class toggle
          //.addIndicators()
          .addTo(controller);
}
var text1_theme = document.querySelector("#text1-theme");
new ScrollMagic.Scene({
  triggerElement: text1_theme, // y value not modified, so we can use element as trigger as well
  offset: 170,												 // start a little later
  triggerHook: 0.9,
})
.setClassToggle(text1_theme, "visible") // add class toggle
//.addIndicators() // add indicators (requires plug
.addTo(controller);

var text2_theme = document.querySelector("#text2-theme");
new ScrollMagic.Scene({
  triggerElement: text2_theme, // y value not modified, so we can use element as trigger as well
  offset: 170,												 // start a little later
  triggerHook: 0.9,
})
.setClassToggle(text2_theme, "visible") // add class toggle
//.addIndicators() // add indicators (requires plug
.addTo(controller);


  /// Timer ///
  function updateTimer() {
    future  = Date.parse("September 28, 2023 9:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  
if (detectMob()){
  document.querySelector('#x').setAttribute('src', 'assets/X_red.png')
}

  if (!detectMob()) {

  const timerDiv = document.getElementById('timer');
  const section = document.querySelector('.date-sec');
  
  section.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / section.offsetWidth - 0.5) * 60; // Adjust the multiplier as needed
    const yPos = (e.clientY / section.offsetHeight - 0.5) * 60; // Adjust the multiplier as needed
    timerDiv.style.transform = `translate(${xPos}px, ${yPos}px) scale(2.5)`;
  });


  const trailer = document.getElementById("trailer");
  const animateTrailer =(e, interacting)=> {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;
    const keyframes = {
      transform :`translate(${x}px , ${y}px) scale(${interacting ? 8 : 1})`
    }
      trailer.animate(keyframes ,{
      duration:500,
        fill: "forwards"
     });
  }

  window.onmousemove = e =>{
    const interactable = e.target.closest(".interactables");
    interacting = interactable !== null;
    
    animateTrailer(e, interactable);
  }

}

// document.querySelector(".knowbutton").addEventListener("click", (e) => {
//   document.querySelector(".card2").classList.remove("hidden");
// })
// document.querySelector(".closebutton").addEventListener("click", (e) => {
//   document.querySelector(".card2").classList.add("hidden");
// })

//NavBar

document.querySelector('#toggleNav').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('navOpen');
});

// Speaker POSTS

let closeAll = () => {
  for(let i = 0; i < document.querySelectorAll('#alert-wrap').length; i++) {

    document.querySelectorAll('#alert-wrap')[i].classList.add('hidden');
  }
  document.getElementById('body').classList.remove('scrollStop');
}

let openScreen = (x) =>{
  for(let i = 0; i < document.querySelectorAll('.alert-wrap').length; i++) {
    document.querySelectorAll('.alert-wrap')[i].classList.add('hidden');
  }
  document.getElementById('body').classList.add('scrollStop');
  console.log(x, 'speaker'+x);
  document.querySelector('.speaker'+x).classList.remove('hidden');
}

// end speaker posts



// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 80 ? value = 0 : value += 20
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 80 : value -= 20
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}



// function to restart animation
const animate = () => tl5.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(start)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth/trail.length
    })
    
    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth/4)  ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()