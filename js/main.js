var sliderImg = Array.from(document.querySelectorAll(".img img")),
  next = document.getElementById("right"),
  prev = document.getElementById("left"),
  slideNumber = sliderImg.length,
  counterSlide = 1,
  imgOne = document.getElementById("img-1"),
  imgTwo = document.getElementById("img-2"),
  imgThree = document.getElementById("img-3"),
  imgName = document.getElementById("name"),
  describe = document.getElementById("describe");

next.onclick = nextImg;
prev.onclick = prevImg;

theChecker();

function nextImg() {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    counterSlide++;
    theChecker();
  }
}

function prevImg() {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    counterSlide--;
    theChecker();
  }
}

function theChecker() {
  removeAllActive();
  sliderImg[counterSlide - 1].classList.add("active");

  if (counterSlide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (counterSlide == slideNumber) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }

  if (imgOne.classList.contains("active")) {
    imgName.textContent = "Discover innovative ways to decorate";
    describe.textContent =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love";
  } else if (imgTwo.classList.contains("active")) {
    imgName.textContent = "We are available all across the globe";
    describe.textContent =
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
  } else {
    imgName.textContent = "Manufactured with the best materials";
    describe.textContent =
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
  }
}

function removeAllActive() {
  sliderImg.forEach(function (img) {
    img.classList.remove("active");
  });
}
// Start Slide
