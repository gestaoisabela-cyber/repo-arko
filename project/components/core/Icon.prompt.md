One-line: renders a Lucide glyph from `assets/icons/` as a mask, so it takes `currentColor` from its parent.

```jsx
<Icon name="shield-check" size={24} />
<span style={{ color: 'var(--green-500)' }}><Icon name="check" size={16} /></span>
```

Set `window.ARKO_ICON_BASE = '../../assets/icons'` (relative to the HTML page) before mounting. Never inline hand-drawn SVG paths — add the Lucide file to `assets/icons/` instead. Brand glyphs (Instagram, LinkedIn) are NOT in the set; use text links.
