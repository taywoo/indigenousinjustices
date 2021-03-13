
      $(document).ready(function() {
        TweenMax.set(".project-preview", { width: 0 });

        var tl = new TimelineLite();

        $(document)
          .on("mouseover", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 1, {
              width: "700px",
              ease: Expo.easeInOut
            });
          })

          .on("mouseout", ".navigation-item", function(evt) {
            tl = new TimelineLite();
            tl.to($(".project-preview"), 0.5, {
              width: 0,
              ease: Expo.easeInOut
            });
          });
      });

      $(".navigation-link-1").hover(function() {
        $(".project-preview").css({ "background-image": "url(Assets/Joyce-hero.png)" });
      });

      $(".navigation-link-2").hover(function() {
        $(".project-preview").css({ "background-image": "url(Assets/mikmaq-hero.png" });
      });

      $(".navigation-link-3").hover(function() {
        $(".project-preview").css({ "background-image": "url(Assets/1492-hero.png)" });
      });

      $(".navigation-link-4").hover(function() {
        $(".project-preview").css({ "background-image": "url(Assets/pipeline-hero3.png)" });
      });

      $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
          dh = $(document).height(),
          wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $(".progressbar").css("height", scrollPercent + "%");
      });