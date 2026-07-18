# Voxa Site — Launch Readiness

## ✅ Ready for Launch

This static site is ready to deploy to `voxa.dk`. Upload all files to your web host.

### What's Included
- Single-page marketing site for Voxa AI team service
- Responsive design (mobile, tablet, desktop)
- Working Cal.com booking integration
- FAQ accordion with keyboard accessibility
- Danish language content
- GDPR-compliant messaging

### Files to Deploy
```
voxa-site/
├── index.html    # Main page
├── styles.css    # All styling
├── script.js     # Booking integration + interactions
└── README.md     # This file
```

---

## 🔧 Booking Configuration

The Cal.com booking URL is set in `script.js`:

```javascript
const BOOKING_URL = 'https://cal.com/voxa/voxa-intro';
```

If you need to change it, update that line. All buttons with `data-booking` attribute will use the new URL automatically.

**Current setup:** Booking buttons open Cal.com in a new tab. If `BOOKING_URL` is empty, they fall back to `mailto:albert@voxa.dk`.

---

## 🚀 Deployment Steps

1. **Upload to hosting:** Copy all 3 files (index.html, styles.css, script.js) to your web root
2. **Set up domain:** Point `voxa.dk` to your hosting
3. **SSL certificate:** Ensure HTTPS is enabled (most hosts do this automatically)
4. **Test booking flow:** Click "Book møde" buttons to verify Cal.com opens
5. **Test email:** Click "albert@voxa.dk" in footer to verify mailto works

---

## 📋 Pre-Launch Checklist

- [ ] Cal.com booking link works (`https://cal.com/voxa/voxa-intro`)
- [ ] Email `albert@voxa.dk` is monitored
- [ ] Domain DNS is configured
- [ ] HTTPS is active
- [ ] Mobile view looks good (test on phone)
- [ ] FAQ accordion works (click to expand/collapse)

---

## 🛠 Optional Post-Launch Improvements

These are nice-to-have, not blockers:

1. **Real favicon:** Replace the emoji favicon with a proper SVG or ICO file
2. **Open Graph image:** Add an `og:image` meta tag with a share preview image
3. **Analytics:** Add Plausible, Fathom, or Google Analytics if you want tracking
4. **404 page:** Create a simple `404.html` if your host supports custom error pages

---

## 📞 Contact Points

- **Booking:** Cal.com at `https://cal.com/voxa/voxa-intro`
- **Email:** `albert@voxa.dk` (shown in footer and CTA section)

---

*Last updated: April 2025*
