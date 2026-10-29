# Portafolio · Christian Vasquez

Sitio estático (HTML, CSS y JavaScript, sin compilación). Producción audiovisual, edición, radio y fotografía.

## Estructura

```
index.html        Página única
404.html          Página de error
css/styles.css    Estilos
js/main.js        Proyectos, visor, reproductores y vúmetros
assets/img/       Fotos y afiche (JPG optimizados)
assets/audio/     Spots radiales y cuento
assets/docs/      CV y documentos de los proyectos (PDF)
```

## Cómo editar el contenido

Todo el contenido de los proyectos está al inicio de `js/main.js`:

- **Videos:** en el campo `video` de cada proyecto va el enlace de YouTube o Vimeo; se muestra incrustado.
- **Fotos:** agrega la imagen a `assets/img/` (JPG, máx. ~1600 px de lado) y una línea en la lista `FOTOS`.
- **Documentos:** deja el PDF en `assets/docs/` y agrégalo al campo `docs` del proyecto.

## Verlo en tu computadora

```bash
npx serve .
```

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portafolio`) y sube **el contenido de esta carpeta** (no la carpeta que la contiene).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / carpeta `/ (root)`**.
3. Espera uno o dos minutos. La dirección será `https://TU-USUARIO.github.io/portafolio/`.
4. Si el repositorio se llama exactamente `TU-USUARIO.github.io`, la dirección será `https://TU-USUARIO.github.io/`.

Límites de GitHub: 100 MB por archivo (25 MB si subes arrastrando archivos en el navegador) y 1 GB por sitio. Los videos van en YouTube, no en el repositorio.
