/**
 * @popperjs/core v2.10.1 - MIT License
 */

"use strict";
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function(e) {
    function t(e) { return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e }

    function n(e) { return e instanceof t(e).Element || e instanceof Element }

    function o(e) { return e instanceof t(e).HTMLElement || e instanceof HTMLElement }

    function r(e) { return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot) }

    function i(e, t) { void 0 === t && (t = !1); var n = e.getBoundingClientRect(),
            r = 1,
            i = 1; return o(e) && t && (t = e.offsetHeight, 0 < (e = e.offsetWidth) && (r = n.width / e || 1), 0 < t && (i = n.height / t || 1)), { width: N(n.width / r), height: N(n.height / i), top: N(n.top / i), right: N(n.right / r), bottom: N(n.bottom / i), left: N(n.left / r), x: N(n.left / r), y: N(n.top / i) } }

    function a(e) { return { scrollLeft: (e = t(e)).pageXOffset, scrollTop: e.pageYOffset } }

    function s(e) { return e ? (e.nodeName || "").toLowerCase() : null }

    function f(e) { return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement }

    function p(e) { return i(f(e)).left + a(e).scrollLeft }

    function c(e) { return t(e).getComputedStyle(e) }

    function l(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) }

    function u(e, n, r) { void 0 === r && (r = !1); var c, u = o(n); if (c = o(n)) { var d = (c = n.getBoundingClientRect()).height / n.offsetHeight || 1;
            c = 1 !== (c.width / n.offsetWidth || 1) || 1 !== d }
        d = c, c = f(n), e = i(e, d), d = { scrollLeft: 0, scrollTop: 0 }; var h = { x: 0, y: 0 }; return (u || !u && !r) && (("body" !== s(n) || l(c)) && (d = n !== t(n) && o(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : a(n)), o(n) ? ((h = i(n, !0)).x += n.clientLeft, h.y += n.clientTop) : c && (h.x = p(c))), { x: e.left + d.scrollLeft - h.x, y: e.top + d.scrollTop - h.y, width: e.width, height: e.height } }

    function d(e) { var t = i(e),
            n = e.offsetWidth,
            o = e.offsetHeight; return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o } }

    function h(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (r(e) ? e.host : null) || f(e) }

    function m(e) { return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : o(e) && l(e) ? e : m(h(e)) }

    function v(e, n) { var o;
        void 0 === n && (n = []); var r = m(e); return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = t(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, n = n.concat(r), e ? n : n.concat(v(h(r))) }

    function g(e) { return o(e) && "fixed" !== c(e).position ? e.offsetParent : null }

    function b(e) { for (var n = t(e), r = g(e); r && 0 <= ["table", "td", "th"].indexOf(s(r)) && "static" === c(r).position;) r = g(r); if (r && ("html" === s(r) || "body" === s(r) && "static" === c(r).position)) return n; if (!r) e: { if (r = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !o(e) || "fixed" !== c(e).position)
                for (e = h(e); o(e) && 0 > ["html", "body"].indexOf(s(e));) { var i = c(e); if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || r && "filter" === i.willChange || r && i.filter && "none" !== i.filter) { r = e; break e }
                    e = e.parentNode }
            r = null }
        return r || n }

    function y(e) {
        function t(e) { o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) } var n = new Map,
            o = new Set,
            r = []; return e.forEach((function(e) { n.set(e.name, e) })), e.forEach((function(e) { o.has(e.name) || t(e) })), r }

    function w(e) { var t; return function() { return t || (t = new Promise((function(n) { Promise.resolve().then((function() { t = void 0, n(e()) })) }))), t } }

    function x(e) { return e.split("-")[0] }

    function O(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && r(n))
            do { if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host } while (t); return !1 }

    function j(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) }

    function E(e, n) { if ("viewport" === n) { n = t(e); var r = f(e);
            n = n.visualViewport; var s = r.clientWidth;
            r = r.clientHeight; var l = 0,
                u = 0;
            n && (s = n.width, r = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = n.offsetLeft, u = n.offsetTop)), e = j(e = { width: s, height: r, x: l + p(e), y: u }) } else o(n) ? ((e = i(n)).top += n.clientTop, e.left += n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = a(u), n = null == (r = u.ownerDocument) ? void 0 : r.body, r = z(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = z(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(n || e).direction && (u += z(e.clientWidth, n ? n.clientWidth : 0) - r), e = j({ width: r, height: l, x: u, y: s })); return e }

    function D(e, t, r) { return t = "clippingParents" === t ? function(e) { var t = v(h(e)),
                r = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && o(e) ? b(e) : e; return n(r) ? t.filter((function(e) { return n(e) && O(e, r) && "body" !== s(e) })) : [] }(e) : [].concat(t), (r = (r = [].concat(t, [r])).reduce((function(t, n) { return n = E(e, n), t.top = z(n.top, t.top), t.right = F(n.right, t.right), t.bottom = F(n.bottom, t.bottom), t.left = z(n.left, t.left), t }), E(e, r[0]))).width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r }

    function L(e) { return e.split("-")[1] }

    function M(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" }

    function P(e) { var t = e.reference,
            n = e.element,
            o = (e = e.placement) ? x(e) : null;
        e = e ? L(e) : null; var r = t.x + t.width / 2 - n.width / 2,
            i = t.y + t.height / 2 - n.height / 2; switch (o) {
            case "top":
                r = { x: r, y: t.y - n.height }; break;
            case "bottom":
                r = { x: r, y: t.y + t.height }; break;
            case "right":
                r = { x: t.x + t.width, y: i }; break;
            case "left":
                r = { x: t.x - n.width, y: i }; break;
            default:
                r = { x: t.x, y: t.y } } if (null != (o = o ? M(o) : null)) switch (i = "y" === o ? "height" : "width", e) {
            case "start":
                r[o] -= t[i] / 2 - n[i] / 2; break;
            case "end":
                r[o] += t[i] / 2 - n[i] / 2 }
        return r }

    function k(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) }

    function W(e, t) { return t.reduce((function(t, n) { return t[n] = e, t }), {}) }

    function A(e, t) { void 0 === t && (t = {}); var o = t;
        t = void 0 === (t = o.placement) ? e.placement : t; var r = o.boundary,
            a = void 0 === r ? "clippingParents" : r,
            s = void 0 === (r = o.rootBoundary) ? "viewport" : r;
        r = void 0 === (r = o.elementContext) ? "popper" : r; var p = o.altBoundary,
            c = void 0 !== p && p;
        o = k("number" != typeof(o = void 0 === (o = o.padding) ? 0 : o) ? o : W(o, V)), p = e.rects.popper, a = D(n(c = e.elements[c ? "popper" === r ? "reference" : "popper" : r]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ reference: s = i(e.elements.reference), element: p, strategy: "absolute", placement: t }), p = j(Object.assign({}, p, c)), s = "popper" === r ? p : s; var l = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, left: a.left - s.left + o.left, right: s.right - a.right + o.right }; if (e = e.modifiersData.offset, "popper" === r && e) { var u = e[t];
            Object.keys(l).forEach((function(e) { var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                l[e] += u[n] * t })) } return l }

    function B() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return !t.some((function(e) { return !(e && "function" == typeof e.getBoundingClientRect) })) }

    function H(e) { void 0 === e && (e = {}); var t = e.defaultModifiers,
            o = void 0 === t ? [] : t,
            r = void 0 === (e = e.defaultOptions) ? Y : e; return function(e, t, i) {
            function a() { f.forEach((function(e) { return e() })), f = [] }
            void 0 === i && (i = r); var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Y, r), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                f = [],
                p = !1,
                c = { state: s, setOptions: function(i) { return i = "function" == typeof i ? i(s.options) : i, a(), s.options = Object.assign({}, r, s.options, i), s.scrollParents = { reference: n(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function(e) { var t = y(e); return U.reduce((function(e, n) { return e.concat(t.filter((function(e) { return e.phase === n }))) }), []) }(function(e) { var t = e.reduce((function(e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function(e) { return t[e] })) }([].concat(o, s.options.modifiers))), s.orderedModifiers = i.filter((function(e) { return e.enabled })), s.orderedModifiers.forEach((function(e) { var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({ state: s, name: t, instance: c, options: n }), f.push(t || function() {})) })), c.update() }, forceUpdate: function() { if (!p) { var e = s.elements,
                                t = e.reference; if (B(t, e = e.popper))
                                for (s.rects = { reference: u(t, b(e), "fixed" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)
                                    if (!0 === s.reset) s.reset = !1, t = -1;
                                    else { var n = s.orderedModifiers[t];
                                        e = n.fn; var o = n.options;
                                        o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({ state: s, options: o, name: n, instance: c }) || s) } } }, update: w((function() { return new Promise((function(e) { c.forceUpdate(), e(s) })) })), destroy: function() { a(), p = !0 } }; return B(e, t) ? (c.setOptions(i).then((function(e) {!p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c } }

    function T(e) { var n, o = e.popper,
            r = e.popperRect,
            i = e.placement,
            a = e.variation,
            s = e.offsets,
            p = e.position,
            l = e.gpuAcceleration,
            u = e.adaptive; if (!0 === (e = e.roundOffsets)) { e = s.y; var d = window.devicePixelRatio || 1;
            e = { x: X(X(s.x * d) / d) || 0, y: X(X(e * d) / d) || 0 } } else e = "function" == typeof e ? e(s) : s;
        e = void 0 === (e = (d = e).x) ? 0 : e, d = void 0 === (d = d.y) ? 0 : d; var h = s.hasOwnProperty("x");
        s = s.hasOwnProperty("y"); var m, v = "left",
            g = "top",
            y = window; if (u) { var w = b(o),
                x = "clientHeight",
                O = "clientWidth";
            w === t(o) && ("static" !== c(w = f(o)).position && "absolute" === p && (x = "scrollHeight", O = "scrollWidth")), "top" !== i && ("left" !== i && "right" !== i || "end" !== a) || (g = "bottom", d -= w[x] - r.height, d *= l ? 1 : -1), "left" !== i && ("top" !== i && "bottom" !== i || "end" !== a) || (v = "right", e -= w[O] - r.width, e *= l ? 1 : -1) } return o = Object.assign({ position: p }, u && Q), l ? Object.assign({}, o, ((m = {})[g] = s ? "0" : "", m[v] = h ? "0" : "", m.transform = 1 >= (y.devicePixelRatio || 1) ? "translate(" + e + "px, " + d + "px)" : "translate3d(" + e + "px, " + d + "px, 0)", m)) : Object.assign({}, o, ((n = {})[g] = s ? d + "px" : "", n[v] = h ? e + "px" : "", n.transform = "", n)) }

    function R(e) { return e.replace(/left|right|bottom|top/g, (function(e) { return te[e] })) }

    function S(e) { return e.replace(/start|end/g, (function(e) { return ne[e] })) }

    function C(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } }

    function q(e) { return ["top", "right", "bottom", "left"].some((function(t) { return 0 <= e[t] })) } var N = Math.round,
        V = ["top", "bottom", "right", "left"],
        I = V.reduce((function(e, t) { return e.concat([t + "-start", t + "-end"]) }), []),
        _ = [].concat(V, ["auto"]).reduce((function(e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []),
        U = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
        z = Math.max,
        F = Math.min,
        X = Math.round,
        Y = { placement: "bottom", modifiers: [], strategy: "absolute" },
        G = { passive: !0 },
        J = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {}, effect: function(e) { var n = e.state,
                    o = e.instance,
                    r = (e = e.options).scroll,
                    i = void 0 === r || r,
                    a = void 0 === (e = e.resize) || e,
                    s = t(n.elements.popper),
                    f = [].concat(n.scrollParents.reference, n.scrollParents.popper); return i && f.forEach((function(e) { e.addEventListener("scroll", o.update, G) })), a && s.addEventListener("resize", o.update, G),
                    function() { i && f.forEach((function(e) { e.removeEventListener("scroll", o.update, G) })), a && s.removeEventListener("resize", o.update, G) } }, data: {} },
        K = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(e) { var t = e.state;
                t.modifiersData[e.name] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} },
        Q = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
        Z = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(e) { var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e; var o = n.adaptive;
                o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = { placement: x(t.placement), variation: L(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} },
        $ = { name: "applyStyles", enabled: !0, phase: "write", fn: function(e) { var t = e.state;
                Object.keys(t.elements).forEach((function(e) { var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        i = t.elements[e];
                    o(i) && s(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) { var t = r[e];!1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function(e) { var t = e.state,
                    n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() { Object.keys(t.elements).forEach((function(e) { var r = t.elements[e],
                                i = t.attributes[e] || {};
                            e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) { return e[t] = "", e }), {}), o(r) && s(r) && (Object.assign(r.style, e), Object.keys(i).forEach((function(e) { r.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] },
        ee = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(e) { var t = e.state,
                    n = e.name,
                    o = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    r = (e = _.reduce((function(e, n) { var r = t.rects,
                            i = x(n),
                            a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
                            s = "function" == typeof o ? o(Object.assign({}, r, { placement: n })) : o; return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e }), {}))[t.placement],
                    i = r.x;
                r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e } },
        te = { left: "right", right: "left", bottom: "top", top: "bottom" },
        ne = { start: "end", end: "start" },
        oe = { name: "flip", enabled: !0, phase: "main", fn: function(e) { var t = e.state,
                    n = e.options; if (e = e.name, !t.modifiersData[e]._skip) { var o = n.mainAxis;
                    o = void 0 === o || o; var r = n.altAxis;
                    r = void 0 === r || r; var i = n.fallbackPlacements,
                        a = n.padding,
                        s = n.boundary,
                        f = n.rootBoundary,
                        p = n.altBoundary,
                        c = n.flipVariations,
                        l = void 0 === c || c,
                        u = n.allowedAutoPlacements;
                    c = x(n = t.options.placement), i = i || (c !== n && l ? function(e) { if ("auto" === x(e)) return []; var t = R(e); return [S(e), t, S(t)] }(n) : [R(n)]); var d = [n].concat(i).reduce((function(e, n) { return e.concat("auto" === x(n) ? function(e, t) { void 0 === t && (t = {}); var n = t.boundary,
                                o = t.rootBoundary,
                                r = t.padding,
                                i = t.flipVariations,
                                a = t.allowedAutoPlacements,
                                s = void 0 === a ? _ : a,
                                f = L(t.placement);
                            0 === (i = (t = f ? i ? I : I.filter((function(e) { return L(e) === f })) : V).filter((function(e) { return 0 <= s.indexOf(e) }))).length && (i = t); var p = i.reduce((function(t, i) { return t[i] = A(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {}); return Object.keys(p).sort((function(e, t) { return p[e] - p[t] })) }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n) }), []);
                    n = t.rects.reference, i = t.rects.popper; var h = new Map;
                    c = !0; for (var m = d[0], v = 0; v < d.length; v++) { var g = d[v],
                            b = x(g),
                            y = "start" === L(g),
                            w = 0 <= ["top", "bottom"].indexOf(b),
                            O = w ? "width" : "height",
                            j = A(t, { placement: g, boundary: s, rootBoundary: f, altBoundary: p, padding: a }); if (y = w ? y ? "right" : "left" : y ? "bottom" : "top", n[O] > i[O] && (y = R(y)), O = R(y), w = [], o && w.push(0 >= j[b]), r && w.push(0 >= j[y], 0 >= j[O]), w.every((function(e) { return e }))) { m = g, c = !1; break }
                        h.set(g, w) } if (c)
                        for (o = function(e) { var t = d.find((function(t) { if (t = h.get(t)) return t.slice(0, e).every((function(e) { return e })) })); if (t) return m = t, "break" }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--);
                    t.placement !== m && (t.modifiersData[e]._skip = !0, t.placement = m, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } },
        re = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(e) { var t = e.state,
                    n = e.options;
                e = e.name; var o = n.mainAxis,
                    r = void 0 === o || o,
                    i = void 0 !== (o = n.altAxis) && o;
                o = void 0 === (o = n.tether) || o; var a = n.tetherOffset,
                    s = void 0 === a ? 0 : a,
                    f = A(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary });
                n = x(t.placement); var p = L(t.placement),
                    c = !p,
                    l = M(n);
                n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets; var u = t.rects.reference,
                    h = t.rects.popper,
                    m = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s; if (s = { x: 0, y: 0 }, a) { if (r || i) { var v = "y" === l ? "top" : "left",
                            g = "y" === l ? "bottom" : "right",
                            y = "y" === l ? "height" : "width",
                            w = a[l],
                            O = a[l] + f[v],
                            j = a[l] - f[g],
                            E = o ? -h[y] / 2 : 0,
                            D = "start" === p ? u[y] : h[y];
                        p = "start" === p ? -h[y] : -u[y], h = t.elements.arrow, h = o && h ? d(h) : { width: 0, height: 0 }; var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 };
                        v = P[v], g = P[g], h = z(0, F(u[y], h[y])), D = c ? u[y] / 2 - E - h - v - m : D - h - v - m, u = c ? -u[y] / 2 + E + h + g + m : p + h + g + m, c = t.elements.arrow && b(t.elements.arrow), m = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - m - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - m, r && (r = o ? F(O, c) : O, j = o ? z(j, u) : j, r = z(r, F(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? F(r, c) : r, o = o ? z(f, u) : f, o = z(r, F(i, o)), a[n] = o, s[n] = o - i) }
                    t.modifiersData[e] = s } }, requiresIfExists: ["offset"] },
        ie = { name: "arrow", enabled: !0, phase: "main", fn: function(e) { var t, n = e.state,
                    o = e.name,
                    r = e.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = x(n.placement); if (e = M(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) { r = k("number" != typeof(r = "function" == typeof(r = r.padding) ? r(Object.assign({}, n.rects, { placement: n.placement })) : r) ? r : W(r, V)); var f = d(i),
                        p = "y" === e ? "top" : "left",
                        c = "y" === e ? "bottom" : "right",
                        l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
                    a = a[e] - n.rects.reference[e], a = (i = (i = b(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = z(r[p], F(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t) } }, effect: function(e) { var t = e.state; if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) { if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
                    O(t.elements.popper, e) && (t.elements.arrow = e) } }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] },
        ae = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(e) { var t = e.state;
                e = e.name; var n = t.rects.reference,
                    o = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    i = A(t, { elementContext: "reference" }),
                    a = A(t, { altBoundary: !0 });
                n = C(i, n), o = C(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": a }) } },
        se = H({ defaultModifiers: [J, K, Z, $] }),
        fe = [J, K, Z, $, ee, oe, re, ie, ae],
        pe = H({ defaultModifiers: fe });
    e.applyStyles = $, e.arrow = ie, e.computeStyles = Z, e.createPopper = pe, e.createPopperLite = se, e.defaultModifiers = fe, e.detectOverflow = A, e.eventListeners = J, e.flip = oe, e.hide = ae, e.offset = ee, e.popperGenerator = H, e.popperOffsets = K, e.preventOverflow = re, Object.defineProperty(e, "__esModule", { value: !0 }) }));
//# sourceMappingURL=popper.min.js.map
