const images = document.querySelector(".glry");
const leftButton = document.querySelector(".left-scroller");
const rightButton = document.querySelector(".right-scroller");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  images.classList.add("card");
  startX = e.pageX - images.offsetLeft;
  startScrollLeft = images.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if the mouse is not down, do nothing
  images.scrollLeft = e.pageX;
  const walk = (e.pageX - startX - images.offsetLeft) * 3;
  images.scrollLeft = startScrollLeft - walk;
};

const dragStop = (e) => {
  isDragging = false;
  images.classList.remove("card");
};

const scrollLeft = () => {
  images.scrollLeft -= 100; // Adjust the value as per your requirement
};

const scrollRight = () => {
  images.scrollLeft += 100; // Adjust the value as per your requirement
};

images.addEventListener("mousedown", dragStart);
images.addEventListener("mousemove", dragging);
images.addEventListener("mouseup", dragStop);

leftButton.addEventListener("click", scrollLeft);
rightButton.addEventListener("click", scrollRight);
