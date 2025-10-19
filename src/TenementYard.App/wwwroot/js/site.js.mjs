/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = ([e, n, t]) => {
  const c = document.createElementNS("http://www.w3.org/2000/svg", e);
  return Object.keys(n).forEach((o) => {
    c.setAttribute(o, String(n[o]));
  }), t != null && t.length && t.forEach((o) => {
    const r = p(o);
    c.appendChild(r);
  }), c;
}, h = (e, n = {}) => {
  const t = "svg", c = {
    ...m,
    ...n
  };
  return p([t, c, e]);
};
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (e) => Array.from(e.attributes).reduce((n, t) => (n[t.name] = t.value, n), {}), g = (e) => typeof e == "string" ? e : !e || !e.class ? "" : e.class && typeof e.class == "string" ? e.class.split(" ") : e.class && Array.isArray(e.class) ? e.class : "", y = (e) => e.flatMap(g).map((t) => t.trim()).filter(Boolean).filter((t, c, o) => o.indexOf(t) === c).join(" "), b = (e) => e.replace(/(\w)(\w*)(_|-|\s*)/g, (n, t, c) => t.toUpperCase() + c.toLowerCase()), d = (e, { nameAttr: n, icons: t, attrs: c }) => {
  var u;
  const o = e.getAttribute(n);
  if (o == null) return;
  const r = b(o), s = t[r];
  if (!s)
    return console.warn(
      `${e.outerHTML} icon name was not found in the provided icons object.`
    );
  const a = w(e), i = {
    ...m,
    "data-lucide": o,
    ...c,
    ...a
  }, l = y(["lucide", `lucide-${o}`, a, c]);
  l && Object.assign(i, {
    class: l
  });
  const f = h(s, i);
  return (u = e.parentNode) == null ? void 0 : u.replaceChild(f, e);
};
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]];
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m17.66 17.66 1.41 1.41" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }]
];
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = ({ icons: e = {}, nameAttr: n = "data-lucide", attrs: t = {} } = {}) => {
  if (!Object.values(e).length)
    throw new Error(
      `Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``
    );
  if (typeof document > "u")
    throw new Error("`createIcons()` only works in a browser environment.");
  const c = document.querySelectorAll(`[${n}]`);
  if (Array.from(c).forEach(
    (o) => d(o, { nameAttr: n, icons: e, attrs: t })
  ), n === "data-lucide") {
    const o = document.querySelectorAll("[icon-name]");
    o.length > 0 && (console.warn(
      "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
    ), Array.from(o).forEach(
      (r) => d(r, { nameAttr: "icon-name", icons: e, attrs: t })
    ));
  }
};
E({
  icons: {
    Sun: v,
    Moon: A
  }
});
