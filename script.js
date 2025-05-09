document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".section-header");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineMarkers = document.querySelectorAll(".timeline-marker");
  const timelineProgress = document.querySelector(".timeline-progress");

  // Intersection Observer for the header
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  headerObserver.observe(header);

  // Intersection Observer for timeline items
  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target
            .querySelector(".timeline-marker")
            .classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => itemObserver.observe(item));

  // Update timeline progress on scroll
  function updateProgress() {
    const timeline = document.querySelector(".timeline");
    const timelineRect = timeline.getBoundingClientRect();
    const timelineStart = timelineRect.top;
    const timelineEnd = timelineRect.bottom;
    const windowHeight = window.innerHeight;

    if (timelineStart < windowHeight && timelineEnd > 0) {
      const total = timelineEnd - timelineStart;
      const current = windowHeight - timelineStart;
      const progress = (current / total) * 90;
      const clampedProgress = Math.min(90, Math.max(20, progress)); // Start at 20%

      timelineProgress.style.height = `${clampedProgress}%`;
    }
  }

  window.addEventListener("scroll", updateProgress);
  updateProgress(); // Initial call
});
