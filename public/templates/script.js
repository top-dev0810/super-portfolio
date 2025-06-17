// Loading animation
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const typingElement = document.querySelector(".typing-text");

  // Typing animation
  const text = "<Hello World/>";
  let index = 0;
  const interval = setInterval(() => {
    typingElement.textContent = text.substring(0, index) + "";
    index++;
    if (index > text.length) {
      clearInterval(interval);
      setTimeout(() => {

        // Add transition to opacity for smooth fade-out
        loadingScreen.style.transition = "opacity 1s ease, transform 1s ease";
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transform = "translateY(-50px)"; // Optional: Adding a slight upward slide effect

        // Fade in the main content
        mainContent.style.transition = "opacity 1s ease";
        mainContent.style.opacity = "1";

        // After transition ends, hide the loading screen
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 1000); // Matches the duration of the fade-out animation
      }, 1000);
    }
  }, 100);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for section animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Active nav link update on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Sparkle Animation
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const size = Math.random() * 10 + 5;
  const duration = Math.random() * 1000 + 1000;

  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animation = `sparkle ${duration}ms linear`;

  document.getElementById("particles-js").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, duration);
}

function initSparkles() {
  setInterval(createSparkle, 500);
}

// Initialize Sparkles after loading
setTimeout(() => initSparkles(), 2000);

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("show");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll("#mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });

  // Close mobile menu when resizing to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Mobile App Developer", "Frontend Developer", "Backend Developer"];
const el = document.getElementById("typewriter");

let typeTime = 150;
let backTime = 50;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(typeTime);
    }

    await sleep(typeTime * 15);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(backTime);
    }

    await sleep(typeTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  let currentIndex = 0;
  let itemsPerScroll = window.innerWidth >= 1024 ? 3 : 1; // Moves by 3 on desktop, 1 on mobile
  let maxIndex = Math.ceil(totalItems / itemsPerScroll) - 1; // Max scroll index

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    const moveDistance = itemWidth * itemsPerScroll;
    track.style.transform = `translateX(-${currentIndex * moveDistance}px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to start
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; // Jump to last
    }
    updateCarousel();
  });

  // Adjust when screen size changes
  window.addEventListener("resize", function () {
    itemsPerScroll = window.innerWidth >= 1024 ? 3 : 1;
    maxIndex = Math.ceil(totalItems / itemsPerScroll) - 1;
    updateCarousel();
  });

  updateCarousel(); // Initial setup
});


// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#3b82f6",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Contact Form Configuration
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ue1EaoOE9tu3WyLa9"); // Replace with your EmailJS Public Key

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate fields
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // EmailJS parameters
    const params = {
      name: name,
      email: email,
      message: message,
    };

    // Send email
    emailjs.send("service_197wjxo", "template_1f9sosn", params)
      .then(function (response) {
        alert("Awesome! Your message has been sent.🚀");
        document.querySelector("form").reset();
      })
      .catch(function (error) {
        alert("Uh-oh! Looks like there was an issue sending your message. Give it another shot!");
        console.error("EmailJS Error:", error);
      });
  });
});

// Mobile Menu Functionality
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.style.overflow = menuOverlay.classList.contains("active")
    ? "hidden"
    : "";
});

// Close menu when clicking nav links
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Mouse Follower Ball with Surrounding Circle
document.addEventListener("DOMContentLoaded", () => {
  // Create the outer circle
  const outerCircle = document.createElement("div");
  outerCircle.style.width = "30px";
  outerCircle.style.height = "30px";
  outerCircle.style.border = "1px solid #3b82f6";
  outerCircle.style.borderRadius = "50%";
  outerCircle.style.position = "fixed";
  outerCircle.style.pointerEvents = "none";
  outerCircle.style.zIndex = "9998";
  outerCircle.style.transition = "transform 0.3s ease";
  outerCircle.style.boxShadow = "0 0 10px rgba(92, 210, 246, 0.3)";
  outerCircle.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(outerCircle);

  // Create the inner ball
  const ball = document.createElement("div");
  ball.style.width = "10px";
  ball.style.height = "10px";
  ball.style.backgroundColor = "#3b82f6";
  ball.style.borderRadius = "50%";
  ball.style.position = "fixed";
  ball.style.pointerEvents = "none";
  ball.style.zIndex = "9999";
  ball.style.boxShadow = "0 0 15px rgba(59, 224, 246, 0.5)";
  ball.style.transition = "transform 0.1s ease";
  ball.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(ball);

  // Update positions on mouse move
  document.addEventListener("mousemove", (e) => {
    // Update ball position
    ball.style.left = e.clientX + "px";
    ball.style.top = e.clientY + "px";

    // Update outer circle position with a slight delay
    outerCircle.style.left = e.clientX + "px";
    outerCircle.style.top = e.clientY + "px";
  });
});
