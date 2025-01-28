document.querySelectorAll(".lecture").forEach((lecture) => {
    lecture.addEventListener("mouseenter", () => {
      const popup = lecture.querySelector(".popup");
      const rect = popup.getBoundingClientRect();
  
      if (rect.right > window.innerWidth) {
        popup.classList.add("right-edge");
      }
  
      if (rect.bottom > window.innerHeight) {
        popup.classList.add("bottom-edge");
        popup.style.top = `${-rect.height - 5}px`;
      }

      if (rect.bottom > window.innerHeight) {
        popup.classList.add("adjust-top");
        popup.style.top = `${-rect.height + 22}px`;
      }
    });
  
    lecture.addEventListener("mouseleave", () => {
      const popup = lecture.querySelector(".popup");
      popup.classList.remove("right-edge", "bottom-edge", "adjust-top");
      popup.style.top = '';
    });
  });