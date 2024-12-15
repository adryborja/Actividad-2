// Componente Main: Renderiza contenido dinámico en la página principal
class MainComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
          
        main {
          padding: 2em;
          min-height: calc(100vh - 180px);
       
          background: #2d3142;
          color: white;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          width: 100%;
          box-sizing: border-box; 
        }

        .welcome {
          font-size: 3em;
          font-weight: bold;
          color: #dca4aa;
          margin-bottom: 1em;
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .description {
          font-size: 1.2em;
          line-height: 1.5em;
          color: #f8d9d6;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.5s ease-in-out forwards;
          animation-delay: 0.5s; /* Retraso para que la descripción aparezca después del título */
        }

        img {
          width: 200px;
          margin-top: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeIn 1.5s ease-in-out forwards;
        }

      </style>
      <main>
        <slot></slot> <!-- Slot para contenido dinámico -->
      </main>
    `;
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // Escucha el evento personalizado de navegación
    const slot = this.shadowRoot.querySelector('slot');
    window.addEventListener('navigate', (event) => {
      const section = event.detail.section;
      this.renderSection(section, slot);
    });

    // Renderizar la sección inicial (inicio)
    this.renderSection('home', this.shadowRoot.querySelector('slot'));
  }

  renderSection(section, slot) {
    // Limpia el contenido previo del slot
    slot.innerHTML = '';

    let component;
    switch (section) {
      case 'profile':
        component = document.createElement('social-profile');
        break;
      case 'table':
        component = document.createElement('custom-table');
        break;
      case 'gallery':
        component = document.createElement('custom-gallery');
        break;
      default:
        // Contenido inicial (bienvenida)
        const welcome = document.createElement('div');
        welcome.className = 'welcome';
        welcome.textContent = '¡Bienvenidos a mi página!';

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent =
          'Descubre cómo los componentes personalizados pueden mejorar tu experiencia web.';

        const image = document.createElement('img');
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'; // Imagen pública
        image.alt = 'Componente web';

        slot.appendChild(welcome);
        slot.appendChild(description);
        slot.appendChild(image);

        return; // Finaliza para evitar añadir más contenido
    }

    // Añade el componente correspondiente al slot
    slot.appendChild(component);
  }
}

customElements.define('main-component', MainComponent);