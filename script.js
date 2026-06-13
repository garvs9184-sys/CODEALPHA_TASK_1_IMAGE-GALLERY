const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

// इमेज को बड़ी स्क्रीन पर खोलने का फंक्शन
function openLightbox(element) {
    const imgSource = element.querySelector('img').src;
    const imgAlt = element.querySelector('img').alt;

    lightboxImg.src = imgSource;
    lightboxCaption.textContent = imgAlt;
    lightbox.style.display = 'flex'; // पॉप-अप दिखाओ
}

function closeLightbox() {
    lightbox.style.display = 'none'; // पॉप-अप छुपाओ
}