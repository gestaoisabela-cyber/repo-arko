/* @ds-bundle: {"format":4,"namespace":"ARKO_880dde","components":[{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"StepItem","sourcePath":"components/brand/StepItem.jsx"},{"name":"TestimonialCard","sourcePath":"components/brand/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/SectionHeading.jsx":"a7d73a660e69","components/brand/StatBlock.jsx":"ffd58557b4a7","components/brand/StepItem.jsx":"ca12abc30bc8","components/brand/TestimonialCard.jsx":"c0a532522574","components/core/Badge.jsx":"c0083b1d1020","components/core/Button.jsx":"9e476109c9b6","components/core/Card.jsx":"50473459483d","components/core/Icon.jsx":"dc5aeeaac8bc","components/core/IconButton.jsx":"426085b4d24d","components/core/Logo.jsx":"158f78e38980","components/core/Tag.jsx":"44ddcb0c3537","components/feedback/Dialog.jsx":"ae40813bb27b","components/feedback/Toast.jsx":"17a578c44c84","components/feedback/Tooltip.jsx":"975f2c88b486","components/forms/Checkbox.jsx":"d15af4216bfd","components/forms/Field.jsx":"d96df4f119bf","components/forms/Input.jsx":"dc8fc94c6f0a","components/forms/Radio.jsx":"ee7604947d89","components/forms/Select.jsx":"332f2573324b","components/forms/Switch.jsx":"784de6bec408","components/navigation/Tabs.jsx":"3ea2304e4979"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ARKO_880dde = window.ARKO_880dde || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  overline,
  title,
  lead,
  align = 'left',
  onDark = false,
  as = 'h2',
  className = ''
}) {
  const Title = as;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-sectionhead', align === 'center' ? 'ark-sectionhead--center' : '', onDark ? 'ark-sectionhead--onDark' : '', className].filter(Boolean).join(' ')
  }, overline ? /*#__PURE__*/React.createElement("span", {
    className: "arko-overline"
  }, overline) : null, /*#__PURE__*/React.createElement(Title, {
    className: "ark-sectionhead__title"
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "ark-sectionhead__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'default',
  source,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-stat', tone !== 'default' ? 'ark-stat--' + tone : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "ark-stat__label"
  }, label), source ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-overline)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, source) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'default',
  interactive = false,
  padding,
  className = '',
  style,
  ...rest
}) {
  const cls = ['ark-card', variant !== 'default' ? 'ark-card--' + variant : '', interactive ? 'ark-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color,
  style,
  title,
  ...rest
}) {
  const base = typeof window !== 'undefined' && window.ARKO_ICON_BASE || 'assets/icons';
  const url = 'url("' + base + '/' + name + '.svg")';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ark-icon",
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : 'true',
    style: {
      width: size,
      height: size,
      color,
      WebkitMaskImage: url,
      maskImage: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/StepItem.jsx
try { (() => {
function StepItem({
  number,
  title,
  description,
  state = 'default',
  icon,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-step', state !== 'default' ? 'ark-step--' + state : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-step__num"
  }, state === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : number), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("h3", {
    className: "ark-step__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "ark-step__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  meta,
  initials,
  video = false,
  onPlay,
  inverse = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-testimonial', inverse ? 'ark-testimonial--inverse' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("p", {
    className: "ark-testimonial__quote"
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "ark-testimonial__who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-testimonial__avatar"
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-testimonial__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "ark-testimonial__meta"
  }, meta)), video ? /*#__PURE__*/React.createElement("button", {
    onClick: onPlay,
    "aria-label": 'Assistir depoimento de ' + name,
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--green-500)',
      color: 'var(--navy-900)',
      border: 0,
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--size-caption)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 14
  }), "Assistir") : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  icon,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ark-badge', 'ark-badge--' + tone, className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  href,
  className = '',
  ...rest
}) {
  const cls = ['ark-btn', 'ark-btn--' + variant, 'ark-btn--' + size, block ? 'ark-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'sm' ? 15 : 18
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 15 : 18
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'quiet',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['ark-iconbtn', 'ark-iconbtn--' + variant, 'ark-iconbtn--' + size, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = 'horizontal',
  height = 32,
  alt = 'Arko',
  style,
  ...rest
}) {
  const base = typeof window !== 'undefined' && window.ARKO_ASSET_BASE || 'assets';
  const src = variant === 'mark' ? base + '/logo-mark-blue.png' : base + '/logo-horizontal.png';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ark-logo",
    style: style
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height,
      width: 'auto',
      borderRadius: variant === 'mark' ? 'var(--radius-md)' : 0
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  variant = 'default',
  icon,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['ark-tag', variant !== 'default' ? 'ark-tag--' + variant : '', onClick ? 'ark-tag--clickable' : '', className].filter(Boolean).join(' ');
  const Comp = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls,
    onClick: onClick,
    type: onClick ? 'button' : undefined
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    className: "ark-tag__remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    role: "button",
    "aria-label": "Remover"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ark-dialog__scrim",
    role: "presentation",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ['ark-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      maxWidth: width
    },
    onClick: e => e.stopPropagation()
  }, onClose ? /*#__PURE__*/React.createElement("span", {
    className: "ark-dialog__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    onClick: onClose,
    size: "sm"
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "ark-dialog__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "ark-dialog__body"
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    className: "ark-dialog__actions"
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TOAST_ICON = {
  success: 'circle-check',
  danger: 'triangle-alert',
  info: 'info'
};
function Toast({
  title,
  description,
  tone = 'success',
  onDismiss,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-toast', 'ark-toast--' + tone, className].filter(Boolean).join(' '),
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TOAST_ICON[tone] || 'info',
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-toast__title"
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    className: "ark-toast__desc"
  }, description) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Fechar",
    style: {
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'pointer',
      opacity: .6,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  className = ''
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: ['ark-tooltip', className].filter(Boolean).join(' '),
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "ark-tooltip__bubble",
    "data-open": open ? 'true' : 'false',
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ark-check', 'ark-check--box', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ark-check__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "ark-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  required,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ark-field', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "ark-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-700)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "ark-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ark-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  invalid = false,
  className = '',
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: ['ark-input', icon ? 'ark-input--withIcon' : '', invalid ? 'ark-input--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "ark-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-input-wrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ark-check', 'ark-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ark-check__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "ark-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ark-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['ark-select', className].filter(Boolean).join(' '),
    defaultValue: rest.value ? undefined : ''
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ark-select-wrap__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ['ark-switch', className].filter(Boolean).join(' '),
    "data-on": checked ? 'true' : 'false',
    "data-disabled": disabled ? 'true' : 'false'
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ark-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ark-switch__knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  const active = value != null ? value : items[0] && (items[0].id || items[0]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ark-tabs', variant === 'pill' ? 'ark-tabs--pill' : '', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(item => {
    const id = item.id || item;
    const label = item.label || item;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      type: "button",
      className: "ark-tabs__tab",
      "aria-selected": id === active,
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
