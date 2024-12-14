// Componente Header: Representa el encabezado principal de la página
class CustomHeader extends HTMLElement {
  constructor() {
    super(); // Llama al constructor de HTMLElement
     // Crear una plantilla para encapsular estructura y estilos en el Shadow DOM
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        header {
          background: linear-gradient(135deg, #f8d9d6, #4c4b63);
          color: white;
          text-align: center;
          padding: 1em;
          font-family: 'Poppins', sans-serif;
          font-size: 2.5em;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          width: 100%;
          margin: 0;
          box-sizing: border-box;
}
      </style>
      <header>
        Componentes Web Personalizados
      </header>
    `;
     // Adjunta el contenido de la plantilla al Shadow DOM
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }
}
// Define el elemento personalizado con el nombre 'custom-header'
customElements.define('custom-header', CustomHeader);