const cameraData = {
    leica: {
        name: "Leica M3",
        year: "1954",
        desc: "A Leica M3 é a definição de precisão mecânica alemã. O seu visor telemétrico de alta precisão permitia focar com rapidez extraordinária, tornando-a a favorita dos grandes fotógrafos de rua.",
        photos: [
            {
                url: "../src/assets/img/img16Rio.png",
                author: "Hans Meier",
                location: "Vale de Chamonix, França",
                class: "normal"
            },
            {
                url: "../src/assets/img/img3Surf.png",
                author: "Sarah Jenkins",
                location: "Califórnia, EUA",
                class: "normal"
            },
            {
                url: "../src/assets/img/img2Montanhas.png",
                author: "Jean Dupont",
                location: "Alpes Suíços",
                class: "large"
            },
            {
                url: "../src/assets/img/img4praia.png",
                author: "Elena Rostova",
                location: "Havaí, EUA",
                class: "normal"
            },
            {
                url: "../src/assets/img/img5BaW.png",
                author: "Takashi Sato",
                location: "Costa Amalfitana, Itália",
                class: "normal"
            }
        ]
    },
    polaroid: {
        name: "Polaroid SX-70",
        year: "1972",
        desc: "A Polaroid SX-70 trouxe a magia do instante para o cotidiano. Ao ejetar a foto fisicamente e vê-la se revelar lentamente sob a luz do sol, ela imortalizou momentos com cores e tons nostálgicos.",
        photos: [
            {
                url: "../src/assets/img/img7girl.png",
                author: "Alice Cooper",
                location: "Lago de Como, Itália",
                class: "large"
            },
            {
                url: "../src/assets/img/img8.png",
                author: "Marco Rossi",
                location: "Malibu, Califórnia, EUA",
                class: "normal"
            },
            {
                url: "../src/assets/img/img9.png",
                author: "Emma Watson",
                location: "Ilha de Capri, Itália",
                class: "normal"
            },
            {
                url: "../src/assets/img/img10boat.png",
                author: "Chloe Bennett",
                location: "Fiordes de Geiranger, Noruega",
                class: "large"
            }
        ]
    },
    canon: {
        name: "Canon AE-1",
        year: "1976",
        desc: "A Canon AE-1 simboliza a era de ouro da fotografia SLR de 35mm. Equipada com lentes FD de nitidez excepcional e fotometria eletrônica avançada para a época, ela capturava cores ricas e naturais.",
        photos: [
            {
                url: "../src/assets/img/img11.png",
                author: "Lucas Silva",
                location: "Lago Tahoe, Califórnia",
                class: "normal"
            },
            {
                url: "../src/assets/img/img12moon.png",
                author: "James Miller",
                location: "Rio de Janeiro, Brasil",
                class: "normal"
            },
            {
                url: "../src/assets/img/img13.png",
                author: "Sophie Dubois",
                location: "Baía de Guanabara, Rio de Janeiro",
                class: "large"
            },
            {
                url: "../src/assets/img/img14.png",
                author: "Robert Carter",
                location: "Deserto da Namíbia",
                class: "normal"
            },
            {
                url: "../src/assets/img/img15.png",
                author: "Akihiro Sato",
                location: "Costa de Maui, Havaí",
                class: "normal"
            }
        ]
    }
};
document.addEventListener("DOMContentLoaded", () => {
    // Parâmetro da câmera por URL
    const urlParams = new URLSearchParams(window.location.search);
    const cameraKey = urlParams.get('camera');

    const galleryContent = document.getElementById("gallery-content");

    if (cameraKey && cameraData[cameraKey]) {
        const camera = cameraData[cameraKey];
        document.title = `RetrôPixels - Galeria ${camera.name}`;
        
        //HTML das fotos
        let photosHTML = "";
        camera.photos.forEach(photo => {
            photosHTML += ` 
                <div class="gallery-item ${photo.class}">
                    <img src="${photo.url}" alt="Foto por ${photo.author}" class="gallery-photo" loading="lazy">
                    <div class="photo-overlay">
                        <h3 class="photo-author">Por ${photo.author}</h3>
                        <p class="photo-location">${photo.location}</p>
                    </div>
                </div>            
            `;
        });
        // Informações da câmera e drid de fotos no container
        galleryContent.innerHTML = `
            <div class="gallery-camera-info">
                <span class="intro-tag">Galeria Exclusiva</span>
                <h1 class="gallery-camera-title">${camera.name} <span style="font-size: 1.5rem; color: var(--accent-color); font-weight: normal;">(${camera.year})</span></h1>
                <p class="gallery-camera-desc">${camera.desc}</p>
            </div>

            <div class="gallery-grid">
                ${photosHTML}
            </div>
        `;
    }else{
        // Caso exista algum erro - exibir mensagem
        document.title = "RetrôPixels - Câmera não encontrada";
        galleryContent.innerHTML = `
            <div class="error-container">
                <h1 class="error-title">Galeria Perdida</h1>
                <p class="error-text">O modelo de câmera selecionado não faz parte do nosso arquivo analógico histórico ou não pôde ser encontrado.</p>
                <a href="cameras.html" class="btn-primary">Voltar para Câmeras</a>
            </div>
        `;
    }
});