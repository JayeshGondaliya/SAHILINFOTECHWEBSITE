// Function to handle animation when elements enter the viewport
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to trigger animation
        } else {
            entry.target.classList.remove('visible'); // Remove 'visible' class to reset animation
        }
    });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Select elements to observe
const infoBox = document.querySelector('.info-box');
const imgBox = document.querySelector('.img-box');

// Observe the elements
observer.observe(infoBox);
observer.observe(imgBox);


// check out services

    // Function to check if element is in view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        const boxes = document.querySelectorAll('.responsive-box');
        boxes.forEach(box => {
            if (isElementInViewport(box)) {
                box.classList.add('visible'); // Add visible class when in view
            }
        });
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resize for better responsiveness

    // Initial check
    handleScroll();



// =============================================================================
    // indusrtreis
    const slider = document.getElementById('slider');

    // Function to duplicate items for infinite scrolling
    function duplicateItems() {
        const sliderChildren = [...slider.children];
        sliderChildren.forEach(child => {
            const clone = child.cloneNode(true); // Clone each item
            slider.appendChild(clone); // Append clone to the end of slider
        });
    }

    // Function to reset the slider when reaching the end
    function resetSlider() {
        // When the slider reaches the end, reset to the first item
        const firstItemWidth = slider.children[0].offsetWidth;
        if (slider.getBoundingClientRect().right <= window.innerWidth) {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            requestAnimationFrame(() => {
                slider.style.transition = 'transform 0.3s linear';
            });
        }
    }

    // Call the function on page load
    window.onload = () => {
        duplicateItems(); // Duplicate items for infinite scroll
        setInterval(resetSlider, 1000); // Continuously check and reset the slider when it ends
    };