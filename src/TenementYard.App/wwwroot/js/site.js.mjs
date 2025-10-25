/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = {
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
const m = ([e, n, t]) => {
  const a = document.createElementNS("http://www.w3.org/2000/svg", e);
  return Object.keys(n).forEach((o) => {
    a.setAttribute(o, String(n[o]));
  }), t != null && t.length && t.forEach((o) => {
    const c = m(o);
    a.appendChild(c);
  }), a;
}, f = (e, n = {}) => {
  const t = "svg", a = {
    ...p,
    ...n
  };
  return m([t, a, e]);
};
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (e) => Array.from(e.attributes).reduce((n, t) => (n[t.name] = t.value, n), {}), g = (e) => typeof e == "string" ? e : !e || !e.class ? "" : e.class && typeof e.class == "string" ? e.class.split(" ") : e.class && Array.isArray(e.class) ? e.class : "", y = (e) => e.flatMap(g).map((t) => t.trim()).filter(Boolean).filter((t, a, o) => o.indexOf(t) === a).join(" "), v = (e) => e.replace(/(\w)(\w*)(_|-|\s*)/g, (n, t, a) => t.toUpperCase() + a.toLowerCase()), u = (e, { nameAttr: n, icons: t, attrs: a }) => {
  var d;
  const o = e.getAttribute(n);
  if (o == null) return;
  const c = v(o), r = t[c];
  if (!r)
    return console.warn(
      `${e.outerHTML} icon name was not found in the provided icons object.`
    );
  const s = w(e), l = {
    ...p,
    "data-lucide": o,
    ...a,
    ...s
  }, i = y(["lucide", `lucide-${o}`, s, a]);
  i && Object.assign(l, {
    class: i
  });
  const h = f(r, l);
  return (d = e.parentNode) == null ? void 0 : d.replaceChild(h, e);
};
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = [
  ["path", { d: "m11 17-5-5 5-5" }],
  ["path", { d: "m18 17-5-5 5-5" }]
];
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
const E = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];
/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = [
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
const N = ({ icons: e = {}, nameAttr: n = "data-lucide", attrs: t = {} } = {}) => {
  if (!Object.values(e).length)
    throw new Error(
      `Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``
    );
  if (typeof document > "u")
    throw new Error("`createIcons()` only works in a browser environment.");
  const a = document.querySelectorAll(`[${n}]`);
  if (Array.from(a).forEach(
    (o) => u(o, { nameAttr: n, icons: e, attrs: t })
  ), n === "data-lucide") {
    const o = document.querySelectorAll("[icon-name]");
    o.length > 0 && (console.warn(
      "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
    ), Array.from(o).forEach(
      (c) => u(c, { nameAttr: "icon-name", icons: e, attrs: t })
    ));
  }
};
N({
  icons: {
    Sun: C,
    Moon: A,
    Settings: E,
    ChevronsLeft: b
  }
});
