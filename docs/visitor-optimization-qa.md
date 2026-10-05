# Glenwood visitor optimization — 2026-10-05

Source: 1ad1d89. Nine existing pages receive concise, intent-led titles and descriptions; absolute title metadata prevents duplicated guide branding. URLs, canonicals, structured data, booking links, partner placement and tracking are preserved.

Native rounded buttons provide quick planning choices and contextual next stops on the homepage, Explore, kids, pond, Caddo and weekend pages. Restaurant jump links use existing listing names/data. The existing planner exposes selected states to assistive technology and gives deterministic weekend, short-stop and family links. No dependencies or backend added.

Verification:
- `npm run build`: passes. Existing Next middleware naming deprecation remains; middleware was not changed.
- `tsc --noEmit`: passes. No lint script is configured.
- Production browser QA: 12 routes × 1440, 1280, 768, 360 and 390px = 60 checks. All HTTP 200, no horizontal overflow, missing jump targets or uncaught runtime errors.
- 32 discovered internal destinations return successfully. Planner weekend/solo/short-visit interactions checked, including avoiding outdoor fishing suggestions for rainy-day selections. Desktop/mobile hero, chooser, next paths, listing layout, footer, mobile menu and River View Spotlight inspected.
- External River View/CDN images are blocked/unavailable in this execution environment. Local Vercel analytics requests can also return 404. These existing resources/placements are not changed; production asset rendering needs preview verification.
- Ignored preview-only environment variables and empty event fixtures were used. No live submissions, email or database writes. Populated events and delivery require environment-backed preview QA.

Release this pilot before the other site changes. Compare subsequent matched 28-day Search Console page/query CTR alongside position and device. No traffic uplift is claimed before post-release data exists.
