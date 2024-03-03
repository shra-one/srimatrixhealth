$(function () {
  AOS.init();
  var lastScroll = 0;
  var header = $(".navbar").outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header) {
      $("#header").addClass("sticky");
      var head = $(".navbar").outerHeight();
      document.documentElement.style.setProperty("--headerWidth", head + "px");
    } else {
      $("#header").removeClass("sticky");
      document.documentElement.style.setProperty(
        "--headerWidth",
        header + "px"
      );
    }
  });

  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });

  $("#hero-carousel").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    appendArrows: $("#slidecontrols"),
    prevArrow: `<div class="icon">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20L10 14.4553L16 9" stroke="#0093FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="14" cy="14" r="13.5" stroke="#0093FF"/>
      </svg>
    </div>
    
    `,
    nextArrow: `<div class="icon">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20L18 14.4553L12 9" stroke="#0093FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle r="13.5" transform="matrix(-1 0 0 1 14 14)" stroke="#0093FF"/>
      </svg>
    </div>
    
    `,
  });

  AOS.refresh();
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
