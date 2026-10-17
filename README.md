# Catalina Espitia · personal site

Single-page portfolio for Catalina Espitia Martínez, psychologist (cum laude, Universidad Sergio Arboleda) based in Sydney. Hero, story, experience, education and credentials, course-by-course transcript, recommendations, work-readiness in Australia and contact.

Built with React 19, TypeScript and Vite, with the same structure as `my-portfolio`. No runtime data fetching: everything on the page comes from the typed data files in `src/data/`, so the site is updated by editing those files alone.

## Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run lint
```

`deploy.sh` publishes `dist/` to GitHub Pages manually with `gh-pages`, but the normal path is the GitHub Actions workflow in `.github/workflows/deploy.yml`: every push to `main` builds the site and deploys it to https://sebas102507.github.io/cata_webpage/. `base` in `vite.config.ts` is `/cata_webpage/` for that URL; change it to `/` and add a `public/CNAME` when a custom domain is attached.

## Before publishing

`src/data/profile.ts` holds placeholders that must be replaced:

- `email` is `catalina.espitia@example.com`.
- `linkedin` is a guessed URL.
- `site` is a placeholder domain.

Nothing on the page shows identity numbers (passport, cédula, police-check or Working With Children Check numbers, date of birth or home address). Keep it that way: the professional card number is the only identifier shown, because it is the public way to verify a psychologist's licence in Colombia.

## Structure

```
src/
  data/
    profile.ts        name, title, tagline, abstract, languages, skills
    story.ts          the five story chapters and their photos
    experience.ts     roles and placements, education, credentials
    curriculum.ts     every course from the transcript, grouped by area, plus semester averages
    testimonials.ts   recommendation letter, INPEC recognition, work certificate (quoted verbatim)
    personal.ts       value pillars, "ready to work in Australia" items, interests
  components/         nav, hero, sections, story, timelines, coursework, testimonials, footer
  styles/global.css   design tokens, layout, components
  assets/
    me/profile.jpg    hero portrait (cropped from the graduation photo)
    story/            photos used by story chapters and experience entries (matched by file name)
    companies/        optional organisation logos: <key>_logo.png replaces the wordmark for that key
                      (keys: sergio_arboleda, colpsic, inpec, tienda_de_suenos, pearson, nsw_police, wwcc)
```

## Palette

| Token | Hex | Use |
|---|---|---|
| paper / bg | `#f5ebe0` | page background, inner boxes, text on dark |
| tint | `#edede9` | cards |
| tint-2 / line | `#e3d5ca` | hover state, hairlines, ghost text |
| sand | `#d6ccc2` | borders, chips |
| accent | `#d5bdaf` | badges, number tiles, bar gradient |
| ink | `#3b312b` | text, buttons, dark cards (derived: the palette has no dark tone) |

## Sources

All content was taken from Catalina's documents: the diploma and sworn translation, the official transcript, the COLPSIC professional card, the student-representative certificate, the INPEC special recognition, the COLPSIC and Tienda de Sueños work certificates, Santiago Amaya Nassar's recommendation letter, the PTE Academic score report, the NSW police certificate and the Working With Children Check notice. The story chapters add connective prose around those facts; Catalina should read them and adjust the voice.
