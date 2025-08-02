# Angular 20 Internationalization Implementation

This project has been restructured to follow Angular 20's recommended internationalization (i18n) approach, separating structural constants from internationalized text.

## 📁 File Structure

### Constants & Configuration

```
src/app/constants/
├── app-constants.ts          # Structural constants, interfaces, types
└── text-constants.ts         # Legacy text constants (deprecated)

src/app/i18n/
└── en.json                   # English translations (JSON format)

src/app/services/
├── i18n.service.ts           # New i18n service (Angular 20 approach)
└── text.service.ts           # Legacy text service (deprecated)

src/app/pipes/
└── translate.pipe.ts         # Translation pipe for template usage
```

## 🏗️ Architecture

### 1. **Structural Constants** (`app-constants.ts`)

- **Interfaces & Types**: `NavItem`, `Asset`, `IInfoCard`, `InfoListItem`
- **Configuration**: `RISK_LEVELS`, `PAGINATION_CONFIG`, `APP_CONFIG`
- **Navigation Structure**: `NAV_MENU_ITEMS`, `NAV_SETTINGS_ITEMS` (with i18n keys)
- **Mock Data**: `MOCK_ASSETS`, `MOCK_INFO_LIST_STRUCTURE`, `MOCK_CARDS_STRUCTURE`

### 2. **Internationalization Service** (`i18n.service.ts`)

- **Angular 20 Signals**: Reactive state management with `signal()` and `computed()`
- **HTTP-based**: Loads translations from JSON files
- **Type-safe**: Full TypeScript interface definitions
- **Fallback Support**: Embedded English translations as fallback
- **Language Switching**: Observable-based language switching

### 3. **Translation Structure** (`i18n/en.json`)

```json
{
  "nav": { ... },
  "dashboard": { ... },
  "description": { ... },
  "extra": { ... },
  "risk_summary": { ... },
  "contextual_risk": { ... },
  "asset_flow": { ... },
  "common": { ... },
  "errors": { ... }
}
```

## 🔧 Implementation Details

### Component Updates

All components have been updated to use the new `I18nService`:

```typescript
// Before (Legacy)
constructor(public textService: TextService) {}
get title() { return this.textService.getNavTexts().DASHBOARD; }

// After (Angular 20)
constructor(public i18nService: I18nService) {}
get title() { return this.i18nService.nav.dashboard; }
```

### Template Usage

```html
<!-- Direct service access -->
<h2>{{ i18nService.description.title }}</h2>

<!-- Translation pipe (alternative) -->
<h2>{{ 'description.title' | translate }}</h2>
```

### Language Switching

```typescript
// Switch language
this.i18nService.switchLanguage("es").subscribe();

// Get current language
const currentLang = this.i18nService.currentLanguage();

// React to language changes
this.i18nService.texts$.subscribe((translations) => {
  // Handle translation updates
});
```

## 🚀 Key Features

### ✅ **Angular 20 Compliance**

- Uses signals for reactive state management
- HTTP-based translation loading
- Standalone components support
- Modern dependency injection patterns

### ✅ **Type Safety**

- Full TypeScript interfaces for all translations
- Compile-time checks for translation keys
- Strongly typed language switching

### ✅ **Separation of Concerns**

- Structural constants separate from translations
- Configuration separate from text content
- Mock data structure separate from actual text

### ✅ **Scalability**

- Easy to add new languages (just add JSON files)
- Modular translation structure
- Lazy loading support for translations

### ✅ **Developer Experience**

- Auto-completion for translation keys
- Clear error messages for missing translations
- Fallback support prevents runtime errors

## 📱 Usage Examples

### Adding a New Language

1. Create `/src/app/i18n/es.json` with Spanish translations
2. Add 'es' to `APP_CONFIG.SUPPORTED_LANGUAGES`
3. Use `i18nService.switchLanguage('es')` to switch

### Adding New Text

1. Add to the appropriate section in `en.json`
2. Update the `I18nTexts` interface in `i18n.service.ts`
3. Use in components: `i18nService.sectionName.textKey`

### Using Translation Pipe

```html
<!-- Simple translation -->
<p>{{ 'common.loading' | translate }}</p>

<!-- With parameters (if implemented) -->
<p>{{ 'user.welcome' | translate:'John':'Doe' }}</p>
```

## 🔄 Migration from Legacy System

The old `TextService` and `text-constants.ts` are deprecated but still present for reference. All components have been migrated to the new system.

### Component Migration Pattern

1. Replace `TextService` with `I18nService`
2. Update property access from `textService.getSectionTexts().KEY` to `i18nService.section.key`
3. Update templates to use the new property names

## 🌐 Future Enhancements

1. **Angular i18n Integration**: Can be integrated with Angular's built-in i18n package
2. **Lazy Loading**: Load translations on-demand for better performance
3. **Pluralization**: Add support for plural forms
4. **RTL Support**: Add right-to-left language support
5. **Translation Management**: Integration with translation management platforms

## 📋 File Updates Summary

### New Files

- `src/app/constants/app-constants.ts` - Structural constants
- `src/app/services/i18n.service.ts` - Modern i18n service
- `src/app/i18n/en.json` - JSON translations
- `src/app/pipes/translate.pipe.ts` - Translation pipe
- `src/app/components/layout/language-switcher/language-switcher.ts` - Language switcher component

### Updated Files

- All component `.ts` files - Updated to use `I18nService`
- All component `.html` files - Updated template syntax
- `src/app/services/dashboard-state.ts` - Uses shared `Asset` interface

### Deprecated Files

- `src/app/constants/text-constants.ts` - Use `i18n/en.json` instead
- `src/app/services/text.service.ts` - Use `i18n.service.ts` instead
- `src/app/pipes/text.pipe.ts` - Use `translate.pipe.ts` instead

This implementation provides a solid foundation for internationalization while maintaining all existing functionality and preparing for future scalability.
