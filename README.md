# Actividad-2

# Proyecto: Componentes Web Personalizados

Este proyecto desarrolla una aplicación web a través de la integración de Custom Elements que incluye Shadow Dom, Templates, Slots, connected callback, estilos css.

## Índice
1. [index.html](#indexhtml)
2. [Componentes](#componentes)
   - [Header](#headerjs)
   - [Menu](#menujs)
   - [Main](#mainjs)
   - [Footer](#footerjs)
   - [Social Profile](#socialprofilejs)
   - [Gallery](#galleryjs)
   - [Custom Table](#customtablejs)

## index.html
Este archivo HTML es la estructura principal del proyecto. Incluye los componentes personalizados mediante etiquetas HTML personalizadas y scripts externos.

**Elementos principales:**
- **`<custom-header>`**: Representa el encabezado de la página.
- **`<custom-menu>`**: Un menú de navegación con enlaces configurados mediante slots.
- **`<main-component>`**: Contenedor principal dinámico que carga diferentes secciones según la navegación.
- **`<custom-footer>`**: Pie de página con información fija.

### Scripts Incluidos
Los siguientes scripts cargan los componentes personalizados:
- **`header.js`**
- **`menu.js`**
- **`main.js`**
- **`footer.js`**
- **`socialProfile.js`**
- **`customTable.js`**
- **`gallery.js`**

## Componentes

### Header (header.js)
**Función:**
- Muestra un encabezado estilizado con un degradado de colores y un título centrado.

**Características:**
- Uso de `Shadow DOM` para encapsulación de estilos.

### Menu (menu.js)
**Función:**
- Implementa un menú de navegación con enlaces dinámicos utilizando slots.

**Características:**
- Resalta enlaces al pasar el ratón con animaciones.
- Emite un evento personalizado `navigate` al hacer clic en un enlace, permitiendo la navegación entre secciones.

### Main (main.js)
**Función:**
- Contiene el contenido principal de la página y carga dinámicamente componentes según la navegación.

**Características:**
- Maneja el evento `navigate` para cargar las secciones:
  - **Inicio:** Mensaje de bienvenida.
  - **Perfil:** Carga el componente `social-profile`.
  - **Tabla:** Carga el componente `custom-table`.
  - **Galería:** Carga el componente `custom-gallery`.
- Animaciones suaves para contenido dinámico.

### Footer (footer.js)
**Función:**
- Proporciona un pie de página fijo.

**Características:**
- Usa `Shadow DOM` para encapsular estilos.
- Diseño responsivo con un degradado en el fondo.

### Social Profile (socialProfile.js)
**Función:**
- Muestra un perfil de usuario con información personal.

**Características:**
- Imagen de perfil circular con sombra.
- Información personal estructurada en párrafos.
- Diseño limpio y estilizado.

### Gallery (gallery.js)
**Función:**
- Presenta una galería de imágenes dinámica basada en datos obtenidos de la API de Pokémon.

**Características:**
- Diseño responsivo usando 'CSS Grid'.
- Obtiene datos de la API de PokéAPI de 'https://jsonplaceholder.typicode.com/users'.
- Estilos modernos con bordes redondeados y sombras.

### Custom Table (customTable.js)
**Función:**
- Crea una tabla dinámica que muestra datos de usuarios obtenidos de una API.

**Características:**
- Obtiene datos de 'https://jsonplaceholder.typicode.com/users'.
- Encabezados y datos estilizados para mejorar la legibilidad.
- Diseño limpio y profesional.

## Requisitos
- Navegador con soporte para 'Web Components'.
- Abrir el documento con Live Server

## Créditos
Creado por Adriana Borja.
