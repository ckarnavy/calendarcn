import * as u from "react";
import V, { forwardRef as ic, createElement as ss, useState as ut, useLayoutEffect as cc, createContext as Nf, useContext as Ef, useCallback as we, useRef as te, useEffect as be, useMemo as Pr } from "react";
import * as Os from "react-dom";
import Df, { createPortal as tr } from "react-dom";
var gr = { exports: {} }, Fn = {};
var Ra;
function Sf() {
  if (Ra) return Fn;
  Ra = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var c in o)
        c !== "key" && (s[c] = o[c]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Fn.Fragment = t, Fn.jsx = n, Fn.jsxs = n, Fn;
}
var Wn = {};
var Pa;
function jf() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === L ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case x:
          return "Fragment";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof C == "object")
        switch (typeof C.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), C.$$typeof) {
          case g:
            return "Portal";
          case M:
            return C.displayName || "Context";
          case k:
            return (C._context.displayName || "Context") + ".Consumer";
          case N:
            var S = C.render;
            return C = C.displayName, C || (C = S.displayName || S.name || "", C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef"), C;
          case D:
            return S = C.displayName || null, S !== null ? S : e(C.type) || "Memo";
          case T:
            S = C._payload, C = C._init;
            try {
              return e(C(S));
            } catch {
            }
        }
      return null;
    }
    function t(C) {
      return "" + C;
    }
    function n(C) {
      try {
        t(C);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var F = S.error, Y = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return F.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Y
        ), t(C);
      }
    }
    function r(C) {
      if (C === x) return "<>";
      if (typeof C == "object" && C !== null && C.$$typeof === T)
        return "<...>";
      try {
        var S = e(C);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var C = z.A;
      return C === null ? null : C.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(C) {
      if (H.call(C, "key")) {
        var S = Object.getOwnPropertyDescriptor(C, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return C.key !== void 0;
    }
    function c(C, S) {
      function F() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var C = e(this.type);
      return _[C] || (_[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function d(C, S, F, Y, B, U) {
      var W = F.ref;
      return C = {
        $$typeof: b,
        type: C,
        key: S,
        props: F,
        _owner: Y
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(C, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(C, "ref", { enumerable: !1, value: null }), C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(C, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(C, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(C, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    }
    function m(C, S, F, Y, B, U) {
      var W = S.children;
      if (W !== void 0)
        if (Y)
          if (G(W)) {
            for (Y = 0; Y < W.length; Y++)
              f(W[Y]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(W);
      if (H.call(S, "key")) {
        W = e(C);
        var Z = Object.keys(S).filter(function(ue) {
          return ue !== "key";
        });
        Y = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", $[W + Y] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          W,
          Z,
          W
        ), $[W + Y] = !0);
      }
      if (W = null, F !== void 0 && (n(F), W = "" + F), i(S) && (n(S.key), W = "" + S.key), "key" in S) {
        F = {};
        for (var ne in S)
          ne !== "key" && (F[ne] = S[ne]);
      } else F = S;
      return W && c(
        F,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), d(
        C,
        W,
        F,
        o(),
        B,
        U
      );
    }
    function f(C) {
      h(C) ? C._store && (C._store.validated = 1) : typeof C == "object" && C !== null && C.$$typeof === T && (C._payload.status === "fulfilled" ? h(C._payload.value) && C._payload.value._store && (C._payload.value._store.validated = 1) : C._store && (C._store.validated = 1));
    }
    function h(C) {
      return typeof C == "object" && C !== null && C.$$typeof === b;
    }
    var p = V, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), y = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.suspense_list"), D = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), L = /* @__PURE__ */ Symbol.for("react.client.reference"), z = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, G = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(C) {
        return C();
      }
    };
    var I, _ = {}, O = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), R = q(r(s)), $ = {};
    Wn.Fragment = x, Wn.jsx = function(C, S, F) {
      var Y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return m(
        C,
        S,
        F,
        !1,
        Y ? Error("react-stack-top-frame") : O,
        Y ? q(r(C)) : R
      );
    }, Wn.jsxs = function(C, S, F) {
      var Y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return m(
        C,
        S,
        F,
        !0,
        Y ? Error("react-stack-top-frame") : O,
        Y ? q(r(C)) : R
      );
    };
  })()), Wn;
}
var Aa;
function Tf() {
  return Aa || (Aa = 1, process.env.NODE_ENV === "production" ? gr.exports = Sf() : gr.exports = jf()), gr.exports;
}
var a = Tf();
const lc = 6048e5, _f = 864e5, uc = 6e4, Of = 36e5, Rf = 1e3, Ia = /* @__PURE__ */ Symbol.for("constructDateFrom");
function me(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Ia in e ? e[Ia](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function re(e, t) {
  return me(t || e, e);
}
function _e(e, t, n) {
  const r = re(e, n?.in);
  return isNaN(t) ? me(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function dc(e, t, n) {
  const r = re(e, n?.in);
  if (isNaN(t)) return me(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = me(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return o >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let Pf = {};
function an() {
  return Pf;
}
function ft(e, t) {
  const n = an(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = re(e, t?.in), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function tn(e, t) {
  return ft(e, { ...t, weekStartsOn: 1 });
}
function fc(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = me(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tn(o), i = me(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const c = tn(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Wr(e) {
  const t = re(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Tn(e, ...t) {
  const n = me.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Be(e, t) {
  const n = re(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Nn(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  ), s = Be(r), i = Be(o), c = +s - Wr(s), l = +i - Wr(i);
  return Math.round((c - l) / _f);
}
function Af(e, t) {
  const n = fc(e, t), r = me(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), tn(r);
}
function as(e, t, n) {
  return _e(e, t * 7, n);
}
function If(e, t, n) {
  return dc(e, t * 12, n);
}
function Ff(e, t, n) {
  const [r, o] = [
    +re(e.start, n?.in),
    +re(e.end, n?.in)
  ].sort((c, l) => c - l), [s, i] = [
    +re(t.start, n?.in),
    +re(t.end, n?.in)
  ].sort((c, l) => c - l);
  return r < i && s < o;
}
function Wf(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const s = re(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), me(r, n || NaN);
}
function Lf(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const s = re(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), me(r, n || NaN);
}
function mc(e) {
  return me(e, Date.now());
}
function De(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return +Be(r) == +Be(o);
}
function hc(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function $f(e) {
  return !(!hc(e) && typeof e != "number" || isNaN(+re(e)));
}
function pc(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return s * 12 + i;
}
function zf(e) {
  return (t) => {
    const n = Math.trunc, r = n(t);
    return r === 0 ? 0 : r;
  };
}
function Yf(e, t) {
  return +re(e) - +re(t);
}
function Lr(e, t, n) {
  const r = Yf(e, t) / uc;
  return zf()(r);
}
function Bf(e, t) {
  const n = re(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Rs(e, t) {
  const [n, r] = Tn(e, t.start, t.end);
  return { start: n, end: r };
}
function Zr(e, t) {
  const { start: n, end: r } = Rs(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(me(n, i)), i.setDate(i.getDate() + c), i.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function Hf(e, t) {
  const { start: n, end: r } = Rs(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(me(n, i)), i.setMonth(i.getMonth() + c);
  return o ? l.reverse() : l;
}
function Gf(e, t) {
  const n = re(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Vf(e, t) {
  const n = re(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function gc(e, t) {
  const n = re(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Uf(e, t) {
  const { start: n, end: r } = Rs(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(me(n, i)), i.setFullYear(i.getFullYear() + c);
  return o ? l.reverse() : l;
}
function xc(e, t) {
  const n = an(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = re(e, t?.in), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function qf(e, t) {
  return xc(e, { ...t, weekStartsOn: 1 });
}
const Kf = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Xf = (e, t, n) => {
  let r;
  const o = Kf[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Qf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zf = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Jf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, em = {
  date: jo({
    formats: Qf,
    defaultWidth: "full"
  }),
  time: jo({
    formats: Zf,
    defaultWidth: "full"
  }),
  dateTime: jo({
    formats: Jf,
    defaultWidth: "full"
  })
}, tm = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nm = (e, t, n, r) => tm[e];
function Ln(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, c = n?.width ? String(n.width) : i;
      o = e.formattingValues[c] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, c = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const rm = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, om = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, sm = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, am = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, im = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, cm = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, lm = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, um = {
  ordinalNumber: lm,
  era: Ln({
    values: rm,
    defaultWidth: "wide"
  }),
  quarter: Ln({
    values: om,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ln({
    values: sm,
    defaultWidth: "wide"
  }),
  day: Ln({
    values: am,
    defaultWidth: "wide"
  }),
  dayPeriod: Ln({
    values: im,
    defaultWidth: "wide",
    formattingValues: cm,
    defaultFormattingWidth: "wide"
  })
};
function $n(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? fm(c, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      dm(c, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const m = t.slice(i.length);
    return { value: d, rest: m };
  };
}
function dm(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function fm(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function mm(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const c = t.slice(o.length);
    return { value: i, rest: c };
  };
}
const hm = /^(\d+)(th|st|nd|rd)?/i, pm = /\d+/i, gm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xm = {
  any: [/^b/i, /^(a|c)/i]
}, bm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, vm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ym = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wm = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, km = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Cm = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Mm = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Nm = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Em = {
  ordinalNumber: mm({
    matchPattern: hm,
    parsePattern: pm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $n({
    matchPatterns: gm,
    defaultMatchWidth: "wide",
    parsePatterns: xm,
    defaultParseWidth: "any"
  }),
  quarter: $n({
    matchPatterns: bm,
    defaultMatchWidth: "wide",
    parsePatterns: vm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $n({
    matchPatterns: ym,
    defaultMatchWidth: "wide",
    parsePatterns: wm,
    defaultParseWidth: "any"
  }),
  day: $n({
    matchPatterns: km,
    defaultMatchWidth: "wide",
    parsePatterns: Cm,
    defaultParseWidth: "any"
  }),
  dayPeriod: $n({
    matchPatterns: Mm,
    defaultMatchWidth: "any",
    parsePatterns: Nm,
    defaultParseWidth: "any"
  })
}, Jt = {
  code: "en-US",
  formatDistance: Xf,
  formatLong: em,
  formatRelative: nm,
  localize: um,
  match: Em,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Dm(e, t) {
  const n = re(e, t?.in);
  return Nn(n, gc(n)) + 1;
}
function Jr(e, t) {
  const n = re(e, t?.in), r = +tn(n) - +Af(n);
  return Math.round(r / lc) + 1;
}
function Ps(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = an(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = me(t?.in || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const c = ft(i, t), l = me(t?.in || e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const d = ft(l, t);
  return +n >= +c ? r + 1 : +n >= +d ? r : r - 1;
}
function Sm(e, t) {
  const n = an(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Ps(e, t), s = me(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), ft(s, t);
}
function nr(e, t) {
  const n = re(e, t?.in), r = +ft(n, t) - +Sm(n, t);
  return Math.round(r / lc) + 1;
}
function ye(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const zt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ye(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ye(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ye(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ye(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ye(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ye(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ye(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ye(o, t.length);
  }
}, ln = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fa = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return zt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Ps(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return ye(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : ye(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = fc(e);
    return ye(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ye(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return ye(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return ye(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return zt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return ye(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = nr(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ye(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Jr(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ye(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : zt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Dm(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ye(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return ye(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return ye(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return ye(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = ln.noon : r === 0 ? o = ln.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = ln.evening : r >= 12 ? o = ln.afternoon : r >= 4 ? o = ln.morning : o = ln.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return zt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : zt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ye(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ye(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : zt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : zt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return zt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return La(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Zt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Zt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return La(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Zt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Zt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Wa(r, ":");
      default:
        return "GMT" + Zt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Wa(r, ":");
      default:
        return "GMT" + Zt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ye(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ye(+e, t.length);
  }
};
function Wa(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + ye(s, 2);
}
function La(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ye(Math.abs(e) / 60, 2) : Zt(e, t);
}
function Zt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ye(Math.trunc(r / 60), 2), s = ye(r % 60, 2);
  return n + o + t + s;
}
const $a = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, bc = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, jm = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return $a(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", $a(r, t)).replace("{{time}}", bc(o, t));
}, is = {
  p: bc,
  P: jm
}, Tm = /^D+$/, _m = /^Y+$/, Om = ["D", "DD", "YY", "YYYY"];
function vc(e) {
  return Tm.test(e);
}
function yc(e) {
  return _m.test(e);
}
function cs(e, t, n) {
  const r = Rm(e, t, n);
  if (console.warn(r), Om.includes(e)) throw new RangeError(r);
}
function Rm(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Pm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Am = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Im = /^'([^]*?)'?$/, Fm = /''/g, Wm = /[a-zA-Z]/;
function ve(e, t, n) {
  const r = an(), o = n?.locale ?? r.locale ?? Jt, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, c = re(e, n?.in);
  if (!$f(c))
    throw new RangeError("Invalid time value");
  let l = t.match(Am).map((m) => {
    const f = m[0];
    if (f === "p" || f === "P") {
      const h = is[f];
      return h(m, o.formatLong);
    }
    return m;
  }).join("").match(Pm).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const f = m[0];
    if (f === "'")
      return { isToken: !1, value: Lm(m) };
    if (Fa[f])
      return { isToken: !0, value: m };
    if (f.match(Wm))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: m };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(c, l));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  };
  return l.map((m) => {
    if (!m.isToken) return m.value;
    const f = m.value;
    (!n?.useAdditionalWeekYearTokens && yc(f) || !n?.useAdditionalDayOfYearTokens && vc(f)) && cs(f, t, String(e));
    const h = Fa[f[0]];
    return h(c, f, o.localize, d);
  }).join("");
}
function Lm(e) {
  const t = e.match(Im);
  return t ? t[1].replace(Fm, "'") : e;
}
function $m(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = me(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function zm() {
  return Object.assign({}, an());
}
function Ym(e, t) {
  const n = re(e, t?.in).getDay();
  return n === 0 ? 7 : n;
}
function Bm(e, t) {
  return re(e, t?.in).getMonth();
}
function Hm(e, t) {
  return re(e, t?.in).getFullYear();
}
function Gm(e, t) {
  return +re(e) > +re(t);
}
function wc(e, t) {
  return +re(e) < +re(t);
}
function Vm(e, t) {
  const n = Um(t) ? new t(0) : me(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function Um(e) {
  return typeof e == "function" && e.prototype?.constructor === e;
}
const qm = 10;
class kc {
  subPriority = 0;
  validate(t, n) {
    return !0;
  }
}
class Km extends kc {
  constructor(t, n, r, o, s) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = o, s && (this.subPriority = s);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class Xm extends kc {
  priority = qm;
  subPriority = -1;
  constructor(t, n) {
    super(), this.context = t || ((r) => me(n, r));
  }
  set(t, n) {
    return n.timestampIsSet ? t : me(t, Vm(t, this.context));
  }
}
class pe {
  run(t, n, r, o) {
    const s = this.parse(t, n, r, o);
    return s ? {
      setter: new Km(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class Qm extends pe {
  priority = 140;
  parse(t, n, r) {
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      // A, B
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, n, r) {
    return n.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const Pe = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, yt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ae(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Te(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function wt(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, s = n[3] ? parseInt(n[3], 10) : 0, i = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * Of + s * uc + i * Rf),
    rest: t.slice(n[0].length)
  };
}
function Cc(e) {
  return Te(Pe.anyDigitsSigned, e);
}
function Re(e, t) {
  switch (e) {
    case 1:
      return Te(Pe.singleDigit, t);
    case 2:
      return Te(Pe.twoDigits, t);
    case 3:
      return Te(Pe.threeDigits, t);
    case 4:
      return Te(Pe.fourDigits, t);
    default:
      return Te(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function $r(e, t) {
  switch (e) {
    case 1:
      return Te(Pe.singleDigitSigned, t);
    case 2:
      return Te(Pe.twoDigitsSigned, t);
    case 3:
      return Te(Pe.threeDigitsSigned, t);
    case 4:
      return Te(Pe.fourDigitsSigned, t);
    default:
      return Te(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function As(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function Mc(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let o;
  if (r <= 50)
    o = e || 100;
  else {
    const s = r + 50, i = Math.trunc(s / 100) * 100, c = e >= s % 100;
    o = e + i - (c ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function Nc(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class Zm extends pe {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Ae(Re(4, t), o);
      case "yo":
        return Ae(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Ae(Re(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const i = Mc(
        r.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Jm extends pe {
  priority = 130;
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Ae(Re(4, t), o);
      case "Yo":
        return Ae(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Ae(Re(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r, o) {
    const s = Ps(t, o);
    if (r.isTwoDigitYear) {
      const c = Mc(
        r.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), ft(t, o);
    }
    const i = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), ft(t, o);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
class eh extends pe {
  priority = 130;
  parse(t, n) {
    return $r(n === "R" ? 4 : n.length, t);
  }
  set(t, n, r) {
    const o = me(t, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), tn(o);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
class th extends pe {
  priority = 130;
  parse(t, n) {
    return $r(n === "u" ? 4 : n.length, t);
  }
  set(t, n, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class nh extends pe {
  priority = 120;
  parse(t, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return Re(n.length, t);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class rh extends pe {
  priority = 120;
  parse(t, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return Re(n.length, t);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class oh extends pe {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(t, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "M":
        return Ae(
          Te(Pe.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return Ae(Re(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return Ae(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class sh extends pe {
  priority = 110;
  parse(t, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return Ae(
          Te(Pe.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return Ae(Re(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return Ae(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function ah(e, t, n) {
  const r = re(e, n?.in), o = nr(r, n) - t;
  return r.setDate(r.getDate() - o * 7), re(r, n?.in);
}
class ih extends pe {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "w":
        return Te(Pe.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r, o) {
    return ft(ah(t, r, o), o);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
function ch(e, t, n) {
  const r = re(e, n?.in), o = Jr(r, n) - t;
  return r.setDate(r.getDate() - o * 7), r;
}
class lh extends pe {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "I":
        return Te(Pe.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r) {
    return tn(ch(t, r));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
const uh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dh = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class fh extends pe {
  priority = 90;
  subPriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "d":
        return Te(Pe.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear(), o = Nc(r), s = t.getMonth();
    return o ? n >= 1 && n <= dh[s] : n >= 1 && n <= uh[s];
  }
  set(t, n, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class mh extends pe {
  priority = 90;
  subpriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "D":
      case "DD":
        return Te(Pe.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear();
    return Nc(r) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(t, n, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function Is(e, t, n) {
  const r = an(), o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = re(e, n?.in), i = s.getDay(), l = (t % 7 + 7) % 7, d = 7 - o, m = t < 0 || t > 6 ? t - (i + d) % 7 : (l + d) % 7 - (i + d) % 7;
  return _e(s, m, n);
}
class hh extends pe {
  priority = 90;
  parse(t, n, r) {
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = Is(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class ph extends pe {
  priority = 90;
  parse(t, n, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (n) {
      // 3
      case "e":
      case "ee":
        return Ae(Re(n.length, t), s);
      // 3rd
      case "eo":
        return Ae(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = Is(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
}
class gh extends pe {
  priority = 90;
  parse(t, n, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (n) {
      // 3
      case "c":
      case "cc":
        return Ae(Re(n.length, t), s);
      // 3rd
      case "co":
        return Ae(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = Is(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
}
function xh(e, t, n) {
  const r = re(e, n?.in), o = Ym(r, n), s = t - o;
  return _e(r, s, n);
}
class bh extends pe {
  priority = 90;
  parse(t, n, r) {
    const o = (s) => s === 0 ? 7 : s;
    switch (n) {
      // 2
      case "i":
      case "ii":
        return Re(n.length, t);
      // 2nd
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return Ae(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return Ae(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return Ae(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      default:
        return Ae(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 7;
  }
  set(t, n, r) {
    return t = xh(t, r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
}
class vh extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(As(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class yh extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(As(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class wh extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(As(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class kh extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "h":
        return Te(Pe.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 12;
  }
  set(t, n, r) {
    const o = t.getHours() >= 12;
    return o && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class Ch extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "H":
        return Te(Pe.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 23;
  }
  set(t, n, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class Mh extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "K":
        return Te(Pe.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class Nh extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "k":
        return Te(Pe.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 24;
  }
  set(t, n, r) {
    const o = r <= 24 ? r % 24 : r;
    return t.setHours(o, 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class Eh extends pe {
  priority = 60;
  parse(t, n, r) {
    switch (n) {
      case "m":
        return Te(Pe.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setMinutes(r, 0, 0), t;
  }
  incompatibleTokens = ["t", "T"];
}
class Dh extends pe {
  priority = 50;
  parse(t, n, r) {
    switch (n) {
      case "s":
        return Te(Pe.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setSeconds(r, 0), t;
  }
  incompatibleTokens = ["t", "T"];
}
class Sh extends pe {
  priority = 30;
  parse(t, n) {
    const r = (o) => Math.trunc(o * Math.pow(10, -n.length + 3));
    return Ae(Re(n.length, t), r);
  }
  set(t, n, r) {
    return t.setMilliseconds(r), t;
  }
  incompatibleTokens = ["t", "T"];
}
class jh extends pe {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "X":
        return wt(
          yt.basicOptionalMinutes,
          t
        );
      case "XX":
        return wt(yt.basic, t);
      case "XXXX":
        return wt(
          yt.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return wt(
          yt.extendedOptionalSeconds,
          t
        );
      default:
        return wt(yt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : me(
      t,
      t.getTime() - Wr(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class Th extends pe {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "x":
        return wt(
          yt.basicOptionalMinutes,
          t
        );
      case "xx":
        return wt(yt.basic, t);
      case "xxxx":
        return wt(
          yt.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return wt(
          yt.extendedOptionalSeconds,
          t
        );
      default:
        return wt(yt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : me(
      t,
      t.getTime() - Wr(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class _h extends pe {
  priority = 40;
  parse(t) {
    return Cc(t);
  }
  set(t, n, r) {
    return [me(t, r * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class Oh extends pe {
  priority = 20;
  parse(t) {
    return Cc(t);
  }
  set(t, n, r) {
    return [me(t, r), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const Rh = {
  G: new Qm(),
  y: new Zm(),
  Y: new Jm(),
  R: new eh(),
  u: new th(),
  Q: new nh(),
  q: new rh(),
  M: new oh(),
  L: new sh(),
  w: new ih(),
  I: new lh(),
  d: new fh(),
  D: new mh(),
  E: new hh(),
  e: new ph(),
  c: new gh(),
  i: new bh(),
  a: new vh(),
  b: new yh(),
  B: new wh(),
  h: new kh(),
  H: new Ch(),
  K: new Mh(),
  k: new Nh(),
  m: new Eh(),
  s: new Dh(),
  S: new Sh(),
  X: new jh(),
  x: new Th(),
  t: new _h(),
  T: new Oh()
}, Ph = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ah = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ih = /^'([^]*?)'?$/, Fh = /''/g, Wh = /\S/, Lh = /[a-zA-Z]/;
function $h(e, t, n, r) {
  const o = () => me(n, NaN), s = zm(), i = s.locale ?? Jt, c = s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, l = s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, d = {
    firstWeekContainsDate: c,
    weekStartsOn: l,
    locale: i
  }, m = [new Xm(r?.in, n)], f = t.match(Ah).map((x) => {
    const v = x[0];
    if (v in is) {
      const y = is[v];
      return y(x, i.formatLong);
    }
    return x;
  }).join("").match(Ph), h = [];
  for (let x of f) {
    yc(x) && cs(x, t, e), vc(x) && cs(x, t, e);
    const v = x[0], y = Rh[v];
    if (y) {
      const { incompatibleTokens: k } = y;
      if (Array.isArray(k)) {
        const N = h.find(
          (w) => k.includes(w.token) || w.token === v
        );
        if (N)
          throw new RangeError(
            `The format string mustn't contain \`${N.fullToken}\` and \`${x}\` at the same time`
          );
      } else if (y.incompatibleTokens === "*" && h.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${x}\` and any other token at the same time`
        );
      h.push({ token: v, fullToken: x });
      const M = y.run(
        e,
        x,
        i.match,
        d
      );
      if (!M)
        return o();
      m.push(M.setter), e = M.rest;
    } else {
      if (v.match(Lh))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + v + "`"
        );
      if (x === "''" ? x = "'" : v === "'" && (x = zh(x)), e.indexOf(x) === 0)
        e = e.slice(x.length);
      else
        return o();
    }
  }
  if (e.length > 0 && Wh.test(e))
    return o();
  const p = m.map((x) => x.priority).sort((x, v) => v - x).filter((x, v, y) => y.indexOf(x) === v).map(
    (x) => m.filter((v) => v.priority === x).sort((v, y) => y.subPriority - v.subPriority)
  ).map((x) => x[0]);
  let b = re(n, r?.in);
  if (isNaN(+b)) return o();
  const g = {};
  for (const x of p) {
    if (!x.validate(b, d))
      return o();
    const v = x.set(b, g, d);
    Array.isArray(v) ? (b = v[0], Object.assign(g, v[1])) : b = v;
  }
  return b;
}
function zh(e) {
  return e.match(Ih)[1].replace(Fh, "'");
}
function Un(e) {
  return +re(e) < Date.now();
}
function Yh(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Ec(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function ls(e, t) {
  return De(
    me(e, e),
    mc(e)
  );
}
function Bh(e, t) {
  return De(
    e,
    _e(mc(e), 1),
    t
  );
}
function Hh(e, t, n) {
  const r = re(e, n?.in), o = r.getFullYear(), s = r.getDate(), i = me(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const c = $m(i);
  return r.setMonth(t, Math.min(s, c)), r;
}
function Gh(e, t, n) {
  const r = re(e, n?.in);
  return isNaN(+r) ? me(e, NaN) : (r.setFullYear(t), r);
}
const Vh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Uh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), za = (e) => {
  const t = Uh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Dc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), qh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Kh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Xh = ic(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...c
  }, l) => ss(
    "svg",
    {
      ref: l,
      ...Kh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Dc("lucide", o),
      ...!s && !qh(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([d, m]) => ss(d, m)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const le = (e, t) => {
  const n = ic(
    ({ className: r, ...o }, s) => ss(Xh, {
      ref: s,
      iconNode: t,
      className: Dc(
        `lucide-${Vh(za(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = za(e), n;
};
const Qh = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Zh = le("arrow-left", Qh);
const Jh = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], ep = le("bell", Jh);
const tp = [
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25", key: "1jrsq6" }],
  ["path", { d: "m22 22-1.875-1.875", key: "13zax7" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], np = le("calendar-search", tp);
const rp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], qn = le("check", rp);
const op = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Fs = le("chevron-down", op);
const sp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Sc = le("chevron-left", sp);
const ap = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], eo = le("chevron-right", ap);
const ip = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], cp = le("chevron-up", ip);
const lp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], up = le("circle-question-mark", lp);
const dp = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], fp = le("clock", dp);
const mp = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], jc = le("copy", mp);
const hp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], pp = le("ellipsis", hp);
const gp = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], xp = le("eye-off", gp);
const bp = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Tc = le("eye", bp);
const vp = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], yp = le("github", vp);
const wp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], kp = le("globe", wp);
const Cp = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], Mp = le("link-2", Cp);
const Np = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Ep = le("map-pin", Np);
const Dp = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], us = le("monitor", Dp);
const Sp = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], jp = le("moon", Sp);
const Tp = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
], _p = le("notepad-text", Tp);
const Op = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], Rp = le("panel-left", Op);
const Pp = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], Ws = le("panel-right", Pp);
const Ap = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ip = le("plus", Ap);
const Fp = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
], Ya = le("refresh-ccw", Fp);
const Wp = [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
], Lp = le("rss", Wp);
const $p = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], zp = le("search", $p);
const Yp = [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
], _c = le("square-dashed", Yp);
const Bp = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Hp = le("sun", Bp);
const Gp = [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], Oc = le("tablet-smartphone", Gp);
const Vp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Rc = le("trash-2", Vp);
const Up = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
], qp = le("undo-2", Up);
const Kp = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], Xp = le("user-round", Kp);
const Qp = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Zp = le("user", Qp);
const Jp = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], eg = le("video", Jp);
const tg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], to = le("x", tg);
var Ba = 1, ng = 0.9, rg = 0.8, og = 0.17, To = 0.1, _o = 0.999, sg = 0.9999, ag = 0.99, ig = /[\\\/_+.#"@\[\(\{&]/, cg = /[\\\/_+.#"@\[\(\{&]/g, lg = /[\s-]/, Pc = /[\s-]/g;
function ds(e, t, n, r, o, s, i) {
  if (s === t.length) return o === e.length ? Ba : ag;
  var c = `${o},${s}`;
  if (i[c] !== void 0) return i[c];
  for (var l = r.charAt(s), d = n.indexOf(l, o), m = 0, f, h, p, b; d >= 0; ) f = ds(e, t, n, r, d + 1, s + 1, i), f > m && (d === o ? f *= Ba : ig.test(e.charAt(d - 1)) ? (f *= rg, p = e.slice(o, d - 1).match(cg), p && o > 0 && (f *= Math.pow(_o, p.length))) : lg.test(e.charAt(d - 1)) ? (f *= ng, b = e.slice(o, d - 1).match(Pc), b && o > 0 && (f *= Math.pow(_o, b.length))) : (f *= og, o > 0 && (f *= Math.pow(_o, d - o))), e.charAt(d) !== t.charAt(s) && (f *= sg)), (f < To && n.charAt(d - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(d - 1) !== r.charAt(s)) && (h = ds(e, t, n, r, d + 1, s + 2, i), h * To > f && (f = h * To)), f > m && (m = f), d = n.indexOf(l, d + 1);
  return i[c] = m, m;
}
function Ha(e) {
  return e.toLowerCase().replace(Pc, " ");
}
function ug(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ds(e, t, Ha(e), Ha(t), 0, 0, {});
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Ga(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Et(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ga(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ga(e[o], null);
        }
      };
  };
}
function Se(...e) {
  return u.useCallback(Et(...e), e);
}
function dg(e, t) {
  const n = u.createContext(t), r = (s) => {
    const { children: i, ...c } = s, l = u.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ a.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function St(e, t = []) {
  let n = [];
  function r(s, i) {
    const c = u.createContext(i), l = n.length;
    n = [...n, i];
    const d = (f) => {
      const { scope: h, children: p, ...b } = f, g = h?.[e]?.[l] || c, x = u.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ a.jsx(g.Provider, { value: x, children: p });
    };
    d.displayName = s + "Provider";
    function m(f, h) {
      const p = h?.[e]?.[l] || c, b = u.useContext(p);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [d, m];
  }
  const o = () => {
    const s = n.map((i) => u.createContext(i));
    return function(c) {
      const l = c?.[e] || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return o.scopeName = e, [r, fg(o, ...t)];
}
function fg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((c, { useScope: l, scopeName: d }) => {
        const f = l(s)[`__scope${d}`];
        return { ...c, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var it = globalThis?.document ? u.useLayoutEffect : () => {
}, mg = u[" useId ".trim().toString()] || (() => {
}), hg = 0;
function Ue(e) {
  const [t, n] = u.useState(mg());
  return it(() => {
    n((r) => r ?? String(hg++));
  }, [e]), t ? `radix-${t}` : "";
}
var pg = u[" useInsertionEffect ".trim().toString()] || it;
function Ut({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = gg({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : o;
  {
    const m = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = m.current;
      f !== c && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), m.current = c;
    }, [c, r]);
  }
  const d = u.useCallback(
    (m) => {
      if (c) {
        const f = xg(m) ? m(e) : m;
        f !== e && i.current?.(f);
      } else
        s(m);
    },
    [c, e, s, i]
  );
  return [l, d];
}
function gg({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return pg(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function xg(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  const t = /* @__PURE__ */ bg(e), n = u.forwardRef((r, o) => {
    const { children: s, ...i } = r, c = u.Children.toArray(s), l = c.find(yg);
    if (l) {
      const d = l.props.children, m = c.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, m) : null });
    }
    return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function bg(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const i = kg(o), c = wg(s, o.props);
      return o.type !== u.Fragment && (c.ref = r ? Et(r, i) : i), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ac = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function vg(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ac, t;
}
function yg(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ac;
}
function wg(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...c) => {
      const l = s(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cg = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ke = Cg.reduce((e, t) => {
  const n = /* @__PURE__ */ En(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...c } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(l, { ...c, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ic(e, t) {
  e && Os.flushSync(() => e.dispatchEvent(t));
}
function mt(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function Mg(e, t = globalThis?.document) {
  const n = mt(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ng = "DismissableLayer", fs = "dismissableLayer.update", Eg = "dismissableLayer.pointerDownOutside", Dg = "dismissableLayer.focusOutside", Va, Fc = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rr = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: c,
      ...l
    } = e, d = u.useContext(Fc), [m, f] = u.useState(null), h = m?.ownerDocument ?? globalThis?.document, [, p] = u.useState({}), b = Se(t, (E) => f(E)), g = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(x), y = m ? g.indexOf(m) : -1, k = d.layersWithOutsidePointerEventsDisabled.size > 0, M = y >= v, N = Tg((E) => {
      const D = E.target, T = [...d.branches].some((P) => P.contains(D));
      !M || T || (o?.(E), i?.(E), E.defaultPrevented || c?.());
    }, h), w = _g((E) => {
      const D = E.target;
      [...d.branches].some((P) => P.contains(D)) || (s?.(E), i?.(E), E.defaultPrevented || c?.());
    }, h);
    return Mg((E) => {
      y === d.layers.size - 1 && (r?.(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
    }, h), u.useEffect(() => {
      if (m)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Va = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(m)), d.layers.add(m), Ua(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Va);
        };
    }, [m, h, n, d]), u.useEffect(() => () => {
      m && (d.layers.delete(m), d.layersWithOutsidePointerEventsDisabled.delete(m), Ua());
    }, [m, d]), u.useEffect(() => {
      const E = () => p({});
      return document.addEventListener(fs, E), () => document.removeEventListener(fs, E);
    }, []), /* @__PURE__ */ a.jsx(
      ke.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: k ? M ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, w.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, w.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
rr.displayName = Ng;
var Sg = "DismissableLayerBranch", jg = u.forwardRef((e, t) => {
  const n = u.useContext(Fc), r = u.useRef(null), o = Se(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ a.jsx(ke.div, { ...e, ref: o });
});
jg.displayName = Sg;
function Tg(e, t = globalThis?.document) {
  const n = mt(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          Wc(
            Eg,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function _g(e, t = globalThis?.document) {
  const n = mt(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Wc(Dg, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ua() {
  const e = new CustomEvent(fs);
  document.dispatchEvent(e);
}
function Wc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ic(o, s) : o.dispatchEvent(s);
}
var Oo = "focusScope.autoFocusOnMount", Ro = "focusScope.autoFocusOnUnmount", qa = { bubbles: !1, cancelable: !0 }, Og = "FocusScope", no = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [c, l] = u.useState(null), d = mt(o), m = mt(s), f = u.useRef(null), h = Se(t, (g) => l(g)), p = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let g = function(k) {
        if (p.paused || !c) return;
        const M = k.target;
        c.contains(M) ? f.current = M : Bt(f.current, { select: !0 });
      }, x = function(k) {
        if (p.paused || !c) return;
        const M = k.relatedTarget;
        M !== null && (c.contains(M) || Bt(f.current, { select: !0 }));
      }, v = function(k) {
        if (document.activeElement === document.body)
          for (const N of k)
            N.removedNodes.length > 0 && Bt(c);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const y = new MutationObserver(v);
      return c && y.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, c, p.paused]), u.useEffect(() => {
    if (c) {
      Xa.add(p);
      const g = document.activeElement;
      if (!c.contains(g)) {
        const v = new CustomEvent(Oo, qa);
        c.addEventListener(Oo, d), c.dispatchEvent(v), v.defaultPrevented || (Rg(Wg(Lc(c)), { select: !0 }), document.activeElement === g && Bt(c));
      }
      return () => {
        c.removeEventListener(Oo, d), setTimeout(() => {
          const v = new CustomEvent(Ro, qa);
          c.addEventListener(Ro, m), c.dispatchEvent(v), v.defaultPrevented || Bt(g ?? document.body, { select: !0 }), c.removeEventListener(Ro, m), Xa.remove(p);
        }, 0);
      };
    }
  }, [c, d, m, p]);
  const b = u.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
      if (x && v) {
        const y = g.currentTarget, [k, M] = Pg(y);
        k && M ? !g.shiftKey && v === M ? (g.preventDefault(), n && Bt(k, { select: !0 })) : g.shiftKey && v === k && (g.preventDefault(), n && Bt(M, { select: !0 })) : v === y && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ a.jsx(ke.div, { tabIndex: -1, ...i, ref: h, onKeyDown: b });
});
no.displayName = Og;
function Rg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Bt(r, { select: t }), document.activeElement !== n) return;
}
function Pg(e) {
  const t = Lc(e), n = Ka(t, e), r = Ka(t.reverse(), e);
  return [n, r];
}
function Lc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ka(e, t) {
  for (const n of e)
    if (!Ag(n, { upTo: t })) return n;
}
function Ag(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ig(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ig(e) && t && e.select();
  }
}
var Xa = Fg();
function Fg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Qa(e, t), e.unshift(t);
    },
    remove(t) {
      e = Qa(e, t), e[0]?.resume();
    }
  };
}
function Qa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Wg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Lg = "Portal", or = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  it(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Df.createPortal(/* @__PURE__ */ a.jsx(ke.div, { ...r, ref: t }), i) : null;
});
or.displayName = Lg;
function $g(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var nt = (e) => {
  const { present: t, children: n } = e, r = zg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = Se(r.ref, Yg(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
nt.displayName = "Presence";
function zg(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), i = e ? "mounted" : "unmounted", [c, l] = $g(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const d = xr(r.current);
    s.current = c === "mounted" ? d : "none";
  }, [c]), it(() => {
    const d = r.current, m = o.current;
    if (m !== e) {
      const h = s.current, p = xr(d);
      e ? l("MOUNT") : p === "none" || d?.display === "none" ? l("UNMOUNT") : l(m && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), it(() => {
    if (t) {
      let d;
      const m = t.ownerDocument.defaultView ?? window, f = (p) => {
        const g = xr(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = xr(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        m.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function xr(e) {
  return e?.animationName || "none";
}
function Yg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Po = 0;
function Ls() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Za()), document.body.insertAdjacentElement("beforeend", e[1] ?? Za()), Po++, () => {
      Po === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Po--;
    };
  }, []);
}
function Za() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var kt = function() {
  return kt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, kt.apply(this, arguments);
};
function $c(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bg(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ar = "right-scroll-bar-position", Ir = "width-before-scroll-bar", Hg = "with-scroll-bars-hidden", Gg = "--removed-body-scroll-bar-size";
function Ao(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vg(e, t) {
  var n = ut(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ug = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ja = /* @__PURE__ */ new WeakMap();
function qg(e, t) {
  var n = Vg(null, function(r) {
    return e.forEach(function(o) {
      return Ao(o, r);
    });
  });
  return Ug(function() {
    var r = Ja.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(c) {
        s.has(c) || Ao(c, null);
      }), s.forEach(function(c) {
        o.has(c) || Ao(c, i);
      });
    }
    Ja.set(n, e);
  }, [e]), n;
}
function Kg(e) {
  return e;
}
function Xg(e, t) {
  t === void 0 && (t = Kg);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(s), i = n;
      }
      var l = function() {
        var m = i;
        i = [], m.forEach(s);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(m) {
          i.push(m), d();
        },
        filter: function(m) {
          return i = i.filter(m), n;
        }
      };
    }
  };
  return o;
}
function Qg(e) {
  e === void 0 && (e = {});
  var t = Xg(null);
  return t.options = kt({ async: !0, ssr: !1 }, e), t;
}
var zc = function(e) {
  var t = e.sideCar, n = $c(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, kt({}, n));
};
zc.isSideCarExport = !0;
function Zg(e, t) {
  return e.useMedium(t), zc;
}
var Yc = Qg(), Io = function() {
}, ro = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Io,
    onWheelCapture: Io,
    onTouchMoveCapture: Io
  }), o = r[0], s = r[1], i = e.forwardProps, c = e.children, l = e.className, d = e.removeScrollBar, m = e.enabled, f = e.shards, h = e.sideCar, p = e.noRelative, b = e.noIsolation, g = e.inert, x = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, k = e.gapMode, M = $c(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = h, w = qg([n, t]), E = kt(kt({}, M), o);
  return u.createElement(
    u.Fragment,
    null,
    m && u.createElement(N, { sideCar: Yc, removeScrollBar: d, shards: f, noRelative: p, noIsolation: b, inert: g, setCallbacks: s, allowPinchZoom: !!x, lockRef: n, gapMode: k }),
    i ? u.cloneElement(u.Children.only(c), kt(kt({}, E), { ref: w })) : u.createElement(y, kt({}, E, { className: l, ref: w }), c)
  );
});
ro.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ro.classNames = {
  fullWidth: Ir,
  zeroRight: Ar
};
var Jg = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ex() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Jg();
  return t && e.setAttribute("nonce", t), e;
}
function tx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function nx(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rx = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ex()) && (tx(t, n), nx(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ox = function() {
  var e = rx();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Bc = function() {
  var e = ox(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, sx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Fo = function(e) {
  return parseInt(e || "", 10) || 0;
}, ax = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Fo(n), Fo(r), Fo(o)];
}, ix = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return sx;
  var t = ax(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, cx = Bc(), kn = "data-scroll-locked", lx = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Hg, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(kn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ar, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Ir, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Ar, " .").concat(Ar, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ir, " .").concat(Ir, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kn, `] {
    `).concat(Gg, ": ").concat(c, `px;
  }
`);
}, ei = function() {
  var e = parseInt(document.body.getAttribute(kn) || "0", 10);
  return isFinite(e) ? e : 0;
}, ux = function() {
  u.useEffect(function() {
    return document.body.setAttribute(kn, (ei() + 1).toString()), function() {
      var e = ei() - 1;
      e <= 0 ? document.body.removeAttribute(kn) : document.body.setAttribute(kn, e.toString());
    };
  }, []);
}, dx = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ux();
  var s = u.useMemo(function() {
    return ix(o);
  }, [o]);
  return u.createElement(cx, { styles: lx(s, !t, o, n ? "" : "!important") });
}, ms = !1;
if (typeof window < "u")
  try {
    var br = Object.defineProperty({}, "passive", {
      get: function() {
        return ms = !0, !0;
      }
    });
    window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
  } catch {
    ms = !1;
  }
var un = ms ? { passive: !1 } : !1, fx = function(e) {
  return e.tagName === "TEXTAREA";
}, Hc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fx(e) && n[t] === "visible")
  );
}, mx = function(e) {
  return Hc(e, "overflowY");
}, hx = function(e) {
  return Hc(e, "overflowX");
}, ti = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Gc(e, r);
    if (o) {
      var s = Vc(e, r), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, px = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, gx = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Gc = function(e, t) {
  return e === "v" ? mx(t) : hx(t);
}, Vc = function(e, t) {
  return e === "v" ? px(t) : gx(t);
}, xx = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bx = function(e, t, n, r, o) {
  var s = xx(e, window.getComputedStyle(t).direction), i = s * r, c = n.target, l = t.contains(c), d = !1, m = i > 0, f = 0, h = 0;
  do {
    if (!c)
      break;
    var p = Vc(e, c), b = p[0], g = p[1], x = p[2], v = g - x - s * b;
    (b || v) && Gc(e, c) && (f += v, h += b);
    var y = c.parentNode;
    c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(h) < 1) && (d = !0), d;
}, vr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ni = function(e) {
  return [e.deltaX, e.deltaY];
}, ri = function(e) {
  return e && "current" in e ? e.current : e;
}, vx = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, yx = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wx = 0, dn = [];
function kx(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(wx++)[0], s = u.useState(Bc)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Bg([e.lockRef.current], (e.shards || []).map(ri), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = u.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var v = vr(g), y = n.current, k = "deltaX" in g ? g.deltaX : y[0] - v[0], M = "deltaY" in g ? g.deltaY : y[1] - v[1], N, w = g.target, E = Math.abs(k) > Math.abs(M) ? "h" : "v";
    if ("touches" in g && E === "h" && w.type === "range")
      return !1;
    var D = window.getSelection(), T = D && D.anchorNode, P = T ? T === w || T.contains(w) : !1;
    if (P)
      return !1;
    var L = ti(E, w);
    if (!L)
      return !0;
    if (L ? N = E : (N = E === "v" ? "h" : "v", L = ti(E, w)), !L)
      return !1;
    if (!r.current && "changedTouches" in g && (k || M) && (r.current = N), !N)
      return !0;
    var z = r.current || N;
    return bx(z, x, g, z === "h" ? k : M);
  }, []), l = u.useCallback(function(g) {
    var x = g;
    if (!(!dn.length || dn[dn.length - 1] !== s)) {
      var v = "deltaY" in x ? ni(x) : vr(x), y = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && vx(N.delta, v);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var k = (i.current.shards || []).map(ri).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), M = k.length > 0 ? c(x, k[0]) : !i.current.noIsolation;
        M && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(g, x, v, y) {
    var k = { name: g, delta: x, target: v, should: y, shadowParent: Cx(v) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== k;
      });
    }, 1);
  }, []), m = u.useCallback(function(g) {
    n.current = vr(g), r.current = void 0;
  }, []), f = u.useCallback(function(g) {
    d(g.type, ni(g), g.target, c(g, e.lockRef.current));
  }, []), h = u.useCallback(function(g) {
    d(g.type, vr(g), g.target, c(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return dn.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, un), document.addEventListener("touchmove", l, un), document.addEventListener("touchstart", m, un), function() {
      dn = dn.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", l, un), document.removeEventListener("touchmove", l, un), document.removeEventListener("touchstart", m, un);
    };
  }, []);
  var p = e.removeScrollBar, b = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    b ? u.createElement(s, { styles: yx(o) }) : null,
    p ? u.createElement(dx, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Cx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Mx = Zg(Yc, kx);
var oo = u.forwardRef(function(e, t) {
  return u.createElement(ro, kt({}, e, { ref: t, sideCar: Mx }));
});
oo.classNames = ro.classNames;
var Nx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fn = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), wr = {}, Wo = 0, Uc = function(e) {
  return e && (e.host || Uc(e.parentNode));
}, Ex = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Uc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Dx = function(e, t, n, r) {
  var o = Ex(t, Array.isArray(e) ? e : [e]);
  wr[n] || (wr[n] = /* @__PURE__ */ new WeakMap());
  var s = wr[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || c.has(f) || (c.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var m = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (c.has(h))
        m(h);
      else
        try {
          var p = h.getAttribute(r), b = p !== null && p !== "false", g = (fn.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          fn.set(h, g), s.set(h, x), i.push(h), g === 1 && b && yr.set(h, !0), x === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return m(t), c.clear(), Wo++, function() {
    i.forEach(function(f) {
      var h = fn.get(f) - 1, p = s.get(f) - 1;
      fn.set(f, h), s.set(f, p), h || (yr.has(f) || f.removeAttribute(r), yr.delete(f)), p || f.removeAttribute(n);
    }), Wo--, Wo || (fn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), wr = {});
  };
}, $s = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Nx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Dx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, so = "Dialog", [qc] = St(so), [Sx, gt] = qc(so), Kc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, c = u.useRef(null), l = u.useRef(null), [d, m] = Ut({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: so
  });
  return /* @__PURE__ */ a.jsx(
    Sx,
    {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: Ue(),
      titleId: Ue(),
      descriptionId: Ue(),
      open: d,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((f) => !f), [m]),
      modal: i,
      children: n
    }
  );
};
Kc.displayName = so;
var Xc = "DialogTrigger", jx = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Xc, n), s = Se(t, o.triggerRef);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Bs(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
jx.displayName = Xc;
var zs = "DialogPortal", [Tx, Qc] = qc(zs, {
  forceMount: void 0
}), Zc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = gt(zs, t);
  return /* @__PURE__ */ a.jsx(Tx, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ a.jsx(nt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(or, { asChild: !0, container: o, children: i }) })) });
};
Zc.displayName = zs;
var zr = "DialogOverlay", Jc = u.forwardRef(
  (e, t) => {
    const n = Qc(zr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = gt(zr, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ a.jsx(nt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Ox, { ...o, ref: t }) }) : null;
  }
);
Jc.displayName = zr;
var _x = /* @__PURE__ */ En("DialogOverlay.RemoveScroll"), Ox = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(zr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a.jsx(oo, { as: _x, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ a.jsx(
        ke.div,
        {
          "data-state": Bs(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), nn = "DialogContent", el = u.forwardRef(
  (e, t) => {
    const n = Qc(nn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = gt(nn, e.__scopeDialog);
    return /* @__PURE__ */ a.jsx(nt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ a.jsx(Rx, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(Px, { ...o, ref: t }) });
  }
);
el.displayName = nn;
var Rx = u.forwardRef(
  (e, t) => {
    const n = gt(nn, e.__scopeDialog), r = u.useRef(null), o = Se(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return $s(s);
    }, []), /* @__PURE__ */ a.jsx(
      tl,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && s.preventDefault();
        }),
        onFocusOutside: J(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Px = u.forwardRef(
  (e, t) => {
    const n = gt(nn, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      tl,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), tl = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, c = gt(nn, n), l = u.useRef(null), d = Se(t, l);
    return Ls(), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        no,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ a.jsx(
            rr,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": Bs(c.open),
              ...i,
              ref: d,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Ax, { titleId: c.titleId }),
        /* @__PURE__ */ a.jsx(Fx, { contentRef: l, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), Ys = "DialogTitle", nl = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Ys, n);
    return /* @__PURE__ */ a.jsx(ke.h2, { id: o.titleId, ...r, ref: t });
  }
);
nl.displayName = Ys;
var rl = "DialogDescription", ol = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(rl, n);
    return /* @__PURE__ */ a.jsx(ke.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ol.displayName = rl;
var sl = "DialogClose", al = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(sl, n);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
al.displayName = sl;
function Bs(e) {
  return e ? "open" : "closed";
}
var il = "DialogTitleWarning", [BM, cl] = dg(il, {
  contentName: nn,
  titleName: Ys,
  docsSlug: "dialog"
}), Ax = ({ titleId: e }) => {
  const t = cl(il), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Ix = "DialogDescriptionWarning", Fx = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cl(Ix).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Hs = Kc, Gs = Zc, Vs = Jc, Us = el, ll = nl, ul = ol, dl = al, Wx = /* @__PURE__ */ Symbol.for("react.lazy"), Yr = u[" use ".trim().toString()];
function Lx(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function fl(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Wx && "_payload" in e && Lx(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  const t = /* @__PURE__ */ $x(e), n = u.forwardRef((r, o) => {
    let { children: s, ...i } = r;
    fl(s) && typeof Yr == "function" && (s = Yr(s._payload));
    const c = u.Children.toArray(s), l = c.find(Yx);
    if (l) {
      const d = l.props.children, m = c.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, m) : null });
    }
    return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var qs = /* @__PURE__ */ ml("Slot");
// @__NO_SIDE_EFFECTS__
function $x(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (fl(o) && typeof Yr == "function" && (o = Yr(o._payload)), u.isValidElement(o)) {
      const i = Hx(o), c = Bx(s, o.props);
      return o.type !== u.Fragment && (c.ref = r ? Et(r, i) : i), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zx = /* @__PURE__ */ Symbol("radix.slottable");
function Yx(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zx;
}
function Bx(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...c) => {
      const l = s(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Hx(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Gx = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ct = Gx.reduce((e, t) => {
  const n = /* @__PURE__ */ ml(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...c } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(l, { ...c, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), zn = '[cmdk-group=""]', Lo = '[cmdk-group-items=""]', Vx = '[cmdk-group-heading=""]', hl = '[cmdk-item=""]', oi = `${hl}:not([aria-disabled="true"])`, hs = "cmdk-item-select", bn = "data-value", Ux = (e, t, n) => ug(e, t, n), pl = u.createContext(void 0), sr = () => u.useContext(pl), gl = u.createContext(void 0), Ks = () => u.useContext(gl), xl = u.createContext(void 0), bl = u.forwardRef((e, t) => {
  let n = vn(() => {
    var S, F;
    return { search: "", value: (F = (S = e.value) != null ? S : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = vn(() => /* @__PURE__ */ new Set()), o = vn(() => /* @__PURE__ */ new Map()), s = vn(() => /* @__PURE__ */ new Map()), i = vn(() => /* @__PURE__ */ new Set()), c = vl(e), { label: l, children: d, value: m, onValueChange: f, filter: h, shouldFilter: p, loop: b, disablePointerSelection: g = !1, vimBindings: x = !0, ...v } = e, y = Ue(), k = Ue(), M = Ue(), N = u.useRef(null), w = ob();
  rn(() => {
    if (m !== void 0) {
      let S = m.trim();
      n.current.value = S, E.emit();
    }
  }, [m]), rn(() => {
    w(6, H);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (S) => (i.current.add(S), () => i.current.delete(S)), snapshot: () => n.current, setState: (S, F, Y) => {
    var B, U, W, Z;
    if (!Object.is(n.current[S], F)) {
      if (n.current[S] = F, S === "search") z(), P(), w(1, L);
      else if (S === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ne = document.getElementById(M);
          ne ? ne.focus() : (B = document.getElementById(y)) == null || B.focus();
        }
        if (w(7, () => {
          var ne;
          n.current.selectedItemId = (ne = G()) == null ? void 0 : ne.id, E.emit();
        }), Y || w(5, H), ((U = c.current) == null ? void 0 : U.value) !== void 0) {
          let ne = F ?? "";
          (Z = (W = c.current).onValueChange) == null || Z.call(W, ne);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((S) => S());
  } }), []), D = u.useMemo(() => ({ value: (S, F, Y) => {
    var B;
    F !== ((B = s.current.get(S)) == null ? void 0 : B.value) && (s.current.set(S, { value: F, keywords: Y }), n.current.filtered.items.set(S, T(F, Y)), w(2, () => {
      P(), E.emit();
    }));
  }, item: (S, F) => (r.current.add(S), F && (o.current.has(F) ? o.current.get(F).add(S) : o.current.set(F, /* @__PURE__ */ new Set([S]))), w(3, () => {
    z(), P(), n.current.value || L(), E.emit();
  }), () => {
    s.current.delete(S), r.current.delete(S), n.current.filtered.items.delete(S);
    let Y = G();
    w(4, () => {
      z(), Y?.getAttribute("id") === S && L(), E.emit();
    });
  }), group: (S) => (o.current.has(S) || o.current.set(S, /* @__PURE__ */ new Set()), () => {
    s.current.delete(S), o.current.delete(S);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => c.current.disablePointerSelection, listId: y, inputId: M, labelId: k, listInnerRef: N }), []);
  function T(S, F) {
    var Y, B;
    let U = (B = (Y = c.current) == null ? void 0 : Y.filter) != null ? B : Ux;
    return S ? U(S, n.current.search, F) : 0;
  }
  function P() {
    if (!n.current.search || c.current.shouldFilter === !1) return;
    let S = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((B) => {
      let U = o.current.get(B), W = 0;
      U.forEach((Z) => {
        let ne = S.get(Z);
        W = Math.max(ne, W);
      }), F.push([B, W]);
    });
    let Y = N.current;
    q().sort((B, U) => {
      var W, Z;
      let ne = B.getAttribute("id"), ue = U.getAttribute("id");
      return ((W = S.get(ue)) != null ? W : 0) - ((Z = S.get(ne)) != null ? Z : 0);
    }).forEach((B) => {
      let U = B.closest(Lo);
      U ? U.appendChild(B.parentElement === U ? B : B.closest(`${Lo} > *`)) : Y.appendChild(B.parentElement === Y ? B : B.closest(`${Lo} > *`));
    }), F.sort((B, U) => U[1] - B[1]).forEach((B) => {
      var U;
      let W = (U = N.current) == null ? void 0 : U.querySelector(`${zn}[${bn}="${encodeURIComponent(B[0])}"]`);
      W?.parentElement.appendChild(W);
    });
  }
  function L() {
    let S = q().find((Y) => Y.getAttribute("aria-disabled") !== "true"), F = S?.getAttribute(bn);
    E.setState("value", F || void 0);
  }
  function z() {
    var S, F, Y, B;
    if (!n.current.search || c.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (let W of r.current) {
      let Z = (F = (S = s.current.get(W)) == null ? void 0 : S.value) != null ? F : "", ne = (B = (Y = s.current.get(W)) == null ? void 0 : Y.keywords) != null ? B : [], ue = T(Z, ne);
      n.current.filtered.items.set(W, ue), ue > 0 && U++;
    }
    for (let [W, Z] of o.current) for (let ne of Z) if (n.current.filtered.items.get(ne) > 0) {
      n.current.filtered.groups.add(W);
      break;
    }
    n.current.filtered.count = U;
  }
  function H() {
    var S, F, Y;
    let B = G();
    B && (((S = B.parentElement) == null ? void 0 : S.firstChild) === B && ((Y = (F = B.closest(zn)) == null ? void 0 : F.querySelector(Vx)) == null || Y.scrollIntoView({ block: "nearest" })), B.scrollIntoView({ block: "nearest" }));
  }
  function G() {
    var S;
    return (S = N.current) == null ? void 0 : S.querySelector(`${hl}[aria-selected="true"]`);
  }
  function q() {
    var S;
    return Array.from(((S = N.current) == null ? void 0 : S.querySelectorAll(oi)) || []);
  }
  function I(S) {
    let F = q()[S];
    F && E.setState("value", F.getAttribute(bn));
  }
  function _(S) {
    var F;
    let Y = G(), B = q(), U = B.findIndex((Z) => Z === Y), W = B[U + S];
    (F = c.current) != null && F.loop && (W = U + S < 0 ? B[B.length - 1] : U + S === B.length ? B[0] : B[U + S]), W && E.setState("value", W.getAttribute(bn));
  }
  function O(S) {
    let F = G(), Y = F?.closest(zn), B;
    for (; Y && !B; ) Y = S > 0 ? nb(Y, zn) : rb(Y, zn), B = Y?.querySelector(oi);
    B ? E.setState("value", B.getAttribute(bn)) : _(S);
  }
  let R = () => I(q().length - 1), $ = (S) => {
    S.preventDefault(), S.metaKey ? R() : S.altKey ? O(1) : _(1);
  }, C = (S) => {
    S.preventDefault(), S.metaKey ? I(0) : S.altKey ? O(-1) : _(-1);
  };
  return u.createElement(ct.div, { ref: t, tabIndex: -1, ...v, "cmdk-root": "", onKeyDown: (S) => {
    var F;
    (F = v.onKeyDown) == null || F.call(v, S);
    let Y = S.nativeEvent.isComposing || S.keyCode === 229;
    if (!(S.defaultPrevented || Y)) switch (S.key) {
      case "n":
      case "j": {
        x && S.ctrlKey && $(S);
        break;
      }
      case "ArrowDown": {
        $(S);
        break;
      }
      case "p":
      case "k": {
        x && S.ctrlKey && C(S);
        break;
      }
      case "ArrowUp": {
        C(S);
        break;
      }
      case "Home": {
        S.preventDefault(), I(0);
        break;
      }
      case "End": {
        S.preventDefault(), R();
        break;
      }
      case "Enter": {
        S.preventDefault();
        let B = G();
        if (B) {
          let U = new Event(hs);
          B.dispatchEvent(U);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: D.inputId, id: D.labelId, style: ab }, l), ao(e, (S) => u.createElement(gl.Provider, { value: E }, u.createElement(pl.Provider, { value: D }, S))));
}), qx = u.forwardRef((e, t) => {
  var n, r;
  let o = Ue(), s = u.useRef(null), i = u.useContext(xl), c = sr(), l = vl(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i?.forceMount;
  rn(() => {
    if (!d) return c.item(o, i?.id);
  }, [d]);
  let m = yl(o, s, [e.value, e.children, s], e.keywords), f = Ks(), h = Ht((w) => w.value && w.value === m.current), p = Ht((w) => d || c.filter() === !1 ? !0 : w.search ? w.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let w = s.current;
    if (!(!w || e.disabled)) return w.addEventListener(hs, b), () => w.removeEventListener(hs, b);
  }, [p, e.onSelect, e.disabled]);
  function b() {
    var w, E;
    g(), (E = (w = l.current).onSelect) == null || E.call(w, m.current);
  }
  function g() {
    f.setState("value", m.current, !0);
  }
  if (!p) return null;
  let { disabled: x, value: v, onSelect: y, forceMount: k, keywords: M, ...N } = e;
  return u.createElement(ct.div, { ref: Et(s, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!h, "data-disabled": !!x, "data-selected": !!h, onPointerMove: x || c.getDisablePointerSelection() ? void 0 : g, onClick: x ? void 0 : b }, e.children);
}), Kx = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, i = Ue(), c = u.useRef(null), l = u.useRef(null), d = Ue(), m = sr(), f = Ht((p) => o || m.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(i) : !0);
  rn(() => m.group(i), []), yl(i, c, [e.value, e.heading, l]);
  let h = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(ct.div, { ref: Et(c, t), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), ao(e, (p) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(xl.Provider, { value: h }, p))));
}), Xx = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), s = Ht((i) => !i.search);
  return !n && !s ? null : u.createElement(ct.div, { ref: Et(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), Qx = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Ks(), i = Ht((d) => d.search), c = Ht((d) => d.selectedItemId), l = sr();
  return u.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), u.createElement(ct.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": c, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || s.setState("search", d.target.value), n?.(d.target.value);
  } });
}), Zx = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = u.useRef(null), i = u.useRef(null), c = Ht((d) => d.selectedItemId), l = sr();
  return u.useEffect(() => {
    if (i.current && s.current) {
      let d = i.current, m = s.current, f, h = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let p = d.offsetHeight;
          m.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return h.observe(d), () => {
        cancelAnimationFrame(f), h.unobserve(d);
      };
    }
  }, []), u.createElement(ct.div, { ref: Et(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": c, "aria-label": r, id: l.listId }, ao(e, (d) => u.createElement("div", { ref: Et(i, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), Jx = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: i, ...c } = e;
  return u.createElement(Hs, { open: n, onOpenChange: r }, u.createElement(Gs, { container: i }, u.createElement(Vs, { "cmdk-overlay": "", className: o }), u.createElement(Us, { "aria-label": e.label, "cmdk-dialog": "", className: s }, u.createElement(bl, { ref: t, ...c }))));
}), eb = u.forwardRef((e, t) => Ht((n) => n.filtered.count === 0) ? u.createElement(ct.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), tb = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return u.createElement(ct.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ao(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), _n = Object.assign(bl, { List: Zx, Item: qx, Input: Qx, Group: Kx, Separator: Xx, Dialog: Jx, Empty: eb, Loading: tb });
function nb(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function rb(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function vl(e) {
  let t = u.useRef(e);
  return rn(() => {
    t.current = e;
  }), t;
}
var rn = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function vn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ht(e) {
  let t = Ks(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function yl(e, t, n, r = []) {
  let o = u.useRef(), s = sr();
  return rn(() => {
    var i;
    let c = (() => {
      var d;
      for (let m of n) {
        if (typeof m == "string") return m.trim();
        if (typeof m == "object" && "current" in m) return m.current ? (d = m.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    s.value(e, c, l), (i = t.current) == null || i.setAttribute(bn, c), o.current = c;
  }), o;
}
var ob = () => {
  let [e, t] = u.useState(), n = vn(() => /* @__PURE__ */ new Map());
  return rn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function sb(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ao({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(sb(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var ab = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function wl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function kl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wl(e)) && (r && (r += " "), r += t);
  return r;
}
const ib = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, cb = (e, t) => ({
  classGroupId: e,
  validator: t
}), Cl = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Br = "-", si = [], lb = "arbitrary..", ub = (e) => {
  const t = fb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return db(i);
      const c = i.split(Br), l = c[0] === "" && c.length > 1 ? 1 : 0;
      return Ml(c, l, t);
    },
    getConflictingClassGroupIds: (i, c) => {
      if (c) {
        const l = r[i], d = n[i];
        return l ? d ? ib(d, l) : l : d || si;
      }
      return n[i] || si;
    }
  };
}, Ml = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const d = Ml(e, t + 1, s);
    if (d) return d;
  }
  const i = n.validators;
  if (i === null)
    return;
  const c = t === 0 ? e.join(Br) : e.slice(t).join(Br), l = i.length;
  for (let d = 0; d < l; d++) {
    const m = i[d];
    if (m.validator(c))
      return m.classGroupId;
  }
}, db = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? lb + r : void 0;
})(), fb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return mb(n, t);
}, mb = (e, t) => {
  const n = Cl();
  for (const r in e) {
    const o = e[r];
    Xs(o, n, r, t);
  }
  return n;
}, Xs = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    hb(i, t, n, r);
  }
}, hb = (e, t, n, r) => {
  if (typeof e == "string") {
    pb(e, t, n);
    return;
  }
  if (typeof e == "function") {
    gb(e, t, n, r);
    return;
  }
  xb(e, t, n, r);
}, pb = (e, t, n) => {
  const r = e === "" ? t : Nl(t, e);
  r.classGroupId = n;
}, gb = (e, t, n, r) => {
  if (bb(e)) {
    Xs(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(cb(n, e));
}, xb = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [c, l] = o[i];
    Xs(l, Nl(t, c), n, r);
  }
}, Nl = (e, t) => {
  let n = e;
  const r = t.split(Br), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let c = n.nextPart.get(i);
    c || (c = Cl(), n.nextPart.set(i, c)), n = c;
  }
  return n;
}, bb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, vb = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = r[s]) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : o(s, i);
    }
  };
}, ps = "!", ai = ":", yb = [], ii = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), wb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, c = 0, l = 0, d;
    const m = o.length;
    for (let g = 0; g < m; g++) {
      const x = o[g];
      if (i === 0 && c === 0) {
        if (x === ai) {
          s.push(o.slice(l, g)), l = g + 1;
          continue;
        }
        if (x === "/") {
          d = g;
          continue;
        }
      }
      x === "[" ? i++ : x === "]" ? i-- : x === "(" ? c++ : x === ")" && c--;
    }
    const f = s.length === 0 ? o : o.slice(l);
    let h = f, p = !1;
    f.endsWith(ps) ? (h = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(ps) && (h = f.slice(1), p = !0)
    );
    const b = d && d > l ? d - l : void 0;
    return ii(s, p, h, b);
  };
  if (t) {
    const o = t + ai, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : ii(yb, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, kb = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], c = i[0] === "[", l = t.has(i);
      c || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Cb = (e) => ({
  cache: vb(e.cacheSize),
  parseClassName: wb(e),
  sortModifiers: kb(e),
  ...ub(e)
}), Mb = /\s+/, Nb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], c = e.trim().split(Mb);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const m = c[d], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: g
    } = n(m);
    if (f) {
      l = m + (l.length > 0 ? " " + l : l);
      continue;
    }
    let x = !!g, v = r(x ? b.substring(0, g) : b);
    if (!v) {
      if (!x) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = r(b), !v) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const y = h.length === 0 ? "" : h.length === 1 ? h[0] : s(h).join(":"), k = p ? y + ps : y, M = k + v;
    if (i.indexOf(M) > -1)
      continue;
    i.push(M);
    const N = o(v, x);
    for (let w = 0; w < N.length; ++w) {
      const E = N[w];
      i.push(k + E);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Eb = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = El(n)) && (o && (o += " "), o += r);
  return o;
}, El = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = El(e[r])) && (n && (n += " "), n += t);
  return n;
}, Db = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const d = t.reduce((m, f) => f(m), e());
    return n = Cb(d), r = n.cache.get, o = n.cache.set, s = c, c(l);
  }, c = (l) => {
    const d = r(l);
    if (d)
      return d;
    const m = Nb(l, n);
    return o(l, m), m;
  };
  return s = i, (...l) => s(Eb(...l));
}, Sb = [], Fe = (e) => {
  const t = (n) => n[e] || Sb;
  return t.isThemeGetter = !0, t;
}, Dl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jb = /^\d+\/\d+$/, Tb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _b = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ob = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Rb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mn = (e) => jb.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Yt = (e) => !!e && Number.isInteger(Number(e)), $o = (e) => e.endsWith("%") && ae(e.slice(0, -1)), _t = (e) => Tb.test(e), Ab = () => !0, Ib = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _b.test(e) && !Ob.test(e)
), jl = () => !1, Fb = (e) => Rb.test(e), Wb = (e) => Pb.test(e), Lb = (e) => !K(e) && !X(e), $b = (e) => On(e, Ol, jl), K = (e) => Dl.test(e), Qt = (e) => On(e, Rl, Ib), zo = (e) => On(e, Gb, ae), ci = (e) => On(e, Tl, jl), zb = (e) => On(e, _l, Wb), kr = (e) => On(e, Pl, Fb), X = (e) => Sl.test(e), Yn = (e) => Rn(e, Rl), Yb = (e) => Rn(e, Vb), li = (e) => Rn(e, Tl), Bb = (e) => Rn(e, Ol), Hb = (e) => Rn(e, _l), Cr = (e) => Rn(e, Pl, !0), On = (e, t, n) => {
  const r = Dl.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Rn = (e, t, n = !1) => {
  const r = Sl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Tl = (e) => e === "position" || e === "percentage", _l = (e) => e === "image" || e === "url", Ol = (e) => e === "length" || e === "size" || e === "bg-size", Rl = (e) => e === "length", Gb = (e) => e === "number", Vb = (e) => e === "family-name", Pl = (e) => e === "shadow", Ub = () => {
  const e = Fe("color"), t = Fe("font"), n = Fe("text"), r = Fe("font-weight"), o = Fe("tracking"), s = Fe("leading"), i = Fe("breakpoint"), c = Fe("container"), l = Fe("spacing"), d = Fe("radius"), m = Fe("shadow"), f = Fe("inset-shadow"), h = Fe("text-shadow"), p = Fe("drop-shadow"), b = Fe("blur"), g = Fe("perspective"), x = Fe("aspect"), v = Fe("ease"), y = Fe("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], N = () => [...M(), X, K], w = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], D = () => [X, K, l], T = () => [mn, "full", "auto", ...D()], P = () => [Yt, "none", "subgrid", X, K], L = () => ["auto", {
    span: ["full", Yt, X, K]
  }, Yt, X, K], z = () => [Yt, "auto", X, K], H = () => ["auto", "min", "max", "fr", X, K], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...D()], _ = () => [mn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()], O = () => [e, X, K], R = () => [...M(), li, ci, {
    position: [X, K]
  }], $ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], C = () => ["auto", "cover", "contain", Bb, $b, {
    size: [X, K]
  }], S = () => [$o, Yn, Qt], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    X,
    K
  ], Y = () => ["", ae, Yn, Qt], B = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [ae, $o, li, ci], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    X,
    K
  ], ne = () => ["none", ae, X, K], ue = () => ["none", ae, X, K], We = () => [ae, X, K], Oe = () => [mn, "full", ...D()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_t],
      breakpoint: [_t],
      color: [Ab],
      container: [_t],
      "drop-shadow": [_t],
      ease: ["in", "out", "in-out"],
      font: [Lb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_t],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_t],
      shadow: [_t],
      spacing: ["px", ae],
      text: [_t],
      "text-shadow": [_t],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", mn, K, X, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, K, X, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: w()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": w()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": w()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Yt, "auto", X, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [mn, "full", "auto", c, ...D()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, mn, "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, X, K]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, X, K]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Yt, "first", "last", "none", X, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": P()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: L()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": P()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: L()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: D()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": D()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": D()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...G(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": G()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: D()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: D()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: D()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: D()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: D()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: D()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: D()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: D()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: D()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": D()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": D()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: _()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ..._()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ..._()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ..._()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ..._()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ..._()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ..._()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Yn, Qt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, X, zo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", $o, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yb, K, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, X, K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", X, zo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...D()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, K]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", X, K]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", X, Qt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", X, K]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, K]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", X, K]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: R()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: $()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: C()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Yt, X, K],
          radial: ["", X, K],
          conic: [Yt, X, K]
        }, Hb, zb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: S()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: F()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": F()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": F()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": F()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": F()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": F()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": F()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": F()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": F()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": F()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": F()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": F()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": F()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": F()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": F()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Y()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Y()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...B(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, X, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Yn, Qt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: O()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          Cr,
          kr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Cr, kr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Y()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, Qt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Y()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": O()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Cr, kr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, X, K]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, K]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": M()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": O()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: R()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: $()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: C()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", X, K]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          K
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, X, K]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, X, K]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Cr,
          kr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": O()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, X, K]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, X, K]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, X, K]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, X, K]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, X, K]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          X,
          K
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, X, K]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, X, K]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, X, K]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, X, K]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, X, K]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, X, K]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, X, K]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, X, K]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": D()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": D()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": D()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, K]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", X, K]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, X, K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, X, K]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, X, K]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, X, K]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ue()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ue()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ue()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ue()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: We()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": We()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": We()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, K, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Oe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: O()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: O()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, K]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", X, K]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Yn, Qt, zo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, qb = /* @__PURE__ */ Db(Ub);
function j(...e) {
  return qb(kl(e));
}
var Kb = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Xb = "VisuallyHidden", Al = u.forwardRef(
  (e, t) => /* @__PURE__ */ a.jsx(
    ke.span,
    {
      ...e,
      ref: t,
      style: { ...Kb, ...e.style }
    }
  )
);
Al.displayName = Xb;
var Qb = Al;
function Il(e) {
  const t = e + "CollectionProvider", [n, r] = St(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: x, children: v } = g, y = V.useRef(null), k = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a.jsx(o, { scope: x, itemMap: k, collectionRef: y, children: v });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ En(c), d = V.forwardRef(
    (g, x) => {
      const { scope: v, children: y } = g, k = s(c, v), M = Se(x, k.collectionRef);
      return /* @__PURE__ */ a.jsx(l, { ref: M, children: y });
    }
  );
  d.displayName = c;
  const m = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ En(m), p = V.forwardRef(
    (g, x) => {
      const { scope: v, children: y, ...k } = g, M = V.useRef(null), N = Se(x, M), w = s(m, v);
      return V.useEffect(() => (w.itemMap.set(M, { ref: M, ...k }), () => {
        w.itemMap.delete(M);
      })), /* @__PURE__ */ a.jsx(h, { [f]: "", ref: N, children: y });
    }
  );
  p.displayName = m;
  function b(g) {
    const x = s(e + "CollectionConsumer", g);
    return V.useCallback(() => {
      const y = x.collectionRef.current;
      if (!y) return [];
      const k = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (w, E) => k.indexOf(w.ref.current) - k.indexOf(E.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: p },
    b,
    r
  ];
}
var io = "Collapsible", [Zb] = St(io), [Jb, Qs] = Zb(io), Fl = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...c
    } = e, [l, d] = Ut({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: io
    });
    return /* @__PURE__ */ a.jsx(
      Jb,
      {
        scope: n,
        disabled: s,
        contentId: Ue(),
        open: l,
        onOpenToggle: u.useCallback(() => d((m) => !m), [d]),
        children: /* @__PURE__ */ a.jsx(
          ke.div,
          {
            "data-state": Js(l),
            "data-disabled": s ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Fl.displayName = io;
var Wl = "CollapsibleTrigger", Ll = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Qs(Wl, n);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Js(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ll.displayName = Wl;
var Zs = "CollapsibleContent", $l = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Qs(Zs, e.__scopeCollapsible);
    return /* @__PURE__ */ a.jsx(nt, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ a.jsx(ev, { ...r, ref: t, present: s }) });
  }
);
$l.displayName = Zs;
var ev = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = Qs(Zs, n), [c, l] = u.useState(r), d = u.useRef(null), m = Se(t, d), f = u.useRef(0), h = f.current, p = u.useRef(0), b = p.current, g = i.open || c, x = u.useRef(g), v = u.useRef(void 0);
  return u.useEffect(() => {
    const y = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), it(() => {
    const y = d.current;
    if (y) {
      v.current = v.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const k = y.getBoundingClientRect();
      f.current = k.height, p.current = k.width, x.current || (y.style.transitionDuration = v.current.transitionDuration, y.style.animationName = v.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ a.jsx(
    ke.div,
    {
      "data-state": Js(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !g,
      ...s,
      ref: m,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: g && o
    }
  );
});
function Js(e) {
  return e ? "open" : "closed";
}
var tv = Fl, nv = u.createContext(void 0);
function zl(e) {
  const t = u.useContext(nv);
  return e || t || "ltr";
}
var Mr = { exports: {} }, Yo = {};
var ui;
function rv() {
  if (ui) return Yo;
  ui = 1;
  var e = V;
  function t(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function c(f, h) {
    var p = h(), b = r({ inst: { value: p, getSnapshot: h } }), g = b[0].inst, x = b[1];
    return s(
      function() {
        g.value = p, g.getSnapshot = h, l(g) && x({ inst: g });
      },
      [f, p, h]
    ), o(
      function() {
        return l(g) && x({ inst: g }), f(function() {
          l(g) && x({ inst: g });
        });
      },
      [f]
    ), i(p), p;
  }
  function l(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var p = h();
      return !n(f, p);
    } catch {
      return !0;
    }
  }
  function d(f, h) {
    return h();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : c;
  return Yo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Yo;
}
var Bo = {};
var di;
function ov() {
  return di || (di = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p, b) {
      return p === b && (p !== 0 || 1 / p === 1 / b) || p !== p && b !== b;
    }
    function t(p, b) {
      m || o.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = b();
      if (!f) {
        var x = b();
        s(g, x) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      x = i({
        inst: { value: g, getSnapshot: b }
      });
      var v = x[0].inst, y = x[1];
      return l(
        function() {
          v.value = g, v.getSnapshot = b, n(v) && y({ inst: v });
        },
        [p, g, b]
      ), c(
        function() {
          return n(v) && y({ inst: v }), p(function() {
            n(v) && y({ inst: v });
          });
        },
        [p]
      ), d(g), g;
    }
    function n(p) {
      var b = p.getSnapshot;
      p = p.value;
      try {
        var g = b();
        return !s(p, g);
      } catch {
        return !0;
      }
    }
    function r(p, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = V, s = typeof Object.is == "function" ? Object.is : e, i = o.useState, c = o.useEffect, l = o.useLayoutEffect, d = o.useDebugValue, m = !1, f = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Bo.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Bo;
}
var fi;
function sv() {
  return fi || (fi = 1, process.env.NODE_ENV === "production" ? Mr.exports = rv() : Mr.exports = ov()), Mr.exports;
}
var av = sv();
function iv() {
  return av.useSyncExternalStore(
    cv,
    () => !0,
    () => !1
  );
}
function cv() {
  return () => {
  };
}
function lv(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Yl(e) {
  const [t, n] = u.useState(void 0);
  return it(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, c;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          i = d.inlineSize, c = d.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        n({ width: i, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
const uv = ["top", "right", "bottom", "left"], Gt = Math.min, Je = Math.max, Hr = Math.round, Nr = Math.floor, Nt = (e) => ({
  x: e,
  y: e
}), dv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, fv = {
  start: "end",
  end: "start"
};
function gs(e, t, n) {
  return Je(e, Gt(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $t(e) {
  return e.split("-")[0];
}
function Pn(e) {
  return e.split("-")[1];
}
function ea(e) {
  return e === "x" ? "y" : "x";
}
function ta(e) {
  return e === "y" ? "height" : "width";
}
const mv = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ct(e) {
  return mv.has($t(e)) ? "y" : "x";
}
function na(e) {
  return ea(Ct(e));
}
function hv(e, t, n) {
  n === void 0 && (n = !1);
  const r = Pn(e), o = na(e), s = ta(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Gr(i)), [i, Gr(i)];
}
function pv(e) {
  const t = Gr(e);
  return [xs(e), t, xs(t)];
}
function xs(e) {
  return e.replace(/start|end/g, (t) => fv[t]);
}
const mi = ["left", "right"], hi = ["right", "left"], gv = ["top", "bottom"], xv = ["bottom", "top"];
function bv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? hi : mi : t ? mi : hi;
    case "left":
    case "right":
      return t ? gv : xv;
    default:
      return [];
  }
}
function vv(e, t, n, r) {
  const o = Pn(e);
  let s = bv($t(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(xs)))), s;
}
function Gr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dv[t]);
}
function yv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bl(e) {
  return typeof e != "number" ? yv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function pi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ct(t), i = na(t), c = ta(i), l = $t(t), d = s === "y", m = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[c] / 2 - o[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Pn(t)) {
    case "start":
      p[i] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      p[i] += h * (n && d ? -1 : 1);
      break;
  }
  return p;
}
const wv = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: f
  } = pi(d, r, l), h = r, p = {}, b = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: x,
      fn: v
    } = c[g], {
      x: y,
      y: k,
      data: M,
      reset: N
    } = await v({
      x: m,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, f = k ?? f, p = {
      ...p,
      [x]: {
        ...p[x],
        ...M
      }
    }, N && b <= 50 && (b++, typeof N == "object" && (N.placement && (h = N.placement), N.rects && (d = N.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: m,
      y: f
    } = pi(d, h, l)), g = -1);
  }
  return {
    x: m,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Kn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: c,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = Lt(t, e), b = Bl(p), x = c[h ? f === "floating" ? "reference" : "floating" : f], v = Vr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: m,
    strategy: l
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), M = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Vr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: k,
    strategy: l
  }) : y);
  return {
    top: (v.top - N.top + b.top) / M.y,
    bottom: (N.bottom - v.bottom + b.bottom) / M.y,
    left: (v.left - N.left + b.left) / M.x,
    right: (N.right - v.right + b.right) / M.x
  };
}
const kv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: l
    } = t, {
      element: d,
      padding: m = 0
    } = Lt(e, t) || {};
    if (d == null)
      return {};
    const f = Bl(m), h = {
      x: n,
      y: r
    }, p = na(o), b = ta(p), g = await i.getDimensions(d), x = p === "y", v = x ? "top" : "left", y = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", M = s.reference[b] + s.reference[p] - h[p] - s.floating[b], N = h[p] - s.reference[p], w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let E = w ? w[k] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(w))) && (E = c.floating[k] || s.floating[b]);
    const D = M / 2 - N / 2, T = E / 2 - g[b] / 2 - 1, P = Gt(f[v], T), L = Gt(f[y], T), z = P, H = E - g[b] - L, G = E / 2 - g[b] / 2 + D, q = gs(z, G, H), I = !l.arrow && Pn(o) != null && G !== q && s.reference[b] / 2 - (G < z ? P : L) - g[b] / 2 < 0, _ = I ? G < z ? G - z : G - H : 0;
    return {
      [p]: h[p] + _,
      data: {
        [p]: q,
        centerOffset: G - q - _,
        ...I && {
          alignmentOffset: _
        }
      },
      reset: I
    };
  }
}), Cv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: l,
        elements: d
      } = t, {
        mainAxis: m = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: g = !0,
        ...x
      } = Lt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const v = $t(o), y = Ct(c), k = $t(c) === c, M = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), N = h || (k || !g ? [Gr(c)] : pv(c)), w = b !== "none";
      !h && w && N.push(...vv(c, g, b, M));
      const E = [c, ...N], D = await Kn(t, x), T = [];
      let P = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && T.push(D[v]), f) {
        const G = hv(o, i, M);
        T.push(D[G[0]], D[G[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: T
      }], !T.every((G) => G <= 0)) {
        var L, z;
        const G = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, q = E[G];
        if (q && (!(f === "alignment" ? y !== Ct(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((O) => Ct(O.placement) === y ? O.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: P
            },
            reset: {
              placement: q
            }
          };
        let I = (z = P.filter((_) => _.overflows[0] <= 0).sort((_, O) => _.overflows[1] - O.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var H;
              const _ = (H = P.filter((O) => {
                if (w) {
                  const R = Ct(O.placement);
                  return R === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  R === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((R) => R > 0).reduce((R, $) => R + $, 0)]).sort((O, R) => O[1] - R[1])[0]) == null ? void 0 : H[0];
              _ && (I = _);
              break;
            }
            case "initialPlacement":
              I = c;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function gi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xi(e) {
  return uv.some((t) => e[t] >= 0);
}
const Mv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Lt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Kn(t, {
            ...o,
            elementContext: "reference"
          }), i = gi(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: xi(i)
            }
          };
        }
        case "escaped": {
          const s = await Kn(t, {
            ...o,
            altBoundary: !0
          }), i = gi(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: xi(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Hl = /* @__PURE__ */ new Set(["left", "top"]);
async function Nv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = $t(n), c = Pn(n), l = Ct(n) === "y", d = Hl.has(i) ? -1 : 1, m = s && l ? -1 : 1, f = Lt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof b == "number" && (p = c === "end" ? b * -1 : b), l ? {
    x: p * m,
    y: h * d
  } : {
    x: h * d,
    y: p * m
  };
}
const Ev = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: c
      } = t, l = await Nv(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Dv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: v,
              y
            } = x;
            return {
              x: v,
              y
            };
          }
        },
        ...l
      } = Lt(e, t), d = {
        x: n,
        y: r
      }, m = await Kn(t, l), f = Ct($t(o)), h = ea(f);
      let p = d[h], b = d[f];
      if (s) {
        const x = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", y = p + m[x], k = p - m[v];
        p = gs(y, p, k);
      }
      if (i) {
        const x = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", y = b + m[x], k = b - m[v];
        b = gs(y, b, k);
      }
      const g = c.fn({
        ...t,
        [h]: p,
        [f]: b
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: s,
            [f]: i
          }
        }
      };
    }
  };
}, Sv = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = Lt(e, t), m = {
        x: n,
        y: r
      }, f = Ct(o), h = ea(f);
      let p = m[h], b = m[f];
      const g = Lt(c, t), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const k = h === "y" ? "height" : "width", M = s.reference[h] - s.floating[k] + x.mainAxis, N = s.reference[h] + s.reference[k] - x.mainAxis;
        p < M ? p = M : p > N && (p = N);
      }
      if (d) {
        var v, y;
        const k = h === "y" ? "width" : "height", M = Hl.has($t(o)), N = s.reference[f] - s.floating[k] + (M && ((v = i.offset) == null ? void 0 : v[f]) || 0) + (M ? 0 : x.crossAxis), w = s.reference[f] + s.reference[k] + (M ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (M ? x.crossAxis : 0);
        b < N ? b = N : b > w && (b = w);
      }
      return {
        [h]: p,
        [f]: b
      };
    }
  };
}, jv = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...d
      } = Lt(e, t), m = await Kn(t, d), f = $t(o), h = Pn(o), p = Ct(o) === "y", {
        width: b,
        height: g
      } = s.floating;
      let x, v;
      f === "top" || f === "bottom" ? (x = f, v = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (v = f, x = h === "end" ? "top" : "bottom");
      const y = g - m.top - m.bottom, k = b - m.left - m.right, M = Gt(g - m[x], y), N = Gt(b - m[v], k), w = !t.middlewareData.shift;
      let E = M, D = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (D = k), (r = t.middlewareData.shift) != null && r.enabled.y && (E = y), w && !h) {
        const P = Je(m.left, 0), L = Je(m.right, 0), z = Je(m.top, 0), H = Je(m.bottom, 0);
        p ? D = b - 2 * (P !== 0 || L !== 0 ? P + L : Je(m.left, m.right)) : E = g - 2 * (z !== 0 || H !== 0 ? z + H : Je(m.top, m.bottom));
      }
      await l({
        ...t,
        availableWidth: D,
        availableHeight: E
      });
      const T = await i.getDimensions(c.floating);
      return b !== T.width || g !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function co() {
  return typeof window < "u";
}
function An(e) {
  return Gl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jt(e) {
  var t;
  return (t = (Gl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gl(e) {
  return co() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function ht(e) {
  return co() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function Dt(e) {
  return co() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function bi(e) {
  return !co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
const Tv = /* @__PURE__ */ new Set(["inline", "contents"]);
function ar(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Tv.has(o);
}
const _v = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ov(e) {
  return _v.has(An(e));
}
const Rv = [":popover-open", ":modal"];
function lo(e) {
  return Rv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Pv = ["transform", "translate", "scale", "rotate", "perspective"], Av = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Iv = ["paint", "layout", "strict", "content"];
function ra(e) {
  const t = oa(), n = ht(e) ? pt(e) : e;
  return Pv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Av.some((r) => (n.willChange || "").includes(r)) || Iv.some((r) => (n.contain || "").includes(r));
}
function Fv(e) {
  let t = Vt(e);
  for (; Dt(t) && !Dn(t); ) {
    if (ra(t))
      return t;
    if (lo(t))
      return null;
    t = Vt(t);
  }
  return null;
}
function oa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Wv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Dn(e) {
  return Wv.has(An(e));
}
function pt(e) {
  return et(e).getComputedStyle(e);
}
function uo(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vt(e) {
  if (An(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bi(e) && e.host || // Fallback.
    jt(e)
  );
  return bi(t) ? t.host : t;
}
function Vl(e) {
  const t = Vt(e);
  return Dn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dt(t) && ar(t) ? t : Vl(t);
}
function Xn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Vl(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = et(o);
  if (s) {
    const c = bs(i);
    return t.concat(i, i.visualViewport || [], ar(o) ? o : [], c && n ? Xn(c) : []);
  }
  return t.concat(o, Xn(o, [], n));
}
function bs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ul(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Dt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, c = Hr(n) !== s || Hr(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function sa(e) {
  return ht(e) ? e : e.contextElement;
}
function Cn(e) {
  const t = sa(e);
  if (!Dt(t))
    return Nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ul(t);
  let i = (s ? Hr(n.width) : n.width) / r, c = (s ? Hr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const Lv = /* @__PURE__ */ Nt(0);
function ql(e) {
  const t = et(e);
  return !oa() || !t.visualViewport ? Lv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $v(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t;
}
function on(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = sa(e);
  let i = Nt(1);
  t && (r ? ht(r) && (i = Cn(r)) : i = Cn(e));
  const c = $v(s, n, r) ? ql(s) : Nt(0);
  let l = (o.left + c.x) / i.x, d = (o.top + c.y) / i.y, m = o.width / i.x, f = o.height / i.y;
  if (s) {
    const h = et(s), p = r && ht(r) ? et(r) : r;
    let b = h, g = bs(b);
    for (; g && r && p !== b; ) {
      const x = Cn(g), v = g.getBoundingClientRect(), y = pt(g), k = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * x.x, M = v.top + (g.clientTop + parseFloat(y.paddingTop)) * x.y;
      l *= x.x, d *= x.y, m *= x.x, f *= x.y, l += k, d += M, b = et(g), g = bs(b);
    }
  }
  return Vr({
    width: m,
    height: f,
    x: l,
    y: d
  });
}
function fo(e, t) {
  const n = uo(e).scrollLeft;
  return t ? t.left + n : on(jt(e)).left + n;
}
function Kl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - fo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function zv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = jt(r), c = t ? lo(t.floating) : !1;
  if (r === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Nt(1);
  const m = Nt(0), f = Dt(r);
  if ((f || !f && !s) && ((An(r) !== "body" || ar(i)) && (l = uo(r)), Dt(r))) {
    const p = on(r);
    d = Cn(r), m.x = p.x + r.clientLeft, m.y = p.y + r.clientTop;
  }
  const h = i && !f && !s ? Kl(i, l) : Nt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + m.x + h.x,
    y: n.y * d.y - l.scrollTop * d.y + m.y + h.y
  };
}
function Yv(e) {
  return Array.from(e.getClientRects());
}
function Bv(e) {
  const t = jt(e), n = uo(e), r = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + fo(e);
  const c = -n.scrollTop;
  return pt(r).direction === "rtl" && (i += Je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
const vi = 25;
function Hv(e, t) {
  const n = et(e), r = jt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const m = oa();
    (!m || m && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  const d = fo(r);
  if (d <= 0) {
    const m = r.ownerDocument, f = m.body, h = getComputedStyle(f), p = m.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - f.clientWidth - p);
    b <= vi && (s -= b);
  } else d <= vi && (s += d);
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
const Gv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Vv(e, t) {
  const n = on(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Dt(e) ? Cn(e) : Nt(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = o * s.x, d = r * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: d
  };
}
function yi(e, t, n) {
  let r;
  if (t === "viewport")
    r = Hv(e, n);
  else if (t === "document")
    r = Bv(jt(e));
  else if (ht(t))
    r = Vv(t, n);
  else {
    const o = ql(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Vr(r);
}
function Xl(e, t) {
  const n = Vt(e);
  return n === t || !ht(n) || Dn(n) ? !1 : pt(n).position === "fixed" || Xl(n, t);
}
function Uv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xn(e, [], !1).filter((c) => ht(c) && An(c) !== "body"), o = null;
  const s = pt(e).position === "fixed";
  let i = s ? Vt(e) : e;
  for (; ht(i) && !Dn(i); ) {
    const c = pt(i), l = ra(i);
    !l && c.position === "fixed" && (o = null), (s ? !l && !o : !l && c.position === "static" && !!o && Gv.has(o.position) || ar(i) && !l && Xl(e, i)) ? r = r.filter((m) => m !== i) : o = c, i = Vt(i);
  }
  return t.set(e, r), r;
}
function qv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? lo(t) ? [] : Uv(t, this._c) : [].concat(n), r], c = i[0], l = i.reduce((d, m) => {
    const f = yi(t, m, o);
    return d.top = Je(f.top, d.top), d.right = Gt(f.right, d.right), d.bottom = Gt(f.bottom, d.bottom), d.left = Je(f.left, d.left), d;
  }, yi(t, c, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Kv(e) {
  const {
    width: t,
    height: n
  } = Ul(e);
  return {
    width: t,
    height: n
  };
}
function Xv(e, t, n) {
  const r = Dt(t), o = jt(t), s = n === "fixed", i = on(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Nt(0);
  function d() {
    l.x = fo(o);
  }
  if (r || !r && !s)
    if ((An(t) !== "body" || ar(o)) && (c = uo(t)), r) {
      const p = on(t, !0, s, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const m = o && !r && !s ? Kl(o, c) : Nt(0), f = i.left + c.scrollLeft - l.x - m.x, h = i.top + c.scrollTop - l.y - m.y;
  return {
    x: f,
    y: h,
    width: i.width,
    height: i.height
  };
}
function Ho(e) {
  return pt(e).position === "static";
}
function wi(e, t) {
  if (!Dt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return jt(e) === n && (n = n.ownerDocument.body), n;
}
function Ql(e, t) {
  const n = et(e);
  if (lo(e))
    return n;
  if (!Dt(e)) {
    let o = Vt(e);
    for (; o && !Dn(o); ) {
      if (ht(o) && !Ho(o))
        return o;
      o = Vt(o);
    }
    return n;
  }
  let r = wi(e, t);
  for (; r && Ov(r) && Ho(r); )
    r = wi(r, t);
  return r && Dn(r) && Ho(r) && !ra(r) ? n : r || Fv(e) || n;
}
const Qv = async function(e) {
  const t = this.getOffsetParent || Ql, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Xv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Zv(e) {
  return pt(e).direction === "rtl";
}
const Jv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zv,
  getDocumentElement: jt,
  getClippingRect: qv,
  getOffsetParent: Ql,
  getElementRects: Qv,
  getClientRects: Yv,
  getDimensions: Kv,
  getScale: Cn,
  isElement: ht,
  isRTL: Zv
};
function Zl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ey(e, t) {
  let n = null, r;
  const o = jt(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), s();
    const d = e.getBoundingClientRect(), {
      left: m,
      top: f,
      width: h,
      height: p
    } = d;
    if (c || t(), !h || !p)
      return;
    const b = Nr(f), g = Nr(o.clientWidth - (m + h)), x = Nr(o.clientHeight - (f + p)), v = Nr(m), k = {
      rootMargin: -b + "px " + -g + "px " + -x + "px " + -v + "px",
      threshold: Je(0, Gt(1, l)) || 1
    };
    let M = !0;
    function N(w) {
      const E = w[0].intersectionRatio;
      if (E !== l) {
        if (!M)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Zl(d, e.getBoundingClientRect()) && i(), M = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, k);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function ty(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = sa(e), m = o || s ? [...d ? Xn(d) : [], ...Xn(t)] : [];
  m.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), s && v.addEventListener("resize", n);
  });
  const f = d && c ? ey(d, n) : null;
  let h = -1, p = null;
  i && (p = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === d && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var k;
      (k = p) == null || k.observe(t);
    })), n();
  }), d && !l && p.observe(d), p.observe(t));
  let b, g = l ? on(e) : null;
  l && x();
  function x() {
    const v = on(e);
    g && !Zl(g, v) && n(), g = v, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var v;
    m.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f?.(), (v = p) == null || v.disconnect(), p = null, l && cancelAnimationFrame(b);
  };
}
const ny = Ev, ry = Dv, oy = Cv, sy = jv, ay = Mv, ki = kv, iy = Sv, cy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Jv,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return wv(e, t, {
    ...o,
    platform: s
  });
};
var ly = typeof document < "u", uy = function() {
}, Fr = ly ? cc : uy;
function Ur(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ur(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ur(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ci(e, t) {
  const n = Jl(e);
  return Math.round(t * n) / n;
}
function Go(e) {
  const t = u.useRef(e);
  return Fr(() => {
    t.current = e;
  }), t;
}
function dy(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: d
  } = e, [m, f] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = u.useState(r);
  Ur(h, r) || p(r);
  const [b, g] = u.useState(null), [x, v] = u.useState(null), y = u.useCallback((O) => {
    O !== w.current && (w.current = O, g(O));
  }, []), k = u.useCallback((O) => {
    O !== E.current && (E.current = O, v(O));
  }, []), M = s || b, N = i || x, w = u.useRef(null), E = u.useRef(null), D = u.useRef(m), T = l != null, P = Go(l), L = Go(o), z = Go(d), H = u.useCallback(() => {
    if (!w.current || !E.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: h
    };
    L.current && (O.platform = L.current), cy(w.current, E.current, O).then((R) => {
      const $ = {
        ...R,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      G.current && !Ur(D.current, $) && (D.current = $, Os.flushSync(() => {
        f($);
      }));
    });
  }, [h, t, n, L, z]);
  Fr(() => {
    d === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [d]);
  const G = u.useRef(!1);
  Fr(() => (G.current = !0, () => {
    G.current = !1;
  }), []), Fr(() => {
    if (M && (w.current = M), N && (E.current = N), M && N) {
      if (P.current)
        return P.current(M, N, H);
      H();
    }
  }, [M, N, H, P, T]);
  const q = u.useMemo(() => ({
    reference: w,
    floating: E,
    setReference: y,
    setFloating: k
  }), [y, k]), I = u.useMemo(() => ({
    reference: M,
    floating: N
  }), [M, N]), _ = u.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return O;
    const R = Ci(I.floating, m.x), $ = Ci(I.floating, m.y);
    return c ? {
      ...O,
      transform: "translate(" + R + "px, " + $ + "px)",
      ...Jl(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: $
    };
  }, [n, c, I.floating, m.x, m.y]);
  return u.useMemo(() => ({
    ...m,
    update: H,
    refs: q,
    elements: I,
    floatingStyles: _
  }), [m, H, q, I, _]);
}
const fy = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ki({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ki({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, my = (e, t) => ({
  ...ny(e),
  options: [e, t]
}), hy = (e, t) => ({
  ...ry(e),
  options: [e, t]
}), py = (e, t) => ({
  ...iy(e),
  options: [e, t]
}), gy = (e, t) => ({
  ...oy(e),
  options: [e, t]
}), xy = (e, t) => ({
  ...sy(e),
  options: [e, t]
}), by = (e, t) => ({
  ...ay(e),
  options: [e, t]
}), vy = (e, t) => ({
  ...fy(e),
  options: [e, t]
});
var yy = "Arrow", eu = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ a.jsx(
    ke.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ a.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
eu.displayName = yy;
var wy = eu, aa = "Popper", [tu, In] = St(aa), [ky, nu] = tu(aa), ru = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ a.jsx(ky, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ru.displayName = aa;
var ou = "PopperAnchor", su = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = nu(ou, n), i = u.useRef(null), c = Se(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = r?.current || i.current, d !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ a.jsx(ke.div, { ...o, ref: c });
  }
);
su.displayName = ou;
var ia = "PopperContent", [Cy, My] = tu(ia), au = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: m = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: b,
      ...g
    } = e, x = nu(ia, n), [v, y] = u.useState(null), k = Se(t, (W) => y(W)), [M, N] = u.useState(null), w = Yl(M), E = w?.width ?? 0, D = w?.height ?? 0, T = r + (s !== "center" ? "-" + s : ""), P = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, L = Array.isArray(d) ? d : [d], z = L.length > 0, H = {
      padding: P,
      boundary: L.filter(Ey),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: z
    }, { refs: G, floatingStyles: q, placement: I, isPositioned: _, middlewareData: O } = dy({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...W) => ty(...W, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        my({ mainAxis: o + D, alignmentAxis: i }),
        l && hy({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? py() : void 0,
          ...H
        }),
        l && gy({ ...H }),
        xy({
          ...H,
          apply: ({ elements: W, rects: Z, availableWidth: ne, availableHeight: ue }) => {
            const { width: We, height: Oe } = Z.reference, He = W.floating.style;
            He.setProperty("--radix-popper-available-width", `${ne}px`), He.setProperty("--radix-popper-available-height", `${ue}px`), He.setProperty("--radix-popper-anchor-width", `${We}px`), He.setProperty("--radix-popper-anchor-height", `${Oe}px`);
          }
        }),
        M && vy({ element: M, padding: c }),
        Dy({ arrowWidth: E, arrowHeight: D }),
        h && by({ strategy: "referenceHidden", ...H })
      ]
    }), [R, $] = lu(I), C = mt(b);
    it(() => {
      _ && C?.();
    }, [_, C]);
    const S = O.arrow?.x, F = O.arrow?.y, Y = O.arrow?.centerOffset !== 0, [B, U] = u.useState();
    return it(() => {
      v && U(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: _ ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            O.transformOrigin?.x,
            O.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...O.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a.jsx(
          Cy,
          {
            scope: n,
            placedSide: R,
            onArrowChange: N,
            arrowX: S,
            arrowY: F,
            shouldHideArrow: Y,
            children: /* @__PURE__ */ a.jsx(
              ke.div,
              {
                "data-side": R,
                "data-align": $,
                ...g,
                ref: k,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: _ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
au.displayName = ia;
var iu = "PopperArrow", Ny = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, cu = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = My(iu, r), i = Ny[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ a.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ a.jsx(
          wy,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
cu.displayName = iu;
function Ey(e) {
  return e !== null;
}
var Dy = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [d, m] = lu(n), f = { start: "0%", center: "50%", end: "100%" }[m], h = (o.arrow?.x ?? 0) + c / 2, p = (o.arrow?.y ?? 0) + l / 2;
    let b = "", g = "";
    return d === "bottom" ? (b = i ? f : `${h}px`, g = `${-l}px`) : d === "top" ? (b = i ? f : `${h}px`, g = `${r.floating.height + l}px`) : d === "right" ? (b = `${-l}px`, g = i ? f : `${p}px`) : d === "left" && (b = `${r.floating.width + l}px`, g = i ? f : `${p}px`), { data: { x: b, y: g } };
  }
});
function lu(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var mo = ru, ho = su, ca = au, la = cu, Vo = "rovingFocusGroup.onEntryFocus", Sy = { bubbles: !1, cancelable: !0 }, ir = "RovingFocusGroup", [vs, uu, jy] = Il(ir), [Ty, du] = St(
  ir,
  [jy]
), [_y, Oy] = Ty(ir), fu = u.forwardRef(
  (e, t) => /* @__PURE__ */ a.jsx(vs.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a.jsx(vs.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a.jsx(Ry, { ...e, ref: t }) }) })
);
fu.displayName = ir;
var Ry = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: m = !1,
    ...f
  } = e, h = u.useRef(null), p = Se(t, h), b = zl(s), [g, x] = Ut({
    prop: i,
    defaultProp: c ?? null,
    onChange: l,
    caller: ir
  }), [v, y] = u.useState(!1), k = mt(d), M = uu(n), N = u.useRef(!1), [w, E] = u.useState(0);
  return u.useEffect(() => {
    const D = h.current;
    if (D)
      return D.addEventListener(Vo, k), () => D.removeEventListener(Vo, k);
  }, [k]), /* @__PURE__ */ a.jsx(
    _y,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: g,
      onItemFocus: u.useCallback(
        (D) => x(D),
        [x]
      ),
      onItemShiftTab: u.useCallback(() => y(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => E((D) => D + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => E((D) => D - 1),
        []
      ),
      children: /* @__PURE__ */ a.jsx(
        ke.div,
        {
          tabIndex: v || w === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: J(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: J(e.onFocus, (D) => {
            const T = !N.current;
            if (D.target === D.currentTarget && T && !v) {
              const P = new CustomEvent(Vo, Sy);
              if (D.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const L = M().filter((I) => I.focusable), z = L.find((I) => I.active), H = L.find((I) => I.id === g), q = [z, H, ...L].filter(
                  Boolean
                ).map((I) => I.ref.current);
                pu(q, m);
              }
            }
            N.current = !1;
          }),
          onBlur: J(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), mu = "RovingFocusGroupItem", hu = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...c
    } = e, l = Ue(), d = s || l, m = Oy(mu, n), f = m.currentTabStopId === d, h = uu(n), { onFocusableItemAdd: p, onFocusableItemRemove: b, currentTabStopId: g } = m;
    return u.useEffect(() => {
      if (r)
        return p(), () => b();
    }, [r, p, b]), /* @__PURE__ */ a.jsx(
      vs.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a.jsx(
          ke.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": m.orientation,
            ...c,
            ref: t,
            onMouseDown: J(e.onMouseDown, (x) => {
              r ? m.onItemFocus(d) : x.preventDefault();
            }),
            onFocus: J(e.onFocus, () => m.onItemFocus(d)),
            onKeyDown: J(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const v = Iy(x, m.orientation, m.dir);
              if (v !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let k = h().filter((M) => M.focusable).map((M) => M.ref.current);
                if (v === "last") k.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && k.reverse();
                  const M = k.indexOf(x.currentTarget);
                  k = m.loop ? Fy(k, M + 1) : k.slice(M + 1);
                }
                setTimeout(() => pu(k));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
hu.displayName = mu;
var Py = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ay(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Iy(e, t, n) {
  const r = Ay(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Py[r];
}
function pu(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Fy(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Wy = fu, Ly = hu, ys = ["Enter", " "], $y = ["ArrowDown", "PageUp", "Home"], gu = ["ArrowUp", "PageDown", "End"], zy = [...$y, ...gu], Yy = {
  ltr: [...ys, "ArrowRight"],
  rtl: [...ys, "ArrowLeft"]
}, By = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, cr = "Menu", [Qn, Hy, Gy] = Il(cr), [cn, xu] = St(cr, [
  Gy,
  In,
  du
]), lr = In(), bu = du(), [vu, qt] = cn(cr), [Vy, ur] = cn(cr), yu = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, c = lr(t), [l, d] = u.useState(null), m = u.useRef(!1), f = mt(s), h = zl(o);
  return u.useEffect(() => {
    const p = () => {
      m.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => m.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a.jsx(mo, { ...c, children: /* @__PURE__ */ a.jsx(
    vu,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ a.jsx(
        Vy,
        {
          scope: t,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: m,
          dir: h,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
yu.displayName = cr;
var Uy = "MenuAnchor", ua = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lr(n);
    return /* @__PURE__ */ a.jsx(ho, { ...o, ...r, ref: t });
  }
);
ua.displayName = Uy;
var da = "MenuPortal", [qy, wu] = cn(da, {
  forceMount: void 0
}), ku = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = qt(da, t);
  return /* @__PURE__ */ a.jsx(qy, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(nt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(or, { asChild: !0, container: o, children: r }) }) });
};
ku.displayName = da;
var at = "MenuContent", [Ky, fa] = cn(at), Cu = u.forwardRef(
  (e, t) => {
    const n = wu(at, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = qt(at, e.__scopeMenu), i = ur(at, e.__scopeMenu);
    return /* @__PURE__ */ a.jsx(Qn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(nt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Qn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ a.jsx(Xy, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(Qy, { ...o, ref: t }) }) }) });
  }
), Xy = u.forwardRef(
  (e, t) => {
    const n = qt(at, e.__scopeMenu), r = u.useRef(null), o = Se(t, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return $s(s);
    }, []), /* @__PURE__ */ a.jsx(
      ma,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: J(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Qy = u.forwardRef((e, t) => {
  const n = qt(at, e.__scopeMenu);
  return /* @__PURE__ */ a.jsx(
    ma,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Zy = /* @__PURE__ */ En("MenuContent.ScrollLock"), ma = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: p,
      disableOutsideScroll: b,
      ...g
    } = e, x = qt(at, n), v = ur(at, n), y = lr(n), k = bu(n), M = Hy(n), [N, w] = u.useState(null), E = u.useRef(null), D = Se(t, E, x.onContentChange), T = u.useRef(0), P = u.useRef(""), L = u.useRef(0), z = u.useRef(null), H = u.useRef("right"), G = u.useRef(0), q = b ? oo : u.Fragment, I = b ? { as: Zy, allowPinchZoom: !0 } : void 0, _ = (R) => {
      const $ = P.current + R, C = M().filter((W) => !W.disabled), S = document.activeElement, F = C.find((W) => W.ref.current === S)?.textValue, Y = C.map((W) => W.textValue), B = uw(Y, $, F), U = C.find((W) => W.textValue === B)?.ref.current;
      (function W(Z) {
        P.current = Z, window.clearTimeout(T.current), Z !== "" && (T.current = window.setTimeout(() => W(""), 1e3));
      })($), U && setTimeout(() => U.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), Ls();
    const O = u.useCallback((R) => H.current === z.current?.side && fw(R, z.current?.area), []);
    return /* @__PURE__ */ a.jsx(
      Ky,
      {
        scope: n,
        searchRef: P,
        onItemEnter: u.useCallback(
          (R) => {
            O(R) && R.preventDefault();
          },
          [O]
        ),
        onItemLeave: u.useCallback(
          (R) => {
            O(R) || (E.current?.focus(), w(null));
          },
          [O]
        ),
        onTriggerLeave: u.useCallback(
          (R) => {
            O(R) && R.preventDefault();
          },
          [O]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: u.useCallback((R) => {
          z.current = R;
        }, []),
        children: /* @__PURE__ */ a.jsx(q, { ...I, children: /* @__PURE__ */ a.jsx(
          no,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: J(s, (R) => {
              R.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ a.jsx(
              rr,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: p,
                children: /* @__PURE__ */ a.jsx(
                  Wy,
                  {
                    asChild: !0,
                    ...k,
                    dir: v.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: w,
                    onEntryFocus: J(l, (R) => {
                      v.isUsingKeyboardRef.current || R.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a.jsx(
                      ca,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": $u(x.open),
                        "data-radix-menu-content": "",
                        dir: v.dir,
                        ...y,
                        ...g,
                        ref: D,
                        style: { outline: "none", ...g.style },
                        onKeyDown: J(g.onKeyDown, (R) => {
                          const C = R.target.closest("[data-radix-menu-content]") === R.currentTarget, S = R.ctrlKey || R.altKey || R.metaKey, F = R.key.length === 1;
                          C && (R.key === "Tab" && R.preventDefault(), !S && F && _(R.key));
                          const Y = E.current;
                          if (R.target !== Y || !zy.includes(R.key)) return;
                          R.preventDefault();
                          const U = M().filter((W) => !W.disabled).map((W) => W.ref.current);
                          gu.includes(R.key) && U.reverse(), cw(U);
                        }),
                        onBlur: J(e.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(T.current), P.current = "");
                        }),
                        onPointerMove: J(
                          e.onPointerMove,
                          Zn((R) => {
                            const $ = R.target, C = G.current !== R.clientX;
                            if (R.currentTarget.contains($) && C) {
                              const S = R.clientX > G.current ? "right" : "left";
                              H.current = S, G.current = R.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Cu.displayName = at;
var Jy = "MenuGroup", ha = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a.jsx(ke.div, { role: "group", ...r, ref: t });
  }
);
ha.displayName = Jy;
var ew = "MenuLabel", Mu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a.jsx(ke.div, { ...r, ref: t });
  }
);
Mu.displayName = ew;
var qr = "MenuItem", Mi = "menu.itemSelect", po = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = u.useRef(null), i = ur(qr, e.__scopeMenu), c = fa(qr, e.__scopeMenu), l = Se(t, s), d = u.useRef(!1), m = () => {
      const f = s.current;
      if (!n && f) {
        const h = new CustomEvent(Mi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Mi, (p) => r?.(p), { once: !0 }), Ic(f, h), h.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ a.jsx(
      Nu,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: J(e.onClick, m),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: J(e.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: J(e.onKeyDown, (f) => {
          const h = c.searchRef.current !== "";
          n || h && f.key === " " || ys.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
po.displayName = qr;
var Nu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = fa(qr, n), c = bu(n), l = u.useRef(null), d = Se(t, l), [m, f] = u.useState(!1), [h, p] = u.useState("");
    return u.useEffect(() => {
      const b = l.current;
      b && p((b.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ a.jsx(
      Qn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ a.jsx(Ly, { asChild: !0, ...c, focusable: !r, children: /* @__PURE__ */ a.jsx(
          ke.div,
          {
            role: "menuitem",
            "data-highlighted": m ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: J(
              e.onPointerMove,
              Zn((b) => {
                r ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: J(
              e.onPointerLeave,
              Zn((b) => i.onItemLeave(b))
            ),
            onFocus: J(e.onFocus, () => f(!0)),
            onBlur: J(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), tw = "MenuCheckboxItem", Eu = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a.jsx(_u, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a.jsx(
      po,
      {
        role: "menuitemcheckbox",
        "aria-checked": Kr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": xa(n),
        onSelect: J(
          o.onSelect,
          () => r?.(Kr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Eu.displayName = tw;
var Du = "MenuRadioGroup", [nw, rw] = cn(
  Du,
  { value: void 0, onValueChange: () => {
  } }
), Su = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = mt(r);
    return /* @__PURE__ */ a.jsx(nw, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ a.jsx(ha, { ...o, ref: t }) });
  }
);
Su.displayName = Du;
var ju = "MenuRadioItem", Tu = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = rw(ju, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ a.jsx(_u, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ a.jsx(
      po,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": xa(s),
        onSelect: J(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Tu.displayName = ju;
var pa = "MenuItemIndicator", [_u, ow] = cn(
  pa,
  { checked: !1 }
), Ou = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = ow(pa, n);
    return /* @__PURE__ */ a.jsx(
      nt,
      {
        present: r || Kr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ a.jsx(
          ke.span,
          {
            ...o,
            ref: t,
            "data-state": xa(s.checked)
          }
        )
      }
    );
  }
);
Ou.displayName = pa;
var sw = "MenuSeparator", Ru = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a.jsx(
      ke.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ru.displayName = sw;
var aw = "MenuArrow", Pu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = lr(n);
    return /* @__PURE__ */ a.jsx(la, { ...o, ...r, ref: t });
  }
);
Pu.displayName = aw;
var ga = "MenuSub", [iw, Au] = cn(ga), Iu = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = qt(ga, t), i = lr(t), [c, l] = u.useState(null), [d, m] = u.useState(null), f = mt(o);
  return u.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ a.jsx(mo, { ...i, children: /* @__PURE__ */ a.jsx(
    vu,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: d,
      onContentChange: m,
      children: /* @__PURE__ */ a.jsx(
        iw,
        {
          scope: t,
          contentId: Ue(),
          triggerId: Ue(),
          trigger: c,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Iu.displayName = ga;
var Gn = "MenuSubTrigger", Fu = u.forwardRef(
  (e, t) => {
    const n = qt(Gn, e.__scopeMenu), r = ur(Gn, e.__scopeMenu), o = Au(Gn, e.__scopeMenu), s = fa(Gn, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: e.__scopeMenu }, m = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => m, [m]), u.useEffect(() => {
      const f = c.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [c, l]), /* @__PURE__ */ a.jsx(ua, { asChild: !0, ...d, children: /* @__PURE__ */ a.jsx(
      Nu,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": $u(n.open),
        ...e,
        ref: Et(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: J(
          e.onPointerMove,
          Zn((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), m();
            }, 100));
          })
        ),
        onPointerLeave: J(
          e.onPointerLeave,
          Zn((f) => {
            m();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const p = n.content?.dataset.side, b = p === "right", g = b ? -5 : 5, x = h[b ? "left" : "right"], v = h[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + g, y: f.clientY },
                  { x, y: h.top },
                  { x: v, y: h.top },
                  { x: v, y: h.bottom },
                  { x, y: h.bottom }
                ],
                side: p
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(f), f.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: J(e.onKeyDown, (f) => {
          const h = s.searchRef.current !== "";
          e.disabled || h && f.key === " " || Yy[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Fu.displayName = Gn;
var Wu = "MenuSubContent", Lu = u.forwardRef(
  (e, t) => {
    const n = wu(at, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = qt(at, e.__scopeMenu), i = ur(at, e.__scopeMenu), c = Au(Wu, e.__scopeMenu), l = u.useRef(null), d = Se(t, l);
    return /* @__PURE__ */ a.jsx(Qn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(nt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Qn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(
      ma,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (m) => {
          i.isUsingKeyboardRef.current && l.current?.focus(), m.preventDefault();
        },
        onCloseAutoFocus: (m) => m.preventDefault(),
        onFocusOutside: J(e.onFocusOutside, (m) => {
          m.target !== c.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: J(e.onEscapeKeyDown, (m) => {
          i.onClose(), m.preventDefault();
        }),
        onKeyDown: J(e.onKeyDown, (m) => {
          const f = m.currentTarget.contains(m.target), h = By[i.dir].includes(m.key);
          f && h && (s.onOpenChange(!1), c.trigger?.focus(), m.preventDefault());
        })
      }
    ) }) }) });
  }
);
Lu.displayName = Wu;
function $u(e) {
  return e ? "open" : "closed";
}
function Kr(e) {
  return e === "indeterminate";
}
function xa(e) {
  return Kr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function cw(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function lw(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function uw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = lw(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((d) => d !== n));
  const l = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function dw(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], d = c.x, m = c.y, f = l.x, h = l.y;
    m > r != h > r && n < (f - d) * (r - m) / (h - m) + d && (o = !o);
  }
  return o;
}
function fw(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return dw(n, t);
}
function Zn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var mw = yu, hw = ua, pw = ku, gw = Cu, xw = ha, bw = Mu, vw = po, yw = Eu, ww = Su, kw = Tu, Cw = Ou, Mw = Ru, Nw = Pu, Ew = Iu, Dw = Fu, Sw = Lu, go = "DropdownMenu", [jw] = St(
  go,
  [xu]
), Ke = xu(), [Tw, zu] = jw(go), Yu = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: c = !0
  } = e, l = Ke(t), d = u.useRef(null), [m, f] = Ut({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: go
  });
  return /* @__PURE__ */ a.jsx(
    Tw,
    {
      scope: t,
      triggerId: Ue(),
      triggerRef: d,
      contentId: Ue(),
      open: m,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((h) => !h), [f]),
      modal: c,
      children: /* @__PURE__ */ a.jsx(mw, { ...l, open: m, onOpenChange: f, dir: r, modal: c, children: n })
    }
  );
};
Yu.displayName = go;
var Bu = "DropdownMenuTrigger", Hu = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = zu(Bu, n), i = Ke(n);
    return /* @__PURE__ */ a.jsx(hw, { asChild: !0, ...i, children: /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Et(t, s.triggerRef),
        onPointerDown: J(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (s.onOpenToggle(), s.open || c.preventDefault());
        }),
        onKeyDown: J(e.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && s.onOpenToggle(), c.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Hu.displayName = Bu;
var _w = "DropdownMenuPortal", Gu = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ke(t);
  return /* @__PURE__ */ a.jsx(pw, { ...r, ...n });
};
Gu.displayName = _w;
var Vu = "DropdownMenuContent", Uu = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = zu(Vu, n), s = Ke(n), i = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      gw,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (c) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: J(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, m = l.button === 2 || d;
          (!o.modal || m) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Uu.displayName = Vu;
var Ow = "DropdownMenuGroup", Rw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(xw, { ...o, ...r, ref: t });
  }
);
Rw.displayName = Ow;
var Pw = "DropdownMenuLabel", Aw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(bw, { ...o, ...r, ref: t });
  }
);
Aw.displayName = Pw;
var Iw = "DropdownMenuItem", qu = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(vw, { ...o, ...r, ref: t });
  }
);
qu.displayName = Iw;
var Fw = "DropdownMenuCheckboxItem", Ku = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(yw, { ...o, ...r, ref: t });
});
Ku.displayName = Fw;
var Ww = "DropdownMenuRadioGroup", Lw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(ww, { ...o, ...r, ref: t });
});
Lw.displayName = Ww;
var $w = "DropdownMenuRadioItem", zw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(kw, { ...o, ...r, ref: t });
});
zw.displayName = $w;
var Yw = "DropdownMenuItemIndicator", Xu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Cw, { ...o, ...r, ref: t });
});
Xu.displayName = Yw;
var Bw = "DropdownMenuSeparator", Qu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Mw, { ...o, ...r, ref: t });
});
Qu.displayName = Bw;
var Hw = "DropdownMenuArrow", Gw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(Nw, { ...o, ...r, ref: t });
  }
);
Gw.displayName = Hw;
var Vw = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = Ke(t), [c, l] = Ut({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a.jsx(Ew, { ...i, open: c, onOpenChange: l, children: n });
}, Uw = "DropdownMenuSubTrigger", Zu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Dw, { ...o, ...r, ref: t });
});
Zu.displayName = Uw;
var qw = "DropdownMenuSubContent", Ju = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(
    Sw,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ju.displayName = qw;
var Kw = Yu, Xw = Hu, Qw = Gu, Zw = Uu, Jw = qu, e0 = Ku, t0 = Xu, n0 = Qu, r0 = Vw, o0 = Zu, s0 = Ju, xo = "Popover", [ed] = St(xo, [
  In
]), dr = In(), [a0, Kt] = ed(xo), td = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !1
  } = e, c = dr(t), l = u.useRef(null), [d, m] = u.useState(!1), [f, h] = Ut({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: xo
  });
  return /* @__PURE__ */ a.jsx(mo, { ...c, children: /* @__PURE__ */ a.jsx(
    a0,
    {
      scope: t,
      contentId: Ue(),
      triggerRef: l,
      open: f,
      onOpenChange: h,
      onOpenToggle: u.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => m(!0), []),
      onCustomAnchorRemove: u.useCallback(() => m(!1), []),
      modal: i,
      children: n
    }
  ) });
};
td.displayName = xo;
var nd = "PopoverAnchor", rd = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(nd, n), s = dr(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: c } = o;
    return u.useEffect(() => (i(), () => c()), [i, c]), /* @__PURE__ */ a.jsx(ho, { ...s, ...r, ref: t });
  }
);
rd.displayName = nd;
var od = "PopoverTrigger", sd = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(od, n), s = dr(n), i = Se(t, o.triggerRef), c = /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ud(o.open),
        ...r,
        ref: i,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? c : /* @__PURE__ */ a.jsx(ho, { asChild: !0, ...s, children: c });
  }
);
sd.displayName = od;
var ba = "PopoverPortal", [i0, c0] = ed(ba, {
  forceMount: void 0
}), ad = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = Kt(ba, t);
  return /* @__PURE__ */ a.jsx(i0, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(nt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(or, { asChild: !0, container: o, children: r }) }) });
};
ad.displayName = ba;
var Sn = "PopoverContent", id = u.forwardRef(
  (e, t) => {
    const n = c0(Sn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = Kt(Sn, e.__scopePopover);
    return /* @__PURE__ */ a.jsx(nt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ a.jsx(u0, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(d0, { ...o, ref: t }) });
  }
);
id.displayName = Sn;
var l0 = /* @__PURE__ */ En("PopoverContent.RemoveScroll"), u0 = u.forwardRef(
  (e, t) => {
    const n = Kt(Sn, e.__scopePopover), r = u.useRef(null), o = Se(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return $s(i);
    }, []), /* @__PURE__ */ a.jsx(oo, { as: l0, allowPinchZoom: !0, children: /* @__PURE__ */ a.jsx(
      cd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: J(
          e.onPointerDownOutside,
          (i) => {
            const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
            s.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: J(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), d0 = u.forwardRef(
  (e, t) => {
    const n = Kt(Sn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      cd,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), cd = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: m,
      ...f
    } = e, h = Kt(Sn, n), p = dr(n);
    return Ls(), /* @__PURE__ */ a.jsx(
      no,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ a.jsx(
          rr,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: m,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ a.jsx(
              ca,
              {
                "data-state": ud(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), ld = "PopoverClose", f0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(ld, n);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
f0.displayName = ld;
var m0 = "PopoverArrow", h0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dr(n);
    return /* @__PURE__ */ a.jsx(la, { ...o, ...r, ref: t });
  }
);
h0.displayName = m0;
function ud(e) {
  return e ? "open" : "closed";
}
var p0 = td, g0 = rd, x0 = sd, b0 = ad, v0 = id, bo = "Switch", [y0] = St(bo), [w0, k0] = y0(bo), dd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: c,
      value: l = "on",
      onCheckedChange: d,
      form: m,
      ...f
    } = e, [h, p] = u.useState(null), b = Se(t, (k) => p(k)), g = u.useRef(!1), x = h ? m || !!h.closest("form") : !0, [v, y] = Ut({
      prop: o,
      defaultProp: s ?? !1,
      onChange: d,
      caller: bo
    });
    return /* @__PURE__ */ a.jsxs(w0, { scope: n, checked: v, disabled: c, children: [
      /* @__PURE__ */ a.jsx(
        ke.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": v,
          "aria-required": i,
          "data-state": pd(v),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...f,
          ref: b,
          onClick: J(e.onClick, (k) => {
            y((M) => !M), x && (g.current = k.isPropagationStopped(), g.current || k.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ a.jsx(
        hd,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: v,
          required: i,
          disabled: c,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
dd.displayName = bo;
var fd = "SwitchThumb", md = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = k0(fd, n);
    return /* @__PURE__ */ a.jsx(
      ke.span,
      {
        "data-state": pd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
md.displayName = fd;
var C0 = "SwitchBubbleInput", hd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const i = u.useRef(null), c = Se(i, s), l = lv(n), d = Yl(t);
    return u.useEffect(() => {
      const m = i.current;
      if (!m) return;
      const f = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && p) {
        const b = new Event("click", { bubbles: r });
        p.call(m, n), m.dispatchEvent(b);
      }
    }, [l, n, r]), /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
hd.displayName = C0;
function pd(e) {
  return e ? "checked" : "unchecked";
}
var M0 = dd, N0 = md, [vo] = St("Tooltip", [
  In
]), yo = In(), gd = "TooltipProvider", E0 = 700, ws = "tooltip.open", [D0, va] = vo(gd), xd = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = E0,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = u.useRef(!0), c = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ a.jsx(
    D0,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: u.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
xd.displayName = gd;
var Jn = "Tooltip", [S0, fr] = vo(Jn), bd = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = va(Jn, e.__scopeTooltip), d = yo(t), [m, f] = u.useState(null), h = Ue(), p = u.useRef(0), b = i ?? l.disableHoverableContent, g = c ?? l.delayDuration, x = u.useRef(!1), [v, y] = Ut({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ws))) : l.onClose(), s?.(E);
    },
    caller: Jn
  }), k = u.useMemo(() => v ? x.current ? "delayed-open" : "instant-open" : "closed", [v]), M = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, y(!0);
  }, [y]), N = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y(!1);
  }, [y]), w = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, y(!0), p.current = 0;
    }, g);
  }, [g, y]);
  return u.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ a.jsx(mo, { ...d, children: /* @__PURE__ */ a.jsx(
    S0,
    {
      scope: t,
      contentId: h,
      open: v,
      stateAttribute: k,
      trigger: m,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? w() : M();
      }, [l.isOpenDelayedRef, w, M]),
      onTriggerLeave: u.useCallback(() => {
        b ? N() : (window.clearTimeout(p.current), p.current = 0);
      }, [N, b]),
      onOpen: M,
      onClose: N,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
bd.displayName = Jn;
var ks = "TooltipTrigger", vd = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = fr(ks, n), s = va(ks, n), i = yo(n), c = u.useRef(null), l = Se(t, c, o.onTriggerChange), d = u.useRef(!1), m = u.useRef(!1), f = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ a.jsx(ho, { asChild: !0, ...i, children: /* @__PURE__ */ a.jsx(
      ke.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: J(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !m.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), m.current = !0);
        }),
        onPointerLeave: J(e.onPointerLeave, () => {
          o.onTriggerLeave(), m.current = !1;
        }),
        onPointerDown: J(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: J(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: J(e.onBlur, o.onClose),
        onClick: J(e.onClick, o.onClose)
      }
    ) });
  }
);
vd.displayName = ks;
var ya = "TooltipPortal", [j0, T0] = vo(ya, {
  forceMount: void 0
}), yd = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = fr(ya, t);
  return /* @__PURE__ */ a.jsx(j0, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(nt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(or, { asChild: !0, container: o, children: r }) }) });
};
yd.displayName = ya;
var jn = "TooltipContent", wd = u.forwardRef(
  (e, t) => {
    const n = T0(jn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = fr(jn, e.__scopeTooltip);
    return /* @__PURE__ */ a.jsx(nt, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ a.jsx(kd, { side: o, ...s, ref: t }) : /* @__PURE__ */ a.jsx(_0, { side: o, ...s, ref: t }) });
  }
), _0 = u.forwardRef((e, t) => {
  const n = fr(jn, e.__scopeTooltip), r = va(jn, e.__scopeTooltip), o = u.useRef(null), s = Se(t, o), [i, c] = u.useState(null), { trigger: l, onClose: d } = n, m = o.current, { onPointerInTransitChange: f } = r, h = u.useCallback(() => {
    c(null), f(!1);
  }, [f]), p = u.useCallback(
    (b, g) => {
      const x = b.currentTarget, v = { x: b.clientX, y: b.clientY }, y = A0(v, x.getBoundingClientRect()), k = I0(v, y), M = F0(g.getBoundingClientRect()), N = L0([...k, ...M]);
      c(N), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => h(), [h]), u.useEffect(() => {
    if (l && m) {
      const b = (x) => p(x, m), g = (x) => p(x, l);
      return l.addEventListener("pointerleave", b), m.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", b), m.removeEventListener("pointerleave", g);
      };
    }
  }, [l, m, p, h]), u.useEffect(() => {
    if (i) {
      const b = (g) => {
        const x = g.target, v = { x: g.clientX, y: g.clientY }, y = l?.contains(x) || m?.contains(x), k = !W0(v, i);
        y ? h() : k && (h(), d());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, m, i, d, h]), /* @__PURE__ */ a.jsx(kd, { ...e, ref: s });
}), [O0, R0] = vo(Jn, { isInside: !1 }), P0 = /* @__PURE__ */ vg("TooltipContent"), kd = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...c
    } = e, l = fr(jn, n), d = yo(n), { onClose: m } = l;
    return u.useEffect(() => (document.addEventListener(ws, m), () => document.removeEventListener(ws, m)), [m]), u.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          h.target?.contains(l.trigger) && m();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, m]), /* @__PURE__ */ a.jsx(
      rr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ a.jsxs(
          ca,
          {
            "data-state": l.stateAttribute,
            ...d,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ a.jsx(P0, { children: r }),
              /* @__PURE__ */ a.jsx(O0, { scope: n, isInside: !0, children: /* @__PURE__ */ a.jsx(Qb, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
wd.displayName = jn;
var Cd = "TooltipArrow", Md = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = yo(n);
    return R0(
      Cd,
      n
    ).isInside ? null : /* @__PURE__ */ a.jsx(la, { ...o, ...r, ref: t });
  }
);
Md.displayName = Cd;
function A0(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function I0(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function F0(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function W0(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], d = c.x, m = c.y, f = l.x, h = l.y;
    m > r != h > r && n < (f - d) * (r - m) / (h - m) + d && (o = !o);
  }
  return o;
}
function L0(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), $0(t);
}
function $0(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var z0 = xd, Y0 = bd, B0 = vd, H0 = yd, G0 = wd, V0 = Md;
const Ni = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ei = kl, Nd = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Ei(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((d) => {
    const m = n?.[d], f = s?.[d];
    if (m === null) return null;
    const h = Ni(m) || Ni(f);
    return o[d][h];
  }), c = n && Object.entries(n).reduce((d, m) => {
    let [f, h] = m;
    return h === void 0 || (d[f] = h), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, m) => {
    let { class: f, className: h, ...p } = m;
    return Object.entries(p).every((b) => {
      let [g, x] = b;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...c
      }[g]) : {
        ...s,
        ...c
      }[g] === x;
    }) ? [
      ...d,
      f,
      h
    ] : d;
  }, []);
  return Ei(e, i, l, n?.class, n?.className);
}, yn = Nd(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-sm px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ye({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  ...o
}) {
  const s = r ? qs : "button";
  return /* @__PURE__ */ a.jsx(
    s,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: j(yn({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
function U0({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Hs, { "data-slot": "dialog", ...e });
}
function q0({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Gs, { "data-slot": "dialog-portal", ...e });
}
function K0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Vs,
    {
      "data-slot": "dialog-overlay",
      className: j(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function X0({
  className: e,
  children: t,
  showCloseButton: n = !0,
  overlayClassName: r,
  ...o
}) {
  return /* @__PURE__ */ a.jsxs(q0, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a.jsx(K0, { className: r }),
    /* @__PURE__ */ a.jsxs(
      Us,
      {
        "data-slot": "dialog-content",
        className: j(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          e
        ),
        ...o,
        children: [
          t,
          n && /* @__PURE__ */ a.jsxs(
            dl,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a.jsx(to, {}),
                /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Q0({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: j("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Z0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ll,
    {
      "data-slot": "dialog-title",
      className: j("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function J0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ul,
    {
      "data-slot": "dialog-description",
      className: j("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function ek({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    _n,
    {
      "data-slot": "command",
      className: j(
        "flex h-full w-full flex-col overflow-hidden rounded-sm bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function tk({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: r,
  overlayClassName: o,
  showCloseButton: s = !0,
  ...i
}) {
  return /* @__PURE__ */ a.jsxs(U0, { ...i, children: [
    /* @__PURE__ */ a.jsxs(Q0, { className: "sr-only", children: [
      /* @__PURE__ */ a.jsx(Z0, { children: e }),
      /* @__PURE__ */ a.jsx(J0, { children: t })
    ] }),
    /* @__PURE__ */ a.jsx(
      X0,
      {
        className: j("overflow-hidden p-0", r),
        overlayClassName: o,
        showCloseButton: s,
        children: /* @__PURE__ */ a.jsx(ek, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function nk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a.jsx(zp, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a.jsx(
          _n.Input,
          {
            "data-slot": "command-input",
            className: j(
              "flex h-10 w-full rounded-sm bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function rk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    _n.List,
    {
      "data-slot": "command-list",
      className: j(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function ok({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    _n.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    _n.Group,
    {
      "data-slot": "command-group",
      className: j(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      ...t
    }
  );
}
function ce({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    _n.Item,
    {
      "data-slot": "command-item",
      className: j(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        e
      ),
      ...t
    }
  );
}
function ie({ className: e, variant: t = "default", ...n }) {
  return /* @__PURE__ */ a.jsx(
    "kbd",
    {
      "data-slot": "kbd",
      className: j(
        "pointer-events-none inline-flex items-center justify-center text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        t === "default" && "h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans bg-muted text-muted-foreground [[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        t === "ghost" && "font-sans text-muted-foreground",
        e
      ),
      ...n
    }
  );
}
function Rt({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: j("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
const Ce = /* @__PURE__ */ a.jsx("span", { className: "bg-muted text-muted-foreground ml-auto rounded px-1.5 py-0.5 text-[10px] leading-none font-medium", children: "Soon" });
function sk({
  open: e,
  onOpenChange: t,
  onGoToToday: n,
  onGoToPrev: r,
  onGoToNext: o,
  onSwitchView: s,
  onToggleLeftSidebar: i,
  onToggleRightSidebar: c,
  onCycleTheme: l
}) {
  const d = u.useCallback(
    (m) => {
      t(!1), m();
    },
    [t]
  );
  return /* @__PURE__ */ a.jsxs(
    tk,
    {
      open: e,
      onOpenChange: t,
      title: "Command Menu",
      description: "Search for a command to run...",
      showCloseButton: !1,
      className: "dark:bg-popover/60 dark:backdrop-blur-xl dark:border-border/50 dark:[&_[data-slot=command]]:bg-transparent [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-2",
      overlayClassName: "dark:bg-black/30",
      children: [
        /* @__PURE__ */ a.jsx(nk, { placeholder: "Type a command..." }),
        /* @__PURE__ */ a.jsxs(rk, { children: [
          /* @__PURE__ */ a.jsx(ok, { children: "No results found." }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "Calendar", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Create event...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Meet with...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Show teammate calendar...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Create recurring scheduling link...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Create one-off scheduling link...",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "Navigation", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Go to date...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(n), children: [
              "Go to today",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-auto", children: "T" })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(o), children: [
              "Go to next week",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-auto", children: "J" })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(r), children: [
              "Go to previous week",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-auto", children: "K" })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Search events",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "Time zones", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Travel to time zone...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Show additional time zones...",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "App", children: [
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(i), children: [
              "Toggle sidebar",
              /* @__PURE__ */ a.jsxs(Rt, { className: "ml-auto", children: [
                /* @__PURE__ */ a.jsx(ie, { children: "⌘" }),
                /* @__PURE__ */ a.jsx(ie, { children: "/" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(l), children: [
              "Set theme...",
              /* @__PURE__ */ a.jsxs(Rt, { className: "ml-auto", children: [
                /* @__PURE__ */ a.jsx(ie, { children: "shift" }),
                /* @__PURE__ */ a.jsx(ie, { children: "M" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "View", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Start week on...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(() => s("day")), children: [
              "Display day view",
              /* @__PURE__ */ a.jsx(Rt, { className: "ml-auto", children: /* @__PURE__ */ a.jsx(ie, { children: "D" }) })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(() => s("week")), children: [
              "Display week view",
              /* @__PURE__ */ a.jsx(Rt, { className: "ml-auto", children: /* @__PURE__ */ a.jsx(ie, { children: "W" }) })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(() => s("month")), children: [
              "Display month view",
              /* @__PURE__ */ a.jsx(Rt, { className: "ml-auto", children: /* @__PURE__ */ a.jsx(ie, { children: "M" }) })
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Set number of displayed days...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Select all visible",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Default hour size",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Zoom hours in",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Zoom hours out",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Hide weekends",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Hide declined events",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Hide week numbers",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "Settings & help", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Get CalendarCN mobile app",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Show keyboard shortcuts",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Go to settings",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Support & feedback",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "Accounts", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Add Google Calendar account",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Manage calendar accounts",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Log out",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(Ot, { heading: "CalendarCN", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Check for update",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "About CalendarCN",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(Ot, { heading: "Panels", children: /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(c), children: [
            "Toggle context panel",
            /* @__PURE__ */ a.jsx(ie, { className: "ml-auto", children: "/" })
          ] }) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "border-t px-3 py-2 flex items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-muted-foreground/70", children: "↑↓" }),
            " Navigate"
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-muted-foreground/70", children: "↵" }),
            " Select"
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ a.jsx(ie, { children: "esc" }),
            " Close"
          ] })
        ] })
      ]
    }
  );
}
const Uo = 768;
function ak() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Uo - 1}px)`), r = () => {
      t(window.innerWidth < Uo);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Uo), () => n.removeEventListener("change", r);
  }, []), !!e;
}
var ik = "Separator", Di = "horizontal", ck = ["horizontal", "vertical"], Ed = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Di, ...o } = e, s = lk(r) ? r : Di, c = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ a.jsx(
    ct.div,
    {
      "data-orientation": s,
      ...c,
      ...o,
      ref: t
    }
  );
});
Ed.displayName = ik;
function lk(e) {
  return ck.includes(e);
}
var uk = Ed;
function Dd({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    uk,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: j(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function dk({ ...e }) {
  return /* @__PURE__ */ a.jsx(Hs, { "data-slot": "sheet", ...e });
}
function fk({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Gs, { "data-slot": "sheet-portal", ...e });
}
function mk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Vs,
    {
      "data-slot": "sheet-overlay",
      className: j(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function hk({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(fk, { children: [
    /* @__PURE__ */ a.jsx(mk, {}),
    /* @__PURE__ */ a.jsxs(
      Us,
      {
        "data-slot": "sheet-content",
        className: j(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ a.jsxs(dl, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a.jsx(to, { className: "size-4" }),
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function pk({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: j("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function gk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ll,
    {
      "data-slot": "sheet-title",
      className: j("text-foreground font-semibold", e),
      ...t
    }
  );
}
function xk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ul,
    {
      "data-slot": "sheet-description",
      className: j("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Sd({
  delayDuration: e = 1e3,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    z0,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function It({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Sd, { children: /* @__PURE__ */ a.jsx(Y0, { "data-slot": "tooltip", ...e }) });
}
function Ft({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(B0, { "data-slot": "tooltip-trigger", ...e });
}
function Wt({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(H0, { children: /* @__PURE__ */ a.jsxs(
    G0,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: j(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-sm px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a.jsx(V0, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const bk = "sidebar_state", vk = 3600 * 24 * 7, yk = "18rem", wk = "18rem", kk = "3rem", Ck = "b", jd = u.createContext(null);
function wo() {
  const e = u.useContext(jd);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Mk({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const c = ak(), [l, d] = u.useState(!1), [m, f] = u.useState(e), h = t ?? m, p = u.useCallback(
    (v) => {
      const y = typeof v == "function" ? v(h) : v;
      n ? n(y) : f(y), document.cookie = `${bk}=${y}; path=/; max-age=${vk}`;
    },
    [n, h]
  ), b = u.useCallback(() => c ? d((v) => !v) : p((v) => !v), [c, p, d]);
  u.useEffect(() => {
    const v = (y) => {
      y.key === Ck && (y.metaKey || y.ctrlKey) && (y.preventDefault(), b());
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [b]);
  const g = h ? "expanded" : "collapsed", x = u.useMemo(
    () => ({
      state: g,
      open: h,
      setOpen: p,
      isMobile: c,
      openMobile: l,
      setOpenMobile: d,
      toggleSidebar: b
    }),
    [g, h, p, c, l, d, b]
  );
  return /* @__PURE__ */ a.jsx(jd.Provider, { value: x, children: /* @__PURE__ */ a.jsx(Sd, { delayDuration: 1e3, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": yk,
        "--sidebar-width-icon": kk,
        ...o
      },
      className: j(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: s
    }
  ) }) });
}
function Nk({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  ...s
}) {
  const { isMobile: i, state: c, openMobile: l, setOpenMobile: d } = wo();
  return n === "none" ? /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: j(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...s,
      children: o
    }
  ) : i ? /* @__PURE__ */ a.jsx(dk, { open: l, onOpenChange: d, ...s, children: /* @__PURE__ */ a.jsxs(
    hk,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": wk
      },
      side: e,
      children: [
        /* @__PURE__ */ a.jsxs(pk, { className: "sr-only", children: [
          /* @__PURE__ */ a.jsx(gk, { children: "Sidebar" }),
          /* @__PURE__ */ a.jsx(xk, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": c,
      "data-collapsible": c === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: j(
              "relative w-(--sidebar-width) bg-transparent",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: j(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...s,
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function Ek({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: j(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function Dk({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: j("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Sk({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: j("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Td({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Dd,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: j("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function _d({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: j(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function Mn({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: j("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function Od({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? qs : "div";
  return /* @__PURE__ */ a.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: j(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-sm px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: j("w-full text-sm", e),
      ...t
    }
  );
}
function Cs({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: j("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function Ms({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: j("group/menu-item relative", e),
      ...t
    }
  );
}
const jk = Nd(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ns({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const c = e ? qs : "button", { isMobile: l, state: d } = wo(), m = /* @__PURE__ */ a.jsx(
    c,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: j(jk({ variant: n, size: r }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ a.jsxs(It, { children: [
    /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: m }),
    /* @__PURE__ */ a.jsx(
      Wt,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || l,
        ...o
      }
    )
  ] })) : m;
}
function Rd({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(p0, { "data-slot": "popover", ...e });
}
function Pd({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(x0, { "data-slot": "popover-trigger", ...e });
}
function Tk({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(b0, { children: /* @__PURE__ */ a.jsx(
    v0,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: j(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-sm border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function Ad({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(g0, { "data-slot": "popover-anchor", ...e });
}
function Es({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Kw, { "data-slot": "dropdown-menu", ...e });
}
function Ds({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    Xw,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Ss({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ a.jsx(Qw, { children: /* @__PURE__ */ a.jsx(
    Zw,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: j(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-sm border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function vt({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    Jw,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: j(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function qo({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(
    e0,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: j(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a.jsx(t0, { children: /* @__PURE__ */ a.jsx(qn, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function wn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    n0,
    {
      "data-slot": "dropdown-menu-separator",
      className: j("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: j(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Si({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(r0, { "data-slot": "dropdown-menu-sub", ...e });
}
function ji({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(
    o0,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: j(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a.jsx(eo, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    s0,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: j(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-sm border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function _k({
  className: e,
  size: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a.jsx(
    M0,
    {
      "data-slot": "switch",
      "data-size": t,
      className: j(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[size=xs]:h-2.5 data-[size=xs]:w-4",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a.jsx(
        N0,
        {
          "data-slot": "switch-thumb",
          className: j(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=xs]/switch:size-2 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const Ok = {
  red: "bg-event-red-border",
  orange: "bg-event-orange-border",
  yellow: "bg-event-yellow-border",
  green: "bg-event-green-border",
  blue: "bg-event-blue-border",
  purple: "bg-event-purple-border",
  gray: "bg-event-gray-border"
};
function Rk(e, t) {
  const n = Lr(t, e);
  if (n < 60)
    return `${n}min`;
  const r = Math.floor(n / 60), o = n % 60;
  return o === 0 ? `${r}h` : `${r}h ${o}min`;
}
function xt(e) {
  return e.getMinutes() === 0 ? ve(e, "h a") : ve(e, "h:mm a");
}
function _i(e) {
  const t = e.trim().toLowerCase();
  if (t.length === 0)
    return null;
  const n = /pm$/.test(t), r = /am$/.test(t), o = t.replace(/\s*(am|pm)\s*$/, "").trim();
  if (o.length === 0)
    return null;
  let s, i;
  if (o.includes(":")) {
    const c = o.split(":");
    if (c.length !== 2)
      return null;
    s = Number.parseInt(c[0], 10), i = Number.parseInt(c[1], 10);
  } else {
    const c = Number.parseInt(o, 10);
    if (Number.isNaN(c))
      return null;
    o.length > 2 && c > 99 ? (i = c % 100, s = Math.floor(c / 100)) : (s = c, i = 0);
  }
  return Number.isNaN(s) || Number.isNaN(i) || (n && s < 12 && (s += 12), r && s === 12 && (s = 0), s < 0 || s > 23 || i < 0 || i > 59) ? null : { hours: s, minutes: i };
}
function hn(e, t, n) {
  const r = new Date(e);
  return r.setHours(t, n, 0, 0), r;
}
function ot(e) {
  return ve(e, "EEE MMM d");
}
function Oi(e, t) {
  const n = e.trim();
  if (n.length === 0)
    return null;
  const r = n.replace(/^[a-z]{3}\s+/i, "");
  if (r.length === 0)
    return null;
  const o = $h(r, "MMM d", t);
  return Number.isNaN(o.getTime()) ? null : o;
}
function Pk(e) {
  return e === "public" ? "Public" : e === "private" ? "Private" : "Default visibility";
}
function Dr({
  icon: e,
  label: t,
  value: n
}) {
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 py-2", children: [
    /* @__PURE__ */ a.jsx(e, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
    /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: t }),
    n && /* @__PURE__ */ a.jsx("span", { className: "text-muted-foreground text-xs", children: n })
  ] });
}
function Ak({ timezone: e }) {
  const t = e.indexOf(" ");
  if (t === -1)
    return /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: e });
  const n = e.substring(0, t), r = e.substring(t + 1);
  return /* @__PURE__ */ a.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs", children: [
    /* @__PURE__ */ a.jsx("span", { className: "text-[#C7C5C1] dark:text-[#595959]", children: n }),
    /* @__PURE__ */ a.jsx("span", { className: "text-foreground", children: r })
  ] });
}
function Ik({ recurrence: e }) {
  const t = e.indexOf(" on ");
  if (t === -1)
    return /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e });
  const n = e.substring(0, t), r = e.substring(t);
  return /* @__PURE__ */ a.jsxs("span", { className: "text-xs", children: [
    /* @__PURE__ */ a.jsx("span", { className: "text-foreground", children: n }),
    /* @__PURE__ */ a.jsx("span", { className: "text-[#C7C5C1] dark:text-[#595959]", children: r })
  ] });
}
const Fk = ["Event", "Focus time", "Out of office", "Birthday"], Ri = {
  "Focus time": "Create a focus time event with the option to automatically decline meetings during this time. Available for work and school accounts.",
  "Out of office": "Create an out of office (OOO) event with the option to automatically decline meetings during this time. Available for work and school accounts.",
  Birthday: "Create a birthday event to keep track of a person's upcoming birthdays. Birthdays from your Google Contacts may appear on a separate Birthday calendar."
};
function Pi({ tooltip: e }) {
  const [t, n] = u.useState(null);
  if (!e)
    return null;
  function r(s) {
    const i = s.currentTarget.getBoundingClientRect();
    n({ top: i.top + i.height / 2, left: i.left });
  }
  function o() {
    n(null);
  }
  return /* @__PURE__ */ a.jsxs(
    "span",
    {
      className: "ml-auto shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity",
      onClick: (s) => s.stopPropagation(),
      onPointerDown: (s) => s.stopPropagation(),
      onMouseEnter: r,
      onMouseLeave: o,
      children: [
        /* @__PURE__ */ a.jsx(up, { className: "size-3.5 text-white" }),
        t && Os.createPortal(
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "pointer-events-none fixed z-[100] max-w-[240px] rounded-sm bg-[#252525] border border-[#303030] px-2 py-1 text-xs text-white shadow-md",
              style: { top: t.top, left: t.left - 8, transform: "translate(-100%, -50%)" },
              children: e
            }
          ),
          document.body
        )
      ]
    }
  );
}
function js({ event: e, onEventChange: t, onPrevWeek: n, onNextWeek: r, headerActions: o }) {
  const s = e.color ?? "blue", [i, c] = u.useState("Event"), [l, d] = u.useState(!1), [m, f] = u.useState(!1), [h, p] = u.useState(!1), [b, g] = u.useState(e.title), x = u.useRef(null), v = u.useRef(!1), y = u.useRef(e.title);
  u.useEffect(() => {
    g(e.title);
  }, [e.title]), u.useEffect(() => {
    p(!1);
  }, [e.id]);
  const k = u.useCallback(
    (A) => {
      const fe = A.target.value;
      g(fe), t?.({ ...e, title: fe });
    },
    [e, t]
  ), M = u.useCallback(() => {
    y.current = e.title;
  }, [e.title]), N = u.useCallback(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    const A = b.trim();
    A !== b && t?.({ ...e, title: A });
  }, [b, e, t]), w = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), x.current?.blur();
        return;
      }
      if (A.key === "Escape") {
        A.preventDefault(), A.stopPropagation(), v.current = !0;
        const fe = y.current;
        g(fe), t?.({ ...e, title: fe }), x.current?.blur();
      }
    },
    [e, t]
  ), [E, D] = u.useState(() => xt(e.start)), T = u.useRef(null), P = u.useRef(!1), L = u.useRef(xt(e.start));
  u.useEffect(() => {
    D(xt(e.start));
  }, [e.start]);
  const z = u.useCallback(
    (A) => {
      D(A.target.value);
    },
    []
  ), H = u.useCallback(() => {
    L.current = xt(e.start), requestAnimationFrame(() => {
      T.current?.select();
    });
  }, [e.start]), G = u.useCallback(() => {
    if (P.current) {
      P.current = !1;
      return;
    }
    const A = _i(E);
    if (!A) {
      D(L.current);
      return;
    }
    const fe = hn(e.start, A.hours, A.minutes);
    if (fe.getTime() >= e.end.getTime()) {
      D(L.current);
      return;
    }
    D(xt(fe)), t?.({ ...e, start: fe });
  }, [E, e, t]), q = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), T.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), P.current = !0, D(L.current), T.current?.blur());
    },
    []
  ), [I, _] = u.useState(() => xt(e.end)), O = u.useRef(null), R = u.useRef(!1), $ = u.useRef(xt(e.end));
  u.useEffect(() => {
    _(xt(e.end));
  }, [e.end]);
  const C = u.useCallback(
    (A) => {
      _(A.target.value);
    },
    []
  ), S = u.useCallback(() => {
    $.current = xt(e.end), requestAnimationFrame(() => {
      O.current?.select();
    });
  }, [e.end]), F = u.useCallback(() => {
    if (R.current) {
      R.current = !1;
      return;
    }
    const A = _i(I);
    if (!A) {
      _($.current);
      return;
    }
    const fe = hn(e.end, A.hours, A.minutes);
    if (fe.getTime() <= e.start.getTime()) {
      _($.current);
      return;
    }
    _(xt(fe)), t?.({ ...e, end: fe });
  }, [I, e, t]), Y = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), O.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), R.current = !0, _($.current), O.current?.blur());
    },
    []
  ), [B, U] = u.useState(() => ot(e.start)), W = u.useRef(null), Z = u.useRef(!1), ne = u.useRef(ot(e.start));
  u.useEffect(() => {
    U(ot(e.start));
  }, [e.start]);
  const ue = u.useCallback(
    (A) => {
      U(A.target.value);
    },
    []
  ), We = u.useCallback(() => {
    ne.current = ot(e.start), requestAnimationFrame(() => {
      W.current?.select();
    });
  }, [e.start]), Oe = u.useCallback(() => {
    if (Z.current) {
      Z.current = !1;
      return;
    }
    const A = Oi(B, e.start);
    if (!A) {
      U(ne.current);
      return;
    }
    const fe = Nn(A, e.start);
    if (fe === 0) {
      U(ot(e.start));
      return;
    }
    const Xe = _e(e.start, fe), Xt = _e(e.end, fe);
    U(ot(Xe)), t?.({ ...e, start: Xe, end: Xt });
  }, [B, e, t]), He = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), W.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), Z.current = !0, U(ne.current), W.current?.blur());
    },
    []
  ), [Ne, ge] = u.useState(() => ot(e.end)), Me = u.useRef(null), Ge = u.useRef(!1), Le = u.useRef(ot(e.end));
  u.useEffect(() => {
    ge(ot(e.end));
  }, [e.end]);
  const $e = u.useCallback(
    (A) => {
      ge(A.target.value);
    },
    []
  ), se = u.useCallback(() => {
    Le.current = ot(e.end), requestAnimationFrame(() => {
      Me.current?.select();
    });
  }, [e.end]), ze = u.useCallback(() => {
    if (Ge.current) {
      Ge.current = !1;
      return;
    }
    const A = Oi(Ne, e.end);
    if (!A) {
      ge(Le.current);
      return;
    }
    const fe = Nn(A, e.end);
    if (fe === 0) {
      ge(ot(e.end));
      return;
    }
    const Xe = _e(e.end, fe);
    if (Xe.getTime() < e.start.getTime()) {
      ge(Le.current);
      return;
    }
    ge(ot(Xe)), t?.({ ...e, end: Xe });
  }, [Ne, e, t]), Ve = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), Me.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), Ge.current = !0, ge(Le.current), Me.current?.blur());
    },
    []
  ), Ee = u.useRef(null), Ie = u.useCallback(
    (A) => {
      if (A) {
        Ee.current = {
          startHours: e.start.getHours(),
          startMinutes: e.start.getMinutes(),
          endHours: e.end.getHours(),
          endMinutes: e.end.getMinutes()
        }, t?.({ ...e, isAllDay: !0 });
        return;
      }
      if (Ee.current) {
        const { startHours: Xt, startMinutes: Mo, endHours: No, endMinutes: Eo } = Ee.current;
        t?.({
          ...e,
          isAllDay: !1,
          start: hn(e.start, Xt, Mo),
          end: hn(e.end, No, Eo)
        }), Ee.current = null;
        return;
      }
      t?.({
        ...e,
        isAllDay: !1,
        start: hn(e.start, 9, 0),
        end: hn(e.end, 10, 0)
      });
    },
    [e, t]
  ), rt = Fk.filter((A) => A !== i);
  return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4", children: [
      /* @__PURE__ */ a.jsxs(Es, { open: l, onOpenChange: (A) => {
        d(A), A && f(!1);
      }, children: [
        /* @__PURE__ */ a.jsx(Ds, { asChild: !0, children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: j("flex items-center gap-0.5 text-xs font-medium rounded-sm border border-transparent px-2.5 py-1.5 -ml-2.5 gap-1.5 hover:border-[#373737]", l ? "bg-[#252525] text-white" : "text-foreground"), children: [
          i,
          /* @__PURE__ */ a.jsx(Fs, { className: j("size-3.5", l ? "text-[#595959]" : "text-[#C7C5C1] dark:text-[#595959]") })
        ] }) }),
        /* @__PURE__ */ a.jsxs(Ss, { align: "start", side: "left", sideOffset: 12, alignOffset: -4, className: "min-w-[180px] bg-[#252525] border-[#303030]", onMouseLeave: () => f(!1), children: [
          /* @__PURE__ */ a.jsxs(
            vt,
            {
              className: j("group/item text-xs text-white focus:bg-[#303030] focus:text-white", !m && "bg-[#303030]"),
              onSelect: () => c(i),
              onMouseEnter: () => f(!1),
              children: [
                /* @__PURE__ */ a.jsx(qn, { className: "size-3.5" }),
                /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: i }),
                /* @__PURE__ */ a.jsx(Pi, { tooltip: Ri[i] })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(wn, { className: "bg-[#303030]" }),
          rt.map((A) => /* @__PURE__ */ a.jsxs(
            vt,
            {
              className: "group/item text-xs text-white focus:bg-[#303030] focus:text-white pl-8",
              onSelect: () => c(A),
              onMouseEnter: () => f(!0),
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: A }),
                /* @__PURE__ */ a.jsx(Pi, { tooltip: Ri[A] })
              ]
            },
            A
          ))
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-0.5", children: [
        /* @__PURE__ */ a.jsxs(Es, { children: [
          /* @__PURE__ */ a.jsx(Ds, { asChild: !0, children: /* @__PURE__ */ a.jsx(Ye, { variant: "ghost", size: "icon", className: "size-7 border border-transparent hover:border-[#242424] hover:bg-[#242424] text-[#C7C5C1] dark:text-[#595959]", children: /* @__PURE__ */ a.jsx(pp, { className: "size-4" }) }) }),
          /* @__PURE__ */ a.jsxs(Ss, { align: "start", side: "left", className: "min-w-[180px] bg-[#252525] border-[#303030]", children: [
            /* @__PURE__ */ a.jsxs(vt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(_c, { className: "size-3.5" }),
              "Cut",
              /* @__PURE__ */ a.jsx(Er, { className: "text-white/40", children: "⌘X" })
            ] }),
            /* @__PURE__ */ a.jsxs(vt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(Oc, { className: "size-3.5" }),
              "Copy",
              /* @__PURE__ */ a.jsx(Er, { className: "text-white/40", children: "⌘C" })
            ] }),
            /* @__PURE__ */ a.jsxs(vt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(jc, { className: "size-3.5" }),
              "Duplicate",
              /* @__PURE__ */ a.jsx(Er, { className: "text-white/40", children: "⌘D" })
            ] }),
            /* @__PURE__ */ a.jsx(wn, { className: "bg-[#303030]" }),
            /* @__PURE__ */ a.jsxs(vt, { className: "text-xs text-[#E56458] focus:!bg-[#DE5551] focus:!text-white focus:[&>svg]:!text-white focus:[&>[data-slot=dropdown-menu-shortcut]]:!text-white", children: [
              /* @__PURE__ */ a.jsx(Rc, { className: "size-3.5 text-[#E56458]" }),
              "Delete",
              /* @__PURE__ */ a.jsx(Er, { className: "text-white/40 tracking-normal", children: "delete" })
            ] })
          ] })
        ] }),
        o
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: x,
        type: "text",
        value: b,
        onChange: k,
        onFocus: M,
        onBlur: N,
        onKeyDown: w,
        placeholder: "Title",
        className: "text-foreground placeholder:text-[#C7C5C1] dark:placeholder:text-[#595959] mx-2 rounded-sm border border-transparent bg-transparent px-2 py-1.5 text-xs outline-none hover:border-[#373737] focus:border-[#242424] focus:bg-[#242424]"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    (e.start.getHours() !== 0 || e.start.getMinutes() !== 0 || e.end.getHours() !== 0 || e.end.getMinutes() !== 0) && /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-0 items-center gap-1 px-2 text-xs", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: j(
            "flex shrink-0 items-center gap-2 rounded-sm border border-transparent px-2 py-1.5",
            e.isAllDay ? "cursor-default" : "cursor-text hover:border-[#373737] has-[:focus]:border-[#242424] has-[:focus]:bg-[#242424]"
          ),
          onClick: e.isAllDay ? void 0 : () => T.current?.focus(),
          children: [
            /* @__PURE__ */ a.jsx(fp, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: T,
                type: "text",
                value: E,
                onChange: z,
                onFocus: H,
                onBlur: G,
                onKeyDown: q,
                readOnly: e.isAllDay,
                tabIndex: e.isAllDay ? -1 : void 0,
                className: j(
                  "w-[8ch] font-medium text-xs bg-transparent outline-none border-none p-0",
                  e.isAllDay ? "text-[#C7C5C1] dark:text-[#595959] pointer-events-none" : "text-foreground"
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: j(
            "flex min-w-0 flex-1 items-center rounded-sm border border-transparent px-2 py-1.5",
            e.isAllDay ? "cursor-default" : "cursor-text hover:border-[#373737] has-[:focus]:border-[#242424] has-[:focus]:bg-[#242424]"
          ),
          onClick: e.isAllDay ? void 0 : () => O.current?.focus(),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "mr-2 shrink-0 text-base leading-4 text-[#C7C5C1] dark:text-[#595959]", children: "→" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: O,
                type: "text",
                value: I,
                onChange: C,
                onFocus: S,
                onBlur: F,
                onKeyDown: Y,
                readOnly: e.isAllDay,
                tabIndex: e.isAllDay ? -1 : void 0,
                className: j(
                  "min-w-0 font-medium text-xs bg-transparent outline-none border-none p-0",
                  e.isAllDay ? "text-[#C7C5C1] dark:text-[#595959] pointer-events-none" : "text-foreground"
                ),
                size: I.length
              }
            ),
            /* @__PURE__ */ a.jsx("span", { className: "shrink-0 text-[#C7C5C1] dark:text-[#595959]", children: Rk(e.start, e.end) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: j("flex items-center gap-2 -mt-2", e.start.getHours() !== 0 || e.start.getMinutes() !== 0 || e.end.getHours() !== 0 || e.end.getMinutes() !== 0 ? "ml-8" : "ml-4"), children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "mr-0 flex min-w-[6.5rem] self-start cursor-text items-center rounded-sm border border-transparent px-2 py-1.5 hover:border-[#373737] has-[:focus]:border-[#242424] has-[:focus]:bg-[#242424]",
          onClick: () => W.current?.focus(),
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: W,
              type: "text",
              value: B,
              onChange: ue,
              onFocus: We,
              onBlur: Oe,
              onKeyDown: He,
              className: "text-foreground text-xs bg-transparent outline-none border-none p-0",
              size: B.length
            }
          )
        }
      ),
      e.isAllDay && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex min-w-[6.5rem] self-start cursor-text items-center rounded-sm border border-transparent px-2 py-1.5 hover:border-[#373737] has-[:focus]:border-[#242424] has-[:focus]:bg-[#242424]",
          onClick: () => Me.current?.focus(),
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: Me,
              type: "text",
              value: Ne,
              onChange: $e,
              onFocus: se,
              onBlur: ze,
              onKeyDown: Ve,
              className: "text-foreground text-xs bg-transparent outline-none border-none p-0",
              size: Ne.length
            }
          )
        }
      )
    ] }),
    h || e.isAllDay ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex cursor-default items-center gap-3 px-4",
          onClick: () => Ie(!(e.isAllDay ?? !1)),
          children: [
            /* @__PURE__ */ a.jsx(
              _k,
              {
                size: "xs",
                checked: e.isAllDay ?? !1,
                onCheckedChange: Ie,
                onClick: (A) => A.stopPropagation(),
                className: "data-[state=unchecked]:!bg-[#C7C5C1] dark:data-[state=unchecked]:!bg-[#595959] data-[state=checked]:!bg-[#3A85D3]"
              }
            ),
            /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: "All-day" })
          ]
        }
      ),
      !e.isAllDay && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(kp, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsx(Ak, { timezone: e.timezone ?? "GMT-3 Sao Paulo" })
      ] }),
      e.recurrence ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(Ya, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between", children: [
          /* @__PURE__ */ a.jsx(Ik, { recurrence: e.recurrence }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsx(Ye, { variant: "ghost", size: "icon", className: "size-6 text-[#C7C5C1] dark:text-[#595959]", onClick: n, children: /* @__PURE__ */ a.jsx(Sc, { className: "size-3.5" }) }),
            /* @__PURE__ */ a.jsx(Ye, { variant: "ghost", size: "icon", className: "size-6 text-[#C7C5C1] dark:text-[#595959]", onClick: r, children: /* @__PURE__ */ a.jsx(eo, { className: "size-3.5" }) })
          ] })
        ] })
      ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(Ya, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: "Repeat" })
      ] })
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "-mt-2 flex items-center pl-8", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "group/options flex cursor-default items-center gap-4 rounded-sm px-2 py-1.5 hover:bg-[#E8E8E4] dark:hover:bg-[#242424]",
        onClick: () => p(!0),
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959] dark:group-hover/options:text-[#636363]", children: "All-day" }),
          /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959] dark:group-hover/options:text-[#636363]", children: "Time zone" }),
          /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959] dark:group-hover/options:text-[#636363]", children: "Repeat" })
        ]
      }
    ) }),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col px-4", children: [
      /* @__PURE__ */ a.jsx(Dr, { icon: Zp, label: "Participants and Rooms" }),
      /* @__PURE__ */ a.jsx(Dr, { icon: eg, label: "Conferencing" }),
      /* @__PURE__ */ a.jsx(Dr, { icon: _p, label: "AI Meeting Notes and Docs" }),
      /* @__PURE__ */ a.jsx(Dr, { icon: Ep, label: "Location", value: e.location })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1 px-4", children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: "Description" }),
      e.description && /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e.description })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 px-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: j("size-3 rounded-xs", Ok[s]) }),
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e.calendarEmail ?? e.calendarId ?? "Calendar" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-1 grid grid-cols-2 pl-9", children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs font-medium capitalize", children: e.status ?? "Busy" }),
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs font-medium", children: Pk(e.visibility) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-1 flex flex-col gap-3 px-4", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(ep, { className: "size-4 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: "Reminders" })
      ] }),
      e.reminders && e.reminders.length > 0 && e.reminders.map((A) => /* @__PURE__ */ a.jsxs(
        "span",
        {
          className: "text-foreground pl-6 text-xs",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: "font-medium", children: [
              A.amount,
              A.unit.replace(/s$/, "")
            ] }),
            " ",
            "before"
          ]
        },
        `${A.amount}-${A.unit}`
      ))
    ] })
  ] });
}
const Id = u.createContext({
  boundary: null,
  headerHeight: 0,
  view: "week",
  boundaryRight: 0,
  headerBottom: 0
});
function Wk({
  boundaryRef: e,
  headerRef: t,
  view: n = "week",
  children: r
}) {
  const [o, s] = u.useState(null), [i, c] = u.useState(0), [l, d] = u.useState(0), [m, f] = u.useState(0);
  u.useEffect(() => {
    s(e.current);
  }, [e]), u.useEffect(() => {
    const p = t.current;
    if (!p) return;
    const b = () => {
      c(p.offsetHeight), f(p.getBoundingClientRect().bottom);
    };
    b();
    const g = new ResizeObserver(b);
    return g.observe(p), () => g.disconnect();
  }, [t]), u.useEffect(() => {
    const p = e.current;
    if (!p) return;
    const b = () => {
      d(p.getBoundingClientRect().right);
    };
    b();
    const g = new ResizeObserver(b);
    return g.observe(p), () => g.disconnect();
  }, [e]);
  const h = u.useMemo(
    () => ({ boundary: o, headerHeight: i, view: n, boundaryRight: l, headerBottom: m }),
    [o, i, n, l, m]
  );
  return /* @__PURE__ */ a.jsx(Id.Provider, { value: h, children: r });
}
function mr() {
  return u.useContext(Id);
}
function Fd({
  event: e,
  onEventChange: t,
  onClose: n,
  onDockToSidebar: r,
  onPrevWeek: o,
  onNextWeek: s,
  side: i = "right",
  align: c = "center",
  collisionPaddingTop: l
}) {
  const { boundary: d, headerHeight: m, view: f } = mr(), p = f === "day" ? void 0 : d ? [d] : void 0, b = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ye,
      {
        variant: "ghost",
        size: "icon",
        className: "size-7 text-[#C7C5C1] dark:text-[#595959]",
        onClick: (g) => {
          g.stopPropagation(), r();
        },
        title: "Dock to sidebar",
        children: /* @__PURE__ */ a.jsx(Ws, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ye,
      {
        variant: "ghost",
        size: "icon",
        className: "size-7 text-[#C7C5C1] dark:text-[#595959]",
        onClick: (g) => {
          g.stopPropagation(), n();
        },
        title: "Close",
        children: /* @__PURE__ */ a.jsx(to, { className: "size-4" })
      }
    )
  ] });
  return /* @__PURE__ */ a.jsx(
    Tk,
    {
      side: i,
      align: c,
      sideOffset: 8,
      collisionPadding: {
        top: l ?? m,
        bottom: 8,
        left: 16,
        right: 16
      },
      collisionBoundary: p,
      className: "w-[320px] max-h-[80vh] overflow-y-auto p-0 bg-popover/60 backdrop-blur-xl border shadow-lg rounded-lg",
      onOpenAutoFocus: (g) => g.preventDefault(),
      onCloseAutoFocus: (g) => g.preventDefault(),
      onInteractOutside: (g) => {
        g.target.closest("[data-radix-popper-content-wrapper]") && g.preventDefault();
      },
      children: /* @__PURE__ */ a.jsx(
        js,
        {
          event: e,
          onEventChange: t,
          onPrevWeek: o,
          onNextWeek: s,
          headerActions: b
        }
      )
    }
  );
}
const Lk = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "gray"
], Ai = {
  red: "bg-event-red-border",
  orange: "bg-event-orange-border",
  yellow: "bg-event-yellow-border",
  green: "bg-event-green-border",
  blue: "bg-event-blue-border",
  purple: "bg-event-purple-border",
  gray: "bg-event-gray-border"
}, $k = [
  {
    email: "me@vmnog.com",
    calendars: [
      { name: "me@vmnog.com", color: "red" },
      { name: "Personal", color: "purple" },
      { name: "Work", color: "blue" },
      { name: "Family", color: "orange" },
      { name: "Side Projects", color: "yellow" },
      { name: "Fitness", color: "green" },
      { name: "Holidays in Brazil", color: "green" }
    ]
  }
];
function Bn({
  className: e,
  children: t,
  onSelect: n
}) {
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      className: j(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-xs outline-none select-none",
        "text-white hover:bg-[#303030] focus:bg-[#303030]",
        e
      ),
      onClick: n,
      children: t
    }
  );
}
function Sr({ children: e }) {
  return /* @__PURE__ */ a.jsx("span", { className: "ml-auto text-xs text-white/40", children: e });
}
function Ko() {
  return /* @__PURE__ */ a.jsx("div", { className: "-mx-1 my-1 h-px bg-[#303030]" });
}
function zk({
  trigger: e,
  children: t
}) {
  const [n, r] = u.useState(!1), o = u.useRef(null);
  function s() {
    o.current && clearTimeout(o.current), r(!0);
  }
  function i() {
    o.current = setTimeout(() => r(!1), 150);
  }
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: s,
      onMouseLeave: i,
      children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: j(
              "relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-xs outline-none select-none",
              "text-white hover:bg-[#303030] focus:bg-[#303030]",
              n && "bg-[#303030]"
            ),
            children: [
              e,
              /* @__PURE__ */ a.jsx(
                "svg",
                {
                  className: "ml-auto size-4 text-white/60",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /* @__PURE__ */ a.jsx("path", { d: "m9 18 6-6-6-6" })
                }
              )
            ]
          }
        ),
        n && /* @__PURE__ */ a.jsx("div", { className: "absolute left-full top-0 ml-1 min-w-[180px] rounded-sm border border-[#303030] bg-[#252525] p-1 shadow-lg", children: t })
      ]
    }
  );
}
function Xr({
  event: e,
  position: t,
  onClose: n,
  onEventChange: r
}) {
  const o = u.useRef(null), [s, i] = u.useState(t), [c, l] = u.useState(!1), d = e.color ?? "blue";
  u.useLayoutEffect(() => {
    const h = o.current;
    if (!h) return;
    const p = h.offsetHeight, b = h.offsetWidth;
    let g = t.y, x = t.x;
    t.y + p > window.innerHeight && (g = t.y - p), t.x + b > window.innerWidth && (x = t.x - b), i({ x, y: g }), l(!0);
  }, [t]), u.useEffect(() => {
    function h(b) {
      o.current && (o.current.contains(b.target) || n());
    }
    function p(b) {
      b.key === "Escape" && n();
    }
    return document.addEventListener("mousedown", h, !0), document.addEventListener("keydown", p), () => {
      document.removeEventListener("mousedown", h, !0), document.removeEventListener("keydown", p);
    };
  }, [n]);
  function m(h) {
    r?.({ ...e, color: h }), n();
  }
  function f(h) {
    r?.({ ...e, calendarId: h }), n();
  }
  return tr(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: o,
        className: "fixed z-50 min-w-[200px] rounded-sm border border-[#303030] bg-[#252525] p-1 shadow-md animate-in fade-in-0 zoom-in-95",
        style: {
          top: s.y,
          left: s.x,
          opacity: c ? 1 : 0
        },
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-1.5 px-2 py-1.5", children: Lk.map((h) => /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: j(
                "relative flex size-3 items-center justify-center rounded-xs",
                Ai[h]
              ),
              onClick: () => m(h),
              children: h === d && /* @__PURE__ */ a.jsx(qn, { className: "size-2 text-white" })
            },
            h
          )) }),
          /* @__PURE__ */ a.jsx(Ko, {}),
          /* @__PURE__ */ a.jsx(
            zk,
            {
              trigger: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx(us, { className: "size-3.5" }),
                "Block on calendar"
              ] }),
              children: $k.map((h) => /* @__PURE__ */ a.jsxs(u.Fragment, { children: [
                /* @__PURE__ */ a.jsx("div", { className: "px-2 py-1 text-[10px] text-white/40", children: h.email }),
                h.calendars.map((p) => /* @__PURE__ */ a.jsxs(
                  Bn,
                  {
                    onSelect: () => f(p.name),
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: j(
                            "size-3 rounded-xs shrink-0",
                            Ai[p.color]
                          )
                        }
                      ),
                      p.name
                    ]
                  },
                  p.name
                ))
              ] }, h.email))
            }
          ),
          /* @__PURE__ */ a.jsx(Ko, {}),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(_c, { className: "size-3.5" }),
            "Cut",
            /* @__PURE__ */ a.jsx(Sr, { children: "⌘X" })
          ] }),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(Oc, { className: "size-3.5" }),
            "Copy",
            /* @__PURE__ */ a.jsx(Sr, { children: "⌘C" })
          ] }),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(jc, { className: "size-3.5" }),
            "Duplicate",
            /* @__PURE__ */ a.jsx(Sr, { children: "⌘D" })
          ] }),
          /* @__PURE__ */ a.jsx(Ko, {}),
          /* @__PURE__ */ a.jsxs(Bn, { className: "text-[#E56458] hover:!bg-[#DE5551] hover:!text-white focus:!bg-[#DE5551] focus:!text-white [&:hover>svg]:!text-white [&:focus>svg]:!text-white [&:hover>.ml-auto]:!text-white [&:focus>.ml-auto]:!text-white", children: [
            /* @__PURE__ */ a.jsx(Rc, { className: "size-3.5 text-[#E56458]" }),
            "Delete",
            /* @__PURE__ */ a.jsx(Sr, { children: "delete" })
          ] })
        ]
      }
    ),
    document.body
  );
}
const wa = {
  red: {
    bg: "bg-event-red-bg",
    bgHover: "hover:bg-event-red-bg/70",
    border: "bg-event-red-border",
    borderLine: "border-event-red-border",
    text: "text-event-red"
  },
  orange: {
    bg: "bg-event-orange-bg",
    bgHover: "hover:bg-event-orange-bg/70",
    border: "bg-event-orange-border",
    borderLine: "border-event-orange-border",
    text: "text-event-orange"
  },
  yellow: {
    bg: "bg-event-yellow-bg",
    bgHover: "hover:bg-event-yellow-bg/70",
    border: "bg-event-yellow-border",
    borderLine: "border-event-yellow-border",
    text: "text-event-yellow"
  },
  green: {
    bg: "bg-event-green-bg",
    bgHover: "hover:bg-event-green-bg/70",
    border: "bg-event-green-border",
    borderLine: "border-event-green-border",
    text: "text-event-green"
  },
  blue: {
    bg: "bg-event-blue-bg",
    bgHover: "hover:bg-event-blue-bg/70",
    border: "bg-event-blue-border",
    borderLine: "border-event-blue-border",
    text: "text-event-blue"
  },
  purple: {
    bg: "bg-event-purple-bg",
    bgHover: "hover:bg-event-purple-bg/70",
    border: "bg-event-purple-border",
    borderLine: "border-event-purple-border",
    text: "text-event-purple"
  },
  gray: {
    bg: "bg-event-gray-bg",
    bgHover: "hover:bg-event-gray-bg/70",
    border: "bg-event-gray-border",
    borderLine: "border-event-gray-border",
    text: "text-event-gray"
  }
};
function Ii(e) {
  return e.getMinutes() === 0 ? ve(e, "h") : ve(e, "h:mm");
}
function Xo(e) {
  const t = Ii(e.start), n = Ii(e.end), r = ve(e.end, "a"), o = ve(e.start, "a");
  return o === r ? `${t}–${n} ${r}` : `${t} ${o}–${n} ${r}`;
}
function Yk(e, t, n, r) {
  const o = n.getHours() * 60 + n.getMinutes();
  let s = r.getHours() * 60 + r.getMinutes();
  s === 0 && r.getDate() !== n.getDate() && (s = 1440);
  const i = o / 60 * t, c = (s - o) / 60 * t;
  return {
    top: `${i}px`,
    height: `${c}px`,
    left: `${e.left}%`,
    width: `${e.width}%`,
    minHeight: "20px"
  };
}
const pn = 8;
function sn({
  positionedEvent: e,
  hourHeight: t,
  isPast: n,
  isSelected: r,
  onClick: o,
  dragVariant: s = "default",
  overrideStart: i,
  overrideEnd: c,
  onDragMouseDown: l,
  onResizeMouseDown: d,
  onEventChange: m,
  cursorY: f,
  cursorX: h,
  fixedWidth: p,
  fixedHeight: b,
  onContextMenuOpenChange: g,
  isSidebarOpen: x,
  onDockToSidebar: v,
  onClosePopover: y,
  onPrevWeek: k,
  onNextWeek: M,
  className: N
}) {
  const { event: w, segmentPosition: E = "full" } = e, D = w.color ?? "blue", T = wa[D], P = n ?? Un(w.end), { view: L, boundaryRight: z, headerBottom: H } = mr(), G = L === "day", q = u.useRef(null), [I, _] = u.useState(null), O = r && x === !1;
  u.useLayoutEffect(() => {
    if (!O || !G || !q.current) {
      _(null);
      return;
    }
    const se = q.current.getBoundingClientRect();
    _({ top: se.top, height: se.height });
  }, [O, G]);
  const R = E === "start" || E === "full", $ = E === "end" || E === "full", C = E === "start" || E === "full", S = E === "end" || E === "full", [F, Y] = u.useState(null), B = u.useCallback(() => {
    Y(null), g?.(!1);
  }, [g]), U = i ?? w.start, W = c ?? w.end, Z = i && c ? { ...w, start: U, end: W } : w, ne = {
    top: `${e.top}%`,
    height: `${e.height}%`,
    left: `${e.left}%`,
    width: `${e.width}%`,
    minHeight: "20px",
    zIndex: r ? 20 : e.column
  }, ue = i && c ? Yk(
    e,
    t,
    i,
    c
  ) : ne, Oe = (i && c ? Number.parseFloat(String(ue.height)) : e.height / 100 * 24 * t) < 40;
  if (s === "ghost")
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: j(
          "absolute rounded-sm px-2 py-1 pointer-events-none opacity-30 overflow-hidden",
          N
        ),
        style: {
          top: `${e.top}%`,
          height: `${e.height}%`,
          left: `${e.left}%`,
          width: `${e.width}%`,
          minHeight: "20px",
          zIndex: 15
        },
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 rounded-sm bg-white dark:bg-[#191919]" }),
          /* @__PURE__ */ a.jsx("div", { className: j("absolute inset-0 rounded-sm", T.bg) }),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md dark:bg-white dark:mix-blend-overlay",
                T.border
              )
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: j(
                "relative flex flex-col h-full pl-1 overflow-hidden",
                Oe && "flex-row items-center gap-1"
              ),
              children: [
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: j(
                      "font-medium text-[0.625rem] leading-tight break-words",
                      T.text,
                      "dark:text-white/80"
                    ),
                    children: w.title
                  }
                ),
                !Oe && /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: j(
                      "text-[0.625rem] whitespace-nowrap",
                      T.text,
                      "dark:text-white dark:mix-blend-overlay"
                    ),
                    children: Xo(w)
                  }
                )
              ]
            }
          )
        ]
      }
    );
  if (s === "placeholder")
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: j(
          "absolute rounded-sm pointer-events-none border-2",
          T.borderLine,
          N
        ),
        style: {
          ...ue,
          left: "0%",
          width: "100%",
          zIndex: 25
        }
      }
    );
  if (s === "dragging") {
    const se = (W.getTime() - U.getTime()) / 6e4, ze = b ?? se / 60 * t, Ee = h != null && f != null ? {
      position: "fixed",
      top: `${f}px`,
      left: `${h}px`,
      height: `${ze}px`,
      width: p != null ? `${p}px` : "200px",
      minHeight: "20px",
      zIndex: 30
    } : {
      top: ue.top,
      height: `${ze}px`,
      left: `${e.left}%`,
      width: `${e.width}%`,
      minHeight: "20px",
      zIndex: 30
    };
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        tabIndex: -1,
        className: j(
          "absolute rounded-sm px-2 py-1",
          "pointer-events-none cursor-grabbing",
          "overflow-hidden select-none opacity-80 shadow-lg",
          N
        ),
        style: Ee,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 rounded-sm bg-white dark:bg-[#191919]" }),
          /* @__PURE__ */ a.jsx("div", { className: j("absolute inset-0 rounded-sm", T.bg) }),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md dark:bg-white dark:mix-blend-overlay",
                T.border
              )
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: j(
                "relative flex flex-col h-full pl-1 overflow-hidden",
                ze < 40 && "flex-row items-center gap-1"
              ),
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "font-medium text-[0.625rem] leading-tight break-words text-white dark:text-white flex items-center gap-0.5", children: w.title }),
                ze >= 40 && /* @__PURE__ */ a.jsx("span", { className: "text-[0.625rem] whitespace-nowrap text-white dark:text-white", children: Xo(Z) })
              ]
            }
          )
        ]
      }
    );
  }
  function Ne(se) {
    const ze = se.currentTarget, Ve = ze.getBoundingClientRect(), Ee = se.clientY - Ve.top, Ie = Ve.height;
    if (C && S && Ie < pn * 2) {
      ze.style.cursor = "ns-resize";
      return;
    }
    if (C && Ee <= pn) {
      ze.style.cursor = "ns-resize";
      return;
    }
    if (S && Ee >= Ie - pn) {
      ze.style.cursor = "ns-resize";
      return;
    }
    ze.style.cursor = "pointer";
  }
  function ge(se) {
    se.stopPropagation();
    const Ve = se.currentTarget.getBoundingClientRect(), Ee = se.clientY - Ve.top, Ie = Ve.height;
    if (C && S && Ie < pn * 2) {
      const rt = Ee < Ie / 2 ? "top" : "bottom";
      d?.(se, w, rt);
      return;
    }
    if (C && Ee <= pn) {
      d?.(se, w, "top");
      return;
    }
    if (S && Ee >= Ie - pn) {
      d?.(se, w, "bottom");
      return;
    }
    l?.(se, w);
  }
  function Me(se) {
    se.stopPropagation(), o && o(w);
  }
  function Ge(se) {
    se.key !== "Enter" && se.key !== " " || (se.preventDefault(), o?.(w));
  }
  function Le(se) {
    se.preventDefault(), se.stopPropagation(), Y({ x: se.clientX, y: se.clientY }), g?.(!0);
  }
  const $e = /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: q,
      role: "button",
      tabIndex: 0,
      onMouseDown: ge,
      onMouseMove: Ne,
      onClick: Me,
      onKeyDown: Ge,
      onContextMenu: Le,
      className: j(
        "absolute px-2 py-1",
        R && "rounded-t-md",
        $ && "rounded-b-md",
        "cursor-pointer hover:z-10 focus:outline-none focus-visible:outline-none",
        "overflow-hidden select-none",
        r && "z-20",
        N
      ),
      style: {
        ...ue,
        zIndex: r ? 20 : e.column
      },
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute inset-0 bg-white dark:bg-[#191919]",
              R && "rounded-t-md",
              $ && "rounded-b-md"
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute inset-0",
              R && "rounded-t-md",
              $ && "rounded-b-md",
              r ? T.border : T.bg,
              P && !r && "opacity-60"
            )
          }
        ),
        !r && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute left-0 top-0 bottom-0 w-[4px] dark:bg-white dark:mix-blend-overlay",
              R && "rounded-tl-md",
              $ && "rounded-bl-md",
              T.border,
              P && "opacity-60"
            )
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: j(
              "relative flex flex-col h-full pl-1 overflow-hidden",
              Oe && "flex-row items-center gap-1"
            ),
            children: [
              /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: j(
                    "font-medium text-[0.625rem] leading-tight break-words flex items-center gap-0.5",
                    r ? "text-white dark:text-white" : j(
                      T.text,
                      "dark:text-white/80",
                      P && "opacity-60"
                    )
                  ),
                  children: w.title
                }
              ),
              !Oe && /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: j(
                    "text-[0.625rem] whitespace-nowrap",
                    r ? "text-white dark:text-white" : j(
                      T.text,
                      "dark:text-white dark:mix-blend-overlay",
                      P && "opacity-60 dark:opacity-100"
                    )
                  ),
                  children: Xo(Z)
                }
              )
            ]
          }
        )
      ]
    }
  );
  return O ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      Rd,
      {
        open: !0,
        onOpenChange: (se) => {
          se || y?.();
        },
        children: [
          /* @__PURE__ */ a.jsx(Pd, { asChild: !0, children: $e }),
          G && tr(
            /* @__PURE__ */ a.jsx(
              Ad,
              {
                className: "pointer-events-none",
                style: {
                  position: "fixed",
                  left: z,
                  top: I?.top ?? 0,
                  height: I?.height ?? 0,
                  width: 0
                }
              }
            ),
            document.body
          ),
          /* @__PURE__ */ a.jsx(
            Fd,
            {
              event: w,
              onEventChange: m,
              onClose: () => y?.(),
              onDockToSidebar: () => v?.(),
              onPrevWeek: k,
              onNextWeek: M,
              side: G ? "left" : "right",
              collisionPaddingTop: G ? H : void 0
            }
          )
        ]
      }
    ),
    F && /* @__PURE__ */ a.jsx(
      Xr,
      {
        event: w,
        position: F,
        onClose: B,
        onEventChange: m
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    $e,
    F && /* @__PURE__ */ a.jsx(
      Xr,
      {
        event: w,
        position: F,
        onClose: B,
        onEventChange: m
      }
    )
  ] });
}
function Bk(e) {
  return e.getMinutes() === 0 ? ve(e, "h a") : ve(e, "h:mm a");
}
const jr = 6;
function ka({
  event: e,
  isPast: t,
  isSelected: n,
  onClick: r,
  className: o,
  spanStart: s = !0,
  spanEnd: i = !0,
  onResizeMouseDown: c,
  onEventChange: l,
  onContextMenuOpenChange: d,
  isSidebarOpen: m,
  onDockToSidebar: f,
  onClosePopover: h,
  onPrevWeek: p,
  onNextWeek: b,
  titleOffsetPercent: g = 0,
  dragVariant: x
}) {
  const v = e.color ?? "blue", y = wa[v], { view: k, boundaryRight: M, headerBottom: N } = mr(), w = k === "day", E = t ?? Un(e.end), [D, T] = u.useState(null), P = u.useCallback(() => {
    T(null), d?.(!1);
  }, [d]);
  if (x === "ghost")
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: j(
          "relative h-6 px-2 py-0.5 pointer-events-none opacity-30",
          "overflow-hidden select-none flex items-center gap-1",
          s && "rounded-l-md",
          i && "rounded-r-md",
          o
        ),
        children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute inset-0 bg-white dark:bg-[#191919]",
                s && "rounded-l-md",
                i && "rounded-r-md"
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute inset-0",
                y.bg,
                s && "rounded-l-md",
                i && "rounded-r-md"
              )
            }
          ),
          s && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute left-0 top-0 bottom-0 w-[4px] dark:bg-white dark:mix-blend-overlay",
                s && "rounded-l-md",
                y.border
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: j(
                "relative font-medium text-[0.625rem] leading-tight whitespace-nowrap",
                s && "pl-1",
                y.text,
                "dark:text-white/80"
              ),
              children: e.title
            }
          )
        ]
      }
    );
  if (x === "placeholder")
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: j(
          "relative h-6 pointer-events-none border-2 rounded-sm",
          y.borderLine,
          o
        )
      }
    );
  if (x === "dragging")
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: j(
          "h-6 px-2 py-0.5 pointer-events-none cursor-grabbing",
          "overflow-hidden select-none flex items-center gap-1",
          "rounded-sm opacity-80 shadow-lg",
          o
        ),
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 rounded-sm bg-white dark:bg-[#191919]" }),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j("absolute inset-0 rounded-sm", y.bg)
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md dark:bg-white dark:mix-blend-overlay",
                y.border
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: j(
                "relative font-medium text-[0.625rem] leading-tight whitespace-nowrap pl-1",
                y.text,
                "dark:text-white/80"
              ),
              children: e.title
            }
          )
        ]
      }
    );
  const L = e.start.getHours() !== 0 || e.start.getMinutes() !== 0;
  function z(R) {
    R.stopPropagation(), r && r(e);
  }
  function H(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), r?.(e));
  }
  function G(R) {
    const $ = R.currentTarget, C = $.getBoundingClientRect(), S = R.clientX - C.left, F = C.width;
    if (s && S <= jr) {
      $.style.cursor = "ew-resize";
      return;
    }
    if (i && S >= F - jr) {
      $.style.cursor = "ew-resize";
      return;
    }
    $.style.cursor = "grab";
  }
  function q(R) {
    if (!c) return;
    const C = R.currentTarget.getBoundingClientRect(), S = R.clientX - C.left, F = C.width;
    if (s && S <= jr) {
      R.stopPropagation(), c(R, e, "left");
      return;
    }
    if (i && S >= F - jr) {
      R.stopPropagation(), c(R, e, "right");
      return;
    }
    R.stopPropagation(), c(R, e, "move");
  }
  function I(R) {
    R.preventDefault(), R.stopPropagation(), T({ x: R.clientX, y: R.clientY }), d?.(!0);
  }
  const _ = n && m === !1, O = /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "button",
      tabIndex: 0,
      onClick: z,
      onKeyDown: H,
      onContextMenu: I,
      onMouseMove: G,
      onMouseDown: q,
      className: j(
        "relative h-6 px-2 py-0.5 cursor-pointer",
        "hover:z-10 focus:outline-none focus-visible:outline-none",
        "overflow-hidden select-none flex items-center gap-1",
        s && "rounded-l-md",
        i && "rounded-r-md",
        n && "z-20",
        o
      ),
      style: g > 0 ? { paddingLeft: `${g}%` } : void 0,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute inset-0 bg-white dark:bg-[#191919]",
              s && "rounded-l-md",
              i && "rounded-r-md"
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute inset-0",
              n ? y.border : y.bg,
              s && "rounded-l-md",
              i && "rounded-r-md",
              E && !n && "opacity-60"
            )
          }
        ),
        s && !n && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute left-0 top-0 bottom-0 w-[4px] dark:bg-white dark:mix-blend-overlay",
              s && "rounded-l-md",
              y.border,
              E && "opacity-60"
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: j(
              "relative font-medium text-[0.625rem] leading-tight whitespace-nowrap",
              s && "pl-1",
              n ? "text-white dark:text-white" : j(
                y.text,
                "dark:text-white/80",
                E && "opacity-60"
              )
            ),
            children: e.title
          }
        ),
        L && /* @__PURE__ */ a.jsx(
          "span",
          {
            className: j(
              "relative text-[0.625rem] leading-tight whitespace-nowrap shrink-0",
              n ? "text-white dark:text-white" : j(
                y.text,
                "dark:text-white dark:mix-blend-overlay",
                E && "opacity-60"
              )
            ),
            children: Bk(e.start)
          }
        )
      ]
    }
  );
  return _ ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      Rd,
      {
        open: !0,
        onOpenChange: (R) => {
          R || h?.();
        },
        children: [
          /* @__PURE__ */ a.jsx(Pd, { asChild: !0, children: O }),
          w && tr(
            /* @__PURE__ */ a.jsx(
              Ad,
              {
                className: "pointer-events-none",
                style: {
                  position: "fixed",
                  left: M,
                  top: 0,
                  bottom: 0,
                  width: 0
                }
              }
            ),
            document.body
          ),
          /* @__PURE__ */ a.jsx(
            Fd,
            {
              event: e,
              onEventChange: l,
              onClose: () => h?.(),
              onDockToSidebar: () => f?.(),
              onPrevWeek: p,
              onNextWeek: b,
              side: w ? "left" : "right",
              align: "start",
              collisionPaddingTop: w ? N : void 0
            }
          )
        ]
      }
    ),
    D && /* @__PURE__ */ a.jsx(
      Xr,
      {
        event: e,
        position: D,
        onClose: P,
        onEventChange: l
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    O,
    D && /* @__PURE__ */ a.jsx(
      Xr,
      {
        event: e,
        position: D,
        onClose: P,
        onEventChange: l
      }
    )
  ] });
}
function Hk(e, t) {
  const n = Lr(t, e), r = Math.floor(n / 60), o = n % 60;
  return r === 0 ? `${o}min` : o === 0 ? `${r}h` : `${r}h ${o}min`;
}
function Gk(e) {
  if (e.isAllDay)
    return "All day";
  const t = ve(e.start, "a"), n = ve(e.end, "a"), r = ve(e.end, "h:mm a").replace(":00 ", " ");
  return t === n ? `${ve(e.start, "h:mm").replace(":00", "")}–${r}` : `${ve(e.start, "h:mm a").replace(":00 ", " ")}–${r}`;
}
function Vk(e) {
  return ls(e) ? { label: "Today", isTodayGroup: !0 } : Bh(e) ? { label: "Tomorrow", isTodayGroup: !1 } : Ec(e, /* @__PURE__ */ new Date()) ? { label: ve(e, "EEE MMM d"), isTodayGroup: !1 } : { label: ve(e, "EEE MMM d, yyyy"), isTodayGroup: !1 };
}
function Uk(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = ve(Be(r.start), "yyyy-MM-dd"), s = t.get(o);
    s ? s.push(r) : t.set(o, [r]);
  }
  const n = [];
  for (const [r, o] of t) {
    const s = o[0].start, { label: i, isTodayGroup: c } = Vk(s), l = o.sort((d, m) => d.start.getTime() - m.start.getTime());
    n.push({ key: r, label: i, isToday: c, events: l });
  }
  return n.sort((r, o) => r.key.localeCompare(o.key));
}
function qk({
  events: e = [],
  selectedEvent: t,
  onEventChange: n,
  onPrevWeek: r,
  onNextWeek: o,
  ...s
}) {
  const { toggleSidebar: i } = wo(), [c, l] = u.useState(""), [d, m] = u.useState(""), [f, h] = u.useState(null), p = u.useRef(null), b = c.trim().length > 0, g = b && c !== d;
  u.useEffect(() => {
    if (!b) {
      m("");
      return;
    }
    const w = setTimeout(() => {
      m(c);
    }, 400);
    return () => clearTimeout(w);
  }, [c, b]);
  const x = u.useMemo(() => f ? e.find((w) => w.id === f.id) ?? f : null, [e, f]);
  u.useEffect(() => {
    t && h(null);
  }, [t]);
  const v = u.useMemo(() => {
    if (!d.trim())
      return [];
    const w = d.trim().toLowerCase();
    return e.filter(
      (E) => E.title.toLowerCase().includes(w)
    );
  }, [e, d]), { pastGroups: y, todayGroup: k, futureGroups: M } = u.useMemo(() => {
    const w = Uk(v), D = Be(/* @__PURE__ */ new Date()), T = [];
    let P = null;
    const L = [];
    for (const z of w) {
      if (z.isToday) {
        P = z;
        continue;
      }
      const H = new Date(z.key);
      if (wc(H, D)) {
        T.push(z);
        continue;
      }
      L.push(z);
    }
    return { pastGroups: T, todayGroup: P, futureGroups: L };
  }, [v]), N = k !== null || M.length > 0;
  return /* @__PURE__ */ a.jsxs(Nk, { side: "right", className: "border-l !bg-context-panel [&_[data-slot=sidebar-inner]]:!bg-context-panel", style: { "--muted-foreground": "#C7C5C1" }, ...s, children: [
    /* @__PURE__ */ a.jsx(Dk, { className: "h-14 justify-center px-4", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      t ? /* @__PURE__ */ a.jsx("div", { className: "flex-1" }) : x ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs(
          Ye,
          {
            variant: "ghost",
            className: "-ml-2 h-7 gap-2 px-2 has-[>svg]:px-2 text-xs text-[#91908F] justify-start",
            onClick: () => h(null),
            children: [
              /* @__PURE__ */ a.jsx(Zh, { className: "size-4" }),
              "Search"
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1" })
      ] }) : /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "group/search flex flex-1 cursor-text items-center gap-2 rounded-sm border border-transparent px-1 hover:border-[#F5F5F5] hover:bg-[#F5F5F5] dark:hover:border-[#373737] dark:hover:bg-transparent has-[:focus]:border-[#F5F5F5] has-[:focus]:bg-[#F5F5F5] dark:has-[:focus]:border-[#242424] dark:has-[:focus]:bg-[#242424]",
          onClick: () => p.current?.focus(),
          children: [
            /* @__PURE__ */ a.jsx(np, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: p,
                type: "text",
                placeholder: "Search events",
                value: c,
                onChange: (w) => l(w.target.value),
                className: "text-foreground placeholder:text-muted-foreground h-7 w-full border-none bg-transparent p-0 text-xs outline-none"
              }
            ),
            b && /* @__PURE__ */ a.jsx(
              Ye,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 shrink-0 opacity-0 transition-opacity group-hover/search:opacity-100 group-has-[:focus]/search:opacity-100",
                onClick: (w) => {
                  w.stopPropagation(), l(""), p.current?.focus();
                },
                children: /* @__PURE__ */ a.jsx(to, { className: "size-4" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(It, { children: [
        /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(
          Ye,
          {
            variant: "ghost",
            size: "icon",
            className: "size-7 shrink-0",
            onClick: i,
            children: /* @__PURE__ */ a.jsx(Ws, { className: "size-4" })
          }
        ) }),
        /* @__PURE__ */ a.jsxs(Wt, { side: "bottom", children: [
          "Close context panel ",
          /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "/" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(_d, { children: t ? /* @__PURE__ */ a.jsx(js, { event: t, onEventChange: n, onPrevWeek: r, onNextWeek: o }) : x ? /* @__PURE__ */ a.jsx(js, { event: x, onEventChange: n, onPrevWeek: r, onNextWeek: o }) : g ? /* @__PURE__ */ a.jsx("div", { className: "px-4 pl-8 pt-8", children: /* @__PURE__ */ a.jsxs("p", { className: "text-[#ABABA9] dark:text-[#7C7C7C] text-xs", children: [
      "Searching",
      /* @__PURE__ */ a.jsx(Xk, {})
    ] }) }) : b ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col pb-16", children: [
      y.map((w) => /* @__PURE__ */ a.jsx(Fi, { group: w, isPast: !0, onEventClick: h }, w.key)),
      /* @__PURE__ */ a.jsxs("div", { className: "px-4 pt-5", children: [
        /* @__PURE__ */ a.jsx("p", { className: "-ml-1 text-[#E8533E] text-xs font-semibold pb-3", children: "Today" }),
        k && /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: k.events.map((w) => /* @__PURE__ */ a.jsx(Wd, { event: w, onClick: h }, w.id)) }),
        !N && /* @__PURE__ */ a.jsx("p", { className: "text-[#ABABA9] dark:text-[#7F7F7F] pl-4 pt-1 text-xs", children: "No upcoming results" })
      ] }),
      M.map((w) => /* @__PURE__ */ a.jsx(Fi, { group: w, onEventClick: h }, w.key))
    ] }) : /* @__PURE__ */ a.jsxs(Mn, { className: "px-3 pt-6", children: [
      /* @__PURE__ */ a.jsx(Od, { className: "text-foreground text-xs font-semibold px-0", children: "Useful shortcuts" }),
      /* @__PURE__ */ a.jsx(er, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ a.jsxs(gn, { label: "Command menu", children: [
          /* @__PURE__ */ a.jsx(ie, { children: "⌘" }),
          /* @__PURE__ */ a.jsx(ie, { children: "K" })
        ] }),
        /* @__PURE__ */ a.jsxs(gn, { label: "Menu bar calendar", children: [
          /* @__PURE__ */ a.jsx(ie, { children: "control" }),
          /* @__PURE__ */ a.jsx(ie, { children: "⌘" }),
          /* @__PURE__ */ a.jsx(ie, { children: "K" })
        ] }),
        /* @__PURE__ */ a.jsx(gn, { label: "Toggle sidebar", children: /* @__PURE__ */ a.jsx(ie, { children: "`" }) }),
        /* @__PURE__ */ a.jsx(gn, { label: "Show teammate calendar", children: /* @__PURE__ */ a.jsx(ie, { children: "P" }) }),
        /* @__PURE__ */ a.jsx(gn, { label: "Go to date", children: /* @__PURE__ */ a.jsx(ie, { children: "." }) }),
        /* @__PURE__ */ a.jsx(gn, { label: "All keyboard shortcuts", children: /* @__PURE__ */ a.jsx(ie, { children: "?" }) })
      ] }) })
    ] }) })
  ] });
}
function Fi({ group: e, isPast: t = !1, onEventClick: n }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "px-4 pt-5", children: [
    /* @__PURE__ */ a.jsx("p", { className: `-ml-1 text-xs font-semibold pb-3 ${e.isToday ? "text-[#E8533E]" : "text-foreground"}`, children: e.label }),
    /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: e.events.map((r) => /* @__PURE__ */ a.jsx(Wd, { event: r, isPast: t, onClick: n }, r.id)) })
  ] });
}
const Wi = {
  future: {
    title: "text-[#32302C] dark:text-[#D4D4D4]",
    time: "text-[#787774] dark:text-[#7F7F7F]",
    duration: "text-[#ABABA9] dark:text-[#5A5A5A]",
    hover: "hover:bg-[#F5F5F5] dark:hover:bg-[#252525]"
  },
  past: {
    title: "text-[#989795] dark:text-[#777]",
    time: "text-[#BBBBB9] dark:text-[#4C4C4C]",
    duration: "text-[#D5D5D4] dark:text-[#3A3A3A]",
    hover: "hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F]"
  }
}, Kk = 300, Li = [
  [!1, !1, !1],
  [!0, !1, !1],
  [!0, !0, !1],
  [!0, !0, !0],
  [!1, !0, !0],
  [!1, !1, !0]
];
function Xk() {
  const [e, t] = u.useState(0);
  u.useEffect(() => {
    const r = setInterval(() => {
      t((o) => (o + 1) % Li.length);
    }, Kk);
    return () => clearInterval(r);
  }, []);
  const n = Li[e];
  return /* @__PURE__ */ a.jsx("span", { className: "ml-1 inline-flex items-center gap-0.5", children: [0, 1, 2].map((r) => /* @__PURE__ */ a.jsx(
    "span",
    {
      className: "inline-block size-0.5 rounded-full bg-[#ABABA9] dark:bg-[#7C7C7C] transition-opacity duration-200",
      style: { opacity: n[r] ? 1 : 0.1 }
    },
    r
  )) });
}
function Wd({ event: e, isPast: t = !1, onClick: n }) {
  const r = Gk(e), o = e.isAllDay ? "" : Hk(e.start, e.end), s = t ? Wi.past : Wi.future;
  return /* @__PURE__ */ a.jsxs("div", { className: `-mx-1 flex cursor-default items-start gap-2.5 rounded-sm px-1 py-2 ${s.hover}`, onClick: () => n?.(e), children: [
    /* @__PURE__ */ a.jsx("div", { className: `-mt-1 -mb-1 w-1 shrink-0 self-stretch rounded-full ${wa[e.color ?? "blue"].border} ${t ? "opacity-40" : ""}` }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-0 flex-col gap-0.5", children: [
      /* @__PURE__ */ a.jsx("p", { className: `truncate text-sm font-medium leading-snug ${s.title}`, children: e.title }),
      /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
        /* @__PURE__ */ a.jsx("span", { className: s.time, children: r }),
        o && /* @__PURE__ */ a.jsxs("span", { className: s.duration, children: [
          " ",
          o
        ] })
      ] })
    ] })
  ] });
}
function gn({
  label: e,
  children: t
}) {
  return /* @__PURE__ */ a.jsxs("div", { className: "text-muted-foreground flex items-center justify-between py-1 text-xs", children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-1", children: t })
  ] });
}
function Qk({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(tv, { "data-slot": "collapsible", ...e });
}
function Zk({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    Ll,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Jk({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    $l,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
const e1 = {
  red: "bg-event-red",
  orange: "bg-event-orange",
  yellow: "bg-event-yellow",
  green: "bg-event-green",
  blue: "bg-event-blue",
  purple: "bg-event-purple",
  gray: "bg-event-gray"
};
function t1({ accounts: e }) {
  const [t, n] = u.useState(
    () => {
      const o = /* @__PURE__ */ new Set();
      for (const s of e)
        for (const i of s.calendars)
          i.visible && o.add(`${s.email}-${i.name}`);
      return o;
    }
  ), r = (o, s) => {
    const i = `${o}-${s}`;
    n((c) => {
      const l = new Set(c);
      return l.has(i) ? l.delete(i) : l.add(i), l;
    });
  };
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: e.map((o, s) => /* @__PURE__ */ a.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsxs(Qk, { defaultOpen: !0, className: "group/collapsible", children: [
      /* @__PURE__ */ a.jsx(
        Od,
        {
          asChild: !0,
          className: "group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-xs",
          children: /* @__PURE__ */ a.jsxs(Zk, { children: [
            /* @__PURE__ */ a.jsx("span", { className: "truncate", children: o.email }),
            /* @__PURE__ */ a.jsx(eo, { className: "ml-auto shrink-0 opacity-0 transition-transform group-hover/label:opacity-100 group-data-[state=open]/collapsible:rotate-90" })
          ] })
        }
      ),
      /* @__PURE__ */ a.jsx(Jk, { children: /* @__PURE__ */ a.jsx(er, { children: /* @__PURE__ */ a.jsx(Cs, { className: "gap-0", children: o.calendars.map((i) => {
        const c = t.has(
          `${o.email}-${i.name}`
        );
        return /* @__PURE__ */ a.jsx(
          Ms,
          {
            className: "group/calendar-item",
            children: /* @__PURE__ */ a.jsxs(Ns, { className: "pr-1", children: [
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: j(
                    "size-3 shrink-0 flex items-center justify-center rounded-xs",
                    e1[i.color],
                    !c && "opacity-40"
                  ),
                  children: i.isSubscribed && /* @__PURE__ */ a.jsx(Lp, { className: "size-2 text-white" })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: j(
                    "flex-1 truncate text-xs text-sidebar-foreground",
                    !c && "opacity-50"
                  ),
                  children: i.name
                }
              ),
              /* @__PURE__ */ a.jsx(
                "span",
                {
                  role: "button",
                  tabIndex: 0,
                  className: "inline-flex size-6 shrink-0 items-center justify-center rounded-sm opacity-0 hover:bg-sidebar-accent group-hover/calendar-item:opacity-100",
                  onClick: (l) => {
                    l.stopPropagation(), r(o.email, i.name);
                  },
                  onKeyDown: (l) => {
                    (l.key === "Enter" || l.key === " ") && (l.preventDefault(), l.stopPropagation(), r(o.email, i.name));
                  },
                  children: c ? /* @__PURE__ */ a.jsx(Tc, { className: "size-3.5 text-sidebar-muted-foreground" }) : /* @__PURE__ */ a.jsx(xp, { className: "size-3.5 text-sidebar-muted-foreground" })
                }
              )
            ] })
          },
          i.name
        );
      }) }) }) })
    ] }) }),
    s < e.length - 1 && /* @__PURE__ */ a.jsx(Td, { className: "mx-0" })
  ] }, o.email)) });
}
function n1(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const r1 = {}, Vn = {};
function en(e, t) {
  try {
    const r = (r1[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Vn ? Vn[r] : $i(r, r.split(":"));
  } catch {
    if (e in Vn) return Vn[e];
    const n = e?.match(o1);
    return n ? $i(e, n.slice(1)) : NaN;
  }
}
const o1 = /([+-]\d\d):?(\d\d)?/;
function $i(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Vn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Mt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(en(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Ld(this), Ts(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Mt(...n, t) : new Mt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Mt(+this, t);
  }
  getTimezoneOffset() {
    const t = -en(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ts(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Mt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const zi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!zi.test(e)) return;
  const t = e.replace(zi, "$1UTC");
  Mt.prototype[t] && (e.startsWith("get") ? Mt.prototype[e] = function() {
    return this.internal[t]();
  } : (Mt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), s1(this), +this;
  }, Mt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ts(this), +this;
  }));
});
function Ts(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-en(e.timeZone, e) * 60));
}
function s1(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Ld(e);
}
function Ld(e) {
  const t = en(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - s, c = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && c && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const m = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, f = Math.round(-(en(e.timeZone, e) * 60)) % 60;
  (f || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + m));
  const h = en(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, x = p !== n, v = g - l;
  if (x && v) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
    const y = en(e.timeZone, e), k = y > 0 ? Math.floor(y) : Math.ceil(y), M = p - k;
    M && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + M), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + M));
  }
}
class qe extends Mt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new qe(...n, t) : new qe(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${n1(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new qe(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new qe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Yi = 5, a1 = 4;
function i1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Yi * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Yi : a1;
}
function $d(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function c1(e, t) {
  const n = $d(e, t), r = i1(e, t);
  return t.addDays(n, r * 7 - 1);
}
const zd = {
  ...Jt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, c) => ve(i, c, { locale: Jt, ...n });
      let s = o(e, "PPPP");
      return t.today && (s = `Today, ${s}`), t.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => ve(o, s, { locale: Jt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, c) => ve(i, c, { locale: Jt, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => ve(o, s, { locale: Jt, ...t }), r(e, "cccc");
    }
  }
};
class tt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? qe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new qe(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : _e(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : dc(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : as(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : If(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Nn(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : pc(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Hf(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Uf(r), s = new Set(o.map((c) => this.getYear(c)));
      if (s.size === o.length)
        return o;
      const i = [];
      return s.forEach((c) => {
        i.push(new Date(c, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : c1(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : qf(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Bf(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : xc(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Vf(r), this.format = (r, o, s) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : ve(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Jr(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Bm(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Hm(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : nr(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Gm(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : wc(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : hc(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : De(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Yh(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Ec(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Wf(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Lf(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Hh(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : Gh(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : $d(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Be(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : tn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Gf(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ft(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : gc(r), this.options = { locale: zd, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && tt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && tt.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
tt.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Tt = new tt();
class Yd {
  constructor(t, n, r = Tt) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class l1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class u1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function d1(e) {
  return V.createElement("button", { ...e });
}
function f1(e) {
  return V.createElement("span", { ...e });
}
function m1(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    V.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && V.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && V.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && V.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && V.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function h1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return V.createElement("td", { ...r });
}
function p1(e) {
  const { day: t, modifiers: n, ...r } = e, o = V.useRef(null);
  return V.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), V.createElement("button", { ref: o, ...r });
}
var Q;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Q || (Q = {}));
var je;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(je || (je = {}));
var dt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(dt || (dt = {}));
var Ze;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ze || (Ze = {}));
function g1(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, i = [o[Q.Dropdown], n].join(" "), c = t?.find(({ value: l }) => l === s.value);
  return V.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[Q.DropdownRoot] },
    V.createElement(r.Select, { className: i, ...s }, t?.map(({ value: l, label: d, disabled: m }) => V.createElement(r.Option, { key: l, value: l, disabled: m }, d))),
    V.createElement(
      "span",
      { className: o[Q.CaptionLabel], "aria-hidden": !0 },
      c?.label,
      V.createElement(r.Chevron, { orientation: "down", size: 18, className: o[Q.Chevron] })
    )
  );
}
function x1(e) {
  return V.createElement("div", { ...e });
}
function b1(e) {
  return V.createElement("div", { ...e });
}
function v1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r }, e.children);
}
function y1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r });
}
function w1(e) {
  return V.createElement("table", { ...e });
}
function k1(e) {
  return V.createElement("div", { ...e });
}
const Bd = Nf(void 0);
function hr() {
  const e = Ef(Bd);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function C1(e) {
  const { components: t } = hr();
  return V.createElement(t.Dropdown, { ...e });
}
function M1(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: i, classNames: c, labels: { labelPrevious: l, labelNext: d } } = hr(), m = we((h) => {
    o && n?.(h);
  }, [o, n]), f = we((h) => {
    r && t?.(h);
  }, [r, t]);
  return V.createElement(
    "nav",
    { ...s },
    V.createElement(
      i.PreviousMonthButton,
      { type: "button", className: c[Q.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      V.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: c[Q.Chevron], orientation: "left" })
    ),
    V.createElement(
      i.NextMonthButton,
      { type: "button", className: c[Q.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: m },
      V.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: c[Q.Chevron] })
    )
  );
}
function N1(e) {
  const { components: t } = hr();
  return V.createElement(t.Button, { ...e });
}
function E1(e) {
  return V.createElement("option", { ...e });
}
function D1(e) {
  const { components: t } = hr();
  return V.createElement(t.Button, { ...e });
}
function S1(e) {
  const { rootRef: t, ...n } = e;
  return V.createElement("div", { ...n, ref: t });
}
function j1(e) {
  return V.createElement("select", { ...e });
}
function T1(e) {
  const { week: t, ...n } = e;
  return V.createElement("tr", { ...n });
}
function _1(e) {
  return V.createElement("th", { ...e });
}
function O1(e) {
  return V.createElement(
    "thead",
    { "aria-hidden": !0 },
    V.createElement("tr", { ...e })
  );
}
function R1(e) {
  const { week: t, ...n } = e;
  return V.createElement("th", { ...n });
}
function P1(e) {
  return V.createElement("th", { ...e });
}
function A1(e) {
  return V.createElement("tbody", { ...e });
}
function I1(e) {
  const { components: t } = hr();
  return V.createElement(t.Dropdown, { ...e });
}
const F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: d1,
  CaptionLabel: f1,
  Chevron: m1,
  Day: h1,
  DayButton: p1,
  Dropdown: g1,
  DropdownNav: x1,
  Footer: b1,
  Month: v1,
  MonthCaption: y1,
  MonthGrid: w1,
  Months: k1,
  MonthsDropdown: C1,
  Nav: M1,
  NextMonthButton: N1,
  Option: E1,
  PreviousMonthButton: D1,
  Root: S1,
  Select: j1,
  Week: T1,
  WeekNumber: R1,
  WeekNumberHeader: P1,
  Weekday: _1,
  Weekdays: O1,
  Weeks: A1,
  YearsDropdown: I1
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, t, n = !1, r = Tt) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: i, isSameDay: c } = r;
  return o && s ? (i(s, o) < 0 && ([o, s] = [s, o]), i(t, o) >= (n ? 1 : 0) && i(s, t) >= (n ? 1 : 0)) : !n && s ? c(s, t) : !n && o ? c(o, t) : !1;
}
function Ca(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ko(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ma(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Na(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Hd(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Gd(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function At(e, t, n = Tt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: i } = n;
  return r.some((c) => {
    if (typeof c == "boolean")
      return c;
    if (n.isDate(c))
      return o(e, c);
    if (Gd(c, n))
      return c.some((l) => o(e, l));
    if (ko(c))
      return Pt(c, e, !1, n);
    if (Hd(c))
      return Array.isArray(c.dayOfWeek) ? c.dayOfWeek.includes(e.getDay()) : c.dayOfWeek === e.getDay();
    if (Ca(c)) {
      const l = s(c.before, e), d = s(c.after, e), m = l > 0, f = d < 0;
      return i(c.before, c.after) ? f && m : m || f;
    }
    return Ma(c) ? s(e, c.after) > 0 : Na(c) ? s(c.before, e) > 0 : typeof c == "function" ? c(e) : !1;
  });
}
function W1(e, t, n, r, o) {
  const { disabled: s, hidden: i, modifiers: c, showOutsideDays: l, broadcastCalendar: d, today: m = o.today() } = t, { isSameDay: f, isSameMonth: h, startOfMonth: p, isBefore: b, endOfMonth: g, isAfter: x } = o, v = n && p(n), y = r && g(r), k = {
    [je.focused]: [],
    [je.outside]: [],
    [je.disabled]: [],
    [je.hidden]: [],
    [je.today]: []
  }, M = {};
  for (const N of e) {
    const { date: w, displayMonth: E } = N, D = !!(E && !h(w, E)), T = !!(v && b(w, v)), P = !!(y && x(w, y)), L = !!(s && At(w, s, o)), z = !!(i && At(w, i, o)) || T || P || // Broadcast calendar will show outside days as default
    !d && !l && D || d && l === !1 && D, H = f(w, m);
    D && k.outside.push(N), L && k.disabled.push(N), z && k.hidden.push(N), H && k.today.push(N), c && Object.keys(c).forEach((G) => {
      const q = c?.[G];
      q && At(w, q, o) && (M[G] ? M[G].push(N) : M[G] = [N]);
    });
  }
  return (N) => {
    const w = {
      [je.focused]: !1,
      [je.disabled]: !1,
      [je.hidden]: !1,
      [je.outside]: !1,
      [je.today]: !1
    }, E = {};
    for (const D in k) {
      const T = k[D];
      w[D] = T.some((P) => P === N);
    }
    for (const D in M)
      E[D] = M[D].some((T) => T === N);
    return {
      ...w,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function L1(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[je[s]] ? o.push(t[je[s]]) : t[dt[s]] && o.push(t[dt[s]]), o), [t[Q.Day]]);
}
function $1(e) {
  return {
    ...F1,
    ...e
  };
}
function z1(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Ea() {
  const e = {};
  for (const t in Q)
    e[Q[t]] = `rdp-${Q[t]}`;
  for (const t in je)
    e[je[t]] = `rdp-${je[t]}`;
  for (const t in dt)
    e[dt[t]] = `rdp-${dt[t]}`;
  for (const t in Ze)
    e[Ze[t]] = `rdp-${Ze[t]}`;
  return e;
}
function Vd(e, t, n) {
  return (n ?? new tt(t)).formatMonthYear(e);
}
const Y1 = Vd;
function B1(e, t, n) {
  return (n ?? new tt(t)).format(e, "d");
}
function H1(e, t = Tt) {
  return t.format(e, "LLLL");
}
function G1(e, t, n) {
  return (n ?? new tt(t)).format(e, "cccccc");
}
function V1(e, t = Tt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function U1() {
  return "";
}
function Ud(e, t = Tt) {
  return t.format(e, "yyyy");
}
const q1 = Ud, K1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Vd,
  formatDay: B1,
  formatMonthCaption: Y1,
  formatMonthDropdown: H1,
  formatWeekNumber: V1,
  formatWeekNumberHeader: U1,
  formatWeekdayName: G1,
  formatYearCaption: q1,
  formatYearDropdown: Ud
}, Symbol.toStringTag, { value: "Module" }));
function X1(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...K1,
    ...e
  };
}
function Da(e, t, n, r) {
  let o = (r ?? new tt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Q1 = Da;
function Sa(e, t, n) {
  return (n ?? new tt(t)).formatMonthYear(e);
}
const Z1 = Sa;
function qd(e, t, n, r) {
  let o = (r ?? new tt(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Kd(e) {
  return "Choose the Month";
}
function Xd() {
  return "";
}
const J1 = "Go to the Next Month";
function Qd(e, t) {
  return J1;
}
function Zd(e) {
  return "Go to the Previous Month";
}
function Jd(e, t, n) {
  return (n ?? new tt(t)).format(e, "cccc");
}
function ef(e, t) {
  return `Week ${e}`;
}
function tf(e) {
  return "Week Number";
}
function nf(e) {
  return "Choose the Year";
}
const eC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Z1,
  labelDay: Q1,
  labelDayButton: Da,
  labelGrid: Sa,
  labelGridcell: qd,
  labelMonthDropdown: Kd,
  labelNav: Xd,
  labelNext: Qd,
  labelPrevious: Zd,
  labelWeekNumber: ef,
  labelWeekNumberHeader: tf,
  labelWeekday: Jd,
  labelYearDropdown: nf
}, Symbol.toStringTag, { value: "Module" })), lt = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function tC(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...eC,
    ...e ?? {},
    labelDayButton: lt(Da, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: lt(Kd, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: lt(Qd, e?.labelNext, n.labelNext),
    labelPrevious: lt(Zd, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: lt(ef, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: lt(nf, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: lt(Sa, e?.labelGrid, n.labelGrid),
    labelGridcell: lt(qd, e?.labelGridcell, n.labelGridcell),
    labelNav: lt(Xd, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: lt(tf, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: lt(Jd, e?.labelWeekday, n.labelWeekday)
  };
}
function nC(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: i, endOfYear: c, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: i(e),
    end: c(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), b = d(h), g = t && h < s(t) || n && h > s(n) || !1;
    return { value: b, label: p, disabled: g };
  });
}
function rC(e, t = {}, n = {}) {
  let r = { ...t?.[Q.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function oC(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let c = 0; c < 7; c++) {
    const l = e.addDays(s, c);
    i.push(l);
  }
  return i;
}
function sC(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: i, eachYearOfInterval: c, getYear: l } = r, d = s(e), m = i(t), f = c({ start: d, end: m });
  return o && f.reverse(), f.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: l(h),
      label: p,
      disabled: !1
    };
  });
}
function aC(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (c) => {
    const l = typeof c == "number" || typeof c == "string" ? new Date(c) : c;
    return new qe(l.getFullYear(), l.getMonth(), l.getDate(), 12, 0, 0, e);
  }, i = (c) => {
    const l = s(c);
    return new Date(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(qe.tz(e)),
    newDate: (c, l, d) => new qe(c, l, d, 12, 0, 0, e),
    startOfDay: (c) => s(c),
    startOfWeek: (c, l) => {
      const d = s(c), m = l?.weekStartsOn ?? o, f = (d.getDay() - m + 7) % 7;
      return d.setDate(d.getDate() - f), d;
    },
    startOfISOWeek: (c) => {
      const l = s(c), d = (l.getDay() - 1 + 7) % 7;
      return l.setDate(l.getDate() - d), l;
    },
    startOfMonth: (c) => {
      const l = s(c);
      return l.setDate(1), l;
    },
    startOfYear: (c) => {
      const l = s(c);
      return l.setMonth(0, 1), l;
    },
    endOfWeek: (c, l) => {
      const d = s(c), h = (((l?.weekStartsOn ?? o) + 6) % 7 - d.getDay() + 7) % 7;
      return d.setDate(d.getDate() + h), d;
    },
    endOfISOWeek: (c) => {
      const l = s(c), d = (7 - l.getDay()) % 7;
      return l.setDate(l.getDate() + d), l;
    },
    endOfMonth: (c) => {
      const l = s(c);
      return l.setMonth(l.getMonth() + 1, 0), l;
    },
    endOfYear: (c) => {
      const l = s(c);
      return l.setMonth(11, 31), l;
    },
    eachMonthOfInterval: (c) => {
      const l = s(c.start), d = s(c.end), m = [], f = new qe(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), h = d.getFullYear() * 12 + d.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= h; )
        m.push(new qe(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return m;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (c, l) => {
      const d = s(c);
      return d.setDate(d.getDate() + l), d;
    },
    addWeeks: (c, l) => {
      const d = s(c);
      return d.setDate(d.getDate() + l * 7), d;
    },
    addMonths: (c, l) => {
      const d = s(c);
      return d.setMonth(d.getMonth() + l), d;
    },
    addYears: (c, l) => {
      const d = s(c);
      return d.setFullYear(d.getFullYear() + l), d;
    },
    eachYearOfInterval: (c) => {
      const l = s(c.start), d = s(c.end), m = [], f = new qe(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= d.getFullYear(); )
        m.push(new qe(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (c, l) => {
      const d = i(c);
      return nr(d, {
        weekStartsOn: l?.weekStartsOn ?? o,
        firstWeekContainsDate: l?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (c) => {
      const l = i(c);
      return Jr(l);
    },
    differenceInCalendarDays: (c, l) => {
      const d = i(c), m = i(l);
      return Nn(d, m);
    },
    differenceInCalendarMonths: (c, l) => {
      const d = i(c), m = i(l);
      return pc(d, m);
    }
  };
}
const pr = (e) => e instanceof HTMLElement ? e : null, Qo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], iC = (e) => pr(e.querySelector("[data-animated-month]")), Zo = (e) => pr(e.querySelector("[data-animated-caption]")), Jo = (e) => pr(e.querySelector("[data-animated-weeks]")), cC = (e) => pr(e.querySelector("[data-animated-nav]")), lC = (e) => pr(e.querySelector("[data-animated-weekdays]"));
function uC(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const i = te(null), c = te(r), l = te(!1);
  cc(() => {
    const d = c.current;
    if (c.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const m = s.isSameMonth(r[0].date, d[0].date), f = s.isAfter(r[0].date, d[0].date), h = f ? n[Ze.caption_after_enter] : n[Ze.caption_before_enter], p = f ? n[Ze.weeks_after_enter] : n[Ze.weeks_before_enter], b = i.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Qo(g).forEach((k) => {
      if (!(k instanceof HTMLElement))
        return;
      const M = iC(k);
      M && k.contains(M) && k.removeChild(M);
      const N = Zo(k);
      N && N.classList.remove(h);
      const w = Jo(k);
      w && w.classList.remove(p);
    }), i.current = g) : i.current = null, l.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const x = b instanceof HTMLElement ? Qo(b) : [], v = Qo(e.current);
    if (v?.every((y) => y instanceof HTMLElement) && x && x.every((y) => y instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const y = cC(e.current);
      y && (y.style.zIndex = "1"), v.forEach((k, M) => {
        const N = x[M];
        if (!N)
          return;
        k.style.position = "relative", k.style.overflow = "hidden";
        const w = Zo(k);
        w && w.classList.add(h);
        const E = Jo(k);
        E && E.classList.add(p);
        const D = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), w && w.classList.remove(h), E && E.classList.remove(p), k.style.position = "", k.style.overflow = "", k.contains(N) && k.removeChild(N);
        };
        N.style.pointerEvents = "none", N.style.position = "absolute", N.style.overflow = "hidden", N.setAttribute("aria-hidden", "true");
        const T = lC(N);
        T && (T.style.opacity = "0");
        const P = Zo(N);
        P && (P.classList.add(f ? n[Ze.caption_before_exit] : n[Ze.caption_after_exit]), P.addEventListener("animationend", D));
        const L = Jo(N);
        L && L.classList.add(f ? n[Ze.weeks_before_exit] : n[Ze.weeks_after_exit]), k.insertBefore(N, k.firstChild);
      });
    }
  });
}
function dC(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: i, fixedWeeks: c, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: m, differenceInCalendarMonths: f, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: b, endOfWeek: g, isAfter: x, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: k } = r, M = l ? v(o, r) : i ? y(o) : k(o), N = l ? h(s) : i ? p(b(s)) : g(b(s)), w = t && (l ? h(t) : i ? p(t) : g(t)), E = w && x(N, w) ? w : N, D = m(E, M), T = f(s, o) + 1, P = [];
  for (let H = 0; H <= D; H++) {
    const G = d(M, H);
    P.push(G);
  }
  const z = (l ? 35 : 42) * T;
  if (c && P.length < z) {
    const H = z - P.length;
    for (let G = 0; G < H; G++) {
      const q = d(P[P.length - 1], 1);
      P.push(q);
    }
  }
  return P;
}
function fC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, i) => s.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function mC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let i = 0; i < o; i++) {
    const c = r.addMonths(e, i);
    if (t && c > t)
      break;
    s.push(c);
  }
  return s;
}
function Bi(e, t, n, r) {
  const { month: o, defaultMonth: s, today: i = r.today(), numberOfMonths: c = 1 } = e;
  let l = o || s || i;
  const { differenceInCalendarMonths: d, addMonths: m, startOfMonth: f } = r;
  if (n && d(n, l) < c - 1) {
    const h = -1 * (c - 1);
    l = m(n, h);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function hC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: i, endOfMonth: c, endOfWeek: l, getISOWeek: d, getWeek: m, startOfBroadcastWeek: f, startOfISOWeek: h, startOfWeek: p } = r, b = e.reduce((g, x) => {
    const v = n.broadcastCalendar ? f(x, r) : n.ISOWeek ? h(x) : p(x), y = n.broadcastCalendar ? s(x) : n.ISOWeek ? i(c(x)) : l(c(x)), k = t.filter((E) => E >= v && E <= y), M = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && k.length < M) {
      const E = t.filter((D) => {
        const T = M - k.length;
        return D > y && D <= o(y, T);
      });
      k.push(...E);
    }
    const N = k.reduce((E, D) => {
      const T = n.ISOWeek ? d(D) : m(D), P = E.find((z) => z.weekNumber === T), L = new Yd(D, x, r);
      return P ? P.days.push(L) : E.push(new u1(T, [L])), E;
    }, []), w = new l1(x, N);
    return g.push(w), g;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function pC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: i, endOfMonth: c, addYears: l, endOfYear: d, newDate: m, today: f } = t, { fromYear: h, toYear: p, fromMonth: b, toMonth: g } = e;
  !n && b && (n = b), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = m(p, 11, 31));
  const x = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : h ? n = m(h, 0, 1) : !n && x && (n = o(l(e.today ?? f(), -100))), r ? r = c(r) : p ? r = m(p, 11, 31) : !r && x && (r = d(e.today ?? f())), [
    n && s(n),
    r && s(r)
  ];
}
function gC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: i, addMonths: c, differenceInCalendarMonths: l } = r, d = o ? s : 1, m = i(e);
  if (!t)
    return c(m, d);
  if (!(l(t, e) < s))
    return c(m, d);
}
function xC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: i, addMonths: c, differenceInCalendarMonths: l } = r, d = o ? s ?? 1 : 1, m = i(e);
  if (!t)
    return c(m, -d);
  if (!(l(m, t) <= 0))
    return c(m, -d);
}
function bC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Co(e, t) {
  const [n, r] = ut(e);
  return [t === void 0 ? n : t, r];
}
function vC(e, t) {
  const [n, r] = pC(e, t), { startOfMonth: o, endOfMonth: s } = t, i = Bi(e, n, r, t), [c, l] = Co(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  be(() => {
    const M = Bi(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const { months: d, weeks: m, days: f, previousMonth: h, nextMonth: p } = Pr(() => {
    const M = mC(c, r, { numberOfMonths: e.numberOfMonths }, t), N = dC(M, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), w = hC(M, N, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = bC(w), D = fC(w), T = xC(c, n, e, t), P = gC(c, r, e, t);
    return {
      months: w,
      weeks: E,
      days: D,
      previousMonth: T,
      nextMonth: P
    };
  }, [
    t,
    c.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: b, onMonthChange: g } = e, x = (M) => m.some((N) => N.days.some((w) => w.isEqualTo(M))), v = (M) => {
    if (b)
      return;
    let N = o(M);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), l(N), g?.(N);
  };
  return {
    months: d,
    weeks: m,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: v,
    goToDay: (M) => {
      x(M) || v(M.date);
    }
  };
}
var bt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(bt || (bt = {}));
function Hi(e) {
  return !e[je.disabled] && !e[je.hidden] && !e[je.outside];
}
function yC(e, t, n, r) {
  let o, s = -1;
  for (const i of e) {
    const c = t(i);
    Hi(c) && (c[je.focused] && s < bt.FocusedModifier ? (o = i, s = bt.FocusedModifier) : r?.isEqualTo(i) && s < bt.LastFocused ? (o = i, s = bt.LastFocused) : n(i.date) && s < bt.Selected ? (o = i, s = bt.Selected) : c[je.today] && s < bt.Today && (o = i, s = bt.Today));
  }
  return o || (o = e.find((i) => Hi(t(i)))), o;
}
function wC(e, t, n, r, o, s, i) {
  const { ISOWeek: c, broadcastCalendar: l } = s, { addDays: d, addMonths: m, addWeeks: f, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: b, endOfWeek: g, max: x, min: v, startOfBroadcastWeek: y, startOfISOWeek: k, startOfWeek: M } = i;
  let w = {
    day: d,
    week: f,
    month: m,
    year: h,
    startOfWeek: (E) => l ? y(E, i) : c ? k(E) : M(E),
    endOfWeek: (E) => l ? p(E) : c ? b(E) : g(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? w = x([r, w]) : t === "after" && o && (w = v([o, w])), w;
}
function rf(e, t, n, r, o, s, i, c = 0) {
  if (c > 365)
    return;
  const l = wC(e, t, n.date, r, o, s, i), d = !!(s.disabled && At(l, s.disabled, i)), m = !!(s.hidden && At(l, s.hidden, i)), f = l, h = new Yd(l, f, i);
  return !d && !m ? h : rf(e, t, h, r, o, s, i, c + 1);
}
function kC(e, t, n, r, o) {
  const { autoFocus: s } = e, [i, c] = ut(), l = yC(t.days, n, r || (() => !1), i), [d, m] = ut(s ? l : void 0);
  return {
    isFocusTarget: (g) => !!l?.isEqualTo(g),
    setFocused: m,
    focused: d,
    blur: () => {
      c(d), m(void 0);
    },
    moveFocus: (g, x) => {
      if (!d)
        return;
      const v = rf(g, x, d, t.navStart, t.navEnd, e, o);
      v && (e.disableNavigation && !t.days.some((k) => k.isEqualTo(v)) || (t.goToDay(v), m(v)));
    }
  };
}
function CC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = Co(n, o ? n : void 0), c = o ? n : s, { isSameDay: l } = t, d = (p) => c?.some((b) => l(b, p)) ?? !1, { min: m, max: f } = e;
  return {
    selected: c,
    select: (p, b, g) => {
      let x = [...c ?? []];
      if (d(p)) {
        if (c?.length === m || r && c?.length === 1)
          return;
        x = c?.filter((v) => !l(v, p));
      } else
        c?.length === f ? x = [p] : x = [...x, p];
      return o || i(x), o?.(x, p, b, g), x;
    },
    isSelected: d
  };
}
function MC(e, t, n = 0, r = 0, o = !1, s = Tt) {
  const { from: i, to: c } = t || {}, { isSameDay: l, isAfter: d, isBefore: m } = s;
  let f;
  if (!i && !c)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !c)
    l(i, e) ? n === 0 ? f = { from: i, to: e } : o ? f = { from: i, to: void 0 } : f = void 0 : m(e, i) ? f = { from: e, to: i } : f = { from: i, to: e };
  else if (i && c)
    if (l(i, e) && l(c, e))
      o ? f = { from: i, to: c } : f = void 0;
    else if (l(i, e))
      f = { from: i, to: n > 0 ? void 0 : e };
    else if (l(c, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (m(e, i))
      f = { from: e, to: c };
    else if (d(e, i))
      f = { from: i, to: e };
    else if (d(e, c))
      f = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const h = s.differenceInCalendarDays(f.to, f.from);
    r > 0 && h > r ? f = { from: e, to: void 0 } : n > 1 && h < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function NC(e, t, n = Tt) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), i = Math.min(s, 6);
  for (let c = 0; c <= i; c++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Gi(e, t, n = Tt) {
  return Pt(e, t.from, !1, n) || Pt(e, t.to, !1, n) || Pt(t, e.from, !1, n) || Pt(t, e.to, !1, n);
}
function EC(e, t, n = Tt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((c) => typeof c != "function").some((c) => typeof c == "boolean" ? c : n.isDate(c) ? Pt(e, c, !1, n) : Gd(c, n) ? c.some((l) => Pt(e, l, !1, n)) : ko(c) ? c.from && c.to ? Gi(e, { from: c.from, to: c.to }, n) : !1 : Hd(c) ? NC(e, c.dayOfWeek, n) : Ca(c) ? n.isAfter(c.before, c.after) ? Gi(e, {
    from: n.addDays(c.after, 1),
    to: n.addDays(c.before, -1)
  }, n) : At(e.from, c, n) || At(e.to, c, n) : Ma(c) || Na(c) ? At(e.from, c, n) || At(e.to, c, n) : !1))
    return !0;
  const i = r.filter((c) => typeof c == "function");
  if (i.length) {
    let c = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= l; d++) {
      if (i.some((m) => m(c)))
        return !0;
      c = n.addDays(c, 1);
    }
  }
  return !1;
}
function DC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: i } = e, [c, l] = Co(o, i ? o : void 0), d = i ? o : c;
  return {
    selected: d,
    select: (h, p, b) => {
      const { min: g, max: x } = e, v = h ? MC(h, d, g, x, s, t) : void 0;
      return r && n && v?.from && v.to && EC({ from: v.from, to: v.to }, n, t) && (v.from = h, v.to = void 0), i || l(v), i?.(v, h, p, b), v;
    },
    isSelected: (h) => d && Pt(d, h, !1, t)
  };
}
function SC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = Co(n, o ? n : void 0), c = o ? n : s, { isSameDay: l } = t;
  return {
    selected: c,
    select: (f, h, p) => {
      let b = f;
      return !r && c && c && l(f, c) && (b = void 0), o || i(b), o?.(b, f, h, p), b;
    },
    isSelected: (f) => c ? l(c, f) : !1
  };
}
function jC(e, t) {
  const n = SC(e, t), r = CC(e, t), o = DC(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function st(e, t) {
  return e instanceof qe && e.timeZone === t ? e : new qe(e, t);
}
function xn(e, t, n) {
  return st(e, t);
}
function Vi(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? xn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? xn(r, t) : r) : ko(e) ? {
    ...e,
    from: e.from ? st(e.from, t) : e.from,
    to: e.to ? st(e.to, t) : e.to
  } : Ca(e) ? {
    before: xn(e.before, t),
    after: xn(e.after, t)
  } : Ma(e) ? {
    after: xn(e.after, t)
  } : Na(e) ? {
    before: xn(e.before, t)
  } : e;
}
function es(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Vi(r, t)) : Vi(e, t));
}
function TC(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = st(t.today, n)), t.month && (t.month = st(t.month, n)), t.defaultMonth && (t.defaultMonth = st(t.defaultMonth, n)), t.startMonth && (t.startMonth = st(t.startMonth, n)), t.endMonth && (t.endMonth = st(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = st(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((oe) => st(oe, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? st(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? st(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = es(t.disabled, n)), t.hidden !== void 0 && (t.hidden = es(t.hidden, n)), t.modifiers)) {
    const oe = {};
    Object.keys(t.modifiers).forEach((xe) => {
      oe[xe] = es(t.modifiers?.[xe], n);
    }), t.modifiers = oe;
  }
  const { components: r, formatters: o, labels: s, dateLib: i, locale: c, classNames: l } = Pr(() => {
    const oe = { ...zd, ...t.locale }, xe = t.broadcastCalendar ? 1 : t.weekStartsOn, ee = t.noonSafe && t.timeZone ? aC(t.timeZone, {
      weekStartsOn: xe,
      locale: oe
    }) : void 0, he = t.dateLib && ee ? { ...ee, ...t.dateLib } : t.dateLib ?? ee, Qe = new tt({
      locale: oe,
      weekStartsOn: xe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, he);
    return {
      dateLib: Qe,
      components: $1(t.components),
      formatters: X1(t.formatters),
      labels: tC(t.labels, Qe.options),
      locale: oe,
      classNames: { ...Ea(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: i.today() });
  const { captionLayout: d, mode: m, navLayout: f, numberOfMonths: h = 1, onDayBlur: p, onDayClick: b, onDayFocus: g, onDayKeyDown: x, onDayMouseEnter: v, onDayMouseLeave: y, onNextClick: k, onPrevClick: M, showWeekNumber: N, styles: w } = t, { formatCaption: E, formatDay: D, formatMonthDropdown: T, formatWeekNumber: P, formatWeekNumberHeader: L, formatWeekdayName: z, formatYearDropdown: H } = o, G = vC(t, i), { days: q, months: I, navStart: _, navEnd: O, previousMonth: R, nextMonth: $, goToMonth: C } = G, S = W1(q, t, _, O, i), { isSelected: F, select: Y, selected: B } = jC(t, i) ?? {}, { blur: U, focused: W, isFocusTarget: Z, moveFocus: ne, setFocused: ue } = kC(t, G, S, F ?? (() => !1), i), { labelDayButton: We, labelGridcell: Oe, labelGrid: He, labelMonthDropdown: Ne, labelNav: ge, labelPrevious: Me, labelNext: Ge, labelWeekday: Le, labelWeekNumber: $e, labelWeekNumberHeader: se, labelYearDropdown: ze } = s, Ve = Pr(() => oC(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), Ee = m !== void 0 || b !== void 0, Ie = we(() => {
    R && (C(R), M?.(R));
  }, [R, C, M]), rt = we(() => {
    $ && (C($), k?.($));
  }, [C, $, k]), A = we((oe, xe) => (ee) => {
    ee.preventDefault(), ee.stopPropagation(), ue(oe), !xe.disabled && (Y?.(oe.date, xe, ee), b?.(oe.date, xe, ee));
  }, [Y, b, ue]), fe = we((oe, xe) => (ee) => {
    ue(oe), g?.(oe.date, xe, ee);
  }, [g, ue]), Xe = we((oe, xe) => (ee) => {
    U(), p?.(oe.date, xe, ee);
  }, [U, p]), Xt = we((oe, xe) => (ee) => {
    const he = {
      ArrowLeft: [
        ee.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        ee.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [ee.shiftKey ? "year" : "week", "after"],
      ArrowUp: [ee.shiftKey ? "year" : "week", "before"],
      PageUp: [ee.shiftKey ? "year" : "month", "before"],
      PageDown: [ee.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (he[ee.key]) {
      ee.preventDefault(), ee.stopPropagation();
      const [Qe, de] = he[ee.key];
      ne(Qe, de);
    }
    x?.(oe.date, xe, ee);
  }, [ne, x, t.dir]), Mo = we((oe, xe) => (ee) => {
    v?.(oe.date, xe, ee);
  }, [v]), No = we((oe, xe) => (ee) => {
    y?.(oe.date, xe, ee);
  }, [y]), Eo = we((oe) => (xe) => {
    const ee = Number(xe.target.value), he = i.setMonth(i.startOfMonth(oe), ee);
    C(he);
  }, [i, C]), xf = we((oe) => (xe) => {
    const ee = Number(xe.target.value), he = i.setYear(i.startOfMonth(oe), ee);
    C(he);
  }, [i, C]), { className: bf, style: vf } = Pr(() => ({
    className: [l[Q.Root], t.className].filter(Boolean).join(" "),
    style: { ...w?.[Q.Root], ...t.style }
  }), [l, t.className, t.style, w]), yf = z1(t), Oa = te(null);
  uC(Oa, !!t.animate, {
    classNames: l,
    months: I,
    focused: W,
    dateLib: i
  });
  const wf = {
    dayPickerProps: t,
    selected: B,
    select: Y,
    isSelected: F,
    months: I,
    nextMonth: $,
    previousMonth: R,
    goToMonth: C,
    getModifiers: S,
    components: r,
    classNames: l,
    styles: w,
    labels: s,
    formatters: o
  };
  return V.createElement(
    Bd.Provider,
    { value: wf },
    V.createElement(
      r.Root,
      { rootRef: t.animate ? Oa : void 0, className: bf, style: vf, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...yf },
      V.createElement(
        r.Months,
        { className: l[Q.Months], style: w?.[Q.Months] },
        !t.hideNavigation && !f && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[Q.Nav], style: w?.[Q.Nav], "aria-label": ge(), onPreviousClick: Ie, onNextClick: rt, previousMonth: R, nextMonth: $ }),
        I.map((oe, xe) => V.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[Q.Month],
            style: w?.[Q.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: xe,
            displayIndex: xe,
            calendarMonth: oe
          },
          f === "around" && !t.hideNavigation && xe === 0 && V.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[Q.PreviousMonthButton], tabIndex: R ? void 0 : -1, "aria-disabled": R ? void 0 : !0, "aria-label": Me(R), onClick: Ie, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: R ? void 0 : !0, className: l[Q.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          V.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[Q.MonthCaption], style: w?.[Q.MonthCaption], calendarMonth: oe, displayIndex: xe }, d?.startsWith("dropdown") ? V.createElement(
            r.DropdownNav,
            { className: l[Q.Dropdowns], style: w?.[Q.Dropdowns] },
            (() => {
              const ee = d === "dropdown" || d === "dropdown-months" ? V.createElement(r.MonthsDropdown, { key: "month", className: l[Q.MonthsDropdown], "aria-label": Ne(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Eo(oe.date), options: nC(oe.date, _, O, o, i), style: w?.[Q.Dropdown], value: i.getMonth(oe.date) }) : V.createElement("span", { key: "month" }, T(oe.date, i)), he = d === "dropdown" || d === "dropdown-years" ? V.createElement(r.YearsDropdown, { key: "year", className: l[Q.YearsDropdown], "aria-label": ze(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: xf(oe.date), options: sC(_, O, o, i, !!t.reverseYears), style: w?.[Q.Dropdown], value: i.getYear(oe.date) }) : V.createElement("span", { key: "year" }, H(oe.date, i));
              return i.getMonthYearOrder() === "year-first" ? [he, ee] : [ee, he];
            })(),
            V.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, E(oe.date, i.options, i))
          ) : V.createElement(r.CaptionLabel, { className: l[Q.CaptionLabel], role: "status", "aria-live": "polite" }, E(oe.date, i.options, i))),
          f === "around" && !t.hideNavigation && xe === h - 1 && V.createElement(
            r.NextMonthButton,
            { type: "button", className: l[Q.NextMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": Ge($), onClick: rt, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: $ ? void 0 : !0, className: l[Q.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          xe === h - 1 && f === "after" && !t.hideNavigation && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[Q.Nav], style: w?.[Q.Nav], "aria-label": ge(), onPreviousClick: Ie, onNextClick: rt, previousMonth: R, nextMonth: $ }),
          V.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": He(oe.date, i.options, i) || void 0, className: l[Q.MonthGrid], style: w?.[Q.MonthGrid] },
            !t.hideWeekdays && V.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[Q.Weekdays], style: w?.[Q.Weekdays] },
              N && V.createElement(r.WeekNumberHeader, { "aria-label": se(i.options), className: l[Q.WeekNumberHeader], style: w?.[Q.WeekNumberHeader], scope: "col" }, L()),
              Ve.map((ee) => V.createElement(r.Weekday, { "aria-label": Le(ee, i.options, i), className: l[Q.Weekday], key: String(ee), style: w?.[Q.Weekday], scope: "col" }, z(ee, i.options, i)))
            ),
            V.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[Q.Weeks], style: w?.[Q.Weeks] }, oe.weeks.map((ee) => V.createElement(
              r.Week,
              { className: l[Q.Week], key: ee.weekNumber, style: w?.[Q.Week], week: ee },
              N && V.createElement(r.WeekNumber, { week: ee, style: w?.[Q.WeekNumber], "aria-label": $e(ee.weekNumber, {
                locale: c
              }), className: l[Q.WeekNumber], scope: "row", role: "rowheader" }, P(ee.weekNumber, i)),
              ee.days.map((he) => {
                const { date: Qe } = he, de = S(he);
                if (de[je.focused] = !de.hidden && !!W?.isEqualTo(he), de[dt.selected] = F?.(Qe) || de.selected, ko(B)) {
                  const { from: Do, to: So } = B;
                  de[dt.range_start] = !!(Do && So && i.isSameDay(Qe, Do)), de[dt.range_end] = !!(Do && So && i.isSameDay(Qe, So)), de[dt.range_middle] = Pt(B, Qe, !0, i);
                }
                const kf = rC(de, w, t.modifiersStyles), Cf = L1(de, l, t.modifiersClassNames), Mf = !Ee && !de.hidden ? Oe(Qe, de, i.options, i) : void 0;
                return V.createElement(r.Day, { key: `${he.isoDate}_${he.displayMonthId}`, day: he, modifiers: de, className: Cf.join(" "), style: kf, role: "gridcell", "aria-selected": de.selected || void 0, "aria-label": Mf, "data-day": he.isoDate, "data-month": he.outside ? he.dateMonthId : void 0, "data-selected": de.selected || void 0, "data-disabled": de.disabled || void 0, "data-hidden": de.hidden || void 0, "data-outside": he.outside || void 0, "data-focused": de.focused || void 0, "data-today": de.today || void 0 }, !de.hidden && Ee ? V.createElement(r.DayButton, { className: l[Q.DayButton], style: w?.[Q.DayButton], type: "button", day: he, modifiers: de, disabled: !de.focused && de.disabled || void 0, "aria-disabled": de.focused && de.disabled || void 0, tabIndex: Z(he) ? 0 : -1, "aria-label": We(Qe, de, i.options, i), onClick: A(he, de), onBlur: Xe(he, de), onFocus: fe(he, de), onKeyDown: Xt(he, de), onMouseEnter: Mo(he, de), onMouseLeave: No(he, de) }, D(Qe, i.options, i)) : !de.hidden && D(he.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && V.createElement(r.Footer, { className: l[Q.Footer], style: w?.[Q.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function _C({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: s,
  components: i,
  showBackToToday: c,
  onBackToToday: l,
  monthLabel: d,
  ...m
}) {
  const f = Ea();
  return /* @__PURE__ */ a.jsx(
    TC,
    {
      showOutsideDays: n,
      className: j(
        "bg-background group/calendar px-2 py-1 [--cell-size:--spacing(6)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (h) => h.toLocaleString("default", { month: "short" }),
        formatWeekNumber: (h) => String(h),
        ...s
      },
      classNames: {
        root: j("w-full relative", f.root),
        months: j("flex gap-2 flex-col", f.months),
        month: j("flex flex-col w-full gap-0", f.month),
        nav: j(
          "flex w-full items-center justify-end gap-0",
          f.nav
        ),
        button_previous: j(
          yn({ variant: o }),
          "size-6 aria-disabled:opacity-50 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none justify-self-center",
          f.button_previous
        ),
        button_next: j(
          yn({ variant: o }),
          "size-6 aria-disabled:opacity-50 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none justify-self-center",
          f.button_next
        ),
        month_caption: j("hidden", f.month_caption),
        dropdowns: j(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          f.dropdowns
        ),
        dropdown_root: j(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-sm",
          f.dropdown_root
        ),
        dropdown: j(
          "absolute bg-popover inset-0 opacity-0",
          f.dropdown
        ),
        caption_label: j(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-sm pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          f.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: j("flex", f.weekdays),
        weekday: j(
          "text-muted-foreground rounded-sm flex-1 font-normal text-xxs select-none",
          f.weekday
        ),
        week: j(
          "flex w-full items-center relative group/week mb-0.5",
          f.week
        ),
        week_number_header: j(
          "select-none w-5",
          f.week_number_header
        ),
        week_number: j(
          "text-xxs select-none text-muted-foreground w-5",
          f.week_number
        ),
        day: j(
          "relative flex items-center justify-center w-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day select-none",
          "[&.in-view-day]:bg-calendar-current-week",
          "[&.in-view-day:not(.in-view-day+.in-view-day)]:rounded-l-md",
          "[&.in-view-day:not(:has(+.in-view-day))]:rounded-r-md",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          f.day
        ),
        range_start: j(
          "rounded-l-md bg-accent",
          f.range_start
        ),
        range_middle: j("rounded-none", f.range_middle),
        range_end: j("rounded-r-md bg-accent", f.range_end),
        today: j("rounded-sm", f.today),
        outside: j(
          "text-muted-foreground/40 aria-selected:text-muted-foreground",
          f.outside
        ),
        disabled: j(
          "text-muted-foreground opacity-50",
          f.disabled
        ),
        hidden: j("invisible", f.hidden),
        ...t
      },
      components: {
        Root: ({ className: h, rootRef: p, ...b }) => /* @__PURE__ */ a.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: p,
            className: j(h),
            ...b
          }
        ),
        Nav: ({
          className: h,
          onPreviousClick: p,
          onNextClick: b,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          previousMonth: g,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          nextMonth: x,
          ...v
        }) => /* @__PURE__ */ a.jsxs(
          "nav",
          {
            className: j("flex w-full items-center", h),
            ...v,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: "w-5" }),
              d && /* @__PURE__ */ a.jsx("span", { className: "text-sidebar-primary flex-[4] text-sm font-medium", children: d }),
              !d && /* @__PURE__ */ a.jsx("span", { className: "flex-[4]" }),
              c && l ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: l,
                    className: j(
                      yn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    children: /* @__PURE__ */ a.jsx(qp, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Wt, { side: "bottom", children: "Go back to today" })
              ] }) }) : /* @__PURE__ */ a.jsx("span", { className: "flex-1" }),
              /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: j(
                      yn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    "aria-label": "Go to previous month",
                    onClick: p,
                    children: /* @__PURE__ */ a.jsx(cp, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Wt, { side: "bottom", children: "Go to previous month" })
              ] }) }),
              /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: j(
                      yn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    "aria-label": "Go to next month",
                    onClick: b,
                    children: /* @__PURE__ */ a.jsx(Fs, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Wt, { side: "bottom", children: "Go to next month" })
              ] }) })
            ]
          }
        ),
        DayButton: OC,
        WeekNumber: ({ children: h, ...p }) => /* @__PURE__ */ a.jsx("td", { ...p, children: /* @__PURE__ */ a.jsx("div", { className: "flex h-(--cell-size) w-5 items-center justify-center text-center text-xxs", children: h }) }),
        ...i
      },
      ...m
    }
  );
}
function OC({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const o = Ea(), s = u.useRef(null);
  u.useEffect(() => {
    n.focused && s.current?.focus();
  }, [n.focused]);
  const i = "inView" in n && n.inView === !0;
  return /* @__PURE__ */ a.jsx(
    Ye,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      "data-outside": n.outside,
      "data-today": n.today,
      "data-in-view": i,
      className: j(
        "text-foreground data-[outside=true]:text-muted-foreground/40 data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground flex size-7 items-center justify-center leading-none font-normal transition-none outline-none focus-visible:outline-none focus-visible:ring-0 data-[range-end=true]:rounded-sm data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-sm data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70 hover:bg-calendar-day-hover data-[in-view=true]:hover:bg-calendar-day-hover-current-week data-[today=true]:hover:!bg-primary data-[today=true]:hover:!text-primary-foreground",
        o.day,
        e
      ),
      ...r
    }
  );
}
function RC({ onDateSelect: e, currentDate: t, visibleDays: n }) {
  const [r] = u.useState(() => /* @__PURE__ */ new Date()), [o, s] = u.useState(t ?? r), i = u.useRef(null);
  u.useEffect(() => {
    if (!n || n.length === 0) return;
    const h = n[0], p = n[n.length - 1], b = i.current;
    i.current = h;
    const g = (x) => {
      s((v) => v.getMonth() === x.getMonth() && v.getFullYear() === x.getFullYear() ? v : x);
    };
    if (b && h.getTime() > b.getTime()) {
      g(p);
      return;
    }
    g(h);
  }, [n]);
  const c = o.getMonth() === r.getMonth() && o.getFullYear() === r.getFullYear(), l = o.toLocaleDateString("default", {
    month: "long",
    year: "numeric"
  }), d = () => {
    s(r), e?.(r);
  }, m = u.useMemo(() => {
    if (!(!n || n.length === 0))
      return {
        inView: (h) => n.some((p) => De(p, h))
      };
  }, [n]), f = u.useMemo(() => {
    if (m)
      return {
        inView: "in-view-day"
      };
  }, [m]);
  return /* @__PURE__ */ a.jsx(Mn, { className: "px-0", children: /* @__PURE__ */ a.jsx(er, { children: /* @__PURE__ */ a.jsx(
    _C,
    {
      mode: "single",
      month: o,
      onMonthChange: s,
      selected: r,
      onSelect: (h) => {
        h && e?.(h);
      },
      showWeekNumber: !0,
      fixedWeeks: !0,
      showBackToToday: !c,
      onBackToToday: d,
      monthLabel: c ? void 0 : l,
      modifiers: m,
      modifiersClassNames: f,
      className: "bg-transparent [&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground"
    }
  ) }) });
}
const of = "calendarcn-theme", sf = "(prefers-color-scheme: dark)", af = u.createContext(null);
function PC(e) {
  if (typeof window > "u")
    return e;
  const t = window.localStorage.getItem(of);
  return t === "light" || t === "dark" || t === "system" ? t : e;
}
function _s() {
  return typeof window > "u" ? "light" : window.matchMedia(sf).matches ? "dark" : "light";
}
function Ui(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement, n = e === "system" ? _s() : e;
  t.classList.remove("light", "dark"), t.classList.add(n);
}
function AC() {
  const e = document.createElement("style");
  e.appendChild(
    document.createTextNode(
      "* { transition: none !important; animation: none !important; }"
    )
  ), document.head.appendChild(e), window.setTimeout(() => {
    e.remove();
  }, 0);
}
function HM({
  attribute: e = "class",
  children: t,
  defaultTheme: n = "system",
  disableTransitionOnChange: r = !1,
  enableSystem: o = !0
}) {
  const [s, i] = u.useState(
    () => PC(n)
  ), [c, l] = u.useState(
    () => n === "system" && o ? _s() : n === "system" ? "light" : n
  );
  u.useEffect(() => {
    if (e !== "class")
      return;
    const f = s === "system" && o ? _s() : s;
    r && AC(), Ui(s), l(
      f === "system" ? "light" : f
    ), window.localStorage.setItem(of, s);
  }, [e, r, o, s]), u.useEffect(() => {
    if (!o)
      return;
    const f = window.matchMedia(sf), h = () => {
      if (s !== "system")
        return;
      const p = f.matches ? "dark" : "light";
      Ui("system"), l(p);
    };
    return h(), f.addEventListener("change", h), () => {
      f.removeEventListener("change", h);
    };
  }, [o, s]);
  const d = u.useCallback((f) => {
    i(f);
  }, []), m = u.useMemo(
    () => ({
      resolvedTheme: c,
      setTheme: d,
      theme: s
    }),
    [c, d, s]
  );
  return /* @__PURE__ */ a.jsx(af.Provider, { value: m, children: t });
}
function cf() {
  const e = u.useContext(af);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider.");
  return e;
}
const lf = u.forwardRef(({ className: e, ...t }, n) => {
  const { theme: r, setTheme: o } = cf(), [s, i] = u.useState(!1);
  u.useEffect(() => {
    i(!0);
  }, []);
  const c = () => {
    if (r === "system") {
      o("light");
      return;
    }
    if (r === "light") {
      o("dark");
      return;
    }
    o("system");
  }, l = () => r === "light" ? /* @__PURE__ */ a.jsx(Hp, { className: "size-4" }) : r === "dark" ? /* @__PURE__ */ a.jsx(jp, { className: "size-4" }) : /* @__PURE__ */ a.jsx(us, { className: "size-4" });
  return s ? /* @__PURE__ */ a.jsxs(
    Ye,
    {
      ref: n,
      variant: "ghost",
      size: "icon",
      ...t,
      className: j("size-7 text-sidebar-muted-foreground", e),
      onClick: c,
      children: [
        l(),
        /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  ) : /* @__PURE__ */ a.jsxs(
    Ye,
    {
      ref: n,
      variant: "ghost",
      size: "icon",
      ...t,
      className: j("size-7 text-sidebar-muted-foreground", e),
      children: [
        /* @__PURE__ */ a.jsx(us, { className: "size-4" }),
        /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
});
lf.displayName = "ThemeToggle";
const IC = "15rem", FC = {
  accounts: [
    {
      email: "me@vmnog.com",
      calendars: [
        { name: "me@vmnog.com", color: "red", visible: !0 },
        { name: "Personal", color: "purple", visible: !0 },
        { name: "Work", color: "blue", visible: !0 },
        { name: "Family", color: "orange", visible: !0 },
        { name: "Side Projects", color: "yellow", visible: !0 },
        { name: "Fitness", color: "green", visible: !0 },
        {
          name: "Holidays in Brazil",
          color: "green",
          visible: !0,
          isSubscribed: !0
        }
      ]
    }
  ]
};
function WC({
  open: e = !0,
  onDateSelect: t,
  currentDate: n,
  visibleDays: r
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      "data-state": e ? "expanded" : "collapsed",
      className: "text-sidebar-foreground group peer hidden md:block",
      style: { "--sidebar-width": IC },
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "relative bg-transparent",
              e ? "w-(--sidebar-width)" : "w-0"
            )
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: j(
              "bg-sidebar fixed inset-y-0 left-0 z-10 hidden h-svh w-(--sidebar-width) flex-col border-r md:flex",
              e ? "left-0" : "left-[calc(var(--sidebar-width)*-1)]"
            ),
            children: [
              /* @__PURE__ */ a.jsxs(_d, { children: [
                /* @__PURE__ */ a.jsx(
                  RC,
                  {
                    onDateSelect: t,
                    currentDate: n,
                    visibleDays: r
                  }
                ),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsx(er, { children: /* @__PURE__ */ a.jsx(Cs, { children: /* @__PURE__ */ a.jsx(Ms, { children: /* @__PURE__ */ a.jsxs(Ns, { className: "text-sidebar-foreground", children: [
                  /* @__PURE__ */ a.jsx(Mp, { className: "size-4 text-sidebar-muted-foreground" }),
                  /* @__PURE__ */ a.jsx("span", { className: "flex-1 text-sm", children: "Scheduling" }),
                  /* @__PURE__ */ a.jsx(Tc, { className: "size-4 text-sidebar-muted-foreground" })
                ] }) }) }) }) }),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-2 px-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-sm bg-[#EFEFEE] dark:bg-sidebar px-2 py-1.5", children: [
                  /* @__PURE__ */ a.jsx(Xp, { className: "size-4 shrink-0 text-sidebar-muted-foreground" }),
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Meet with...",
                      className: "flex-1 bg-transparent text-sm text-sidebar-foreground placeholder:text-sidebar-muted-foreground outline-none"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ a.jsx(t1, { accounts: FC.accounts }),
                /* @__PURE__ */ a.jsx(Td, { className: "mx-0" }),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsx(er, { children: /* @__PURE__ */ a.jsx(Cs, { children: /* @__PURE__ */ a.jsx(Ms, { children: /* @__PURE__ */ a.jsxs(Ns, { className: "text-sidebar-foreground text-sm", children: [
                  /* @__PURE__ */ a.jsx(Ip, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add calendar account" })
                ] }) }) }) }) })
              ] }),
              /* @__PURE__ */ a.jsx(Sk, { className: "border-t border-sidebar-border", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-start gap-1 px-2 py-2", children: [
                /* @__PURE__ */ a.jsxs(It, { children: [
                  /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                    Ye,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "size-7 text-sidebar-foreground",
                      asChild: !0,
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          href: "https://github.com/vmnog/calendarcn",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: /* @__PURE__ */ a.jsx(yp, { className: "size-4" })
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ a.jsx(Wt, { side: "top", children: "Go to repo" })
                ] }),
                /* @__PURE__ */ a.jsxs(It, { children: [
                  /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsx(lf, { className: "text-sidebar-foreground" }) }),
                  /* @__PURE__ */ a.jsxs(Wt, { side: "top", children: [
                    "Toggle theme ",
                    /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "shift" }),
                    " ",
                    /* @__PURE__ */ a.jsx(ie, { children: "M" })
                  ] })
                ] })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function LC(e, t = []) {
  let n = [];
  function r(s, i) {
    const c = u.createContext(i);
    c.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const d = (f) => {
      const { scope: h, children: p, ...b } = f, g = h?.[e]?.[l] || c, x = u.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ a.jsx(g.Provider, { value: x, children: p });
    };
    d.displayName = s + "Provider";
    function m(f, h) {
      const p = h?.[e]?.[l] || c, b = u.useContext(p);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [d, m];
  }
  const o = () => {
    const s = n.map((i) => u.createContext(i));
    return function(c) {
      const l = c?.[e] || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return o.scopeName = e, [r, $C(o, ...t)];
}
function $C(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((c, { useScope: l, scopeName: d }) => {
        const f = l(s)[`__scope${d}`];
        return { ...c, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ja = "Avatar", [zC] = LC(ja), [YC, uf] = zC(ja), df = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = u.useState("idle");
    return /* @__PURE__ */ a.jsx(
      YC,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ a.jsx(ct.span, { ...r, ref: t })
      }
    );
  }
);
df.displayName = ja;
var ff = "AvatarImage", mf = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...s } = e, i = uf(ff, n), c = BC(r, s), l = mt((d) => {
      o(d), i.onImageLoadingStatusChange(d);
    });
    return it(() => {
      c !== "idle" && l(c);
    }, [c, l]), c === "loaded" ? /* @__PURE__ */ a.jsx(ct.img, { ...s, ref: t, src: r }) : null;
  }
);
mf.displayName = ff;
var hf = "AvatarFallback", pf = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = uf(hf, n), [i, c] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => c(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ a.jsx(ct.span, { ...o, ref: t }) : null;
  }
);
pf.displayName = hf;
function qi(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function BC(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = iv(), o = u.useRef(null), s = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, c] = u.useState(
    () => qi(s, e)
  );
  return it(() => {
    c(qi(s, e));
  }, [s, e]), it(() => {
    const l = (f) => () => {
      c(f);
    };
    if (!s) return;
    const d = l("loaded"), m = l("error");
    return s.addEventListener("load", d), s.addEventListener("error", m), t && (s.referrerPolicy = t), typeof n == "string" && (s.crossOrigin = n), () => {
      s.removeEventListener("load", d), s.removeEventListener("error", m);
    };
  }, [s, n, t]), i;
}
var HC = df, GC = mf, VC = pf;
function UC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    HC,
    {
      "data-slot": "avatar",
      className: j(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function qC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    GC,
    {
      "data-slot": "avatar-image",
      className: j("aspect-square size-full", e),
      ...t
    }
  );
}
function KC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    VC,
    {
      "data-slot": "avatar-fallback",
      className: j(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const XC = {
  day: "Day",
  week: "Week",
  month: "Month"
}, QC = [
  { value: "day", label: "Day", shortcuts: ["1", "or", "D"] },
  { value: "week", label: "Week", shortcuts: ["0", "or", "W"] },
  { value: "month", label: "Month", shortcuts: ["M"] }
], ZC = [2, 3, 4, 5, 6, 7, 8, 9];
function JC({
  view: e,
  numberOfDays: t,
  viewSettings: n,
  onSwitchView: r,
  onSetNumberOfDays: o,
  onToggleWeekends: s,
  onToggleDeclinedEvents: i,
  onToggleWeekNumbers: c
}) {
  return /* @__PURE__ */ a.jsxs(Es, { children: [
    /* @__PURE__ */ a.jsx(Ds, { asChild: !0, children: /* @__PURE__ */ a.jsxs(Ye, { variant: "secondary", size: "sm", className: "gap-1 px-3", children: [
      XC[e],
      /* @__PURE__ */ a.jsx(Fs, { className: "size-4 text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Ss, { align: "start", sideOffset: 8, className: "w-56", children: [
      QC.map((l) => /* @__PURE__ */ a.jsxs(
        vt,
        {
          onClick: () => r(l.value),
          children: [
            /* @__PURE__ */ a.jsx(
              qn,
              {
                className: j(
                  "size-4 shrink-0",
                  e !== l.value && "invisible"
                )
              }
            ),
            l.label,
            /* @__PURE__ */ a.jsx(Rt, { className: "ml-auto", children: l.shortcuts.map(
              (d) => d === "or" ? /* @__PURE__ */ a.jsx("span", { className: "text-muted-foreground text-xs", children: "or" }, d) : /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: d }, d)
            ) })
          ]
        },
        l.value
      )),
      /* @__PURE__ */ a.jsx(wn, {}),
      /* @__PURE__ */ a.jsxs(Si, { children: [
        /* @__PURE__ */ a.jsx(ji, { className: "pl-8", children: "Number of days" }),
        /* @__PURE__ */ a.jsxs(Ti, { children: [
          ZC.map((l) => /* @__PURE__ */ a.jsxs(vt, { onClick: () => o(l), children: [
            /* @__PURE__ */ a.jsx(
              qn,
              {
                className: j(
                  "size-4 shrink-0",
                  t !== l && "invisible"
                )
              }
            ),
            l,
            " days",
            /* @__PURE__ */ a.jsx(ie, { variant: "ghost", className: "ml-auto", children: l })
          ] }, l)),
          /* @__PURE__ */ a.jsx(wn, {}),
          /* @__PURE__ */ a.jsx(vt, { disabled: !0, children: "Other..." })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(wn, {}),
      /* @__PURE__ */ a.jsxs(Si, { children: [
        /* @__PURE__ */ a.jsx(ji, { className: "pl-8", children: "View settings" }),
        /* @__PURE__ */ a.jsxs(Ti, { className: "w-56", children: [
          /* @__PURE__ */ a.jsxs(
            qo,
            {
              checked: n.showWeekends,
              onCheckedChange: () => s(),
              children: [
                "Weekends",
                /* @__PURE__ */ a.jsxs(Rt, { className: "ml-auto", children: [
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "shift" }),
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "⌘" }),
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "E" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            qo,
            {
              checked: n.showDeclinedEvents,
              onCheckedChange: () => i(),
              children: [
                "Declined eve...",
                /* @__PURE__ */ a.jsxs(Rt, { className: "ml-auto", children: [
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "shift" }),
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "⌘" }),
                  /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "D" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            qo,
            {
              checked: n.showWeekNumbers,
              onCheckedChange: () => c(),
              children: "Week numbers"
            }
          ),
          /* @__PURE__ */ a.jsx(wn, {}),
          /* @__PURE__ */ a.jsxs(vt, { disabled: !0, children: [
            "General settings",
            /* @__PURE__ */ a.jsxs(Rt, { className: "ml-auto", children: [
              /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "⌘" }),
              /* @__PURE__ */ a.jsx(ie, { variant: "ghost", children: "," })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Qr(e) {
  return e.isAllDay ? !1 : !De(e.start, e.end);
}
function eM(e, t) {
  const n = Be(t.date), r = _e(n, 1);
  return e.filter((o) => o.isAllDay || Qr(o) ? !1 : o.start < r && o.end > n);
}
function Ki(e, t) {
  return Ff(
    { start: e.start, end: e.end },
    { start: t.start, end: t.end }
  );
}
function tM(e) {
  const t = /* @__PURE__ */ new Map();
  if (e.length === 0)
    return t;
  const n = [...e].sort((s, i) => {
    const c = s.start.getTime() - i.start.getTime();
    if (c !== 0)
      return c;
    const l = s.end.getTime() - s.start.getTime();
    return i.end.getTime() - i.start.getTime() - l;
  }), r = [], o = /* @__PURE__ */ new Set();
  for (const s of n) {
    if (o.has(s.id))
      continue;
    const i = [s];
    o.add(s.id);
    let c = !0;
    for (; c; ) {
      c = !1;
      for (const l of n)
        o.has(l.id) || !i.some(
          (m) => Ki(m, l)
        ) || (i.push(l), o.add(l.id), c = !0);
    }
    r.push(i);
  }
  for (const s of r) {
    const i = [];
    s.sort((l, d) => l.start.getTime() - d.start.getTime());
    for (const l of s) {
      let d = !1;
      for (let m = 0; m < i.length; m++) {
        const f = i[m];
        if (!f.some(
          (p) => Ki(p, l)
        )) {
          f.push(l), t.set(l.id, { column: m, totalColumns: 0 }), d = !0;
          break;
        }
      }
      d || (i.push([l]), t.set(l.id, {
        column: i.length - 1,
        totalColumns: 0
      }));
    }
    const c = i.length;
    for (const l of s) {
      const d = t.get(l.id);
      d && (d.totalColumns = c);
    }
  }
  return t;
}
function nM(e, t, n = 8) {
  const r = eM(e, t);
  if (r.length === 0)
    return [];
  const o = tM(r), s = Be(t.date), i = _e(s, 1);
  return r.map((c) => {
    const l = o.get(c.id) ?? {
      column: 0,
      totalColumns: 1
    }, d = c.start > s ? c.start : s, m = c.end < i ? c.end : i, h = Lr(d, s) / 1440 * 100, b = Lr(m, d) / 1440 * 100, g = De(c.start, s), x = c.end <= i;
    let v = "full";
    g && !x ? v = "start" : !g && x ? v = "end" : !g && !x && (v = "middle");
    const y = n, k = 8, { column: M, totalColumns: N } = l;
    let w, E;
    if (N === 1)
      w = 0, E = 100 - y;
    else {
      const D = (100 - y + k * (N - 1)) / N;
      w = M * (D - k), M === N - 1 ? E = 100 - y - w : E = D;
    }
    return {
      event: c,
      top: h,
      height: b,
      left: w,
      width: E,
      column: l.column,
      totalColumns: l.totalColumns,
      segmentPosition: v
    };
  });
}
function rM(e, t) {
  const n = e.filter(
    (i) => i.isAllDay || Qr(i)
  );
  if (n.length === 0)
    return [];
  const r = [...n].sort((i, c) => {
    const l = i.start.getTime() - c.start.getTime();
    if (l !== 0)
      return l;
    const d = i.end.getTime() - i.start.getTime();
    return c.end.getTime() - c.start.getTime() - d;
  }), o = [], s = /* @__PURE__ */ new Map();
  for (const i of r) {
    let c = -1, l = -1;
    for (let h = 0; h < t.length; h++) {
      const p = t[h], b = Be(p.date);
      (De(i.start, p.date) || i.start <= b && i.end >= b) && (c === -1 && (c = h), l = h);
    }
    if (c === -1)
      continue;
    let d = 0, m = !1;
    for (; !m; ) {
      if (!(s.get(d) ?? []).some(
        (b) => !(l < b.start || c > b.end)
      )) {
        m = !0;
        break;
      }
      d++;
    }
    const f = s.get(d) ?? [];
    f.push({ start: c, end: l }), s.set(d, f), o.push({
      event: i,
      startColumn: c,
      endColumn: l,
      row: d
    });
  }
  return o;
}
const oM = 150, ts = 200;
function sM({
  containerRef: e,
  dayColumnWidth: t,
  onNavigate: n,
  disabled: r
}) {
  const [o, s] = ut(0), [i, c] = ut(0), [l, d] = ut(!1), [m, f] = ut(!1), h = te(null), p = te(0), b = te(n);
  be(() => {
    b.current = n;
  }, [n]);
  const g = we(
    (v) => {
      if (t <= 0) return;
      const y = Math.round(v / t);
      if (y === 0) {
        f(!0), s(0), setTimeout(() => {
          f(!1), d(!1);
        }, ts);
        return;
      }
      const k = y * t;
      f(!0), s(k), setTimeout(() => {
        b.current(-y), s(0), f(!1), d(!1), p.current = 0;
      }, ts);
    },
    [t]
  ), x = we(
    (v) => {
      if (t <= 0 || m || l) return;
      const y = v * t;
      c(y), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          f(!0), c(0), setTimeout(() => {
            f(!1);
          }, ts);
        });
      });
    },
    [t, m, l]
  );
  return be(() => {
    const v = e.current;
    if (!v) return;
    const y = (k) => {
      r || Math.abs(k.deltaX) <= Math.abs(k.deltaY) || (k.preventDefault(), d(!0), p.current += -k.deltaX, s(p.current), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        g(p.current), p.current = 0;
      }, oM));
    };
    return v.addEventListener("wheel", y, { passive: !1 }), () => {
      v.removeEventListener("wheel", y), h.current && clearTimeout(h.current);
    };
  }, [e, g, r]), {
    scrollOffset: o,
    slideOffset: i,
    isScrolling: l,
    isAnimating: m,
    triggerSlideAnimation: x
  };
}
const Xi = 4, Qi = 15, Zi = 40, aM = 500, iM = 800, Tr = 60, Ji = 12;
function cM(e) {
  return Math.round(e / Qi) * Qi;
}
function ec(e, t) {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n.setMinutes(t), n;
}
function lM(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function uM({
  hourHeight: e,
  scrollContainerRef: t,
  events: n,
  days: r,
  dayColumnWidth: o,
  timeAxisWidth: s,
  onEventChange: i,
  onEventClick: c,
  onDragNavigate: l
}) {
  const [d, m] = ut(null), f = te(null), h = te(i), p = te(c), b = te(l), g = te(n), x = te(e), v = te(r), y = te(o), k = te(s);
  be(() => {
    h.current = i;
  }, [i]), be(() => {
    p.current = c;
  }, [c]), be(() => {
    b.current = l;
  }, [l]), be(() => {
    g.current = n;
  }, [n]), be(() => {
    x.current = e;
  }, [e]), be(() => {
    v.current = r;
  }, [r]), be(() => {
    y.current = o;
  }, [o]), be(() => {
    k.current = s;
  }, [s]);
  const M = te(null), N = te(null), w = te(null), E = te(0), D = te(null), T = te(null), P = we(() => {
    M.current !== null && (clearTimeout(M.current), M.current = null), N.current = null;
  }, []), L = we(() => {
    w.current !== null && (cancelAnimationFrame(w.current), w.current = null), E.current = 0;
  }, []), z = we(() => {
    D.current && window.removeEventListener("mousemove", D.current), T.current && window.removeEventListener("mouseup", T.current), P(), L();
  }, [P, L]), H = we(() => {
    if (w.current !== null) return;
    const I = () => {
      const _ = t.current;
      if (!_) return;
      const O = E.current;
      if (O === 0) {
        w.current = null;
        return;
      }
      _.scrollTop += O, w.current = requestAnimationFrame(I);
    };
    w.current = requestAnimationFrame(I);
  }, [t]), G = we((I) => {
    if (N.current === I) return;
    P(), N.current = I;
    const _ = () => {
      b.current?.(I), M.current = setTimeout(_, iM);
    };
    M.current = setTimeout(_, aM);
  }, [P]);
  be(() => {
    D.current = (I) => {
      const _ = f.current;
      if (!_) return;
      const O = Math.abs(I.clientY - _.startClientY), R = Math.abs(I.clientX - _.startClientX);
      if (!_.isDragging && O < Xi && R < Xi) return;
      _.isDragging || (_.isDragging = !0);
      const $ = t.current;
      if (!$) return;
      const C = $.getBoundingClientRect(), S = $.scrollTop, F = I.clientY - C.top + S - _.offsetWithinEvent, Y = I.clientX - C.left - _.offsetWithinEventX, B = F / x.current * 60, U = cM(B), W = Math.max(0, Math.min(U, 1440 - _.durationMinutes)), Z = y.current, ne = v.current, ue = C.left + k.current, We = I.clientX - ue, Oe = lM(Math.floor(We / Z), 0, ne.length - 1), He = ne[Oe], Ne = ec(He, W), ge = ec(He, W + _.durationMinutes);
      m({
        eventId: _.eventId,
        event: _.event,
        originalStart: _.event.start,
        originalEnd: _.event.end,
        currentStart: Ne,
        currentEnd: ge,
        currentDate: He,
        isDragging: !0,
        cursorY: F,
        cursorX: Y,
        clientX: I.clientX - _.offsetWithinEventX,
        clientY: I.clientY - _.offsetWithinEvent
      });
      const Me = I.clientX - ue, Ge = Z * ne.length;
      Me < Zi ? G(-7) : Me > Ge - Zi ? G(7) : P();
      const Le = I.clientY - C.top, $e = C.height;
      if (Le < Tr) {
        const se = Le;
        E.current = -Ji * (1 - se / Tr), H();
      } else if (Le > $e - Tr) {
        const se = $e - Le;
        E.current = Ji * (1 - se / Tr), H();
      } else
        L();
    }, T.current = () => {
      const I = f.current;
      I && (z(), I.isDragging ? m((_) => {
        if (!_) return null;
        const O = g.current.find((R) => R.id === I.eventId);
        return O && h.current?.({
          ...O,
          start: _.currentStart,
          end: _.currentEnd
        }), null;
      }) : m(null), f.current = null);
    };
  }, [t, z, G, P, L, H]);
  const q = we(
    (I, _) => {
      if (I.button !== 0 || (p.current?.(_), !t.current)) return;
      const $ = I.currentTarget.getBoundingClientRect(), C = I.clientY - $.top, S = I.clientX - $.left, F = _.start.getHours() * 60 + _.start.getMinutes(), B = _.end.getHours() * 60 + _.end.getMinutes() - F;
      f.current = {
        eventId: _.id,
        event: _,
        startClientY: I.clientY,
        startClientX: I.clientX,
        offsetWithinEvent: C,
        offsetWithinEventX: S,
        isDragging: !1,
        durationMinutes: B
      }, m({
        eventId: _.id,
        event: _,
        originalStart: _.start,
        originalEnd: _.end,
        currentStart: _.start,
        currentEnd: _.end,
        currentDate: _.start,
        isDragging: !1,
        cursorY: 0,
        cursorX: 0,
        clientX: 0,
        clientY: 0
      }), D.current && window.addEventListener("mousemove", D.current), T.current && window.addEventListener("mouseup", T.current);
    },
    [t]
  );
  return be(() => z, [z]), { dragState: d, handleEventMouseDown: q };
}
const dM = 4, tc = 15, _r = 15, Or = 60, nc = 12, rc = 40, fM = 500, mM = 800;
function hM(e) {
  return Math.round(e / tc) * tc;
}
function oc(e, t) {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n.setMinutes(t), n;
}
function Hn(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function pM({
  hourHeight: e,
  scrollContainerRef: t,
  events: n,
  days: r,
  dayColumnWidth: o,
  timeAxisWidth: s,
  onEventChange: i,
  onEventClick: c,
  onResizeNavigate: l
}) {
  const [d, m] = ut(null), f = te(null), h = te(i), p = te(c), b = te(l), g = te(n), x = te(e), v = te(r), y = te(o), k = te(s);
  be(() => {
    h.current = i;
  }, [i]), be(() => {
    p.current = c;
  }, [c]), be(() => {
    b.current = l;
  }, [l]), be(() => {
    g.current = n;
  }, [n]), be(() => {
    x.current = e;
  }, [e]), be(() => {
    v.current = r;
  }, [r]), be(() => {
    y.current = o;
  }, [o]), be(() => {
    k.current = s;
  }, [s]);
  const M = te(null), N = te(0), w = te(null), E = te(null), D = te(null), T = te(null), P = we(() => {
    M.current !== null && (cancelAnimationFrame(M.current), M.current = null), N.current = 0;
  }, []), L = we(() => {
    w.current !== null && (clearTimeout(w.current), w.current = null), E.current = null;
  }, []), z = we((I) => {
    if (E.current === I) return;
    L(), E.current = I;
    const _ = () => {
      b.current?.(I), w.current = setTimeout(_, mM);
    };
    w.current = setTimeout(_, fM);
  }, [L]), H = we(() => {
    D.current && window.removeEventListener("mousemove", D.current), T.current && window.removeEventListener("mouseup", T.current), P(), L();
  }, [P, L]), G = we(() => {
    if (M.current !== null) return;
    const I = () => {
      const _ = t.current;
      if (!_) return;
      const O = N.current;
      if (O === 0) {
        M.current = null;
        return;
      }
      _.scrollTop += O, M.current = requestAnimationFrame(I);
    };
    M.current = requestAnimationFrame(I);
  }, [t]);
  be(() => {
    D.current = (I) => {
      const _ = f.current;
      if (!_) return;
      const O = Math.abs(I.clientY - _.startClientY);
      if (!_.isResizing && O < dM) return;
      _.isResizing || (_.isResizing = !0);
      const R = t.current;
      if (!R) return;
      const $ = R.getBoundingClientRect(), C = R.scrollTop, F = (I.clientY - $.top + C) / x.current * 60, Y = hM(F);
      let B = _.originalStartMinutes, U = _.originalEndMinutes, W = _.originalStartDate, Z = _.originalEndDate;
      const ne = y.current, ue = v.current, We = $.left + k.current, Oe = I.clientX - We, He = Hn(Math.floor(Oe / ne), 0, ue.length - 1), Ne = ue[He], ge = _.edge === "bottom" ? _.originalStartDate : _.originalEndDate, Me = _.edge === "bottom" ? _.originalStartMinutes : _.originalEndMinutes, Ge = Ne.getTime() + Y * 6e4, Le = ge.getTime() + Me * 6e4;
      let $e;
      if (Ge > Le) {
        if ($e = "bottom", W = ge, B = Me, Z = Ne, U = Hn(Y, 0, 1440), !De(Ne, ge)) {
          const A = new Date(ge);
          A.setDate(A.getDate() + 1), A.setHours(0, 0, 0, 0), De(Ne, A) && Y === 0 && (U = 1440, Z = ge);
        }
        De(W, Z) && (U = Hn(U, Me + _r, 1440));
      } else if (Ge < Le) {
        if ($e = "top", Z = ge, U = Me, W = Ne, B = Hn(Y, 0, 1440), !De(Ne, ge)) {
          const A = new Date(ge);
          A.setDate(A.getDate() - 1), A.setHours(0, 0, 0, 0), De(Ne, A) && Y >= 1440 && (B = 0, W = ge);
        }
        De(W, Z) && (B = Hn(B, 0, Me - _r));
      } else
        $e = _.edge, _.edge === "bottom" ? (W = ge, B = Me, Z = ge, U = Me + _r) : (Z = ge, U = Me, W = ge, B = Me - _r);
      const se = oc(W, B), ze = oc(Z, U);
      m({
        eventId: _.eventId,
        event: _.event,
        originalStart: _.event.start,
        originalEnd: _.event.end,
        currentStart: se,
        currentEnd: ze,
        edge: _.edge,
        effectiveEdge: $e,
        isResizing: !0,
        currentEndDate: Z,
        currentStartDate: W
      });
      const Ve = I.clientY - $.top, Ee = $.height;
      if (Ve < Or) {
        const A = Ve;
        N.current = -nc * (1 - A / Or), G();
      } else if (Ve > Ee - Or) {
        const A = Ee - Ve;
        N.current = nc * (1 - A / Or), G();
      } else
        P();
      const Ie = I.clientX - We, rt = ne * ue.length;
      Ie < rc ? z(-7) : Ie > rt - rc ? z(7) : L();
    }, T.current = () => {
      const I = f.current;
      I && (H(), I.isResizing ? m((_) => {
        if (!_) return null;
        const O = g.current.find((C) => C.id === I.eventId);
        if (!O) return null;
        const R = 1440 * 60 * 1e3, $ = _.currentEnd.getTime() - _.currentStart.getTime() > R;
        return h.current?.({
          ...O,
          start: _.currentStart,
          end: _.currentEnd,
          isAllDay: $
        }), null;
      }) : m(null), f.current = null);
    };
  }, [t, H, P, G, z, L]);
  const q = we(
    (I, _, O) => {
      if (I.button !== 0) return;
      I.stopPropagation(), p.current?.(_);
      const R = _.start.getHours() * 60 + _.start.getMinutes(), $ = _.end.getHours() * 60 + _.end.getMinutes(), C = Be(_.start), S = Be(_.end);
      f.current = {
        eventId: _.id,
        event: _,
        edge: O,
        startClientY: I.clientY,
        isResizing: !1,
        originalStartMinutes: R,
        originalEndMinutes: $,
        originalStartDate: C,
        originalEndDate: S
      }, m({
        eventId: _.id,
        event: _,
        originalStart: _.start,
        originalEnd: _.end,
        currentStart: _.start,
        currentEnd: _.end,
        edge: O,
        effectiveEdge: O,
        isResizing: !1,
        currentEndDate: S,
        currentStartDate: C
      }), D.current && window.addEventListener("mousemove", D.current), T.current && window.addEventListener("mouseup", T.current);
    },
    []
  );
  return be(() => H, [H]), { resizeState: d, handleResizeMouseDown: q };
}
const gM = 4;
function ns(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function xM({
  days: e,
  dayColumnWidth: t,
  allDayContainerRef: n,
  events: r,
  onEventChange: o,
  onEventClick: s
}) {
  const [i, c] = ut(null), l = te(null), d = te(o), m = te(s), f = te(r), h = te(e), p = te(t);
  be(() => {
    d.current = o;
  }, [o]), be(() => {
    m.current = s;
  }, [s]), be(() => {
    f.current = r;
  }, [r]), be(() => {
    h.current = e;
  }, [e]), be(() => {
    p.current = t;
  }, [t]);
  const b = te(null), g = te(null), x = we(() => {
    b.current && window.removeEventListener("mousemove", b.current), g.current && window.removeEventListener("mouseup", g.current), document.body.style.cursor = "";
  }, []);
  be(() => {
    b.current = (y) => {
      const k = l.current;
      if (!k) return;
      const M = Math.abs(y.clientX - k.startClientX);
      if (!k.isResizing && M < gM) return;
      k.isResizing || (k.isResizing = !0, document.body.style.cursor = k.edge === "move" ? "grabbing" : "ew-resize");
      const N = n.current;
      if (!N) return;
      const w = N.getBoundingClientRect(), E = p.current, D = h.current, T = ns(
        Math.floor((y.clientX - w.left) / E),
        0,
        D.length - 1
      );
      let P = k.originalStartColumn, L = k.originalEndColumn;
      if (k.edge === "move") {
        const z = k.originalEndColumn - k.originalStartColumn, H = T - k.startColumnIndex;
        P = ns(
          k.originalStartColumn + H,
          0,
          D.length - 1 - z
        ), L = P + z;
      } else k.edge === "right" ? L = Math.max(T, k.originalStartColumn) : P = Math.min(T, k.originalEndColumn);
      c({
        eventId: k.eventId,
        event: k.event,
        originalStartColumn: k.originalStartColumn,
        originalEndColumn: k.originalEndColumn,
        currentStartColumn: P,
        currentEndColumn: L,
        edge: k.edge,
        isResizing: !0,
        ...k.edge === "move" ? {
          clientX: y.clientX,
          clientY: y.clientY,
          cursorOffsetX: k.cursorOffsetX,
          cursorOffsetY: k.cursorOffsetY
        } : {}
      });
    }, g.current = () => {
      const y = l.current;
      y && (x(), y.isResizing ? c((k) => {
        if (!k) return null;
        const M = f.current.find((G) => G.id === y.eventId);
        if (!M) return null;
        const N = h.current, w = N[k.currentStartColumn], E = N[k.currentEndColumn];
        if (!w || !E) return null;
        const D = new Date(w);
        D.setHours(
          M.start.getHours(),
          M.start.getMinutes(),
          M.start.getSeconds(),
          M.start.getMilliseconds()
        );
        const T = new Date(E);
        T.setHours(
          M.end.getHours(),
          M.end.getMinutes(),
          M.end.getSeconds(),
          M.end.getMilliseconds()
        );
        const P = y.edge === "move", L = 1440 * 60 * 1e3, z = T.getTime() - D.getTime() > L, H = P ? M.isAllDay === !0 : z;
        return d.current?.({
          ...M,
          start: D,
          end: T,
          isAllDay: H
        }), null;
      }) : c(null), l.current = null);
    };
  }, [n, x]);
  const v = we(
    (y, k, M, N, w) => {
      if (y.button !== 0) return;
      y.stopPropagation(), m.current?.(k);
      const E = n.current;
      let D = N, T = 0;
      const P = 0;
      if (E) {
        const L = E.getBoundingClientRect(), z = p.current;
        D = ns(
          Math.floor((y.clientX - L.left) / z),
          0,
          h.current.length - 1
        );
        const H = L.left + N * z;
        T = y.clientX - H;
      }
      l.current = {
        eventId: k.id,
        event: k,
        edge: M,
        startClientX: y.clientX,
        isResizing: !1,
        originalStartColumn: N,
        originalEndColumn: w,
        startColumnIndex: D,
        cursorOffsetX: T,
        cursorOffsetY: P
      }, c({
        eventId: k.id,
        event: k,
        originalStartColumn: N,
        originalEndColumn: w,
        currentStartColumn: N,
        currentEndColumn: w,
        edge: M,
        isResizing: !1
      }), b.current && window.addEventListener("mousemove", b.current), g.current && window.addEventListener("mouseup", g.current);
    },
    [n]
  );
  return be(() => x, [x]), { allDayResizeState: i, handleAllDayResizeMouseDown: v };
}
const Ta = 24, _a = 2;
function bM({
  days: e,
  allDayEvents: t = [],
  onEventClick: n,
  selectedEventId: r,
  scrollStyle: o,
  allDayResizeState: s,
  onAllDayResizeMouseDown: i,
  allDayScrollContentRef: c,
  onEventChange: l,
  onContextMenuOpenChange: d,
  isSidebarOpen: m,
  onDockToSidebar: f,
  onClosePopover: h,
  onPrevWeek: p,
  onNextWeek: b,
  visibleStartIndex: g,
  visibleCount: x,
  dayColumnWidth: v,
  className: y
}) {
  const k = rM(t, e), M = g != null && x != null ? g + x - 1 : e.length - 1, N = g != null ? k.filter(
    ({ startColumn: T, endColumn: P }) => P >= g && T <= M
  ) : k, w = N.length > 0 ? Math.max(...N.map((T) => T.row)) + 1 : 0, E = w > 0 ? w * (Ta + _a) + 8 : 32, D = s?.isResizing && s.edge === "move";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: j(
        "border-border flex border-t border-b bg-background",
        y
      ),
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "border-border text-muted-foreground flex w-16 flex-shrink-0 items-start justify-end border-r px-2 py-2 text-xxs", children: "All-day" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { ref: c, style: o, children: /* @__PURE__ */ a.jsxs("div", { className: "relative", style: { minHeight: `${E}px` }, children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute inset-0 grid",
              style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
              children: e.map((T) => {
                const P = T.date.getDay() === 0 || T.date.getDay() === 6;
                return /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: j(
                      "border-border border-l first:border-l-0 h-full",
                      P && "bg-calendar-weekend"
                    )
                  },
                  T.date.toISOString()
                );
              })
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "relative py-1 px-0.5", children: [
            N.map(({ event: T, startColumn: P, endColumn: L, row: z }) => {
              const H = s?.eventId === T.id && s.isResizing, G = H && s.edge === "move", q = H ? G ? P : s.currentStartColumn : P, I = H ? G ? L : s.currentEndColumn : L;
              return /* @__PURE__ */ a.jsx(
                vM,
                {
                  event: T,
                  startColumn: q,
                  endColumn: I,
                  row: z,
                  totalColumns: e.length,
                  days: e,
                  onEventClick: n,
                  isSelected: T.id === r,
                  onAllDayResizeMouseDown: i,
                  originalStartColumn: P,
                  originalEndColumn: L,
                  isBeingResized: H,
                  isBeingMoved: G,
                  onEventChange: l,
                  onContextMenuOpenChange: d,
                  isSidebarOpen: m,
                  onDockToSidebar: f,
                  onClosePopover: h,
                  onPrevWeek: p,
                  onNextWeek: b,
                  visibleStartIndex: g
                },
                T.id
              );
            }),
            D && (() => {
              const T = N.find(
                (P) => P.event.id === s.eventId
              );
              return T ? /* @__PURE__ */ a.jsx(
                yM,
                {
                  event: T.event,
                  startColumn: s.currentStartColumn,
                  endColumn: s.currentEndColumn,
                  row: T.row,
                  totalColumns: e.length
                }
              ) : null;
            })()
          ] })
        ] }) }) }),
        D && s.clientX != null && s.clientY != null && (() => {
          const T = N.find(
            (G) => G.event.id === s.eventId
          );
          if (!T) return null;
          const z = (T.endColumn - T.startColumn + 1) * (v ?? 100), H = s.cursorOffsetX ?? 0;
          return tr(
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "pointer-events-none",
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  zIndex: 9999
                },
                children: /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    style: {
                      position: "fixed",
                      left: `${s.clientX - H}px`,
                      top: `${s.clientY - (s.cursorOffsetY ?? 12)}px`,
                      width: `${z}px`
                    },
                    children: /* @__PURE__ */ a.jsx(
                      ka,
                      {
                        event: T.event,
                        spanStart: !0,
                        spanEnd: !0,
                        dragVariant: "dragging"
                      }
                    )
                  }
                )
              }
            ),
            document.body
          );
        })()
      ]
    }
  );
}
function vM({
  event: e,
  startColumn: t,
  endColumn: n,
  row: r,
  totalColumns: o,
  days: s,
  onEventClick: i,
  isSelected: c,
  onAllDayResizeMouseDown: l,
  originalStartColumn: d,
  originalEndColumn: m,
  isBeingResized: f,
  isBeingMoved: h,
  onEventChange: p,
  onContextMenuOpenChange: b,
  isSidebarOpen: g,
  onDockToSidebar: x,
  onClosePopover: v,
  onPrevWeek: y,
  onNextWeek: k,
  visibleStartIndex: M
}) {
  const { view: N } = mr(), w = N === "day", E = t / o * 100, D = 100 / o, T = w ? D * 0.02 : D * 0.08, P = (n - t + 1) / o * 100 - T, L = r * (Ta + _a), z = f || De(e.start, s[t].date), H = f || De(e.end, s[n].date), q = (M ?? 1) / o * 100, I = w ? Math.max(0, q - E) : 0, O = I > 0 && P > 0 ? (I + 0.1) / P * 100 : 0, R = we(
    ($, C, S) => {
      l?.(
        $,
        C,
        S,
        d,
        m
      );
    },
    [l, d, m]
  );
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute",
      style: {
        left: `${E}%`,
        width: `${P}%`,
        top: `${L}px`,
        paddingLeft: "2px",
        paddingRight: "2px"
      },
      children: /* @__PURE__ */ a.jsx(
        ka,
        {
          event: e,
          isPast: Un(e.end),
          isSelected: h ? !1 : c,
          onClick: i,
          spanStart: z,
          spanEnd: H,
          onResizeMouseDown: R,
          onEventChange: p,
          onContextMenuOpenChange: b,
          isSidebarOpen: g,
          onDockToSidebar: x,
          onClosePopover: v,
          onPrevWeek: y,
          onNextWeek: k,
          titleOffsetPercent: O,
          dragVariant: h ? "ghost" : void 0
        }
      )
    }
  );
}
function yM({
  event: e,
  startColumn: t,
  endColumn: n,
  row: r,
  totalColumns: o
}) {
  const s = 100 / o, i = t / o * 100, c = s * 0.08, l = (n - t + 1) / o * 100 - c, d = r * (Ta + _a);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute pointer-events-none",
      style: {
        left: `${i}%`,
        width: `${l}%`,
        top: `${d}px`,
        paddingLeft: "2px",
        paddingRight: "2px",
        zIndex: 25
      },
      children: /* @__PURE__ */ a.jsx(ka, { event: e, spanStart: !0, spanEnd: !0, dragVariant: "placeholder" })
    }
  );
}
function wM() {
  const e = /* @__PURE__ */ new Date(), n = e.toLocaleTimeString("en-US", {
    timeZoneName: "short"
  }).match(/\s([A-Z]{2,5})$/);
  if (n)
    return n[1];
  const r = -e.getTimezoneOffset(), o = Math.floor(Math.abs(r) / 60);
  return `GMT${r >= 0 ? "+" : "-"}${o}`;
}
function kM({
  days: e,
  standalone: t,
  className: n
}) {
  const r = wM();
  return t ? /* @__PURE__ */ a.jsx(
    "div",
    {
      className: j("grid", n),
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((o) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: j(
            "flex items-center justify-center py-2 text-sm",
            o.isToday ? "gap-0.5 " : "gap-0"
          ),
          children: [
            /* @__PURE__ */ a.jsx(
              "span",
              {
                className: j(
                  o.isToday ? "text-foreground font-medium" : "text-muted-foreground font-normal"
                ),
                children: o.dayName
              }
            ),
            /* @__PURE__ */ a.jsx(
              "span",
              {
                className: j(
                  "flex h-5 w-[1.2rem] items-center justify-center rounded-xs text-sm",
                  o.isToday ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground"
                ),
                children: o.dayNumber
              }
            )
          ]
        },
        o.date.toISOString()
      ))
    }
  ) : /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: j("grid bg-background", n),
      style: { gridTemplateColumns: "4rem 1fr" },
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-muted-foreground flex items-center justify-end pr-2 text-xxs", children: r }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "grid",
            style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
            children: e.map((o) => /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: j(
                  "flex items-center justify-center py-2 text-sm",
                  o.isToday ? "gap-0.5 " : "gap-0"
                ),
                children: [
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: j(
                        o.isToday ? "text-foreground font-medium" : "text-muted-foreground font-normal"
                      ),
                      children: o.dayName
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: j(
                        "flex h-5 w-[1.2rem] items-center justify-center rounded-xs text-sm",
                        o.isToday ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground"
                      ),
                      children: o.dayNumber
                    }
                  )
                ]
              },
              o.date.toISOString()
            ))
          }
        )
      ]
    }
  );
}
function CM({
  days: e,
  hours: t,
  hourHeight: n,
  events: r = [],
  onEventClick: o,
  selectedEventId: s,
  dragState: i,
  onEventDragMouseDown: c,
  resizeState: l,
  onEventResizeMouseDown: d,
  onEventChange: m,
  onContextMenuOpenChange: f,
  isSidebarOpen: h,
  onDockToSidebar: p,
  onClosePopover: b,
  onPrevWeek: g,
  onNextWeek: x,
  className: v
}) {
  const { view: y } = mr(), k = y === "day", M = V.useRef(null), [N, w] = V.useState(0);
  return V.useEffect(() => {
    const E = M.current;
    if (!E) return;
    const D = new ResizeObserver((T) => {
      for (const P of T)
        w(P.contentRect.width);
    });
    return D.observe(E), () => D.disconnect();
  }, []), /* @__PURE__ */ a.jsxs("div", { ref: M, className: j("relative", v), children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "grid",
        style: {
          gridTemplateColumns: `repeat(${e.length}, 1fr)`,
          gridTemplateRows: `repeat(${t.length}, ${n}px)`
        },
        children: t.map(
          (E) => e.map((D) => {
            const T = D.date.getDay() === 0 || D.date.getDay() === 6;
            return /* @__PURE__ */ a.jsx(
              "div",
              {
                className: j(
                  "border-border border-b border-l",
                  T && "bg-calendar-weekend"
                )
              },
              `${D.date.toISOString()}-${E.hour}`
            );
          })
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "absolute inset-0 grid pointer-events-none",
        style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
        children: e.map((E) => {
          const T = nM(
            r,
            E,
            k ? 2 : 8
          );
          return /* @__PURE__ */ a.jsx(
            jM,
            {
              columnDate: E.date,
              events: T,
              hourHeight: n,
              onEventClick: o,
              selectedEventId: s,
              dragState: i,
              onEventDragMouseDown: c,
              resizeState: l,
              onEventResizeMouseDown: d,
              onEventChange: m,
              onContextMenuOpenChange: f,
              isSidebarOpen: h,
              onDockToSidebar: p,
              onClosePopover: b,
              onPrevWeek: g,
              onNextWeek: x
            },
            E.date.toISOString()
          );
        })
      }
    ),
    l?.isResizing && !De(
      l.currentStartDate,
      l.currentEndDate
    ) && /* @__PURE__ */ a.jsx(
      NM,
      {
        days: e,
        hourHeight: n,
        resizeState: l
      }
    ),
    i?.isDragging && /* @__PURE__ */ a.jsx(
      MM,
      {
        days: e,
        hourHeight: n,
        dragState: i
      }
    ),
    i?.isDragging && /* @__PURE__ */ a.jsx(
      SM,
      {
        days: e,
        hourHeight: n,
        dragState: i,
        gridWidth: N
      }
    )
  ] });
}
function MM({
  days: e,
  hourHeight: t,
  dragState: n
}) {
  const r = e.findIndex(
    (s) => De(s.date, n.currentDate)
  );
  if (r === -1) return null;
  const o = {
    event: n.event,
    top: 0,
    height: 0,
    left: 0,
    width: 92,
    column: 0,
    totalColumns: 1
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 grid pointer-events-none",
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((s, i) => i !== r ? /* @__PURE__ */ a.jsx("div", {}, s.date.toISOString()) : /* @__PURE__ */ a.jsx("div", { className: "relative", children: /* @__PURE__ */ a.jsx(
        sn,
        {
          positionedEvent: o,
          hourHeight: t,
          dragVariant: "placeholder",
          overrideStart: n.currentStart,
          overrideEnd: n.currentEnd
        },
        `${n.eventId}-placeholder`
      ) }, s.date.toISOString()))
    }
  );
}
function NM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  return n.effectiveEdge === "bottom" ? /* @__PURE__ */ a.jsx(
    EM,
    {
      days: e,
      hourHeight: t,
      resizeState: n
    }
  ) : /* @__PURE__ */ a.jsx(
    DM,
    {
      days: e,
      hourHeight: t,
      resizeState: n
    }
  );
}
function EM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  const r = n.currentEndDate, o = e.findIndex(
    (i) => De(i.date, n.currentStartDate)
  ), s = e.findIndex((i) => De(i.date, r));
  return o === -1 || s === -1 || s <= o ? null : /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 grid pointer-events-none",
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((i, c) => {
        if (c <= o || c > s)
          return /* @__PURE__ */ a.jsx("div", {}, i.date.toISOString());
        const l = c === s, d = l ? "end" : "middle", m = Be(i.date), f = m, h = l ? n.currentEnd : _e(m, 1), p = {
          event: n.event,
          top: 0,
          height: 0,
          left: 0,
          width: 92,
          column: 0,
          totalColumns: 1,
          segmentPosition: d
        };
        return /* @__PURE__ */ a.jsx("div", { className: "relative", children: /* @__PURE__ */ a.jsx(
          sn,
          {
            positionedEvent: p,
            hourHeight: t,
            isSelected: !0,
            overrideStart: f,
            overrideEnd: h
          }
        ) }, i.date.toISOString());
      })
    }
  );
}
function DM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  const r = n.currentStartDate, o = e.findIndex((i) => De(i.date, r)), s = e.findIndex(
    (i) => De(i.date, n.currentEndDate)
  );
  return o === -1 || s === -1 || s <= o ? null : /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 grid pointer-events-none",
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((i, c) => {
        if (c < o || c >= s)
          return /* @__PURE__ */ a.jsx("div", {}, i.date.toISOString());
        const l = c === o, d = l ? "start" : "middle", m = Be(i.date), f = l ? n.currentStart : m, h = _e(m, 1), p = {
          event: n.event,
          top: 0,
          height: 0,
          left: 0,
          width: 92,
          column: 0,
          totalColumns: 1,
          segmentPosition: d
        };
        return /* @__PURE__ */ a.jsx("div", { className: "relative", children: /* @__PURE__ */ a.jsx(
          sn,
          {
            positionedEvent: p,
            hourHeight: t,
            isSelected: !0,
            overrideStart: f,
            overrideEnd: h
          }
        ) }, i.date.toISOString());
      })
    }
  );
}
function SM({
  days: e,
  hourHeight: t,
  dragState: n,
  gridWidth: r
}) {
  const o = {
    event: n.event,
    top: 0,
    height: 0,
    left: 0,
    width: 92,
    column: 0,
    totalColumns: 1
  }, i = (n.currentEnd.getTime() - n.currentStart.getTime()) / 6e4 / 60 * t, c = (e.length > 0 ? r / e.length : 200) * 0.92;
  return tr(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "pointer-events-none",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999
        },
        children: /* @__PURE__ */ a.jsx(
          sn,
          {
            positionedEvent: o,
            hourHeight: t,
            dragVariant: "dragging",
            overrideStart: n.currentStart,
            overrideEnd: n.currentEnd,
            cursorY: n.clientY,
            cursorX: n.clientX,
            fixedWidth: c,
            fixedHeight: i
          },
          `${n.eventId}-dragging`
        )
      }
    ),
    document.body
  );
}
function rs(e, t) {
  return /* @__PURE__ */ a.jsx(
    sn,
    {
      positionedEvent: e,
      hourHeight: t,
      dragVariant: "ghost"
    },
    `${e.event.id}-ghost`
  );
}
function jM({
  columnDate: e,
  events: t,
  hourHeight: n,
  onEventClick: r,
  selectedEventId: o,
  dragState: s,
  onEventDragMouseDown: i,
  resizeState: c,
  onEventResizeMouseDown: l,
  onEventChange: d,
  onContextMenuOpenChange: m,
  isSidebarOpen: f,
  onDockToSidebar: h,
  onClosePopover: p,
  onPrevWeek: b,
  onNextWeek: g
}) {
  return /* @__PURE__ */ a.jsx("div", { className: "relative h-full pointer-events-auto", children: t.map((x) => {
    const v = x.event.id;
    if (s?.isDragging && s.eventId === v)
      return rs(x, n);
    if (c?.isResizing && c.eventId === v) {
      const { effectiveEdge: M, currentStartDate: N, currentEndDate: w } = c, E = !De(N, w), D = M === "bottom" && De(e, N) || M === "top" && De(e, w), T = e.getTime(), P = T >= N.getTime() && T <= w.getTime();
      if (!D || !P)
        return rs(x, n);
      let L, z, H;
      E ? M === "bottom" ? (L = c.currentStart, z = _e(Be(e), 1), H = "start") : (L = Be(e), z = c.currentEnd, H = "end") : (L = c.currentStart, z = c.currentEnd, H = "full");
      const G = { ...x, segmentPosition: H };
      return /* @__PURE__ */ a.jsxs(V.Fragment, { children: [
        rs(x, n),
        /* @__PURE__ */ a.jsx(
          sn,
          {
            positionedEvent: G,
            hourHeight: n,
            isPast: Un(x.event.end),
            isSelected: E || v === o,
            overrideStart: L,
            overrideEnd: z,
            onEventChange: d
          },
          `${v}-resizing`
        )
      ] }, v);
    }
    return /* @__PURE__ */ a.jsx(
      sn,
      {
        positionedEvent: x,
        hourHeight: n,
        isPast: Un(x.event.end),
        isSelected: v === o,
        onClick: r,
        onDragMouseDown: i,
        onResizeMouseDown: l,
        onEventChange: d,
        onContextMenuOpenChange: m,
        isSidebarOpen: f,
        onDockToSidebar: h,
        onClosePopover: p,
        onPrevWeek: b,
        onNextWeek: g
      },
      v
    );
  }) });
}
function TM({
  hours: e,
  hourHeight: t,
  className: n
}) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: j(
        "grid w-16 flex-shrink-0",
        n
      ),
      style: {
        gridTemplateRows: `repeat(${e.length}, ${t}px)`,
        gridTemplateColumns: "1fr"
      },
      children: e.map((r) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "text-muted-foreground relative pr-2 text-right text-xxs",
          children: r.hour > 0 && /* @__PURE__ */ a.jsx("span", { className: "absolute top-0 right-2 -translate-y-[55%] leading-none", children: r.label })
        },
        r.hour
      ))
    }
  );
}
function _M({
  days: e,
  hourHeight: t,
  scrollDays: n,
  scrollStyle: r,
  behindSelection: o,
  className: s
}) {
  const [i, c] = u.useState(() => /* @__PURE__ */ new Date()), d = e.findIndex((y) => y.isToday) !== -1;
  if (u.useEffect(() => {
    const y = setInterval(() => {
      c(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(y);
  }, []), !d)
    return null;
  const m = i.getHours() * 60 + i.getMinutes(), f = 1440, h = t * 24, p = m / f * h, b = ve(i, "h:mma").toUpperCase(), g = n ?? e, x = g.findIndex((y) => y.isToday), v = /* @__PURE__ */ a.jsx("div", { className: "flex items-center", children: g.map((y, k) => /* @__PURE__ */ a.jsxs(u.Fragment, { children: [
    k === x && /* @__PURE__ */ a.jsxs("div", { className: "relative flex-shrink-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "bg-primary h-3 w-[3px] translate-y-[0.5px] rounded-full shadow-[0_0_0_1px_white] dark:shadow-[0_0_0_1px_black]" }),
      /* @__PURE__ */ a.jsx("div", { className: "absolute top-[6.5px] left-[2px] bg-primary h-[1px] w-[2px] z-10" }),
      /* @__PURE__ */ a.jsx("div", { className: "absolute top-[5.5px] left-[2px] bg-primary h-[1px] w-[2px] z-10" }),
      /* @__PURE__ */ a.jsx("div", { className: "absolute top-[4.5px] left-[2px] bg-primary h-[1px] w-[2px] z-10" })
    ] }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: j(
          "flex-1 bg-primary",
          y.isToday ? "h-[3px] rounded-r-full shadow-[0_0_0_1px_white] dark:shadow-[0_0_0_1px_black]" : "h-[0.5px]"
        )
      }
    )
  ] }, y.date.toISOString())) });
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: j("pointer-events-none absolute left-0 right-0", o ? "z-10" : "z-20", s),
      style: { top: p },
      children: /* @__PURE__ */ a.jsxs("div", { className: "flex -translate-y-1/2 items-center", children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex w-16 flex-shrink-0 items-center justify-end pr-1", children: /* @__PURE__ */ a.jsx("span", { className: "bg-primary text-primary-foreground rounded-xs px-1 py-0.5 text-xxs font-medium", children: b }) }),
        r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: r, children: v }) }) : v
      ] })
    }
  );
}
const sc = 48, os = 64, gf = {
  day: 1,
  week: 7,
  month: 7
}, OM = {
  day: 1,
  week: 7,
  month: 7
}, RM = {
  day: 1,
  week: 7,
  month: 7
};
function PM(e, t) {
  const n = _e(e, t - 1);
  return Zr({ start: e, end: n }).map((r) => ({
    date: r,
    dayName: ve(r, "EEE"),
    dayNumber: r.getDate()
  }));
}
function AM(e, t, n) {
  const r = _e(e, -t), o = _e(e, n + t - 1);
  return Zr({ start: r, end: o }).map(
    (s) => ({
      date: s,
      dayName: ve(s, "EEE"),
      dayNumber: s.getDate()
    })
  );
}
function IM() {
  return Array.from({ length: 24 }, (e, t) => {
    const n = /* @__PURE__ */ new Date();
    return n.setHours(t, 0, 0, 0), {
      hour: t,
      label: ve(n, "h a")
    };
  });
}
function FM(e, t) {
  return {
    monthName: ve(e, "MMMM"),
    year: ve(e, "yyyy"),
    weekNumber: nr(e, { weekStartsOn: t })
  };
}
function ac(e, t = "week") {
  const n = gf[t], r = _e(e, n - 1);
  return Zr({ start: e, end: r });
}
function WM({
  view: e = "week",
  currentDate: t = /* @__PURE__ */ new Date(),
  events: n = [],
  onEventClick: r,
  selectedEventId: o,
  onBackgroundClick: s,
  onDateChange: i,
  onVisibleDaysChange: c,
  onEventChange: l,
  isSidebarOpen: d,
  onDockToSidebar: m,
  onClosePopover: f,
  onPrevWeek: h,
  onNextWeek: p,
  className: b
}) {
  const g = gf[e], x = OM[e], v = RM[e], y = u.useRef(null), k = u.useRef(null), M = u.useRef(null), N = u.useRef(null), E = u.useMemo(
    () => PM(t, g),
    [t, g]
  ).map((A) => ({
    ...A,
    isToday: ls(A.date)
  })), D = u.useMemo(() => IM(), []), T = u.useMemo(
    () => n.filter((A) => A.isAllDay || Qr(A)),
    [n]
  ), P = u.useMemo(
    () => n.filter((A) => !A.isAllDay && !Qr(A)),
    [n]
  ), [L, z] = u.useState(0), [H, G] = u.useState(sc), [q, I] = u.useState(!1), [_, O] = u.useState(!1);
  u.useEffect(() => {
    const A = () => {
      const Xe = y.current;
      if (!Xe) return;
      const Xt = Xe.clientWidth - os;
      z(Xt / g), G(Math.max(sc, Xe.clientHeight / 24));
    };
    A();
    const fe = new ResizeObserver(A);
    return y.current && fe.observe(y.current), () => fe.disconnect();
  }, [g]);
  const R = u.useRef(!1), $ = u.useRef(t), C = u.useCallback(
    (A) => {
      R.current = !0, i?.(_e(t, A));
    },
    [t, i]
  ), S = u.useCallback(
    (A) => {
      i?.(_e(t, A));
    },
    [t, i]
  ), F = u.useMemo(() => E.map((A) => A.date), [E]), { resizeState: Y, handleResizeMouseDown: B } = pM({
    hourHeight: H,
    scrollContainerRef: y,
    events: P,
    days: F,
    dayColumnWidth: L,
    timeAxisWidth: os,
    onEventChange: l,
    onEventClick: r,
    onResizeNavigate: S
  }), { dragState: U, handleEventMouseDown: W } = uM({
    hourHeight: H,
    scrollContainerRef: y,
    events: P,
    days: F,
    dayColumnWidth: L,
    timeAxisWidth: os,
    onEventChange: l,
    onEventClick: r,
    onDragNavigate: S
  }), { scrollOffset: Z, slideOffset: ne, isAnimating: ue, triggerSlideAnimation: We } = sM({
    containerRef: y,
    dayColumnWidth: L,
    onNavigate: C,
    disabled: U?.isDragging || Y?.isResizing || _ || q
  }), Oe = L > 0 ? Math.round(-Z / L) : 0;
  u.useEffect(() => {
    const A = _e(t, Oe), fe = _e(A, g - 1);
    c?.(Zr({ start: A, end: fe }));
  }, [t, Oe, c, g]);
  const He = L > 0 && v > 0 ? Math.ceil(Math.abs(Z) / L / v) * v : 0, Ne = x + He, ge = Ne + g + Ne, Me = u.useMemo(
    () => AM(t, Ne, g),
    [t, Ne, g]
  ), Ge = Me.map((A) => ({
    ...A,
    isToday: ls(A.date)
  })), Le = u.useMemo(
    () => Me.map((A) => A.date),
    [Me]
  ), { allDayResizeState: $e, handleAllDayResizeMouseDown: se } = xM({
    days: Le,
    dayColumnWidth: L,
    allDayContainerRef: N,
    events: T,
    onEventChange: l,
    onEventClick: r
  });
  u.useEffect(() => {
    O($e?.isResizing ?? !1);
  }, [$e?.isResizing]), u.useEffect(() => {
    if (R.current) {
      R.current = !1, $.current = t;
      return;
    }
    const A = $.current, fe = Nn(t, A);
    $.current = t, fe !== 0 && We(fe);
  }, [t, We]);
  const Ve = -(Ne * L) + Z + ne, Ee = {
    width: `${ge / g * 100}%`,
    transform: `translateX(${Ve}px)`,
    transition: ue ? "transform 200ms ease-out" : "none"
  }, Ie = u.useRef(null), rt = u.useRef(null);
  return /* @__PURE__ */ a.jsx(
    Wk,
    {
      boundaryRef: Ie,
      headerRef: rt,
      view: e,
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: Ie,
          className: j("flex h-full flex-col", b),
          onClick: (A) => {
            A.target.closest("[data-radix-popper-content-wrapper]") || s?.();
          },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex-shrink-0", children: [
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  ref: (A) => {
                    k.current = A, rt.current = A;
                  },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ a.jsxs("div", { className: "flex bg-background", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "text-muted-foreground flex w-16 flex-shrink-0 items-center justify-end pr-2 text-xxs", children: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { timeZoneName: "short" }).match(/\s([A-Z]{2,5})$/)?.[1] ?? "" }),
                    /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: Ee, children: /* @__PURE__ */ a.jsx(kM, { days: Ge, standalone: !0 }) }) })
                  ] })
                }
              ),
              /* @__PURE__ */ a.jsx("div", { className: "overflow-hidden", ref: M, children: /* @__PURE__ */ a.jsx(
                bM,
                {
                  days: Ge,
                  allDayEvents: T,
                  onEventClick: r,
                  selectedEventId: o,
                  scrollStyle: Ee,
                  allDayResizeState: $e ?? void 0,
                  onAllDayResizeMouseDown: se,
                  onEventChange: l,
                  onContextMenuOpenChange: I,
                  allDayScrollContentRef: N,
                  isSidebarOpen: d,
                  onDockToSidebar: m,
                  onClosePopover: f,
                  onPrevWeek: h,
                  onNextWeek: p,
                  visibleStartIndex: Ne,
                  visibleCount: g,
                  dayColumnWidth: L
                }
              ) })
            ] }),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                ref: y,
                className: "flex-1 overflow-auto scrollbar-hide",
                children: /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "relative flex",
                    style: { height: D.length * H },
                    children: [
                      /* @__PURE__ */ a.jsx(TM, { hours: D, hourHeight: H }),
                      /* @__PURE__ */ a.jsx("div", { className: "relative flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: Ee, children: /* @__PURE__ */ a.jsx(
                        CM,
                        {
                          days: Ge,
                          hours: D,
                          hourHeight: H,
                          events: P,
                          onEventClick: r,
                          selectedEventId: o,
                          dragState: U ?? void 0,
                          onEventDragMouseDown: W,
                          resizeState: Y ?? void 0,
                          onEventResizeMouseDown: B,
                          onEventChange: l,
                          onContextMenuOpenChange: I,
                          isSidebarOpen: d,
                          onDockToSidebar: m,
                          onClosePopover: f,
                          onPrevWeek: h,
                          onNextWeek: p
                        }
                      ) }) }),
                      /* @__PURE__ */ a.jsx(
                        _M,
                        {
                          days: E,
                          hourHeight: H,
                          scrollDays: Ge,
                          scrollStyle: Ee,
                          behindSelection: !!o
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}
function Rr(e, t) {
  return e === "day" ? Be(t) : ft(t, { weekStartsOn: 0 });
}
function LM(e, t) {
  return {
    ...e,
    ...t
  };
}
function GM(e) {
  return /* @__PURE__ */ a.jsx(Mk, { className: "h-screen", children: /* @__PURE__ */ a.jsx($M, { ...e }) });
}
function $M({
  currentDate: e,
  events: t,
  selectedEventId: n = null,
  view: r,
  numberOfDays: o,
  viewSettings: s,
  onCurrentDateChange: i,
  onEventChange: c,
  onSelectedEventIdChange: l,
  onViewChange: d,
  onNumberOfDaysChange: m,
  onViewSettingsChange: f
}) {
  const { theme: h, setTheme: p } = cf(), { open: b, toggleSidebar: g } = wo(), [x, v] = u.useState(!1), [y, k] = u.useState(!0), [M, N] = u.useState(
    () => ac(Rr(r, e), r)
  ), w = u.useMemo(
    () => Rr(r, e),
    [e, r]
  ), E = u.useMemo(
    () => t.find(($) => $.id === n) ?? null,
    [t, n]
  ), { monthName: D, weekNumber: T, year: P } = FM(
    M[0] ?? w,
    0
  ), L = u.useCallback(
    ($) => {
      l?.($);
    },
    [l]
  ), z = u.useCallback(
    ($) => {
      f?.(LM(s, $));
    },
    [f, s]
  ), H = u.useCallback(() => {
    i(Rr(r, /* @__PURE__ */ new Date()));
  }, [i, r]), G = u.useCallback(() => {
    i(
      r === "day" ? _e(w, -1) : as(w, -1)
    );
  }, [w, i, r]), q = u.useCallback(() => {
    i(
      r === "day" ? _e(w, 1) : as(w, 1)
    );
  }, [w, i, r]), I = u.useCallback(
    ($) => {
      i($);
    },
    [i]
  ), _ = u.useCallback(
    ($) => {
      i(Rr(r, $));
    },
    [i, r]
  ), O = u.useCallback(
    ($) => {
      if ($ !== r) {
        if (d($), $ === "day") {
          i(Be(/* @__PURE__ */ new Date()));
          return;
        }
        i(
          ft(w, { weekStartsOn: 0 })
        );
      }
    },
    [w, i, d, r]
  ), R = u.useCallback(() => {
    if (h === "system") {
      p("light");
      return;
    }
    if (h === "light") {
      p("dark");
      return;
    }
    p("system");
  }, [p, h]);
  return u.useEffect(() => {
    N(ac(w, r));
  }, [w, r]), u.useEffect(() => {
    const $ = (C) => {
      if ((C.metaKey || C.ctrlKey) && C.key === "k") {
        C.preventDefault(), v((F) => !F);
        return;
      }
      if (C.metaKey && C.key === "/") {
        C.preventDefault(), k((F) => !F);
        return;
      }
      if (C.key === "e" && C.shiftKey && (C.metaKey || C.ctrlKey)) {
        C.preventDefault(), z({ showWeekends: !s.showWeekends });
        return;
      }
      if (C.key === "d" && C.shiftKey && (C.metaKey || C.ctrlKey)) {
        C.preventDefault(), z({
          showDeclinedEvents: !s.showDeclinedEvents
        });
        return;
      }
      if (C.key === "," && (C.metaKey || C.ctrlKey)) {
        C.preventDefault();
        return;
      }
      if (C.key === "Escape") {
        L(null);
        return;
      }
      const S = C.target;
      if (!(S.tagName === "INPUT" || S.tagName === "TEXTAREA")) {
        if (C.key === "/" && !C.metaKey && !C.ctrlKey && !C.altKey) {
          C.preventDefault(), g();
          return;
        }
        if (C.key === "t" || C.key === "T") {
          C.preventDefault(), H();
          return;
        }
        if (C.key === "1" || C.key === "d" || C.key === "D") {
          C.preventDefault(), O("day");
          return;
        }
        if (C.key === "0" || C.key === "w" || C.key === "W") {
          C.preventDefault(), O("week");
          return;
        }
        if (/^[2-9]$/.test(C.key)) {
          C.preventDefault(), m?.(Number(C.key));
          return;
        }
        if (C.key === "j" || C.key === "J" || C.key === "ArrowLeft") {
          C.preventDefault(), G();
          return;
        }
        if (C.key === "k" || C.key === "K" || C.key === "ArrowRight") {
          C.preventDefault(), q();
          return;
        }
        if (C.key === "M" && C.shiftKey && !C.metaKey && !C.ctrlKey) {
          C.preventDefault(), R();
          return;
        }
        C.key === "m" && (C.preventDefault(), O("month"));
      }
    };
    return window.addEventListener("keydown", $), () => {
      window.removeEventListener("keydown", $);
    };
  }, [
    R,
    q,
    G,
    H,
    m,
    L,
    O,
    g,
    z,
    s.showDeclinedEvents,
    s.showWeekends
  ]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      sk,
      {
        open: x,
        onOpenChange: v,
        onGoToToday: H,
        onGoToPrev: G,
        onGoToNext: q,
        onSwitchView: O,
        onToggleLeftSidebar: () => k(($) => !$),
        onToggleRightSidebar: g,
        onCycleTheme: R
      }
    ),
    /* @__PURE__ */ a.jsx(
      WC,
      {
        open: y,
        onDateSelect: _,
        currentDate: w,
        visibleDays: M
      }
    ),
    /* @__PURE__ */ a.jsxs(Ek, { className: "flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ a.jsxs("header", { className: "bg-background sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center gap-2 px-4", children: [
          /* @__PURE__ */ a.jsxs(It, { children: [
            /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsxs(
              Ye,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 text-muted-foreground",
                onClick: () => k(($) => !$),
                children: [
                  /* @__PURE__ */ a.jsx(Rp, {}),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle Calendar Sidebar" })
                ]
              }
            ) }),
            /* @__PURE__ */ a.jsxs(Wt, { side: "bottom", children: [
              y ? "Close" : "Open",
              " sidebar",
              " ",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "⌘" }),
              " ",
              /* @__PURE__ */ a.jsx(ie, { children: "/" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(
            Dd,
            {
              orientation: "vertical",
              className: "mr-2 data-[orientation=vertical]:h-4"
            }
          ),
          /* @__PURE__ */ a.jsxs("h1", { className: "text-xl", children: [
            /* @__PURE__ */ a.jsx("span", { className: "font-extrabold", children: D }),
            " ",
            /* @__PURE__ */ a.jsx("span", { className: "font-extrabold", children: P }),
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: "text-muted-foreground text-xs", children: [
              r === "day" && ve(w, "EEEE, MMM d"),
              r === "week" && `Week ${T}`,
              r === "month" && ve(w, "MMMM")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ a.jsxs(UC, { className: "size-7", children: [
            /* @__PURE__ */ a.jsx(
              qC,
              {
                src: "https://github.com/vmnog.png",
                alt: "Victor Nogueira"
              }
            ),
            /* @__PURE__ */ a.jsx(KC, { children: "VN" })
          ] }),
          /* @__PURE__ */ a.jsx(
            JC,
            {
              view: r,
              numberOfDays: o,
              viewSettings: s,
              onSwitchView: O,
              onSetNumberOfDays: ($) => m?.($),
              onToggleWeekends: () => z({ showWeekends: !s.showWeekends }),
              onToggleDeclinedEvents: () => z({
                showDeclinedEvents: !s.showDeclinedEvents
              }),
              onToggleWeekNumbers: () => z({
                showWeekNumbers: !s.showWeekNumbers
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Ye,
            {
              variant: "secondary",
              size: "sm",
              className: "px-3",
              onClick: H,
              children: "Today"
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsxs(
              Ye,
              {
                variant: "ghost",
                size: "icon",
                className: "size-8 text-muted-foreground",
                onClick: G,
                children: [
                  /* @__PURE__ */ a.jsx(Sc, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: r === "day" ? "Previous day" : "Previous week" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              Ye,
              {
                variant: "ghost",
                size: "icon",
                className: "size-8 text-muted-foreground",
                onClick: q,
                children: [
                  /* @__PURE__ */ a.jsx(eo, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: r === "day" ? "Next day" : "Next week" })
                ]
              }
            )
          ] }),
          !b && /* @__PURE__ */ a.jsxs(It, { children: [
            /* @__PURE__ */ a.jsx(Ft, { asChild: !0, children: /* @__PURE__ */ a.jsxs(
              Ye,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 text-muted-foreground",
                onClick: g,
                children: [
                  /* @__PURE__ */ a.jsx(Ws, {}),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle Navigation Sidebar" })
                ]
              }
            ) }),
            /* @__PURE__ */ a.jsxs(Wt, { side: "bottom", children: [
              "Open context panel ",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "/" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ a.jsx(
        WM,
        {
          view: r,
          currentDate: w,
          events: t,
          onEventClick: ($) => L($.id),
          selectedEventId: E?.id,
          onBackgroundClick: () => L(null),
          onDateChange: I,
          onVisibleDaysChange: N,
          onEventChange: c,
          isSidebarOpen: b,
          onDockToSidebar: () => {
            b || g();
          },
          onClosePopover: () => L(null),
          onPrevWeek: G,
          onNextWeek: q
        }
      ) })
    ] }),
    /* @__PURE__ */ a.jsx(
      qk,
      {
        events: t,
        selectedEvent: E,
        onEventChange: c,
        onPrevWeek: G,
        onNextWeek: q
      }
    )
  ] });
}
export {
  GM as CalendarCN,
  HM as ThemeProvider,
  WM as WeekView,
  FM as getCalendarHeaderInfo,
  ac as getVisibleDays,
  cf as useTheme
};
