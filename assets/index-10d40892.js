function fd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var mv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var V = {},
  pd = {
    get exports() {
      return V;
    },
    set exports(e) {
      V = e;
    },
  },
  no = {},
  x = {},
  hd = {
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
    },
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for("react.element"),
  md = Symbol.for("react.portal"),
  vd = Symbol.for("react.fragment"),
  gd = Symbol.for("react.strict_mode"),
  yd = Symbol.for("react.profiler"),
  wd = Symbol.for("react.provider"),
  Sd = Symbol.for("react.context"),
  Ed = Symbol.for("react.forward_ref"),
  kd = Symbol.for("react.suspense"),
  xd = Symbol.for("react.memo"),
  Cd = Symbol.for("react.lazy"),
  ta = Symbol.iterator;
function Pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ta && e[ta]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zs = Object.assign,
  Ms = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ms),
    (this.updater = n || Ts);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Os() {}
Os.prototype = Kn.prototype;
function bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ms),
    (this.updater = n || Ts);
}
var eu = (bi.prototype = new Os());
eu.constructor = bi;
zs(eu, Kn.prototype);
eu.isPureReactComponent = !0;
var na = Array.isArray,
  js = Object.prototype.hasOwnProperty,
  tu = { current: null },
  Fs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Is(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      js.call(t, r) && !Fs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Hr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: tu.current,
  };
}
function _d(e, t) {
  return {
    $$typeof: Hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function Rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ra = /\/+/g;
function No(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rd("" + e.key)
    : t.toString(36);
}
function vl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hr:
          case md:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + No(i, 0) : r),
      na(l)
        ? ((n = ""),
          e != null && (n = e.replace(ra, "$&/") + "/"),
          vl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (nu(l) &&
            (l = _d(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ra, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), na(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + No(o, u);
      i += vl(o, t, n, a, l);
    }
  else if (((a = Pd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + No(o, u++)), (i += vl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    vl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Nd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  gl = { transition: null },
  Dd = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: gl,
    ReactCurrentOwner: tu,
  };
B.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
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
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!nu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Kn;
B.Fragment = vd;
B.Profiler = yd;
B.PureComponent = bi;
B.StrictMode = gd;
B.Suspense = kd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = tu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      js.call(t, a) &&
        !Fs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Hr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wd, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Is;
B.createFactory = function (e) {
  var t = Is.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Ed, render: e };
};
B.isValidElement = nu;
B.lazy = function (e) {
  return { $$typeof: Cd, _payload: { _status: -1, _result: e }, _init: Nd };
};
B.memo = function (e, t) {
  return { $$typeof: xd, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
B.useContext = function (e) {
  return _e.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
B.useId = function () {
  return _e.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return _e.current.useRef(e);
};
B.useState = function (e) {
  return _e.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return _e.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(hd);
const Us = dd(x),
  ri = fd({ __proto__: null, default: Us }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld = x,
  Td = Symbol.for("react.element"),
  zd = Symbol.for("react.fragment"),
  Md = Object.prototype.hasOwnProperty,
  Od = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function As(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Md.call(t, r) && !jd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Td,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Od.current,
  };
}
no.Fragment = zd;
no.jsx = As;
no.jsxs = As;
(function (e) {
  e.exports = no;
})(pd);
var li = {},
  oi = {},
  Fd = {
    get exports() {
      return oi;
    },
    set exports(e) {
      oi = e;
    },
  },
  Ae = {},
  ii = {},
  Id = {
    get exports() {
      return ii;
    },
    set exports(e) {
      ii = e;
    },
  },
  $s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, j) {
    var I = _.length;
    _.push(j);
    e: for (; 0 < I; ) {
      var q = (I - 1) >>> 1,
        ie = _[q];
      if (0 < l(ie, j)) (_[q] = j), (_[I] = ie), (I = q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0],
      I = _.pop();
    if (I !== j) {
      _[0] = I;
      e: for (var q = 0, ie = _.length, mn = ie >>> 1; q < mn; ) {
        var st = 2 * (q + 1) - 1,
          ct = _[st],
          nt = st + 1,
          Ct = _[nt];
        if (0 > l(ct, I))
          nt < ie && 0 > l(Ct, ct)
            ? ((_[q] = Ct), (_[nt] = I), (q = nt))
            : ((_[q] = ct), (_[st] = I), (q = st));
        else if (nt < ie && 0 > l(Ct, I)) (_[q] = Ct), (_[nt] = I), (q = nt);
        else break e;
      }
    }
    return j;
  }
  function l(_, j) {
    var I = _.sortIndex - j.sortIndex;
    return I !== 0 ? I : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    d = 1,
    h = null,
    c = 3,
    v = !1,
    w = !1,
    y = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(_) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= _)
        r(s), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(s);
    }
  }
  function g(_) {
    if (((y = !1), m(_), !w))
      if (n(a) !== null) (w = !0), Gn(P);
      else {
        var j = n(s);
        j !== null && Zn(g, j.startTime - _);
      }
  }
  function P(_, j) {
    (w = !1), y && ((y = !1), p(T), (T = -1)), (v = !0);
    var I = c;
    try {
      for (
        m(j), h = n(a);
        h !== null && (!(h.expirationTime > j) || (_ && !Me()));

      ) {
        var q = h.callback;
        if (typeof q == "function") {
          (h.callback = null), (c = h.priorityLevel);
          var ie = q(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ie == "function" ? (h.callback = ie) : h === n(a) && r(a),
            m(j);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var mn = !0;
      else {
        var st = n(s);
        st !== null && Zn(g, st.startTime - j), (mn = !1);
      }
      return mn;
    } finally {
      (h = null), (c = I), (v = !1);
    }
  }
  var D = !1,
    N = null,
    T = -1,
    Y = 5,
    O = -1;
  function Me() {
    return !(e.unstable_now() - O < Y);
  }
  function Kt() {
    if (N !== null) {
      var _ = e.unstable_now();
      O = _;
      var j = !0;
      try {
        j = N(!0, _);
      } finally {
        j ? Yt() : ((D = !1), (N = null));
      }
    } else D = !1;
  }
  var Yt;
  if (typeof f == "function")
    Yt = function () {
      f(Kt);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      Xt = ye.port2;
    (ye.port1.onmessage = Kt),
      (Yt = function () {
        Xt.postMessage(null);
      });
  } else
    Yt = function () {
      z(Kt, 0);
    };
  function Gn(_) {
    (N = _), D || ((D = !0), Yt());
  }
  function Zn(_, j) {
    T = z(function () {
      _(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Gn(P));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = c;
      }
      var I = c;
      c = j;
      try {
        return _();
      } finally {
        c = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = c;
      c = _;
      try {
        return j();
      } finally {
        c = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, j, I) {
      var q = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? q + I : q))
          : (I = q),
        _)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = I + ie),
        (_ = {
          id: d++,
          callback: j,
          priorityLevel: _,
          startTime: I,
          expirationTime: ie,
          sortIndex: -1,
        }),
        I > q
          ? ((_.sortIndex = I),
            t(s, _),
            n(a) === null &&
              _ === n(s) &&
              (y ? (p(T), (T = -1)) : (y = !0), Zn(g, I - q)))
          : ((_.sortIndex = ie), t(a, _), w || v || ((w = !0), Gn(P))),
        _
      );
    }),
    (e.unstable_shouldYield = Me),
    (e.unstable_wrapCallback = function (_) {
      var j = c;
      return function () {
        var I = c;
        c = j;
        try {
          return _.apply(this, arguments);
        } finally {
          c = I;
        }
      };
    });
})($s);
(function (e) {
  e.exports = $s;
})(Id);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs = x,
  Ue = ii;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Vs = new Set(),
  Pr = {};
function pn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ui = Object.prototype.hasOwnProperty,
  Ud =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  oa = {};
function Ad(e) {
  return ui.call(oa, e)
    ? !0
    : ui.call(la, e)
    ? !1
    : Ud.test(e)
    ? (oa[e] = !0)
    : ((la[e] = !0), !1);
}
function $d(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bd(e, t, n, r) {
  if (t === null || typeof t > "u" || $d(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Re(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Re(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ru = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, lu);
    ge[t] = new Re(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, lu);
    ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ru, lu);
  ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Re(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ou(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bd(t, n, l, r) && (n = null),
    r || l === null
      ? Ad(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  el = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  iu = Symbol.for("react.strict_mode"),
  ai = Symbol.for("react.profiler"),
  Ws = Symbol.for("react.provider"),
  Hs = Symbol.for("react.context"),
  uu = Symbol.for("react.forward_ref"),
  si = Symbol.for("react.suspense"),
  ci = Symbol.for("react.suspense_list"),
  au = Symbol.for("react.memo"),
  _t = Symbol.for("react.lazy"),
  Qs = Symbol.for("react.offscreen"),
  ia = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ia && e[ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Do;
function cr(e) {
  if (Do === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Do = (t && t[1]) || "";
    }
  return (
    `
` +
    Do +
    e
  );
}
var Lo = !1;
function To(e, t) {
  if (!e || Lo) return "";
  Lo = !0;
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
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Lo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Vd(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = To(e.type, !1)), e;
    case 11:
      return (e = To(e.type.render, !1)), e;
    case 1:
      return (e = To(e.type, !0)), e;
    default:
      return "";
  }
}
function fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case yn:
      return "Portal";
    case ai:
      return "Profiler";
    case iu:
      return "StrictMode";
    case si:
      return "Suspense";
    case ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hs:
        return (e.displayName || "Context") + ".Consumer";
      case Ws:
        return (e._context.displayName || "Context") + ".Provider";
      case uu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case au:
        return (
          (t = e.displayName || null), t !== null ? t : fi(e.type) || "Memo"
        );
      case _t:
        (t = e._payload), (e = e._init);
        try {
          return fi(e(t));
        } catch {}
    }
  return null;
}
function Wd(e) {
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
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return fi(t);
    case 8:
      return t === iu ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ks(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Hd(e) {
  var t = Ks(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function tl(e) {
  e._valueTracker || (e._valueTracker = Hd(e));
}
function Ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ks(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function di(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ua(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xs(e, t) {
  (t = t.checked), t != null && ou(e, "checked", t, !1);
}
function pi(e, t) {
  Xs(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hi(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function aa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Gs(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ca(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var nl,
  Js = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        nl = nl || document.createElement("div"),
          nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = nl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
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
  Qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Qd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function qs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function bs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = qs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Kd = re(
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
function gi(e, t) {
  if (t) {
    if (Kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function yi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var wi = null;
function su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Si = null,
  zn = null,
  Mn = null;
function fa(e) {
  if ((e = Yr(e))) {
    if (typeof Si != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = uo(t)), Si(e.stateNode, e.type, t));
  }
}
function ec(e) {
  zn ? (Mn ? Mn.push(e) : (Mn = [e])) : (zn = e);
}
function tc() {
  if (zn) {
    var e = zn,
      t = Mn;
    if (((Mn = zn = null), fa(e), t)) for (e = 0; e < t.length; e++) fa(t[e]);
  }
}
function nc(e, t) {
  return e(t);
}
function rc() {}
var zo = !1;
function lc(e, t, n) {
  if (zo) return e(t, n);
  zo = !0;
  try {
    return nc(e, t, n);
  } finally {
    (zo = !1), (zn !== null || Mn !== null) && (rc(), tc());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uo(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ei = !1;
if (yt)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        Ei = !0;
      },
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr);
  } catch {
    Ei = !1;
  }
function Yd(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var vr = !1,
  Ll = null,
  Tl = !1,
  ki = null,
  Xd = {
    onError: function (e) {
      (vr = !0), (Ll = e);
    },
  };
function Gd(e, t, n, r, l, o, i, u, a) {
  (vr = !1), (Ll = null), Yd.apply(Xd, arguments);
}
function Zd(e, t, n, r, l, o, i, u, a) {
  if ((Gd.apply(this, arguments), vr)) {
    if (vr) {
      var s = Ll;
      (vr = !1), (Ll = null);
    } else throw Error(k(198));
    Tl || ((Tl = !0), (ki = s));
  }
}
function hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function da(e) {
  if (hn(e) !== e) throw Error(k(188));
}
function Jd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return da(l), e;
        if (o === r) return da(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ic(e) {
  return (e = Jd(e)), e !== null ? uc(e) : null;
}
function uc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ac = Ue.unstable_scheduleCallback,
  pa = Ue.unstable_cancelCallback,
  qd = Ue.unstable_shouldYield,
  bd = Ue.unstable_requestPaint,
  oe = Ue.unstable_now,
  ep = Ue.unstable_getCurrentPriorityLevel,
  cu = Ue.unstable_ImmediatePriority,
  sc = Ue.unstable_UserBlockingPriority,
  zl = Ue.unstable_NormalPriority,
  tp = Ue.unstable_LowPriority,
  cc = Ue.unstable_IdlePriority,
  ro = null,
  it = null;
function np(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : op,
  rp = Math.log,
  lp = Math.LN2;
function op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rp(e) / lp) | 0)) | 0;
}
var rl = 64,
  ll = 4194304;
function dr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = dr(u)) : ((o &= i), o !== 0 && (r = dr(o)));
  } else (i = n & ~l), i !== 0 ? (r = dr(i)) : o !== 0 && (r = dr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ip(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function up(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - be(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = ip(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fc() {
  var e = rl;
  return (rl <<= 1), !(rl & 4194240) && (rl = 64), e;
}
function Mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - be(t)),
    (e[t] = n);
}
function ap(e, t) {
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
    var l = 31 - be(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var K = 0;
function dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pc,
  du,
  hc,
  mc,
  vc,
  Ci = !1,
  ol = [],
  zt = null,
  Mt = null,
  Ot = null,
  Nr = new Map(),
  Dr = new Map(),
  Nt = [],
  sp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ha(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dr.delete(t.pointerId);
  }
}
function nr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Yr(t)), t !== null && du(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function cp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (zt = nr(zt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Mt = nr(Mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ot = nr(Ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Nr.set(o, nr(Nr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Dr.set(o, nr(Dr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function gc(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oc(n)), t !== null)) {
          (e.blockedOn = t),
            vc(e.priority, function () {
              hc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wi = r), n.target.dispatchEvent(r), (wi = null);
    } else return (t = Yr(n)), t !== null && du(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ma(e, t, n) {
  yl(e) && n.delete(t);
}
function fp() {
  (Ci = !1),
    zt !== null && yl(zt) && (zt = null),
    Mt !== null && yl(Mt) && (Mt = null),
    Ot !== null && yl(Ot) && (Ot = null),
    Nr.forEach(ma),
    Dr.forEach(ma);
}
function rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ci ||
      ((Ci = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, fp)));
}
function Lr(e) {
  function t(l) {
    return rr(l, e);
  }
  if (0 < ol.length) {
    rr(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && rr(zt, e),
      Mt !== null && rr(Mt, e),
      Ot !== null && rr(Ot, e),
      Nr.forEach(t),
      Dr.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    (r = Nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    gc(n), n.blockedOn === null && Nt.shift();
}
var On = kt.ReactCurrentBatchConfig,
  Ol = !0;
function dp(e, t, n, r) {
  var l = K,
    o = On.transition;
  On.transition = null;
  try {
    (K = 1), pu(e, t, n, r);
  } finally {
    (K = l), (On.transition = o);
  }
}
function pp(e, t, n, r) {
  var l = K,
    o = On.transition;
  On.transition = null;
  try {
    (K = 4), pu(e, t, n, r);
  } finally {
    (K = l), (On.transition = o);
  }
}
function pu(e, t, n, r) {
  if (Ol) {
    var l = Pi(e, t, n, r);
    if (l === null) Wo(e, t, r, jl, n), ha(e, r);
    else if (cp(l, e, t, n, r)) r.stopPropagation();
    else if ((ha(e, r), t & 4 && -1 < sp.indexOf(e))) {
      for (; l !== null; ) {
        var o = Yr(l);
        if (
          (o !== null && pc(o),
          (o = Pi(e, t, n, r)),
          o === null && Wo(e, t, r, jl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wo(e, t, r, null, n);
  }
}
var jl = null;
function Pi(e, t, n, r) {
  if (((jl = null), (e = su(r)), (e = tn(e)), e !== null))
    if (((t = hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function yc(e) {
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
      switch (ep()) {
        case cu:
          return 1;
        case sc:
          return 4;
        case zl:
        case tp:
          return 16;
        case cc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  hu = null,
  wl = null;
function wc() {
  if (wl) return wl;
  var e,
    t = hu,
    n = t.length,
    r,
    l = "value" in Lt ? Lt.value : Lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (wl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function il() {
  return !0;
}
function va() {
  return !1;
}
function $e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? il
        : va),
      (this.isPropagationStopped = va),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = il));
      },
      persist: function () {},
      isPersistent: il,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mu = $e(Yn),
  Kr = re({}, Yn, { view: 0, detail: 0 }),
  hp = $e(Kr),
  Oo,
  jo,
  lr,
  lo = re({}, Kr, {
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
    getModifierState: vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((Oo = e.screenX - lr.screenX), (jo = e.screenY - lr.screenY))
              : (jo = Oo = 0),
            (lr = e)),
          Oo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jo;
    },
  }),
  ga = $e(lo),
  mp = re({}, lo, { dataTransfer: 0 }),
  vp = $e(mp),
  gp = re({}, Kr, { relatedTarget: 0 }),
  Fo = $e(gp),
  yp = re({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wp = $e(yp),
  Sp = re({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ep = $e(Sp),
  kp = re({}, Yn, { data: 0 }),
  ya = $e(kp),
  xp = {
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
  Cp = {
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
  Pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function vu() {
  return _p;
}
var Rp = re({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = xp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cp[e.keyCode] || "Unidentified"
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
    getModifierState: vu,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Np = $e(Rp),
  Dp = re({}, lo, {
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
  }),
  wa = $e(Dp),
  Lp = re({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vu,
  }),
  Tp = $e(Lp),
  zp = re({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = $e(zp),
  Op = re({}, lo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  jp = $e(Op),
  Fp = [9, 13, 27, 32],
  gu = yt && "CompositionEvent" in window,
  gr = null;
yt && "documentMode" in document && (gr = document.documentMode);
var Ip = yt && "TextEvent" in window && !gr,
  Sc = yt && (!gu || (gr && 8 < gr && 11 >= gr)),
  Sa = String.fromCharCode(32),
  Ea = !1;
function Ec(e, t) {
  switch (e) {
    case "keyup":
      return Fp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function Up(e, t) {
  switch (e) {
    case "compositionend":
      return kc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ea = !0), Sa);
    case "textInput":
      return (e = t.data), e === Sa && Ea ? null : e;
    default:
      return null;
  }
}
function Ap(e, t) {
  if (Sn)
    return e === "compositionend" || (!gu && Ec(e, t))
      ? ((e = wc()), (wl = hu = Lt = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $p = {
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
function ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$p[e.type] : t === "textarea";
}
function xc(e, t, n, r) {
  ec(r),
    (t = Fl(t, "onChange")),
    0 < t.length &&
      ((n = new mu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  Tr = null;
function Bp(e) {
  Oc(e, 0);
}
function oo(e) {
  var t = xn(e);
  if (Ys(t)) return e;
}
function Vp(e, t) {
  if (e === "change") return t;
}
var Cc = !1;
if (yt) {
  var Io;
  if (yt) {
    var Uo = "oninput" in document;
    if (!Uo) {
      var xa = document.createElement("div");
      xa.setAttribute("oninput", "return;"),
        (Uo = typeof xa.oninput == "function");
    }
    Io = Uo;
  } else Io = !1;
  Cc = Io && (!document.documentMode || 9 < document.documentMode);
}
function Ca() {
  yr && (yr.detachEvent("onpropertychange", Pc), (Tr = yr = null));
}
function Pc(e) {
  if (e.propertyName === "value" && oo(Tr)) {
    var t = [];
    xc(t, Tr, e, su(e)), lc(Bp, t);
  }
}
function Wp(e, t, n) {
  e === "focusin"
    ? (Ca(), (yr = t), (Tr = n), yr.attachEvent("onpropertychange", Pc))
    : e === "focusout" && Ca();
}
function Hp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oo(Tr);
}
function Qp(e, t) {
  if (e === "click") return oo(t);
}
function Kp(e, t) {
  if (e === "input" || e === "change") return oo(t);
}
function Yp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : Yp;
function zr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ui.call(t, l) || !tt(e[l], t[l])) return !1;
  }
  return !0;
}
function Pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _a(e, t) {
  var n = Pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pa(n);
  }
}
function _c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _c(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rc() {
  for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dl(e.document);
  }
  return t;
}
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Xp(e) {
  var t = Rc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = _a(n, o));
        var i = _a(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gp = yt && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  _i = null,
  wr = null,
  Ri = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ri ||
    En == null ||
    En !== Dl(r) ||
    ((r = En),
    "selectionStart" in r && yu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && zr(wr, r)) ||
      ((wr = r),
      (r = Fl(_i, "onSelect")),
      0 < r.length &&
        ((t = new mu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: ul("Animation", "AnimationEnd"),
    animationiteration: ul("Animation", "AnimationIteration"),
    animationstart: ul("Animation", "AnimationStart"),
    transitionend: ul("Transition", "TransitionEnd"),
  },
  Ao = {},
  Nc = {};
yt &&
  ((Nc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function io(e) {
  if (Ao[e]) return Ao[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nc) return (Ao[e] = t[n]);
  return e;
}
var Dc = io("animationend"),
  Lc = io("animationiteration"),
  Tc = io("animationstart"),
  zc = io("transitionend"),
  Mc = new Map(),
  Na =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Vt(e, t) {
  Mc.set(e, t), pn(t, [e]);
}
for (var $o = 0; $o < Na.length; $o++) {
  var Bo = Na[$o],
    Zp = Bo.toLowerCase(),
    Jp = Bo[0].toUpperCase() + Bo.slice(1);
  Vt(Zp, "on" + Jp);
}
Vt(Dc, "onAnimationEnd");
Vt(Lc, "onAnimationIteration");
Vt(Tc, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(zc, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qp = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Da(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zd(r, t, void 0, e), (e.currentTarget = null);
}
function Oc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Da(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Da(l, u, s), (o = a);
        }
    }
  }
  if (Tl) throw ((e = ki), (Tl = !1), (ki = null), e);
}
function Z(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, !1), n.add(r));
}
function Vo(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[al]) {
    (e[al] = !0),
      Vs.forEach(function (n) {
        n !== "selectionchange" && (qp.has(n) || Vo(n, !1, e), Vo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[al] || ((t[al] = !0), Vo("selectionchange", !1, t));
  }
}
function jc(e, t, n, r) {
  switch (yc(t)) {
    case 1:
      var l = dp;
      break;
    case 4:
      l = pp;
      break;
    default:
      l = pu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ei ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Wo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = tn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  lc(function () {
    var s = o,
      d = su(n),
      h = [];
    e: {
      var c = Mc.get(e);
      if (c !== void 0) {
        var v = mu,
          w = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Np;
            break;
          case "focusin":
            (w = "focus"), (v = Fo);
            break;
          case "focusout":
            (w = "blur"), (v = Fo);
            break;
          case "beforeblur":
          case "afterblur":
            v = Fo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ga;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = vp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Tp;
            break;
          case Dc:
          case Lc:
          case Tc:
            v = wp;
            break;
          case zc:
            v = Mp;
            break;
          case "scroll":
            v = hp;
            break;
          case "wheel":
            v = jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ep;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = wa;
        }
        var y = (t & 4) !== 0,
          z = !y && e === "scroll",
          p = y ? (c !== null ? c + "Capture" : null) : c;
        y = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (
            (m.tag === 5 &&
              g !== null &&
              ((m = g),
              p !== null && ((g = Rr(f, p)), g != null && y.push(Or(f, g, m)))),
            z)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((c = new v(c, w, null, n, d)), h.push({ event: c, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          c &&
            n !== wi &&
            (w = n.relatedTarget || n.fromElement) &&
            (tn(w) || w[wt]))
        )
          break e;
        if (
          (v || c) &&
          ((c =
            d.window === d
              ? d
              : (c = d.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = s),
              (w = w ? tn(w) : null),
              w !== null &&
                ((z = hn(w)), w !== z || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = s)),
          v !== w)
        ) {
          if (
            ((y = ga),
            (g = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = wa),
              (g = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (z = v == null ? c : xn(v)),
            (m = w == null ? c : xn(w)),
            (c = new y(g, f + "leave", v, n, d)),
            (c.target = z),
            (c.relatedTarget = m),
            (g = null),
            tn(d) === s &&
              ((y = new y(p, f + "enter", w, n, d)),
              (y.target = m),
              (y.relatedTarget = z),
              (g = y)),
            (z = g),
            v && w)
          )
            t: {
              for (y = v, p = w, f = 0, m = y; m; m = gn(m)) f++;
              for (m = 0, g = p; g; g = gn(g)) m++;
              for (; 0 < f - m; ) (y = gn(y)), f--;
              for (; 0 < m - f; ) (p = gn(p)), m--;
              for (; f--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = gn(y)), (p = gn(p));
              }
              y = null;
            }
          else y = null;
          v !== null && La(h, c, v, y, !1),
            w !== null && z !== null && La(h, z, w, y, !0);
        }
      }
      e: {
        if (
          ((c = s ? xn(s) : window),
          (v = c.nodeName && c.nodeName.toLowerCase()),
          v === "select" || (v === "input" && c.type === "file"))
        )
          var P = Vp;
        else if (ka(c))
          if (Cc) P = Kp;
          else {
            P = Hp;
            var D = Wp;
          }
        else
          (v = c.nodeName) &&
            v.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (P = Qp);
        if (P && (P = P(e, s))) {
          xc(h, P, n, d);
          break e;
        }
        D && D(e, c, s),
          e === "focusout" &&
            (D = c._wrapperState) &&
            D.controlled &&
            c.type === "number" &&
            hi(c, "number", c.value);
      }
      switch (((D = s ? xn(s) : window), e)) {
        case "focusin":
          (ka(D) || D.contentEditable === "true") &&
            ((En = D), (_i = s), (wr = null));
          break;
        case "focusout":
          wr = _i = En = null;
          break;
        case "mousedown":
          Ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ri = !1), Ra(h, n, d);
          break;
        case "selectionchange":
          if (Gp) break;
        case "keydown":
        case "keyup":
          Ra(h, n, d);
      }
      var N;
      if (gu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Sn
          ? Ec(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Sc &&
          n.locale !== "ko" &&
          (Sn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Sn && (N = wc())
            : ((Lt = d),
              (hu = "value" in Lt ? Lt.value : Lt.textContent),
              (Sn = !0))),
        (D = Fl(s, T)),
        0 < D.length &&
          ((T = new ya(T, e, null, n, d)),
          h.push({ event: T, listeners: D }),
          N ? (T.data = N) : ((N = kc(n)), N !== null && (T.data = N)))),
        (N = Ip ? Up(e, n) : Ap(e, n)) &&
          ((s = Fl(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new ya("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: s }),
            (d.data = N)));
    }
    Oc(h, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Rr(e, n)),
      o != null && r.unshift(Or(e, o, l)),
      (o = Rr(e, t)),
      o != null && r.push(Or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function La(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Rr(n, o)), a != null && i.unshift(Or(n, a, u)))
        : l || ((a = Rr(n, o)), a != null && i.push(Or(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bp = /\r\n?/g,
  eh = /\u0000|\uFFFD/g;
function Ta(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bp,
      `
`
    )
    .replace(eh, "");
}
function sl(e, t, n) {
  if (((t = Ta(t)), Ta(e) !== t && n)) throw Error(k(425));
}
function Il() {}
var Ni = null,
  Di = null;
function Li(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0,
  th = typeof clearTimeout == "function" ? clearTimeout : void 0,
  za = typeof Promise == "function" ? Promise : void 0,
  nh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof za < "u"
      ? function (e) {
          return za.resolve(null).then(e).catch(rh);
        }
      : Ti;
function rh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ho(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Lr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Lr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ma(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + Xn,
  jr = "__reactProps$" + Xn,
  wt = "__reactContainer$" + Xn,
  zi = "__reactEvents$" + Xn,
  lh = "__reactListeners$" + Xn,
  oh = "__reactHandles$" + Xn;
function tn(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ma(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Ma(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[ot] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function uo(e) {
  return e[jr] || null;
}
var Mi = [],
  Cn = -1;
function Wt(e) {
  return { current: e };
}
function J(e) {
  0 > Cn || ((e.current = Mi[Cn]), (Mi[Cn] = null), Cn--);
}
function G(e, t) {
  Cn++, (Mi[Cn] = e.current), (e.current = t);
}
var Bt = {},
  xe = Wt(Bt),
  Le = Wt(!1),
  an = Bt;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Ul() {
  J(Le), J(xe);
}
function Oa(e, t, n) {
  if (xe.current !== Bt) throw Error(k(168));
  G(xe, t), G(Le, n);
}
function Fc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Wd(e) || "Unknown", l));
  return re({}, n, r);
}
function Al(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (an = xe.current),
    G(xe, e),
    G(Le, Le.current),
    !0
  );
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Fc(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Le),
      J(xe),
      G(xe, e))
    : J(Le),
    G(Le, n);
}
var pt = null,
  ao = !1,
  Qo = !1;
function Ic(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function ih(e) {
  (ao = !0), Ic(e);
}
function Ht() {
  if (!Qo && pt !== null) {
    Qo = !0;
    var e = 0,
      t = K;
    try {
      var n = pt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pt = null), (ao = !1);
    } catch (l) {
      throw (pt !== null && (pt = pt.slice(e + 1)), ac(cu, Ht), l);
    } finally {
      (K = t), (Qo = !1);
    }
  }
  return null;
}
var Pn = [],
  _n = 0,
  $l = null,
  Bl = 0,
  Be = [],
  Ve = 0,
  sn = null,
  ht = 1,
  mt = "";
function Jt(e, t) {
  (Pn[_n++] = Bl), (Pn[_n++] = $l), ($l = e), (Bl = t);
}
function Uc(e, t, n) {
  (Be[Ve++] = ht), (Be[Ve++] = mt), (Be[Ve++] = sn), (sn = e);
  var r = ht;
  e = mt;
  var l = 32 - be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ht = (1 << (32 - be(t) + l)) | (n << l) | r),
      (mt = o + e);
  } else (ht = (1 << o) | (n << l) | r), (mt = e);
}
function wu(e) {
  e.return !== null && (Jt(e, 1), Uc(e, 1, 0));
}
function Su(e) {
  for (; e === $l; )
    ($l = Pn[--_n]), (Pn[_n] = null), (Bl = Pn[--_n]), (Pn[_n] = null);
  for (; e === sn; )
    (sn = Be[--Ve]),
      (Be[Ve] = null),
      (mt = Be[--Ve]),
      (Be[Ve] = null),
      (ht = Be[--Ve]),
      (Be[Ve] = null);
}
var Ie = null,
  Fe = null,
  ee = !1,
  qe = null;
function Ac(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Fe = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: ht, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ji(e) {
  if (ee) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Fa(e, t)) {
        if (Oi(e)) throw Error(k(418));
        t = jt(n.nextSibling);
        var r = Ie;
        t && Fa(e, t)
          ? Ac(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ie = e));
      }
    } else {
      if (Oi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ie = e);
    }
  }
}
function Ia(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function cl(e) {
  if (e !== Ie) return !1;
  if (!ee) return Ia(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Oi(e)) throw ($c(), Error(k(418)));
    for (; t; ) Ac(e, t), (t = jt(t.nextSibling));
  }
  if ((Ia(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ie ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function $c() {
  for (var e = Fe; e; ) e = jt(e.nextSibling);
}
function $n() {
  (Fe = Ie = null), (ee = !1);
}
function Eu(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var uh = kt.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Vl = Wt(null),
  Wl = null,
  Rn = null,
  ku = null;
function xu() {
  ku = Rn = Wl = null;
}
function Cu(e) {
  var t = Vl.current;
  J(Vl), (e._currentValue = t);
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jn(e, t) {
  (Wl = e),
    (ku = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (Wl === null) throw Error(k(308));
      (Rn = e), (Wl.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var nn = null;
function Pu(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Bc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Pu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function _u(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vc(e, t) {
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
function vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Pu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function El(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
function Ua(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hl(e, t, n, r) {
  var l = e.updateQueue;
  Rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== i &&
        (u === null ? (d.firstBaseUpdate = s) : (u.next = s),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (d = s = a = null), (u = o);
    do {
      var c = u.lane,
        v = u.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((c = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                h = w.call(v, h, c);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (c = typeof w == "function" ? w.call(v, h, c) : w),
                c == null)
              )
                break e;
              h = re({}, h, c);
              break e;
            case 2:
              Rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (c = l.effects),
          c === null ? (l.effects = [u]) : c.push(u));
      } else
        (v = {
          eventTime: v,
          lane: c,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((s = d = v), (a = h)) : (d = d.next = v),
          (i |= c);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (c = u),
          (u = c.next),
          (c.next = null),
          (l.lastBaseUpdate = c),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (fn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Aa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Wc = new Bs.Component().refs;
function Ii(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var so = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Ut(e),
      o = vt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (et(t, e, l, r), El(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Ut(e),
      o = vt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (et(t, e, l, r), El(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = Ut(e),
      l = vt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ft(e, l, r)),
      t !== null && (et(t, e, r, n), El(t, e, r));
  },
};
function $a(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(l, o)
      : !0
  );
}
function Hc(e, t, n) {
  var r = !1,
    l = Bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Qe(o))
      : ((l = Te(t) ? an : xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? An(e, l) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = so),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ba(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && so.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Wc), _u(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Qe(o))
    : ((o = Te(t) ? an : xe.current), (l.context = An(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ii(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && so.enqueueReplaceState(l, l.state, null),
      Hl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Wc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function fl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Va(e) {
  var t = e._init;
  return t(e._payload);
}
function Qc(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = At(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, m, g) {
    return f === null || f.tag !== 6
      ? ((f = qo(m, p.mode, g)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function a(p, f, m, g) {
    var P = m.type;
    return P === wn
      ? d(p, f, m.props.children, g, m.key)
      : f !== null &&
        (f.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === _t &&
            Va(P) === f.type))
      ? ((g = l(f, m.props)), (g.ref = or(p, f, m)), (g.return = p), g)
      : ((g = Rl(m.type, m.key, m.props, null, p.mode, g)),
        (g.ref = or(p, f, m)),
        (g.return = p),
        g);
  }
  function s(p, f, m, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = bo(m, p.mode, g)), (f.return = p), f)
      : ((f = l(f, m.children || [])), (f.return = p), f);
  }
  function d(p, f, m, g, P) {
    return f === null || f.tag !== 7
      ? ((f = un(m, p.mode, g, P)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function h(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = qo("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case el:
          return (
            (m = Rl(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = or(p, null, f)),
            (m.return = p),
            m
          );
        case yn:
          return (f = bo(f, p.mode, m)), (f.return = p), f;
        case _t:
          var g = f._init;
          return h(p, g(f._payload), m);
      }
      if (fr(f) || er(f))
        return (f = un(f, p.mode, m, null)), (f.return = p), f;
      fl(p, f);
    }
    return null;
  }
  function c(p, f, m, g) {
    var P = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : u(p, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case el:
          return m.key === P ? a(p, f, m, g) : null;
        case yn:
          return m.key === P ? s(p, f, m, g) : null;
        case _t:
          return (P = m._init), c(p, f, P(m._payload), g);
      }
      if (fr(m) || er(m)) return P !== null ? null : d(p, f, m, g, null);
      fl(p, m);
    }
    return null;
  }
  function v(p, f, m, g, P) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (p = p.get(m) || null), u(f, p, "" + g, P);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case el:
          return (p = p.get(g.key === null ? m : g.key) || null), a(f, p, g, P);
        case yn:
          return (p = p.get(g.key === null ? m : g.key) || null), s(f, p, g, P);
        case _t:
          var D = g._init;
          return v(p, f, m, D(g._payload), P);
      }
      if (fr(g) || er(g)) return (p = p.get(m) || null), d(f, p, g, P, null);
      fl(f, g);
    }
    return null;
  }
  function w(p, f, m, g) {
    for (
      var P = null, D = null, N = f, T = (f = 0), Y = null;
      N !== null && T < m.length;
      T++
    ) {
      N.index > T ? ((Y = N), (N = null)) : (Y = N.sibling);
      var O = c(p, N, m[T], g);
      if (O === null) {
        N === null && (N = Y);
        break;
      }
      e && N && O.alternate === null && t(p, N),
        (f = o(O, f, T)),
        D === null ? (P = O) : (D.sibling = O),
        (D = O),
        (N = Y);
    }
    if (T === m.length) return n(p, N), ee && Jt(p, T), P;
    if (N === null) {
      for (; T < m.length; T++)
        (N = h(p, m[T], g)),
          N !== null &&
            ((f = o(N, f, T)), D === null ? (P = N) : (D.sibling = N), (D = N));
      return ee && Jt(p, T), P;
    }
    for (N = r(p, N); T < m.length; T++)
      (Y = v(N, p, T, m[T], g)),
        Y !== null &&
          (e && Y.alternate !== null && N.delete(Y.key === null ? T : Y.key),
          (f = o(Y, f, T)),
          D === null ? (P = Y) : (D.sibling = Y),
          (D = Y));
    return (
      e &&
        N.forEach(function (Me) {
          return t(p, Me);
        }),
      ee && Jt(p, T),
      P
    );
  }
  function y(p, f, m, g) {
    var P = er(m);
    if (typeof P != "function") throw Error(k(150));
    if (((m = P.call(m)), m == null)) throw Error(k(151));
    for (
      var D = (P = null), N = f, T = (f = 0), Y = null, O = m.next();
      N !== null && !O.done;
      T++, O = m.next()
    ) {
      N.index > T ? ((Y = N), (N = null)) : (Y = N.sibling);
      var Me = c(p, N, O.value, g);
      if (Me === null) {
        N === null && (N = Y);
        break;
      }
      e && N && Me.alternate === null && t(p, N),
        (f = o(Me, f, T)),
        D === null ? (P = Me) : (D.sibling = Me),
        (D = Me),
        (N = Y);
    }
    if (O.done) return n(p, N), ee && Jt(p, T), P;
    if (N === null) {
      for (; !O.done; T++, O = m.next())
        (O = h(p, O.value, g)),
          O !== null &&
            ((f = o(O, f, T)), D === null ? (P = O) : (D.sibling = O), (D = O));
      return ee && Jt(p, T), P;
    }
    for (N = r(p, N); !O.done; T++, O = m.next())
      (O = v(N, p, T, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? T : O.key),
          (f = o(O, f, T)),
          D === null ? (P = O) : (D.sibling = O),
          (D = O));
    return (
      e &&
        N.forEach(function (Kt) {
          return t(p, Kt);
        }),
      ee && Jt(p, T),
      P
    );
  }
  function z(p, f, m, g) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === wn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case el:
          e: {
            for (var P = m.key, D = f; D !== null; ) {
              if (D.key === P) {
                if (((P = m.type), P === wn)) {
                  if (D.tag === 7) {
                    n(p, D.sibling),
                      (f = l(D, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  D.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === _t &&
                    Va(P) === D.type)
                ) {
                  n(p, D.sibling),
                    (f = l(D, m.props)),
                    (f.ref = or(p, D, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, D);
                break;
              } else t(p, D);
              D = D.sibling;
            }
            m.type === wn
              ? ((f = un(m.props.children, p.mode, g, m.key)),
                (f.return = p),
                (p = f))
              : ((g = Rl(m.type, m.key, m.props, null, p.mode, g)),
                (g.ref = or(p, f, m)),
                (g.return = p),
                (p = g));
          }
          return i(p);
        case yn:
          e: {
            for (D = m.key; f !== null; ) {
              if (f.key === D)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = bo(m, p.mode, g)), (f.return = p), (p = f);
          }
          return i(p);
        case _t:
          return (D = m._init), z(p, f, D(m._payload), g);
      }
      if (fr(m)) return w(p, f, m, g);
      if (er(m)) return y(p, f, m, g);
      fl(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = qo(m, p.mode, g)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return z;
}
var Bn = Qc(!0),
  Kc = Qc(!1),
  Xr = {},
  ut = Wt(Xr),
  Fr = Wt(Xr),
  Ir = Wt(Xr);
function rn(e) {
  if (e === Xr) throw Error(k(174));
  return e;
}
function Ru(e, t) {
  switch ((G(Ir, t), G(Fr, e), G(ut, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vi(t, e));
  }
  J(ut), G(ut, t);
}
function Vn() {
  J(ut), J(Fr), J(Ir);
}
function Yc(e) {
  rn(Ir.current);
  var t = rn(ut.current),
    n = vi(t, e.type);
  t !== n && (G(Fr, e), G(ut, n));
}
function Nu(e) {
  Fr.current === e && (J(ut), J(Fr));
}
var te = Wt(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ko = [];
function Du() {
  for (var e = 0; e < Ko.length; e++)
    Ko[e]._workInProgressVersionPrimary = null;
  Ko.length = 0;
}
var kl = kt.ReactCurrentDispatcher,
  Yo = kt.ReactCurrentBatchConfig,
  cn = 0,
  ne = null,
  se = null,
  fe = null,
  Kl = !1,
  Sr = !1,
  Ur = 0,
  ah = 0;
function Se() {
  throw Error(k(321));
}
function Lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, o) {
  if (
    ((cn = o),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? dh : ph),
    (e = n(r, l)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (Ur = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (fe = se = null),
        (t.updateQueue = null),
        (kl.current = hh),
        (e = n(r, l));
    } while (Sr);
  }
  if (
    ((kl.current = Yl),
    (t = se !== null && se.next !== null),
    (cn = 0),
    (fe = se = ne = null),
    (Kl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function zu() {
  var e = Ur !== 0;
  return (Ur = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Ke() {
  if (se === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = fe === null ? ne.memoizedState : fe.next;
  if (t !== null) (fe = t), (se = e);
  else {
    if (e === null) throw Error(k(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xo(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = se,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var d = s.lane;
      if ((cn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (i = r)) : (a = a.next = h),
          (ne.lanes |= d),
          (fn |= d);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      tt(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ne.lanes |= o), (fn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Go(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    tt(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Xc() {}
function Gc(e, t) {
  var n = ne,
    r = Ke(),
    l = t(),
    o = !tt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (De = !0)),
    (r = r.queue),
    Mu(qc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, Jc.bind(null, n, r, l, t), void 0, null),
      de === null)
    )
      throw Error(k(349));
    cn & 30 || Zc(n, t, l);
  }
  return l;
}
function Zc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bc(t) && ef(e);
}
function qc(e, t, n) {
  return n(function () {
    bc(t) && ef(e);
  });
}
function bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function ef(e) {
  var t = St(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Wa(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fh.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tf() {
  return Ke().memoizedState;
}
function xl(e, t, n, r) {
  var l = lt();
  (ne.flags |= e),
    (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function co(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (((o = i.destroy), r !== null && Lu(r, i.deps))) {
      l.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  (ne.flags |= e), (l.memoizedState = $r(1 | t, n, o, r));
}
function Ha(e, t) {
  return xl(8390656, 8, e, t);
}
function Mu(e, t) {
  return co(2048, 8, e, t);
}
function nf(e, t) {
  return co(4, 2, e, t);
}
function rf(e, t) {
  return co(4, 4, e, t);
}
function lf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), co(4, 4, lf.bind(null, t, e), n)
  );
}
function Ou() {}
function uf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function af(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sf(e, t, n) {
  return cn & 21
    ? (tt(n, t) || ((n = fc()), (ne.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function sh(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yo.transition;
  Yo.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Yo.transition = r);
  }
}
function cf() {
  return Ke().memoizedState;
}
function ch(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ff(e))
  )
    df(t, n);
  else if (((n = Bc(e, t, n, r)), n !== null)) {
    var l = Pe();
    et(n, e, r, l), pf(n, t, r);
  }
}
function fh(e, t, n) {
  var r = Ut(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ff(e)) df(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), tt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Pu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bc(e, t, l, r)),
      n !== null && ((l = Pe()), et(n, e, r, l), pf(n, t, r));
  }
}
function ff(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function df(e, t) {
  Sr = Kl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
var Yl = {
    readContext: Qe,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  dh = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: Ha,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xl(4194308, 4, lf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = ch.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wa,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Wa(!1),
        t = e[0];
      return (e = sh.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        l = lt();
      if (ee) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(k(349));
        cn & 30 || Zc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ha(qc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, Jc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = de.identifierPrefix;
      if (ee) {
        var n = mt,
          r = ht;
        (n = (r & ~(1 << (32 - be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ah++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ph = {
    readContext: Qe,
    useCallback: uf,
    useContext: Qe,
    useEffect: Mu,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: af,
    useReducer: Xo,
    useRef: tf,
    useState: function () {
      return Xo(Ar);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = Ke();
      return sf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Xo(Ar)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Gc,
    useId: cf,
    unstable_isNewReconciler: !1,
  },
  hh = {
    readContext: Qe,
    useCallback: uf,
    useContext: Qe,
    useEffect: Mu,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: af,
    useReducer: Go,
    useRef: tf,
    useState: function () {
      return Go(Ar);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = Ke();
      return se === null ? (t.memoizedState = e) : sf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Go(Ar)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Gc,
    useId: cf,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ai(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mh = typeof WeakMap == "function" ? WeakMap : Map;
function hf(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gl || ((Gl = !0), (Gi = r)), Ai(e, t);
    }),
    n
  );
}
function mf(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ai(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ai(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Qa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Dh.bind(null, e, t, n)), t.then(e, e));
}
function Ka(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ya(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = vt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vh = kt.ReactCurrentOwner,
  De = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Kc(t, null, n, r) : Bn(t, e.child, n, r);
}
function Xa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    jn(t, l),
    (r = Tu(e, t, n, r, o, l)),
    (n = zu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Et(e, t, l))
      : (ee && n && wu(t), (t.flags |= 1), Ce(e, t, r, l), t.child)
  );
}
function Ga(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Vu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vf(e, t, o, r, l))
      : ((e = Rl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(i, r) && e.ref === t.ref)
    )
      return Et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = At(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Et(e, t, l);
  }
  return $i(e, t, n, r, l);
}
function gf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Dn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(Dn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        G(Dn, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(Dn, je),
      (je |= r);
  return Ce(e, t, l, n), t.child;
}
function yf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $i(e, t, n, r, l) {
  var o = Te(n) ? an : xe.current;
  return (
    (o = An(t, o)),
    jn(t, l),
    (n = Tu(e, t, n, r, o, l)),
    (r = zu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Et(e, t, l))
      : (ee && r && wu(t), (t.flags |= 1), Ce(e, t, n, l), t.child)
  );
}
function Za(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    Al(t);
  } else o = !1;
  if ((jn(t, l), t.stateNode === null))
    Cl(e, t), Hc(t, n, r), Ui(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Qe(s))
      : ((s = Te(n) ? an : xe.current), (s = An(t, s)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Ba(t, i, r, s)),
      (Rt = !1);
    var c = t.memoizedState;
    (i.state = c),
      Hl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || c !== a || Le.current || Rt
        ? (typeof d == "function" && (Ii(t, n, d, r), (a = t.memoizedState)),
          (u = Rt || $a(t, n, u, r, c, a, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Vc(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Ze(t.type, u)),
      (i.props = s),
      (h = t.pendingProps),
      (c = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = Te(n) ? an : xe.current), (a = An(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || c !== a) && Ba(t, i, r, a)),
      (Rt = !1),
      (c = t.memoizedState),
      (i.state = c),
      Hl(t, r, i, l);
    var w = t.memoizedState;
    u !== h || c !== w || Le.current || Rt
      ? (typeof v == "function" && (Ii(t, n, v, r), (w = t.memoizedState)),
        (s = Rt || $a(t, n, s, r, c, w, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bi(e, t, n, r, o, l);
}
function Bi(e, t, n, r, l, o) {
  yf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ja(t, n, !1), Et(e, t, o);
  (r = t.stateNode), (vh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Bn(t, e.child, null, o)), (t.child = Bn(t, null, u, o)))
      : Ce(e, t, u, o),
    (t.memoizedState = r.state),
    l && ja(t, n, !0),
    t.child
  );
}
function wf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Oa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Oa(e, t.context, !1),
    Ru(e, t.containerInfo);
}
function Ja(e, t, n, r, l) {
  return $n(), Eu(l), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sf(e, t, n) {
  var r = t.pendingProps,
    l = te.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    G(te, l & 1),
    e === null)
  )
    return (
      ji(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ho(i, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Wi(n)),
              (t.memoizedState = Vi),
              e)
            : ju(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return gh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = At(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = At(u, o)) : ((o = un(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = At(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ju(e, t) {
  return (
    (t = ho({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function dl(e, t, n, r) {
  return (
    r !== null && Eu(r),
    Bn(t, e.child, null, n),
    (e = ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Zo(Error(k(422)))), dl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = ho({ mode: "visible", children: r.children }, l, 0, null)),
        (o = un(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Bn(t, e.child, null, i),
        (t.child.memoizedState = Wi(i)),
        (t.memoizedState = Vi),
        o);
  if (!(t.mode & 1)) return dl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = Zo(o, r, void 0)), dl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), De || u)) {
    if (((r = de), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), St(e, l), et(r, e, l, -1));
    }
    return Bu(), (r = Zo(Error(k(421)))), dl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = jt(l.nextSibling)),
      (Ie = t),
      (ee = !0),
      (qe = null),
      e !== null &&
        ((Be[Ve++] = ht),
        (Be[Ve++] = mt),
        (Be[Ve++] = sn),
        (ht = e.id),
        (mt = e.overflow),
        (sn = t)),
      (t = ju(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function Jo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ce(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qa(e, n, t);
        else if (e.tag === 19) qa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ql(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Jo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ql(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Jo(t, !0, n, null, o);
        break;
      case "together":
        Jo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yh(e, t, n) {
  switch (t.tag) {
    case 3:
      wf(t), $n();
      break;
    case 5:
      Yc(t);
      break;
    case 1:
      Te(t.type) && Al(t);
      break;
    case 4:
      Ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      G(Vl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sf(e, t, n)
          : (G(te, te.current & 1),
            (e = Et(e, t, n)),
            e !== null ? e.sibling : null);
      G(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ef(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        G(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gf(e, t, n);
  }
  return Et(e, t, n);
}
var kf, Hi, xf, Cf;
kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hi = function () {};
xf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), rn(ut.current);
    var o = null;
    switch (n) {
      case "input":
        (l = di(e, l)), (r = di(e, r)), (o = []);
        break;
      case "select":
        (l = re({}, l, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = mi(e, l)), (r = mi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Il);
    }
    gi(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Pr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Pr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && Z("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Cf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function wh(e, t, n) {
  var r = t.pendingProps;
  switch ((Su(t), t.tag)) {
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
      return Ee(t), null;
    case 1:
      return Te(t.type) && Ul(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        J(Le),
        J(xe),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (qi(qe), (qe = null)))),
        Hi(e, t),
        Ee(t),
        null
      );
    case 5:
      Nu(t);
      var l = rn(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Ee(t), null;
        }
        if (((e = rn(ut.current)), cl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[jr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < pr.length; l++) Z(pr[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              ua(r, o), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              sa(r, o), Z("invalid", r);
          }
          gi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Pr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              tl(r), aa(r, o, !0);
              break;
            case "textarea":
              tl(r), ca(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Il);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ot] = t),
            (e[jr] = r),
            kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = yi(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pr.length; l++) Z(pr[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (l = r);
                break;
              case "details":
                Z("toggle", e), (l = r);
                break;
              case "input":
                ua(e, r), (l = di(e, r)), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = re({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                sa(e, r), (l = mi(e, r)), Z("invalid", e);
                break;
              default:
                l = r;
            }
            gi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? bs(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Js(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _r(e, a)
                    : typeof a == "number" && _r(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Pr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Z("scroll", e)
                      : a != null && ou(e, o, a, i));
              }
            switch (n) {
              case "input":
                tl(e), aa(e, r, !1);
                break;
              case "textarea":
                tl(e), ca(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Tn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Il);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) Cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = rn(Ir.current)), rn(ut.current), cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return Ee(t), null;
    case 13:
      if (
        (J(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Fe !== null && t.mode & 1 && !(t.flags & 128))
          $c(), $n(), (t.flags |= 98560), (o = !1);
        else if (((o = cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[ot] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ee(t), (o = !1);
        } else qe !== null && (qi(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        Vn(), Hi(e, t), e === null && Mr(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return Cu(t.type._context), Ee(t), null;
    case 17:
      return Te(t.type) && Ul(), Ee(t), null;
    case 19:
      if ((J(te), (o = t.memoizedState), o === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ir(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ir(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            oe() > Hn &&
            ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ee)
            )
              return Ee(t), null;
          } else
            2 * oe() - o.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = oe()),
          (t.sibling = null),
          (n = te.current),
          G(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        $u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Sh(e, t) {
  switch ((Su(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        J(Le),
        J(xe),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if ((J(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(te), null;
    case 4:
      return Vn(), null;
    case 10:
      return Cu(t.type._context), null;
    case 22:
    case 23:
      return $u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1,
  ke = !1,
  Eh = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var ba = !1;
function kh(e, t) {
  if (((Ni = Ol), (e = Rc()), yu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            d = 0,
            h = e,
            c = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (c = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (c === n && ++s === l && (u = i),
                c === o && ++d === r && (a = i),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = c), (c = h.parentNode);
            }
            h = v;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Di = { focusedElem: e, selectionRange: n }, Ol = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    z = w.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ze(t.type, y),
                      z
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          le(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = ba), (ba = !1), w;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Qi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
function Ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Pf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[jr], delete t[zi], delete t[lh], delete t[oh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _f(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function es(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _f(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Il));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), (e = e.sibling);
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), (e = e.sibling);
}
var he = null,
  Je = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) Rf(e, t, n), (n = n.sibling);
}
function Rf(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(ro, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ke || Nn(n, t);
    case 6:
      var r = he,
        l = Je;
      (he = null),
        Pt(e, t, n),
        (he = r),
        (Je = l),
        he !== null &&
          (Je
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (Je
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ho(e.parentNode, n)
              : e.nodeType === 1 && Ho(e, n),
            Lr(e))
          : Ho(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (l = Je),
        (he = n.stateNode.containerInfo),
        (Je = !0),
        Pt(e, t, n),
        (he = r),
        (Je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Qi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !ke &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          le(n, t, u);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Pt(e, t, n), (ke = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function ts(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Eh()),
      t.forEach(function (r) {
        var l = Th.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (he = u.stateNode), (Je = !1);
              break e;
            case 3:
              (he = u.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (he = u.stateNode.containerInfo), (Je = !0);
              break e;
          }
          u = u.return;
        }
        if (he === null) throw Error(k(160));
        Rf(o, i, l), (he = null), (Je = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        le(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nf(t, e), (t = t.sibling);
}
function Nf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), rt(e), r & 4)) {
        try {
          Er(3, e, e.return), fo(3, e);
        } catch (y) {
          le(e, e.return, y);
        }
        try {
          Er(5, e, e.return);
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 1:
      Ge(t, e), rt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        rt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          _r(l, "");
        } catch (y) {
          le(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Xs(l, o),
              yi(u, i);
            var s = yi(u, o);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                h = a[i + 1];
              d === "style"
                ? bs(l, h)
                : d === "dangerouslySetInnerHTML"
                ? Js(l, h)
                : d === "children"
                ? _r(l, h)
                : ou(l, d, h, s);
            }
            switch (u) {
              case "input":
                pi(l, o);
                break;
              case "textarea":
                Gs(l, o);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Tn(l, !!o.multiple, v, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Tn(l, !!o.multiple, o.defaultValue, !0)
                      : Tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[jr] = o;
          } catch (y) {
            le(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lr(t.containerInfo);
        } catch (y) {
          le(e, e.return, y);
        }
      break;
    case 4:
      Ge(t, e), rt(e);
      break;
    case 13:
      Ge(t, e),
        rt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Uu = oe())),
        r & 4 && ts(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (s = ke) || d), Ge(t, e), (ke = s)) : Ge(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (h = R = d; R !== null; ) {
              switch (((c = R), (v = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, c, c.return);
                  break;
                case 1:
                  Nn(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      le(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Nn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    rs(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = c), (R = v)) : rs(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = qs("display", i)));
              } catch (y) {
                le(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (y) {
                le(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), rt(e), r & 4 && ts(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_f(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (_r(l, ""), (r.flags &= -33));
          var o = es(e);
          Xi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = es(e);
          Yi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xh(e, t, n) {
  (R = e), Df(e);
}
function Df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || pl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ke;
        u = pl;
        var s = ke;
        if (((pl = i), (ke = a) && !s))
          for (R = l; R !== null; )
            (i = R),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ls(l)
                : a !== null
                ? ((a.return = i), (R = a))
                : ls(l);
        for (; o !== null; ) (R = o), Df(o), (o = o.sibling);
        (R = l), (pl = u), (ke = s);
      }
      ns(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (R = o)) : ns(e);
  }
}
function ns(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Aa(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Aa(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Lr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ke || (t.flags & 512 && Ki(t));
      } catch (c) {
        le(t, t.return, c);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function rs(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function ls(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fo(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, l, a);
            }
          }
          var o = t.return;
          try {
            Ki(t);
          } catch (a) {
            le(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ki(t);
          } catch (a) {
            le(t, i, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (R = u);
      break;
    }
    R = t.return;
  }
}
var Ch = Math.ceil,
  Xl = kt.ReactCurrentDispatcher,
  Fu = kt.ReactCurrentOwner,
  He = kt.ReactCurrentBatchConfig,
  H = 0,
  de = null,
  ae = null,
  ve = 0,
  je = 0,
  Dn = Wt(0),
  ce = 0,
  Br = null,
  fn = 0,
  po = 0,
  Iu = 0,
  kr = null,
  Ne = null,
  Uu = 0,
  Hn = 1 / 0,
  dt = null,
  Gl = !1,
  Gi = null,
  It = null,
  hl = !1,
  Tt = null,
  Zl = 0,
  xr = 0,
  Zi = null,
  Pl = -1,
  _l = 0;
function Pe() {
  return H & 6 ? oe() : Pl !== -1 ? Pl : (Pl = oe());
}
function Ut(e) {
  return e.mode & 1
    ? H & 2 && ve !== 0
      ? ve & -ve
      : uh.transition !== null
      ? (_l === 0 && (_l = fc()), _l)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yc(e.type))),
        e)
    : 1;
}
function et(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (Zi = null), Error(k(185)));
  Qr(e, n, r),
    (!(H & 2) || e !== de) &&
      (e === de && (!(H & 2) && (po |= n), ce === 4 && Dt(e, ve)),
      ze(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Hn = oe() + 500), ao && Ht()));
}
function ze(e, t) {
  var n = e.callbackNode;
  up(e, t);
  var r = Ml(e, e === de ? ve : 0);
  if (r === 0)
    n !== null && pa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pa(n), t === 1))
      e.tag === 0 ? ih(os.bind(null, e)) : Ic(os.bind(null, e)),
        nh(function () {
          !(H & 6) && Ht();
        }),
        (n = null);
    else {
      switch (dc(r)) {
        case 1:
          n = cu;
          break;
        case 4:
          n = sc;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = cc;
          break;
        default:
          n = zl;
      }
      n = If(n, Lf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lf(e, t) {
  if (((Pl = -1), (_l = 0), H & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Ml(e, e === de ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = zf();
    (de !== e || ve !== t) && ((dt = null), (Hn = oe() + 500), on(e, t));
    do
      try {
        Rh();
        break;
      } catch (u) {
        Tf(e, u);
      }
    while (1);
    xu(),
      (Xl.current = o),
      (H = l),
      ae !== null ? (t = 0) : ((de = null), (ve = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = xi(e)), l !== 0 && ((r = l), (t = Ji(e, l)))), t === 1)
    )
      throw ((n = Br), on(e, 0), Dt(e, r), ze(e, oe()), n);
    if (t === 6) Dt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ph(l) &&
          ((t = Jl(e, r)),
          t === 2 && ((o = xi(e)), o !== 0 && ((r = o), (t = Ji(e, o)))),
          t === 1))
      )
        throw ((n = Br), on(e, 0), Dt(e, r), ze(e, oe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          qt(e, Ne, dt);
          break;
        case 3:
          if (
            (Dt(e, r), (r & 130023424) === r && ((t = Uu + 500 - oe()), 10 < t))
          ) {
            if (Ml(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ti(qt.bind(null, e, Ne, dt), t);
            break;
          }
          qt(e, Ne, dt);
          break;
        case 4:
          if ((Dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - be(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = oe() - r),
            (r =
              (120 > r
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
                : 1960 * Ch(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ti(qt.bind(null, e, Ne, dt), r);
            break;
          }
          qt(e, Ne, dt);
          break;
        case 5:
          qt(e, Ne, dt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ze(e, oe()), e.callbackNode === n ? Lf.bind(null, e) : null;
}
function Ji(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = Jl(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && qi(t)),
    e
  );
}
function qi(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Ph(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!tt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Dt(e, t) {
  for (
    t &= ~Iu,
      t &= ~po,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function os(e) {
  if (H & 6) throw Error(k(327));
  Fn();
  var t = Ml(e, 0);
  if (!(t & 1)) return ze(e, oe()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xi(e);
    r !== 0 && ((t = r), (n = Ji(e, r)));
  }
  if (n === 1) throw ((n = Br), on(e, 0), Dt(e, t), ze(e, oe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Ne, dt),
    ze(e, oe()),
    null
  );
}
function Au(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Hn = oe() + 500), ao && Ht());
  }
}
function dn(e) {
  Tt !== null && Tt.tag === 0 && !(H & 6) && Fn();
  var t = H;
  H |= 1;
  var n = He.transition,
    r = K;
  try {
    if (((He.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (He.transition = n), (H = t), !(H & 6) && Ht();
  }
}
function $u() {
  (je = Dn.current), J(Dn);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), th(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ul();
          break;
        case 3:
          Vn(), J(Le), J(xe), Du();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          J(te);
          break;
        case 19:
          J(te);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          $u();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ae = e = At(e.current, null)),
    (ve = je = t),
    (ce = 0),
    (Br = null),
    (Iu = po = fn = 0),
    (Ne = kr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function Tf(e, t) {
  do {
    var n = ae;
    try {
      if ((xu(), (kl.current = Yl), Kl)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Kl = !1;
      }
      if (
        ((cn = 0),
        (fe = se = ne = null),
        (Sr = !1),
        (Ur = 0),
        (Fu.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Br = t), (ae = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ve),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            d = u,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Ka(i);
          if (v !== null) {
            (v.flags &= -257),
              Ya(v, i, u, o, t),
              v.mode & 1 && Qa(o, s, t),
              (t = v),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Qa(o, s, t), Bu();
              break e;
            }
            a = Error(k(426));
          }
        } else if (ee && u.mode & 1) {
          var z = Ka(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              Ya(z, i, u, o, t),
              Eu(Wn(a, u));
            break e;
          }
        }
        (o = a = Wn(a, u)),
          ce !== 4 && (ce = 2),
          kr === null ? (kr = [o]) : kr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = hf(o, a, t);
              Ua(o, p);
              break e;
            case 1:
              u = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (It === null || !It.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = mf(o, u, t);
                Ua(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Of(n);
    } catch (P) {
      (t = P), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zf() {
  var e = Xl.current;
  return (Xl.current = Yl), e === null ? Yl : e;
}
function Bu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    de === null || (!(fn & 268435455) && !(po & 268435455)) || Dt(de, ve);
}
function Jl(e, t) {
  var n = H;
  H |= 2;
  var r = zf();
  (de !== e || ve !== t) && ((dt = null), on(e, t));
  do
    try {
      _h();
      break;
    } catch (l) {
      Tf(e, l);
    }
  while (1);
  if ((xu(), (H = n), (Xl.current = r), ae !== null)) throw Error(k(261));
  return (de = null), (ve = 0), ce;
}
function _h() {
  for (; ae !== null; ) Mf(ae);
}
function Rh() {
  for (; ae !== null && !qd(); ) Mf(ae);
}
function Mf(e) {
  var t = Ff(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Of(e) : (ae = t),
    (Fu.current = null);
}
function Of(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sh(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ae = null);
        return;
      }
    } else if (((n = wh(n, t, je)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function qt(e, t, n) {
  var r = K,
    l = He.transition;
  try {
    (He.transition = null), (K = 1), Nh(e, t, n, r);
  } finally {
    (He.transition = l), (K = r);
  }
  return null;
}
function Nh(e, t, n, r) {
  do Fn();
  while (Tt !== null);
  if (H & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ap(e, o),
    e === de && ((ae = de = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      hl ||
      ((hl = !0),
      If(zl, function () {
        return Fn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var i = K;
    K = 1;
    var u = H;
    (H |= 4),
      (Fu.current = null),
      kh(e, n),
      Nf(n, e),
      Xp(Di),
      (Ol = !!Ni),
      (Di = Ni = null),
      (e.current = n),
      xh(n),
      bd(),
      (H = u),
      (K = i),
      (He.transition = o);
  } else e.current = n;
  if (
    (hl && ((hl = !1), (Tt = e), (Zl = l)),
    (o = e.pendingLanes),
    o === 0 && (It = null),
    np(n.stateNode),
    ze(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Gl) throw ((Gl = !1), (e = Gi), (Gi = null), e);
  return (
    Zl & 1 && e.tag !== 0 && Fn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zi ? xr++ : ((xr = 0), (Zi = e))) : (xr = 0),
    Ht(),
    null
  );
}
function Fn() {
  if (Tt !== null) {
    var e = dc(Zl),
      t = He.transition,
      n = K;
    try {
      if (((He.transition = null), (K = 16 > e ? 16 : e), Tt === null))
        var r = !1;
      else {
        if (((e = Tt), (Tt = null), (Zl = 0), H & 6)) throw Error(k(331));
        var l = H;
        for (H |= 4, R = e.current; R !== null; ) {
          var o = R,
            i = o.child;
          if (R.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (R = s; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (R = h);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var c = d.sibling,
                        v = d.return;
                      if ((Pf(d), d === s)) {
                        R = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = v), (R = c);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var z = y.sibling;
                    (y.sibling = null), (y = z);
                  } while (y !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (R = i);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (R = p);
                break e;
              }
              R = o.return;
            }
        }
        var f = e.current;
        for (R = f; R !== null; ) {
          i = R;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (R = m);
          else
            e: for (i = f; R !== null; ) {
              if (((u = R), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(9, u);
                  }
                } catch (P) {
                  le(u, u.return, P);
                }
              if (u === i) {
                R = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (R = g);
                break e;
              }
              R = u.return;
            }
        }
        if (
          ((H = l), Ht(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(ro, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (He.transition = t);
    }
  }
  return !1;
}
function is(e, t, n) {
  (t = Wn(n, t)),
    (t = hf(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = Pe()),
    e !== null && (Qr(e, 1, t), ze(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) is(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        is(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = mf(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = Pe()),
            t !== null && (Qr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ve & n) === n &&
      (ce === 4 || (ce === 3 && (ve & 130023424) === ve && 500 > oe() - Uu)
        ? on(e, 0)
        : (Iu |= n)),
    ze(e, t);
}
function jf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ll), (ll <<= 1), !(ll & 130023424) && (ll = 4194304))
      : (t = 1));
  var n = Pe();
  (e = St(e, t)), e !== null && (Qr(e, t, n), ze(e, n));
}
function Lh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jf(e, n);
}
function Th(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), jf(e, n);
}
var Ff;
Ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), yh(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), ee && t.flags & 1048576 && Uc(t, Bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var l = An(t, xe.current);
      jn(t, n), (l = Tu(null, t, r, e, l, n));
      var o = zu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Al(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _u(t),
            (l.updater = so),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ui(t, r, e, n),
            (t = Bi(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && wu(t), Ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Mh(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = $i(null, t, r, e, n);
            break e;
          case 1:
            t = Za(null, t, r, e, n);
            break e;
          case 11:
            t = Xa(null, t, r, e, n);
            break e;
          case 14:
            t = Ga(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        $i(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Za(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((wf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Vc(e, t),
          Hl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Wn(Error(k(423)), t)), (t = Ja(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Wn(Error(k(424)), t)), (t = Ja(e, t, r, n, l));
            break e;
          } else
            for (
              Fe = jt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                ee = !0,
                qe = null,
                n = Kc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === l)) {
            t = Et(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yc(t),
        e === null && ji(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Li(r, l) ? (i = null) : o !== null && Li(r, o) && (t.flags |= 32),
        yf(e, t),
        Ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ji(t), null;
    case 13:
      return Sf(e, t, n);
    case 4:
      return (
        Ru(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Xa(e, t, r, l, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          G(Vl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (tt(o.value, i)) {
            if (o.children === l.children && !Le.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = vt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Fi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Fi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        jn(t, n),
        (l = Qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        Ga(e, t, r, l, n)
      );
    case 15:
      return vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Cl(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Al(t)) : (e = !1),
        jn(t, n),
        Hc(t, r, l),
        Ui(t, r, l, n),
        Bi(null, t, r, !0, e, n)
      );
    case 19:
      return Ef(e, t, n);
    case 22:
      return gf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function If(e, t) {
  return ac(e, t);
}
function zh(e, t, n, r) {
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
function We(e, t, n, r) {
  return new zh(e, t, n, r);
}
function Vu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mh(e) {
  if (typeof e == "function") return Vu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uu)) return 11;
    if (e === au) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Vu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case wn:
        return un(n.children, l, o, t);
      case iu:
        (i = 8), (l |= 8);
        break;
      case ai:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = ai), (e.lanes = o), e
        );
      case si:
        return (e = We(13, n, t, l)), (e.elementType = si), (e.lanes = o), e;
      case ci:
        return (e = We(19, n, t, l)), (e.elementType = ci), (e.lanes = o), e;
      case Qs:
        return ho(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ws:
              i = 10;
              break e;
            case Hs:
              i = 9;
              break e;
            case uu:
              i = 11;
              break e;
            case au:
              i = 14;
              break e;
            case _t:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function un(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function ho(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Qs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function qo(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function bo(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Oh(e, t, n, r, l) {
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
    (this.eventTimes = Mo(0)),
    (this.expirationTimes = Mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Mo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new Oh(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _u(o),
    e
  );
}
function jh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uf(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (hn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Fc(e, n, t);
  }
  return t;
}
function Af(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Wu(n, r, !0, e, l, o, i, u, a)),
    (e.context = Uf(null)),
    (n = e.current),
    (r = Pe()),
    (l = Ut(n)),
    (o = vt(r, l)),
    (o.callback = t ?? null),
    Ft(n, o, l),
    (e.current.lanes = l),
    Qr(e, l, r),
    ze(e, r),
    e
  );
}
function mo(e, t, n, r) {
  var l = t.current,
    o = Pe(),
    i = Ut(l);
  return (
    (n = Uf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(l, t, i)),
    e !== null && (et(e, l, i, o), El(e, l, i)),
    i
  );
}
function ql(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function us(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  us(e, t), (e = e.alternate) && us(e, t);
}
function Fh() {
  return null;
}
var $f =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
vo.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  mo(e, t, null, null);
};
vo.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      mo(null, e, null, null);
    }),
      (t[wt] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    Nt.splice(n, 0, e), n === 0 && gc(e);
  }
};
function Ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function go(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function as() {}
function Ih(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = ql(i);
        o.call(s);
      };
    }
    var i = Af(t, r, e, 0, null, !1, !1, "", as);
    return (
      (e._reactRootContainer = i),
      (e[wt] = i.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = ql(a);
      u.call(s);
    };
  }
  var a = Wu(e, 0, !1, null, null, !1, !1, "", as);
  return (
    (e._reactRootContainer = a),
    (e[wt] = a.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      mo(t, a, n, r);
    }),
    a
  );
}
function yo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = ql(i);
        u.call(a);
      };
    }
    mo(t, i, e, l);
  } else i = Ih(n, t, e, l, r);
  return ql(i);
}
pc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (fu(t, n | 1), ze(t, oe()), !(H & 6) && ((Hn = oe() + 500), Ht()));
      }
      break;
    case 13:
      dn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var l = Pe();
          et(r, e, 1, l);
        }
      }),
        Hu(e, 1);
  }
};
du = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Pe();
      et(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = St(e, t);
    if (n !== null) {
      var r = Pe();
      et(n, e, t, r);
    }
    Hu(e, t);
  }
};
mc = function () {
  return K;
};
vc = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = uo(r);
            if (!l) throw Error(k(90));
            Ys(r), pi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Gs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tn(e, !!n.multiple, t, !1);
  }
};
nc = Au;
rc = dn;
var Uh = { usingClientEntryPoint: !1, Events: [Yr, xn, uo, ec, tc, Au] },
  ur = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ah = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ic(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Fh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ml.isDisabled && ml.supportsFiber)
    try {
      (ro = ml.inject(Ah)), (it = ml);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(k(200));
  return jh(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!Ku(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = $f;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, l)),
    (e[wt] = t.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    new Qu(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = ic(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return dn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!go(t)) throw Error(k(200));
  return yo(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!Ku(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = $f;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Af(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[wt] = t.current),
    Mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new vo(t);
};
Ae.render = function (e, t, n) {
  if (!go(t)) throw Error(k(200));
  return yo(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!go(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (dn(function () {
        yo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wt] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = Au;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!go(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return yo(e, t, n, !1, r);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ae);
})(Fd);
var ss = oi;
(li.createRoot = ss.createRoot), (li.hydrateRoot = ss.hydrateRoot);
const $h = "modulepreload",
  Bh = function (e) {
    return "/" + e;
  },
  cs = {},
  Bf = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const l = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = Bh(o)), o in cs)) return;
        cs[o] = !0;
        const i = o.endsWith(".css"),
          u = i ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let d = l.length - 1; d >= 0; d--) {
            const h = l[d];
            if (h.href === o && (!i || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const s = document.createElement("link");
        if (
          ((s.rel = i ? "stylesheet" : $h),
          i || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = o),
          document.head.appendChild(s),
          i)
        )
          return new Promise((d, h) => {
            s.addEventListener("load", d),
              s.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    X.apply(this, arguments)
  );
}
var ue;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ue || (ue = {}));
const fs = "popstate";
function Vh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Vr(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : at(l);
  }
  return Hh(t, n, null, e);
}
function A(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Wh() {
  return Math.random().toString(36).substr(2, 8);
}
function ds(e) {
  return { usr: e.state, key: e.key };
}
function Vr(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    X(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xt(t) : t,
      { state: n, key: (t && t.key) || r || Wh() }
    )
  );
}
function at(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Wr(e) {
  let t =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href,
    n = typeof e == "string" ? e : at(e);
  return (
    A(
      t,
      "No window.location.(origin|href) available to create URL for href: " + n
    ),
    new URL(n, t)
  );
}
function Hh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ue.Pop,
    a = null;
  function s() {
    (u = ue.Pop), a && a({ action: u, location: c.location });
  }
  function d(v, w) {
    u = ue.Push;
    let y = Vr(c.location, v, w);
    n && n(y, v);
    let z = ds(y),
      p = c.createHref(y);
    try {
      i.pushState(z, "", p);
    } catch {
      l.location.assign(p);
    }
    o && a && a({ action: u, location: c.location });
  }
  function h(v, w) {
    u = ue.Replace;
    let y = Vr(c.location, v, w);
    n && n(y, v);
    let z = ds(y),
      p = c.createHref(y);
    i.replaceState(z, "", p), o && a && a({ action: u, location: c.location });
  }
  let c = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(v) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(fs, s),
        (a = v),
        () => {
          l.removeEventListener(fs, s), (a = null);
        }
      );
    },
    createHref(v) {
      return t(l, v);
    },
    encodeLocation(v) {
      let w = Wr(typeof v == "string" ? v : at(v));
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: d,
    replace: h,
    go(v) {
      return i.go(v);
    },
  };
  return c;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
function Qh(e) {
  return e.index === !0;
}
function Vf(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let o = [...t, l],
        i = typeof r.id == "string" ? r.id : o.join("-");
      return (
        A(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route"
        ),
        A(
          !n.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(i),
        Qh(r)
          ? X({}, r, { id: i })
          : X({}, r, {
              id: i,
              children: r.children ? Vf(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function hr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xt(t) : t,
    l = Qf(r.pathname || "/", n);
  if (l == null) return null;
  let o = Wf(e);
  Kh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = tm(o[u], lm(l));
  return i;
}
function Wf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (A(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = gt([r, a.relativePath]),
      d = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (A(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Wf(o.children, t, d, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: bh(s, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of Hf(o.path)) l(o, i, a);
    }),
    t
  );
}
function Hf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Hf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Kh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : em(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Yh = /^:\w+$/,
  Xh = 3,
  Gh = 2,
  Zh = 1,
  Jh = 10,
  qh = -2,
  ps = (e) => e === "*";
function bh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ps) && (r += qh),
    t && (r += Gh),
    n
      .filter((l) => !ps(l))
      .reduce((l, o) => l + (Yh.test(o) ? Xh : o === "" ? Zh : Jh), r)
  );
}
function em(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function tm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      d = nm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let h = u.route;
    o.push({
      params: r,
      pathname: gt([l, d.pathname]),
      pathnameBase: am(gt([l, d.pathnameBase])),
      route: h,
    }),
      d.pathnameBase !== "/" && (l = gt([l, d.pathnameBase]));
  }
  return o;
}
function nm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = rm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, d, h) => {
      if (d === "*") {
        let c = u[h] || "";
        i = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return (s[d] = om(u[h] || "", d)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function rm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Yu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function lm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Yu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function om(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Yu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Qf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function im(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? xt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : um(n, t)) : t,
    search: sm(r),
    hash: cm(l),
  };
}
function um(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ei(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wo(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = xt(e))
    : ((l = X({}, e)),
      A(
        !l.pathname || !l.pathname.includes("?"),
        ei("?", "pathname", "search", l)
      ),
      A(
        !l.pathname || !l.pathname.includes("#"),
        ei("#", "pathname", "hash", l)
      ),
      A(!l.search || !l.search.includes("#"), ei("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let c = i.split("/");
      for (; c[0] === ".."; ) c.shift(), (h -= 1);
      l.pathname = c.join("/");
    }
    u = h >= 0 ? t[h] : "/";
  }
  let a = im(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || d) && (a.pathname += "/"), a;
}
const gt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  am = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  cm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class hs extends Error {}
class fm {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      A(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let n;
    (this.abortPromise = new Promise((l, o) => (n = o))),
      (this.controller = new AbortController());
    let r = () => n(new hs("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", r)),
      this.controller.signal.addEventListener("abort", r),
      (this.data = Object.entries(t).reduce((l, o) => {
        let [i, u] = o;
        return Object.assign(l, { [i]: this.trackPromise(i, u) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, null, l),
      (l) => this.onSettle(r, t, l)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof hs)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const o = this.subscriber;
    return r
      ? (Object.defineProperty(t, "_error", { get: () => r }),
        o && o(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, "_data", { get: () => l }), o && o(!1), l);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener("abort", r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      A(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: pm(l) });
      }, {})
    );
  }
}
function dm(e) {
  return e instanceof Promise && e._tracked === !0;
}
function pm(e) {
  if (!dm(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class So {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Kf(e) {
  return e instanceof So;
}
const Yf = ["post", "put", "patch", "delete"],
  hm = new Set(Yf),
  mm = ["get", ...Yf],
  vm = new Set(mm),
  gm = new Set([301, 302, 303, 307, 308]),
  ym = new Set([307, 308]),
  ti = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  wm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Sm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Em = !Sm;
function km(e) {
  A(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = Vf(e.routes),
    n = null,
    r = new Set(),
    l = null,
    o = null,
    i = null,
    u = e.hydrationData != null,
    a = hr(t, e.history.location, e.basename),
    s = null;
  if (a == null) {
    let S = bt(404, { pathname: e.history.location.pathname }),
      { matches: E, route: C } = Ss(t);
    (a = E), (s = { [C.id]: S });
  }
  let d = !a.some((S) => S.route.loader) || e.hydrationData != null,
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: a,
      initialized: d,
      navigation: ti,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || s,
      fetchers: new Map(),
    },
    v = ue.Pop,
    w = !1,
    y,
    z = !1,
    p = !1,
    f = [],
    m = [],
    g = new Map(),
    P = 0,
    D = -1,
    N = new Map(),
    T = new Set(),
    Y = new Map(),
    O = new Map();
  function Me() {
    return (
      (n = e.history.listen((S) => {
        let { action: E, location: C } = S;
        return _(E, C);
      })),
      c.initialized || _(ue.Pop, c.location),
      h
    );
  }
  function Kt() {
    n && n(), r.clear(), y && y.abort(), c.fetchers.forEach((S, E) => Po(E));
  }
  function Yt(S) {
    return r.add(S), () => r.delete(S);
  }
  function ye(S) {
    (c = X({}, c, S)), r.forEach((E) => E(c));
  }
  function Xt(S, E) {
    var C;
    let M =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        en(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((C = S.state) == null ? void 0 : C._isRedirect) !== !0,
      L;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (L = E.actionData)
        : (L = null)
      : M
      ? (L = c.actionData)
      : (L = null);
    let U = E.loaderData
      ? ws(c.loaderData, E.loaderData, E.matches || [], E.errors)
      : c.loaderData;
    ye(
      X({}, E, {
        actionData: L,
        loaderData: U,
        historyAction: v,
        location: S,
        initialized: !0,
        navigation: ti,
        revalidation: "idle",
        restoreScrollPosition: c.navigation.formData
          ? !1
          : bu(S, E.matches || c.matches),
        preventScrollReset: w,
      })
    ),
      z ||
        v === ue.Pop ||
        (v === ue.Push
          ? e.history.push(S, S.state)
          : v === ue.Replace && e.history.replace(S, S.state)),
      (v = ue.Pop),
      (w = !1),
      (z = !1),
      (p = !1),
      (f = []),
      (m = []);
  }
  async function Gn(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let { path: C, submission: M, error: L } = ms(S, E),
      U = Vr(c.location, C, E && E.state);
    U = X({}, U, e.history.encodeLocation(U));
    let $ = E && E.replace != null ? E.replace : void 0,
      W = ue.Push;
    $ === !0
      ? (W = ue.Replace)
      : $ === !1 ||
        (M != null &&
          en(M.formMethod) &&
          M.formAction === c.location.pathname + c.location.search &&
          (W = ue.Replace));
    let F =
      E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0;
    return await _(W, U, {
      submission: M,
      pendingError: L,
      preventScrollReset: F,
      replace: E && E.replace,
    });
  }
  function Zn() {
    if (
      (Ct(),
      ye({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        _(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      _(v || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function _(S, E, C) {
    y && y.abort(),
      (y = null),
      (v = S),
      (z = (C && C.startUninterruptedRevalidation) === !0),
      ud(c.location, c.matches),
      (w = (C && C.preventScrollReset) === !0);
    let M = C && C.overrideNavigation,
      L = hr(t, E, e.basename);
    if (!L) {
      let b = bt(404, { pathname: E.pathname }),
        { matches: Ye, route: Xe } = Ss(t);
      _o(), Xt(E, { matches: Ye, loaderData: {}, errors: { [Xe.id]: b } });
      return;
    }
    if (Rm(c.location, E)) {
      Xt(E, { matches: L });
      return;
    }
    y = new AbortController();
    let U = sr(E, y.signal, C && C.submission),
      $,
      W;
    if (C && C.pendingError) W = { [Ln(L).route.id]: C.pendingError };
    else if (C && C.submission && en(C.submission.formMethod)) {
      let b = await j(U, E, C.submission, L, { replace: C.replace });
      if (b.shortCircuited) return;
      ($ = b.pendingActionData),
        (W = b.pendingActionError),
        (M = X({ state: "loading", location: E }, C.submission)),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: F,
      loaderData: pe,
      errors: Q,
    } = await I(U, E, L, M, C && C.submission, C && C.replace, $, W);
    F ||
      ((y = null),
      Xt(
        E,
        X({ matches: L }, $ ? { actionData: $ } : {}, {
          loaderData: pe,
          errors: Q,
        })
      ));
  }
  async function j(S, E, C, M, L) {
    Ct();
    let U = X({ state: "submitting", location: E }, C);
    ye({ navigation: U });
    let $,
      W = Cs(M, E);
    if (!W.route.action)
      $ = {
        type: me.error,
        error: bt(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: W.route.id,
        }),
      };
    else if ((($ = await ar("action", S, W, M, h.basename)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (In($)) {
      let F;
      return (
        L && L.replace != null
          ? (F = L.replace)
          : (F = $.location === c.location.pathname + c.location.search),
        await ct(c, $, { submission: C, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Cr($)) {
      let F = Ln(M, W.route.id);
      return (
        (L && L.replace) !== !0 && (v = ue.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: $.error } }
      );
    }
    if (ln($)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [W.route.id]: $.data } };
  }
  async function I(S, E, C, M, L, U, $, W) {
    let F = M;
    F ||
      (F = X(
        {
          state: "loading",
          location: E,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        L
      ));
    let pe =
        L ||
        (F.formMethod && F.formAction && F.formData && F.formEncType
          ? {
              formMethod: F.formMethod,
              formAction: F.formAction,
              formData: F.formData,
              formEncType: F.formEncType,
            }
          : void 0),
      [Q, b] = vs(c, C, pe, E, p, f, m, $, W, Y);
    if (
      (_o(
        (we) =>
          !(C && C.some((Oe) => Oe.route.id === we)) ||
          (Q && Q.some((Oe) => Oe.route.id === we))
      ),
      Q.length === 0 && b.length === 0)
    )
      return (
        Xt(
          E,
          X(
            { matches: C, loaderData: {}, errors: W || null },
            $ ? { actionData: $ } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    if (!z) {
      b.forEach((Oe) => {
        let [Gt] = Oe,
          qn = c.fetchers.get(Gt),
          bn = {
            state: "loading",
            data: qn && qn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        c.fetchers.set(Gt, bn);
      });
      let we = $ || c.actionData;
      ye(
        X(
          { navigation: F },
          we
            ? Object.keys(we).length === 0
              ? { actionData: null }
              : { actionData: we }
            : {},
          b.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    (D = ++P),
      b.forEach((we) => {
        let [Oe] = we;
        return g.set(Oe, y);
      });
    let {
      results: Ye,
      loaderResults: Xe,
      fetcherResults: Jn,
    } = await nt(c.matches, C, Q, b, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    b.forEach((we) => {
      let [Oe] = we;
      return g.delete(Oe);
    });
    let Jr = Es(Ye);
    if (Jr) return await ct(c, Jr, { replace: U }), { shortCircuited: !0 };
    let { loaderData: qr, errors: vn } = ys(c, C, Q, Xe, W, b, Jn, O);
    O.forEach((we, Oe) => {
      we.subscribe((Gt) => {
        (Gt || we.done) && O.delete(Oe);
      });
    }),
      od();
    let Ro = qu(D);
    return X(
      { loaderData: qr, errors: vn },
      Ro || b.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function q(S) {
    return c.fetchers.get(S) || wm;
  }
  function ie(S, E, C, M) {
    if (Em)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    g.has(S) && Zr(S);
    let L = hr(t, C, e.basename);
    if (!L) {
      Co(S, E, bt(404, { pathname: C }));
      return;
    }
    let { path: U, submission: $ } = ms(C, M, !0),
      W = Cs(L, U);
    if ($ && en($.formMethod)) {
      mn(S, E, U, W, L, $);
      return;
    }
    Y.set(S, [U, W, L]), st(S, E, U, W, L, $);
  }
  async function mn(S, E, C, M, L, U) {
    if ((Ct(), Y.delete(S), !M.route.action)) {
      let ft = bt(405, { method: U.formMethod, pathname: C, routeId: E });
      Co(S, E, ft);
      return;
    }
    let $ = c.fetchers.get(S),
      W = X({ state: "submitting" }, U, {
        data: $ && $.data,
        " _hasFetcherDoneAnything ": !0,
      });
    c.fetchers.set(S, W), ye({ fetchers: new Map(c.fetchers) });
    let F = new AbortController(),
      pe = sr(C, F.signal, U);
    g.set(S, F);
    let Q = await ar("action", pe, M, L, h.basename);
    if (pe.signal.aborted) {
      g.get(S) === F && g.delete(S);
      return;
    }
    if (In(Q)) {
      g.delete(S), T.add(S);
      let ft = X({ state: "loading" }, U, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        c.fetchers.set(S, ft),
        ye({ fetchers: new Map(c.fetchers) }),
        ct(c, Q, { isFetchActionRedirect: !0 })
      );
    }
    if (Cr(Q)) {
      Co(S, E, Q.error);
      return;
    }
    ln(Q) && A(!1, "defer() is not supported in actions");
    let b = c.navigation.location || c.location,
      Ye = sr(b, F.signal),
      Xe =
        c.navigation.state !== "idle"
          ? hr(t, c.navigation.location, e.basename)
          : c.matches;
    A(Xe, "Didn't find any matches after fetcher action");
    let Jn = ++P;
    N.set(S, Jn);
    let Jr = X({ state: "loading", data: Q.data }, U, {
      " _hasFetcherDoneAnything ": !0,
    });
    c.fetchers.set(S, Jr);
    let [qr, vn] = vs(
      c,
      Xe,
      U,
      b,
      p,
      f,
      m,
      { [M.route.id]: Q.data },
      void 0,
      Y
    );
    vn
      .filter((ft) => {
        let [Zt] = ft;
        return Zt !== S;
      })
      .forEach((ft) => {
        let [Zt] = ft,
          ea = c.fetchers.get(Zt),
          cd = {
            state: "loading",
            data: ea && ea.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        c.fetchers.set(Zt, cd), g.set(Zt, F);
      }),
      ye({ fetchers: new Map(c.fetchers) });
    let {
      results: Ro,
      loaderResults: we,
      fetcherResults: Oe,
    } = await nt(c.matches, Xe, qr, vn, Ye);
    if (F.signal.aborted) return;
    N.delete(S),
      g.delete(S),
      vn.forEach((ft) => {
        let [Zt] = ft;
        return g.delete(Zt);
      });
    let Gt = Es(Ro);
    if (Gt) return ct(c, Gt);
    let { loaderData: qn, errors: bn } = ys(
        c,
        c.matches,
        qr,
        we,
        void 0,
        vn,
        Oe,
        O
      ),
      ad = {
        state: "idle",
        data: Q.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    c.fetchers.set(S, ad);
    let sd = qu(Jn);
    c.navigation.state === "loading" && Jn > D
      ? (A(v, "Expected pending action"),
        y && y.abort(),
        Xt(c.navigation.location, {
          matches: Xe,
          loaderData: qn,
          errors: bn,
          fetchers: new Map(c.fetchers),
        }))
      : (ye(
          X(
            { errors: bn, loaderData: ws(c.loaderData, qn, Xe, bn) },
            sd ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (p = !1));
  }
  async function st(S, E, C, M, L, U) {
    let $ = c.fetchers.get(S),
      W = X(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        U,
        { data: $ && $.data, " _hasFetcherDoneAnything ": !0 }
      );
    c.fetchers.set(S, W), ye({ fetchers: new Map(c.fetchers) });
    let F = new AbortController(),
      pe = sr(C, F.signal);
    g.set(S, F);
    let Q = await ar("loader", pe, M, L, h.basename);
    if (
      (ln(Q) && (Q = (await Jf(Q, pe.signal, !0)) || Q),
      g.get(S) === F && g.delete(S),
      pe.signal.aborted)
    )
      return;
    if (In(Q)) {
      await ct(c, Q);
      return;
    }
    if (Cr(Q)) {
      let Ye = Ln(c.matches, E);
      c.fetchers.delete(S),
        ye({
          fetchers: new Map(c.fetchers),
          errors: { [Ye.route.id]: Q.error },
        });
      return;
    }
    A(!ln(Q), "Unhandled fetcher deferred data");
    let b = {
      state: "idle",
      data: Q.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    c.fetchers.set(S, b), ye({ fetchers: new Map(c.fetchers) });
  }
  async function ct(S, E, C) {
    var M;
    let {
      submission: L,
      replace: U,
      isFetchActionRedirect: $,
    } = C === void 0 ? {} : C;
    E.revalidate && (p = !0);
    let W = Vr(
      S.location,
      E.location,
      X({ _isRedirect: !0 }, $ ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (A(W, "Expected a location on the redirect navigation"),
      typeof ((M = window) == null ? void 0 : M.location) < "u")
    ) {
      let Xe = Wr(E.location).origin;
      if (window.location.origin !== Xe) {
        U
          ? window.location.replace(E.location)
          : window.location.assign(E.location);
        return;
      }
    }
    y = null;
    let F = U === !0 ? ue.Replace : ue.Push,
      {
        formMethod: pe,
        formAction: Q,
        formEncType: b,
        formData: Ye,
      } = S.navigation;
    !L &&
      pe &&
      Q &&
      Ye &&
      b &&
      (L = { formMethod: pe, formAction: Q, formEncType: b, formData: Ye }),
      ym.has(E.status) && L && en(L.formMethod)
        ? await _(F, W, { submission: X({}, L, { formAction: E.location }) })
        : await _(F, W, {
            overrideNavigation: {
              state: "loading",
              location: W,
              formMethod: L ? L.formMethod : void 0,
              formAction: L ? L.formAction : void 0,
              formEncType: L ? L.formEncType : void 0,
              formData: L ? L.formData : void 0,
            },
          });
  }
  async function nt(S, E, C, M, L) {
    let U = await Promise.all([
        ...C.map((F) => ar("loader", L, F, E, h.basename)),
        ...M.map((F) => {
          let [, pe, Q, b] = F;
          return ar("loader", sr(pe, L.signal), Q, b, h.basename);
        }),
      ]),
      $ = U.slice(0, C.length),
      W = U.slice(C.length);
    return (
      await Promise.all([
        ks(S, C, $, L.signal, !1, c.loaderData),
        ks(
          S,
          M.map((F) => {
            let [, , pe] = F;
            return pe;
          }),
          W,
          L.signal,
          !0
        ),
      ]),
      { results: U, loaderResults: $, fetcherResults: W }
    );
  }
  function Ct() {
    (p = !0),
      f.push(..._o()),
      Y.forEach((S, E) => {
        g.has(E) && (m.push(E), Zr(E));
      });
  }
  function Co(S, E, C) {
    let M = Ln(c.matches, E);
    Po(S), ye({ errors: { [M.route.id]: C }, fetchers: new Map(c.fetchers) });
  }
  function Po(S) {
    g.has(S) && Zr(S),
      Y.delete(S),
      N.delete(S),
      T.delete(S),
      c.fetchers.delete(S);
  }
  function Zr(S) {
    let E = g.get(S);
    A(E, "Expected fetch controller: " + S), E.abort(), g.delete(S);
  }
  function Ju(S) {
    for (let E of S) {
      let M = {
        state: "idle",
        data: q(E).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      c.fetchers.set(E, M);
    }
  }
  function od() {
    let S = [];
    for (let E of T) {
      let C = c.fetchers.get(E);
      A(C, "Expected fetcher: " + E),
        C.state === "loading" && (T.delete(E), S.push(E));
    }
    Ju(S);
  }
  function qu(S) {
    let E = [];
    for (let [C, M] of N)
      if (M < S) {
        let L = c.fetchers.get(C);
        A(L, "Expected fetcher: " + C),
          L.state === "loading" && (Zr(C), N.delete(C), E.push(C));
      }
    return Ju(E), E.length > 0;
  }
  function _o(S) {
    let E = [];
    return (
      O.forEach((C, M) => {
        (!S || S(M)) && (C.cancel(), E.push(M), O.delete(M));
      }),
      E
    );
  }
  function id(S, E, C) {
    if (
      ((l = S), (i = E), (o = C || ((M) => M.key)), !u && c.navigation === ti)
    ) {
      u = !0;
      let M = bu(c.location, c.matches);
      M != null && ye({ restoreScrollPosition: M });
    }
    return () => {
      (l = null), (i = null), (o = null);
    };
  }
  function ud(S, E) {
    if (l && o && i) {
      let C = E.map((L) => xs(L, c.loaderData)),
        M = o(S, C) || S.key;
      l[M] = i();
    }
  }
  function bu(S, E) {
    if (l && o && i) {
      let C = E.map((U) => xs(U, c.loaderData)),
        M = o(S, C) || S.key,
        L = l[M];
      if (typeof L == "number") return L;
    }
    return null;
  }
  return (
    (h = {
      get basename() {
        return e.basename;
      },
      get state() {
        return c;
      },
      get routes() {
        return t;
      },
      initialize: Me,
      subscribe: Yt,
      enableScrollRestoration: id,
      navigate: Gn,
      fetch: ie,
      revalidate: Zn,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: q,
      deleteFetcher: Po,
      dispose: Kt,
      _internalFetchControllers: g,
      _internalActiveDeferreds: O,
    }),
    h
  );
}
function xm(e) {
  return e != null && "formData" in e;
}
function ms(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : at(e);
  if (!t || !xm(t)) return { path: r };
  if (t.formMethod && !Dm(t.formMethod))
    return { path: r, error: bt(405, { method: t.formMethod }) };
  let l;
  if (
    t.formData &&
    ((l = {
      formMethod: t.formMethod || "get",
      formAction: Zf(r),
      formEncType: (t && t.formEncType) || "application/x-www-form-urlencoded",
      formData: t.formData,
    }),
    en(l.formMethod))
  )
    return { path: r, submission: l };
  let o = xt(r);
  try {
    let i = Gf(t.formData);
    n && o.search && qf(o.search) && i.append("index", ""),
      (o.search = "?" + i);
  } catch {
    return { path: r, error: bt(400) };
  }
  return { path: at(o), submission: l };
}
function Cm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function vs(e, t, n, r, l, o, i, u, a, s) {
  let d = a ? Object.values(a)[0] : u ? Object.values(u)[0] : void 0,
    h = a ? Object.keys(a)[0] : void 0,
    v = Cm(t, h).filter(
      (y, z) =>
        y.route.loader != null &&
        (Pm(e.loaderData, e.matches[z], y) ||
          o.some((p) => p === y.route.id) ||
          gs(e.location, e.matches[z], n, r, y, l, d))
    ),
    w = [];
  return (
    s &&
      s.forEach((y, z) => {
        let [p, f, m] = y;
        i.includes(z)
          ? w.push([z, p, f, m])
          : l && gs(p, f, n, p, f, l, d) && w.push([z, p, f, m]);
      }),
    [v, w]
  );
}
function Pm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Xf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function gs(e, t, n, r, l, o, i) {
  let u = Wr(e),
    a = t.params,
    s = Wr(r),
    d = l.params,
    h = Xf(t, l) || u.toString() === s.toString() || u.search !== s.search || o;
  if (l.route.shouldRevalidate) {
    let c = l.route.shouldRevalidate(
      X({ currentUrl: u, currentParams: a, nextUrl: s, nextParams: d }, n, {
        actionResult: i,
        defaultShouldRevalidate: h,
      })
    );
    if (typeof c == "boolean") return c;
  }
  return h;
}
async function ar(e, t, n, r, l, o, i, u) {
  l === void 0 && (l = "/"), o === void 0 && (o = !1), i === void 0 && (i = !1);
  let a,
    s,
    d,
    h = new Promise((v, w) => (d = w)),
    c = () => d();
  t.signal.addEventListener("abort", c);
  try {
    let v = n.route[e];
    A(
      v,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
    ),
      (s = await Promise.race([
        v({ request: t, params: n.params, context: u }),
        h,
      ])),
      A(
        s !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            n.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`."
      );
  } catch (v) {
    (a = me.error), (s = v);
  } finally {
    t.signal.removeEventListener("abort", c);
  }
  if (Nm(s)) {
    let v = s.status;
    if (gm.has(v)) {
      let z = s.headers.get("Location");
      if (
        (A(
          z,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !(/^[a-z+]+:\/\//i.test(z) || z.startsWith("//")))
      ) {
        let f = r.slice(0, r.indexOf(n) + 1),
          m = wo(f).map((P) => P.pathnameBase),
          g = Xu(z, m, new URL(t.url).pathname);
        if ((A(at(g), "Unable to resolve redirect location: " + z), l)) {
          let P = g.pathname;
          g.pathname = P === "/" ? l : gt([l, P]);
        }
        z = at(g);
      }
      if (o) throw (s.headers.set("Location", z), s);
      return {
        type: me.redirect,
        status: v,
        location: z,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (i) throw { type: a || me.data, response: s };
    let w,
      y = s.headers.get("Content-Type");
    return (
      y && /\bapplication\/json\b/.test(y)
        ? (w = await s.json())
        : (w = await s.text()),
      a === me.error
        ? { type: a, error: new So(v, s.statusText, w), headers: s.headers }
        : { type: me.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  return a === me.error
    ? { type: a, error: s }
    : s instanceof fm
    ? { type: me.deferred, deferredData: s }
    : { type: me.data, data: s };
}
function sr(e, t, n) {
  let r = Wr(Zf(e)).toString(),
    l = { signal: t };
  if (n && en(n.formMethod)) {
    let { formMethod: o, formEncType: i, formData: u } = n;
    (l.method = o.toUpperCase()),
      (l.body = i === "application/x-www-form-urlencoded" ? Gf(u) : u);
  }
  return new Request(r, l);
}
function Gf(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    A(
      typeof r == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(n, r);
  return t;
}
function _m(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((d, h) => {
      let c = t[h].route.id;
      if (
        (A(!In(d), "Cannot handle redirect results in processLoaderData"),
        Cr(d))
      ) {
        let v = Ln(e, c),
          w = d.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[v.route.id] == null && (i[v.route.id] = w),
          (o[c] = void 0),
          a || ((a = !0), (u = Kf(d.error) ? d.error.status : 500)),
          d.headers && (s[c] = d.headers);
      } else
        ln(d)
          ? (l && l.set(c, d.deferredData), (o[c] = d.deferredData.data))
          : ((o[c] = d.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !a &&
              (u = d.statusCode),
            d.headers && (s[c] = d.headers));
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function ys(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = _m(t, n, r, l, u);
  for (let d = 0; d < o.length; d++) {
    let [h, , c] = o[d];
    A(
      i !== void 0 && i[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = i[d];
    if (Cr(v)) {
      let w = Ln(e.matches, c.route.id);
      (s && s[w.route.id]) || (s = X({}, s, { [w.route.id]: v.error })),
        e.fetchers.delete(h);
    } else {
      if (In(v)) throw new Error("Unhandled fetcher revalidation redirect");
      if (ln(v)) throw new Error("Unhandled fetcher deferred data");
      {
        let w = {
          state: "idle",
          data: v.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(h, w);
      }
    }
  }
  return { loaderData: a, errors: s };
}
function ws(e, t, n, r) {
  let l = X({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Ln(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ss(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function bt(e, t) {
  let { pathname: n, routeId: r, method: l } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    i = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (i =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : (i = "Cannot submit binary form data using GET"))
      : e === 403
      ? ((o = "Forbidden"),
        (i = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (i = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (i =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (i = 'Invalid request method "' + l.toUpperCase() + '"')),
    new So(e || 500, o, new Error(i), !0)
  );
}
function Es(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (In(n)) return n;
  }
}
function Zf(e) {
  let t = typeof e == "string" ? xt(e) : e;
  return at(X({}, t, { hash: "" }));
}
function Rm(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function ln(e) {
  return e.type === me.deferred;
}
function Cr(e) {
  return e.type === me.error;
}
function In(e) {
  return (e && e.type) === me.redirect;
}
function Nm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Dm(e) {
  return vm.has(e);
}
function en(e) {
  return hm.has(e);
}
async function ks(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i],
      s = e.find((h) => h.route.id === a.route.id),
      d = s != null && !Xf(s, a) && (o && o[a.route.id]) !== void 0;
    ln(u) &&
      (l || d) &&
      (await Jf(u, r, l).then((h) => {
        h && (n[i] = h || n[i]);
      }));
  }
}
async function Jf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: me.error, error: l };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function qf(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function xs(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Cs(e, t) {
  let n = typeof t == "string" ? xt(t).search : t.search;
  if (e[e.length - 1].route.index && qf(n || "")) return e[e.length - 1];
  let r = wo(e);
  return r[r.length - 1];
}
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bl.apply(this, arguments)
  );
}
function Lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Tm = typeof Object.is == "function" ? Object.is : Lm,
  { useState: zm, useEffect: Mm, useLayoutEffect: Om, useDebugValue: jm } = ri;
function Fm(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = zm({ inst: { value: r, getSnapshot: t } });
  return (
    Om(() => {
      (l.value = r), (l.getSnapshot = t), ni(l) && o({ inst: l });
    }, [e, r, t]),
    Mm(
      () => (
        ni(l) && o({ inst: l }),
        e(() => {
          ni(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    jm(r),
    r
  );
}
function ni(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Tm(n, r);
  } catch {
    return !0;
  }
}
function Im(e, t, n) {
  return t();
}
const Um =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Am = !Um,
  $m = Am ? Im : Fm,
  Bm = "useSyncExternalStore" in ri ? ((e) => e.useSyncExternalStore)(ri) : $m,
  Gu = x.createContext(null),
  Zu = x.createContext(null),
  Eo = x.createContext(null),
  ko = x.createContext(null),
  Qt = x.createContext({ outlet: null, matches: [] }),
  bf = x.createContext(null);
function Vm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Gr() || A(!1);
  let { basename: r, navigator: l } = x.useContext(Eo),
    { hash: o, pathname: i, search: u } = ed(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : gt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function Gr() {
  return x.useContext(ko) != null;
}
function xo() {
  return Gr() || A(!1), x.useContext(ko).location;
}
function Wm() {
  Gr() || A(!1);
  let { basename: e, navigator: t } = x.useContext(Eo),
    { matches: n } = x.useContext(Qt),
    { pathname: r } = xo(),
    l = JSON.stringify(wo(n).map((u) => u.pathnameBase)),
    o = x.useRef(!1);
  return (
    x.useEffect(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (u, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let s = Xu(u, JSON.parse(l), r, a.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : gt([e, s.pathname])),
          (a.replace ? t.replace : t.push)(s, a.state, a);
      },
      [e, t, l, r]
    )
  );
}
const Hm = x.createContext(null);
function Qm(e) {
  let t = x.useContext(Qt).outlet;
  return t && x.createElement(Hm.Provider, { value: e }, t);
}
function vv() {
  let { matches: e } = x.useContext(Qt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ed(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(Qt),
    { pathname: l } = xo(),
    o = JSON.stringify(wo(r).map((i) => i.pathnameBase));
  return x.useMemo(() => Xu(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Km(e, t) {
  Gr() || A(!1);
  let { navigator: n } = x.useContext(Eo),
    r = x.useContext(Zu),
    { matches: l } = x.useContext(Qt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = xo(),
    s;
  if (t) {
    var d;
    let y = typeof t == "string" ? xt(t) : t;
    u === "/" || ((d = y.pathname) != null && d.startsWith(u)) || A(!1),
      (s = y);
  } else s = a;
  let h = s.pathname || "/",
    c = u === "/" ? h : h.slice(u.length) || "/",
    v = hr(e, { pathname: c }),
    w = Zm(
      v &&
        v.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: gt([
              u,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : gt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && w
    ? x.createElement(
        ko.Provider,
        {
          value: {
            location: bl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ue.Pop,
          },
        },
        w
      )
    : w;
}
function Ym() {
  let e = rd(),
    t = Kf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unhandled Thrown Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    x.createElement("p", null, "💿 Hey developer 👋"),
    x.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own ",
      x.createElement("code", { style: o }, "errorElement"),
      " props on ",
      x.createElement("code", { style: o }, "<Route>")
    )
  );
}
class Xm extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          Qt.Provider,
          { value: this.props.routeContext },
          x.createElement(bf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Gm(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(Gu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      n.route.errorElement &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Qt.Provider, { value: t }, r)
  );
}
function Zm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || A(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      s = n ? i.route.errorElement || x.createElement(Ym, null) : null,
      d = t.concat(r.slice(0, u + 1)),
      h = () =>
        x.createElement(
          Gm,
          { match: i, routeContext: { outlet: o, matches: d } },
          a ? s : i.route.element !== void 0 ? i.route.element : o
        );
    return n && (i.route.errorElement || u === 0)
      ? x.createElement(Xm, {
          location: n.location,
          component: s,
          error: a,
          children: h(),
          routeContext: { outlet: null, matches: d },
        })
      : h();
  }, null);
}
var Ps;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(Ps || (Ps = {}));
var Qn;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Qn || (Qn = {}));
function td(e) {
  let t = x.useContext(Zu);
  return t || A(!1), t;
}
function Jm(e) {
  let t = x.useContext(Qt);
  return t || A(!1), t;
}
function nd(e) {
  let t = Jm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || A(!1), n.route.id;
}
function gv() {
  let e = td(Qn.UseLoaderData),
    t = nd(Qn.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function rd() {
  var e;
  let t = x.useContext(bf),
    n = td(Qn.UseRouteError),
    r = nd(Qn.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function qm(e) {
  let { fallbackElement: t, router: n } = e,
    r = Bm(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    l = x.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (i) => n.navigate(i),
        push: (i, u, a) =>
          n.navigate(i, {
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
        replace: (i, u, a) =>
          n.navigate(i, {
            replace: !0,
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
      }),
      [n]
    ),
    o = n.basename || "/";
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      Gu.Provider,
      { value: { router: n, navigator: l, static: !1, basename: o } },
      x.createElement(
        Zu.Provider,
        { value: r },
        x.createElement(
          ev,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: l,
          },
          n.state.initialized ? x.createElement(tv, null) : t
        )
      )
    ),
    null
  );
}
function bm(e) {
  return Qm(e.context);
}
function Nl(e) {
  A(!1);
}
function ev(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ue.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Gr() && A(!1);
  let u = t.replace(/^\/*/, "/"),
    a = x.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = xt(r));
  let {
      pathname: s = "/",
      search: d = "",
      hash: h = "",
      state: c = null,
      key: v = "default",
    } = r,
    w = x.useMemo(() => {
      let y = Qf(s, u);
      return y == null
        ? null
        : { pathname: y, search: d, hash: h, state: c, key: v };
    }, [u, s, d, h, c, v]);
  return w == null
    ? null
    : x.createElement(
        Eo.Provider,
        { value: a },
        x.createElement(ko.Provider, {
          children: n,
          value: { location: w, navigationType: l },
        })
      );
}
function tv(e) {
  let { children: t, location: n } = e,
    r = x.useContext(Gu),
    l = r && !t ? r.router.routes : eo(t);
  return Km(l, n);
}
var _s;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(_s || (_s = {}));
new Promise(() => {});
function eo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      if (r.type === x.Fragment) {
        n.push.apply(n, eo(r.props.children, t));
        return;
      }
      r.type !== Nl && A(!1), !r.props.index || !r.props.children || A(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = eo(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function ld(e) {
  return e.map((t) => {
    let n = bl({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = ld(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function nv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function rv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function lv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !rv(e);
}
const ov = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function iv(e, t) {
  return km({
    basename: t == null ? void 0 : t.basename,
    history: Vh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || uv(),
    routes: ld(e),
  }).initialize();
}
function uv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = to({}, t, { errors: av(t.errors) })), t;
}
function av(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new So(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      let o = new Error(l.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = l;
  return n;
}
const Rs = x.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: l,
      reloadDocument: o,
      replace: i,
      state: u,
      target: a,
      to: s,
      preventScrollReset: d,
    } = t,
    h = nv(t, ov),
    c = Vm(s, { relative: l }),
    v = sv(s, {
      replace: i,
      state: u,
      target: a,
      preventScrollReset: d,
      relative: l,
    });
  function w(y) {
    r && r(y), y.defaultPrevented || v(y);
  }
  return x.createElement(
    "a",
    to({}, h, { href: c, onClick: o ? r : w, ref: n, target: a })
  );
});
var Ns;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ns || (Ns = {}));
var Ds;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ds || (Ds = {}));
function sv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Wm(),
    a = xo(),
    s = ed(e, { relative: i });
  return x.useCallback(
    (d) => {
      if (lv(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : at(a) === at(s);
        u(e, { replace: h, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i]
  );
}
function Ls() {
  const e = rd();
  return V.jsx("div", { className: "wrongRoute", children: e.message });
}
function cv() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1),
    [l, o] = x.useState([]),
    [i, u] = x.useState([]),
    a = x.useCallback(({ target: s }) => {
      s.id === "solutions" ? r((d) => !d) : t((d) => !d);
    }, []);
  return (
    x.useLayoutEffect(() => {
      (async () => {
        const {
          solutions: { Items: s },
          productData: { Items: d },
        } = await (
          await fetch(
            "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/solution"
          )
        ).json();
        o(d), u(s);
      })();
    }, []),
    V.jsxs("nav", {
      children: [
        V.jsx("a", {
          href: "/Home.html",
          children: V.jsx("h1", { children: "orms web" }),
        }),
        V.jsxs("ul", {
          children: [
            V.jsx("li", {
              className: `headLi ${n ? "view" : ""}`,
              onClick: a,
              id: "solutions",
              children: "Solutions",
            }),
            i &&
              V.jsx("ul", {
                className: "child",
                id: "solutionsUl",
                children: i.map((s, d) =>
                  V.jsx(
                    "li",
                    {
                      className: "solutions",
                      children: V.jsx(Rs, {
                        to: `/solutions/${s.name}`,
                        children: s.name,
                      }),
                    },
                    d
                  )
                ),
              }),
            V.jsx("li", {
              className: `headLi ${e ? "view" : ""}`,
              id: "products",
              onClick: a,
              children: "Products",
            }),
            l &&
              V.jsx("ul", {
                className: "child",
                id: "productsUl",
                children: l.map((s, d) =>
                  V.jsx(
                    "li",
                    {
                      className: "products",
                      children: V.jsx(Rs, {
                        to: `/products/${s.productName}`,
                        children: s.productName,
                      }),
                    },
                    d
                  )
                ),
              }),
          ],
        }),
      ],
    })
  );
}
function fv() {
  return V.jsxs(V.Fragment, {
    children: [
      V.jsx("header", { children: V.jsx(cv, {}) }),
      V.jsx("main", { children: V.jsx(bm, {}) }),
    ],
  });
}
const dv = x.lazy(() =>
    Bf(
      () => import("./ProductsTable-4cb3ea59.js"),
      ["assets/ProductsTable-4cb3ea59.js", "assets/FileSaver.min-c0a8d237.js"]
    )
  ),
  pv = x.lazy(() =>
    Bf(
      () => import("./SolutionsTable-bd9dcde6.js"),
      ["assets/SolutionsTable-bd9dcde6.js", "assets/FileSaver.min-c0a8d237.js"]
    )
  );
function hv() {
  x.useLayoutEffect(() => {
    localStorage.getItem("LoggedIn") ||
      (window.location.href = `${window.location.origin}/login.html`);
  }, []);
  const e = iv(
    eo(
      V.jsxs(Nl, {
        path: "/",
        element: V.jsx(fv, {}),
        children: [
          V.jsx(Nl, {
            path: "products/:name",
            element: V.jsx(dv, {}),
            errorElement: V.jsx(Ls, {}),
            loader: async ({ params: { name: t } }) => {
              const n = fetch(
                  "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/productPage",
                  {
                    headers: { id: t },
                  }
                ),
                r = fetch(
                  "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/Packages"
                ),
                l = await n;
              if (!l.ok) throw new Error("Wrong Product Name");
              const { Items: o } = await l.json();
              if (!(o != null && o.length))
                throw new Error("No Products Were Found");
              const { Items: i } = await (await r).json();
              return (
                console.log("products", o),
                {
                  Products: o,
                  Packages:
                    i == null ? void 0 : i.filter((u) => u.parentProduct === t),
                }
              );
            },
          }),
          V.jsx(Nl, {
            path: "solutions/:name",
            element: V.jsx(pv, {}),
            errorElement: V.jsx(Ls, {}),
            loader: async ({ params: { name: t } }) => {
              const n = fetch(
                  "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/product"
                ),
                r = fetch(
                  "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/solutionPage",
                  {
                    headers: { id: t },
                  }
                ),
                l = fetch(
                  "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/Packages"
                ),
                o = await r;
              if (!o.ok) throw new Error("Wrong Solution Name");
              const { Items: i } = await o.json();
              if (!(i != null && i.length))
                throw new Error("no Solutions Were Found");
              const {
                  productData: { Items: u },
                } = await (await n).json(),
                { Items: a } = await (await l).json(),
                s = {},
                d = u.filter((h) => h.parentName === t);
              for (let h = 0; h < d.length; h++) {
                const c = d[h],
                  { Items: v } = await (
                    await fetch(
                      "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/productPage",
                      { headers: { id: c.productName } }
                    )
                  ).json();
                s[c.productName] = v;
              }
              return { solutions: i, productVersions: s, Packages: a };
            },
          }),
        ],
      })
    )
  );
  return V.jsx(x.Suspense, {
    fallback: V.jsx("div", {}),
    children: V.jsx(qm, { router: e }),
  });
}
li.createRoot(document.getElementById("root")).render(
  V.jsx(Us.StrictMode, { children: V.jsx(hv, {}) })
);
export { vv as a, mv as c, V as j, x as r, gv as u };
