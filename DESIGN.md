# Portfolio interface

## Direction

An individual developer's portfolio for clients and employers. The original navy,
turquoise and blue identity is preserved at the owner's explicit request.
The interface presents three public case studies and describes broader capabilities.
Personal products are only mentioned abstractly; no names, screenshots or links.

## Color and typography

- Original navy foundation: #050716, #0a1228, #071a30; controls and surfaces #0f1728 / #1b2438.
- Original turquoise: #2ad8c2, #44e7d2, #97f8e8; blue: #218ef4, #45a4ff, #70bbff.
- Text: #e8fffb / #c8fdf4; secondary text #a6b2c9 / #8896af.
- Local Inter 400–500 and Manrope 600–700, Latin and Cyrillic, OFL licenses alongside assets.
- Code uses system monospace only inside actual code blocks; syntax colors come from the original palette.

## Structure

Sticky header with RU/EN navigation and a native mobile disclosure; hero; three
case studies with native details; capabilities; about/profile code; experience;
contact form and direct contact links. Native HTML and CSS are the primary UI.
The previous Mantine and Query providers remain in source history but are not mounted.

## Motion and interaction

The hero uses 27 CSS 3D modules. Scroll enlarges, separates and scatters them;
mouse movement lightly changes the viewpoint. Frames are requested only on input,
stopped outside visibility and hidden tabs, and static for reduced motion.
Hover/focus effects underline navigation, move arrows, lift previews, tint borders,
highlight capabilities/experience and code rows. Touch and reduced motion avoid
decorative lifts. No scroll hijacking or content entrance dependencies.

The cube remains in the hero. A separate, dynamically loaded Three.js background
uses the CC0 ScatteringSkull by Vladimir Petkovic / Khronos across the page. Scroll opens its hinged jaw toward
the capabilities section, holds it open through that section, then settles at a
slightly open 0.12-radian jaw with zero pitch during the final eye glow. Its position follows a
reversible path, ending front-facing at the horizontal center on desktop and mobile.
The capabilities section anchors a right-facing pose with the jaw held open.
Smooth matte shading (metalness 0, roughness 0.95) and directional lighting preserve
bone and tooth relief. Toon shading and forced pixelation are not used. Vertex shading darkens
eye sockets and soft cyan glints emerge from them at the end. Rendering happens
only on scroll/resize, pauses in hidden tabs and reduced motion, and falls back to
a local static poster without WebGL or JavaScript. The derived local GLB is texture-free; its approximate jaw separation matches the approved standalone prototype. DPR is capped at 1.35 on desktop and 1 on mobile.
The floating header highlights the active section and shows reading progress.
Header and expanded footer link to the owner's public Telegram channel.

## Accessibility and resilience

One server-rendered H1, semantic sections, visible keyboard focus, skip link,
native project details and mobile navigation without JavaScript. The feedback
button stays disabled until hydration; direct contact links are always available.
Consent must be explicitly checked. No real form submission is used during tests.

## Asset provenance

Ona Hochet and Business Courses previews are existing owner assets. VidSave preview
is optimized from the owner-supplied vidsave-preview-16x9.png. Social previews are
locally rendered typography. Brand mark is authored SVG. The background uses the
CC0 ScatteringSkull by Vladimir Petkovic / Khronos, with a derived jaw split and a
locally rendered fallback poster. Provenance and generation are documented in
public/models/README.md. No AI-generated images are used.

## Narrow screens and scene interaction
Both locales support a 300px viewport. Mobile code rows wrap, narrow forms stack
fields, headings wrap and the cube scales with its available width. Pointer input
uses viewport coordinates while the hero is visible, including the left edge;
reduced motion suppresses pointer rotations. The final skull pitch is 0 rad
with the jaw open to 0.22 rad. Final scale eases down to 0.62 desktop / 0.52 mobile. Eye and nasal sockets remain dark, with low-opacity linearly
filtered glow easing in across the final 12% of the choreography; no light streaks.

The final skull also turns right (yaw 0.75 rad). Nasal shading follows the recessed
surface at local y=0.009 and fades with depth before the projecting bony rim.


## Social preview and hero composition
Open Graph and Twitter large-image cards use the owner-supplied social-neon.jpg
(1200x630, contained without cropping); titles and descriptions remain localized.
The same Russian-language artwork is used for both locales as requested.
Hero skull starts with jaw 0.95 rad and opacity 0.25. Its mouth follows the actual
cube container with perspective compensation, blending into the scroll path
by progress 0.16. Initial scale is 0.85 desktop / 0.60 mobile.


## Performance
The skull keeps all 188,871 triangles and original positions. Normal attributes
use KHR_mesh_quantization normalized bytes; runtime shading colors use normalized
Uint8 buffers. Reused vectors and a cached cube reference avoid per-frame allocations.
DPR adapts on resize (mobile <=1). Responsive project-image sizes match the layout.
Social artwork is JPEG quality88 (71KB instead of981KB PNG). Hero mouth anchor
is shifted right to 60% of the cube scene width.


Hero cube has a soft static turquoise radial glow (no animated blur). Jaw beats
are deterministic and reversible: initial0.95 -> closed at0.18–0.26 -> open0.56
at0.5–0.65 -> closed at0.86–0.91 -> final0.22. These are choreography fractions,
anchored to the capabilities section, not raw whole-page scroll percentages.

