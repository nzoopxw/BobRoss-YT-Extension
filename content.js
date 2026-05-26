let BobRossImages = [
    "https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg",
    "https://kraftgeek.com/cdn/shop/articles/bob_ross_life_story.jpg?v=1747395438&width=1500",
    "https://cdn.shopify.com/s/files/1/0652/2277/0926/files/bob_ross_wet_on_wet.jpg?v=1747395279",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bob_Ross_Alaska_Painting.jpg/500px-Bob_Ross_Alaska_Painting.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEW68hFSLafLp02kPGrkVF6SRekcYt2eCZRQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0kQ2QsY1ZNMTEERpi2GJAQs_qXq-wOZLYw&s",
];

function replaceAllImages(){
    document.querySelectorAll('img').forEach(img => {
        img.src = BobRossImages[Math.floor(Math.random() * BobRossImages.length)];
    });
}

setInterval(replaceAllImages, 1000);

/*
const images = document.getElementsByTagName('img');

for(image of images) {
    const index = Math.floor(Math.random() * BobRossImages.length);
    image.src = BobRossImages[index];
}
    */