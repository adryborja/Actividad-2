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

- **Estilos modernos**: Fondo con gradiente, fuente elegante y sombras de texto.
- **Encapsulación**: Utiliza el Shadow DOM para aislar estilos y estructura.
- **Reutilizable**: Puede integrarse fácilmente en cualquier proyecto web.


### Menu (menu.js)
**Función:**
- implementa el menú de navegación principal. Utiliza la API de Web Components utilizando slots para proporcionar una solución encapsulada y estilizada para la navegación.

- El componente `CustomMenu` permite crear menús de navegación dinámicos utilizando slots para la inserción de elementos de menú personalizados. Incluye funcionalidades de interacción como efectos visuales en el hover y el manejo de eventos de navegación.

**Características:**

- **Diseño moderno**: Estilo adaptable con colores contrastantes y transiciones suaves.
- **Interactividad**: Cambios visuales al pasar el cursor sobre los enlaces.
- **Navegación dinámica**: Emite un evento personalizado `navigate` al hacer clic en los enlaces para facilitar la navegación en aplicaciones SPA.
- **Encapsulación**: Los estilos y comportamientos están aislados en el Shadow DOM.


### Main (main.js)
**Función:**
- Contiene el contenido principal de la página y carga dinámicamente componentes según la navegación.
- Representa el área principal de contenido de una página. El componente `MainComponent` está diseñado para renderizar contenido dinámico basado en eventos de navegación personalizados.

**Características:**

- **Diseño moderno**: Utiliza estilos adaptativos con animaciones suaves.
- **Contenido dinámico**: Cambia las secciones de la página al recibir eventos personalizados.
- **Interactividad**: Integra otros componentes personalizados para un diseño modular y flexible.
- **Encapsulación**: Estilos y funcionalidades están aislados en el Shadow DOM.


### Footer (footer.js)
**Función:**
- Proporciona un pie de página fijo con un diseño moderno.
- Representa el pie de página de una página web. El `CustomFooter` está diseñado para ser fijo en la parte inferior de la ventana y proporcionar información sobre derechos de autor.

**Características:**

- **Diseño fijo**: Se posiciona en la parte inferior de la página, visible en todo momento.
- **Estilo moderno**: Fondo con gradiente y texto estilizado.
- **Encapsulación**: Usa Shadow DOM para evitar conflictos con otros estilos en la página.
- **Personalización fácil**: El texto se puede modificar directamente en el código.
- El CustomFooter extiende HTMLElement y encapsula su contenido en el Shadow DOM.
- Define una plantilla HTML con estilos CSS y el contenido del pie de página.


### Social Profile (socialProfile.js)
**Función:**
- Muestra un perfil de usuario con información personal.
- Incluye información básica como nombre, correo, fecha de nacimiento, nacionalidad, lugar de residencia, estudios y hobbies. Este componente es ideal para páginas web personales o de portafolio.

**Características:**

- **Encapsulación**: Utiliza el Shadow DOM para aislar estilos y estructura.
- **Diseño moderno**: Fondo con bordes redondeados, sombra y elementos bien alineados.
- **Dinámico**: Renderiza información personal de forma iterativa.
- **Personalización fácil**: Los datos del perfil pueden ser modificados directamente en el código.
- El componente extiende HTMLElement y encapsula su contenido con Shadow DOM.
- Define estilos y estructura en el método render.


### Gallery (gallery.js)
**Función:**
- Muestra una galería dinámica de imágenes. Este ejemplo utiliza la API de PokéAPI para cargar automáticamente imágenes de Pokémon y organizarlas en un diseño de cuadrícula responsivo.

**Características:**

- **Diseño responsivo**: Usa una cuadrícula flexible que se ajusta automáticamente al tamaño de la ventana.
- **Carga dinámica**: Obtiene imágenes de Pokémon desde la PokéAPI 'https://pokeapi.co/api/v2/pokemon?limit=6' al cargarse.
- **Encapsulación**: Los estilos y la estructura están aislados en el Shadow DOM.
- **Fácil integración**: Solo se necesita incluir el componente en la página.

### Custom Table (customTable.js)
**Función:**
- Genera dinámicamente una tabla de datos. Este ejemplo utiliza la API `JSONPlaceholder` para cargar información de usuarios ficticios y mostrarla en un diseño limpio y organizado.

**Características:**

- **Encapsulación**: Utiliza Shadow DOM para aislar estilos y estructura.
- **Carga dinámica de datos**: Obtiene información de usuarios desde una API externa 'https://jsonplaceholder.typicode.com/users'..
- **Diseño limpio**: Tabla responsiva con estilos básicos y personalizables.
- **Fácil integración**: Puede ser usado en cualquier página web.


## Requisitos
- Navegador moderno con soporte para 'Web Components'.
- Abrir el documento con Live Server

## Créditos
Creado por Adriana Borja.