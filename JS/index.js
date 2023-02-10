document.addEventListener("DOMContentLoaded", function() {
    var zindex = 10;
  
    var cards = document.querySelectorAll("div.card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function(e) {
        e.preventDefault();
  
        var isShowing = false;
  
        if (this.classList.contains("show")) {
          isShowing = true;
        }
  
        if (document.querySelector(".cards").classList.contains("showing")) {
          // a card is already in view
          document.querySelector(".card.show")
            .classList.remove("show");
  
          if (isShowing) {
            // this card was showing - reset the grid
            document.querySelector(".cards")
              .classList.remove("showing");
          } else {
            // this card isn't showing - get in with it
            this.style.zIndex = zindex;
            this.classList.add("show");
          }
  
          zindex++;
  
        } else {
          // no cards in view
          document.querySelector(".cards")
            .classList.add("showing");
          this.style.zIndex = zindex;
          this.classList.add("show");
  
          zindex++;
        }
      });
    }
  });
  