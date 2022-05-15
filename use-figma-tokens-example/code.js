var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/@six7/figma-tokens-helpers/index.js
var require_figma_tokens_helpers = __commonJS({
  "node_modules/@six7/figma-tokens-helpers/index.js"(exports, module2) {
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var require_useFigmaTokens = __commonJS2({
      "dist/useFigmaTokens.js"(exports2, module22) {
        module22.exports = function(t) {
          var e = {};
          function r(n) {
            if (e[n])
              return e[n].exports;
            var o = e[n] = { i: n, l: false, exports: {} };
            return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
          }
          return r.m = t, r.c = e, r.d = function(t2, e2, n) {
            r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
          }, r.r = function(t2) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, r.t = function(t2, e2) {
            if (1 & e2 && (t2 = r(t2)), 8 & e2)
              return t2;
            if (4 & e2 && typeof t2 == "object" && t2 && t2.__esModule)
              return t2;
            var n = /* @__PURE__ */ Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && typeof t2 != "string")
              for (var o in t2)
                r.d(n, o, function(e3) {
                  return t2[e3];
                }.bind(null, o));
            return n;
          }, r.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return r.d(e2, "a", e2), e2;
          }, r.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, r.p = "", r(r.s = 3);
        }([function(t, e, r) {
          "use strict";
          const n = r(1);
          function o(t2, e2, r2, n2) {
            if (!a(t2))
              return t2;
            let u = n2 || {};
            const p = Array.isArray(e2);
            if (!p && typeof e2 != "string")
              return t2;
            let c = u.merge;
            c && typeof c != "function" && (c = Object.assign);
            const h = (p ? e2 : function(t3, e3) {
              const r3 = function(t4, e4) {
                let r4 = t4;
                if (e4 === void 0)
                  return r4 + "";
                const n4 = Object.keys(e4);
                for (let t5 = 0; t5 < n4.length; t5++) {
                  const o2 = n4[t5];
                  r4 += ";" + o2 + "=" + String(e4[o2]);
                }
                return r4;
              }(t3, e3);
              if (o.memo[r3])
                return o.memo[r3];
              const n3 = e3 && e3.separator ? e3.separator : ".";
              let i2 = [], s2 = [];
              i2 = e3 && typeof e3.split == "function" ? e3.split(t3) : t3.split(n3);
              for (let t4 = 0; t4 < i2.length; t4++) {
                let e4 = i2[t4];
                for (; e4 && e4.slice(-1) === "\\" && i2[t4 + 1] != null; )
                  e4 = e4.slice(0, -1) + n3 + i2[++t4];
                s2.push(e4);
              }
              return o.memo[r3] = s2, s2;
            }(e2, u)).filter(s), l = h.length, f = t2;
            if (!n2 && h.length === 1)
              return i(t2, h[0], r2, c), t2;
            for (let e3 = 0; e3 < l; e3++) {
              let n3 = h[e3];
              if (a(t2[n3]) || (t2[n3] = {}), e3 === l - 1) {
                i(t2, n3, r2, c);
                break;
              }
              t2 = t2[n3];
            }
            return f;
          }
          function i(t2, e2, r2, o2) {
            o2 && n(t2[e2]) && n(r2) ? t2[e2] = o2({}, t2[e2], r2) : t2[e2] = r2;
          }
          function s(t2) {
            return t2 !== "__proto__" && t2 !== "constructor" && t2 !== "prototype";
          }
          function a(t2) {
            return t2 !== null && (typeof t2 == "object" || typeof t2 == "function");
          }
          o.memo = {}, t.exports = o;
        }, function(t, e, r) {
          "use strict";
          var n = r(2);
          function o(t2) {
            return n(t2) === true && Object.prototype.toString.call(t2) === "[object Object]";
          }
          t.exports = function(t2) {
            var e2, r2;
            return o(t2) !== false && (typeof (e2 = t2.constructor) == "function" && (o(r2 = e2.prototype) !== false && r2.hasOwnProperty("isPrototypeOf") !== false));
          };
        }, function(t, e, r) {
          "use strict";
          t.exports = function(t2) {
            return t2 != null && typeof t2 == "object" && Array.isArray(t2) === false;
          };
        }, function(t, e, r) {
          "use strict";
          var n;
          r.r(e), r.d(e, "getTokensStoredOnDocument", function() {
            return me;
          }), r.d(e, "getUsedTokenSetsOnDocument", function() {
            return Oe;
          }), r.d(e, "mergeTokens", function() {
            return we;
          }), r.d(e, "getResolvedTokens", function() {
            return Ee;
          }), r.d(e, "getTokensOnNode", function() {
            return xe;
          }), r.d(e, "getTokensByKey", function() {
            return Ae;
          }), function(t2) {
            t2.sizing = "sizing", t2.height = "height", t2.width = "width", t2.spacing = "spacing", t2.verticalPadding = "verticalPadding", t2.horizontalPadding = "horizontalPadding", t2.paddingTop = "paddingTop", t2.paddingRight = "paddingRight", t2.paddingBottom = "paddingBottom", t2.paddingLeft = "paddingLeft", t2.itemSpacing = "itemSpacing", t2.fill = "fill", t2.border = "border", t2.borderRadius = "borderRadius", t2.borderRadiusTopLeft = "borderRadiusTopLeft", t2.borderRadiusTopRight = "borderRadiusTopRight", t2.borderRadiusBottomRight = "borderRadiusBottomRight", t2.borderRadiusBottomLeft = "borderRadiusBottomLeft", t2.borderWidth = "borderWidth", t2.boxShadow = "boxShadow", t2.opacity = "opacity", t2.fontFamilies = "fontFamilies", t2.fontWeights = "fontWeights", t2.fontSizes = "fontSizes", t2.lineHeights = "lineHeights", t2.typography = "typography", t2.letterSpacing = "letterSpacing", t2.paragraphSpacing = "paragraphSpacing", t2.textCase = "textCase", t2.textDecoration = "textDecoration", t2.tokenValue = "tokenValue", t2.value = "value", t2.tokenName = "tokenName", t2.description = "description";
          }(n || (n = {}));
          var o = function(t2, e2) {
            var r2 = {};
            typeof e2 == "string" && (e2 = [].slice.call(arguments, 1));
            for (var n2 in t2)
              t2.hasOwnProperty && !t2.hasOwnProperty(n2) || e2.indexOf(n2) === -1 && (r2[n2] = t2[n2]);
            return r2;
          };
          r(0);
          var i;
          function s(t2, e2) {
            var r2 = Object.keys(t2);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t2);
              e2 && (n2 = n2.filter(function(e3) {
                return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
              })), r2.push.apply(r2, n2);
            }
            return r2;
          }
          function a(t2) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var r2 = arguments[e2] != null ? arguments[e2] : {};
              e2 % 2 ? s(Object(r2), true).forEach(function(e3) {
                u(t2, e3, r2[e3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : s(Object(r2)).forEach(function(e3) {
                Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(r2, e3));
              });
            }
            return t2;
          }
          function u(t2, e2, r2) {
            return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
          }
          function p(t2) {
            switch (t2) {
              case "color":
              case "colors":
                return i.COLOR;
              case "space":
              case "spacing":
                return i.SPACING;
              case "size":
              case "sizing":
                return i.SIZING;
              case "boxShadow":
                return i.BOX_SHADOW;
              case "border":
                return i.BORDER;
              case "borderRadius":
                return i.BORDER_RADIUS;
              case "borderWidth":
                return i.BORDER_WIDTH;
              case "opacity":
                return i.OPACITY;
              case "fontFamilies":
                return i.FONT_FAMILIES;
              case "fontWeights":
                return i.FONT_WEIGHTS;
              case "fontSizes":
                return i.FONT_SIZES;
              case "lineHeights":
                return i.LINE_HEIGHTS;
              case "typography":
                return i.TYPOGRAPHY;
              case "letterSpacing":
                return i.LETTER_SPACING;
              case "paragraphSpacing":
                return i.PARAGRAPH_SPACING;
              default:
                return i.OTHER;
            }
          }
          function c(t2) {
            var e2 = !!t2.type && t2.type !== i.UNDEFINED ? t2.type : p(t2.name.split(".").slice(0, 1).toString());
            return a(a({}, t2), {}, { type: e2 });
          }
          function h(t2, e2, r2) {
            return Math.min(Math.max(t2, r2), e2);
          }
          !function(t2) {
            t2.OTHER = "other", t2.COLOR = "color", t2.IMPLICIT = "implicit", t2.BORDER_RADIUS = "borderRadius", t2.SIZING = "sizing", t2.SPACING = "spacing", t2.TEXT = "text", t2.TYPOGRAPHY = "typography", t2.OPACITY = "opacity", t2.BORDER_WIDTH = "borderWidth", t2.BOX_SHADOW = "boxShadow", t2.FONT_FAMILIES = "fontFamilies", t2.FONT_WEIGHTS = "fontWeights", t2.LINE_HEIGHTS = "lineHeights", t2.FONT_SIZES = "fontSizes", t2.LETTER_SPACING = "letterSpacing", t2.PARAGRAPH_SPACING = "paragraphSpacing", t2.TEXT_DECORATION = "textDecoration", t2.TEXT_CASE = "textCase", t2.BORDER = "border", t2.UNDEFINED = "undefined";
          }(i || (i = {}));
          class l extends Error {
            constructor(t2) {
              super(`Failed to parse color: "${t2}"`);
            }
          }
          function f(t2) {
            if (typeof t2 != "string")
              throw new l(t2);
            if (t2.trim().toLowerCase() === "transparent")
              return [0, 0, 0, 0];
            let e2 = t2.trim();
            e2 = w.test(t2) ? function(t3) {
              const e3 = t3.toLowerCase().trim(), r3 = v[function(t4) {
                let e4 = 5381, r4 = t4.length;
                for (; r4; )
                  e4 = 33 * e4 ^ t4.charCodeAt(--r4);
                return (e4 >>> 0) % 2341;
              }(e3)];
              if (!r3)
                throw new l(t3);
              return "#" + r3;
            }(t2) : t2;
            const r2 = d.exec(e2);
            if (r2) {
              const t3 = Array.from(r2).slice(1);
              return [...t3.slice(0, 3).map((t4) => parseInt(g(t4, 2), 16)), parseInt(g(t3[3] || "f", 2), 16) / 255];
            }
            const n2 = b.exec(e2);
            if (n2) {
              const t3 = Array.from(n2).slice(1);
              return [...t3.slice(0, 3).map((t4) => parseInt(t4, 16)), parseInt(t3[3] || "ff", 16) / 255];
            }
            const o2 = m.exec(e2);
            if (o2) {
              const t3 = Array.from(o2).slice(1);
              return [...t3.slice(0, 3).map((t4) => parseInt(t4, 10)), parseFloat(t3[3] || "1")];
            }
            const i2 = O.exec(e2);
            if (i2) {
              const [e3, r3, n3, o3] = Array.from(i2).slice(1).map(parseFloat);
              if (h(0, 100, r3) !== r3)
                throw new l(t2);
              if (h(0, 100, n3) !== n3)
                throw new l(t2);
              return [...A(e3, r3, n3), o3 || 1];
            }
            throw new l(t2);
          }
          const y = (t2) => parseInt(t2.replace(/_/g, ""), 36), v = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((t2, e2) => {
            const r2 = y(e2.substring(0, 3)), n2 = y(e2.substring(3)).toString(16);
            let o2 = "";
            for (let t3 = 0; t3 < 6 - n2.length; t3++)
              o2 += "0";
            return t2[r2] = `${o2}${n2}`, t2;
          }, {}), g = (t2, e2) => Array.from(Array(e2)).map(() => t2).join(""), d = new RegExp(`^#${g("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), b = new RegExp(`^#${g("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), m = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${g(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), O = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, w = /^[a-z]+$/i, E = (t2) => Math.round(255 * t2), A = (t2, e2, r2) => {
            let n2 = r2 / 100;
            if (e2 === 0)
              return [n2, n2, n2].map(E);
            const o2 = (t2 % 360 + 360) % 360 / 60, i2 = (1 - Math.abs(2 * n2 - 1)) * (e2 / 100), s2 = i2 * (1 - Math.abs(o2 % 2 - 1));
            let a2 = 0, u2 = 0, p2 = 0;
            o2 >= 0 && o2 < 1 ? (a2 = i2, u2 = s2) : o2 >= 1 && o2 < 2 ? (a2 = s2, u2 = i2) : o2 >= 2 && o2 < 3 ? (u2 = i2, p2 = s2) : o2 >= 3 && o2 < 4 ? (u2 = s2, p2 = i2) : o2 >= 4 && o2 < 5 ? (a2 = s2, p2 = i2) : o2 >= 5 && o2 < 6 && (a2 = i2, p2 = s2);
            const c2 = n2 - i2 / 2;
            return [a2 + c2, u2 + c2, p2 + c2].map(E);
          };
          function x(t2) {
            const [e2, r2, n2, o2] = f(t2);
            let i2 = (t3) => {
              const e3 = h(0, 255, t3).toString(16);
              return e3.length === 1 ? "0" + e3 : e3;
            };
            return `#${i2(e2)}${i2(r2)}${i2(n2)}${o2 < 1 ? i2(Math.round(255 * o2)) : ""}`;
          }
          function _(t2, e2) {
            return function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(t2) || function(t3, e3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(t3)))
                return;
              var r2 = [], n2 = true, o2 = false, i2 = void 0;
              try {
                for (var s2, a2 = t3[Symbol.iterator](); !(n2 = (s2 = a2.next()).done) && (r2.push(s2.value), !e3 || r2.length !== e3); n2 = true)
                  ;
              } catch (t4) {
                o2 = true, i2 = t4;
              } finally {
                try {
                  n2 || a2.return == null || a2.return();
                } finally {
                  if (o2)
                    throw i2;
                }
              }
              return r2;
            }(t2, e2) || function(t3, e3) {
              if (!t3)
                return;
              if (typeof t3 == "string")
                return S(t3, e3);
              var r2 = Object.prototype.toString.call(t3).slice(8, -1);
              r2 === "Object" && t3.constructor && (r2 = t3.constructor.name);
              if (r2 === "Map" || r2 === "Set")
                return Array.from(t3);
              if (r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
                return S(t3, e3);
            }(t2, e2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function S(t2, e2) {
            (e2 == null || e2 > t2.length) && (e2 = t2.length);
            for (var r2 = 0, n2 = new Array(e2); r2 < e2; r2++)
              n2[r2] = t2[r2];
            return n2;
          }
          function M(t2) {
            try {
              if (typeof t2 != "string")
                return t2;
              var e2 = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, r2 = t2;
              try {
                var n2 = Array.from(r2.matchAll(/(rgba?\(.*?\))/g), function(t3) {
                  return t3[0];
                }), o2 = Array.from(r2.matchAll(/(hsla?\(.*?\))/g), function(t3) {
                  return t3[0];
                });
                o2.length > 0 && o2.forEach(function(t3) {
                  r2 = r2.replace(t3, x(t3));
                }), n2.length > 0 && n2.forEach(function(t3) {
                  var n3, o3, i2, s2 = t3, a2 = t3.replace(/rgba?\(/g, "").replace(")", ""), u2 = a2.match(e2), p2 = "1";
                  if (u2) {
                    var c2, h2, l2 = _(f(u2[0]), 3);
                    n3 = l2[0], o3 = l2[1], i2 = l2[2], p2 = (c2 = (h2 = a2.split(",").pop()) === null || h2 === void 0 ? void 0 : h2.trim()) !== null && c2 !== void 0 ? c2 : "0";
                  } else {
                    var y2 = _(a2.split(",").map(function(t4) {
                      return t4.trim();
                    }), 4);
                    n3 = y2[0], o3 = y2[1], i2 = y2[2];
                    var v2 = y2[3];
                    p2 = v2 === void 0 ? "1" : v2;
                  }
                  var g2, d2, b2 = (d2 = (g2 = p2).match(/(\d+%)/)) ? Number(d2[0].slice(0, -1)) / 100 : Number(g2);
                  r2 = r2.split(s2).join(x("rgba(".concat(n3, ", ").concat(o3, ", ").concat(i2, ", ").concat(b2, ")")));
                });
              } catch (e3) {
                console.log("error", e3, t2);
              }
              return r2;
            } catch (t3) {
              console.error(t3);
            }
            return null;
          }
          var T = /(\$[^\s,]+\w)|({([^]*))/g, k = /(\$[^\s,]+\w)|({([^}]*)})/g, I = function(t2) {
            return t2 == null ? void 0 : t2.toString().match(k);
          };
          function j(t2) {
            return (j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          function P(t2) {
            return !(!t2 || j(t2) !== "object" || !("value" in t2) || t2.value === void 0);
          }
          function R(t2) {
            return (R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          function N(t2) {
            return !!(t2 && R(t2) === "object" && "value" in t2 && "name" in t2);
          }
          var C = "INUMBER", z = "IVAR", F = "IEXPR";
          function D(t2, e2) {
            this.type = t2, this.value = e2 != null ? e2 : 0;
          }
          function L(t2) {
            return new D("IOP1", t2);
          }
          function B(t2) {
            return new D("IOP2", t2);
          }
          function U(t2) {
            return new D("IOP3", t2);
          }
          function q(t2, e2, r2) {
            var n2, o2, i2, s2, a2, u2, p2 = [];
            if (V(t2))
              return $(t2, r2);
            for (var c2 = t2.length, h2 = 0; h2 < c2; h2++) {
              var l2 = t2[h2], f2 = l2.type;
              if (f2 === C || f2 === "IVARNAME")
                p2.push(l2.value);
              else if (f2 === "IOP2")
                o2 = p2.pop(), n2 = p2.pop(), l2.value === "and" ? p2.push(!!n2 && !!q(o2, e2, r2)) : l2.value === "or" ? p2.push(!!n2 || !!q(o2, e2, r2)) : l2.value === "=" ? (s2 = e2.binaryOps[l2.value], p2.push(s2(n2, q(o2, e2, r2), r2))) : (s2 = e2.binaryOps[l2.value], p2.push(s2($(n2, r2), $(o2, r2))));
              else if (f2 === "IOP3")
                i2 = p2.pop(), o2 = p2.pop(), n2 = p2.pop(), l2.value === "?" ? p2.push(q(n2 ? o2 : i2, e2, r2)) : (s2 = e2.ternaryOps[l2.value], p2.push(s2($(n2, r2), $(o2, r2), $(i2, r2))));
              else if (f2 === z)
                if (l2.value in e2.functions)
                  p2.push(e2.functions[l2.value]);
                else if (l2.value in e2.unaryOps && e2.parser.isOperatorEnabled(l2.value))
                  p2.push(e2.unaryOps[l2.value]);
                else {
                  var y2 = r2[l2.value];
                  if (y2 === void 0)
                    throw new Error("undefined variable: " + l2.value);
                  p2.push(y2);
                }
              else if (f2 === "IOP1")
                n2 = p2.pop(), s2 = e2.unaryOps[l2.value], p2.push(s2($(n2, r2)));
              else if (f2 === "IFUNCALL") {
                for (u2 = l2.value, a2 = []; u2-- > 0; )
                  a2.unshift($(p2.pop(), r2));
                if (!(s2 = p2.pop()).apply || !s2.call)
                  throw new Error(s2 + " is not a function");
                p2.push(s2.apply(void 0, a2));
              } else if (f2 === "IFUNDEF")
                p2.push(function() {
                  for (var t3 = p2.pop(), n3 = [], o3 = l2.value; o3-- > 0; )
                    n3.unshift(p2.pop());
                  var i3 = p2.pop(), s3 = function() {
                    for (var o4 = Object.assign({}, r2), i4 = 0, s4 = n3.length; i4 < s4; i4++)
                      o4[n3[i4]] = arguments[i4];
                    return q(t3, e2, o4);
                  };
                  return Object.defineProperty(s3, "name", { value: i3, writable: false }), r2[i3] = s3, s3;
                }());
              else if (f2 === F)
                p2.push(H(l2, e2));
              else if (f2 === "IEXPREVAL")
                p2.push(l2);
              else if (f2 === "IMEMBER")
                n2 = p2.pop(), p2.push(n2[l2.value]);
              else if (f2 === "IENDSTATEMENT")
                p2.pop();
              else {
                if (f2 !== "IARRAY")
                  throw new Error("invalid Expression");
                for (u2 = l2.value, a2 = []; u2-- > 0; )
                  a2.unshift(p2.pop());
                p2.push(a2);
              }
            }
            if (p2.length > 1)
              throw new Error("invalid Expression (parity)");
            return p2[0] === 0 ? 0 : $(p2[0], r2);
          }
          function H(t2, e2, r2) {
            return V(t2) ? t2 : { type: "IEXPREVAL", value: function(r3) {
              return q(t2.value, e2, r3);
            } };
          }
          function V(t2) {
            return t2 && t2.type === "IEXPREVAL";
          }
          function $(t2, e2) {
            return V(t2) ? t2.value(e2) : t2;
          }
          function G(t2, e2) {
            for (var r2, n2, o2, i2, s2, a2, u2 = [], p2 = 0; p2 < t2.length; p2++) {
              var c2 = t2[p2], h2 = c2.type;
              if (h2 === C)
                typeof c2.value == "number" && c2.value < 0 ? u2.push("(" + c2.value + ")") : Array.isArray(c2.value) ? u2.push("[" + c2.value.map(W).join(", ") + "]") : u2.push(W(c2.value));
              else if (h2 === "IOP2")
                n2 = u2.pop(), r2 = u2.pop(), i2 = c2.value, e2 ? i2 === "^" ? u2.push("Math.pow(" + r2 + ", " + n2 + ")") : i2 === "and" ? u2.push("(!!" + r2 + " && !!" + n2 + ")") : i2 === "or" ? u2.push("(!!" + r2 + " || !!" + n2 + ")") : i2 === "||" ? u2.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" + r2 + "),(" + n2 + ")))") : i2 === "==" ? u2.push("(" + r2 + " === " + n2 + ")") : i2 === "!=" ? u2.push("(" + r2 + " !== " + n2 + ")") : i2 === "[" ? u2.push(r2 + "[(" + n2 + ") | 0]") : u2.push("(" + r2 + " " + i2 + " " + n2 + ")") : i2 === "[" ? u2.push(r2 + "[" + n2 + "]") : u2.push("(" + r2 + " " + i2 + " " + n2 + ")");
              else if (h2 === "IOP3") {
                if (o2 = u2.pop(), n2 = u2.pop(), r2 = u2.pop(), (i2 = c2.value) !== "?")
                  throw new Error("invalid Expression");
                u2.push("(" + r2 + " ? " + n2 + " : " + o2 + ")");
              } else if (h2 === z || h2 === "IVARNAME")
                u2.push(c2.value);
              else if (h2 === "IOP1")
                r2 = u2.pop(), (i2 = c2.value) === "-" || i2 === "+" ? u2.push("(" + i2 + r2 + ")") : e2 ? i2 === "not" ? u2.push("(!" + r2 + ")") : i2 === "!" ? u2.push("fac(" + r2 + ")") : u2.push(i2 + "(" + r2 + ")") : i2 === "!" ? u2.push("(" + r2 + "!)") : u2.push("(" + i2 + " " + r2 + ")");
              else if (h2 === "IFUNCALL") {
                for (a2 = c2.value, s2 = []; a2-- > 0; )
                  s2.unshift(u2.pop());
                i2 = u2.pop(), u2.push(i2 + "(" + s2.join(", ") + ")");
              } else if (h2 === "IFUNDEF") {
                for (n2 = u2.pop(), a2 = c2.value, s2 = []; a2-- > 0; )
                  s2.unshift(u2.pop());
                r2 = u2.pop(), e2 ? u2.push("(" + r2 + " = function(" + s2.join(", ") + ") { return " + n2 + " })") : u2.push("(" + r2 + "(" + s2.join(", ") + ") = " + n2 + ")");
              } else if (h2 === "IMEMBER")
                r2 = u2.pop(), u2.push(r2 + "." + c2.value);
              else if (h2 === "IARRAY") {
                for (a2 = c2.value, s2 = []; a2-- > 0; )
                  s2.unshift(u2.pop());
                u2.push("[" + s2.join(", ") + "]");
              } else if (h2 === F)
                u2.push("(" + G(c2.value, e2) + ")");
              else if (h2 !== "IENDSTATEMENT")
                throw new Error("invalid Expression");
            }
            return u2.length > 1 && (u2 = e2 ? [u2.join(",")] : [u2.join(";")]), String(u2[0]);
          }
          function W(t2) {
            return typeof t2 == "string" ? JSON.stringify(t2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") : t2;
          }
          function Y(t2, e2) {
            for (var r2 = 0; r2 < t2.length; r2++)
              if (t2[r2] === e2)
                return true;
            return false;
          }
          function X(t2, e2, r2) {
            for (var n2 = !!(r2 = r2 || {}).withMembers, o2 = null, i2 = 0; i2 < t2.length; i2++) {
              var s2 = t2[i2];
              s2.type === z || s2.type === "IVARNAME" ? n2 || Y(e2, s2.value) ? o2 !== null ? (Y(e2, o2) || e2.push(o2), o2 = s2.value) : o2 = s2.value : e2.push(s2.value) : s2.type === "IMEMBER" && n2 && o2 !== null ? o2 += "." + s2.value : s2.type === F ? X(s2.value, e2, r2) : o2 !== null && (Y(e2, o2) || e2.push(o2), o2 = null);
            }
            o2 === null || Y(e2, o2) || e2.push(o2);
          }
          function K(t2, e2) {
            this.tokens = t2, this.parser = e2, this.unaryOps = e2.unaryOps, this.binaryOps = e2.binaryOps, this.ternaryOps = e2.ternaryOps, this.functions = e2.functions;
          }
          D.prototype.toString = function() {
            switch (this.type) {
              case C:
              case "IOP1":
              case "IOP2":
              case "IOP3":
              case z:
              case "IVARNAME":
              case "IENDSTATEMENT":
                return this.value;
              case "IFUNCALL":
                return "CALL " + this.value;
              case "IFUNDEF":
                return "DEF " + this.value;
              case "IARRAY":
                return "ARRAY " + this.value;
              case "IMEMBER":
                return "." + this.value;
              default:
                return "Invalid Instruction";
            }
          }, K.prototype.simplify = function(t2) {
            return t2 = t2 || {}, new K(function t3(e2, r2, n2, o2, i2) {
              for (var s2, a2, u2, p2, c2 = [], h2 = [], l2 = 0; l2 < e2.length; l2++) {
                var f2 = e2[l2], y2 = f2.type;
                if (y2 === C || y2 === "IVARNAME")
                  Array.isArray(f2.value) ? c2.push.apply(c2, t3(f2.value.map(function(t4) {
                    return new D(C, t4);
                  }).concat(new D("IARRAY", f2.value.length)), r2, n2, o2, i2)) : c2.push(f2);
                else if (y2 === z && i2.hasOwnProperty(f2.value))
                  f2 = new D(C, i2[f2.value]), c2.push(f2);
                else if (y2 === "IOP2" && c2.length > 1)
                  a2 = c2.pop(), s2 = c2.pop(), p2 = n2[f2.value], f2 = new D(C, p2(s2.value, a2.value)), c2.push(f2);
                else if (y2 === "IOP3" && c2.length > 2)
                  u2 = c2.pop(), a2 = c2.pop(), s2 = c2.pop(), f2.value === "?" ? c2.push(s2.value ? a2.value : u2.value) : (p2 = o2[f2.value], f2 = new D(C, p2(s2.value, a2.value, u2.value)), c2.push(f2));
                else if (y2 === "IOP1" && c2.length > 0)
                  s2 = c2.pop(), p2 = r2[f2.value], f2 = new D(C, p2(s2.value)), c2.push(f2);
                else if (y2 === F) {
                  for (; c2.length > 0; )
                    h2.push(c2.shift());
                  h2.push(new D(F, t3(f2.value, r2, n2, o2, i2)));
                } else if (y2 === "IMEMBER" && c2.length > 0)
                  s2 = c2.pop(), c2.push(new D(C, s2.value[f2.value]));
                else {
                  for (; c2.length > 0; )
                    h2.push(c2.shift());
                  h2.push(f2);
                }
              }
              for (; c2.length > 0; )
                h2.push(c2.shift());
              return h2;
            }(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, t2), this.parser);
          }, K.prototype.substitute = function(t2, e2) {
            return e2 instanceof K || (e2 = this.parser.parse(String(e2))), new K(function t3(e3, r2, n2) {
              for (var o2 = [], i2 = 0; i2 < e3.length; i2++) {
                var s2 = e3[i2], a2 = s2.type;
                if (a2 === z && s2.value === r2)
                  for (var u2 = 0; u2 < n2.tokens.length; u2++) {
                    var p2, c2 = n2.tokens[u2];
                    p2 = c2.type === "IOP1" ? L(c2.value) : c2.type === "IOP2" ? B(c2.value) : c2.type === "IOP3" ? U(c2.value) : new D(c2.type, c2.value), o2.push(p2);
                  }
                else
                  a2 === F ? o2.push(new D(F, t3(s2.value, r2, n2))) : o2.push(s2);
              }
              return o2;
            }(this.tokens, t2, e2), this.parser);
          }, K.prototype.evaluate = function(t2) {
            return t2 = t2 || {}, q(this.tokens, this, t2);
          }, K.prototype.toString = function() {
            return G(this.tokens, false);
          }, K.prototype.symbols = function(t2) {
            t2 = t2 || {};
            var e2 = [];
            return X(this.tokens, e2, t2), e2;
          }, K.prototype.variables = function(t2) {
            t2 = t2 || {};
            var e2 = [];
            X(this.tokens, e2, t2);
            var r2 = this.functions;
            return e2.filter(function(t3) {
              return !(t3 in r2);
            });
          }, K.prototype.toJSFunction = function(t2, e2) {
            var r2 = this, n2 = new Function(t2, "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " + G(this.simplify(e2).tokens, true) + "; }");
            return function() {
              return n2.apply(r2, arguments);
            };
          };
          var J = "TOP", Z = "TPAREN";
          function Q(t2, e2, r2) {
            this.type = t2, this.value = e2, this.index = r2;
          }
          function tt(t2, e2) {
            this.pos = 0, this.current = null, this.unaryOps = t2.unaryOps, this.binaryOps = t2.binaryOps, this.ternaryOps = t2.ternaryOps, this.consts = t2.consts, this.expression = e2, this.savedPosition = 0, this.savedCurrent = null, this.options = t2.options, this.parser = t2;
          }
          Q.prototype.toString = function() {
            return this.type + ": " + this.value;
          }, tt.prototype.newToken = function(t2, e2, r2) {
            return new Q(t2, e2, r2 != null ? r2 : this.pos);
          }, tt.prototype.save = function() {
            this.savedPosition = this.pos, this.savedCurrent = this.current;
          }, tt.prototype.restore = function() {
            this.pos = this.savedPosition, this.current = this.savedCurrent;
          }, tt.prototype.next = function() {
            return this.pos >= this.expression.length ? this.newToken("TEOF", "EOF") : this.isWhitespace() || this.isComment() ? this.next() : this.isRadixInteger() || this.isNumber() || this.isOperator() || this.isString() || this.isParen() || this.isBracket() || this.isComma() || this.isSemicolon() || this.isNamedOp() || this.isConst() || this.isName() ? this.current : void this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
          }, tt.prototype.isString = function() {
            var t2 = false, e2 = this.pos, r2 = this.expression.charAt(e2);
            if (r2 === "'" || r2 === '"')
              for (var n2 = this.expression.indexOf(r2, e2 + 1); n2 >= 0 && this.pos < this.expression.length; ) {
                if (this.pos = n2 + 1, this.expression.charAt(n2 - 1) !== "\\") {
                  var o2 = this.expression.substring(e2 + 1, n2);
                  this.current = this.newToken("TSTRING", this.unescape(o2), e2), t2 = true;
                  break;
                }
                n2 = this.expression.indexOf(r2, n2 + 1);
              }
            return t2;
          }, tt.prototype.isParen = function() {
            var t2 = this.expression.charAt(this.pos);
            return (t2 === "(" || t2 === ")") && (this.current = this.newToken(Z, t2), this.pos++, true);
          }, tt.prototype.isBracket = function() {
            var t2 = this.expression.charAt(this.pos);
            return !(t2 !== "[" && t2 !== "]" || !this.isOperatorEnabled("[")) && (this.current = this.newToken("TBRACKET", t2), this.pos++, true);
          }, tt.prototype.isComma = function() {
            return this.expression.charAt(this.pos) === "," && (this.current = this.newToken("TCOMMA", ","), this.pos++, true);
          }, tt.prototype.isSemicolon = function() {
            return this.expression.charAt(this.pos) === ";" && (this.current = this.newToken("TSEMICOLON", ";"), this.pos++, true);
          }, tt.prototype.isConst = function() {
            for (var t2 = this.pos, e2 = t2; e2 < this.expression.length; e2++) {
              var r2 = this.expression.charAt(e2);
              if (r2.toUpperCase() === r2.toLowerCase() && (e2 === this.pos || r2 !== "_" && r2 !== "." && (r2 < "0" || r2 > "9")))
                break;
            }
            if (e2 > t2) {
              var n2 = this.expression.substring(t2, e2);
              if (n2 in this.consts)
                return this.current = this.newToken("TNUMBER", this.consts[n2]), this.pos += n2.length, true;
            }
            return false;
          }, tt.prototype.isNamedOp = function() {
            for (var t2 = this.pos, e2 = t2; e2 < this.expression.length; e2++) {
              var r2 = this.expression.charAt(e2);
              if (r2.toUpperCase() === r2.toLowerCase() && (e2 === this.pos || r2 !== "_" && (r2 < "0" || r2 > "9")))
                break;
            }
            if (e2 > t2) {
              var n2 = this.expression.substring(t2, e2);
              if (this.isOperatorEnabled(n2) && (n2 in this.binaryOps || n2 in this.unaryOps || n2 in this.ternaryOps))
                return this.current = this.newToken(J, n2), this.pos += n2.length, true;
            }
            return false;
          }, tt.prototype.isName = function() {
            for (var t2 = this.pos, e2 = t2, r2 = false; e2 < this.expression.length; e2++) {
              var n2 = this.expression.charAt(e2);
              if (n2.toUpperCase() === n2.toLowerCase()) {
                if (e2 === this.pos && (n2 === "$" || n2 === "_")) {
                  n2 === "_" && (r2 = true);
                  continue;
                }
                if (e2 === this.pos || !r2 || n2 !== "_" && (n2 < "0" || n2 > "9"))
                  break;
              } else
                r2 = true;
            }
            if (r2) {
              var o2 = this.expression.substring(t2, e2);
              return this.current = this.newToken("TNAME", o2), this.pos += o2.length, true;
            }
            return false;
          }, tt.prototype.isWhitespace = function() {
            for (var t2 = false, e2 = this.expression.charAt(this.pos); !(e2 !== " " && e2 !== "	" && e2 !== "\n" && e2 !== "\r" || (t2 = true, this.pos++, this.pos >= this.expression.length)); )
              e2 = this.expression.charAt(this.pos);
            return t2;
          };
          var et = /^[0-9a-f]{4}$/i;
          function rt(t2, e2, r2) {
            this.parser = t2, this.tokens = e2, this.current = null, this.nextToken = null, this.next(), this.savedCurrent = null, this.savedNextToken = null, this.allowMemberAccess = r2.allowMemberAccess !== false;
          }
          tt.prototype.unescape = function(t2) {
            var e2 = t2.indexOf("\\");
            if (e2 < 0)
              return t2;
            for (var r2 = t2.substring(0, e2); e2 >= 0; ) {
              var n2 = t2.charAt(++e2);
              switch (n2) {
                case "'":
                  r2 += "'";
                  break;
                case '"':
                  r2 += '"';
                  break;
                case "\\":
                  r2 += "\\";
                  break;
                case "/":
                  r2 += "/";
                  break;
                case "b":
                  r2 += "\b";
                  break;
                case "f":
                  r2 += "\f";
                  break;
                case "n":
                  r2 += "\n";
                  break;
                case "r":
                  r2 += "\r";
                  break;
                case "t":
                  r2 += "	";
                  break;
                case "u":
                  var o2 = t2.substring(e2 + 1, e2 + 5);
                  et.test(o2) || this.parseError("Illegal escape sequence: \\u" + o2), r2 += String.fromCharCode(parseInt(o2, 16)), e2 += 4;
                  break;
                default:
                  throw this.parseError('Illegal escape sequence: "\\' + n2 + '"');
              }
              ++e2;
              var i2 = t2.indexOf("\\", e2);
              r2 += t2.substring(e2, i2 < 0 ? t2.length : i2), e2 = i2;
            }
            return r2;
          }, tt.prototype.isComment = function() {
            return this.expression.charAt(this.pos) === "/" && this.expression.charAt(this.pos + 1) === "*" && (this.pos = this.expression.indexOf("*/", this.pos) + 2, this.pos === 1 && (this.pos = this.expression.length), true);
          }, tt.prototype.isRadixInteger = function() {
            var t2, e2, r2 = this.pos;
            if (r2 >= this.expression.length - 2 || this.expression.charAt(r2) !== "0")
              return false;
            if (++r2, this.expression.charAt(r2) === "x")
              t2 = 16, e2 = /^[0-9a-f]$/i, ++r2;
            else {
              if (this.expression.charAt(r2) !== "b")
                return false;
              t2 = 2, e2 = /^[01]$/i, ++r2;
            }
            for (var n2 = false, o2 = r2; r2 < this.expression.length; ) {
              var i2 = this.expression.charAt(r2);
              if (!e2.test(i2))
                break;
              r2++, n2 = true;
            }
            return n2 && (this.current = this.newToken("TNUMBER", parseInt(this.expression.substring(o2, r2), t2)), this.pos = r2), n2;
          }, tt.prototype.isNumber = function() {
            for (var t2, e2 = false, r2 = this.pos, n2 = r2, o2 = r2, i2 = false, s2 = false; r2 < this.expression.length && ((t2 = this.expression.charAt(r2)) >= "0" && t2 <= "9" || !i2 && t2 === "."); )
              t2 === "." ? i2 = true : s2 = true, r2++, e2 = s2;
            if (e2 && (o2 = r2), t2 === "e" || t2 === "E") {
              r2++;
              for (var a2 = true, u2 = false; r2 < this.expression.length; ) {
                if (t2 = this.expression.charAt(r2), !a2 || t2 !== "+" && t2 !== "-") {
                  if (!(t2 >= "0" && t2 <= "9"))
                    break;
                  u2 = true, a2 = false;
                } else
                  a2 = false;
                r2++;
              }
              u2 || (r2 = o2);
            }
            return e2 ? (this.current = this.newToken("TNUMBER", parseFloat(this.expression.substring(n2, r2))), this.pos = r2) : this.pos = o2, e2;
          }, tt.prototype.isOperator = function() {
            var t2 = this.pos, e2 = this.expression.charAt(this.pos);
            if (e2 === "+" || e2 === "-" || e2 === "*" || e2 === "/" || e2 === "%" || e2 === "^" || e2 === "?" || e2 === ":" || e2 === ".")
              this.current = this.newToken(J, e2);
            else if (e2 === "\u2219" || e2 === "\u2022")
              this.current = this.newToken(J, "*");
            else if (e2 === ">")
              this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(J, ">="), this.pos++) : this.current = this.newToken(J, ">");
            else if (e2 === "<")
              this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(J, "<="), this.pos++) : this.current = this.newToken(J, "<");
            else if (e2 === "|") {
              if (this.expression.charAt(this.pos + 1) !== "|")
                return false;
              this.current = this.newToken(J, "||"), this.pos++;
            } else if (e2 === "=")
              this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(J, "=="), this.pos++) : this.current = this.newToken(J, e2);
            else {
              if (e2 !== "!")
                return false;
              this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(J, "!="), this.pos++) : this.current = this.newToken(J, e2);
            }
            return this.pos++, !!this.isOperatorEnabled(this.current.value) || (this.pos = t2, false);
          }, tt.prototype.isOperatorEnabled = function(t2) {
            return this.parser.isOperatorEnabled(t2);
          }, tt.prototype.getCoordinates = function() {
            var t2, e2 = 0, r2 = -1;
            do {
              e2++, t2 = this.pos - r2, r2 = this.expression.indexOf("\n", r2 + 1);
            } while (r2 >= 0 && r2 < this.pos);
            return { line: e2, column: t2 };
          }, tt.prototype.parseError = function(t2) {
            var e2 = this.getCoordinates();
            throw new Error("parse error [" + e2.line + ":" + e2.column + "]: " + t2);
          }, rt.prototype.next = function() {
            return this.current = this.nextToken, this.nextToken = this.tokens.next();
          }, rt.prototype.tokenMatches = function(t2, e2) {
            return e2 === void 0 || (Array.isArray(e2) ? Y(e2, t2.value) : typeof e2 == "function" ? e2(t2) : t2.value === e2);
          }, rt.prototype.save = function() {
            this.savedCurrent = this.current, this.savedNextToken = this.nextToken, this.tokens.save();
          }, rt.prototype.restore = function() {
            this.tokens.restore(), this.current = this.savedCurrent, this.nextToken = this.savedNextToken;
          }, rt.prototype.accept = function(t2, e2) {
            return !(this.nextToken.type !== t2 || !this.tokenMatches(this.nextToken, e2)) && (this.next(), true);
          }, rt.prototype.expect = function(t2, e2) {
            if (!this.accept(t2, e2)) {
              var r2 = this.tokens.getCoordinates();
              throw new Error("parse error [" + r2.line + ":" + r2.column + "]: Expected " + (e2 || t2));
            }
          }, rt.prototype.parseAtom = function(t2) {
            var e2 = this.tokens.unaryOps;
            if (this.accept("TNAME") || this.accept(J, function(t3) {
              return t3.value in e2;
            }))
              t2.push(new D(z, this.current.value));
            else if (this.accept("TNUMBER"))
              t2.push(new D(C, this.current.value));
            else if (this.accept("TSTRING"))
              t2.push(new D(C, this.current.value));
            else if (this.accept(Z, "("))
              this.parseExpression(t2), this.expect(Z, ")");
            else {
              if (!this.accept("TBRACKET", "["))
                throw new Error("unexpected " + this.nextToken);
              if (this.accept("TBRACKET", "]"))
                t2.push(new D("IARRAY", 0));
              else {
                var r2 = this.parseArrayList(t2);
                t2.push(new D("IARRAY", r2));
              }
            }
          }, rt.prototype.parseExpression = function(t2) {
            var e2 = [];
            this.parseUntilEndStatement(t2, e2) || (this.parseVariableAssignmentExpression(e2), this.parseUntilEndStatement(t2, e2) || this.pushExpression(t2, e2));
          }, rt.prototype.pushExpression = function(t2, e2) {
            for (var r2 = 0, n2 = e2.length; r2 < n2; r2++)
              t2.push(e2[r2]);
          }, rt.prototype.parseUntilEndStatement = function(t2, e2) {
            return !!this.accept("TSEMICOLON") && (!this.nextToken || this.nextToken.type === "TEOF" || this.nextToken.type === Z && this.nextToken.value === ")" || e2.push(new D("IENDSTATEMENT")), this.nextToken.type !== "TEOF" && this.parseExpression(e2), t2.push(new D(F, e2)), true);
          }, rt.prototype.parseArrayList = function(t2) {
            for (var e2 = 0; !this.accept("TBRACKET", "]"); )
              for (this.parseExpression(t2), ++e2; this.accept("TCOMMA"); )
                this.parseExpression(t2), ++e2;
            return e2;
          }, rt.prototype.parseVariableAssignmentExpression = function(t2) {
            for (this.parseConditionalExpression(t2); this.accept(J, "="); ) {
              var e2 = t2.pop(), r2 = [], n2 = t2.length - 1;
              if (e2.type !== "IFUNCALL") {
                if (e2.type !== z && e2.type !== "IMEMBER")
                  throw new Error("expected variable for assignment");
                this.parseVariableAssignmentExpression(r2), t2.push(new D("IVARNAME", e2.value)), t2.push(new D(F, r2)), t2.push(B("="));
              } else {
                if (!this.tokens.isOperatorEnabled("()="))
                  throw new Error("function definition is not permitted");
                for (var o2 = 0, i2 = e2.value + 1; o2 < i2; o2++) {
                  var s2 = n2 - o2;
                  t2[s2].type === z && (t2[s2] = new D("IVARNAME", t2[s2].value));
                }
                this.parseVariableAssignmentExpression(r2), t2.push(new D(F, r2)), t2.push(new D("IFUNDEF", e2.value));
              }
            }
          }, rt.prototype.parseConditionalExpression = function(t2) {
            for (this.parseOrExpression(t2); this.accept(J, "?"); ) {
              var e2 = [], r2 = [];
              this.parseConditionalExpression(e2), this.expect(J, ":"), this.parseConditionalExpression(r2), t2.push(new D(F, e2)), t2.push(new D(F, r2)), t2.push(U("?"));
            }
          }, rt.prototype.parseOrExpression = function(t2) {
            for (this.parseAndExpression(t2); this.accept(J, "or"); ) {
              var e2 = [];
              this.parseAndExpression(e2), t2.push(new D(F, e2)), t2.push(B("or"));
            }
          }, rt.prototype.parseAndExpression = function(t2) {
            for (this.parseComparison(t2); this.accept(J, "and"); ) {
              var e2 = [];
              this.parseComparison(e2), t2.push(new D(F, e2)), t2.push(B("and"));
            }
          };
          var nt = ["==", "!=", "<", "<=", ">=", ">", "in"];
          rt.prototype.parseComparison = function(t2) {
            for (this.parseAddSub(t2); this.accept(J, nt); ) {
              var e2 = this.current;
              this.parseAddSub(t2), t2.push(B(e2.value));
            }
          };
          var ot = ["+", "-", "||"];
          rt.prototype.parseAddSub = function(t2) {
            for (this.parseTerm(t2); this.accept(J, ot); ) {
              var e2 = this.current;
              this.parseTerm(t2), t2.push(B(e2.value));
            }
          };
          var it = ["*", "/", "%"];
          function st(t2, e2) {
            return Number(t2) + Number(e2);
          }
          function at(t2, e2) {
            return t2 - e2;
          }
          function ut(t2, e2) {
            return t2 * e2;
          }
          function pt(t2, e2) {
            return t2 / e2;
          }
          function ct(t2, e2) {
            return t2 % e2;
          }
          function ht(t2, e2) {
            return Array.isArray(t2) && Array.isArray(e2) ? t2.concat(e2) : "" + t2 + e2;
          }
          function lt(t2, e2) {
            return t2 === e2;
          }
          function ft(t2, e2) {
            return t2 !== e2;
          }
          function yt(t2, e2) {
            return t2 > e2;
          }
          function vt(t2, e2) {
            return t2 < e2;
          }
          function gt(t2, e2) {
            return t2 >= e2;
          }
          function dt(t2, e2) {
            return t2 <= e2;
          }
          function bt(t2, e2) {
            return Boolean(t2 && e2);
          }
          function mt(t2, e2) {
            return Boolean(t2 || e2);
          }
          function Ot(t2, e2) {
            return Y(e2, t2);
          }
          function wt(t2) {
            return (Math.exp(t2) - Math.exp(-t2)) / 2;
          }
          function Et(t2) {
            return (Math.exp(t2) + Math.exp(-t2)) / 2;
          }
          function At(t2) {
            return t2 === 1 / 0 ? 1 : t2 === -1 / 0 ? -1 : (Math.exp(t2) - Math.exp(-t2)) / (Math.exp(t2) + Math.exp(-t2));
          }
          function xt(t2) {
            return t2 === -1 / 0 ? t2 : Math.log(t2 + Math.sqrt(t2 * t2 + 1));
          }
          function _t(t2) {
            return Math.log(t2 + Math.sqrt(t2 * t2 - 1));
          }
          function St(t2) {
            return Math.log((1 + t2) / (1 - t2)) / 2;
          }
          function Mt(t2) {
            return Math.log(t2) * Math.LOG10E;
          }
          function Tt(t2) {
            return -t2;
          }
          function kt(t2) {
            return !t2;
          }
          function It(t2) {
            return t2 < 0 ? Math.ceil(t2) : Math.floor(t2);
          }
          function jt(t2) {
            return Math.random() * (t2 || 1);
          }
          function Pt(t2) {
            return Nt(t2 + 1);
          }
          rt.prototype.parseTerm = function(t2) {
            for (this.parseFactor(t2); this.accept(J, it); ) {
              var e2 = this.current;
              this.parseFactor(t2), t2.push(B(e2.value));
            }
          }, rt.prototype.parseFactor = function(t2) {
            var e2 = this.tokens.unaryOps;
            if (this.save(), this.accept(J, function(t3) {
              return t3.value in e2;
            })) {
              if (this.current.value !== "-" && this.current.value !== "+") {
                if (this.nextToken.type === Z && this.nextToken.value === "(")
                  return this.restore(), void this.parseExponential(t2);
                if (this.nextToken.type === "TSEMICOLON" || this.nextToken.type === "TCOMMA" || this.nextToken.type === "TEOF" || this.nextToken.type === Z && this.nextToken.value === ")")
                  return this.restore(), void this.parseAtom(t2);
              }
              var r2 = this.current;
              this.parseFactor(t2), t2.push(L(r2.value));
            } else
              this.parseExponential(t2);
          }, rt.prototype.parseExponential = function(t2) {
            for (this.parsePostfixExpression(t2); this.accept(J, "^"); )
              this.parseFactor(t2), t2.push(B("^"));
          }, rt.prototype.parsePostfixExpression = function(t2) {
            for (this.parseFunctionCall(t2); this.accept(J, "!"); )
              t2.push(L("!"));
          }, rt.prototype.parseFunctionCall = function(t2) {
            var e2 = this.tokens.unaryOps;
            if (this.accept(J, function(t3) {
              return t3.value in e2;
            })) {
              var r2 = this.current;
              this.parseAtom(t2), t2.push(L(r2.value));
            } else
              for (this.parseMemberExpression(t2); this.accept(Z, "("); )
                if (this.accept(Z, ")"))
                  t2.push(new D("IFUNCALL", 0));
                else {
                  var n2 = this.parseArgumentList(t2);
                  t2.push(new D("IFUNCALL", n2));
                }
          }, rt.prototype.parseArgumentList = function(t2) {
            for (var e2 = 0; !this.accept(Z, ")"); )
              for (this.parseExpression(t2), ++e2; this.accept("TCOMMA"); )
                this.parseExpression(t2), ++e2;
            return e2;
          }, rt.prototype.parseMemberExpression = function(t2) {
            for (this.parseAtom(t2); this.accept(J, ".") || this.accept("TBRACKET", "["); ) {
              var e2 = this.current;
              if (e2.value === ".") {
                if (!this.allowMemberAccess)
                  throw new Error('unexpected ".", member access is not permitted');
                this.expect("TNAME"), t2.push(new D("IMEMBER", this.current.value));
              } else {
                if (e2.value !== "[")
                  throw new Error("unexpected symbol: " + e2.value);
                if (!this.tokens.isOperatorEnabled("["))
                  throw new Error('unexpected "[]", arrays are disabled');
                this.parseExpression(t2), this.expect("TBRACKET", "]"), t2.push(B("["));
              }
            }
          };
          var Rt = [0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, 1580887032249125e-19, -21026444172410488e-20, 21743961811521265e-20, -1643181065367639e-19, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22];
          function Nt(t2) {
            var e2, r2;
            if (function(t3) {
              return isFinite(t3) && t3 === Math.round(t3);
            }(t2)) {
              if (t2 <= 0)
                return isFinite(t2) ? 1 / 0 : NaN;
              if (t2 > 171)
                return 1 / 0;
              for (var n2 = t2 - 2, o2 = t2 - 1; n2 > 1; )
                o2 *= n2, n2--;
              return o2 === 0 && (o2 = 1), o2;
            }
            if (t2 < 0.5)
              return Math.PI / (Math.sin(Math.PI * t2) * Nt(1 - t2));
            if (t2 >= 171.35)
              return 1 / 0;
            if (t2 > 85) {
              var i2 = t2 * t2, s2 = i2 * t2, a2 = s2 * t2, u2 = a2 * t2;
              return Math.sqrt(2 * Math.PI / t2) * Math.pow(t2 / Math.E, t2) * (1 + 1 / (12 * t2) + 1 / (288 * i2) - 139 / (51840 * s2) - 571 / (2488320 * a2) + 163879 / (209018880 * u2) + 5246819 / (75246796800 * u2 * t2));
            }
            --t2, r2 = Rt[0];
            for (var p2 = 1; p2 < Rt.length; ++p2)
              r2 += Rt[p2] / (t2 + p2);
            return e2 = t2 + 4.7421875 + 0.5, Math.sqrt(2 * Math.PI) * Math.pow(e2, t2 + 0.5) * Math.exp(-e2) * r2;
          }
          function Ct(t2) {
            return Array.isArray(t2) ? t2.length : String(t2).length;
          }
          function zt() {
            for (var t2 = 0, e2 = 0, r2 = 0; r2 < arguments.length; r2++) {
              var n2, o2 = Math.abs(arguments[r2]);
              e2 < o2 ? (t2 = t2 * (n2 = e2 / o2) * n2 + 1, e2 = o2) : t2 += o2 > 0 ? (n2 = o2 / e2) * n2 : o2;
            }
            return e2 === 1 / 0 ? 1 / 0 : e2 * Math.sqrt(t2);
          }
          function Ft(t2, e2, r2) {
            return t2 ? e2 : r2;
          }
          function Dt(t2, e2) {
            return e2 === void 0 || +e2 == 0 ? Math.round(t2) : (t2 = +t2, e2 = -+e2, isNaN(t2) || typeof e2 != "number" || e2 % 1 != 0 ? NaN : (t2 = t2.toString().split("e"), +((t2 = (t2 = Math.round(+(t2[0] + "e" + (t2[1] ? +t2[1] - e2 : -e2)))).toString().split("e"))[0] + "e" + (t2[1] ? +t2[1] + e2 : e2))));
          }
          function Lt(t2, e2, r2) {
            return r2 && (r2[t2] = e2), e2;
          }
          function Bt(t2, e2) {
            return t2[0 | e2];
          }
          function Ut(t2) {
            return arguments.length === 1 && Array.isArray(t2) ? Math.max.apply(Math, t2) : Math.max.apply(Math, arguments);
          }
          function qt(t2) {
            return arguments.length === 1 && Array.isArray(t2) ? Math.min.apply(Math, t2) : Math.min.apply(Math, arguments);
          }
          function Ht(t2, e2) {
            if (typeof t2 != "function")
              throw new Error("First argument to map is not a function");
            if (!Array.isArray(e2))
              throw new Error("Second argument to map is not an array");
            return e2.map(function(e3, r2) {
              return t2(e3, r2);
            });
          }
          function Vt(t2, e2, r2) {
            if (typeof t2 != "function")
              throw new Error("First argument to fold is not a function");
            if (!Array.isArray(r2))
              throw new Error("Second argument to fold is not an array");
            return r2.reduce(function(e3, r3, n2) {
              return t2(e3, r3, n2);
            }, e2);
          }
          function $t(t2, e2) {
            if (typeof t2 != "function")
              throw new Error("First argument to filter is not a function");
            if (!Array.isArray(e2))
              throw new Error("Second argument to filter is not an array");
            return e2.filter(function(e3, r2) {
              return t2(e3, r2);
            });
          }
          function Gt(t2, e2) {
            if (!Array.isArray(e2) && typeof e2 != "string")
              throw new Error("Second argument to indexOf is not a string or array");
            return e2.indexOf(t2);
          }
          function Wt(t2, e2) {
            if (!Array.isArray(e2))
              throw new Error("Second argument to join is not an array");
            return e2.join(t2);
          }
          function Yt(t2) {
            return (t2 > 0) - (t2 < 0) || +t2;
          }
          function Xt(t2) {
            return t2 < 0 ? -Math.pow(-t2, 1 / 3) : Math.pow(t2, 1 / 3);
          }
          function Kt(t2) {
            return Math.exp(t2) - 1;
          }
          function Jt(t2) {
            return Math.log(1 + t2);
          }
          function Zt(t2) {
            return Math.log(t2) / Math.LN2;
          }
          function Qt(t2) {
            this.options = t2 || {}, this.unaryOps = { sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan, sinh: Math.sinh || wt, cosh: Math.cosh || Et, tanh: Math.tanh || At, asinh: Math.asinh || xt, acosh: Math.acosh || _t, atanh: Math.atanh || St, sqrt: Math.sqrt, cbrt: Math.cbrt || Xt, log: Math.log, log2: Math.log2 || Zt, ln: Math.log, lg: Math.log10 || Mt, log10: Math.log10 || Mt, expm1: Math.expm1 || Kt, log1p: Math.log1p || Jt, abs: Math.abs, ceil: Math.ceil, floor: Math.floor, round: Math.round, trunc: Math.trunc || It, "-": Tt, "+": Number, exp: Math.exp, not: kt, length: Ct, "!": Pt, sign: Math.sign || Yt }, this.binaryOps = { "+": st, "-": at, "*": ut, "/": pt, "%": ct, "^": Math.pow, "||": ht, "==": lt, "!=": ft, ">": yt, "<": vt, ">=": gt, "<=": dt, and: bt, or: mt, in: Ot, "=": Lt, "[": Bt }, this.ternaryOps = { "?": Ft }, this.functions = { random: jt, fac: Pt, min: qt, max: Ut, hypot: Math.hypot || zt, pyt: Math.hypot || zt, pow: Math.pow, atan2: Math.atan2, if: Ft, gamma: Nt, roundTo: Dt, map: Ht, fold: Vt, filter: $t, indexOf: Gt, join: Wt }, this.consts = { E: Math.E, PI: Math.PI, true: true, false: false };
          }
          Qt.prototype.parse = function(t2) {
            var e2 = [], r2 = new rt(this, new tt(this, t2), { allowMemberAccess: this.options.allowMemberAccess });
            return r2.parseExpression(e2), r2.expect("TEOF", "EOF"), new K(e2, this);
          }, Qt.prototype.evaluate = function(t2, e2) {
            return this.parse(t2).evaluate(e2);
          };
          var te = new Qt();
          Qt.parse = function(t2) {
            return te.parse(t2);
          }, Qt.evaluate = function(t2, e2) {
            return te.parse(t2).evaluate(e2);
          };
          var ee = { "+": "add", "-": "subtract", "*": "multiply", "/": "divide", "%": "remainder", "^": "power", "!": "factorial", "<": "comparison", ">": "comparison", "<=": "comparison", ">=": "comparison", "==": "comparison", "!=": "comparison", "||": "concatenate", and: "logical", or: "logical", not: "logical", "?": "conditional", ":": "conditional", "=": "assignment", "[": "array", "()=": "fndef" };
          Qt.prototype.isOperatorEnabled = function(t2) {
            var e2 = function(t3) {
              return ee.hasOwnProperty(t3) ? ee[t3] : t3;
            }(t2), r2 = this.options.operators || {};
            return !(e2 in r2) || !!r2[e2];
          };
          var re, ne = new Qt();
          function oe(t2) {
            try {
              return ne.evaluate(t2), +ne.evaluate(t2).toFixed(3);
            } catch (e2) {
              return t2;
            }
          }
          function ie(t2) {
            return (ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          function se(t2) {
            return ie(t2) !== "object" || ie(t2.value) !== "object" || (t2 == null ? void 0 : t2.type) !== i.BOX_SHADOW && (t2 == null ? void 0 : t2.type) !== i.TYPOGRAPHY ? P(t2) ? t2.value.toString() : t2.toString() : t2.value;
          }
          function ae(t2, e2, r2) {
            if (ie(r2) === "object")
              return r2;
            if (t2 && (typeof t2 == "string" || typeof t2 == "number")) {
              var n2 = oe(String(r2));
              return t2.replace(e2, String(n2));
            }
            return t2;
          }
          function ue(t2) {
            var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r2 = se(t2);
            try {
              var n2 = I(r2);
              if (n2 != null && n2.length) {
                var o2 = Array.from(n2).map(function(r3) {
                  if (r3.length > 1) {
                    var n3, o3;
                    if (o3 = r3.startsWith("{") ? r3.endsWith("}") ? r3.slice(1, r3.length - 1) : r3.slice(1, r3.length) : r3.substring(1), ie(t2) === "object" && o3 === t2.name || o3 === t2)
                      return P(t2) ? t2.value.toString() : t2.toString();
                    var i3 = o3.split("."), s3 = i3.pop(), a2 = i3.join("."), u2 = Number(i3.pop()), p2 = i3.join("."), c2 = e2.find(function(t3) {
                      return t3.name === o3 || t3.name === a2 || t3.name === p2;
                    });
                    if ((c2 == null ? void 0 : c2.name) === o3)
                      return ue(c2, e2);
                    if (s3 && (c2 == null ? void 0 : c2.name) === a2 && (n3 = c2.rawValue) !== null && n3 !== void 0 && n3.hasOwnProperty(s3))
                      return ue(c2 == null ? void 0 : c2.rawValue[s3], e2);
                    if (u2 !== void 0 && s3 && (c2 == null ? void 0 : c2.name) === p2 && Array.isArray(c2 == null ? void 0 : c2.rawValue) && c2 != null && c2.rawValue[u2] && c2 != null && c2.rawValue[u2].hasOwnProperty(s3))
                      return ue(c2 == null ? void 0 : c2.rawValue[u2][s3], e2);
                  }
                  return r3;
                });
                n2.forEach(function(t3, e3) {
                  var n3 = o2[e3];
                  r2 = ae(r2, t3, n3);
                }), r2 === "null" && (r2 = null);
              }
              if (r2) {
                var i2 = I(r2);
                if (!i2) {
                  var s2 = oe(r2);
                  return typeof s2 == "number" ? s2 : M(s2);
                }
              }
            } catch (r3) {
              return console.log("Error getting alias value of ".concat(JSON.stringify(t2, null, 2)), e2), null;
            }
            return r2 && typeof r2 == "string" ? oe(r2) : r2;
          }
          function pe(t2) {
            return (pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          function ce(t2) {
            return !!t2 && Boolean(t2.toString().match(T));
          }
          function he(t2, e2) {
            var r2 = Object.keys(t2);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t2);
              e2 && (n2 = n2.filter(function(e3) {
                return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
              })), r2.push.apply(r2, n2);
            }
            return r2;
          }
          function le(t2) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var r2 = arguments[e2] != null ? arguments[e2] : {};
              e2 % 2 ? he(Object(r2), true).forEach(function(e3) {
                fe(t2, e3, r2[e3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : he(Object(r2)).forEach(function(e3) {
                Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(r2, e3));
              });
            }
            return t2;
          }
          function fe(t2, e2, r2) {
            return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
          }
          function ye(t2, e2) {
            return function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(t2) || function(t3, e3) {
              if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(t3)))
                return;
              var r2 = [], n2 = true, o2 = false, i2 = void 0;
              try {
                for (var s2, a2 = t3[Symbol.iterator](); !(n2 = (s2 = a2.next()).done) && (r2.push(s2.value), !e3 || r2.length !== e3); n2 = true)
                  ;
              } catch (t4) {
                o2 = true, i2 = t4;
              } finally {
                try {
                  n2 || a2.return == null || a2.return();
                } finally {
                  if (o2)
                    throw i2;
                }
              }
              return r2;
            }(t2, e2) || function(t3, e3) {
              if (!t3)
                return;
              if (typeof t3 == "string")
                return ve(t3, e3);
              var r2 = Object.prototype.toString.call(t3).slice(8, -1);
              r2 === "Object" && t3.constructor && (r2 = t3.constructor.name);
              if (r2 === "Map" || r2 === "Set")
                return Array.from(t3);
              if (r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
                return ve(t3, e3);
            }(t2, e2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function ve(t2, e2) {
            (e2 == null || e2 > t2.length) && (e2 = t2.length);
            for (var r2 = 0, n2 = new Array(e2); r2 < e2; r2++)
              n2[r2] = t2[r2];
            return n2;
          }
          function ge(t2) {
            return t2.filter(function(e2) {
              return function(t3) {
                var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                try {
                  var r2 = false;
                  if (typeof t3 == "string")
                    r2 = Boolean(t3.match(k));
                  else if (t3.type === i.TYPOGRAPHY || t3.type === i.BOX_SHADOW)
                    if (typeof t3.value == "string")
                      r2 = Boolean(String(t3.value).match(k));
                    else {
                      var n2 = Array.isArray(t3.value) ? t3.value : [t3.value];
                      r2 = n2.some(function(t4) {
                        return Object.values(t4).some(function(t5) {
                          return Boolean(t5 == null ? void 0 : t5.toString().match(k));
                        });
                      });
                    }
                  else
                    r2 = Boolean(t3.value.toString().match(k));
                  if (r2) {
                    var o2 = ue(t3, e3);
                    return o2 != null;
                  }
                } catch (r3) {
                  console.log("Error checking alias of token ".concat(pe(t3) === "object" ? t3.name : t3), t3, e3, r3);
                }
                return false;
              }(e2, t2.filter(N));
            });
          }
          function de(t2, e2) {
            var r2 = Object.keys(t2);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t2);
              e2 && (n2 = n2.filter(function(e3) {
                return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
              })), r2.push.apply(r2, n2);
            }
            return r2;
          }
          function be(t2, e2, r2) {
            return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
          }
          function me() {
            var t2 = figma.root.getSharedPluginData("tokens", "values");
            return JSON.parse(t2);
          }
          function Oe() {
            var t2 = figma.root.getSharedPluginData("tokens", "usedTokenSet");
            return JSON.parse(t2);
          }
          function we(t2, e2) {
            return function t3(e3) {
              var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = ge(e3), s2 = e3;
              return s2 = e3.map(function(t4, e4, r3) {
                var n3, s3 = false;
                return t4.type === i.TYPOGRAPHY || t4.type === i.BOX_SHADOW ? typeof t4.value == "string" ? (n3 = ue(t4.value, r3), s3 = n3 === null || ce(n3)) : n3 = Array.isArray(t4.value) ? t4.value.map(function(t5) {
                  return Object.entries(t5).reduce(function(t6, e5) {
                    var n4 = ye(e5, 2), o2 = n4[0], i2 = n4[1];
                    return t6[o2] = ue(i2, r3), (t6[o2] === null || ce(t6[o2])) && (s3 = true), t6;
                  }, {});
                }) : Object.entries(t4.value).reduce(function(t5, e5) {
                  var n4 = ye(e5, 2), o2 = n4[0], i2 = n4[1];
                  return t5[o2] = ue(i2, r3), (t5[o2] === null || ce(t5[o2])) && (s3 = true), t5;
                }, {}) : (n3 = ue(t4, r3), s3 = n3 === null || ce(n3)), le(le({}, o(t4, "failedToResolve")), {}, { value: n3, rawValue: t4.rawValue || t4.value }, s3 ? { failedToResolve: s3 } : {});
              }), n2.length > 0 && (r2 > n2.length || !r2) ? t3(s2, n2.length) : s2;
            }(function(t3) {
              var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = [], n2 = Object.entries(e3).filter(function(t4) {
                var e4 = ye(t4, 2)[1];
                return e4 === re.ENABLED || e4 === re.SOURCE;
              }).map(function(t4) {
                return ye(t4, 1)[0];
              });
              return Object.entries(t3).reverse().forEach(function(t4) {
                (n2.length === 0 || n2.includes(t4[0])) && t4[1].forEach(function(e4) {
                  r2.some(function(t5) {
                    return t5.name === e4.name;
                  }) || r2.push(le(le({}, c(e4)), {}, { internal__Parent: t4[0] }));
                });
              }), r2;
            }(t2, function(t3) {
              for (var e3 = 1; e3 < arguments.length; e3++) {
                var r2 = arguments[e3] != null ? arguments[e3] : {};
                e3 % 2 ? de(Object(r2), true).forEach(function(e4) {
                  be(t3, e4, r2[e4]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : de(Object(r2)).forEach(function(e4) {
                  Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r2, e4));
                });
              }
              return t3;
            }({}, e2)));
          }
          function Ee() {
            return we(me(), Oe());
          }
          function Ae(t2, e2) {
            return JSON.parse(t2.getSharedPluginData("tokens", e2));
          }
          function xe(t2) {
            var e2 = t2.getSharedPluginDataKeys("tokens"), r2 = [];
            return e2.forEach(function(e3) {
              Object.keys(n).includes(e3) && r2.push(Ae(t2, e3));
            }), r2;
          }
          !function(t2) {
            t2.DISABLED = "disabled", t2.SOURCE = "source", t2.ENABLED = "enabled";
          }(re || (re = {}));
        }]);
      }
    });
    var {
      getTokensStoredOnDocument: getTokensStoredOnDocument2,
      getUsedTokenSetsOnDocument: getUsedTokenSetsOnDocument2,
      mergeTokens,
      getResolvedTokens: getResolvedTokens2,
      getTokensOnNode: getTokensOnNode2,
      getTokensByKey
    } = require_useFigmaTokens();
    module2.exports = {
      getTokensStoredOnDocument: getTokensStoredOnDocument2,
      getUsedTokenSetsOnDocument: getUsedTokenSetsOnDocument2,
      mergeTokens,
      getResolvedTokens: getResolvedTokens2,
      getTokensOnNode: getTokensOnNode2,
      getTokensByKey
    };
  }
});

// code.ts
var {
  getTokensStoredOnDocument,
  getUsedTokenSetsOnDocument,
  getResolvedTokens,
  getTokensOnNode
} = require_figma_tokens_helpers();
var stored = getTokensStoredOnDocument();
var tokenSets = getUsedTokenSetsOnDocument();
var resolved = getResolvedTokens();
var selection = figma.currentPage.selection[0];
var tokensonnode = getTokensOnNode(selection);
console.log("Stored", stored);
console.log("sets", tokenSets);
console.log("merged", resolved);
console.log("selec", selection);
console.log("selec tokens", tokensonnode);
figma.closePlugin();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * set-value <https://github.com/jonschlinkert/set-value>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/
