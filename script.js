const images = [
  './images/background img1.jpg',
  './images/background img2.jpg',
];
let currentIndex = 0;

function changeBackground() {
  const home = document.getElementById('home');

  // Kiểm tra nếu phần tử 'home' tồn tại
  if (home) {
    // Set background image with full-width and height
    home.style.backgroundImage = `url('${images[currentIndex]}')`;
    home.style.backgroundSize = 'cover'; // Ensure image covers entire area
    home.style.backgroundPosition = 'center center'; // Center image horizontally and vertically
    home.style.height = '100vh';
    // Update background color to handle transparency (optional)
    // For solid color backgrounds, remove this section
    home.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // Adjust opacity as needed

    // Update index for next image
    currentIndex = (currentIndex + 1) % images.length;
  }
}

// Gọi hàm changeBackground() mỗi 3 giây
setInterval(changeBackground, 3000);

const seeMoreBtn = document.querySelector('.text-center-see');
const hiddenTours = document.querySelectorAll('.hidden-tours');

seeMoreBtn.addEventListener('click', () => {
  hiddenTours.forEach(tour => {
    tour.classList.toggle('hidden-tours');
  });

  // Lấy phần tử span chứa văn bản "See more"
  const seeMoreText = seeMoreBtn.querySelector('h6');
  seeMoreText.textContent = seeMoreText.textContent === 'See more' ? 'See less' : 'See more';
});