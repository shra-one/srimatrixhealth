$(function () {
  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section--about").offset().top },
      "fast"
    );
    return false;
  });

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

  // change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });

  // init Isotope
  var $grid = $(".products-group--isotope").imagesLoaded(function () {
    $grid.isotope({
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 16,
      },
      filter: ".flowers",
    });
    $(".products-group--isotope").css({ opacity: 1 });
  });
  // bind filter button click
  $(".filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    // filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
});

(function () {
  "use strict";

  // document
  //   .querySelector("#navbarSideCollapse")
  //   .addEventListener("click", function () {
  //     // alert('hello');
  //     document.querySelector(".offcanvas-collapse").classList.toggle("open");
  //   });

  document.querySelector("#searchbtn").addEventListener("click", function () {
    // alert('hello');
    document.querySelector("#searchbox").classList.toggle("open");
  });
})();
