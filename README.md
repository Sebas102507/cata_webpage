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

`deploy.sh` publishes `dist/` to GitHub Pages manually with `gh-pages`, but the normal path is the GitHub Actions workflow in `.github/workflows/deploy.yml`: every push to `main` builds the site and deploys it to https://cataespitia.com (custom domain set in the repo Pages settings; `public/CNAME` mirrors it). `base` in `vite.config.ts` is `/`; it would need to be `/cata_webpage/` only if the site went back to the github.io URL.

## Content and privacy

All facts come from Catalina's CV (October 2026) and the certificates in `src/assets/docs/`. Contact details in `src/data/profile.ts` are the real email and LinkedIn URL from the CV; the phone number is deliberately not published.

Nothing on the page shows identity numbers (passport, cédula, police-check or Working With Children Check numbers), date of birth or home address. The document images were exported with those fields blacked out (`scratchpad/export_docs.py` at build time of this repo did the redaction with PyMuPDF; re-export the same way if a document is added). The professional card number and the APS reference are shown because they are the public way to verify the licence and the assessment.

## Structure

```
src/
  data/
    profile.ts        name, title, tagline, abstract, languages, skills
    story.ts          the six story chapters and their photos
    experience.ts     psychology roles and placements, other work, volunteering, education, courses, credentials, awards
    research.ts       thesis, book chapter and research projects
    documents.ts      the document gallery entries (file name in src/assets/docs, title, issuer, date, group)
    curriculum.ts     every course from the transcript, grouped by area, plus semester averages
    testimonials.ts   recommendation letter, INPEC recognition, work certificate (quoted verbatim)
    personal.ts       value pillars, "ready to work in Australia" items, interests
  components/         nav, hero, sections, story, timelines, coursework, testimonials, footer
  styles/global.css   design tokens, layout, components
  assets/
    me/profile.jpg    hero portrait (cropped from the graduation photo)
    docs/             redacted JPG scans of diplomas, distinctions, licence, assessments and certificates
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
