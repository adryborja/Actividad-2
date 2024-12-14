class CustomTable extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px auto;
            border: 1px solid #f8d9d6;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
          }
          th {
            background-color: #f8d9d6;
            color: black;
          }
        </style>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      `;
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      this.loadData();
    }
  
    async loadData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const tbody = this.shadowRoot.getElementById('table-body');
      data.forEach(user => {
        tbody.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
          </tr>
        `;
      });
    }
  }
  
  customElements.define('custom-table', CustomTable);