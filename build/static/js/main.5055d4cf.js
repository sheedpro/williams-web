/*! For license information please see main.5055d4cf.js.LICENSE.txt */
!(function () {
  var e = {
      1694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function i() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var o = i.apply(null, n);
                    o && e.push(o);
                  }
                } else if ("object" === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((i.default = i), (e.exports = i))
            : void 0 ===
                (n = function () {
                  return i;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      2244: function (e, t, n) {
        var r = n(7447),
          i = n(8051).each;
        function a(e, t) {
          (this.query = e),
            (this.isUnconditional = t),
            (this.handlers = []),
            (this.mql = window.matchMedia(e));
          var n = this;
          (this.listener = function (e) {
            (n.mql = e.currentTarget || e), n.assess();
          }),
            this.mql.addListener(this.listener);
        }
        (a.prototype = {
          constuctor: a,
          addHandler: function (e) {
            var t = new r(e);
            this.handlers.push(t), this.matches() && t.on();
          },
          removeHandler: function (e) {
            var t = this.handlers;
            i(t, function (n, r) {
              if (n.equals(e)) return n.destroy(), !t.splice(r, 1);
            });
          },
          matches: function () {
            return this.mql.matches || this.isUnconditional;
          },
          clear: function () {
            i(this.handlers, function (e) {
              e.destroy();
            }),
              this.mql.removeListener(this.listener),
              (this.handlers.length = 0);
          },
          assess: function () {
            var e = this.matches() ? "on" : "off";
            i(this.handlers, function (t) {
              t[e]();
            });
          },
        }),
          (e.exports = a);
      },
      4e3: function (e, t, n) {
        var r = n(2244),
          i = n(8051),
          a = i.each,
          o = i.isFunction,
          l = i.isArray;
        function s() {
          if (!window.matchMedia)
            throw new Error(
              "matchMedia not present, legacy browsers require a polyfill"
            );
          (this.queries = {}),
            (this.browserIsIncapable = !window.matchMedia("only all").matches);
        }
        (s.prototype = {
          constructor: s,
          register: function (e, t, n) {
            var i = this.queries,
              s = n && this.browserIsIncapable;
            return (
              i[e] || (i[e] = new r(e, s)),
              o(t) && (t = { match: t }),
              l(t) || (t = [t]),
              a(t, function (t) {
                o(t) && (t = { match: t }), i[e].addHandler(t);
              }),
              this
            );
          },
          unregister: function (e, t) {
            var n = this.queries[e];
            return (
              n &&
                (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
              this
            );
          },
        }),
          (e.exports = s);
      },
      7447: function (e) {
        function t(e) {
          (this.options = e), !e.deferSetup && this.setup();
        }
        (t.prototype = {
          constructor: t,
          setup: function () {
            this.options.setup && this.options.setup(), (this.initialised = !0);
          },
          on: function () {
            !this.initialised && this.setup(),
              this.options.match && this.options.match();
          },
          off: function () {
            this.options.unmatch && this.options.unmatch();
          },
          destroy: function () {
            this.options.destroy ? this.options.destroy() : this.off();
          },
          equals: function (e) {
            return this.options === e || this.options.match === e;
          },
        }),
          (e.exports = t);
      },
      8051: function (e) {
        e.exports = {
          isFunction: function (e) {
            return "function" === typeof e;
          },
          isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
          },
          each: function (e, t) {
            for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
          },
        };
      },
      8153: function (e, t, n) {
        var r = n(4e3);
        e.exports = new r();
      },
      5477: function (e, t, n) {
        var r = n(2806),
          i = function (e) {
            var t = "",
              n = Object.keys(e);
            return (
              n.forEach(function (i, a) {
                var o = e[i];
                (function (e) {
                  return /[height|width]$/.test(e);
                })((i = r(i))) &&
                  "number" === typeof o &&
                  (o += "px"),
                  (t +=
                    !0 === o
                      ? i
                      : !1 === o
                      ? "not " + i
                      : "(" + i + ": " + o + ")"),
                  a < n.length - 1 && (t += " and ");
              }),
              t
            );
          };
        e.exports = function (e) {
          var t = "";
          return "string" === typeof e
            ? e
            : e instanceof Array
            ? (e.forEach(function (n, r) {
                (t += i(n)), r < e.length - 1 && (t += ", ");
              }),
              t)
            : i(e);
        };
      },
      5095: function (e, t, n) {
        var r = "Expected a function",
          i = NaN,
          a = "[object Symbol]",
          o = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          c = parseInt,
          d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          f = "object" == typeof self && self && self.Object === Object && self,
          p = d || f || Function("return this")(),
          h = Object.prototype.toString,
          v = Math.max,
          m = Math.min,
          g = function () {
            return p.Date.now();
          };
        function y(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  h.call(e) == a)
              );
            })(e)
          )
            return i;
          if (y(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = y(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, "");
          var n = s.test(e);
          return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e;
        }
        e.exports = function (e, t, n) {
          var i,
            a,
            o,
            l,
            s,
            u,
            c = 0,
            d = !1,
            f = !1,
            p = !0;
          if ("function" != typeof e) throw new TypeError(r);
          function h(t) {
            var n = i,
              r = a;
            return (i = a = void 0), (c = t), (l = e.apply(r, n));
          }
          function x(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= o);
          }
          function w() {
            var e = g();
            if (x(e)) return S(e);
            s = setTimeout(
              w,
              (function (e) {
                var n = t - (e - u);
                return f ? m(n, o - (e - c)) : n;
              })(e)
            );
          }
          function S(e) {
            return (s = void 0), p && i ? h(e) : ((i = a = void 0), l);
          }
          function k() {
            var e = g(),
              n = x(e);
            if (((i = arguments), (a = this), (u = e), n)) {
              if (void 0 === s)
                return (function (e) {
                  return (c = e), (s = setTimeout(w, t)), d ? h(e) : l;
                })(u);
              if (f) return (s = setTimeout(w, t)), h(u);
            }
            return void 0 === s && (s = setTimeout(w, t)), l;
          }
          return (
            (t = b(t) || 0),
            y(n) &&
              ((d = !!n.leading),
              (o = (f = "maxWait" in n) ? v(b(n.maxWait) || 0, t) : o),
              (p = "trailing" in n ? !!n.trailing : p)),
            (k.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (i = u = a = s = void 0);
            }),
            (k.flush = function () {
              return void 0 === s ? l : S(g());
            }),
            k
          );
        };
      },
      3881: function (e, t, n) {
        var r = "Expected a function",
          i = NaN,
          a = "[object Symbol]",
          o = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          c = parseInt,
          d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          f = "object" == typeof self && self && self.Object === Object && self,
          p = d || f || Function("return this")(),
          h = Object.prototype.toString,
          v = Math.max,
          m = Math.min,
          g = function () {
            return p.Date.now();
          };
        function y(e, t, n) {
          var i,
            a,
            o,
            l,
            s,
            u,
            c = 0,
            d = !1,
            f = !1,
            p = !0;
          if ("function" != typeof e) throw new TypeError(r);
          function h(t) {
            var n = i,
              r = a;
            return (i = a = void 0), (c = t), (l = e.apply(r, n));
          }
          function y(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= o);
          }
          function w() {
            var e = g();
            if (y(e)) return S(e);
            s = setTimeout(
              w,
              (function (e) {
                var n = t - (e - u);
                return f ? m(n, o - (e - c)) : n;
              })(e)
            );
          }
          function S(e) {
            return (s = void 0), p && i ? h(e) : ((i = a = void 0), l);
          }
          function k() {
            var e = g(),
              n = y(e);
            if (((i = arguments), (a = this), (u = e), n)) {
              if (void 0 === s)
                return (function (e) {
                  return (c = e), (s = setTimeout(w, t)), d ? h(e) : l;
                })(u);
              if (f) return (s = setTimeout(w, t)), h(u);
            }
            return void 0 === s && (s = setTimeout(w, t)), l;
          }
          return (
            (t = x(t) || 0),
            b(n) &&
              ((d = !!n.leading),
              (o = (f = "maxWait" in n) ? v(x(n.maxWait) || 0, t) : o),
              (p = "trailing" in n ? !!n.trailing : p)),
            (k.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (i = u = a = s = void 0);
            }),
            (k.flush = function () {
              return void 0 === s ? l : S(g());
            }),
            k
          );
        }
        function b(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function x(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  h.call(e) == a)
              );
            })(e)
          )
            return i;
          if (b(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = b(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, "");
          var n = s.test(e);
          return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e;
        }
        e.exports = function (e, t, n) {
          var i = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(r);
          return (
            b(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (a = "trailing" in n ? !!n.trailing : a)),
            y(e, t, { leading: i, maxWait: t, trailing: a })
          );
        };
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(9047);
        function i() {}
        function a() {}
        (a.resetWarningCache = i),
          (e.exports = function () {
            function e(e, t, n, i, a, o) {
              if (o !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: i,
            };
            return (n.PropTypes = n), n;
          });
      },
      2007: function (e, t, n) {
        e.exports = n(888)();
      },
      9047: function (e) {
        
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      4463: function (e, t, n) {
        
        var r = n(2791),
          i = n(5296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = m.hasOwnProperty(t) ? m[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          A = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          z = Object.assign;
        function B(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var V = !1;
        function F(e, t) {
          if (!e || V) return "";
          V = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l])) {
                        var s = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case A:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === A ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function _(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = _(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          J(e, t);
          var n = _(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, _(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + _(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: _(n) };
        }
        function ae(e, t) {
          var n = _(t.value),
            r = _(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ae = null;
        function Ee(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof Se) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = wi(t)), Se(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          ke ? (Ae ? Ae.push(e) : (Ae = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Ae;
            if (((Ae = ke = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Te() {}
        var Oe = !1;
        function Ne(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Oe = !1), (null !== ke || null !== Ae) && (Te(), Ce());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wi(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            Le = !1;
          }
        function Re(e, t, n, r, i, a, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          ze = null,
          Be = !1,
          Ve = null,
          Fe = {
            onError: function (e) {
              (De = !0), (ze = e);
            },
          };
        function He(e, t, n, r, i, a, o, l, s) {
          (De = !1), (ze = null), Re.apply(Fe, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function _e(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function Qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return _e(i), e;
                    if (o === r) return _e(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var l = !1, s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = i.unstable_scheduleCallback,
          Xe = i.unstable_cancelCallback,
          Ge = i.unstable_shouldYield,
          Ke = i.unstable_requestPaint,
          Je = i.unstable_now,
          Ze = i.unstable_getCurrentPriorityLevel,
          $e = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~i;
            0 !== l ? (r = dt(l)) : 0 !== (a &= o) && (r = dt(a));
          } else 0 !== (o = n & ~i) ? (r = dt(o)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          kt,
          At,
          Et,
          jt = !1,
          Ct = [],
          Pt = null,
          Tt = null,
          Ot = null,
          Nt = new Map(),
          Mt = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function zt(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Vt(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function Ft() {
          (jt = !1),
            null !== Pt && Bt(Pt) && (Pt = null),
            null !== Tt && Bt(Tt) && (Tt = null),
            null !== Ot && Bt(Ot) && (Ot = null),
            Nt.forEach(Vt),
            Mt.forEach(Vt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Ft)));
        }
        function Wt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Ct.length) {
            Ht(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ht(Pt, e),
              null !== Tt && Ht(Tt, e),
              null !== Ot && Ht(Ot, e),
              Nt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Lt.shift();
        }
        var Ut = x.ReactCurrentBatchConfig,
          _t = !0;
        function Qt(e, t, n, r) {
          var i = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = a);
          }
        }
        function qt(e, t, n, r) {
          var i = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = a);
          }
        }
        function Yt(e, t, n, r) {
          if (_t) {
            var i = Gt(e, t, n, r);
            if (null === i) _r(e, t, r, Xt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Pt = Dt(Pt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Tt = Dt(Tt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Ot = Dt(Ot, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Nt.set(a, Dt(Nt.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Mt.set(a, Dt(Mt.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && wt(a),
                  null === (a = Gt(e, t, n, r)) && _r(e, t, r, Xt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else _r(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Gt(e, t, n, r) {
          if (((Xt = null), null !== (e = yi((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            i = "value" in Jt ? Jt.value : Jt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return ($t = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = z({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = z({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(z({}, pn, { dataTransfer: 0 })),
          mn = an(z({}, dn, { relatedTarget: 0 })),
          gn = an(
            z({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = z({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(z({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function An(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function En() {
          return An;
        }
        var jn = z({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(jn),
          Pn = an(
            z({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = an(
            z({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          On = an(
            z({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = z({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(Nn),
          Ln = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          Rn = null;
        c && "documentMode" in document && (Rn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Rn,
          zn = c && (!In || (Rn && 8 < Rn && 11 >= Rn)),
          Bn = String.fromCharCode(32),
          Vn = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function _n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          je(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Yn = null;
        function Xn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (Y(xi(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Jn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Yn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Yn)) {
            var t = [];
            Qn(t, Yn, e, we(e)), Ne(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Yn);
        }
        function ar(e, t) {
          if ("click" === e) return Gn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!d.call(t, i) || !lr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== X(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Ar = {};
        function Er(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Ar) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Ar = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var jr = Er("animationend"),
          Cr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Tr = Er("transitionend"),
          Or = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Nr.length; Lr++) {
          var Ir = Nr[Lr];
          Mr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Mr(jr, "onAnimationEnd"),
          Mr(Cr, "onAnimationIteration"),
          Mr(Pr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(Tr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, l, s, u) {
              if ((He.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = ze;
                (De = !1), (ze = null), Be || ((Be = !0), (Ve = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && i.isPropagationStopped()))
                    break e;
                  zr(i, l, u), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && i.isPropagationStopped())
                  )
                    break e;
                  zr(i, l, u), (a = s);
                }
            }
          }
          if (Be) throw ((e = Ve), (Be = !1), (Ve = null), e);
        }
        function Vr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Fr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var i = Qt;
              break;
            case 4:
              i = qt;
              break;
            default:
              i = Yt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function _r(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = yi(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = a,
              i = we(n),
              o = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tn;
                    break;
                  case jr:
                  case Cr:
                  case Pr:
                    s = gn;
                    break;
                  case Tr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== f &&
                        null != (v = Me(h, f)) &&
                        c.push(Qr(h, v, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[hi])) &&
                  (s || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : xi(s)),
                  (p = null == u ? l : xi(u)),
                  ((l = new c(v, h + "leave", s, n, i)).target = d),
                  (l.relatedTarget = p),
                  (v = null),
                  yi(i) === r &&
                    (((c = new c(f, h + "enter", u, n, i)).target = p),
                    (c.relatedTarget = d),
                    (v = c)),
                  (d = v),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, v = f; v; v = Yr(v)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (f = Yr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Yr(c)), (f = Yr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(o, l, s, c, !1),
                  null !== u && null !== d && Xr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xi(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Kn;
              else if (_n(l))
                if (Jn) m = or;
                else {
                  m = ir;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ar);
              switch (
                (m && (m = m(e, r))
                  ? Qn(o, m, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? xi(r) : window),
                e)
              ) {
                case "focusin":
                  (_n(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Zt = "value" in (Jt = i) ? Jt.value : Jt.textContent),
                      (Wn = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, i)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Vn = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Vn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!In && Fn(e, t))
                          ? ((e = en()), ($t = Zt = Jt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((i = new xn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Br(o, t);
          });
        }
        function Qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Me(e, n)) && r.unshift(Qr(e, a, i)),
              null != (a = Me(e, t)) && r.push(Qr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              i
                ? null != (s = Me(n, a)) && o.unshift(Qr(n, s, l))
                : i || (null != (s = Me(n, a)) && o.push(Qr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(a(425));
        }
        function $r() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(li);
                }
              : ri;
        function li(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function si(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Wt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var di = Math.random().toString(36).slice(2),
          fi = "__reactFiber$" + di,
          pi = "__reactProps$" + di,
          hi = "__reactContainer$" + di,
          vi = "__reactEvents$" + di,
          mi = "__reactListeners$" + di,
          gi = "__reactHandles$" + di;
        function yi(e) {
          var t = e[fi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[fi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[fi])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[fi] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wi(e) {
          return e[pi] || null;
        }
        var Si = [],
          ki = -1;
        function Ai(e) {
          return { current: e };
        }
        function Ei(e) {
          0 > ki || ((e.current = Si[ki]), (Si[ki] = null), ki--);
        }
        function ji(e, t) {
          ki++, (Si[ki] = e.current), (e.current = t);
        }
        var Ci = {},
          Pi = Ai(Ci),
          Ti = Ai(!1),
          Oi = Ci;
        function Ni(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ci;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Mi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Li() {
          Ei(Ti), Ei(Pi);
        }
        function Ii(e, t, n) {
          if (Pi.current !== Ci) throw Error(a(168));
          ji(Pi, t), ji(Ti, n);
        }
        function Ri(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, U(e) || "Unknown", i));
          return z({}, n, r);
        }
        function Di(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ci),
            (Oi = Pi.current),
            ji(Pi, e),
            ji(Ti, Ti.current),
            !0
          );
        }
        function zi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Ri(e, t, Oi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ei(Ti),
              Ei(Pi),
              ji(Pi, e))
            : Ei(Ti),
            ji(Ti, n);
        }
        var Bi = null,
          Vi = !1,
          Fi = !1;
        function Hi(e) {
          null === Bi ? (Bi = [e]) : Bi.push(e);
        }
        function Wi() {
          if (!Fi && null !== Bi) {
            Fi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bi = null), (Vi = !1);
            } catch (i) {
              throw (null !== Bi && (Bi = Bi.slice(e + 1)), Ye($e, Wi), i);
            } finally {
              (bt = t), (Fi = !1);
            }
          }
          return null;
        }
        var Ui = [],
          _i = 0,
          Qi = null,
          qi = 0,
          Yi = [],
          Xi = 0,
          Gi = null,
          Ki = 1,
          Ji = "";
        function Zi(e, t) {
          (Ui[_i++] = qi), (Ui[_i++] = Qi), (Qi = e), (qi = t);
        }
        function $i(e, t, n) {
          (Yi[Xi++] = Ki), (Yi[Xi++] = Ji), (Yi[Xi++] = Gi), (Gi = e);
          var r = Ki;
          e = Ji;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Ki = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Ji = a + e);
          } else (Ki = (1 << a) | (n << i) | r), (Ji = e);
        }
        function ea(e) {
          null !== e.return && (Zi(e, 1), $i(e, 1, 0));
        }
        function ta(e) {
          for (; e === Qi; )
            (Qi = Ui[--_i]), (Ui[_i] = null), (qi = Ui[--_i]), (Ui[_i] = null);
          for (; e === Gi; )
            (Gi = Yi[--Xi]),
              (Yi[Xi] = null),
              (Ji = Yi[--Xi]),
              (Yi[Xi] = null),
              (Ki = Yi[--Xi]),
              (Yi[Xi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Mu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Gi ? { id: Ki, overflow: Ji } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Mu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = na;
                t && la(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function da(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (sa(e)) throw (fa(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ui(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fa() {
          for (var e = ra; e; ) e = ui(e.nextSibling);
        }
        function pa() {
          (ra = na = null), (ia = !1);
        }
        function ha(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var va = x.ReactCurrentBatchConfig;
        function ma(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ga = Ai(null),
          ya = null,
          ba = null,
          xa = null;
        function wa() {
          xa = ba = ya = null;
        }
        function Sa(e) {
          var t = ga.current;
          Ei(ga), (e._currentValue = t);
        }
        function ka(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Aa(e, t) {
          (ya = e),
            (xa = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Ea(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ba)
            ) {
              if (null === ya) throw Error(a(308));
              (ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return t;
        }
        var ja = null;
        function Ca(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Pa(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Ca(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Ta(e, r)
          );
        }
        function Ta(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Oa = !1;
        function Na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ma(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function La(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ia(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Ta(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Ca(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Ta(e, n)
          );
        }
        function Ra(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Da(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function za(e, t, n, r) {
          var i = e.updateQueue;
          Oa = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = i.baseState;
            for (o = 0, c = u = s = null, l = a; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((f = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = z({}, d, f);
                      break e;
                    case 2:
                      Oa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = i.effects) ? (i.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (i.lastBaseUpdate = f),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (i.baseState = s),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (zs |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Ba(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Va = new r.Component().refs;
        function Fa(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ha = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              a = La(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, i)) && (ru(t, e, i, r), Ra(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              a = La(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, i)) && (ru(t, e, i, r), Ra(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              i = La(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Ia(e, i, r)) && (ru(t, e, r, n), Ra(t, e, r));
          },
        };
        function Wa(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, a);
        }
        function Ua(e, t, n) {
          var r = !1,
            i = Ci,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ea(a))
              : ((i = Mi(t) ? Oi : Pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ni(e, i)
                  : Ci)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ha),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function _a(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ha.enqueueReplaceState(t, t.state, null);
        }
        function Qa(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = Va), Na(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ea(a))
            : ((a = Mi(t) ? Oi : Pi.current), (i.context = Ni(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Fa(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Ha.enqueueReplaceState(i, i.state, null),
              za(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function qa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === Va && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ya(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xa(e) {
          return (0, e._init)(e._payload);
        }
        function Ga(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === M &&
                    Xa(a) === t.type))
              ? (((r = i(t, n.props)).ref = qa(e, t, n)), (r.return = e), r)
              : (((r = Ru(n.type, n.key, n.props, null, e.mode, r)).ref = qa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Bu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ru(t.type, t.key, t.props, null, e.mode, n)).ref = qa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Vu(t, e.mode, n)).return = e), t;
                case M:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              Ya(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? u(e, t, n, r) : null;
                case S:
                  return n.key === i ? c(e, t, n, r) : null;
                case M:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== i ? null : d(e, t, n, r, null);
              Ya(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || R(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              Ya(t, r);
            }
            return null;
          }
          function v(i, a, l, s) {
            for (
              var u = null, c = null, d = a, v = (a = 0), m = null;
              null !== d && v < l.length;
              v++
            ) {
              d.index > v ? ((m = d), (d = null)) : (m = d.sibling);
              var g = p(i, d, l[v], s);
              if (null === g) {
                null === d && (d = m);
                break;
              }
              e && d && null === g.alternate && t(i, d),
                (a = o(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = m);
            }
            if (v === l.length) return n(i, d), ia && Zi(i, v), u;
            if (null === d) {
              for (; v < l.length; v++)
                null !== (d = f(i, l[v], s)) &&
                  ((a = o(d, a, v)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ia && Zi(i, v), u;
            }
            for (d = r(i, d); v < l.length; v++)
              null !== (m = h(d, i, v, l[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? v : m.key),
                (a = o(m, a, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Zi(i, v),
              u
            );
          }
          function m(i, l, s, u) {
            var c = R(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), v = l, m = (l = 0), g = null, y = s.next();
              null !== v && !y.done;
              m++, y = s.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(i, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (l = o(b, l, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (v = g);
            }
            if (y.done) return n(i, v), ia && Zi(i, m), c;
            if (null === v) {
              for (; !y.done; m++, y = s.next())
                null !== (y = f(i, y.value, u)) &&
                  ((l = o(y, l, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ia && Zi(i, m), c;
            }
            for (v = r(i, v); !y.done; m++, y = s.next())
              null !== (y = h(v, i, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Zi(i, m),
              c
            );
          }
          return function e(r, a, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === M &&
                            Xa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = qa(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((a = Du(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = a))
                      : (((s = Ru(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = qa(r, a, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Vu(o, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case M:
                  return e(r, a, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, a, o, s);
              if (R(o)) return m(r, a, o, s);
              Ya(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Bu(o, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Ka = Ga(!0),
          Ja = Ga(!1),
          Za = {},
          $a = Ai(Za),
          eo = Ai(Za),
          to = Ai(Za);
        function no(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function ro(e, t) {
          switch ((ji(to, t), ji(eo, e), ji($a, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ei($a), ji($a, t);
        }
        function io() {
          Ei($a), Ei(eo), Ei(to);
        }
        function ao(e) {
          no(to.current);
          var t = no($a.current),
            n = se(t, e.type);
          t !== n && (ji(eo, e), ji($a, n));
        }
        function oo(e) {
          eo.current === e && (Ei($a), Ei(eo));
        }
        var lo = Ai(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          go = null,
          yo = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function So() {
          throw Error(a(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ao(e, t, n, r, i, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (go = mo = null),
                (t.updateQueue = null),
                (fo.current = ul),
                (e = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (go = mo = vo = null),
            (yo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Eo() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function jo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function Co() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (mo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function Po(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function To(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = mo,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var l = i.next;
              (i.next = o.next), (o.next = l);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((ho & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (vo.lanes |= d),
                  (zs |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (vo.lanes |= o), (zs |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oo(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== i);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function No() {}
        function Mo(e, t) {
          var n = vo,
            r = Co(),
            i = t(),
            o = !lr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (xl = !0)),
            (r = r.queue),
            _o(Ro.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Vo(9, Io.bind(null, n, r, i, t), void 0, null),
              null === Os)
            )
              throw Error(a(349));
            0 !== (30 & ho) || Lo(n, t, i);
          }
          return i;
        }
        function Lo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Io(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && zo(e);
        }
        function Ro(e, t, n) {
          return n(function () {
            Do(t) && zo(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zo(e) {
          var t = Ta(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Bo(e) {
          var t = jo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Vo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fo() {
          return Co().memoizedState;
        }
        function Ho(e, t, n, r) {
          var i = jo();
          (vo.flags |= e),
            (i.memoizedState = Vo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wo(e, t, n, r) {
          var i = Co();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((a = o.destroy), null !== r && ko(r, o.deps)))
              return void (i.memoizedState = Vo(t, n, a, r));
          }
          (vo.flags |= e), (i.memoizedState = Vo(1 | t, n, a, r));
        }
        function Uo(e, t) {
          return Ho(8390656, 8, e, t);
        }
        function _o(e, t) {
          return Wo(2048, 8, e, t);
        }
        function Qo(e, t) {
          return Wo(4, 2, e, t);
        }
        function qo(e, t) {
          return Wo(4, 4, e, t);
        }
        function Yo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wo(4, 4, Yo.bind(null, t, e), n)
          );
        }
        function Go() {}
        function Ko(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Jo(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (zs |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return Co().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            il(t, n);
          else if (null !== (n = Pa(e, t, n, r))) {
            ru(n, e, r, tu()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) il(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), Ca(t))
                      : ((i.next = s.next), (s.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Pa(e, t, i, r)) &&
              (ru(n, e, r, (i = tu())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function il(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Ea,
            useCallback: So,
            useContext: So,
            useEffect: So,
            useImperativeHandle: So,
            useInsertionEffect: So,
            useLayoutEffect: So,
            useMemo: So,
            useReducer: So,
            useRef: So,
            useState: So,
            useDebugValue: So,
            useDeferredValue: So,
            useTransition: So,
            useMutableSource: So,
            useSyncExternalStore: So,
            useId: So,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ea,
            useCallback: function (e, t) {
              return (jo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ea,
            useEffect: Uo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ho(4194308, 4, Yo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ho(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ho(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = jo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = jo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (jo().memoizedState = e);
            },
            useState: Bo,
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return (jo().memoizedState = e);
            },
            useTransition: function () {
              var e = Bo(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (jo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                i = jo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(a(349));
                0 !== (30 & ho) || Lo(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Uo(Ro.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Vo(9, Io.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = jo(),
                t = Os.identifierPrefix;
              if (ia) {
                var n = Ji;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ki & ~(1 << (32 - ot(Ki) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ea,
            useCallback: Ko,
            useContext: Ea,
            useEffect: _o,
            useImperativeHandle: Xo,
            useInsertionEffect: Qo,
            useLayoutEffect: qo,
            useMemo: Jo,
            useReducer: To,
            useRef: Fo,
            useState: function () {
              return To(Po);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return Zo(Co(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [To(Po)[0], Co().memoizedState];
            },
            useMutableSource: No,
            useSyncExternalStore: Mo,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ea,
            useCallback: Ko,
            useContext: Ea,
            useEffect: _o,
            useImperativeHandle: Xo,
            useInsertionEffect: Qo,
            useLayoutEffect: qo,
            useMemo: Jo,
            useReducer: Oo,
            useRef: Fo,
            useState: function () {
              return Oo(Po);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              var t = Co();
              return null === mo
                ? (t.memoizedState = e)
                : Zo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(Po)[0], Co().memoizedState];
            },
            useMutableSource: No,
            useSyncExternalStore: Mo,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = La(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qs || ((Qs = !0), (qs = r)), fl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = La(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Ys ? (Ys = new Set([this])) : Ys.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = ju.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = La(-1, 1)).tag = 2), Ia(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Ja(t, null, n, r) : Ka(t, e.child, n, r);
        }
        function Sl(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Aa(t, i),
            (r = Ao(e, t, n, r, a, i)),
            (n = Eo()),
            null === e || xl
              ? (ia && n && ea(t), (t.flags |= 1), wl(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ql(e, t, i))
          );
        }
        function kl(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Lu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ru(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Al(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Ql(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Al(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Ql(e, t, i);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Cl(e, t, n, r, i);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ji(Is, Ls),
                (Ls |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  ji(Is, Ls),
                  (Ls |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                ji(Is, Ls),
                (Ls |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ji(Is, Ls),
              (Ls |= r);
          return wl(e, t, i, n), t.child;
        }
        function jl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, i) {
          var a = Mi(n) ? Oi : Pi.current;
          return (
            (a = Ni(t, a)),
            Aa(t, i),
            (n = Ao(e, t, n, r, a, i)),
            (r = Eo()),
            null === e || xl
              ? (ia && r && ea(t), (t.flags |= 1), wl(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ql(e, t, i))
          );
        }
        function Pl(e, t, n, r, i) {
          if (Mi(n)) {
            var a = !0;
            Di(t);
          } else a = !1;
          if ((Aa(t, i), null === t.stateNode))
            _l(e, t), Ua(t, n, r), Qa(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ea(u))
              : (u = Ni(t, (u = Mi(n) ? Oi : Pi.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && _a(t, o, r, u)),
              (Oa = !1);
            var f = t.memoizedState;
            (o.state = f),
              za(t, r, o, i),
              (s = t.memoizedState),
              l !== r || f !== s || Ti.current || Oa
                ? ("function" === typeof c &&
                    (Fa(t, n, c, r), (s = t.memoizedState)),
                  (l = Oa || Wa(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ma(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : ma(t.type, l)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ea(s))
                : (s = Ni(t, (s = Mi(n) ? Oi : Pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== s) && _a(t, o, r, s)),
              (Oa = !1),
              (f = t.memoizedState),
              (o.state = f),
              za(t, r, o, i);
            var h = t.memoizedState;
            l !== d || f !== h || Ti.current || Oa
              ? ("function" === typeof p &&
                  (Fa(t, n, p, r), (h = t.memoizedState)),
                (u = Oa || Wa(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Tl(e, t, n, r, a, i);
        }
        function Tl(e, t, n, r, i, a) {
          jl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && zi(t, n, !1), Ql(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ka(t, e.child, null, a)),
                (t.child = Ka(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = r.state),
            i && zi(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ii(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ii(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Nl(e, t, n, r, i) {
          return pa(), ha(i), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Ml,
          Ll,
          Il,
          Rl,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Bl(e, t, n) {
          var r,
            i = t.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            ji(lo, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  l
                    ? ((i = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = zu(s, i, 0, null)),
                      (e = Du(e, i, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = zl(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Vl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = dl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = zu(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Du(o, i, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ka(t, e.child, null, l),
                    (t.child.memoizedState = zl(l)),
                    (t.memoizedState = Dl),
                    o);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fl(e, t, l, (r = dl((o = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Ta(e, i), ru(r, e, i, -1));
                }
                return mu(), Fl(e, t, l, (r = dl(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((Yi[Xi++] = Ki),
                    (Yi[Xi++] = Ji),
                    (Yi[Xi++] = Gi),
                    (Ki = e.id),
                    (Ji = e.overflow),
                    (Gi = t)),
                  (t = Vl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, i, r, o, n);
          if (l) {
            (l = i.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = Iu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Iu(r, l))
                : ((l = Du(l, s, n, null)).flags |= 2),
              (l.return = t),
              (i.return = t),
              (i.sibling = l),
              (t.child = i),
              (i = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? zl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              i
            );
          }
          return (
            (e = (l = e.child).sibling),
            (i = Iu(l, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Vl(e, t) {
          return (
            ((t = zu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && ha(r),
            Ka(t, e.child, null, n),
            ((e = Vl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Hl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ka(e.return, t, n);
        }
        function Wl(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Hl(e, n, t);
                else if (19 === e.tag) Hl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ji(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Wl(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === so(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Wl(t, !0, n, null, a);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function _l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ql(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yl(t), null;
            case 1:
            case 17:
              return Mi(t.type) && Li(), Yl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                io(),
                Ei(Ti),
                Ei(Pi),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (lu(aa), (aa = null)))),
                Ll(e, t),
                Yl(t),
                null
              );
            case 5:
              oo(t);
              var i = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Il(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Yl(t), null;
                }
                if (((e = no($a.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fi] = t), (r[pi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Vr("cancel", r), Vr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Vr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Rr.length; i++) Vr(Rr[i], r);
                      break;
                    case "source":
                      Vr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Vr("error", r), Vr("load", r);
                      break;
                    case "details":
                      Vr("toggle", r);
                      break;
                    case "input":
                      K(r, o), Vr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Vr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Vr("invalid", r);
                  }
                  for (var s in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Vr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), $(r, o, !0);
                      break;
                    case "textarea":
                      q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fi] = t),
                    (e[pi] = r),
                    Ml(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Vr("cancel", e), Vr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Vr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Rr.length; i++) Vr(Rr[i], e);
                        i = r;
                        break;
                      case "source":
                        Vr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Vr("error", e), Vr("load", e), (i = r);
                        break;
                      case "details":
                        Vr("toggle", e), (i = r);
                        break;
                      case "input":
                        K(e, r), (i = G(e, r)), Vr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = z({}, r, { value: void 0 })),
                          Vr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Vr("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Vr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), $(e, r, !1);
                        break;
                      case "textarea":
                        q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + _(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Yl(t), null;
            case 6:
              if (e && null != t.stateNode) Rl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = no(to.current)), no($a.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fi] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fi] = t),
                    (t.stateNode = r);
              }
              return Yl(t), null;
            case 13:
              if (
                (Ei(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fa(), pa(), (t.flags |= 98560), (o = !1);
                else if (((o = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[fi] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yl(t), (o = !1);
                } else null !== aa && (lu(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === Rs && (Rs = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Yl(t),
                  null);
            case 4:
              return (
                io(),
                Ll(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Yl(t),
                null
              );
            case 10:
              return Sa(t.type._context), Yl(t), null;
            case 19:
              if ((Ei(lo), null === (o = t.memoizedState))) return Yl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) ql(o, !1);
                else {
                  if (0 !== Rs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            ql(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ji(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Je() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    ql(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ql(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ia)
                    )
                      return Yl(t), null;
                  } else
                    2 * Je() - o.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ql(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = lo.current),
                  ji(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Yl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (Yl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Gl(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Mi(t.type) && Li(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                io(),
                Ei(Ti),
                Ei(Pi),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ei(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ei(lo), null;
            case 4:
              return io(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ml = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function () {}),
          (Il = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), no($a.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = G(e, i)), (r = G(e, r)), (o = []);
                  break;
                case "select":
                  (i = z({}, i, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var s = i[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Vr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Rl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Kl = !1,
          Jl = !1,
          Zl = "function" === typeof WeakSet ? WeakSet : Set,
          $l = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function is(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fi],
              delete t[pi],
              delete t[vi],
              delete t[mi],
              delete t[gi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Jl || es(n, t);
            case 6:
              var r = ds,
                i = fs;
              (ds = null),
                ps(e, t, n),
                (fs = i),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? si(e.parentNode, n)
                      : 1 === e.nodeType && si(e, n),
                    Wt(e))
                  : si(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (i = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Jl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Jl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Jl = (r = Jl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Jl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(a(160));
                hs(o, l, i), (ds = null), (fs = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Eu(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), is(3, e);
                } catch (m) {
                  Eu(e, e.return, m);
                }
                try {
                  rs(5, e, e.return);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  fe(i, "");
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      J(i, o),
                      be(s, l);
                    var c = be(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? me(i, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(i, f)
                        : "children" === d
                        ? fe(i, f)
                        : b(i, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Z(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(i, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[pi] = o;
                  } catch (m) {
                    Eu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), ys(e);
              break;
            case 13:
              ms(t, e),
                ys(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Ws = Je())),
                4 & r && vs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Jl = (c = Jl) || d), ms(t, e), (Jl = c))
                  : ms(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for ($l = e, d = e.child; null !== d; ) {
                    for (f = $l = d; null !== $l; ) {
                      switch (((h = (p = $l).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Eu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($l = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (i = f.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ve("display", l)));
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), ys(e), 4 & r && vs(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (fe(i, ""), (r.flags &= -33)),
                    cs(e, ss(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  us(e, ss(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          ($l = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $l; ) {
            var i = $l,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Kl;
              if (!o) {
                var l = i.alternate,
                  s = (null !== l && null !== l.memoizedState) || Jl;
                l = Kl;
                var u = Jl;
                if (((Kl = o), (Jl = s) && !u))
                  for ($l = i; null !== $l; )
                    (s = (o = $l).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ks(i)
                        : null !== s
                        ? ((s.return = o), ($l = s))
                        : ks(i);
                for (; null !== a; ) ($l = a), xs(a, t, n), (a = a.sibling);
                ($l = i), (Kl = l), (Jl = u);
              }
              ws(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), ($l = a))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl || is(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Jl)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ma(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ba(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ba(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Jl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              $l = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function Ss(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (t === e) {
              $l = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function ks(e) {
          for (; null !== $l; ) {
            var t = $l;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    is(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, i, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, a, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              $l = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), ($l = l);
              break;
            }
            $l = t.return;
          }
        }
        var As,
          Es = Math.ceil,
          js = x.ReactCurrentDispatcher,
          Cs = x.ReactCurrentOwner,
          Ps = x.ReactCurrentBatchConfig,
          Ts = 0,
          Os = null,
          Ns = null,
          Ms = 0,
          Ls = 0,
          Is = Ai(0),
          Rs = 0,
          Ds = null,
          zs = 0,
          Bs = 0,
          Vs = 0,
          Fs = null,
          Hs = null,
          Ws = 0,
          Us = 1 / 0,
          _s = null,
          Qs = !1,
          qs = null,
          Ys = null,
          Xs = !1,
          Gs = null,
          Ks = 0,
          Js = 0,
          Zs = null,
          $s = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ts) ? Je() : -1 !== $s ? $s : ($s = Je());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ms
            ? Ms & -Ms
            : null !== va.transition
            ? (0 === eu && (eu = vt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Js) throw ((Js = 0), (Zs = null), Error(a(185)));
          gt(e, n, r),
            (0 !== (2 & Ts) && e === Os) ||
              (e === Os && (0 === (2 & Ts) && (Bs |= n), 4 === Rs && su(e, Ms)),
              iu(e, r),
              1 === n &&
                0 === Ts &&
                0 === (1 & t.mode) &&
                ((Us = Je() + 500), Vi && Wi()));
        }
        function iu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                l = 1 << o,
                s = i[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (i[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? Ms : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Vi = !0), Hi(e);
                  })(uu.bind(null, e))
                : Hi(uu.bind(null, e)),
                oi(function () {
                  0 === (6 & Ts) && Wi();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if ((($s = -1), (eu = 0), 0 !== (6 & Ts))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Ms : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var i = Ts;
            Ts |= 2;
            var o = vu();
            for (
              (Os === e && Ms === t) ||
              ((_s = null), (Us = Je() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            wa(),
              (js.current = o),
              (Ts = i),
              null !== Ns ? (t = 0) : ((Os = null), (Ms = 0), (t = Rs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = ou(e, i))),
              1 === t)
            )
              throw ((n = Ds), pu(e, 0), su(e, r), iu(e, Je()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(a(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = Ds), pu(e, 0), su(e, r), iu(e, Je()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, Hs, _s);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ws + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(Su.bind(null, e, Hs, _s), t);
                    break;
                  }
                  Su(e, Hs, _s);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > i && (i = l), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(Su.bind(null, e, Hs, _s), r);
                    break;
                  }
                  Su(e, Hs, _s);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return iu(e, Je()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Hs), (Hs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Hs ? (Hs = e) : Hs.push.apply(Hs, e);
        }
        function su(e, t) {
          for (
            t &= ~Vs,
              t &= ~Bs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ts)) throw Error(a(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return iu(e, Je()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Ds), pu(e, 0), su(e, t), iu(e, Je()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Hs, _s),
            iu(e, Je()),
            null
          );
        }
        function cu(e, t) {
          var n = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && ((Us = Je() + 500), Vi && Wi());
          }
        }
        function du(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ts) && ku();
          var t = Ts;
          Ts |= 1;
          var n = Ps.transition,
            r = bt;
          try {
            if (((Ps.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ps.transition = n), 0 === (6 & (Ts = t)) && Wi();
          }
        }
        function fu() {
          (Ls = Is.current), Ei(Is);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Li();
                  break;
                case 3:
                  io(), Ei(Ti), Ei(Pi), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  Ei(lo);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ns = e = Iu(e.current, null)),
            (Ms = Ls = t),
            (Rs = 0),
            (Ds = null),
            (Vs = Bs = zs = 0),
            (Hs = Fs = null),
            null !== ja)
          ) {
            for (t = 0; t < ja.length; t++)
              if (null !== (r = (n = ja[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            ja = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((wa(), (fo.current = ol), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = mo = vo = null),
                (bo = !1),
                (xo = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Rs = 1), (Ds = t), (Ns = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ms),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      ha(cl(u, s));
                    break e;
                  }
                }
                (o = u = cl(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Fs ? (Fs = [o]) : Fs.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Da(o, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ys || !Ys.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Da(o, vl(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (x) {
              (t = x), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function vu() {
          var e = js.current;
          return (js.current = ol), null === e ? ol : e;
        }
        function mu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === Os ||
              (0 === (268435455 & zs) && 0 === (268435455 & Bs)) ||
              su(Os, Ms);
        }
        function gu(e, t) {
          var n = Ts;
          Ts |= 2;
          var r = vu();
          for ((Os === e && Ms === t) || ((_s = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (i) {
              hu(e, i);
            }
          if ((wa(), (Ts = n), (js.current = r), null !== Ns))
            throw Error(a(261));
          return (Os = null), (Ms = 0), Rs;
        }
        function yu() {
          for (; null !== Ns; ) xu(Ns);
        }
        function bu() {
          for (; null !== Ns && !Ge(); ) xu(Ns);
        }
        function xu(e) {
          var t = As(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ns = t),
            (Cs.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, Ls))) return void (Ns = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (Rs = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === Rs && (Rs = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            i = Ps.transition;
          try {
            (Ps.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Gs);
                if (0 !== (6 & Ts)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Os && ((Ns = Os = null), (Ms = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ps.transition), (Ps.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ei = _t), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== i && 3 !== f.nodeType) ||
                                    (s = l + i),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === i && (s = l),
                                    p === o && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          _t = !1,
                          $l = t;
                        null !== $l;

                      )
                        if (
                          ((e = (t = $l).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($l = e);
                        else
                          for (; null !== $l; ) {
                            t = $l;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : ma(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Eu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($l = e);
                              break;
                            }
                            $l = t.return;
                          }
                      (v = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ti),
                    (_t = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    bs(n, e, i),
                    Ke(),
                    (Ts = s),
                    (bt = l),
                    (Ps.transition = o);
                } else e.current = n;
                if (
                  (Xs && ((Xs = !1), (Gs = e), (Ks = i)),
                  (o = e.pendingLanes),
                  0 === o && (Ys = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  iu(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Qs) throw ((Qs = !1), (e = qs), (qs = null), e);
                0 !== (1 & Ks) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zs
                      ? Js++
                      : ((Js = 0), (Zs = e))
                    : (Js = 0),
                  Wi();
              })(e, t, n, r);
          } finally {
            (Ps.transition = i), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Gs) {
            var e = xt(Ks),
              t = Ps.transition,
              n = bt;
            try {
              if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Ks = 0), 0 !== (6 & Ts)))
                  throw Error(a(331));
                var i = Ts;
                for (Ts |= 4, $l = e.current; null !== $l; ) {
                  var o = $l,
                    l = o.child;
                  if (0 !== (16 & $l.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for ($l = c; null !== $l; ) {
                          var d = $l;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), ($l = f);
                          else
                            for (; null !== $l; ) {
                              var p = (d = $l).sibling,
                                h = d.return;
                              if ((os(d), d === c)) {
                                $l = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($l = p);
                                break;
                              }
                              $l = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      $l = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), ($l = l);
                  else
                    e: for (; null !== $l; ) {
                      if (0 !== (2048 & (o = $l).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), ($l = y);
                        break e;
                      }
                      $l = o.return;
                    }
                }
                var b = e.current;
                for ($l = b; null !== $l; ) {
                  var x = (l = $l).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), ($l = x);
                  else
                    e: for (l = b; null !== $l; ) {
                      if (0 !== (2048 & (s = $l).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              is(9, s);
                          }
                        } catch (S) {
                          Eu(s, s.return, S);
                        }
                      if (s === l) {
                        $l = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), ($l = w);
                        break e;
                      }
                      $l = s.return;
                    }
                }
                if (
                  ((Ts = i),
                  Wi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ps.transition = t);
            }
          }
          return !1;
        }
        function Au(e, t, n) {
          (e = Ia(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), iu(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Au(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Au(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ys || !Ys.has(r)))
                ) {
                  (t = Ia(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), iu(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ju(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Ms & n) === n &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Ms) === Ms && 500 > Je() - Ws)
                ? pu(e, 0)
                : (Vs |= n)),
            iu(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ta(e, t)) && (gt(e, t, n), iu(e, n));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Ou(e, t) {
          return Ye(e, t);
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Mu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Mu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ru(e, t, n, r, i, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Du(n.children, i, o, t);
              case A:
                (l = 8), (i |= 8);
                break;
              case E:
                return (
                  ((e = Mu(12, n, t, 2 | i)).elementType = E), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Mu(13, n, t, i)).elementType = T), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Mu(19, n, t, i)).elementType = O), (e.lanes = o), e
                );
              case L:
                return zu(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Mu(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Mu(7, e, r, t)).lanes = n), e;
        }
        function zu(e, t, n, r) {
          return (
            ((e = Mu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Bu(e, t, n) {
          return ((e = Mu(6, e, null, t)).lanes = n), e;
        }
        function Vu(e, t, n) {
          return (
            ((t = Mu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Hu(e, t, n, r, i, a, o, l, s) {
          return (
            (e = new Fu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Mu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Na(a),
            e
          );
        }
        function Wu(e) {
          if (!e) return Ci;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Mi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Mi(n)) return Ri(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, i, a, o, l, s) {
          return (
            ((e = Hu(n, r, !0, e, 0, a, 0, l, s)).context = Wu(null)),
            (n = e.current),
            ((a = La((r = tu()), (i = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ia(n, a, i),
            (e.current.lanes = i),
            gt(e, i, r),
            iu(e, r),
            e
          );
        }
        function _u(e, t, n, r) {
          var i = t.current,
            a = tu(),
            o = nu(i);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = La(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ia(i, t, o)) && (ru(e, i, o, a), Ra(e, i, o)),
            o
          );
        }
        function Qu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        As = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ti.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), pa();
                        break;
                      case 5:
                        ao(t);
                        break;
                      case 1:
                        Mi(t.type) && Di(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        ji(ga, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ji(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Bl(e, t, n)
                            : (ji(lo, 1 & lo.current),
                              null !== (e = Ql(e, t, n)) ? e.sibling : null);
                        ji(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          ji(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Ql(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ia && 0 !== (1048576 & t.flags) && $i(t, qi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              _l(e, t), (e = t.pendingProps);
              var i = Ni(t, Pi.current);
              Aa(t, n), (i = Ao(null, t, r, e, i, n));
              var o = Eo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Mi(r) ? ((o = !0), Di(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Na(t),
                    (i.updater = Ha),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    Qa(t, r, e, n),
                    (t = Tl(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    wl(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (_l(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ma(r, e)),
                  i)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, ma(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Pl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Ma(e, t),
                  za(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (i = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Nl(e, t, r, n, (i = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ui(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Ja(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === i)) {
                    t = Ql(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ao(t),
                null === e && ua(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                jl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Bl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ka(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Sl(e, t, r, (i = t.elementType === r ? i : ma(r, i)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = i.value),
                  ji(ga, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === i.children && !Ti.current) {
                      t = Ql(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = La(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              ka(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          ka(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Aa(t, n),
                (r = r((i = Ea(i)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ma((r = t.type), t.pendingProps)),
                kl(e, t, r, (i = ma(r.type, i)), n)
              );
            case 15:
              return Al(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ma(r, i)),
                _l(e, t),
                (t.tag = 1),
                Mi(r) ? ((e = !0), Di(t)) : (e = !1),
                Aa(t, n),
                Ua(t, r, i),
                Qa(t, r, i, n),
                Tl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Xu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = Qu(o);
                l.call(e);
              };
            }
            _u(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Qu(o);
                    a.call(e);
                  };
                }
                var o = Uu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = o),
                  (e[hi] = o.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Qu(s);
                  l.call(e);
                };
              }
              var s = Hu(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[hi] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  _u(t, s, n, r);
                }),
                s
              );
            })(n, t, e, i, r);
          return Qu(o);
        }
        (Ku.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            _u(e, t, null, null);
          }),
          (Ku.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  _u(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = At();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    iu(t, Je()),
                    0 === (6 & Ts) && ((Us = Je() + 500), Wi()));
                }
                break;
              case 13:
                du(function () {
                  var t = Ta(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Yu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Ta(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Yu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ta(e, t);
              if (null !== n) ru(n, e, t, tu());
              Yu(e, t);
            }
          }),
          (At = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = wi(r);
                      if (!i) throw Error(a(90));
                      Y(r), Z(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cu),
          (Te = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, wi, je, Ce, cu],
          },
          nc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (at = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = Xu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Hu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              l = Xu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, i, 0, o, l)),
              (e[hi] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        "use strict";
        var r = n(4164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      2592: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = o(n(2791)),
          a = o(n(7585));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "render",
                value: function () {
                  return i.default.createElement(
                    "input",
                    this.props,
                    this.props.children
                  );
                },
              },
            ]),
            t
          );
        })(i.default.Component);
        t.default = (0, a.default)(l);
      },
      5532: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          a = s(n(2791)),
          o = s(n(671)),
          l = s(n(2007));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = r({}, this.props);
                  return (
                    t.parentBindings && delete t.parentBindings,
                    a.default.createElement(
                      "div",
                      r({}, t, {
                        ref: function (t) {
                          e.props.parentBindings.domNode = t;
                        },
                      }),
                      this.props.children
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.default.Component);
        (u.propTypes = { name: l.default.string, id: l.default.string }),
          (t.default = (0, o.default)(u));
      },
      4582: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = a(n(2791)),
          i = a(n(7585));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var l = (function (e) {
          function t() {
            var e, n, i;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var a = arguments.length, l = Array(a), s = 0; s < a; s++)
              l[s] = arguments[s];
            return (
              (n = i =
                o(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(l)
                  )
                )),
              (i.render = function () {
                return r.default.createElement("a", i.props, i.props.children);
              }),
              o(i, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            t
          );
        })(r.default.Component);
        t.default = (0, i.default)(l);
      },
      5667: function (e, t, n) {
        "use strict";
        t.rU = void 0;
        var r = p(n(4582)),
          i = p(n(2592)),
          a = p(n(5532)),
          o = p(n(2338)),
          l = p(n(979)),
          s = p(n(3688)),
          u = p(n(4102)),
          c = p(n(7585)),
          d = p(n(671)),
          f = p(n(719));
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.rU = r.default),
          i.default,
          a.default,
          o.default,
          l.default,
          s.default,
          u.default,
          c.default,
          d.default,
          f.default,
          r.default,
          i.default,
          a.default,
          o.default,
          l.default,
          s.default,
          u.default,
          c.default,
          d.default,
          f.default;
      },
      719: function (e, t, n) {
        "use strict";
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
        function a(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        function l(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        var s = n(2791),
          u = (n(4164), n(5183), n(3688)),
          c = n(2338),
          d = n(2007),
          f = n(5203),
          p = {
            to: d.string.isRequired,
            containerId: d.string,
            container: d.object,
            activeClass: d.string,
            spy: d.bool,
            smooth: d.oneOfType([d.bool, d.string]),
            offset: d.number,
            delay: d.number,
            isDynamic: d.bool,
            onClick: d.func,
            duration: d.oneOfType([d.number, d.func]),
            absolute: d.bool,
            onSetActive: d.func,
            onSetInactive: d.func,
            ignoreCancelEvents: d.bool,
            hashSpy: d.bool,
            spyThrottle: d.number,
          },
          h = {
            Scroll: function (e, t) {
              console.warn("Helpers.Scroll is deprecated since v1.7.0");
              var n = t || c,
                d = (function (t) {
                  function c(e) {
                    a(this, c);
                    var t = o(
                      this,
                      (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                    );
                    return h.call(t), (t.state = { active: !1 }), t;
                  }
                  return (
                    l(c, t),
                    i(c, [
                      {
                        key: "getScrollSpyContainer",
                        value: function () {
                          var e = this.props.containerId,
                            t = this.props.container;
                          return e
                            ? document.getElementById(e)
                            : t && t.nodeType
                            ? t
                            : document;
                        },
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          if (this.props.spy || this.props.hashSpy) {
                            var e = this.getScrollSpyContainer();
                            u.isMounted(e) ||
                              u.mount(e, this.props.spyThrottle),
                              this.props.hashSpy &&
                                (f.isMounted() || f.mount(n),
                                f.mapContainer(this.props.to, e)),
                              this.props.spy &&
                                u.addStateHandler(this.stateHandler),
                              u.addSpyHandler(this.spyHandler, e),
                              this.setState({ container: e });
                          }
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          u.unmount(this.stateHandler, this.spyHandler);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = "";
                          t =
                            this.state && this.state.active
                              ? (
                                  (this.props.className || "") +
                                  " " +
                                  (this.props.activeClass || "active")
                                ).trim()
                              : this.props.className;
                          var n = r({}, this.props);
                          for (var i in p) n.hasOwnProperty(i) && delete n[i];
                          return (
                            (n.className = t),
                            (n.onClick = this.handleClick),
                            s.createElement(e, n)
                          );
                        },
                      },
                    ]),
                    c
                  );
                })(s.Component),
                h = function () {
                  var e = this;
                  (this.scrollTo = function (t, i) {
                    n.scrollTo(t, r({}, e.state, i));
                  }),
                    (this.handleClick = function (t) {
                      e.props.onClick && e.props.onClick(t),
                        t.stopPropagation && t.stopPropagation(),
                        t.preventDefault && t.preventDefault(),
                        e.scrollTo(e.props.to, e.props);
                    }),
                    (this.stateHandler = function () {
                      n.getActiveLink() !== e.props.to &&
                        (null !== e.state &&
                          e.state.active &&
                          e.props.onSetInactive &&
                          e.props.onSetInactive(),
                        e.setState({ active: !1 }));
                    }),
                    (this.spyHandler = function (t) {
                      var r = e.getScrollSpyContainer();
                      if (!f.isMounted() || f.isInitialized()) {
                        var i = e.props.to,
                          a = null,
                          o = 0,
                          l = 0,
                          s = 0;
                        if (r.getBoundingClientRect)
                          s = r.getBoundingClientRect().top;
                        if (!a || e.props.isDynamic) {
                          if (!(a = n.get(i))) return;
                          var c = a.getBoundingClientRect();
                          l = (o = c.top - s + t) + c.height;
                        }
                        var d = t - e.props.offset,
                          p = d >= Math.floor(o) && d < Math.floor(l),
                          h = d < Math.floor(o) || d >= Math.floor(l),
                          v = n.getActiveLink();
                        return h
                          ? (i === v && n.setActiveLink(void 0),
                            e.props.hashSpy &&
                              f.getHash() === i &&
                              f.changeHash(),
                            e.props.spy &&
                              e.state.active &&
                              (e.setState({ active: !1 }),
                              e.props.onSetInactive && e.props.onSetInactive()),
                            u.updateStates())
                          : p && v !== i
                          ? (n.setActiveLink(i),
                            e.props.hashSpy && f.changeHash(i),
                            e.props.spy &&
                              (e.setState({ active: !0 }),
                              e.props.onSetActive && e.props.onSetActive(i)),
                            u.updateStates())
                          : void 0;
                      }
                    });
                };
              return (d.propTypes = p), (d.defaultProps = { offset: 0 }), d;
            },
            Element: function (e) {
              console.warn("Helpers.Element is deprecated since v1.7.0");
              var t = (function (t) {
                function n(e) {
                  a(this, n);
                  var t = o(
                    this,
                    (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                  );
                  return (t.childBindings = { domNode: null }), t;
                }
                return (
                  l(n, t),
                  i(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        if ("undefined" === typeof window) return !1;
                        this.registerElems(this.props.name);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        this.props.name !== e.name &&
                          this.registerElems(this.props.name);
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        if ("undefined" === typeof window) return !1;
                        c.unregister(this.props.name);
                      },
                    },
                    {
                      key: "registerElems",
                      value: function (e) {
                        c.register(e, this.childBindings.domNode);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return s.createElement(
                          e,
                          r({}, this.props, {
                            parentBindings: this.childBindings,
                          })
                        );
                      },
                    },
                  ]),
                  n
                );
              })(s.Component);
              return (t.propTypes = { name: d.string, id: d.string }), t;
            },
          };
        e.exports = h;
      },
      4102: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (l(n(5183)), l(n(3987))),
          a = l(n(8616)),
          o = l(n(979));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = function (e) {
            return i.default[e.smooth] || i.default.defaultEasing;
          },
          u =
            (function () {
              if ("undefined" !== typeof window)
                return (
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame
                );
            })() ||
            function (e, t, n) {
              window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
            },
          c = function (e) {
            var t = e.data.containerElement;
            if (t && t !== document && t !== document.body) return t.scrollLeft;
            var n = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageXOffset
              : r
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          d = function (e) {
            var t = e.data.containerElement;
            if (t && t !== document && t !== document.body) return t.scrollTop;
            var n = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageYOffset
              : r
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          f = function e(t, n, r) {
            var i = n.data;
            if (n.ignoreCancelEvents || !i.cancel)
              if (
                ((i.delta = Math.round(i.targetPosition - i.startPosition)),
                null === i.start && (i.start = r),
                (i.progress = r - i.start),
                (i.percent =
                  i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
                (i.currentPosition =
                  i.startPosition + Math.ceil(i.delta * i.percent)),
                i.containerElement &&
                i.containerElement !== document &&
                i.containerElement !== document.body
                  ? n.horizontal
                    ? (i.containerElement.scrollLeft = i.currentPosition)
                    : (i.containerElement.scrollTop = i.currentPosition)
                  : n.horizontal
                  ? window.scrollTo(i.currentPosition, 0)
                  : window.scrollTo(0, i.currentPosition),
                i.percent < 1)
              ) {
                var a = e.bind(null, t, n);
                u.call(window, a);
              } else
                o.default.registered.end &&
                  o.default.registered.end(i.to, i.target, i.currentPosition);
            else
              o.default.registered.end &&
                o.default.registered.end(i.to, i.target, i.currentPositionY);
          },
          p = function (e) {
            e.data.containerElement = e
              ? e.containerId
                ? document.getElementById(e.containerId)
                : e.container && e.container.nodeType
                ? e.container
                : document
              : null;
          },
          h = function (e, t, n, r) {
            if (
              ((t.data = t.data || {
                currentPosition: 0,
                startPosition: 0,
                targetPosition: 0,
                progress: 0,
                duration: 0,
                cancel: !1,
                target: null,
                containerElement: null,
                to: null,
                start: null,
                delta: null,
                percent: null,
                delayTimeout: null,
              }),
              window.clearTimeout(t.data.delayTimeout),
              a.default.subscribe(function () {
                t.data.cancel = !0;
              }),
              p(t),
              (t.data.start = null),
              (t.data.cancel = !1),
              (t.data.startPosition = t.horizontal ? c(t) : d(t)),
              (t.data.targetPosition = t.absolute
                ? e
                : e + t.data.startPosition),
              t.data.startPosition !== t.data.targetPosition)
            ) {
              var i;
              (t.data.delta = Math.round(
                t.data.targetPosition - t.data.startPosition
              )),
                (t.data.duration = (
                  "function" === typeof (i = t.duration)
                    ? i
                    : function () {
                        return i;
                      }
                )(t.data.delta)),
                (t.data.duration = isNaN(parseFloat(t.data.duration))
                  ? 1e3
                  : parseFloat(t.data.duration)),
                (t.data.to = n),
                (t.data.target = r);
              var l = s(t),
                h = f.bind(null, l, t);
              t && t.delay > 0
                ? (t.data.delayTimeout = window.setTimeout(function () {
                    o.default.registered.begin &&
                      o.default.registered.begin(t.data.to, t.data.target),
                      u.call(window, h);
                  }, t.delay))
                : (o.default.registered.begin &&
                    o.default.registered.begin(t.data.to, t.data.target),
                  u.call(window, h));
            } else
              o.default.registered.end &&
                o.default.registered.end(
                  t.data.to,
                  t.data.target,
                  t.data.currentPosition
                );
          },
          v = function (e) {
            return (
              ((e = r({}, e)).data = e.data || {
                currentPosition: 0,
                startPosition: 0,
                targetPosition: 0,
                progress: 0,
                duration: 0,
                cancel: !1,
                target: null,
                containerElement: null,
                to: null,
                start: null,
                delta: null,
                percent: null,
                delayTimeout: null,
              }),
              (e.absolute = !0),
              e
            );
          };
        t.default = {
          animateTopScroll: h,
          getAnimationType: s,
          scrollToTop: function (e) {
            h(0, v(e));
          },
          scrollToBottom: function (e) {
            (e = v(e)),
              p(e),
              h(
                e.horizontal
                  ? (function (e) {
                      var t = e.data.containerElement;
                      if (t && t !== document && t !== document.body)
                        return t.scrollWidth - t.offsetWidth;
                      var n = document.body,
                        r = document.documentElement;
                      return Math.max(
                        n.scrollWidth,
                        n.offsetWidth,
                        r.clientWidth,
                        r.scrollWidth,
                        r.offsetWidth
                      );
                    })(e)
                  : (function (e) {
                      var t = e.data.containerElement;
                      if (t && t !== document && t !== document.body)
                        return t.scrollHeight - t.offsetHeight;
                      var n = document.body,
                        r = document.documentElement;
                      return Math.max(
                        n.scrollHeight,
                        n.offsetHeight,
                        r.clientHeight,
                        r.scrollHeight,
                        r.offsetHeight
                      );
                    })(e),
                e
              );
          },
          scrollTo: function (e, t) {
            h(e, v(t));
          },
          scrollMore: function (e, t) {
            (t = v(t)), p(t);
            var n = t.horizontal ? c(t) : d(t);
            h(e + n, t);
          },
        };
      },
      8616: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(4360),
          i = ["mousedown", "mousewheel", "touchmove", "keydown"];
        t.default = {
          subscribe: function (e) {
            return (
              "undefined" !== typeof document &&
              i.forEach(function (t) {
                return (0, r.addPassiveEventListener)(document, t, e);
              })
            );
          },
        };
      },
      4360: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.addPassiveEventListener = function (e, t, n) {
          var r = (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (n) {}
            return e;
          })();
          e.addEventListener(t, n, !!r && { passive: !0 });
        }),
          (t.removePassiveEventListener = function (e, t, n) {
            e.removeEventListener(t, n);
          });
      },
      671: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          a = s(n(2791)),
          o = (s(n(4164)), s(n(2338))),
          l = s(n(2007));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          var t = (function (t) {
            function n(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(n, t),
              i(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" === typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" === typeof window) return !1;
                    o.default.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    o.default.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return a.default.createElement(
                      e,
                      r({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              n
            );
          })(a.default.Component);
          return (
            (t.propTypes = { name: l.default.string, id: l.default.string }), t
          );
        };
      },
      979: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          registered: {},
          scrollEvent: {
            register: function (e, t) {
              n.registered[e] = t;
            },
            remove: function (e) {
              n.registered[e] = null;
            },
          },
        };
        t.default = n;
      },
      5203: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        n(4360);
        var r,
          i = n(5183),
          a = (r = i) && r.__esModule ? r : { default: r };
        var o = {
          mountFlag: !1,
          initialized: !1,
          scroller: null,
          containers: {},
          mount: function (e) {
            (this.scroller = e),
              (this.handleHashChange = this.handleHashChange.bind(this)),
              window.addEventListener("hashchange", this.handleHashChange),
              this.initStateFromHash(),
              (this.mountFlag = !0);
          },
          mapContainer: function (e, t) {
            this.containers[e] = t;
          },
          isMounted: function () {
            return this.mountFlag;
          },
          isInitialized: function () {
            return this.initialized;
          },
          initStateFromHash: function () {
            var e = this,
              t = this.getHash();
            t
              ? window.setTimeout(function () {
                  e.scrollTo(t, !0), (e.initialized = !0);
                }, 10)
              : (this.initialized = !0);
          },
          scrollTo: function (e, t) {
            var n = this.scroller;
            if (n.get(e) && (t || e !== n.getActiveLink())) {
              var r = this.containers[e] || document;
              n.scrollTo(e, { container: r });
            }
          },
          getHash: function () {
            return a.default.getHash();
          },
          changeHash: function (e, t) {
            this.isInitialized() &&
              a.default.getHash() !== e &&
              a.default.updateHash(e, t);
          },
          handleHashChange: function () {
            this.scrollTo(this.getHash());
          },
          unmount: function () {
            (this.scroller = null),
              (this.containers = null),
              window.removeEventListener("hashchange", this.handleHashChange);
          },
        };
        t.default = o;
      },
      7585: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          a = c(n(2791)),
          o = c(n(3688)),
          l = c(n(2338)),
          s = c(n(2007)),
          u = c(n(5203));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = {
          to: s.default.string.isRequired,
          containerId: s.default.string,
          container: s.default.object,
          activeClass: s.default.string,
          activeStyle: s.default.object,
          spy: s.default.bool,
          horizontal: s.default.bool,
          smooth: s.default.oneOfType([s.default.bool, s.default.string]),
          offset: s.default.number,
          delay: s.default.number,
          isDynamic: s.default.bool,
          onClick: s.default.func,
          duration: s.default.oneOfType([s.default.number, s.default.func]),
          absolute: s.default.bool,
          onSetActive: s.default.func,
          onSetInactive: s.default.func,
          ignoreCancelEvents: s.default.bool,
          hashSpy: s.default.bool,
          saveHashHistory: s.default.bool,
          spyThrottle: s.default.number,
        };
        t.default = function (e, t) {
          var n = t || l.default,
            s = (function (t) {
              function l(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, l);
                var t = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t ||
                    ("object" !== typeof t && "function" !== typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).call(this, e)
                );
                return c.call(t), (t.state = { active: !1 }), t;
              }
              return (
                (function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(l, t),
                i(l, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e && !t
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        o.default.isMounted(e) ||
                          o.default.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (u.default.isMounted() || u.default.mount(n),
                            u.default.mapContainer(this.props.to, e)),
                          o.default.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      o.default.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var n = {};
                      n =
                        this.state && this.state.active
                          ? r({}, this.props.style, this.props.activeStyle)
                          : r({}, this.props.style);
                      var i = r({}, this.props);
                      for (var o in d) i.hasOwnProperty(o) && delete i[o];
                      return (
                        (i.className = t),
                        (i.style = n),
                        (i.onClick = this.handleClick),
                        a.default.createElement(e, i)
                      );
                    },
                  },
                ]),
                l
              );
            })(a.default.PureComponent),
            c = function () {
              var e = this;
              (this.scrollTo = function (t, i) {
                n.scrollTo(t, r({}, e.state, i));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.spyHandler = function (t, r) {
                  var i = e.getScrollSpyContainer();
                  if (!u.default.isMounted() || u.default.isInitialized()) {
                    var a = e.props.horizontal,
                      o = e.props.to,
                      l = null,
                      s = void 0,
                      c = void 0;
                    if (a) {
                      var d = 0,
                        f = 0,
                        p = 0;
                      if (i.getBoundingClientRect)
                        p = i.getBoundingClientRect().left;
                      if (!l || e.props.isDynamic) {
                        if (!(l = n.get(o))) return;
                        var h = l.getBoundingClientRect();
                        f = (d = h.left - p + t) + h.width;
                      }
                      var v = t - e.props.offset;
                      (s = v >= Math.floor(d) && v < Math.floor(f)),
                        (c = v < Math.floor(d) || v >= Math.floor(f));
                    } else {
                      var m = 0,
                        g = 0,
                        y = 0;
                      if (i.getBoundingClientRect)
                        y = i.getBoundingClientRect().top;
                      if (!l || e.props.isDynamic) {
                        if (!(l = n.get(o))) return;
                        var b = l.getBoundingClientRect();
                        g = (m = b.top - y + r) + b.height;
                      }
                      var x = r - e.props.offset;
                      (s = x >= Math.floor(m) && x < Math.floor(g)),
                        (c = x < Math.floor(m) || x >= Math.floor(g));
                    }
                    var w = n.getActiveLink();
                    if (c) {
                      if (
                        (o === w && n.setActiveLink(void 0),
                        e.props.hashSpy && u.default.getHash() === o)
                      ) {
                        var S = e.props.saveHashHistory,
                          k = void 0 !== S && S;
                        u.default.changeHash("", k);
                      }
                      e.props.spy &&
                        e.state.active &&
                        (e.setState({ active: !1 }),
                        e.props.onSetInactive && e.props.onSetInactive(o, l));
                    }
                    if (s && (w !== o || !1 === e.state.active)) {
                      n.setActiveLink(o);
                      var A = e.props.saveHashHistory,
                        E = void 0 !== A && A;
                      e.props.hashSpy && u.default.changeHash(o, E),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(o, l));
                    }
                  }
                });
            };
          return (s.propTypes = d), (s.defaultProps = { offset: 0 }), s;
        };
      },
      3688: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          i = n(3881),
          a = (r = i) && r.__esModule ? r : { default: r },
          o = n(4360);
        var l = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var n = (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 66;
                return (0, a.default)(e, t);
              })(function (t) {
                l.scrollHandler(e);
              }, t);
              l.scrollSpyContainers.push(e),
                (0, o.addPassiveEventListener)(e, "scroll", n);
            }
          },
          isMounted: function (e) {
            return -1 !== l.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e === document) {
              var t = void 0 !== window.pageYOffset,
                n = "CSS1Compat" === (document.compatMode || "");
              return t
                ? window.pageXOffset
                : n
                ? document.documentElement.scrollLeft
                : document.body.scrollLeft;
            }
            return e.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e === document) {
              var t = void 0 !== window.pageXOffset,
                n = "CSS1Compat" === (document.compatMode || "");
              return t
                ? window.pageYOffset
                : n
                ? document.documentElement.scrollTop
                : document.body.scrollTop;
            }
            return e.scrollTop;
          },
          scrollHandler: function (e) {
            (
              l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(l.currentPositionX(e), l.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            l.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var n = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];
            n.spyCallbacks || (n.spyCallbacks = []),
              n.spyCallbacks.push(e),
              e(l.currentPositionX(t), l.currentPositionY(t));
          },
          updateStates: function () {
            l.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            l.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.indexOf(t) > -1 &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              l.spySetState &&
                l.spySetState.length &&
                l.spySetState.indexOf(e) > -1 &&
                l.spySetState.splice(l.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", l.scrollHandler);
          },
          update: function () {
            return l.scrollSpyContainers.forEach(function (e) {
              return l.scrollHandler(e);
            });
          },
        };
        t.default = l;
      },
      2338: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = l(n(5183)),
          a = l(n(4102)),
          o = l(n(979));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {},
          u = void 0;
        t.default = {
          unmount: function () {
            s = {};
          },
          register: function (e, t) {
            s[e] = t;
          },
          unregister: function (e) {
            delete s[e];
          },
          get: function (e) {
            return (
              s[e] ||
              document.getElementById(e) ||
              document.getElementsByName(e)[0] ||
              document.getElementsByClassName(e)[0]
            );
          },
          setActiveLink: function (e) {
            return (u = e);
          },
          getActiveLink: function () {
            return u;
          },
          scrollTo: function (e, t) {
            var n = this.get(e);
            if (n) {
              var l = (t = r({}, t, { absolute: !1 })).containerId,
                s = t.container,
                u = void 0;
              (u = l
                ? document.getElementById(l)
                : s && s.nodeType
                ? s
                : document),
                (t.absolute = !0);
              var c = t.horizontal,
                d = i.default.scrollOffset(u, n, c) + (t.offset || 0);
              if (!t.smooth)
                return (
                  o.default.registered.begin &&
                    o.default.registered.begin(e, n),
                  u === document
                    ? t.horizontal
                      ? window.scrollTo(d, 0)
                      : window.scrollTo(0, d)
                    : (u.scrollTop = d),
                  void (
                    o.default.registered.end && o.default.registered.end(e, n)
                  )
                );
              a.default.animateTopScroll(d, t, e, n);
            } else console.warn("target Element not found");
          },
        };
      },
      3987: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            defaultEasing: function (e) {
              return e < 0.5
                ? Math.pow(2 * e, 2) / 2
                : 1 - Math.pow(2 * (1 - e), 2) / 2;
            },
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return e * (2 - e);
            },
            easeInOutQuad: function (e) {
              return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return --e * e * e + 1;
            },
            easeInOutCubic: function (e) {
              return e < 0.5
                ? 4 * e * e * e
                : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return 1 - --e * e * e * e;
            },
            easeInOutQuart: function (e) {
              return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
            },
            easeInQuint: function (e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return 1 + --e * e * e * e * e;
            },
            easeInOutQuint: function (e) {
              return e < 0.5
                ? 16 * e * e * e * e * e
                : 1 + 16 * --e * e * e * e * e;
            },
          });
      },
      5183: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function (e, t) {
          for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
            (n += r.offsetTop), (r = r.offsetParent);
          return { offsetTop: n, offsetParent: r };
        };
        t.default = {
          updateHash: function (e, t) {
            var n = 0 === e.indexOf("#") ? e.substring(1) : e,
              r = n ? "#" + n : "",
              i = window && window.location,
              a = r ? i.pathname + i.search + r : i.pathname + i.search;
            t
              ? history.pushState(history.state, "", a)
              : history.replaceState(history.state, "", a);
          },
          getHash: function () {
            return window.location.hash.replace(/^#/, "");
          },
          filterElementInContainer: function (e) {
            return function (t) {
              return e.contains
                ? e != t && e.contains(t)
                : !!(16 & e.compareDocumentPosition(t));
            };
          },
          scrollOffset: function (e, t, r) {
            if (r)
              return e === document
                ? t.getBoundingClientRect().left +
                    (window.scrollX || window.pageXOffset)
                : "static" !== getComputedStyle(e).position
                ? t.offsetLeft
                : t.offsetLeft - e.offsetLeft;
            if (e === document)
              return (
                t.getBoundingClientRect().top +
                (window.scrollY || window.pageYOffset)
              );
            if ("static" !== getComputedStyle(e).position) {
              if (t.offsetParent !== e) {
                var i = n(t, function (t) {
                    return t === e || t === document;
                  }),
                  a = i.offsetTop;
                if (i.offsetParent !== e)
                  throw new Error(
                    "Seems containerElement is not an ancestor of the Element"
                  );
                return a;
              }
              return t.offsetTop;
            }
            if (t.offsetParent === e.offsetParent)
              return t.offsetTop - e.offsetTop;
            var o = function (e) {
              return e === document;
            };
            return n(t, o).offsetTop - n(e, o).offsetTop;
          },
        };
      },
      4048: function (e, t, n) {
        "use strict";
        var r = n(184),
          i = n(2791),
          a = function () {
            return (
              (a =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              a.apply(this, arguments)
            );
          };
        function o(e, t) {
          var n, r;
          switch (t.type) {
            case "TYPE":
              return a(a({}, e), {
                speed: t.speed,
                text:
                  null === (n = t.payload) || void 0 === n
                    ? void 0
                    : n.substring(0, e.text.length + 1),
              });
            case "DELAY":
              return a(a({}, e), { speed: t.payload });
            case "DELETE":
              return a(a({}, e), {
                speed: t.speed,
                text:
                  null === (r = t.payload) || void 0 === r
                    ? void 0
                    : r.substring(0, e.text.length - 1),
              });
            case "COUNT":
              return a(a({}, e), { count: e.count + 1 });
            default:
              return e;
          }
        }
        var l = function (e) {
          var t = e.words,
            n =
              void 0 === t
                ? ["Hello World!", "This is", "a simple Typewriter"]
                : t,
            r = e.loop,
            a = void 0 === r ? 1 : r,
            l = e.typeSpeed,
            s = void 0 === l ? 80 : l,
            u = e.deleteSpeed,
            c = void 0 === u ? 50 : u,
            d = e.delaySpeed,
            f = void 0 === d ? 1500 : d,
            p = e.onLoopDone,
            h = e.onType,
            v = e.onDelete,
            m = e.onDelay,
            g = i.useReducer(o, { speed: s, text: "", count: 0 }),
            y = g[0],
            b = y.speed,
            x = y.text,
            w = y.count,
            S = g[1],
            k = i.useRef(0),
            A = i.useRef(!1),
            E = i.useRef(!1),
            j = i.useRef(!1),
            C = i.useRef(!1),
            P = i.useCallback(
              function () {
                var e = w % n.length,
                  t = n[e];
                E.current
                  ? (S({ type: "DELETE", payload: t, speed: c }),
                    "" === x && ((E.current = !1), S({ type: "COUNT" })))
                  : (S({ type: "TYPE", payload: t, speed: s }),
                    (j.current = !0),
                    x === t &&
                      (S({ type: "DELAY", payload: f }),
                      (j.current = !1),
                      (C.current = !0),
                      setTimeout(function () {
                        (C.current = !1), (E.current = !0);
                      }, f),
                      a > 0 &&
                        ((k.current += 1),
                        k.current / n.length === a &&
                          ((C.current = !1), (A.current = !0))))),
                  j.current && h && h(k.current),
                  E.current && v && v(),
                  C.current && m && m();
              },
              [w, f, c, a, s, n, x, h, v, m]
            );
          return (
            i.useEffect(
              function () {
                var e = setTimeout(P, b);
                return (
                  A.current && clearTimeout(e),
                  function () {
                    return clearTimeout(e);
                  }
                );
              },
              [P, b]
            ),
            i.useEffect(
              function () {
                p && A.current && p();
              },
              [p]
            ),
            [
              x,
              {
                isType: j.current,
                isDelay: C.current,
                isDelete: E.current,
                isDone: A.current,
              },
            ]
          );
        };
        !(function (e, t) {
          void 0 === t && (t = {});
          var n = t.insertAt;
          if (e && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0],
              i = document.createElement("style");
            (i.type = "text/css"),
              "top" === n && r.firstChild
                ? r.insertBefore(i, r.firstChild)
                : r.appendChild(i),
              i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
          }
        })(
          ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
        );
        var s = i.memo(function (e) {
          var t = e.cursorBlinking,
            n = void 0 === t || t,
            i = e.cursorStyle,
            o = void 0 === i ? "|" : i,
            l = e.cursorColor,
            s = void 0 === l ? "inherit" : l;
          return r.jsx(
            "span",
            a(
              {
                style: { color: s },
                className: ""
                  .concat("styles-module_blinkingCursor__yugAC", " ")
                  .concat(n ? "styles-module_blinking__9VXRT" : ""),
              },
              { children: o }
            )
          );
        });
        (t.CF = s), (t.Ku = l);
      },
      8436: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PrevArrow = t.NextArrow = void 0);
        var i = l(n(2791)),
          a = l(n(1694)),
          o = n(8026);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s() {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            s.apply(this, arguments)
          );
        }
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(n), !0).forEach(function (t) {
                  d(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function d(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function h(e, t, n) {
          return (
            t && p(e.prototype, t),
            n && p(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function v(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && m(e, t);
        }
        function m(e, t) {
          return (
            (m =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            m(e, t)
          );
        }
        function g(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = y(e);
            if (t) {
              var a = y(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === r(t) || "function" === typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            })(this, n);
          };
        }
        function y(e) {
          return (
            (y = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            y(e)
          );
        }
        var b = (function (e) {
          v(n, e);
          var t = g(n);
          function n() {
            return f(this, n), t.apply(this, arguments);
          }
          return (
            h(n, [
              {
                key: "clickHandler",
                value: function (e, t) {
                  t && t.preventDefault(), this.props.clickHandler(e, t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { "slick-arrow": !0, "slick-prev": !0 },
                    t = this.clickHandler.bind(this, { message: "previous" });
                  !this.props.infinite &&
                    (0 === this.props.currentSlide ||
                      this.props.slideCount <= this.props.slidesToShow) &&
                    ((e["slick-disabled"] = !0), (t = null));
                  var n = {
                      key: "0",
                      "data-role": "none",
                      className: (0, a.default)(e),
                      style: { display: "block" },
                      onClick: t,
                    },
                    r = {
                      currentSlide: this.props.currentSlide,
                      slideCount: this.props.slideCount,
                    };
                  return this.props.prevArrow
                    ? i.default.cloneElement(
                        this.props.prevArrow,
                        c(c({}, n), r)
                      )
                    : i.default.createElement(
                        "button",
                        s({ key: "0", type: "button" }, n),
                        " ",
                        "Previous"
                      );
                },
              },
            ]),
            n
          );
        })(i.default.PureComponent);
        t.PrevArrow = b;
        var x = (function (e) {
          v(n, e);
          var t = g(n);
          function n() {
            return f(this, n), t.apply(this, arguments);
          }
          return (
            h(n, [
              {
                key: "clickHandler",
                value: function (e, t) {
                  t && t.preventDefault(), this.props.clickHandler(e, t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { "slick-arrow": !0, "slick-next": !0 },
                    t = this.clickHandler.bind(this, { message: "next" });
                  (0, o.canGoNext)(this.props) ||
                    ((e["slick-disabled"] = !0), (t = null));
                  var n = {
                      key: "1",
                      "data-role": "none",
                      className: (0, a.default)(e),
                      style: { display: "block" },
                      onClick: t,
                    },
                    r = {
                      currentSlide: this.props.currentSlide,
                      slideCount: this.props.slideCount,
                    };
                  return this.props.nextArrow
                    ? i.default.cloneElement(
                        this.props.nextArrow,
                        c(c({}, n), r)
                      )
                    : i.default.createElement(
                        "button",
                        s({ key: "1", type: "button" }, n),
                        " ",
                        "Next"
                      );
                },
              },
            ]),
            n
          );
        })(i.default.PureComponent);
        t.NextArrow = x;
      },
      5484: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r,
          i = (r = n(2791)) && r.__esModule ? r : { default: r };
        var a = {
          accessibility: !0,
          adaptiveHeight: !1,
          afterChange: null,
          appendDots: function (e) {
            return i.default.createElement(
              "ul",
              { style: { display: "block" } },
              e
            );
          },
          arrows: !0,
          autoplay: !1,
          autoplaySpeed: 3e3,
          beforeChange: null,
          centerMode: !1,
          centerPadding: "50px",
          className: "",
          cssEase: "ease",
          customPaging: function (e) {
            return i.default.createElement("button", null, e + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: null,
          nextArrow: null,
          onEdge: null,
          onInit: null,
          onLazyLoadError: null,
          onReInit: null,
          pauseOnDotsHover: !1,
          pauseOnFocus: !1,
          pauseOnHover: !0,
          prevArrow: null,
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "div",
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
          swipe: !0,
          swipeEvent: null,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          waitForAnimate: !0,
        };
        t.default = a;
      },
      3800: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Dots = void 0);
        var i = l(n(2791)),
          a = l(n(1694)),
          o = n(8026);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function d(e, t) {
          return (
            (d =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            d(e, t)
          );
        }
        function f(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = p(e);
            if (t) {
              var a = p(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === r(t) || "function" === typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            })(this, n);
          };
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        var h = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && d(e, t);
          })(p, e);
          var t,
            n,
            r,
            l = f(p);
          function p() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              l.apply(this, arguments)
            );
          }
          return (
            (t = p),
            (n = [
              {
                key: "clickHandler",
                value: function (e, t) {
                  t.preventDefault(), this.props.clickHandler(e);
                },
              },
              {
                key: "render",
                value: function () {
                  for (
                    var e,
                      t = this.props,
                      n = t.onMouseEnter,
                      r = t.onMouseOver,
                      l = t.onMouseLeave,
                      c = t.infinite,
                      d = t.slidesToScroll,
                      f = t.slidesToShow,
                      p = t.slideCount,
                      h = t.currentSlide,
                      v = (e = {
                        slideCount: p,
                        slidesToScroll: d,
                        slidesToShow: f,
                        infinite: c,
                      }).infinite
                        ? Math.ceil(e.slideCount / e.slidesToScroll)
                        : Math.ceil(
                            (e.slideCount - e.slidesToShow) / e.slidesToScroll
                          ) + 1,
                      m = { onMouseEnter: n, onMouseOver: r, onMouseLeave: l },
                      g = [],
                      y = 0;
                    y < v;
                    y++
                  ) {
                    var b = (y + 1) * d - 1,
                      x = c ? b : (0, o.clamp)(b, 0, p - 1),
                      w = x - (d - 1),
                      S = c ? w : (0, o.clamp)(w, 0, p - 1),
                      k = (0, a.default)({
                        "slick-active": c ? h >= S && h <= x : h === S,
                      }),
                      A = {
                        message: "dots",
                        index: y,
                        slidesToScroll: d,
                        currentSlide: h,
                      },
                      E = this.clickHandler.bind(this, A);
                    g = g.concat(
                      i.default.createElement(
                        "li",
                        { key: y, className: k },
                        i.default.cloneElement(this.props.customPaging(y), {
                          onClick: E,
                        })
                      )
                    );
                  }
                  return i.default.cloneElement(
                    this.props.appendDots(g),
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? s(Object(n), !0).forEach(function (t) {
                              u(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : s(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({ className: this.props.dotsClass }, m)
                  );
                },
              },
            ]),
            n && c(t.prototype, n),
            r && c(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            p
          );
        })(i.default.PureComponent);
        t.Dots = h;
      },
      5717: function (e, t, n) {
        "use strict";
        var r;
        t.Z = void 0;
        var i = ((r = n(3178)) && r.__esModule ? r : { default: r }).default;
        t.Z = i;
      },
      1382: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = {
          animating: !1,
          autoplaying: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          dragging: !1,
          edgeDragged: !1,
          initialized: !1,
          lazyLoadedList: [],
          listHeight: null,
          listWidth: null,
          scrolling: !1,
          slideCount: null,
          slideHeight: null,
          slideWidth: null,
          swipeLeft: null,
          swiped: !1,
          swiping: !1,
          touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
          trackStyle: {},
          trackWidth: 0,
          targetSlide: 0,
        };
        t.default = n;
      },
      8293: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InnerSlider = void 0);
        var r = f(n(2791)),
          i = f(n(1382)),
          a = f(n(5095)),
          o = f(n(1694)),
          l = n(8026),
          s = n(4931),
          u = n(3800),
          c = n(8436),
          d = f(n(474));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function p(e) {
          return (
            (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            p(e)
          );
        }
        function h() {
          return (
            (h =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            h.apply(this, arguments)
          );
        }
        function v(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]));
          }
          return i;
        }
        function m(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function g(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? m(Object(n), !0).forEach(function (t) {
                  k(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function y(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function b(e, t) {
          return (
            (b =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            b(e, t)
          );
        }
        function x(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = S(e);
            if (t) {
              var i = S(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === p(t) || "function" === typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return w(e);
            })(this, n);
          };
        }
        function w(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function S(e) {
          return (
            (S = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            S(e)
          );
        }
        function k(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var A = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && b(e, t);
          })(S, e);
          var t,
            n,
            f,
            m = x(S);
          function S(e) {
            var t;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, S),
              k(w((t = m.call(this, e))), "listRefHandler", function (e) {
                return (t.list = e);
              }),
              k(w(t), "trackRefHandler", function (e) {
                return (t.track = e);
              }),
              k(w(t), "adaptHeight", function () {
                if (t.props.adaptiveHeight && t.list) {
                  var e = t.list.querySelector(
                    '[data-index="'.concat(t.state.currentSlide, '"]')
                  );
                  t.list.style.height = (0, l.getHeight)(e) + "px";
                }
              }),
              k(w(t), "componentDidMount", function () {
                if ((t.props.onInit && t.props.onInit(), t.props.lazyLoad)) {
                  var e = (0, l.getOnDemandLazySlides)(
                    g(g({}, t.props), t.state)
                  );
                  e.length > 0 &&
                    (t.setState(function (t) {
                      return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                    }),
                    t.props.onLazyLoad && t.props.onLazyLoad(e));
                }
                var n = g({ listRef: t.list, trackRef: t.track }, t.props);
                t.updateState(n, !0, function () {
                  t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
                }),
                  "progressive" === t.props.lazyLoad &&
                    (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)),
                  (t.ro = new d.default(function () {
                    t.state.animating
                      ? (t.onWindowResized(!1),
                        t.callbackTimers.push(
                          setTimeout(function () {
                            return t.onWindowResized();
                          }, t.props.speed)
                        ))
                      : t.onWindowResized();
                  })),
                  t.ro.observe(t.list),
                  document.querySelectorAll &&
                    Array.prototype.forEach.call(
                      document.querySelectorAll(".slick-slide"),
                      function (e) {
                        (e.onfocus = t.props.pauseOnFocus
                          ? t.onSlideFocus
                          : null),
                          (e.onblur = t.props.pauseOnFocus
                            ? t.onSlideBlur
                            : null);
                      }
                    ),
                  window.addEventListener
                    ? window.addEventListener("resize", t.onWindowResized)
                    : window.attachEvent("onresize", t.onWindowResized);
              }),
              k(w(t), "componentWillUnmount", function () {
                t.animationEndCallback && clearTimeout(t.animationEndCallback),
                  t.lazyLoadTimer && clearInterval(t.lazyLoadTimer),
                  t.callbackTimers.length &&
                    (t.callbackTimers.forEach(function (e) {
                      return clearTimeout(e);
                    }),
                    (t.callbackTimers = [])),
                  window.addEventListener
                    ? window.removeEventListener("resize", t.onWindowResized)
                    : window.detachEvent("onresize", t.onWindowResized),
                  t.autoplayTimer && clearInterval(t.autoplayTimer),
                  t.ro.disconnect();
              }),
              k(w(t), "componentDidUpdate", function (e) {
                if (
                  (t.checkImagesLoad(),
                  t.props.onReInit && t.props.onReInit(),
                  t.props.lazyLoad)
                ) {
                  var n = (0, l.getOnDemandLazySlides)(
                    g(g({}, t.props), t.state)
                  );
                  n.length > 0 &&
                    (t.setState(function (e) {
                      return { lazyLoadedList: e.lazyLoadedList.concat(n) };
                    }),
                    t.props.onLazyLoad && t.props.onLazyLoad(n));
                }
                t.adaptHeight();
                var i = g(
                    g({ listRef: t.list, trackRef: t.track }, t.props),
                    t.state
                  ),
                  a = t.didPropsChange(e);
                a &&
                  t.updateState(i, a, function () {
                    t.state.currentSlide >=
                      r.default.Children.count(t.props.children) &&
                      t.changeSlide({
                        message: "index",
                        index:
                          r.default.Children.count(t.props.children) -
                          t.props.slidesToShow,
                        currentSlide: t.state.currentSlide,
                      }),
                      t.props.autoplay
                        ? t.autoPlay("update")
                        : t.pause("paused");
                  });
              }),
              k(w(t), "onWindowResized", function (e) {
                t.debouncedResize && t.debouncedResize.cancel(),
                  (t.debouncedResize = (0, a.default)(function () {
                    return t.resizeWindow(e);
                  }, 50)),
                  t.debouncedResize();
              }),
              k(w(t), "resizeWindow", function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                if (Boolean(t.track && t.track.node)) {
                  var n = g(
                    g({ listRef: t.list, trackRef: t.track }, t.props),
                    t.state
                  );
                  t.updateState(n, e, function () {
                    t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
                  }),
                    t.setState({ animating: !1 }),
                    clearTimeout(t.animationEndCallback),
                    delete t.animationEndCallback;
                }
              }),
              k(w(t), "updateState", function (e, n, i) {
                var a = (0, l.initializedState)(e);
                e = g(g(g({}, e), a), {}, { slideIndex: a.currentSlide });
                var o = (0, l.getTrackLeft)(e);
                e = g(g({}, e), {}, { left: o });
                var s = (0, l.getTrackCSS)(e);
                (n ||
                  r.default.Children.count(t.props.children) !==
                    r.default.Children.count(e.children)) &&
                  (a.trackStyle = s),
                  t.setState(a, i);
              }),
              k(w(t), "ssrInit", function () {
                if (t.props.variableWidth) {
                  var e = 0,
                    n = 0,
                    i = [],
                    a = (0, l.getPreClones)(
                      g(
                        g(g({}, t.props), t.state),
                        {},
                        { slideCount: t.props.children.length }
                      )
                    ),
                    o = (0, l.getPostClones)(
                      g(
                        g(g({}, t.props), t.state),
                        {},
                        { slideCount: t.props.children.length }
                      )
                    );
                  t.props.children.forEach(function (t) {
                    i.push(t.props.style.width), (e += t.props.style.width);
                  });
                  for (var s = 0; s < a; s++)
                    (n += i[i.length - 1 - s]), (e += i[i.length - 1 - s]);
                  for (var u = 0; u < o; u++) e += i[u];
                  for (var c = 0; c < t.state.currentSlide; c++) n += i[c];
                  var d = { width: e + "px", left: -n + "px" };
                  if (t.props.centerMode) {
                    var f = "".concat(i[t.state.currentSlide], "px");
                    d.left = "calc("
                      .concat(d.left, " + (100% - ")
                      .concat(f, ") / 2 ) ");
                  }
                  return { trackStyle: d };
                }
                var p = r.default.Children.count(t.props.children),
                  h = g(g(g({}, t.props), t.state), {}, { slideCount: p }),
                  v = (0, l.getPreClones)(h) + (0, l.getPostClones)(h) + p,
                  m = (100 / t.props.slidesToShow) * v,
                  y = 100 / v,
                  b =
                    (-y * ((0, l.getPreClones)(h) + t.state.currentSlide) * m) /
                    100;
                return (
                  t.props.centerMode && (b += (100 - (y * m) / 100) / 2),
                  {
                    slideWidth: y + "%",
                    trackStyle: { width: m + "%", left: b + "%" },
                  }
                );
              }),
              k(w(t), "checkImagesLoad", function () {
                var e =
                    (t.list &&
                      t.list.querySelectorAll &&
                      t.list.querySelectorAll(".slick-slide img")) ||
                    [],
                  n = e.length,
                  r = 0;
                Array.prototype.forEach.call(e, function (e) {
                  var i = function () {
                    return ++r && r >= n && t.onWindowResized();
                  };
                  if (e.onclick) {
                    var a = e.onclick;
                    e.onclick = function () {
                      a(), e.parentNode.focus();
                    };
                  } else
                    e.onclick = function () {
                      return e.parentNode.focus();
                    };
                  e.onload ||
                    (t.props.lazyLoad
                      ? (e.onload = function () {
                          t.adaptHeight(),
                            t.callbackTimers.push(
                              setTimeout(t.onWindowResized, t.props.speed)
                            );
                        })
                      : ((e.onload = i),
                        (e.onerror = function () {
                          i(),
                            t.props.onLazyLoadError &&
                              t.props.onLazyLoadError();
                        })));
                });
              }),
              k(w(t), "progressiveLazyLoad", function () {
                for (
                  var e = [],
                    n = g(g({}, t.props), t.state),
                    r = t.state.currentSlide;
                  r < t.state.slideCount + (0, l.getPostClones)(n);
                  r++
                )
                  if (t.state.lazyLoadedList.indexOf(r) < 0) {
                    e.push(r);
                    break;
                  }
                for (
                  var i = t.state.currentSlide - 1;
                  i >= -(0, l.getPreClones)(n);
                  i--
                )
                  if (t.state.lazyLoadedList.indexOf(i) < 0) {
                    e.push(i);
                    break;
                  }
                e.length > 0
                  ? (t.setState(function (t) {
                      return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                    }),
                    t.props.onLazyLoad && t.props.onLazyLoad(e))
                  : t.lazyLoadTimer &&
                    (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
              }),
              k(w(t), "slideHandler", function (e) {
                var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = t.props,
                  i = r.asNavFor,
                  a = r.beforeChange,
                  o = r.onLazyLoad,
                  s = r.speed,
                  u = r.afterChange,
                  c = t.state.currentSlide,
                  d = (0, l.slideHandler)(
                    g(
                      g(g({ index: e }, t.props), t.state),
                      {},
                      { trackRef: t.track, useCSS: t.props.useCSS && !n }
                    )
                  ),
                  f = d.state,
                  p = d.nextState;
                if (f) {
                  a && a(c, f.currentSlide);
                  var h = f.lazyLoadedList.filter(function (e) {
                    return t.state.lazyLoadedList.indexOf(e) < 0;
                  });
                  o && h.length > 0 && o(h),
                    !t.props.waitForAnimate &&
                      t.animationEndCallback &&
                      (clearTimeout(t.animationEndCallback),
                      u && u(c),
                      delete t.animationEndCallback),
                    t.setState(f, function () {
                      i &&
                        t.asNavForIndex !== e &&
                        ((t.asNavForIndex = e), i.innerSlider.slideHandler(e)),
                        p &&
                          (t.animationEndCallback = setTimeout(function () {
                            var e = p.animating,
                              n = v(p, ["animating"]);
                            t.setState(n, function () {
                              t.callbackTimers.push(
                                setTimeout(function () {
                                  return t.setState({ animating: e });
                                }, 10)
                              ),
                                u && u(f.currentSlide),
                                delete t.animationEndCallback;
                            });
                          }, s));
                    });
                }
              }),
              k(w(t), "changeSlide", function (e) {
                var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = g(g({}, t.props), t.state),
                  i = (0, l.changeSlide)(r, e);
                if (
                  (0 === i || i) &&
                  (!0 === n ? t.slideHandler(i, n) : t.slideHandler(i),
                  t.props.autoplay && t.autoPlay("update"),
                  t.props.focusOnSelect)
                ) {
                  var a = t.list.querySelectorAll(".slick-current");
                  a[0] && a[0].focus();
                }
              }),
              k(w(t), "clickHandler", function (e) {
                !1 === t.clickable && (e.stopPropagation(), e.preventDefault()),
                  (t.clickable = !0);
              }),
              k(w(t), "keyHandler", function (e) {
                var n = (0, l.keyHandler)(
                  e,
                  t.props.accessibility,
                  t.props.rtl
                );
                "" !== n && t.changeSlide({ message: n });
              }),
              k(w(t), "selectHandler", function (e) {
                t.changeSlide(e);
              }),
              k(w(t), "disableBodyScroll", function () {
                window.ontouchmove = function (e) {
                  (e = e || window.event).preventDefault && e.preventDefault(),
                    (e.returnValue = !1);
                };
              }),
              k(w(t), "enableBodyScroll", function () {
                window.ontouchmove = null;
              }),
              k(w(t), "swipeStart", function (e) {
                t.props.verticalSwiping && t.disableBodyScroll();
                var n = (0, l.swipeStart)(e, t.props.swipe, t.props.draggable);
                "" !== n && t.setState(n);
              }),
              k(w(t), "swipeMove", function (e) {
                var n = (0, l.swipeMove)(
                  e,
                  g(
                    g(g({}, t.props), t.state),
                    {},
                    {
                      trackRef: t.track,
                      listRef: t.list,
                      slideIndex: t.state.currentSlide,
                    }
                  )
                );
                n && (n.swiping && (t.clickable = !1), t.setState(n));
              }),
              k(w(t), "swipeEnd", function (e) {
                var n = (0, l.swipeEnd)(
                  e,
                  g(
                    g(g({}, t.props), t.state),
                    {},
                    {
                      trackRef: t.track,
                      listRef: t.list,
                      slideIndex: t.state.currentSlide,
                    }
                  )
                );
                if (n) {
                  var r = n.triggerSlideHandler;
                  delete n.triggerSlideHandler,
                    t.setState(n),
                    void 0 !== r &&
                      (t.slideHandler(r),
                      t.props.verticalSwiping && t.enableBodyScroll());
                }
              }),
              k(w(t), "touchEnd", function (e) {
                t.swipeEnd(e), (t.clickable = !0);
              }),
              k(w(t), "slickPrev", function () {
                t.callbackTimers.push(
                  setTimeout(function () {
                    return t.changeSlide({ message: "previous" });
                  }, 0)
                );
              }),
              k(w(t), "slickNext", function () {
                t.callbackTimers.push(
                  setTimeout(function () {
                    return t.changeSlide({ message: "next" });
                  }, 0)
                );
              }),
              k(w(t), "slickGoTo", function (e) {
                var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (((e = Number(e)), isNaN(e))) return "";
                t.callbackTimers.push(
                  setTimeout(function () {
                    return t.changeSlide(
                      {
                        message: "index",
                        index: e,
                        currentSlide: t.state.currentSlide,
                      },
                      n
                    );
                  }, 0)
                );
              }),
              k(w(t), "play", function () {
                var e;
                if (t.props.rtl)
                  e = t.state.currentSlide - t.props.slidesToScroll;
                else {
                  if (!(0, l.canGoNext)(g(g({}, t.props), t.state))) return !1;
                  e = t.state.currentSlide + t.props.slidesToScroll;
                }
                t.slideHandler(e);
              }),
              k(w(t), "autoPlay", function (e) {
                t.autoplayTimer && clearInterval(t.autoplayTimer);
                var n = t.state.autoplaying;
                if ("update" === e) {
                  if ("hovered" === n || "focused" === n || "paused" === n)
                    return;
                } else if ("leave" === e) {
                  if ("paused" === n || "focused" === n) return;
                } else if ("blur" === e && ("paused" === n || "hovered" === n))
                  return;
                (t.autoplayTimer = setInterval(
                  t.play,
                  t.props.autoplaySpeed + 50
                )),
                  t.setState({ autoplaying: "playing" });
              }),
              k(w(t), "pause", function (e) {
                t.autoplayTimer &&
                  (clearInterval(t.autoplayTimer), (t.autoplayTimer = null));
                var n = t.state.autoplaying;
                "paused" === e
                  ? t.setState({ autoplaying: "paused" })
                  : "focused" === e
                  ? ("hovered" !== n && "playing" !== n) ||
                    t.setState({ autoplaying: "focused" })
                  : "playing" === n && t.setState({ autoplaying: "hovered" });
              }),
              k(w(t), "onDotsOver", function () {
                return t.props.autoplay && t.pause("hovered");
              }),
              k(w(t), "onDotsLeave", function () {
                return (
                  t.props.autoplay &&
                  "hovered" === t.state.autoplaying &&
                  t.autoPlay("leave")
                );
              }),
              k(w(t), "onTrackOver", function () {
                return t.props.autoplay && t.pause("hovered");
              }),
              k(w(t), "onTrackLeave", function () {
                return (
                  t.props.autoplay &&
                  "hovered" === t.state.autoplaying &&
                  t.autoPlay("leave")
                );
              }),
              k(w(t), "onSlideFocus", function () {
                return t.props.autoplay && t.pause("focused");
              }),
              k(w(t), "onSlideBlur", function () {
                return (
                  t.props.autoplay &&
                  "focused" === t.state.autoplaying &&
                  t.autoPlay("blur")
                );
              }),
              k(w(t), "render", function () {
                var e,
                  n,
                  i,
                  a = (0, o.default)("slick-slider", t.props.className, {
                    "slick-vertical": t.props.vertical,
                    "slick-initialized": !0,
                  }),
                  d = g(g({}, t.props), t.state),
                  f = (0, l.extractObject)(d, [
                    "fade",
                    "cssEase",
                    "speed",
                    "infinite",
                    "centerMode",
                    "focusOnSelect",
                    "currentSlide",
                    "lazyLoad",
                    "lazyLoadedList",
                    "rtl",
                    "slideWidth",
                    "slideHeight",
                    "listHeight",
                    "vertical",
                    "slidesToShow",
                    "slidesToScroll",
                    "slideCount",
                    "trackStyle",
                    "variableWidth",
                    "unslick",
                    "centerPadding",
                    "targetSlide",
                    "useCSS",
                  ]),
                  p = t.props.pauseOnHover;
                if (
                  ((f = g(
                    g({}, f),
                    {},
                    {
                      onMouseEnter: p ? t.onTrackOver : null,
                      onMouseLeave: p ? t.onTrackLeave : null,
                      onMouseOver: p ? t.onTrackOver : null,
                      focusOnSelect:
                        t.props.focusOnSelect && t.clickable
                          ? t.selectHandler
                          : null,
                    }
                  )),
                  !0 === t.props.dots &&
                    t.state.slideCount >= t.props.slidesToShow)
                ) {
                  var v = (0, l.extractObject)(d, [
                      "dotsClass",
                      "slideCount",
                      "slidesToShow",
                      "currentSlide",
                      "slidesToScroll",
                      "clickHandler",
                      "children",
                      "customPaging",
                      "infinite",
                      "appendDots",
                    ]),
                    m = t.props.pauseOnDotsHover;
                  (v = g(
                    g({}, v),
                    {},
                    {
                      clickHandler: t.changeSlide,
                      onMouseEnter: m ? t.onDotsLeave : null,
                      onMouseOver: m ? t.onDotsOver : null,
                      onMouseLeave: m ? t.onDotsLeave : null,
                    }
                  )),
                    (e = r.default.createElement(u.Dots, v));
                }
                var y = (0, l.extractObject)(d, [
                  "infinite",
                  "centerMode",
                  "currentSlide",
                  "slideCount",
                  "slidesToShow",
                  "prevArrow",
                  "nextArrow",
                ]);
                (y.clickHandler = t.changeSlide),
                  t.props.arrows &&
                    ((n = r.default.createElement(c.PrevArrow, y)),
                    (i = r.default.createElement(c.NextArrow, y)));
                var b = null;
                t.props.vertical && (b = { height: t.state.listHeight });
                var x = null;
                !1 === t.props.vertical
                  ? !0 === t.props.centerMode &&
                    (x = { padding: "0px " + t.props.centerPadding })
                  : !0 === t.props.centerMode &&
                    (x = { padding: t.props.centerPadding + " 0px" });
                var w = g(g({}, b), x),
                  S = t.props.touchMove,
                  k = {
                    className: "slick-list",
                    style: w,
                    onClick: t.clickHandler,
                    onMouseDown: S ? t.swipeStart : null,
                    onMouseMove: t.state.dragging && S ? t.swipeMove : null,
                    onMouseUp: S ? t.swipeEnd : null,
                    onMouseLeave: t.state.dragging && S ? t.swipeEnd : null,
                    onTouchStart: S ? t.swipeStart : null,
                    onTouchMove: t.state.dragging && S ? t.swipeMove : null,
                    onTouchEnd: S ? t.touchEnd : null,
                    onTouchCancel: t.state.dragging && S ? t.swipeEnd : null,
                    onKeyDown: t.props.accessibility ? t.keyHandler : null,
                  },
                  A = { className: a, dir: "ltr", style: t.props.style };
                return (
                  t.props.unslick &&
                    ((k = { className: "slick-list" }), (A = { className: a })),
                  r.default.createElement(
                    "div",
                    A,
                    t.props.unslick ? "" : n,
                    r.default.createElement(
                      "div",
                      h({ ref: t.listRefHandler }, k),
                      r.default.createElement(
                        s.Track,
                        h({ ref: t.trackRefHandler }, f),
                        t.props.children
                      )
                    ),
                    t.props.unslick ? "" : i,
                    t.props.unslick ? "" : e
                  )
                );
              }),
              (t.list = null),
              (t.track = null),
              (t.state = g(
                g({}, i.default),
                {},
                {
                  currentSlide: t.props.initialSlide,
                  slideCount: r.default.Children.count(t.props.children),
                }
              )),
              (t.callbackTimers = []),
              (t.clickable = !0),
              (t.debouncedResize = null);
            var n = t.ssrInit();
            return (t.state = g(g({}, t.state), n)), t;
          }
          return (
            (t = S),
            (n = [
              {
                key: "didPropsChange",
                value: function (e) {
                  for (
                    var t = !1, n = 0, i = Object.keys(this.props);
                    n < i.length;
                    n++
                  ) {
                    var a = i[n];
                    if (!e.hasOwnProperty(a)) {
                      t = !0;
                      break;
                    }
                    if (
                      "object" !== p(e[a]) &&
                      "function" !== typeof e[a] &&
                      e[a] !== this.props[a]
                    ) {
                      t = !0;
                      break;
                    }
                  }
                  return (
                    t ||
                    r.default.Children.count(this.props.children) !==
                      r.default.Children.count(e.children)
                  );
                },
              },
            ]) && y(t.prototype, n),
            f && y(t, f),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            S
          );
        })(r.default.Component);
        t.InnerSlider = A;
      },
      3178: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = u(n(2791)),
          a = n(8293),
          o = u(n(5477)),
          l = u(n(5484)),
          s = n(8026);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c() {
          return (
            (c =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            c.apply(this, arguments)
          );
        }
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  y(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function p(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function h(e, t) {
          return (
            (h =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            h(e, t)
          );
        }
        function v(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = g(e);
            if (t) {
              var a = g(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === r(t) || "function" === typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return m(e);
            })(this, n);
          };
        }
        function m(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function g(e) {
          return (
            (g = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            g(e)
          );
        }
        function y(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var b = (0, s.canUseDOM)() && n(8153),
          x = (function (e) {
            !(function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && h(e, t);
            })(d, e);
            var t,
              n,
              r,
              u = v(d);
            function d(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, d),
                y(
                  m((t = u.call(this, e))),
                  "innerSliderRefHandler",
                  function (e) {
                    return (t.innerSlider = e);
                  }
                ),
                y(m(t), "slickPrev", function () {
                  return t.innerSlider.slickPrev();
                }),
                y(m(t), "slickNext", function () {
                  return t.innerSlider.slickNext();
                }),
                y(m(t), "slickGoTo", function (e) {
                  var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return t.innerSlider.slickGoTo(e, n);
                }),
                y(m(t), "slickPause", function () {
                  return t.innerSlider.pause("paused");
                }),
                y(m(t), "slickPlay", function () {
                  return t.innerSlider.autoPlay("play");
                }),
                (t.state = { breakpoint: null }),
                (t._responsiveMediaHandlers = []),
                t
              );
            }
            return (
              (t = d),
              (n = [
                {
                  key: "media",
                  value: function (e, t) {
                    b.register(e, t),
                      this._responsiveMediaHandlers.push({
                        query: e,
                        handler: t,
                      });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    if (this.props.responsive) {
                      var t = this.props.responsive.map(function (e) {
                        return e.breakpoint;
                      });
                      t.sort(function (e, t) {
                        return e - t;
                      }),
                        t.forEach(function (n, r) {
                          var i;
                          (i =
                            0 === r
                              ? (0, o.default)({ minWidth: 0, maxWidth: n })
                              : (0, o.default)({
                                  minWidth: t[r - 1] + 1,
                                  maxWidth: n,
                                })),
                            (0, s.canUseDOM)() &&
                              e.media(i, function () {
                                e.setState({ breakpoint: n });
                              });
                        });
                      var n = (0, o.default)({ minWidth: t.slice(-1)[0] });
                      (0, s.canUseDOM)() &&
                        this.media(n, function () {
                          e.setState({ breakpoint: null });
                        });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this._responsiveMediaHandlers.forEach(function (e) {
                      b.unregister(e.query, e.handler);
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t,
                      n = this;
                    (e = this.state.breakpoint
                      ? "unslick" ===
                        (t = this.props.responsive.filter(function (e) {
                          return e.breakpoint === n.state.breakpoint;
                        }))[0].settings
                        ? "unslick"
                        : f(f(f({}, l.default), this.props), t[0].settings)
                      : f(f({}, l.default), this.props)).centerMode &&
                      (e.slidesToScroll, (e.slidesToScroll = 1)),
                      e.fade &&
                        (e.slidesToShow,
                        e.slidesToScroll,
                        (e.slidesToShow = 1),
                        (e.slidesToScroll = 1));
                    var r = i.default.Children.toArray(this.props.children);
                    (r = r.filter(function (e) {
                      return "string" === typeof e ? !!e.trim() : !!e;
                    })),
                      e.variableWidth &&
                        (e.rows > 1 || e.slidesPerRow > 1) &&
                        (console.warn(
                          "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                        ),
                        (e.variableWidth = !1));
                    for (
                      var o = [], s = null, u = 0;
                      u < r.length;
                      u += e.rows * e.slidesPerRow
                    ) {
                      for (
                        var d = [], p = u;
                        p < u + e.rows * e.slidesPerRow;
                        p += e.slidesPerRow
                      ) {
                        for (
                          var h = [], v = p;
                          v < p + e.slidesPerRow &&
                          (e.variableWidth &&
                            r[v].props.style &&
                            (s = r[v].props.style.width),
                          !(v >= r.length));
                          v += 1
                        )
                          h.push(
                            i.default.cloneElement(r[v], {
                              key: 100 * u + 10 * p + v,
                              tabIndex: -1,
                              style: {
                                width: "".concat(100 / e.slidesPerRow, "%"),
                                display: "inline-block",
                              },
                            })
                          );
                        d.push(
                          i.default.createElement("div", { key: 10 * u + p }, h)
                        );
                      }
                      e.variableWidth
                        ? o.push(
                            i.default.createElement(
                              "div",
                              { key: u, style: { width: s } },
                              d
                            )
                          )
                        : o.push(i.default.createElement("div", { key: u }, d));
                    }
                    if ("unslick" === e) {
                      var m = "regular slider " + (this.props.className || "");
                      return i.default.createElement(
                        "div",
                        { className: m },
                        r
                      );
                    }
                    return (
                      o.length <= e.slidesToShow && (e.unslick = !0),
                      i.default.createElement(
                        a.InnerSlider,
                        c(
                          {
                            style: this.props.style,
                            ref: this.innerSliderRefHandler,
                          },
                          e
                        ),
                        o
                      )
                    );
                  },
                },
              ]) && p(t.prototype, n),
              r && p(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              d
            );
          })(i.default.Component);
        t.default = x;
      },
      4931: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Track = void 0);
        var i = l(n(2791)),
          a = l(n(1694)),
          o = n(8026);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s() {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            s.apply(this, arguments)
          );
        }
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function c(e, t) {
          return (
            (c =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            c(e, t)
          );
        }
        function d(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = p(e);
            if (t) {
              var a = p(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === r(t) || "function" === typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return f(e);
            })(this, n);
          };
        }
        function f(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        function h(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? h(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function m(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var g = function (e) {
            var t, n, r, i, a;
            return (
              (r =
                (a = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 ||
                a >= e.slideCount),
              e.centerMode
                ? ((i = Math.floor(e.slidesToShow / 2)),
                  (n = (a - e.currentSlide) % e.slideCount === 0),
                  a > e.currentSlide - i - 1 &&
                    a <= e.currentSlide + i &&
                    (t = !0))
                : (t =
                    e.currentSlide <= a && a < e.currentSlide + e.slidesToShow),
              {
                "slick-slide": !0,
                "slick-active": t,
                "slick-center": n,
                "slick-cloned": r,
                "slick-current":
                  a ===
                  (e.targetSlide < 0
                    ? e.targetSlide + e.slideCount
                    : e.targetSlide >= e.slideCount
                    ? e.targetSlide - e.slideCount
                    : e.targetSlide),
              }
            );
          },
          y = function (e, t) {
            return e.key || t;
          },
          b = function (e) {
            var t,
              n = [],
              r = [],
              l = [],
              s = i.default.Children.count(e.children),
              u = (0, o.lazyStartIndex)(e),
              c = (0, o.lazyEndIndex)(e);
            return (
              i.default.Children.forEach(e.children, function (d, f) {
                var p,
                  h = {
                    message: "children",
                    index: f,
                    slidesToScroll: e.slidesToScroll,
                    currentSlide: e.currentSlide,
                  };
                p =
                  !e.lazyLoad ||
                  (e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0)
                    ? d
                    : i.default.createElement("div", null);
                var m = (function (e) {
                    var t = {};
                    return (
                      (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
                        (t.width = e.slideWidth),
                      e.fade &&
                        ((t.position = "relative"),
                        e.vertical
                          ? (t.top = -e.index * parseInt(e.slideHeight))
                          : (t.left = -e.index * parseInt(e.slideWidth)),
                        (t.opacity = e.currentSlide === e.index ? 1 : 0),
                        e.useCSS &&
                          (t.transition =
                            "opacity " +
                            e.speed +
                            "ms " +
                            e.cssEase +
                            ", visibility " +
                            e.speed +
                            "ms " +
                            e.cssEase)),
                      t
                    );
                  })(v(v({}, e), {}, { index: f })),
                  b = p.props.className || "",
                  x = g(v(v({}, e), {}, { index: f }));
                if (
                  (n.push(
                    i.default.cloneElement(p, {
                      key: "original" + y(p, f),
                      "data-index": f,
                      className: (0, a.default)(x, b),
                      tabIndex: "-1",
                      "aria-hidden": !x["slick-active"],
                      style: v(v({ outline: "none" }, p.props.style || {}), m),
                      onClick: function (t) {
                        p.props && p.props.onClick && p.props.onClick(t),
                          e.focusOnSelect && e.focusOnSelect(h);
                      },
                    })
                  ),
                  e.infinite && !1 === e.fade)
                ) {
                  var w = s - f;
                  w <= (0, o.getPreClones)(e) &&
                    s !== e.slidesToShow &&
                    ((t = -w) >= u && (p = d),
                    (x = g(v(v({}, e), {}, { index: t }))),
                    r.push(
                      i.default.cloneElement(p, {
                        key: "precloned" + y(p, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, a.default)(x, b),
                        "aria-hidden": !x["slick-active"],
                        style: v(v({}, p.props.style || {}), m),
                        onClick: function (t) {
                          p.props && p.props.onClick && p.props.onClick(t),
                            e.focusOnSelect && e.focusOnSelect(h);
                        },
                      })
                    )),
                    s !== e.slidesToShow &&
                      ((t = s + f) < c && (p = d),
                      (x = g(v(v({}, e), {}, { index: t }))),
                      l.push(
                        i.default.cloneElement(p, {
                          key: "postcloned" + y(p, t),
                          "data-index": t,
                          tabIndex: "-1",
                          className: (0, a.default)(x, b),
                          "aria-hidden": !x["slick-active"],
                          style: v(v({}, p.props.style || {}), m),
                          onClick: function (t) {
                            p.props && p.props.onClick && p.props.onClick(t),
                              e.focusOnSelect && e.focusOnSelect(h);
                          },
                        })
                      ));
                }
              }),
              e.rtl ? r.concat(n, l).reverse() : r.concat(n, l)
            );
          },
          x = (function (e) {
            !(function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && c(e, t);
            })(o, e);
            var t,
              n,
              r,
              a = d(o);
            function o() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o);
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                m(f((e = a.call.apply(a, [this].concat(n)))), "node", null),
                m(f(e), "handleRef", function (t) {
                  e.node = t;
                }),
                e
              );
            }
            return (
              (t = o),
              (n = [
                {
                  key: "render",
                  value: function () {
                    var e = b(this.props),
                      t = this.props,
                      n = {
                        onMouseEnter: t.onMouseEnter,
                        onMouseOver: t.onMouseOver,
                        onMouseLeave: t.onMouseLeave,
                      };
                    return i.default.createElement(
                      "div",
                      s(
                        {
                          ref: this.handleRef,
                          className: "slick-track",
                          style: this.props.trackStyle,
                        },
                        n
                      ),
                      e
                    );
                  },
                },
              ]) && u(t.prototype, n),
              r && u(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              o
            );
          })(i.default.PureComponent);
        t.Track = x;
      },
      8026: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.checkSpecKeys =
            t.checkNavigable =
            t.changeSlide =
            t.canUseDOM =
            t.canGoNext =
              void 0),
          (t.clamp = s),
          (t.swipeStart =
            t.swipeMove =
            t.swipeEnd =
            t.slidesOnRight =
            t.slidesOnLeft =
            t.slideHandler =
            t.siblingDirection =
            t.safePreventDefault =
            t.lazyStartIndex =
            t.lazySlidesOnRight =
            t.lazySlidesOnLeft =
            t.lazyEndIndex =
            t.keyHandler =
            t.initializedState =
            t.getWidth =
            t.getTrackLeft =
            t.getTrackCSS =
            t.getTrackAnimateCSS =
            t.getTotalSlides =
            t.getSwipeDirection =
            t.getSlideCount =
            t.getRequiredLazySlides =
            t.getPreClones =
            t.getPostClones =
            t.getOnDemandLazySlides =
            t.getNavigableIndexes =
            t.getHeight =
            t.extractObject =
              void 0);
        var r,
          i = (r = n(2791)) && r.__esModule ? r : { default: r };
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function l(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function s(e, t, n) {
          return Math.max(t, Math.min(e, n));
        }
        var u = function (e) {
          ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) ||
            e.preventDefault();
        };
        t.safePreventDefault = u;
        var c = function (e) {
          for (var t = [], n = d(e), r = f(e), i = n; i < r; i++)
            e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
          return t;
        };
        t.getOnDemandLazySlides = c;
        t.getRequiredLazySlides = function (e) {
          for (var t = [], n = d(e), r = f(e), i = n; i < r; i++) t.push(i);
          return t;
        };
        var d = function (e) {
          return e.currentSlide - p(e);
        };
        t.lazyStartIndex = d;
        var f = function (e) {
          return e.currentSlide + h(e);
        };
        t.lazyEndIndex = f;
        var p = function (e) {
          return e.centerMode
            ? Math.floor(e.slidesToShow / 2) +
                (parseInt(e.centerPadding) > 0 ? 1 : 0)
            : 0;
        };
        t.lazySlidesOnLeft = p;
        var h = function (e) {
          return e.centerMode
            ? Math.floor((e.slidesToShow - 1) / 2) +
                1 +
                (parseInt(e.centerPadding) > 0 ? 1 : 0)
            : e.slidesToShow;
        };
        t.lazySlidesOnRight = h;
        var v = function (e) {
          return (e && e.offsetWidth) || 0;
        };
        t.getWidth = v;
        var m = function (e) {
          return (e && e.offsetHeight) || 0;
        };
        t.getHeight = m;
        var g = function (e) {
          var t,
            n,
            r,
            i,
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (
            (t = e.startX - e.curX),
            (n = e.startY - e.curY),
            (r = Math.atan2(n, t)),
            (i = Math.round((180 * r) / Math.PI)) < 0 &&
              (i = 360 - Math.abs(i)),
            (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
              ? "left"
              : i >= 135 && i <= 225
              ? "right"
              : !0 === a
              ? i >= 35 && i <= 135
                ? "up"
                : "down"
              : "vertical"
          );
        };
        t.getSwipeDirection = g;
        var y = function (e) {
          var t = !0;
          return (
            e.infinite ||
              (((e.centerMode && e.currentSlide >= e.slideCount - 1) ||
                e.slideCount <= e.slidesToShow ||
                e.currentSlide >= e.slideCount - e.slidesToShow) &&
                (t = !1)),
            t
          );
        };
        t.canGoNext = y;
        t.extractObject = function (e, t) {
          var n = {};
          return (
            t.forEach(function (t) {
              return (n[t] = e[t]);
            }),
            n
          );
        };
        t.initializedState = function (e) {
          var t,
            n = i.default.Children.count(e.children),
            r = e.listRef,
            a = Math.ceil(v(r)),
            l = e.trackRef && e.trackRef.node,
            s = Math.ceil(v(l));
          if (e.vertical) t = a;
          else {
            var u = e.centerMode && 2 * parseInt(e.centerPadding);
            "string" === typeof e.centerPadding &&
              "%" === e.centerPadding.slice(-1) &&
              (u *= a / 100),
              (t = Math.ceil((a - u) / e.slidesToShow));
          }
          var d = r && m(r.querySelector('[data-index="0"]')),
            f = d * e.slidesToShow,
            p = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
          e.rtl && void 0 === e.currentSlide && (p = n - 1 - e.initialSlide);
          var h = e.lazyLoadedList || [],
            g = c(o(o({}, e), {}, { currentSlide: p, lazyLoadedList: h })),
            y = {
              slideCount: n,
              slideWidth: t,
              listWidth: a,
              trackWidth: s,
              currentSlide: p,
              slideHeight: d,
              listHeight: f,
              lazyLoadedList: (h = h.concat(g)),
            };
          return (
            null === e.autoplaying && e.autoplay && (y.autoplaying = "playing"),
            y
          );
        };
        t.slideHandler = function (e) {
          var t = e.waitForAnimate,
            n = e.animating,
            r = e.fade,
            i = e.infinite,
            a = e.index,
            l = e.slideCount,
            u = e.lazyLoad,
            d = e.currentSlide,
            f = e.centerMode,
            p = e.slidesToScroll,
            h = e.slidesToShow,
            v = e.useCSS,
            m = e.lazyLoadedList;
          if (t && n) return {};
          var g,
            b,
            x,
            w = a,
            S = {},
            j = {},
            C = i ? a : s(a, 0, l - 1);
          if (r) {
            if (!i && (a < 0 || a >= l)) return {};
            a < 0 ? (w = a + l) : a >= l && (w = a - l),
              u && m.indexOf(w) < 0 && (m = m.concat(w)),
              (S = {
                animating: !0,
                currentSlide: w,
                lazyLoadedList: m,
                targetSlide: w,
              }),
              (j = { animating: !1, targetSlide: w });
          } else
            (g = w),
              w < 0
                ? ((g = w + l), i ? l % p !== 0 && (g = l - (l % p)) : (g = 0))
                : !y(e) && w > d
                ? (w = g = d)
                : f && w >= l
                ? ((w = i ? l : l - 1), (g = i ? 0 : l - 1))
                : w >= l &&
                  ((g = w - l), i ? l % p !== 0 && (g = 0) : (g = l - h)),
              !i && w + h >= l && (g = l - h),
              (b = E(o(o({}, e), {}, { slideIndex: w }))),
              (x = E(o(o({}, e), {}, { slideIndex: g }))),
              i || (b === x && (w = g), (b = x)),
              u && (m = m.concat(c(o(o({}, e), {}, { currentSlide: w })))),
              v
                ? ((S = {
                    animating: !0,
                    currentSlide: g,
                    trackStyle: A(o(o({}, e), {}, { left: b })),
                    lazyLoadedList: m,
                    targetSlide: C,
                  }),
                  (j = {
                    animating: !1,
                    currentSlide: g,
                    trackStyle: k(o(o({}, e), {}, { left: x })),
                    swipeLeft: null,
                    targetSlide: C,
                  }))
                : (S = {
                    currentSlide: g,
                    trackStyle: k(o(o({}, e), {}, { left: x })),
                    lazyLoadedList: m,
                    targetSlide: C,
                  });
          return { state: S, nextState: j };
        };
        t.changeSlide = function (e, t) {
          var n,
            r,
            i,
            a,
            l = e.slidesToScroll,
            s = e.slidesToShow,
            u = e.slideCount,
            c = e.currentSlide,
            d = e.targetSlide,
            f = e.lazyLoad,
            p = e.infinite;
          if (((n = u % l !== 0 ? 0 : (u - c) % l), "previous" === t.message))
            (a = c - (i = 0 === n ? l : s - n)),
              f && !p && (a = -1 === (r = c - i) ? u - 1 : r),
              p || (a = d - l);
          else if ("next" === t.message)
            (a = c + (i = 0 === n ? l : n)),
              f && !p && (a = ((c + l) % u) + n),
              p || (a = d + l);
          else if ("dots" === t.message) a = t.index * t.slidesToScroll;
          else if ("children" === t.message) {
            if (((a = t.index), p)) {
              var h = T(o(o({}, e), {}, { targetSlide: a }));
              a > t.currentSlide && "left" === h
                ? (a -= u)
                : a < t.currentSlide && "right" === h && (a += u);
            }
          } else "index" === t.message && (a = Number(t.index));
          return a;
        };
        t.keyHandler = function (e, t, n) {
          return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t
            ? ""
            : 37 === e.keyCode
            ? n
              ? "next"
              : "previous"
            : 39 === e.keyCode
            ? n
              ? "previous"
              : "next"
            : "";
        };
        t.swipeStart = function (e, t, n) {
          return (
            "IMG" === e.target.tagName && u(e),
            !t || (!n && -1 !== e.type.indexOf("mouse"))
              ? ""
              : {
                  dragging: !0,
                  touchObject: {
                    startX: e.touches ? e.touches[0].pageX : e.clientX,
                    startY: e.touches ? e.touches[0].pageY : e.clientY,
                    curX: e.touches ? e.touches[0].pageX : e.clientX,
                    curY: e.touches ? e.touches[0].pageY : e.clientY,
                  },
                }
          );
        };
        t.swipeMove = function (e, t) {
          var n = t.scrolling,
            r = t.animating,
            i = t.vertical,
            a = t.swipeToSlide,
            l = t.verticalSwiping,
            s = t.rtl,
            c = t.currentSlide,
            d = t.edgeFriction,
            f = t.edgeDragged,
            p = t.onEdge,
            h = t.swiped,
            v = t.swiping,
            m = t.slideCount,
            b = t.slidesToScroll,
            x = t.infinite,
            w = t.touchObject,
            S = t.swipeEvent,
            A = t.listHeight,
            j = t.listWidth;
          if (!n) {
            if (r) return u(e);
            i && a && l && u(e);
            var C,
              P = {},
              T = E(t);
            (w.curX = e.touches ? e.touches[0].pageX : e.clientX),
              (w.curY = e.touches ? e.touches[0].pageY : e.clientY),
              (w.swipeLength = Math.round(
                Math.sqrt(Math.pow(w.curX - w.startX, 2))
              ));
            var O = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
            if (!l && !v && O > 10) return { scrolling: !0 };
            l && (w.swipeLength = O);
            var N = (s ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
            l && (N = w.curY > w.startY ? 1 : -1);
            var M = Math.ceil(m / b),
              L = g(t.touchObject, l),
              I = w.swipeLength;
            return (
              x ||
                (((0 === c && ("right" === L || "down" === L)) ||
                  (c + 1 >= M && ("left" === L || "up" === L)) ||
                  (!y(t) && ("left" === L || "up" === L))) &&
                  ((I = w.swipeLength * d),
                  !1 === f && p && (p(L), (P.edgeDragged = !0)))),
              !h && S && (S(L), (P.swiped = !0)),
              (C = i ? T + I * (A / j) * N : s ? T - I * N : T + I * N),
              l && (C = T + I * N),
              (P = o(
                o({}, P),
                {},
                {
                  touchObject: w,
                  swipeLeft: C,
                  trackStyle: k(o(o({}, t), {}, { left: C })),
                }
              )),
              Math.abs(w.curX - w.startX) < 0.8 * Math.abs(w.curY - w.startY)
                ? P
                : (w.swipeLength > 10 && ((P.swiping = !0), u(e)), P)
            );
          }
        };
        t.swipeEnd = function (e, t) {
          var n = t.dragging,
            r = t.swipe,
            i = t.touchObject,
            a = t.listWidth,
            l = t.touchThreshold,
            s = t.verticalSwiping,
            c = t.listHeight,
            d = t.swipeToSlide,
            f = t.scrolling,
            p = t.onSwipe,
            h = t.targetSlide,
            v = t.currentSlide,
            m = t.infinite;
          if (!n) return r && u(e), {};
          var y = s ? c / l : a / l,
            b = g(i, s),
            S = {
              dragging: !1,
              edgeDragged: !1,
              scrolling: !1,
              swiping: !1,
              swiped: !1,
              swipeLeft: null,
              touchObject: {},
            };
          if (f) return S;
          if (!i.swipeLength) return S;
          if (i.swipeLength > y) {
            var k, j;
            u(e), p && p(b);
            var C = m ? v : h;
            switch (b) {
              case "left":
              case "up":
                (j = C + w(t)), (k = d ? x(t, j) : j), (S.currentDirection = 0);
                break;
              case "right":
              case "down":
                (j = C - w(t)), (k = d ? x(t, j) : j), (S.currentDirection = 1);
                break;
              default:
                k = C;
            }
            S.triggerSlideHandler = k;
          } else {
            var P = E(t);
            S.trackStyle = A(o(o({}, t), {}, { left: P }));
          }
          return S;
        };
        var b = function (e) {
          for (
            var t = e.infinite ? 2 * e.slideCount : e.slideCount,
              n = e.infinite ? -1 * e.slidesToShow : 0,
              r = e.infinite ? -1 * e.slidesToShow : 0,
              i = [];
            n < t;

          )
            i.push(n),
              (n = r + e.slidesToScroll),
              (r += Math.min(e.slidesToScroll, e.slidesToShow));
          return i;
        };
        t.getNavigableIndexes = b;
        var x = function (e, t) {
          var n = b(e),
            r = 0;
          if (t > n[n.length - 1]) t = n[n.length - 1];
          else
            for (var i in n) {
              if (t < n[i]) {
                t = r;
                break;
              }
              r = n[i];
            }
          return t;
        };
        t.checkNavigable = x;
        var w = function (e) {
          var t = e.centerMode
            ? e.slideWidth * Math.floor(e.slidesToShow / 2)
            : 0;
          if (e.swipeToSlide) {
            var n,
              r = e.listRef,
              i =
                (r.querySelectorAll && r.querySelectorAll(".slick-slide")) ||
                [];
            if (
              (Array.from(i).every(function (r) {
                if (e.vertical) {
                  if (r.offsetTop + m(r) / 2 > -1 * e.swipeLeft)
                    return (n = r), !1;
                } else if (r.offsetLeft - t + v(r) / 2 > -1 * e.swipeLeft) return (n = r), !1;
                return !0;
              }),
              !n)
            )
              return 0;
            var a =
              !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
            return Math.abs(n.dataset.index - a) || 1;
          }
          return e.slidesToScroll;
        };
        t.getSlideCount = w;
        var S = function (e, t) {
          return t.reduce(function (t, n) {
            return t && e.hasOwnProperty(n);
          }, !0)
            ? null
            : console.error("Keys Missing:", e);
        };
        t.checkSpecKeys = S;
        var k = function (e) {
          var t, n;
          S(e, [
            "left",
            "variableWidth",
            "slideCount",
            "slidesToShow",
            "slideWidth",
          ]);
          var r = e.slideCount + 2 * e.slidesToShow;
          e.vertical ? (n = r * e.slideHeight) : (t = P(e) * e.slideWidth);
          var i = { opacity: 1, transition: "", WebkitTransition: "" };
          if (e.useTransform) {
            var a = e.vertical
                ? "translate3d(0px, " + e.left + "px, 0px)"
                : "translate3d(" + e.left + "px, 0px, 0px)",
              l = e.vertical
                ? "translate3d(0px, " + e.left + "px, 0px)"
                : "translate3d(" + e.left + "px, 0px, 0px)",
              s = e.vertical
                ? "translateY(" + e.left + "px)"
                : "translateX(" + e.left + "px)";
            i = o(
              o({}, i),
              {},
              { WebkitTransform: a, transform: l, msTransform: s }
            );
          } else e.vertical ? (i.top = e.left) : (i.left = e.left);
          return (
            e.fade && (i = { opacity: 1 }),
            t && (i.width = t),
            n && (i.height = n),
            window &&
              !window.addEventListener &&
              window.attachEvent &&
              (e.vertical
                ? (i.marginTop = e.left + "px")
                : (i.marginLeft = e.left + "px")),
            i
          );
        };
        t.getTrackCSS = k;
        var A = function (e) {
          S(e, [
            "left",
            "variableWidth",
            "slideCount",
            "slidesToShow",
            "slideWidth",
            "speed",
            "cssEase",
          ]);
          var t = k(e);
          return (
            e.useTransform
              ? ((t.WebkitTransition =
                  "-webkit-transform " + e.speed + "ms " + e.cssEase),
                (t.transition = "transform " + e.speed + "ms " + e.cssEase))
              : e.vertical
              ? (t.transition = "top " + e.speed + "ms " + e.cssEase)
              : (t.transition = "left " + e.speed + "ms " + e.cssEase),
            t
          );
        };
        t.getTrackAnimateCSS = A;
        var E = function (e) {
          if (e.unslick) return 0;
          S(e, [
            "slideIndex",
            "trackRef",
            "infinite",
            "centerMode",
            "slideCount",
            "slidesToShow",
            "slidesToScroll",
            "slideWidth",
            "listWidth",
            "variableWidth",
            "slideHeight",
          ]);
          var t,
            n,
            r = e.slideIndex,
            i = e.trackRef,
            a = e.infinite,
            o = e.centerMode,
            l = e.slideCount,
            s = e.slidesToShow,
            u = e.slidesToScroll,
            c = e.slideWidth,
            d = e.listWidth,
            f = e.variableWidth,
            p = e.slideHeight,
            h = e.fade,
            v = e.vertical;
          if (h || 1 === e.slideCount) return 0;
          var m = 0;
          if (
            (a
              ? ((m = -j(e)),
                l % u !== 0 &&
                  r + u > l &&
                  (m = -(r > l ? s - (r - l) : l % u)),
                o && (m += parseInt(s / 2)))
              : (l % u !== 0 && r + u > l && (m = s - (l % u)),
                o && (m = parseInt(s / 2))),
            (t = v ? r * p * -1 + m * p : r * c * -1 + m * c),
            !0 === f)
          ) {
            var g,
              y = i && i.node;
            if (
              ((g = r + j(e)),
              (t = (n = y && y.childNodes[g]) ? -1 * n.offsetLeft : 0),
              !0 === o)
            ) {
              (g = a ? r + j(e) : r), (n = y && y.children[g]), (t = 0);
              for (var b = 0; b < g; b++)
                t -= y && y.children[b] && y.children[b].offsetWidth;
              (t -= parseInt(e.centerPadding)),
                (t += n && (d - n.offsetWidth) / 2);
            }
          }
          return t;
        };
        t.getTrackLeft = E;
        var j = function (e) {
          return e.unslick || !e.infinite
            ? 0
            : e.variableWidth
            ? e.slideCount
            : e.slidesToShow + (e.centerMode ? 1 : 0);
        };
        t.getPreClones = j;
        var C = function (e) {
          return e.unslick || !e.infinite ? 0 : e.slideCount;
        };
        t.getPostClones = C;
        var P = function (e) {
          return 1 === e.slideCount ? 1 : j(e) + e.slideCount + C(e);
        };
        t.getTotalSlides = P;
        var T = function (e) {
          return e.targetSlide > e.currentSlide
            ? e.targetSlide > e.currentSlide + O(e)
              ? "left"
              : "right"
            : e.targetSlide < e.currentSlide - N(e)
            ? "right"
            : "left";
        };
        t.siblingDirection = T;
        var O = function (e) {
          var t = e.slidesToShow,
            n = e.centerMode,
            r = e.rtl,
            i = e.centerPadding;
          if (n) {
            var a = (t - 1) / 2 + 1;
            return parseInt(i) > 0 && (a += 1), r && t % 2 === 0 && (a += 1), a;
          }
          return r ? 0 : t - 1;
        };
        t.slidesOnRight = O;
        var N = function (e) {
          var t = e.slidesToShow,
            n = e.centerMode,
            r = e.rtl,
            i = e.centerPadding;
          if (n) {
            var a = (t - 1) / 2 + 1;
            return parseInt(i) > 0 && (a += 1), r || t % 2 !== 0 || (a += 1), a;
          }
          return r ? t - 1 : 0;
        };
        t.slidesOnLeft = N;
        t.canUseDOM = function () {
          return !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          );
        };
      },
      6374: function (e, t, n) {
        "use strict";
        var r = n(2791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      9117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          A = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var i,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              S.call(t, i) && !A.hasOwnProperty(i) && (a[i] = t[i]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (s = e.defaultProps)) void 0 === a[i] && (a[i] = s[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function j(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, i, a, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === a ? "." + P(s, 0) : a),
              w(o)
                ? ((i = ""),
                  null != e && (i = e.replace(C, "$&/") + "/"),
                  T(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (j(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((l = e[u]), u);
              s += T(l, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += T((l = l.value), t, i, (c = a + P(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !A.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      474: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = (function () {
            if ("undefined" !== typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0]);
                  }
                }),
                t
              );
            })();
          })(),
          i =
            "undefined" !== typeof window &&
            "undefined" !== typeof document &&
            window.document === document,
          a =
            "undefined" !== typeof n.g && n.g.Math === Math
              ? n.g
              : "undefined" !== typeof self && self.Math === Math
              ? self
              : "undefined" !== typeof window && window.Math === Math
              ? window
              : Function("return this")(),
          o =
            "function" === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(a)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                },
          l = 2;
        var s = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          u = "undefined" !== typeof MutationObserver,
          c = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                  var n = !1,
                    r = !1,
                    i = 0;
                  function a() {
                    n && ((n = !1), e()), r && u();
                  }
                  function s() {
                    o(a);
                  }
                  function u() {
                    var e = Date.now();
                    if (n) {
                      if (e - i < l) return;
                      r = !0;
                    } else (n = !0), (r = !1), setTimeout(s, t);
                    i = e;
                  }
                  return u;
                })(this.refresh.bind(this), 20));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                i &&
                  !this.connected_ &&
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.addEventListener("resize", this.refresh),
                  u
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                i &&
                  this.connected_ &&
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? "" : t;
                s.some(function (e) {
                  return !!~n.indexOf(e);
                }) && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          d = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var i = r[n];
              Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          f = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || a;
          },
          p = b(0, 0, 0, 0);
        function h(e) {
          return parseFloat(e) || 0;
        }
        function v(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            return t + h(e["border-" + n + "-width"]);
          }, 0);
        }
        function m(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return p;
          var r = f(e).getComputedStyle(e),
            i = (function (e) {
              for (
                var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                n < r.length;
                n++
              ) {
                var i = r[n],
                  a = e["padding-" + i];
                t[i] = h(a);
              }
              return t;
            })(r),
            a = i.left + i.right,
            o = i.top + i.bottom,
            l = h(r.width),
            s = h(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(l + a) !== t && (l -= v(r, "left", "right") + a),
              Math.round(s + o) !== n && (s -= v(r, "top", "bottom") + o)),
            !(function (e) {
              return e === f(e).document.documentElement;
            })(e))
          ) {
            var u = Math.round(l + a) - t,
              c = Math.round(s + o) - n;
            1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(c) && (s -= c);
          }
          return b(i.left, i.top, l, s);
        }
        var g =
          "undefined" !== typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof f(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof f(e).SVGElement &&
                  "function" === typeof e.getBBox
                );
              };
        function y(e) {
          return i
            ? g(e)
              ? (function (e) {
                  var t = e.getBBox();
                  return b(0, 0, t.width, t.height);
                })(e)
              : m(e)
            : p;
        }
        function b(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var x = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = b(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = y(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          w = function (e, t) {
            var n = (function (e) {
              var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                a =
                  "undefined" !== typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object,
                o = Object.create(a.prototype);
              return (
                d(o, {
                  x: t,
                  y: n,
                  width: r,
                  height: i,
                  top: n,
                  right: t + r,
                  bottom: i + n,
                  left: t,
                }),
                o
              );
            })(t);
            d(this, { target: e, contentRect: n });
          },
          S = (function () {
            function e(e, t, n) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new r()),
                "function" !== typeof e)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = n);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new x(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new w(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          k = "undefined" !== typeof WeakMap ? new WeakMap() : new r(),
          A = function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var n = c.getInstance(),
              r = new S(t, n, this);
            k.set(this, r);
          };
        ["observe", "unobserve", "disconnect"].forEach(function (e) {
          A.prototype[e] = function () {
            var t;
            return (t = k.get(this))[e].apply(t, arguments);
          };
        });
        var E = "undefined" !== typeof a.ResizeObserver ? a.ResizeObserver : A;
        t.default = E;
      },
      6813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < i && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(u)) (v = !0), L(S);
            else {
              var t = r(c);
              null !== t && I(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (v = !1), m && ((m = !1), y(j), (j = -1)), (h = !0);
          var a = p;
          try {
            for (
              x(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var l = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && i(u),
                  x(n);
              } else i(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && I(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          A = !1,
          E = null,
          j = -1,
          C = 5,
          P = -1;
        function T() {
          return !(t.unstable_now() - P < C);
        }
        function O() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((A = !1), (E = null));
            }
          } else A = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            M = N.port2;
          (N.port1.onmessage = O),
            (k = function () {
              M.postMessage(null);
            });
        } else
          k = function () {
            g(O, 0);
          };
        function L(e) {
          (E = e), A || ((A = !0), k());
        }
        function I(e, n) {
          j = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), L(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(j), (j = -1)) : (m = !0), I(w, a - o)))
                : ((e.sortIndex = l), n(u, e), v || h || ((v = !0), L(S))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      2806: function (e) {
        e.exports = function (e) {
          return e
            .replace(/[A-Z]/g, function (e) {
              return "-" + e.toLowerCase();
            })
            .toLowerCase();
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.g = (function () {
    if ("object" === typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" === typeof window) return window;
    }
  })()),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = n(2791),
        t = n(1250);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a,
                o,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (c) {
                (u = !0), (i = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var o = n(4048),
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = e.createContext && e.createContext(l),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        c = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      function d(t) {
        return (
          t &&
          t.map(function (t, n) {
            return e.createElement(t.tag, u({ key: n }, t.attr), d(t.child));
          })
        );
      }
      function f(t) {
        return function (n) {
          return e.createElement(p, u({ attr: u({}, t.attr) }, n), d(t.child));
        };
      }
      function p(t) {
        var n = function (n) {
          var r,
            i = t.attr,
            a = t.size,
            o = t.title,
            l = c(t, ["attr", "size", "title"]),
            s = a || n.size || "1em";
          return (
            n.className && (r = n.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            e.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                i,
                l,
                {
                  className: r,
                  style: u(u({ color: t.color || n.color }, n.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && e.createElement("title", null, o),
              t.children
            )
          );
        };
        return void 0 !== s
          ? e.createElement(s.Consumer, null, function (e) {
              return n(e);
            })
          : n(l);
      }
      function h(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z",
              },
            },
          ],
        })(e);
      }
      function m(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
              },
            },
          ],
        })(e);
      }
      function g(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 576 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z",
              },
            },
          ],
        })(e);
      }
      function y(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 496 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
              },
            },
          ],
        })(e);
      }
      function b(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
              },
            },
          ],
        })(e);
      }
      function x(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
              },
            },
          ],
        })(e);
      }
      function w(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
              },
            },
          ],
        })(e);
      }
      function S(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M23.235 6.825v11.997a.924.924 0 0 1-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.927.927 0 0 1 .837 0l10.81 6.243v.482zm-8.741 4.562A9631.706 9631.706 0 0 0 6.8 6.943a.94.94 0 0 0-.837 0c-1.733 1.001-3.467 2-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.927.927 0 0 0 .419-.724zM.765 19.317l5.613 3.241V16.07Z",
              },
            },
          ],
        })(e);
      }
      var A = n(184),
        E = function () {
          return (0, A.jsxs)("div", {
            className:
              "flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between",
            children: [
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsx)("h2", {
                    className: "text-base uppercase font-titleFont mb-4",
                    children: "Find me on",
                  }),
                  (0, A.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://github.com/sheedpro",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(x, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "mailto:san12williams@gmail.com",
                          children: (0, A.jsx)(w, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://www.linkedin.com/in/sseruwagi-williams-64365026a/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(h, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsx)("h2", {
                    className: "text-base uppercase font-titleFont mb-4",
                    children: "BEST WEB STACK",
                  }),
                  (0, A.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)(S, {}),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)(b, {}),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)(m, {}),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)(v, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        j = function () {
          var e = a(
            (0, o.Ku)({
              words: [
                "React Developer.",
                "junior Developer.",
                "Wordpress developer.",
                "Wordpress theme Developer \ud83d\udcf8",
              ],
              loop: !0,
              typeSpeed: 20,
              deleteSpeed: 10,
              delaySpeed: 2e3,
            }),
            1
          )[0];
          return (0, A.jsxs)("div", {
            className: "w-full lgl:w-1/2 flex flex-col gap-20",
            children: [
              (0, A.jsxs)("div", {
                className: "flex flex-col gap-5",
                children: [
                  (0, A.jsx)("h4", {
                    className: " text-lg font-normal",
                    children:
                      "Hola there \ud83d\udc40\ud83d\ude4b\u200d\u2642\ufe0f  ",
                  }),
                  (0, A.jsxs)("h1", {
                    className: "text-6xl font-bold text-white",
                    children: [
                      "Hi, I'm ",
                      (0, A.jsx)("span", {
                        className: "text-designColor capitalize",
                        children: "Sseruwagi williams favour",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("h2", {
                    className: "text-4xl font-bold text-white",
                    children: [
                      "a ",
                      (0, A.jsx)("span", { children: e }),
                      (0, A.jsx)(o.CF, {
                        cursorBlinking: "false",
                        cursorStyle: "|",
                        cursorColor: "#ff014f",
                      }),
                    ],
                  }),
                  (0, A.jsx)("p", {
                    className:
                      "text-base font-bodyFont leading-6 tracking-wide",
                    children:
                      '"I am a Front-end developer specializing in WordPress,web development with 2 years of experience including 2 years of agency experience. Developed.. With a strong foundation in web development and a keen eye for data, I create innovative solutions that bridge technology and user experience."',
                  }),
                ],
              }),
              (0, A.jsx)(E, {}),
            ],
          });
        },
        C = n.p + "static/media/logo.6bf5494a6cc64948ef0e.jpg",
        P = n.p + "static/media/projectOne.af7af54698e10edc390b.png",
        T = n.p + "static/media/projectTwo.45074659b9fbea0ca228.png",
        O = n.p + "static/media/projectThree.22576d66b26d121f299d.png",
        N = n.p + "static/media/projectFour.33cdddd1896419447226.png",
        M = n.p + "static/media/projectFive.944658b5f0d273fe8e1e.png",
        L = n.p + "static/media/projectSix.9316f9935e652869f5c2.png",
        I = n.p + "static/media/testimonialOne.a70003b7c3a357895d2c.jpg",
        R =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAHECAYAAACnX1ofAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNjRENDQyRDZBOTExRUJBNDJGOUFGQ0ExMTJBMjNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUyNjRENDQzRDZBOTExRUJBNDJGOUFGQ0ExMTJBMjNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTI2NEQ0NDBENkE5MTFFQkE0MkY5QUZDQTExMkEyM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTI2NEQ0NDFENkE5MTFFQkE0MkY5QUZDQTExMkEyM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lY/DuAAAZZ0lEQVR42uzde/xm1bwH8JVqdBGmmpJ0w9EJIcJJIUK538klCTm5hMrBOR1HiNORW8mtQypHTnXc6kUpQkpJKOOSdJlCqZlmutek+p31tfd4jczUzG/Wfp699vN+v17r1fzBep69nr1+n733WnutlaamphIATLq7aQIAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAEyYVUpVNHPtWZ/P/1lLkzIQc3N500CP7ZO5zPITMxDXLZg/97UlKlppamqqVCDGH5B1/TYMxCW5bDrQY5uTyyZ+YgZiXg7EIhd4HpkCgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFgea3Sw+/00Vyu9NMwTRvmsqdmGIlP5PJHzcA0rZfL3gLxzn0ul984V5imRwnEkTkil59qBqZpi74FokemACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIAFCRVXr4nc7M5TY/TS8ckctemoGlOEVf7Y1jctlDMwwvEO/pZ+mNNTQB+moV1tQEK84jUwAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiACyvkhsEb53Lypq0F96Yyz6agaV4Qurn5uCT6DW57KsZBhaIC+bPvWQ6/7+Za8/yK5S3QBNwJy7VBL1xlSboD49MAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBAp+btOTfCx3+40Ql+drL4qEIdpjUL13FLhsc8oVM9CpxEjsKa+2p++KhAF4p358wR3slucRozA6vpqf/qqQBSIQ+tkd3eHiL6qrwpESneyGkNhVXeI6Kv6qkCkdCe7tsJjX80dIvqqvioQ0clSmikQ0Vf1VYHIIusVqueaCo99nUL1LHAaoa9OVl8ViMN0v0L1XF3hsa9dqJ75TiMq6qsL9FWByN+LRzDrFqrrsgm+6pznVKJjK+dy30J1XT7BfXWuQKTrK85wxQRfdV7lVKJjG+Syir7qDpHubFKonlsqvUvaqG9XndBxX52q9A6xd31VILpDXJrLU53rI27ct6tO6Livzkt1vjdbqq8We5ojEIdn00L1XFzhsd8jlRs/vdyphL7amXgpf8NCdf1JILI0WxWq58IKj32TgnXNcSqhr3Z6d7xy3y4IBOLwPGKCrzpLBWKMSVzvVEJf7X1fvTEZQ2QpZqVyA9W/q/D4N3d3SCXWyuUf9NUV76sL5s8tNtdBIA7LIwvWNbvC43/oBF9xU9/d4d301X71VYEoEJdkYaVXnQ8RiExYX43d4n+jrwpE/l6pQfrzcrm1smNfKZcHF6rrIqcSlfTVmFBz4wQHYtG+KhCHI37LJxaq6+cVHn8M0q9VqK5fOp3o2JMmuK+ul8otal60rwrEYV1xljrJflzh8W9dqJ4pgUjHtkjlXkqf5L4azhWILMnTCtZ1VoXHv02hemJM4lqnE/pq7/vq3AXz514pEFmSpxaq56ZU56y1xxaqZ7ZTiUr6aozz/2yC++q5pb+YQByGNXN5XKG6zszlz5Ud/4xcHtXXTgZ3OFdLjfX/NNU3oSYy5zECkS7FAP3dC9X1vQqPP8ZPVytUl/FDurRdatbcndS+GrNL79XXvioQh2HngnXV2Mm2L1jXmU4n9NUq+uoZApE7iqvN5xWq64ZU5yB9qTGZS3P5vVOKjsRTnBcVqisWzzh9gvtqbHl1vkDkjl6QmjHEEk5O9e2rtnou2xaq64dOJzr07FxmFqrrB+0FbE1WSeXGT09LHezXKhDr98qCdX2zwuOPDlZq/PB0pxP6amdi4t89+9xXBWLd7pvLkwvVFVdbJ1TYBk8tWNePnFJ0ZJ1cnl6wvm/pqwKRv7VrKrfJ5k9y+WOFbfCcQvVck8wwpdu7wxmF6orz9IIK2+C5heq5OTWvnAhE/ioG6N9csL6jK2yD2ELngYXqOiWX25xWdCAuWvec8L4aez9uWaiuU1MzqUgg8levSM0j0xLicen/VdgGLyxY14lOKTry4lweMOGB+OIa+qpArFNsdbRXwfpigPpSgQid2LtgXbFUW417lb5AINKVnVK5HafD4RW2Qax4sUWhun5V6QUB/RezoB894X31/qnchshzUocbIgvEOr2jYF3X53JMhW3wKneHTFhfjXGzoypsg11S81Sr931VINbnGans8kfH5nJdZW2wStvJSjnBaUUHtm/7aylfz+WqytoggnDXWvqqQKwvCA4sXOehFbZD7Ce3QaG6YgmoU51adPC39SOF6/xshe0Qj4w3K1RXXLifLBBZ5PW5PLhgfWemOhez3q1gXV9N9W13Rf/FI/1HFqwv3j38/oT31W+kZr9WgchftkzZr3Cdn6iwHdZPzZqQpRzj1KKwNXLZv3CdB6UO1u7sWKzbWnIm+LGjuK2nDu/OZVbB+mJVmhrfPdwjldv78YpKr7rpt3flsmHB+ubm8qUK2+F1qdzGA1fn8m2BSNgml7cVrvPDqb6dLWa0gVhKXBBYnYaStmoDsaSPp44fFXYgVud5Q8H6vpY6Wp1GINYlHr8ckcqtWbroivO/K2yLl+Zyn4L1eVxKSfHk4shcVi1YZ6yx+8kK2yL2aN2str4qEPvvgNSsA1j6ivOGCtvirQXrisWR7X9ISe9NZRfMCIe0oVibkk+0/pA6nl0qEOsQWzu9uXCdcXdY42SaWJ3nUQXr+1yqb5IC/RXDGm8vXGeMm320wraIfQ+3K1jfYWlEQxsCsb/iPbt4/LJS4XrjKva6Cttj34J13dq2LZSwbi7/k8oOa4QP5jK/0jvlUm5vA3EkBGI/rZ7LcansTLVwYapz7PDJha84j8/lcqcZBcS4Yawgc//C9cZjwkMqbI9/yuUpBes7KZdLBOLkijvCeJy3dQd1xyOdWypsk/8oXN+hTjMKieGHbTuo952pvpmlXfTVkV7AC8T++bdcXt5BvSe1V7K12SE1yz+VMieNaICewYst2HbvoN7Tcvlyhe0R46hPL1hfPMU5XiBOrniR9X0d1BtLk721wvaI8/O/Ctf5seTdQ1bczqn8usKpPTf3THVO+CrdHgenES+rKBD747WpWby3i98kXt04r8I2eWUqO7N0QRrhAD2DDsMuJtGEeCXqnArb5EWp7KPjeC1s5PMdBGJ/wvDQjn6PCMIPVtgmq+Xy/sJ1fjo1+z/CdMXiEF/sKAwvzuU9FbbJqh38jYkwHPlWVwJx/PZsf/wufouYsvyaXG6usF1ifGbjgvXFsk+HON1YATGkEWuKrtJB3VPthXGNC2a8MZVdPCReizpoHAciEMcnOtXBbVmpo8+I8bczKmybCMJ9C9cZf8i8asF0xN3gAe2F68odfUb8HfhehW0TSynuV7jOWGN4zrj+KDN667c/+nYdfsbZqc7HLyGmsq9ZsL6YqPAhpx3TsE4uR6dmtnNXZqfyC4KPSkxSu3fB+m5vLz7Gwh3i6EUIntVxGMY42StSnRvfPqctJcUEiN869VhOj237apdheFPbV2sc1ogX8Hfu4O7wXIE4fGulZgzrB6ns2NiSrrB2yeX8Ctso7goPLlxnXBS8z+nHcogdZmIN0dNT+RVoFrdo3HB2hW0Uk95K78IRT3L2G+dBeWQ6GrEw9Wdy2WQEn/Xvqc4X8MOBHbRRvGZxkVOQZfT41KwU9aARfNYHUp0v4If9O2ijo3L5zTgPaqWpqfG+/zlz7VlD7lzxWDSWYHrWiD7v2NRMC6/xpd54LBUryJScYBTL1G2exjRAT1VilZVYJeqZqbtJbouLDW/j3b3bK2yr2M3i1FR2glHcHT4kLefQxoL5c90hViCerb87lyeM8DN/nMurKg3De+XyhQ7+EH1aGHIXntj21R1G+Jnx4v0ulYZhDGscmcrPtj0s9WCcXyCWs2V7dxaDzA8Y8Wf/KjUTUW6utO3inaONCtcZL/UaO2RJtmj76UvbJwijFGP78cTohkrb7sAO/r5d216UjJ1AnJ64k3lganakiKXFdmpv98dhdntHemWlbRkz7HbtoN545WS+U5X2D/iivrpjLg8b0/eIO6DYyuyyStvxBbns0UG9MR55RS/+sE/4GOJLctnsLv43sd/ZzMXK2rk8NJV992a6ftGG4dxKO1hcncf7kvfo4I75EalZ8YJheH6660kcM+7QT2e2fXVmD77/eW0Y1ro4RPyd/FkHf/cuaG8mprUtnTHEsnZr7+5qdG4bhvMq/f4xbfvLHYRh2EcYDs4r2zuUGsWd4Q4Vh2GsVfqljm4C9kk92qPVe4h1OjGX7SsOwxDvG27VQb3fyOXbThF6IpZji9nml1V8DDFuuE0H9cas8uP6dKACsT6xK8azc7m64mOIxYC72Fg1Jirs5RShR311x8ovXGM2bBd7qcZi+2/p28GaVFOPOIFiQPvwyo8jXnz+WEd1x3tkFztVGLN4BPim1LzgX7O4K+xqT8L9Ug/3aBWIdYiB55elZgJKzWIZrHgheUYHdZ+ZbO/E+M1JzczpH1V+HPEa1FdTM6mwtHgP88N9PGiPTPstXtyNd/QePoAwjAH5GC9Yp6Mr8t1TnS86MwwxXT+WZ3zYAMIw1l2Osfj7dFD3bW1f7eWkN3eI/XVhajb3PXUAx7Ja28G6elcz9n38pVOGMbkkNZsHf2cAxxIzSmPHia06qv/jfb64d4fYPzFW+JH2rnAIYRhLPMX2S10tYxfvRu3vtGEMYieV2Ltzy4GEYSw4EksoPq2j+uP94Hf3uQHcIfbHVHtl9q/t3eFQxDY6L+yo7htTM15zi9OHMfTVfXP53YCO68C2P3V1oR913yQQuSsntkF4zsCO64Op26nVe6cezlRj0E5JzQ42Zw/suGLbuH06rD/+vp3b90YQiOMTj1u+kpoX1M8Y4PHt33aCrsSY5GedRoxATAD5ettXfzjA44vXld7fYf0npWbssPcE4ujFItzxwm5sTXTZQI8xdpnYt8P6o91e51SiY7FjSryH96lcfj/QY3xXajYq7kosNvrqVMm2dAJxNGIFlW+lZtwh7mwWDvhYIwy7HDiPO+vYumee04oOxBjXCal5evO11PMxrwJh+J8d1h+vWMS4YTVruArE7lyXyzfbEIwOduPAjzdmLMdjkT07/px/ScN8bEU/Lli/merdq3BZxWzSA3J5R8efExfGJ9fUMAKxnNjk8qzUTL8+vf33pMx+jFcr4tHSbh1/TuyOcZBTjQIXqz9u++lp7QXWwgnqqzFcs3vHn3NcG7pVEYhl7NX+oZ6awGNfI5djcnlmx58zewSdmOGLCSSxkMMkrmoUy7AdlbrfRiu2u9qlxr+HArGMeRMahvdNzey7R3f8OQvaTnyDU40VdNWEhuF6qVmbdNsR3H1HX722xkYSiExXrNl4fC4bd/w5MYnmxalZ4BxYfg9NzSPMzTr+nEWTaH5da0NZuo3peEZqxl26DsO4647XK76ryWFaYj/G00YQhuEt7UVytQQiyyNmp72zPenvOYLP2y+XIzU7TLuvxqzZe43g82ICzadqbzSPTFlW66Zmke4dR/R5MaP0/ZodllsEYCzS/fwRfd6xqduFOAQivfK4XI7O5X4j+rxY23XXNJkTlWBFbN0G1KYj+rzv5fKqNJCJSh6ZcmfinaV3tif9qMIwNld9UWom0wDLJh6RvjU144WjCsN4l/O5udw8lEZ0h8jSRKeK8bvHj/AzYzGDnZLXK2B5xOS2I3LZfoSf+YvUTK67bkgN6Q6RJV1pxgvws0cchtHBnj60DgYd27Xtq6MMw9hy7am5zB9aY7pDZHEPTM2WSk8e8edGB3vaEDsYdGTT1CzBttOIP/eiNgyvHGKjukNk0YVRjD+cM4YwjJd4d8jlCj8DLHNfnT2GMIwL1yfm8ochNy6T7Qm5HJLLlmP47EVjhgv8DHCXtmn76iPH8NlxsRxPceYOuYHdIU6ujVIzaeb7YwrDU1Pz6EUYwp3bsO2rp48pDH+Sy1OGHobuECfTWqlZ8f9tuaw2pu8Q+0O+MA1781VYUWum5rWnt+ey+pi+wympebXi+klocIE4OWLrl5iRFjvarz/G7xEraPxz8p4hLM2MXF6dmqULNxjj94gX/OOl+5snpeE9Mp2MzvX61MwO++wYwzBWnXlvLq8RhrBEq7YBdF7bV8cZhgfnsvMkhaE7xGGLR6OxU0RsXrzRmL/LwjYIj/KzwN+JR6O75bJ3Gs2uFHcmLlb3yOWwSfwhBOLwxKa9sQ1LPJa8dw++T7xbGIsMn+qngb8RT2venMsbclmnB9/nmtQsm/idSf1BBOJwbNte2b0kNY9J+yCmasfu2Rf7eeCvHttesL4sjW9i2x39qu2r50/yDyMQ6xZ7EsZz/jfm8vCefbcvpWbs8kY/E/xlCONl7UXrVj37bt9IzdjltZP+IwnE+sTA+45t53peLmv07PvdkpqxkE/6qfD39S/v2kZfjWGDe/Ts+92amtc6PuqnEog1iW2YHt/eDcYz/nV6+j1/337HH/nJmOC+uk3bD2L4YlZPv+flubw8NQtzIBB7L+78Yo3PZ+XynFzu0/Pv+5XUPCK1QDeT3Fefncb7usSy+HZq3nP8k59OIPZVPAp9TGq2cXlSe0c4o4LvHStYxKzWL/gJmaC/m49erK/GesB3r+B7x3j+Prl8xk8oEPsmHntu3XasCL+YJbpmZccQi3O/IpcL/JwM2Mw79NXtUv/GA+/Kz1PziPQ8P6dAHPed3/1z2SKXf0zN4rzRuTar+Jhi9Yr9c/lQsuoMw/p7uKivbr5YX31AxccUk9wOyOUD7b8RiJ3boL1y3CQ1K9Nv2P5787aDrTqgY40X7GOs8Ld+diq0fnuHt3Eu91usrz6oDb4ZAzrWM3LZPTXvGCIQR+ZDE3CMsYrFe3L5RC63+8mp1Psm4BhvbI/zw7nc5icXiJQTi3Ifk5p3Cy/THNBrX03N+sWXagqBSFk/S82+iT/UFNBr57VBeKKmmD7bP7EkV7VB+BhhCL02v+2rWwpDd4iUdUNq9kGLWWnXag7orZty+VRqZntfrTkEIuXEdOzDU7ND9+WaA3rfV2PSzB81h0CknHiH8As6F1TRV/+3vWi9SHMIRMq5oQ3CmJZ9ieaA3opHo0e0ffVCzSEQKefKXD6dmncJr9Ic0Ftzczksl4OSYQyBSFG/zuVjuXwxl4WaA3rr/LavHtHeHSIQKSDWGz0+l0Nz+W5qXrAH+icuUo/TVwUi3dwNHpnL55LHotBn8TL94bl8Ppd5mkMgUsbFuRzdlnM0B/RWLKl2TNtXz9YcApEy/pCadQuPzeX05DEL9NW8tq9+UV8ViJQRq9b/JJdvpWaJprN1LOil29v+eULbV89KdogRiKyweFn+u23HOjkZE4S+ilcjTmn76kmpeW0CgcgKiBUo4pHKae1/bewJdfTVmMzmiY1AZBoWtmE3uy2/SM1jlWs0DfTKLW3YLeqr56Zm6GKBphGILF/oxbJoMQN0Tvvfi9ogjJdvb9VE0JvQu2Sxfjpnsb7629SsI4pAHLwLcvnpMnaYG9p/X9eGWUxyiTG9ee1/F5UYO/hTasYUPEKBMi5axr4a4XX9Uvrq4mVeWxb1VZNeSCtNTfmbDQB30wQAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQAQAgQgAAhEABCIACEQAEIgAIBABQCACgEAEAIEIAAIRAAQiAAhEABCIACAQAUAgAoBABACBCAACEQAEIgAIRAAQiAAgEAFAIAKAQASAHvh/AQYA3urzMe+8ldIAAAAASUVORK5CYII=",
        D = n.p + "static/media/contactImg.c0c32b234ad260bf810c.png",
        z = function () {
          return (0, A.jsxs)("div", {
            className:
              "w-full lgl:w-1/2 flex justify-center items-center relative",
            children: [
              (0, A.jsx)("img", {
                className:
                  "w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10",
                src: C,
                alt: "bannerImg",
              }),
              (0, A.jsx)("div", {
                className:
                  "absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center",
              }),
            ],
          });
        },
        B = function () {
          return (0, A.jsxs)("section", {
            id: "home",
            className:
              "w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black",
            children: [(0, A.jsx)(j, {}), (0, A.jsx)(z, {})],
          });
        },
        V = function (e) {
          var t = e.title,
            n = e.des;
          return (0, A.jsxs)("div", {
            className: "flex flex-col gap-4 font-titleFont mb-14",
            children: [
              (0, A.jsx)("h3", {
                className:
                  "text-sm uppercase font-light text-designColor tracking-wide",
                children: t,
              }),
              (0, A.jsx)("h1", {
                className:
                  "text-4xl md:text-5xl text-gray-300 font-bold capitalize",
                children: n,
              }),
            ],
          });
        },
        F = function () {
          return (0, A.jsxs)("div", {
            className:
              "w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center",
            children: [
              (0, A.jsx)("img", {
                className: "w-full h-64 object-cover rounded-lg mb-2",
                src: D,
                alt: "contactImg",
              }),
              (0, A.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, A.jsx)("h3", {
                    className: "text-3xl font-bold text-white",
                    children: "Sseruwagi williams favr",
                  }),
                  (0, A.jsx)("p", {
                    className: "text-lg font-normal text-gray-400",
                    children: "web developer",
                  }),
                  (0, A.jsx)("p", {
                    className: "text-base text-gray-400 tracking-wide",
                    children:
                      "I am a passionate web developer with expertise in building robust and dynamic websites.I thoroughly enjoy the process of creating captivating web experiences that combine seamless functionality with stunning design.",
                  }),
                  (0, A.jsxs)("p", {
                    className:
                      "text-base text-gray-400 flex items-center gap-2",
                    children: [
                      "Phone: ",
                      (0, A.jsx)("span", {
                        className: "text-lightText",
                        children: "+256 785049745 \ud83e\udd2b",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("p", {
                    className:
                      "text-base text-gray-400 flex items-center gap-2",
                    children: [
                      "Email: ",
                      (0, A.jsx)("span", {
                        className: "text-lightText",
                        children: "san12williams@gmail.com",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("p", {
                    className:
                      "text-base text-gray-400 flex items-center gap-2",
                    children: [
                      "Github: ",
                      (0, A.jsx)("span", {
                        className: "text-lightText",
                        children: "https://github.com/sheedpro",
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "flex flex-col gap-0",
                children: [
                  (0, A.jsx)("h2", {
                    className: "text-base uppercase font-titleFont mb-4",
                    children: "Find me on",
                  }),
                  (0, A.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://github.com/sheedpro",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(x, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "mailto:san12williams@gmail.com",
                          children: (0, A.jsx)(w, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://www.linkedin.com/in/sseruwagi-williams-64365026a/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(h, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        H = function () {
          var t = a((0, e.useState)(""), 2),
            n = t[0],
            r = t[1],
            i = a((0, e.useState)(""), 2),
            o = i[0],
            l = i[1],
            s = a((0, e.useState)(""), 2),
            u = s[0],
            c = s[1],
            d = a((0, e.useState)(""), 2),
            f = d[0],
            p = d[1],
            h = a((0, e.useState)(""), 2),
            v = h[0],
            m = h[1],
            g = a((0, e.useState)(""), 2),
            y = g[0],
            b = g[1],
            x = a((0, e.useState)(""), 2),
            w = x[0],
            S = x[1];
          return (0, A.jsxs)("section", {
            id: "contact",
            className: "w-full py-20 border-b-[1px] border-b-black",
            children: [
              (0, A.jsx)("div", {
                className: "flex justify-center items-center text-center",
                children: (0, A.jsx)(V, {
                  title: "CONTACT",
                  des: "Lets Connect ",
                }),
              }),
              (0, A.jsx)("div", {
                className: "w-full",
                children: (0, A.jsxs)("div", {
                  className:
                    "w-full h-auto flex flex-col lgl:flex-row justify-between",
                  children: [
                    (0, A.jsx)(F, {}),
                    (0, A.jsx)("div", {
                      className:
                        "w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne",
                      children: (0, A.jsxs)("form", {
                        className:
                          "w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5",
                        children: [
                          y &&
                            (0, A.jsx)("p", {
                              className:
                                "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce",
                              children: y,
                            }),
                          w &&
                            (0, A.jsx)("p", {
                              className:
                                "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce",
                              children: w,
                            }),
                          (0, A.jsxs)("div", {
                            className:
                              "w-full flex flex-col lgl:flex-row gap-10",
                            children: [
                              (0, A.jsxs)("div", {
                                className:
                                  "w-full lgl:w-1/2 flex flex-col gap-4",
                                children: [
                                  (0, A.jsx)("p", {
                                    className:
                                      "text-sm text-gray-400 uppercase tracking-wide",
                                    children: "Your name",
                                  }),
                                  (0, A.jsx)("input", {
                                    onChange: function (e) {
                                      return r(e.target.value);
                                    },
                                    value: n,
                                    className: "".concat(
                                      "Username is required!" === y &&
                                        "outline-designColor",
                                      " contactInput"
                                    ),
                                    type: "text",
                                  }),
                                ],
                              }),
                              (0, A.jsxs)("div", {
                                className:
                                  "w-full lgl:w-1/2 flex flex-col gap-4",
                                children: [
                                  (0, A.jsx)("p", {
                                    className:
                                      "text-sm text-gray-400 uppercase tracking-wide",
                                    children: "Phone Number",
                                  }),
                                  (0, A.jsx)("input", {
                                    onChange: function (e) {
                                      return l(e.target.value);
                                    },
                                    value: o,
                                    className: "".concat(
                                      "Phone number is required!" === y &&
                                        "outline-designColor",
                                      " contactInput"
                                    ),
                                    type: "text",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, A.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, A.jsx)("p", {
                                className:
                                  "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Email",
                              }),
                              (0, A.jsx)("input", {
                                onChange: function (e) {
                                  return c(e.target.value);
                                },
                                value: u,
                                className: "".concat(
                                  "Please give your Email!" === y &&
                                    "outline-designColor",
                                  " contactInput"
                                ),
                                type: "email",
                              }),
                            ],
                          }),
                          (0, A.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, A.jsx)("p", {
                                className:
                                  "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Subject",
                              }),
                              (0, A.jsx)("input", {
                                onChange: function (e) {
                                  return p(e.target.value);
                                },
                                value: f,
                                className: "".concat(
                                  "Plese give your Subject!" === y &&
                                    "outline-designColor",
                                  " contactInput"
                                ),
                                type: "text",
                              }),
                            ],
                          }),
                          (0, A.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, A.jsx)("p", {
                                className:
                                  "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Message",
                              }),
                              (0, A.jsx)("textarea", {
                                onChange: function (e) {
                                  return m(e.target.value);
                                },
                                value: v,
                                className: "".concat(
                                  "Message is required!" === y &&
                                    "outline-designColor",
                                  " contactTextArea"
                                ),
                                cols: "30",
                                rows: "8",
                              }),
                            ],
                          }),
                          (0, A.jsx)("div", {
                            className: "w-full",
                            children: (0, A.jsx)("button", {
                              onClick: function (e) {
                                e.preventDefault(),
                                  "" === n
                                    ? b("Username is required!")
                                    : "" === o
                                    ? b("Phone number is required!")
                                    : "" === u
                                    ? b("Please give your Email!")
                                    : String(u)
                                        .toLocaleLowerCase()
                                        .match(
                                          /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
                                        )
                                    ? "" === f
                                      ? b("Plese give your Subject!")
                                      : "" === v
                                      ? b("Message is required!")
                                      : (S(
                                          "Thank you dear ".concat(
                                            n,
                                            ", Your Messages has been sent Successfully!"
                                          )
                                        ),
                                        b(""),
                                        r(""),
                                        l(""),
                                        c(""),
                                        p(""),
                                        m(""))
                                    : b("Give a valid Email!");
                              },
                              className:
                                "w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent",
                              children: "Send Message",
                            }),
                          }),
                          y &&
                            (0, A.jsx)("p", {
                              className:
                                "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce",
                              children: y,
                            }),
                          w &&
                            (0, A.jsx)("p", {
                              className:
                                "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce",
                              children: w,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      function W(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function U(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      var _ = function (e) {
        var t = e.item,
          n = t.title,
          r = t.des,
          i = t.icon;
        return (0, A.jsx)("div", {
          className:
            "w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group",
          children: (0, A.jsx)("div", {
            className: "h-72 overflow-y-hidden",
            children: (0, A.jsxs)("div", {
              className:
                "flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500",
              children: [
                (0, A.jsx)("div", {
                  className: "w-10 h-8 flex flex-col justify-between",
                  children: i
                    ? (0, A.jsx)("span", {
                        className: "text-5xl text-designColor",
                        children: i,
                      })
                    : (0, A.jsxs)(A.Fragment, {
                        children: [
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-[2px] rounded-lg bg-designColor inline-flex",
                          }),
                        ],
                      }),
                }),
                (0, A.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, A.jsx)("h2", {
                      className:
                        "text-xl md:text-2xl font-titleFont font-bold text-gray-300",
                      children: n,
                    }),
                    (0, A.jsx)("p", { className: "base", children: r }),
                    (0, A.jsx)("span", {
                      className: "text-2xl text-designColor",
                      children: (0, A.jsx)(U, {}),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function Q(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z",
              },
            },
          ],
        })(e);
      }
      function q(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24", fill: "none" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z",
                fill: "currentColor",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z",
                fill: "currentColor",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z",
                fill: "currentColor",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z",
                fill: "currentColor",
              },
            },
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z",
                fill: "currentColor",
              },
            },
          ],
        })(e);
      }
      function Y(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z",
              },
            },
          ],
        })(e);
      }
      function X(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
              },
            },
          ],
        })(e);
      }
      var G = [
          {
            id: 1,
            title: "Project Management",
            des: "Want to gain real-life experience of managing a complete software project cycle.",
          },
          {
            id: 2,
            icon: (0, A.jsx)(Q, {}),
            title: "App Development",
            des: "Will learn this soon in near future !",
          },
          {
            id: 3,
            icon: (0, A.jsx)(k, {}),
            title: "SEO Optimisation",
            des: "Will learn this soon in near future !",
          },
          {
            id: 4,
            icon: (0, A.jsx)(q, {}),
            title: "Web Development",
            des: "Have completed a MERN stack development course from Udemy. Have developed various projects and hosted them too, check them on my github.",
          },
          {
            id: 5,
            icon: (0, A.jsx)(Y, {}),
            title: "WordPress theme development",
            des: " Developed and maintained responsive websites and web applications using HTML, CSS, and JavaScript.",
          },
          {
            id: 6,
            icon: (0, A.jsx)(g, {}),
            title: "Machine Learning",
            des: "Have completed a ML course from Acmegrade(Partner Mood Indigo IITB). Have developed some projects, check them on my github.",
          },
        ],
        K = function () {
          return (0, A.jsxs)("section", {
            id: "features",
            className: "w-full py-20 border-b-[1px] border-b-black",
            children: [
              (0, A.jsx)(V, { title: "Features", des: "What I Do" }),
              (0, A.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20",
                children: G.map(function (e) {
                  return (0, A.jsx)(_, { item: e }, e.id);
                }),
              }),
            ],
          });
        },
        J = function () {
          return (0, A.jsxs)("div", {
            className:
              "w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8",
            children: [
              (0, A.jsxs)("div", {
                className: "w-full h-full flex flex-col gap-8",
                children: [
                  (0, A.jsx)("img", { className: "w-32", src: C, alt: "logo" }),
                  (0, A.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://github.com/mihirc0111",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(x, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "mailto:mihirc0111@gmail.com",
                          children: (0, A.jsx)(w, {}),
                        }),
                      }),
                      (0, A.jsx)("span", {
                        className: "bannerIcon",
                        children: (0, A.jsx)("a", {
                          href: "https://www.linkedin.com/in/mihir-chavan-643615234/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, A.jsx)(h, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "w-full h-full",
                children: [
                  (0, A.jsx)("h3", {
                    className:
                      "text-xl uppercase text-designColor tracking-wider",
                    children: "Quick Link",
                  }),
                  (0, A.jsxs)("ul", {
                    className:
                      "flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden",
                    children: [
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "About",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Portfolio",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Services",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Blog",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Contact",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "w-full h-full",
                children: [
                  (0, A.jsx)("h3", {
                    className:
                      "text-xl uppercase text-designColor tracking-wider",
                    children: "RESOURCES",
                  }),
                  (0, A.jsxs)("ul", {
                    className:
                      "flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden",
                    children: [
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Authentication",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "System Status",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Terms of Service",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Pricing",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Over Right",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "w-full h-full",
                children: [
                  (0, A.jsx)("h3", {
                    className:
                      "text-xl uppercase text-designColor tracking-wider",
                    children: "DEVELOPERS",
                  }),
                  (0, A.jsxs)("ul", {
                    className:
                      "flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6",
                    children: [
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Documentation",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Authentication",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "API Reference",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Support",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("li", {
                        children: (0, A.jsxs)("span", {
                          className:
                            "w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer",
                          children: [
                            "Open Source",
                            (0, A.jsx)("span", {
                              className:
                                "w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Z = function () {
          return (0, A.jsx)("div", {
            className: "w-full py-10",
            children: (0, A.jsxs)("p", {
              className: "text-center text-gray-500 text-base",
              children: ["\xa9 ", new Date().getFullYear(), ". Developed with"],
            }),
          });
        },
        $ = n(5667);
      function ee(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } },
            { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } },
            { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } },
          ],
        })(e);
      }
      var te = [
          { _id: 1001, title: "Home", link: "home" },
          { _id: 1002, title: "Features", link: "features" },
          { _id: 1003, title: "Projects", link: "projects" },
          { _id: 1004, title: "Resume", link: "resume" },
          { _id: 1005, title: "Testimonial", link: "testimonial" },
          { _id: 1006, title: "Contact", link: "contact" },
        ],
        ne = function () {
          var t = a((0, e.useState)(!1), 2),
            n = t[0],
            r = t[1];
          return (0, A.jsxs)("div", {
            className:
              "w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600",
            children: [
              (0, A.jsx)("div", {
                children: (0, A.jsx)("img", {
                  className: "logo-img",
                  src: C,
                  alt: "logo",
                }),
              }),
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsx)("ul", {
                    className:
                      "hidden mdl:inline-flex items-center gap-6 lg:gap-10",
                    children: te.map(function (e) {
                      var t = e._id,
                        n = e.title,
                        r = e.link;
                      return (0,
                      A.jsx)("li", { className: "text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300", children: (0, A.jsx)($.rU, { activeClass: "active", to: r, spy: !0, smooth: !0, offset: -70, duration: 500, children: n }) }, t);
                    }),
                  }),
                  (0, A.jsx)("span", {
                    onClick: function () {
                      return r(!n);
                    },
                    className:
                      "text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer",
                    children: (0, A.jsx)(ee, {}),
                  }),
                  n &&
                    (0, A.jsx)("div", {
                      className:
                        "w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide",
                      children: (0, A.jsxs)("div", {
                        className: "flex flex-col gap-8 py-2 relative",
                        children: [
                          (0, A.jsxs)("div", {
                            children: [
                              (0, A.jsx)("img", {
                                className: "w-32",
                                src: C,
                                alt: "logo",
                              }),
                              (0, A.jsx)("p", {
                                className: "text-sm text-gray-400 mt-2",
                                children:
                                  '"Front-end developer specializing in WordPress with 2 years of experience including 2 years of agency experience. Developed."',
                              }),
                            ],
                          }),
                          (0, A.jsx)("ul", {
                            className: "flex flex-col gap-4",
                            children: te.map(function (e) {
                              return (0, A.jsx)(
                                "li",
                                {
                                  className:
                                    "text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300",
                                  children: (0, A.jsx)($.rU, {
                                    onClick: function () {
                                      return r(!1);
                                    },
                                    activeClass: "active",
                                    to: e.link,
                                    spy: !0,
                                    smooth: !0,
                                    offset: -70,
                                    duration: 500,
                                    children: e.title,
                                  }),
                                },
                                e._id
                              );
                            }),
                          }),
                          (0, A.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, A.jsx)("h2", {
                                className:
                                  "text-base uppercase font-titleFont mb-4",
                                children: "Find me in",
                              }),
                              (0, A.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                  (0, A.jsx)("span", {
                                    className: "bannerIcon",
                                    children: (0, A.jsx)(x, {}),
                                  }),
                                  (0, A.jsx)("span", {
                                    className: "bannerIcon",
                                    children: (0, A.jsx)(w, {}),
                                  }),
                                  (0, A.jsx)("span", {
                                    className: "bannerIcon",
                                    children: (0, A.jsx)(h, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, A.jsx)("span", {
                            onClick: function () {
                              return r(!1);
                            },
                            className:
                              "absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer",
                            children: (0, A.jsx)(X, {}),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          });
        };
      function re(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
              },
            },
          ],
        })(e);
      }
      var ie = function (e) {
          var t = e.title,
            n = e.des,
            r = e.src,
            i = e.githubLink,
            a = e.websiteLink;
          return (0, A.jsxs)("div", {
            className:
              "w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000",
            children: [
              (0, A.jsx)("div", {
                className: "w-full h-[80%] overflow-hidden rounded-lg",
                children: (0, A.jsx)("img", {
                  className:
                    "w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer",
                  src: r,
                  alt: "src",
                }),
              }),
              (0, A.jsx)("div", {
                className: "w-full mt-5 flex flex-col  gap-6",
                children: (0, A.jsxs)("div", {
                  children: [
                    (0, A.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, A.jsx)("h3", {
                          className:
                            "text-base uppercase text-designColor font-normal",
                          children: t,
                        }),
                        (0, A.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, A.jsx)("span", {
                              className:
                                "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer",
                              children: (0, A.jsx)("a", {
                                href: i,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, A.jsx)(re, {}),
                              }),
                            }),
                            (0, A.jsx)("span", {
                              className:
                                "text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer",
                              children: (0, A.jsx)("a", {
                                href: a,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, A.jsx)(y, {}),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsx)("p", {
                      className:
                        "text-sm tracking-wide mt-3 hover:text-gray-100 duration-300",
                      children: n,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ae = function () {
          return (0, A.jsxs)("section", {
            id: "projects",
            className: "w-full py-20 border-b-[1px] border-b-black",
            children: [
              (0, A.jsx)("div", {
                className: "flex justify-center items-center text-center",
                children: (0, A.jsx)(V, {
                  title: "Check these out on my github",
                  des: "My Projects",
                }),
              }),
              (0, A.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14",
                children: [
                  (0, A.jsx)(ie, {
                    title: "IPL-Win-Predictor",
                    des: " A ML project using logistic regression to find out the win probability of the chasing team in an IPL match. Used Kaggle dataset from 2008-2019.",
                    src: P,
                    githubLink:
                      "https://github.com/mihirc0111/IPL-Predictor-Mihir",
                    websiteLink:
                      "https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/",
                  }),
                  (0, A.jsx)(ie, {
                    title: "Mi-Blog-Van",
                    des: " This is a blog website ",
                    src: T,
                    githubLink: "https://github.com/mihirc0111/Mi-Blog-Van",
                    websiteLink: "https://mihirs-blog-website.onrender.com/",
                  }),
                  (0, A.jsx)(ie, {
                    title: "Secret Sharing Website",
                    des: " This is a website for posting secrets anonymously with an authentication system .",
                    src: O,
                    githubLink: "https://github.com/mihirc0111/Secrets",
                    websiteLink:
                      "https://mihirs-secrets-sharing-website.onrender.com/",
                  }),
                  (0, A.jsx)(ie, {
                    title: "After School Diaries",
                    des: " To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!",
                    src: N,
                    githubLink:
                      "https://github.com/mihirc0111/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website",
                    websiteLink:
                      "https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/",
                  }),
                  (0, A.jsx)(ie, {
                    title: "Weather Website",
                    des: " This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API .",
                    src: M,
                    githubLink:
                      "https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js",
                    websiteLink: "https://mihirs-weather-website.onrender.com/",
                  }),
                  (0, A.jsx)(ie, {
                    title: "Face Detection",
                    des: " This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system.",
                    src: L,
                    githubLink:
                      "https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git",
                    websiteLink: "",
                  }),
                ],
              }),
            ],
          });
        };
      function oe(e) {
        return (
          (oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          oe(e)
        );
      }
      function le(e) {
        var t = (function (e, t) {
          if ("object" !== oe(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== oe(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === oe(t) ? t : String(t);
      }
      function se(e, t, n) {
        return (
          (t = le(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                se(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var de = (0, e.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        fe = (0, e.createContext)({}),
        pe = (0, e.createContext)(null),
        he = "undefined" !== typeof document,
        ve = he ? e.useLayoutEffect : e.useEffect,
        me = (0, e.createContext)({ strict: !1 });
      function ge(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function ye(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function be(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var xe = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        we = ["initial"].concat(xe);
      function Se(e) {
        return (
          be(e.animate) ||
          we.some(function (t) {
            return ye(e[t]);
          })
        );
      }
      function ke(e) {
        return Boolean(Se(e) || e.variants);
      }
      function Ae(t) {
        var n = (function (e, t) {
            if (Se(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || ye(n) ? n : void 0,
                animate: ye(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(t, (0, e.useContext)(fe)),
          r = n.initial,
          i = n.animate;
        return (0, e.useMemo)(
          function () {
            return { initial: r, animate: i };
          },
          [Ee(r), Ee(i)]
        );
      }
      function Ee(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var je = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        Ce = {},
        Pe = function (e) {
          Ce[e] = {
            isEnabled: function (t) {
              return je[e].some(function (e) {
                return !!t[e];
              });
            },
          };
        };
      for (var Te in je) Pe(Te);
      var Oe = (0, e.createContext)({}),
        Ne = (0, e.createContext)({}),
        Me = Symbol.for("motionComponentSymbol");
      function Le(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          i = t.useRender,
          a = t.useVisualState,
          o = t.Component;
        n &&
          (function (e) {
            for (var t in e) Ce[t] = ce(ce({}, Ce[t]), e[t]);
          })(n);
        var l = (0, e.forwardRef)(function (t, l) {
          var s,
            u = ce(
              ce(ce({}, (0, e.useContext)(de)), t),
              {},
              { layoutId: Ie(t) }
            ),
            c = u.isStatic,
            d = Ae(t),
            f = a(t, c);
          if (!c && he) {
            d.visualElement = (function (t, n, r, i) {
              var a = (0, e.useContext)(fe).visualElement,
                o = (0, e.useContext)(me),
                l = (0, e.useContext)(pe),
                s = (0, e.useContext)(de).reducedMotion,
                u = (0, e.useRef)();
              (i = i || o.renderer),
                !u.current &&
                  i &&
                  (u.current = i(t, {
                    visualState: n,
                    parent: a,
                    props: r,
                    presenceContext: l,
                    blockInitialAnimation: !!l && !1 === l.initial,
                    reducedMotionConfig: s,
                  }));
              var c = u.current;
              return (
                (0, e.useInsertionEffect)(function () {
                  c && c.update(r, l);
                }),
                ve(function () {
                  c && c.render();
                }),
                (0, e.useEffect)(function () {
                  c && c.updateFeatures();
                }),
                (window.HandoffAppearAnimations ? ve : e.useEffect)(
                  function () {
                    c && c.animationState && c.animationState.animateChanges();
                  }
                ),
                c
              );
            })(o, f, u, r);
            var p = (0, e.useContext)(Ne),
              h = (0, e.useContext)(me).strict;
            d.visualElement && (s = d.visualElement.loadFeatures(u, h, n, p));
          }
          return e.createElement(
            fe.Provider,
            { value: d },
            s && d.visualElement
              ? e.createElement(s, ce({ visualElement: d.visualElement }, u))
              : null,
            i(
              o,
              t,
              (function (t, n, r) {
                return (0, e.useCallback)(
                  function (e) {
                    e && t.mount && t.mount(e),
                      n && (e ? n.mount(e) : n.unmount()),
                      r &&
                        ("function" === typeof r
                          ? r(e)
                          : ge(r) && (r.current = e));
                  },
                  [n]
                );
              })(f, d.visualElement, l),
              f,
              c,
              d.visualElement
            )
          );
        });
        return (l[Me] = o), l;
      }
      function Ie(t) {
        var n = t.layoutId,
          r = (0, e.useContext)(Oe).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function Re(e) {
        function t(t) {
          return Le(
            e(
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var De = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ze(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(De.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var Be = {};
      var Ve = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        Fe = new Set(Ve);
      function He(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          Fe.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!Be[e] || "opacity" === e))
        );
      }
      var We = function (e) {
          return Boolean(e && e.getVelocity);
        },
        Ue = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        _e = Ve.length;
      var Qe = function (e) {
          return function (t) {
            return "string" === typeof t && t.startsWith(e);
          };
        },
        qe = Qe("--"),
        Ye = Qe("var(--"),
        Xe = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        Ge = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        Ke = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Je = ce(
          ce({}, Ke),
          {},
          {
            transform: function (e) {
              return Ge(0, 1, e);
            },
          }
        ),
        Ze = ce(ce({}, Ke), {}, { default: 1 }),
        $e = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        et = /(-)?([\d]*\.?[\d])+/g,
        tt =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        nt =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function rt(e) {
        return "string" === typeof e;
      }
      var it = function (e) {
          return {
            test: function (t) {
              return rt(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        at = it("deg"),
        ot = it("%"),
        lt = it("px"),
        st = it("vh"),
        ut = it("vw"),
        ct = ce(
          ce({}, ot),
          {},
          {
            parse: function (e) {
              return ot.parse(e) / 100;
            },
            transform: function (e) {
              return ot.transform(100 * e);
            },
          }
        ),
        dt = ce(ce({}, Ke), {}, { transform: Math.round }),
        ft = {
          borderWidth: lt,
          borderTopWidth: lt,
          borderRightWidth: lt,
          borderBottomWidth: lt,
          borderLeftWidth: lt,
          borderRadius: lt,
          radius: lt,
          borderTopLeftRadius: lt,
          borderTopRightRadius: lt,
          borderBottomRightRadius: lt,
          borderBottomLeftRadius: lt,
          width: lt,
          maxWidth: lt,
          height: lt,
          maxHeight: lt,
          size: lt,
          top: lt,
          right: lt,
          bottom: lt,
          left: lt,
          padding: lt,
          paddingTop: lt,
          paddingRight: lt,
          paddingBottom: lt,
          paddingLeft: lt,
          margin: lt,
          marginTop: lt,
          marginRight: lt,
          marginBottom: lt,
          marginLeft: lt,
          rotate: at,
          rotateX: at,
          rotateY: at,
          rotateZ: at,
          scale: Ze,
          scaleX: Ze,
          scaleY: Ze,
          scaleZ: Ze,
          skew: at,
          skewX: at,
          skewY: at,
          distance: lt,
          translateX: lt,
          translateY: lt,
          translateZ: lt,
          x: lt,
          y: lt,
          z: lt,
          perspective: lt,
          transformPerspective: lt,
          opacity: Je,
          originX: ct,
          originY: ct,
          originZ: lt,
          zIndex: dt,
          fillOpacity: Je,
          strokeOpacity: Je,
          numOctaves: dt,
        };
      function pt(e, t, n, r) {
        var i = e.style,
          a = e.vars,
          o = e.transform,
          l = e.transformOrigin,
          s = !1,
          u = !1,
          c = !0;
        for (var d in t) {
          var f = t[d];
          if (qe(d)) a[d] = f;
          else {
            var p = ft[d],
              h = Xe(f, p);
            if (Fe.has(d)) {
              if (((s = !0), (o[d] = h), !c)) continue;
              f !== (p.default || 0) && (c = !1);
            } else d.startsWith("origin") ? ((u = !0), (l[d] = h)) : (i[d] = h);
          }
        }
        if (
          (t.transform ||
            (s || r
              ? (i.transform = (function (e, t, n, r) {
                  for (
                    var i = t.enableHardwareAcceleration,
                      a = void 0 === i || i,
                      o = t.allowTransformNone,
                      l = void 0 === o || o,
                      s = "",
                      u = 0;
                    u < _e;
                    u++
                  ) {
                    var c = Ve[u];
                    if (void 0 !== e[c]) {
                      var d = Ue[c] || c;
                      s += "".concat(d, "(").concat(e[c], ") ");
                    }
                  }
                  return (
                    a && !e.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(e, n ? "" : s)) : l && n && (s = "none"),
                    s
                  );
                })(e.transform, n, c, r))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          var v = l.originX,
            m = void 0 === v ? "50%" : v,
            g = l.originY,
            y = void 0 === g ? "50%" : g,
            b = l.originZ,
            x = void 0 === b ? 0 : b;
          i.transformOrigin = "".concat(m, " ").concat(y, " ").concat(x);
        }
      }
      var ht = function () {
        return { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      };
      function vt(e, t, n) {
        for (var r in t) We(t[r]) || He(r, n) || (e[r] = t[r]);
      }
      function mt(t, n, r) {
        var i = {};
        return (
          vt(i, t.style || {}, t),
          Object.assign(
            i,
            (function (t, n, r) {
              var i = t.transformTemplate;
              return (0, e.useMemo)(
                function () {
                  var e = ht();
                  return (
                    pt(e, n, { enableHardwareAcceleration: !r }, i),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(t, n, r)
          ),
          t.transformValues ? t.transformValues(i) : i
        );
      }
      function gt(e, t, n) {
        var r = {},
          i = mt(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = i),
          r
        );
      }
      var yt = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function bt(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          yt.has(e)
        );
      }
      var xt,
        wt = function (e) {
          return !bt(e);
        };
      try {
        (xt = require("@emotion/is-prop-valid").default) &&
          (wt = function (e) {
            return e.startsWith("on") ? !bt(e) : xt(e);
          });
      } catch (ds) {}
      function St(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function kt(e, t, n) {
        return "string" === typeof e ? e : lt.transform(t + n * e);
      }
      var At = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Et = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var jt = [
        "attrX",
        "attrY",
        "attrScale",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Ct(e, t, n, r, i) {
        var a = t.attrX,
          o = t.attrY,
          l = t.attrScale,
          s = t.originX,
          u = t.originY,
          c = t.pathLength,
          d = t.pathSpacing,
          f = void 0 === d ? 1 : d,
          p = t.pathOffset,
          h = void 0 === p ? 0 : p;
        if ((pt(e, St(t, jt), n, i), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var v = e.attrs,
            m = e.style,
            g = e.dimensions;
          v.transform && (g && (m.transform = v.transform), delete v.transform),
            g &&
              (void 0 !== s || void 0 !== u || m.transform) &&
              (m.transformOrigin = (function (e, t, n) {
                var r = kt(t, e.x, e.width),
                  i = kt(n, e.y, e.height);
                return "".concat(r, " ").concat(i);
              })(g, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
            void 0 !== a && (v.x = a),
            void 0 !== o && (v.y = o),
            void 0 !== l && (v.scale = l),
            void 0 !== c &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var a = i ? At : Et;
                e[a.offset] = lt.transform(-r);
                var o = lt.transform(t),
                  l = lt.transform(n);
                e[a.array] = "".concat(o, " ").concat(l);
              })(v, c, f, h, !1);
        }
      }
      var Pt = function () {
          return ce(ce({}, ht()), {}, { attrs: {} });
        },
        Tt = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function Ot(t, n, r, i) {
        var a = (0, e.useMemo)(
          function () {
            var e = Pt();
            return (
              Ct(
                e,
                n,
                { enableHardwareAcceleration: !1 },
                Tt(i),
                t.transformTemplate
              ),
              ce(ce({}, e.attrs), {}, { style: ce({}, e.style) })
            );
          },
          [n]
        );
        if (t.style) {
          var o = {};
          vt(o, t.style, t), (a.style = ce(ce({}, o), a.style));
        }
        return a;
      }
      function Nt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (n, r, i, a, o) {
          var l = a.latestValues,
            s = (ze(n) ? Ot : gt)(r, l, o, n),
            u = (function (e, t, n) {
              var r = {};
              for (var i in e)
                ("values" === i && "object" === typeof e.values) ||
                  ((wt(i) ||
                    (!0 === n && bt(i)) ||
                    (!t && !bt(i)) ||
                    (e.draggable && i.startsWith("onDrag"))) &&
                    (r[i] = e[i]));
              return r;
            })(r, "string" === typeof n, t),
            c = ce(ce(ce({}, u), s), {}, { ref: i }),
            d = r.children,
            f = (0, e.useMemo)(
              function () {
                return We(d) ? d.get() : d;
              },
              [d]
            );
          return (0, e.createElement)(n, ce(ce({}, c), {}, { children: f }));
        };
      }
      var Mt = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function Lt(e, t, n, r) {
        var i = t.style,
          a = t.vars;
        for (var o in (Object.assign(e.style, i, r && r.getProjectionStyles(n)),
        a))
          e.style.setProperty(o, a[o]);
      }
      var It = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function Rt(e, t, n, r) {
        for (var i in (Lt(e, t, void 0, r), t.attrs))
          e.setAttribute(It.has(i) ? i : Mt(i), t.attrs[i]);
      }
      function Dt(e, t) {
        var n = e.style,
          r = {};
        for (var i in n)
          (We(n[i]) || (t.style && We(t.style[i])) || He(i, e)) &&
            (r[i] = n[i]);
        return r;
      }
      function zt(e, t) {
        var n = Dt(e, t);
        for (var r in e) {
          if (We(e[r]) || We(t[r]))
            n[
              -1 !== Ve.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r];
        }
        return n;
      }
      function Bt(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
      var Vt = function (e) {
          return Array.isArray(e);
        },
        Ft = function (e) {
          return Boolean(e && "object" === typeof e && e.mix && e.toValue);
        },
        Ht = function (e) {
          return Vt(e) ? e[e.length - 1] || 0 : e;
        };
      function Wt(e) {
        var t = We(e) ? e.get() : e;
        return Ft(t) ? t.toValue() : t;
      }
      var Ut = ["transitionEnd", "transition"];
      var _t = function (t) {
        return function (n, r) {
          var i = (0, e.useContext)(fe),
            a = (0, e.useContext)(pe),
            o = function () {
              return (function (e, t, n, r) {
                var i = e.scrapeMotionValuesFromProps,
                  a = e.createRenderState,
                  o = e.onMount,
                  l = { latestValues: Qt(t, n, r, i), renderState: a() };
                return (
                  o &&
                    (l.mount = function (e) {
                      return o(t, e, l);
                    }),
                  l
                );
              })(t, n, i, a);
            };
          return r
            ? o()
            : (function (t) {
                var n = (0, e.useRef)(null);
                return null === n.current && (n.current = t()), n.current;
              })(o);
        };
      };
      function Qt(e, t, n, r) {
        var i = {},
          a = r(e, {});
        for (var o in a) i[o] = Wt(a[o]);
        var l = e.initial,
          s = e.animate,
          u = Se(e),
          c = ke(e);
        t &&
          c &&
          !u &&
          !1 !== e.inherit &&
          (void 0 === l && (l = t.initial), void 0 === s && (s = t.animate));
        var d = !!n && !1 === n.initial,
          f = (d = d || !1 === l) ? s : l;
        f &&
          "boolean" !== typeof f &&
          !be(f) &&
          (Array.isArray(f) ? f : [f]).forEach(function (t) {
            var n = Bt(e, t);
            if (n) {
              var r = n.transitionEnd,
                a = (n.transition, St(n, Ut));
              for (var o in a) {
                var l = a[o];
                if (Array.isArray(l)) l = l[d ? l.length - 1 : 0];
                null !== l && (i[o] = l);
              }
              for (var s in r) i[s] = r[s];
            }
          });
        return i;
      }
      var qt = {
          useVisualState: _t({
            scrapeMotionValuesFromProps: zt,
            createRenderState: Pt,
            onMount: function (e, t, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (a) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Ct(
                r,
                i,
                { enableHardwareAcceleration: !1 },
                Tt(t.tagName),
                e.transformTemplate
              ),
                Rt(t, r);
            },
          }),
        },
        Yt = {
          useVisualState: _t({
            scrapeMotionValuesFromProps: Dt,
            createRenderState: ht,
          }),
        };
      function Xt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Gt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, le(r.key), r);
        }
      }
      function Kt(e, t, n) {
        return (
          t && Gt(e.prototype, t),
          n && Gt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Jt(e, t) {
        return (
          (Jt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Jt(e, t)
        );
      }
      function Zt(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && Jt(e, t);
      }
      function $t(e) {
        return (
          ($t = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          $t(e)
        );
      }
      function en(e, t) {
        if (t && ("object" === oe(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function tn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $t(e);
          if (t) {
            var i = $t(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return en(this, n);
        };
      }
      function nn(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      var rn = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function an(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var on = function (e) {
        return function (t) {
          return rn(t) && e(t, an(t));
        };
      };
      function ln(e, t, n, r) {
        return nn(e, t, on(n), r);
      }
      var sn = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        un = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(sn);
        };
      function cn(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var dn = cn("dragHorizontal"),
        fn = cn("dragVertical");
      function pn(e) {
        var t = !1;
        if ("y" === e) t = fn();
        else if ("x" === e) t = dn();
        else {
          var n = dn(),
            r = fn();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function hn() {
        var e = pn(!0);
        return !e || (e(), !1);
      }
      var vn = (function () {
          function e(t) {
            Xt(this, e), (this.isMounted = !1), (this.node = t);
          }
          return Kt(e, [{ key: "update", value: function () {} }]), e;
        })(),
        mn = function (e) {
          return e;
        };
      var gn = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        yn = 40;
      var bn = (function (e, t) {
          var n = !1,
            r = !0,
            i = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = gn.reduce(function (e, t) {
              return (
                (e[t] = (function (e) {
                  var t = [],
                    n = [],
                    r = 0,
                    i = !1,
                    a = !1,
                    o = new WeakSet(),
                    l = {
                      schedule: function (e) {
                        var a =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2] &&
                            i,
                          l = a ? t : n;
                        return (
                          arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1] &&
                            o.add(e),
                          -1 === l.indexOf(e) &&
                            (l.push(e), a && i && (r = t.length)),
                          e
                        );
                      },
                      cancel: function (e) {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1), o.delete(e);
                      },
                      process: function (s) {
                        if (i) a = !0;
                        else {
                          i = !0;
                          var u = [n, t];
                          if (
                            ((t = u[0]),
                            ((n = u[1]).length = 0),
                            (r = t.length))
                          )
                            for (var c = 0; c < r; c++) {
                              var d = t[c];
                              d(s), o.has(d) && (l.schedule(d), e());
                            }
                          (i = !1), a && ((a = !1), l.process(s));
                        }
                      },
                    };
                  return l;
                })(function () {
                  return (n = !0);
                })),
                e
              );
            }, {}),
            o = function (e) {
              return a[e].process(i);
            },
            l = function a(l) {
              (n = !1),
                (i.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(l - i.timestamp, yn), 1)),
                (i.timestamp = l),
                (i.isProcessing = !0),
                gn.forEach(o),
                (i.isProcessing = !1),
                n && t && ((r = !1), e(a));
            },
            s = gn.reduce(function (t, o) {
              var s = a[o];
              return (
                (t[o] = function (t) {
                  var a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    o =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  return (
                    n || ((n = !0), (r = !0), i.isProcessing || e(l)),
                    s.schedule(t, a, o)
                  );
                }),
                t
              );
            }, {});
          return {
            schedule: s,
            cancel: function (e) {
              return gn.forEach(function (t) {
                return a[t].cancel(e);
              });
            },
            state: i,
            steps: a,
          };
        })(
          "undefined" !== typeof requestAnimationFrame
            ? requestAnimationFrame
            : mn,
          !0
        ),
        xn = bn.schedule,
        wn = bn.cancel,
        Sn = bn.state,
        kn = bn.steps;
      function An(e, t) {
        var n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return ln(
          e.current,
          n,
          function (n, i) {
            if ("touch" !== n.type && !hn()) {
              var a = e.getProps();
              e.animationState &&
                a.whileHover &&
                e.animationState.setActive("whileHover", t),
                a[r] &&
                  xn.update(function () {
                    return a[r](n, i);
                  });
            }
          },
          { passive: !e.getProps()[r] }
        );
      }
      var En = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            return Xt(this, n), t.apply(this, arguments);
          }
          return (
            Kt(n, [
              {
                key: "mount",
                value: function () {
                  this.unmount = un(An(this.node, !0), An(this.node, !1));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(vn),
        jn = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return (
              Xt(this, n), ((e = t.apply(this, arguments)).isActive = !1), e
            );
          }
          return (
            Kt(n, [
              {
                key: "onFocus",
                value: function () {
                  var e = !1;
                  try {
                    e = this.node.current.matches(":focus-visible");
                  } catch (t) {
                    e = !0;
                  }
                  e &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                },
              },
              {
                key: "onBlur",
                value: function () {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.unmount = un(
                    nn(this.node.current, "focus", function () {
                      return e.onFocus();
                    }),
                    nn(this.node.current, "blur", function () {
                      return e.onBlur();
                    })
                  );
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(vn),
        Cn = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        };
      function Pn(e, t) {
        if (t) {
          var n = new PointerEvent("pointer" + e);
          t(n, an(n));
        }
      }
      var Tn = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return (
              Xt(this, n),
              ((e = t.apply(this, arguments)).removeStartListeners = mn),
              (e.removeEndListeners = mn),
              (e.removeAccessibleListeners = mn),
              (e.startPointerPress = function (t, n) {
                if ((e.removeEndListeners(), !e.isPressing)) {
                  var r = e.node.getProps(),
                    i = ln(
                      window,
                      "pointerup",
                      function (t, n) {
                        if (e.checkPressEnd()) {
                          var r = e.node.getProps(),
                            i = r.onTap,
                            a = r.onTapCancel;
                          xn.update(function () {
                            Cn(e.node.current, t.target)
                              ? i && i(t, n)
                              : a && a(t, n);
                          });
                        }
                      },
                      { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    a = ln(
                      window,
                      "pointercancel",
                      function (t, n) {
                        return e.cancelPress(t, n);
                      },
                      { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                  (e.removeEndListeners = un(i, a)), e.startPress(t, n);
                }
              }),
              (e.startAccessiblePress = function () {
                var t = nn(e.node.current, "keydown", function (t) {
                    if ("Enter" === t.key && !e.isPressing) {
                      e.removeEndListeners(),
                        (e.removeEndListeners = nn(
                          e.node.current,
                          "keyup",
                          function (t) {
                            "Enter" === t.key &&
                              e.checkPressEnd() &&
                              Pn("up", function (t, n) {
                                var r = e.node.getProps().onTap;
                                r &&
                                  xn.update(function () {
                                    return r(t, n);
                                  });
                              });
                          }
                        )),
                        Pn("down", function (t, n) {
                          e.startPress(t, n);
                        });
                    }
                  }),
                  n = nn(e.node.current, "blur", function () {
                    e.isPressing &&
                      Pn("cancel", function (t, n) {
                        return e.cancelPress(t, n);
                      });
                  });
                e.removeAccessibleListeners = un(t, n);
              }),
              e
            );
          }
          return (
            Kt(n, [
              {
                key: "startPress",
                value: function (e, t) {
                  this.isPressing = !0;
                  var n = this.node.getProps(),
                    r = n.onTapStart;
                  n.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !0),
                    r &&
                      xn.update(function () {
                        return r(e, t);
                      });
                },
              },
              {
                key: "checkPressEnd",
                value: function () {
                  return (
                    this.removeEndListeners(),
                    (this.isPressing = !1),
                    this.node.getProps().whileTap &&
                      this.node.animationState &&
                      this.node.animationState.setActive("whileTap", !1),
                    !hn()
                  );
                },
              },
              {
                key: "cancelPress",
                value: function (e, t) {
                  if (this.checkPressEnd()) {
                    var n = this.node.getProps().onTapCancel;
                    n &&
                      xn.update(function () {
                        return n(e, t);
                      });
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps(),
                    t = ln(
                      this.node.current,
                      "pointerdown",
                      this.startPointerPress,
                      { passive: !(e.onTapStart || e.onPointerStart) }
                    ),
                    n = nn(
                      this.node.current,
                      "focus",
                      this.startAccessiblePress
                    );
                  this.removeStartListeners = un(t, n);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeStartListeners(),
                    this.removeEndListeners(),
                    this.removeAccessibleListeners();
                },
              },
            ]),
            n
          );
        })(vn),
        On = ["root"],
        Nn = new WeakMap(),
        Mn = new WeakMap(),
        Ln = function (e) {
          var t = Nn.get(e.target);
          t && t(e);
        },
        In = function (e) {
          e.forEach(Ln);
        };
      function Rn(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = St(e, On),
            r = t || document;
          Mn.has(r) || Mn.set(r, {});
          var i = Mn.get(r),
            a = JSON.stringify(n);
          return (
            i[a] || (i[a] = new IntersectionObserver(In, ce({ root: t }, n))),
            i[a]
          );
        })(t);
        return (
          Nn.set(e, n),
          r.observe(e),
          function () {
            Nn.delete(e), r.unobserve(e);
          }
        );
      }
      var Dn = { some: 0, all: 1 },
        zn = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return (
              Xt(this, n),
              ((e = t.apply(this, arguments)).hasEnteredView = !1),
              (e.isInView = !1),
              e
            );
          }
          return (
            Kt(n, [
              {
                key: "startObserver",
                value: function () {
                  var e = this;
                  this.unmount();
                  var t = this.node.getProps().viewport,
                    n = void 0 === t ? {} : t,
                    r = n.root,
                    i = n.margin,
                    a = n.amount,
                    o = void 0 === a ? "some" : a,
                    l = n.once,
                    s = {
                      root: r ? r.current : void 0,
                      rootMargin: i,
                      threshold: "number" === typeof o ? o : Dn[o],
                    };
                  return Rn(this.node.current, s, function (t) {
                    var n = t.isIntersecting;
                    if (
                      e.isInView !== n &&
                      ((e.isInView = n), !l || n || !e.hasEnteredView)
                    ) {
                      n && (e.hasEnteredView = !0),
                        e.node.animationState &&
                          e.node.animationState.setActive("whileInView", n);
                      var r = e.node.getProps(),
                        i = r.onViewportEnter,
                        a = r.onViewportLeave,
                        o = n ? i : a;
                      o && o(t);
                    }
                  });
                },
              },
              {
                key: "mount",
                value: function () {
                  this.startObserver();
                },
              },
              {
                key: "update",
                value: function () {
                  if ("undefined" !== typeof IntersectionObserver) {
                    var e = this.node,
                      t = e.props,
                      n = e.prevProps,
                      r = ["amount", "margin", "root"].some(
                        (function (e) {
                          var t = e.viewport,
                            n = void 0 === t ? {} : t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            i = r.viewport,
                            a = void 0 === i ? {} : i;
                          return function (e) {
                            return n[e] !== a[e];
                          };
                        })(t, n)
                      );
                    r && this.startObserver();
                  }
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(vn);
      var Bn = {
        inView: { Feature: zn },
        tap: { Feature: Tn },
        focus: { Feature: jn },
        hover: { Feature: En },
      };
      function Vn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Fn(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function Hn(e, t, n) {
        var r = e.getProps();
        return Bt(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var Wn = "data-" + Mt("framerAppearId"),
        Un = mn,
        _n = mn;
      var Qn = function (e) {
          return 1e3 * e;
        },
        qn = function (e) {
          return e / 1e3;
        },
        Yn = !1,
        Xn = function (e) {
          return Array.isArray(e) && "number" === typeof e[0];
        };
      function Gn(e) {
        return Boolean(
          !e ||
            ("string" === typeof e && Jn[e]) ||
            Xn(e) ||
            (Array.isArray(e) && e.every(Gn))
        );
      }
      var Kn = function (e) {
          var t = a(e, 4),
            n = t[0],
            r = t[1],
            i = t[2],
            o = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(i, ", ")
            .concat(o, ")");
        },
        Jn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Kn([0, 0.65, 0.55, 1]),
          circOut: Kn([0.55, 0, 1, 0.45]),
          backIn: Kn([0.31, 0.01, 0.66, -0.59]),
          backOut: Kn([0.33, 1.53, 0.69, 0.99]),
        };
      function Zn(e) {
        if (e) return Xn(e) ? Kn(e) : Array.isArray(e) ? e.map(Zn) : Jn[e];
      }
      var $n = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        },
        er = 1e-7,
        tr = 12;
      function nr(e, t, n, r) {
        if (e === t && n === r) return mn;
        var i = function (t) {
          return (function (e, t, n, r, i) {
            var a,
              o,
              l = 0;
            do {
              (a = $n((o = t + (n - t) / 2), r, i) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(a) > er && ++l < tr);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : $n(i(e), t, r);
        };
      }
      var rr = nr(0.42, 0, 1, 1),
        ir = nr(0, 0, 0.58, 1),
        ar = nr(0.42, 0, 0.58, 1),
        or = function (e) {
          return Array.isArray(e) && "number" !== typeof e[0];
        },
        lr = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        sr = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        ur = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        cr = sr(ur),
        dr = lr(cr),
        fr = nr(0.33, 1.53, 0.69, 0.99),
        pr = sr(fr),
        hr = lr(pr),
        vr = {
          linear: mn,
          easeIn: rr,
          easeInOut: ar,
          easeOut: ir,
          circIn: ur,
          circInOut: dr,
          circOut: cr,
          backIn: pr,
          backInOut: hr,
          backOut: fr,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * pr(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        mr = function (e) {
          if (Array.isArray(e)) {
            _n(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var t = a(e, 4);
            return nr(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? (_n(void 0 !== vr[e], "Invalid easing type '".concat(e, "'")),
              vr[e])
            : e;
        },
        gr = function (e, t) {
          return function (n) {
            return Boolean(
              (rt(n) && nt.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        yr = function (e, t, n) {
          return function (r) {
            var i;
            if (!rt(r)) return r;
            var o = a(r.match(et), 4),
              l = o[0],
              s = o[1],
              u = o[2],
              c = o[3];
            return (
              se((i = {}), e, parseFloat(l)),
              se(i, t, parseFloat(s)),
              se(i, n, parseFloat(u)),
              se(i, "alpha", void 0 !== c ? parseFloat(c) : 1),
              i
            );
          };
        },
        br = ce(
          ce({}, Ke),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return Ge(0, 255, e);
                })(e)
              );
            },
          }
        ),
        xr = {
          test: gr("rgb", "red"),
          parse: yr("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              i = e.alpha,
              a = void 0 === i ? 1 : i;
            return (
              "rgba(" +
              br.transform(t) +
              ", " +
              br.transform(n) +
              ", " +
              br.transform(r) +
              ", " +
              $e(Je.transform(a)) +
              ")"
            );
          },
        };
      var wr = {
          test: gr("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: xr.transform,
        },
        Sr = {
          test: gr("hsl", "hue"),
          parse: yr("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              i = e.alpha,
              a = void 0 === i ? 1 : i;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              ot.transform($e(n)) +
              ", " +
              ot.transform($e(r)) +
              ", " +
              $e(Je.transform(a)) +
              ")"
            );
          },
        },
        kr = {
          test: function (e) {
            return xr.test(e) || wr.test(e) || Sr.test(e);
          },
          parse: function (e) {
            return xr.test(e)
              ? xr.parse(e)
              : Sr.test(e)
              ? Sr.parse(e)
              : wr.parse(e);
          },
          transform: function (e) {
            return rt(e)
              ? e
              : e.hasOwnProperty("red")
              ? xr.transform(e)
              : Sr.transform(e);
          },
        },
        Ar = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Er(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var jr = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Cr = [wr, xr, Sr],
        Pr = function (e) {
          return Cr.find(function (t) {
            return t.test(e);
          });
        };
      function Tr(e) {
        var t = Pr(e);
        _n(
          Boolean(t),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        var n = t.parse(e);
        return (
          t === Sr &&
            (n = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                i = e.alpha;
              (t /= 360), (r /= 100);
              var a = 0,
                o = 0,
                l = 0;
              if ((n /= 100)) {
                var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  u = 2 * r - s;
                (a = Er(u, s, t + 1 / 3)),
                  (o = Er(u, s, t)),
                  (l = Er(u, s, t - 1 / 3));
              } else a = o = l = r;
              return {
                red: Math.round(255 * a),
                green: Math.round(255 * o),
                blue: Math.round(255 * l),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      var Or = function (e, t) {
        var n = Tr(e),
          r = Tr(t),
          i = ce({}, n);
        return function (e) {
          return (
            (i.red = jr(n.red, r.red, e)),
            (i.green = jr(n.green, r.green, e)),
            (i.blue = jr(n.blue, r.blue, e)),
            (i.alpha = Ar(n.alpha, r.alpha, e)),
            xr.transform(i)
          );
        };
      };
      var Nr = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: mn,
        },
        Mr = { regex: tt, countKey: "Colors", token: "${c}", parse: kr.parse },
        Lr = { regex: et, countKey: "Numbers", token: "${n}", parse: Ke.parse };
      function Ir(e, t) {
        var n,
          r = t.regex,
          i = t.countKey,
          a = t.token,
          o = t.parse,
          l = e.tokenised.match(r);
        l &&
          ((e["num" + i] = l.length),
          (e.tokenised = e.tokenised.replace(r, a)),
          (n = e.values).push.apply(n, Vn(l.map(o))));
      }
      function Rr(e) {
        var t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && Ir(n, Nr), Ir(n, Mr), Ir(n, Lr), n;
      }
      function Dr(e) {
        return Rr(e).values;
      }
      function zr(e) {
        var t = Rr(e),
          n = t.values,
          r = t.numColors,
          i = t.numVars,
          a = t.tokenised,
          o = n.length;
        return function (e) {
          for (var t = a, n = 0; n < o; n++)
            t =
              n < i
                ? t.replace(Nr.token, e[n])
                : n < i + r
                ? t.replace(Mr.token, kr.transform(e[n]))
                : t.replace(Lr.token, $e(e[n]));
          return t;
        };
      }
      var Br = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var Vr = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              rt(e) &&
              ((null === (t = e.match(et)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(tt)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: Dr,
          createTransformer: zr,
          getAnimatableNone: function (e) {
            var t = Dr(e);
            return zr(e)(t.map(Br));
          },
        },
        Fr = function (e, t) {
          return function (n) {
            return "".concat(n > 0 ? t : e);
          };
        };
      function Hr(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Ar(e, t, n);
            }
          : kr.test(e)
          ? Or(e, t)
          : e.startsWith("var(")
          ? Fr(e, t)
          : _r(e, t);
      }
      var Wr = function (e, t) {
          var n = Vn(e),
            r = n.length,
            i = e.map(function (e, n) {
              return Hr(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = i[t](e);
            return n;
          };
        },
        Ur = function (e, t) {
          var n = ce(ce({}, e), t),
            r = {};
          for (var i in n)
            void 0 !== e[i] && void 0 !== t[i] && (r[i] = Hr(e[i], t[i]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        _r = function (e, t) {
          var n = Vr.createTransformer(t),
            r = Rr(e),
            i = Rr(t);
          return r.numVars === i.numVars &&
            r.numColors === i.numColors &&
            r.numNumbers >= i.numNumbers
            ? un(Wr(r.values, i.values), n)
            : (Un(
                !0,
                "Complex values '"
                  .concat(e, "' and '")
                  .concat(
                    t,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              Fr(e, t));
        },
        Qr = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        qr = function (e, t) {
          return function (n) {
            return Ar(e, t, n);
          };
        };
      function Yr(e, t, n) {
        for (
          var r,
            i = [],
            a =
              n ||
              ("number" === typeof (r = e[0])
                ? qr
                : "string" === typeof r
                ? kr.test(r)
                  ? Or
                  : _r
                : Array.isArray(r)
                ? Wr
                : "object" === typeof r
                ? Ur
                : qr),
            o = e.length - 1,
            l = 0;
          l < o;
          l++
        ) {
          var s = a(e[l], e[l + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[l] || mn : t;
            s = un(u, s);
          }
          i.push(s);
        }
        return i;
      }
      function Xr(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          i = void 0 === r || r,
          a = n.ease,
          o = n.mixer,
          l = e.length;
        if (
          (_n(
            l === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return function () {
            return t[0];
          };
        e[0] > e[l - 1] && ((e = Vn(e).reverse()), (t = Vn(t).reverse()));
        var s = Yr(t, a, o),
          u = s.length,
          c = function (t) {
            var n = 0;
            if (u > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = Qr(e[n], e[n + 1], t);
            return s[n](r);
          };
        return i
          ? function (t) {
              return c(Ge(e[0], e[l - 1], t));
            }
          : c;
      }
      function Gr(e) {
        var t = [0];
        return (
          (function (e, t) {
            for (var n = e[e.length - 1], r = 1; r <= t; r++) {
              var i = Qr(0, t, r);
              e.push(Ar(n, 1, i));
            }
          })(t, e.length - 1),
          t
        );
      }
      function Kr(e) {
        var t,
          n,
          r = e.duration,
          i = void 0 === r ? 300 : r,
          a = e.keyframes,
          o = e.times,
          l = e.ease,
          s = void 0 === l ? "easeInOut" : l,
          u = or(s) ? s.map(mr) : mr(s),
          c = { done: !1, value: a[0] },
          d = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(o && o.length === a.length ? o : Gr(a), i),
          f = Xr(d, a, {
            ease: Array.isArray(u)
              ? u
              : ((t = a),
                (n = u),
                t
                  .map(function () {
                    return n || ar;
                  })
                  .splice(0, t.length - 1)),
          });
        return {
          calculatedDuration: i,
          next: function (e) {
            return (c.value = f(e)), (c.done = e >= i), c;
          },
        };
      }
      function Jr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var Zr = 5;
      function $r(e, t, n) {
        var r = Math.max(t - Zr, 0);
        return Jr(n - e(r), t - r);
      }
      var ei = 0.001,
        ti = 0.01,
        ni = 10,
        ri = 0.05,
        ii = 1;
      function ai(e) {
        var t,
          n,
          r = e.duration,
          i = void 0 === r ? 800 : r,
          a = e.bounce,
          o = void 0 === a ? 0.25 : a,
          l = e.velocity,
          s = void 0 === l ? 0 : l,
          u = e.mass,
          c = void 0 === u ? 1 : u;
        Un(i <= Qn(ni), "Spring duration must be 10 seconds or less");
        var d = 1 - o;
        (d = Ge(ri, ii, d)),
          (i = Ge(ti, ni, qn(i))),
          d < 1
            ? ((t = function (e) {
                var t = e * d,
                  n = t * i,
                  r = t - s,
                  a = li(e, d),
                  o = Math.exp(-n);
                return ei - (r / a) * o;
              }),
              (n = function (e) {
                var n = e * d * i,
                  r = n * s + s,
                  a = Math.pow(d, 2) * Math.pow(e, 2) * i,
                  o = Math.exp(-n),
                  l = li(Math.pow(e, 2), d);
                return ((-t(e) + ei > 0 ? -1 : 1) * ((r - a) * o)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * i) * ((e - s) * i + 1) - ei;
              }),
              (n = function (e) {
                return Math.exp(-e * i) * (i * i * (s - e));
              }));
        var f = (function (e, t, n) {
          for (var r = n, i = 1; i < oi; i++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / i);
        if (((i = Qn(i)), isNaN(f)))
          return { stiffness: 100, damping: 10, duration: i };
        var p = Math.pow(f, 2) * c;
        return { stiffness: p, damping: 2 * d * Math.sqrt(c * p), duration: i };
      }
      var oi = 12;
      function li(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var si = ["keyframes", "restDelta", "restSpeed"],
        ui = ["duration", "bounce"],
        ci = ["stiffness", "damping", "mass"];
      function di(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function fi(e) {
        var t,
          n = e.keyframes,
          r = e.restDelta,
          i = e.restSpeed,
          a = St(e, si),
          o = n[0],
          l = n[n.length - 1],
          s = { done: !1, value: o },
          u = (function (e) {
            var t = ce(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!di(e, ci) && di(e, ui)) {
              var n = ai(e);
              (t = ce(
                ce(ce({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(a),
          c = u.stiffness,
          d = u.damping,
          f = u.mass,
          p = u.velocity,
          h = u.duration,
          v = u.isResolvedFromDuration,
          m = p ? -qn(p) : 0,
          g = d / (2 * Math.sqrt(c * f)),
          y = l - o,
          b = qn(Math.sqrt(c / f)),
          x = Math.abs(y) < 5;
        if ((i || (i = x ? 0.01 : 2), r || (r = x ? 0.005 : 0.5), g < 1)) {
          var w = li(b, g);
          t = function (e) {
            var t = Math.exp(-g * b * e);
            return (
              l -
              t *
                (((m + g * b * y) / w) * Math.sin(w * e) + y * Math.cos(w * e))
            );
          };
        } else if (1 === g)
          t = function (e) {
            return l - Math.exp(-b * e) * (y + (m + b * y) * e);
          };
        else {
          var S = b * Math.sqrt(g * g - 1);
          t = function (e) {
            var t = Math.exp(-g * b * e),
              n = Math.min(S * e, 300);
            return (
              l -
              (t * ((m + g * b * y) * Math.sinh(n) + S * y * Math.cosh(n))) / S
            );
          };
        }
        return {
          calculatedDuration: (v && h) || null,
          next: function (e) {
            var n = t(e);
            if (v) s.done = e >= h;
            else {
              var a = m;
              0 !== e && (a = g < 1 ? $r(t, e, n) : 0);
              var o = Math.abs(a) <= i,
                u = Math.abs(l - n) <= r;
              s.done = o && u;
            }
            return (s.value = s.done ? l : n), s;
          },
        };
      }
      function pi(e) {
        var t = e.keyframes,
          n = e.velocity,
          r = void 0 === n ? 0 : n,
          i = e.power,
          a = void 0 === i ? 0.8 : i,
          o = e.timeConstant,
          l = void 0 === o ? 325 : o,
          s = e.bounceDamping,
          u = void 0 === s ? 10 : s,
          c = e.bounceStiffness,
          d = void 0 === c ? 500 : c,
          f = e.modifyTarget,
          p = e.min,
          h = e.max,
          v = e.restDelta,
          m = void 0 === v ? 0.5 : v,
          g = e.restSpeed,
          y = t[0],
          b = { done: !1, value: y },
          x = function (e) {
            return void 0 === p
              ? h
              : void 0 === h || Math.abs(p - e) < Math.abs(h - e)
              ? p
              : h;
          },
          w = a * r,
          S = y + w,
          k = void 0 === f ? S : f(S);
        k !== S && (w = k - y);
        var A,
          E,
          j = function (e) {
            return -w * Math.exp(-e / l);
          },
          C = function (e) {
            return k + j(e);
          },
          P = function (e) {
            var t = j(e),
              n = C(e);
            (b.done = Math.abs(t) <= m), (b.value = b.done ? k : n);
          },
          T = function (e) {
            var t;
            ((t = b.value),
            (void 0 !== p && t < p) || (void 0 !== h && t > h)) &&
              ((A = e),
              (E = fi({
                keyframes: [b.value, x(b.value)],
                velocity: $r(C, e, b.value),
                damping: u,
                stiffness: d,
                restDelta: m,
                restSpeed: g,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: function (e) {
              var t = !1;
              return (
                E || void 0 !== A || ((t = !0), P(e), T(e)),
                void 0 !== A && e > A ? E.next(e - A) : (!t && P(e), b)
              );
            },
          }
        );
      }
      var hi = function (e) {
          var t = function (t) {
            var n = t.timestamp;
            return e(n);
          };
          return {
            start: function () {
              return xn.update(t, !0);
            },
            stop: function () {
              return wn(t);
            },
            now: function () {
              return Sn.isProcessing ? Sn.timestamp : performance.now();
            },
          };
        },
        vi = 2e4;
      function mi(e) {
        for (var t = 0, n = e.next(t); !n.done && t < vi; )
          (t += 50), (n = e.next(t));
        return t >= vi ? 1 / 0 : t;
      }
      var gi = [
          "autoplay",
          "delay",
          "driver",
          "keyframes",
          "type",
          "repeat",
          "repeatDelay",
          "repeatType",
          "onPlay",
          "onStop",
          "onComplete",
          "onUpdate",
        ],
        yi = { decay: pi, inertia: pi, tween: Kr, keyframes: Kr, spring: fi };
      function bi(e) {
        var t,
          n,
          r,
          i = e.autoplay,
          a = void 0 === i || i,
          o = e.delay,
          l = void 0 === o ? 0 : o,
          s = e.driver,
          u = void 0 === s ? hi : s,
          c = e.keyframes,
          d = e.type,
          f = void 0 === d ? "keyframes" : d,
          p = e.repeat,
          h = void 0 === p ? 0 : p,
          v = e.repeatDelay,
          m = void 0 === v ? 0 : v,
          g = e.repeatType,
          y = void 0 === g ? "loop" : g,
          b = e.onPlay,
          x = e.onStop,
          w = e.onComplete,
          S = e.onUpdate,
          k = St(e, gi),
          A = 1,
          E = !1,
          j = function () {
            n = new Promise(function (e) {
              t = e;
            });
          };
        j();
        var C,
          P = yi[f] || Kr;
        P !== Kr &&
          "number" !== typeof c[0] &&
          ((C = Xr([0, 100], c, { clamp: !1 })), (c = [0, 100]));
        var T,
          O = P(ce(ce({}, k), {}, { keyframes: c }));
        "mirror" === y &&
          (T = P(
            ce(
              ce({}, k),
              {},
              { keyframes: Vn(c).reverse(), velocity: -(k.velocity || 0) }
            )
          ));
        var N = "idle",
          M = null,
          L = null,
          I = null;
        null === O.calculatedDuration && h && (O.calculatedDuration = mi(O));
        var R = O.calculatedDuration,
          D = 1 / 0,
          z = 1 / 0;
        null !== R && (z = (D = R + m) * (h + 1) - m);
        var B = 0,
          V = function (e) {
            if (null !== L) {
              A > 0 && (L = Math.min(L, e)),
                A < 0 && (L = Math.min(e - z / A, L));
              var t =
                  (B = null !== M ? M : Math.round(e - L) * A) -
                  l * (A >= 0 ? 1 : -1),
                n = A >= 0 ? t < 0 : t > z;
              (B = Math.max(t, 0)), "finished" === N && null === M && (B = z);
              var r = B,
                i = O;
              if (h) {
                var a = B / D,
                  o = Math.floor(a),
                  s = a % 1;
                !s && a >= 1 && (s = 1),
                  1 === s && o--,
                  (o = Math.min(o, h + 1));
                var u = Boolean(o % 2);
                u &&
                  ("reverse" === y
                    ? ((s = 1 - s), m && (s -= m / D))
                    : "mirror" === y && (i = T));
                var d = Ge(0, 1, s);
                B > z && (d = "reverse" === y && u ? 1 : 0), (r = d * D);
              }
              var f = n ? { done: !1, value: c[0] } : i.next(r);
              C && (f.value = C(f.value));
              var p = f.done;
              n || null === R || (p = A >= 0 ? B >= z : B <= 0);
              var v =
                null === M && ("finished" === N || ("running" === N && p));
              return S && S(f.value), v && W(), f;
            }
          },
          F = function () {
            r && r.stop(), (r = void 0);
          },
          H = function () {
            (N = "idle"), F(), t(), j(), (L = I = null);
          },
          W = function () {
            (N = "finished"), w && w(), F(), t();
          },
          U = function () {
            if (!E) {
              r || (r = u(V));
              var e = r.now();
              b && b(),
                null !== M ? (L = e - M) : (L && "finished" !== N) || (L = e),
                "finished" === N && j(),
                (I = L),
                (M = null),
                (N = "running"),
                r.start();
            }
          };
        a && U();
        var _ = {
          then: function (e, t) {
            return n.then(e, t);
          },
          get time() {
            return qn(B);
          },
          set time(e) {
            (e = Qn(e)),
              (B = e),
              null === M && r && 0 !== A ? (L = r.now() - e / A) : (M = e);
          },
          get duration() {
            var e =
              null === O.calculatedDuration ? mi(O) : O.calculatedDuration;
            return qn(e);
          },
          get speed() {
            return A;
          },
          set speed(e) {
            e !== A && r && ((A = e), (_.time = qn(B)));
          },
          get state() {
            return N;
          },
          play: U,
          pause: function () {
            (N = "paused"), (M = B);
          },
          stop: function () {
            (E = !0), "idle" !== N && ((N = "idle"), x && x(), H());
          },
          cancel: function () {
            null !== I && V(I), H();
          },
          complete: function () {
            N = "finished";
          },
          sample: function (e) {
            return (L = 0), V(e);
          },
        };
        return _;
      }
      var xi = ["onUpdate", "onComplete"],
        wi = (function (e) {
          var t;
          return function () {
            return void 0 === t && (t = e()), t;
          };
        })(function () {
          return Object.hasOwnProperty.call(Element.prototype, "animate");
        }),
        Si = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ki = 10,
        Ai = 2e4,
        Ei = function (e, t) {
          return "spring" === t.type || "backgroundColor" === e || !Gn(t.ease);
        };
      function ji(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          i = St(n, xi);
        if (
          !(
            wi() &&
            Si.has(t) &&
            !i.repeatDelay &&
            "mirror" !== i.repeatType &&
            0 !== i.damping &&
            "inertia" !== i.type
          )
        )
          return !1;
        var a,
          o,
          l = !1,
          s = function () {
            o = new Promise(function (e) {
              a = e;
            });
          };
        s();
        var u = i.keyframes,
          c = i.duration,
          d = void 0 === c ? 300 : c,
          f = i.ease,
          p = i.times;
        if (Ei(t, i)) {
          for (
            var h = bi(ce(ce({}, i), {}, { repeat: 0, delay: 0 })),
              v = { done: !1, value: u[0] },
              m = [],
              g = 0;
            !v.done && g < Ai;

          )
            (v = h.sample(g)), m.push(v.value), (g += ki);
          (p = void 0), (u = m), (d = g - ki), (f = "linear");
        }
        var y = (function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              i = r.delay,
              a = void 0 === i ? 0 : i,
              o = r.duration,
              l = r.repeat,
              s = void 0 === l ? 0 : l,
              u = r.repeatType,
              c = void 0 === u ? "loop" : u,
              d = r.ease,
              f = r.times,
              p = se({}, t, n);
            f && (p.offset = f);
            var h = Zn(d);
            return (
              Array.isArray(h) && (p.easing = h),
              e.animate(p, {
                delay: a,
                duration: o,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === c ? "alternate" : "normal",
              })
            );
          })(
            e.owner.current,
            t,
            u,
            ce(ce({}, i), {}, { duration: d, ease: f, times: p })
          ),
          b = function () {
            return y.cancel();
          },
          x = function () {
            xn.update(b), a(), s();
          };
        return (
          (y.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(u, i)
            ),
              r && r(),
              x();
          }),
          {
            then: function (e, t) {
              return o.then(e, t);
            },
            attachTimeline: function (e) {
              return (y.timeline = e), (y.onfinish = null), mn;
            },
            get time() {
              return qn(y.currentTime || 0);
            },
            set time(e) {
              y.currentTime = Qn(e);
            },
            get speed() {
              return y.playbackRate;
            },
            set speed(e) {
              y.playbackRate = e;
            },
            get duration() {
              return qn(d);
            },
            play: function () {
              l || (y.play(), wn(b));
            },
            pause: function () {
              return y.pause();
            },
            stop: function () {
              if (((l = !0), "idle" !== y.playState)) {
                var t = y.currentTime;
                if (t) {
                  var n = bi(ce(ce({}, i), {}, { autoplay: !1 }));
                  e.setWithVelocity(
                    n.sample(t - ki).value,
                    n.sample(t).value,
                    ki
                  );
                }
                x();
              }
            },
            complete: function () {
              return y.finish();
            },
            cancel: x,
          }
        );
      }
      var Ci = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Pi = { type: "keyframes", duration: 0.8 },
        Ti = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Oi = function (e, t) {
          var n = t.keyframes;
          return n.length > 2
            ? Pi
            : Fe.has(e)
            ? e.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : Ci
            : Ti;
        },
        Ni = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !(
                "string" !== typeof t ||
                (!Vr.test(t) && "0" !== t) ||
                t.startsWith("url(")
              ))
          );
        },
        Mi = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Li(e) {
        var t = a(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var i = a(r.match(et) || [], 1)[0];
        if (!i) return e;
        var o = r.replace(i, ""),
          l = Mi.has(n) ? 1 : 0;
        return i !== r && (l *= 100), n + "(" + l + o + ")";
      }
      var Ii = /([a-z-]*)\(.*?\)/g,
        Ri = ce(
          ce({}, Vr),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(Ii);
              return t ? t.map(Li).join(" ") : e;
            },
          }
        ),
        Di = ce(
          ce({}, ft),
          {},
          {
            color: kr,
            backgroundColor: kr,
            outlineColor: kr,
            fill: kr,
            stroke: kr,
            borderColor: kr,
            borderTopColor: kr,
            borderRightColor: kr,
            borderBottomColor: kr,
            borderLeftColor: kr,
            filter: Ri,
            WebkitFilter: Ri,
          }
        ),
        zi = function (e) {
          return Di[e];
        };
      function Bi(e, t) {
        var n = zi(e);
        return (
          n !== Ri && (n = Vr),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      var Vi = function (e) {
        return /^0[^.\s]+$/.test(e);
      };
      function Fi(e) {
        return "number" === typeof e
          ? 0 === e
          : null !== e
          ? "none" === e || "0" === e || Vi(e)
          : void 0;
      }
      var Hi = [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ];
      function Wi(e, t) {
        return e[t] || e.default || e;
      }
      var Ui = function (e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function (i) {
          var a = Wi(r, e) || {},
            o = a.delay || r.delay || 0,
            l = r.elapsed,
            s = void 0 === l ? 0 : l;
          s -= Qn(o);
          var u = (function (e, t, n, r) {
              var i,
                a = Ni(t, n);
              i = Array.isArray(n) ? Vn(n) : [null, n];
              for (
                var o = void 0 !== r.from ? r.from : e.get(),
                  l = void 0,
                  s = [],
                  u = 0;
                u < i.length;
                u++
              )
                null === i[u] && (i[u] = 0 === u ? o : i[u - 1]),
                  Fi(i[u]) && s.push(u),
                  "string" === typeof i[u] &&
                    "none" !== i[u] &&
                    "0" !== i[u] &&
                    (l = i[u]);
              if (a && s.length && l)
                for (var c = 0; c < s.length; c++) i[s[c]] = Bi(t, l);
              return i;
            })(t, e, n, a),
            c = u[0],
            d = u[u.length - 1],
            f = Ni(e, c),
            p = Ni(e, d);
          Un(
            f === p,
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(c, '" to "')
              .concat(d, '". ')
              .concat(
                c,
                " is not an animatable value - to enable this animation set "
              )
              .concat(c, " to a value animatable to ")
              .concat(d, " via the `style` property.")
          );
          var h = ce(
            ce({ keyframes: u, velocity: t.getVelocity(), ease: "easeOut" }, a),
            {},
            {
              delay: -s,
              onUpdate: function (e) {
                t.set(e), a.onUpdate && a.onUpdate(e);
              },
              onComplete: function () {
                i(), a.onComplete && a.onComplete();
              },
            }
          );
          if (
            ((function (e) {
              e.when,
                e.delay,
                e.delayChildren,
                e.staggerChildren,
                e.staggerDirection,
                e.repeat,
                e.repeatType,
                e.repeatDelay,
                e.from,
                e.elapsed;
              var t = St(e, Hi);
              return !!Object.keys(t).length;
            })(a) || (h = ce(ce({}, h), Oi(e, h))),
            h.duration && (h.duration = Qn(h.duration)),
            h.repeatDelay && (h.repeatDelay = Qn(h.repeatDelay)),
            !f || !p || Yn || !1 === a.type)
          )
            return (function (e) {
              var t = e.keyframes,
                n = e.delay,
                r = e.onUpdate,
                i = e.onComplete,
                a = function () {
                  return (
                    r && r(t[t.length - 1]),
                    i && i(),
                    {
                      time: 0,
                      speed: 1,
                      duration: 0,
                      play: mn,
                      pause: mn,
                      stop: mn,
                      then: function (e) {
                        return e(), Promise.resolve();
                      },
                      cancel: mn,
                      complete: mn,
                    }
                  );
                };
              return n
                ? bi({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: n,
                    onComplete: a,
                  })
                : a();
            })(Yn ? ce(ce({}, h), {}, { delay: 0 }) : h);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            var v = ji(t, e, h);
            if (v) return v;
          }
          return bi(h);
        };
      };
      function _i(e) {
        return Boolean(We(e) && e.add);
      }
      var Qi = function (e) {
        return /^\-?\d*\.?\d+$/.test(e);
      };
      function qi(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Yi(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Xi = (function () {
          function e() {
            Xt(this, e), (this.subscriptions = []);
          }
          return (
            Kt(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this;
                  return (
                    qi(this.subscriptions, e),
                    function () {
                      return Yi(t.subscriptions, e);
                    }
                  );
                },
              },
              {
                key: "notify",
                value: function (e, t, n) {
                  var r = this.subscriptions.length;
                  if (r)
                    if (1 === r) this.subscriptions[0](e, t, n);
                    else
                      for (var i = 0; i < r; i++) {
                        var a = this.subscriptions[i];
                        a && a(e, t, n);
                      }
                },
              },
              {
                key: "getSize",
                value: function () {
                  return this.subscriptions.length;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.subscriptions.length = 0;
                },
              },
            ]),
            e
          );
        })(),
        Gi = (function () {
          function e(t) {
            var n,
              r = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            Xt(this, e),
              (this.version = "10.15.0"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (r.prev = r.current), (r.current = e);
                var n = Sn.delta,
                  i = Sn.timestamp;
                r.lastUpdated !== i &&
                  ((r.timeDelta = n),
                  (r.lastUpdated = i),
                  xn.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current &&
                    r.events.change &&
                    r.events.change.notify(r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()),
                  t &&
                    r.events.renderRequest &&
                    r.events.renderRequest.notify(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return xn.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n)))),
              (this.owner = i.owner);
          }
          return (
            Kt(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new Xi());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          xn.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? Jr(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n)),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  delete this.animation;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function Ki(e, t) {
        return new Gi(e, t);
      }
      var Ji = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        Zi = [
          Ke,
          lt,
          ot,
          at,
          ut,
          st,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        $i = function (e) {
          return Zi.find(Ji(e));
        },
        ea = [].concat(Vn(Zi), [kr, Vr]),
        ta = function (e) {
          return ea.find(Ji(e));
        },
        na = ["transitionEnd", "transition"];
      function ra(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ki(n));
      }
      function ia(e, t) {
        var n = Hn(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd,
          a = void 0 === i ? {} : i,
          o = (r.transition, St(r, na));
        for (var l in (o = ce(ce({}, o), a))) {
          ra(e, l, Ht(o[l]));
        }
      }
      function aa(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      var oa = ["transition", "transitionEnd"];
      function la(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.delay,
          i = void 0 === r ? 0 : r,
          a = n.transitionOverride,
          o = n.type,
          l = e.makeTargetAnimatable(t),
          s = l.transition,
          u = void 0 === s ? e.getDefaultTransition() : s,
          c = l.transitionEnd,
          d = St(l, oa),
          f = e.getValue("willChange");
        a && (u = a);
        var p = [],
          h = o && e.animationState && e.animationState.getState()[o],
          v = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (
              !n ||
              void 0 === r ||
              (h &&
                (function (e, t) {
                  var n = e.protectedKeys,
                    r = e.needsAnimating,
                    i = n.hasOwnProperty(t) && !0 !== r[t];
                  return (r[t] = !1), i;
                })(h, t))
            )
              return "continue";
            var a = ce({ delay: i, elapsed: 0 }, u);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var o = e.getProps()[Wn];
              o && (a.elapsed = window.HandoffAppearAnimations(o, t, n, xn));
            }
            n.start(
              Ui(t, n, r, e.shouldReduceMotion && Fe.has(t) ? { type: !1 } : a)
            );
            var l = n.animation;
            _i(f) &&
              (f.add(t),
              l.then(function () {
                return f.remove(t);
              })),
              p.push(l);
          };
        for (var m in d) v(m);
        return (
          c &&
            Promise.all(p).then(function () {
              c && ia(e, c);
            }),
          p
        );
      }
      function sa(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Hn(e, t, n.custom),
          i = (r || {}).transition,
          o = void 0 === i ? e.getDefaultTransition() || {} : i;
        n.transitionOverride && (o = n.transitionOverride);
        var l = r
            ? function () {
                return Promise.all(la(e, r, n));
              }
            : function () {
                return Promise.resolve();
              },
          s =
            e.variantChildren && e.variantChildren.size
              ? function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    i = o,
                    a = i.delayChildren,
                    l = void 0 === a ? 0 : a,
                    s = i.staggerChildren,
                    u = i.staggerDirection;
                  return (function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      a = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      l = (e.variantChildren.size - 1) * r,
                      s =
                        1 === i
                          ? function () {
                              return (
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) * r
                              );
                            }
                          : function () {
                              return (
                                l -
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) *
                                  r
                              );
                            };
                    return (
                      Array.from(e.variantChildren)
                        .sort(ua)
                        .forEach(function (e, r) {
                          e.notify("AnimationStart", t),
                            o.push(
                              sa(
                                e,
                                t,
                                ce(ce({}, a), {}, { delay: n + s(r) })
                              ).then(function () {
                                return e.notify("AnimationComplete", t);
                              })
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, l + r, s, u, n);
                }
              : function () {
                  return Promise.resolve();
                },
          u = o.when;
        if (u) {
          var c = a("beforeChildren" === u ? [l, s] : [s, l], 2),
            d = c[0],
            f = c[1];
          return d().then(function () {
            return f();
          });
        }
        return Promise.all([l(), s(n.delay)]);
      }
      function ua(e, t) {
        return e.sortNodePosition(t);
      }
      var ca = ["transition", "transitionEnd"],
        da = Vn(xe).reverse(),
        fa = xe.length;
      function pa(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var i = t.map(function (t) {
                    return sa(e, t, r);
                  });
                  n = Promise.all(i);
                } else if ("string" === typeof t) n = sa(e, t, r);
                else {
                  var a = "function" === typeof t ? Hn(e, t, r.custom) : t;
                  n = Promise.all(la(e, a, r));
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function ha(e) {
        var t = pa(e),
          n = {
            animate: va(!0),
            whileInView: va(),
            whileHover: va(),
            whileTap: va(),
            whileDrag: va(),
            whileFocus: va(),
            exit: va(),
          },
          r = !0,
          i = function (t, n) {
            var r = Hn(e, n);
            if (r) {
              r.transition;
              var i = r.transitionEnd,
                a = St(r, ca);
              t = ce(ce(ce({}, t), a), i);
            }
            return t;
          };
        function a(a, o) {
          for (
            var l = e.getProps(),
              s = e.getVariantContext(!0) || {},
              u = [],
              c = new Set(),
              d = {},
              f = 1 / 0,
              p = function () {
                var t = da[h],
                  p = n[t],
                  v = void 0 !== l[t] ? l[t] : s[t],
                  m = ye(v),
                  g = t === o ? p.isActive : null;
                !1 === g && (f = h);
                var y = v === s[t] && v !== l[t] && m;
                if (
                  (y && r && e.manuallyAnimateOnMount && (y = !1),
                  (p.protectedKeys = ce({}, d)),
                  (!p.isActive && null === g) ||
                    (!v && !p.prevProp) ||
                    be(v) ||
                    "boolean" === typeof v)
                )
                  return "continue";
                var b = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !Fn(t, e);
                    return !1;
                  })(p.prevProp, v),
                  x = b || (t === o && p.isActive && !y && m) || (h > f && m),
                  w = Array.isArray(v) ? v : [v],
                  S = w.reduce(i, {});
                !1 === g && (S = {});
                var k = p.prevResolvedValues,
                  A = void 0 === k ? {} : k,
                  E = ce(ce({}, A), S),
                  j = function (e) {
                    (x = !0), c.delete(e), (p.needsAnimating[e] = !0);
                  };
                for (var C in E) {
                  var P = S[C],
                    T = A[C];
                  d.hasOwnProperty(C) ||
                    (P !== T
                      ? Vt(P) && Vt(T)
                        ? !Fn(P, T) || b
                          ? j(C)
                          : (p.protectedKeys[C] = !0)
                        : void 0 !== P
                        ? j(C)
                        : c.add(C)
                      : void 0 !== P && c.has(C)
                      ? j(C)
                      : (p.protectedKeys[C] = !0));
                }
                (p.prevProp = v),
                  (p.prevResolvedValues = S),
                  p.isActive && (d = ce(ce({}, d), S)),
                  r && e.blockInitialAnimation && (x = !1),
                  x &&
                    !y &&
                    u.push.apply(
                      u,
                      Vn(
                        w.map(function (e) {
                          return { animation: e, options: ce({ type: t }, a) };
                        })
                      )
                    );
              },
              h = 0;
            h < fa;
            h++
          )
            p();
          if (c.size) {
            var v = {};
            c.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (v[t] = n);
            }),
              u.push({ animation: v });
          }
          var m = Boolean(u.length);
          return (
            r && !1 === l.initial && !e.manuallyAnimateOnMount && (m = !1),
            (r = !1),
            m ? t(u) : Promise.resolve()
          );
        }
        return {
          animateChanges: a,
          setActive: function (t, r, i) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = a(i, t);
            for (var s in n) n[s].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function va() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var ma = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n(e) {
            var r;
            return (
              Xt(this, n),
              (r = t.call(this, e)),
              e.animationState || (e.animationState = ha(e)),
              r
            );
          }
          return (
            Kt(n, [
              {
                key: "updateAnimationControlsSubscription",
                value: function () {
                  var e = this.node.getProps().animate;
                  this.unmount(),
                    be(e) && (this.unmount = e.subscribe(this.node));
                },
              },
              {
                key: "mount",
                value: function () {
                  this.updateAnimationControlsSubscription();
                },
              },
              {
                key: "update",
                value: function () {
                  this.node.getProps().animate !==
                    (this.node.prevProps || {}).animate &&
                    this.updateAnimationControlsSubscription();
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(vn),
        ga = 0,
        ya = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return Xt(this, n), ((e = t.apply(this, arguments)).id = ga++), e;
          }
          return (
            Kt(n, [
              {
                key: "update",
                value: function () {
                  var e = this;
                  if (this.node.presenceContext) {
                    var t = this.node.presenceContext,
                      n = t.isPresent,
                      r = t.onExitComplete,
                      i = t.custom,
                      a = (this.node.prevPresenceContext || {}).isPresent;
                    if (this.node.animationState && n !== a) {
                      var o = this.node.animationState.setActive("exit", !n, {
                        custom:
                          null !== i && void 0 !== i
                            ? i
                            : this.node.getProps().custom,
                      });
                      r &&
                        !n &&
                        o.then(function () {
                          return r(e.id);
                        });
                    }
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = (this.node.presenceContext || {}).register;
                  e && (this.unmount = e(this.id));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(vn),
        ba = { animation: { Feature: ma }, exit: { Feature: ya } },
        xa = function (e, t) {
          return Math.abs(e - t);
        };
      var wa = (function () {
        function e(t, n) {
          var r = this,
            i = (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            ).transformPagePoint;
          if (
            (Xt(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = Aa(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n =
                    (function (e, t) {
                      var n = xa(e.x, t.x),
                        r = xa(e.y, t.y);
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                    })(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var i = e.point,
                    a = Sn.timestamp;
                  r.history.push(ce(ce({}, i), {}, { timestamp: a }));
                  var o = r.handlers,
                    l = o.onStart,
                    s = o.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    s && s(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = Sa(t, r.transformPagePoint)),
                xn.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  i = n.onEnd,
                  a = n.onSessionEnd,
                  o = Aa(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : Sa(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && i && i(e, o), a && a(e, o);
              }
            }),
            rn(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = i);
            var a = Sa(an(t), this.transformPagePoint),
              o = a.point,
              l = Sn.timestamp;
            this.history = [ce(ce({}, o), {}, { timestamp: l })];
            var s = n.onSessionStart;
            s && s(t, Aa(a, this.history)),
              (this.removeListeners = un(
                ln(window, "pointermove", this.handlePointerMove),
                ln(window, "pointerup", this.handlePointerUp),
                ln(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          Kt(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  wn(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function Sa(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function ka(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function Aa(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: ka(n, ja(t)),
          offset: ka(n, Ea(t)),
          velocity: Ca(t, 0.1),
        };
      }
      function Ea(e) {
        return e[0];
      }
      function ja(e) {
        return e[e.length - 1];
      }
      function Ca(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, i = ja(e);
          n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Qn(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var a = qn(i.timestamp - r.timestamp);
        if (0 === a) return { x: 0, y: 0 };
        var o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function Pa(e) {
        return e.max - e.min;
      }
      function Ta(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function Oa(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Ar(t.min, t.max, e.origin)),
          (e.scale = Pa(n) / Pa(t)),
          (Ta(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Ar(n.min, n.max, e.origin) - e.originPoint),
          (Ta(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Na(e, t, n, r) {
        Oa(e.x, t.x, n.x, r ? r.originX : void 0),
          Oa(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function Ma(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + Pa(t));
      }
      function La(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + Pa(t));
      }
      function Ia(e, t, n) {
        La(e.x, t.x, n.x), La(e.y, t.y, n.y);
      }
      function Ra(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Da(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var i = [r, n];
          (n = i[0]), (r = i[1]);
        }
        return { min: n, max: r };
      }
      var za = 0.35;
      function Ba(e, t, n) {
        return { min: Va(e, t), max: Va(e, n) };
      }
      function Va(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      var Fa = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        Ha = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function Wa(e) {
        return [e("x"), e("y")];
      }
      function Ua(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function _a(e) {
        return void 0 === e || 1 === e;
      }
      function Qa(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !_a(t) || !_a(n) || !_a(r);
      }
      function qa(e) {
        return Qa(e) || Ya(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function Ya(e) {
        return Xa(e.x) || Xa(e.y);
      }
      function Xa(e) {
        return e && "0%" !== e;
      }
      function Ga(e, t, n) {
        return n + t * (e - n);
      }
      function Ka(e, t, n, r, i) {
        return void 0 !== i && (e = Ga(e, i, r)), Ga(e, n, r) + t;
      }
      function Ja(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = Ka(e.min, t, n, r, i)), (e.max = Ka(e.max, t, n, r, i));
      }
      function Za(e, t) {
        var n = t.x,
          r = t.y;
        Ja(e.x, n.translate, n.scale, n.originPoint),
          Ja(e.y, r.translate, r.scale, r.originPoint);
      }
      function $a(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function eo(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function to(e, t, n) {
        var r = a(n, 3),
          i = r[0],
          o = r[1],
          l = r[2],
          s = void 0 !== t[l] ? t[l] : 0.5,
          u = Ar(e.min, e.max, s);
        Ja(e, t[i], t[o], u, t.scale);
      }
      var no = ["x", "scaleX", "originX"],
        ro = ["y", "scaleY", "originY"];
      function io(e, t) {
        to(e.x, t, no), to(e.y, t, ro);
      }
      function ao(e, t) {
        return Ua(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var oo = new WeakMap(),
        lo = (function () {
          function e(t) {
            Xt(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = Ha()),
              (this.visualElement = t);
          }
          return (
            Kt(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).snapToCursor,
                    r = void 0 !== n && n,
                    i = this.visualElement.presenceContext;
                  if (!i || !1 !== i.isPresent) {
                    this.panSession = new wa(
                      e,
                      {
                        onSessionStart: function (e) {
                          t.stopAnimation(),
                            r && t.snapToCursor(an(e, "page").point);
                        },
                        onStart: function (e, n) {
                          var r = t.getProps(),
                            i = r.drag,
                            a = r.dragPropagation,
                            o = r.onDragStart;
                          if (
                            !i ||
                            a ||
                            (t.openGlobalLock && t.openGlobalLock(),
                            (t.openGlobalLock = pn(i)),
                            t.openGlobalLock)
                          ) {
                            (t.isDragging = !0),
                              (t.currentDirection = null),
                              t.resolveConstraints(),
                              t.visualElement.projection &&
                                ((t.visualElement.projection.isAnimationBlocked =
                                  !0),
                                (t.visualElement.projection.target = void 0)),
                              Wa(function (e) {
                                var n = t.getAxisMotionValue(e).get() || 0;
                                if (ot.test(n)) {
                                  var r = t.visualElement.projection;
                                  if (r && r.layout) {
                                    var i = r.layout.layoutBox[e];
                                    if (i) n = Pa(i) * (parseFloat(n) / 100);
                                  }
                                }
                                t.originPoint[e] = n;
                              }),
                              o &&
                                xn.update(
                                  function () {
                                    return o(e, n);
                                  },
                                  !1,
                                  !0
                                );
                            var l = t.visualElement.animationState;
                            l && l.setActive("whileDrag", !0);
                          }
                        },
                        onMove: function (e, n) {
                          var r = t.getProps(),
                            i = r.dragPropagation,
                            a = r.dragDirectionLock,
                            o = r.onDirectionLock,
                            l = r.onDrag;
                          if (i || t.openGlobalLock) {
                            var s = n.offset;
                            if (a && null === t.currentDirection)
                              return (
                                (t.currentDirection = (function (e) {
                                  var t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 10,
                                    n = null;
                                  Math.abs(e.y) > t
                                    ? (n = "y")
                                    : Math.abs(e.x) > t && (n = "x");
                                  return n;
                                })(s)),
                                void (
                                  null !== t.currentDirection &&
                                  o &&
                                  o(t.currentDirection)
                                )
                              );
                            t.updateAxis("x", n.point, s),
                              t.updateAxis("y", n.point, s),
                              t.visualElement.render(),
                              l && l(e, n);
                          }
                        },
                        onSessionEnd: function (e, n) {
                          return t.stop(e, n);
                        },
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var i = this.getProps().onDragEnd;
                    i &&
                      xn.update(function () {
                        return i(e, t);
                      });
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.isDragging = !1;
                  var e = this.visualElement,
                    t = e.projection,
                    n = e.animationState;
                  t && (t.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    n && n.setActive("whileDrag", !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && so(e, r, this.currentDirection)) {
                    var i = this.getAxisMotionValue(e),
                      a = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (a = (function (e, t, n) {
                        var r = t.min,
                          i = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Ar(r, e, n.min) : Math.max(e, r))
                            : void 0 !== i &&
                              e > i &&
                              (e = n ? Ar(i, e, n.max) : Math.min(e, i)),
                          e
                        );
                      })(a, this.constraints[e], this.elastic[e])),
                      i.set(a);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    i = (this.visualElement.projection || {}).layout,
                    a = this.constraints;
                  n && ge(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !i) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            i = t.bottom,
                            a = t.right;
                          return { x: Ra(e.x, r, a), y: Ra(e.y, n, i) };
                        })(i.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : za;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = za),
                        { x: Ba(e, "left", "right"), y: Ba(e, "top", "bottom") }
                      );
                    })(r)),
                    a !== this.constraints &&
                      i &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      Wa(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(i.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !ge(t)) return !1;
                  var r = t.current;
                  _n(
                    null !== r,
                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                  );
                  var i = this.visualElement.projection;
                  if (!i || !i.layout) return !1;
                  var a = (function (e, t, n) {
                      var r = ao(e, n),
                        i = t.scroll;
                      return i && (eo(r.x, i.offset.x), eo(r.y, i.offset.y)), r;
                    })(r, i.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: Da(e.x, t.x), y: Da(e.y, t.y) };
                    })(i.layout.layoutBox, a);
                  if (n) {
                    var l = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!l), l && (o = Ua(l));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    i = n.dragMomentum,
                    a = n.dragElastic,
                    o = n.dragTransition,
                    l = n.dragSnapToOrigin,
                    s = n.onDragTransitionEnd,
                    u = this.constraints || {},
                    c = Wa(function (n) {
                      if (so(n, r, t.currentDirection)) {
                        var s = (u && u[n]) || {};
                        l && (s = { min: 0, max: 0 });
                        var c = a ? 200 : 1e6,
                          d = a ? 40 : 1e7,
                          f = ce(
                            ce(
                              {
                                type: "inertia",
                                velocity: i ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: d,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            s
                          );
                        return t.startAxisValueAnimation(n, f);
                      }
                    });
                  return Promise.all(c).then(s);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(Ui(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  Wa(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (n.initial ? n.initial[e] : void 0) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  Wa(function (n) {
                    if (so(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        i = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var a = r.layout.layoutBox[n],
                          o = a.min,
                          l = a.max;
                        i.set(e[n] - Ar(o, l, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    var t = this.getProps(),
                      n = t.drag,
                      r = t.dragConstraints,
                      i = this.visualElement.projection;
                    if (ge(r) && i && this.constraints) {
                      this.stopAnimation();
                      var a = { x: 0, y: 0 };
                      Wa(function (t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                          var r = n.get();
                          a[t] = (function (e, t) {
                            var n = 0.5,
                              r = Pa(e),
                              i = Pa(t);
                            return (
                              i > r
                                ? (n = Qr(t.min, t.max - r, e.min))
                                : r > i && (n = Qr(e.min, e.max - i, t.min)),
                              Ge(0, 1, n)
                            );
                          })({ min: r, max: r }, e.constraints[t]);
                        }
                      });
                      var o = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = o
                        ? o({}, "")
                        : "none"),
                        i.root && i.root.updateScroll(),
                        i.updateLayout(),
                        this.resolveConstraints(),
                        Wa(function (t) {
                          if (so(t, n, null)) {
                            var r = e.getAxisMotionValue(t),
                              i = e.constraints[t],
                              o = i.min,
                              l = i.max;
                            r.set(Ar(o, l, a[t]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    oo.set(this.visualElement, this);
                    var t = ln(
                        this.visualElement.current,
                        "pointerdown",
                        function (t) {
                          var n = e.getProps(),
                            r = n.drag,
                            i = n.dragListener;
                          r && (void 0 === i || i) && e.start(t);
                        }
                      ),
                      n = function () {
                        ge(e.getProps().dragConstraints) &&
                          (e.constraints = e.resolveRefConstraints());
                      },
                      r = this.visualElement.projection,
                      i = r.addEventListener("measure", n);
                    r &&
                      !r.layout &&
                      (r.root && r.root.updateScroll(), r.updateLayout()),
                      n();
                    var a = nn(window, "resize", function () {
                        return e.scalePositionWithinConstraints();
                      }),
                      o = r.addEventListener("didUpdate", function (t) {
                        var n = t.delta,
                          r = t.hasLayoutChanged;
                        e.isDragging &&
                          r &&
                          (Wa(function (t) {
                            var r = e.getAxisMotionValue(t);
                            r &&
                              ((e.originPoint[t] += n[t].translate),
                              r.set(r.get() + n[t].translate));
                          }),
                          e.visualElement.render());
                      });
                    return function () {
                      a(), t(), i(), o && o();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    i = void 0 !== r && r,
                    a = e.dragPropagation,
                    o = void 0 !== a && a,
                    l = e.dragConstraints,
                    s = void 0 !== l && l,
                    u = e.dragElastic,
                    c = void 0 === u ? za : u,
                    d = e.dragMomentum,
                    f = void 0 === d || d;
                  return ce(
                    ce({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: i,
                      dragPropagation: o,
                      dragConstraints: s,
                      dragElastic: c,
                      dragMomentum: f,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function so(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var uo = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n(e) {
            var r;
            return (
              Xt(this, n),
              ((r = t.call(this, e)).removeGroupControls = mn),
              (r.removeListeners = mn),
              (r.controls = new lo(e)),
              r
            );
          }
          return (
            Kt(n, [
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps().dragControls;
                  e && (this.removeGroupControls = e.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || mn);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeGroupControls(), this.removeListeners();
                },
              },
            ]),
            n
          );
        })(vn),
        co = function (e) {
          return function (t, n) {
            e &&
              xn.update(function () {
                return e(t, n);
              });
          };
        },
        fo = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return (
              Xt(this, n),
              ((e = t.apply(this, arguments)).removePointerDownListener = mn),
              e
            );
          }
          return (
            Kt(n, [
              {
                key: "onPointerDown",
                value: function (e) {
                  this.session = new wa(e, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                  });
                },
              },
              {
                key: "createPanHandlers",
                value: function () {
                  var e = this,
                    t = this.node.getProps(),
                    n = t.onPanSessionStart,
                    r = t.onPanStart,
                    i = t.onPan,
                    a = t.onPanEnd;
                  return {
                    onSessionStart: co(n),
                    onStart: co(r),
                    onMove: i,
                    onEnd: function (t, n) {
                      delete e.session,
                        a &&
                          xn.update(function () {
                            return a(t, n);
                          });
                    },
                  };
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.removePointerDownListener = ln(
                    this.node.current,
                    "pointerdown",
                    function (t) {
                      return e.onPointerDown(t);
                    }
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                },
              },
            ]),
            n
          );
        })(vn);
      var po = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ho(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var vo = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!lt.test(e)) return e;
              e = parseFloat(e);
            }
            var n = ho(e, t.target.x),
              r = ho(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        mo = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              i = e,
              a = Vr.parse(e);
            if (a.length > 5) return i;
            var o = Vr.createTransformer(e),
              l = "number" !== typeof a[0] ? 1 : 0,
              s = r.x.scale * n.x,
              u = r.y.scale * n.y;
            (a[0 + l] /= s), (a[1 + l] /= u);
            var c = Ar(s, u, 0.5);
            return (
              "number" === typeof a[2 + l] && (a[2 + l] /= c),
              "number" === typeof a[3 + l] && (a[3 + l] /= c),
              o(a)
            );
          },
        },
        go = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            return Xt(this, n), t.apply(this, arguments);
          }
          return (
            Kt(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    i = n.layoutGroup,
                    a = n.switchLayoutGroup,
                    o = n.layoutId,
                    l = r.projection;
                  (e = bo),
                    Object.assign(Be, e),
                    l &&
                      (i.group && i.group.add(l),
                      a && a.register && o && a.register(l),
                      l.root.didUpdate(),
                      l.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      l.setOptions(
                        ce(
                          ce({}, l.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (po.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    i = n.visualElement,
                    a = n.drag,
                    o = n.isPresent,
                    l = i.projection;
                  return l
                    ? ((l.isPresent = o),
                      a || e.layoutDependency !== r || void 0 === r
                        ? l.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? l.promote()
                          : l.relegate() ||
                            xn.postRender(function () {
                              var e = l.getStack();
                              (e && e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this,
                    t = this.props.visualElement.projection;
                  t &&
                    (t.root.didUpdate(),
                    queueMicrotask(function () {
                      !t.currentAnimation && t.isLead() && e.safeToRemove();
                    }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    i = t.projection;
                  i &&
                    (i.scheduleCheckAfterUnmount(),
                    n && n.group && n.group.remove(i),
                    r && r.deregister && r.deregister(i));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  e && e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(e.Component);
      function yo(t) {
        var n = (function () {
            var t = (0, e.useContext)(pe);
            if (null === t) return [!0, null];
            var n = t.isPresent,
              r = t.onExitComplete,
              i = t.register,
              a = (0, e.useId)();
            return (
              (0, e.useEffect)(function () {
                return i(a);
              }, []),
              !n && r
                ? [
                    !1,
                    function () {
                      return r && r(a);
                    },
                  ]
                : [!0]
            );
          })(),
          r = a(n, 2),
          i = r[0],
          o = r[1],
          l = (0, e.useContext)(Oe);
        return e.createElement(
          go,
          ce(
            ce({}, t),
            {},
            {
              layoutGroup: l,
              switchLayoutGroup: (0, e.useContext)(Ne),
              isPresent: i,
              safeToRemove: o,
            }
          )
        );
      }
      var bo = {
          borderRadius: ce(
            ce({}, vo),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: vo,
          borderTopRightRadius: vo,
          borderBottomLeftRadius: vo,
          borderBottomRightRadius: vo,
          boxShadow: mo,
        },
        xo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wo = xo.length,
        So = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        ko = function (e) {
          return "number" === typeof e || lt.test(e);
        };
      function Ao(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var Eo = Co(0, 0.5, cr),
        jo = Co(0.5, 0.95, mn);
      function Co(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(Qr(e, t, r));
        };
      }
      function Po(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function To(e, t) {
        Po(e.x, t.x), Po(e.y, t.y);
      }
      function Oo(e, t, n, r, i) {
        return (
          (e = Ga((e -= t), 1 / n, r)), void 0 !== i && (e = Ga(e, 1 / i, r)), e
        );
      }
      function No(e, t, n, r, i) {
        var o = a(n, 3),
          l = o[0],
          s = o[1],
          u = o[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            i = arguments.length > 4 ? arguments[4] : void 0,
            a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (
            (ot.test(t) &&
              ((t = parseFloat(t)), (t = Ar(o.min, o.max, t / 100) - o.min)),
            "number" === typeof t)
          ) {
            var l = Ar(a.min, a.max, r);
            e === a && (l -= t),
              (e.min = Oo(e.min, t, n, l, i)),
              (e.max = Oo(e.max, t, n, l, i));
          }
        })(e, t[l], t[s], t[u], t.scale, r, i);
      }
      var Mo = ["x", "scaleX", "originX"],
        Lo = ["y", "scaleY", "originY"];
      function Io(e, t, n, r) {
        No(e.x, t, Mo, n ? n.x : void 0, r ? r.x : void 0),
          No(e.y, t, Lo, n ? n.y : void 0, r ? r.y : void 0);
      }
      function Ro(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Do(e) {
        return Ro(e.x) && Ro(e.y);
      }
      function zo(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function Bo(e) {
        return Pa(e.x) / Pa(e.y);
      }
      var Vo = (function () {
        function e() {
          Xt(this, e), (this.members = []);
        }
        return (
          Kt(e, [
            {
              key: "add",
              value: function (e) {
                qi(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (Yi(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var i = this.members[r];
                  if (!1 !== i.isPresent) {
                    t = i;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n = this.lead;
                e !== n &&
                  ((this.prevLead = n),
                  (this.lead = e),
                  e.show(),
                  n &&
                    (n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = n),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot &&
                      ((e.snapshot = n.snapshot),
                      (e.snapshot.latestValues =
                        n.animationValues || n.latestValues)),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && n.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t = e.options,
                    n = e.resumingFrom;
                  t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete();
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function Fo(e, t, n) {
        var r = "",
          i = e.x.translate / t.x,
          a = e.y.translate / t.y;
        if (
          ((i || a) &&
            (r = "translate3d(".concat(i, "px, ").concat(a, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            l = n.rotateX,
            s = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            l && (r += "rotateX(".concat(l, "deg) ")),
            s && (r += "rotateY(".concat(s, "deg) "));
        }
        var u = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === u && 1 === c) ||
            (r += "scale(".concat(u, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var Ho = function (e, t) {
          return e.depth - t.depth;
        },
        Wo = (function () {
          function e() {
            Xt(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            Kt(e, [
              {
                key: "add",
                value: function (e) {
                  qi(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  Yi(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(Ho),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })();
      var Uo = ["", "X", "Y", "Z"],
        _o = 1e3,
        Qo = 0,
        qo = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function Yo(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          i = e.checkIsScrollRoot,
          a = e.resetTransform;
        return (function () {
          function e() {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            Xt(this, e),
              (this.id = Qo++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = function () {
                t.isUpdating && ((t.isUpdating = !1), t.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                var e;
                (qo.totalNodes =
                  qo.resolvedTargetDeltas =
                  qo.recalculatedProjection =
                    0),
                  t.nodes.forEach(Ko),
                  t.nodes.forEach(rl),
                  t.nodes.forEach(il),
                  t.nodes.forEach(Jo),
                  (e = qo),
                  window.MotionDebug && window.MotionDebug.record(e);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = r),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat(Vn(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Wo());
          }
          return (
            Kt(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new Xi()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  t && t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.root.hasTreeAnimated;
                  if (!this.instance) {
                    var i;
                    (this.isSVG =
                      (i = e) instanceof SVGElement && "svg" !== i.tagName),
                      (this.instance = e);
                    var a = this.options,
                      o = a.layoutId,
                      l = a.layout,
                      s = a.visualElement;
                    if (
                      (s && !s.current && s.mount(e),
                      this.root.nodes.add(this),
                      this.parent && this.parent.children.add(this),
                      r && (l || o) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var u,
                        c = function () {
                          return (n.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (n.root.updateBlockedByResize = !0),
                          u && u(),
                          (u = (function (e, t) {
                            var n = performance.now(),
                              r = function r(i) {
                                var a = i.timestamp - n;
                                a >= t && (wn(r), e(a - t));
                              };
                            return (
                              xn.read(r, !0),
                              function () {
                                return wn(r);
                              }
                            );
                          })(c, 250)),
                          po.hasAnimatedSinceResize &&
                            ((po.hasAnimatedSinceResize = !1),
                            n.nodes.forEach(nl));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        s &&
                        (o || l) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t = e.delta,
                            r = e.hasLayoutChanged,
                            i = e.hasRelativeTargetChanged,
                            a = e.layout;
                          if (n.isTreeAnimationBlocked())
                            return (
                              (n.target = void 0),
                              void (n.relativeTarget = void 0)
                            );
                          var o =
                              n.options.transition ||
                              s.getDefaultTransition() ||
                              cl,
                            l = s.getProps(),
                            u = l.onLayoutAnimationStart,
                            c = l.onLayoutAnimationComplete,
                            d = !n.targetLayout || !zo(n.targetLayout, a) || i,
                            f = !r && i;
                          if (
                            n.options.layoutRoot ||
                            (n.resumeFrom && n.resumeFrom.instance) ||
                            f ||
                            (r && (d || !n.currentAnimation))
                          ) {
                            n.resumeFrom &&
                              ((n.resumingFrom = n.resumeFrom),
                              (n.resumingFrom.resumingFrom = void 0)),
                              n.setAnimationOrigin(t, f);
                            var p = ce(
                              ce({}, Wi(o, "layout")),
                              {},
                              { onPlay: u, onComplete: c }
                            );
                            (s.shouldReduceMotion || n.options.layoutRoot) &&
                              ((p.delay = 0), (p.type = !1)),
                              n.startAnimation(p);
                          } else r || nl(n), n.isLead() && n.options.onExitComplete && n.options.onExitComplete();
                          n.targetLayout = a;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                  var e = this.getStack();
                  e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    (this.instance = void 0),
                    wn(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  return (
                    this.isAnimationBlocked ||
                    (this.parent && this.parent.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(al),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e = this.options.visualElement;
                  return e && e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    ((this.root.hasTreeAnimated = !0),
                    this.root.isUpdateBlocked())
                  )
                    this.options.onExitComplete &&
                      this.options.onExitComplete();
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var t = 0; t < this.path.length; t++) {
                      var n = this.path[t];
                      (n.shouldResetTransform = !0),
                        n.updateScroll("snapshot"),
                        n.options.layoutRoot && n.willUpdate(!1);
                    }
                    var r = this.options,
                      i = r.layoutId,
                      a = r.layout;
                    if (void 0 !== i || a) {
                      var o = this.getTransformTemplate();
                      (this.prevTransformTemplateValue = o
                        ? o(this.latestValues, "")
                        : void 0),
                        this.updateSnapshot(),
                        e && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  if (((this.updateScheduled = !1), this.isUpdateBlocked()))
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach($o)
                    );
                  this.isUpdating || this.nodes.forEach(el),
                    (this.isUpdating = !1),
                    this.nodes.forEach(tl),
                    this.nodes.forEach(Xo),
                    this.nodes.forEach(Go),
                    this.clearAllSnapshots();
                  var e = performance.now();
                  (Sn.delta = Ge(0, 1e3 / 60, e - Sn.timestamp)),
                    (Sn.timestamp = e),
                    (Sn.isProcessing = !0),
                    kn.update.process(Sn),
                    kn.preRender.process(Sn),
                    kn.render.process(Sn),
                    (Sn.isProcessing = !1);
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  var e = this;
                  this.updateScheduled ||
                    ((this.updateScheduled = !0),
                    queueMicrotask(function () {
                      return e.update();
                    }));
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(Zo), this.sharedNodes.forEach(ol);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  xn.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  xn.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var e = 0; e < this.path.length; e++) {
                        this.path[e].updateScroll();
                      }
                    var t = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = Ha()),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox);
                    var n = this.options.visualElement;
                    n &&
                      n.notify(
                        "LayoutMeasure",
                        this.layout.layoutBox,
                        t ? t.layoutBox : void 0
                      );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: i(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  if (a) {
                    var e = this.isLayoutDirty || this.shouldResetTransform,
                      t = this.projectionDelta && !Do(this.projectionDelta),
                      n = this.getTransformTemplate(),
                      r = n ? n(this.latestValues, "") : void 0,
                      i = r !== this.prevTransformTemplateValue;
                    e &&
                      (t || qa(this.latestValues) || i) &&
                      (a(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    n = this.measurePageBox(),
                    r = this.removeElementScroll(n);
                  return (
                    t && (r = this.removeTransform(r)),
                    pl((e = r).x),
                    pl(e.y),
                    {
                      animationId: this.root.animationId,
                      measuredBox: n,
                      layoutBox: r,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e) return Ha();
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (eo(t.x, n.offset.x), eo(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = Ha();
                  To(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      i = r.scroll,
                      a = r.options;
                    if (r !== this.root && i && a.layoutScroll) {
                      if (i.isRoot) {
                        To(t, e);
                        var o = this.root.scroll;
                        o && (eo(t.x, -o.offset.x), eo(t.y, -o.offset.y));
                      }
                      eo(t.x, i.offset.x), eo(t.y, i.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = Ha();
                  To(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var i = this.path[r];
                    !t &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      io(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                      qa(i.latestValues) && io(n, i.latestValues);
                  }
                  return qa(this.latestValues) && io(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t = Ha();
                  To(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n];
                    if (r.instance && qa(r.latestValues)) {
                      Qa(r.latestValues) && r.updateSnapshot();
                      var i = Ha();
                      To(i, r.measurePageBox()),
                        Io(
                          t,
                          r.latestValues,
                          r.snapshot ? r.snapshot.layoutBox : void 0,
                          i
                        );
                    }
                  }
                  return qa(this.latestValues) && Io(t, this.latestValues), t;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    this.root.scheduleUpdateProjection(),
                    (this.isProjectionDirty = !0);
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = ce(
                    ce(ce({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "forceRelativeParentToResolveTarget",
                value: function () {
                  this.relativeParent &&
                    this.relativeParent.resolvedRelativeTargetAt !==
                      Sn.timestamp &&
                    this.relativeParent.resolveTargetDelta(!0);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n = this.getLead();
                  this.isProjectionDirty ||
                    (this.isProjectionDirty = n.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = n.isTransformDirty),
                    this.isSharedProjectionDirty ||
                      (this.isSharedProjectionDirty =
                        n.isSharedProjectionDirty);
                  var r = Boolean(this.resumingFrom) || this !== n;
                  if (
                    !!(
                      t ||
                      (r && this.isSharedProjectionDirty) ||
                      this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty) ||
                      this.attemptToResolveRelativeTarget
                    )
                  ) {
                    var i = this.options,
                      a = i.layout,
                      o = i.layoutId;
                    if (this.layout && (a || o)) {
                      if (
                        ((this.resolvedRelativeTargetAt = Sn.timestamp),
                        !this.targetDelta && !this.relativeTarget)
                      ) {
                        var l = this.getClosestProjectingParent();
                        l && l.layout && 1 !== this.animationProgress
                          ? ((this.relativeParent = l),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = Ha()),
                            (this.relativeTargetOrigin = Ha()),
                            Ia(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              l.layout.layoutBox
                            ),
                            To(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      if (this.relativeTarget || this.targetDelta) {
                        var s, u, c;
                        if (
                          (this.target ||
                            ((this.target = Ha()),
                            (this.targetWithTransforms = Ha())),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.relativeParent &&
                          this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              (s = this.target),
                              (u = this.relativeTarget),
                              (c = this.relativeParent.target),
                              Ma(s.x, u.x, c.x),
                              Ma(s.y, u.y, c.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : To(this.target, this.layout.layoutBox),
                              Za(this.target, this.targetDelta))
                            : To(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var d = this.getClosestProjectingParent();
                          d &&
                          Boolean(d.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !d.options.layoutScroll &&
                          d.target &&
                          1 !== this.animationProgress
                            ? ((this.relativeParent = d),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = Ha()),
                              (this.relativeTargetOrigin = Ha()),
                              Ia(
                                this.relativeTargetOrigin,
                                this.target,
                                d.target
                              ),
                              To(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                        qo.resolvedTargetDeltas++;
                      }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !Qa(this.parent.latestValues) &&
                    !Ya(this.parent.latestValues)
                  )
                    return this.parent.isProjecting()
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "isProjecting",
                value: function () {
                  return Boolean(
                    (this.relativeTarget ||
                      this.targetDelta ||
                      this.options.layoutRoot) &&
                      this.layout
                  );
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t,
                    r = !0;
                  if (
                    ((this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty)) &&
                      (r = !1),
                    n &&
                      (this.isSharedProjectionDirty || this.isTransformDirty) &&
                      (r = !1),
                    this.resolvedRelativeTargetAt === Sn.timestamp && (r = !1),
                    !r)
                  ) {
                    var i = this.options,
                      a = i.layout,
                      o = i.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (this.parent && this.parent.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (a || o))
                    ) {
                      To(this.layoutCorrected, this.layout.layoutBox);
                      var l = this.treeScale.x,
                        s = this.treeScale.y;
                      !(function (e, t, n) {
                        var r =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          i = n.length;
                        if (i) {
                          var a, o;
                          t.x = t.y = 1;
                          for (var l = 0; l < i; l++) {
                            o = (a = n[l]).projectionDelta;
                            var s = a.instance;
                            (s && s.style && "contents" === s.style.display) ||
                              (r &&
                                a.options.layoutScroll &&
                                a.scroll &&
                                a !== a.root &&
                                io(e, {
                                  x: -a.scroll.offset.x,
                                  y: -a.scroll.offset.y,
                                }),
                              o &&
                                ((t.x *= o.x.scale),
                                (t.y *= o.y.scale),
                                Za(e, o)),
                              r && qa(a.latestValues) && io(e, a.latestValues));
                          }
                          (t.x = $a(t.x)), (t.y = $a(t.y));
                        }
                      })(this.layoutCorrected, this.treeScale, this.path, n),
                        !t.layout ||
                          t.target ||
                          (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                          (t.target = t.layout.layoutBox);
                      var u = t.target;
                      if (u) {
                        this.projectionDelta ||
                          ((this.projectionDelta = Fa()),
                          (this.projectionDeltaWithTransform = Fa()));
                        var c = this.projectionTransform;
                        Na(
                          this.projectionDelta,
                          this.layoutCorrected,
                          u,
                          this.latestValues
                        ),
                          (this.projectionTransform = Fo(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === c &&
                            this.treeScale.x === l &&
                            this.treeScale.y === s) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", u)),
                          qo.recalculatedProjection++;
                      } else
                        this.projectionTransform &&
                          ((this.projectionDelta = Fa()),
                          (this.projectionTransform = "none"),
                          this.scheduleRender());
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    (this.options.scheduleRender &&
                      this.options.scheduleRender(),
                    e)
                  ) {
                    var t = this.getStack();
                    t && t.scheduleRender();
                  }
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.snapshot,
                    i = r ? r.latestValues : {},
                    a = ce({}, this.latestValues),
                    o = Fa();
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !n);
                  var l,
                    s = Ha(),
                    u =
                      (r ? r.source : void 0) !==
                      (this.layout ? this.layout.source : void 0),
                    c = this.getStack(),
                    d = !c || c.members.length <= 1,
                    f = Boolean(
                      u &&
                        !d &&
                        !0 === this.options.crossfade &&
                        !this.path.some(ul)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (n) {
                      var r,
                        c,
                        p,
                        h,
                        v,
                        m,
                        g = n / 1e3;
                      ll(o.x, e.x, g),
                        ll(o.y, e.y, g),
                        t.setTargetDelta(o),
                        t.relativeTarget &&
                          t.relativeTargetOrigin &&
                          t.layout &&
                          t.relativeParent &&
                          t.relativeParent.layout &&
                          (Ia(
                            s,
                            t.layout.layoutBox,
                            t.relativeParent.layout.layoutBox
                          ),
                          (p = t.relativeTarget),
                          (h = t.relativeTargetOrigin),
                          (v = s),
                          (m = g),
                          sl(p.x, h.x, v.x, m),
                          sl(p.y, h.y, v.y, m),
                          l &&
                            ((r = t.relativeTarget),
                            (c = l),
                            r.x.min === c.x.min &&
                              r.x.max === c.x.max &&
                              r.y.min === c.y.min &&
                              r.y.max === c.y.max) &&
                            (t.isProjectionDirty = !1),
                          l || (l = Ha()),
                          To(l, t.relativeTarget)),
                        u &&
                          ((t.animationValues = a),
                          (function (e, t, n, r, i, a) {
                            i
                              ? ((e.opacity = Ar(
                                  0,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  Eo(r)
                                )),
                                (e.opacityExit = Ar(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  0,
                                  jo(r)
                                )))
                              : a &&
                                (e.opacity = Ar(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  r
                                ));
                            for (var o = 0; o < wo; o++) {
                              var l = "border".concat(xo[o], "Radius"),
                                s = Ao(t, l),
                                u = Ao(n, l);
                              (void 0 === s && void 0 === u) ||
                                (s || (s = 0),
                                u || (u = 0),
                                0 === s || 0 === u || ko(s) === ko(u)
                                  ? ((e[l] = Math.max(Ar(So(s), So(u), r), 0)),
                                    (ot.test(u) || ot.test(s)) && (e[l] += "%"))
                                  : (e[l] = u));
                            }
                            (t.rotate || n.rotate) &&
                              (e.rotate = Ar(t.rotate || 0, n.rotate || 0, r));
                          })(a, i, t.latestValues, g, f, d)),
                        t.root.scheduleUpdateProjection(),
                        t.scheduleRender(),
                        (t.animationProgress = g);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this;
                  this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom &&
                      this.resumingFrom.currentAnimation &&
                      this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation &&
                      (wn(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = xn.update(function () {
                      (po.hasAnimatedSinceResize = !0),
                        (t.currentAnimation = (function (e, t, n) {
                          var r = We(e) ? e : Ki(e);
                          return r.start(Ui("", r, t, n)), r.animation;
                        })(
                          0,
                          _o,
                          ce(
                            ce({}, e),
                            {},
                            {
                              onUpdate: function (n) {
                                t.mixTargetDelta(n),
                                  e.onUpdate && e.onUpdate(n);
                              },
                              onComplete: function () {
                                e.onComplete && e.onComplete(),
                                  t.completeAnimation();
                              },
                            }
                          )
                        )),
                        t.resumingFrom &&
                          (t.resumingFrom.currentAnimation =
                            t.currentAnimation),
                        (t.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
                  var e = this.getStack();
                  e && e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  this.currentAnimation &&
                    (this.mixTargetDelta && this.mixTargetDelta(_o),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    i = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      hl(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || Ha();
                      var a = Pa(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + a);
                      var o = Pa(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    To(t, n),
                      io(t, i),
                      Na(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        i
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new Vo()),
                    this.sharedNodes.get(e).add(t);
                  var n = t.options.initialPromotionConfig;
                  t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity:
                      n && n.shouldPreserveFollowOpacity
                        ? n.shouldPreserveFollowOpacity(t)
                        : void 0,
                  });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    i = this.getStack();
                  i && i.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, i = 0; i < Uo.length; i++) {
                        var a = "rotate" + Uo[i];
                        n[a] && ((r[a] = n[a]), e.setStaticValue(a, 0));
                      }
                      for (var o in (e.render(), r)) e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var i = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = Wt(n.pointerEvents) || ""),
                      (r.transform = i ? i(this.latestValues, "") : "none"),
                      r
                    );
                  var a = this.getLead();
                  if (!this.projectionDelta || !this.layout || !a.target) {
                    var o = {};
                    return (
                      this.options.layoutId &&
                        ((o.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (o.pointerEvents = Wt(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !qa(this.latestValues) &&
                        ((o.transform = i ? i({}, "") : "none"),
                        (this.hasProjected = !1)),
                      o
                    );
                  }
                  var l = a.animationValues || a.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = Fo(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      l
                    )),
                    i && (r.transform = i(l, r.transform));
                  var s = this.projectionDelta,
                    u = s.x,
                    c = s.y;
                  for (var d in ((r.transformOrigin = ""
                    .concat(100 * u.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  a.animationValues
                    ? (r.opacity =
                        a === this
                          ? null !==
                              (t =
                                null !== (e = l.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : l.opacityExit)
                    : (r.opacity =
                        a === this
                          ? void 0 !== l.opacity
                            ? l.opacity
                            : ""
                          : void 0 !== l.opacityExit
                          ? l.opacityExit
                          : 0),
                  Be))
                    if (void 0 !== l[d]) {
                      var f = Be[d],
                        p = f.correct,
                        h = f.applyTo,
                        v = "none" === r.transform ? l[d] : p(l[d], a);
                      if (h)
                        for (var m = h.length, g = 0; g < m; g++) r[h[g]] = v;
                      else r[d] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        a === this ? Wt(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach($o),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function Xo(e) {
        e.updateLayout();
      }
      function Go(e) {
        var t,
          n =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          var r = e.layout,
            i = r.layoutBox,
            a = r.measuredBox,
            o = e.options.animationType,
            l = n.source !== e.layout.source;
          "size" === o
            ? Wa(function (e) {
                var t = l ? n.measuredBox[e] : n.layoutBox[e],
                  r = Pa(t);
                (t.min = i[e].min), (t.max = t.min + r);
              })
            : hl(o, n.layoutBox, i) &&
              Wa(function (t) {
                var r = l ? n.measuredBox[t] : n.layoutBox[t],
                  a = Pa(i[t]);
                (r.max = r.min + a),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[t].max = e.relativeTarget[t].min + a));
              });
          var s = Fa();
          Na(s, i, n.layoutBox);
          var u = Fa();
          l
            ? Na(u, e.applyTransform(a, !0), n.measuredBox)
            : Na(u, i, n.layoutBox);
          var c = !Do(s),
            d = !1;
          if (!e.resumeFrom) {
            var f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
              var p = f.snapshot,
                h = f.layout;
              if (p && h) {
                var v = Ha();
                Ia(v, n.layoutBox, p.layoutBox);
                var m = Ha();
                Ia(m, i, h.layoutBox),
                  zo(v, m) || (d = !0),
                  f.options.layoutRoot &&
                    ((e.relativeTarget = m),
                    (e.relativeTargetOrigin = v),
                    (e.relativeParent = f));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: u,
            layoutDelta: s,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d,
          });
        } else if (e.isLead()) {
          var g = e.options.onExitComplete;
          g && g();
        }
        e.options.transition = void 0;
      }
      function Ko(e) {
        qo.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                  e.parent.isProjectionDirty ||
                  e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function Jo(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function Zo(e) {
        e.clearSnapshot();
      }
      function $o(e) {
        e.clearMeasurements();
      }
      function el(e) {
        e.isLayoutDirty = !1;
      }
      function tl(e) {
        var t = e.options.visualElement;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function nl(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function rl(e) {
        e.resolveTargetDelta();
      }
      function il(e) {
        e.calcProjection();
      }
      function al(e) {
        e.resetRotation();
      }
      function ol(e) {
        e.removeLeadSnapshot();
      }
      function ll(e, t, n) {
        (e.translate = Ar(t.translate, 0, n)),
          (e.scale = Ar(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function sl(e, t, n, r) {
        (e.min = Ar(t.min, n.min, r)), (e.max = Ar(t.max, n.max, r));
      }
      function ul(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var cl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        dl = function (e) {
          return (
            "undefined" !== typeof navigator &&
            navigator.userAgent.toLowerCase().includes(e)
          );
        },
        fl = dl("applewebkit/") && !dl("chrome/") ? Math.round : mn;
      function pl(e) {
        (e.min = fl(e.min)), (e.max = fl(e.max));
      }
      function hl(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !Ta(Bo(t), Bo(n), 0.2))
        );
      }
      var vl = Yo({
          attachResizeListener: function (e, t) {
            return nn(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        ml = { current: void 0 },
        gl = Yo({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!ml.current) {
              var e = new vl({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (ml.current = e);
            }
            return ml.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        yl = {
          pan: { Feature: fo },
          drag: { Feature: uo, ProjectionNode: gl, MeasureLayout: yo },
        };
      var bl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var xl = 4;
      function wl(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        _n(
          n <= xl,
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          )
        );
        var r = (function (e) {
            var t = bl.exec(e);
            if (!t) return [,];
            var n = a(t, 3);
            return [n[1], n[2]];
          })(e),
          i = a(r, 2),
          o = i[0],
          l = i[1];
        if (o) {
          var s = window.getComputedStyle(t).getPropertyValue(o);
          return s ? s.trim() : Ye(l) ? wl(l, t, n + 1) : l;
        }
      }
      function Sl(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          i = e.current;
        if (!(i instanceof Element)) return { target: r, transitionEnd: n };
        for (var a in (n && (n = ce({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (Ye(t)) {
            var n = wl(t, i);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[a];
          if (Ye(o)) {
            var l = wl(o, i);
            l && ((r[a] = l), n || (n = {}), void 0 === n[a] && (n[a] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var kl = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        Al = function (e) {
          return kl.has(e);
        },
        El = function (e) {
          return Object.keys(e).some(Al);
        },
        jl = function (e) {
          return e === Ke || e === lt;
        },
        Cl = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        Pl = function (e, t) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var a = i.match(/^matrix3d\((.+)\)$/);
            if (a) return Cl(a[1], t);
            var o = i.match(/^matrix\((.+)\)$/);
            return o ? Cl(o[1], e) : 0;
          };
        },
        Tl = new Set(["x", "y", "z"]),
        Ol = Ve.filter(function (e) {
          return !Tl.has(e);
        });
      var Nl = {
        width: function (e, t) {
          var n = e.x,
            r = t.paddingLeft,
            i = void 0 === r ? "0" : r,
            a = t.paddingRight,
            o = void 0 === a ? "0" : a;
          return n.max - n.min - parseFloat(i) - parseFloat(o);
        },
        height: function (e, t) {
          var n = e.y,
            r = t.paddingTop,
            i = void 0 === r ? "0" : r,
            a = t.paddingBottom,
            o = void 0 === a ? "0" : a;
          return n.max - n.min - parseFloat(i) - parseFloat(o);
        },
        top: function (e, t) {
          var n = t.top;
          return parseFloat(n);
        },
        left: function (e, t) {
          var n = t.left;
          return parseFloat(n);
        },
        bottom: function (e, t) {
          var n = e.y,
            r = t.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right: function (e, t) {
          var n = e.x,
            r = t.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: Pl(4, 13),
        y: Pl(5, 14),
      };
      (Nl.translateX = Nl.x), (Nl.translateY = Nl.y);
      var Ml = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (t = ce({}, t)), (r = ce({}, r));
        var i = Object.keys(t).filter(Al),
          o = [],
          l = !1,
          s = [];
        if (
          (i.forEach(function (i) {
            var a = e.getValue(i);
            if (e.hasValue(i)) {
              var u,
                c = n[i],
                d = $i(c),
                f = t[i];
              if (Vt(f)) {
                var p = f.length,
                  h = null === f[0] ? 1 : 0;
                (c = f[h]), (d = $i(c));
                for (var v = h; v < p && null !== f[v]; v++)
                  u
                    ? _n(
                        $i(f[v]) === u,
                        "All keyframes must be of the same type"
                      )
                    : ((u = $i(f[v])),
                      _n(
                        u === d || (jl(d) && jl(u)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else u = $i(f);
              if (d !== u)
                if (jl(d) && jl(u)) {
                  var m = a.get();
                  "string" === typeof m && a.set(parseFloat(m)),
                    "string" === typeof f
                      ? (t[i] = parseFloat(f))
                      : Array.isArray(f) &&
                        u === lt &&
                        (t[i] = f.map(parseFloat));
                } else
                  (null === d || void 0 === d ? void 0 : d.transform) &&
                  (null === u || void 0 === u ? void 0 : u.transform) &&
                  (0 === c || 0 === f)
                    ? 0 === c
                      ? a.set(u.transform(c))
                      : (t[i] = d.transform(f))
                    : (l ||
                        ((o = (function (e) {
                          var t = [];
                          return (
                            Ol.forEach(function (n) {
                              var r = e.getValue(n);
                              void 0 !== r &&
                                (t.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (l = !0)),
                      s.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                      a.jump(f));
            }
          }),
          s.length)
        ) {
          var u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
            c = (function (e, t, n) {
              var r = t.measureViewportBox(),
                i = t.current,
                a = getComputedStyle(i),
                o = a.display,
                l = {};
              "none" === o && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  l[e] = Nl[e](r, a);
                }),
                t.render();
              var s = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  r && r.jump(l[n]), (e[n] = Nl[n](s, a));
                }),
                e
              );
            })(t, e, s);
          return (
            o.length &&
              o.forEach(function (t) {
                var n = a(t, 2),
                  r = n[0],
                  i = n[1];
                e.getValue(r).set(i);
              }),
            e.render(),
            he && null !== u && window.scrollTo({ top: u }),
            { target: c, transitionEnd: r }
          );
        }
        return { target: t, transitionEnd: r };
      };
      var Ll = function (e, t, n, r) {
          var i = Sl(e, t, r);
          return (function (e, t, n, r) {
            return El(t) ? Ml(e, t, n, r) : { target: t, transitionEnd: r };
          })(e, (t = i.target), n, (r = i.transitionEnd));
        },
        Il = { current: null },
        Rl = { current: !1 };
      var Dl = new WeakMap(),
        zl = ["willChange"],
        Bl = ["children"],
        Vl = Object.keys(Ce),
        Fl = Vl.length,
        Hl = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        Wl = we.length,
        Ul = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              i = t.props,
              a = t.presenceContext,
              o = t.reducedMotionConfig,
              l = t.visualState,
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            Xt(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return xn.render(n.render, !1, !0);
              });
            var u = l.latestValues,
              c = l.renderState;
            (this.latestValues = u),
              (this.baseTarget = ce({}, u)),
              (this.initialValues = i.initial ? ce({}, u) : {}),
              (this.renderState = c),
              (this.parent = r),
              (this.props = i),
              (this.presenceContext = a),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = o),
              (this.options = s),
              (this.isControllingVariants = Se(i)),
              (this.isVariantNode = ke(i)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var d = this.scrapeMotionValuesFromProps(i, {}),
              f = d.willChange,
              p = St(d, zl);
            for (var h in p) {
              var v = p[h];
              void 0 !== u[h] && We(v) && (v.set(u[h], !1), _i(f) && f.add(h));
            }
          }
          return (
            Kt(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t = this;
                  (this.current = e),
                    Dl.set(e, this),
                    this.projection &&
                      !this.projection.instance &&
                      this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        this.parent.addVariantChild(this)),
                    this.values.forEach(function (e, n) {
                      return t.bindToMotionValue(n, e);
                    }),
                    Rl.current ||
                      (function () {
                        if (((Rl.current = !0), he))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (Il.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else Il.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || Il.current)),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext);
                },
              },
              {
                key: "unmount",
                value: function () {
                  for (var e in (Dl.delete(this.current),
                  this.projection && this.projection.unmount(),
                  wn(this.notifyUpdate),
                  wn(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  this.removeFromVariantTree && this.removeFromVariantTree(),
                  this.parent && this.parent.children.delete(this),
                  this.events))
                    this.events[e].clear();
                  for (var t in this.features) this.features[t].unmount();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = Fe.has(e),
                    i = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && xn.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    a = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    i(), a();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, t, n, r) {
                  for (
                    var i, a, o = this, l = (e.children, St(e, Bl)), s = 0;
                    s < Fl;
                    s++
                  ) {
                    var u = Vl[s],
                      c = Ce[u],
                      d = c.isEnabled,
                      f = c.Feature,
                      p = c.ProjectionNode,
                      h = c.MeasureLayout;
                    p && (i = p),
                      d(l) &&
                        (!this.features[u] &&
                          f &&
                          (this.features[u] = new f(this)),
                        h && (a = h));
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var v = l.layoutId,
                      m = l.layout,
                      g = l.drag,
                      y = l.dragConstraints,
                      b = l.layoutScroll,
                      x = l.layoutRoot;
                    this.projection.setOptions({
                      layoutId: v,
                      layout: m,
                      alwaysMeasureLayout: Boolean(g) || (y && ge(y)),
                      visualElement: this,
                      scheduleRender: function () {
                        return o.scheduleRender();
                      },
                      animationType: "string" === typeof m ? m : "both",
                      initialPromotionConfig: r,
                      layoutScroll: b,
                      layoutRoot: x,
                    });
                  }
                  return a;
                },
              },
              {
                key: "updateFeatures",
                value: function () {
                  for (var e in this.features) {
                    var t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                  }
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : Ha();
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.prevProps = this.props),
                    (this.props = e),
                    (this.prevPresenceContext = this.presenceContext),
                    (this.presenceContext = t);
                  for (var n = 0; n < Hl.length; n++) {
                    var r = Hl[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var i = e["on" + r];
                    i && (this.propEventSubscriptions[r] = this.on(r, i));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var i in t) {
                      var a = t[i],
                        o = n[i];
                      if (We(a)) e.addValue(i, a), _i(r) && r.add(i);
                      else if (We(o))
                        e.addValue(i, Ki(a, { owner: e })),
                          _i(r) && r.remove(i);
                      else if (o !== a)
                        if (e.hasValue(i)) {
                          var l = e.getValue(i);
                          !l.hasAnimated && l.set(a);
                        } else {
                          var s = e.getStaticValue(i);
                          e.addValue(i, Ki(void 0 !== s ? s : a, { owner: e }));
                        }
                    }
                    for (var u in n) void 0 === t[u] && e.removeValue(u);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, this.prevProps),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  return this.props.variants ? this.props.variants[e] : void 0;
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  return this.isVariantNode
                    ? this
                    : this.parent
                    ? this.parent.getClosestVariantNode()
                    : void 0;
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                    return this.parent
                      ? this.parent.getVariantContext()
                      : void 0;
                  if (!this.isControllingVariants) {
                    var e =
                      (this.parent && this.parent.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (e.initial = this.props.initial),
                      e
                    );
                  }
                  for (var t = {}, n = 0; n < Wl; n++) {
                    var r = we[n],
                      i = this.props[r];
                    (ye(i) || !1 === i) && (t[r] = i);
                  }
                  return t;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t = this.getClosestVariantNode();
                  if (t)
                    return (
                      t.variantChildren && t.variantChildren.add(e),
                      function () {
                        return t.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  this.values.delete(e);
                  var t = this.valueSubscriptions.get(e);
                  t && (t(), this.valueSubscriptions.delete(e)),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = Ki(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  var t;
                  return void 0 === this.latestValues[e] && this.current
                    ? null !==
                        (t = this.getBaseTargetFromProps(this.props, e)) &&
                      void 0 !== t
                      ? t
                      : this.readValueFromInstance(
                          this.current,
                          e,
                          this.options
                        )
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = Bt(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var i = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === i || We(i)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : i;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new Xi()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  if (this.events[e]) {
                    for (
                      var t,
                        n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        i = 1;
                      i < n;
                      i++
                    )
                      r[i - 1] = arguments[i];
                    (t = this.events[e]).notify.apply(t, r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        _l = ["transition", "transitionEnd"],
        Ql = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            return Xt(this, n), t.apply(this, arguments);
          }
          return (
            Kt(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e.style ? e.style[t] : void 0;
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    i = e.transitionEnd,
                    a = St(e, _l),
                    o = t.transformValues,
                    l = (function (e, t, n) {
                      var r = {};
                      for (var i in e) {
                        var a = aa(i, t);
                        if (void 0 !== a) r[i] = a;
                        else {
                          var o = n.getValue(i);
                          o && (r[i] = o.get());
                        }
                      }
                      return r;
                    })(a, r || {}, this);
                  if (
                    (o && (i && (i = o(i)), a && (a = o(a)), l && (l = o(l))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        i,
                        a = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = a.length;
                      if (o)
                        for (var l = 0; l < o; l++) {
                          var s = a[l],
                            u = t[s],
                            c = null;
                          Array.isArray(u) && (c = u[0]),
                            null === c &&
                              (c =
                                null !==
                                  (i =
                                    null !== (r = n[s]) && void 0 !== r
                                      ? r
                                      : e.readValue(s)) && void 0 !== i
                                  ? i
                                  : t[s]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c && (Qi(c) || Vi(c))
                                ? (c = parseFloat(c))
                                : !ta(c) && Vr.test(u) && (c = Bi(s, u)),
                              e.addValue(s, Ki(c, { owner: e })),
                              void 0 === n[s] && (n[s] = c),
                              null !== c && e.setBaseTarget(s, c));
                        }
                    })(this, a, l);
                    var s = Ll(this, a, l, i);
                    (i = s.transitionEnd), (a = s.target);
                  }
                  return ce({ transition: r, transitionEnd: i }, a);
                },
              },
            ]),
            n
          );
        })(Ul);
      var ql = (function (e) {
        Zt(n, e);
        var t = tn(n);
        function n() {
          return Xt(this, n), t.apply(this, arguments);
        }
        return (
          Kt(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (Fe.has(t)) {
                  var n = zi(t);
                  return (n && n.default) || 0;
                }
                var r,
                  i = ((r = e), window.getComputedStyle(r)),
                  a = (qe(t) ? i.getPropertyValue(t) : i[t]) || 0;
                return "string" === typeof a ? a.trim() : a;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return ao(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                pt(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return Dt(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                We(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                Lt(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(Ql);
      function Yl() {
        return (
          (Yl =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = $t(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? e : n)
                      : i.value;
                  }
                }),
          Yl.apply(this, arguments)
        );
      }
      var Xl = (function (e) {
          Zt(n, e);
          var t = tn(n);
          function n() {
            var e;
            return (
              Xt(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            Kt(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  if (Fe.has(t)) {
                    var n = zi(t);
                    return (n && n.default) || 0;
                  }
                  return (t = It.has(t) ? t : Mt(t)), e.getAttribute(t);
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return Ha();
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return zt(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  Ct(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  Rt(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = Tt(e.tagName)),
                    Yl($t(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(Ql),
        Gl = function (e, t) {
          return ze(e)
            ? new Xl(t, { enableHardwareAcceleration: !1 })
            : new ql(t, { enableHardwareAcceleration: !0 });
        },
        Kl = { layout: { ProjectionNode: gl, MeasureLayout: yo } },
        Jl = ce(ce(ce(ce({}, ba), Bn), yl), Kl),
        Zl = Re(function (e, t) {
          return (function (e, t, n, r) {
            var i = t.forwardMotionProps,
              a = void 0 !== i && i;
            return ce(
              ce({}, ze(e) ? qt : Yt),
              {},
              {
                preloadedFeatures: n,
                useRender: Nt(a),
                createVisualElement: r,
                Component: e,
              }
            );
          })(e, t, Jl, Gl);
        });
      var $l = function (e) {
          var t = e.title,
            n = e.subTitle,
            r = e.result,
            i = e.des;
          return (0, A.jsxs)("div", {
            className: "w-full h-1/3 group flex",
            children: [
              (0, A.jsx)("div", {
                className: "w-10 h-[6px] bgOpacity mt-16 relative",
                children: (0, A.jsx)("span", {
                  className:
                    "absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60",
                  children: (0, A.jsx)("span", {
                    className:
                      "w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300",
                  }),
                }),
              }),
              (0, A.jsxs)("div", {
                className:
                  "w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne",
                children: [
                  (0, A.jsxs)("div", {
                    className:
                      "flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center",
                    children: [
                      (0, A.jsxs)("div", {
                        children: [
                          (0, A.jsx)("h3", {
                            className:
                              "text-xl md:text-2xl font-semibold group-hover:text-white duration-300",
                            children: t,
                          }),
                          (0, A.jsx)("p", {
                            className:
                              "text-sm mt-2 text-gray-400 group-hover:text-white duration-300",
                            children: n,
                          }),
                        ],
                      }),
                      (0, A.jsx)("div", {
                        children: (0, A.jsx)("p", {
                          className:
                            "px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium",
                          children: r,
                        }),
                      }),
                    ],
                  }),
                  (0, A.jsx)("p", {
                    className:
                      "text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        },
        es = function () {
          return (0, A.jsx)(Zl.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } },
            className: "w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20",
            children: (0, A.jsxs)("div", {
              children: [
                (0, A.jsxs)("div", {
                  className:
                    "py-6 lgl:py-12 font-titleFont flex flex-col gap-4",
                  children: [
                    (0, A.jsx)("p", {
                      className: "text-sm text-designColor tracking-[4px]",
                      children: "2022 - present",
                    }),
                    (0, A.jsx)("h2", {
                      className: "text-3xl md:text-4xl font-bold",
                      children: "Educational Qualification",
                    }),
                  ],
                }),
                (0, A.jsxs)("div", {
                  className:
                    "mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10",
                  children: [
                    (0, A.jsx)($l, {
                      title: "BTech in Information systems and Technology",
                      subTitle: "Makerere university (2022 - present)",
                      result: "5.5 CPI",
                      des: "Studing IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc.",
                    }),
                    (0, A.jsx)($l, {
                      title: "Higher Secondary Education",
                      subTitle: "kakungulu memorial school (2018 - 2022)",
                      result: "88.15%",
                      des: "Studied in this school for my S6 . HSC Subjects: GEA, English,Mathematics. ",
                    }),
                    (0, A.jsx)($l, {
                      title: "Primary & Secondary School Education",
                      subTitle:
                        "Ggaba Model Nursery and Primary school (2008 - 2014)",
                      result: "80.20% ",
                      des: "Studied in this school from Nursery to primary. SSC Subjects: English, Maths, Science, Social Sciences.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ts = function () {
          return (0, A.jsxs)(Zl.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } },
            className: "w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20",
            children: [
              (0, A.jsxs)("div", {
                className: "w-full lgl:w-1/2",
                children: [
                  (0, A.jsxs)("div", {
                    className: "py-12 font-titleFont flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className:
                          "text-sm text-designColor tracking-[4px] uppercase",
                        children: "Tech Stack",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold",
                        children: "Development Skill",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className: 'className="mt-14 w-full flex flex-col gap-6',
                    children: [
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "C++",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "85%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Python",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "85%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Html,Css,Js,Bootstrap",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "90%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Mongodb & (SQL | NOSQL)",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "80%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Express",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "80%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "w-full lgl:w-1/2",
                children: [
                  (0, A.jsxs)("div", {
                    className: "py-12 font-titleFont flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className:
                          "text-sm text-designColor tracking-[4px] uppercase",
                        children: "Tech Stack",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold",
                        children: "Development Skill",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    children: [
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "React",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "80%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Node",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "80%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children: "Git & Github",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "90%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children:
                              "Google OAuth, Cookies, Passport,Postman API,OpenCV)",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "80%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)("div", {
                        className: "overflow-x-hidden",
                        children: [
                          (0, A.jsx)("p", {
                            className: "text-sm uppercase font-medium",
                            children:
                              "Web Scrapping using (Selenium|Beautifulsoup)",
                          }),
                          (0, A.jsx)("span", {
                            className:
                              "w-full h-2 bgOpacity rounded-md inline-flex mt-2",
                            children: (0, A.jsx)(Zl.span, {
                              initial: { x: "-100%", opacity: 0 },
                              animate: { x: 0, opacity: 1 },
                              transition: { duration: 0.5, delay: 0.5 },
                              className:
                                "w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative",
                              children: (0, A.jsx)("span", {
                                className: "absolute -top-7 right-0",
                                children: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ns = function () {
          return (0, A.jsxs)(Zl.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } },
            className: "py-6 font-titleFont flex flex-col gap-20 md:flex-row",
            children: [
              (0, A.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, A.jsxs)("div", {
                    className: "py-6 font-titleFont flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className: "text-sm text-designColor tracking-[4px]",
                        children: "2005 - Present",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-4xl font-bold",
                        children: "Accomplishments",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className:
                      "mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10",
                    children: [
                      (0, A.jsx)($l, {
                        title: "MHT-CET Merit Ranker",
                        subTitle:
                          "Entrance Exam for Engineering colleges in Maharashtra (2020)",
                        result: "153rd",
                        des: "Bagged a whooping 153rd Rank out of 1.74 Lakh students that registered for the exam. Got a 99.89 percentile in PCM! Got admission in VJTI, Mumbai - top BTechcollege in Maharashtra.",
                      }),
                      (0, A.jsx)($l, {
                        title: "SSC Merit Holder",
                        subTitle:
                          "10th Std Exam conducted by Government of Maharashtra (2018)",
                        result: "94.20%",
                        des: "Bagged a whooping 94.20% in SSC exam. Awarded with a trophy by Mahesh Tutorials Coaching Institute!",
                      }),
                      (0, A.jsx)($l, {
                        title: "Scholarship Holder",
                        subTitle:
                          "7th Std Scholarship Exam conducted by Government of Maharashtra (2015)",
                        result: "206/300",
                        des: "Passed with good marks in the exam and also received scholarship money till the completion of 10th std. Rank:- 33/1617 who got the scholarship (all passed students are not given scholarship).",
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, A.jsxs)("div", {
                    className: "py-6 font-titleFont flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className: "text-sm text-designColor tracking-[4px]",
                        children: "2005 - Present",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-4xl font-bold",
                        children: "Accomplishments",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className:
                      "mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10",
                    children: [
                      (0, A.jsx)($l, {
                        title: "English Competency Analytical Test (ECAT)",
                        subTitle: "5th NELTAS ECAT GRAND FINALE (2015 - 2016)",
                        result: "80.5%",
                        des: "Certificate awarded for meritorious performance in the exam.",
                      }),
                      (0, A.jsx)($l, {
                        title: "The Bharat Scouts And Guides",
                        subTitle:
                          " Course during 9th and 10th Std (2016 - 2018)",
                        result: "A",
                        des: "Awarded 'A' grade certificate for successfully completing the course exams.",
                      }),
                      (0, A.jsx)($l, {
                        title: "Scholarship Exam",
                        subTitle:
                          "4th Std Scholarship Exam conducted by Government of Maharashtra (2012)",
                        result: "230/300",
                        des: "Passed with good marks in the exam but not received scholarship. (all passed students are not given scholarship).",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        rs = function () {
          return (0, A.jsxs)(Zl.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } },
            className: "py-12 font-titleFont flex flex-col gap-20 md:flex-row",
            children: [
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className: "text-sm text-designColor tracking-[4px]",
                        children: "2023 - 20XX",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-4xl font-bold",
                        children: "Job Experience",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className:
                      "mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10",
                    children: [
                      (0, A.jsx)($l, {
                        title: "Sr. Software Engineer",
                        subTitle:
                          "Google - (20XX - Present) [Goal in my bucketlist]",
                        result: "USA",
                        des: "Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
                      }),
                      (0, A.jsx)($l, {
                        title: "Web Developer & Trainer",
                        subTitle:
                          "Apple Developer Team - (20XX - 20XX) [Goal in my bucketlist]",
                        result: "USA",
                        des: "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in USA isn't easy.",
                      }),
                      (0, A.jsx)($l, {
                        title: "Data Analyst Intern",
                        subTitle: "Xemi - (5/6/2023 - 5/9/2023)  [3 months]",
                        result: "Mumbai, Maharashtra",
                        des: "Writing Web Scrapping codes to extract required data for website\u2019s database and training ML models. Mode of work: Hybrid.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, A.jsx)("p", {
                        className: "text-sm text-designColor tracking-[4px]",
                        children: "20XX - 20XX",
                      }),
                      (0, A.jsx)("h2", {
                        className: "text-4xl font-bold",
                        children: "Trainer Experience",
                      }),
                    ],
                  }),
                  (0, A.jsxs)("div", {
                    className:
                      "mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10",
                    children: [
                      (0, A.jsx)($l, {
                        title: "ML Instructor",
                        subTitle: "ABC Platform (20XX - 20XX)",
                        result: "UK",
                        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
                      }),
                      (0, A.jsx)($l, {
                        title: "Web Developer and Instructor",
                        subTitle: "ABC King's College (20XX - 20XX)",
                        result: "CANADA",
                        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
                      }),
                      (0, A.jsx)($l, {
                        title: "App Developer",
                        subTitle: "ABC Company (20XX - 20XX)",
                        result: "India",
                        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        is = function () {
          var t = a((0, e.useState)(!0), 2),
            n = t[0],
            r = t[1],
            i = a((0, e.useState)(!1), 2),
            o = i[0],
            l = i[1],
            s = a((0, e.useState)(!1), 2),
            u = s[0],
            c = s[1],
            d = a((0, e.useState)(!1), 2),
            f = d[0],
            p = d[1];
          return (0, A.jsxs)("section", {
            id: "resume",
            className: "w-full py-20 border-b-[1px] border-b-black",
            children: [
              (0, A.jsx)("div", {
                className: "flex justify-center items-center text-center",
                children: (0, A.jsx)(V, {
                  title: "18+ YEARS OF ACADEMIC AND WORK EXPERIENCE",
                  des: "My Resume",
                }),
              }),
              (0, A.jsx)("div", {
                children: (0, A.jsxs)("ul", {
                  className:
                    "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
                  children: [
                    (0, A.jsx)("li", {
                      onClick: function () {
                        return r(!0) & l(!1) & c(!1) & p(!1);
                      },
                      className: "".concat(
                        n
                          ? "border-designColor rounded-lg"
                          : "border-transparent",
                        " resumeLi"
                      ),
                      children: "Education",
                    }),
                    (0, A.jsx)("li", {
                      onClick: function () {
                        return r(!1) & l(!0) & c(!1) & p(!1);
                      },
                      className: "".concat(
                        o
                          ? "border-designColor rounded-lg"
                          : "border-transparent",
                        " resumeLi"
                      ),
                      children: "Professional Skills",
                    }),
                    (0, A.jsx)("li", {
                      onClick: function () {
                        return r(!1) & l(!1) & c(!0) & p(!1);
                      },
                      className: "".concat(
                        u
                          ? "border-designColor rounded-lg"
                          : "border-transparent",
                        " resumeLi"
                      ),
                      children: "Experience",
                    }),
                    (0, A.jsx)("li", {
                      onClick: function () {
                        return r(!1) & l(!1) & c(!1) & p(!0);
                      },
                      className: "".concat(
                        f
                          ? "border-designColor rounded-lg"
                          : "border-transparent",
                        " resumeLi"
                      ),
                      children: "Achievements",
                    }),
                  ],
                }),
              }),
              n && (0, A.jsx)(es, {}),
              o && (0, A.jsx)(ts, {}),
              f && (0, A.jsx)(ns, {}),
              u && (0, A.jsx)(rs, {}),
            ],
          });
        },
        as = n(5717);
      function os(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z",
              },
            },
          ],
        })(e);
      }
      function ls(e) {
        var t = e.onClick;
        return (0, A.jsx)("div", {
          className:
            "w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10",
          onClick: t,
          children: (0, A.jsx)(U, {}),
        });
      }
      function ss(e) {
        var t = e.onClick;
        return (0, A.jsx)("div", {
          className:
            "w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10",
          onClick: t,
          children: (0, A.jsx)(W, {}),
        });
      }
      var us = function () {
        var t = a((0, e.useState)(0), 2),
          n = t[0],
          r = t[1],
          i = {
            dots: !0,
            infinite: !0,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: (0, A.jsx)(ls, {}),
            prevArrow: (0, A.jsx)(ss, {}),
            beforeChange: function (e, t) {
              r(t);
            },
            appendDots: function (e) {
              return (0, A.jsx)("div", {
                style: { borderRadius: "10px", padding: "10px" },
                children: (0, A.jsxs)("ul", {
                  style: {
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "20px",
                  },
                  children: [" ", e, " "],
                }),
              });
            },
            customPaging: function (e) {
              return (0, A.jsx)("div", {
                style:
                  e === n
                    ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }
                    : {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                      },
              });
            },
          };
        return (0, A.jsxs)("section", {
          id: "testimonial",
          className: "w-full py-20 border-b-[1px] border-b-black",
          children: [
            (0, A.jsx)("div", {
              className: "flex justify-center items-center text-center",
              children: (0, A.jsx)(V, {
                title: "WHAT CLIENTS SAY",
                des: "Testimonial",
              }),
            }),
            (0, A.jsx)("div", {
              className: "max-w-6xl mx-auto",
              children: (0, A.jsxs)(
                as.Z,
                ce(
                  ce({}, i),
                  {},
                  {
                    children: [
                      (0, A.jsx)("div", {
                        className: "w-full",
                        children: (0, A.jsxs)("div", {
                          className:
                            "w-full h-auto flex flex-col lgl:flex-row justify-between",
                          children: [
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center",
                              children: [
                                (0, A.jsx)("img", {
                                  className:
                                    "h-72 md:h-32 lgl:h-72 rounded-lg object-cover",
                                  src: I,
                                  alt: "testimonialOne",
                                }),
                                (0, A.jsxs)("div", {
                                  className: "w-full flex flex-col justify-end",
                                  children: [
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-xs uppercase text-designColor tracking-wide mb-2",
                                      children: "Spider Man",
                                    }),
                                    (0, A.jsx)("h3", {
                                      className: "text-2xl font-bold",
                                      children: "Peter Parker",
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base tracking-wide text-gray-500",
                                      children: "Sr. Web Developer",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[60%] h-full flex flex-col justify-between",
                              children: [
                                (0, A.jsx)("img", {
                                  className: "w-20 lgl:w-32",
                                  src: R,
                                  alt: "quote",
                                }),
                                (0, A.jsxs)("div", {
                                  className:
                                    "w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8",
                                  children: [
                                    (0, A.jsxs)("div", {
                                      className:
                                        "flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900",
                                      children: [
                                        (0, A.jsxs)("div", {
                                          children: [
                                            (0, A.jsx)("h3", {
                                              className:
                                                "text-xl lgl:text-2xl font-medium tracking-wide",
                                              children: "After School Diaries",
                                            }),
                                            (0, A.jsx)("p", {
                                              className:
                                                "text-base text-gray-400 mt-3",
                                              style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                              },
                                              children:
                                                "via Upwork - March 2023",
                                            }),
                                          ],
                                        }),
                                        (0, A.jsxs)("div", {
                                          className:
                                            "text-yellow-500 flex gap-1",
                                          children: [
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6",
                                      children:
                                        "Very good concept of bundling all the old cartoons and shows' songs together on one page. It is quite nostalgic for the Gen Z. The slide effect is amazing and UI is smooth. Very good project !",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("div", {
                        className: "w-full",
                        children: (0, A.jsxs)("div", {
                          className:
                            "w-full h-auto flex flex-col lgl:flex-row justify-between",
                          children: [
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center",
                              children: [
                                (0, A.jsx)("img", {
                                  className:
                                    "h-72 md:h-32 lgl:h-72 rounded-lg object-cover",
                                  src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIVFhUWFRcXFhgYFRYVFRUVFhUXGBgWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHSUrLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLSstLTc3K//AABEIAL4BCgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEAwUECAMHBQAAAAABAAIRAyEEBRIxBkFRImFxgZETMqHBBxQjQlKx0fAVcuEzU2KCkrLxFiRDY6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAoEQACAgICAgIBAwUAAAAAAAAAAQIRAyESMRNBBFFhFDKBInGRocH/2gAMAwEAAhEDEQA/APJ8qy91eqKbbTuTsANytvDcMseXEVxoB0h1u0/oFj5TjzQqawJtBHULdy/iF5eQyi3q0cmnrsrxr2TJBwjXeBNQaQSL8mgch12TWcJiW/awIJcegHRRtzfEnRtcuEA7kyJVludVx2vZt0s7JE7k98WWqiIo5bkJqve6jUOhn3+pPh+7rQpcHS4a6nvbdbbqPC5xiAHhjWNbcujvUNTPMRTdTqvg2MDxi/wR/SBlZ3gmUaxpsJIHMqiFZzLGmtUNRwAJ6KsFh9mgQhKkAiVCWEAJC6fA1WHAuBPanbme4Lm2sWpQw+mk4u3jbxt6yoZkmimO0yGvmrmMDKZjqRufDos+pjKr51Pc60mSTAV6ngRDnP2a0H4frKqDMGC2nfc9wEkev5Kail0ijb9sjcw6ZElwvckzsnYTFgQXOqb3AjT5Cd1s1KTWviYDmO7407GOaoswTS4nlvpFuXu+MrXYuujWp5zh/Yy91RxcYFPSTAG0kwN52PTdWstz6iygWtpua4ugtMWkSD4FYNKm6S7Yzp7hNmtAVes15l7uQAE9OSk8UWqNcn2ekVMSw0KcOadUbEc+q1jgKb2htjAC8nyqrqdDydMSLzEcvit7KseRqNOoZ5zdQl8ZJaY/I2dTimsGIYwkCBKmzVtA0yXFp6Lz3MMy1VJPa75WhSoMc0OHMdU/06hTbYc3LR0GLq0mYYNa5t4+KbjsTRbSYzW3cSuXaGuqQAIG/io4itpIBaeafgj+fsfOR3n13CgAF7LDuXH8Y5lTqPDKZBaOmypZmA0dmN/3zWSVbB8eKfJE8k5dMRCELsIghCEABSQlQgRXhS0armmWmDsowlCAJWYhwIIOyccU+CNRuZPioUJ2wJm4l4BGrfdI+q50Amw2UaVAAhCVACJUJUACcxs7JriQCQNvmYCtYGlyMA+pU5So3GNjXnRBI25H5hSsxexcZjtv8dmMb6yf6KDGGDHM9d48OVuZWlkmROrujYWJUZS9srGL9Gfja9So3S0bkEgd2w8lVp4BwcNQjx5novUct4TYxt9/3MLYoZDTaZIB8RJUvLRZYfs8ifTeSCQbNjY8zJThVLLGeW4N4uB6hvovYnZRSPIbz5rIzbhhj/dsUvKN4TzCnrnnEz3bz/VWsQ8GiWzeZtz3sPD5rZzHhmswdl0+QHlsuNxZqNfDpaZjnYeKrFqRGcXEgbWIduYnkVuYTFNaLA3WVWpAkls+IbYePTxUtG1j4+KqknpkraL/ALWn+E/vzTxjGgQAYVNIt8EZ5MtfWxcRunDHbdnZU4QjhEOTLFbFahEKslQmkl0JuxEQlQmAiEsIQAiEqIQBAhCECBCISpgKhCVAAhCVAAEqEIAtFzWUxNyZdHfs2fgfVMwgmSfdFyYMeblVdSJPj32ha+AwwdZ06WkEyDH7/Vc0mXiNw7TUJJbAmB1PjbwXofCuCDGgnmNlzdLFUyCAI0PgdeW/fa66nIK4LgPhzUZOy8EdIynZWGYclPw9OFbapUX5FQ4WFBWorWc8Ruq1UCD4IcUCkYOLw0jZcHxZkgeJAgr0mtsudzeiHNhEXTCa5KjyJ+ENIyYcD6jv8U2i8RN5HIjx2K087ZDi0xYyDz8+5ZuGoggkOvI7IBk98mwC7Is8+SolQlQugkIhKiEAIhKhACISpEgBCEIGCEIQBXTqdMuIA3Jgeaap8HUDajHHZrgfQoBLZus4MxRA7Iv3puI4QxLG6nAQuxZx/h4AgyB0Kq5lxpQq0y28nuPf+qNfZ0cI/X+zlm8L1TFxdGI4ZqsaXEiAt3D8RURz5JMy4jovpuAJkjZVqJybOHSoCFM0CUCUiewpMZaota9oggOaeYMObeQCJg3PdZaX1hlOmA3tRcGxE3g2sqmAhxFOLT5zE7hXs3y0so/2xEH+zIEmQCNBG+/OSO7Zcje6Z0xTooZQ1z5I5ut4nmfivVOGcp9mwEmbT09V5vw1Wphwa4wC8RqsCQNieV/VevYN4De6Pgp5NMti6NJm0KSnVZsXAea5TMc2e4up0eRh7ztPRsCZsb9/mudr0AyXurUmnvLxfuOoXRGF7NN0equpS2VUcyJ6LzbLc5q0+2Kmtou6Kj3W6gONx4L0A1T9Xc8mTpHxSkkmCsWvQt5LnMxAAN/6qrxDj31Oy1zgXQWsaYJZeXOds0fnPhPH18G+bkyOXtSbnwMA9yccfJWDkyjxbSAc1w5g/BY9A9izQO+Lx49FfzHE6w1jg5pBcGk3k85PPl6Kkz3QIMix8l0QVaOTJ9jUQhC6CAQiEIQAQiEIQAkIhKhACQiEqAJ2SAaha+CybUJe6B0Vr+C0+pWHkijahL6KFbDMMQ2L38FKMNTN9Oy1H4AgSeSbl2FL7gWK4f1Dq7O/9PCyg7Bsj3I9Ew4WmXAhtlqtoRUNyY5dFbODboJhE/kOLqxRwRatowvqtOfdmU12EputphadfCaA3q42UtahcAC/NaWZ1di8MLqjMp4Sn+DzSHDUxbRK1cRgSGgzpk7dUx+DjdHn62CwRbaS6Mr6pTdfTEJ1TCsIsw+MK25jQ/TKlrV/ZNJ06h5WWllk3QpYoJWYNKm5lRrgYOoEdD0+K6RtdlaRUkuD9REEwADA6Acz4hcpiKrnAkWIOod0n8pv5r1DBUqlam2NIw7mCo1zR2iHuLwHc5AdHkEZU0LC07OV4cwLH1SwsES7UDyl57Pouw/h1Wg0/V6kNgwx/aayL25gcomO5VsLw+ylinNaSNPMGJ5iesyukpga73+fIBSlIrFaOaweHD6YBJAcSSZ3uRuBbzUWJ4Twz29Y2dqJcOoLpMiIstfATQDmPa6ATDg0uBHI2ukfiaOqSRP8rreoRhyxjFJsvLE5vooUcqYyi7s2DIBG1hA3uTJ3WycvecJ/b1W22ApQIEQJYTHiUrftw0N1aAZfIIBI91om5HPyWvWaCzTFiIWXPlJtdGZRpJHB5cxtRzi94cbU9UAgtaIB0xE2HIbLJxXCrGOcWOIJ+8SJaBygC4stiiz6vVc10BjpBkEt1A7HpIMq3UqUNNnU/h8FXFkSjTf2EsXKmcDxAztUB1d6mQZ9Fn4qo32j2tB7Jg33dz8L28l1mKwRr1mljdRYSQBMOJEeQvv3ytejwZQY3XUJfAJJjdxMl0DqujCucrXSOL5C4Kn3Z5uherf9EYX2YeG+V+aSvwhg2OpsLLv/AJl18Tjs8qSLo+NcFh6Nf2dERHvdO5c6svQxEJUiQAhCEAC1ctwwaNbvJZ+Hp6ngdStvOWaGADpdQyz2or2Xwx05P0Q/xAucGM9f0V/2g6qlkWCJBeeeytugGJC5MrXLivR2YIXHlL2XuIZYwMHvPIA81bq4KpToAU/ej0suezPH1KtdlTTAabBbD+JnFjgKZ2jkpLDJKNfyReW7DLMMW0C+pdznLRxOFsxg+8QsLEZu5zGMDPdIcfIq07Pnmq2p7PstEeaUsMnLkCy0qL+Kyt7qzfwtCdgsGXOc6JgwFNS4jpmkS4Q4g2WVlnEugFugkySs+KbX9h+YGYau/EhtSNIuAPmrLaJdUePutUP/AFERUc80ztayrUc+0sf2LvJ5Kksc5f4FHKogMnLgagB1TZV86pOp0O0LlamE4mFOmAaZ9FzvFGe/WSA0Q0KmOGSUlfSFLKknXsxKFXST3gg+H7C7P6O+KqdIHDYippZP2TyY0aiS6m48mzcE2me5cOVEXlrvG23VdmSFkMc6Z7e/FUn4lxp1W1G6R2gQbjcEi0gQtOiN/Xz2H5rzHgjFt0dnZtQiDYw4A/nK9LwVWfMj5rilGmdsXasssr+zBJiB8lFScKjvaVW/ytIAjvPU9yizRjvZuLPea4u/Mj8wufw9DEkh1Qgh3aBNVzOriD2DBmNynFaG5P0dFjaxYdVN1Ns8nXB5ciOXjsqlfiT2LSKrd4ALRrZe4IeB8vVQHJXe8aT40n3XtcGgOuAAN5PQ2VPFZIdLmFlYj3z2HSCTa+0biI5KiijDcvwVMPmratdzzpDCTDTu7lJHLzv4QtinTon/AMTL7HQD4iYXFZjlhp1QwMqtc6SJLYbyJdFx7q6TI6GIYCaztTGNMG8F7rMAkCfe+CxKC7NRnJDcKxoxL3gBsUy2wj7zP6rbw7ASYM2kj+iwMTgDUe7TV0BsNnqf2B6pcLlz2PJFcmRzII7vDZel8dVjRw5nc2zpcLQeWul0dB08lM7CanM1btG/7K5vDZXXN/rJEk2kdVd/hte3/dbfy/oqkTgePAwYtwaDP3j16Lm1rcTNcMS8OdqI5rKUn2MRCEJDBCEiALeWD7Zn8wXR8TYJ/tGMGzguUpPLSCORBXoGX4g4nRUcIDWwPFcXybhJTOjBtOI/L8thobyAVs5FTPIfBYXFOaua4U6RIIF4WD/F8V+N658WCcly5VZbJmS1RWq1SagdNgn4esW6rg6isdKCu/xao5fIa2s63EHcQErXP9lp1XlZE96dqPUo8QuZsGq72WmRq6qDANex8zbms8PPU+qXWep9Sjx6aDl7NvF4nVYWndMxDg9oaLQsfWep9Uus9T6pLDRp5LNrFVZZA3hYhTtZ6n1TCqQhxRmUuTEKQiUqFoydDwQ2alRnVrXf6XRP/wBL0LL8QYg2O3mJ/QrzzgY/94B1Y4fFp+S77N8CQRUbYkQ6Oa48ySkdmK3E2BXD3iY0OaGkTfVfl4fmtOrQBEED9VxFDEvpkXs6wPQjYHpsuwyzG+0ZJ3BvdSKplWriKdEga3U5mBcAjxFoSYvM3BpIrSIB5atp2Cfm9NrhteCBvNwRDY28fBYpw7SZcSSJPZmImBeYNiPBUUtA1J/kovq63yJdJJLjPXbxK08zzANhogimAT/iqEQB5AA+HgqtKmxjHRaHeVhJhcLm2cuIc0G7iSSLRMbojHkzGWfFbKGLziq+o54e4BxsAbRyUdPMqwMiq+fFU0rV2rRw9mi3OMR/fP8AVPGdYj++d6hZwTlq2IdUqFxLnEkncncpqEIAREIQgBEqEJAPw9IucAF1lLEmjTjYALlcNXLHahupsVmT6ghyhlxPI19F8OVY09bL2VV9eILn3kE3VGpi3ydtzyTaWNc0WAS/XT+EI8bu6M800ZSUJEquSBKkSoAcEIQgBUqRAQMVBQgoENSEwo61cDvPRVtZcb+nJKxnScEPnH042DX/AO1ez+xD6cLxn6O4/iDAebKkeOifkva8CbAdy5M37jrw/tMStghBaRf8x5c1nYGo7DFzm3bG2+mOXna/cuyrYIEgqjiMmbUBMlp6j5qS0UZmfxphcC4iInntz0xzVZ2Kp6jpIAvcTOxgE+o5qvjeHHtJh8A937us+rklcuAbUHoevNa0O2NzLMJYWN95/uiSCNRvPf8AJcBn7DRxJHItaT38p9QV6TQyRtC7jrqH72wjoAuL+kXDaalJ/VhHmDPzVMb3ojlX9NsxWOBEhPasyk5w2KvYbEB1jY/vZdSOUshKkCVaECEIQAJEIQAIQhIASJUiABCEIArIQun4c4MrYmHGWM6kXKErA5lKF6ZnXBeGwuEfUddwaYPOV5mE2qEKhCY+qAkaJEhcBuo2V52Cic0uNwUrCif2vcY6pKptdRMlpspnP/4SNUZ7t1NTaowFPTCDJq8IOjH0fFw9ab17xhxYHwXgnDlsdh++q0esj5r6Go0hp8FzZls6cL0S6ZHkoiY71Yw4skqMlSotZlOJcb2+KaMDpl/7halLDBR5mYbARQ7OVxlMlw7jC4/6TMNOHY+PdeJ8HAj84XpOGw+oLnPpFwYOX1jF2hrv9L2n8pTg6kjM9xaPF2hNcIMqw1qbUprtOEno1iVP7TqquE2IPkrFMWgpjJAUqqvYQZCcK56J2KiwhMbVBT0CEQlQgBEIQgAQhKgDreGOCnlza2IgUwNUfqu1p5+XPFHC0i4Cxds0efPyXLZ5xqD7JjB2NXbHPQLep+S6fMeIaNDDh9FmokWDRJkqqroyc/8ASdm7ixmGF3G7wLwB/VeZ1X6eV+i9F4Gpmviq1fEi9h2gbbmLrhc9Ifi67rQa1TT/ACh5A+ACxP7NIzzUJSezlOY34KWLKZsZSp3hSuB3BShl+qGiDb0QBG1x5wkcRyKkdB2SGlZAFVrVOwKNilaEGSbLq2jE0X8m1qZPgHtlfRlDFtgd4XzRibCV9DZd2mMd+IA+t1z5tUdGBXZuUI3TXu7SgYS1SPg/NQs6OJZabbLOzBslWmuTKjJRehpbKFJ0bLj/AKUszFPB+yB7VYwB/gbd5/2t/wAy7TFaabHPe4Na0FznGwa0XJK8I4szp2MxD6pkN92m0/dpjae83J7z3KmKNsnmkkqMqmlcElPZSQus4iOm24Vgj0UJClYLJjQ479yaaaWUsoGQOppWOcLfmnvTAZj98khE7HSE5VsLVkkQrKZkRKhCYCISoQB1lJuAfiHV3OAaDMGzS7unddXk2b4X2ZqFsMLrEiOvVcLw7meFbQ9nWaC6SZIXS5dxLgvYAOgDYtIvyA+CqmjJt4jO8Iym6rLYgkgRLoEwO8my8aqPL3FxAkuLjHVxJMd0ldXxln2HqUmU8O37xLzGwAsPMmf8q5SgIH73U5u2biJH6JxEJdWoEJgWDRIE126cEkIAi2KcXpSENagCHTdStSVB2k5iDBFiG2XuH0d51SxODYAftKTWsqN5ghoAd/K6JB8RyXiVdtlJkWbVcLVbWouh7ZH+FzTu1w5tMfPdYnG0Uxy4s+lKsHZRauS53hji2hjGgNIbWjtUnHtTzLPxt7x5wth5MLjlp7O6NNaNBjgnyIWVUxYpsc97g1rRLi4wAOpJ5LzDjTjx2IBoYYltI2e+IdU6gDdrPie4WOsacjM5KKJPpI4yGIJw2Hd9i09t4/8AK4cm/wDrB/1ETsBPn1QpznKMrrSpUcUnbsmo7KRRYbZTLZgYpwRFlXcrOHovcIYxzzcw1pcYAk2A6AnyKDSI3C0z3opyoTWm2mxv5dVJT2sUAFepFiFHTtJPIR5/8JMTJ5JGt+zAO5k/v0SAip1u2P3YrRWI4XK2KLpaD3IQmPQhC0IEIQgCoE5MCWUAPbaU1rzMDrZRe01dyn0dOSyaQ+m2BKa1gk+KfUdyTH+8D3IGOCSo9NpPmU5wQAwuStKE9qAGuCcwJXiyGJmBKwsqFPcrSes6O0UmNFim8iCCQQZBBgg9QRse9dLhOPcfTaW+1D9oc9gc9sdDz/zArlwlWWk+zSbXRfzPN6+IM16z6kbAnsjwYIaPIKiXJISppUFiJjk9RuQIlwuysFQ4QdlTlaMkTl13C2NZQqUazWOJpOLyCLO+zcDBNrXdPKFyZC9Z4ZyIOy5rgQa2KpVHUtV2MFGHFp5gu/EJiAIIJlo6vjZIwUr9qjg+JsI2piX1cPTFPtEmkCSIN5bMegA5c5nCc2CfEro/aN11ajp2ZG34AeveucxuNDnvgHrfvhOR0fN+NjxJOD/j/pDXxB6J7yI0xsBdU6x+Kmrm5WDzyvUF1ey89jzP7+KzHErRy09k+PyCEJltCELQgRKSUIA//9k=",
                                  alt: "testimonialTwo",
                                }),
                                (0, A.jsxs)("div", {
                                  className: "w-full flex flex-col justify-end",
                                  children: [
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-xs uppercase text-designColor tracking-wide mb-2",
                                      children: "Iron Man",
                                    }),
                                    (0, A.jsx)("h3", {
                                      className: "text-2xl font-bold",
                                      children: "Tony Stark",
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base tracking-wide text-gray-500",
                                      children: "Sr. Data Scientist",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[60%] h-full flex flex-col justify-between",
                              children: [
                                (0, A.jsx)("img", {
                                  className: "w-20 lgl:w-32",
                                  src: R,
                                  alt: "quote",
                                }),
                                (0, A.jsxs)("div", {
                                  className:
                                    "w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8",
                                  children: [
                                    (0, A.jsxs)("div", {
                                      className:
                                        "flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900",
                                      children: [
                                        (0, A.jsxs)("div", {
                                          children: [
                                            (0, A.jsx)("h3", {
                                              className:
                                                "text-xl lgl:text-2xl font-medium tracking-wide",
                                              children: "IPL Win Predictor",
                                            }),
                                            (0, A.jsx)("p", {
                                              className:
                                                "text-base text-gray-400 mt-3",
                                              style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                              },
                                              children: "via Fiverr - May 2023",
                                            }),
                                          ],
                                        }),
                                        (0, A.jsxs)("div", {
                                          className:
                                            "text-yellow-500 flex gap-1",
                                          children: [
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6",
                                      children:
                                        "Very useful project for predicting the win probability of chasing team using historical ipl data from kaggle and logistic regression for binary classification.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)("div", {
                        className: "w-full",
                        children: (0, A.jsxs)("div", {
                          className:
                            "w-full h-auto flex flex-col lgl:flex-row justify-between",
                          children: [
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center",
                              children: [
                                (0, A.jsx)("img", {
                                  className:
                                    "h-72 md:h-32 lgl:h-72 rounded-lg object-cover",
                                  src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXFxcYGBgYFhUXFxUYFxcXFxUYGBcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8mICYtLTAtLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xAA6EAABAwMCBAQEBAYBBAMAAAABAAIRAwQhBRIGMUFREyJhcTKBkaGxwdHwBxQjQlLhYkNygrIVM8L/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMREAAgIBBAAFAgQFBQAAAAAAAQIAAxEEEiExBRMiQVEyYRQzccEGgbHR8BUWQpGh/9oADAMBAAIRAxEAPwArxvp4qVnOPQQsp1pmx8ArRuKeIBvqNHcj6LMNUuN7inj1iKyKhUyMozYukwglEIpYvgqoYqDLKu5hHOzYGtVO9qNmJQ6pqsBCHXRcZlKisueZ61vGF0lQWoZMPl4A5qAVxPNCH1D3XinzVjQPmL/7m1HxD/8AMjoq76xPQonw/pHiRKaq3DtNjJdA/H/aGRWvEA/iGsuO7dgRKsa4Xu+hwhEK2mW8l73uY0HmYaDn6/LmvjKTXmKFMVPUtPryG6fmreWPaW/1ZimyzmLdK2cDzMKe5omOqMvDactqMAfGACQAfU5P2XipQ3A7efb9DyKKoGeZjOc5xFina+aU0aLVa3mhdS2fuALSJ5SIn27ozZ6BUcJymfPSriAFDWdQ0++ZC+2d4JQK/wBNqUx1VKzvCDBR6bks4EBdp3r7jlcau5o5oNecSk+UqN9fc1L2oNyq6nTKRkQ+i1TLwTK2pu3mVRcyAro5KLwpShTYJdm3tK9G3LlO/S3jIlGtJ0884TTQspGQlHuIPEfq0gZeZnYs3xmVTq2xnK02tpUjkgOqaVHRXW3PcHbpNoyImGwUBtyO6Z3UsclSfbyUwMRHBg1hIHVRVASjrtMMSFQqWxachR5gPEI1LKMmaF/C6qQIWkajqW1sysv/AIeVYJCbOIap2YV26zAqhZsSpU1eoSSJhcvNpWGxvsuSn4hpsjw+rEyjVrhznOM8yT90MajVezPUFUjbptWy0x2XiVmhT03QvfhgLwVLdzhxIq1UnCltyoXMypKeFUCSTmWiprGjueAqwRLRD557c1VycS1YGeY8adUFBgcYzykxyQPWuKtxJLsR8PQn6zHXCoazePfJcSGMG0ep/wAW+pPX5dEA1G5hrQWhsjAjI+Zz7k80ADEaewtx7Se5vnViOQaDMuPf07/RFbfiFtFhp0wIjttDj1JIEuP2ScavUSFZt2VHGG7nE8uZU7scwe3Jh5+vlxJfSZugQeo9ogAKanqniNDSSD0BJgegM49ivmmcH3NQSSGpl0/+FtR+XVIHp+iF+ITOMw40z4zjED2GpGm4B/mZzhw5dMFvI/L3WnaEab2SwyPuPQoBW4DdTpHa8kjn6j2lRcLagaVQNMbXyCJyHAwffAlScWrx2JKbqmwejDfENoS0wFl2osLH/NbTqEFqynitjQ/CnSPhxL6tN1eTIbStIUN3TlR2boVxoW+7ejMwEU78CUrewcVaZYbSi+nx1Ul/tjCwrtSWOJtVaUAbp70qo0YKOUawhZ+6s4HEq7bag/qSlts0K7xjEdn3Ajmg2rVmkeqCXV+7uqlOs5xU4xK2XA8QhTtA7ovA0nMwrunvRN9QBd57CAGnU8z5p+ihwyVBq/CogkFWKOstZzML1c8S03AjcJRa1ycwdzgDaYK4OtDTrEFOWtUJppO0/VGtq7p5o9q2rg0sFOMpZeInSQlmTKNN8ALkvjUD3XLOwZs+csddQ4dZtOFm/ENh4bjC2OsZELP+MLAwSi1MQeYregK8CZ4XyjdhaDbJGUFDIKM2dzAhb+hqViSZ5zWWMOBIdStwMhDIyi100uEodUbBSmqwLCBGdOSUGZwU1O4LG4ME8+4b6e6hXXZAgmYOY6mOXy5JN40s7Vr5ztjG4iD37QT6x0Q5tJ9V22C715e/JWmM3OAGScfoPr1Wk8H8NNYwOcPMc+yUvu2COafT+aftFrSeDHODd3M9IT9ofC7KUANCY7W2bEBEKdtHTCQNjP3NEKlfAEhtLIMAgK9QdC9U6eFMym2MlcMwDvnuROIKx3j+28K4JYdkne3sDOfkStlqsaBO4D3SL/EnSfGoeNS2vNOSQ3Mt/ugjIIGUxS2G5gbBuQgQHa8RPNsN584wesxyz1STqWoF9REaFIvty5h3AEDA9OsY7ZS5VaQ5OKAr5lGLWVDEN2TZRWlSkIPp9XkjdCqm21fo2mUTQA+sGeILV98acFe7ruhz6kFZY5jB4hG1s98qvqVkWNnsrWhXHmKKaxbksKKgmZfeUuAic3cVdtxtGV7pwB6qlVqyVBjqNDFpXU1zcoVbSMrqlaShFeYcNxOumyJQSrgo3Xf5Uu3tXKPUYF0DGSuvCOqtP1JzhklA3vRrTLDxGo+YtqCqLKP/AMiV8Viro5BIhcogxcMdzdqlYCUncXXTdpCvVtTBmCkjiW8zzSyDJmvewVTATqMmVatmKzpdtvyiLtMLTML0fh7Y7nltapIyJTfThqAX784TLeshqVboyUnq/wAwxqgegTzTfnK+v+MyYAx3MHMD3woJRDw5otf13FueQLQI/wDb7JRhmHWVbOrtqBzs9f0/L6rYeHrrcxp7hY0+1Ic0cy6Djv2WtaQ4W9Frnf2s3H1MTCzNYM4mv4eT6viP1lTAG52F9drdIYLh9Vk1/rl5c/C/a0yRtyAIkDnntiYQa3q7Hy57nEOMmT6cxMjr9VVaSBJZgzcjM3a3v2O+EgpY4o4o8MmnTy+DAHdIFDVrqm6m22IqOqu8MMdIIeQXNzJG0gH6K7q3DWo0Hvq3Phk12gMNNxLab2kEsJcBBcJIPIlsYwFIr9yZxZQcDuQU9Sq1Hnxq+BAAD4HruJ5eyL2lMClUbTrVC7Y8gteGlxjAOwZBiBziUqM0SlU2irvBEzt3HfJBzgp90PTaYqtrQaZdHOQakACG0+ZwByyik46P/kqE73f1ip/DexqPfc2lZzhRGx4LpD6ZcAWy2AMscJB6gKnxNowpVnNa7c3m10RI9lrFrpLaVZ9y5uwVnRtxIaGMDN3Yyx5jpuASVxxabHM6iXtB7tw5v/sR8lxcs4E1vAa6y5rbkHMRG+VFbKqoX0ZU9CmArsTjBjHiPhJ04NlZ4+ISJkIbcBEQ5DL12UNe5gPLGjOioFpFGya9knOFmGnNJctD0bUIYAUdH2mIW6Q2vuivxDpRYSW4S5St3h2RK0XU6geqFKzYTK53GeI6mmIHcWarYbyVamM5THrFsA0wlmmYJQpZ1wZ187CVrp/mTHfjCWrgZKLXAMeZGXJz4GrBwLSkh6PcIXWyqB3RDFNUN9RmgVLIScLlaa6QuQ8mYXmRHtdUIkEoXrN7uwoH2zycDqqtzbPByjCvHM32uJGI8cFw6AU73NiISTwHROE+ancbWJ2tiCInaNwMRdepgTCSKwyU161ebiQEsVWGThTqSC/EikELiVwwkwEw6PYHw37/AIMPj/tP6E/RRaHY7nSQtH0izoikRUph+87c8gIHTuSfskLbQgyY/p9M9pwJl7PD3GpULpadzGMgb46FxmOXID5oxxFT1C4IebcstabmlzG/3tB3Fx3Euf5Yxy54lE+MOCmspPqWwI2ec05JAgc2zy/0nLhx4rW9J4MhzAftBSVmoGAwEeTSlSVLH+8AX9iKjnNz4RZEtdsJkYgxy6+uEFttCFOmaLDv3ODnQJiBA83Pl0C0O30faNocC0cmubMDsCCDHb2Vu00ICZcSD0hrR7Q0CQhi7jAMOyrnJHMSNA0bbdW0D4XuqO7MDabwAT/kS4YWuPosrUyyoNzHCIPpyPoZ6pXaz+q2jSAAaC4nkGt5ckft7jYB2H2VA2TK3VccdxUvNDdRcQarnsJO2SGub6FzACY7o7otBrRhue55n/yMkr3rmp2pc2lVBc948oaCSOm6R8OeqAHUzbu21Ph/y7e/p6qHJzL1pvTrBjXrlPdQfHMDcPdufyStqfD7rihSDh5m7jz6OOM/JHad8HMmcQfwXnRL8OotBM4j2jA+yNVywYTqbbNMfT3nP7fvMq1XRn0HbXDHQ90ODowtB/iFcMFNo/u3Y9oMrPm5TlhBSeuTUHUaEvZxxLVIrzVt5Kqi52lea1+hCtvaeHZ0zCtsGtRClqIHUJJr6oQoqV+4qwqPvKnVKvUdL3Usc0KGtFp5pfq6kVTrXsrhXiVOpzyI21tX8QRKqteEtUKzzyBKti4e3mCreXKG4nkwrfuEJZrnJV6veyIVMZV0TEjzATKVUqxp9Xa9p9VILFzzACatD4WJEuChmAllqZzgQ7a3ksafRciNDTA1oEclyp5giB8IbMs6dw212YQ/XeFewTlodwHCEVr2wPRONbg4MkV5ibwvonhtyFW4vrlrSn+nQAas74+6omnO9pW5dg5ihY22/JzJV92ljsi3DFiCwFS65RLM9FdgAZVeRKVvbtYOQV3TL8F/hzmQ5vrHxD3iD8il+vqUYIQerqBDw9phzSCD2IMgpS+lXBEf02ralg2Jq9xcb3BjsbTJA/vEfcQhXClYUKtS0Lpa1xdSPem/zN+kwinDF7SvqTXkN3Mw5skOafQjm09PohfG1n4b6Vdo2wdpjnE88epWMtZVirTYssRwGSOlMgL6+7wUraBr/iMAcfMMH1gxKI6nWIovc3J2kj6KrLtMhQG5MivnGN7HhjzI3HltSNcXeouL2W9w7ZPN5bB9nOyPqqdDWT4jXXDiRO1gyGg/8ugCa7bVdPpkOuq3il0kMpMeW4O2CQMdxywmErKyDaGH9u4G0jRKwqmpXudxiPI5z3+27ovHFtxSAFL+Zqvr4Apu6g9D2xnKerbiq3DD/KWrGuPLxHDke4p7nH2lA7Th41atW8ug11xVMw0ENpNA2taJ5+WM8z9kUD3g9pYfSQPkzv4f3bjZva+TsLmiew5Z+3yQa5uq1ItfTe4bh6QQCQPn/pWf5gW5rU2dTMep5qjf3LDsa3kGNB5fF15c+3yU0r9RhKmXzAG54P7QZd3dSq7dUcXH1Xum7CNaRo/iGVd1LQNrTCKHQHmdqNTfYu1TxEy+eqT3YXrVGFjiCqhctCsgiedfIPMhe2TCeeF+EPFYCUjMdDx7hb1wJtNJvsoYAAmRn2mb8YcG+Ezc0clntrRLnhvqv0nxrRaaL/ZYNYW39aAOp/FAbkZhU5OI9cM8NtLQSArut8NMDDAVvSahpsHsrF5Wc9pSJzuzNoIu3GJjmpW2x5CrMdCYOJNPcHkwl2rbuHNOAgiZDoVbqM/D5bIlPDNSpsb0WU6fWcOSuXd88jmubTluYxVrAgxiaB/8yTkRC5Lel1ZpMJ5x+ZXKw0oxLfjjHnT7sU6xae6c6dwC0GVmnFgNKpvGIKgteLjtglLnLDiX2orYM0m61ANHNZjxjqQe4hRX3ExcMFAWu8RxJWzoaMDPvMfX3LnjqG+FNajyHomPUa7aghJttZAGQjFncxglK6tGR8Gen/h3SVXVG3GSIK1mhzgJPunkFPuq1QQkfUaRLjASe7BxNLxrQVeSLFXBlnQdVq0agfSeWO9PwI5EJ5Gp1K4mqd2COgGeeAkHS9LqF0wnG2pFjcodjLu5gvBaqfJYWDkzzSY+g8uEx1HWDJHvHp6Jp0vWWOZEjtEoSaPj2+9vx0yWz1jEfY/ZKlW4NOq5kxBJ+3L2/VCdA4z7zK3GlyvY9jGmxtG73tjykkifwRZ1mAMCfSAR9Cs8ocSbX7swOSP6dxk18B4ySBI555IZSwdQ1eqrBxnEJ3OsPpnaylGesNA9fLKa9GZUNLc8jOcCAPzSbVvt5MNGWuIJMGQMAA8+R+qE3PE720g1lQwWwR1HKR8p5+hV/KdhzKW6xcnnMoa1fE3FSDzcRjqMhRWTS6r5ZjHyjmFXp0H7H1y2WtIEnlLiQB68ifTCJcJuG/PdNEbU4mbWS1gz7zR+HLYtYCUSv6Be1fNLe0NV19VsJA9zWxiZbxPpRElJxBGFqfFtwzaQszvIlaWlYmZWtQA5EpVFpnBfE7WMaCeSzWqFRdWcMNJTRYDuIAZmx8YcXsNMgO6d1negXU1dx6lW+GODq11DnlwatL03gGnSGBlVZMjniXrfa2ZWtHDaFcpVABlde2QpBKuo6nBwVmuhBxN9Ll25hDUrdrylTXLJo5BFLS7c90DMpnsOG9+XBFpqJOT1E9TqFVD8zJ2WlQZ2H6LxVd3wv0Bb8L0y2NoQjXP4fUngwIPotIOnQMxck8zKbK92saO36rkQueCq7XFo5A45rlfmWyIycZVi7mMJFqLStdtt7D1Wd3Fq9pOFn1gKMZj+oJYym+qvlvcbSufTzyX3wU/prGVhiZ99YZTmGbW/BCkZVMlC7HGEUphD8RYtZPafweoFLTzcvwruj6MHkEhVfDkgJo0bywse9iJteLnICwhR0VjRyCoXukVHg+GAYMZc1snsJOcIpXvp8oyTgDuVPqjQA1kfAAPnzc6PdRpKjY3M8trdQaUAXswVw7o9S38VtR7HE7SWtLjtndEkgDPp2QLifh8PO8CD6dQj1W7NJueRIcSBk9PMevurPiNqMBBkEYKnVh6n3CC0hS2va3MyLUtMLHSR0gAER+CrsYQSAIJMz2iIwO60TVNNafRBTpIOCB64UpqRjkQduiOfSZSt7umxpc90DyxkEAmY9u31UOjaQ66qhrMMfhxjLek9uUovS0NkYYPonLhfTW0wDiVZtWPYSi6IjljKnFehNo6caNIRFSme5cd2ST1OSlDS9LewzlaLx/qLqFm6q2JD6chwBEFwaZB6ZQfRb+ld0i9jQx7RLmTII6ub1j0RtNhkIPzA6nhwftPVhdECCVbuNRxzQS9cQcIebhxOUB1w2I8l+UkmqB1SUAq6O/mnOwYCMooyxaei0qVCrMm8lmmUXdm5o5L1wxpwq3ADhgFabqeiNLThC+EtC21y6OqIBk5gGGBNW4b01tOm0AdEUuYAUNlhoUF9XhAOWbMrnAi9xEwFpWQ6kD4pWuasS9pASTdaES6YRXryn3lq79p56ncJWo3AlalaBsCFn+mWTmGU5adUMCVD17VAEFqL9zYEPUHQreCEOZUwp6NZCIlxK9bTmkkwviIeIvi7cZGBMstC53lPJEhw+xw5IlT00N6K5TO0LHNh9pv4ERNb4YaBICRb2maboK2m8qBwhZ/xRpEyQFoaG8mwKYnq6AULCJlCplFbWpKGC2LSrdsSE/4iCHBmz/CFuNyGGbNslMNBmBHND+HtKfUHiHyU/wDN0we+0DLk2UK9Gk2Kcuf/AJkQf/EdFnfhLL2yBx8x/wAc8SpqbYDlh7D9/iU7W3NBza9YxtktYMumIBPaOapahqxflgEH0nrzz1noq2pO8xMnJ6koIaz2u3M+Y7j8itmrQrWnp7nibtS9zbmlitXeSSSc8yD+i+W+qGmcER1BxPqCvbKgqCZ928iPkqda2ByCDH290G2sMNrCRXYyHcpjALtlTIhQvo55Sl+lRePM2dyIWmutB2PI3AAuIjE9D6rIt0DLyk2KfEVbiwYhq3twUU0mlsdnP4IdZ3M5bkTHsex7FE7d5JE4H4pE5U4PcfyGXK9SLjm2NexuWASfD3D1cwhwH2WW/wAOtXNB4c7LNwBHpyP4rWtYuNrXAcg0Ssd06gDUeKYxvcTkNETkAnmfQJ3RNliJma1MANNS1HSDO5gJpu8zXDILTkfZDTpmUQ4b4ipBotqVT+rTYXeHk+QRuAPcSTHaUWZq4fghsnuAfxT76NrDuUxOnVisbWGYItbSFdpCEQHhO5gsPpy+6jrWWPK9p7TIR1RlGDAtYrNkShfXgDYlT8KODnJV4jbVpnzNIB5O5tPsRhGf4fVZOVPQIlWOZqVJmEN1Gii9D4Qob5uEsrcyjDiLG1R/ywJ5L3ePhy9Wz5KYbOMxO09Ty2zAVllOAuqPgL4LoQq8sZC+p55q3kdVbsKxclbUbwb0f0W4EBEdMLmMqeYwtYuXMqiFyVhYB8cGVXuqkBKdprck56n8Vbq6lugLHZcGbq4lxr5Kg1ijLVPpzZypNUpS2Ar0PscMJLqGXBmYXrZqhjQXOcYAGSSewTXofDVOn567fEqf4f8ATZ/3H+8+gx7r1asp2xL6bA+s6Qap5NHUUx27nr7KnfXdd5ne0RyEGPxXqvLN2C4mHTqLNPuWlsZ9xGy8uHluGggDAGAB2A7JeutR5+X5dkDq63Wonzsx/k0z9Vft9To3IBkNf0cOR9wiqgXiAOe5FWuwcHqh9ckfJW7+yc3p8x19VWAJCOBIlQ1IMj/RHY+iIWdxTcCeRHxNP4xyIVKpR6Ko+3zMkGOY5oNtW7ruWBkvEevCkNlAbqrhz/wHeO/YfP0KRQFQGcyTJmZJMyZ6nJTA/SDJd8U8yTlc23eDyPzSvkE/VCBsdQ1wlxIykNlZjg0xDm+Yj3B5j2WkacxtVgq0Xiow9R9wRzB9FlNCnGXDHplWeF9eqWF2XmXWrwQ8N9jsJB5EGBPYpLXeHKy717juk1rJ6D1HrjDVWW9Go5w3EtED5RJ+wj1WR3us3TqDctYD5gKbGtgSYyB80b4z4jo3VQgF2S0Nb7OyHwcJddfndEAAeWMEYwgaWtak9fZkam02Px0JR0HVX2tzSuBMseHH/kJ8wn1Era9WNOpTZeWzgaFSDjBY7qCOmfv8lnFrpNOtTDtsTPJHNCsqlvTqU2vPhVAJYciQ4EOHY4Wnp6HQhlPBiVjgxltr9zxE5C8UtScx20mQhFCttcPyVnUsHngp/aIKHTqRDcZBGMSPYg4IVnhi6t3PhrPCqdQD5D7A8vYJYt6+6mWzkZCpWt6WVg6ciP3KG9KsMSRN7s6ktBBleb2YWdWHFZt60OzSfBHbzc/otKt6zKrA9plrhIWTdSajk9S4O4TPtbvtroV3SnboRfV+HG1ckKgNPNEQERnUpgdxW6tiOJ91KsGtJStW1Ag88KTXLx5O0Awgb3u7FGoQKuTIprYDJnm+vimjhS6LoCUG6bUquAAiVqPCfD4pMHfqpusULGApzDFNhgLkQDAF9WduhcT826LeFyYG1jIStwsz+oWnutTsdLYQCktRgGa2mJKz5o9QxyRG5ILHT2U1GzDQqmqPim6FTRpvvUfeW1T7amMV7+4E4QzeTyXXlXJVGo8jLeYXsQMCYMt16xGHtkd0vappJb/Vt3HuWj8QEXpaoRhwn37Kz4DHjdTdtd26KGUNwZIJEHcP8T7/AOlWwf3yRWuzaR1H4pb1/SCfPt2vHUcjHWe6scOazvHg1fiHX8x6KqsVO1pxHuIweGCJEKje2haZGQft6KZtXY6DyV2g8OBBzPqimRFx5Leika9rvdELqy5jn2KG17Ig4UYkz05haR2Kp3Fu107SWO9ctPoR2X3+cezBEgqwwNqCW8/dU4bidE7WLVwcN7S3HONzfqFTo0jLYMz9u6eSXMweX2X1vhzPhtB7gCfqEk+hDNnMKLcDqX9BogUYPyVtp6EKvaVo9lK8/fqtBRgYECZWucH94RAu30h6IfWU2l1ubTyI+/5qZ0goVYJE5Q/UnEODgr9UbXTyVHVjLeaq3UkQvVreJSZPb3yPf0j6Jl4B4pdSJoOOP7Qevp6FIenXX9I+hB6+x+xXt9fY8PGOX6hUdVdcGdzmfoWlq9NzdwOEHutRY9xAMrPHaw5rA4HpMdCD8TSP3zTNw3RZUYKlPkcxzLT29Vk6nSmtcrGtM67vXCF1bNjkEMoWLS7K96vcFktlBbXUiCUgtrjIJmv5SkAgQ7c+HRIcYARWw4ro7fiCzHivWy4RKWKN67/IotJyPVENWAWws3apxdTn4guWIMunRzP1XI+U+Il5bfMM6fY7Xl+0mCTiBieeSB1CP1dbdSYXBhG2JEtOCAQfKSMgg/NRai8MPldt5zgGQYx9gl3VdRaGOZuknaOQGGNDWiB6ALP2F2nomOnr0x59f8/n/rqMtvxiHSCYhWWao2rTf5hg9xMRn8llrrjOEzcL0jWZUG6CBPw7p3NLO/qE5pdNss3qOpiX6rcm0+8u3ME+8oeytP77GFZrW21xzPxYI7kO69ZCo3NvB5+vKOu7utzNnxFOJNUoB4kIZVrPpH0U/iFsQeSkdfMqDbUbHSVc8/rOnw6q4sLqfmI5sOZHWAhniUrgh9E+FWbmJ8rvT0X2706rTO+j528/Lkj5KlWNKvkjwqw/vbgE/wDIfmguzdH/AD9DJGIz2Vz41ODh7OY9uYU1ncZ9ko6Jf1KVwW1OfM9Q719Zwm27YJDh2n6otVm9ZUjBhMvBH+1BWozzUNrWkZVkOBEFFlcwbUtwQWuGDyQWtTfRdI+GUz1aUhU7q33N9VVlzJBxPllcNqtjErq2nRlqAvY6k+RylMWm34eIVVbPBnGeKDCOan3KapSVV3dXkT1UafQ4VdphytNK83DOqmTPF+IM9DlCb04RcN3Mjshl9SgFVYcThB9m7y1G/wDF34FdQuC+m0+ijtj5s+yq2l3spR2Jj7pcHGM/eEjA++8oYnDgjWPBOwmQY/f1Wa6e/Ic4iTkDsEZ0+6IdM9cK/Fi4PvKnjqOnG2pQA8ct20nsexSXW1yOqP07gXG+i8gNezafR39r/kYPyWc69ple1qeHWEE5a4GWPH+TXdfbmFkarS7GyOo7Tqm27ZZvb8vdzXxlYoQKisUasmEAcSpJPJhNtYrkUtNDLmA91yr5ghhS3xD2snJSjc/H++65cpp6naruS0WCeQ+ibeD2iauP+l/+guXLUo95k2/UP1kt6MqrdDC5cnhCQa8fih94P38ly5UfqSJ7055BEEhXOJaLdjHbRuIyYEn5rlyqPyzJ/wCUWq4/qUk7MH9NnsfyXLlTTdt/ntJf2n20Gfl+ittGAvi5NQcmA/fyUEZC5cpnQPrLR26qhpB831XLkB/rEuOozW+ea8OH4rlyNBz5C9keVcuXSZ5oDJ9kOv8A9V8XKD1JEEWzRv5fuUK2jby/vP5rlyTs9v5wgklsP6vyRuxaIGP3K5crUSGhfSx5z8lLx0wGxaSASKrYnMS10x2mAuXK2q/LMqn1TMy0dla09o3jC+rliR0dzT9O/wDqb7Lly5JGbI6n/9k=",
                                  alt: "testimonialThree",
                                }),
                                (0, A.jsxs)("div", {
                                  className: "w-full flex flex-col justify-end",
                                  children: [
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-xs uppercase text-designColor tracking-wide mb-2",
                                      children: "Tech Visionary",
                                    }),
                                    (0, A.jsx)("h3", {
                                      className: "text-2xl font-bold",
                                      children: "Sundar Pichai",
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base tracking-wide text-gray-500",
                                      children: "Google CEO",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.jsxs)("div", {
                              className:
                                "w-full lgl:w-[60%] h-full flex flex-col justify-between",
                              children: [
                                (0, A.jsx)("img", {
                                  className: "w-20 lgl:w-32",
                                  src: R,
                                  alt: "quote",
                                }),
                                (0, A.jsxs)("div", {
                                  className:
                                    "w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8",
                                  children: [
                                    (0, A.jsxs)("div", {
                                      className:
                                        "flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900",
                                      children: [
                                        (0, A.jsxs)("div", {
                                          children: [
                                            (0, A.jsx)("h3", {
                                              className:
                                                "text-xl lgl:text-2xl font-medium tracking-wide",
                                              children:
                                                "Secrets Sharing Website",
                                            }),
                                            (0, A.jsx)("p", {
                                              className:
                                                "text-base text-gray-400 mt-3",
                                              style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                              },
                                              children:
                                                "via Freelancer - Mar 2023",
                                            }),
                                          ],
                                        }),
                                        (0, A.jsxs)("div", {
                                          className:
                                            "text-yellow-500 flex gap-1",
                                          children: [
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                            (0, A.jsx)(os, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.jsx)("p", {
                                      className:
                                        "text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6",
                                      children:
                                        "Good concept of sharing stories and secrets without the fear of anyone judging you or Google tracking you to bombard related advertisements (\ud83d\ude02).",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }
                )
              ),
            }),
          ],
        });
      };
      var cs = function () {
        return (0, A.jsxs)("div", {
          className: "w-full h-auto bg-bodyColor text-lightText px-4",
          children: [
            (0, A.jsx)(ne, {}),
            (0, A.jsxs)("div", {
              className: "max-w-screen-xl mx-auto",
              children: [
                (0, A.jsx)(B, {}),
                (0, A.jsx)(K, {}),
                (0, A.jsx)(ae, {}),
                (0, A.jsx)(is, {}),
                (0, A.jsx)(us, {}),
                (0, A.jsx)(H, {}),
                (0, A.jsx)(J, {}),
                (0, A.jsx)(Z, {}),
              ],
            }),
          ],
        });
      };
      t.createRoot(document.getElementById("root")).render(
        (0, A.jsx)(e.StrictMode, { children: (0, A.jsx)(cs, {}) })
      );
    })();
})();
//# sourceMappingURL=main.5055d4cf.js.map
