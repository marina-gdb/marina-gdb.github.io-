# Portfolio — GitHub Pages

Sitio portfolio estático con Three.js, GSAP + ScrollTrigger, modo claro/oscuro, cursor personalizado y animaciones de scroll.

---

## Estructura de archivos

```
/
├── index.html          # Marcado HTML semántico
├── styles.css          # Estilos (CSS variables, grid, animaciones)
├── main.js             # Lógica, objeto `data` y librerías
├── assets/
│   ├── photo.jpg       # Tu foto profesional (reemplazar)
│   ├── cv.pdf          # Tu CV (reemplazar)
│   ├── project-1.jpg   # Miniaturas de proyectos (reemplazar)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── project-5.jpg
│   └── project-6.jpg
└── README.md
```

---

## Cómo personalizar el contenido

**Todo el contenido se edita en `main.js` dentro del objeto `data`** (línea ~10). No es necesario tocar el HTML.

### Campos principales

| Campo | Descripción |
|---|---|
| `data.hero.name` | Tu nombre. Usa `\n` para saltos de línea. |
| `data.hero.eyebrow` | Subtítulo corto bajo el nombre. |
| `data.hero.tagline` | Frase en cursiva. |
| `data.hero.ctaCV.href` | Ruta a tu PDF de CV. |
| `data.about.photo` | Ruta a tu foto (dentro de `assets/`). |
| `data.about.bio` | Párrafo de biografía. |
| `data.about.skills` | Array de habilidades (pills). |
| `data.about.socials` | Array de redes sociales con `label` y `href`. |
| `data.items` | Array de proyectos/publicaciones/charlas. |
| `data.timeline` | Array de eventos de trayectoria (newest first). |
| `data.contact.email` | Tu email (para el formulario mailto). |
| `data.footer.links` | Links del footer. |

### Agregar un proyecto

```js
{
  id: 7,
  cat: 'Proyecto',           // Categoría (genera tab automáticamente)
  title: 'Nombre del proyecto',
  desc: 'Descripción breve.',
  date: '2025',
  thumb: 'assets/project-7.jpg',
  link: 'https://enlace.com',
  linkLabel: 'Ver proyecto',
},
```

### Agregar un evento de trayectoria

```js
{
  date: '2025 — Presente',
  title: 'Tu cargo',
  org: 'Tu institución',
  desc: 'Descripción breve.',
},
```

---

## Reemplazar imágenes

Coloca tus imágenes en la carpeta `assets/` con los nombres referenciados en `main.js` (o cambia los nombres en `main.js`).

**Recomendaciones:**
- Foto de perfil: `600×800 px`, formato JPG/WebP, máx 200 KB.
- Miniaturas de proyectos: `1280×720 px` (16:9), formato JPG/WebP, máx 150 KB cada una.
- CV: PDF en `assets/cv.pdf`.

---

## Modo claro / oscuro

El sitio detecta automáticamente la preferencia del sistema. El usuario puede cambiar con el botón `◐` en la barra de navegación. La preferencia se guarda en `localStorage`.

---

## Despliegue en GitHub Pages

### Opción A — Repositorio raíz (username.github.io)

1. Crea un repositorio llamado `<tu-usuario>.github.io`.
2. Sube todos los archivos al branch `main`.
3. GitHub Pages lo publica automáticamente en `https://<tu-usuario>.github.io`.

### Opción B — Repositorio de proyecto

1. Crea un repositorio con cualquier nombre (p. ej. `portfolio`).
2. Sube todos los archivos al branch `main`.
3. Ve a **Settings → Pages → Source** → selecciona `main` y carpeta `/root`.
4. El sitio estará en `https://<tu-usuario>.github.io/portfolio/`.

> **Nota rutas relativas:** Todas las rutas en el código son relativas, por lo que funcionan igual en ambas opciones sin modificaciones.

### Comandos Git

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

---

## Librerías usadas (CDN — sin instalación)

| Librería | Versión | Uso |
|---|---|---|
| GSAP | 3.12.5 | Animaciones de scroll y entrada |
| ScrollTrigger | 3.12.5 | Sincronización scroll↔animación |
| Three.js | r160 | Escena 3D en el hero |
| Google Fonts | — | Cormorant Garamond · Instrument Sans · DM Mono |

El sitio funciona aunque fallen los CDN (las animaciones quedan deshabilitadas, el contenido permanece visible).

---

## Accesibilidad

- HTML semántico (`nav`, `main`, `section`, `footer`, `address`).
- Skip link al contenido principal (visible al tabular).
- `aria-label` en zonas interactivas.
- Contraste AA verificado en modo claro y oscuro.
- Soporte `prefers-reduced-motion` — desactiva todas las animaciones.
- Formulario con labels correctamente vinculados.

---

## Rendimiento

- Imágenes con `loading="lazy"`.
- Cursor y escena 3D desactivados en dispositivos táctiles.
- Pixel ratio de Three.js limitado a 1.5.
- `will-change` aplicado solo en elementos animados.
- Fuentes con `display=swap` para evitar FOIT.
