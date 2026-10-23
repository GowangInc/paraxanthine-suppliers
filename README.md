# Paraxanthine Supplier Reference

Static supplier reference published at https://gowanginc.github.io/paraxanthine-suppliers/, using the Supplier Atlas design developed in Stitch.

The supplier dataset was supplied in `paraxanthine-site.zip`; the source record is dated 15 October 2026. The redesign preserves all 10 records and their original claims, source links and verification limits.

Approved historical email quote summaries retain their quoted quantities, currencies, dates in China time, and shipping/tax caveats. They are not guaranteed current offers or confirmed MOQs; Kintai's dollar currency remains unconfirmed and Jianfeng's price is pending. The default directory order puts Cima first, then other positive-response suppliers, then the remaining records; alternate sorts remain available.

GitHub Pages serves the root of the `main` branch. There is no build step or external runtime dependency. `index.html` defines the page, `data.js` contains the supplied dataset, `app.js` handles filtering, sorting, view changes and filtered JSON export, and `tokens.css` / `styles.css` define the visual system. Bump the asset query version in the HTML when publishing asset changes.

The companion Retatrutide directory shares the Supplier Atlas styles and runtime. See `DESIGN.md` for design provenance and the visual system.
