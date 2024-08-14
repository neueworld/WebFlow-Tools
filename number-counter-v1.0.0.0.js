document.addEventListener("DOMContentLoaded", function() {
    // Select all elements that have the 'nw-counter' attribute set to 'true'
    const counters = document.querySelectorAll('[nw-counter="true"]');

    counters.forEach(counter => {
        let startNumber = parseInt(counter.getAttribute('nw-start-number')) || 0;
        let textContent = counter.textContent.trim();
        let endNumber = parseInt(counter.getAttribute('nw-end-number'));

        // Check if textContent is a valid number, otherwise set endNumber to null
        if (isNaN(parseInt(textContent))) {
            endNumber = endNumber || null; // Keep the text unchanged
        } else {
            endNumber = endNumber || parseInt(textContent); // Use the text as the end number if not set
        }

        let duration = parseFloat(counter.getAttribute('nw-duration')) * 1000 || 2000;

        // Only proceed if endNumber is a valid number
        if (endNumber !== null) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(counter, startNumber, endNumber, duration);
                        observer.unobserve(entry.target); // stop observing after animation
                    }
                });
            });

            observer.observe(counter);
        }
    });

    function animateCounter(counter, start, end, duration) {
        let startTime = null;

        function countUp(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            counter.textContent = Math.floor(progress * (end - start) + start);

            if (progress < 1) {
                requestAnimationFrame(countUp);
            }
        }

        requestAnimationFrame(countUp);
    }
});
