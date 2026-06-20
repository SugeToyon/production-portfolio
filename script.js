document.addEventListener("DOMContentLoaded", () => {
    console.log("Sugetoyon Portfolio - Tüm sistemler aktif!");
    

    

    const slides = document.querySelectorAll('.testi-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;


    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        

        slides[index].classList.add('active');
    }


    nextBtn.addEventListener('click', () => {
        currentSlide++;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });


    prevBtn.addEventListener('click', () => {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    });


    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
    });
});