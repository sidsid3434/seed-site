# Sid's Seeds — static site scaffold

Plain HTML/CSS + one tiny JS file. No build step. Open `index.html` directly, or preview:

    python3 -m http.server 8080   # then http://localhost:8080

## Structure
    index.html              homepage (hero, philosophy, spiritual side, strains, field notes, email invite)
    grow/honey-ember.html   sample grow guide (tied to Honey Ember card)
    css/style.css           all styles (earthy palette, serif type, mobile-friendly)
    js/main.js              placeholder form handler
    images/                 empty — drop photos here

## Placeholders to replace
- **Photos** (warm gradient shows until the file exists):
  - `images/hero-golden-hour.jpg` — full-bleed golden-hour plant shot (~2400px wide)
  - `images/strain-honey-ember.jpg`, `strain-cedar-hymn.jpg`, `strain-dusk-tangerine.jpg`, `strain-black-sage.jpg` (4:5 portrait)
- **Strain names are invented placeholders**: Honey Ember, Cedar Hymn, Dusk Tangerine, Black Sage. Replace names, notes, and the grow-guide numbers (flower time, height, etc.).
- **Brand name** "Sid's Seeds" — placeholder.
- **Footer legal line** — generic; have it reviewed for your jurisdictions.
- **Email provider** — form has no backend.

## Wiring the email form
In `index.html`, set the form's `action` to your provider's endpoint and match the input `name`:
- Buttondown: `action="https://buttondown.com/api/emails/embed-subscribe/YOURNAME"`, input `name="email"`
- ConvertKit/Kit, Mailchimp, MailerLite: copy their embedded-form `action` URL and field name.
Once `action` isn't `#`, `js/main.js` lets the form submit normally (you can delete it). Note: some providers restrict cannabis-related content — check their acceptable-use policy.

## Next steps
1. Shoot/replace photos; compress (WebP/JPG < 400KB).
2. Finalize strain names + notes; add one grow guide per strain (copy `grow/honey-ember.html`), then swap "Grow guide — soon" links.
3. Add favicon, Open Graph image, and an age gate if required.
4. Host on Netlify/Cloudflare Pages/GitHub Pages (drag-and-drop the folder).
