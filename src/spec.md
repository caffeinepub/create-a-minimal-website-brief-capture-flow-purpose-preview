# Specification

## Summary
**Goal:** Add Google Search Console site verification by inserting the provided verification meta tag into the HTML head.

**Planned changes:**
- Update `frontend/index.html` to include the exact `<meta name="google-site-verification" content="J4tH72RdBxc6a0hSEbceJV6xZn8daPsAgqs7i2HbVWI" />` tag within the `<head>` section.
- Ensure the application still builds successfully after the change.

**User-visible outcome:** Viewing page source shows the Google Search Console verification meta tag in the document `<head>`, enabling Google to verify site ownership.
