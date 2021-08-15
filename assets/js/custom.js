var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// countdown js
var deadline = new Date("Sep 10, 2021 17:46:25").getTime();

        var x = setInterval(function () {
          var now = new Date().getTime();
          var t = deadline - now;
          var days = Math.floor(t / (1000 * 60 * 60 * 24));
          var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((t % (1000 * 60)) / 1000);
          document.getElementById("day").innerHTML = days;
          document.getElementById("hour").innerHTML = hours;
          document.getElementById("minute").innerHTML = minutes;
          document.getElementById("second").innerHTML = seconds;
          if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "TIME UP";
            document.getElementById("day").innerHTML = "0";
            document.getElementById("hour").innerHTML = "0";
            document.getElementById("minute").innerHTML = "0";
            document.getElementById("second").innerHTML = "0";
          }
        }, 1000);








        $(document).ready(function () {
          "use strict";
          $(window).scroll(function () {
              if ($(this).scrollTop() > 400) {
                  $('.scrollup').fadeIn();
              } else {
                  $('.scrollup').fadeOut();
              }
          });
      
          $('.scrollup').click(function () {
              $("html, body").animate({
                  scrollTop: 0
              }, 400);
              return false;
          });
      
      });









        // scrollilng js
        function scrollToSection(event) {
          event.preventDefault();
          var $section = $($(this).attr('href')); 
          $('html, body').animate({
            scrollTop: $section.offset().top
          }, 500);
        }
        $('[data-scroll]').on('click', scrollToSection);





 