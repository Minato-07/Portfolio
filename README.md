# Musfiq Hasan Portfolio — V33

V33 keeps the global warm black / burnt-red / orange gradient system and improves navigation reliability and responsive behavior.

## V33 changes
- Fixed client-side `/work` route transition so the archive does not get stuck on first navigation.
- Normalized route handling for `/` and `/work` and made browser back/forward state reliable.
- Redesigned desktop navbar with cleaner spacing, hover indicators, a compact CTA, and improved branding.
- Rebuilt mobile navigation as a proper full-width overlay with numbered links, arrows, scrolling, and accessible focus behavior.
- Improved mobile header sizing and touch targets.
- Kept the rest of the portfolio content, sections, project data, global gradient theme, cursor, and animations intact.

## Run
```bash
npm install
npm run dev
```


### V33 Hero
Replaced the flat CSS crystal with a procedural interactive 3D crystal renderer using Canvas 2D projection, physically-inspired face shading, glowing emissive cracks, orbit rings, floating fragments, pointer rotation, hover response, click pulse, responsive sizing, and reduced-motion support. No external 3D runtime dependency is required.


## V34 Hero refinement
Reworked the hero object into a darker, more material obsidian-core form with denser faceted geometry, restrained emissive fractures, a softer internal molten glow, specular highlight, split-depth orbit ring, smaller floating shards, and a more restrained scale so the visual supports the typography instead of competing with it.

## V35 — Real WebGL Hero

The hero object was rebuilt from the ground up with **Three.js WebGL** instead of a 2D Canvas projection.

### What changed
- Real 3D geometry with perspective and depth
- Physical dark/obsidian material with metalness, roughness and clearcoat
- Studio environment reflections using Three.js `RoomEnvironment`
- Directional, point, warm rim and cool fill lighting
- Real emissive fracture geometry with local orange light sources
- Real 3D orbit ring that passes behind/in front of the object
- Actual floating 3D fragments
- Shadow catcher for grounding
- Mouse-controlled rotation with inertia
- Click pulse response
- Responsive WebGL canvas
- Reduced-motion support

### Install
This version adds one dependency:

```bash
npm install
```

or specifically:

```bash
npm install three
```

Then run:

```bash
npm run dev
```

The environment used to package this archive could not complete `npm install` because the package download timed out, so `node_modules` is intentionally not included in the ZIP. The project is configured with `three` in `package.json` and will install it normally on a machine with npm registry access.

V36 Hero refinement: reduced the WebGL artifact footprint, toned down the emissive cracks and orbit ring, softened the lighting/reflections, reduced floating fragments, and shifted the material/light palette toward the site's restrained burnt-orange editorial theme so the typography remains the visual priority.

V37 Hero: Replaced the procedural WebGL crystal with the photorealistic obsidian artifact reference as the hero visual, preserving subtle mouse parallax and the site's warm editorial color treatment. This prioritizes the approved visual realism over synthetic faceted geometry.

## V38 — High-detail realtime 3D hero
The hero no longer uses the photorealistic reference image. It now renders a realtime WebGL artifact with Three.js: displaced high-resolution rock geometry, procedural surface bump, PBR material, warm environment reflections, physically placed emissive crack geometry, point-light glow, 3D orbit, particles, tone mapping and subtle bloom. The reference image is retained only as a visual target asset and is not rendered in the hero.

### V39 — Empty Hero Right Side
The hero's right visual column has been intentionally removed. The editorial two-column composition remains on desktop, leaving the right side clean and empty; the visual column collapses on mobile. Three.js was removed from dependencies because the hero no longer renders a WebGL object.

V40: Updated favicon to the selected concept 13 direction (minimal M/H monogram with diagonal orange slash) and moved the hero “SCROLL TO EXPLORE” cue from the middle of the empty right column to a bottom-right vertical position.
