# Portfolio content and image optimization

## Changes
- Preserve the current navbar, hero wording, visual style, and project-card structure.
- Fix the hero layout so the portrait stays visible below the copy on phones and remains beside it on larger screens.
- Convert the portrait and project artwork into responsive WebP/AVIF variants, add fixed image dimensions, prioritize the portrait, and lazy-load project images.
- Replace the experience and skills content with the supplied roles, dates, responsibilities, and technology lists.
- Correct Novo wording to describe a student wellbeing and emotional intelligence platform for schools.
- Remove unused oversized image files and obsolete visual assets where they are not referenced.

## Verification
- Check phone, tablet, and desktop layouts in the browser.
- Confirm no horizontal overflow, broken image paths, or image-related layout shifts.
- Inspect image requests to confirm the portrait loads eagerly at the appropriate size and project images load lazily.
- Confirm the preview builds without errors.

## Technical details
- Use native `<picture>`, `srcset`, `sizes`, `fetchpriority`, `loading`, `decoding`, `width`, and `height` attributes.
- Generate local AVIF and WebP assets at multiple widths; no runtime image processing or duplicate portrait request.
