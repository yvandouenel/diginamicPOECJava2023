class Slideshow {
  constructor(nb_images, width, height, speed) {
    this.nb_images = nb_images;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.images = this.feedSs(0);
    this.animateSs(0);
  }
  /**
   * Animation du slideShow
   * @param {Number} n
   */
  animateSs(n) {
    setTimeout(() => {
      for (let i = 0; i < this.nb_images; i++) {
        if (i == n) this.images[i].hidden = false;
        else this.images[i].hidden = true;
      }
      // Utilisation du reste de la division euclidienne
      // permet de ne pas dépasser l'index maximum du tableau d'images
      this.animateSs((n + 1) % this.nb_images);
    }, this.speed);
  }
  /**
   * Creée le nombre d'images indiqués dans this.nb_images
   * à l'aide d'une boucle qui appelle la méthode createImage
   * @returns Array (tableau d'éléments du DOM images)
   */
  feedSs() {
    const images = [];
    for (let i = 0; i < this.nb_images; i++) {
      // Création d'un élément du dom image
      const img = this.createImage();
      images.push(img);

      document.querySelector("#slideshow").appendChild(img);
    }
    return images;
  }
  /**
   * Crée un élément du dom via createElement
   * @returns DOM Element (image)
   */
  createImage() {
    // création d'une image
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://picsum.photos/${this.width}/${this.height}?id=${
        Math.random() * 1000
      }`
    );
    return img;
  }
}

const ss = new Slideshow(12, 600, 600, 800);
