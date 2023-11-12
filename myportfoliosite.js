document.addEventListener("DOMContentLoaded", function () {
    const galleryLinks = document.querySelectorAll(".gallery-link");

    galleryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            const imgSrc = link.getAttribute("href");
            const lightbox = `
                <div id="lightbox" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-10">
                    <div class="max-w-3/4">
                        <img src="${imgSrc}" alt="Enlarged Image" class="mx-auto rounded-lg">
                        <button id="close-lightbox" class="text-white text-3xl absolute top-2 right-2">×</button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML("beforeend", lightbox);

            const closeLightbox = document.getElementById("close-lightbox");
            closeLightbox.addEventListener("click", () => {
                const lightbox = document.getElementById("lightbox");
                lightbox.remove();
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("#name").value;
        const email = contactForm.querySelector("#email").value;
        const message = contactForm.querySelector("#message").value;

        // You can add form validation here if needed
        if (!name || !email || !message) {
            alert("Please fill in all the required fields.");
        } else {
            // Send the form data to your server for processing
            // For this example, we'll just display an alert
            alert("Form submitted successfully!");

            // Clear the form fields if needed
            contactForm.reset();
        }
    });
});