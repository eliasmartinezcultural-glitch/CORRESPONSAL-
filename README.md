# CORRESPONSAL · Diario digital

**El territorio tiene la palabra.** Una mirada periodística que empieza en San Patricio del Chañar y se abre al mundo.

## Identidad editorial
- Primero San Patricio del Chañar: personas, cultura, memoria, educación, naturaleza, trabajo y vida cotidiana.
- Después las localidades cercanas y la Patagonia.
- Argentina y el mundo cuando aporten contexto o valor a la comunidad.
- La cercanía importa más que el volumen de titulares.
- Las publicaciones externas conservan su enlace y atribución; no se presentan como producción propia.
- No inventamos noticias para llenar espacios.

## Cómo funciona hoy
- Sitio estático HTML, CSS y JavaScript; no requiere servidor propio ni base de datos.
- GitHub Actions intenta actualizar la edición cada hora y también puede ejecutarse manualmente desde la pestaña **Actions**.
- La edición reúne publicaciones RSS de Neuquén Informa y titulares/enlaces públicos de la portada de Chañar Digital.
- De Chañar Digital se extraen enlaces a artículos y, cuando están disponibles, descripciones breves; no se republica el cuerpo completo.
- Los contenidos se ordenan por cercanía territorial y mantienen la atribución a la fuente original.

## Fuentes configuradas
- **Chañar Digital** — fuente local: https://chanardigital.com.ar/
- **Neuquén Informa · Generales** — fuente provincial: https://www.neuqueninforma.gob.ar/rss/generales/
- **Neuquén Informa · Turismo** — fuente provincial: https://www.neuqueninforma.gob.ar/rss/turismo/
- **Neuquén Informa · Educación** — fuente provincial: https://www.neuqueninforma.gob.ar/rss/educacion/
- **Municipalidad de San Patricio del Chañar** — referencia institucional y fuente a revisar: https://www.sanpatricio.gob.ar/

La presencia de un sitio en esta lista no significa que todos sus contenidos estén conectados automáticamente. El portal municipal queda como referencia, no como feed conectado, hasta confirmar un mecanismo de publicación estable.

## Criterio de selección y límites
Los filtros automáticos intentan excluir policiales, violencia, accidentes, drogas, política partidaria y petróleo/fracking. Son filtros por palabras clave: pueden omitir información valiosa o dejar pasar algo que requiera contexto. **No equivalen a verificación periodística humana.** Antes de convertir una publicación en una noticia propia, hay que comprobar los datos con la fuente y, cuando corresponda, consultar a las personas involucradas.

La automatización conserva titulares, resúmenes breves, fecha cuando se encuentra y enlace de origen. No garantiza que todas las noticias sean recientes ni que el feed esté siempre disponible. Si una fuente falla, la edición no debe rellenarse con contenido inventado.

## Publicación
- Portada: `index.html`
- Estilos: `styles.css`
- Renderizado: `app.js`
- Datos de edición: `noticias.json`
- Automatización: `.github/workflows/diario.yml`

GitHub Pages: Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Próximas mejoras editoriales
1. Comprobar el despliegue y la recopilación local en cada ejecución.
2. Incorporar el portal municipal solo cuando exista una ruta estable y comprobada de actualización.
3. Añadir una bandeja de revisión humana para destacar producciones propias, entrevistas, reportajes y correcciones.
4. Mantener visibles fecha de consulta, autoría y fuente en cada publicación.
