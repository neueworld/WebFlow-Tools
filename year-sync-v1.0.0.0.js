document.addEventListener("DOMContentLoaded", () => {
    // Select the element where the year will be displayed
    const yearElement = document.querySelector("[data-year]");

    if (yearElement) {
        // Function to update the year
        const updateYear = () => {
            const currentYear = new Date().getFullYear();
            yearElement.textContent = currentYear;
        };

        // Initial call to set the year
        updateYear();

        // Set up a timer to check the date at midnight (12:00 AM local time)
        const now = new Date();
        const timeUntilMidnight =
            new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

        setTimeout(() => {
            updateYear();
            // Update the year every 24 hours thereafter
            setInterval(updateYear, 24 * 60 * 60 * 1000);
        }, timeUntilMidnight);
    }
});
