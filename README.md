# Mariposas25N

Landing de FIL-113 · PUCMM sobre el 25 de noviembre, el legado de las hermanas Mirabal y la prevención de la violencia contra las mujeres.

## Descargas

- [Mariposas25N.html](descargas/Mariposas25N.html) es la vista previa autónoma. En GitHub, usa **Download raw file** y abre el HTML descargado en tu navegador.
- [Mariposas25N.zip](descargas/Mariposas25N.zip) contiene el código fuente, la licencia y las instrucciones. Descárgalo y descomprímelo para editar el proyecto.

## Abrir la página

Con Node.js 22.12 o posterior, ejecuta:

```sh
npm ci
npm run dev
```

Abre la dirección local que muestra Vite. Para revisar la versión de producción, ejecuta `npm run build` y luego `npm run preview`.

## Editar y guardar

- `src/data/content.js` contiene los textos, preguntas, fuentes, recursos y la lista `site.team` para los nombres del equipo.
- `src/sections/` contiene las secciones y el quiz. `src/components/Layout.jsx` contiene el menú, los desplegables y el pie.
- `src/styles.css` contiene Tailwind y los estilos adaptables. `index.html` contiene el favicon y los metadatos.
- Guarda los cambios en GitHub con `git add .`, `git commit -m "Describe tu cambio"` y `git push`. Para pedir ajustes a Codex, comparte el enlace de este repositorio e indica qué sección quieres cambiar.

## Publicar en Vercel

Cuando el equipo apruebe la publicación, en Vercel elige **Add New → Project** e importa este repositorio. Selecciona **Vite** y verifica que el comando sea `npm run build` y la salida sea `dist`. Pulsa **Deploy**, verifica la URL de producción desde un celular y usa esa URL para el QR externo.

## Fuentes e imágenes

- [Naciones Unidas, origen del 25N](https://www.un.org/womenwatch/daw/vaw/v-inter-day.htm) y [Resolución 54/134](https://docs.un.org/es/A/RES/54/134).
- [Archivo General de la Nación, Hermanas Mirabal](https://agn.gob.do/images/pdf/exposicionesgraficas/15-_Hermanas_Mirabal.pdf) e [Instituto Dominicano de Genealogía, nombres completos](https://www.idg.org.do/capsulas/mayo2010/mayo201029.htm).
- [Ministerio de la Mujer, Línea de Emergencia *212](https://www.mujer.gob.do/index.php/servicios/linea-mujer-212).
- Los retratos son recortes de una [imagen histórica de autoría desconocida catalogada en Wikimedia Commons como dominio público en República Dominicana y EE. UU.](https://commons.wikimedia.org/wiki/File:Mirabal_sisters.jpg).
- `public/marcha.webp` es una imagen generada para ilustrar una marcha ficticia.
- La identidad visual sigue la descripción del brief. Queda pendiente cotejarla con Figma y añadir los nombres del equipo.
