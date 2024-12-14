class CustomFooter extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          footer {
            background: linear-gradient(135deg, #f8d9d6, #4c4b63);
            color: white;
            text-align: center;
            padding: 16px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: bold;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            margin: 0;
            box-sizing: border-box;
            
          }
        </style>
        <footer>
          © 2024 Adriana Borja. Todos los derechos reservados.
        </footer>
      `;
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  