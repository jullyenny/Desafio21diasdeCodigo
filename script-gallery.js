function slider(settings) {
    let imgs = document.querySelectorAll("img");
    let track = document.querySelector(".track");
    let items = document.querySelectorAll(".cell");
    let index = 1;
    firstClone = items[0].cloneNode(true);
    lastClone = items[items.length - 1].cloneNode(true);
    firstClone.classList.add("firstclone");
    lastClone.classList.add("lastclone");
    track.appendChild(firstClone);
    track.prepend(lastClone);
    let allItems = document.querySelectorAll(".cell");
    let totalImgs = document.querySelectorAll("img");
    let controller = 1;
    let slideControl = +100 / totalImgs.length;
    const slideControlDefault = (100 / totalImgs.length) * controller;
    track.setAttribute("style", "width:" + totalImgs.length * 100 + "%;");
    track.style.transform = "translateX(-" + slideControl + "%)";
  
    setInterval(() => {
      if (!document.hidden) {
        controller++;
        slideControl = (+100 / totalImgs.length) * controller;
        track.style.transform = "translateX(-" + slideControl + "%)";
        track.style.transition = ".5s ease";
      }
    }, 3000);
    track.addEventListener("transitionend", () => {
      if (allItems[controller].classList === firstClone.classList) {
        track.style.transition = "none";
        controller = 1;
        track.style.transform =
          "translateX(-" + (100 / totalImgs.length) * controller + "%)";
      }
    });
  }
  slider();
  