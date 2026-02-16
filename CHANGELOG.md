# Changelog

All notable changes to the Bridgemena website project.

---

## [Unreleased] - 2026-02-17

### 🚀 Added

#### SEO & Performance
- **WebPage Schema**: Added structured data to all main pages (home, services, contact) for better search engine visibility
- **Extended Sitemap**: Service filter pages now indexed (`/services?filter=profile`, `industry`, `service`)
- **Root Layout Metadata**: Comprehensive SEO metadata with template-based title system
- **Google Verification**: Placeholder added for Google Search Console verification

#### Navigation & UX
- **Footer Links**: Added quick links (Home, Contact) and service category links with filter parameters
- **Service Filters**: URL-based filtering system for services page with query parameters
- **Map Integration**: Added Google Maps links to office locations
- **Service Buttons**: Direct navigation to filtered service views

#### Features
- **Dynamic Filter Routing**: Services page now supports URL-based filtering (`?filter=profile|industry|service`)
- **Filter Persistence**: URL updates when users switch between service categories
- **Breadcrumb Navigation**: Enhanced navigation structure across pages

### 🔧 Changed
- **Contact Pages**: Updated internal linking structure between contact pages
- **Logo Assets**: Updated to PNG format for header and footer logos
- **Metadata Structure**: Improved SEO metadata across all pages with Open Graph and Twitter Card support

### 🐛 Fixed
- **Region Card Bug**: Fixed disappearing region cards error
- **Unused Imports**: Cleaned up Footer component (removed Icon, socialLinks)

### 🗑️ Removed
- **Unused Button**: Removed obsolete button component from services page

---

## Technical Details

### SEO Improvements
- ✅ Organization Schema
- ✅ LocalBusiness Schema
- ✅ FAQ Schema
- ✅ Service Schema
- ✅ Breadcrumb Schema
- ✅ WebPage Schema (NEW)
- ✅ Canonical URLs
- ✅ Open Graph Tags
- ✅ Twitter Cards
- ✅ Enhanced Sitemap

### New URL Structure
```
/services                     → All services
/services?filter=profile      → Services by profile
/services?filter=industry     → Services by industry
/services?filter=service      → Services by type
```

### Performance
- Cleaned up unused code and imports
- Optimized component structure
- Better code organization

---

## Contributors
- Development Team
- Claude Sonnet 4.5 (AI Assistant)

---

## Notes for Team

### Testing Checklist
- [ ] Verify all filter links work correctly
- [ ] Test footer navigation links
- [ ] Confirm map links open correctly
- [ ] Validate structured data using Google Rich Results Test
- [ ] Check sitemap.xml includes filter pages
- [ ] Test SEO metadata on all pages

### Next Steps
- Add Google Search Console verification code
- Create OG images for social sharing (`og-image.jpg`, `og-services.jpg`, `og-contact.jpg`)
- Consider adding more structured data (Reviews, Ratings)
- Monitor SEO performance in Google Search Console

---

**Last Updated**: February 17, 2026
