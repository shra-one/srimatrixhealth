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

  $(".js-testimonials").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: true,
    speed: 900,
    autoplaySpeed: 700,
    fade: true,
    cssEase: "linear",
    appendArrows: $("#slidecontrols"),
    prevArrow: `<div class="icon">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="14.5" transform="rotate(180 15 15)" fill="white" stroke="#F2F2F2"/>
    <path d="M11.8126 14.479L16.8126 9.47898C16.8591 9.43252 16.9142 9.39567 16.9749 9.37053C17.0356 9.34539 17.1006 9.33245 17.1663 9.33245C17.232 9.33245 17.2971 9.34539 17.3578 9.37053C17.4185 9.39567 17.4736 9.43252 17.5201 9.47898C17.5666 9.52543 17.6034 9.58058 17.6285 9.64128C17.6537 9.70198 17.6666 9.76703 17.6666 9.83273C17.6666 9.89843 17.6537 9.96348 17.6285 10.0242C17.6034 10.0849 17.5666 10.14 17.5201 10.1865L12.8732 14.8327L17.5201 19.479C17.6139 19.5728 17.6666 19.7 17.6666 19.8327C17.6666 19.9654 17.6139 20.0927 17.5201 20.1865C17.4263 20.2803 17.299 20.333 17.1663 20.333C17.0337 20.333 16.9064 20.2803 16.8126 20.1865L11.8126 15.1865C11.7661 15.14 11.7292 15.0849 11.7041 15.0242C11.6789 14.9635 11.666 14.8984 11.666 14.8327C11.666 14.767 11.6789 14.702 11.7041 14.6413C11.7292 14.5806 11.7661 14.5254 11.8126 14.479Z" fill="#1C77C3"/>
    </svg> 

    </div>
    
    `,
    nextArrow: `<div class="icon">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="14.5" fill="white" stroke="#F2F2F2"/>
    <path d="M18.1874 15.521L13.1874 20.521C13.1409 20.5675 13.0858 20.6043 13.0251 20.6295C12.9644 20.6546 12.8993 20.6675 12.8337 20.6675C12.768 20.6675 12.7029 20.6546 12.6422 20.6295C12.5815 20.6043 12.5264 20.5675 12.4799 20.521C12.4334 20.4746 12.3966 20.4194 12.3715 20.3587C12.3463 20.298 12.3334 20.233 12.3334 20.1673C12.3334 20.1016 12.3463 20.0365 12.3715 19.9758C12.3966 19.9151 12.4334 19.86 12.4799 19.8135L17.1268 15.1673L12.4799 10.521C12.3861 10.4272 12.3334 10.3 12.3334 10.1673C12.3334 10.0346 12.3861 9.90734 12.4799 9.81352C12.5737 9.7197 12.701 9.66699 12.8337 9.66699C12.9663 9.66699 13.0936 9.7197 13.1874 9.81352L18.1874 14.8135C18.2339 14.86 18.2708 14.9151 18.2959 14.9758C18.3211 15.0365 18.334 15.1016 18.334 15.1673C18.334 15.233 18.3211 15.298 18.2959 15.3587C18.2708 15.4194 18.2339 15.4746 18.1874 15.521Z" fill="#1C77C3"/>
    </svg>
       
    </div>
    
    `,
  });

  AOS.refresh();

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
