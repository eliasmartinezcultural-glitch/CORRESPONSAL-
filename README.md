# CORRESPONSAL · Diario digital

**El territorio tiene la palabra.** Una mirada periodística que empieza en San Patricio del Chañar y se abre al mundo.

## Identidad
- Primero San Patricio del Chañar: personas, cultura, memoria, educación, naturaleza, producción y vida cotidiana.
- Después la región y Patagonia.
- Argentina y el mundo cuando aporten contexto o valor a la comunidad.
- La cercanía importa más que el volumen de titulares.
- Las publicaciones externas conservan su enlace y atribución; no se presentan como producción propia.
- No inventamos noticias para llenar espacios. La automatización no equivale a verificación periodística.

## Arquitectura
Sitio estático HTML/CSS/JavaScript, alojado gratuitamente en GitHub Pages. Un workflow de GitHub Actions consulta fuentes RSS cada hora, aplica filtros conservadores, clasifica publicaciones por territorio y genera `noticias.json` para la edición web.

## Fuentes
Fuentes públicas para consulta:
- Municipalidad de San Patricio del Chañar: https://www.sanpatricio.gob.ar/
- Chañar Digital: https://www.chanardigital.com.ar/
- Neuquén Informa (fuente oficial provincial): https://www.neuqueninforma.gob.ar/

La primera automatización usa únicamente los RSS explícitamente configurados en el workflow. Los enlaces anteriores no implican que todos estén conectados al recolector.

## Publicación
- Portada: `index.html`
- Estilos: `styles.css`
- Renderizado: `app.js`
- Datos de edición: `noticias.json`
- Automatización: `.github/workflows/diario.yml`

En GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Límite editorial
Los filtros por palabras clave pueden fallar en ambas direcciones. No se debe publicar automáticamente una acusación, dato sensible o información de emergencia como hecho confirmado sin revisión humana.