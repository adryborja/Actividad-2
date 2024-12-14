class SocialProfile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }); // Shadow DOM encapsulado
    }
  
    connectedCallback() {
  
      this.render();
    }
  
    render() {
      // Crea y organiza dinámicamente los elementos del perfil
      const style = document.createElement('style');
      style.textContent = `
        section {
          max-width: 400px;
          margin: 10px auto 60px auto;
          padding: 20px;
          background: #fff;
          border-radius: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
          color: #333;
          box-sizing: border-box;
        }
        img {
          display: block;
          width: 220px;
          height: 220px;
          margin: 0 auto 20px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        h2 {
          text-align: center;
          color: #4c4b63;
          margin-bottom: 10px;
        }
        p {
          font-size: 1em;
          line-height: 1.5;
          margin: 5px 0;
        }
        .info {
          text-align: center;
          margin-top: 10px;
        }
      `;
  
      const section = document.createElement('section');
  
      const img = document.createElement('img');
      img.src = 'https://cdn-icons-png.flaticon.com/512/201/201634.png'; // Imagen de perfil
      img.alt = 'Foto de perfil';
  
      const h2 = document.createElement('h2');
      h2.textContent = 'Adriana Maribel Borja Diaz';
  
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('info');
  
      // Información personal
      const infoData = [
        { label: 'Correo', value: 'amborja1@espe.edu.ec' },
        { label: 'Fecha de nacimiento', value: '10-02-1995' },
        { label: 'Nacionalidad', value: 'ecuatoriana' },
        { label: 'Lugar de Residencia', value: 'Quito' },
        { label: 'Estudios', value: 'Universidad de las Fuerzas Armadas ESPE' },
        { label: 'Hobbies', value: 'jugar fútbol, hacer deporte y ver anime' },
      ];
  
      // Itera sobre los datos para crear párrafos dinámicamente
      infoData.forEach(({ label, value }) => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${label}:</strong> ${value}`;
        infoDiv.appendChild(p);
      });
  
      // Ensambla el contenido
      section.appendChild(img);
      section.appendChild(h2);
      section.appendChild(infoDiv);
  
      // Agrega el estilo y el contenido al Shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(section);
    }
  }
  
  customElements.define('social-profile', SocialProfile);