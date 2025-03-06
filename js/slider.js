let isDragging = false;
  let startX, scrollLeft;

  const slider = document.getElementById('slider');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  leftArrow.addEventListener('click', () => {
    slider.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    slider.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  slider.addEventListener('mouseup', () => {
    isDragging = false;
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Prevent text selection while dragging
  slider.addEventListener('selectstart', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  });

  