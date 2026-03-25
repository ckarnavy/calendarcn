import * as u from "react";
import V, { forwardRef as lc, createElement as cs, useState as dt, useLayoutEffect as uc, createContext as jf, useContext as Tf, useCallback as we, useRef as te, useEffect as ye, useMemo as Ir } from "react";
import * as Ps from "react-dom";
import Of, { createPortal as nr } from "react-dom";
var br = { exports: {} }, Wn = {};
var Ia;
function _f() {
  if (Ia) return Wn;
  Ia = 1;
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
  return Wn.Fragment = t, Wn.jsx = n, Wn.jsxs = n, Wn;
}
var Fn = {};
var Wa;
function Rf() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === F ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case x:
          return "Fragment";
        case v:
          return "Profiler";
        case y:
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
        var W = S.error, Y = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return W.call(
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
      var C = L.A;
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
      function W() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: W,
        configurable: !0
      });
    }
    function l() {
      var C = e(this.type);
      return O[C] || (O[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function d(C, S, W, Y, B, U) {
      var $ = W.ref;
      return C = {
        $$typeof: b,
        type: C,
        key: S,
        props: W,
        _owner: Y
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(C, "ref", {
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
    function m(C, S, W, Y, B, U) {
      var $ = S.children;
      if ($ !== void 0)
        if (Y)
          if (G($)) {
            for (Y = 0; Y < $.length; Y++)
              f($[Y]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f($);
      if (H.call(S, "key")) {
        $ = e(C);
        var Z = Object.keys(S).filter(function(ue) {
          return ue !== "key";
        });
        Y = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", z[$ + Y] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Y,
          $,
          Z,
          $
        ), z[$ + Y] = !0);
      }
      if ($ = null, W !== void 0 && (n(W), $ = "" + W), i(S) && (n(S.key), $ = "" + S.key), "key" in S) {
        W = {};
        for (var ne in S)
          ne !== "key" && (W[ne] = S[ne]);
      } else W = S;
      return $ && c(
        W,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), d(
        C,
        $,
        W,
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
    var p = V, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.suspense_list"), D = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), F = /* @__PURE__ */ Symbol.for("react.client.reference"), L = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, G = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(C) {
        return C();
      }
    };
    var I, O = {}, _ = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), R = q(r(s)), z = {};
    Fn.Fragment = x, Fn.jsx = function(C, S, W) {
      var Y = 1e4 > L.recentlyCreatedOwnerStacks++;
      return m(
        C,
        S,
        W,
        !1,
        Y ? Error("react-stack-top-frame") : _,
        Y ? q(r(C)) : R
      );
    }, Fn.jsxs = function(C, S, W) {
      var Y = 1e4 > L.recentlyCreatedOwnerStacks++;
      return m(
        C,
        S,
        W,
        !0,
        Y ? Error("react-stack-top-frame") : _,
        Y ? q(r(C)) : R
      );
    };
  })()), Fn;
}
var Fa;
function Pf() {
  return Fa || (Fa = 1, process.env.NODE_ENV === "production" ? br.exports = _f() : br.exports = Rf()), br.exports;
}
var a = Pf();
const dc = 6048e5, Af = 864e5, fc = 6e4, If = 36e5, Wf = 1e3, La = /* @__PURE__ */ Symbol.for("constructDateFrom");
function he(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && La in e ? e[La](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function re(e, t) {
  return he(t || e, e);
}
function Ee(e, t, n) {
  const r = re(e, n?.in);
  return isNaN(t) ? he(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function mc(e, t, n) {
  const r = re(e, n?.in);
  if (isNaN(t)) return he(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = he(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return o >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let Ff = {};
function an() {
  return Ff;
}
function tt(e, t) {
  const n = an(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = re(e, t?.in), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function tn(e, t) {
  return tt(e, { ...t, weekStartsOn: 1 });
}
function hc(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = he(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tn(o), i = he(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const c = tn(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function $r(e) {
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
  const n = he.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function We(e, t) {
  const n = re(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Nn(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  ), s = We(r), i = We(o), c = +s - $r(s), l = +i - $r(i);
  return Math.round((c - l) / Af);
}
function Lf(e, t) {
  const n = hc(e, t), r = he(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), tn(r);
}
function Un(e, t, n) {
  return Ee(e, t * 7, n);
}
function $f(e, t, n) {
  return mc(e, t * 12, n);
}
function zf(e, t, n) {
  const [r, o] = [
    +re(e.start, n?.in),
    +re(e.end, n?.in)
  ].sort((c, l) => c - l), [s, i] = [
    +re(t.start, n?.in),
    +re(t.end, n?.in)
  ].sort((c, l) => c - l);
  return r < i && s < o;
}
function Yf(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = he.bind(null, o));
    const s = re(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), he(r, n || NaN);
}
function Bf(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = he.bind(null, o));
    const s = re(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), he(r, n || NaN);
}
function pc(e) {
  return he(e, Date.now());
}
function Se(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return +We(r) == +We(o);
}
function gc(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Hf(e) {
  return !(!gc(e) && typeof e != "number" || isNaN(+re(e)));
}
function xc(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return s * 12 + i;
}
function Gf(e) {
  return (t) => {
    const n = Math.trunc, r = n(t);
    return r === 0 ? 0 : r;
  };
}
function Vf(e, t) {
  return +re(e) - +re(t);
}
function zr(e, t, n) {
  const r = Vf(e, t) / fc;
  return Gf()(r);
}
function Uf(e, t) {
  const n = re(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function As(e, t) {
  const [n, r] = Tn(e, t.start, t.end);
  return { start: n, end: r };
}
function to(e, t) {
  const { start: n, end: r } = As(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(he(n, i)), i.setDate(i.getDate() + c), i.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function qf(e, t) {
  const { start: n, end: r } = As(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(he(n, i)), i.setMonth(i.getMonth() + c);
  return o ? l.reverse() : l;
}
function Kf(e, t) {
  const n = re(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Xf(e, t) {
  const n = re(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function bc(e, t) {
  const n = re(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Qf(e, t) {
  const { start: n, end: r } = As(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let c = 1;
  const l = [];
  for (; +i <= s; )
    l.push(he(n, i)), i.setFullYear(i.getFullYear() + c);
  return o ? l.reverse() : l;
}
function yc(e, t) {
  const n = an(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = re(e, t?.in), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Zf(e, t) {
  return yc(e, { ...t, weekStartsOn: 1 });
}
const Jf = {
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
}, em = (e, t, n) => {
  let r;
  const o = Jf[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Oo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const tm = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nm = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rm = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, om = {
  date: Oo({
    formats: tm,
    defaultWidth: "full"
  }),
  time: Oo({
    formats: nm,
    defaultWidth: "full"
  }),
  dateTime: Oo({
    formats: rm,
    defaultWidth: "full"
  })
}, sm = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, am = (e, t, n, r) => sm[e];
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
const im = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cm = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lm = {
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
}, um = {
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
}, dm = {
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
}, fm = {
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
}, mm = (e, t) => {
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
}, hm = {
  ordinalNumber: mm,
  era: Ln({
    values: im,
    defaultWidth: "wide"
  }),
  quarter: Ln({
    values: cm,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ln({
    values: lm,
    defaultWidth: "wide"
  }),
  day: Ln({
    values: um,
    defaultWidth: "wide"
  }),
  dayPeriod: Ln({
    values: dm,
    defaultWidth: "wide",
    formattingValues: fm,
    defaultFormattingWidth: "wide"
  })
};
function $n(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? gm(c, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      pm(c, (f) => f.test(i))
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
function pm(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function gm(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function xm(e) {
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
const bm = /^(\d+)(th|st|nd|rd)?/i, ym = /\d+/i, vm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wm = {
  any: [/^b/i, /^(a|c)/i]
}, km = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Cm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Mm = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Nm = {
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
}, Em = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dm = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Sm = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jm = {
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
}, Tm = {
  ordinalNumber: xm({
    matchPattern: bm,
    parsePattern: ym,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $n({
    matchPatterns: vm,
    defaultMatchWidth: "wide",
    parsePatterns: wm,
    defaultParseWidth: "any"
  }),
  quarter: $n({
    matchPatterns: km,
    defaultMatchWidth: "wide",
    parsePatterns: Cm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $n({
    matchPatterns: Mm,
    defaultMatchWidth: "wide",
    parsePatterns: Nm,
    defaultParseWidth: "any"
  }),
  day: $n({
    matchPatterns: Em,
    defaultMatchWidth: "wide",
    parsePatterns: Dm,
    defaultParseWidth: "any"
  }),
  dayPeriod: $n({
    matchPatterns: Sm,
    defaultMatchWidth: "any",
    parsePatterns: jm,
    defaultParseWidth: "any"
  })
}, Jt = {
  code: "en-US",
  formatDistance: em,
  formatLong: om,
  formatRelative: am,
  localize: hm,
  match: Tm,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Om(e, t) {
  const n = re(e, t?.in);
  return Nn(n, bc(n)) + 1;
}
function no(e, t) {
  const n = re(e, t?.in), r = +tn(n) - +Lf(n);
  return Math.round(r / dc) + 1;
}
function Is(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = an(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = he(t?.in || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const c = tt(i, t), l = he(t?.in || e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const d = tt(l, t);
  return +n >= +c ? r + 1 : +n >= +d ? r : r - 1;
}
function _m(e, t) {
  const n = an(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Is(e, t), s = he(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), tt(s, t);
}
function rr(e, t) {
  const n = re(e, t?.in), r = +tt(n, t) - +_m(n, t);
  return Math.round(r / dc) + 1;
}
function ve(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const zt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ve(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ve(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ve(e.getDate(), t.length);
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
    return ve(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ve(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ve(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ve(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ve(o, t.length);
  }
}, ln = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $a = {
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
    const o = Is(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return ve(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : ve(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = hc(e);
    return ve(n, t.length);
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
    return ve(n, t.length);
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
        return ve(r, 2);
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
        return ve(r, 2);
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
        return ve(r + 1, 2);
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
    const o = rr(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ve(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = no(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ve(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : zt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Om(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ve(r, t.length);
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
        return ve(s, 2);
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
        return ve(s, t.length);
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
        return ve(o, t.length);
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
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
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
        return Ya(r);
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
        return Ya(r);
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
        return "GMT" + za(r, ":");
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
        return "GMT" + za(r, ":");
      default:
        return "GMT" + Zt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ve(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ve(+e, t.length);
  }
};
function za(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + ve(s, 2);
}
function Ya(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ve(Math.abs(e) / 60, 2) : Zt(e, t);
}
function Zt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ve(Math.trunc(r / 60), 2), s = ve(r % 60, 2);
  return n + o + t + s;
}
const Ba = (e, t) => {
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
}, vc = (e, t) => {
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
}, Rm = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ba(e, t);
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
  return s.replace("{{date}}", Ba(r, t)).replace("{{time}}", vc(o, t));
}, ls = {
  p: vc,
  P: Rm
}, Pm = /^D+$/, Am = /^Y+$/, Im = ["D", "DD", "YY", "YYYY"];
function wc(e) {
  return Pm.test(e);
}
function kc(e) {
  return Am.test(e);
}
function us(e, t, n) {
  const r = Wm(e, t, n);
  if (console.warn(r), Im.includes(e)) throw new RangeError(r);
}
function Wm(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Fm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $m = /^'([^]*?)'?$/, zm = /''/g, Ym = /[a-zA-Z]/;
function me(e, t, n) {
  const r = an(), o = n?.locale ?? r.locale ?? Jt, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, c = re(e, n?.in);
  if (!Hf(c))
    throw new RangeError("Invalid time value");
  let l = t.match(Lm).map((m) => {
    const f = m[0];
    if (f === "p" || f === "P") {
      const h = ls[f];
      return h(m, o.formatLong);
    }
    return m;
  }).join("").match(Fm).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const f = m[0];
    if (f === "'")
      return { isToken: !1, value: Bm(m) };
    if ($a[f])
      return { isToken: !0, value: m };
    if (f.match(Ym))
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
    (!n?.useAdditionalWeekYearTokens && kc(f) || !n?.useAdditionalDayOfYearTokens && wc(f)) && us(f, t, String(e));
    const h = $a[f[0]];
    return h(c, f, o.localize, d);
  }).join("");
}
function Bm(e) {
  const t = e.match($m);
  return t ? t[1].replace(zm, "'") : e;
}
function Hm(e, t) {
  const n = re(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = he(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Gm() {
  return Object.assign({}, an());
}
function Vm(e, t) {
  const n = re(e, t?.in).getDay();
  return n === 0 ? 7 : n;
}
function Um(e, t) {
  return re(e, t?.in).getMonth();
}
function qm(e, t) {
  return re(e, t?.in).getFullYear();
}
function Km(e, t) {
  return +re(e) > +re(t);
}
function Cc(e, t) {
  return +re(e) < +re(t);
}
function Xm(e, t) {
  const n = Qm(t) ? new t(0) : he(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function Qm(e) {
  return typeof e == "function" && e.prototype?.constructor === e;
}
const Zm = 10;
class Mc {
  subPriority = 0;
  validate(t, n) {
    return !0;
  }
}
class Jm extends Mc {
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
class eh extends Mc {
  priority = Zm;
  subPriority = -1;
  constructor(t, n) {
    super(), this.context = t || ((r) => he(n, r));
  }
  set(t, n) {
    return n.timestampIsSet ? t : he(t, Xm(t, this.context));
  }
}
class ge {
  run(t, n, r, o) {
    const s = this.parse(t, n, r, o);
    return s ? {
      setter: new Jm(
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
class th extends ge {
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
const Ae = {
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
}, vt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ie(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Oe(e, t) {
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
    value: r * (o * If + s * fc + i * Wf),
    rest: t.slice(n[0].length)
  };
}
function Nc(e) {
  return Oe(Ae.anyDigitsSigned, e);
}
function Re(e, t) {
  switch (e) {
    case 1:
      return Oe(Ae.singleDigit, t);
    case 2:
      return Oe(Ae.twoDigits, t);
    case 3:
      return Oe(Ae.threeDigits, t);
    case 4:
      return Oe(Ae.fourDigits, t);
    default:
      return Oe(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Yr(e, t) {
  switch (e) {
    case 1:
      return Oe(Ae.singleDigitSigned, t);
    case 2:
      return Oe(Ae.twoDigitsSigned, t);
    case 3:
      return Oe(Ae.threeDigitsSigned, t);
    case 4:
      return Oe(Ae.fourDigitsSigned, t);
    default:
      return Oe(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Ws(e) {
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
function Ec(e, t) {
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
function Dc(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class nh extends ge {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Ie(Re(4, t), o);
      case "yo":
        return Ie(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Ie(Re(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const i = Ec(
        r.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class rh extends ge {
  priority = 130;
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Ie(Re(4, t), o);
      case "Yo":
        return Ie(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Ie(Re(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r, o) {
    const s = Is(t, o);
    if (r.isTwoDigitYear) {
      const c = Ec(
        r.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), tt(t, o);
    }
    const i = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), tt(t, o);
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
class oh extends ge {
  priority = 130;
  parse(t, n) {
    return Yr(n === "R" ? 4 : n.length, t);
  }
  set(t, n, r) {
    const o = he(t, 0);
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
class sh extends ge {
  priority = 130;
  parse(t, n) {
    return Yr(n === "u" ? 4 : n.length, t);
  }
  set(t, n, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class ah extends ge {
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
class ih extends ge {
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
class ch extends ge {
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
        return Ie(
          Oe(Ae.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return Ie(Re(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return Ie(
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
class lh extends ge {
  priority = 110;
  parse(t, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return Ie(
          Oe(Ae.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return Ie(Re(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return Ie(
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
function uh(e, t, n) {
  const r = re(e, n?.in), o = rr(r, n) - t;
  return r.setDate(r.getDate() - o * 7), re(r, n?.in);
}
class dh extends ge {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "w":
        return Oe(Ae.week, t);
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
    return tt(uh(t, r, o), o);
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
function fh(e, t, n) {
  const r = re(e, n?.in), o = no(r, n) - t;
  return r.setDate(r.getDate() - o * 7), r;
}
class mh extends ge {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "I":
        return Oe(Ae.week, t);
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
    return tn(fh(t, r));
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
const hh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ph = [
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
class gh extends ge {
  priority = 90;
  subPriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "d":
        return Oe(Ae.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear(), o = Dc(r), s = t.getMonth();
    return o ? n >= 1 && n <= ph[s] : n >= 1 && n <= hh[s];
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
class xh extends ge {
  priority = 90;
  subpriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "D":
      case "DD":
        return Oe(Ae.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Re(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear();
    return Dc(r) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
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
function Fs(e, t, n) {
  const r = an(), o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = re(e, n?.in), i = s.getDay(), l = (t % 7 + 7) % 7, d = 7 - o, m = t < 0 || t > 6 ? t - (i + d) % 7 : (l + d) % 7 - (i + d) % 7;
  return Ee(s, m, n);
}
class bh extends ge {
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
    return t = Fs(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class yh extends ge {
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
        return Ie(Re(n.length, t), s);
      // 3rd
      case "eo":
        return Ie(
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
    return t = Fs(t, r, o), t.setHours(0, 0, 0, 0), t;
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
class vh extends ge {
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
        return Ie(Re(n.length, t), s);
      // 3rd
      case "co":
        return Ie(
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
    return t = Fs(t, r, o), t.setHours(0, 0, 0, 0), t;
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
function wh(e, t, n) {
  const r = re(e, n?.in), o = Vm(r, n), s = t - o;
  return Ee(r, s, n);
}
class kh extends ge {
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
        return Ie(
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
        return Ie(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return Ie(
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
        return Ie(
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
    return t = wh(t, r), t.setHours(0, 0, 0, 0), t;
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
class Ch extends ge {
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
    return t.setHours(Ws(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class Mh extends ge {
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
    return t.setHours(Ws(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class Nh extends ge {
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
    return t.setHours(Ws(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class Eh extends ge {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "h":
        return Oe(Ae.hour12h, t);
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
class Dh extends ge {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "H":
        return Oe(Ae.hour23h, t);
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
class Sh extends ge {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "K":
        return Oe(Ae.hour11h, t);
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
class jh extends ge {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "k":
        return Oe(Ae.hour24h, t);
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
class Th extends ge {
  priority = 60;
  parse(t, n, r) {
    switch (n) {
      case "m":
        return Oe(Ae.minute, t);
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
class Oh extends ge {
  priority = 50;
  parse(t, n, r) {
    switch (n) {
      case "s":
        return Oe(Ae.second, t);
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
class _h extends ge {
  priority = 30;
  parse(t, n) {
    const r = (o) => Math.trunc(o * Math.pow(10, -n.length + 3));
    return Ie(Re(n.length, t), r);
  }
  set(t, n, r) {
    return t.setMilliseconds(r), t;
  }
  incompatibleTokens = ["t", "T"];
}
class Rh extends ge {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "X":
        return wt(
          vt.basicOptionalMinutes,
          t
        );
      case "XX":
        return wt(vt.basic, t);
      case "XXXX":
        return wt(
          vt.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return wt(
          vt.extendedOptionalSeconds,
          t
        );
      default:
        return wt(vt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : he(
      t,
      t.getTime() - $r(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class Ph extends ge {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "x":
        return wt(
          vt.basicOptionalMinutes,
          t
        );
      case "xx":
        return wt(vt.basic, t);
      case "xxxx":
        return wt(
          vt.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return wt(
          vt.extendedOptionalSeconds,
          t
        );
      default:
        return wt(vt.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : he(
      t,
      t.getTime() - $r(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class Ah extends ge {
  priority = 40;
  parse(t) {
    return Nc(t);
  }
  set(t, n, r) {
    return [he(t, r * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class Ih extends ge {
  priority = 20;
  parse(t) {
    return Nc(t);
  }
  set(t, n, r) {
    return [he(t, r), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const Wh = {
  G: new th(),
  y: new nh(),
  Y: new rh(),
  R: new oh(),
  u: new sh(),
  Q: new ah(),
  q: new ih(),
  M: new ch(),
  L: new lh(),
  w: new dh(),
  I: new mh(),
  d: new gh(),
  D: new xh(),
  E: new bh(),
  e: new yh(),
  c: new vh(),
  i: new kh(),
  a: new Ch(),
  b: new Mh(),
  B: new Nh(),
  h: new Eh(),
  H: new Dh(),
  K: new Sh(),
  k: new jh(),
  m: new Th(),
  s: new Oh(),
  S: new _h(),
  X: new Rh(),
  x: new Ph(),
  t: new Ah(),
  T: new Ih()
}, Fh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $h = /^'([^]*?)'?$/, zh = /''/g, Yh = /\S/, Bh = /[a-zA-Z]/;
function Hh(e, t, n, r) {
  const o = () => he(n, NaN), s = Gm(), i = s.locale ?? Jt, c = s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, l = s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, d = {
    firstWeekContainsDate: c,
    weekStartsOn: l,
    locale: i
  }, m = [new eh(r?.in, n)], f = t.match(Lh).map((x) => {
    const y = x[0];
    if (y in ls) {
      const v = ls[y];
      return v(x, i.formatLong);
    }
    return x;
  }).join("").match(Fh), h = [];
  for (let x of f) {
    kc(x) && us(x, t, e), wc(x) && us(x, t, e);
    const y = x[0], v = Wh[y];
    if (v) {
      const { incompatibleTokens: k } = v;
      if (Array.isArray(k)) {
        const N = h.find(
          (w) => k.includes(w.token) || w.token === y
        );
        if (N)
          throw new RangeError(
            `The format string mustn't contain \`${N.fullToken}\` and \`${x}\` at the same time`
          );
      } else if (v.incompatibleTokens === "*" && h.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${x}\` and any other token at the same time`
        );
      h.push({ token: y, fullToken: x });
      const M = v.run(
        e,
        x,
        i.match,
        d
      );
      if (!M)
        return o();
      m.push(M.setter), e = M.rest;
    } else {
      if (y.match(Bh))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + y + "`"
        );
      if (x === "''" ? x = "'" : y === "'" && (x = Gh(x)), e.indexOf(x) === 0)
        e = e.slice(x.length);
      else
        return o();
    }
  }
  if (e.length > 0 && Yh.test(e))
    return o();
  const p = m.map((x) => x.priority).sort((x, y) => y - x).filter((x, y, v) => v.indexOf(x) === y).map(
    (x) => m.filter((y) => y.priority === x).sort((y, v) => v.subPriority - y.subPriority)
  ).map((x) => x[0]);
  let b = re(n, r?.in);
  if (isNaN(+b)) return o();
  const g = {};
  for (const x of p) {
    if (!x.validate(b, d))
      return o();
    const y = x.set(b, g, d);
    Array.isArray(y) ? (b = y[0], Object.assign(g, y[1])) : b = y;
  }
  return b;
}
function Gh(e) {
  return e.match($h)[1].replace(zh, "'");
}
function qn(e) {
  return +re(e) < Date.now();
}
function Vh(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Sc(e, t, n) {
  const [r, o] = Tn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function ds(e, t) {
  return Se(
    he(e, e),
    pc(e)
  );
}
function Uh(e, t) {
  return Se(
    e,
    Ee(pc(e), 1),
    t
  );
}
function qh(e, t, n) {
  const r = re(e, n?.in), o = r.getFullYear(), s = r.getDate(), i = he(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const c = Hm(i);
  return r.setMonth(t, Math.min(s, c)), r;
}
function Kh(e, t, n) {
  const r = re(e, n?.in);
  return isNaN(+r) ? he(e, NaN) : (r.setFullYear(t), r);
}
const Xh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Ha = (e) => {
  const t = Qh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, jc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Zh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Jh = {
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
const ep = lc(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...c
  }, l) => cs(
    "svg",
    {
      ref: l,
      ...Jh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: jc("lucide", o),
      ...!s && !Zh(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([d, m]) => cs(d, m)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const le = (e, t) => {
  const n = lc(
    ({ className: r, ...o }, s) => cs(ep, {
      ref: s,
      iconNode: t,
      className: jc(
        `lucide-${Xh(Ha(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Ha(e), n;
};
const tp = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], np = le("arrow-left", tp);
const rp = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], op = le("bell", rp);
const sp = [
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25", key: "1jrsq6" }],
  ["path", { d: "m22 22-1.875-1.875", key: "13zax7" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], ap = le("calendar-search", sp);
const ip = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Kn = le("check", ip);
const cp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ls = le("chevron-down", cp);
const lp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], $s = le("chevron-left", lp);
const up = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], or = le("chevron-right", up);
const dp = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], fp = le("chevron-up", dp);
const mp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], hp = le("circle-question-mark", mp);
const pp = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], gp = le("clock", pp);
const xp = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Tc = le("copy", xp);
const bp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], yp = le("ellipsis", bp);
const vp = [
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
], wp = le("eye-off", vp);
const kp = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Oc = le("eye", kp);
const Cp = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], Mp = le("github", Cp);
const Np = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Ep = le("globe", Np);
const Dp = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], Sp = le("link-2", Dp);
const jp = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Tp = le("map-pin", jp);
const Op = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], fs = le("monitor", Op);
const _p = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], Rp = le("moon", _p);
const Pp = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
], Ap = le("notepad-text", Pp);
const Ip = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], Wp = le("panel-left", Ip);
const Fp = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], zs = le("panel-right", Fp);
const Lp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], $p = le("plus", Lp);
const zp = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
], Ga = le("refresh-ccw", zp);
const Yp = [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
], Bp = le("rss", Yp);
const Hp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Gp = le("search", Hp);
const Vp = [
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
], _c = le("square-dashed", Vp);
const Up = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], qp = le("sun", Up);
const Kp = [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], Rc = le("tablet-smartphone", Kp);
const Xp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Pc = le("trash-2", Xp);
const Qp = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
], Zp = le("undo-2", Qp);
const Jp = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], eg = le("user-round", Jp);
const tg = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ng = le("user", tg);
const rg = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], og = le("video", rg);
const sg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ro = le("x", sg);
var Va = 1, ag = 0.9, ig = 0.8, cg = 0.17, _o = 0.1, Ro = 0.999, lg = 0.9999, ug = 0.99, dg = /[\\\/_+.#"@\[\(\{&]/, fg = /[\\\/_+.#"@\[\(\{&]/g, mg = /[\s-]/, Ac = /[\s-]/g;
function ms(e, t, n, r, o, s, i) {
  if (s === t.length) return o === e.length ? Va : ug;
  var c = `${o},${s}`;
  if (i[c] !== void 0) return i[c];
  for (var l = r.charAt(s), d = n.indexOf(l, o), m = 0, f, h, p, b; d >= 0; ) f = ms(e, t, n, r, d + 1, s + 1, i), f > m && (d === o ? f *= Va : dg.test(e.charAt(d - 1)) ? (f *= ig, p = e.slice(o, d - 1).match(fg), p && o > 0 && (f *= Math.pow(Ro, p.length))) : mg.test(e.charAt(d - 1)) ? (f *= ag, b = e.slice(o, d - 1).match(Ac), b && o > 0 && (f *= Math.pow(Ro, b.length))) : (f *= cg, o > 0 && (f *= Math.pow(Ro, d - o))), e.charAt(d) !== t.charAt(s) && (f *= lg)), (f < _o && n.charAt(d - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(d - 1) !== r.charAt(s)) && (h = ms(e, t, n, r, d + 1, s + 2, i), h * _o > f && (f = h * _o)), f > m && (m = f), d = n.indexOf(l, d + 1);
  return i[c] = m, m;
}
function Ua(e) {
  return e.toLowerCase().replace(Ac, " ");
}
function hg(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ms(e, t, Ua(e), Ua(t), 0, 0, {});
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function qa(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Et(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = qa(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : qa(e[o], null);
        }
      };
  };
}
function je(...e) {
  return u.useCallback(Et(...e), e);
}
function pg(e, t) {
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
  return o.scopeName = e, [r, gg(o, ...t)];
}
function gg(...e) {
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
var ct = globalThis?.document ? u.useLayoutEffect : () => {
}, xg = u[" useId ".trim().toString()] || (() => {
}), bg = 0;
function Ue(e) {
  const [t, n] = u.useState(xg());
  return ct(() => {
    n((r) => r ?? String(bg++));
  }, [e]), t ? `radix-${t}` : "";
}
var yg = u[" useInsertionEffect ".trim().toString()] || ct;
function Ut({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = vg({
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
        const f = wg(m) ? m(e) : m;
        f !== e && i.current?.(f);
      } else
        s(m);
    },
    [c, e, s, i]
  );
  return [l, d];
}
function vg({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return yg(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function wg(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  const t = /* @__PURE__ */ kg(e), n = u.forwardRef((r, o) => {
    const { children: s, ...i } = r, c = u.Children.toArray(s), l = c.find(Mg);
    if (l) {
      const d = l.props.children, m = c.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, m) : null });
    }
    return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function kg(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const i = Eg(o), c = Ng(s, o.props);
      return o.type !== u.Fragment && (c.ref = r ? Et(r, i) : i), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ic = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Cg(e) {
  const t = ({ children: n }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ic, t;
}
function Mg(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ic;
}
function Ng(e, t) {
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
function Eg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Dg = [
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
], ke = Dg.reduce((e, t) => {
  const n = /* @__PURE__ */ En(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...c } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(l, { ...c, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Wc(e, t) {
  e && Ps.flushSync(() => e.dispatchEvent(t));
}
function mt(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function Sg(e, t = globalThis?.document) {
  const n = mt(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var jg = "DismissableLayer", hs = "dismissableLayer.update", Tg = "dismissableLayer.pointerDownOutside", Og = "dismissableLayer.focusOutside", Ka, Fc = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sr = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: c,
      ...l
    } = e, d = u.useContext(Fc), [m, f] = u.useState(null), h = m?.ownerDocument ?? globalThis?.document, [, p] = u.useState({}), b = je(t, (E) => f(E)), g = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(x), v = m ? g.indexOf(m) : -1, k = d.layersWithOutsidePointerEventsDisabled.size > 0, M = v >= y, N = Pg((E) => {
      const D = E.target, T = [...d.branches].some((P) => P.contains(D));
      !M || T || (o?.(E), i?.(E), E.defaultPrevented || c?.());
    }, h), w = Ag((E) => {
      const D = E.target;
      [...d.branches].some((P) => P.contains(D)) || (s?.(E), i?.(E), E.defaultPrevented || c?.());
    }, h);
    return Sg((E) => {
      v === d.layers.size - 1 && (r?.(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
    }, h), u.useEffect(() => {
      if (m)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ka = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(m)), d.layers.add(m), Xa(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ka);
        };
    }, [m, h, n, d]), u.useEffect(() => () => {
      m && (d.layers.delete(m), d.layersWithOutsidePointerEventsDisabled.delete(m), Xa());
    }, [m, d]), u.useEffect(() => {
      const E = () => p({});
      return document.addEventListener(hs, E), () => document.removeEventListener(hs, E);
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
sr.displayName = jg;
var _g = "DismissableLayerBranch", Rg = u.forwardRef((e, t) => {
  const n = u.useContext(Fc), r = u.useRef(null), o = je(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ a.jsx(ke.div, { ...e, ref: o });
});
Rg.displayName = _g;
function Pg(e, t = globalThis?.document) {
  const n = mt(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          Lc(
            Tg,
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
function Ag(e, t = globalThis?.document) {
  const n = mt(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Lc(Og, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Xa() {
  const e = new CustomEvent(hs);
  document.dispatchEvent(e);
}
function Lc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Wc(o, s) : o.dispatchEvent(s);
}
var Po = "focusScope.autoFocusOnMount", Ao = "focusScope.autoFocusOnUnmount", Qa = { bubbles: !1, cancelable: !0 }, Ig = "FocusScope", oo = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [c, l] = u.useState(null), d = mt(o), m = mt(s), f = u.useRef(null), h = je(t, (g) => l(g)), p = u.useRef({
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
      }, y = function(k) {
        if (document.activeElement === document.body)
          for (const N of k)
            N.removedNodes.length > 0 && Bt(c);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const v = new MutationObserver(y);
      return c && v.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), v.disconnect();
      };
    }
  }, [r, c, p.paused]), u.useEffect(() => {
    if (c) {
      Ja.add(p);
      const g = document.activeElement;
      if (!c.contains(g)) {
        const y = new CustomEvent(Po, Qa);
        c.addEventListener(Po, d), c.dispatchEvent(y), y.defaultPrevented || (Wg(Yg($c(c)), { select: !0 }), document.activeElement === g && Bt(c));
      }
      return () => {
        c.removeEventListener(Po, d), setTimeout(() => {
          const y = new CustomEvent(Ao, Qa);
          c.addEventListener(Ao, m), c.dispatchEvent(y), y.defaultPrevented || Bt(g ?? document.body, { select: !0 }), c.removeEventListener(Ao, m), Ja.remove(p);
        }, 0);
      };
    }
  }, [c, d, m, p]);
  const b = u.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (x && y) {
        const v = g.currentTarget, [k, M] = Fg(v);
        k && M ? !g.shiftKey && y === M ? (g.preventDefault(), n && Bt(k, { select: !0 })) : g.shiftKey && y === k && (g.preventDefault(), n && Bt(M, { select: !0 })) : y === v && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ a.jsx(ke.div, { tabIndex: -1, ...i, ref: h, onKeyDown: b });
});
oo.displayName = Ig;
function Wg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Bt(r, { select: t }), document.activeElement !== n) return;
}
function Fg(e) {
  const t = $c(e), n = Za(t, e), r = Za(t.reverse(), e);
  return [n, r];
}
function $c(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Za(e, t) {
  for (const n of e)
    if (!Lg(n, { upTo: t })) return n;
}
function Lg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $g(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && $g(e) && t && e.select();
  }
}
var Ja = zg();
function zg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = ei(e, t), e.unshift(t);
    },
    remove(t) {
      e = ei(e, t), e[0]?.resume();
    }
  };
}
function ei(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Yg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Bg = "Portal", ar = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  ct(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Of.createPortal(/* @__PURE__ */ a.jsx(ke.div, { ...r, ref: t }), i) : null;
});
ar.displayName = Bg;
function Hg(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var rt = (e) => {
  const { present: t, children: n } = e, r = Gg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = je(r.ref, Vg(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
rt.displayName = "Presence";
function Gg(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), i = e ? "mounted" : "unmounted", [c, l] = Hg(i, {
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
    const d = yr(r.current);
    s.current = c === "mounted" ? d : "none";
  }, [c]), ct(() => {
    const d = r.current, m = o.current;
    if (m !== e) {
      const h = s.current, p = yr(d);
      e ? l("MOUNT") : p === "none" || d?.display === "none" ? l("UNMOUNT") : l(m && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ct(() => {
    if (t) {
      let d;
      const m = t.ownerDocument.defaultView ?? window, f = (p) => {
        const g = yr(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = yr(r.current));
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
function yr(e) {
  return e?.animationName || "none";
}
function Vg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Io = 0;
function Ys() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ti()), document.body.insertAdjacentElement("beforeend", e[1] ?? ti()), Io++, () => {
      Io === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Io--;
    };
  }, []);
}
function ti() {
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
function zc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ug(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Wr = "right-scroll-bar-position", Fr = "width-before-scroll-bar", qg = "with-scroll-bars-hidden", Kg = "--removed-body-scroll-bar-size";
function Wo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xg(e, t) {
  var n = dt(function() {
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
var Qg = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ni = /* @__PURE__ */ new WeakMap();
function Zg(e, t) {
  var n = Xg(null, function(r) {
    return e.forEach(function(o) {
      return Wo(o, r);
    });
  });
  return Qg(function() {
    var r = ni.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(c) {
        s.has(c) || Wo(c, null);
      }), s.forEach(function(c) {
        o.has(c) || Wo(c, i);
      });
    }
    ni.set(n, e);
  }, [e]), n;
}
function Jg(e) {
  return e;
}
function ex(e, t) {
  t === void 0 && (t = Jg);
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
function tx(e) {
  e === void 0 && (e = {});
  var t = ex(null);
  return t.options = kt({ async: !0, ssr: !1 }, e), t;
}
var Yc = function(e) {
  var t = e.sideCar, n = zc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, kt({}, n));
};
Yc.isSideCarExport = !0;
function nx(e, t) {
  return e.useMedium(t), Yc;
}
var Bc = tx(), Fo = function() {
}, so = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Fo,
    onWheelCapture: Fo,
    onTouchMoveCapture: Fo
  }), o = r[0], s = r[1], i = e.forwardProps, c = e.children, l = e.className, d = e.removeScrollBar, m = e.enabled, f = e.shards, h = e.sideCar, p = e.noRelative, b = e.noIsolation, g = e.inert, x = e.allowPinchZoom, y = e.as, v = y === void 0 ? "div" : y, k = e.gapMode, M = zc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = h, w = Zg([n, t]), E = kt(kt({}, M), o);
  return u.createElement(
    u.Fragment,
    null,
    m && u.createElement(N, { sideCar: Bc, removeScrollBar: d, shards: f, noRelative: p, noIsolation: b, inert: g, setCallbacks: s, allowPinchZoom: !!x, lockRef: n, gapMode: k }),
    i ? u.cloneElement(u.Children.only(c), kt(kt({}, E), { ref: w })) : u.createElement(v, kt({}, E, { className: l, ref: w }), c)
  );
});
so.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
so.classNames = {
  fullWidth: Fr,
  zeroRight: Wr
};
var rx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ox() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = rx();
  return t && e.setAttribute("nonce", t), e;
}
function sx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ax(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ix = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ox()) && (sx(t, n), ax(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, cx = function() {
  var e = ix();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Hc = function() {
  var e = cx(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, lx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Lo = function(e) {
  return parseInt(e || "", 10) || 0;
}, ux = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lo(n), Lo(r), Lo(o)];
}, dx = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return lx;
  var t = ux(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, fx = Hc(), kn = "data-scroll-locked", mx = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(qg, ` {
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
  
  .`).concat(Wr, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Fr, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Wr, " .").concat(Wr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Fr, " .").concat(Fr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kn, `] {
    `).concat(Kg, ": ").concat(c, `px;
  }
`);
}, ri = function() {
  var e = parseInt(document.body.getAttribute(kn) || "0", 10);
  return isFinite(e) ? e : 0;
}, hx = function() {
  u.useEffect(function() {
    return document.body.setAttribute(kn, (ri() + 1).toString()), function() {
      var e = ri() - 1;
      e <= 0 ? document.body.removeAttribute(kn) : document.body.setAttribute(kn, e.toString());
    };
  }, []);
}, px = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  hx();
  var s = u.useMemo(function() {
    return dx(o);
  }, [o]);
  return u.createElement(fx, { styles: mx(s, !t, o, n ? "" : "!important") });
}, ps = !1;
if (typeof window < "u")
  try {
    var vr = Object.defineProperty({}, "passive", {
      get: function() {
        return ps = !0, !0;
      }
    });
    window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
  } catch {
    ps = !1;
  }
var un = ps ? { passive: !1 } : !1, gx = function(e) {
  return e.tagName === "TEXTAREA";
}, Gc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !gx(e) && n[t] === "visible")
  );
}, xx = function(e) {
  return Gc(e, "overflowY");
}, bx = function(e) {
  return Gc(e, "overflowX");
}, oi = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Vc(e, r);
    if (o) {
      var s = Uc(e, r), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, yx = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, vx = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Vc = function(e, t) {
  return e === "v" ? xx(t) : bx(t);
}, Uc = function(e, t) {
  return e === "v" ? yx(t) : vx(t);
}, wx = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kx = function(e, t, n, r, o) {
  var s = wx(e, window.getComputedStyle(t).direction), i = s * r, c = n.target, l = t.contains(c), d = !1, m = i > 0, f = 0, h = 0;
  do {
    if (!c)
      break;
    var p = Uc(e, c), b = p[0], g = p[1], x = p[2], y = g - x - s * b;
    (b || y) && Vc(e, c) && (f += y, h += b);
    var v = c.parentNode;
    c = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(h) < 1) && (d = !0), d;
}, wr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, si = function(e) {
  return [e.deltaX, e.deltaY];
}, ai = function(e) {
  return e && "current" in e ? e.current : e;
}, Cx = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Mx = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Nx = 0, dn = [];
function Ex(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Nx++)[0], s = u.useState(Hc)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Ug([e.lockRef.current], (e.shards || []).map(ai), !0).filter(Boolean);
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
    var y = wr(g), v = n.current, k = "deltaX" in g ? g.deltaX : v[0] - y[0], M = "deltaY" in g ? g.deltaY : v[1] - y[1], N, w = g.target, E = Math.abs(k) > Math.abs(M) ? "h" : "v";
    if ("touches" in g && E === "h" && w.type === "range")
      return !1;
    var D = window.getSelection(), T = D && D.anchorNode, P = T ? T === w || T.contains(w) : !1;
    if (P)
      return !1;
    var F = oi(E, w);
    if (!F)
      return !0;
    if (F ? N = E : (N = E === "v" ? "h" : "v", F = oi(E, w)), !F)
      return !1;
    if (!r.current && "changedTouches" in g && (k || M) && (r.current = N), !N)
      return !0;
    var L = r.current || N;
    return kx(L, x, g, L === "h" ? k : M);
  }, []), l = u.useCallback(function(g) {
    var x = g;
    if (!(!dn.length || dn[dn.length - 1] !== s)) {
      var y = "deltaY" in x ? si(x) : wr(x), v = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && Cx(N.delta, y);
      })[0];
      if (v && v.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!v) {
        var k = (i.current.shards || []).map(ai).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), M = k.length > 0 ? c(x, k[0]) : !i.current.noIsolation;
        M && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(g, x, y, v) {
    var k = { name: g, delta: x, target: y, should: v, shadowParent: Dx(y) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== k;
      });
    }, 1);
  }, []), m = u.useCallback(function(g) {
    n.current = wr(g), r.current = void 0;
  }, []), f = u.useCallback(function(g) {
    d(g.type, si(g), g.target, c(g, e.lockRef.current));
  }, []), h = u.useCallback(function(g) {
    d(g.type, wr(g), g.target, c(g, e.lockRef.current));
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
    b ? u.createElement(s, { styles: Mx(o) }) : null,
    p ? u.createElement(px, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Dx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Sx = nx(Bc, Ex);
var ao = u.forwardRef(function(e, t) {
  return u.createElement(so, kt({}, e, { ref: t, sideCar: Sx }));
});
ao.classNames = so.classNames;
var jx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fn = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Cr = {}, $o = 0, qc = function(e) {
  return e && (e.host || qc(e.parentNode));
}, Tx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = qc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ox = function(e, t, n, r) {
  var o = Tx(t, Array.isArray(e) ? e : [e]);
  Cr[n] || (Cr[n] = /* @__PURE__ */ new WeakMap());
  var s = Cr[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
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
          fn.set(h, g), s.set(h, x), i.push(h), g === 1 && b && kr.set(h, !0), x === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", h, y);
        }
    });
  };
  return m(t), c.clear(), $o++, function() {
    i.forEach(function(f) {
      var h = fn.get(f) - 1, p = s.get(f) - 1;
      fn.set(f, h), s.set(f, p), h || (kr.has(f) || f.removeAttribute(r), kr.delete(f)), p || f.removeAttribute(n);
    }), $o--, $o || (fn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Cr = {});
  };
}, Bs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = jx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ox(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, io = "Dialog", [Kc] = St(io), [_x, gt] = Kc(io), Xc = (e) => {
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
    caller: io
  });
  return /* @__PURE__ */ a.jsx(
    _x,
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
Xc.displayName = io;
var Qc = "DialogTrigger", Rx = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Qc, n), s = je(t, o.triggerRef);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Vs(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Rx.displayName = Qc;
var Hs = "DialogPortal", [Px, Zc] = Kc(Hs, {
  forceMount: void 0
}), Jc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = gt(Hs, t);
  return /* @__PURE__ */ a.jsx(Px, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ a.jsx(rt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(ar, { asChild: !0, container: o, children: i }) })) });
};
Jc.displayName = Hs;
var Br = "DialogOverlay", el = u.forwardRef(
  (e, t) => {
    const n = Zc(Br, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = gt(Br, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ a.jsx(rt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Ix, { ...o, ref: t }) }) : null;
  }
);
el.displayName = Br;
var Ax = /* @__PURE__ */ En("DialogOverlay.RemoveScroll"), Ix = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Br, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a.jsx(ao, { as: Ax, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ a.jsx(
        ke.div,
        {
          "data-state": Vs(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), nn = "DialogContent", tl = u.forwardRef(
  (e, t) => {
    const n = Zc(nn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = gt(nn, e.__scopeDialog);
    return /* @__PURE__ */ a.jsx(rt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ a.jsx(Wx, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(Fx, { ...o, ref: t }) });
  }
);
tl.displayName = nn;
var Wx = u.forwardRef(
  (e, t) => {
    const n = gt(nn, e.__scopeDialog), r = u.useRef(null), o = je(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Bs(s);
    }, []), /* @__PURE__ */ a.jsx(
      nl,
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
), Fx = u.forwardRef(
  (e, t) => {
    const n = gt(nn, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      nl,
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
), nl = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, c = gt(nn, n), l = u.useRef(null), d = je(t, l);
    return Ys(), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        oo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ a.jsx(
            sr,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": Vs(c.open),
              ...i,
              ref: d,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Lx, { titleId: c.titleId }),
        /* @__PURE__ */ a.jsx(zx, { contentRef: l, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), Gs = "DialogTitle", rl = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Gs, n);
    return /* @__PURE__ */ a.jsx(ke.h2, { id: o.titleId, ...r, ref: t });
  }
);
rl.displayName = Gs;
var ol = "DialogDescription", sl = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(ol, n);
    return /* @__PURE__ */ a.jsx(ke.p, { id: o.descriptionId, ...r, ref: t });
  }
);
sl.displayName = ol;
var al = "DialogClose", il = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(al, n);
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
il.displayName = al;
function Vs(e) {
  return e ? "open" : "closed";
}
var cl = "DialogTitleWarning", [GM, ll] = pg(cl, {
  contentName: nn,
  titleName: Gs,
  docsSlug: "dialog"
}), Lx = ({ titleId: e }) => {
  const t = ll(cl), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, $x = "DialogDescriptionWarning", zx = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ll($x).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Us = Xc, qs = Jc, Ks = el, Xs = tl, ul = rl, dl = sl, fl = il, Yx = /* @__PURE__ */ Symbol.for("react.lazy"), Hr = u[" use ".trim().toString()];
function Bx(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ml(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Yx && "_payload" in e && Bx(e._payload);
}
// @__NO_SIDE_EFFECTS__
function hl(e) {
  const t = /* @__PURE__ */ Hx(e), n = u.forwardRef((r, o) => {
    let { children: s, ...i } = r;
    ml(s) && typeof Hr == "function" && (s = Hr(s._payload));
    const c = u.Children.toArray(s), l = c.find(Vx);
    if (l) {
      const d = l.props.children, m = c.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, m) : null });
    }
    return /* @__PURE__ */ a.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Qs = /* @__PURE__ */ hl("Slot");
// @__NO_SIDE_EFFECTS__
function Hx(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (ml(o) && typeof Hr == "function" && (o = Hr(o._payload)), u.isValidElement(o)) {
      const i = qx(o), c = Ux(s, o.props);
      return o.type !== u.Fragment && (c.ref = r ? Et(r, i) : i), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gx = /* @__PURE__ */ Symbol("radix.slottable");
function Vx(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gx;
}
function Ux(e, t) {
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
function qx(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kx = [
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
], lt = Kx.reduce((e, t) => {
  const n = /* @__PURE__ */ hl(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...c } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(l, { ...c, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), zn = '[cmdk-group=""]', zo = '[cmdk-group-items=""]', Xx = '[cmdk-group-heading=""]', pl = '[cmdk-item=""]', ii = `${pl}:not([aria-disabled="true"])`, gs = "cmdk-item-select", bn = "data-value", Qx = (e, t, n) => hg(e, t, n), gl = u.createContext(void 0), ir = () => u.useContext(gl), xl = u.createContext(void 0), Zs = () => u.useContext(xl), bl = u.createContext(void 0), yl = u.forwardRef((e, t) => {
  let n = yn(() => {
    var S, W;
    return { search: "", value: (W = (S = e.value) != null ? S : e.defaultValue) != null ? W : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = yn(() => /* @__PURE__ */ new Set()), o = yn(() => /* @__PURE__ */ new Map()), s = yn(() => /* @__PURE__ */ new Map()), i = yn(() => /* @__PURE__ */ new Set()), c = vl(e), { label: l, children: d, value: m, onValueChange: f, filter: h, shouldFilter: p, loop: b, disablePointerSelection: g = !1, vimBindings: x = !0, ...y } = e, v = Ue(), k = Ue(), M = Ue(), N = u.useRef(null), w = cb();
  rn(() => {
    if (m !== void 0) {
      let S = m.trim();
      n.current.value = S, E.emit();
    }
  }, [m]), rn(() => {
    w(6, H);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (S) => (i.current.add(S), () => i.current.delete(S)), snapshot: () => n.current, setState: (S, W, Y) => {
    var B, U, $, Z;
    if (!Object.is(n.current[S], W)) {
      if (n.current[S] = W, S === "search") L(), P(), w(1, F);
      else if (S === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ne = document.getElementById(M);
          ne ? ne.focus() : (B = document.getElementById(v)) == null || B.focus();
        }
        if (w(7, () => {
          var ne;
          n.current.selectedItemId = (ne = G()) == null ? void 0 : ne.id, E.emit();
        }), Y || w(5, H), ((U = c.current) == null ? void 0 : U.value) !== void 0) {
          let ne = W ?? "";
          (Z = ($ = c.current).onValueChange) == null || Z.call($, ne);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((S) => S());
  } }), []), D = u.useMemo(() => ({ value: (S, W, Y) => {
    var B;
    W !== ((B = s.current.get(S)) == null ? void 0 : B.value) && (s.current.set(S, { value: W, keywords: Y }), n.current.filtered.items.set(S, T(W, Y)), w(2, () => {
      P(), E.emit();
    }));
  }, item: (S, W) => (r.current.add(S), W && (o.current.has(W) ? o.current.get(W).add(S) : o.current.set(W, /* @__PURE__ */ new Set([S]))), w(3, () => {
    L(), P(), n.current.value || F(), E.emit();
  }), () => {
    s.current.delete(S), r.current.delete(S), n.current.filtered.items.delete(S);
    let Y = G();
    w(4, () => {
      L(), Y?.getAttribute("id") === S && F(), E.emit();
    });
  }), group: (S) => (o.current.has(S) || o.current.set(S, /* @__PURE__ */ new Set()), () => {
    s.current.delete(S), o.current.delete(S);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => c.current.disablePointerSelection, listId: v, inputId: M, labelId: k, listInnerRef: N }), []);
  function T(S, W) {
    var Y, B;
    let U = (B = (Y = c.current) == null ? void 0 : Y.filter) != null ? B : Qx;
    return S ? U(S, n.current.search, W) : 0;
  }
  function P() {
    if (!n.current.search || c.current.shouldFilter === !1) return;
    let S = n.current.filtered.items, W = [];
    n.current.filtered.groups.forEach((B) => {
      let U = o.current.get(B), $ = 0;
      U.forEach((Z) => {
        let ne = S.get(Z);
        $ = Math.max(ne, $);
      }), W.push([B, $]);
    });
    let Y = N.current;
    q().sort((B, U) => {
      var $, Z;
      let ne = B.getAttribute("id"), ue = U.getAttribute("id");
      return (($ = S.get(ue)) != null ? $ : 0) - ((Z = S.get(ne)) != null ? Z : 0);
    }).forEach((B) => {
      let U = B.closest(zo);
      U ? U.appendChild(B.parentElement === U ? B : B.closest(`${zo} > *`)) : Y.appendChild(B.parentElement === Y ? B : B.closest(`${zo} > *`));
    }), W.sort((B, U) => U[1] - B[1]).forEach((B) => {
      var U;
      let $ = (U = N.current) == null ? void 0 : U.querySelector(`${zn}[${bn}="${encodeURIComponent(B[0])}"]`);
      $?.parentElement.appendChild($);
    });
  }
  function F() {
    let S = q().find((Y) => Y.getAttribute("aria-disabled") !== "true"), W = S?.getAttribute(bn);
    E.setState("value", W || void 0);
  }
  function L() {
    var S, W, Y, B;
    if (!n.current.search || c.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (let $ of r.current) {
      let Z = (W = (S = s.current.get($)) == null ? void 0 : S.value) != null ? W : "", ne = (B = (Y = s.current.get($)) == null ? void 0 : Y.keywords) != null ? B : [], ue = T(Z, ne);
      n.current.filtered.items.set($, ue), ue > 0 && U++;
    }
    for (let [$, Z] of o.current) for (let ne of Z) if (n.current.filtered.items.get(ne) > 0) {
      n.current.filtered.groups.add($);
      break;
    }
    n.current.filtered.count = U;
  }
  function H() {
    var S, W, Y;
    let B = G();
    B && (((S = B.parentElement) == null ? void 0 : S.firstChild) === B && ((Y = (W = B.closest(zn)) == null ? void 0 : W.querySelector(Xx)) == null || Y.scrollIntoView({ block: "nearest" })), B.scrollIntoView({ block: "nearest" }));
  }
  function G() {
    var S;
    return (S = N.current) == null ? void 0 : S.querySelector(`${pl}[aria-selected="true"]`);
  }
  function q() {
    var S;
    return Array.from(((S = N.current) == null ? void 0 : S.querySelectorAll(ii)) || []);
  }
  function I(S) {
    let W = q()[S];
    W && E.setState("value", W.getAttribute(bn));
  }
  function O(S) {
    var W;
    let Y = G(), B = q(), U = B.findIndex((Z) => Z === Y), $ = B[U + S];
    (W = c.current) != null && W.loop && ($ = U + S < 0 ? B[B.length - 1] : U + S === B.length ? B[0] : B[U + S]), $ && E.setState("value", $.getAttribute(bn));
  }
  function _(S) {
    let W = G(), Y = W?.closest(zn), B;
    for (; Y && !B; ) Y = S > 0 ? ab(Y, zn) : ib(Y, zn), B = Y?.querySelector(ii);
    B ? E.setState("value", B.getAttribute(bn)) : O(S);
  }
  let R = () => I(q().length - 1), z = (S) => {
    S.preventDefault(), S.metaKey ? R() : S.altKey ? _(1) : O(1);
  }, C = (S) => {
    S.preventDefault(), S.metaKey ? I(0) : S.altKey ? _(-1) : O(-1);
  };
  return u.createElement(lt.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (S) => {
    var W;
    (W = y.onKeyDown) == null || W.call(y, S);
    let Y = S.nativeEvent.isComposing || S.keyCode === 229;
    if (!(S.defaultPrevented || Y)) switch (S.key) {
      case "n":
      case "j": {
        x && S.ctrlKey && z(S);
        break;
      }
      case "ArrowDown": {
        z(S);
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
          let U = new Event(gs);
          B.dispatchEvent(U);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: D.inputId, id: D.labelId, style: ub }, l), co(e, (S) => u.createElement(xl.Provider, { value: E }, u.createElement(gl.Provider, { value: D }, S))));
}), Zx = u.forwardRef((e, t) => {
  var n, r;
  let o = Ue(), s = u.useRef(null), i = u.useContext(bl), c = ir(), l = vl(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i?.forceMount;
  rn(() => {
    if (!d) return c.item(o, i?.id);
  }, [d]);
  let m = wl(o, s, [e.value, e.children, s], e.keywords), f = Zs(), h = Ht((w) => w.value && w.value === m.current), p = Ht((w) => d || c.filter() === !1 ? !0 : w.search ? w.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let w = s.current;
    if (!(!w || e.disabled)) return w.addEventListener(gs, b), () => w.removeEventListener(gs, b);
  }, [p, e.onSelect, e.disabled]);
  function b() {
    var w, E;
    g(), (E = (w = l.current).onSelect) == null || E.call(w, m.current);
  }
  function g() {
    f.setState("value", m.current, !0);
  }
  if (!p) return null;
  let { disabled: x, value: y, onSelect: v, forceMount: k, keywords: M, ...N } = e;
  return u.createElement(lt.div, { ref: Et(s, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!h, "data-disabled": !!x, "data-selected": !!h, onPointerMove: x || c.getDisablePointerSelection() ? void 0 : g, onClick: x ? void 0 : b }, e.children);
}), Jx = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, i = Ue(), c = u.useRef(null), l = u.useRef(null), d = Ue(), m = ir(), f = Ht((p) => o || m.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(i) : !0);
  rn(() => m.group(i), []), wl(i, c, [e.value, e.heading, l]);
  let h = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(lt.div, { ref: Et(c, t), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), co(e, (p) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(bl.Provider, { value: h }, p))));
}), eb = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), s = Ht((i) => !i.search);
  return !n && !s ? null : u.createElement(lt.div, { ref: Et(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), tb = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Zs(), i = Ht((d) => d.search), c = Ht((d) => d.selectedItemId), l = ir();
  return u.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), u.createElement(lt.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": c, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || s.setState("search", d.target.value), n?.(d.target.value);
  } });
}), nb = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = u.useRef(null), i = u.useRef(null), c = Ht((d) => d.selectedItemId), l = ir();
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
  }, []), u.createElement(lt.div, { ref: Et(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": c, "aria-label": r, id: l.listId }, co(e, (d) => u.createElement("div", { ref: Et(i, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), rb = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: i, ...c } = e;
  return u.createElement(Us, { open: n, onOpenChange: r }, u.createElement(qs, { container: i }, u.createElement(Ks, { "cmdk-overlay": "", className: o }), u.createElement(Xs, { "aria-label": e.label, "cmdk-dialog": "", className: s }, u.createElement(yl, { ref: t, ...c }))));
}), ob = u.forwardRef((e, t) => Ht((n) => n.filtered.count === 0) ? u.createElement(lt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), sb = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return u.createElement(lt.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, co(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), On = Object.assign(yl, { List: nb, Item: Zx, Input: tb, Group: Jx, Separator: eb, Dialog: rb, Empty: ob, Loading: sb });
function ab(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function ib(e, t) {
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
function yn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ht(e) {
  let t = Zs(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function wl(e, t, n, r = []) {
  let o = u.useRef(), s = ir();
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
var cb = () => {
  let [e, t] = u.useState(), n = yn(() => /* @__PURE__ */ new Map());
  return rn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function lb(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function co({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(lb(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var ub = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function kl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = kl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = kl(e)) && (r && (r += " "), r += t);
  return r;
}
const db = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, fb = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ml = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Gr = "-", ci = [], mb = "arbitrary..", hb = (e) => {
  const t = gb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return pb(i);
      const c = i.split(Gr), l = c[0] === "" && c.length > 1 ? 1 : 0;
      return Nl(c, l, t);
    },
    getConflictingClassGroupIds: (i, c) => {
      if (c) {
        const l = r[i], d = n[i];
        return l ? d ? db(d, l) : l : d || ci;
      }
      return n[i] || ci;
    }
  };
}, Nl = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const d = Nl(e, t + 1, s);
    if (d) return d;
  }
  const i = n.validators;
  if (i === null)
    return;
  const c = t === 0 ? e.join(Gr) : e.slice(t).join(Gr), l = i.length;
  for (let d = 0; d < l; d++) {
    const m = i[d];
    if (m.validator(c))
      return m.classGroupId;
  }
}, pb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? mb + r : void 0;
})(), gb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return xb(n, t);
}, xb = (e, t) => {
  const n = Ml();
  for (const r in e) {
    const o = e[r];
    Js(o, n, r, t);
  }
  return n;
}, Js = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    bb(i, t, n, r);
  }
}, bb = (e, t, n, r) => {
  if (typeof e == "string") {
    yb(e, t, n);
    return;
  }
  if (typeof e == "function") {
    vb(e, t, n, r);
    return;
  }
  wb(e, t, n, r);
}, yb = (e, t, n) => {
  const r = e === "" ? t : El(t, e);
  r.classGroupId = n;
}, vb = (e, t, n, r) => {
  if (kb(e)) {
    Js(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(fb(n, e));
}, wb = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [c, l] = o[i];
    Js(l, El(t, c), n, r);
  }
}, El = (e, t) => {
  let n = e;
  const r = t.split(Gr), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let c = n.nextPart.get(i);
    c || (c = Ml(), n.nextPart.set(i, c)), n = c;
  }
  return n;
}, kb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Cb = (e) => {
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
}, xs = "!", li = ":", Mb = [], ui = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Nb = (e) => {
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
        if (x === li) {
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
    f.endsWith(xs) ? (h = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(xs) && (h = f.slice(1), p = !0)
    );
    const b = d && d > l ? d - l : void 0;
    return ui(s, p, h, b);
  };
  if (t) {
    const o = t + li, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : ui(Mb, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Eb = (e) => {
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
}, Db = (e) => ({
  cache: Cb(e.cacheSize),
  parseClassName: Nb(e),
  sortModifiers: Eb(e),
  ...hb(e)
}), Sb = /\s+/, jb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], c = e.trim().split(Sb);
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
    let x = !!g, y = r(x ? b.substring(0, g) : b);
    if (!y) {
      if (!x) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(b), !y) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const v = h.length === 0 ? "" : h.length === 1 ? h[0] : s(h).join(":"), k = p ? v + xs : v, M = k + y;
    if (i.indexOf(M) > -1)
      continue;
    i.push(M);
    const N = o(y, x);
    for (let w = 0; w < N.length; ++w) {
      const E = N[w];
      i.push(k + E);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Tb = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Dl(n)) && (o && (o += " "), o += r);
  return o;
}, Dl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Dl(e[r])) && (n && (n += " "), n += t);
  return n;
}, Ob = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const d = t.reduce((m, f) => f(m), e());
    return n = Db(d), r = n.cache.get, o = n.cache.set, s = c, c(l);
  }, c = (l) => {
    const d = r(l);
    if (d)
      return d;
    const m = jb(l, n);
    return o(l, m), m;
  };
  return s = i, (...l) => s(Tb(...l));
}, _b = [], Le = (e) => {
  const t = (n) => n[e] || _b;
  return t.isThemeGetter = !0, t;
}, Sl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rb = /^\d+\/\d+$/, Pb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ab = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ib = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mn = (e) => Rb.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Yt = (e) => !!e && Number.isInteger(Number(e)), Yo = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Ot = (e) => Pb.test(e), Lb = () => !0, $b = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ab.test(e) && !Ib.test(e)
), Tl = () => !1, zb = (e) => Wb.test(e), Yb = (e) => Fb.test(e), Bb = (e) => !K(e) && !X(e), Hb = (e) => _n(e, Rl, Tl), K = (e) => Sl.test(e), Qt = (e) => _n(e, Pl, $b), Bo = (e) => _n(e, Kb, ae), di = (e) => _n(e, Ol, Tl), Gb = (e) => _n(e, _l, Yb), Mr = (e) => _n(e, Al, zb), X = (e) => jl.test(e), Yn = (e) => Rn(e, Pl), Vb = (e) => Rn(e, Xb), fi = (e) => Rn(e, Ol), Ub = (e) => Rn(e, Rl), qb = (e) => Rn(e, _l), Nr = (e) => Rn(e, Al, !0), _n = (e, t, n) => {
  const r = Sl.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Rn = (e, t, n = !1) => {
  const r = jl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ol = (e) => e === "position" || e === "percentage", _l = (e) => e === "image" || e === "url", Rl = (e) => e === "length" || e === "size" || e === "bg-size", Pl = (e) => e === "length", Kb = (e) => e === "number", Xb = (e) => e === "family-name", Al = (e) => e === "shadow", Qb = () => {
  const e = Le("color"), t = Le("font"), n = Le("text"), r = Le("font-weight"), o = Le("tracking"), s = Le("leading"), i = Le("breakpoint"), c = Le("container"), l = Le("spacing"), d = Le("radius"), m = Le("shadow"), f = Le("inset-shadow"), h = Le("text-shadow"), p = Le("drop-shadow"), b = Le("blur"), g = Le("perspective"), x = Le("aspect"), y = Le("ease"), v = Le("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
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
  ], N = () => [...M(), X, K], w = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], D = () => [X, K, l], T = () => [mn, "full", "auto", ...D()], P = () => [Yt, "none", "subgrid", X, K], F = () => ["auto", {
    span: ["full", Yt, X, K]
  }, Yt, X, K], L = () => [Yt, "auto", X, K], H = () => ["auto", "min", "max", "fr", X, K], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...D()], O = () => [mn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()], _ = () => [e, X, K], R = () => [...M(), fi, di, {
    position: [X, K]
  }], z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], C = () => ["auto", "cover", "contain", Ub, Hb, {
    size: [X, K]
  }], S = () => [Yo, Yn, Qt], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    X,
    K
  ], Y = () => ["", ae, Yn, Qt], B = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [ae, Yo, fi, di], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    X,
    K
  ], ne = () => ["none", ae, X, K], ue = () => ["none", ae, X, K], $e = () => [ae, X, K], _e = () => [mn, "full", ...D()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ot],
      breakpoint: [Ot],
      color: [Lb],
      container: [Ot],
      "drop-shadow": [Ot],
      ease: ["in", "out", "in-out"],
      font: [Bb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ot],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ot],
      shadow: [Ot],
      spacing: ["px", ae],
      text: [Ot],
      "text-shadow": [Ot],
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
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...O()]
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
          ...O()
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
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
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
        font: [r, X, Bo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Yo, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Vb, K, t]
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
        "line-clamp": [ae, "none", X, Bo]
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
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
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
        decoration: _()
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
        bg: z()
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
        }, qb, Gb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
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
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
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
        border: _()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
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
        outline: _()
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
          Nr,
          Mr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: _()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Nr, Mr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": _()
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
        ring: _()
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
        "ring-offset": _()
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
        "inset-ring": _()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Nr, Mr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": _()
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
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, K]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
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
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
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
        mask: z()
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
          Nr,
          Mr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": _()
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
        ease: ["linear", "initial", y, X, K]
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
        animate: ["none", v, X, K]
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
        skew: $e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": $e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": $e()
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
        translate: _e()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": _e()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": _e()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": _e()
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
        accent: _()
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
        caret: _()
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
        fill: ["none", ..._()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Yn, Qt, Bo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ..._()]
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
}, Zb = /* @__PURE__ */ Ob(Qb);
function j(...e) {
  return Zb(Cl(e));
}
var Jb = Object.freeze({
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
}), ey = "VisuallyHidden", Il = u.forwardRef(
  (e, t) => /* @__PURE__ */ a.jsx(
    ke.span,
    {
      ...e,
      ref: t,
      style: { ...Jb, ...e.style }
    }
  )
);
Il.displayName = ey;
var ty = Il;
function Wl(e) {
  const t = e + "CollectionProvider", [n, r] = St(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: x, children: y } = g, v = V.useRef(null), k = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a.jsx(o, { scope: x, itemMap: k, collectionRef: v, children: y });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ En(c), d = V.forwardRef(
    (g, x) => {
      const { scope: y, children: v } = g, k = s(c, y), M = je(x, k.collectionRef);
      return /* @__PURE__ */ a.jsx(l, { ref: M, children: v });
    }
  );
  d.displayName = c;
  const m = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ En(m), p = V.forwardRef(
    (g, x) => {
      const { scope: y, children: v, ...k } = g, M = V.useRef(null), N = je(x, M), w = s(m, y);
      return V.useEffect(() => (w.itemMap.set(M, { ref: M, ...k }), () => {
        w.itemMap.delete(M);
      })), /* @__PURE__ */ a.jsx(h, { [f]: "", ref: N, children: v });
    }
  );
  p.displayName = m;
  function b(g) {
    const x = s(e + "CollectionConsumer", g);
    return V.useCallback(() => {
      const v = x.collectionRef.current;
      if (!v) return [];
      const k = Array.from(v.querySelectorAll(`[${f}]`));
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
var lo = "Collapsible", [ny] = St(lo), [ry, ea] = ny(lo), Fl = u.forwardRef(
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
      caller: lo
    });
    return /* @__PURE__ */ a.jsx(
      ry,
      {
        scope: n,
        disabled: s,
        contentId: Ue(),
        open: l,
        onOpenToggle: u.useCallback(() => d((m) => !m), [d]),
        children: /* @__PURE__ */ a.jsx(
          ke.div,
          {
            "data-state": na(l),
            "data-disabled": s ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Fl.displayName = lo;
var Ll = "CollapsibleTrigger", $l = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ea(Ll, n);
    return /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": na(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
$l.displayName = Ll;
var ta = "CollapsibleContent", zl = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ea(ta, e.__scopeCollapsible);
    return /* @__PURE__ */ a.jsx(rt, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ a.jsx(oy, { ...r, ref: t, present: s }) });
  }
);
zl.displayName = ta;
var oy = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = ea(ta, n), [c, l] = u.useState(r), d = u.useRef(null), m = je(t, d), f = u.useRef(0), h = f.current, p = u.useRef(0), b = p.current, g = i.open || c, x = u.useRef(g), y = u.useRef(void 0);
  return u.useEffect(() => {
    const v = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(v);
  }, []), ct(() => {
    const v = d.current;
    if (v) {
      y.current = y.current || {
        transitionDuration: v.style.transitionDuration,
        animationName: v.style.animationName
      }, v.style.transitionDuration = "0s", v.style.animationName = "none";
      const k = v.getBoundingClientRect();
      f.current = k.height, p.current = k.width, x.current || (v.style.transitionDuration = y.current.transitionDuration, v.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ a.jsx(
    ke.div,
    {
      "data-state": na(i.open),
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
function na(e) {
  return e ? "open" : "closed";
}
var sy = Fl, ay = u.createContext(void 0);
function Yl(e) {
  const t = u.useContext(ay);
  return e || t || "ltr";
}
var Er = { exports: {} }, Ho = {};
var mi;
function iy() {
  if (mi) return Ho;
  mi = 1;
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
  return Ho.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Ho;
}
var Go = {};
var hi;
function cy() {
  return hi || (hi = 1, process.env.NODE_ENV !== "production" && (function() {
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
      var y = x[0].inst, v = x[1];
      return l(
        function() {
          y.value = g, y.getSnapshot = b, n(y) && v({ inst: y });
        },
        [p, g, b]
      ), c(
        function() {
          return n(y) && v({ inst: y }), p(function() {
            n(y) && v({ inst: y });
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
    Go.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Go;
}
var pi;
function ly() {
  return pi || (pi = 1, process.env.NODE_ENV === "production" ? Er.exports = iy() : Er.exports = cy()), Er.exports;
}
var uy = ly();
function dy() {
  return uy.useSyncExternalStore(
    fy,
    () => !0,
    () => !1
  );
}
function fy() {
  return () => {
  };
}
function my(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Bl(e) {
  const [t, n] = u.useState(void 0);
  return ct(() => {
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
const hy = ["top", "right", "bottom", "left"], Gt = Math.min, Je = Math.max, Vr = Math.round, Dr = Math.floor, Nt = (e) => ({
  x: e,
  y: e
}), py = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gy = {
  start: "end",
  end: "start"
};
function bs(e, t, n) {
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
function ra(e) {
  return e === "x" ? "y" : "x";
}
function oa(e) {
  return e === "y" ? "height" : "width";
}
const xy = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ct(e) {
  return xy.has($t(e)) ? "y" : "x";
}
function sa(e) {
  return ra(Ct(e));
}
function by(e, t, n) {
  n === void 0 && (n = !1);
  const r = Pn(e), o = sa(e), s = oa(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ur(i)), [i, Ur(i)];
}
function yy(e) {
  const t = Ur(e);
  return [ys(e), t, ys(t)];
}
function ys(e) {
  return e.replace(/start|end/g, (t) => gy[t]);
}
const gi = ["left", "right"], xi = ["right", "left"], vy = ["top", "bottom"], wy = ["bottom", "top"];
function ky(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xi : gi : t ? gi : xi;
    case "left":
    case "right":
      return t ? vy : wy;
    default:
      return [];
  }
}
function Cy(e, t, n, r) {
  const o = Pn(e);
  let s = ky($t(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ys)))), s;
}
function Ur(e) {
  return e.replace(/left|right|bottom|top/g, (t) => py[t]);
}
function My(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hl(e) {
  return typeof e != "number" ? My(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qr(e) {
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
function bi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ct(t), i = sa(t), c = oa(i), l = $t(t), d = s === "y", m = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[c] / 2 - o[c] / 2;
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
const Ny = async (e, t, n) => {
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
  } = bi(d, r, l), h = r, p = {}, b = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: x,
      fn: y
    } = c[g], {
      x: v,
      y: k,
      data: M,
      reset: N
    } = await y({
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
    m = v ?? m, f = k ?? f, p = {
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
    } = bi(d, h, l)), g = -1);
  }
  return {
    x: m,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Xn(e, t) {
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
  } = Lt(t, e), b = Hl(p), x = c[h ? f === "floating" ? "reference" : "floating" : f], y = qr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: m,
    strategy: l
  })), v = f === "floating" ? {
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
  }, N = qr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: v,
    offsetParent: k,
    strategy: l
  }) : v);
  return {
    top: (y.top - N.top + b.top) / M.y,
    bottom: (N.bottom - y.bottom + b.bottom) / M.y,
    left: (y.left - N.left + b.left) / M.x,
    right: (N.right - y.right + b.right) / M.x
  };
}
const Ey = (e) => ({
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
    const f = Hl(m), h = {
      x: n,
      y: r
    }, p = sa(o), b = oa(p), g = await i.getDimensions(d), x = p === "y", y = x ? "top" : "left", v = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", M = s.reference[b] + s.reference[p] - h[p] - s.floating[b], N = h[p] - s.reference[p], w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let E = w ? w[k] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(w))) && (E = c.floating[k] || s.floating[b]);
    const D = M / 2 - N / 2, T = E / 2 - g[b] / 2 - 1, P = Gt(f[y], T), F = Gt(f[v], T), L = P, H = E - g[b] - F, G = E / 2 - g[b] / 2 + D, q = bs(L, G, H), I = !l.arrow && Pn(o) != null && G !== q && s.reference[b] / 2 - (G < L ? P : F) - g[b] / 2 < 0, O = I ? G < L ? G - L : G - H : 0;
    return {
      [p]: h[p] + O,
      data: {
        [p]: q,
        centerOffset: G - q - O,
        ...I && {
          alignmentOffset: O
        }
      },
      reset: I
    };
  }
}), Dy = function(e) {
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
      const y = $t(o), v = Ct(c), k = $t(c) === c, M = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), N = h || (k || !g ? [Ur(c)] : yy(c)), w = b !== "none";
      !h && w && N.push(...Cy(c, g, b, M));
      const E = [c, ...N], D = await Xn(t, x), T = [];
      let P = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && T.push(D[y]), f) {
        const G = by(o, i, M);
        T.push(D[G[0]], D[G[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: T
      }], !T.every((G) => G <= 0)) {
        var F, L;
        const G = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, q = E[G];
        if (q && (!(f === "alignment" ? v !== Ct(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((_) => Ct(_.placement) === v ? _.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: P
            },
            reset: {
              placement: q
            }
          };
        let I = (L = P.filter((O) => O.overflows[0] <= 0).sort((O, _) => O.overflows[1] - _.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var H;
              const O = (H = P.filter((_) => {
                if (w) {
                  const R = Ct(_.placement);
                  return R === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  R === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((R) => R > 0).reduce((R, z) => R + z, 0)]).sort((_, R) => _[1] - R[1])[0]) == null ? void 0 : H[0];
              O && (I = O);
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
function yi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vi(e) {
  return hy.some((t) => e[t] >= 0);
}
const Sy = function(e) {
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
          const s = await Xn(t, {
            ...o,
            elementContext: "reference"
          }), i = yi(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: vi(i)
            }
          };
        }
        case "escaped": {
          const s = await Xn(t, {
            ...o,
            altBoundary: !0
          }), i = yi(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: vi(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Gl = /* @__PURE__ */ new Set(["left", "top"]);
async function jy(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = $t(n), c = Pn(n), l = Ct(n) === "y", d = Gl.has(i) ? -1 : 1, m = s && l ? -1 : 1, f = Lt(t, e);
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
const Ty = function(e) {
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
      } = t, l = await jy(t, e);
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
}, Oy = function(e) {
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
              x: y,
              y: v
            } = x;
            return {
              x: y,
              y: v
            };
          }
        },
        ...l
      } = Lt(e, t), d = {
        x: n,
        y: r
      }, m = await Xn(t, l), f = Ct($t(o)), h = ra(f);
      let p = d[h], b = d[f];
      if (s) {
        const x = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", v = p + m[x], k = p - m[y];
        p = bs(v, p, k);
      }
      if (i) {
        const x = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = b + m[x], k = b - m[y];
        b = bs(v, b, k);
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
}, _y = function(e) {
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
      }, f = Ct(o), h = ra(f);
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
        var y, v;
        const k = h === "y" ? "width" : "height", M = Gl.has($t(o)), N = s.reference[f] - s.floating[k] + (M && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (M ? 0 : x.crossAxis), w = s.reference[f] + s.reference[k] + (M ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (M ? x.crossAxis : 0);
        b < N ? b = N : b > w && (b = w);
      }
      return {
        [h]: p,
        [f]: b
      };
    }
  };
}, Ry = function(e) {
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
      } = Lt(e, t), m = await Xn(t, d), f = $t(o), h = Pn(o), p = Ct(o) === "y", {
        width: b,
        height: g
      } = s.floating;
      let x, y;
      f === "top" || f === "bottom" ? (x = f, y = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (y = f, x = h === "end" ? "top" : "bottom");
      const v = g - m.top - m.bottom, k = b - m.left - m.right, M = Gt(g - m[x], v), N = Gt(b - m[y], k), w = !t.middlewareData.shift;
      let E = M, D = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (D = k), (r = t.middlewareData.shift) != null && r.enabled.y && (E = v), w && !h) {
        const P = Je(m.left, 0), F = Je(m.right, 0), L = Je(m.top, 0), H = Je(m.bottom, 0);
        p ? D = b - 2 * (P !== 0 || F !== 0 ? P + F : Je(m.left, m.right)) : E = g - 2 * (L !== 0 || H !== 0 ? L + H : Je(m.top, m.bottom));
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
function uo() {
  return typeof window < "u";
}
function An(e) {
  return Vl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jt(e) {
  var t;
  return (t = (Vl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vl(e) {
  return uo() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function ht(e) {
  return uo() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function Dt(e) {
  return uo() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function wi(e) {
  return !uo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
const Py = /* @__PURE__ */ new Set(["inline", "contents"]);
function cr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Py.has(o);
}
const Ay = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Iy(e) {
  return Ay.has(An(e));
}
const Wy = [":popover-open", ":modal"];
function fo(e) {
  return Wy.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Fy = ["transform", "translate", "scale", "rotate", "perspective"], Ly = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $y = ["paint", "layout", "strict", "content"];
function aa(e) {
  const t = ia(), n = ht(e) ? pt(e) : e;
  return Fy.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ly.some((r) => (n.willChange || "").includes(r)) || $y.some((r) => (n.contain || "").includes(r));
}
function zy(e) {
  let t = Vt(e);
  for (; Dt(t) && !Dn(t); ) {
    if (aa(t))
      return t;
    if (fo(t))
      return null;
    t = Vt(t);
  }
  return null;
}
function ia() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Yy = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Dn(e) {
  return Yy.has(An(e));
}
function pt(e) {
  return et(e).getComputedStyle(e);
}
function mo(e) {
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
    wi(e) && e.host || // Fallback.
    jt(e)
  );
  return wi(t) ? t.host : t;
}
function Ul(e) {
  const t = Vt(e);
  return Dn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dt(t) && cr(t) ? t : Ul(t);
}
function Qn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ul(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = et(o);
  if (s) {
    const c = vs(i);
    return t.concat(i, i.visualViewport || [], cr(o) ? o : [], c && n ? Qn(c) : []);
  }
  return t.concat(o, Qn(o, [], n));
}
function vs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ql(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Dt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, c = Vr(n) !== s || Vr(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function ca(e) {
  return ht(e) ? e : e.contextElement;
}
function Cn(e) {
  const t = ca(e);
  if (!Dt(t))
    return Nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = ql(t);
  let i = (s ? Vr(n.width) : n.width) / r, c = (s ? Vr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const By = /* @__PURE__ */ Nt(0);
function Kl(e) {
  const t = et(e);
  return !ia() || !t.visualViewport ? By : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t;
}
function on(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ca(e);
  let i = Nt(1);
  t && (r ? ht(r) && (i = Cn(r)) : i = Cn(e));
  const c = Hy(s, n, r) ? Kl(s) : Nt(0);
  let l = (o.left + c.x) / i.x, d = (o.top + c.y) / i.y, m = o.width / i.x, f = o.height / i.y;
  if (s) {
    const h = et(s), p = r && ht(r) ? et(r) : r;
    let b = h, g = vs(b);
    for (; g && r && p !== b; ) {
      const x = Cn(g), y = g.getBoundingClientRect(), v = pt(g), k = y.left + (g.clientLeft + parseFloat(v.paddingLeft)) * x.x, M = y.top + (g.clientTop + parseFloat(v.paddingTop)) * x.y;
      l *= x.x, d *= x.y, m *= x.x, f *= x.y, l += k, d += M, b = et(g), g = vs(b);
    }
  }
  return qr({
    width: m,
    height: f,
    x: l,
    y: d
  });
}
function ho(e, t) {
  const n = mo(e).scrollLeft;
  return t ? t.left + n : on(jt(e)).left + n;
}
function Xl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ho(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Gy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = jt(r), c = t ? fo(t.floating) : !1;
  if (r === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Nt(1);
  const m = Nt(0), f = Dt(r);
  if ((f || !f && !s) && ((An(r) !== "body" || cr(i)) && (l = mo(r)), Dt(r))) {
    const p = on(r);
    d = Cn(r), m.x = p.x + r.clientLeft, m.y = p.y + r.clientTop;
  }
  const h = i && !f && !s ? Xl(i, l) : Nt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + m.x + h.x,
    y: n.y * d.y - l.scrollTop * d.y + m.y + h.y
  };
}
function Vy(e) {
  return Array.from(e.getClientRects());
}
function Uy(e) {
  const t = jt(e), n = mo(e), r = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + ho(e);
  const c = -n.scrollTop;
  return pt(r).direction === "rtl" && (i += Je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
const ki = 25;
function qy(e, t) {
  const n = et(e), r = jt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const m = ia();
    (!m || m && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  const d = ho(r);
  if (d <= 0) {
    const m = r.ownerDocument, f = m.body, h = getComputedStyle(f), p = m.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - f.clientWidth - p);
    b <= ki && (s -= b);
  } else d <= ki && (s += d);
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
const Ky = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Xy(e, t) {
  const n = on(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Dt(e) ? Cn(e) : Nt(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = o * s.x, d = r * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: d
  };
}
function Ci(e, t, n) {
  let r;
  if (t === "viewport")
    r = qy(e, n);
  else if (t === "document")
    r = Uy(jt(e));
  else if (ht(t))
    r = Xy(t, n);
  else {
    const o = Kl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return qr(r);
}
function Ql(e, t) {
  const n = Vt(e);
  return n === t || !ht(n) || Dn(n) ? !1 : pt(n).position === "fixed" || Ql(n, t);
}
function Qy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Qn(e, [], !1).filter((c) => ht(c) && An(c) !== "body"), o = null;
  const s = pt(e).position === "fixed";
  let i = s ? Vt(e) : e;
  for (; ht(i) && !Dn(i); ) {
    const c = pt(i), l = aa(i);
    !l && c.position === "fixed" && (o = null), (s ? !l && !o : !l && c.position === "static" && !!o && Ky.has(o.position) || cr(i) && !l && Ql(e, i)) ? r = r.filter((m) => m !== i) : o = c, i = Vt(i);
  }
  return t.set(e, r), r;
}
function Zy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? fo(t) ? [] : Qy(t, this._c) : [].concat(n), r], c = i[0], l = i.reduce((d, m) => {
    const f = Ci(t, m, o);
    return d.top = Je(f.top, d.top), d.right = Gt(f.right, d.right), d.bottom = Gt(f.bottom, d.bottom), d.left = Je(f.left, d.left), d;
  }, Ci(t, c, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Jy(e) {
  const {
    width: t,
    height: n
  } = ql(e);
  return {
    width: t,
    height: n
  };
}
function ev(e, t, n) {
  const r = Dt(t), o = jt(t), s = n === "fixed", i = on(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Nt(0);
  function d() {
    l.x = ho(o);
  }
  if (r || !r && !s)
    if ((An(t) !== "body" || cr(o)) && (c = mo(t)), r) {
      const p = on(t, !0, s, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const m = o && !r && !s ? Xl(o, c) : Nt(0), f = i.left + c.scrollLeft - l.x - m.x, h = i.top + c.scrollTop - l.y - m.y;
  return {
    x: f,
    y: h,
    width: i.width,
    height: i.height
  };
}
function Vo(e) {
  return pt(e).position === "static";
}
function Mi(e, t) {
  if (!Dt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return jt(e) === n && (n = n.ownerDocument.body), n;
}
function Zl(e, t) {
  const n = et(e);
  if (fo(e))
    return n;
  if (!Dt(e)) {
    let o = Vt(e);
    for (; o && !Dn(o); ) {
      if (ht(o) && !Vo(o))
        return o;
      o = Vt(o);
    }
    return n;
  }
  let r = Mi(e, t);
  for (; r && Iy(r) && Vo(r); )
    r = Mi(r, t);
  return r && Dn(r) && Vo(r) && !aa(r) ? n : r || zy(e) || n;
}
const tv = async function(e) {
  const t = this.getOffsetParent || Zl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ev(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function nv(e) {
  return pt(e).direction === "rtl";
}
const rv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gy,
  getDocumentElement: jt,
  getClippingRect: Zy,
  getOffsetParent: Zl,
  getElementRects: tv,
  getClientRects: Vy,
  getDimensions: Jy,
  getScale: Cn,
  isElement: ht,
  isRTL: nv
};
function Jl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ov(e, t) {
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
    const b = Dr(f), g = Dr(o.clientWidth - (m + h)), x = Dr(o.clientHeight - (f + p)), y = Dr(m), k = {
      rootMargin: -b + "px " + -g + "px " + -x + "px " + -y + "px",
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
      E === 1 && !Jl(d, e.getBoundingClientRect()) && i(), M = !1;
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
function sv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = ca(e), m = o || s ? [...d ? Qn(d) : [], ...Qn(t)] : [];
  m.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const f = d && c ? ov(d, n) : null;
  let h = -1, p = null;
  i && (p = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === d && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var k;
      (k = p) == null || k.observe(t);
    })), n();
  }), d && !l && p.observe(d), p.observe(t));
  let b, g = l ? on(e) : null;
  l && x();
  function x() {
    const y = on(e);
    g && !Jl(g, y) && n(), g = y, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var y;
    m.forEach((v) => {
      o && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), f?.(), (y = p) == null || y.disconnect(), p = null, l && cancelAnimationFrame(b);
  };
}
const av = Ty, iv = Oy, cv = Dy, lv = Ry, uv = Sy, Ni = Ey, dv = _y, fv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: rv,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ny(e, t, {
    ...o,
    platform: s
  });
};
var mv = typeof document < "u", hv = function() {
}, Lr = mv ? uc : hv;
function Kr(e, t) {
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
        if (!Kr(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Kr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function eu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ei(e, t) {
  const n = eu(e);
  return Math.round(t * n) / n;
}
function Uo(e) {
  const t = u.useRef(e);
  return Lr(() => {
    t.current = e;
  }), t;
}
function pv(e) {
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
  Kr(h, r) || p(r);
  const [b, g] = u.useState(null), [x, y] = u.useState(null), v = u.useCallback((_) => {
    _ !== w.current && (w.current = _, g(_));
  }, []), k = u.useCallback((_) => {
    _ !== E.current && (E.current = _, y(_));
  }, []), M = s || b, N = i || x, w = u.useRef(null), E = u.useRef(null), D = u.useRef(m), T = l != null, P = Uo(l), F = Uo(o), L = Uo(d), H = u.useCallback(() => {
    if (!w.current || !E.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    F.current && (_.platform = F.current), fv(w.current, E.current, _).then((R) => {
      const z = {
        ...R,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      G.current && !Kr(D.current, z) && (D.current = z, Ps.flushSync(() => {
        f(z);
      }));
    });
  }, [h, t, n, F, L]);
  Lr(() => {
    d === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [d]);
  const G = u.useRef(!1);
  Lr(() => (G.current = !0, () => {
    G.current = !1;
  }), []), Lr(() => {
    if (M && (w.current = M), N && (E.current = N), M && N) {
      if (P.current)
        return P.current(M, N, H);
      H();
    }
  }, [M, N, H, P, T]);
  const q = u.useMemo(() => ({
    reference: w,
    floating: E,
    setReference: v,
    setFloating: k
  }), [v, k]), I = u.useMemo(() => ({
    reference: M,
    floating: N
  }), [M, N]), O = u.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return _;
    const R = Ei(I.floating, m.x), z = Ei(I.floating, m.y);
    return c ? {
      ..._,
      transform: "translate(" + R + "px, " + z + "px)",
      ...eu(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: z
    };
  }, [n, c, I.floating, m.x, m.y]);
  return u.useMemo(() => ({
    ...m,
    update: H,
    refs: q,
    elements: I,
    floatingStyles: O
  }), [m, H, q, I, O]);
}
const gv = (e) => {
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
      return r && t(r) ? r.current != null ? Ni({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ni({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, xv = (e, t) => ({
  ...av(e),
  options: [e, t]
}), bv = (e, t) => ({
  ...iv(e),
  options: [e, t]
}), yv = (e, t) => ({
  ...dv(e),
  options: [e, t]
}), vv = (e, t) => ({
  ...cv(e),
  options: [e, t]
}), wv = (e, t) => ({
  ...lv(e),
  options: [e, t]
}), kv = (e, t) => ({
  ...uv(e),
  options: [e, t]
}), Cv = (e, t) => ({
  ...gv(e),
  options: [e, t]
});
var Mv = "Arrow", tu = u.forwardRef((e, t) => {
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
tu.displayName = Mv;
var Nv = tu, la = "Popper", [nu, In] = St(la), [Ev, ru] = nu(la), ou = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ a.jsx(Ev, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ou.displayName = la;
var su = "PopperAnchor", au = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = ru(su, n), i = u.useRef(null), c = je(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = r?.current || i.current, d !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ a.jsx(ke.div, { ...o, ref: c });
  }
);
au.displayName = su;
var ua = "PopperContent", [Dv, Sv] = nu(ua), iu = u.forwardRef(
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
    } = e, x = ru(ua, n), [y, v] = u.useState(null), k = je(t, ($) => v($)), [M, N] = u.useState(null), w = Bl(M), E = w?.width ?? 0, D = w?.height ?? 0, T = r + (s !== "center" ? "-" + s : ""), P = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, F = Array.isArray(d) ? d : [d], L = F.length > 0, H = {
      padding: P,
      boundary: F.filter(Tv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: G, floatingStyles: q, placement: I, isPositioned: O, middlewareData: _ } = pv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...$) => sv(...$, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        xv({ mainAxis: o + D, alignmentAxis: i }),
        l && bv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? yv() : void 0,
          ...H
        }),
        l && vv({ ...H }),
        wv({
          ...H,
          apply: ({ elements: $, rects: Z, availableWidth: ne, availableHeight: ue }) => {
            const { width: $e, height: _e } = Z.reference, He = $.floating.style;
            He.setProperty("--radix-popper-available-width", `${ne}px`), He.setProperty("--radix-popper-available-height", `${ue}px`), He.setProperty("--radix-popper-anchor-width", `${$e}px`), He.setProperty("--radix-popper-anchor-height", `${_e}px`);
          }
        }),
        M && Cv({ element: M, padding: c }),
        Ov({ arrowWidth: E, arrowHeight: D }),
        h && kv({ strategy: "referenceHidden", ...H })
      ]
    }), [R, z] = uu(I), C = mt(b);
    ct(() => {
      O && C?.();
    }, [O, C]);
    const S = _.arrow?.x, W = _.arrow?.y, Y = _.arrow?.centerOffset !== 0, [B, U] = u.useState();
    return ct(() => {
      y && U(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: O ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            _.transformOrigin?.x,
            _.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ..._.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a.jsx(
          Dv,
          {
            scope: n,
            placedSide: R,
            onArrowChange: N,
            arrowX: S,
            arrowY: W,
            shouldHideArrow: Y,
            children: /* @__PURE__ */ a.jsx(
              ke.div,
              {
                "data-side": R,
                "data-align": z,
                ...g,
                ref: k,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: O ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
iu.displayName = ua;
var cu = "PopperArrow", jv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, lu = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Sv(cu, r), i = jv[s.placedSide];
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
          Nv,
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
lu.displayName = cu;
function Tv(e) {
  return e !== null;
}
var Ov = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [d, m] = uu(n), f = { start: "0%", center: "50%", end: "100%" }[m], h = (o.arrow?.x ?? 0) + c / 2, p = (o.arrow?.y ?? 0) + l / 2;
    let b = "", g = "";
    return d === "bottom" ? (b = i ? f : `${h}px`, g = `${-l}px`) : d === "top" ? (b = i ? f : `${h}px`, g = `${r.floating.height + l}px`) : d === "right" ? (b = `${-l}px`, g = i ? f : `${p}px`) : d === "left" && (b = `${r.floating.width + l}px`, g = i ? f : `${p}px`), { data: { x: b, y: g } };
  }
});
function uu(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var po = ou, go = au, da = iu, fa = lu, qo = "rovingFocusGroup.onEntryFocus", _v = { bubbles: !1, cancelable: !0 }, lr = "RovingFocusGroup", [ws, du, Rv] = Wl(lr), [Pv, fu] = St(
  lr,
  [Rv]
), [Av, Iv] = Pv(lr), mu = u.forwardRef(
  (e, t) => /* @__PURE__ */ a.jsx(ws.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a.jsx(ws.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a.jsx(Wv, { ...e, ref: t }) }) })
);
mu.displayName = lr;
var Wv = u.forwardRef((e, t) => {
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
  } = e, h = u.useRef(null), p = je(t, h), b = Yl(s), [g, x] = Ut({
    prop: i,
    defaultProp: c ?? null,
    onChange: l,
    caller: lr
  }), [y, v] = u.useState(!1), k = mt(d), M = du(n), N = u.useRef(!1), [w, E] = u.useState(0);
  return u.useEffect(() => {
    const D = h.current;
    if (D)
      return D.addEventListener(qo, k), () => D.removeEventListener(qo, k);
  }, [k]), /* @__PURE__ */ a.jsx(
    Av,
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
      onItemShiftTab: u.useCallback(() => v(!0), []),
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
          tabIndex: y || w === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: J(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: J(e.onFocus, (D) => {
            const T = !N.current;
            if (D.target === D.currentTarget && T && !y) {
              const P = new CustomEvent(qo, _v);
              if (D.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const F = M().filter((I) => I.focusable), L = F.find((I) => I.active), H = F.find((I) => I.id === g), q = [L, H, ...F].filter(
                  Boolean
                ).map((I) => I.ref.current);
                gu(q, m);
              }
            }
            N.current = !1;
          }),
          onBlur: J(e.onBlur, () => v(!1))
        }
      )
    }
  );
}), hu = "RovingFocusGroupItem", pu = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...c
    } = e, l = Ue(), d = s || l, m = Iv(hu, n), f = m.currentTabStopId === d, h = du(n), { onFocusableItemAdd: p, onFocusableItemRemove: b, currentTabStopId: g } = m;
    return u.useEffect(() => {
      if (r)
        return p(), () => b();
    }, [r, p, b]), /* @__PURE__ */ a.jsx(
      ws.ItemSlot,
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
              const y = $v(x, m.orientation, m.dir);
              if (y !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let k = h().filter((M) => M.focusable).map((M) => M.ref.current);
                if (y === "last") k.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && k.reverse();
                  const M = k.indexOf(x.currentTarget);
                  k = m.loop ? zv(k, M + 1) : k.slice(M + 1);
                }
                setTimeout(() => gu(k));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
pu.displayName = hu;
var Fv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Lv(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $v(e, t, n) {
  const r = Lv(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Fv[r];
}
function gu(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function zv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Yv = mu, Bv = pu, ks = ["Enter", " "], Hv = ["ArrowDown", "PageUp", "Home"], xu = ["ArrowUp", "PageDown", "End"], Gv = [...Hv, ...xu], Vv = {
  ltr: [...ks, "ArrowRight"],
  rtl: [...ks, "ArrowLeft"]
}, Uv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ur = "Menu", [Zn, qv, Kv] = Wl(ur), [cn, bu] = St(ur, [
  Kv,
  In,
  fu
]), dr = In(), yu = fu(), [vu, qt] = cn(ur), [Xv, fr] = cn(ur), wu = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, c = dr(t), [l, d] = u.useState(null), m = u.useRef(!1), f = mt(s), h = Yl(o);
  return u.useEffect(() => {
    const p = () => {
      m.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => m.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a.jsx(po, { ...c, children: /* @__PURE__ */ a.jsx(
    vu,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ a.jsx(
        Xv,
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
wu.displayName = ur;
var Qv = "MenuAnchor", ma = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = dr(n);
    return /* @__PURE__ */ a.jsx(go, { ...o, ...r, ref: t });
  }
);
ma.displayName = Qv;
var ha = "MenuPortal", [Zv, ku] = cn(ha, {
  forceMount: void 0
}), Cu = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = qt(ha, t);
  return /* @__PURE__ */ a.jsx(Zv, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(rt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(ar, { asChild: !0, container: o, children: r }) }) });
};
Cu.displayName = ha;
var it = "MenuContent", [Jv, pa] = cn(it), Mu = u.forwardRef(
  (e, t) => {
    const n = ku(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = qt(it, e.__scopeMenu), i = fr(it, e.__scopeMenu);
    return /* @__PURE__ */ a.jsx(Zn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(rt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Zn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ a.jsx(ew, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(tw, { ...o, ref: t }) }) }) });
  }
), ew = u.forwardRef(
  (e, t) => {
    const n = qt(it, e.__scopeMenu), r = u.useRef(null), o = je(t, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Bs(s);
    }, []), /* @__PURE__ */ a.jsx(
      ga,
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
), tw = u.forwardRef((e, t) => {
  const n = qt(it, e.__scopeMenu);
  return /* @__PURE__ */ a.jsx(
    ga,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), nw = /* @__PURE__ */ En("MenuContent.ScrollLock"), ga = u.forwardRef(
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
    } = e, x = qt(it, n), y = fr(it, n), v = dr(n), k = yu(n), M = qv(n), [N, w] = u.useState(null), E = u.useRef(null), D = je(t, E, x.onContentChange), T = u.useRef(0), P = u.useRef(""), F = u.useRef(0), L = u.useRef(null), H = u.useRef("right"), G = u.useRef(0), q = b ? ao : u.Fragment, I = b ? { as: nw, allowPinchZoom: !0 } : void 0, O = (R) => {
      const z = P.current + R, C = M().filter(($) => !$.disabled), S = document.activeElement, W = C.find(($) => $.ref.current === S)?.textValue, Y = C.map(($) => $.textValue), B = hw(Y, z, W), U = C.find(($) => $.textValue === B)?.ref.current;
      (function $(Z) {
        P.current = Z, window.clearTimeout(T.current), Z !== "" && (T.current = window.setTimeout(() => $(""), 1e3));
      })(z), U && setTimeout(() => U.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), Ys();
    const _ = u.useCallback((R) => H.current === L.current?.side && gw(R, L.current?.area), []);
    return /* @__PURE__ */ a.jsx(
      Jv,
      {
        scope: n,
        searchRef: P,
        onItemEnter: u.useCallback(
          (R) => {
            _(R) && R.preventDefault();
          },
          [_]
        ),
        onItemLeave: u.useCallback(
          (R) => {
            _(R) || (E.current?.focus(), w(null));
          },
          [_]
        ),
        onTriggerLeave: u.useCallback(
          (R) => {
            _(R) && R.preventDefault();
          },
          [_]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: u.useCallback((R) => {
          L.current = R;
        }, []),
        children: /* @__PURE__ */ a.jsx(q, { ...I, children: /* @__PURE__ */ a.jsx(
          oo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: J(s, (R) => {
              R.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ a.jsx(
              sr,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: p,
                children: /* @__PURE__ */ a.jsx(
                  Yv,
                  {
                    asChild: !0,
                    ...k,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: w,
                    onEntryFocus: J(l, (R) => {
                      y.isUsingKeyboardRef.current || R.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a.jsx(
                      da,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": zu(x.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...v,
                        ...g,
                        ref: D,
                        style: { outline: "none", ...g.style },
                        onKeyDown: J(g.onKeyDown, (R) => {
                          const C = R.target.closest("[data-radix-menu-content]") === R.currentTarget, S = R.ctrlKey || R.altKey || R.metaKey, W = R.key.length === 1;
                          C && (R.key === "Tab" && R.preventDefault(), !S && W && O(R.key));
                          const Y = E.current;
                          if (R.target !== Y || !Gv.includes(R.key)) return;
                          R.preventDefault();
                          const U = M().filter(($) => !$.disabled).map(($) => $.ref.current);
                          xu.includes(R.key) && U.reverse(), fw(U);
                        }),
                        onBlur: J(e.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(T.current), P.current = "");
                        }),
                        onPointerMove: J(
                          e.onPointerMove,
                          Jn((R) => {
                            const z = R.target, C = G.current !== R.clientX;
                            if (R.currentTarget.contains(z) && C) {
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
Mu.displayName = it;
var rw = "MenuGroup", xa = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a.jsx(ke.div, { role: "group", ...r, ref: t });
  }
);
xa.displayName = rw;
var ow = "MenuLabel", Nu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a.jsx(ke.div, { ...r, ref: t });
  }
);
Nu.displayName = ow;
var Xr = "MenuItem", Di = "menu.itemSelect", xo = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = u.useRef(null), i = fr(Xr, e.__scopeMenu), c = pa(Xr, e.__scopeMenu), l = je(t, s), d = u.useRef(!1), m = () => {
      const f = s.current;
      if (!n && f) {
        const h = new CustomEvent(Di, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Di, (p) => r?.(p), { once: !0 }), Wc(f, h), h.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ a.jsx(
      Eu,
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
          n || h && f.key === " " || ks.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
xo.displayName = Xr;
var Eu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = pa(Xr, n), c = yu(n), l = u.useRef(null), d = je(t, l), [m, f] = u.useState(!1), [h, p] = u.useState("");
    return u.useEffect(() => {
      const b = l.current;
      b && p((b.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ a.jsx(
      Zn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ a.jsx(Bv, { asChild: !0, ...c, focusable: !r, children: /* @__PURE__ */ a.jsx(
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
              Jn((b) => {
                r ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: J(
              e.onPointerLeave,
              Jn((b) => i.onItemLeave(b))
            ),
            onFocus: J(e.onFocus, () => f(!0)),
            onBlur: J(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), sw = "MenuCheckboxItem", Du = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a.jsx(_u, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a.jsx(
      xo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Qr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": va(n),
        onSelect: J(
          o.onSelect,
          () => r?.(Qr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Du.displayName = sw;
var Su = "MenuRadioGroup", [aw, iw] = cn(
  Su,
  { value: void 0, onValueChange: () => {
  } }
), ju = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = mt(r);
    return /* @__PURE__ */ a.jsx(aw, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ a.jsx(xa, { ...o, ref: t }) });
  }
);
ju.displayName = Su;
var Tu = "MenuRadioItem", Ou = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = iw(Tu, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ a.jsx(_u, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ a.jsx(
      xo,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": va(s),
        onSelect: J(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ou.displayName = Tu;
var ba = "MenuItemIndicator", [_u, cw] = cn(
  ba,
  { checked: !1 }
), Ru = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = cw(ba, n);
    return /* @__PURE__ */ a.jsx(
      rt,
      {
        present: r || Qr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ a.jsx(
          ke.span,
          {
            ...o,
            ref: t,
            "data-state": va(s.checked)
          }
        )
      }
    );
  }
);
Ru.displayName = ba;
var lw = "MenuSeparator", Pu = u.forwardRef(
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
Pu.displayName = lw;
var uw = "MenuArrow", Au = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = dr(n);
    return /* @__PURE__ */ a.jsx(fa, { ...o, ...r, ref: t });
  }
);
Au.displayName = uw;
var ya = "MenuSub", [dw, Iu] = cn(ya), Wu = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = qt(ya, t), i = dr(t), [c, l] = u.useState(null), [d, m] = u.useState(null), f = mt(o);
  return u.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ a.jsx(po, { ...i, children: /* @__PURE__ */ a.jsx(
    vu,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: d,
      onContentChange: m,
      children: /* @__PURE__ */ a.jsx(
        dw,
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
Wu.displayName = ya;
var Gn = "MenuSubTrigger", Fu = u.forwardRef(
  (e, t) => {
    const n = qt(Gn, e.__scopeMenu), r = fr(Gn, e.__scopeMenu), o = Iu(Gn, e.__scopeMenu), s = pa(Gn, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: e.__scopeMenu }, m = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => m, [m]), u.useEffect(() => {
      const f = c.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [c, l]), /* @__PURE__ */ a.jsx(ma, { asChild: !0, ...d, children: /* @__PURE__ */ a.jsx(
      Eu,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": zu(n.open),
        ...e,
        ref: Et(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: J(
          e.onPointerMove,
          Jn((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), m();
            }, 100));
          })
        ),
        onPointerLeave: J(
          e.onPointerLeave,
          Jn((f) => {
            m();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const p = n.content?.dataset.side, b = p === "right", g = b ? -5 : 5, x = h[b ? "left" : "right"], y = h[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + g, y: f.clientY },
                  { x, y: h.top },
                  { x: y, y: h.top },
                  { x: y, y: h.bottom },
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
          e.disabled || h && f.key === " " || Vv[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Fu.displayName = Gn;
var Lu = "MenuSubContent", $u = u.forwardRef(
  (e, t) => {
    const n = ku(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = qt(it, e.__scopeMenu), i = fr(it, e.__scopeMenu), c = Iu(Lu, e.__scopeMenu), l = u.useRef(null), d = je(t, l);
    return /* @__PURE__ */ a.jsx(Zn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(rt, { present: r || s.open, children: /* @__PURE__ */ a.jsx(Zn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a.jsx(
      ga,
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
          const f = m.currentTarget.contains(m.target), h = Uv[i.dir].includes(m.key);
          f && h && (s.onOpenChange(!1), c.trigger?.focus(), m.preventDefault());
        })
      }
    ) }) }) });
  }
);
$u.displayName = Lu;
function zu(e) {
  return e ? "open" : "closed";
}
function Qr(e) {
  return e === "indeterminate";
}
function va(e) {
  return Qr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fw(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function mw(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function hw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = mw(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((d) => d !== n));
  const l = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function pw(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], d = c.x, m = c.y, f = l.x, h = l.y;
    m > r != h > r && n < (f - d) * (r - m) / (h - m) + d && (o = !o);
  }
  return o;
}
function gw(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return pw(n, t);
}
function Jn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var xw = wu, bw = ma, yw = Cu, vw = Mu, ww = xa, kw = Nu, Cw = xo, Mw = Du, Nw = ju, Ew = Ou, Dw = Ru, Sw = Pu, jw = Au, Tw = Wu, Ow = Fu, _w = $u, bo = "DropdownMenu", [Rw] = St(
  bo,
  [bu]
), Ke = bu(), [Pw, Yu] = Rw(bo), Bu = (e) => {
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
    caller: bo
  });
  return /* @__PURE__ */ a.jsx(
    Pw,
    {
      scope: t,
      triggerId: Ue(),
      triggerRef: d,
      contentId: Ue(),
      open: m,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((h) => !h), [f]),
      modal: c,
      children: /* @__PURE__ */ a.jsx(xw, { ...l, open: m, onOpenChange: f, dir: r, modal: c, children: n })
    }
  );
};
Bu.displayName = bo;
var Hu = "DropdownMenuTrigger", Gu = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Yu(Hu, n), i = Ke(n);
    return /* @__PURE__ */ a.jsx(bw, { asChild: !0, ...i, children: /* @__PURE__ */ a.jsx(
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
Gu.displayName = Hu;
var Aw = "DropdownMenuPortal", Vu = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ke(t);
  return /* @__PURE__ */ a.jsx(yw, { ...r, ...n });
};
Vu.displayName = Aw;
var Uu = "DropdownMenuContent", qu = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Yu(Uu, n), s = Ke(n), i = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      vw,
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
qu.displayName = Uu;
var Iw = "DropdownMenuGroup", Ww = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(ww, { ...o, ...r, ref: t });
  }
);
Ww.displayName = Iw;
var Fw = "DropdownMenuLabel", Lw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(kw, { ...o, ...r, ref: t });
  }
);
Lw.displayName = Fw;
var $w = "DropdownMenuItem", Ku = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(Cw, { ...o, ...r, ref: t });
  }
);
Ku.displayName = $w;
var zw = "DropdownMenuCheckboxItem", Xu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Mw, { ...o, ...r, ref: t });
});
Xu.displayName = zw;
var Yw = "DropdownMenuRadioGroup", Bw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Nw, { ...o, ...r, ref: t });
});
Bw.displayName = Yw;
var Hw = "DropdownMenuRadioItem", Gw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Ew, { ...o, ...r, ref: t });
});
Gw.displayName = Hw;
var Vw = "DropdownMenuItemIndicator", Qu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Dw, { ...o, ...r, ref: t });
});
Qu.displayName = Vw;
var Uw = "DropdownMenuSeparator", Zu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Sw, { ...o, ...r, ref: t });
});
Zu.displayName = Uw;
var qw = "DropdownMenuArrow", Kw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
    return /* @__PURE__ */ a.jsx(jw, { ...o, ...r, ref: t });
  }
);
Kw.displayName = qw;
var Xw = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = Ke(t), [c, l] = Ut({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ a.jsx(Tw, { ...i, open: c, onOpenChange: l, children: n });
}, Qw = "DropdownMenuSubTrigger", Ju = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(Ow, { ...o, ...r, ref: t });
});
Ju.displayName = Qw;
var Zw = "DropdownMenuSubContent", ed = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ke(n);
  return /* @__PURE__ */ a.jsx(
    _w,
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
ed.displayName = Zw;
var Jw = Bu, e0 = Gu, t0 = Vu, n0 = qu, r0 = Ku, o0 = Xu, s0 = Qu, a0 = Zu, i0 = Xw, c0 = Ju, l0 = ed, yo = "Popover", [td] = St(yo, [
  In
]), mr = In(), [u0, Kt] = td(yo), nd = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !1
  } = e, c = mr(t), l = u.useRef(null), [d, m] = u.useState(!1), [f, h] = Ut({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: yo
  });
  return /* @__PURE__ */ a.jsx(po, { ...c, children: /* @__PURE__ */ a.jsx(
    u0,
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
nd.displayName = yo;
var rd = "PopoverAnchor", od = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(rd, n), s = mr(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: c } = o;
    return u.useEffect(() => (i(), () => c()), [i, c]), /* @__PURE__ */ a.jsx(go, { ...s, ...r, ref: t });
  }
);
od.displayName = rd;
var sd = "PopoverTrigger", ad = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(sd, n), s = mr(n), i = je(t, o.triggerRef), c = /* @__PURE__ */ a.jsx(
      ke.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": dd(o.open),
        ...r,
        ref: i,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? c : /* @__PURE__ */ a.jsx(go, { asChild: !0, ...s, children: c });
  }
);
ad.displayName = sd;
var wa = "PopoverPortal", [d0, f0] = td(wa, {
  forceMount: void 0
}), id = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = Kt(wa, t);
  return /* @__PURE__ */ a.jsx(d0, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(rt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(ar, { asChild: !0, container: o, children: r }) }) });
};
id.displayName = wa;
var Sn = "PopoverContent", cd = u.forwardRef(
  (e, t) => {
    const n = f0(Sn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = Kt(Sn, e.__scopePopover);
    return /* @__PURE__ */ a.jsx(rt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ a.jsx(h0, { ...o, ref: t }) : /* @__PURE__ */ a.jsx(p0, { ...o, ref: t }) });
  }
);
cd.displayName = Sn;
var m0 = /* @__PURE__ */ En("PopoverContent.RemoveScroll"), h0 = u.forwardRef(
  (e, t) => {
    const n = Kt(Sn, e.__scopePopover), r = u.useRef(null), o = je(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Bs(i);
    }, []), /* @__PURE__ */ a.jsx(ao, { as: m0, allowPinchZoom: !0, children: /* @__PURE__ */ a.jsx(
      ld,
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
), p0 = u.forwardRef(
  (e, t) => {
    const n = Kt(Sn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      ld,
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
), ld = u.forwardRef(
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
    } = e, h = Kt(Sn, n), p = mr(n);
    return Ys(), /* @__PURE__ */ a.jsx(
      oo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ a.jsx(
          sr,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: m,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ a.jsx(
              da,
              {
                "data-state": dd(h.open),
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
), ud = "PopoverClose", g0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Kt(ud, n);
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
g0.displayName = ud;
var x0 = "PopoverArrow", b0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mr(n);
    return /* @__PURE__ */ a.jsx(fa, { ...o, ...r, ref: t });
  }
);
b0.displayName = x0;
function dd(e) {
  return e ? "open" : "closed";
}
var y0 = nd, v0 = od, w0 = ad, k0 = id, C0 = cd, vo = "Switch", [M0] = St(vo), [N0, E0] = M0(vo), fd = u.forwardRef(
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
    } = e, [h, p] = u.useState(null), b = je(t, (k) => p(k)), g = u.useRef(!1), x = h ? m || !!h.closest("form") : !0, [y, v] = Ut({
      prop: o,
      defaultProp: s ?? !1,
      onChange: d,
      caller: vo
    });
    return /* @__PURE__ */ a.jsxs(N0, { scope: n, checked: y, disabled: c, children: [
      /* @__PURE__ */ a.jsx(
        ke.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": gd(y),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...f,
          ref: b,
          onClick: J(e.onClick, (k) => {
            v((M) => !M), x && (g.current = k.isPropagationStopped(), g.current || k.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ a.jsx(
        pd,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: c,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
fd.displayName = vo;
var md = "SwitchThumb", hd = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = E0(md, n);
    return /* @__PURE__ */ a.jsx(
      ke.span,
      {
        "data-state": gd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
hd.displayName = md;
var D0 = "SwitchBubbleInput", pd = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const i = u.useRef(null), c = je(i, s), l = my(n), d = Bl(t);
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
pd.displayName = D0;
function gd(e) {
  return e ? "checked" : "unchecked";
}
var S0 = fd, j0 = hd, [wo] = St("Tooltip", [
  In
]), ko = In(), xd = "TooltipProvider", T0 = 700, Cs = "tooltip.open", [O0, ka] = wo(xd), bd = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = T0,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = u.useRef(!0), c = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ a.jsx(
    O0,
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
bd.displayName = xd;
var er = "Tooltip", [_0, hr] = wo(er), yd = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = ka(er, e.__scopeTooltip), d = ko(t), [m, f] = u.useState(null), h = Ue(), p = u.useRef(0), b = i ?? l.disableHoverableContent, g = c ?? l.delayDuration, x = u.useRef(!1), [y, v] = Ut({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Cs))) : l.onClose(), s?.(E);
    },
    caller: er
  }), k = u.useMemo(() => y ? x.current ? "delayed-open" : "instant-open" : "closed", [y]), M = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, v(!0);
  }, [v]), N = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, v(!1);
  }, [v]), w = u.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, v(!0), p.current = 0;
    }, g);
  }, [g, v]);
  return u.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ a.jsx(po, { ...d, children: /* @__PURE__ */ a.jsx(
    _0,
    {
      scope: t,
      contentId: h,
      open: y,
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
yd.displayName = er;
var Ms = "TooltipTrigger", vd = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = hr(Ms, n), s = ka(Ms, n), i = ko(n), c = u.useRef(null), l = je(t, c, o.onTriggerChange), d = u.useRef(!1), m = u.useRef(!1), f = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ a.jsx(go, { asChild: !0, ...i, children: /* @__PURE__ */ a.jsx(
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
vd.displayName = Ms;
var Ca = "TooltipPortal", [R0, P0] = wo(Ca, {
  forceMount: void 0
}), wd = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = hr(Ca, t);
  return /* @__PURE__ */ a.jsx(R0, { scope: t, forceMount: n, children: /* @__PURE__ */ a.jsx(rt, { present: n || s.open, children: /* @__PURE__ */ a.jsx(ar, { asChild: !0, container: o, children: r }) }) });
};
wd.displayName = Ca;
var jn = "TooltipContent", kd = u.forwardRef(
  (e, t) => {
    const n = P0(jn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = hr(jn, e.__scopeTooltip);
    return /* @__PURE__ */ a.jsx(rt, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ a.jsx(Cd, { side: o, ...s, ref: t }) : /* @__PURE__ */ a.jsx(A0, { side: o, ...s, ref: t }) });
  }
), A0 = u.forwardRef((e, t) => {
  const n = hr(jn, e.__scopeTooltip), r = ka(jn, e.__scopeTooltip), o = u.useRef(null), s = je(t, o), [i, c] = u.useState(null), { trigger: l, onClose: d } = n, m = o.current, { onPointerInTransitChange: f } = r, h = u.useCallback(() => {
    c(null), f(!1);
  }, [f]), p = u.useCallback(
    (b, g) => {
      const x = b.currentTarget, y = { x: b.clientX, y: b.clientY }, v = L0(y, x.getBoundingClientRect()), k = $0(y, v), M = z0(g.getBoundingClientRect()), N = B0([...k, ...M]);
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
        const x = g.target, y = { x: g.clientX, y: g.clientY }, v = l?.contains(x) || m?.contains(x), k = !Y0(y, i);
        v ? h() : k && (h(), d());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, m, i, d, h]), /* @__PURE__ */ a.jsx(Cd, { ...e, ref: s });
}), [I0, W0] = wo(er, { isInside: !1 }), F0 = /* @__PURE__ */ Cg("TooltipContent"), Cd = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...c
    } = e, l = hr(jn, n), d = ko(n), { onClose: m } = l;
    return u.useEffect(() => (document.addEventListener(Cs, m), () => document.removeEventListener(Cs, m)), [m]), u.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          h.target?.contains(l.trigger) && m();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, m]), /* @__PURE__ */ a.jsx(
      sr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ a.jsxs(
          da,
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
              /* @__PURE__ */ a.jsx(F0, { children: r }),
              /* @__PURE__ */ a.jsx(I0, { scope: n, isInside: !0, children: /* @__PURE__ */ a.jsx(ty, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
kd.displayName = jn;
var Md = "TooltipArrow", Nd = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ko(n);
    return W0(
      Md,
      n
    ).isInside ? null : /* @__PURE__ */ a.jsx(fa, { ...o, ...r, ref: t });
  }
);
Nd.displayName = Md;
function L0(e, t) {
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
function $0(e, t, n = 5) {
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
function z0(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Y0(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], d = c.x, m = c.y, f = l.x, h = l.y;
    m > r != h > r && n < (f - d) * (r - m) / (h - m) + d && (o = !o);
  }
  return o;
}
function B0(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), H0(t);
}
function H0(e) {
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
var G0 = bd, V0 = yd, U0 = vd, q0 = wd, K0 = kd, X0 = Nd;
const Si = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ji = Cl, Ed = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return ji(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((d) => {
    const m = n?.[d], f = s?.[d];
    if (m === null) return null;
    const h = Si(m) || Si(f);
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
  return ji(e, i, l, n?.class, n?.className);
}, vn = Ed(
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
function Pe({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  ...o
}) {
  const s = r ? Qs : "button";
  return /* @__PURE__ */ a.jsx(
    s,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: j(vn({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
function Q0({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Us, { "data-slot": "dialog", ...e });
}
function Z0({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(qs, { "data-slot": "dialog-portal", ...e });
}
function J0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Ks,
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
function ek({
  className: e,
  children: t,
  showCloseButton: n = !0,
  overlayClassName: r,
  ...o
}) {
  return /* @__PURE__ */ a.jsxs(Z0, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a.jsx(J0, { className: r }),
    /* @__PURE__ */ a.jsxs(
      Xs,
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
            fl,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a.jsx(ro, {}),
                /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function tk({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: j("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function nk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ul,
    {
      "data-slot": "dialog-title",
      className: j("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function rk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    dl,
    {
      "data-slot": "dialog-description",
      className: j("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function ok({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    On,
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
function sk({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: r,
  overlayClassName: o,
  showCloseButton: s = !0,
  ...i
}) {
  return /* @__PURE__ */ a.jsxs(Q0, { ...i, children: [
    /* @__PURE__ */ a.jsxs(tk, { className: "sr-only", children: [
      /* @__PURE__ */ a.jsx(nk, { children: e }),
      /* @__PURE__ */ a.jsx(rk, { children: t })
    ] }),
    /* @__PURE__ */ a.jsx(
      ek,
      {
        className: j("overflow-hidden p-0", r),
        overlayClassName: o,
        showCloseButton: s,
        children: /* @__PURE__ */ a.jsx(ok, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function ak({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a.jsx(Gp, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a.jsx(
          On.Input,
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
function ik({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    On.List,
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
function ck({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    On.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function _t({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    On.Group,
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
    On.Item,
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
function lk({
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
    sk,
    {
      open: e,
      onOpenChange: t,
      title: "Command Menu",
      description: "Search for a command to run...",
      showCloseButton: !1,
      className: "dark:bg-popover/60 dark:backdrop-blur-xl dark:border-border/50 dark:[&_[data-slot=command]]:bg-transparent [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-2",
      overlayClassName: "dark:bg-black/30",
      children: [
        /* @__PURE__ */ a.jsx(ak, { placeholder: "Type a command..." }),
        /* @__PURE__ */ a.jsxs(ik, { children: [
          /* @__PURE__ */ a.jsx(ck, { children: "No results found." }),
          /* @__PURE__ */ a.jsxs(_t, { heading: "Calendar", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "Navigation", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "Time zones", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Travel to time zone...",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Show additional time zones...",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(_t, { heading: "App", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "View", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "Settings & help", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "Accounts", children: [
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
          /* @__PURE__ */ a.jsxs(_t, { heading: "CalendarCN", children: [
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "Check for update",
              Ce
            ] }),
            /* @__PURE__ */ a.jsxs(ce, { disabled: !0, children: [
              "About CalendarCN",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(_t, { heading: "Panels", children: /* @__PURE__ */ a.jsxs(ce, { onSelect: () => d(c), children: [
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
const Ko = 768;
function uk() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Ko - 1}px)`), r = () => {
      t(window.innerWidth < Ko);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Ko), () => n.removeEventListener("change", r);
  }, []), !!e;
}
var dk = "Separator", Ti = "horizontal", fk = ["horizontal", "vertical"], Dd = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Ti, ...o } = e, s = mk(r) ? r : Ti, c = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ a.jsx(
    lt.div,
    {
      "data-orientation": s,
      ...c,
      ...o,
      ref: t
    }
  );
});
Dd.displayName = dk;
function mk(e) {
  return fk.includes(e);
}
var hk = Dd;
function Sd({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    hk,
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
function pk({ ...e }) {
  return /* @__PURE__ */ a.jsx(Us, { "data-slot": "sheet", ...e });
}
function gk({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(qs, { "data-slot": "sheet-portal", ...e });
}
function xk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Ks,
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
function bk({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(gk, { children: [
    /* @__PURE__ */ a.jsx(xk, {}),
    /* @__PURE__ */ a.jsxs(
      Xs,
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
          /* @__PURE__ */ a.jsxs(fl, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a.jsx(ro, { className: "size-4" }),
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function yk({ className: e, ...t }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: j("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function vk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    ul,
    {
      "data-slot": "sheet-title",
      className: j("text-foreground font-semibold", e),
      ...t
    }
  );
}
function wk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    dl,
    {
      "data-slot": "sheet-description",
      className: j("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function jd({
  delayDuration: e = 1e3,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    G0,
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
  return /* @__PURE__ */ a.jsx(jd, { children: /* @__PURE__ */ a.jsx(V0, { "data-slot": "tooltip", ...e }) });
}
function Wt({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(U0, { "data-slot": "tooltip-trigger", ...e });
}
function Ft({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(q0, { children: /* @__PURE__ */ a.jsxs(
    K0,
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
        /* @__PURE__ */ a.jsx(X0, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const kk = "sidebar_state", Ck = 3600 * 24 * 7, Mk = "18rem", Nk = "18rem", Ek = "3rem", Dk = "b", Td = u.createContext(null);
function Co() {
  const e = u.useContext(Td);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Sk({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const c = uk(), [l, d] = u.useState(!1), [m, f] = u.useState(e), h = t ?? m, p = u.useCallback(
    (y) => {
      const v = typeof y == "function" ? y(h) : y;
      n ? n(v) : f(v), document.cookie = `${kk}=${v}; path=/; max-age=${Ck}`;
    },
    [n, h]
  ), b = u.useCallback(() => c ? d((y) => !y) : p((y) => !y), [c, p, d]);
  u.useEffect(() => {
    const y = (v) => {
      v.key === Dk && (v.metaKey || v.ctrlKey) && (v.preventDefault(), b());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
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
  return /* @__PURE__ */ a.jsx(Td.Provider, { value: x, children: /* @__PURE__ */ a.jsx(jd, { delayDuration: 1e3, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Mk,
        "--sidebar-width-icon": Ek,
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
function jk({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  ...s
}) {
  const { isMobile: i, state: c, openMobile: l, setOpenMobile: d } = Co();
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
  ) : i ? /* @__PURE__ */ a.jsx(pk, { open: l, onOpenChange: d, ...s, children: /* @__PURE__ */ a.jsxs(
    bk,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": Nk
      },
      side: e,
      children: [
        /* @__PURE__ */ a.jsxs(yk, { className: "sr-only", children: [
          /* @__PURE__ */ a.jsx(vk, { children: "Sidebar" }),
          /* @__PURE__ */ a.jsx(wk, { children: "Displays the mobile sidebar." })
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
function Tk({ className: e, ...t }) {
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
function Ok({ className: e, ...t }) {
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
function _k({ className: e, ...t }) {
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
function Od({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    Sd,
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
function Rd({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? Qs : "div";
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
function tr({
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
function Ns({ className: e, ...t }) {
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
function Es({ className: e, ...t }) {
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
const Rk = Ed(
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
function Ds({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const c = e ? Qs : "button", { isMobile: l, state: d } = Co(), m = /* @__PURE__ */ a.jsx(
    c,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: j(Rk({ variant: n, size: r }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ a.jsxs(It, { children: [
    /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: m }),
    /* @__PURE__ */ a.jsx(
      Ft,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || l,
        ...o
      }
    )
  ] })) : m;
}
function Pd({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(y0, { "data-slot": "popover", ...e });
}
function Ad({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(w0, { "data-slot": "popover-trigger", ...e });
}
function Pk({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ a.jsx(k0, { children: /* @__PURE__ */ a.jsx(
    C0,
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
function Id({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(v0, { "data-slot": "popover-anchor", ...e });
}
function Ss({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(Jw, { "data-slot": "dropdown-menu", ...e });
}
function js({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    e0,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Ts({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ a.jsx(t0, { children: /* @__PURE__ */ a.jsx(
    n0,
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
function yt({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ a.jsx(
    r0,
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
function Xo({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(
    o0,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: j(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a.jsx(s0, { children: /* @__PURE__ */ a.jsx(Kn, { className: "size-4" }) }) }),
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
    a0,
    {
      "data-slot": "dropdown-menu-separator",
      className: j("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Sr({
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
function Oi({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(i0, { "data-slot": "dropdown-menu-sub", ...e });
}
function _i({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a.jsxs(
    c0,
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
        /* @__PURE__ */ a.jsx(or, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Ri({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    l0,
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
function Ak({
  className: e,
  size: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a.jsx(
    S0,
    {
      "data-slot": "switch",
      "data-size": t,
      className: j(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[size=xs]:h-2.5 data-[size=xs]:w-4",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a.jsx(
        j0,
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
const Ik = {
  red: "bg-event-red-border",
  orange: "bg-event-orange-border",
  yellow: "bg-event-yellow-border",
  green: "bg-event-green-border",
  blue: "bg-event-blue-border",
  purple: "bg-event-purple-border",
  gray: "bg-event-gray-border"
};
function Wk(e, t) {
  const n = zr(t, e);
  if (n < 60)
    return `${n}min`;
  const r = Math.floor(n / 60), o = n % 60;
  return o === 0 ? `${r}h` : `${r}h ${o}min`;
}
function xt(e) {
  return e.getMinutes() === 0 ? me(e, "h a") : me(e, "h:mm a");
}
function Pi(e) {
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
function st(e) {
  return me(e, "EEE MMM d");
}
function Ai(e, t) {
  const n = e.trim();
  if (n.length === 0)
    return null;
  const r = n.replace(/^[a-z]{3}\s+/i, "");
  if (r.length === 0)
    return null;
  const o = Hh(r, "MMM d", t);
  return Number.isNaN(o.getTime()) ? null : o;
}
function Fk(e) {
  return e === "public" ? "Public" : e === "private" ? "Private" : "Default visibility";
}
function jr({
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
function Lk({ timezone: e }) {
  const t = e.indexOf(" ");
  if (t === -1)
    return /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: e });
  const n = e.substring(0, t), r = e.substring(t + 1);
  return /* @__PURE__ */ a.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs", children: [
    /* @__PURE__ */ a.jsx("span", { className: "text-[#C7C5C1] dark:text-[#595959]", children: n }),
    /* @__PURE__ */ a.jsx("span", { className: "text-foreground", children: r })
  ] });
}
function $k({ recurrence: e }) {
  const t = e.indexOf(" on ");
  if (t === -1)
    return /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e });
  const n = e.substring(0, t), r = e.substring(t);
  return /* @__PURE__ */ a.jsxs("span", { className: "text-xs", children: [
    /* @__PURE__ */ a.jsx("span", { className: "text-foreground", children: n }),
    /* @__PURE__ */ a.jsx("span", { className: "text-[#C7C5C1] dark:text-[#595959]", children: r })
  ] });
}
const zk = ["Event", "Focus time", "Out of office", "Birthday"], Ii = {
  "Focus time": "Create a focus time event with the option to automatically decline meetings during this time. Available for work and school accounts.",
  "Out of office": "Create an out of office (OOO) event with the option to automatically decline meetings during this time. Available for work and school accounts.",
  Birthday: "Create a birthday event to keep track of a person's upcoming birthdays. Birthdays from your Google Contacts may appear on a separate Birthday calendar."
};
function Wi({ tooltip: e }) {
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
        /* @__PURE__ */ a.jsx(hp, { className: "size-3.5 text-white" }),
        t && Ps.createPortal(
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
function Os({ event: e, onEventChange: t, onPrevWeek: n, onNextWeek: r, headerActions: o }) {
  const s = e.color ?? "blue", [i, c] = u.useState("Event"), [l, d] = u.useState(!1), [m, f] = u.useState(!1), [h, p] = u.useState(!1), [b, g] = u.useState(e.title), x = u.useRef(null), y = u.useRef(!1), v = u.useRef(e.title);
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
    v.current = e.title;
  }, [e.title]), N = u.useCallback(() => {
    if (y.current) {
      y.current = !1;
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
        A.preventDefault(), A.stopPropagation(), y.current = !0;
        const fe = v.current;
        g(fe), t?.({ ...e, title: fe }), x.current?.blur();
      }
    },
    [e, t]
  ), [E, D] = u.useState(() => xt(e.start)), T = u.useRef(null), P = u.useRef(!1), F = u.useRef(xt(e.start));
  u.useEffect(() => {
    D(xt(e.start));
  }, [e.start]);
  const L = u.useCallback(
    (A) => {
      D(A.target.value);
    },
    []
  ), H = u.useCallback(() => {
    F.current = xt(e.start), requestAnimationFrame(() => {
      T.current?.select();
    });
  }, [e.start]), G = u.useCallback(() => {
    if (P.current) {
      P.current = !1;
      return;
    }
    const A = Pi(E);
    if (!A) {
      D(F.current);
      return;
    }
    const fe = hn(e.start, A.hours, A.minutes);
    if (fe.getTime() >= e.end.getTime()) {
      D(F.current);
      return;
    }
    D(xt(fe)), t?.({ ...e, start: fe });
  }, [E, e, t]), q = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), T.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), P.current = !0, D(F.current), T.current?.blur());
    },
    []
  ), [I, O] = u.useState(() => xt(e.end)), _ = u.useRef(null), R = u.useRef(!1), z = u.useRef(xt(e.end));
  u.useEffect(() => {
    O(xt(e.end));
  }, [e.end]);
  const C = u.useCallback(
    (A) => {
      O(A.target.value);
    },
    []
  ), S = u.useCallback(() => {
    z.current = xt(e.end), requestAnimationFrame(() => {
      _.current?.select();
    });
  }, [e.end]), W = u.useCallback(() => {
    if (R.current) {
      R.current = !1;
      return;
    }
    const A = Pi(I);
    if (!A) {
      O(z.current);
      return;
    }
    const fe = hn(e.end, A.hours, A.minutes);
    if (fe.getTime() <= e.start.getTime()) {
      O(z.current);
      return;
    }
    O(xt(fe)), t?.({ ...e, end: fe });
  }, [I, e, t]), Y = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), _.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), R.current = !0, O(z.current), _.current?.blur());
    },
    []
  ), [B, U] = u.useState(() => st(e.start)), $ = u.useRef(null), Z = u.useRef(!1), ne = u.useRef(st(e.start));
  u.useEffect(() => {
    U(st(e.start));
  }, [e.start]);
  const ue = u.useCallback(
    (A) => {
      U(A.target.value);
    },
    []
  ), $e = u.useCallback(() => {
    ne.current = st(e.start), requestAnimationFrame(() => {
      $.current?.select();
    });
  }, [e.start]), _e = u.useCallback(() => {
    if (Z.current) {
      Z.current = !1;
      return;
    }
    const A = Ai(B, e.start);
    if (!A) {
      U(ne.current);
      return;
    }
    const fe = Nn(A, e.start);
    if (fe === 0) {
      U(st(e.start));
      return;
    }
    const Xe = Ee(e.start, fe), Xt = Ee(e.end, fe);
    U(st(Xe)), t?.({ ...e, start: Xe, end: Xt });
  }, [B, e, t]), He = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), $.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), Z.current = !0, U(ne.current), $.current?.blur());
    },
    []
  ), [Ne, xe] = u.useState(() => st(e.end)), Me = u.useRef(null), Ge = u.useRef(!1), ze = u.useRef(st(e.end));
  u.useEffect(() => {
    xe(st(e.end));
  }, [e.end]);
  const Ye = u.useCallback(
    (A) => {
      xe(A.target.value);
    },
    []
  ), se = u.useCallback(() => {
    ze.current = st(e.end), requestAnimationFrame(() => {
      Me.current?.select();
    });
  }, [e.end]), Be = u.useCallback(() => {
    if (Ge.current) {
      Ge.current = !1;
      return;
    }
    const A = Ai(Ne, e.end);
    if (!A) {
      xe(ze.current);
      return;
    }
    const fe = Nn(A, e.end);
    if (fe === 0) {
      xe(st(e.end));
      return;
    }
    const Xe = Ee(e.end, fe);
    if (Xe.getTime() < e.start.getTime()) {
      xe(ze.current);
      return;
    }
    xe(st(Xe)), t?.({ ...e, end: Xe });
  }, [Ne, e, t]), Ve = u.useCallback(
    (A) => {
      if (A.key === "Enter") {
        A.preventDefault(), Me.current?.blur();
        return;
      }
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), Ge.current = !0, xe(ze.current), Me.current?.blur());
    },
    []
  ), De = u.useRef(null), Fe = u.useCallback(
    (A) => {
      if (A) {
        De.current = {
          startHours: e.start.getHours(),
          startMinutes: e.start.getMinutes(),
          endHours: e.end.getHours(),
          endMinutes: e.end.getMinutes()
        }, t?.({ ...e, isAllDay: !0 });
        return;
      }
      if (De.current) {
        const { startHours: Xt, startMinutes: Eo, endHours: Do, endMinutes: So } = De.current;
        t?.({
          ...e,
          isAllDay: !1,
          start: hn(e.start, Xt, Eo),
          end: hn(e.end, Do, So)
        }), De.current = null;
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
  ), ot = zk.filter((A) => A !== i);
  return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-3 py-3", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4", children: [
      /* @__PURE__ */ a.jsxs(Ss, { open: l, onOpenChange: (A) => {
        d(A), A && f(!1);
      }, children: [
        /* @__PURE__ */ a.jsx(js, { asChild: !0, children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: j("flex items-center gap-0.5 text-xs font-medium rounded-sm border border-transparent px-2.5 py-1.5 -ml-2.5 gap-1.5 hover:border-[#373737]", l ? "bg-[#252525] text-white" : "text-foreground"), children: [
          i,
          /* @__PURE__ */ a.jsx(Ls, { className: j("size-3.5", l ? "text-[#595959]" : "text-[#C7C5C1] dark:text-[#595959]") })
        ] }) }),
        /* @__PURE__ */ a.jsxs(Ts, { align: "start", side: "left", sideOffset: 12, alignOffset: -4, className: "min-w-[180px] bg-[#252525] border-[#303030]", onMouseLeave: () => f(!1), children: [
          /* @__PURE__ */ a.jsxs(
            yt,
            {
              className: j("group/item text-xs text-white focus:bg-[#303030] focus:text-white", !m && "bg-[#303030]"),
              onSelect: () => c(i),
              onMouseEnter: () => f(!1),
              children: [
                /* @__PURE__ */ a.jsx(Kn, { className: "size-3.5" }),
                /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: i }),
                /* @__PURE__ */ a.jsx(Wi, { tooltip: Ii[i] })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(wn, { className: "bg-[#303030]" }),
          ot.map((A) => /* @__PURE__ */ a.jsxs(
            yt,
            {
              className: "group/item text-xs text-white focus:bg-[#303030] focus:text-white pl-8",
              onSelect: () => c(A),
              onMouseEnter: () => f(!0),
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: A }),
                /* @__PURE__ */ a.jsx(Wi, { tooltip: Ii[A] })
              ]
            },
            A
          ))
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-0.5", children: [
        /* @__PURE__ */ a.jsxs(Ss, { children: [
          /* @__PURE__ */ a.jsx(js, { asChild: !0, children: /* @__PURE__ */ a.jsx(Pe, { variant: "ghost", size: "icon", className: "size-7 border border-transparent hover:border-[#242424] hover:bg-[#242424] text-[#C7C5C1] dark:text-[#595959]", children: /* @__PURE__ */ a.jsx(yp, { className: "size-4" }) }) }),
          /* @__PURE__ */ a.jsxs(Ts, { align: "start", side: "left", className: "min-w-[180px] bg-[#252525] border-[#303030]", children: [
            /* @__PURE__ */ a.jsxs(yt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(_c, { className: "size-3.5" }),
              "Cut",
              /* @__PURE__ */ a.jsx(Sr, { className: "text-white/40", children: "⌘X" })
            ] }),
            /* @__PURE__ */ a.jsxs(yt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(Rc, { className: "size-3.5" }),
              "Copy",
              /* @__PURE__ */ a.jsx(Sr, { className: "text-white/40", children: "⌘C" })
            ] }),
            /* @__PURE__ */ a.jsxs(yt, { className: "text-xs text-white focus:!bg-[#303030] focus:!text-white", children: [
              /* @__PURE__ */ a.jsx(Tc, { className: "size-3.5" }),
              "Duplicate",
              /* @__PURE__ */ a.jsx(Sr, { className: "text-white/40", children: "⌘D" })
            ] }),
            /* @__PURE__ */ a.jsx(wn, { className: "bg-[#303030]" }),
            /* @__PURE__ */ a.jsxs(yt, { className: "text-xs text-[#E56458] focus:!bg-[#DE5551] focus:!text-white focus:[&>svg]:!text-white focus:[&>[data-slot=dropdown-menu-shortcut]]:!text-white", children: [
              /* @__PURE__ */ a.jsx(Pc, { className: "size-3.5 text-[#E56458]" }),
              "Delete",
              /* @__PURE__ */ a.jsx(Sr, { className: "text-white/40 tracking-normal", children: "delete" })
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
            /* @__PURE__ */ a.jsx(gp, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: T,
                type: "text",
                value: E,
                onChange: L,
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
          onClick: e.isAllDay ? void 0 : () => _.current?.focus(),
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "mr-2 shrink-0 text-base leading-4 text-[#C7C5C1] dark:text-[#595959]", children: "→" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: _,
                type: "text",
                value: I,
                onChange: C,
                onFocus: S,
                onBlur: W,
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
            /* @__PURE__ */ a.jsx("span", { className: "shrink-0 text-[#C7C5C1] dark:text-[#595959]", children: Wk(e.start, e.end) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: j("flex items-center gap-2 -mt-2", e.start.getHours() !== 0 || e.start.getMinutes() !== 0 || e.end.getHours() !== 0 || e.end.getMinutes() !== 0 ? "ml-8" : "ml-4"), children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "mr-0 flex min-w-[6.5rem] self-start cursor-text items-center rounded-sm border border-transparent px-2 py-1.5 hover:border-[#373737] has-[:focus]:border-[#242424] has-[:focus]:bg-[#242424]",
          onClick: () => $.current?.focus(),
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: $,
              type: "text",
              value: B,
              onChange: ue,
              onFocus: $e,
              onBlur: _e,
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
              onChange: Ye,
              onFocus: se,
              onBlur: Be,
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
          onClick: () => Fe(!(e.isAllDay ?? !1)),
          children: [
            /* @__PURE__ */ a.jsx(
              Ak,
              {
                size: "xs",
                checked: e.isAllDay ?? !1,
                onCheckedChange: Fe,
                onClick: (A) => A.stopPropagation(),
                className: "data-[state=unchecked]:!bg-[#C7C5C1] dark:data-[state=unchecked]:!bg-[#595959] data-[state=checked]:!bg-[#3A85D3]"
              }
            ),
            /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: "All-day" })
          ]
        }
      ),
      !e.isAllDay && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(Ep, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsx(Lk, { timezone: e.timezone ?? "GMT-3 Sao Paulo" })
      ] }),
      e.recurrence ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(Ga, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between", children: [
          /* @__PURE__ */ a.jsx($k, { recurrence: e.recurrence }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsx(Pe, { variant: "ghost", size: "icon", className: "size-6 text-[#C7C5C1] dark:text-[#595959]", onClick: n, children: /* @__PURE__ */ a.jsx($s, { className: "size-3.5" }) }),
            /* @__PURE__ */ a.jsx(Pe, { variant: "ghost", size: "icon", className: "size-6 text-[#C7C5C1] dark:text-[#595959]", onClick: r, children: /* @__PURE__ */ a.jsx(or, { className: "size-3.5" }) })
          ] })
        ] })
      ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 px-4", children: [
        /* @__PURE__ */ a.jsx(Ga, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
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
      /* @__PURE__ */ a.jsx(jr, { icon: ng, label: "Participants and Rooms" }),
      /* @__PURE__ */ a.jsx(jr, { icon: og, label: "Conferencing" }),
      /* @__PURE__ */ a.jsx(jr, { icon: Ap, label: "AI Meeting Notes and Docs" }),
      /* @__PURE__ */ a.jsx(jr, { icon: Tp, label: "Location", value: e.location })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1 px-4", children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-xs text-[#C7C5C1] dark:text-[#595959]", children: "Description" }),
      e.description && /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e.description })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "border-border border-t" }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 px-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: j("size-3 rounded-xs", Ik[s]) }),
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs", children: e.calendarEmail ?? e.calendarId ?? "Calendar" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-1 grid grid-cols-2 pl-9", children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs font-medium capitalize", children: e.status ?? "Busy" }),
      /* @__PURE__ */ a.jsx("span", { className: "text-foreground text-xs font-medium", children: Fk(e.visibility) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-1 flex flex-col gap-3 px-4", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(op, { className: "size-4 text-[#C7C5C1] dark:text-[#595959]" }),
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
const Wd = u.createContext({
  boundary: null,
  headerHeight: 0,
  view: "week",
  boundaryRight: 0,
  headerBottom: 0
});
function Yk({
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
  return /* @__PURE__ */ a.jsx(Wd.Provider, { value: h, children: r });
}
function pr() {
  return u.useContext(Wd);
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
  const { boundary: d, headerHeight: m, view: f } = pr(), p = f === "day" ? void 0 : d ? [d] : void 0, b = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Pe,
      {
        variant: "ghost",
        size: "icon",
        className: "size-7 text-[#C7C5C1] dark:text-[#595959]",
        onClick: (g) => {
          g.stopPropagation(), r();
        },
        title: "Dock to sidebar",
        children: /* @__PURE__ */ a.jsx(zs, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Pe,
      {
        variant: "ghost",
        size: "icon",
        className: "size-7 text-[#C7C5C1] dark:text-[#595959]",
        onClick: (g) => {
          g.stopPropagation(), n();
        },
        title: "Close",
        children: /* @__PURE__ */ a.jsx(ro, { className: "size-4" })
      }
    )
  ] });
  return /* @__PURE__ */ a.jsx(
    Pk,
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
        Os,
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
const Bk = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "gray"
], Fi = {
  red: "bg-event-red-border",
  orange: "bg-event-orange-border",
  yellow: "bg-event-yellow-border",
  green: "bg-event-green-border",
  blue: "bg-event-blue-border",
  purple: "bg-event-purple-border",
  gray: "bg-event-gray-border"
}, Hk = [
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
function Tr({ children: e }) {
  return /* @__PURE__ */ a.jsx("span", { className: "ml-auto text-xs text-white/40", children: e });
}
function Qo() {
  return /* @__PURE__ */ a.jsx("div", { className: "-mx-1 my-1 h-px bg-[#303030]" });
}
function Gk({
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
function Zr({
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
  return nr(
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
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-1.5 px-2 py-1.5", children: Bk.map((h) => /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: j(
                "relative flex size-3 items-center justify-center rounded-xs",
                Fi[h]
              ),
              onClick: () => m(h),
              children: h === d && /* @__PURE__ */ a.jsx(Kn, { className: "size-2 text-white" })
            },
            h
          )) }),
          /* @__PURE__ */ a.jsx(Qo, {}),
          /* @__PURE__ */ a.jsx(
            Gk,
            {
              trigger: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx(fs, { className: "size-3.5" }),
                "Block on calendar"
              ] }),
              children: Hk.map((h) => /* @__PURE__ */ a.jsxs(u.Fragment, { children: [
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
                            Fi[p.color]
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
          /* @__PURE__ */ a.jsx(Qo, {}),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(_c, { className: "size-3.5" }),
            "Cut",
            /* @__PURE__ */ a.jsx(Tr, { children: "⌘X" })
          ] }),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(Rc, { className: "size-3.5" }),
            "Copy",
            /* @__PURE__ */ a.jsx(Tr, { children: "⌘C" })
          ] }),
          /* @__PURE__ */ a.jsxs(Bn, { children: [
            /* @__PURE__ */ a.jsx(Tc, { className: "size-3.5" }),
            "Duplicate",
            /* @__PURE__ */ a.jsx(Tr, { children: "⌘D" })
          ] }),
          /* @__PURE__ */ a.jsx(Qo, {}),
          /* @__PURE__ */ a.jsxs(Bn, { className: "text-[#E56458] hover:!bg-[#DE5551] hover:!text-white focus:!bg-[#DE5551] focus:!text-white [&:hover>svg]:!text-white [&:focus>svg]:!text-white [&:hover>.ml-auto]:!text-white [&:focus>.ml-auto]:!text-white", children: [
            /* @__PURE__ */ a.jsx(Pc, { className: "size-3.5 text-[#E56458]" }),
            "Delete",
            /* @__PURE__ */ a.jsx(Tr, { children: "delete" })
          ] })
        ]
      }
    ),
    document.body
  );
}
const Ma = {
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
function Li(e) {
  return e.getMinutes() === 0 ? me(e, "h") : me(e, "h:mm");
}
function Zo(e) {
  const t = Li(e.start), n = Li(e.end), r = me(e.end, "a"), o = me(e.start, "a");
  return o === r ? `${t}–${n} ${r}` : `${t} ${o}–${n} ${r}`;
}
function Vk(e, t, n, r) {
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
  onDockToSidebar: y,
  onClosePopover: v,
  onPrevWeek: k,
  onNextWeek: M,
  className: N
}) {
  const { event: w, segmentPosition: E = "full" } = e, D = w.color ?? "blue", T = Ma[D], P = n ?? qn(w.end), { view: F, boundaryRight: L, headerBottom: H } = pr(), G = F === "day", q = u.useRef(null), [I, O] = u.useState(null), _ = r && x === !1;
  u.useLayoutEffect(() => {
    if (!_ || !G || !q.current) {
      O(null);
      return;
    }
    const se = q.current.getBoundingClientRect();
    O({ top: se.top, height: se.height });
  }, [_, G]);
  const R = E === "start" || E === "full", z = E === "end" || E === "full", C = E === "start" || E === "full", S = E === "end" || E === "full", [W, Y] = u.useState(null), B = u.useCallback(() => {
    Y(null), g?.(!1);
  }, [g]), U = i ?? w.start, $ = c ?? w.end, Z = i && c ? { ...w, start: U, end: $ } : w, ne = {
    top: `${e.top}%`,
    height: `${e.height}%`,
    left: `${e.left}%`,
    width: `${e.width}%`,
    minHeight: "20px",
    zIndex: r ? 20 : e.column
  }, ue = i && c ? Vk(
    e,
    t,
    i,
    c
  ) : ne, _e = (i && c ? Number.parseFloat(String(ue.height)) : e.height / 100 * 24 * t) < 40;
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
                _e && "flex-row items-center gap-1"
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
                !_e && /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: j(
                      "text-[0.625rem] whitespace-nowrap",
                      T.text,
                      "dark:text-white dark:mix-blend-overlay"
                    ),
                    children: Zo(w)
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
    const se = ($.getTime() - U.getTime()) / 6e4, Be = b ?? se / 60 * t, De = h != null && f != null ? {
      position: "fixed",
      top: `${f}px`,
      left: `${h}px`,
      height: `${Be}px`,
      width: p != null ? `${p}px` : "200px",
      minHeight: "20px",
      zIndex: 30
    } : {
      top: ue.top,
      height: `${Be}px`,
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
        style: De,
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
                Be < 40 && "flex-row items-center gap-1"
              ),
              children: [
                /* @__PURE__ */ a.jsx("span", { className: "font-medium text-[0.625rem] leading-tight break-words text-white dark:text-white flex items-center gap-0.5", children: w.title }),
                Be >= 40 && /* @__PURE__ */ a.jsx("span", { className: "text-[0.625rem] whitespace-nowrap text-white dark:text-white", children: Zo(Z) })
              ]
            }
          )
        ]
      }
    );
  }
  function Ne(se) {
    const Be = se.currentTarget, Ve = Be.getBoundingClientRect(), De = se.clientY - Ve.top, Fe = Ve.height;
    if (C && S && Fe < pn * 2) {
      Be.style.cursor = "ns-resize";
      return;
    }
    if (C && De <= pn) {
      Be.style.cursor = "ns-resize";
      return;
    }
    if (S && De >= Fe - pn) {
      Be.style.cursor = "ns-resize";
      return;
    }
    Be.style.cursor = "pointer";
  }
  function xe(se) {
    se.stopPropagation();
    const Ve = se.currentTarget.getBoundingClientRect(), De = se.clientY - Ve.top, Fe = Ve.height;
    if (C && S && Fe < pn * 2) {
      const ot = De < Fe / 2 ? "top" : "bottom";
      d?.(se, w, ot);
      return;
    }
    if (C && De <= pn) {
      d?.(se, w, "top");
      return;
    }
    if (S && De >= Fe - pn) {
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
  function ze(se) {
    se.preventDefault(), se.stopPropagation(), Y({ x: se.clientX, y: se.clientY }), g?.(!0);
  }
  const Ye = /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: q,
      role: "button",
      tabIndex: 0,
      onMouseDown: xe,
      onMouseMove: Ne,
      onClick: Me,
      onKeyDown: Ge,
      onContextMenu: ze,
      className: j(
        "absolute px-2 py-1",
        R && "rounded-t-md",
        z && "rounded-b-md",
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
              z && "rounded-b-md"
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: j(
              "absolute inset-0",
              R && "rounded-t-md",
              z && "rounded-b-md",
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
              z && "rounded-bl-md",
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
              _e && "flex-row items-center gap-1"
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
              !_e && /* @__PURE__ */ a.jsx(
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
                  children: Zo(Z)
                }
              )
            ]
          }
        )
      ]
    }
  );
  return _ ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      Pd,
      {
        open: !0,
        onOpenChange: (se) => {
          se || v?.();
        },
        children: [
          /* @__PURE__ */ a.jsx(Ad, { asChild: !0, children: Ye }),
          G && nr(
            /* @__PURE__ */ a.jsx(
              Id,
              {
                className: "pointer-events-none",
                style: {
                  position: "fixed",
                  left: L,
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
              onClose: () => v?.(),
              onDockToSidebar: () => y?.(),
              onPrevWeek: k,
              onNextWeek: M,
              side: G ? "left" : "right",
              collisionPaddingTop: G ? H : void 0
            }
          )
        ]
      }
    ),
    W && /* @__PURE__ */ a.jsx(
      Zr,
      {
        event: w,
        position: W,
        onClose: B,
        onEventChange: m
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Ye,
    W && /* @__PURE__ */ a.jsx(
      Zr,
      {
        event: w,
        position: W,
        onClose: B,
        onEventChange: m
      }
    )
  ] });
}
function Uk(e) {
  return e.getMinutes() === 0 ? me(e, "h a") : me(e, "h:mm a");
}
const Or = 6;
function Na({
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
  const y = e.color ?? "blue", v = Ma[y], { view: k, boundaryRight: M, headerBottom: N } = pr(), w = k === "day", E = t ?? qn(e.end), [D, T] = u.useState(null), P = u.useCallback(() => {
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
                v.bg,
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
                v.border
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: j(
                "relative font-medium text-[0.625rem] leading-tight whitespace-nowrap",
                s && "pl-1",
                v.text,
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
          v.borderLine,
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
              className: j("absolute inset-0 rounded-sm", v.bg)
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: j(
                "absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md dark:bg-white dark:mix-blend-overlay",
                v.border
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: j(
                "relative font-medium text-[0.625rem] leading-tight whitespace-nowrap pl-1",
                v.text,
                "dark:text-white/80"
              ),
              children: e.title
            }
          )
        ]
      }
    );
  const F = e.start.getHours() !== 0 || e.start.getMinutes() !== 0;
  function L(R) {
    R.stopPropagation(), r && r(e);
  }
  function H(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), r?.(e));
  }
  function G(R) {
    const z = R.currentTarget, C = z.getBoundingClientRect(), S = R.clientX - C.left, W = C.width;
    if (s && S <= Or) {
      z.style.cursor = "ew-resize";
      return;
    }
    if (i && S >= W - Or) {
      z.style.cursor = "ew-resize";
      return;
    }
    z.style.cursor = "grab";
  }
  function q(R) {
    if (!c) return;
    const C = R.currentTarget.getBoundingClientRect(), S = R.clientX - C.left, W = C.width;
    if (s && S <= Or) {
      R.stopPropagation(), c(R, e, "left");
      return;
    }
    if (i && S >= W - Or) {
      R.stopPropagation(), c(R, e, "right");
      return;
    }
    R.stopPropagation(), c(R, e, "move");
  }
  function I(R) {
    R.preventDefault(), R.stopPropagation(), T({ x: R.clientX, y: R.clientY }), d?.(!0);
  }
  const O = n && m === !1, _ = /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "button",
      tabIndex: 0,
      onClick: L,
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
              n ? v.border : v.bg,
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
              v.border,
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
                v.text,
                "dark:text-white/80",
                E && "opacity-60"
              )
            ),
            children: e.title
          }
        ),
        F && /* @__PURE__ */ a.jsx(
          "span",
          {
            className: j(
              "relative text-[0.625rem] leading-tight whitespace-nowrap shrink-0",
              n ? "text-white dark:text-white" : j(
                v.text,
                "dark:text-white dark:mix-blend-overlay",
                E && "opacity-60"
              )
            ),
            children: Uk(e.start)
          }
        )
      ]
    }
  );
  return O ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      Pd,
      {
        open: !0,
        onOpenChange: (R) => {
          R || h?.();
        },
        children: [
          /* @__PURE__ */ a.jsx(Ad, { asChild: !0, children: _ }),
          w && nr(
            /* @__PURE__ */ a.jsx(
              Id,
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
      Zr,
      {
        event: e,
        position: D,
        onClose: P,
        onEventChange: l
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    _,
    D && /* @__PURE__ */ a.jsx(
      Zr,
      {
        event: e,
        position: D,
        onClose: P,
        onEventChange: l
      }
    )
  ] });
}
function qk(e, t) {
  const n = zr(t, e), r = Math.floor(n / 60), o = n % 60;
  return r === 0 ? `${o}min` : o === 0 ? `${r}h` : `${r}h ${o}min`;
}
function Kk(e) {
  if (e.isAllDay)
    return "All day";
  const t = me(e.start, "a"), n = me(e.end, "a"), r = me(e.end, "h:mm a").replace(":00 ", " ");
  return t === n ? `${me(e.start, "h:mm").replace(":00", "")}–${r}` : `${me(e.start, "h:mm a").replace(":00 ", " ")}–${r}`;
}
function Xk(e) {
  return ds(e) ? { label: "Today", isTodayGroup: !0 } : Uh(e) ? { label: "Tomorrow", isTodayGroup: !1 } : Sc(e, /* @__PURE__ */ new Date()) ? { label: me(e, "EEE MMM d"), isTodayGroup: !1 } : { label: me(e, "EEE MMM d, yyyy"), isTodayGroup: !1 };
}
function Qk(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const o = me(We(r.start), "yyyy-MM-dd"), s = t.get(o);
    s ? s.push(r) : t.set(o, [r]);
  }
  const n = [];
  for (const [r, o] of t) {
    const s = o[0].start, { label: i, isTodayGroup: c } = Xk(s), l = o.sort((d, m) => d.start.getTime() - m.start.getTime());
    n.push({ key: r, label: i, isToday: c, events: l });
  }
  return n.sort((r, o) => r.key.localeCompare(o.key));
}
function Zk({
  events: e = [],
  selectedEvent: t,
  onEventChange: n,
  onPrevWeek: r,
  onNextWeek: o,
  ...s
}) {
  const { toggleSidebar: i } = Co(), [c, l] = u.useState(""), [d, m] = u.useState(""), [f, h] = u.useState(null), p = u.useRef(null), b = c.trim().length > 0, g = b && c !== d;
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
  const y = u.useMemo(() => {
    if (!d.trim())
      return [];
    const w = d.trim().toLowerCase();
    return e.filter(
      (E) => E.title.toLowerCase().includes(w)
    );
  }, [e, d]), { pastGroups: v, todayGroup: k, futureGroups: M } = u.useMemo(() => {
    const w = Qk(y), D = We(/* @__PURE__ */ new Date()), T = [];
    let P = null;
    const F = [];
    for (const L of w) {
      if (L.isToday) {
        P = L;
        continue;
      }
      const H = new Date(L.key);
      if (Cc(H, D)) {
        T.push(L);
        continue;
      }
      F.push(L);
    }
    return { pastGroups: T, todayGroup: P, futureGroups: F };
  }, [y]), N = k !== null || M.length > 0;
  return /* @__PURE__ */ a.jsxs(jk, { side: "right", className: "border-l !bg-context-panel [&_[data-slot=sidebar-inner]]:!bg-context-panel", style: { "--muted-foreground": "#C7C5C1" }, ...s, children: [
    /* @__PURE__ */ a.jsx(Ok, { className: "h-14 justify-center px-4", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      t ? /* @__PURE__ */ a.jsx("div", { className: "flex-1" }) : x ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs(
          Pe,
          {
            variant: "ghost",
            className: "-ml-2 h-7 gap-2 px-2 has-[>svg]:px-2 text-xs text-[#91908F] justify-start",
            onClick: () => h(null),
            children: [
              /* @__PURE__ */ a.jsx(np, { className: "size-4" }),
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
            /* @__PURE__ */ a.jsx(ap, { className: "size-4 shrink-0 text-[#C7C5C1] dark:text-[#595959]" }),
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
              Pe,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 shrink-0 opacity-0 transition-opacity group-hover/search:opacity-100 group-has-[:focus]/search:opacity-100",
                onClick: (w) => {
                  w.stopPropagation(), l(""), p.current?.focus();
                },
                children: /* @__PURE__ */ a.jsx(ro, { className: "size-4" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(It, { children: [
        /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(
          Pe,
          {
            variant: "ghost",
            size: "icon",
            className: "size-7 shrink-0",
            onClick: i,
            children: /* @__PURE__ */ a.jsx(zs, { className: "size-4" })
          }
        ) }),
        /* @__PURE__ */ a.jsxs(Ft, { side: "bottom", children: [
          "Close context panel ",
          /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "/" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(_d, { children: t ? /* @__PURE__ */ a.jsx(Os, { event: t, onEventChange: n, onPrevWeek: r, onNextWeek: o }) : x ? /* @__PURE__ */ a.jsx(Os, { event: x, onEventChange: n, onPrevWeek: r, onNextWeek: o }) : g ? /* @__PURE__ */ a.jsx("div", { className: "px-4 pl-8 pt-8", children: /* @__PURE__ */ a.jsxs("p", { className: "text-[#ABABA9] dark:text-[#7C7C7C] text-xs", children: [
      "Searching",
      /* @__PURE__ */ a.jsx(e1, {})
    ] }) }) : b ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col pb-16", children: [
      v.map((w) => /* @__PURE__ */ a.jsx($i, { group: w, isPast: !0, onEventClick: h }, w.key)),
      /* @__PURE__ */ a.jsxs("div", { className: "px-4 pt-5", children: [
        /* @__PURE__ */ a.jsx("p", { className: "-ml-1 text-[#E8533E] text-xs font-semibold pb-3", children: "Today" }),
        k && /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: k.events.map((w) => /* @__PURE__ */ a.jsx(Ld, { event: w, onClick: h }, w.id)) }),
        !N && /* @__PURE__ */ a.jsx("p", { className: "text-[#ABABA9] dark:text-[#7F7F7F] pl-4 pt-1 text-xs", children: "No upcoming results" })
      ] }),
      M.map((w) => /* @__PURE__ */ a.jsx($i, { group: w, onEventClick: h }, w.key))
    ] }) : /* @__PURE__ */ a.jsxs(Mn, { className: "px-3 pt-6", children: [
      /* @__PURE__ */ a.jsx(Rd, { className: "text-foreground text-xs font-semibold px-0", children: "Useful shortcuts" }),
      /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
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
function $i({ group: e, isPast: t = !1, onEventClick: n }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "px-4 pt-5", children: [
    /* @__PURE__ */ a.jsx("p", { className: `-ml-1 text-xs font-semibold pb-3 ${e.isToday ? "text-[#E8533E]" : "text-foreground"}`, children: e.label }),
    /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: e.events.map((r) => /* @__PURE__ */ a.jsx(Ld, { event: r, isPast: t, onClick: n }, r.id)) })
  ] });
}
const zi = {
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
}, Jk = 300, Yi = [
  [!1, !1, !1],
  [!0, !1, !1],
  [!0, !0, !1],
  [!0, !0, !0],
  [!1, !0, !0],
  [!1, !1, !0]
];
function e1() {
  const [e, t] = u.useState(0);
  u.useEffect(() => {
    const r = setInterval(() => {
      t((o) => (o + 1) % Yi.length);
    }, Jk);
    return () => clearInterval(r);
  }, []);
  const n = Yi[e];
  return /* @__PURE__ */ a.jsx("span", { className: "ml-1 inline-flex items-center gap-0.5", children: [0, 1, 2].map((r) => /* @__PURE__ */ a.jsx(
    "span",
    {
      className: "inline-block size-0.5 rounded-full bg-[#ABABA9] dark:bg-[#7C7C7C] transition-opacity duration-200",
      style: { opacity: n[r] ? 1 : 0.1 }
    },
    r
  )) });
}
function Ld({ event: e, isPast: t = !1, onClick: n }) {
  const r = Kk(e), o = e.isAllDay ? "" : qk(e.start, e.end), s = t ? zi.past : zi.future;
  return /* @__PURE__ */ a.jsxs("div", { className: `-mx-1 flex cursor-default items-start gap-2.5 rounded-sm px-1 py-2 ${s.hover}`, onClick: () => n?.(e), children: [
    /* @__PURE__ */ a.jsx("div", { className: `-mt-1 -mb-1 w-1 shrink-0 self-stretch rounded-full ${Ma[e.color ?? "blue"].border} ${t ? "opacity-40" : ""}` }),
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
function t1({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(sy, { "data-slot": "collapsible", ...e });
}
function n1({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    $l,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function r1({
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    zl,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
const o1 = {
  red: "bg-event-red",
  orange: "bg-event-orange",
  yellow: "bg-event-yellow",
  green: "bg-event-green",
  blue: "bg-event-blue",
  purple: "bg-event-purple",
  gray: "bg-event-gray"
};
function s1({ accounts: e }) {
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
    /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsxs(t1, { defaultOpen: !0, className: "group/collapsible", children: [
      /* @__PURE__ */ a.jsx(
        Rd,
        {
          asChild: !0,
          className: "group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-xs",
          children: /* @__PURE__ */ a.jsxs(n1, { children: [
            /* @__PURE__ */ a.jsx("span", { className: "truncate", children: o.email }),
            /* @__PURE__ */ a.jsx(or, { className: "ml-auto shrink-0 opacity-0 transition-transform group-hover/label:opacity-100 group-data-[state=open]/collapsible:rotate-90" })
          ] })
        }
      ),
      /* @__PURE__ */ a.jsx(r1, { children: /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(Ns, { className: "gap-0", children: o.calendars.map((i) => {
        const c = t.has(
          `${o.email}-${i.name}`
        );
        return /* @__PURE__ */ a.jsx(
          Es,
          {
            className: "group/calendar-item",
            children: /* @__PURE__ */ a.jsxs(Ds, { className: "pr-1", children: [
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: j(
                    "size-3 shrink-0 flex items-center justify-center rounded-xs",
                    o1[i.color],
                    !c && "opacity-40"
                  ),
                  children: i.isSubscribed && /* @__PURE__ */ a.jsx(Bp, { className: "size-2 text-white" })
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
                  children: c ? /* @__PURE__ */ a.jsx(Oc, { className: "size-3.5 text-sidebar-muted-foreground" }) : /* @__PURE__ */ a.jsx(wp, { className: "size-3.5 text-sidebar-muted-foreground" })
                }
              )
            ] })
          },
          i.name
        );
      }) }) }) })
    ] }) }),
    s < e.length - 1 && /* @__PURE__ */ a.jsx(Od, { className: "mx-0" })
  ] }, o.email)) });
}
function a1(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const i1 = {}, Vn = {};
function en(e, t) {
  try {
    const r = (i1[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Vn ? Vn[r] : Bi(r, r.split(":"));
  } catch {
    if (e in Vn) return Vn[e];
    const n = e?.match(c1);
    return n ? Bi(e, n.slice(1)) : NaN;
  }
}
const c1 = /([+-]\d\d):?(\d\d)?/;
function Bi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Vn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Mt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(en(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), $d(this), _s(this)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), _s(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Mt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Hi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Hi.test(e)) return;
  const t = e.replace(Hi, "$1UTC");
  Mt.prototype[t] && (e.startsWith("get") ? Mt.prototype[e] = function() {
    return this.internal[t]();
  } : (Mt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), l1(this), +this;
  }, Mt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), _s(this), +this;
  }));
});
function _s(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-en(e.timeZone, e) * 60));
}
function l1(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), $d(e);
}
function $d(e) {
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
  const h = en(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, x = p !== n, y = g - l;
  if (x && y) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const v = en(e.timeZone, e), k = v > 0 ? Math.floor(v) : Math.ceil(v), M = p - k;
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
    return `${t} GMT${n}${r}${o} (${a1(this.timeZone, this)})`;
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
const Gi = 5, u1 = 4;
function d1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Gi * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Gi : u1;
}
function zd(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function f1(e, t) {
  const n = zd(e, t), r = d1(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Yd = {
  ...Jt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, c) => me(i, c, { locale: Jt, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => me(o, s, { locale: Jt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, c) => me(i, c, { locale: Jt, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => me(o, s, { locale: Jt, ...t }), r(e, "cccc");
    }
  }
};
class nt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? qe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new qe(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : Ee(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : mc(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : Un(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : $f(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Nn(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : xc(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : qf(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Qf(r), s = new Set(o.map((c) => this.getYear(c)));
      if (s.size === o.length)
        return o;
      const i = [];
      return s.forEach((c) => {
        i.push(new Date(c, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : f1(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Zf(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Uf(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : yc(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Xf(r), this.format = (r, o, s) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : me(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : no(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Um(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : qm(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : rr(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Km(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : Cc(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : gc(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Se(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Vh(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Sc(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Yf(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Bf(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : qh(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : Kh(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : zd(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : We(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : tn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Kf(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : tt(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : bc(r), this.options = { locale: Yd, ...t }, this.overrides = n;
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
    return t && nt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && nt.yearFirstLocales.has(s))
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
nt.yearFirstLocales = /* @__PURE__ */ new Set([
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
const Tt = new nt();
class Bd {
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
class m1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class h1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function p1(e) {
  return V.createElement("button", { ...e });
}
function g1(e) {
  return V.createElement("span", { ...e });
}
function x1(e) {
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
function b1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return V.createElement("td", { ...r });
}
function y1(e) {
  const { day: t, modifiers: n, ...r } = e, o = V.useRef(null);
  return V.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), V.createElement("button", { ref: o, ...r });
}
var Q;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Q || (Q = {}));
var Te;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Te || (Te = {}));
var ft;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(ft || (ft = {}));
var Ze;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ze || (Ze = {}));
function v1(e) {
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
function w1(e) {
  return V.createElement("div", { ...e });
}
function k1(e) {
  return V.createElement("div", { ...e });
}
function C1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r }, e.children);
}
function M1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r });
}
function N1(e) {
  return V.createElement("table", { ...e });
}
function E1(e) {
  return V.createElement("div", { ...e });
}
const Hd = jf(void 0);
function gr() {
  const e = Tf(Hd);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function D1(e) {
  const { components: t } = gr();
  return V.createElement(t.Dropdown, { ...e });
}
function S1(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: i, classNames: c, labels: { labelPrevious: l, labelNext: d } } = gr(), m = we((h) => {
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
function j1(e) {
  const { components: t } = gr();
  return V.createElement(t.Button, { ...e });
}
function T1(e) {
  return V.createElement("option", { ...e });
}
function O1(e) {
  const { components: t } = gr();
  return V.createElement(t.Button, { ...e });
}
function _1(e) {
  const { rootRef: t, ...n } = e;
  return V.createElement("div", { ...n, ref: t });
}
function R1(e) {
  return V.createElement("select", { ...e });
}
function P1(e) {
  const { week: t, ...n } = e;
  return V.createElement("tr", { ...n });
}
function A1(e) {
  return V.createElement("th", { ...e });
}
function I1(e) {
  return V.createElement(
    "thead",
    { "aria-hidden": !0 },
    V.createElement("tr", { ...e })
  );
}
function W1(e) {
  const { week: t, ...n } = e;
  return V.createElement("th", { ...n });
}
function F1(e) {
  return V.createElement("th", { ...e });
}
function L1(e) {
  return V.createElement("tbody", { ...e });
}
function $1(e) {
  const { components: t } = gr();
  return V.createElement(t.Dropdown, { ...e });
}
const z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: p1,
  CaptionLabel: g1,
  Chevron: x1,
  Day: b1,
  DayButton: y1,
  Dropdown: v1,
  DropdownNav: w1,
  Footer: k1,
  Month: C1,
  MonthCaption: M1,
  MonthGrid: N1,
  Months: E1,
  MonthsDropdown: D1,
  Nav: S1,
  NextMonthButton: j1,
  Option: T1,
  PreviousMonthButton: O1,
  Root: _1,
  Select: R1,
  Week: P1,
  WeekNumber: W1,
  WeekNumberHeader: F1,
  Weekday: A1,
  Weekdays: I1,
  Weeks: L1,
  YearsDropdown: $1
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, t, n = !1, r = Tt) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: i, isSameDay: c } = r;
  return o && s ? (i(s, o) < 0 && ([o, s] = [s, o]), i(t, o) >= (n ? 1 : 0) && i(s, t) >= (n ? 1 : 0)) : !n && s ? c(s, t) : !n && o ? c(o, t) : !1;
}
function Ea(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Mo(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Da(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Sa(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Gd(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Vd(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function At(e, t, n = Tt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: i } = n;
  return r.some((c) => {
    if (typeof c == "boolean")
      return c;
    if (n.isDate(c))
      return o(e, c);
    if (Vd(c, n))
      return c.some((l) => o(e, l));
    if (Mo(c))
      return Pt(c, e, !1, n);
    if (Gd(c))
      return Array.isArray(c.dayOfWeek) ? c.dayOfWeek.includes(e.getDay()) : c.dayOfWeek === e.getDay();
    if (Ea(c)) {
      const l = s(c.before, e), d = s(c.after, e), m = l > 0, f = d < 0;
      return i(c.before, c.after) ? f && m : m || f;
    }
    return Da(c) ? s(e, c.after) > 0 : Sa(c) ? s(c.before, e) > 0 : typeof c == "function" ? c(e) : !1;
  });
}
function Y1(e, t, n, r, o) {
  const { disabled: s, hidden: i, modifiers: c, showOutsideDays: l, broadcastCalendar: d, today: m = o.today() } = t, { isSameDay: f, isSameMonth: h, startOfMonth: p, isBefore: b, endOfMonth: g, isAfter: x } = o, y = n && p(n), v = r && g(r), k = {
    [Te.focused]: [],
    [Te.outside]: [],
    [Te.disabled]: [],
    [Te.hidden]: [],
    [Te.today]: []
  }, M = {};
  for (const N of e) {
    const { date: w, displayMonth: E } = N, D = !!(E && !h(w, E)), T = !!(y && b(w, y)), P = !!(v && x(w, v)), F = !!(s && At(w, s, o)), L = !!(i && At(w, i, o)) || T || P || // Broadcast calendar will show outside days as default
    !d && !l && D || d && l === !1 && D, H = f(w, m);
    D && k.outside.push(N), F && k.disabled.push(N), L && k.hidden.push(N), H && k.today.push(N), c && Object.keys(c).forEach((G) => {
      const q = c?.[G];
      q && At(w, q, o) && (M[G] ? M[G].push(N) : M[G] = [N]);
    });
  }
  return (N) => {
    const w = {
      [Te.focused]: !1,
      [Te.disabled]: !1,
      [Te.hidden]: !1,
      [Te.outside]: !1,
      [Te.today]: !1
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
function B1(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[Te[s]] ? o.push(t[Te[s]]) : t[ft[s]] && o.push(t[ft[s]]), o), [t[Q.Day]]);
}
function H1(e) {
  return {
    ...z1,
    ...e
  };
}
function G1(e) {
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
function ja() {
  const e = {};
  for (const t in Q)
    e[Q[t]] = `rdp-${Q[t]}`;
  for (const t in Te)
    e[Te[t]] = `rdp-${Te[t]}`;
  for (const t in ft)
    e[ft[t]] = `rdp-${ft[t]}`;
  for (const t in Ze)
    e[Ze[t]] = `rdp-${Ze[t]}`;
  return e;
}
function Ud(e, t, n) {
  return (n ?? new nt(t)).formatMonthYear(e);
}
const V1 = Ud;
function U1(e, t, n) {
  return (n ?? new nt(t)).format(e, "d");
}
function q1(e, t = Tt) {
  return t.format(e, "LLLL");
}
function K1(e, t, n) {
  return (n ?? new nt(t)).format(e, "cccccc");
}
function X1(e, t = Tt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Q1() {
  return "";
}
function qd(e, t = Tt) {
  return t.format(e, "yyyy");
}
const Z1 = qd, J1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ud,
  formatDay: U1,
  formatMonthCaption: V1,
  formatMonthDropdown: q1,
  formatWeekNumber: X1,
  formatWeekNumberHeader: Q1,
  formatWeekdayName: K1,
  formatYearCaption: Z1,
  formatYearDropdown: qd
}, Symbol.toStringTag, { value: "Module" }));
function eC(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...J1,
    ...e
  };
}
function Ta(e, t, n, r) {
  let o = (r ?? new nt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const tC = Ta;
function Oa(e, t, n) {
  return (n ?? new nt(t)).formatMonthYear(e);
}
const nC = Oa;
function Kd(e, t, n, r) {
  let o = (r ?? new nt(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Xd(e) {
  return "Choose the Month";
}
function Qd() {
  return "";
}
const rC = "Go to the Next Month";
function Zd(e, t) {
  return rC;
}
function Jd(e) {
  return "Go to the Previous Month";
}
function ef(e, t, n) {
  return (n ?? new nt(t)).format(e, "cccc");
}
function tf(e, t) {
  return `Week ${e}`;
}
function nf(e) {
  return "Week Number";
}
function rf(e) {
  return "Choose the Year";
}
const oC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: nC,
  labelDay: tC,
  labelDayButton: Ta,
  labelGrid: Oa,
  labelGridcell: Kd,
  labelMonthDropdown: Xd,
  labelNav: Qd,
  labelNext: Zd,
  labelPrevious: Jd,
  labelWeekNumber: tf,
  labelWeekNumberHeader: nf,
  labelWeekday: ef,
  labelYearDropdown: rf
}, Symbol.toStringTag, { value: "Module" })), ut = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function sC(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...oC,
    ...e ?? {},
    labelDayButton: ut(Ta, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ut(Xd, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ut(Zd, e?.labelNext, n.labelNext),
    labelPrevious: ut(Jd, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ut(tf, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ut(rf, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ut(Oa, e?.labelGrid, n.labelGrid),
    labelGridcell: ut(Kd, e?.labelGridcell, n.labelGridcell),
    labelNav: ut(Qd, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: ut(nf, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ut(ef, e?.labelWeekday, n.labelWeekday)
  };
}
function aC(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: i, endOfYear: c, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: i(e),
    end: c(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), b = d(h), g = t && h < s(t) || n && h > s(n) || !1;
    return { value: b, label: p, disabled: g };
  });
}
function iC(e, t = {}, n = {}) {
  let r = { ...t?.[Q.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function cC(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let c = 0; c < 7; c++) {
    const l = e.addDays(s, c);
    i.push(l);
  }
  return i;
}
function lC(e, t, n, r, o = !1) {
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
function uC(e, t = {}) {
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
      return rr(d, {
        weekStartsOn: l?.weekStartsOn ?? o,
        firstWeekContainsDate: l?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (c) => {
      const l = i(c);
      return no(l);
    },
    differenceInCalendarDays: (c, l) => {
      const d = i(c), m = i(l);
      return Nn(d, m);
    },
    differenceInCalendarMonths: (c, l) => {
      const d = i(c), m = i(l);
      return xc(d, m);
    }
  };
}
const xr = (e) => e instanceof HTMLElement ? e : null, Jo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], dC = (e) => xr(e.querySelector("[data-animated-month]")), es = (e) => xr(e.querySelector("[data-animated-caption]")), ts = (e) => xr(e.querySelector("[data-animated-weeks]")), fC = (e) => xr(e.querySelector("[data-animated-nav]")), mC = (e) => xr(e.querySelector("[data-animated-weekdays]"));
function hC(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const i = te(null), c = te(r), l = te(!1);
  uc(() => {
    const d = c.current;
    if (c.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const m = s.isSameMonth(r[0].date, d[0].date), f = s.isAfter(r[0].date, d[0].date), h = f ? n[Ze.caption_after_enter] : n[Ze.caption_before_enter], p = f ? n[Ze.weeks_after_enter] : n[Ze.weeks_before_enter], b = i.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Jo(g).forEach((k) => {
      if (!(k instanceof HTMLElement))
        return;
      const M = dC(k);
      M && k.contains(M) && k.removeChild(M);
      const N = es(k);
      N && N.classList.remove(h);
      const w = ts(k);
      w && w.classList.remove(p);
    }), i.current = g) : i.current = null, l.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const x = b instanceof HTMLElement ? Jo(b) : [], y = Jo(e.current);
    if (y?.every((v) => v instanceof HTMLElement) && x && x.every((v) => v instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const v = fC(e.current);
      v && (v.style.zIndex = "1"), y.forEach((k, M) => {
        const N = x[M];
        if (!N)
          return;
        k.style.position = "relative", k.style.overflow = "hidden";
        const w = es(k);
        w && w.classList.add(h);
        const E = ts(k);
        E && E.classList.add(p);
        const D = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), v && (v.style.zIndex = ""), w && w.classList.remove(h), E && E.classList.remove(p), k.style.position = "", k.style.overflow = "", k.contains(N) && k.removeChild(N);
        };
        N.style.pointerEvents = "none", N.style.position = "absolute", N.style.overflow = "hidden", N.setAttribute("aria-hidden", "true");
        const T = mC(N);
        T && (T.style.opacity = "0");
        const P = es(N);
        P && (P.classList.add(f ? n[Ze.caption_before_exit] : n[Ze.caption_after_exit]), P.addEventListener("animationend", D));
        const F = ts(N);
        F && F.classList.add(f ? n[Ze.weeks_before_exit] : n[Ze.weeks_after_exit]), k.insertBefore(N, k.firstChild);
      });
    }
  });
}
function pC(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: i, fixedWeeks: c, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: m, differenceInCalendarMonths: f, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: b, endOfWeek: g, isAfter: x, startOfBroadcastWeek: y, startOfISOWeek: v, startOfWeek: k } = r, M = l ? y(o, r) : i ? v(o) : k(o), N = l ? h(s) : i ? p(b(s)) : g(b(s)), w = t && (l ? h(t) : i ? p(t) : g(t)), E = w && x(N, w) ? w : N, D = m(E, M), T = f(s, o) + 1, P = [];
  for (let H = 0; H <= D; H++) {
    const G = d(M, H);
    P.push(G);
  }
  const L = (l ? 35 : 42) * T;
  if (c && P.length < L) {
    const H = L - P.length;
    for (let G = 0; G < H; G++) {
      const q = d(P[P.length - 1], 1);
      P.push(q);
    }
  }
  return P;
}
function gC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, i) => s.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function xC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let i = 0; i < o; i++) {
    const c = r.addMonths(e, i);
    if (t && c > t)
      break;
    s.push(c);
  }
  return s;
}
function Vi(e, t, n, r) {
  const { month: o, defaultMonth: s, today: i = r.today(), numberOfMonths: c = 1 } = e;
  let l = o || s || i;
  const { differenceInCalendarMonths: d, addMonths: m, startOfMonth: f } = r;
  if (n && d(n, l) < c - 1) {
    const h = -1 * (c - 1);
    l = m(n, h);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function bC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: i, endOfMonth: c, endOfWeek: l, getISOWeek: d, getWeek: m, startOfBroadcastWeek: f, startOfISOWeek: h, startOfWeek: p } = r, b = e.reduce((g, x) => {
    const y = n.broadcastCalendar ? f(x, r) : n.ISOWeek ? h(x) : p(x), v = n.broadcastCalendar ? s(x) : n.ISOWeek ? i(c(x)) : l(c(x)), k = t.filter((E) => E >= y && E <= v), M = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && k.length < M) {
      const E = t.filter((D) => {
        const T = M - k.length;
        return D > v && D <= o(v, T);
      });
      k.push(...E);
    }
    const N = k.reduce((E, D) => {
      const T = n.ISOWeek ? d(D) : m(D), P = E.find((L) => L.weekNumber === T), F = new Bd(D, x, r);
      return P ? P.days.push(F) : E.push(new h1(T, [F])), E;
    }, []), w = new m1(x, N);
    return g.push(w), g;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function yC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: i, endOfMonth: c, addYears: l, endOfYear: d, newDate: m, today: f } = t, { fromYear: h, toYear: p, fromMonth: b, toMonth: g } = e;
  !n && b && (n = b), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = m(p, 11, 31));
  const x = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : h ? n = m(h, 0, 1) : !n && x && (n = o(l(e.today ?? f(), -100))), r ? r = c(r) : p ? r = m(p, 11, 31) : !r && x && (r = d(e.today ?? f())), [
    n && s(n),
    r && s(r)
  ];
}
function vC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: i, addMonths: c, differenceInCalendarMonths: l } = r, d = o ? s : 1, m = i(e);
  if (!t)
    return c(m, d);
  if (!(l(t, e) < s))
    return c(m, d);
}
function wC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: i, addMonths: c, differenceInCalendarMonths: l } = r, d = o ? s ?? 1 : 1, m = i(e);
  if (!t)
    return c(m, -d);
  if (!(l(m, t) <= 0))
    return c(m, -d);
}
function kC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function No(e, t) {
  const [n, r] = dt(e);
  return [t === void 0 ? n : t, r];
}
function CC(e, t) {
  const [n, r] = yC(e, t), { startOfMonth: o, endOfMonth: s } = t, i = Vi(e, n, r, t), [c, l] = No(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  ye(() => {
    const M = Vi(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const { months: d, weeks: m, days: f, previousMonth: h, nextMonth: p } = Ir(() => {
    const M = xC(c, r, { numberOfMonths: e.numberOfMonths }, t), N = pC(M, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), w = bC(M, N, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = kC(w), D = gC(w), T = wC(c, n, e, t), P = vC(c, r, e, t);
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
  ]), { disableNavigation: b, onMonthChange: g } = e, x = (M) => m.some((N) => N.days.some((w) => w.isEqualTo(M))), y = (M) => {
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
    goToMonth: y,
    goToDay: (M) => {
      x(M) || y(M.date);
    }
  };
}
var bt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(bt || (bt = {}));
function Ui(e) {
  return !e[Te.disabled] && !e[Te.hidden] && !e[Te.outside];
}
function MC(e, t, n, r) {
  let o, s = -1;
  for (const i of e) {
    const c = t(i);
    Ui(c) && (c[Te.focused] && s < bt.FocusedModifier ? (o = i, s = bt.FocusedModifier) : r?.isEqualTo(i) && s < bt.LastFocused ? (o = i, s = bt.LastFocused) : n(i.date) && s < bt.Selected ? (o = i, s = bt.Selected) : c[Te.today] && s < bt.Today && (o = i, s = bt.Today));
  }
  return o || (o = e.find((i) => Ui(t(i)))), o;
}
function NC(e, t, n, r, o, s, i) {
  const { ISOWeek: c, broadcastCalendar: l } = s, { addDays: d, addMonths: m, addWeeks: f, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: b, endOfWeek: g, max: x, min: y, startOfBroadcastWeek: v, startOfISOWeek: k, startOfWeek: M } = i;
  let w = {
    day: d,
    week: f,
    month: m,
    year: h,
    startOfWeek: (E) => l ? v(E, i) : c ? k(E) : M(E),
    endOfWeek: (E) => l ? p(E) : c ? b(E) : g(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? w = x([r, w]) : t === "after" && o && (w = y([o, w])), w;
}
function of(e, t, n, r, o, s, i, c = 0) {
  if (c > 365)
    return;
  const l = NC(e, t, n.date, r, o, s, i), d = !!(s.disabled && At(l, s.disabled, i)), m = !!(s.hidden && At(l, s.hidden, i)), f = l, h = new Bd(l, f, i);
  return !d && !m ? h : of(e, t, h, r, o, s, i, c + 1);
}
function EC(e, t, n, r, o) {
  const { autoFocus: s } = e, [i, c] = dt(), l = MC(t.days, n, r || (() => !1), i), [d, m] = dt(s ? l : void 0);
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
      const y = of(g, x, d, t.navStart, t.navEnd, e, o);
      y && (e.disableNavigation && !t.days.some((k) => k.isEqualTo(y)) || (t.goToDay(y), m(y)));
    }
  };
}
function DC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = No(n, o ? n : void 0), c = o ? n : s, { isSameDay: l } = t, d = (p) => c?.some((b) => l(b, p)) ?? !1, { min: m, max: f } = e;
  return {
    selected: c,
    select: (p, b, g) => {
      let x = [...c ?? []];
      if (d(p)) {
        if (c?.length === m || r && c?.length === 1)
          return;
        x = c?.filter((y) => !l(y, p));
      } else
        c?.length === f ? x = [p] : x = [...x, p];
      return o || i(x), o?.(x, p, b, g), x;
    },
    isSelected: d
  };
}
function SC(e, t, n = 0, r = 0, o = !1, s = Tt) {
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
function jC(e, t, n = Tt) {
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
function qi(e, t, n = Tt) {
  return Pt(e, t.from, !1, n) || Pt(e, t.to, !1, n) || Pt(t, e.from, !1, n) || Pt(t, e.to, !1, n);
}
function TC(e, t, n = Tt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((c) => typeof c != "function").some((c) => typeof c == "boolean" ? c : n.isDate(c) ? Pt(e, c, !1, n) : Vd(c, n) ? c.some((l) => Pt(e, l, !1, n)) : Mo(c) ? c.from && c.to ? qi(e, { from: c.from, to: c.to }, n) : !1 : Gd(c) ? jC(e, c.dayOfWeek, n) : Ea(c) ? n.isAfter(c.before, c.after) ? qi(e, {
    from: n.addDays(c.after, 1),
    to: n.addDays(c.before, -1)
  }, n) : At(e.from, c, n) || At(e.to, c, n) : Da(c) || Sa(c) ? At(e.from, c, n) || At(e.to, c, n) : !1))
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
function OC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: i } = e, [c, l] = No(o, i ? o : void 0), d = i ? o : c;
  return {
    selected: d,
    select: (h, p, b) => {
      const { min: g, max: x } = e, y = h ? SC(h, d, g, x, s, t) : void 0;
      return r && n && y?.from && y.to && TC({ from: y.from, to: y.to }, n, t) && (y.from = h, y.to = void 0), i || l(y), i?.(y, h, p, b), y;
    },
    isSelected: (h) => d && Pt(d, h, !1, t)
  };
}
function _C(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = No(n, o ? n : void 0), c = o ? n : s, { isSameDay: l } = t;
  return {
    selected: c,
    select: (f, h, p) => {
      let b = f;
      return !r && c && c && l(f, c) && (b = void 0), o || i(b), o?.(b, f, h, p), b;
    },
    isSelected: (f) => c ? l(c, f) : !1
  };
}
function RC(e, t) {
  const n = _C(e, t), r = DC(e, t), o = OC(e, t);
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
function at(e, t) {
  return e instanceof qe && e.timeZone === t ? e : new qe(e, t);
}
function xn(e, t, n) {
  return at(e, t);
}
function Ki(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? xn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? xn(r, t) : r) : Mo(e) ? {
    ...e,
    from: e.from ? at(e.from, t) : e.from,
    to: e.to ? at(e.to, t) : e.to
  } : Ea(e) ? {
    before: xn(e.before, t),
    after: xn(e.after, t)
  } : Da(e) ? {
    after: xn(e.after, t)
  } : Sa(e) ? {
    before: xn(e.before, t)
  } : e;
}
function ns(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Ki(r, t)) : Ki(e, t));
}
function PC(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = at(t.today, n)), t.month && (t.month = at(t.month, n)), t.defaultMonth && (t.defaultMonth = at(t.defaultMonth, n)), t.startMonth && (t.startMonth = at(t.startMonth, n)), t.endMonth && (t.endMonth = at(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = at(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((oe) => at(oe, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? at(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? at(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = ns(t.disabled, n)), t.hidden !== void 0 && (t.hidden = ns(t.hidden, n)), t.modifiers)) {
    const oe = {};
    Object.keys(t.modifiers).forEach((be) => {
      oe[be] = ns(t.modifiers?.[be], n);
    }), t.modifiers = oe;
  }
  const { components: r, formatters: o, labels: s, dateLib: i, locale: c, classNames: l } = Ir(() => {
    const oe = { ...Yd, ...t.locale }, be = t.broadcastCalendar ? 1 : t.weekStartsOn, ee = t.noonSafe && t.timeZone ? uC(t.timeZone, {
      weekStartsOn: be,
      locale: oe
    }) : void 0, pe = t.dateLib && ee ? { ...ee, ...t.dateLib } : t.dateLib ?? ee, Qe = new nt({
      locale: oe,
      weekStartsOn: be,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, pe);
    return {
      dateLib: Qe,
      components: H1(t.components),
      formatters: eC(t.formatters),
      labels: sC(t.labels, Qe.options),
      locale: oe,
      classNames: { ...ja(), ...t.classNames }
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
  const { captionLayout: d, mode: m, navLayout: f, numberOfMonths: h = 1, onDayBlur: p, onDayClick: b, onDayFocus: g, onDayKeyDown: x, onDayMouseEnter: y, onDayMouseLeave: v, onNextClick: k, onPrevClick: M, showWeekNumber: N, styles: w } = t, { formatCaption: E, formatDay: D, formatMonthDropdown: T, formatWeekNumber: P, formatWeekNumberHeader: F, formatWeekdayName: L, formatYearDropdown: H } = o, G = CC(t, i), { days: q, months: I, navStart: O, navEnd: _, previousMonth: R, nextMonth: z, goToMonth: C } = G, S = Y1(q, t, O, _, i), { isSelected: W, select: Y, selected: B } = RC(t, i) ?? {}, { blur: U, focused: $, isFocusTarget: Z, moveFocus: ne, setFocused: ue } = EC(t, G, S, W ?? (() => !1), i), { labelDayButton: $e, labelGridcell: _e, labelGrid: He, labelMonthDropdown: Ne, labelNav: xe, labelPrevious: Me, labelNext: Ge, labelWeekday: ze, labelWeekNumber: Ye, labelWeekNumberHeader: se, labelYearDropdown: Be } = s, Ve = Ir(() => cC(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), De = m !== void 0 || b !== void 0, Fe = we(() => {
    R && (C(R), M?.(R));
  }, [R, C, M]), ot = we(() => {
    z && (C(z), k?.(z));
  }, [C, z, k]), A = we((oe, be) => (ee) => {
    ee.preventDefault(), ee.stopPropagation(), ue(oe), !be.disabled && (Y?.(oe.date, be, ee), b?.(oe.date, be, ee));
  }, [Y, b, ue]), fe = we((oe, be) => (ee) => {
    ue(oe), g?.(oe.date, be, ee);
  }, [g, ue]), Xe = we((oe, be) => (ee) => {
    U(), p?.(oe.date, be, ee);
  }, [U, p]), Xt = we((oe, be) => (ee) => {
    const pe = {
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
    if (pe[ee.key]) {
      ee.preventDefault(), ee.stopPropagation();
      const [Qe, de] = pe[ee.key];
      ne(Qe, de);
    }
    x?.(oe.date, be, ee);
  }, [ne, x, t.dir]), Eo = we((oe, be) => (ee) => {
    y?.(oe.date, be, ee);
  }, [y]), Do = we((oe, be) => (ee) => {
    v?.(oe.date, be, ee);
  }, [v]), So = we((oe) => (be) => {
    const ee = Number(be.target.value), pe = i.setMonth(i.startOfMonth(oe), ee);
    C(pe);
  }, [i, C]), wf = we((oe) => (be) => {
    const ee = Number(be.target.value), pe = i.setYear(i.startOfMonth(oe), ee);
    C(pe);
  }, [i, C]), { className: kf, style: Cf } = Ir(() => ({
    className: [l[Q.Root], t.className].filter(Boolean).join(" "),
    style: { ...w?.[Q.Root], ...t.style }
  }), [l, t.className, t.style, w]), Mf = G1(t), Aa = te(null);
  hC(Aa, !!t.animate, {
    classNames: l,
    months: I,
    focused: $,
    dateLib: i
  });
  const Nf = {
    dayPickerProps: t,
    selected: B,
    select: Y,
    isSelected: W,
    months: I,
    nextMonth: z,
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
    Hd.Provider,
    { value: Nf },
    V.createElement(
      r.Root,
      { rootRef: t.animate ? Aa : void 0, className: kf, style: Cf, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Mf },
      V.createElement(
        r.Months,
        { className: l[Q.Months], style: w?.[Q.Months] },
        !t.hideNavigation && !f && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[Q.Nav], style: w?.[Q.Nav], "aria-label": xe(), onPreviousClick: Fe, onNextClick: ot, previousMonth: R, nextMonth: z }),
        I.map((oe, be) => V.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[Q.Month],
            style: w?.[Q.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: be,
            displayIndex: be,
            calendarMonth: oe
          },
          f === "around" && !t.hideNavigation && be === 0 && V.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[Q.PreviousMonthButton], tabIndex: R ? void 0 : -1, "aria-disabled": R ? void 0 : !0, "aria-label": Me(R), onClick: Fe, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: R ? void 0 : !0, className: l[Q.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          V.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[Q.MonthCaption], style: w?.[Q.MonthCaption], calendarMonth: oe, displayIndex: be }, d?.startsWith("dropdown") ? V.createElement(
            r.DropdownNav,
            { className: l[Q.Dropdowns], style: w?.[Q.Dropdowns] },
            (() => {
              const ee = d === "dropdown" || d === "dropdown-months" ? V.createElement(r.MonthsDropdown, { key: "month", className: l[Q.MonthsDropdown], "aria-label": Ne(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: So(oe.date), options: aC(oe.date, O, _, o, i), style: w?.[Q.Dropdown], value: i.getMonth(oe.date) }) : V.createElement("span", { key: "month" }, T(oe.date, i)), pe = d === "dropdown" || d === "dropdown-years" ? V.createElement(r.YearsDropdown, { key: "year", className: l[Q.YearsDropdown], "aria-label": Be(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: wf(oe.date), options: lC(O, _, o, i, !!t.reverseYears), style: w?.[Q.Dropdown], value: i.getYear(oe.date) }) : V.createElement("span", { key: "year" }, H(oe.date, i));
              return i.getMonthYearOrder() === "year-first" ? [pe, ee] : [ee, pe];
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
          f === "around" && !t.hideNavigation && be === h - 1 && V.createElement(
            r.NextMonthButton,
            { type: "button", className: l[Q.NextMonthButton], tabIndex: z ? void 0 : -1, "aria-disabled": z ? void 0 : !0, "aria-label": Ge(z), onClick: ot, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: z ? void 0 : !0, className: l[Q.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          be === h - 1 && f === "after" && !t.hideNavigation && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[Q.Nav], style: w?.[Q.Nav], "aria-label": xe(), onPreviousClick: Fe, onNextClick: ot, previousMonth: R, nextMonth: z }),
          V.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": He(oe.date, i.options, i) || void 0, className: l[Q.MonthGrid], style: w?.[Q.MonthGrid] },
            !t.hideWeekdays && V.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[Q.Weekdays], style: w?.[Q.Weekdays] },
              N && V.createElement(r.WeekNumberHeader, { "aria-label": se(i.options), className: l[Q.WeekNumberHeader], style: w?.[Q.WeekNumberHeader], scope: "col" }, F()),
              Ve.map((ee) => V.createElement(r.Weekday, { "aria-label": ze(ee, i.options, i), className: l[Q.Weekday], key: String(ee), style: w?.[Q.Weekday], scope: "col" }, L(ee, i.options, i)))
            ),
            V.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[Q.Weeks], style: w?.[Q.Weeks] }, oe.weeks.map((ee) => V.createElement(
              r.Week,
              { className: l[Q.Week], key: ee.weekNumber, style: w?.[Q.Week], week: ee },
              N && V.createElement(r.WeekNumber, { week: ee, style: w?.[Q.WeekNumber], "aria-label": Ye(ee.weekNumber, {
                locale: c
              }), className: l[Q.WeekNumber], scope: "row", role: "rowheader" }, P(ee.weekNumber, i)),
              ee.days.map((pe) => {
                const { date: Qe } = pe, de = S(pe);
                if (de[Te.focused] = !de.hidden && !!$?.isEqualTo(pe), de[ft.selected] = W?.(Qe) || de.selected, Mo(B)) {
                  const { from: jo, to: To } = B;
                  de[ft.range_start] = !!(jo && To && i.isSameDay(Qe, jo)), de[ft.range_end] = !!(jo && To && i.isSameDay(Qe, To)), de[ft.range_middle] = Pt(B, Qe, !0, i);
                }
                const Ef = iC(de, w, t.modifiersStyles), Df = B1(de, l, t.modifiersClassNames), Sf = !De && !de.hidden ? _e(Qe, de, i.options, i) : void 0;
                return V.createElement(r.Day, { key: `${pe.isoDate}_${pe.displayMonthId}`, day: pe, modifiers: de, className: Df.join(" "), style: Ef, role: "gridcell", "aria-selected": de.selected || void 0, "aria-label": Sf, "data-day": pe.isoDate, "data-month": pe.outside ? pe.dateMonthId : void 0, "data-selected": de.selected || void 0, "data-disabled": de.disabled || void 0, "data-hidden": de.hidden || void 0, "data-outside": pe.outside || void 0, "data-focused": de.focused || void 0, "data-today": de.today || void 0 }, !de.hidden && De ? V.createElement(r.DayButton, { className: l[Q.DayButton], style: w?.[Q.DayButton], type: "button", day: pe, modifiers: de, disabled: !de.focused && de.disabled || void 0, "aria-disabled": de.focused && de.disabled || void 0, tabIndex: Z(pe) ? 0 : -1, "aria-label": $e(Qe, de, i.options, i), onClick: A(pe, de), onBlur: Xe(pe, de), onFocus: fe(pe, de), onKeyDown: Xt(pe, de), onMouseEnter: Eo(pe, de), onMouseLeave: Do(pe, de) }, D(Qe, i.options, i)) : !de.hidden && D(pe.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && V.createElement(r.Footer, { className: l[Q.Footer], style: w?.[Q.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function AC({
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
  const f = ja();
  return /* @__PURE__ */ a.jsx(
    PC,
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
          vn({ variant: o }),
          "size-6 aria-disabled:opacity-50 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none justify-self-center",
          f.button_previous
        ),
        button_next: j(
          vn({ variant: o }),
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
          ...y
        }) => /* @__PURE__ */ a.jsxs(
          "nav",
          {
            className: j("flex w-full items-center", h),
            ...y,
            children: [
              /* @__PURE__ */ a.jsx("div", { className: "w-5" }),
              d && /* @__PURE__ */ a.jsx("span", { className: "text-sidebar-primary flex-[4] text-sm font-medium", children: d }),
              !d && /* @__PURE__ */ a.jsx("span", { className: "flex-[4]" }),
              c && l ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: l,
                    className: j(
                      vn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    children: /* @__PURE__ */ a.jsx(Zp, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Ft, { side: "bottom", children: "Go back to today" })
              ] }) }) : /* @__PURE__ */ a.jsx("span", { className: "flex-1" }),
              /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: j(
                      vn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    "aria-label": "Go to previous month",
                    onClick: p,
                    children: /* @__PURE__ */ a.jsx(fp, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Ft, { side: "bottom", children: "Go to previous month" })
              ] }) }),
              /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ a.jsxs(It, { children: [
                /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: j(
                      vn({ variant: o }),
                      "size-6 p-0 select-none hover:!bg-calendar-day-hover hover:!text-current transition-none"
                    ),
                    "aria-label": "Go to next month",
                    onClick: b,
                    children: /* @__PURE__ */ a.jsx(Ls, { className: "size-4" })
                  }
                ) }),
                /* @__PURE__ */ a.jsx(Ft, { side: "bottom", children: "Go to next month" })
              ] }) })
            ]
          }
        ),
        DayButton: IC,
        WeekNumber: ({ children: h, ...p }) => /* @__PURE__ */ a.jsx("td", { ...p, children: /* @__PURE__ */ a.jsx("div", { className: "flex h-(--cell-size) w-5 items-center justify-center text-center text-xxs", children: h }) }),
        ...i
      },
      ...m
    }
  );
}
function IC({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const o = ja(), s = u.useRef(null);
  u.useEffect(() => {
    n.focused && s.current?.focus();
  }, [n.focused]);
  const i = "inView" in n && n.inView === !0;
  return /* @__PURE__ */ a.jsx(
    Pe,
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
function WC({ onDateSelect: e, currentDate: t, visibleDays: n }) {
  const [r] = u.useState(() => /* @__PURE__ */ new Date()), [o, s] = u.useState(t ?? r), i = u.useRef(null);
  u.useEffect(() => {
    if (!n || n.length === 0) return;
    const h = n[0], p = n[n.length - 1], b = i.current;
    i.current = h;
    const g = (x) => {
      s((y) => y.getMonth() === x.getMonth() && y.getFullYear() === x.getFullYear() ? y : x);
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
        inView: (h) => n.some((p) => Se(p, h))
      };
  }, [n]), f = u.useMemo(() => {
    if (m)
      return {
        inView: "in-view-day"
      };
  }, [m]);
  return /* @__PURE__ */ a.jsx(Mn, { className: "px-0", children: /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(
    AC,
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
const sf = "calendarcn-theme", af = "(prefers-color-scheme: dark)", cf = u.createContext(null);
function FC(e) {
  if (typeof window > "u")
    return e;
  const t = window.localStorage.getItem(sf);
  return t === "light" || t === "dark" || t === "system" ? t : e;
}
function Rs() {
  return typeof window > "u" ? "light" : window.matchMedia(af).matches ? "dark" : "light";
}
function Xi(e) {
  if (typeof document > "u")
    return;
  const t = document.documentElement, n = e === "system" ? Rs() : e;
  t.classList.remove("light", "dark"), t.classList.add(n);
}
function LC() {
  const e = document.createElement("style");
  e.appendChild(
    document.createTextNode(
      "* { transition: none !important; animation: none !important; }"
    )
  ), document.head.appendChild(e), window.setTimeout(() => {
    e.remove();
  }, 0);
}
function VM({
  attribute: e = "class",
  children: t,
  defaultTheme: n = "system",
  disableTransitionOnChange: r = !1,
  enableSystem: o = !0
}) {
  const [s, i] = u.useState(
    () => FC(n)
  ), [c, l] = u.useState(
    () => n === "system" && o ? Rs() : n === "system" ? "light" : n
  );
  u.useEffect(() => {
    if (e !== "class")
      return;
    const f = s === "system" && o ? Rs() : s;
    r && LC(), Xi(s), l(
      f === "system" ? "light" : f
    ), window.localStorage.setItem(sf, s);
  }, [e, r, o, s]), u.useEffect(() => {
    if (!o)
      return;
    const f = window.matchMedia(af), h = () => {
      if (s !== "system")
        return;
      const p = f.matches ? "dark" : "light";
      Xi("system"), l(p);
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
  return /* @__PURE__ */ a.jsx(cf.Provider, { value: m, children: t });
}
function lf() {
  const e = u.useContext(cf);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider.");
  return e;
}
const uf = u.forwardRef(({ className: e, ...t }, n) => {
  const { theme: r, setTheme: o } = lf(), [s, i] = u.useState(!1);
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
  }, l = () => r === "light" ? /* @__PURE__ */ a.jsx(qp, { className: "size-4" }) : r === "dark" ? /* @__PURE__ */ a.jsx(Rp, { className: "size-4" }) : /* @__PURE__ */ a.jsx(fs, { className: "size-4" });
  return s ? /* @__PURE__ */ a.jsxs(
    Pe,
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
    Pe,
    {
      ref: n,
      variant: "ghost",
      size: "icon",
      ...t,
      className: j("size-7 text-sidebar-muted-foreground", e),
      children: [
        /* @__PURE__ */ a.jsx(fs, { className: "size-4" }),
        /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
});
uf.displayName = "ThemeToggle";
const $C = "15rem", zC = {
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
function YC({
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
      style: { "--sidebar-width": $C },
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
                  WC,
                  {
                    onDateSelect: t,
                    currentDate: n,
                    visibleDays: r
                  }
                ),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(Ns, { children: /* @__PURE__ */ a.jsx(Es, { children: /* @__PURE__ */ a.jsxs(Ds, { className: "text-sidebar-foreground", children: [
                  /* @__PURE__ */ a.jsx(Sp, { className: "size-4 text-sidebar-muted-foreground" }),
                  /* @__PURE__ */ a.jsx("span", { className: "flex-1 text-sm", children: "Scheduling" }),
                  /* @__PURE__ */ a.jsx(Oc, { className: "size-4 text-sidebar-muted-foreground" })
                ] }) }) }) }) }),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-2 px-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-sm bg-[#EFEFEE] dark:bg-sidebar px-2 py-1.5", children: [
                  /* @__PURE__ */ a.jsx(eg, { className: "size-4 shrink-0 text-sidebar-muted-foreground" }),
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Meet with...",
                      className: "flex-1 bg-transparent text-sm text-sidebar-foreground placeholder:text-sidebar-muted-foreground outline-none"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ a.jsx(s1, { accounts: zC.accounts }),
                /* @__PURE__ */ a.jsx(Od, { className: "mx-0" }),
                /* @__PURE__ */ a.jsx(Mn, { className: "py-0", children: /* @__PURE__ */ a.jsx(tr, { children: /* @__PURE__ */ a.jsx(Ns, { children: /* @__PURE__ */ a.jsx(Es, { children: /* @__PURE__ */ a.jsxs(Ds, { className: "text-sidebar-foreground text-sm", children: [
                  /* @__PURE__ */ a.jsx($p, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add calendar account" })
                ] }) }) }) }) })
              ] }),
              /* @__PURE__ */ a.jsx(_k, { className: "border-t border-sidebar-border", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-start gap-1 px-2 py-2", children: [
                /* @__PURE__ */ a.jsxs(It, { children: [
                  /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(
                    Pe,
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
                          children: /* @__PURE__ */ a.jsx(Mp, { className: "size-4" })
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ a.jsx(Ft, { side: "top", children: "Go to repo" })
                ] }),
                /* @__PURE__ */ a.jsxs(It, { children: [
                  /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsx(uf, { className: "text-sidebar-foreground" }) }),
                  /* @__PURE__ */ a.jsxs(Ft, { side: "top", children: [
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
function BC(e, t = []) {
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
  return o.scopeName = e, [r, HC(o, ...t)];
}
function HC(...e) {
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
var _a = "Avatar", [GC] = BC(_a), [VC, df] = GC(_a), ff = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = u.useState("idle");
    return /* @__PURE__ */ a.jsx(
      VC,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ a.jsx(lt.span, { ...r, ref: t })
      }
    );
  }
);
ff.displayName = _a;
var mf = "AvatarImage", hf = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...s } = e, i = df(mf, n), c = UC(r, s), l = mt((d) => {
      o(d), i.onImageLoadingStatusChange(d);
    });
    return ct(() => {
      c !== "idle" && l(c);
    }, [c, l]), c === "loaded" ? /* @__PURE__ */ a.jsx(lt.img, { ...s, ref: t, src: r }) : null;
  }
);
hf.displayName = mf;
var pf = "AvatarFallback", gf = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = df(pf, n), [i, c] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => c(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ a.jsx(lt.span, { ...o, ref: t }) : null;
  }
);
gf.displayName = pf;
function Qi(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function UC(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = dy(), o = u.useRef(null), s = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, c] = u.useState(
    () => Qi(s, e)
  );
  return ct(() => {
    c(Qi(s, e));
  }, [s, e]), ct(() => {
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
var qC = ff, KC = hf, XC = gf;
function QC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    qC,
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
function ZC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    KC,
    {
      "data-slot": "avatar-image",
      className: j("aspect-square size-full", e),
      ...t
    }
  );
}
function JC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    XC,
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
const eM = {
  day: "Day",
  week: "Week",
  month: "Month"
}, tM = [
  { value: "day", label: "Day", shortcuts: ["1", "or", "D"] },
  { value: "week", label: "Week", shortcuts: ["0", "or", "W"] },
  { value: "month", label: "Month", shortcuts: ["M"] }
], nM = [2, 3, 4, 5, 6, 7, 8, 9];
function xf({
  view: e,
  numberOfDays: t,
  viewSettings: n,
  onSwitchView: r,
  onSetNumberOfDays: o,
  onToggleWeekends: s,
  onToggleDeclinedEvents: i,
  onToggleWeekNumbers: c
}) {
  return /* @__PURE__ */ a.jsxs(Ss, { children: [
    /* @__PURE__ */ a.jsx(js, { asChild: !0, children: /* @__PURE__ */ a.jsxs(Pe, { variant: "secondary", size: "sm", className: "gap-1 px-3", children: [
      eM[e],
      /* @__PURE__ */ a.jsx(Ls, { className: "size-4 text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Ts, { align: "start", sideOffset: 8, className: "w-56", children: [
      tM.map((l) => /* @__PURE__ */ a.jsxs(
        yt,
        {
          onClick: () => r(l.value),
          children: [
            /* @__PURE__ */ a.jsx(
              Kn,
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
      /* @__PURE__ */ a.jsxs(Oi, { children: [
        /* @__PURE__ */ a.jsx(_i, { className: "pl-8", children: "Number of days" }),
        /* @__PURE__ */ a.jsxs(Ri, { children: [
          nM.map((l) => /* @__PURE__ */ a.jsxs(yt, { onClick: () => o(l), children: [
            /* @__PURE__ */ a.jsx(
              Kn,
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
          /* @__PURE__ */ a.jsx(yt, { disabled: !0, children: "Other..." })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(wn, {}),
      /* @__PURE__ */ a.jsxs(Oi, { children: [
        /* @__PURE__ */ a.jsx(_i, { className: "pl-8", children: "View settings" }),
        /* @__PURE__ */ a.jsxs(Ri, { className: "w-56", children: [
          /* @__PURE__ */ a.jsxs(
            Xo,
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
            Xo,
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
            Xo,
            {
              checked: n.showWeekNumbers,
              onCheckedChange: () => c(),
              children: "Week numbers"
            }
          ),
          /* @__PURE__ */ a.jsx(wn, {}),
          /* @__PURE__ */ a.jsxs(yt, { disabled: !0, children: [
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
function Jr(e) {
  return e.isAllDay ? !1 : !Se(e.start, e.end);
}
function rM(e, t) {
  const n = We(t.date), r = Ee(n, 1);
  return e.filter((o) => o.isAllDay || Jr(o) ? !1 : o.start < r && o.end > n);
}
function Zi(e, t) {
  return zf(
    { start: e.start, end: e.end },
    { start: t.start, end: t.end }
  );
}
function oM(e) {
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
          (m) => Zi(m, l)
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
          (p) => Zi(p, l)
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
function sM(e, t, n = 8) {
  const r = rM(e, t);
  if (r.length === 0)
    return [];
  const o = oM(r), s = We(t.date), i = Ee(s, 1);
  return r.map((c) => {
    const l = o.get(c.id) ?? {
      column: 0,
      totalColumns: 1
    }, d = c.start > s ? c.start : s, m = c.end < i ? c.end : i, h = zr(d, s) / 1440 * 100, b = zr(m, d) / 1440 * 100, g = Se(c.start, s), x = c.end <= i;
    let y = "full";
    g && !x ? y = "start" : !g && x ? y = "end" : !g && !x && (y = "middle");
    const v = n, k = 8, { column: M, totalColumns: N } = l;
    let w, E;
    if (N === 1)
      w = 0, E = 100 - v;
    else {
      const D = (100 - v + k * (N - 1)) / N;
      w = M * (D - k), M === N - 1 ? E = 100 - v - w : E = D;
    }
    return {
      event: c,
      top: h,
      height: b,
      left: w,
      width: E,
      column: l.column,
      totalColumns: l.totalColumns,
      segmentPosition: y
    };
  });
}
function aM(e, t) {
  const n = e.filter(
    (i) => i.isAllDay || Jr(i)
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
      const p = t[h], b = We(p.date);
      (Se(i.start, p.date) || i.start <= b && i.end >= b) && (c === -1 && (c = h), l = h);
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
const iM = 150, rs = 200;
function cM({
  containerRef: e,
  dayColumnWidth: t,
  onNavigate: n,
  disabled: r
}) {
  const [o, s] = dt(0), [i, c] = dt(0), [l, d] = dt(!1), [m, f] = dt(!1), h = te(null), p = te(0), b = te(n);
  ye(() => {
    b.current = n;
  }, [n]);
  const g = we(
    (y) => {
      if (t <= 0) return;
      const v = Math.round(y / t);
      if (v === 0) {
        f(!0), s(0), setTimeout(() => {
          f(!1), d(!1);
        }, rs);
        return;
      }
      const k = v * t;
      f(!0), s(k), setTimeout(() => {
        b.current(-v), s(0), f(!1), d(!1), p.current = 0;
      }, rs);
    },
    [t]
  ), x = we(
    (y) => {
      if (t <= 0 || m || l) return;
      const v = y * t;
      c(v), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          f(!0), c(0), setTimeout(() => {
            f(!1);
          }, rs);
        });
      });
    },
    [t, m, l]
  );
  return ye(() => {
    const y = e.current;
    if (!y) return;
    const v = (k) => {
      r || Math.abs(k.deltaX) <= Math.abs(k.deltaY) || (k.preventDefault(), d(!0), p.current += -k.deltaX, s(p.current), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        g(p.current), p.current = 0;
      }, iM));
    };
    return y.addEventListener("wheel", v, { passive: !1 }), () => {
      y.removeEventListener("wheel", v), h.current && clearTimeout(h.current);
    };
  }, [e, g, r]), {
    scrollOffset: o,
    slideOffset: i,
    isScrolling: l,
    isAnimating: m,
    triggerSlideAnimation: x
  };
}
const Ji = 4, ec = 15, tc = 40, lM = 500, uM = 800, _r = 60, nc = 12;
function dM(e) {
  return Math.round(e / ec) * ec;
}
function rc(e, t) {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n.setMinutes(t), n;
}
function fM(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function mM({
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
  const [d, m] = dt(null), f = te(null), h = te(i), p = te(c), b = te(l), g = te(n), x = te(e), y = te(r), v = te(o), k = te(s);
  ye(() => {
    h.current = i;
  }, [i]), ye(() => {
    p.current = c;
  }, [c]), ye(() => {
    b.current = l;
  }, [l]), ye(() => {
    g.current = n;
  }, [n]), ye(() => {
    x.current = e;
  }, [e]), ye(() => {
    y.current = r;
  }, [r]), ye(() => {
    v.current = o;
  }, [o]), ye(() => {
    k.current = s;
  }, [s]);
  const M = te(null), N = te(null), w = te(null), E = te(0), D = te(null), T = te(null), P = we(() => {
    M.current !== null && (clearTimeout(M.current), M.current = null), N.current = null;
  }, []), F = we(() => {
    w.current !== null && (cancelAnimationFrame(w.current), w.current = null), E.current = 0;
  }, []), L = we(() => {
    D.current && window.removeEventListener("mousemove", D.current), T.current && window.removeEventListener("mouseup", T.current), P(), F();
  }, [P, F]), H = we(() => {
    if (w.current !== null) return;
    const I = () => {
      const O = t.current;
      if (!O) return;
      const _ = E.current;
      if (_ === 0) {
        w.current = null;
        return;
      }
      O.scrollTop += _, w.current = requestAnimationFrame(I);
    };
    w.current = requestAnimationFrame(I);
  }, [t]), G = we((I) => {
    if (N.current === I) return;
    P(), N.current = I;
    const O = () => {
      b.current?.(I), M.current = setTimeout(O, uM);
    };
    M.current = setTimeout(O, lM);
  }, [P]);
  ye(() => {
    D.current = (I) => {
      const O = f.current;
      if (!O) return;
      const _ = Math.abs(I.clientY - O.startClientY), R = Math.abs(I.clientX - O.startClientX);
      if (!O.isDragging && _ < Ji && R < Ji) return;
      O.isDragging || (O.isDragging = !0);
      const z = t.current;
      if (!z) return;
      const C = z.getBoundingClientRect(), S = z.scrollTop, W = I.clientY - C.top + S - O.offsetWithinEvent, Y = I.clientX - C.left - O.offsetWithinEventX, B = W / x.current * 60, U = dM(B), $ = Math.max(0, Math.min(U, 1440 - O.durationMinutes)), Z = v.current, ne = y.current, ue = C.left + k.current, $e = I.clientX - ue, _e = fM(Math.floor($e / Z), 0, ne.length - 1), He = ne[_e], Ne = rc(He, $), xe = rc(He, $ + O.durationMinutes);
      m({
        eventId: O.eventId,
        event: O.event,
        originalStart: O.event.start,
        originalEnd: O.event.end,
        currentStart: Ne,
        currentEnd: xe,
        currentDate: He,
        isDragging: !0,
        cursorY: W,
        cursorX: Y,
        clientX: I.clientX - O.offsetWithinEventX,
        clientY: I.clientY - O.offsetWithinEvent
      });
      const Me = I.clientX - ue, Ge = Z * ne.length;
      Me < tc ? G(-7) : Me > Ge - tc ? G(7) : P();
      const ze = I.clientY - C.top, Ye = C.height;
      if (ze < _r) {
        const se = ze;
        E.current = -nc * (1 - se / _r), H();
      } else if (ze > Ye - _r) {
        const se = Ye - ze;
        E.current = nc * (1 - se / _r), H();
      } else
        F();
    }, T.current = () => {
      const I = f.current;
      I && (L(), I.isDragging ? m((O) => {
        if (!O) return null;
        const _ = g.current.find((R) => R.id === I.eventId);
        return _ && h.current?.({
          ..._,
          start: O.currentStart,
          end: O.currentEnd
        }), null;
      }) : m(null), f.current = null);
    };
  }, [t, L, G, P, F, H]);
  const q = we(
    (I, O) => {
      if (I.button !== 0 || (p.current?.(O), !t.current)) return;
      const z = I.currentTarget.getBoundingClientRect(), C = I.clientY - z.top, S = I.clientX - z.left, W = O.start.getHours() * 60 + O.start.getMinutes(), B = O.end.getHours() * 60 + O.end.getMinutes() - W;
      f.current = {
        eventId: O.id,
        event: O,
        startClientY: I.clientY,
        startClientX: I.clientX,
        offsetWithinEvent: C,
        offsetWithinEventX: S,
        isDragging: !1,
        durationMinutes: B
      }, m({
        eventId: O.id,
        event: O,
        originalStart: O.start,
        originalEnd: O.end,
        currentStart: O.start,
        currentEnd: O.end,
        currentDate: O.start,
        isDragging: !1,
        cursorY: 0,
        cursorX: 0,
        clientX: 0,
        clientY: 0
      }), D.current && window.addEventListener("mousemove", D.current), T.current && window.addEventListener("mouseup", T.current);
    },
    [t]
  );
  return ye(() => L, [L]), { dragState: d, handleEventMouseDown: q };
}
const hM = 4, oc = 15, Rr = 15, Pr = 60, sc = 12, ac = 40, pM = 500, gM = 800;
function xM(e) {
  return Math.round(e / oc) * oc;
}
function ic(e, t) {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n.setMinutes(t), n;
}
function Hn(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function bM({
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
  const [d, m] = dt(null), f = te(null), h = te(i), p = te(c), b = te(l), g = te(n), x = te(e), y = te(r), v = te(o), k = te(s);
  ye(() => {
    h.current = i;
  }, [i]), ye(() => {
    p.current = c;
  }, [c]), ye(() => {
    b.current = l;
  }, [l]), ye(() => {
    g.current = n;
  }, [n]), ye(() => {
    x.current = e;
  }, [e]), ye(() => {
    y.current = r;
  }, [r]), ye(() => {
    v.current = o;
  }, [o]), ye(() => {
    k.current = s;
  }, [s]);
  const M = te(null), N = te(0), w = te(null), E = te(null), D = te(null), T = te(null), P = we(() => {
    M.current !== null && (cancelAnimationFrame(M.current), M.current = null), N.current = 0;
  }, []), F = we(() => {
    w.current !== null && (clearTimeout(w.current), w.current = null), E.current = null;
  }, []), L = we((I) => {
    if (E.current === I) return;
    F(), E.current = I;
    const O = () => {
      b.current?.(I), w.current = setTimeout(O, gM);
    };
    w.current = setTimeout(O, pM);
  }, [F]), H = we(() => {
    D.current && window.removeEventListener("mousemove", D.current), T.current && window.removeEventListener("mouseup", T.current), P(), F();
  }, [P, F]), G = we(() => {
    if (M.current !== null) return;
    const I = () => {
      const O = t.current;
      if (!O) return;
      const _ = N.current;
      if (_ === 0) {
        M.current = null;
        return;
      }
      O.scrollTop += _, M.current = requestAnimationFrame(I);
    };
    M.current = requestAnimationFrame(I);
  }, [t]);
  ye(() => {
    D.current = (I) => {
      const O = f.current;
      if (!O) return;
      const _ = Math.abs(I.clientY - O.startClientY);
      if (!O.isResizing && _ < hM) return;
      O.isResizing || (O.isResizing = !0);
      const R = t.current;
      if (!R) return;
      const z = R.getBoundingClientRect(), C = R.scrollTop, W = (I.clientY - z.top + C) / x.current * 60, Y = xM(W);
      let B = O.originalStartMinutes, U = O.originalEndMinutes, $ = O.originalStartDate, Z = O.originalEndDate;
      const ne = v.current, ue = y.current, $e = z.left + k.current, _e = I.clientX - $e, He = Hn(Math.floor(_e / ne), 0, ue.length - 1), Ne = ue[He], xe = O.edge === "bottom" ? O.originalStartDate : O.originalEndDate, Me = O.edge === "bottom" ? O.originalStartMinutes : O.originalEndMinutes, Ge = Ne.getTime() + Y * 6e4, ze = xe.getTime() + Me * 6e4;
      let Ye;
      if (Ge > ze) {
        if (Ye = "bottom", $ = xe, B = Me, Z = Ne, U = Hn(Y, 0, 1440), !Se(Ne, xe)) {
          const A = new Date(xe);
          A.setDate(A.getDate() + 1), A.setHours(0, 0, 0, 0), Se(Ne, A) && Y === 0 && (U = 1440, Z = xe);
        }
        Se($, Z) && (U = Hn(U, Me + Rr, 1440));
      } else if (Ge < ze) {
        if (Ye = "top", Z = xe, U = Me, $ = Ne, B = Hn(Y, 0, 1440), !Se(Ne, xe)) {
          const A = new Date(xe);
          A.setDate(A.getDate() - 1), A.setHours(0, 0, 0, 0), Se(Ne, A) && Y >= 1440 && (B = 0, $ = xe);
        }
        Se($, Z) && (B = Hn(B, 0, Me - Rr));
      } else
        Ye = O.edge, O.edge === "bottom" ? ($ = xe, B = Me, Z = xe, U = Me + Rr) : (Z = xe, U = Me, $ = xe, B = Me - Rr);
      const se = ic($, B), Be = ic(Z, U);
      m({
        eventId: O.eventId,
        event: O.event,
        originalStart: O.event.start,
        originalEnd: O.event.end,
        currentStart: se,
        currentEnd: Be,
        edge: O.edge,
        effectiveEdge: Ye,
        isResizing: !0,
        currentEndDate: Z,
        currentStartDate: $
      });
      const Ve = I.clientY - z.top, De = z.height;
      if (Ve < Pr) {
        const A = Ve;
        N.current = -sc * (1 - A / Pr), G();
      } else if (Ve > De - Pr) {
        const A = De - Ve;
        N.current = sc * (1 - A / Pr), G();
      } else
        P();
      const Fe = I.clientX - $e, ot = ne * ue.length;
      Fe < ac ? L(-7) : Fe > ot - ac ? L(7) : F();
    }, T.current = () => {
      const I = f.current;
      I && (H(), I.isResizing ? m((O) => {
        if (!O) return null;
        const _ = g.current.find((C) => C.id === I.eventId);
        if (!_) return null;
        const R = 1440 * 60 * 1e3, z = O.currentEnd.getTime() - O.currentStart.getTime() > R;
        return h.current?.({
          ..._,
          start: O.currentStart,
          end: O.currentEnd,
          isAllDay: z
        }), null;
      }) : m(null), f.current = null);
    };
  }, [t, H, P, G, L, F]);
  const q = we(
    (I, O, _) => {
      if (I.button !== 0) return;
      I.stopPropagation(), p.current?.(O);
      const R = O.start.getHours() * 60 + O.start.getMinutes(), z = O.end.getHours() * 60 + O.end.getMinutes(), C = We(O.start), S = We(O.end);
      f.current = {
        eventId: O.id,
        event: O,
        edge: _,
        startClientY: I.clientY,
        isResizing: !1,
        originalStartMinutes: R,
        originalEndMinutes: z,
        originalStartDate: C,
        originalEndDate: S
      }, m({
        eventId: O.id,
        event: O,
        originalStart: O.start,
        originalEnd: O.end,
        currentStart: O.start,
        currentEnd: O.end,
        edge: _,
        effectiveEdge: _,
        isResizing: !1,
        currentEndDate: S,
        currentStartDate: C
      }), D.current && window.addEventListener("mousemove", D.current), T.current && window.addEventListener("mouseup", T.current);
    },
    []
  );
  return ye(() => H, [H]), { resizeState: d, handleResizeMouseDown: q };
}
const yM = 4;
function os(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function vM({
  days: e,
  dayColumnWidth: t,
  allDayContainerRef: n,
  events: r,
  onEventChange: o,
  onEventClick: s
}) {
  const [i, c] = dt(null), l = te(null), d = te(o), m = te(s), f = te(r), h = te(e), p = te(t);
  ye(() => {
    d.current = o;
  }, [o]), ye(() => {
    m.current = s;
  }, [s]), ye(() => {
    f.current = r;
  }, [r]), ye(() => {
    h.current = e;
  }, [e]), ye(() => {
    p.current = t;
  }, [t]);
  const b = te(null), g = te(null), x = we(() => {
    b.current && window.removeEventListener("mousemove", b.current), g.current && window.removeEventListener("mouseup", g.current), document.body.style.cursor = "";
  }, []);
  ye(() => {
    b.current = (v) => {
      const k = l.current;
      if (!k) return;
      const M = Math.abs(v.clientX - k.startClientX);
      if (!k.isResizing && M < yM) return;
      k.isResizing || (k.isResizing = !0, document.body.style.cursor = k.edge === "move" ? "grabbing" : "ew-resize");
      const N = n.current;
      if (!N) return;
      const w = N.getBoundingClientRect(), E = p.current, D = h.current, T = os(
        Math.floor((v.clientX - w.left) / E),
        0,
        D.length - 1
      );
      let P = k.originalStartColumn, F = k.originalEndColumn;
      if (k.edge === "move") {
        const L = k.originalEndColumn - k.originalStartColumn, H = T - k.startColumnIndex;
        P = os(
          k.originalStartColumn + H,
          0,
          D.length - 1 - L
        ), F = P + L;
      } else k.edge === "right" ? F = Math.max(T, k.originalStartColumn) : P = Math.min(T, k.originalEndColumn);
      c({
        eventId: k.eventId,
        event: k.event,
        originalStartColumn: k.originalStartColumn,
        originalEndColumn: k.originalEndColumn,
        currentStartColumn: P,
        currentEndColumn: F,
        edge: k.edge,
        isResizing: !0,
        ...k.edge === "move" ? {
          clientX: v.clientX,
          clientY: v.clientY,
          cursorOffsetX: k.cursorOffsetX,
          cursorOffsetY: k.cursorOffsetY
        } : {}
      });
    }, g.current = () => {
      const v = l.current;
      v && (x(), v.isResizing ? c((k) => {
        if (!k) return null;
        const M = f.current.find((G) => G.id === v.eventId);
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
        const P = v.edge === "move", F = 1440 * 60 * 1e3, L = T.getTime() - D.getTime() > F, H = P ? M.isAllDay === !0 : L;
        return d.current?.({
          ...M,
          start: D,
          end: T,
          isAllDay: H
        }), null;
      }) : c(null), l.current = null);
    };
  }, [n, x]);
  const y = we(
    (v, k, M, N, w) => {
      if (v.button !== 0) return;
      v.stopPropagation(), m.current?.(k);
      const E = n.current;
      let D = N, T = 0;
      const P = 0;
      if (E) {
        const F = E.getBoundingClientRect(), L = p.current;
        D = os(
          Math.floor((v.clientX - F.left) / L),
          0,
          h.current.length - 1
        );
        const H = F.left + N * L;
        T = v.clientX - H;
      }
      l.current = {
        eventId: k.id,
        event: k,
        edge: M,
        startClientX: v.clientX,
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
  return ye(() => x, [x]), { allDayResizeState: i, handleAllDayResizeMouseDown: y };
}
const Ra = 24, Pa = 2;
function wM({
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
  dayColumnWidth: y,
  className: v
}) {
  const k = aM(t, e), M = g != null && x != null ? g + x - 1 : e.length - 1, N = g != null ? k.filter(
    ({ startColumn: T, endColumn: P }) => P >= g && T <= M
  ) : k, w = N.length > 0 ? Math.max(...N.map((T) => T.row)) + 1 : 0, E = w > 0 ? w * (Ra + Pa) + 8 : 32, D = s?.isResizing && s.edge === "move";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: j(
        "border-border flex border-t border-b bg-background",
        v
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
            N.map(({ event: T, startColumn: P, endColumn: F, row: L }) => {
              const H = s?.eventId === T.id && s.isResizing, G = H && s.edge === "move", q = H ? G ? P : s.currentStartColumn : P, I = H ? G ? F : s.currentEndColumn : F;
              return /* @__PURE__ */ a.jsx(
                kM,
                {
                  event: T,
                  startColumn: q,
                  endColumn: I,
                  row: L,
                  totalColumns: e.length,
                  days: e,
                  onEventClick: n,
                  isSelected: T.id === r,
                  onAllDayResizeMouseDown: i,
                  originalStartColumn: P,
                  originalEndColumn: F,
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
                CM,
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
          const L = (T.endColumn - T.startColumn + 1) * (y ?? 100), H = s.cursorOffsetX ?? 0;
          return nr(
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
                      width: `${L}px`
                    },
                    children: /* @__PURE__ */ a.jsx(
                      Na,
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
function kM({
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
  onClosePopover: y,
  onPrevWeek: v,
  onNextWeek: k,
  visibleStartIndex: M
}) {
  const { view: N } = pr(), w = N === "day", E = t / o * 100, D = 100 / o, T = w ? D * 0.02 : D * 0.08, P = (n - t + 1) / o * 100 - T, F = r * (Ra + Pa), L = f || Se(e.start, s[t].date), H = f || Se(e.end, s[n].date), q = (M ?? 1) / o * 100, I = w ? Math.max(0, q - E) : 0, _ = I > 0 && P > 0 ? (I + 0.1) / P * 100 : 0, R = we(
    (z, C, S) => {
      l?.(
        z,
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
        top: `${F}px`,
        paddingLeft: "2px",
        paddingRight: "2px"
      },
      children: /* @__PURE__ */ a.jsx(
        Na,
        {
          event: e,
          isPast: qn(e.end),
          isSelected: h ? !1 : c,
          onClick: i,
          spanStart: L,
          spanEnd: H,
          onResizeMouseDown: R,
          onEventChange: p,
          onContextMenuOpenChange: b,
          isSidebarOpen: g,
          onDockToSidebar: x,
          onClosePopover: y,
          onPrevWeek: v,
          onNextWeek: k,
          titleOffsetPercent: _,
          dragVariant: h ? "ghost" : void 0
        }
      )
    }
  );
}
function CM({
  event: e,
  startColumn: t,
  endColumn: n,
  row: r,
  totalColumns: o
}) {
  const s = 100 / o, i = t / o * 100, c = s * 0.08, l = (n - t + 1) / o * 100 - c, d = r * (Ra + Pa);
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
      children: /* @__PURE__ */ a.jsx(Na, { event: e, spanStart: !0, spanEnd: !0, dragVariant: "placeholder" })
    }
  );
}
function MM() {
  const e = /* @__PURE__ */ new Date(), n = e.toLocaleTimeString("en-US", {
    timeZoneName: "short"
  }).match(/\s([A-Z]{2,5})$/);
  if (n)
    return n[1];
  const r = -e.getTimezoneOffset(), o = Math.floor(Math.abs(r) / 60);
  return `GMT${r >= 0 ? "+" : "-"}${o}`;
}
function NM({
  days: e,
  standalone: t,
  className: n
}) {
  const r = MM();
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
function EM({
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
  className: y
}) {
  const { view: v } = pr(), k = v === "day", M = V.useRef(null), [N, w] = V.useState(0);
  return V.useEffect(() => {
    const E = M.current;
    if (!E) return;
    const D = new ResizeObserver((T) => {
      for (const P of T)
        w(P.contentRect.width);
    });
    return D.observe(E), () => D.disconnect();
  }, []), /* @__PURE__ */ a.jsxs("div", { ref: M, className: j("relative", y), children: [
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
          const T = sM(
            r,
            E,
            k ? 2 : 8
          );
          return /* @__PURE__ */ a.jsx(
            _M,
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
    l?.isResizing && !Se(
      l.currentStartDate,
      l.currentEndDate
    ) && /* @__PURE__ */ a.jsx(
      SM,
      {
        days: e,
        hourHeight: n,
        resizeState: l
      }
    ),
    i?.isDragging && /* @__PURE__ */ a.jsx(
      DM,
      {
        days: e,
        hourHeight: n,
        dragState: i
      }
    ),
    i?.isDragging && /* @__PURE__ */ a.jsx(
      OM,
      {
        days: e,
        hourHeight: n,
        dragState: i,
        gridWidth: N
      }
    )
  ] });
}
function DM({
  days: e,
  hourHeight: t,
  dragState: n
}) {
  const r = e.findIndex(
    (s) => Se(s.date, n.currentDate)
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
function SM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  return n.effectiveEdge === "bottom" ? /* @__PURE__ */ a.jsx(
    jM,
    {
      days: e,
      hourHeight: t,
      resizeState: n
    }
  ) : /* @__PURE__ */ a.jsx(
    TM,
    {
      days: e,
      hourHeight: t,
      resizeState: n
    }
  );
}
function jM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  const r = n.currentEndDate, o = e.findIndex(
    (i) => Se(i.date, n.currentStartDate)
  ), s = e.findIndex((i) => Se(i.date, r));
  return o === -1 || s === -1 || s <= o ? null : /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 grid pointer-events-none",
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((i, c) => {
        if (c <= o || c > s)
          return /* @__PURE__ */ a.jsx("div", {}, i.date.toISOString());
        const l = c === s, d = l ? "end" : "middle", m = We(i.date), f = m, h = l ? n.currentEnd : Ee(m, 1), p = {
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
function TM({
  days: e,
  hourHeight: t,
  resizeState: n
}) {
  const r = n.currentStartDate, o = e.findIndex((i) => Se(i.date, r)), s = e.findIndex(
    (i) => Se(i.date, n.currentEndDate)
  );
  return o === -1 || s === -1 || s <= o ? null : /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 grid pointer-events-none",
      style: { gridTemplateColumns: `repeat(${e.length}, 1fr)` },
      children: e.map((i, c) => {
        if (c < o || c >= s)
          return /* @__PURE__ */ a.jsx("div", {}, i.date.toISOString());
        const l = c === o, d = l ? "start" : "middle", m = We(i.date), f = l ? n.currentStart : m, h = Ee(m, 1), p = {
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
function OM({
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
  return nr(
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
function ss(e, t) {
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
function _M({
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
    const y = x.event.id;
    if (s?.isDragging && s.eventId === y)
      return ss(x, n);
    if (c?.isResizing && c.eventId === y) {
      const { effectiveEdge: M, currentStartDate: N, currentEndDate: w } = c, E = !Se(N, w), D = M === "bottom" && Se(e, N) || M === "top" && Se(e, w), T = e.getTime(), P = T >= N.getTime() && T <= w.getTime();
      if (!D || !P)
        return ss(x, n);
      let F, L, H;
      E ? M === "bottom" ? (F = c.currentStart, L = Ee(We(e), 1), H = "start") : (F = We(e), L = c.currentEnd, H = "end") : (F = c.currentStart, L = c.currentEnd, H = "full");
      const G = { ...x, segmentPosition: H };
      return /* @__PURE__ */ a.jsxs(V.Fragment, { children: [
        ss(x, n),
        /* @__PURE__ */ a.jsx(
          sn,
          {
            positionedEvent: G,
            hourHeight: n,
            isPast: qn(x.event.end),
            isSelected: E || y === o,
            overrideStart: F,
            overrideEnd: L,
            onEventChange: d
          },
          `${y}-resizing`
        )
      ] }, y);
    }
    return /* @__PURE__ */ a.jsx(
      sn,
      {
        positionedEvent: x,
        hourHeight: n,
        isPast: qn(x.event.end),
        isSelected: y === o,
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
      y
    );
  }) });
}
function RM({
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
function PM({
  days: e,
  hourHeight: t,
  scrollDays: n,
  scrollStyle: r,
  behindSelection: o,
  className: s
}) {
  const [i, c] = u.useState(() => /* @__PURE__ */ new Date()), d = e.findIndex((v) => v.isToday) !== -1;
  if (u.useEffect(() => {
    const v = setInterval(() => {
      c(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(v);
  }, []), !d)
    return null;
  const m = i.getHours() * 60 + i.getMinutes(), f = 1440, h = t * 24, p = m / f * h, b = me(i, "h:mma").toUpperCase(), g = n ?? e, x = g.findIndex((v) => v.isToday), y = /* @__PURE__ */ a.jsx("div", { className: "flex items-center", children: g.map((v, k) => /* @__PURE__ */ a.jsxs(u.Fragment, { children: [
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
          v.isToday ? "h-[3px] rounded-r-full shadow-[0_0_0_1px_white] dark:shadow-[0_0_0_1px_black]" : "h-[0.5px]"
        )
      }
    )
  ] }, v.date.toISOString())) });
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: j("pointer-events-none absolute left-0 right-0", o ? "z-10" : "z-20", s),
      style: { top: p },
      children: /* @__PURE__ */ a.jsxs("div", { className: "flex -translate-y-1/2 items-center", children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex w-16 flex-shrink-0 items-center justify-end pr-1", children: /* @__PURE__ */ a.jsx("span", { className: "bg-primary text-primary-foreground rounded-xs px-1 py-0.5 text-xxs font-medium", children: b }) }),
        r ? /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: r, children: y }) }) : y
      ] })
    }
  );
}
const cc = 48, as = 64, bf = {
  day: 1,
  week: 7,
  month: 7
}, AM = {
  day: 1,
  week: 7,
  month: 7
}, IM = {
  day: 1,
  week: 7,
  month: 7
};
function WM(e, t) {
  const n = Ee(e, t - 1);
  return to({ start: e, end: n }).map((r) => ({
    date: r,
    dayName: me(r, "EEE"),
    dayNumber: r.getDate()
  }));
}
function FM(e, t, n) {
  const r = Ee(e, -t), o = Ee(e, n + t - 1);
  return to({ start: r, end: o }).map(
    (s) => ({
      date: s,
      dayName: me(s, "EEE"),
      dayNumber: s.getDate()
    })
  );
}
function LM() {
  return Array.from({ length: 24 }, (e, t) => {
    const n = /* @__PURE__ */ new Date();
    return n.setHours(t, 0, 0, 0), {
      hour: t,
      label: me(n, "h a")
    };
  });
}
function yf(e, t) {
  return {
    monthName: me(e, "MMMM"),
    year: me(e, "yyyy"),
    weekNumber: rr(e, { weekStartsOn: t })
  };
}
function eo(e, t = "week") {
  const n = bf[t], r = Ee(e, n - 1);
  return to({ start: e, end: r });
}
function vf({
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
  const g = bf[e], x = AM[e], y = IM[e], v = u.useRef(null), k = u.useRef(null), M = u.useRef(null), N = u.useRef(null), E = u.useMemo(
    () => WM(t, g),
    [t, g]
  ).map((A) => ({
    ...A,
    isToday: ds(A.date)
  })), D = u.useMemo(() => LM(), []), T = u.useMemo(
    () => n.filter((A) => A.isAllDay || Jr(A)),
    [n]
  ), P = u.useMemo(
    () => n.filter((A) => !A.isAllDay && !Jr(A)),
    [n]
  ), [F, L] = u.useState(0), [H, G] = u.useState(cc), [q, I] = u.useState(!1), [O, _] = u.useState(!1);
  u.useEffect(() => {
    const A = () => {
      const Xe = v.current;
      if (!Xe) return;
      const Xt = Xe.clientWidth - as;
      L(Xt / g), G(Math.max(cc, Xe.clientHeight / 24));
    };
    A();
    const fe = new ResizeObserver(A);
    return v.current && fe.observe(v.current), () => fe.disconnect();
  }, [g]);
  const R = u.useRef(!1), z = u.useRef(t), C = u.useCallback(
    (A) => {
      R.current = !0, i?.(Ee(t, A));
    },
    [t, i]
  ), S = u.useCallback(
    (A) => {
      i?.(Ee(t, A));
    },
    [t, i]
  ), W = u.useMemo(() => E.map((A) => A.date), [E]), { resizeState: Y, handleResizeMouseDown: B } = bM({
    hourHeight: H,
    scrollContainerRef: v,
    events: P,
    days: W,
    dayColumnWidth: F,
    timeAxisWidth: as,
    onEventChange: l,
    onEventClick: r,
    onResizeNavigate: S
  }), { dragState: U, handleEventMouseDown: $ } = mM({
    hourHeight: H,
    scrollContainerRef: v,
    events: P,
    days: W,
    dayColumnWidth: F,
    timeAxisWidth: as,
    onEventChange: l,
    onEventClick: r,
    onDragNavigate: S
  }), { scrollOffset: Z, slideOffset: ne, isAnimating: ue, triggerSlideAnimation: $e } = cM({
    containerRef: v,
    dayColumnWidth: F,
    onNavigate: C,
    disabled: U?.isDragging || Y?.isResizing || O || q
  }), _e = F > 0 ? Math.round(-Z / F) : 0;
  u.useEffect(() => {
    const A = Ee(t, _e), fe = Ee(A, g - 1);
    c?.(to({ start: A, end: fe }));
  }, [t, _e, c, g]);
  const He = F > 0 && y > 0 ? Math.ceil(Math.abs(Z) / F / y) * y : 0, Ne = x + He, xe = Ne + g + Ne, Me = u.useMemo(
    () => FM(t, Ne, g),
    [t, Ne, g]
  ), Ge = Me.map((A) => ({
    ...A,
    isToday: ds(A.date)
  })), ze = u.useMemo(
    () => Me.map((A) => A.date),
    [Me]
  ), { allDayResizeState: Ye, handleAllDayResizeMouseDown: se } = vM({
    days: ze,
    dayColumnWidth: F,
    allDayContainerRef: N,
    events: T,
    onEventChange: l,
    onEventClick: r
  });
  u.useEffect(() => {
    _(Ye?.isResizing ?? !1);
  }, [Ye?.isResizing]), u.useEffect(() => {
    if (R.current) {
      R.current = !1, z.current = t;
      return;
    }
    const A = z.current, fe = Nn(t, A);
    z.current = t, fe !== 0 && $e(fe);
  }, [t, $e]);
  const Ve = -(Ne * F) + Z + ne, De = {
    width: `${xe / g * 100}%`,
    transform: `translateX(${Ve}px)`,
    transition: ue ? "transform 200ms ease-out" : "none"
  }, Fe = u.useRef(null), ot = u.useRef(null);
  return /* @__PURE__ */ a.jsx(
    Yk,
    {
      boundaryRef: Fe,
      headerRef: ot,
      view: e,
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: Fe,
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
                    k.current = A, ot.current = A;
                  },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ a.jsxs("div", { className: "flex bg-background", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "text-muted-foreground flex w-16 flex-shrink-0 items-center justify-end pr-2 text-xxs", children: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { timeZoneName: "short" }).match(/\s([A-Z]{2,5})$/)?.[1] ?? "" }),
                    /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: De, children: /* @__PURE__ */ a.jsx(NM, { days: Ge, standalone: !0 }) }) })
                  ] })
                }
              ),
              /* @__PURE__ */ a.jsx("div", { className: "overflow-hidden", ref: M, children: /* @__PURE__ */ a.jsx(
                wM,
                {
                  days: Ge,
                  allDayEvents: T,
                  onEventClick: r,
                  selectedEventId: o,
                  scrollStyle: De,
                  allDayResizeState: Ye ?? void 0,
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
                  dayColumnWidth: F
                }
              ) })
            ] }),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                ref: v,
                className: "flex-1 overflow-auto scrollbar-hide",
                children: /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "relative flex",
                    style: { height: D.length * H },
                    children: [
                      /* @__PURE__ */ a.jsx(RM, { hours: D, hourHeight: H }),
                      /* @__PURE__ */ a.jsx("div", { className: "relative flex-1 overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { style: De, children: /* @__PURE__ */ a.jsx(
                        EM,
                        {
                          days: Ge,
                          hours: D,
                          hourHeight: H,
                          events: P,
                          onEventClick: r,
                          selectedEventId: o,
                          dragState: U ?? void 0,
                          onEventDragMouseDown: $,
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
                        PM,
                        {
                          days: E,
                          hourHeight: H,
                          scrollDays: Ge,
                          scrollStyle: De,
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
function Ar(e, t) {
  return e === "day" ? We(t) : tt(t, { weekStartsOn: 0 });
}
function $M(e, t) {
  return {
    ...e,
    ...t
  };
}
function UM(e) {
  return /* @__PURE__ */ a.jsx(Sk, { className: "h-screen", children: /* @__PURE__ */ a.jsx(zM, { ...e }) });
}
function zM({
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
  const { theme: h, setTheme: p } = lf(), { open: b, toggleSidebar: g } = Co(), [x, y] = u.useState(!1), [v, k] = u.useState(!0), [M, N] = u.useState(
    () => eo(Ar(r, e), r)
  ), w = u.useMemo(
    () => Ar(r, e),
    [e, r]
  ), E = u.useMemo(
    () => t.find((z) => z.id === n) ?? null,
    [t, n]
  ), { monthName: D, weekNumber: T, year: P } = yf(
    M[0] ?? w,
    0
  ), F = u.useCallback(
    (z) => {
      l?.(z);
    },
    [l]
  ), L = u.useCallback(
    (z) => {
      f?.($M(s, z));
    },
    [f, s]
  ), H = u.useCallback(() => {
    i(Ar(r, /* @__PURE__ */ new Date()));
  }, [i, r]), G = u.useCallback(() => {
    i(
      r === "day" ? Ee(w, -1) : Un(w, -1)
    );
  }, [w, i, r]), q = u.useCallback(() => {
    i(
      r === "day" ? Ee(w, 1) : Un(w, 1)
    );
  }, [w, i, r]), I = u.useCallback(
    (z) => {
      i(z);
    },
    [i]
  ), O = u.useCallback(
    (z) => {
      i(Ar(r, z));
    },
    [i, r]
  ), _ = u.useCallback(
    (z) => {
      if (z !== r) {
        if (d(z), z === "day") {
          i(We(/* @__PURE__ */ new Date()));
          return;
        }
        i(
          tt(w, { weekStartsOn: 0 })
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
    N(eo(w, r));
  }, [w, r]), u.useEffect(() => {
    const z = (C) => {
      if ((C.metaKey || C.ctrlKey) && C.key === "k") {
        C.preventDefault(), y((W) => !W);
        return;
      }
      if (C.metaKey && C.key === "/") {
        C.preventDefault(), k((W) => !W);
        return;
      }
      if (C.key === "e" && C.shiftKey && (C.metaKey || C.ctrlKey)) {
        C.preventDefault(), L({ showWeekends: !s.showWeekends });
        return;
      }
      if (C.key === "d" && C.shiftKey && (C.metaKey || C.ctrlKey)) {
        C.preventDefault(), L({
          showDeclinedEvents: !s.showDeclinedEvents
        });
        return;
      }
      if (C.key === "," && (C.metaKey || C.ctrlKey)) {
        C.preventDefault();
        return;
      }
      if (C.key === "Escape") {
        F(null);
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
          C.preventDefault(), _("day");
          return;
        }
        if (C.key === "0" || C.key === "w" || C.key === "W") {
          C.preventDefault(), _("week");
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
        C.key === "m" && (C.preventDefault(), _("month"));
      }
    };
    return window.addEventListener("keydown", z), () => {
      window.removeEventListener("keydown", z);
    };
  }, [
    R,
    q,
    G,
    H,
    m,
    F,
    _,
    g,
    L,
    s.showDeclinedEvents,
    s.showWeekends
  ]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      lk,
      {
        open: x,
        onOpenChange: y,
        onGoToToday: H,
        onGoToPrev: G,
        onGoToNext: q,
        onSwitchView: _,
        onToggleLeftSidebar: () => k((z) => !z),
        onToggleRightSidebar: g,
        onCycleTheme: R
      }
    ),
    /* @__PURE__ */ a.jsx(
      YC,
      {
        open: v,
        onDateSelect: O,
        currentDate: w,
        visibleDays: M
      }
    ),
    /* @__PURE__ */ a.jsxs(Tk, { className: "flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ a.jsxs("header", { className: "bg-background sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center gap-2 px-4", children: [
          /* @__PURE__ */ a.jsxs(It, { children: [
            /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsxs(
              Pe,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 text-muted-foreground",
                onClick: () => k((z) => !z),
                children: [
                  /* @__PURE__ */ a.jsx(Wp, {}),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle Calendar Sidebar" })
                ]
              }
            ) }),
            /* @__PURE__ */ a.jsxs(Ft, { side: "bottom", children: [
              v ? "Close" : "Open",
              " sidebar",
              " ",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "⌘" }),
              " ",
              /* @__PURE__ */ a.jsx(ie, { children: "/" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx(
            Sd,
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
              r === "day" && me(w, "EEEE, MMM d"),
              r === "week" && `Week ${T}`,
              r === "month" && me(w, "MMMM")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ a.jsxs(QC, { className: "size-7", children: [
            /* @__PURE__ */ a.jsx(
              ZC,
              {
                src: "https://github.com/vmnog.png",
                alt: "Victor Nogueira"
              }
            ),
            /* @__PURE__ */ a.jsx(JC, { children: "VN" })
          ] }),
          /* @__PURE__ */ a.jsx(
            xf,
            {
              view: r,
              numberOfDays: o,
              viewSettings: s,
              onSwitchView: _,
              onSetNumberOfDays: (z) => m?.(z),
              onToggleWeekends: () => L({ showWeekends: !s.showWeekends }),
              onToggleDeclinedEvents: () => L({
                showDeclinedEvents: !s.showDeclinedEvents
              }),
              onToggleWeekNumbers: () => L({
                showWeekNumbers: !s.showWeekNumbers
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Pe,
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
              Pe,
              {
                variant: "ghost",
                size: "icon",
                className: "size-8 text-muted-foreground",
                onClick: G,
                children: [
                  /* @__PURE__ */ a.jsx($s, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: r === "day" ? "Previous day" : "Previous week" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              Pe,
              {
                variant: "ghost",
                size: "icon",
                className: "size-8 text-muted-foreground",
                onClick: q,
                children: [
                  /* @__PURE__ */ a.jsx(or, { className: "size-4" }),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: r === "day" ? "Next day" : "Next week" })
                ]
              }
            )
          ] }),
          !b && /* @__PURE__ */ a.jsxs(It, { children: [
            /* @__PURE__ */ a.jsx(Wt, { asChild: !0, children: /* @__PURE__ */ a.jsxs(
              Pe,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 text-muted-foreground",
                onClick: g,
                children: [
                  /* @__PURE__ */ a.jsx(zs, {}),
                  /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle Navigation Sidebar" })
                ]
              }
            ) }),
            /* @__PURE__ */ a.jsxs(Ft, { side: "bottom", children: [
              "Open context panel ",
              /* @__PURE__ */ a.jsx(ie, { className: "ml-1", children: "/" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ a.jsx(
        vf,
        {
          view: r,
          currentDate: w,
          events: t,
          onEventClick: (z) => F(z.id),
          selectedEventId: E?.id,
          onBackgroundClick: () => F(null),
          onDateChange: I,
          onVisibleDaysChange: N,
          onEventChange: c,
          isSidebarOpen: b,
          onDockToSidebar: () => {
            b || g();
          },
          onClosePopover: () => F(null),
          onPrevWeek: G,
          onNextWeek: q
        }
      ) })
    ] }),
    /* @__PURE__ */ a.jsx(
      Zk,
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
function is(e, t) {
  return e === "day" ? We(t) : tt(t, { weekStartsOn: 0 });
}
function YM(e, t) {
  return {
    ...e,
    ...t
  };
}
function qM({
  className: e,
  currentDate: t,
  events: n,
  numberOfDays: r,
  selectedEventId: o = null,
  view: s,
  viewSettings: i,
  onCurrentDateChange: c,
  onEventChange: l,
  onEventClick: d,
  onSelectedEventIdChange: m,
  onViewChange: f,
  onNumberOfDaysChange: h,
  onViewSettingsChange: p
}) {
  const [b, g] = u.useState(
    () => eo(is(s, t), s)
  ), x = u.useMemo(
    () => is(s, t),
    [t, s]
  ), y = u.useMemo(
    () => n.find((L) => L.id === o) ?? null,
    [n, o]
  ), { monthName: v, weekNumber: k, year: M } = yf(
    b[0] ?? x,
    0
  ), N = u.useCallback(
    (L) => {
      m?.(L);
    },
    [m]
  ), w = u.useCallback(
    (L) => {
      p?.(YM(i, L));
    },
    [p, i]
  ), E = u.useCallback(() => {
    c(is(s, /* @__PURE__ */ new Date()));
  }, [c, s]), D = u.useCallback(() => {
    c(
      s === "day" ? Ee(x, -1) : Un(x, -1)
    );
  }, [x, c, s]), T = u.useCallback(() => {
    c(
      s === "day" ? Ee(x, 1) : Un(x, 1)
    );
  }, [x, c, s]), P = u.useCallback(
    (L) => {
      if (L !== s) {
        if (f(L), L === "day") {
          c(We(/* @__PURE__ */ new Date()));
          return;
        }
        c(
          tt(x, { weekStartsOn: 0 })
        );
      }
    },
    [x, c, f, s]
  ), F = u.useCallback(
    (L) => {
      N(L.id), d?.(L);
    },
    [d, N]
  );
  return u.useEffect(() => {
    g(eo(x, s));
  }, [x, s]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: j(
        "bg-background flex h-full min-h-0 flex-col overflow-hidden rounded-lg border",
        e
      ),
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between gap-3 border-b px-4 py-3", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ a.jsxs("h3", { className: "truncate text-lg font-semibold", children: [
              v,
              " ",
              M
            ] }),
            /* @__PURE__ */ a.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              s === "day" && me(x, "EEEE, MMM d"),
              s === "week" && `Week ${k}`,
              s === "month" && me(x, "MMMM")
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(
              xf,
              {
                view: s,
                numberOfDays: r,
                viewSettings: i,
                onSwitchView: P,
                onSetNumberOfDays: (L) => h?.(L),
                onToggleWeekends: () => w({ showWeekends: !i.showWeekends }),
                onToggleDeclinedEvents: () => w({
                  showDeclinedEvents: !i.showDeclinedEvents
                }),
                onToggleWeekNumbers: () => w({
                  showWeekNumbers: !i.showWeekNumbers
                })
              }
            ),
            /* @__PURE__ */ a.jsx(
              Pe,
              {
                variant: "secondary",
                size: "sm",
                className: "px-3",
                onClick: E,
                children: "Today"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ a.jsxs(
                Pe,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "size-8 text-muted-foreground",
                  onClick: D,
                  children: [
                    /* @__PURE__ */ a.jsx($s, { className: "size-4" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: s === "day" ? "Previous day" : "Previous week" })
                  ]
                }
              ),
              /* @__PURE__ */ a.jsxs(
                Pe,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "size-8 text-muted-foreground",
                  onClick: T,
                  children: [
                    /* @__PURE__ */ a.jsx(or, { className: "size-4" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: s === "day" ? "Next day" : "Next week" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ a.jsx(
          vf,
          {
            view: s,
            currentDate: x,
            events: n,
            onEventClick: F,
            selectedEventId: y?.id,
            onBackgroundClick: () => N(null),
            onDateChange: c,
            onVisibleDaysChange: g,
            onEventChange: l,
            isSidebarOpen: !1,
            onClosePopover: () => N(null),
            onPrevWeek: D,
            onNextWeek: T,
            className: "h-full"
          }
        ) })
      ]
    }
  );
}
export {
  UM as CalendarCN,
  qM as CalendarCNEmbedded,
  VM as ThemeProvider,
  vf as WeekView,
  yf as getCalendarHeaderInfo,
  eo as getVisibleDays,
  lf as useTheme
};
