// Componente Menu: Implementa el menú de navegación principal
class CustomMenu extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          nav {
            background-color: #4c4b63;
            padding: 16px;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
          }
          ::slotted(a) {
            margin: 0 40px;
            color: #f8d9d6;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            transition: color 0.3s, transform 0.3s;
          }
          ::slotted(a:hover) {
            color: #dca4aa;
            transform: scale(1.1);
            cursor: pointer;
          }
        </style>
        <nav>
          <slot name="menu-item"></slot>
        </nav>
      `;
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
   //Configurar eventos cuando se agregan elementos al slot
    connectedCallback() {
      const slot = this.shadowRoot.querySelector('slot');
      slot.addEventListener('slotchange', () => {
        const links = slot.assignedElements();
        links.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');
            window.dispatchEvent(new CustomEvent('navigate', {
              detail: { section },
              bubbles: true,
              composed: true,
            }));
          });
        });
      });
    }
  }
  
  customElements.define('custom-menu', CustomMenu);