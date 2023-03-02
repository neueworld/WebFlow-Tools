<style>
[n-parent] {
scroll-snap-type: y mandatory;
/* This enables vertical scrolling and snap scrolling */
scroll-behavior: smooth;
/* This adds smooth scrolling transition */
scroll-snap-stop: 300s; /* This sets the time duration for the scroll snapping */
height: 100vh;
/* This sets the height of the section */
overflow-y: scroll;
/* This adds vertical scroll bar when needed */
}
[n-parent] > [n-snap] {
scroll-snap-align: start;
/* This snaps the elements to the start of the snap point */
height: 100vh;
/* This sets the height of the elements */
}
</style>
