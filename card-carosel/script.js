const cardArray = [
  {
    name: "Dog pair",
    img: "images/image1.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing Expedita, sit.",
  },
  {
    name: "Parrot",
    img: "images/image2.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Nice Horse",
    img: "images/image3.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "White duck",
    img: "images/image4.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Cute dog",
    img: "images/image5.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Pigeon",
    img: "images/image6.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Lone dog",
    img: "images/image7.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Bird on a brach",
    img: "images/image8.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Nature cat",
    img: "images/image9.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
  {
    name: "Ocean Turtle",
    img: "images/image10.jpg",
    desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing expedita, sit.",
  },
];
///-----------------------------

const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");

cardArray.forEach((item, index) => {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
       <img src="./${item.img}" alt="${item.name}" />
        <div class="card_contents">
            <h4>${item.name}</h4>
            <p>
            ${item.desc}
            </p>
        </div>
    `;

  carouselInner.appendChild(cardDiv);
});

//const carouselInner = document.querySelector(".carousel-inner");
let currentIndex = 0;

const cards = document.querySelectorAll(".carousel-inner .card");
const totalImages = cardArray.length;

function getVisibleCards() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function showSlide(index) {
  const visibleCards = getVisibleCards();
  const maxIndex = Math.ceil(totalImages / visibleCards);
  if (index >= maxIndex) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = maxIndex - 1;
  } else {
    currentIndex = index;
  }

  const translateX = -(currentIndex * (100 / visibleCards)) * visibleCards;
  carouselInner.style.transform = `translateX(${translateX}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

window.addEventListener("resize", () => showSlide(currentIndex));

showSlide(currentIndex);

// setInterval(() => moveSlide(1), 3000);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));
