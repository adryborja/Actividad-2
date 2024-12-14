class CustomGallery extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            padding: 20px;
            background: #f8d9d6;
            border-radius: 10px;
            margin: 10px auto;
          }
          img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }
        </style>
        <div class="gallery" id="gallery"></div>
      `;
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      this.loadImages();
    }
  
    async loadImages() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
      const data = await response.json();
      const gallery = this.shadowRoot.getElementById('gallery');
      data.results.forEach((pokemon, index) => {
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
        img.alt = pokemon.name;
        gallery.appendChild(img);
      });
    }
  }
  customElements.define('custom-gallery', CustomGallery);