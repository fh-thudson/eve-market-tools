! function(t, e) {
    "object" == typeof module && module.exports ? module.exports = t.document ? e(t) : e : t.Highcharts = e(t)
}("undefined" != typeof window ? window : this, function(t) {
    function e(e, i) {
        var s = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
        if (i) throw Error(s);
        t.console && console.log(s)
    }

    function i(t, e, i) {
        this.options = e, this.elem = t, this.prop = i
    }

    function s() {
        var t, e, i = arguments,
            s = {},
            o = function(t, e) {
                var i, s;
                "object" != typeof t && (t = {});
                for (s in e) e.hasOwnProperty(s) && (i = e[s], t[s] = rt.isObject(i, !0) && "renderTo" !== s && "number" != typeof i.nodeType ? o(t[s] || {}, i) : e[s]);
                return t
            };
        for (i[0] === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; t < e; t++) s = o(s, i[t]);
        return s
    }

    function o(t, e) {
        return parseInt(t, e || 10)
    }

    function n(t) {
        return "string" == typeof t
    }

    function r(t) {
        return t = Object.prototype.toString.call(t), "[object Array]" === t || "[object Array Iterator]" === t
    }

    function a(t, e) {
        for (var i = t.length; i--;)
            if (t[i] === e) {
                t.splice(i, 1);
                break
            }
    }

    function h(t) {
        return t !== R && null !== t
    }

    function l(t, e, i) {
        var s, o;
        if (n(e)) h(i) ? t.setAttribute(e, i) : t && t.getAttribute && (o = t.getAttribute(e));
        else if (h(e) && te(e))
            for (s in e) t.setAttribute(s, e[s]);
        return o
    }

    function c(t) {
        return r(t) ? t : [t]
    }

    function d(t, e, i) {
        return e ? setTimeout(t, e, i) : void t.call(0, i)
    }

    function p(t, e) {
        kt && !Mt && e && e.opacity !== R && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), Qt(t.style, e)
    }

    function u(t, e, i, s, o) {
        return t = at.createElement(t), e && Qt(t, e), o && p(t, {
            padding: 0,
            border: "none",
            margin: 0
        }), i && p(t, i), s && s.appendChild(t), t
    }

    function f(t, e) {
        var i = function() {};
        return i.prototype = new t, Qt(i.prototype, e), i
    }

    function g(t, e, i) {
        return Array((e || 2) + 1 - String(t).length).join(i || 0) + t
    }

    function m(t) {
        return 6e4 * (U && U(t) || _ || 0)
    }

    function x(t, e) {
        for (var i, s, o, n, r, a = "{", h = !1, l = [];
            (a = t.indexOf(a)) !== -1;) {
            if (i = t.slice(0, a), h) {
                for (s = i.split(":"), o = s.shift().split("."), r = o.length, i = e, n = 0; n < r; n++) i = i[o[n]];
                s.length && (s = s.join(":"), o = /\.([0-9])/, n = G.lang, r = void 0, /f$/.test(s) ? (r = (r = s.match(o)) ? r[1] : -1, null !== i && (i = rt.numberFormat(i, r, n.decimalPoint, s.indexOf(",") > -1 ? n.thousandsSep : ""))) : i = Y(s, i))
            }
            l.push(i), t = t.slice(a + 1), a = (h = !h) ? "}" : "{"
        }
        return l.push(t), l.join("")
    }

    function y(t) {
        return ht.pow(10, ct(ht.log(t) / ht.LN10))
    }

    function v(t, e, i, s, o) {
        var n, r = t,
            i = ie(i, 1);
        for (n = t / i, e || (e = [1, 2, 2.5, 5, 10], s === !1 && (1 === i ? e = [1, 2, 5, 10] : i <= .1 && (e = [1 / i]))), s = 0; s < e.length && (r = e[s], !(o && r * i >= t || !o && n <= (e[s] + (e[s + 1] || e[s])) / 2)); s++);
        return r *= i
    }

    function b(t, e) {
        var i, s, o = t.length;
        for (s = 0; s < o; s++) t[s].safeI = s;
        for (t.sort(function(t, s) {
                return i = e(t, s), 0 === i ? t.safeI - s.safeI : i
            }), s = 0; s < o; s++) delete t[s].safeI
    }

    function k(t) {
        for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
        return i
    }

    function w(t) {
        for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
        return i
    }

    function A(t, e) {
        for (var i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i]
    }

    function S(t) {
        H || (H = u(Et)), t && H.appendChild(t), H.innerHTML = ""
    }

    function T(t, e) {
        return parseFloat(t.toPrecision(e || 14))
    }

    function P(t, e) {
        e.renderer.globalAnimation = ie(t, e.animation)
    }

    function M(t) {
        return te(t) ? s(t) : {
            duration: t ? 500 : 0
        }
    }

    function C() {
        var e = G.global,
            i = e.useUTC,
            s = i ? "getUTC" : "get",
            o = i ? "setUTC" : "set";
        N = e.Date || t.Date, _ = i && e.timezoneOffset, U = i && e.getTimezoneOffset, V = function(t, e, s, o, n, r) {
            var a;
            return i ? (a = N.UTC.apply(0, arguments), a += m(a)) : a = new N(t, e, ie(s, 1), ie(o, 0), ie(n, 0), ie(r, 0)).getTime(), a
        }, j = s + "Minutes", Z = s + "Hours", K = s + "Day", q = s + "Date", $ = s + "Month", J = s + "FullYear", Q = o + "Milliseconds", tt = o + "Seconds", et = o + "Minutes", it = o + "Hours", st = o + "Date", ot = o + "Month", nt = o + "FullYear"
    }

    function L(t) {
        return this instanceof L ? void this.init(t) : new L(t)
    }

    function D() {}

    function I(t, e, i, s) {
        this.axis = t, this.pos = e, this.type = i || "", this.isNew = !0, !i && !s && this.addLabel()
    }

    function O(t, e, i, s, o) {
        var n = t.chart.inverted;
        this.axis = t, this.isNegative = i, this.options = e, this.x = s, this.total = null, this.points = {}, this.stack = o, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
            align: e.align || (n ? i ? "left" : "right" : "center"),
            verticalAlign: e.verticalAlign || (n ? "middle" : i ? "bottom" : "top"),
            y: ie(e.y, n ? 4 : i ? 14 : -6),
            x: ie(e.x, n ? i ? -6 : 6 : 0)
        }, this.textAlign = e.textAlign || (n ? i ? "right" : "left" : "center")
    }

    function B(t, e, i) {
        this.scrollbarButtons = [], this.renderer = t, this.userOptions = e, this.options = s(Ee, e), this.chart = i, this.size = ie(this.options.size, this.options.height), this.render(), this.initEvents(), this.addEvents()
    }

    function z(t) {
        var e = t.options,
            i = e.navigator,
            s = i.enabled,
            o = e.scrollbar,
            e = o.enabled,
            n = s ? i.height : 0,
            o = e ? o.height : 0;
        this.handles = [], this.elementsToDestroy = [], this.chart = t, this.setBaseSeries(), this.height = n, this.scrollbarHeight = o, this.scrollbarEnabled = e, this.navigatorEnabled = s, this.navigatorOptions = i, this.outlineHeight = n + o, this.init()
    }

    function E(t) {
        this.init(t)
    }
    var R, X, W, H, G, Y, F, N, V, _, U, j, Z, K, q, $, J, Q, tt, et, it, st, ot, nt, rt, at = t.document,
        ht = Math,
        lt = ht.round,
        ct = ht.floor,
        dt = ht.ceil,
        pt = ht.max,
        ut = ht.min,
        ft = ht.abs,
        gt = ht.cos,
        mt = ht.sin,
        xt = ht.PI,
        yt = 2 * xt / 360,
        vt = t.navigator && t.navigator.userAgent || "",
        bt = t.opera,
        kt = /(msie|trident|edge)/i.test(vt) && !bt,
        wt = at && 8 === at.documentMode,
        At = !kt && /AppleWebKit/.test(vt),
        St = /Firefox/.test(vt),
        Tt = /(Mobile|Android|Windows Phone)/.test(vt),
        Pt = "http://www.w3.org/2000/svg",
        Mt = at && at.createElementNS && !!at.createElementNS(Pt, "svg").createSVGRect,
        Ct = St && parseInt(vt.split("Firefox/")[1], 10) < 4,
        Lt = at && !Mt && !kt && !!at.createElement("canvas").getContext,
        Dt = {},
        It = 0,
        Ot = function() {},
        Bt = [],
        zt = 0,
        Et = "div",
        Rt = "M",
        Xt = "L",
        Wt = /[0-9]/g,
        Ht = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        Gt = {};
    rt = t.Highcharts ? e(16, !0) : {
        win: t
    }, rt.seriesTypes = Gt;
    var Yt, Ft, Nt, Vt, _t, Ut, jt, Zt, Kt, qt, $t, Jt = [];
    i.prototype = {
        dSetter: function() {
            var t, e = this.paths[0],
                i = this.paths[1],
                s = [],
                o = this.now,
                n = e.length;
            if (1 === o) s = this.toD;
            else if (n === i.length && o < 1)
                for (; n--;) t = parseFloat(e[n]), s[n] = isNaN(t) ? e[n] : o * parseFloat(i[n] - t) + t;
            else s = i;
            this.elem.attr("d", s)
        },
        update: function() {
            var t = this.elem,
                e = this.prop,
                i = this.now,
                s = this.options.step;
            this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i) : t.style[e] = i + this.unit, s && s.call(t, i, this)
        },
        run: function(t, e, i) {
            var s, o = this,
                n = function(t) {
                    return !n.stopped && o.step(t)
                };
            this.startTime = +new N, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, n.elem = this.elem, n() && 1 === Jt.push(n) && (n.timerId = setInterval(function() {
                for (s = 0; s < Jt.length; s++) Jt[s]() || Jt.splice(s--, 1);
                Jt.length || clearInterval(n.timerId)
            }, 13))
        },
        step: function(t) {
            var e, i = +new N,
                s = this.options;
            e = this.elem;
            var o, n = s.complete,
                r = s.duration,
                a = s.curAnim;
            if (e.attr && !e.element) e = !1;
            else if (t || i >= r + this.startTime) {
                this.now = this.end, this.pos = 1, this.update(), t = a[this.prop] = !0;
                for (o in a) a[o] !== !0 && (t = !1);
                t && n && n.call(e), e = !1
            } else this.pos = s.easing((i - this.startTime) / r), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0;
            return e
        },
        initPath: function(t, e, i) {
            function s(t) {
                for (l = t.length; l--;)(t[l] === Rt || t[l] === Xt) && t.splice(l + 1, 0, t[l + 1], t[l + 2], t[l + 1], t[l + 2])
            }

            function o(t, e) {
                for (; t.length < a;) {
                    t[0] = e[a - t.length];
                    var i = t.slice(0, f);
                    [].splice.apply(t, [0, 0].concat(i)), g && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), l--)
                }
                t[0] = "M"
            }

            function n(t, e) {
                for (var i = (a - t.length) / f; i > 0 && i--;) h = t.slice().splice(t.length / m - f, f * m), h[0] = e[a - f - i * f], u && (h[f - 6] = h[f - 2], h[f - 5] = h[f - 1]), [].splice.apply(t, [t.length / m, 0].concat(h)), g && i--
            }
            var r, a, h, l, c, e = e || "",
                d = t.startX,
                p = t.endX,
                u = e.indexOf("C") > -1,
                f = u ? 7 : 3,
                e = e.split(" "),
                i = i.slice(),
                g = t.isArea,
                m = g ? 2 : 1;
            if (u && (s(e), s(i)), d && p) {
                for (l = 0; l < d.length; l++) {
                    if (d[l] === p[0]) {
                        r = l;
                        break
                    }
                    if (d[0] === p[p.length - d.length + l]) {
                        r = l, c = !0;
                        break
                    }
                }
                void 0 === r && (e = [])
            }
            return e.length && rt.isNumber(r) && (a = i.length + r * m * f, c ? (o(e, i), n(i, e)) : (o(i, e), n(e, i))), [e, i]
        }
    };
    var Qt = rt.extend = function(t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t
        },
        te = rt.isObject = function(t, e) {
            return t && "object" == typeof t && (!e || !r(t))
        },
        ee = rt.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        },
        ie = rt.pick = function() {
            var t, e, i = arguments,
                s = i.length;
            for (t = 0; t < s; t++)
                if (e = i[t], e !== R && null !== e) return e
        },
        se = rt.wrap = function(t, e, i) {
            var s = t[e];
            t[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(s), i.apply(this, t)
            }
        };
    Y = function(t, e, i) {
        if (!h(e) || isNaN(e)) return G.lang.invalidDate || "";
        var s, t = ie(t, "%Y-%m-%d %H:%M:%S"),
            o = new N(e - m(e)),
            n = o[Z](),
            r = o[K](),
            a = o[q](),
            l = o[$](),
            c = o[J](),
            d = G.lang,
            p = d.weekdays,
            u = d.shortWeekdays,
            o = Qt({
                a: u ? u[r] : p[r].substr(0, 3),
                A: p[r],
                d: g(a),
                e: g(a, 2, " "),
                w: r,
                b: d.shortMonths[l],
                B: d.months[l],
                m: g(l + 1),
                y: c.toString().substr(2, 2),
                Y: c,
                H: g(n),
                k: n,
                I: g(n % 12 || 12),
                l: n % 12 || 12,
                M: g(o[j]()),
                p: n < 12 ? "AM" : "PM",
                P: n < 12 ? "am" : "pm",
                S: g(o.getSeconds()),
                L: g(lt(e % 1e3), 3)
            }, rt.dateFormats);
        for (s in o)
            for (; t.indexOf("%" + s) !== -1;) t = t.replace("%" + s, "function" == typeof o[s] ? o[s](e) : o[s]);
        return i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
    }, F = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 24192e5,
        year: 314496e5
    }, rt.numberFormat = function(t, e, i, s) {
        var n, r, t = +t || 0,
            e = +e,
            a = G.lang,
            h = (t.toString().split(".")[1] || "").length,
            l = Math.abs(t);
        return e === -1 ? e = Math.min(h, 20) : ee(e) || (e = 2), n = String(o(l.toFixed(e))), r = n.length > 3 ? n.length % 3 : 0, i = ie(i, a.decimalPoint), s = ie(s, a.thousandsSep), t = t < 0 ? "-" : "", t += r ? n.substr(0, r) + s : "", t += n.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + s), e && (s = Math.abs(l - n + Math.pow(10, -Math.max(e, h) - 1)), t += i + s.toFixed(e).slice(2)), t
    }, Math.easeInOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, Yt = function(e, i) {
        var s;
        return "width" === i ? Math.min(e.offsetWidth, e.scrollWidth) - Yt(e, "padding-left") - Yt(e, "padding-right") : "height" === i ? Math.min(e.offsetHeight, e.scrollHeight) - Yt(e, "padding-top") - Yt(e, "padding-bottom") : (s = t.getComputedStyle(e, void 0)) && o(s.getPropertyValue(i))
    }, Ft = function(t, e) {
        return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
    }, Vt = function(t, e) {
        return [].filter.call(t, e)
    }, Ut = function(t, e) {
        for (var i = [], s = 0, o = t.length; s < o; s++) i[s] = e.call(t[s], t[s], s, t);
        return i
    }, _t = function(e) {
        var i = at.documentElement,
            e = e.getBoundingClientRect();
        return {
            top: e.top + (t.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: e.left + (t.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }
    }, $t = function(t) {
        for (var e = Jt.length; e--;) Jt[e].elem === t && (Jt[e].stopped = !0)
    }, Nt = function(t, e) {
        return Array.prototype.forEach.call(t, e)
    }, jt = function(e, i, s) {
        function o(i) {
            i.target = i.srcElement || t, s.call(e, i)
        }
        var n = e.hcEvents = e.hcEvents || {};
        e.addEventListener ? e.addEventListener(i, s, !1) : e.attachEvent && (e.hcEventsIE || (e.hcEventsIE = {}), e.hcEventsIE[s.toString()] = o, e.attachEvent("on" + i, o)), n[i] || (n[i] = []), n[i].push(s)
    }, Zt = function(t, e, i) {
        function s(e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && (i = t.hcEventsIE[i.toString()], t.detachEvent("on" + e, i))
        }

        function o() {
            var i, o, n;
            if (t.nodeName)
                for (n in e ? (i = {}, i[e] = !0) : i = a, i)
                    if (a[n])
                        for (o = a[n].length; o--;) s(n, a[n][o])
        }
        var n, r, a = t.hcEvents;
        a && (e ? (n = a[e] || [], i ? (r = Ft(i, n), r > -1 && (n.splice(r, 1), a[e] = n), s(e, i)) : (o(), a[e] = [])) : (o(), t.hcEvents = {}))
    }, Kt = function(t, e, i, s) {
        var o;
        o = t.hcEvents;
        var n, r, i = i || {};
        if (at.createEvent && (t.dispatchEvent || t.fireEvent)) o = at.createEvent("Events"), o.initEvent(e, !0, !0), o.target = t, Qt(o, i), t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent(e, o);
        else if (o)
            for (o = o[e] || [], n = o.length, i.preventDefault || (i.preventDefault = function() {
                    i.defaultPrevented = !0
                }), i.target = t, i.type || (i.type = e), e = 0; e < n; e++)(r = o[e]) && r.call(t, i) === !1 && i.preventDefault();
        s && !i.defaultPrevented && s(i)
    }, qt = function(t, e, o) {
        var n, r, a, h, l = "";
        te(o) || (n = arguments, o = {
            duration: n[2],
            easing: n[3],
            complete: n[4]
        }), ee(o.duration) || (o.duration = 400), o.easing = "function" == typeof o.easing ? o.easing : Math[o.easing] || Math.easeInOutSine, o.curAnim = s(e);
        for (h in e) a = new i(t, o, h), r = null, "d" === h ? (a.paths = a.initPath(t, t.d, e.d), a.toD = e.d, n = 0, r = 1) : t.attr ? n = t.attr(h) : (n = parseFloat(Yt(t, h)) || 0, "opacity" !== h && (l = "px")), r || (r = e[h]), r.match && r.match("px") && (r = r.replace(/px/g, "")), a.run(n, r, l)
    }, t.jQuery && (t.jQuery.fn.highcharts = function() {
        var t = [].slice.call(arguments);
        if (this[0]) return t[0] ? (new(rt[n(t[0]) ? t.shift() : "Chart"])(this[0], t[0], t[1]), this) : Bt[l(this[0], "data-highcharts-chart")]
    }), at && !at.defaultView && (Yt = function(t, e) {
        var i;
        return i = {
            width: "clientWidth",
            height: "clientHeight"
        }[e], t.style[e] ? o(t.style[e]) : ("opacity" === e && (e = "filter"), i ? (t.style.zoom = 1, Math.max(t[i] - 2 * Yt(t, "padding"), 0)) : (i = t.currentStyle[e.replace(/\-(\w)/g, function(t, e) {
            return e.toUpperCase()
        })], "filter" === e && (i = i.replace(/alpha\(opacity=([0-9]+)\)/, function(t, e) {
            return e / 100
        })), "" === i ? 1 : o(i)))
    }), Array.prototype.forEach || (Nt = function(t, e) {
        for (var i = 0, s = t.length; i < s; i++)
            if (e.call(t[i], t[i], i, t) === !1) return i
    }), Array.prototype.indexOf || (Ft = function(t, e) {
        var i, s = 0;
        if (e)
            for (i = e.length; s < i; s++)
                if (e[s] === t) return s;
        return -1
    }), Array.prototype.filter || (Vt = function(t, e) {
        for (var i = [], s = 0, o = t.length; s < o; s++) e(t[s], s) && i.push(t[s]);
        return i
    }), rt.Fx = i, rt.inArray = Ft, rt.each = Nt, rt.grep = Vt, rt.offset = _t, rt.map = Ut, rt.addEvent = jt, rt.removeEvent = Zt, rt.fireEvent = Kt, rt.animate = qt, rt.animObject = M, rt.stop = $t, G = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/stock/4.2.7/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            },
            width: null,
            height: null
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            },
            widthAdjust: -44
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            },
            widthAdjust: -44
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return null === this.y ? "" : rt.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: Mt,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Tt ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var oe = G.plotOptions,
        ne = oe.line;
    C(), L.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(t) {
                return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(t) {
                return [o(t[1], 16), o(t[2], 16), o(t[3], 16), 1]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function(t) {
                return [o(t[1]), o(t[2]), o(t[3]), 1]
            }
        }],
        init: function(t) {
            var e, i, s, o;
            if ((this.input = t) && t.stops) this.stops = Ut(t.stops, function(t) {
                return new L(t[1])
            });
            else
                for (s = this.parsers.length; s-- && !i;) o = this.parsers[s], (e = o.regex.exec(t)) && (i = o.parse(e));
            this.rgba = i || []
        },
        get: function(t) {
            var e, i = this.input,
                o = this.rgba;
            return this.stops ? (e = s(i), e.stops = [].concat(e.stops), Nt(this.stops, function(i, s) {
                e.stops[s] = [e.stops[s][0], i.get(t)]
            })) : e = o && ee(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : i, e
        },
        brighten: function(t) {
            var e, i = this.rgba;
            if (this.stops) Nt(this.stops, function(e) {
                e.brighten(t)
            });
            else if (ee(t) && 0 !== t)
                for (e = 0; e < 3; e++) i[e] += o(255 * t), i[e] < 0 && (i[e] = 0), i[e] > 255 && (i[e] = 255);
            return this
        },
        setOpacity: function(t) {
            return this.rgba[3] = t, this
        }
    }, D.prototype = {
        opacity: 1,
        textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function(t, e) {
            this.element = "span" === e ? u(e) : at.createElementNS(Pt, e), this.renderer = t
        },
        animate: function(t, e, i) {
            return e = ie(e, this.renderer.globalAnimation, !0), $t(this), e ? (i && (e.complete = i), qt(this, t, e)) : this.attr(t, null, i), this
        },
        colorGradient: function(t, e, i) {
            var o, n, a, l, c, d, p, u, f, g, m, x, y = this.renderer,
                v = [];
            if (t.linearGradient ? n = "linearGradient" : t.radialGradient && (n = "radialGradient"), n) {
                a = t[n], c = y.gradients, p = t.stops, g = i.radialReference, r(a) && (t[n] = a = {
                    x1: a[0],
                    y1: a[1],
                    x2: a[2],
                    y2: a[3],
                    gradientUnits: "userSpaceOnUse"
                }), "radialGradient" === n && g && !h(a.gradientUnits) && (l = a, a = s(a, y.getRadialAttr(g, l), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (m in a) "id" !== m && v.push(m, a[m]);
                for (m in p) v.push(p[m]);
                v = v.join(","), c[v] ? g = c[v].attr("id") : (a.id = g = "highcharts-" + It++, c[v] = d = y.createElement(n).attr(a).add(y.defs), d.radAttr = l, d.stops = [], Nt(p, function(t) {
                    0 === t[1].indexOf("rgba") ? (o = L(t[1]), u = o.get("rgb"), f = o.get("a")) : (u = t[1], f = 1), t = y.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": u,
                        "stop-opacity": f
                    }).add(d), d.stops.push(t)
                })), x = "url(" + y.url + "#" + g + ")", i.setAttribute(e, x), i.gradient = v, t.toString = function() {
                    return x
                }
            }
        },
        applyTextShadow: function(t) {
            var e, i = this.element,
                s = t.indexOf("contrast") !== -1,
                n = {},
                r = this.renderer.forExport,
                a = r || i.style.textShadow !== R && !kt;
            s && (n.textShadow = t = t.replace(/contrast/g, this.renderer.getContrast(i.style.fill))), (At || r) && (n.textRendering = "geometricPrecision"), a ? this.css(n) : (this.fakeTS = !0, this.ySetter = this.xSetter, e = [].slice.call(i.getElementsByTagName("tspan")), Nt(t.split(/\s?,\s?/g), function(t) {
                var s, n, r = i.firstChild,
                    t = t.split(" ");
                s = t[t.length - 1], (n = t[t.length - 2]) && Nt(e, function(t, e) {
                    var a;
                    0 === e && (t.setAttribute("x", i.getAttribute("x")), e = i.getAttribute("y"), t.setAttribute("y", e || 0), null === e && i.setAttribute("y", 0)), a = t.cloneNode(1), l(a, {
                        "class": "highcharts-text-shadow",
                        fill: s,
                        stroke: s,
                        "stroke-opacity": 1 / pt(o(n), 3),
                        "stroke-width": n,
                        "stroke-linejoin": "round"
                    }), i.insertBefore(a, r)
                })
            }))
        },
        attr: function(t, e, i) {
            var s, o, n, r = this.element,
                a = this;
            if ("string" == typeof t && e !== R && (s = t, t = {}, t[s] = e), "string" == typeof t) a = (this[t + "Getter"] || this._defaultGetter).call(this, t, r);
            else {
                for (s in t) e = t[s], n = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(s) && (o || (this.symbolAttr(t), o = !0), n = !0), !this.rotation || "x" !== s && "y" !== s || (this.doTransform = !0), n || (n = this[s + "Setter"] || this._defaultSetter, n.call(this, e, s, r), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(s) && this.updateShadows(s, e, n));
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return i && i(), a
        },
        updateShadows: function(t, e, i) {
            for (var s = this.shadows, o = s.length; o--;) i.call(s[o], "height" === t ? Math.max(e - (s[o].cutHeight || 0), 0) : "d" === t ? this.d : e, t, s[o])
        },
        addClass: function(t) {
            var e = this.element,
                i = l(e, "class") || "";
            return i.indexOf(t) === -1 && l(e, "class", i + " " + t), this
        },
        symbolAttr: function(t) {
            var e = this;
            Nt("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(i) {
                e[i] = ie(t[i], e[i])
            }), e.attr({
                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
            })
        },
        clip: function(t) {
            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
        },
        crisp: function(t) {
            var e, i, s = {},
                o = this.strokeWidth || 0;
            i = lt(o) % 2 / 2, t.x = ct(t.x || this.x || 0) + i, t.y = ct(t.y || this.y || 0) + i, t.width = ct((t.width || this.width || 0) - 2 * i), t.height = ct((t.height || this.height || 0) - 2 * i), t.strokeWidth = o;
            for (e in t) this[e] !== t[e] && (this[e] = s[e] = t[e]);
            return s
        },
        css: function(t) {
            var e, i, s = this.styles,
                n = {},
                r = this.element,
                a = "";
            if (e = !s, t && t.color && (t.fill = t.color), s)
                for (i in t) t[i] !== s[i] && (n[i] = t[i], e = !0);
            if (e) {
                if (e = this.textWidth = t && t.width && "text" === r.nodeName.toLowerCase() && o(t.width) || this.textWidth, s && (t = Qt(s, n)), this.styles = t, e && (Lt || !Mt && this.renderer.forExport) && delete t.width, kt && !Mt) p(this.element, t);
                else {
                    s = function(t, e) {
                        return "-" + e.toLowerCase()
                    };
                    for (i in t) a += i.replace(/([A-Z])/g, s) + ":" + t[i] + ";";
                    l(r, "style", a)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(t, e) {
            var i = this,
                s = i.element;
            return W && "click" === t ? (s.ontouchstart = function(t) {
                i.touchEventFired = N.now(), t.preventDefault(), e.call(s, t)
            }, s.onclick = function(t) {
                (vt.indexOf("Android") === -1 || N.now() - (i.touchEventFired || 0) > 1100) && e.call(s, t)
            }) : s["on" + t] = e, this
        },
        setRadialReference: function(t) {
            var e = this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
        },
        translate: function(t, e) {
            return this.attr({
                translateX: t,
                translateY: e
            })
        },
        invert: function() {
            return this.inverted = !0, this.updateTransform(), this
        },
        updateTransform: function() {
            var t = this.translateX || 0,
                e = this.translateY || 0,
                i = this.scaleX,
                s = this.scaleY,
                o = this.inverted,
                n = this.rotation,
                r = this.element;
            o && (t += this.attr("width"), e += this.attr("height")), t = ["translate(" + t + "," + e + ")"], o ? t.push("rotate(90) scale(-1,1)") : n && t.push("rotate(" + n + " " + (r.getAttribute("x") || 0) + " " + (r.getAttribute("y") || 0) + ")"), (h(i) || h(s)) && t.push("scale(" + ie(i, 1) + " " + ie(s, 1) + ")"), t.length && r.setAttribute("transform", t.join(" "))
        },
        toFront: function() {
            var t = this.element;
            return t.parentNode.appendChild(t), this
        },
        align: function(t, e, i) {
            var s, o, r, h, l = {};
            return o = this.renderer, r = o.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || n(i)) && (this.alignTo = s = i || "renderer", a(r, this), r.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, s = this.alignTo), i = ie(i, o[s], o), s = t.align, o = t.verticalAlign, r = (i.x || 0) + (t.x || 0), h = (i.y || 0) + (t.y || 0), "right" !== s && "center" !== s || (r += (i.width - (t.width || 0)) / {
                right: 1,
                center: 2
            }[s]), l[e ? "translateX" : "x"] = lt(r), "bottom" !== o && "middle" !== o || (h += (i.height - (t.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[o] || 1)), l[e ? "translateY" : "y"] = lt(h), this[this.placed ? "animate" : "attr"](l), this.placed = !0, this.alignAttr = l, this
        },
        getBBox: function(t, e) {
            var i, s, o, n, r = this.renderer,
                a = this.element,
                h = this.styles;
            s = this.textStr;
            var l, c, d, p = a.style,
                u = r.cache,
                f = r.cacheKeys;
            if (o = ie(e, this.rotation), n = o * yt, s !== R && (d = s.toString().replace(Wt, "0") + ["", o || 0, h && h.fontSize, a.style.width].join(",")), d && !t && (i = u[d]), !i) {
                if (a.namespaceURI === Pt || r.forExport) {
                    try {
                        c = this.fakeTS && function(t) {
                            Nt(a.querySelectorAll(".highcharts-text-shadow"), function(e) {
                                e.style.display = t
                            })
                        }, St && p.textShadow ? (l = p.textShadow, p.textShadow = "") : c && c("none"), i = a.getBBox ? Qt({}, a.getBBox()) : {
                            width: a.offsetWidth,
                            height: a.offsetHeight
                        }, l ? p.textShadow = l : c && c("")
                    } catch (g) {}(!i || i.width < 0) && (i = {
                        width: 0,
                        height: 0
                    })
                } else i = this.htmlGetBBox();
                if (r.isSVG && (r = i.width, s = i.height, kt && h && "11px" === h.fontSize && "16.9" === s.toPrecision(3) && (i.height = s = 14), o && (i.width = ft(s * mt(n)) + ft(r * gt(n)), i.height = ft(s * gt(n)) + ft(r * mt(n)))), d && i.height > 0) {
                    for (; f.length > 250;) delete u[f.shift()];
                    u[d] || f.push(d), u[d] = i
                }
            }
            return i
        },
        show: function(t) {
            return this.attr({
                visibility: t ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(t) {
            var e = this;
            e.animate({
                opacity: 0
            }, {
                duration: t || 150,
                complete: function() {
                    e.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(t) {
            var e, i = this.renderer,
                s = this.element;
            return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
        },
        safeRemoveChild: function(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        destroy: function() {
            var t, e, i = this,
                s = i.element || {},
                o = i.shadows,
                n = i.renderer.isSVG && "SPAN" === s.nodeName && i.parentGroup;
            if (s.onclick = s.onmouseout = s.onmouseover = s.onmousemove = s.point = null, $t(i), i.clipPath && (i.clipPath = i.clipPath.destroy()), i.stops) {
                for (e = 0; e < i.stops.length; e++) i.stops[e] = i.stops[e].destroy();
                i.stops = null
            }
            for (i.safeRemoveChild(s), o && Nt(o, function(t) {
                    i.safeRemoveChild(t)
                }); n && n.div && 0 === n.div.childNodes.length;) s = n.parentGroup, i.safeRemoveChild(n.div), delete n.div, n = s;
            i.alignTo && a(i.renderer.alignedObjects, i);
            for (t in i) delete i[t];
            return null
        },
        shadow: function(t, e, i) {
            var s, o, n, r, a, h, c = [],
                d = this.element;
            if (t) {
                for (r = ie(t.width, 3), a = (t.opacity || .15) / r, h = this.parentInverted ? "(-1,-1)" : "(" + ie(t.offsetX, 1) + ", " + ie(t.offsetY, 1) + ")", s = 1; s <= r; s++) o = d.cloneNode(0), n = 2 * r + 1 - 2 * s, l(o, {
                    isShadow: "true",
                    stroke: t.color || "black",
                    "stroke-opacity": a * s,
                    "stroke-width": n,
                    transform: "translate" + h,
                    fill: "none"
                }), i && (l(o, "height", pt(l(o, "height") - n, 0)), o.cutHeight = n), e ? e.element.appendChild(o) : d.parentNode.insertBefore(o, d), c.push(o);
                this.shadows = c
            }
            return this
        },
        xGetter: function(t) {
            return "circle" === this.element.nodeName && (t = {
                x: "cx",
                y: "cy"
            }[t] || t), this._defaultGetter(t)
        },
        _defaultGetter: function(t) {
            return t = ie(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
        },
        dSetter: function(t, e, i) {
            t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
        },
        dashstyleSetter: function(t) {
            var e, i = this["stroke-width"];
            if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = o(t[e]) * i;
                t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
            }
        },
        alignSetter: function(t) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[t])
        },
        titleSetter: function(t) {
            var e = this.element.getElementsByTagName("title")[0];
            e || (e = at.createElementNS(Pt, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(at.createTextNode(String(ie(t), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(t) {
            t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(t, e, i) {
            "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
        },
        visibilitySetter: function(t, e, i) {
            "inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
        },
        zIndexSetter: function(t, e) {
            var i, s, n, r = this.renderer,
                a = this.parentGroup,
                r = (a || r).element || r.box,
                l = this.element;
            i = this.added;
            var c;
            if (h(t) && (l.zIndex = t, t = +t, this[e] === t && (i = !1), this[e] = t), i) {
                for ((t = this.zIndex) && a && (a.handleZ = !0), a = r.childNodes, c = 0; c < a.length && !n; c++) i = a[c], s = i.zIndex, i !== l && (o(s) > t || !h(t) && h(s)) && (r.insertBefore(l, i), n = !0);
                n || r.appendChild(l)
            }
            return n
        },
        _defaultSetter: function(t, e, i) {
            i.setAttribute(e, t)
        }
    }, D.prototype.yGetter = D.prototype.xGetter, D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.rotationSetter = D.prototype.verticalAlignSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = function(t, e) {
        this[e] = t, this.doTransform = !0
    }, D.prototype.opacitySetter = D.prototype.displaySetter = function(t, e, i) {
        this[e] = t, i.setAttribute(e, t)
    }, D.prototype["stroke-widthSetter"] = D.prototype.strokeSetter = function(t, e, i) {
        this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], D.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var re = function() {
        this.init.apply(this, arguments)
    };
    re.prototype = {
        Element: D,
        init: function(e, i, s, o, n, r) {
            var a, o = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(o));
            a = o.element, e.appendChild(a), e.innerHTML.indexOf("xmlns") === -1 && l(a, "xmlns", Pt), this.isSVG = !0, this.box = a, this.boxWrapper = o, this.alignedObjects = [], this.url = (St || At) && at.getElementsByTagName("base").length ? t.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(at.createTextNode("Created with Highstock 4.2.7")), this.defs = this.createElement("defs").add(), this.allowHTML = r, this.forExport = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(i, s, !1);
            var h;
            St && e.getBoundingClientRect && (this.subPixelFix = i = function() {
                p(e, {
                    left: 0,
                    top: 0
                }), h = e.getBoundingClientRect(), p(e, {
                    left: dt(h.left) - h.left + "px",
                    top: dt(h.top) - h.top + "px"
                })
            }, i(), jt(t, "resize", i))
        },
        getStyle: function(t) {
            return this.style = Qt({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, t)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var e = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), A(this.gradients || {}), this.gradients = null, e && (this.defs = e.destroy()), this.subPixelFix && Zt(t, "resize", this.subPixelFix), this.alignedObjects = null
        },
        createElement: function(t) {
            var e = new this.Element;
            return e.init(this, t), e
        },
        draw: function() {},
        getRadialAttr: function(t, e) {
            return {
                cx: t[0] - t[2] / 2 + e.cx * t[2],
                cy: t[1] - t[2] / 2 + e.cy * t[2],
                r: e.r * t[2]
            }
        },
        buildText: function(t) {
            for (var e, i, s, n = t.element, r = this, a = r.forExport, h = ie(t.textStr, "").toString(), c = h.indexOf("<") !== -1, d = n.childNodes, u = l(n, "x"), f = t.styles, g = t.textWidth, m = f && f.lineHeight, x = f && f.textShadow, y = f && "ellipsis" === f.textOverflow, v = d.length, b = g && !t.added && this.box, k = function(t) {
                    return m ? o(m) : r.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : f && f.fontSize || r.style.fontSize || 12, t).h
                }, w = function(t) {
                    return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; v--;) n.removeChild(d[v]);
            c || x || y || g || h.indexOf(" ") !== -1 ? (e = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, b && b.appendChild(n), h = c ? h.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [h], h = Vt(h, function(t) {
                return "" !== t
            }), Nt(h, function(o, h) {
                var c, d = 0,
                    o = o.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                c = o.split("|||"), Nt(c, function(o) {
                    if ("" !== o || 1 === c.length) {
                        var m, x = {},
                            v = at.createElementNS(Pt, "tspan");
                        if (e.test(o) && (m = o.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), l(v, "style", m)), i.test(o) && !a && (l(v, "onclick", 'location.href="' + o.match(i)[1] + '"'), p(v, {
                                cursor: "pointer"
                            })), o = w(o.replace(/<(.|\n)*?>/g, "") || " "), " " !== o) {
                            if (v.appendChild(at.createTextNode(o)), d ? x.dx = 0 : h && null !== u && (x.x = u), l(v, x), n.appendChild(v), !d && h && (!Mt && a && p(v, {
                                    display: "block"
                                }), l(v, "dy", k(v))), g) {
                                for (var b, A, x = o.replace(/([^\^])-/g, "$1- ").split(" "), S = "nowrap" === f.whiteSpace, T = c.length > 1 || h || x.length > 1 && !S, P = [], M = k(v), C = 1, L = t.rotation, D = o, I = D.length;
                                    (T || y) && (x.length || P.length);) t.rotation = 0, b = t.getBBox(!0), A = b.width, !Mt && r.forExport && (A = r.measureSpanWidth(v.firstChild.data, t.styles)), b = A > g, void 0 === s && (s = b), y && s ? (I /= 2, "" === D || !b && I < .5 ? x = [] : (D = o.substring(0, D.length + (b ? -1 : 1) * dt(I)), x = [D + (g > 3 ? "…" : "")], v.removeChild(v.firstChild))) : b && 1 !== x.length ? (v.removeChild(v.firstChild), P.unshift(x.pop())) : (x = P, P = [], x.length && !S && (C++, v = at.createElementNS(Pt, "tspan"), l(v, {
                                        dy: M,
                                        x: u
                                    }),
                                    m && l(v, "style", m), n.appendChild(v)), A > g && (g = A)), x.length && v.appendChild(at.createTextNode(x.join(" ").replace(/- /g, "-")));
                                t.rotation = L
                            }
                            d++
                        }
                    }
                })
            }), s && t.attr("title", t.textStr), b && b.removeChild(n), x && t.applyTextShadow && t.applyTextShadow(x)) : n.appendChild(at.createTextNode(w(h)))
        },
        getContrast: function(t) {
            return t = L(t).rgba, t[0] + t[1] + t[2] > 384 ? "#000000" : "#FFFFFF"
        },
        button: function(t, e, i, o, n, r, a, h, l) {
            var c, d, p, u, f, g, m = this.label(t, e, i, l, null, null, null, null, "button"),
                x = 0,
                t = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                n = s({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: t,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, n);
            return p = n.style, delete n.style, r = s(n, {
                stroke: "#68A",
                fill: {
                    linearGradient: t,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, r), u = r.style, delete r.style, a = s(n, {
                stroke: "#68A",
                fill: {
                    linearGradient: t,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, a), f = a.style, delete a.style, h = s(n, {
                style: {
                    color: "#CCC"
                }
            }, h), g = h.style, delete h.style, jt(m.element, kt ? "mouseover" : "mouseenter", function() {
                3 !== x && m.attr(r).css(u)
            }), jt(m.element, kt ? "mouseout" : "mouseleave", function() {
                3 !== x && (c = [n, r, a][x], d = [p, u, f][x], m.attr(c).css(d))
            }), m.setState = function(t) {
                (m.state = x = t) ? 2 === t ? m.attr(a).css(f) : 3 === t && m.attr(h).css(g): m.attr(n).css(p)
            }, m.on("click", function(t) {
                3 !== x && o.call(m, t)
            }).attr(n).css(Qt({
                cursor: "default"
            }, p))
        },
        crispLine: function(t, e) {
            return t[1] === t[4] && (t[1] = t[4] = lt(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = lt(t[2]) + e % 2 / 2), t
        },
        path: function(t) {
            var e = {
                fill: "none"
            };
            return r(t) ? e.d = t : te(t) && Qt(e, t), this.createElement("path").attr(e)
        },
        circle: function(t, e, i) {
            return t = te(t) ? t : {
                x: t,
                y: e,
                r: i
            }, e = this.createElement("circle"), e.xSetter = e.ySetter = function(t, e, i) {
                i.setAttribute("c" + e, t)
            }, e.attr(t)
        },
        arc: function(t, e, i, s, o, n) {
            return te(t) && (e = t.y, i = t.r, s = t.innerR, o = t.start, n = t.end, t = t.x), t = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
                innerR: s || 0,
                start: o || 0,
                end: n || 0
            }), t.r = i, t
        },
        rect: function(t, e, i, s, o, n) {
            var o = te(t) ? t.r : o,
                r = this.createElement("rect"),
                t = te(t) ? t : t === R ? {} : {
                    x: t,
                    y: e,
                    width: pt(i, 0),
                    height: pt(s, 0)
                };
            return n !== R && (r.strokeWidth = n, t = r.crisp(t)), o && (t.r = o), r.rSetter = function(t, e, i) {
                l(i, {
                    rx: t,
                    ry: t
                })
            }, r.attr(t)
        },
        setSize: function(t, e, i) {
            var s = this.alignedObjects,
                o = s.length;
            for (this.width = t, this.height = e, this.boxWrapper[ie(i, !0) ? "animate" : "attr"]({
                    width: t,
                    height: e
                }); o--;) s[o].align()
        },
        g: function(t) {
            var e = this.createElement("g");
            return h(t) ? e.attr({
                "class": "highcharts-" + t
            }) : e
        },
        image: function(t, e, i, s, o) {
            var n = {
                preserveAspectRatio: "none"
            };
            return arguments.length > 1 && Qt(n, {
                x: e,
                y: i,
                width: s,
                height: o
            }), n = this.createElement("image").attr(n), n.element.setAttributeNS ? n.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : n.element.setAttribute("hc-svg-href", t), n
        },
        symbol: function(t, e, i, s, o, n) {
            var r, a, h, l = this,
                c = this.symbols[t],
                c = c && c(lt(e), lt(i), s, o, n),
                d = /^url\((.*?)\)$/;
            return c ? (r = this.path(c), Qt(r, {
                symbolName: t,
                x: e,
                y: i,
                width: s,
                height: o
            }), n && Qt(r, n)) : d.test(t) && (h = function(t, e) {
                t.element && (t.attr({
                    width: e[0],
                    height: e[1]
                }), t.alignByTranslate || t.translate(lt((s - e[0]) / 2), lt((o - e[1]) / 2)))
            }, a = t.match(d)[1], t = Dt[a] || n && n.width && n.height && [n.width, n.height], r = this.image(a).attr({
                x: e,
                y: i
            }), r.isImg = !0, t ? h(r, t) : (r.attr({
                width: 0,
                height: 0
            }), u("img", {
                onload: function() {
                    var t = Bt[l.chartIndex];
                    0 === this.width && (p(this, {
                        position: "absolute",
                        top: "-999em"
                    }), at.body.appendChild(this)), h(r, Dt[a] = [this.width, this.height]), this.parentNode && this.parentNode.removeChild(this), l.imgCount--, !l.imgCount && t && t.onload && t.onload()
                },
                src: a
            }), this.imgCount++)), r
        },
        symbols: {
            circle: function(t, e, i, s) {
                var o = .166 * i;
                return [Rt, t + i / 2, e, "C", t + i + o, e, t + i + o, e + s, t + i / 2, e + s, "C", t - o, e + s, t - o, e, t + i / 2, e, "Z"]
            },
            square: function(t, e, i, s) {
                return [Rt, t, e, Xt, t + i, e, t + i, e + s, t, e + s, "Z"]
            },
            triangle: function(t, e, i, s) {
                return [Rt, t + i / 2, e, Xt, t + i, e + s, t, e + s, "Z"]
            },
            "triangle-down": function(t, e, i, s) {
                return [Rt, t, e, Xt, t + i, e, t + i / 2, e + s, "Z"]
            },
            diamond: function(t, e, i, s) {
                return [Rt, t + i / 2, e, Xt, t + i, e + s / 2, t + i / 2, e + s, t, e + s / 2, "Z"]
            },
            arc: function(t, e, i, s, o) {
                var n = o.start,
                    i = o.r || i || s,
                    r = o.end - .001,
                    s = o.innerR,
                    a = o.open,
                    h = gt(n),
                    l = mt(n),
                    c = gt(r),
                    r = mt(r),
                    o = o.end - n < xt ? 0 : 1;
                return [Rt, t + i * h, e + i * l, "A", i, i, 0, o, 1, t + i * c, e + i * r, a ? Rt : Xt, t + s * c, e + s * r, "A", s, s, 0, o, 0, t + s * h, e + s * l, a ? "" : "Z"]
            },
            callout: function(t, e, i, s, o) {
                var n, r = ut(o && o.r || 0, i, s),
                    a = r + 6,
                    h = o && o.anchorX,
                    o = o && o.anchorY;
                return n = ["M", t + r, e, "L", t + i - r, e, "C", t + i, e, t + i, e, t + i, e + r, "L", t + i, e + s - r, "C", t + i, e + s, t + i, e + s, t + i - r, e + s, "L", t + r, e + s, "C", t, e + s, t, e + s, t, e + s - r, "L", t, e + r, "C", t, e, t, e, t + r, e], h && h > i && o > e + a && o < e + s - a ? n.splice(13, 3, "L", t + i, o - 6, t + i + 6, o, t + i, o + 6, t + i, e + s - r) : h && h < 0 && o > e + a && o < e + s - a ? n.splice(33, 3, "L", t, o + 6, t - 6, o, t, o - 6, t, e + r) : o && o > s && h > t + a && h < t + i - a ? n.splice(23, 3, "L", h + 6, e + s, h, e + s + 6, h - 6, e + s, t + r, e + s) : o && o < 0 && h > t + a && h < t + i - a && n.splice(3, 3, "L", h - 6, e, h, e - 6, h + 6, e, i - r, e), n
            }
        },
        clipRect: function(t, e, i, s) {
            var o = "highcharts-" + It++,
                n = this.createElement("clipPath").attr({
                    id: o
                }).add(this.defs),
                t = this.rect(t, e, i, s, 0).add(n);
            return t.id = o, t.clipPath = n, t.count = 0, t
        },
        text: function(t, e, i, s) {
            var o = Lt || !Mt && this.forExport,
                n = {};
            return !s || !this.allowHTML && this.forExport ? (n.x = Math.round(e || 0), i && (n.y = Math.round(i)), (t || 0 === t) && (n.text = t), t = this.createElement("text").attr(n), o && t.css({
                position: "absolute"
            }), s || (t.xSetter = function(t, e, i) {
                var s, o, n = i.getElementsByTagName("tspan"),
                    r = i.getAttribute(e);
                for (o = 0; o < n.length; o++) s = n[o], s.getAttribute(e) === r && s.setAttribute(e, t);
                i.setAttribute(e, t)
            }), t) : this.html(t, e, i)
        },
        fontMetrics: function(e, i) {
            var s, n, e = e || this.style.fontSize;
            return !e && i && t.getComputedStyle && (i = i.element || i, e = (s = t.getComputedStyle(i, "")) && s.fontSize), e = /px/.test(e) ? o(e) : /em/.test(e) ? 12 * parseFloat(e) : 12, s = e < 24 ? e + 3 : lt(1.2 * e), n = lt(.8 * s), {
                h: s,
                b: n,
                f: e
            }
        },
        rotCorr: function(t, e, i) {
            var s = t;
            return e && i && (s = pt(s * gt(e * yt), 4)), {
                x: -t / 3 * mt(e * yt),
                y: s
            }
        },
        label: function(t, e, i, o, n, r, a, l, c) {
            var d, p, u, f, g, m, x, y, v, b, k = this,
                w = k.g(c),
                A = k.text("", 0, 0, a).attr({
                    zIndex: 1
                }),
                S = 0,
                T = 3,
                P = 0,
                M = 0,
                C = {},
                L = /^url\((.*?)\)$/.test(o),
                I = L;
            y = function() {
                var t, e;
                t = A.element.style, p = (void 0 === u || void 0 === f || w.styles.textAlign) && h(A.textStr) && A.getBBox(), w.width = (u || p.width || 0) + 2 * T + P, w.height = (f || p.height || 0) + 2 * T, x = T + k.fontMetrics(t && t.fontSize, A).b, I && (d || (t = M, e = (l ? -x : 0) + M, w.box = d = k.symbols[o] || L ? k.symbol(o, t, e, w.width, w.height, C) : k.rect(t, e, w.width, w.height, 0, C["stroke-width"]), d.isImg || d.attr("fill", "none"), d.add(w)), d.isImg || d.attr(Qt({
                    width: lt(w.width),
                    height: lt(w.height)
                }, C)), C = null)
            }, v = function() {
                var t, e = w.styles,
                    e = e && e.textAlign,
                    i = P + T;
                t = l ? 0 : x, h(u) && p && ("center" === e || "right" === e) && (i += {
                    center: .5,
                    right: 1
                }[e] * (u - p.width)), i === A.x && t === A.y || (A.attr("x", i), t !== R && A.attr("y", t)), A.x = i, A.y = t
            }, b = function(t, e) {
                d ? d.attr(t, e) : C[t] = e
            }, w.onAdd = function() {
                A.add(w), w.attr({
                    text: t || 0 === t ? t : "",
                    x: e,
                    y: i
                }), d && h(n) && w.attr({
                    anchorX: n,
                    anchorY: r
                })
            }, w.widthSetter = function(t) {
                u = t
            }, w.heightSetter = function(t) {
                f = t
            }, w.paddingSetter = function(t) {
                h(t) && t !== T && (T = w.padding = t, v())
            }, w.paddingLeftSetter = function(t) {
                h(t) && t !== P && (P = t, v())
            }, w.alignSetter = function(t) {
                t = {
                    left: 0,
                    center: .5,
                    right: 1
                }[t], t !== S && (S = t, p && w.attr({
                    x: g
                }))
            }, w.textSetter = function(t) {
                t !== R && A.textSetter(t), y(), v()
            }, w["stroke-widthSetter"] = function(t, e) {
                t && (I = !0), M = t % 2 / 2, b(e, t)
            }, w.strokeSetter = w.fillSetter = w.rSetter = function(t, e) {
                "fill" === e && t && (I = !0), b(e, t)
            }, w.anchorXSetter = function(t, e) {
                n = t, b(e, lt(t) - M - g)
            }, w.anchorYSetter = function(t, e) {
                r = t, b(e, t - m)
            }, w.xSetter = function(t) {
                w.x = t, S && (t -= S * ((u || p.width) + 2 * T)), g = lt(t), w.attr("translateX", g)
            }, w.ySetter = function(t) {
                m = w.y = lt(t), w.attr("translateY", m)
            };
            var O = w.css;
            return Qt(w, {
                css: function(t) {
                    if (t) {
                        var e = {},
                            t = s(t);
                        Nt(w.textProps, function(i) {
                            t[i] !== R && (e[i] = t[i], delete t[i])
                        }), A.css(e)
                    }
                    return O.call(w, t)
                },
                getBBox: function() {
                    return {
                        width: p.width + 2 * T,
                        height: p.height + 2 * T,
                        x: p.x - T,
                        y: p.y - T
                    }
                },
                shadow: function(t) {
                    return d && d.shadow(t), w
                },
                destroy: function() {
                    Zt(w.element, "mouseenter"), Zt(w.element, "mouseleave"), A && (A = A.destroy()), d && (d = d.destroy()), D.prototype.destroy.call(w), w = k = y = v = b = null
                }
            })
        }
    }, X = re, Qt(D.prototype, {
        htmlCss: function(t) {
            var e = this.element;
            return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = Qt(this.styles, t), p(this.element, t), this
        },
        htmlGetBBox: function() {
            var t = this.element;
            return "text" === t.nodeName && (t.style.position = "absolute"), {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var t = this.renderer,
                    e = this.element,
                    i = this.translateX || 0,
                    s = this.translateY || 0,
                    n = this.x || 0,
                    r = this.y || 0,
                    a = this.textAlign || "left",
                    l = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[a],
                    c = this.shadows,
                    d = this.styles;
                if (p(e, {
                        marginLeft: i,
                        marginTop: s
                    }), c && Nt(c, function(t) {
                        p(t, {
                            marginLeft: i + 1,
                            marginTop: s + 1
                        })
                    }), this.inverted && Nt(e.childNodes, function(i) {
                        t.invertChild(i, e)
                    }), "SPAN" === e.tagName) {
                    var c = this.rotation,
                        u = o(this.textWidth),
                        f = d && d.whiteSpace,
                        g = [c, a, e.innerHTML, this.textWidth, this.textAlign].join(",");
                    g !== this.cTT && (d = t.fontMetrics(e.style.fontSize).b, h(c) && this.setSpanRotation(c, l, d), p(e, {
                        width: "",
                        whiteSpace: f || "nowrap"
                    }), e.offsetWidth > u && /[ \-]/.test(e.textContent || e.innerText) && p(e, {
                        width: u + "px",
                        display: "block",
                        whiteSpace: f || "normal"
                    }), this.getSpanCorrection(e.offsetWidth, d, l, c, a)), p(e, {
                        left: n + (this.xCorr || 0) + "px",
                        top: r + (this.yCorr || 0) + "px"
                    }), At && (d = e.offsetHeight), this.cTT = g
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(t, e, i) {
            var s = {},
                o = kt ? "-ms-transform" : At ? "-webkit-transform" : St ? "MozTransform" : bt ? "-o-transform" : "";
            s[o] = s.transform = "rotate(" + t + "deg)", s[o + (St ? "Origin" : "-origin")] = s.transformOrigin = 100 * e + "% " + i + "px", p(this.element, s)
        },
        getSpanCorrection: function(t, e, i) {
            this.xCorr = -t * i, this.yCorr = -e
        }
    }), Qt(re.prototype, {
        html: function(t, e, i) {
            var s = this.createElement("span"),
                o = s.element,
                n = s.renderer,
                r = n.isSVG,
                a = function(t, e) {
                    Nt(["display", "opacity", "visibility"], function(i) {
                        se(t, i + "Setter", function(t, i, s, o) {
                            t.call(this, i, s, o), e[s] = i
                        })
                    })
                };
            return s.textSetter = function(t) {
                t !== o.innerHTML && delete this.bBox, o.innerHTML = this.textStr = t, s.htmlUpdateTransform()
            }, r && a(s, s.element.style), s.xSetter = s.ySetter = s.alignSetter = s.rotationSetter = function(t, e) {
                "align" === e && (e = "textAlign"), s[e] = t, s.htmlUpdateTransform()
            }, s.attr({
                text: t,
                x: lt(e),
                y: lt(i)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            }), o.style.whiteSpace = "nowrap", s.css = s.htmlCss, r && (s.add = function(t) {
                var e, i = n.box.parentNode,
                    r = [];
                if (this.parentGroup = t) {
                    if (e = t.div, !e) {
                        for (; t;) r.push(t), t = t.parentGroup;
                        Nt(r.reverse(), function(t) {
                            var s, o = l(t.element, "class");
                            o && (o = {
                                className: o
                            }), e = t.div = t.div || u(Et, o, {
                                position: "absolute",
                                left: (t.translateX || 0) + "px",
                                top: (t.translateY || 0) + "px",
                                display: t.display,
                                opacity: t.opacity,
                                pointerEvents: t.styles && t.styles.pointerEvents
                            }, e || i), s = e.style, Qt(t, {
                                translateXSetter: function(e, i) {
                                    s.left = e + "px", t[i] = e, t.doTransform = !0
                                },
                                translateYSetter: function(e, i) {
                                    s.top = e + "px", t[i] = e, t.doTransform = !0
                                }
                            }), a(t, s)
                        })
                    }
                } else e = i;
                return e.appendChild(o), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s
            }), s
        }
    });
    var ae, he;
    Mt || Lt || (he = {
        init: function(t, e) {
            var i = ["<", e, ' filled="f" stroked="f"'],
                s = ["position: ", "absolute", ";"],
                o = e === Et;
            ("shape" === e || o) && s.push("left:0;top:0;width:1px;height:1px;"), s.push("visibility: ", o ? "hidden" : "visible"), i.push(' style="', s.join(""), '"/>'), e && (i = o || "span" === e || "img" === e ? i.join("") : t.prepVML(i), this.element = u(i)), this.renderer = t
        },
        add: function(t) {
            var e = this.renderer,
                i = this.element,
                s = e.box,
                o = t && t.inverted,
                s = t ? t.element || t : s;
            return t && (this.parentGroup = t), o && e.invertChild(i, s), s.appendChild(i), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), this.onAdd && this.onAdd(), this
        },
        updateTransform: D.prototype.htmlUpdateTransform,
        setSpanRotation: function() {
            var t = this.rotation,
                e = gt(t * yt),
                i = mt(t * yt);
            p(this.element, {
                filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : "none"
            })
        },
        getSpanCorrection: function(t, e, i, s, o) {
            var n, r = s ? gt(s * yt) : 1,
                a = s ? mt(s * yt) : 0,
                h = ie(this.elemHeight, this.element.offsetHeight);
            this.xCorr = r < 0 && -t, this.yCorr = a < 0 && -h, n = r * a < 0, this.xCorr += a * e * (n ? 1 - i : i), this.yCorr -= r * e * (s ? n ? i : 1 - i : 1), o && "left" !== o && (this.xCorr -= t * i * (r < 0 ? -1 : 1), s && (this.yCorr -= h * i * (a < 0 ? -1 : 1)), p(this.element, {
                textAlign: o
            }))
        },
        pathToVML: function(t) {
            for (var e = t.length, i = []; e--;) ee(t[e]) ? i[e] = lt(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
            return i.join(" ") || "x"
        },
        clip: function(t) {
            var e, i = this;
            return t ? (e = t.members, a(e, i), e.push(i), i.destroyClip = function() {
                a(e, i)
            }, t = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), t = {
                clip: wt ? "inherit" : "rect(auto)"
            }), i.css(t)
        },
        css: D.prototype.htmlCss,
        safeRemoveChild: function(t) {
            t.parentNode && S(t)
        },
        destroy: function() {
            return this.destroyClip && this.destroyClip(), D.prototype.destroy.apply(this)
        },
        on: function(e, i) {
            return this.element["on" + e] = function() {
                var e = t.event;
                e.target = e.srcElement, i(e)
            }, this
        },
        cutOffPath: function(t, e) {
            var i, t = t.split(/[ ,]/);
            return i = t.length, 9 !== i && 11 !== i || (t[i - 4] = t[i - 2] = o(t[i - 2]) - 10 * e), t.join(" ")
        },
        shadow: function(t, e, i) {
            var s, n, r, a, h, l, c, d = [],
                p = this.element,
                f = this.renderer,
                g = p.style,
                m = p.path;
            if (m && "string" != typeof m.value && (m = "x"), h = m, t) {
                for (l = ie(t.width, 3), c = (t.opacity || .15) / l, s = 1; s <= 3; s++) a = 2 * l + 1 - 2 * s, i && (h = this.cutOffPath(m.value, a + .5)), r = ['<shape isShadow="true" strokeweight="', a, '" filled="false" path="', h, '" coordsize="10 10" style="', p.style.cssText, '" />'], n = u(f.prepVML(r), null, {
                    left: o(g.left) + ie(t.offsetX, 1),
                    top: o(g.top) + ie(t.offsetY, 1)
                }), i && (n.cutOff = a + 1), r = ['<stroke color="', t.color || "black", '" opacity="', c * s, '"/>'], u(f.prepVML(r), null, null, n), e ? e.element.appendChild(n) : p.parentNode.insertBefore(n, p), d.push(n);
                this.shadows = d
            }
            return this
        },
        updateShadows: Ot,
        setAttr: function(t, e) {
            wt ? this.element[t] = e : this.element.setAttribute(t, e)
        },
        classSetter: function(t) {
            this.element.className = t
        },
        dashstyleSetter: function(t, e, i) {
            (i.getElementsByTagName("stroke")[0] || u(this.renderer.prepVML(["<stroke/>"]), null, null, i))[e] = t || "solid", this[e] = t
        },
        dSetter: function(t, e, i) {
            var s = this.shadows,
                t = t || [];
            if (this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), s)
                for (i = s.length; i--;) s[i].path = s[i].cutOff ? this.cutOffPath(t, s[i].cutOff) : t;
            this.setAttr(e, t)
        },
        fillSetter: function(t, e, i) {
            var s = i.nodeName;
            "SPAN" === s ? i.style.color = t : "IMG" !== s && (i.filled = "none" !== t, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
        },
        "fill-opacitySetter": function(t, e, i) {
            u(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
        },
        opacitySetter: Ot,
        rotationSetter: function(t, e, i) {
            i = i.style, this[e] = i[e] = t, i.left = -lt(mt(t * yt) + 1) + "px", i.top = lt(gt(t * yt)) + "px"
        },
        strokeSetter: function(t, e, i) {
            this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
        },
        "stroke-widthSetter": function(t, e, i) {
            i.stroked = !!t, this[e] = t, ee(t) && (t += "px"), this.setAttr("strokeweight", t)
        },
        titleSetter: function(t, e) {
            this.setAttr(e, t)
        },
        visibilitySetter: function(t, e, i) {
            "inherit" === t && (t = "visible"), this.shadows && Nt(this.shadows, function(i) {
                i.style[e] = t
            }), "DIV" === i.nodeName && (t = "hidden" === t ? "-999em" : 0, wt || (i.style[e] = t ? "visible" : "hidden"), e = "top"), i.style[e] = t
        },
        displaySetter: function(t, e, i) {
            i.style[e] = t
        },
        xSetter: function(t, e, i) {
            this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
        },
        zIndexSetter: function(t, e, i) {
            i.style[e] = t
        }
    }, he["stroke-opacitySetter"] = he["fill-opacitySetter"], rt.VMLElement = he = f(D, he), he.prototype.ySetter = he.prototype.widthSetter = he.prototype.heightSetter = he.prototype.xSetter, he = {
        Element: he,
        isIE8: vt.indexOf("MSIE 8.0") > -1,
        init: function(t, e, i, s) {
            var o;
            if (this.alignedObjects = [], s = this.createElement(Et).css(Qt(this.getStyle(s), {
                    position: "relative"
                })), o = s.element, t.appendChild(s.element), this.isVML = !0, this.box = o, this.boxWrapper = s, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), !at.namespaces.hcv) {
                at.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                try {
                    at.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                } catch (n) {
                    at.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            }
        },
        isHidden: function() {
            return !this.box.offsetWidth
        },
        clipRect: function(t, e, i, s) {
            var o = this.createElement(),
                n = te(t);
            return Qt(o, {
                members: [],
                count: 0,
                left: (n ? t.x : t) + 1,
                top: (n ? t.y : e) + 1,
                width: (n ? t.width : i) - 1,
                height: (n ? t.height : s) - 1,
                getCSS: function(t) {
                    var e = t.element,
                        i = e.nodeName,
                        t = t.inverted,
                        s = this.top - ("shape" === i ? e.offsetTop : 0),
                        o = this.left,
                        e = o + this.width,
                        n = s + this.height,
                        s = {
                            clip: "rect(" + lt(t ? o : s) + "px," + lt(t ? n : e) + "px," + lt(t ? e : n) + "px," + lt(t ? s : o) + "px)"
                        };
                    return !t && wt && "DIV" === i && Qt(s, {
                        width: e + "px",
                        height: n + "px"
                    }), s
                },
                updateClipping: function() {
                    Nt(o.members, function(t) {
                        t.element && t.css(o.getCSS(t))
                    })
                }
            })
        },
        color: function(t, e, i, s) {
            var o, n, r, a = this,
                h = /^rgba/,
                l = "none";
            if (t && t.linearGradient ? r = "gradient" : t && t.radialGradient && (r = "pattern"), r) {
                var c, d, p, f, g, m, x, y, v = t.linearGradient || t.radialGradient,
                    b = "",
                    t = t.stops,
                    k = [],
                    w = function() {
                        n = ['<fill colors="' + k.join(",") + '" opacity="', g, '" o:opacity2="', f, '" type="', r, '" ', b, 'focus="100%" method="any" />'], u(a.prepVML(n), null, null, e)
                    };
                if (p = t[0], y = t[t.length - 1], p[0] > 0 && t.unshift([0, p[1]]), y[0] < 1 && t.push([1, y[1]]), Nt(t, function(t, e) {
                        h.test(t[1]) ? (o = L(t[1]), c = o.get("rgb"), d = o.get("a")) : (c = t[1], d = 1), k.push(100 * t[0] + "% " + c), e ? (g = d, m = c) : (f = d, x = c)
                    }), "fill" === i)
                    if ("gradient" === r) i = v.x1 || v[0] || 0, t = v.y1 || v[1] || 0, p = v.x2 || v[2] || 0, v = v.y2 || v[3] || 0, b = 'angle="' + (90 - 180 * ht.atan((v - t) / (p - i)) / xt) + '"', w();
                    else {
                        var A, l = v.r,
                            S = 2 * l,
                            T = 2 * l,
                            P = v.cx,
                            M = v.cy,
                            C = e.radialReference,
                            l = function() {
                                C && (A = s.getBBox(), P += (C[0] - A.x) / A.width - .5, M += (C[1] - A.y) / A.height - .5, S *= C[2] / A.width, T *= C[2] / A.height), b = 'src="' + G.global.VMLRadialGradientURL + '" size="' + S + "," + T + '" origin="0.5,0.5" position="' + P + "," + M + '" color2="' + x + '" ', w()
                            };
                        s.added ? l() : s.onAdd = l, l = m
                    } else l = c
            } else h.test(t) && "IMG" !== e.tagName ? (o = L(t), s[i + "-opacitySetter"](o.get("a"), i, e), l = o.get("rgb")) : (l = e.getElementsByTagName(i), l.length && (l[0].opacity = 1, l[0].type = "solid"), l = t);
            return l
        },
        prepVML: function(t) {
            var e = this.isIE8,
                t = t.join("");
            return e ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = t.indexOf('style="') === -1 ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : t = t.replace("<", "<hcv:"), t
        },
        text: re.prototype.html,
        path: function(t) {
            var e = {
                coordsize: "10 10"
            };
            return r(t) ? e.d = t : te(t) && Qt(e, t), this.createElement("shape").attr(e)
        },
        circle: function(t, e, i) {
            var s = this.symbol("circle");
            return te(t) && (i = t.r, e = t.y, t = t.x), s.isCircle = !0, s.r = i, s.attr({
                x: t,
                y: e
            })
        },
        g: function(t) {
            var e;
            return t && (e = {
                className: "highcharts-" + t,
                "class": "highcharts-" + t
            }), this.createElement(Et).attr(e)
        },
        image: function(t, e, i, s, o) {
            var n = this.createElement("img").attr({
                src: t
            });
            return arguments.length > 1 && n.attr({
                x: e,
                y: i,
                width: s,
                height: o
            }), n
        },
        createElement: function(t) {
            return "rect" === t ? this.symbol(t) : re.prototype.createElement.call(this, t)
        },
        invertChild: function(t, e) {
            var i = this,
                s = e.style,
                n = "IMG" === t.tagName && t.style;
            p(t, {
                flip: "x",
                left: o(s.width) - (n ? o(n.top) : 1),
                top: o(s.height) - (n ? o(n.left) : 1),
                rotation: -90
            }), Nt(t.childNodes, function(e) {
                i.invertChild(e, t)
            })
        },
        symbols: {
            arc: function(t, e, i, s, o) {
                var n = o.start,
                    r = o.end,
                    a = o.r || i || s,
                    i = o.innerR,
                    s = gt(n),
                    h = mt(n),
                    l = gt(r),
                    c = mt(r);
                return r - n === 0 ? ["x"] : (n = ["wa", t - a, e - a, t + a, e + a, t + a * s, e + a * h, t + a * l, e + a * c], o.open && !i && n.push("e", Rt, t, e), n.push("at", t - i, e - i, t + i, e + i, t + i * l, e + i * c, t + i * s, e + i * h, "x", "e"), n.isArc = !0, n)
            },
            circle: function(t, e, i, s, o) {
                return o && (i = s = 2 * o.r), o && o.isCircle && (t -= i / 2, e -= s / 2), ["wa", t, e, t + i, e + s, t + i, e + s / 2, t + i, e + s / 2, "e"]
            },
            rect: function(t, e, i, s, o) {
                return re.prototype.symbols[h(o) && o.r ? "callout" : "square"].call(0, t, e, i, s, o)
            }
        }
    }, rt.VMLRenderer = ae = function() {
        this.init.apply(this, arguments)
    }, ae.prototype = s(re.prototype, he), X = ae), re.prototype.measureSpanWidth = function(t, e) {
        var i, s = at.createElement("span");
        return i = at.createTextNode(t), s.appendChild(i), p(s, e), this.box.appendChild(s), i = s.offsetWidth, S(s), i
    };
    var le;
    Lt && (rt.CanVGRenderer = he = function() {
        Pt = "http://www.w3.org/1999/xhtml"
    }, he.prototype.symbols = {}, le = function() {
        function t() {
            var t, i = e.length;
            for (t = 0; t < i; t++) e[t]();
            e = []
        }
        var e = [];
        return {
            push: function(i, s) {
                if (0 === e.length) {
                    var o = at.getElementsByTagName("head")[0],
                        n = at.createElement("script");
                    n.type = "text/javascript", n.src = s, n.onload = t, o.appendChild(n)
                }
                e.push(i)
            }
        }
    }(), X = he), I.prototype = {
        addLabel: function() {
            var t, e = this.axis,
                i = e.options,
                o = e.chart,
                n = e.categories,
                r = e.names,
                a = this.pos,
                l = i.labels,
                c = e.tickPositions,
                d = a === c[0],
                p = a === c[c.length - 1],
                r = n ? ie(n[a], r[a], a) : a,
                n = this.label,
                c = c.info;
            e.isDatetimeAxis && c && (t = i.dateTimeLabelFormats[c.higherRanks[a] || c.unitName]), this.isFirst = d, this.isLast = p, i = e.labelFormatter.call({
                axis: e,
                chart: o,
                isFirst: d,
                isLast: p,
                dateTimeLabelFormat: t,
                value: e.isLog ? T(e.lin2log(r)) : r
            }), h(n) ? n && n.attr({
                text: i
            }) : (this.labelLength = (this.label = n = h(i) && l.enabled ? o.renderer.text(i, 0, 0, l.useHTML).css(s(l.style)).add(e.labelGroup) : null) && n.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(t) {
            var e, i = this.axis,
                s = t.x,
                o = i.chart.chartWidth,
                n = i.chart.spacing,
                r = ie(i.labelLeft, ut(i.pos, n[3])),
                n = ie(i.labelRight, pt(i.pos + i.len, o - n[1])),
                a = this.label,
                h = this.rotation,
                l = {
                    left: 0,
                    center: .5,
                    right: 1
                }[i.labelAlign],
                c = a.getBBox().width,
                d = i.getSlotWidth(),
                p = d,
                u = 1,
                f = {};
            h ? h < 0 && s - l * c < r ? e = lt(s / gt(h * yt) - r) : h > 0 && s + l * c > n && (e = lt((o - s) / gt(h * yt))) : (o = s + (1 - l) * c, s - l * c < r ? p = t.x + p * (1 - l) - r : o > n && (p = n - t.x + p * l, u = -1), p = ut(d, p), p < d && "center" === i.labelAlign && (t.x += u * (d - p - l * (d - ut(c, p)))), (c > p || i.autoRotation && a.styles.width) && (e = p)), e && (f.width = e, i.options.labels.style.textOverflow || (f.textOverflow = "ellipsis"), a.css(f))
        },
        getPosition: function(t, e, i, s) {
            var o = this.axis,
                n = o.chart,
                r = s && n.oldChartHeight || n.chartHeight;
            return {
                x: t ? o.translate(e + i, null, null, s) + o.transB : o.left + o.offset + (o.opposite ? (s && n.oldChartWidth || n.chartWidth) - o.right - o.left : 0),
                y: t ? r - o.bottom + o.offset - (o.opposite ? o.height : 0) : r - o.translate(e + i, null, null, s) - o.transB
            }
        },
        getLabelPosition: function(t, e, i, s, o, n, r, a) {
            var l = this.axis,
                c = l.transA,
                d = l.reversed,
                p = l.staggerLines,
                u = l.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                f = o.y;
            return h(f) || (f = 0 === l.side ? i.rotation ? -8 : -i.getBBox().height : 2 === l.side ? u.y + 8 : gt(i.rotation * yt) * (u.y - i.getBBox(!1, 0).height / 2)), t = t + o.x + u.x - (n && s ? n * c * (d ? -1 : 1) : 0), e = e + f - (n && !s ? n * c * (d ? 1 : -1) : 0), p && (i = r / (a || 1) % p, l.opposite && (i = p - i - 1), e += i * (l.labelOffset / p)), {
                x: t,
                y: lt(e)
            }
        },
        getMarkPath: function(t, e, i, s, o, n) {
            return n.crispLine([Rt, t, e, Xt, t + (o ? 0 : -i), e + (o ? i : 0)], s)
        },
        render: function(t, e, i) {
            var s = this.axis,
                o = s.options,
                n = s.chart.renderer,
                r = s.horiz,
                a = this.type,
                h = this.label,
                l = this.pos,
                c = o.labels,
                d = this.gridLine,
                p = a ? a + "Grid" : "grid",
                u = a ? a + "Tick" : "tick",
                f = o[p + "LineWidth"],
                g = o[p + "LineColor"],
                m = o[p + "LineDashStyle"],
                p = s.tickSize(u),
                u = o[u + "Color"],
                x = this.mark,
                y = c.step,
                v = !0,
                b = s.tickmarkOffset,
                k = this.getPosition(r, l, b, e),
                w = k.x,
                k = k.y,
                A = r && w === s.pos + s.len || !r && k === s.pos ? -1 : 1,
                i = ie(i, 1);
            this.isActive = !0, f && (l = s.getPlotLinePath(l + b, f * A, e, !0), d === R && (d = {
                stroke: g,
                "stroke-width": f
            }, m && (d.dashstyle = m), a || (d.zIndex = 1), e && (d.opacity = 0), this.gridLine = d = f ? n.path(l).attr(d).add(s.gridGroup) : null), !e && d && l && d[this.isNew ? "attr" : "animate"]({
                d: l,
                opacity: i
            })), p && (s.opposite && (p[0] = -p[0]), a = this.getMarkPath(w, k, p[0], p[1] * A, r, n), x ? x.animate({
                d: a,
                opacity: i
            }) : this.mark = n.path(a).attr({
                stroke: u,
                "stroke-width": p[1],
                opacity: i
            }).add(s.axisGroup)), h && ee(w) && (h.xy = k = this.getLabelPosition(w, k, h, r, c, b, t, y), this.isFirst && !this.isLast && !ie(o.showFirstLabel, 1) || this.isLast && !this.isFirst && !ie(o.showLastLabel, 1) ? v = !1 : r && !s.isRadial && !c.step && !c.rotation && !e && 0 !== i && this.handleOverflow(k), y && t % y && (v = !1), v && ee(k.y) ? (k.opacity = i, h[this.isNew ? "attr" : "animate"](k)) : ($t(h), h.attr("y", -9999)), this.isNew = !1)
        },
        destroy: function() {
            A(this, this.axis)
        }
    }, rt.PlotLineOrBand = function(t, e) {
        this.axis = t, e && (this.options = e, this.id = e.id)
    }, rt.PlotLineOrBand.prototype = {
        render: function() {
            var t, e = this,
                i = e.axis,
                o = i.horiz,
                n = e.options,
                r = n.label,
                a = e.label,
                l = n.width,
                c = n.to,
                d = n.from,
                p = h(d) && h(c),
                u = n.value,
                f = n.dashStyle,
                g = e.svgElem,
                m = [],
                x = n.color,
                y = ie(n.zIndex, 0),
                v = n.events,
                b = {},
                k = i.chart.renderer,
                m = i.log2lin;
            if (i.isLog && (d = m(d), c = m(c), u = m(u)), l) m = i.getPlotLinePath(u, l), b = {
                stroke: x,
                "stroke-width": l
            }, f && (b.dashstyle = f);
            else {
                if (!p) return;
                m = i.getPlotBandPath(d, c, n), x && (b.fill = x), n.borderWidth && (b.stroke = n.borderColor, b["stroke-width"] = n.borderWidth)
            }
            if (b.zIndex = y, g) m ? (g.show(), g.animate({
                d: m
            })) : (g.hide(), a && (e.label = a = a.destroy()));
            else if (m && m.length && (e.svgElem = g = k.path(m).attr(b).add(), v))
                for (t in n = function(t) {
                        g.on(t, function(i) {
                            v[t].apply(e, [i])
                        })
                    }, v) n(t);
            return r && h(r.text) && m && m.length && i.width > 0 && i.height > 0 && !m.flat ? (r = s({
                align: o && p && "center",
                x: o ? !p && 4 : 10,
                verticalAlign: !o && p && "middle",
                y: o ? p ? 16 : 10 : p ? 6 : -4,
                rotation: o && !p && 90
            }, r), this.renderLabel(r, m, p, y)) : a && a.hide(), e
        },
        renderLabel: function(t, e, i, s) {
            var o = this.label,
                n = this.axis.chart.renderer;
            o || (o = {
                align: t.textAlign || t.align,
                rotation: t.rotation
            }, o.zIndex = s, this.label = o = n.text(t.text, 0, 0, t.useHTML).attr(o).css(t.style).add()), s = [e[1], e[4], i ? e[6] : e[1]], e = [e[2], e[5], i ? e[7] : e[2]], i = k(s), n = k(e), o.align(t, !1, {
                x: i,
                y: n,
                width: w(s) - i,
                height: w(e) - n
            }), o.show()
        },
        destroy: function() {
            a(this.axis.plotLinesAndBands, this), delete this.axis, A(this)
        }
    };
    var ce = rt.Axis = function() {
        this.init.apply(this, arguments)
    };
    ce.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return rt.numberFormat(this.total, -1)
                },
                style: s(oe.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX;
            this.chart = t, this.horiz = t.inverted ? !i : i, this.isXAxis = i, this.coll = this.coll || (i ? "xAxis" : "yAxis"), this.opposite = e.opposite, this.side = e.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
            var s = this.options,
                o = s.type;
            this.labelFormatter = s.labels.formatter || this.defaultLabelFormatter, this.userOptions = e, this.minPixelPadding = 0, this.reversed = s.reversed, this.visible = s.visible !== !1, this.zoomEnabled = s.zoomEnabled !== !1, this.hasNames = "category" === o || s.categories === !0, this.categories = s.categories || this.hasNames, this.names = this.names || [], this.isLog = "logarithmic" === o, this.isDatetimeAxis = "datetime" === o, this.isLinked = h(s.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = s.minRange || s.maxZoom, this.range = s.range, this.offset = s.offset || 0, this.stacks = {}, this.oldStacks = {}, this.stacksTouched = 0, this.min = this.max = null, this.crosshair = ie(s.crosshair, c(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
            var n, s = this.options.events;
            Ft(this, t.axes) === -1 && (i ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), t[this.coll].push(this)), this.series = this.series || [], t.inverted && i && this.reversed === R && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (n in s) jt(this, n, s[n]);
            this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
        },
        setOptions: function(t) {
            this.options = s(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], s(G[this.coll], t))
        },
        defaultLabelFormatter: function() {
            var t, e = this.axis,
                i = this.value,
                s = e.categories,
                o = this.dateTimeLabelFormat,
                n = G.lang.numericSymbols,
                r = n && n.length,
                a = e.options.labels.format,
                e = e.isLog ? i : e.tickInterval;
            if (a) t = x(a, this);
            else if (s) t = i;
            else if (o) t = Y(o, i);
            else if (r && e >= 1e3)
                for (; r-- && t === R;) s = Math.pow(1e3, r + 1), e >= s && 10 * i % s === 0 && null !== n[r] && 0 !== i && (t = rt.numberFormat(i / s, -1) + n[r]);
            return t === R && (t = ft(i) >= 1e4 ? rt.numberFormat(i, -1) : rt.numberFormat(i, -1, R, "")), t
        },
        getSeriesExtremes: function() {
            var t = this,
                e = t.chart;
            t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), Nt(t.series, function(i) {
                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var s, o = i.options,
                        n = o.threshold;
                    t.hasVisibleSeries = !0, t.isLog && n <= 0 && (n = null), t.isXAxis ? (o = i.xData, o.length && (i = k(o), !ee(i) && !(i instanceof N) && (o = Vt(o, function(t) {
                        return ee(t)
                    }), i = k(o)), t.dataMin = ut(ie(t.dataMin, o[0]), i), t.dataMax = pt(ie(t.dataMax, o[0]), w(o)))) : (i.getExtremes(), s = i.dataMax, i = i.dataMin, h(i) && h(s) && (t.dataMin = ut(ie(t.dataMin, i), i), t.dataMax = pt(ie(t.dataMax, s), s)), h(n) && (t.threshold = n), o.softThreshold && !t.isLog || (t.softThreshold = !1))
                }
            })
        },
        translate: function(t, e, i, s, o, n) {
            var r = this.linkedParent || this,
                a = 1,
                h = 0,
                l = s ? r.oldTransA : r.transA,
                s = s ? r.oldMin : r.min,
                c = r.minPixelPadding,
                o = (r.isOrdinal || r.isBroken || r.isLog && o) && r.lin2val;
            return l || (l = r.transA), i && (a *= -1, h = r.len), r.reversed && (a *= -1, h -= a * (r.sector || r.len)), e ? (t = t * a + h, t -= c, t = t / l + s, o && (t = r.lin2val(t))) : (o && (t = r.val2lin(t)), "between" === n && (n = .5), t = a * (t - s) * l + h + a * c + (ee(n) ? l * n * r.pointRange : 0)), t
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(t, e, i, s, o) {
            var n, r, a, h = this.chart,
                l = this.left,
                c = this.top,
                d = i && h.oldChartHeight || h.chartHeight,
                p = i && h.oldChartWidth || h.chartWidth;
            n = this.transB;
            var u = function(t, e, i) {
                    return (t < e || t > i) && (s ? t = ut(pt(e, t), i) : a = !0), t
                },
                o = ie(o, this.translate(t, null, null, i)),
                t = i = lt(o + n);
            return n = r = lt(d - o - n), ee(o) ? this.horiz ? (n = c, r = d - this.bottom, t = i = u(t, l, l + this.width)) : (t = l, i = p - this.right, n = r = u(n, c, c + this.height)) : a = !0, a && !s ? null : h.renderer.crispLine([Rt, t, n, Xt, i, r], e || 1)
        },
        getLinearTickPositions: function(t, e, i) {
            var s, o = T(ct(e / t) * t),
                n = T(dt(i / t) * t),
                r = [];
            if (e === i && ee(e)) return [e];
            for (e = o; e <= n && (r.push(e), e = T(e + t), e !== s);) s = e;
            return r
        },
        getMinorTickPositions: function() {
            var t, e = this.options,
                i = this.tickPositions,
                s = this.minorTickInterval,
                o = [],
                n = this.pointRangePadding || 0;
            t = this.min - n;
            var n = this.max + n,
                r = n - t;
            if (r && r / s < this.len / 3)
                if (this.isLog)
                    for (n = i.length, t = 1; t < n; t++) o = o.concat(this.getLogTickPositions(s, i[t - 1], i[t], !0));
                else if (this.isDatetimeAxis && "auto" === e.minorTickInterval) o = o.concat(this.getTimeTicks(this.normalizeTimeTickInterval(s), t, n, e.startOfWeek));
            else
                for (i = t + (i[0] - t) % s; i <= n; i += s) o.push(i);
            return 0 !== o.length && this.trimTicks(o, e.startOnTick, e.endOnTick), o
        },
        adjustForMinRange: function() {
            var t, e, i, s, o, n, r, a = this.options,
                l = this.min,
                c = this.max,
                d = this.dataMax - this.dataMin >= this.minRange;
            this.isXAxis && this.minRange === R && !this.isLog && (h(a.min) || h(a.max) ? this.minRange = null : (Nt(this.series, function(t) {
                for (o = t.xData, i = n = t.xIncrement ? 1 : o.length - 1; i > 0; i--) s = o[i] - o[i - 1], (e === R || s < e) && (e = s)
            }), this.minRange = ut(5 * e, this.dataMax - this.dataMin))), c - l < this.minRange && (r = this.minRange, t = (r - c + l) / 2, t = [l - t, ie(a.min, l - t)], d && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), l = w(t), c = [l + r, ie(a.max, l + r)], d && (c[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), c = k(c), c - l < r && (t[0] = c - r, t[1] = ie(a.min, c - r), l = w(t))), this.min = l, this.max = c
        },
        getClosest: function() {
            var t;
            return this.categories ? t = 1 : Nt(this.series, function(e) {
                var i = e.closestPointRange;
                !e.noSharedTooltip && h(i) && (t = h(t) ? ut(t, i) : i)
            }), t
        },
        nameToX: function(t) {
            var e, i = r(this.categories),
                s = i ? this.categories : this.names,
                o = t.options.x;
            return t.series.requireSorting = !1, h(o) || (o = this.options.nameToX === !1 ? t.series.autoIncrement() : Ft(t.name, s)), o === -1 ? i || (e = s.length) : e = o, this.names[e] = t.name,
                e
        },
        updateNames: function() {
            var t = this;
            this.names.length > 0 && (this.names.length = 0, this.minRange = void 0, Nt(this.series || [], function(e) {
                e.processedXData || (e.processData(), e.generatePoints()), Nt(e.points, function(i, s) {
                    var o;
                    i.options && void 0 === i.options.x && (o = t.nameToX(i), o !== i.x) && (i.x = o, e.xData[s] = o)
                })
            }))
        },
        setAxisTranslation: function(t) {
            var e, i = this,
                s = i.max - i.min,
                o = i.axisPointRange || 0,
                r = 0,
                a = 0,
                h = i.linkedParent,
                l = !!i.categories,
                c = i.transA,
                d = i.isXAxis;
            (d || l || o) && (h ? (r = h.minPointOffset, a = h.pointRangePadding) : (e = i.getClosest(), Nt(i.series, function(t) {
                var s = l ? 1 : d ? ie(t.options.pointRange, e, 0) : i.axisPointRange || 0,
                    t = t.options.pointPlacement;
                o = pt(o, s), i.single || (r = pt(r, n(t) ? 0 : s / 2), a = pt(a, "on" === t ? 0 : s))
            })), h = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = r *= h, i.pointRangePadding = a *= h, i.pointRange = ut(o, s), d && (i.closestPointRange = e)), t && (i.oldTransA = c), i.translationSlope = i.transA = c = i.len / (s + a || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = c * r
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(t) {
            var i, s, o, n, r = this,
                a = r.chart,
                l = r.options,
                c = r.isLog,
                d = r.log2lin,
                p = r.isDatetimeAxis,
                u = r.isXAxis,
                f = r.isLinked,
                g = l.maxPadding,
                m = l.minPadding,
                x = l.tickInterval,
                b = l.tickPixelInterval,
                k = r.categories,
                w = r.threshold,
                A = r.softThreshold;
            !p && !k && !f && this.getTickAmount(), o = ie(r.userMin, l.min), n = ie(r.userMax, l.max), f ? (r.linkedParent = a[r.coll][l.linkedTo], a = r.linkedParent.getExtremes(), r.min = ie(a.min, a.dataMin), r.max = ie(a.max, a.dataMax), l.type !== r.linkedParent.options.type && e(11, 1)) : (!A && h(w) && (r.dataMin >= w ? (i = w, m = 0) : r.dataMax <= w && (s = w, g = 0)), r.min = ie(o, i, r.dataMin), r.max = ie(n, s, r.dataMax)), c && (!t && ut(r.min, ie(r.dataMin, r.min)) <= 0 && e(10, 1), r.min = T(d(r.min), 15), r.max = T(d(r.max), 15)), r.range && h(r.max) && (r.userMin = r.min = o = pt(r.min, r.minFromRange()), r.userMax = n = r.max, r.range = null), Kt(r, "foundExtremes"), r.beforePadding && r.beforePadding(), r.adjustForMinRange(), k || r.axisPointRange || r.usePercentage || f || !h(r.min) || !h(r.max) || !(d = r.max - r.min) || (!h(o) && m && (r.min -= d * m), !h(n) && g && (r.max += d * g)), ee(l.floor) && (r.min = pt(r.min, l.floor)), ee(l.ceiling) && (r.max = ut(r.max, l.ceiling)), A && h(r.dataMin) && (w = w || 0, !h(o) && r.min < w && r.dataMin >= w ? r.min = w : !h(n) && r.max > w && r.dataMax <= w && (r.max = w)), r.tickInterval = r.min === r.max || void 0 === r.min || void 0 === r.max ? 1 : f && !x && b === r.linkedParent.options.tickPixelInterval ? x = r.linkedParent.tickInterval : ie(x, this.tickAmount ? (r.max - r.min) / pt(this.tickAmount - 1, 1) : void 0, k ? 1 : (r.max - r.min) * b / pt(r.len, b)), u && !t && Nt(r.series, function(t) {
                t.processData(r.min !== r.oldMin || r.max !== r.oldMax)
            }), r.setAxisTranslation(!0), r.beforeSetTickPositions && r.beforeSetTickPositions(), r.postProcessTickInterval && (r.tickInterval = r.postProcessTickInterval(r.tickInterval)), r.pointRange && !x && (r.tickInterval = pt(r.pointRange, r.tickInterval)), t = ie(l.minTickInterval, r.isDatetimeAxis && r.closestPointRange), !x && r.tickInterval < t && (r.tickInterval = t), p || c || x || (r.tickInterval = v(r.tickInterval, null, y(r.tickInterval), ie(l.allowDecimals, !(r.tickInterval > .5 && r.tickInterval < 5 && r.max > 1e3 && r.max < 9999)), !!this.tickAmount)), this.tickAmount || (r.tickInterval = r.unsquish()), this.setTickPositions()
        },
        setTickPositions: function() {
            var t, e, i = this.options,
                s = i.tickPositions,
                o = i.tickPositioner,
                n = i.startOnTick,
                r = i.endOnTick;
            this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : i.minorTickInterval, this.tickPositions = t = s && s.slice(), !t && (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, o && (o = o.apply(this, [this.min, this.max]))) && (this.tickPositions = t = o), this.isLinked || (this.trimTicks(t, n, r), this.min === this.max && h(this.min) && !this.tickAmount && (e = !0, this.min -= .5, this.max += .5), this.single = e, !s && !o && this.adjustTickAmount())
        },
        trimTicks: function(t, e, i) {
            var s = t[0],
                o = t[t.length - 1],
                n = this.minPointOffset || 0;
            if (e) this.min = s;
            else
                for (; this.min - n > t[0];) t.shift();
            if (i) this.max = o;
            else
                for (; this.max + n < t[t.length - 1];) t.pop();
            0 === t.length && h(s) && t.push((o + s) / 2)
        },
        alignToOthers: function() {
            var t, e = {},
                i = this.options;
            return this.chart.options.chart.alignTicks !== !1 && i.alignTicks !== !1 && Nt(this.chart[this.coll], function(i) {
                var s = i.options,
                    s = [i.horiz ? s.left : s.top, s.width, s.height, s.pane].join(",");
                i.series.length && (e[s] ? t = !0 : e[s] = 1)
            }), t
        },
        getTickAmount: function() {
            var t = this.options,
                e = t.tickAmount,
                i = t.tickPixelInterval;
            !h(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = dt(this.len / i) + 1), e < 4 && (this.finalTickAmt = e, e = 5), this.tickAmount = e
        },
        adjustTickAmount: function() {
            var t = this.tickInterval,
                e = this.tickPositions,
                i = this.tickAmount,
                s = this.finalTickAmt,
                o = e && e.length;
            if (o < i) {
                for (; e.length < i;) e.push(T(e[e.length - 1] + t));
                this.transA *= (o - 1) / (i - 1), this.max = e[e.length - 1]
            } else o > i && (this.tickInterval *= 2, this.setTickPositions());
            if (h(s)) {
                for (t = i = e.length; t--;)(3 === s && t % 2 === 1 || s <= 2 && t > 0 && t < i - 1) && e.splice(t, 1);
                this.finalTickAmt = R
            }
        },
        setScale: function() {
            var t, e;
            this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, Nt(this.series, function(e) {
                (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
            }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(t, e, i, s, o) {
            var n = this,
                r = n.chart,
                i = ie(i, !0);
            Nt(n.series, function(t) {
                delete t.kdTree
            }), o = Qt(o, {
                min: t,
                max: e
            }), Kt(n, "setExtremes", o, function() {
                n.userMin = t, n.userMax = e, n.eventArgs = o, i && r.redraw(s)
            })
        },
        zoom: function(t, e) {
            var i = this.dataMin,
                s = this.dataMax,
                o = this.options,
                n = ut(i, ie(o.min, i)),
                o = pt(s, ie(o.max, s));
            return this.allowZoomOutside || (h(i) && t <= n && (t = n), h(s) && e >= o && (e = o)), this.displayBtn = t !== R || e !== R, this.setExtremes(t, e, !1, R, {
                trigger: "zoom"
            }), !0
        },
        setAxisSize: function() {
            var t = this.chart,
                e = this.options,
                i = e.offsetLeft || 0,
                s = this.horiz,
                o = ie(e.width, t.plotWidth - i + (e.offsetRight || 0)),
                n = ie(e.height, t.plotHeight),
                r = ie(e.top, t.plotTop),
                e = ie(e.left, t.plotLeft + i),
                i = /%$/;
            i.test(n) && (n = Math.round(parseFloat(n) / 100 * t.plotHeight)), i.test(r) && (r = Math.round(parseFloat(r) / 100 * t.plotHeight + t.plotTop)), this.left = e, this.top = r, this.width = o, this.height = n, this.bottom = t.chartHeight - n - r, this.right = t.chartWidth - o - e, this.len = pt(s ? o : n, 0), this.pos = s ? e : r
        },
        getExtremes: function() {
            var t = this.isLog,
                e = this.lin2log;
            return {
                min: t ? T(e(this.min)) : this.min,
                max: t ? T(e(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(t) {
            var e = this.isLog,
                i = this.lin2log,
                s = e ? i(this.min) : this.min,
                e = e ? i(this.max) : this.max;
            return null === t ? t = s : s > t ? t = s : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
        },
        autoLabelAlign: function(t) {
            return t = (ie(t, 0) - 90 * this.side + 720) % 360, t > 15 && t < 165 ? "right" : t > 195 && t < 345 ? "left" : "center"
        },
        tickSize: function(t) {
            var e = this.options,
                i = e[t + "Length"],
                s = ie(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
            if (s && i) return "inside" === e[t + "Position"] && (i = -i), [i, s]
        },
        labelMetrics: function() {
            return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
        },
        unsquish: function() {
            var t, e, i, s = this.options.labels,
                o = this.horiz,
                n = this.tickInterval,
                r = n,
                a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / n),
                l = s.rotation,
                c = this.labelMetrics(),
                d = Number.MAX_VALUE,
                p = function(t) {
                    return t /= a || 1, t = t > 1 ? dt(t) : 1, t * n
                };
            return o ? (i = !s.staggerLines && !s.step && (h(l) ? [l] : a < ie(s.autoRotationLimit, 80) && s.autoRotation)) && Nt(i, function(i) {
                var s;
                (i === l || i && i >= -90 && i <= 90) && (e = p(ft(c.h / mt(yt * i))), s = e + ft(i / 360), s < d && (d = s, t = i, r = e))
            }) : s.step || (r = p(c.h)), this.autoRotation = i, this.labelRotation = ie(t, l), r
        },
        getSlotWidth: function() {
            var t = this.chart,
                e = this.horiz,
                i = this.options.labels,
                s = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                o = t.margin[3];
            return e && (i.step || 0) < 2 && !i.rotation && (this.staggerLines || 1) * t.plotWidth / s || !e && (o && o - t.spacing[3] || .33 * t.chartWidth)
        },
        renderUnsquish: function() {
            var t, e, i, o = this.chart,
                r = o.renderer,
                a = this.tickPositions,
                h = this.ticks,
                l = this.options.labels,
                c = this.horiz,
                d = this.getSlotWidth(),
                p = pt(1, lt(d - 2 * (l.padding || 5))),
                u = {},
                f = this.labelMetrics(),
                g = l.style.textOverflow,
                m = 0;
            if (n(l.rotation) || (u.rotation = l.rotation || 0), Nt(a, function(t) {
                    (t = h[t]) && t.labelLength > m && (m = t.labelLength)
                }), this.maxLabelLength = m, this.autoRotation) m > p && m > f.h ? u.rotation = this.labelRotation : this.labelRotation = 0;
            else if (d && (t = {
                    width: p + "px"
                }, !g))
                for (t.textOverflow = "clip", e = a.length; !c && e--;) i = a[e], (p = h[i].label) && ("ellipsis" === p.styles.textOverflow ? p.css({
                    textOverflow: "clip"
                }) : h[i].labelLength > d && p.css({
                    width: d + "px"
                }), p.getBBox().height > this.len / a.length - (f.h - f.f) && (p.specCss = {
                    textOverflow: "ellipsis"
                }));
            u.rotation && (t = {
                width: (m > .5 * o.chartHeight ? .33 * o.chartHeight : o.chartHeight) + "px"
            }, !g) && (t.textOverflow = "ellipsis"), (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) && (u.align = this.labelAlign), Nt(a, function(e) {
                var i = (e = h[e]) && e.label;
                i && (i.attr(u), t && i.css(s(t, i.specCss)), delete i.specCss, e.rotation = u.rotation)
            }), this.tickRotCorr = r.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || h(this.min) && h(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var t, e, i, s, o = this,
                n = o.chart,
                r = n.renderer,
                a = o.options,
                l = o.tickPositions,
                c = o.ticks,
                d = o.horiz,
                p = o.side,
                u = n.inverted ? [1, 0, 3, 2][p] : p,
                f = 0,
                g = 0,
                m = a.title,
                x = a.labels,
                y = 0,
                v = o.opposite,
                b = n.axisOffset,
                n = n.clipOffset,
                k = [-1, 1, 1, -1][p],
                w = o.axisParent,
                A = this.tickSize("tick");
            if (t = o.hasData(), o.showAxis = e = t || ie(a.showEmpty, !0), o.staggerLines = o.horiz && x.staggerLines, o.axisGroup || (o.gridGroup = r.g("grid").attr({
                    zIndex: a.gridZIndex || 1
                }).add(w), o.axisGroup = r.g("axis").attr({
                    zIndex: a.zIndex || 2
                }).add(w), o.labelGroup = r.g("axis-labels").attr({
                    zIndex: x.zIndex || 7
                }).addClass("highcharts-" + o.coll.toLowerCase() + "-labels").add(w)), t || o.isLinked) Nt(l, function(t) {
                c[t] ? c[t].addLabel() : c[t] = new I(o, t)
            }), o.renderUnsquish(), x.reserveSpace !== !1 && (0 === p || 2 === p || {
                1: "left",
                3: "right"
            }[p] === o.labelAlign || "center" === o.labelAlign) && Nt(l, function(t) {
                y = pt(c[t].getLabelSize(), y)
            }), o.staggerLines && (y *= o.staggerLines, o.labelOffset = y * (o.opposite ? -1 : 1));
            else
                for (s in c) c[s].destroy(), delete c[s];
            m && m.text && m.enabled !== !1 && (o.axisTitle || ((s = m.textAlign) || (s = (d ? {
                low: "left",
                middle: "center",
                high: "right"
            } : {
                low: v ? "right" : "left",
                middle: "center",
                high: v ? "left" : "right"
            })[m.align]), o.axisTitle = r.text(m.text, 0, 0, m.useHTML).attr({
                zIndex: 7,
                rotation: m.rotation || 0,
                align: s
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(m.style).add(o.axisGroup), o.axisTitle.isNew = !0), e && (f = o.axisTitle.getBBox()[d ? "height" : "width"], i = m.offset, g = h(i) ? 0 : ie(m.margin, d ? 5 : 10)), o.axisTitle[e ? "show" : "hide"](!0)), o.offset = k * ie(a.offset, b[p]), o.tickRotCorr = o.tickRotCorr || {
                x: 0,
                y: 0
            }, r = 0 === p ? -o.labelMetrics().h : 2 === p ? o.tickRotCorr.y : 0, g = Math.abs(y) + g, y && (g -= r, g += k * (d ? ie(x.y, o.tickRotCorr.y + 8 * k) : x.x)), o.axisTitleMargin = ie(i, g), b[p] = pt(b[p], o.axisTitleMargin + f + k * o.offset, g, t && l.length && A ? A[0] : 0), a = a.offset ? 0 : 2 * ct(a.lineWidth / 2), n[u] = pt(n[u], a)
        },
        getLinePath: function(t) {
            var e = this.chart,
                i = this.opposite,
                s = this.offset,
                o = this.horiz,
                n = this.left + (i ? this.width : 0) + s,
                s = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
            return i && (t *= -1), e.renderer.crispLine([Rt, o ? this.left : n, o ? s : this.top, Xt, o ? e.chartWidth - this.right : n, o ? s : e.chartHeight - this.bottom], t)
        },
        getTitlePosition: function() {
            var t = this.horiz,
                e = this.left,
                i = this.top,
                s = this.len,
                o = this.options.title,
                n = t ? e : i,
                r = this.opposite,
                a = this.offset,
                h = o.x || 0,
                l = o.y || 0,
                c = this.chart.renderer.fontMetrics(o.style.fontSize).f,
                s = {
                    low: n + (t ? 0 : s),
                    middle: n + s / 2,
                    high: n + (t ? s : 0)
                }[o.align],
                e = (t ? i + this.height : e) + (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? c : 0);
            return {
                x: t ? s + h : e + (r ? this.width : 0) + a + h,
                y: t ? e + l - (r ? this.height : 0) + a : s + l
            }
        },
        render: function() {
            var t, e, i, s = this,
                o = s.chart,
                n = o.renderer,
                r = s.options,
                a = s.isLog,
                h = s.lin2log,
                l = s.isLinked,
                c = s.tickPositions,
                p = s.axisTitle,
                u = s.ticks,
                f = s.minorTicks,
                g = s.alternateBands,
                m = r.stackLabels,
                x = r.alternateGridColor,
                y = s.tickmarkOffset,
                v = r.lineWidth,
                b = o.hasRendered && ee(s.oldMin),
                k = s.showAxis,
                w = M(n.globalAnimation);
            s.labelEdge.length = 0, s.overlap = !1, Nt([u, f, g], function(t) {
                for (var e in t) t[e].isActive = !1
            }), (s.hasData() || l) && (s.minorTickInterval && !s.categories && Nt(s.getMinorTickPositions(), function(t) {
                f[t] || (f[t] = new I(s, t, "minor")), b && f[t].isNew && f[t].render(null, !0), f[t].render(null, !1, 1)
            }), c.length && (Nt(c, function(t, e) {
                (!l || t >= s.min && t <= s.max) && (u[t] || (u[t] = new I(s, t)), b && u[t].isNew && u[t].render(e, !0, .1), u[t].render(e))
            }), y && (0 === s.min || s.single)) && (u[-1] || (u[-1] = new I(s, (-1), null, (!0))), u[-1].render(-1)), x && Nt(c, function(t, n) {
                i = c[n + 1] !== R ? c[n + 1] + y : s.max - y, n % 2 === 0 && t < s.max && i <= s.max + (o.polar ? -y : y) && (g[t] || (g[t] = new rt.PlotLineOrBand(s)), e = t + y, g[t].options = {
                    from: a ? h(e) : e,
                    to: a ? h(i) : i,
                    color: x
                }, g[t].render(), g[t].isActive = !0)
            }), s._addedPlotLB || (Nt((r.plotLines || []).concat(r.plotBands || []), function(t) {
                s.addPlotBandOrLine(t)
            }), s._addedPlotLB = !0)), Nt([u, f, g], function(t) {
                var e, i, s = [],
                    n = w.duration;
                for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, s.push(e));
                d(function() {
                    for (i = s.length; i--;) t[s[i]] && !t[s[i]].isActive && (t[s[i]].destroy(), delete t[s[i]])
                }, t !== g && o.hasRendered && n ? n : 0)
            }), v && (t = s.getLinePath(v), s.axisLine ? s.axisLine.animate({
                d: t
            }) : s.axisLine = n.path(t).attr({
                stroke: r.lineColor,
                "stroke-width": v,
                zIndex: 7
            }).add(s.axisGroup), s.axisLine[k ? "show" : "hide"](!0)), p && k && (p[p.isNew ? "attr" : "animate"](s.getTitlePosition()), p.isNew = !1), m && m.enabled && s.renderStackTotals(), s.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), Nt(this.plotLinesAndBands, function(t) {
                t.render()
            })), Nt(this.series, function(t) {
                t.isDirty = !0
            })
        },
        destroy: function(t) {
            var e, i = this,
                s = i.stacks,
                o = i.plotLinesAndBands;
            t || Zt(i);
            for (e in s) A(s[e]), s[e] = null;
            for (Nt([i.ticks, i.minorTicks, i.alternateBands], function(t) {
                    A(t)
                }), t = o.length; t--;) o[t].destroy();
            Nt("stackTotalGroup,axisLine,axisTitle,axisGroup,gridGroup,labelGroup,cross".split(","), function(t) {
                i[t] && (i[t] = i[t].destroy())
            }), this._addedPlotLB = this.chart._labelPanes = this.ordinalSlope = void 0
        },
        drawCrosshair: function(t, e) {
            var i, s, o, n = this.crosshair;
            t || (t = this.cross && this.cross.e), this.crosshair && (h(e) || !ie(n.snap, !0)) !== !1 ? (ie(n.snap, !0) ? h(e) && (i = this.isXAxis ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : ie(e.stackY, e.y)) || null : this.getPlotLinePath(null, null, null, null, i) || null, null === i ? this.hideCrosshair() : (s = this.categories && !this.isRadial, o = ie(n.width, s ? this.transA : 1), this.cross ? this.cross.attr({
                d: i,
                visibility: "visible",
                "stroke-width": o
            }) : (s = {
                "pointer-events": "none",
                "stroke-width": o,
                stroke: n.color || (s ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                zIndex: ie(n.zIndex, 2)
            }, n.dashStyle && (s.dashstyle = n.dashStyle), this.cross = this.chart.renderer.path(i).attr(s).add()), this.cross.e = t)) : this.hideCrosshair()
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    }, Qt(ce.prototype, {
        getPlotBandPath: function(t, e) {
            var i = this.getPlotLinePath(e, null, null, !0),
                s = this.getPlotLinePath(t, null, null, !0);
            return s && i ? (s.flat = s.toString() === i.toString(), s.push(i[4], i[5], i[1], i[2])) : s = null, s
        },
        addPlotBand: function(t) {
            return this.addPlotBandOrLine(t, "plotBands")
        },
        addPlotLine: function(t) {
            return this.addPlotBandOrLine(t, "plotLines")
        },
        addPlotBandOrLine: function(t, e) {
            var i = new rt.PlotLineOrBand(this, t).render(),
                s = this.userOptions;
            return i && (e && (s[e] = s[e] || [], s[e].push(t)), this.plotLinesAndBands.push(i)), i
        },
        removePlotBandOrLine: function(t) {
            for (var e = this.plotLinesAndBands, i = this.options, s = this.userOptions, o = e.length; o--;) e[o].id === t && e[o].destroy();
            Nt([i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []], function(e) {
                for (o = e.length; o--;) e[o].id === t && a(e, e[o])
            })
        }
    }), ce.prototype.getTimeTicks = function(t, e, i, s) {
        var o, n = [],
            r = {},
            a = G.global.useUTC,
            l = new N(e - m(e)),
            c = t.unitRange,
            d = t.count;
        if (h(e)) {
            l[Q](c >= F.second ? 0 : d * ct(l.getMilliseconds() / d)), c >= F.second && l[tt](c >= F.minute ? 0 : d * ct(l.getSeconds() / d)), c >= F.minute && l[et](c >= F.hour ? 0 : d * ct(l[j]() / d)), c >= F.hour && l[it](c >= F.day ? 0 : d * ct(l[Z]() / d)), c >= F.day && l[st](c >= F.month ? 1 : d * ct(l[q]() / d)), c >= F.month && (l[ot](c >= F.year ? 0 : d * ct(l[$]() / d)), o = l[J]()), c >= F.year && (o -= o % d, l[nt](o)), c === F.week && l[st](l[q]() - l[K]() + ie(s, 1)), e = 1, (_ || U) && (l = l.getTime(), l = new N(l + m(l))), o = l[J]();
            for (var s = l.getTime(), p = l[$](), u = l[q](), f = !a || !!U, g = (F.day + (a ? m(l) : 6e4 * l.getTimezoneOffset())) % F.day; s < i;) n.push(s), c === F.year ? s = V(o + e * d, 0) : c === F.month ? s = V(o, p + e * d) : !f || c !== F.day && c !== F.week ? s += c * d : s = V(o, p, u + e * d * (c === F.day ? 1 : 7)), e++;
            n.push(s), Nt(Vt(n, function(t) {
                return c <= F.hour && t % F.day === g
            }), function(t) {
                r[t] = "day"
            })
        }
        return n.info = Qt(t, {
            higherRanks: r,
            totalRange: c * d
        }), n
    }, ce.prototype.normalizeTimeTickInterval = function(t, e) {
        var i, s = e || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ],
            o = s[s.length - 1],
            n = F[o[0]],
            r = o[1];
        for (i = 0; i < s.length && (o = s[i], n = F[o[0]], r = o[1], !(s[i + 1] && t <= (n * r[r.length - 1] + F[s[i + 1][0]]) / 2)); i++);
        return n === F.year && t < 5 * n && (r = [1, 2, 5]), s = v(t / n, r, "year" === o[0] ? pt(y(t / n), 1) : 1), {
            unitRange: n,
            count: s,
            unitName: o[0]
        }
    }, ce.prototype.getLogTickPositions = function(t, e, i, s) {
        var o = this.options,
            n = this.len,
            r = this.lin2log,
            a = this.log2lin,
            h = [];
        if (s || (this._minorAutoInterval = null), t >= .5) t = lt(t), h = this.getLinearTickPositions(t, e, i);
        else if (t >= .08)
            for (var l, c, d, p, u, n = ct(e), o = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < i + 1 && !u; n++)
                for (c = o.length, l = 0; l < c && !u; l++) d = a(r(n) * o[l]), d > e && (!s || p <= i) && p !== R && h.push(p), p > i && (u = !0), p = d;
        else e = r(e), i = r(i), t = o[s ? "minorTickInterval" : "tickInterval"], t = ie("auto" === t ? null : t, this._minorAutoInterval, (i - e) * (o.tickPixelInterval / (s ? 5 : 1)) / ((s ? n / this.tickPositions.length : n) || 1)), t = v(t, null, y(t)), h = Ut(this.getLinearTickPositions(t, e, i), a), s || (this._minorAutoInterval = t / 5);
        return s || (this.tickInterval = t), h
    }, ce.prototype.log2lin = function(t) {
        return ht.log(t) / ht.LN10
    }, ce.prototype.lin2log = function(t) {
        return ht.pow(10, t)
    };
    var de = rt.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    de.prototype = {
        init: function(t, e) {
            var i = e.borderWidth,
                s = e.style,
                n = o(s.padding);
            this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
            }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                padding: n,
                fill: e.backgroundColor,
                "stroke-width": i,
                r: e.borderRadius,
                zIndex: 8,
                display: "none"
            }).css(s).css({
                padding: 0
            }).add(), Lt || this.label.shadow(e.shadow), this.shared = e.shared
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
        },
        move: function(t, e, i, s) {
            var o = this,
                n = o.now,
                r = o.options.animation !== !1 && !o.isHidden && (ft(t - n.x) > 1 || ft(e - n.y) > 1),
                a = o.followPointer || o.len > 1;
            Qt(n, {
                x: r ? (2 * n.x + t) / 3 : t,
                y: r ? (n.y + e) / 2 : e,
                anchorX: a ? R : r ? (2 * n.anchorX + i) / 3 : i,
                anchorY: a ? R : r ? (n.anchorY + s) / 2 : s
            }), o.label.attr(n), r && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                o && o.move(t, e, i, s)
            }, 32))
        },
        hide: function(t) {
            var e = this;
            clearTimeout(this.hideTimer), t = ie(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = d(function() {
                e.label[t ? "fadeOut" : "hide"](), e.isHidden = !0
            }, t))
        },
        getAnchor: function(t, e) {
            var i, s, o, n = this.chart,
                r = n.inverted,
                a = n.plotTop,
                h = n.plotLeft,
                l = 0,
                d = 0,
                t = c(t);
            return i = t[0].tooltipPos, this.followPointer && e && (e.chartX === R && (e = n.pointer.normalize(e)), i = [e.chartX - n.plotLeft, e.chartY - a]), i || (Nt(t, function(t) {
                s = t.series.yAxis, o = t.series.xAxis, l += t.plotX + (!r && o ? o.left - h : 0), d += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && s ? s.top - a : 0)
            }), l /= t.length, d /= t.length, i = [r ? n.plotWidth - d : l, this.shared && !r && t.length > 1 && e ? e.chartY - a : r ? n.plotHeight - l : d]), Ut(i, lt)
        },
        getPosition: function(t, e, i) {
            var s, o = this.chart,
                n = this.distance,
                r = {},
                a = i.h || 0,
                h = ["y", o.chartHeight, e, i.plotY + o.plotTop, o.plotTop, o.plotTop + o.plotHeight],
                l = ["x", o.chartWidth, t, i.plotX + o.plotLeft, o.plotLeft, o.plotLeft + o.plotWidth],
                c = !this.followPointer && ie(i.ttBelow, !o.inverted == !!i.negative),
                d = function(t, e, i, s, o, h) {
                    var l = i < s - n,
                        d = s + n + i < e,
                        p = s - n - i;
                    if (s += n, c && d) r[t] = s;
                    else if (!c && l) r[t] = p;
                    else if (l) r[t] = ut(h - i, p - a < 0 ? p : p - a);
                    else {
                        if (!d) return !1;
                        r[t] = pt(o, s + a + i > e ? s : s + a)
                    }
                },
                p = function(t, e, i, s) {
                    var o;
                    return s < n || s > e - n ? o = !1 : r[t] = s < i / 2 ? 1 : s > e - i / 2 ? e - i - 2 : s - i / 2, o
                },
                u = function(t) {
                    var e = h;
                    h = l, l = e, s = t
                },
                f = function() {
                    d.apply(0, h) !== !1 ? p.apply(0, l) === !1 && !s && (u(!0), f()) : s ? r.x = r.y = 0 : (u(!0), f())
                };
            return (o.inverted || this.len > 1) && u(), f(), r
        },
        defaultFormatter: function(t) {
            var e, i = this.points || c(this);
            return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e.join("")
        },
        refresh: function(t, e) {
            var i, s, o, n, r = this.chart,
                a = this.label,
                h = this.options,
                l = {},
                d = [];
            n = h.formatter || this.defaultFormatter;
            var p, l = r.hoverPoints,
                u = this.shared;
            clearTimeout(this.hideTimer), this.followPointer = c(t)[0].series.tooltipOptions.followPointer, o = this.getAnchor(t, e), i = o[0], s = o[1], !u || t.series && t.series.noSharedTooltip ? l = t.getLabelConfig() : (r.hoverPoints = t, l && Nt(l, function(t) {
                t.setState()
            }), Nt(t, function(t) {
                t.setState("hover"), d.push(t.getLabelConfig())
            }), l = {
                x: t[0].category,
                y: t[0].y
            }, l.points = d, this.len = d.length, t = t[0]), n = n.call(l, this), l = t.series, this.distance = ie(l.tooltipOptions.distance, 16), n === !1 ? this.hide() : (this.isHidden && ($t(a), a.attr({
                opacity: 1,
                display: "block"
            }).show()), a.attr({
                text: n
            }), p = h.borderColor || t.color || l.color || "#606060", a.attr({
                stroke: p
            }), this.updatePosition({
                plotX: i,
                plotY: s,
                negative: t.negative,
                ttBelow: t.ttBelow,
                h: o[2] || 0
            }), this.isHidden = !1), Kt(r, "tooltipRefresh", {
                text: n,
                x: i + r.plotLeft,
                y: s + r.plotTop,
                borderColor: p
            })
        },
        updatePosition: function(t) {
            var e = this.chart,
                i = this.label,
                i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
            this.move(lt(i.x), lt(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
        },
        getXDateFormat: function(t, e, i) {
            var s, o, n, e = e.dateTimeLabelFormats,
                r = i && i.closestPointRange,
                a = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h = "millisecond";
            if (r) {
                n = Y("%m-%d %H:%M:%S.%L", t.x);
                for (o in F) {
                    if (r === F.week && +Y("%w", t.x) === i.options.startOfWeek && "00:00:00.000" === n.substr(6)) {
                        o = "week";
                        break
                    }
                    if (F[o] > r) {
                        o = h;
                        break
                    }
                    if (a[o] && n.substr(a[o]) !== "01-01 00:00:00.000".substr(a[o])) break;
                    "week" !== o && (h = o)
                }
                o && (s = e[o])
            } else s = e.day;
            return s || e.year
        },
        tooltipFooterHeaderFormatter: function(t, e) {
            var i = e ? "footer" : "header",
                s = t.series,
                o = s.tooltipOptions,
                n = o.xDateFormat,
                r = s.xAxis,
                a = r && "datetime" === r.options.type && ee(t.key),
                i = o[i + "Format"];
            return a && !n && (n = this.getXDateFormat(t, o, r)), a && n && (i = i.replace("{point.key}", "{point.key:" + n + "}")), x(i, {
                point: t,
                series: s
            })
        },
        bodyFormatter: function(t) {
            return Ut(t, function(t) {
                var e = t.series.tooltipOptions;
                return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
            })
        }
    };
    var pe;
    W = at && at.documentElement.ontouchstart !== R;
    var ue = rt.Pointer = function(t, e) {
        this.init(t, e)
    };
    if (ue.prototype = {
            init: function(t, e) {
                var i, s = e.chart,
                    o = s.events,
                    n = Lt ? "" : s.zoomType,
                    s = t.inverted;
                this.options = e, this.chart = t, this.zoomX = i = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = i && !s || n && s, this.zoomVert = n && !s || i && s, this.hasZoom = i || n, this.runChartClick = o && !!o.click, this.pinchDown = [], this.lastValidTouch = {}, rt.Tooltip && e.tooltip.enabled && (t.tooltip = new de(t, e.tooltip), this.followTouchMove = ie(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
            },
            normalize: function(e, i) {
                var s, o, e = e || t.event;
                return e.target || (e.target = e.srcElement), o = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e, i || (this.chartPosition = i = _t(this.chart.container)), o.pageX === R ? (s = pt(e.x, e.clientX - i.left), o = e.y) : (s = o.pageX - i.left, o = o.pageY - i.top), Qt(e, {
                    chartX: lt(s),
                    chartY: lt(o)
                })
            },
            getCoordinates: function(t) {
                var e = {
                    xAxis: [],
                    yAxis: []
                };
                return Nt(this.chart.axes, function(i) {
                    e[i.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: i,
                        value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                    })
                }), e
            },
            runPointActions: function(t) {
                var e, i, s, o, n = this.chart,
                    r = n.series,
                    a = n.tooltip,
                    h = !!a && a.shared,
                    l = !0,
                    c = n.hoverPoint,
                    d = n.hoverSeries,
                    p = [];
                if (!h && !d)
                    for (e = 0; e < r.length; e++) !r[e].directTouch && r[e].options.stickyTracking || (r = []);
                if (d && (h ? d.noSharedTooltip : d.directTouch) && c ? p = [c] : (!h && d && !d.options.stickyTracking && (r = [d]), Nt(r, function(e) {
                        i = e.noSharedTooltip && h, s = !h && e.directTouch, e.visible && !i && !s && ie(e.options.enableMouseTracking, !0) && (o = e.searchPoint(t, !i && 1 === e.kdDimensions)) && o.series && p.push(o)
                    }), p.sort(function(t, e) {
                        var i = t.distX - e.distX,
                            s = t.dist - e.dist,
                            o = t.series.group.zIndex > e.series.group.zIndex ? -1 : 1;
                        return 0 !== i ? i : 0 !== s ? s : o
                    })), h)
                    for (e = p.length; e--;)(p[e].clientX !== p[0].clientX || p[e].series.noSharedTooltip) && p.splice(e, 1);
                if (p[0] && (p[0] !== this.hoverPoint || a && a.isHidden)) {
                    if (h && !p[0].series.noSharedTooltip) {
                        for (e = 0; e >= 0; e--) p[e].onMouseOver(t, p[e] !== (d && d.directTouch && c || p[0]));
                        d && d.directTouch && c && c !== p[0] && c.onMouseOver(t, !1), p.length && a && a.refresh(p.sort(function(t, e) {
                            return t.series.index - e.series.index
                        }), t)
                    } else a && a.refresh(p[0], t), d && d.directTouch || p[0].onMouseOver(t);
                    this.prevKDPoint = p[0], l = !1
                }
                l && (r = d && d.tooltipOptions.followPointer, a && r && !a.isHidden && (r = a.getAnchor([{}], t), a.updatePosition({
                    plotX: r[0],
                    plotY: r[1]
                }))), this._onDocumentMouseMove || (this._onDocumentMouseMove = function(t) {
                    Bt[pe] && Bt[pe].pointer.onDocumentMouseMove(t)
                }, jt(at, "mousemove", this._onDocumentMouseMove)), Nt(h ? p : [ie(c, p[0])], function(e) {
                    Nt(n.axes, function(i) {
                        (!e || e.series && e.series[i.coll] === i) && i.drawCrosshair(t, e)
                    })
                })
            },
            reset: function(t, e) {
                var i = this.chart,
                    s = i.hoverSeries,
                    o = i.hoverPoint,
                    n = i.hoverPoints,
                    r = i.tooltip,
                    a = r && r.shared ? n : o;
                t && a && Nt(c(a), function(e) {
                    e.series.isCartesian && void 0 === e.plotX && (t = !1)
                }), t ? r && a && (r.refresh(a), o && (o.setState(o.state, !0), Nt(i.axes, function(t) {
                    t.crosshair && t.drawCrosshair(null, o)
                }))) : (o && o.onMouseOut(), n && Nt(n, function(t) {
                    t.setState()
                }), s && s.onMouseOut(), r && r.hide(e), this._onDocumentMouseMove && (Zt(at, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null), Nt(i.axes, function(t) {
                    t.hideCrosshair()
                }), this.hoverX = this.prevKDPoint = i.hoverPoints = i.hoverPoint = null)
            },
            scaleGroups: function(t, e) {
                var i, s = this.chart;
                Nt(s.series, function(o) {
                    i = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && (o.group.attr(i), o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? s.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(i))
                }), s.clipRect.attr(e || s.clipBox)
            },
            dragStart: function(t) {
                var e = this.chart;
                e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
            },
            drag: function(t) {
                var e, i = this.chart,
                    s = i.options.chart,
                    o = t.chartX,
                    n = t.chartY,
                    r = this.zoomHor,
                    a = this.zoomVert,
                    h = i.plotLeft,
                    l = i.plotTop,
                    c = i.plotWidth,
                    d = i.plotHeight,
                    p = this.selectionMarker,
                    u = this.mouseDownX,
                    f = this.mouseDownY,
                    g = s.panKey && t[s.panKey + "Key"];
                p && p.touch || (o < h ? o = h : o > h + c && (o = h + c), n < l ? n = l : n > l + d && (n = l + d), this.hasDragged = Math.sqrt(Math.pow(u - o, 2) + Math.pow(f - n, 2)), this.hasDragged > 10 && (e = i.isInsidePlot(u - h, f - l), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !p && (this.selectionMarker = p = i.renderer.rect(h, l, r ? 1 : c, a ? 1 : d, 0).attr({
                    fill: s.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add()), p && r && (o -= u, p.attr({
                    width: ft(o),
                    x: (o > 0 ? 0 : o) + u
                })), p && a && (o = n - f, p.attr({
                    height: ft(o),
                    y: (o > 0 ? 0 : o) + f
                })), e && !p && s.panning && i.pan(t, s.panning)))
            },
            drop: function(t) {
                var e = this,
                    i = this.chart,
                    s = this.hasPinched;
                if (this.selectionMarker) {
                    var o, n = {
                            originalEvent: t,
                            xAxis: [],
                            yAxis: []
                        },
                        r = this.selectionMarker,
                        a = r.attr ? r.attr("x") : r.x,
                        l = r.attr ? r.attr("y") : r.y,
                        c = r.attr ? r.attr("width") : r.width,
                        d = r.attr ? r.attr("height") : r.height;
                    (this.hasDragged || s) && (Nt(i.axes, function(i) {
                        if (i.zoomEnabled && h(i.min) && (s || e[{
                                xAxis: "zoomX",
                                yAxis: "zoomY"
                            }[i.coll]])) {
                            var r = i.horiz,
                                p = "touchend" === t.type ? i.minPixelPadding : 0,
                                u = i.toValue((r ? a : l) + p),
                                r = i.toValue((r ? a + c : l + d) - p);
                            n[i.coll].push({
                                axis: i,
                                min: ut(u, r),
                                max: pt(u, r)
                            }), o = !0
                        }
                    }), o && Kt(i, "selection", n, function(t) {
                        i.zoom(Qt(t, s ? {
                            animation: !1
                        } : null))
                    })), this.selectionMarker = this.selectionMarker.destroy(), s && this.scaleGroups()
                }
                i && (p(i.container, {
                    cursor: i._cursor
                }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function(t) {
                t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
            },
            onDocumentMouseUp: function(t) {
                Bt[pe] && Bt[pe].pointer.drop(t)
            },
            onDocumentMouseMove: function(t) {
                var e = this.chart,
                    i = this.chartPosition,
                    t = this.normalize(t, i);
                i && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
            },
            onContainerMouseLeave: function(t) {
                var e = Bt[pe];
                e && (t.relatedTarget || t.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
            },
            onContainerMouseMove: function(t) {
                var e = this.chart;
                h(pe) && Bt[pe] && Bt[pe].mouseIsDown || (pe = e.index), t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), (this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop)) && !e.openMenu && this.runPointActions(t)
            },
            inClass: function(t, e) {
                for (var i; t;) {
                    if (i = l(t, "class")) {
                        if (i.indexOf(e) !== -1) return !0;
                        if (i.indexOf("highcharts-container") !== -1) return !1
                    }
                    t = t.parentNode
                }
            },
            onTrackerMouseOut: function(t) {
                var e = this.chart.hoverSeries,
                    t = t.relatedTarget || t.toElement;
                !e || !t || e.options.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) || e.onMouseOut()
            },
            onContainerClick: function(t) {
                var e = this.chart,
                    i = e.hoverPoint,
                    s = e.plotLeft,
                    o = e.plotTop,
                    t = this.normalize(t);
                e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (Kt(i.series, "click", Qt(t, {
                    point: i
                })), e.hoverPoint && i.firePointEvent("click", t)) : (Qt(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - s, t.chartY - o) && Kt(e, "click", t)))
            },
            setDOMEvents: function() {
                var t = this,
                    e = t.chart.container;
                e.onmousedown = function(e) {
                    t.onContainerMouseDown(e)
                }, e.onmousemove = function(e) {
                    t.onContainerMouseMove(e)
                }, e.onclick = function(e) {
                    t.onContainerClick(e)
                }, jt(e, "mouseleave", t.onContainerMouseLeave), 1 === zt && jt(at, "mouseup", t.onDocumentMouseUp), W && (e.ontouchstart = function(e) {
                    t.onContainerTouchStart(e)
                }, e.ontouchmove = function(e) {
                    t.onContainerTouchMove(e)
                }, 1 === zt && jt(at, "touchend", t.onDocumentTouchEnd))
            },
            destroy: function() {
                var t;
                Zt(this.chart.container, "mouseleave", this.onContainerMouseLeave), zt || (Zt(at, "mouseup", this.onDocumentMouseUp), Zt(at, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
                for (t in this) this[t] = null
            }
        }, Qt(rt.Pointer.prototype, {
            pinchTranslate: function(t, e, i, s, o, n) {
                (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, s, o, n), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, s, o, n)
            },
            pinchTranslateDirection: function(t, e, i, s, o, n, r, a) {
                var h, l, c, d = this.chart,
                    p = t ? "x" : "y",
                    u = t ? "X" : "Y",
                    f = "chart" + u,
                    g = t ? "width" : "height",
                    m = d["plot" + (t ? "Left" : "Top")],
                    x = a || 1,
                    y = d.inverted,
                    v = d.bounds[t ? "h" : "v"],
                    b = 1 === e.length,
                    k = e[0][f],
                    w = i[0][f],
                    A = !b && e[1][f],
                    S = !b && i[1][f],
                    i = function() {
                        !b && ft(k - A) > 20 && (x = a || ft(w - S) / ft(k - A)), l = (m - w) / x + k, h = d["plot" + (t ? "Width" : "Height")] / x
                    };
                i(), e = l, e < v.min ? (e = v.min, c = !0) : e + h > v.max && (e = v.max - h, c = !0), c ? (w -= .8 * (w - r[p][0]), b || (S -= .8 * (S - r[p][1])), i()) : r[p] = [w, S], y || (n[p] = l - m, n[g] = h), n = y ? 1 / x : x, o[g] = h, o[p] = e, s[y ? t ? "scaleY" : "scaleX" : "scale" + u] = x, s["translate" + u] = n * m + (w - n * k)
            },
            pinch: function(t) {
                var e = this,
                    i = e.chart,
                    s = e.pinchDown,
                    o = t.touches,
                    n = o.length,
                    r = e.lastValidTouch,
                    a = e.hasZoom,
                    h = e.selectionMarker,
                    l = {},
                    c = 1 === n && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                    d = {};
                n > 1 && (e.initiated = !0), a && e.initiated && !c && t.preventDefault(), Ut(o, function(t) {
                    return e.normalize(t)
                }), "touchstart" === t.type ? (Nt(o, function(t, e) {
                    s[e] = {
                        chartX: t.chartX,
                        chartY: t.chartY
                    }
                }), r.x = [s[0].chartX, s[1] && s[1].chartX], r.y = [s[0].chartY, s[1] && s[1].chartY], Nt(i.axes, function(t) {
                    if (t.zoomEnabled) {
                        var e = i.bounds[t.horiz ? "h" : "v"],
                            s = t.minPixelPadding,
                            o = t.toPixels(ie(t.options.min, t.dataMin)),
                            n = t.toPixels(ie(t.options.max, t.dataMax)),
                            r = ut(o, n),
                            o = pt(o, n);
                        e.min = ut(t.pos, r - s),
                            e.max = pt(t.pos + t.len, o + s)
                    }
                }), e.res = !0) : s.length && (h || (e.selectionMarker = h = Qt({
                    destroy: Ot,
                    touch: !0
                }, i.plotBox)), e.pinchTranslate(s, o, l, h, d, r), e.hasPinched = a, e.scaleGroups(l, d), !a && e.followTouchMove && 1 === n ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
            },
            touch: function(t, e) {
                var i, s = this.chart;
                pe = s.index, 1 === t.touches.length ? (t = this.normalize(t), s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop) && !s.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (s = this.pinchDown, i = !!s[0] && Math.sqrt(Math.pow(s[0].chartX - t.chartX, 2) + Math.pow(s[0].chartY - t.chartY, 2)) >= 4), ie(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
            },
            onContainerTouchStart: function(t) {
                this.touch(t, !0)
            },
            onContainerTouchMove: function(t) {
                this.touch(t)
            },
            onDocumentTouchEnd: function(t) {
                Bt[pe] && Bt[pe].pointer.drop(t)
            }
        }), t.PointerEvent || t.MSPointerEvent) {
        var fe = {},
            ge = !!t.PointerEvent,
            me = function() {
                var t, e = [];
                e.item = function(t) {
                    return this[t]
                };
                for (t in fe) fe.hasOwnProperty(t) && e.push({
                    pageX: fe[t].pageX,
                    pageY: fe[t].pageY,
                    target: fe[t].target
                });
                return e
            },
            xe = function(t, e, i, s) {
                "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !Bt[pe] || (s(t), s = Bt[pe].pointer, s[e]({
                    type: i,
                    target: t.currentTarget,
                    preventDefault: Ot,
                    touches: me()
                }))
            };
        Qt(ue.prototype, {
            onContainerPointerDown: function(t) {
                xe(t, "onContainerTouchStart", "touchstart", function(t) {
                    fe[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        target: t.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(t) {
                xe(t, "onContainerTouchMove", "touchmove", function(t) {
                    fe[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }, fe[t.pointerId].target || (fe[t.pointerId].target = t.currentTarget)
                })
            },
            onDocumentPointerUp: function(t) {
                xe(t, "onDocumentTouchEnd", "touchend", function(t) {
                    delete fe[t.pointerId]
                })
            },
            batchMSEvents: function(t) {
                t(this.chart.container, ge ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, ge ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(at, ge ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        }), se(ue.prototype, "init", function(t, e, i) {
            t.call(this, e, i), this.hasZoom && p(e.container, {
                "-ms-touch-action": "none",
                "touch-action": "none"
            })
        }), se(ue.prototype, "setDOMEvents", function(t) {
            t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(jt)
        }), se(ue.prototype, "destroy", function(t) {
            this.batchMSEvents(Zt), t.call(this)
        })
    }
    var ye = rt.Legend = function(t, e) {
        this.init(t, e)
    };
    ye.prototype = {
        init: function(t, e) {
            var i = this,
                o = e.itemStyle,
                n = e.itemMarginTop || 0;
            this.options = e, e.enabled && (i.itemStyle = o, i.itemHiddenStyle = s(o, e.itemHiddenStyle), i.itemMarginTop = n, i.padding = o = ie(e.padding, 8), i.initialItemX = o, i.initialItemY = o - 5, i.maxItemWidth = 0, i.chart = t, i.itemHeight = 0, i.symbolWidth = ie(e.symbolWidth, 16), i.pages = [], i.render(), jt(i.chart, "endResize", function() {
                i.positionCheckboxes()
            }))
        },
        colorizeItem: function(t, e) {
            var i, s = this.options,
                o = t.legendItem,
                n = t.legendLine,
                r = t.legendSymbol,
                a = this.itemHiddenStyle.color,
                s = e ? s.itemStyle.color : a,
                h = e ? t.legendColor || t.color || "#CCC" : a,
                a = t.options && t.options.marker,
                l = {
                    fill: h
                };
            if (o && o.css({
                    fill: s,
                    color: s
                }), n && n.attr({
                    stroke: h
                }), r) {
                if (a && r.isMarker)
                    for (i in l.stroke = h, a = t.convertAttribs(a)) o = a[i], o !== R && (l[i] = o);
                r.attr(l)
            }
        },
        positionItem: function(t) {
            var e = this.options,
                i = e.symbolPadding,
                e = !e.rtl,
                s = t._legendItemPos,
                o = s[0],
                s = s[1],
                n = t.checkbox;
            (t = t.legendGroup) && t.element && t.translate(e ? o : this.legendWidth - o - 2 * i - 4, s), n && (n.x = o, n.y = s)
        },
        destroyItem: function(t) {
            var e = t.checkbox;
            Nt(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
                t[e] && (t[e] = t[e].destroy())
            }), e && S(t.checkbox)
        },
        destroy: function() {
            var t = this.group,
                e = this.box;
            e && (this.box = e.destroy()), t && (this.group = t.destroy())
        },
        positionCheckboxes: function(t) {
            var e, i = this.group.alignAttr,
                s = this.clipHeight || this.legendHeight,
                o = this.titleHeight;
            i && (e = i.translateY, Nt(this.allItems, function(n) {
                var r, a = n.checkbox;
                a && (r = e + o + a.y + (t || 0) + 3, p(a, {
                    left: i.translateX + n.checkboxOffset + a.x - 20 + "px",
                    top: r + "px",
                    display: r > e - 6 && r < e + s - 6 ? "" : "none"
                }))
            }))
        },
        renderTitle: function() {
            var t = this.padding,
                e = this.options.title,
                i = 0;
            e.text && (this.title || (this.title = this.chart.renderer.label(e.text, t - 3, t - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(e.style).add(this.group)), t = this.title.getBBox(), i = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                translateY: i
            })), this.titleHeight = i
        },
        setText: function(t) {
            var e = this.options;
            t.legendItem.attr({
                text: e.labelFormat ? x(e.labelFormat, t) : e.labelFormatter.call(t)
            })
        },
        renderItem: function(t) {
            var e = this.chart,
                i = e.renderer,
                o = this.options,
                n = "horizontal" === o.layout,
                r = this.symbolWidth,
                a = o.symbolPadding,
                h = this.itemStyle,
                l = this.itemHiddenStyle,
                c = this.padding,
                d = n ? ie(o.itemDistance, 20) : 0,
                p = !o.rtl,
                u = o.width,
                f = o.itemMarginBottom || 0,
                g = this.itemMarginTop,
                m = this.initialItemX,
                x = t.legendItem,
                y = t.series && t.series.drawLegendSymbol ? t.series : t,
                v = y.options,
                v = this.createCheckboxForItem && v && v.showCheckbox,
                b = o.useHTML;
            x || (t.legendGroup = i.g("legend-item").attr({
                zIndex: 1
            }).add(this.scrollGroup), t.legendItem = x = i.text("", p ? r + a : -a, this.baseline || 0, b).css(s(t.visible ? h : l)).attr({
                align: p ? "left" : "right",
                zIndex: 2
            }).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(h.fontSize, x), this.baseline = this.fontMetrics.f + 3 + g, x.attr("y", this.baseline)), y.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, x, b, h, l), v && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), this.setText(t), i = x.getBBox(), r = t.checkboxOffset = o.itemWidth || t.legendItemWidth || r + a + i.width + d + (v ? 20 : 0), this.itemHeight = a = lt(t.legendItemHeight || i.height), n && this.itemX - m + r > (u || e.chartWidth - 2 * c - m - o.x) && (this.itemX = m, this.itemY += g + this.lastLineHeight + f, this.lastLineHeight = 0), this.maxItemWidth = pt(this.maxItemWidth, r), this.lastItemY = g + this.itemY + f, this.lastLineHeight = pt(a, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], n ? this.itemX += r : (this.itemY += g + a + f, this.lastLineHeight = a), this.offsetWidth = u || pt((n ? this.itemX - m - d : r) + c, this.offsetWidth)
        },
        getAllItems: function() {
            var t = [];
            return Nt(this.chart.series, function(e) {
                var i = e.options;
                ie(i.showInLegend, !h(i.linkedTo) && R, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
            }), t
        },
        adjustMargins: function(t, e) {
            var i = this.chart,
                s = this.options,
                o = s.align.charAt(0) + s.verticalAlign.charAt(0) + s.layout.charAt(0);
            s.floating || Nt([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(n, r) {
                n.test(o) && !h(t[r]) && (i[Ht[r]] = pt(i[Ht[r]], i.legend[(r + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][r] * s[r % 2 ? "x" : "y"] + ie(s.margin, 12) + e[r]))
            })
        },
        render: function() {
            var t, e, i, s, o = this,
                n = o.chart,
                r = n.renderer,
                a = o.group,
                h = o.box,
                l = o.options,
                c = o.padding,
                d = l.borderWidth,
                p = l.backgroundColor;
            o.itemX = o.initialItemX, o.itemY = o.initialItemY, o.offsetWidth = 0, o.lastItemY = 0, a || (o.group = a = r.g("legend").attr({
                zIndex: 7
            }).add(), o.contentGroup = r.g().attr({
                zIndex: 1
            }).add(a), o.scrollGroup = r.g().add(o.contentGroup)), o.renderTitle(), t = o.getAllItems(), b(t, function(t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
            }), l.reversed && t.reverse(), o.allItems = t, o.display = e = !!t.length, o.lastLineHeight = 0, Nt(t, function(t) {
                o.renderItem(t)
            }), i = (l.width || o.offsetWidth) + c, s = o.lastItemY + o.lastLineHeight + o.titleHeight, s = o.handleOverflow(s), s += c, (d || p) && (h ? i > 0 && s > 0 && (h[h.isNew ? "attr" : "animate"](h.crisp({
                width: i,
                height: s
            })), h.isNew = !1) : (o.box = h = r.rect(0, 0, i, s, l.borderRadius, d || 0).attr({
                stroke: l.borderColor,
                "stroke-width": d || 0,
                fill: p || "none"
            }).add(a).shadow(l.shadow), h.isNew = !0), h[e ? "show" : "hide"]()), o.legendWidth = i, o.legendHeight = s, Nt(t, function(t) {
                o.positionItem(t)
            }), e && a.align(Qt({
                width: i,
                height: s
            }, l), !0, "spacingBox"), n.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(t) {
            var e, i, s = this,
                o = this.chart,
                n = o.renderer,
                r = this.options,
                a = r.y,
                a = o.spacingBox.height + ("top" === r.verticalAlign ? -a : a) - this.padding,
                h = r.maxHeight,
                l = this.clipRect,
                c = r.navigation,
                d = ie(c.animation, !0),
                p = c.arrowSize || 12,
                u = this.nav,
                f = this.pages,
                g = this.padding,
                m = this.allItems,
                x = function(t) {
                    l.attr({
                        height: t
                    }), s.contentGroup.div && (s.contentGroup.div.style.clip = "rect(" + g + "px,9999px," + (g + t) + "px,0)")
                };
            return "horizontal" === r.layout && (a /= 2), h && (a = ut(a, h)), f.length = 0, t > a && c.enabled !== !1 ? (this.clipHeight = e = pt(a - 20 - this.titleHeight - g, 0), this.currentPage = ie(this.currentPage, 1), this.fullHeight = t, Nt(m, function(t, s) {
                var o = t._legendItemPos[1],
                    n = lt(t.legendItem.getBBox().height),
                    r = f.length;
                (!r || o - f[r - 1] > e && (i || o) !== f[r - 1]) && (f.push(i || o), r++), s === m.length - 1 && o + n - f[r - 1] > e && f.push(o), o !== i && (i = o)
            }), l || (l = s.clipRect = n.clipRect(0, g, 9999, 0), s.contentGroup.clip(l)), x(e), u || (this.nav = u = n.g().attr({
                zIndex: 1
            }).add(this.group), this.up = n.symbol("triangle", 0, 0, p, p).on("click", function() {
                s.scroll(-1, d)
            }).add(u), this.pager = n.text("", 15, 10).css(c.style).add(u), this.down = n.symbol("triangle-down", 0, 0, p, p).on("click", function() {
                s.scroll(1, d)
            }).add(u)), s.scroll(0), t = a) : u && (x(o.chartHeight), u.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0), t
        },
        scroll: function(t, e) {
            var i = this.pages,
                s = i.length,
                o = this.currentPage + t,
                n = this.clipHeight,
                r = this.options.navigation,
                a = r.activeColor,
                r = r.inactiveColor,
                h = this.pager,
                l = this.padding;
            o > s && (o = s), o > 0 && (e !== R && P(e, this.chart), this.nav.attr({
                translateX: l,
                translateY: n + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === o ? r : a
            }).css({
                cursor: 1 === o ? "default" : "pointer"
            }), h.attr({
                text: o + "/" + s
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: o === s ? r : a
            }).css({
                cursor: o === s ? "default" : "pointer"
            }), i = -i[o - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: i
            }), this.currentPage = o, this.positionCheckboxes(i))
        }
    }, he = rt.LegendSymbolMixin = {
        drawRectangle: function(t, e) {
            var i = t.options.symbolHeight || t.fontMetrics.f;
            e.legendSymbol = this.chart.renderer.rect(0, t.baseline - i + 1, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(e.legendGroup)
        },
        drawLineMarker: function(t) {
            var e, i = this.options,
                s = i.marker,
                o = t.symbolWidth,
                n = this.chart.renderer,
                r = this.legendGroup,
                t = t.baseline - lt(.3 * t.fontMetrics.b);
            i.lineWidth && (e = {
                "stroke-width": i.lineWidth
            }, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = n.path([Rt, 0, t, Xt, o, t]).attr(e).add(r)), s && s.enabled !== !1 && (i = s.radius, this.legendSymbol = s = n.symbol(this.symbol, o / 2 - i, t - i, 2 * i, 2 * i, s).add(r), s.isMarker = !0)
        }
    }, (/Trident\/7\.0/.test(vt) || St) && se(ye.prototype, "positionItem", function(t, e) {
        var i = this,
            s = function() {
                e._legendItemPos && t.call(i, e)
            };
        s(), setTimeout(s)
    });
    var ve = rt.Chart = function() {
        this.getArgs.apply(this, arguments)
    };
    rt.chart = function(t, e, i) {
        return new ve(t, e, i)
    }, ve.prototype = {
        callbacks: [],
        getArgs: function() {
            var t = [].slice.call(arguments);
            (n(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
        },
        init: function(t, e) {
            var i, o = t.series;
            t.series = null, i = s(G, t), i.series = t.series = o, this.userOptions = t, o = i.chart, this.margin = this.splashArray("margin", o), this.spacing = this.splashArray("spacing", o);
            var n = o.events;
            this.bounds = {
                h: {},
                v: {}
            }, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = o.showAxes;
            var r, a = this;
            if (a.index = Bt.length, Bt.push(a), zt++, o.reflow !== !1 && jt(a, "load", function() {
                    a.initReflow()
                }), n)
                for (r in n) jt(a, r, n[r]);
            a.xAxis = [], a.yAxis = [], a.animation = !Lt && ie(o.animation, !0), a.pointCount = a.colorCounter = a.symbolCounter = 0, a.firstRender()
        },
        initSeries: function(t) {
            var i = this.options.chart;
            return (i = Gt[t.type || i.type || i.defaultSeriesType]) || e(17, !0), i = new i, i.init(this, t), i
        },
        isInsidePlot: function(t, e, i) {
            var s = i ? e : t,
                t = i ? t : e;
            return s >= 0 && s <= this.plotWidth && t >= 0 && t <= this.plotHeight
        },
        redraw: function(t) {
            var e, i, s = this.axes,
                o = this.series,
                n = this.pointer,
                r = this.legend,
                a = this.isDirtyLegend,
                h = this.hasCartesianSeries,
                l = this.isDirtyBox,
                c = o.length,
                d = c,
                p = this.renderer,
                u = p.isHidden(),
                f = [];
            for (P(t, this), u && this.cloneRenderTo(), this.layOutTitles(); d--;)
                if (t = o[d], t.options.stacking && (e = !0, t.isDirty)) {
                    i = !0;
                    break
                }
            if (i)
                for (d = c; d--;) t = o[d], t.options.stacking && (t.isDirty = !0);
            Nt(o, function(t) {
                t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), a = !0), t.isDirtyData && Kt(t, "updatedData")
            }), a && r.options.enabled && (r.render(), this.isDirtyLegend = !1), e && this.getStacks(), h && !this.isResizing && (this.maxTicks = null, Nt(s, function(t) {
                t.updateNames(), t.setScale()
            })), this.getMargins(), h && (Nt(s, function(t) {
                t.isDirty && (l = !0)
            }), Nt(s, function(t) {
                var i = t.min + "," + t.max;
                t.extKey !== i && (t.extKey = i, f.push(function() {
                    Kt(t, "afterSetExtremes", Qt(t.eventArgs, t.getExtremes())), delete t.eventArgs
                })), (l || e) && t.redraw()
            })), l && this.drawChartBox(), Nt(o, function(t) {
                t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
            }), n && n.reset(!0), p.draw(), Kt(this, "redraw"), u && this.cloneRenderTo(!0), Nt(f, function(t) {
                t.call()
            })
        },
        get: function(t) {
            var e, i, s = this.axes,
                o = this.series;
            for (e = 0; e < s.length; e++)
                if (s[e].options.id === t) return s[e];
            for (e = 0; e < o.length; e++)
                if (o[e].options.id === t) return o[e];
            for (e = 0; e < o.length; e++)
                for (i = o[e].points || [], s = 0; s < i.length; s++)
                    if (i[s].id === t) return i[s];
            return null
        },
        getAxes: function() {
            var t = this,
                e = this.options,
                i = e.xAxis = c(e.xAxis || {}),
                e = e.yAxis = c(e.yAxis || {});
            Nt(i, function(t, e) {
                t.index = e, t.isX = !0
            }), Nt(e, function(t, e) {
                t.index = e
            }), i = i.concat(e), Nt(i, function(e) {
                new ce(t, e)
            })
        },
        getSelectedPoints: function() {
            var t = [];
            return Nt(this.series, function(e) {
                t = t.concat(Vt(e.points || [], function(t) {
                    return t.selected
                }))
            }), t
        },
        getSelectedSeries: function() {
            return Vt(this.series, function(t) {
                return t.selected
            })
        },
        setTitle: function(t, e, i) {
            var o, n, r = this,
                a = r.options;
            n = a.title = s(a.title, t), o = a.subtitle = s(a.subtitle, e), a = o, Nt([
                ["title", t, n],
                ["subtitle", e, a]
            ], function(t) {
                var e = t[0],
                    i = r[e],
                    s = t[1],
                    t = t[2];
                i && s && (r[e] = i = i.destroy()), t && t.text && !i && (r[e] = r.renderer.text(t.text, 0, 0, t.useHTML).attr({
                    align: t.align,
                    "class": "highcharts-" + e,
                    zIndex: t.zIndex || 4
                }).css(t.style).add())
            }), r.layOutTitles(i)
        },
        layOutTitles: function(t) {
            var e = 0,
                i = this.title,
                s = this.subtitle,
                o = this.options,
                n = o.title,
                o = o.subtitle,
                r = this.renderer,
                a = this.spacingBox;
            !i || (i.css({
                width: (n.width || a.width + n.widthAdjust) + "px"
            }).align(Qt({
                y: r.fontMetrics(n.style.fontSize, i).b - 3
            }, n), !1, a), n.floating || n.verticalAlign) || (e = i.getBBox().height), s && (s.css({
                width: (o.width || a.width + o.widthAdjust) + "px"
            }).align(Qt({
                y: e + (n.margin - 13) + r.fontMetrics(o.style.fontSize, i).b
            }, o), !1, a), !o.floating && !o.verticalAlign && (e = dt(e + s.getBBox().height))), i = this.titleOffset !== e, this.titleOffset = e, !this.isDirtyBox && i && (this.isDirtyBox = i, this.hasRendered && ie(t, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var t = this.options.chart,
                e = t.width,
                t = t.height,
                i = this.renderToClone || this.renderTo;
            h(e) || (this.containerWidth = Yt(i, "width")), h(t) || (this.containerHeight = Yt(i, "height")), this.chartWidth = pt(0, e || this.containerWidth || 600), this.chartHeight = pt(0, ie(t, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(t) {
            var e = this.renderToClone,
                i = this.container;
            if (t) {
                if (e) {
                    for (; e.childNodes.length;) this.renderTo.appendChild(e.firstChild);
                    S(e), delete this.renderToClone
                }
            } else i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), p(e, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), e.style.setProperty && e.style.setProperty("display", "block", "important"), at.body.appendChild(e), i && e.appendChild(i)
        },
        getContainer: function() {
            var t, i, s, r = this.options,
                a = r.chart;
            t = this.renderTo;
            var h = "highcharts-" + It++;
            t || (this.renderTo = t = a.renderTo), n(t) && (this.renderTo = t = at.getElementById(t)), t || e(13, !0), i = o(l(t, "data-highcharts-chart")), ee(i) && Bt[i] && Bt[i].hasRendered && Bt[i].destroy(), l(t, "data-highcharts-chart", this.index), t.innerHTML = "", !a.skipClone && !t.offsetWidth && this.cloneRenderTo(), this.getChartSize(), i = this.chartWidth, s = this.chartHeight, this.container = t = u(Et, {
                className: "highcharts-container" + (a.className ? " " + a.className : ""),
                id: h
            }, Qt({
                position: "relative",
                overflow: "hidden",
                width: i + "px",
                height: s + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, a.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = new(rt[a.renderer] || X)(t, i, s, a.style, a.forExport, r.exporting && r.exporting.allowHTML), Lt && this.renderer.create(this, t, i, s), this.renderer.chartIndex = this.index
        },
        getMargins: function(t) {
            var e = this.spacing,
                i = this.margin,
                s = this.titleOffset;
            this.resetMargins(), s && !h(i[0]) && (this.plotTop = pt(this.plotTop, s + this.options.title.margin + e[0])), this.legend.display && this.legend.adjustMargins(i, e), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var t = this,
                e = t.axisOffset = [0, 0, 0, 0],
                i = t.margin;
            t.hasCartesianSeries && Nt(t.axes, function(t) {
                t.visible && t.getOffset()
            }), Nt(Ht, function(s, o) {
                h(i[o]) || (t[s] += e[o])
            }), t.setChartSize()
        },
        reflow: function(e) {
            var i = this,
                s = i.options.chart,
                o = i.renderTo,
                n = h(s.width),
                r = s.width || Yt(o, "width"),
                s = s.height || Yt(o, "height"),
                o = e ? e.target : t;
            n || i.isPrinting || !r || !s || o !== t && o !== at || (r === i.containerWidth && s === i.containerHeight || (clearTimeout(i.reflowTimeout), i.reflowTimeout = d(function() {
                i.container && i.setSize(void 0, void 0, !1)
            }, e ? 100 : 0)), i.containerWidth = r, i.containerHeight = s)
        },
        initReflow: function() {
            var e = this,
                i = function(t) {
                    e.reflow(t)
                };
            jt(t, "resize", i), jt(e, "destroy", function() {
                Zt(t, "resize", i)
            })
        },
        setSize: function(t, e, i) {
            var s = this,
                o = s.renderer;
            s.isResizing += 1, P(i, s), s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize(), t = o.globalAnimation, (t ? qt : p)(s.container, {
                width: s.chartWidth + "px",
                height: s.chartHeight + "px"
            }, t), s.setChartSize(!0), o.setSize(s.chartWidth, s.chartHeight, i), s.maxTicks = null, Nt(s.axes, function(t) {
                t.isDirty = !0, t.setScale()
            }), Nt(s.series, function(t) {
                t.isDirty = !0
            }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(i), s.oldChartHeight = null, Kt(s, "resize"), d(function() {
                s && Kt(s, "endResize", null, function() {
                    s.isResizing -= 1
                })
            }, M(t).duration)
        },
        setChartSize: function(t) {
            var e, i, s, o, n = this.inverted,
                r = this.renderer,
                a = this.chartWidth,
                h = this.chartHeight,
                l = this.options.chart,
                c = this.spacing,
                d = this.clipOffset;
            this.plotLeft = e = lt(this.plotLeft), this.plotTop = i = lt(this.plotTop), this.plotWidth = s = pt(0, lt(a - e - this.marginRight)), this.plotHeight = o = pt(0, lt(h - i - this.marginBottom)), this.plotSizeX = n ? o : s, this.plotSizeY = n ? s : o, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
                x: c[3],
                y: c[0],
                width: a - c[3] - c[1],
                height: h - c[0] - c[2]
            }, this.plotBox = r.plotBox = {
                x: e,
                y: i,
                width: s,
                height: o
            }, a = 2 * ct(this.plotBorderWidth / 2), n = dt(pt(a, d[3]) / 2), r = dt(pt(a, d[0]) / 2), this.clipBox = {
                x: n,
                y: r,
                width: ct(this.plotSizeX - pt(a, d[1]) / 2 - n),
                height: pt(0, ct(this.plotSizeY - pt(a, d[2]) / 2 - r))
            }, t || Nt(this.axes, function(t) {
                t.setAxisSize(), t.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var t = this;
            Nt(Ht, function(e, i) {
                t[e] = ie(t.margin[i], t.spacing[i])
            }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var t, e = this.options.chart,
                i = this.renderer,
                s = this.chartWidth,
                o = this.chartHeight,
                n = this.chartBackground,
                r = this.plotBackground,
                a = this.plotBorder,
                h = this.plotBGImage,
                l = e.borderWidth || 0,
                c = e.backgroundColor,
                d = e.plotBackgroundColor,
                p = e.plotBackgroundImage,
                u = e.plotBorderWidth || 0,
                f = this.plotLeft,
                g = this.plotTop,
                m = this.plotWidth,
                x = this.plotHeight,
                y = this.plotBox,
                v = this.clipRect,
                b = this.clipBox;
            t = l + (e.shadow ? 8 : 0), (l || c) && (n ? n.animate(n.crisp({
                width: s - t,
                height: o - t
            })) : (n = {
                fill: c || "none"
            }, l && (n.stroke = e.borderColor, n["stroke-width"] = l), this.chartBackground = i.rect(t / 2, t / 2, s - t, o - t, e.borderRadius, l).attr(n).addClass("highcharts-background").add().shadow(e.shadow))), d && (r ? r.animate(y) : this.plotBackground = i.rect(f, g, m, x, 0).attr({
                fill: d
            }).add().shadow(e.plotShadow)), p && (h ? h.animate(y) : this.plotBGImage = i.image(p, f, g, m, x).add()), v ? v.animate({
                width: b.width,
                height: b.height
            }) : this.clipRect = i.clipRect(b), u && (a ? (a.strokeWidth = -u, a.animate(a.crisp({
                x: f,
                y: g,
                width: m,
                height: x
            }))) : this.plotBorder = i.rect(f, g, m, x, 0, -u).attr({
                stroke: e.plotBorderColor,
                "stroke-width": u,
                fill: "none",
                zIndex: 1
            }).add()), this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var t, e, i, s = this,
                o = s.options.chart,
                n = s.options.series;
            Nt(["inverted", "angular", "polar"], function(r) {
                for (t = Gt[o.type || o.defaultSeriesType], i = s[r] || o[r] || t && t.prototype[r], e = n && n.length; !i && e--;)(t = Gt[n[e].type]) && t.prototype[r] && (i = !0);
                s[r] = i
            })
        },
        linkSeries: function() {
            var t = this,
                e = t.series;
            Nt(e, function(t) {
                t.linkedSeries.length = 0
            }), Nt(e, function(e) {
                var i = e.options.linkedTo;
                n(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = ie(e.options.visible, i.options.visible, e.visible))
            })
        },
        renderSeries: function() {
            Nt(this.series, function(t) {
                t.translate(), t.render()
            })
        },
        renderLabels: function() {
            var t = this,
                e = t.options.labels;
            e.items && Nt(e.items, function(i) {
                var s = Qt(e.style, i.style),
                    n = o(s.left) + t.plotLeft,
                    r = o(s.top) + t.plotTop + 12;
                delete s.left, delete s.top, t.renderer.text(i.html, n, r).attr({
                    zIndex: 2
                }).css(s).add()
            })
        },
        render: function() {
            var t, e, i, s, o = this.axes,
                n = this.renderer,
                r = this.options;
            this.setTitle(), this.legend = new ye(this, r.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), t = this.plotWidth, e = this.plotHeight -= 21, Nt(o, function(t) {
                t.setScale()
            }), this.getAxisMargins(), i = t / this.plotWidth > 1.1, s = e / this.plotHeight > 1.05, (i || s) && (this.maxTicks = null, Nt(o, function(t) {
                (t.horiz && i || !t.horiz && s) && t.setTickInterval(!0)
            }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && Nt(o, function(t) {
                t.visible && t.render()
            }), this.seriesGroup || (this.seriesGroup = n.g("series-group").attr({
                zIndex: 3
            }).add()), this.renderSeries(), this.renderLabels(), this.showCredits(r.credits), this.hasRendered = !0
        },
        showCredits: function(e) {
            e.enabled && !this.credits && (this.credits = this.renderer.text(e.text, 0, 0).on("click", function() {
                e.href && (t.location.href = e.href)
            }).attr({
                align: e.position.align,
                zIndex: 8
            }).css(e.style).add().align(e.position))
        },
        destroy: function() {
            var t, e = this,
                i = e.axes,
                s = e.series,
                o = e.container,
                n = o && o.parentNode;
            for (Kt(e, "destroy"), Bt[e.index] = R, zt--, e.renderTo.removeAttribute("data-highcharts-chart"), Zt(e), t = i.length; t--;) i[t] = i[t].destroy();
            for (t = s.length; t--;) s[t] = s[t].destroy();
            Nt("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(t) {
                var i = e[t];
                i && i.destroy && (e[t] = i.destroy())
            }), o && (o.innerHTML = "", Zt(o), n && S(o));
            for (t in e) delete e[t]
        },
        isReadyToRender: function() {
            var e = this;
            return !(!Mt && t == t.top && "complete" !== at.readyState || Lt && !t.canvg) || (Lt ? le.push(function() {
                e.firstRender()
            }, e.options.global.canvasToolsURL) : at.attachEvent("onreadystatechange", function() {
                at.detachEvent("onreadystatechange", e.firstRender), "complete" === at.readyState && e.firstRender()
            }), !1)
        },
        firstRender: function() {
            var t = this,
                e = t.options;
            t.isReadyToRender() && (t.getContainer(), Kt(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), Nt(e.series || [], function(e) {
                t.initSeries(e)
            }), t.linkSeries(), Kt(t, "beforeRender"), rt.Pointer && (t.pointer = new ue(t, e)), t.render(), t.renderer.draw(), !t.renderer.imgCount && t.onload && t.onload(), t.cloneRenderTo(!0))
        },
        onload: function() {
            var t = this;
            Nt([this.callback].concat(this.callbacks), function(e) {
                e && void 0 !== t.index && e.apply(t, [t])
            }), Kt(t, "load"), this.onload = null
        },
        splashArray: function(t, e) {
            var i = e[t],
                i = te(i) ? i : [i, i, i, i];
            return [ie(e[t + "Top"], i[0]), ie(e[t + "Right"], i[1]), ie(e[t + "Bottom"], i[2]), ie(e[t + "Left"], i[3])]
        }
    };
    var be = rt.CenteredSeriesMixin = {
            getCenter: function() {
                var t, e, i = this.options,
                    s = this.chart,
                    o = 2 * (i.slicedOffset || 0),
                    n = s.plotWidth - 2 * o,
                    s = s.plotHeight - 2 * o,
                    r = i.center,
                    r = [ie(r[0], "50%"), ie(r[1], "50%"), i.size || "100%", i.innerSize || 0],
                    a = ut(n, s);
                for (t = 0; t < 4; ++t) e = r[t], i = t < 2 || 2 === t && /%$/.test(e), r[t] = (/%$/.test(e) ? [n, s, a, r[2]][t] * parseFloat(e) / 100 : parseFloat(e)) + (i ? o : 0);
                return r[3] > r[2] && (r[3] = r[2]), r
            }
        },
        ke = function() {};
    ke.prototype = {
        init: function(t, e, i) {
            return this.series = t, this.color = t.color, this.applyOptions(e, i), this.pointAttr = {}, t.options.colorByPoint && (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter++], t.colorCounter === e.length) && (t.colorCounter = 0), t.chart.pointCount++, this
        },
        applyOptions: function(t, e) {
            var i = this.series,
                s = i.options.pointValKey || i.pointValKey,
                t = ke.prototype.optionsToObject.call(this, t);
            return Qt(this, t), this.options = this.options ? Qt(this.options, t) : t, t.group && delete this.group, s && (this.y = this[s]), this.isNull = ie(this.isValid && !this.isValid(), null === this.x || !ee(this.y, !0)), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i && (this.x = void 0 === e ? i.autoIncrement(this) : e), this
        },
        optionsToObject: function(t) {
            var e = {},
                i = this.series,
                s = i.options.keys,
                o = s || i.pointArrayMap || ["y"],
                n = o.length,
                a = 0,
                h = 0;
            if (ee(t) || null === t) e[o[0]] = t;
            else if (r(t))
                for (!s && t.length > n && (i = typeof t[0], "string" === i ? e.name = t[0] : "number" === i && (e.x = t[0]), a++); h < n;) s && void 0 === t[a] || (e[o[h]] = t[a]), a++, h++;
            else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
            return e
        },
        destroy: function() {
            var t, e = this.series.chart,
                i = e.hoverPoints;
            e.pointCount--, i && (this.setState(), a(i, this), !i.length) && (e.hoverPoints = null), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (Zt(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this);
            for (t in this) this[t] = null
        },
        destroyElements: function() {
            for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--;) t = e[i], this[t] && (this[t] = this[t].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(t) {
            var e = this.series,
                i = e.tooltipOptions,
                s = ie(i.valueDecimals, ""),
                o = i.valuePrefix || "",
                n = i.valueSuffix || "";
            return Nt(e.pointArrayMap || ["y"], function(e) {
                e = "{point." + e, (o || n) && (t = t.replace(e + "}", o + e + "}" + n)), t = t.replace(e + "}", e + ":,." + s + "f}")
            }), x(t, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(t, e, i) {
            var s = this,
                o = this.series.options;
            (o.point.events[t] || s.options && s.options.events && s.options.events[t]) && this.importEvents(), "click" === t && o.allowPointSelect && (i = function(t) {
                s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
            }), Kt(this, t, e, i)
        },
        visible: !0
    };
    var we = rt.Series = function() {};
    we.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: ke,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(t, e) {
            var i, s, o = this,
                n = t.series,
                r = function(t, e) {
                    return ie(t.options.index, t._i) - ie(e.options.index, e._i)
                };
            o.chart = t, o.options = e = o.setOptions(e), o.linkedSeries = [], o.bindAxes(), Qt(o, {
                name: e.name,
                state: "",
                pointAttr: {},
                visible: e.visible !== !1,
                selected: e.selected === !0
            }), Lt && (e.animation = !1), s = e.events;
            for (i in s) jt(o, i, s[i]);
            (s && s.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), Nt(o.parallelArrays, function(t) {
                o[t + "Data"] = []
            }), o.setData(e.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), n.push(o), o._i = n.length - 1, b(n, r), this.yAxis && b(this.yAxis.series, r), Nt(n, function(t, e) {
                t.index = e, t.name = t.name || "Series " + (e + 1)
            })
        },
        bindAxes: function() {
            var t, i = this,
                s = i.options,
                o = i.chart;
            Nt(i.axisTypes || [], function(n) {
                Nt(o[n], function(e) {
                    t = e.options, (s[n] === t.index || s[n] !== R && s[n] === t.id || s[n] === R && 0 === t.index) && (e.series.push(i), i[n] = e, e.isDirty = !0)
                }), !i[n] && i.optionalAxis !== n && e(18, !0)
            })
        },
        updateParallelArrays: function(t, e) {
            var i = t.series,
                s = arguments,
                o = ee(e) ? function(s) {
                    var o = "y" === s && i.toYData ? i.toYData(t) : t[s];
                    i[s + "Data"][e] = o
                } : function(t) {
                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(s, 2))
                };
            Nt(i.parallelArrays, o)
        },
        autoIncrement: function() {
            var t, e = this.options,
                i = this.xIncrement,
                s = e.pointIntervalUnit,
                i = ie(i, e.pointStart, 0);
            return this.pointInterval = t = ie(this.pointInterval, e.pointInterval, 1), s && (e = new N(i), "day" === s ? e = +e[st](e[q]() + t) : "month" === s ? e = +e[ot](e[$]() + t) : "year" === s && (e = +e[nt](e[J]() + t)), t = e - i), this.xIncrement = i + t, i
        },
        setOptions: function(t) {
            var e = this.chart,
                i = e.options.plotOptions,
                e = e.userOptions || {},
                o = e.plotOptions || {},
                n = i[this.type];
            return this.userOptions = t, i = s(n, i.series, t), this.tooltipOptions = s(G.tooltip, G.plotOptions[this.type].tooltip, e.tooltip, o.series && o.series.tooltip, o[this.type] && o[this.type].tooltip, t.tooltip), null === n.marker && delete i.marker, this.zoneAxis = i.zoneAxis, t = this.zones = (i.zones || []).slice(), !i.negativeColor && !i.negativeFillColor || i.zones || t.push({
                value: i[this.zoneAxis + "Threshold"] || i.threshold || 0,
                color: i.negativeColor,
                fillColor: i.negativeFillColor
            }), t.length && h(t[t.length - 1].value) && t.push({
                color: this.color,
                fillColor: this.fillColor
            }), i
        },
        getCyclic: function(t, e, i) {
            var s = this.userOptions,
                o = "_" + t + "Index",
                n = t + "Counter";
            e || (h(s[o]) ? e = s[o] : (s[o] = e = this.chart[n] % i.length, this.chart[n] += 1), e = i[e]), this[t] = e
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || oe[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var t = this.options.marker;
            this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
        },
        drawLegendSymbol: he.drawLineMarker,
        setData: function(t, i, s, o) {
            var a, h = this,
                l = h.points,
                c = l && l.length || 0,
                d = h.options,
                p = h.chart,
                u = null,
                f = h.xAxis,
                g = d.turboThreshold,
                m = this.xData,
                x = this.yData,
                y = (a = h.pointArrayMap) && a.length,
                t = t || [];
            if (a = t.length, i = ie(i, !0), o !== !1 && a && c === a && !h.cropped && !h.hasGroupedData && h.visible) Nt(t, function(t, e) {
                l[e].update && t !== d.data[e] && l[e].update(t, !1, null, !1)
            });
            else {
                if (h.xIncrement = null, h.colorCounter = 0, Nt(this.parallelArrays, function(t) {
                        h[t + "Data"].length = 0
                    }), g && a > g) {
                    for (s = 0; null === u && s < a;) u = t[s], s++;
                    if (ee(u))
                        for (s = 0; s < a; s++) m[s] = this.autoIncrement(), x[s] = t[s];
                    else if (r(u))
                        if (y)
                            for (s = 0; s < a; s++) u = t[s], m[s] = u[0], x[s] = u.slice(1, y + 1);
                        else
                            for (s = 0; s < a; s++) u = t[s], m[s] = u[0], x[s] = u[1];
                    else e(12)
                } else
                    for (s = 0; s < a; s++) t[s] !== R && (u = {
                        series: h
                    }, h.pointClass.prototype.applyOptions.apply(u, [t[s]]), h.updateParallelArrays(u, s));
                for (n(x[0]) && e(14, !0), h.data = [], h.options.data = h.userOptions.data = t, s = c; s--;) l[s] && l[s].destroy && l[s].destroy();
                f && (f.minRange = f.userMinRange), h.isDirty = h.isDirtyData = p.isDirtyBox = !0, s = !1
            }
            "point" === d.legendType && (this.processData(), this.generatePoints()), i && p.redraw(s)
        },
        processData: function(t) {
            var i, s = this.xData,
                o = this.yData,
                n = s.length;
            i = 0;
            var r, a, h, l = this.xAxis,
                c = this.options;
            h = c.cropThreshold;
            var d, p, u = this.getExtremesFromAll || c.getExtremesFromAll,
                f = this.isCartesian,
                c = l && l.val2lin,
                g = l && l.isLog;
            if (f && !this.isDirty && !l.isDirty && !this.yAxis.isDirty && !t) return !1;
            for (l && (t = l.getExtremes(), d = t.min, p = t.max), f && this.sorted && !u && (!h || n > h || this.forceCrop) && (s[n - 1] < d || s[0] > p ? (s = [], o = []) : (s[0] < d || s[n - 1] > p) && (i = this.cropData(this.xData, this.yData, d, p), s = i.xData, o = i.yData, i = i.start, r = !0)), h = s.length || 1; --h;) n = g ? c(s[h]) - c(s[h - 1]) : s[h] - s[h - 1], n > 0 && (a === R || n < a) ? a = n : n < 0 && this.requireSorting && e(15);
            this.cropped = r, this.cropStart = i, this.processedXData = s, this.processedYData = o, this.closestPointRange = a
        },
        cropData: function(t, e, i, s) {
            var o, n = t.length,
                r = 0,
                a = n,
                h = ie(this.cropShoulder, 1);
            for (o = 0; o < n; o++)
                if (t[o] >= i) {
                    r = pt(0, o - h);
                    break
                }
            for (i = o; i < n; i++)
                if (t[i] > s) {
                    a = i + h;
                    break
                }
            return {
                xData: t.slice(r, a),
                yData: e.slice(r, a),
                start: r,
                end: a
            }
        },
        generatePoints: function() {
            var t, e, i, s, o = this.options.data,
                n = this.data,
                r = this.processedXData,
                a = this.processedYData,
                h = this.pointClass,
                l = r.length,
                d = this.cropStart || 0,
                p = this.hasGroupedData,
                u = [];
            for (n || p || (n = [], n.length = o.length, n = this.data = n), s = 0; s < l; s++) e = d + s, p ? (u[s] = (new h).init(this, [r[s]].concat(c(a[s]))), u[s].dataGroup = this.groupMap[s]) : (n[e] ? i = n[e] : o[e] !== R && (n[e] = i = (new h).init(this, o[e], r[s])), u[s] = i), u[s].index = e;
            if (n && (l !== (t = n.length) || p))
                for (s = 0; s < t; s++) s === d && !p && (s += l), n[s] && (n[s].destroyElements(), n[s].plotX = R);
            this.data = n, this.points = u
        },
        getExtremes: function(t) {
            var e, i = this.yAxis,
                s = this.processedXData,
                o = [],
                n = 0;
            e = this.xAxis.getExtremes();
            var a, h, l, c, d = e.min,
                p = e.max,
                t = t || this.stackedYData || this.processedYData || [];
            for (e = t.length, c = 0; c < e; c++)
                if (h = s[c], l = t[c], a = (ee(l, !0) || r(l)) && (!i.isLog || l.length || l > 0), h = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (s[c + 1] || h) >= d && (s[c - 1] || h) <= p, a && h)
                    if (a = l.length)
                        for (; a--;) null !== l[a] && (o[n++] = l[a]);
                    else o[n++] = l;
            this.dataMin = k(o), this.dataMax = w(o)
        },
        translate: function() {
            this.processedXData || this.processData(), this.generatePoints();
            for (var t, e, i, s, o = this.options, n = o.stacking, r = this.xAxis, a = r.categories, l = this.yAxis, c = this.points, d = c.length, p = !!this.modifyValue, u = o.pointPlacement, f = "between" === u || ee(u), g = o.threshold, m = o.startFromThreshold ? g : 0, x = Number.MAX_VALUE, o = 0; o < d; o++) {
                var y = c[o],
                    v = y.x,
                    b = y.y;
                e = y.low;
                var k, w = n && l.stacks[(this.negStacks && b < (m ? 0 : g) ? "-" : "") + this.stackKey];
                l.isLog && null !== b && b <= 0 && (y.isNull = !0), y.plotX = t = T(ut(pt(-1e5, r.translate(v, 0, 0, 0, 1, u, "flags" === this.type)), 1e5)), n && this.visible && !y.isNull && w && w[v] && (s = this.getStackIndicator(s, v, this.index), k = w[v], b = k.points[s.key], e = b[0], b = b[1], e === m && s.key === w[v].base && (e = ie(g, l.min)), l.isLog && e <= 0 && (e = null), y.total = y.stackTotal = k.total, y.percentage = k.total && y.y / k.total * 100, y.stackY = b, k.setOffset(this.pointXOffset || 0, this.barW || 0)), y.yBottom = h(e) ? l.translate(e, 0, 1, 0, 1) : null, p && (b = this.modifyValue(b, y)), y.plotY = e = "number" == typeof b && b !== 1 / 0 ? ut(pt(-1e5, l.translate(b, 0, 1, 0, 1)), 1e5) : R, y.isInside = e !== R && e >= 0 && e <= l.len && t >= 0 && t <= r.len, y.clientX = f ? T(r.translate(v, 0, 0, 0, 1, u)) : t, y.negative = y.y < (g || 0), y.category = a && a[y.x] !== R ? a[y.x] : y.x, y.isNull || (void 0 !== i && (x = ut(x, ft(t - i))), i = t)
            }
            this.closestPointRangePx = x
        },
        getValidPoints: function(t, e) {
            var i = this.chart;
            return Vt(t || this.points || [], function(t) {
                return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
            })
        },
        setClip: function(t) {
            var e = this.chart,
                i = this.options,
                s = e.renderer,
                o = e.inverted,
                n = this.clipBox,
                r = n || e.clipBox,
                a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, r.height, i.xAxis, i.yAxis].join(","),
                h = e[a],
                l = e[a + "m"];
            h || (t && (r.width = 0, e[a + "m"] = l = s.clipRect(-99, o ? -e.plotLeft : -e.plotTop, 99, o ? e.chartWidth : e.chartHeight)), e[a] = h = s.clipRect(r), h.count = {
                length: 0
            }), t && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1), i.clip !== !1 && (this.group.clip(t || n ? h : e.clipRect), this.markerGroup.clip(l), this.sharedClipKey = a), t || (h.count[this.index] && (delete h.count[this.index], h.count.length -= 1), 0 === h.count.length && a && e[a] && (n || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
        },
        animate: function(t) {
            var e, i = this.chart,
                s = M(this.options.animation);
            t ? this.setClip(s) : (e = this.sharedClipKey, (t = i[e]) && t.animate({
                width: i.plotSizeX
            }, s), i[e + "m"] && i[e + "m"].animate({
                width: i.plotSizeX + 99
            }, s), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip(), Kt(this, "afterAnimate")
        },
        drawPoints: function() {
            var t, e, i, s, o, n, r, a, h, l, c, d, p = this.points,
                u = this.chart,
                f = this.options.marker,
                g = this.pointAttr[""],
                m = this.markerGroup,
                x = ie(f.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * f.radius);
            if (f.enabled !== !1 || this._hasPointMarkers)
                for (s = p.length; s--;) o = p[s], e = ct(o.plotX), i = o.plotY, h = o.graphic, l = o.marker || {}, c = !!o.marker, t = x && l.enabled === R || l.enabled, d = o.isInside, t && ee(i) && null !== o.y ? (t = o.pointAttr[o.selected ? "select" : ""] || g, n = t.r, r = ie(l.symbol, this.symbol), a = 0 === r.indexOf("url"), h ? h[d ? "show" : "hide"](!0).attr(t).animate(Qt({
                    x: e - n,
                    y: i - n
                }, h.symbolName ? {
                    width: 2 * n,
                    height: 2 * n
                } : {})) : d && (n > 0 || a) && (o.graphic = u.renderer.symbol(r, e - n, i - n, 2 * n, 2 * n, c ? l : f).attr(t).add(m))) : h && (o.graphic = h.destroy())
        },
        convertAttribs: function(t, e, i, s) {
            var o, n, r = this.pointAttrToOptions,
                a = {},
                t = t || {},
                e = e || {},
                i = i || {},
                s = s || {};
            for (o in r) n = r[o], a[o] = ie(t[n], e[o], i[o], s[o]);
            return a
        },
        getAttribs: function() {
            var t, e, i, s = this,
                o = s.options,
                n = oe[s.type].marker ? o.marker : o,
                r = n.states,
                a = r.hover,
                l = s.color,
                c = s.options.negativeColor,
                d = {
                    stroke: l,
                    fill: l
                },
                p = s.points || [],
                u = [],
                f = s.pointAttrToOptions;
            t = s.hasPointSpecificOptions;
            var g = n.lineColor,
                m = n.fillColor;
            e = o.turboThreshold;
            var x, y, v = s.zones,
                b = s.zoneAxis || "y";
            if (o.marker ? (a.radius = +a.radius || +n.radius + +a.radiusPlus, a.lineWidth = a.lineWidth || n.lineWidth + a.lineWidthPlus) : (a.color = a.color || L(a.color || l).brighten(a.brightness).get(), a.negativeColor = a.negativeColor || L(a.negativeColor || c).brighten(a.brightness).get()), u[""] = s.convertAttribs(n, d), Nt(["hover", "select"], function(t) {
                    u[t] = s.convertAttribs(r[t], u[""])
                }), s.pointAttr = u, l = p.length, !e || l < e || t)
                for (; l--;) {
                    if (e = p[l], (n = e.options && e.options.marker || e.options) && n.enabled === !1 && (n.radius = 0), d = null, v.length) {
                        for (t = 0, d = v[t]; e[b] >= d.value;) d = v[++t];
                        e.color = e.fillColor = d = ie(d.color, s.color)
                    }
                    if (t = o.colorByPoint || e.color, e.options)
                        for (y in f) h(n[f[y]]) && (t = !0);
                    t ? (n = n || {}, i = [], r = n.states || {}, t = r.hover = r.hover || {}, o.marker && (!e.negative || t.fillColor || a.fillColor) || (t[s.pointAttrToOptions.fill] = t.color || !e.options.color && a[e.negative && c ? "negativeColor" : "color"] || L(e.color).brighten(t.brightness || a.brightness).get()), x = {
                        color: e.color
                    }, m || (x.fillColor = e.color), g || (x.lineColor = e.color), n.hasOwnProperty("color") && !n.color && delete n.color, d && !a.fillColor && (t.fillColor = d), i[""] = s.convertAttribs(Qt(x, n), u[""]), i.hover = s.convertAttribs(r.hover, u.hover, i[""]), i.select = s.convertAttribs(r.select, u.select, i[""])) : i = u, e.pointAttr = i
                }
        },
        destroy: function() {
            var t, e, i, s, o = this,
                n = o.chart,
                r = /AppleWebKit\/533/.test(vt),
                h = o.data || [];
            for (Kt(o, "destroy"), Zt(o), Nt(o.axisTypes || [], function(t) {
                    (s = o[t]) && (a(s.series, o), s.isDirty = s.forceRedraw = !0)
                }), o.legendItem && o.chart.legend.destroyItem(o), t = h.length; t--;)(e = h[t]) && e.destroy && e.destroy();
            o.points = null, clearTimeout(o.animationTimeout);
            for (i in o) o[i] instanceof D && !o[i].survive && (t = r && "group" === i ? "hide" : "destroy", o[i][t]());
            n.hoverSeries === o && (n.hoverSeries = null), a(n.series, o);
            for (i in o) delete o[i]
        },
        getGraphPath: function(t, e, i) {
            var s, o, n = this,
                r = n.options,
                a = r.step,
                l = [],
                c = [],
                t = t || n.points;
            return (s = t.reversed) && t.reverse(), (a = {
                right: 1,
                center: 2
            }[a] || a && 3) && s && (a = 4 - a), r.connectNulls && !e && !i && (t = this.getValidPoints(t)), Nt(t, function(s, d) {
                var p = s.plotX,
                    u = s.plotY,
                    f = t[d - 1];
                (s.leftCliff || f && f.rightCliff) && !i && (o = !0), s.isNull && !h(e) && d > 0 ? o = !r.connectNulls : s.isNull && !e ? o = !0 : (0 === d || o ? f = [Rt, s.plotX, s.plotY] : n.getPointSpline ? f = n.getPointSpline(t, s, d) : a ? (f = 1 === a ? [Xt, f.plotX, u] : 2 === a ? [Xt, (f.plotX + p) / 2, f.plotY, Xt, (f.plotX + p) / 2, u] : [Xt, p, f.plotY], f.push(Xt, p, u)) : f = [Xt, p, u], c.push(s.x), a && c.push(s.x), l.push.apply(l, f), o = !1)
            }), l.xMap = c, n.graphPath = l
        },
        drawGraph: function() {
            var t = this,
                e = this.options,
                i = [
                    ["graph", e.lineColor || this.color, e.dashStyle]
                ],
                s = e.lineWidth,
                o = "square" !== e.linecap,
                n = (this.gappedPath || this.getGraphPath).call(this);
            Nt(this.zones, function(s, o) {
                i.push(["zoneGraph" + o, s.color || t.color, s.dashStyle || e.dashStyle])
            }), Nt(i, function(i, r) {
                var a = i[0],
                    h = t[a];
                h ? (h.endX = n.xMap, h.animate({
                    d: n
                })) : s && n.length && (h = {
                    stroke: i[1],
                    "stroke-width": s,
                    fill: "none",
                    zIndex: 1
                }, i[2] ? h.dashstyle = i[2] : o && (h["stroke-linecap"] = h["stroke-linejoin"] = "round"), h = t[a] = t.chart.renderer.path(n).attr(h).add(t.group).shadow(r < 2 && e.shadow)), h && (h.startX = n.xMap, h.isArea = n.isArea)
            })
        },
        applyZones: function() {
            var t, e, i, s, o, n, r, a, h, l = this,
                c = this.chart,
                d = c.renderer,
                p = this.zones,
                u = this.clips || [],
                f = this.graph,
                g = this.area,
                m = pt(c.chartWidth, c.chartHeight),
                x = this[(this.zoneAxis || "y") + "Axis"],
                y = c.inverted,
                v = !1;
            p.length && (f || g) && x && x.min !== R && (o = x.reversed, n = x.horiz, f && f.hide(), g && g.hide(), s = x.getExtremes(), Nt(p, function(p, b) {
                t = o ? n ? c.plotWidth : 0 : n ? 0 : x.toPixels(s.min), t = ut(pt(ie(e, t), 0), m), e = ut(pt(lt(x.toPixels(ie(p.value, s.max), !0)), 0), m), v && (t = e = x.toPixels(s.max)), r = Math.abs(t - e), a = ut(t, e), h = pt(t, e), x.isXAxis ? (i = {
                    x: y ? h : a,
                    y: 0,
                    width: r,
                    height: m
                }, n || (i.x = c.plotHeight - i.x)) : (i = {
                    x: 0,
                    y: y ? h : a,
                    width: m,
                    height: r
                }, n && (i.y = c.plotWidth - i.y)), y && d.isVML && (i = x.isXAxis ? {
                    x: 0,
                    y: o ? a : h,
                    height: i.width,
                    width: c.chartWidth
                } : {
                    x: i.y - c.plotLeft - c.spacingBox.x,
                    y: 0,
                    width: i.height,
                    height: c.chartHeight
                }), u[b] ? u[b].animate(i) : (u[b] = d.clipRect(i), f && l["zoneGraph" + b].clip(u[b]), g && l["zoneArea" + b].clip(u[b])), v = p.value > s.max
            }), this.clips = u)
        },
        invertGroups: function() {
            function t() {
                var t = {
                    width: e.yAxis.len,
                    height: e.xAxis.len
                };
                Nt(["group", "markerGroup"], function(i) {
                    e[i] && e[i].attr(t).invert()
                })
            }
            var e = this,
                i = e.chart;
            e.xAxis && (jt(i, "resize", t), jt(e, "destroy", function() {
                Zt(i, "resize", t)
            }), t(), e.invertGroups = t)
        },
        plotGroup: function(t, e, i, s, o) {
            var n = this[t],
                r = !n;
            return r && (this[t] = n = this.chart.renderer.g(e).attr({
                zIndex: s || .1
            }).add(o), n.addClass("highcharts-series-" + this.index)), n.attr({
                visibility: i
            })[r ? "attr" : "animate"](this.getPlotBox()), n
        },
        getPlotBox: function() {
            var t = this.chart,
                e = this.xAxis,
                i = this.yAxis;
            return t.inverted && (e = i, i = this.xAxis), {
                translateX: e ? e.left : t.plotLeft,
                translateY: i ? i.top : t.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var t, e = this,
                i = e.chart,
                s = e.options,
                o = !!e.animate && i.renderer.isSVG && M(s.animation).duration,
                n = e.visible ? "inherit" : "hidden",
                r = s.zIndex,
                a = e.hasRendered,
                h = i.seriesGroup;
            t = e.plotGroup("group", "series", n, r, h), e.markerGroup = e.plotGroup("markerGroup", "markers", n, r, h), o && e.animate(!0), e.getAttribs(), t.inverted = !!e.isCartesian && i.inverted, e.drawGraph && (e.drawGraph(), e.applyZones()), Nt(e.points, function(t) {
                t.redraw && t.redraw()
            }), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), i.inverted && e.invertGroups(), s.clip !== !1 && !e.sharedClipKey && !a && t.clip(i.clipRect), o && e.animate(), a || (e.animationTimeout = d(function() {
                e.afterAnimate()
            }, o)), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
        },
        redraw: function() {
            var t = this.chart,
                e = this.isDirty || this.isDirtyData,
                i = this.group,
                s = this.xAxis,
                o = this.yAxis;
            i && (t.inverted && i.attr({
                width: t.plotWidth,
                height: t.plotHeight
            }), i.animate({
                translateX: ie(s && s.left, t.plotLeft),
                translateY: ie(o && o.top, t.plotTop)
            })), this.translate(), this.render(), e && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(t, e) {
            var i = this.xAxis,
                s = this.yAxis,
                o = this.chart.inverted;
            return this.searchKDTree({
                clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos
            }, e)
        },
        buildKDTree: function() {
            function t(i, s, o) {
                var n, r;
                if (r = i && i.length) return n = e.kdAxisArray[s % o], i.sort(function(t, e) {
                    return t[n] - e[n]
                }), r = Math.floor(r / 2), {
                    point: i[r],
                    left: t(i.slice(0, r), s + 1, o),
                    right: t(i.slice(r + 1), s + 1, o)
                }
            }
            var e = this,
                i = e.kdDimensions;
            delete e.kdTree, d(function() {
                e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i)
            }, e.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(t, e) {
            function i(t, e, a, l) {
                var c, d, p = e.point,
                    u = s.kdAxisArray[a % l],
                    f = p;
                return d = h(t[o]) && h(p[o]) ? Math.pow(t[o] - p[o], 2) : null, c = h(t[n]) && h(p[n]) ? Math.pow(t[n] - p[n], 2) : null, c = (d || 0) + (c || 0), p.dist = h(c) ? Math.sqrt(c) : Number.MAX_VALUE, p.distX = h(d) ? Math.sqrt(d) : Number.MAX_VALUE, u = t[u] - p[u], c = u < 0 ? "left" : "right", d = u < 0 ? "right" : "left", e[c] && (c = i(t, e[c], a + 1, l), f = c[r] < f[r] ? c : p), e[d] && Math.sqrt(u * u) < f[r] && (t = i(t, e[d], a + 1, l), f = t[r] < f[r] ? t : f), f
            }
            var s = this,
                o = this.kdAxisArray[0],
                n = this.kdAxisArray[1],
                r = e ? "distX" : "dist";
            if (this.kdTree || this.buildKDTree(), this.kdTree) return i(t, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    }, O.prototype = {
        destroy: function() {
            A(this, this.axis)
        },
        render: function(t) {
            var e = this.options,
                i = e.format,
                i = i ? x(i, this) : e.formatter.call(this);
            this.label ? this.label.attr({
                text: i,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                align: this.textAlign,
                rotation: e.rotation,
                visibility: "hidden"
            }).add(t)
        },
        setOffset: function(t, e) {
            var i = this.axis,
                s = i.chart,
                o = s.inverted,
                n = i.reversed,
                n = this.isNegative && !n || !this.isNegative && n,
                r = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                i = i.translate(0),
                i = ft(r - i),
                a = s.xAxis[0].translate(this.x) + t,
                h = s.plotHeight,
                n = {
                    x: o ? n ? r : r - i : a,
                    y: o ? h - a - e : n ? h - r - i : h - r,
                    width: o ? i : e,
                    height: o ? e : i
                };
            (o = this.label) && (o.align(this.alignOptions, null, n), n = o.alignAttr, o[this.options.crop === !1 || s.isInsidePlot(n.x, n.y) ? "show" : "hide"](!0))
        }
    }, ve.prototype.getStacks = function() {
        var t = this;
        Nt(t.yAxis, function(t) {
            t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
        }), Nt(t.series, function(e) {
            !e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + ie(e.options.stack, ""))
        })
    }, ce.prototype.buildStacks = function() {
        var t, e, i = this.series,
            s = ie(this.options.reversedStacks, !0),
            o = i.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1, e = o; e--;) i[s ? e : o - e - 1].setStackedPoints();
            for (e = o; e--;) t = i[s ? e : o - e - 1], t.setStackCliffs && t.setStackCliffs();
            if (this.usePercentage)
                for (e = 0; e < o; e++) i[e].setPercentStacks()
        }
    }, ce.prototype.renderStackTotals = function() {
        var t, e, i = this.chart,
            s = i.renderer,
            o = this.stacks,
            n = this.stackTotalGroup;
        n || (this.stackTotalGroup = n = s.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add()), n.translate(i.plotLeft, i.plotTop);
        for (t in o)
            for (e in i = o[t]) i[e].render(n)
    }, ce.prototype.resetStacks = function() {
        var t, e, i = this.stacks;
        if (!this.isXAxis)
            for (t in i)
                for (e in i[t]) i[t][e].touched < this.stacksTouched ? (i[t][e].destroy(), delete i[t][e]) : (i[t][e].total = null, i[t][e].cum = 0)
    }, ce.prototype.cleanStacks = function() {
        var t, e, i;
        if (!this.isXAxis) {
            this.oldStacks && (t = this.stacks = this.oldStacks);
            for (e in t)
                for (i in t[e]) t[e][i].cum = t[e][i].total
        }
    }, we.prototype.setStackedPoints = function() {
        if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
            var t, e, i, s, o, n, r, a = this.processedXData,
                l = this.processedYData,
                c = [],
                d = l.length,
                p = this.options,
                u = p.threshold,
                f = p.startFromThreshold ? u : 0,
                g = p.stack,
                p = p.stacking,
                m = this.stackKey,
                x = "-" + m,
                y = this.negStacks,
                v = this.yAxis,
                b = v.stacks,
                k = v.oldStacks;
            for (v.stacksTouched += 1, o = 0; o < d; o++) n = a[o], r = l[o], t = this.getStackIndicator(t, n, this.index), s = t.key, i = (e = y && r < (f ? 0 : u)) ? x : m, b[i] || (b[i] = {}), b[i][n] || (k[i] && k[i][n] ? (b[i][n] = k[i][n], b[i][n].total = null) : b[i][n] = new O(v, v.options.stackLabels, e, n, g)), i = b[i][n], null !== r && (i.points[s] = i.points[this.index] = [ie(i.cum, f)], h(i.cum) || (i.base = s), i.touched = v.stacksTouched, t.index > 0 && this.singleStacks === !1 && (i.points[s][0] = i.points[this.index + "," + n + ",0"][0])), "percent" === p ? (e = e ? m : x, y && b[e] && b[e][n] ? (e = b[e][n], i.total = e.total = pt(e.total, i.total) + ft(r) || 0) : i.total = T(i.total + (ft(r) || 0))) : i.total = T(i.total + (r || 0)), i.cum = ie(i.cum, f) + (r || 0), null !== r && (i.points[s].push(i.cum), c[o] = i.cum);
            "percent" === p && (v.usePercentage = !0), this.stackedYData = c, v.oldStacks = {}
        }
    }, we.prototype.setPercentStacks = function() {
        var t, e = this,
            i = e.stackKey,
            s = e.yAxis.stacks,
            o = e.processedXData;
        Nt([i, "-" + i], function(i) {
            for (var n, r, a, h = o.length; h--;) r = o[h], t = e.getStackIndicator(t, r, e.index), n = (a = s[i] && s[i][r]) && a.points[t.key], (r = n) && (a = a.total ? 100 / a.total : 0, r[0] = T(r[0] * a), r[1] = T(r[1] * a), e.stackedYData[h] = r[1])
        })
    }, we.prototype.getStackIndicator = function(t, e, i) {
        return h(t) && t.x === e ? t.index++ : t = {
            x: e,
            index: 0
        }, t.key = [i, e, t.index].join(","), t
    }, Qt(ve.prototype, {
        addSeries: function(t, e, i) {
            var s, o = this;
            return t && (e = ie(e, !0), Kt(o, "addSeries", {
                options: t
            }, function() {
                s = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), e && o.redraw(i)
            })), s
        },
        addAxis: function(t, e, i, o) {
            var n = e ? "xAxis" : "yAxis",
                r = this.options,
                t = s(t, {
                    index: this[n].length,
                    isX: e
                });
            new ce(this, t), r[n] = c(r[n] || {}), r[n].push(t), ie(i, !0) && this.redraw(o)
        },
        showLoading: function(t) {
            var e = this,
                i = e.options,
                s = e.loadingDiv,
                o = i.loading,
                n = function() {
                    s && p(s, {
                        left: e.plotLeft + "px",
                        top: e.plotTop + "px",
                        width: e.plotWidth + "px",
                        height: e.plotHeight + "px"
                    })
                };
            s || (e.loadingDiv = s = u(Et, {
                className: "highcharts-loading"
            }, Qt(o.style, {
                zIndex: 10,
                display: "none"
            }), e.container), e.loadingSpan = u("span", null, o.labelStyle, s), jt(e, "redraw", n)), e.loadingSpan.innerHTML = t || i.lang.loading, e.loadingShown || (p(s, {
                opacity: 0,
                display: ""
            }), qt(s, {
                opacity: o.style.opacity
            }, {
                duration: o.showDuration || 0
            }), e.loadingShown = !0), n()
        },
        hideLoading: function() {
            var t = this.options,
                e = this.loadingDiv;
            e && qt(e, {
                opacity: 0
            }, {
                duration: t.loading.hideDuration || 100,
                complete: function() {
                    p(e, {
                        display: "none"
                    })
                }
            }), this.loadingShown = !1
        }
    }), Qt(ke.prototype, {
        update: function(t, e, i, s) {
            function o() {
                r.applyOptions(t), null === r.y && h && (r.graphic = h.destroy()), te(t, !0) && (r.redraw = function() {
                    h && h.element && t && t.marker && t.marker.symbol && (r.graphic = h.destroy()), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()), r.redraw = null
                }), n = r.index, a.updateParallelArrays(r, n), c.data[n] = te(c.data[n], !0) ? r.options : t, a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), "point" === c.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
            }
            var n, r = this,
                a = r.series,
                h = r.graphic,
                l = a.chart,
                c = a.options,
                e = ie(e, !0);
            s === !1 ? o() : r.firePointEvent("update", {
                options: t
            }, o)
        },
        remove: function(t, e) {
            this.series.removePoint(Ft(this, this.series.data), t, e)
        }
    }), Qt(we.prototype, {
        addPoint: function(t, e, i, s) {
            var o, n, r, a, h = this.options,
                l = this.data,
                c = this.chart,
                d = this.xAxis && this.xAxis.names,
                p = h.data,
                u = this.xData,
                e = ie(e, !0);
            if (o = {
                    series: this
                }, this.pointClass.prototype.applyOptions.apply(o, [t]), a = o.x, r = u.length, this.requireSorting && a < u[r - 1])
                for (n = !0; r && u[r - 1] > a;) r--;
            this.updateParallelArrays(o, "splice", r, 0, 0), this.updateParallelArrays(o, r), d && o.name && (d[a] = o.name), p.splice(r, 0, t), n && (this.data.splice(r, 0, null), this.processData()), "point" === h.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(o, "shift"), p.shift())), this.isDirtyData = this.isDirty = !0, e && (this.getAttribs(), c.redraw(s))
        },
        removePoint: function(t, e, i) {
            var s = this,
                o = s.data,
                n = o[t],
                r = s.points,
                a = s.chart,
                h = function() {
                    r && r.length === o.length && r.splice(t, 1), o.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(n || {
                        series: s
                    }, "splice", t, 1), n && n.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && a.redraw()
                };
            P(i, a), e = ie(e, !0), n ? n.firePointEvent("remove", null, h) : h()
        },
        remove: function(t, e, i) {
            function s() {
                o.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), ie(t, !0) && n.redraw(e)
            }
            var o = this,
                n = o.chart;
            i !== !1 ? Kt(o, "remove", null, s) : s()
        },
        update: function(t, e) {
            var i, o = this,
                n = this.chart,
                r = this.userOptions,
                a = this.type,
                h = Gt[a].prototype,
                l = ["group", "markerGroup", "dataLabelsGroup"];
            (t.type && t.type !== a || void 0 !== t.zIndex) && (l.length = 0), Nt(l, function(t) {
                l[t] = o[t], delete o[t]
            }), t = s(r, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, t), this.remove(!1, null, !1);
            for (i in h) this[i] = R;
            Qt(this, Gt[t.type || a].prototype), Nt(l, function(t) {
                o[t] = l[t]
            }), this.init(n, t), n.linkSeries(), ie(e, !0) && n.redraw(!1)
        }
    }), Qt(ce.prototype, {
        update: function(t, e) {
            var i = this.chart,
                t = i.options[this.coll][this.options.index] = s(this.userOptions, t);
            this.destroy(!0), this.init(i, Qt(t, {
                events: R
            })), i.isDirtyBox = !0, ie(e, !0) && i.redraw()
        },
        remove: function(t) {
            for (var e = this.chart, i = this.coll, s = this.series, o = s.length; o--;) s[o] && s[o].remove(!1);
            a(e.axes, this), a(e[i], this), e.options[i].splice(this.options.index, 1), Nt(e[i], function(t, e) {
                t.options.index = e
            }), this.destroy(), e.isDirtyBox = !0, ie(t, !0) && e.redraw()
        },
        setTitle: function(t, e) {
            this.update({
                title: t
            }, e)
        },
        setCategories: function(t, e) {
            this.update({
                categories: t
            }, e)
        }
    });
    var Ae = f(we);
    Gt.line = Ae, oe.area = s(ne, {
        softThreshold: !1,
        threshold: 0
    });
    var Se = f(we, {
        type: "area",
        singleStacks: !1,
        getStackPoints: function() {
            var t, e, i, s = [],
                o = [],
                n = this.xAxis,
                r = this.yAxis,
                a = r.stacks[this.stackKey],
                h = {},
                l = this.points,
                c = this.index,
                d = r.series,
                p = d.length,
                u = ie(r.options.reversedStacks, !0) ? 1 : -1;
            if (this.options.stacking) {
                for (e = 0; e < l.length; e++) h[l[e].x] = l[e];
                for (i in a) null !== a[i].total && o.push(i);
                o.sort(function(t, e) {
                    return t - e
                }), t = Ut(d, function() {
                    return this.visible
                }), Nt(o, function(i, l) {
                    var d, f, g = 0;
                    if (h[i] && !h[i].isNull) s.push(h[i]), Nt([-1, 1], function(s) {
                        var n = 1 === s ? "rightNull" : "leftNull",
                            r = 0,
                            g = a[o[l + s]];
                        if (g)
                            for (e = c; e >= 0 && e < p;) d = g.points[e], d || (e === c ? h[i][n] = !0 : t[e] && (f = a[i].points[e]) && (r -= f[1] - f[0])), e += u;
                        h[i][1 === s ? "rightCliff" : "leftCliff"] = r
                    });
                    else {
                        for (e = c; e >= 0 && e < p;) {
                            if (d = a[i].points[e]) {
                                g = d[1];
                                break
                            }
                            e += u
                        }
                        g = r.toPixels(g, !0), s.push({
                            isNull: !0,
                            plotX: n.toPixels(i, !0),
                            plotY: g,
                            yBottom: g
                        })
                    }
                })
            }
            return s
        },
        getGraphPath: function(t) {
            var e, i, s, o, n = we.prototype.getGraphPath,
                r = this.options,
                a = r.stacking,
                h = this.yAxis,
                l = [],
                c = [],
                d = this.index,
                p = h.stacks[this.stackKey],
                u = r.threshold,
                f = h.getThreshold(r.threshold),
                r = r.connectNulls || "percent" === a,
                g = function(e, i, o) {
                    var n, r, g = t[e],
                        e = a && p[g.x].points[d],
                        m = g[o + "Null"] || 0,
                        o = g[o + "Cliff"] || 0,
                        g = !0;
                    o || m ? (n = (m ? e[0] : e[1]) + o, r = e[0] + o, g = !!m) : !a && t[i] && t[i].isNull && (n = r = u), void 0 !== n && (c.push({
                        plotX: s,
                        plotY: null === n ? f : h.getThreshold(n),
                        isNull: g
                    }), l.push({
                        plotX: s,
                        plotY: null === r ? f : h.getThreshold(r),
                        doCurve: !1
                    }))
                },
                t = t || this.points;
            for (a && (t = this.getStackPoints()), e = 0; e < t.length; e++) i = t[e].isNull, s = ie(t[e].rectPlotX, t[e].plotX), o = ie(t[e].yBottom, f), (!i || r) && (r || g(e, e - 1, "left"), i && !a && r || (c.push(t[e]), l.push({
                x: e,
                plotX: s,
                plotY: o
            })), r || g(e, e + 1, "right"));
            return e = n.call(this, c, !0, !0), l.reversed = !0, i = n.call(this, l, !0, !0), i.length && (i[0] = Xt), i = e.concat(i), n = n.call(this, c, !1, r), i.xMap = e.xMap, this.areaPath = i, n
        },
        drawGraph: function() {
            this.areaPath = [], we.prototype.drawGraph.apply(this);
            var t = this,
                e = this.areaPath,
                i = this.options,
                s = [
                    ["area", this.color, i.fillColor]
                ];
            Nt(this.zones, function(e, o) {
                s.push(["zoneArea" + o, e.color || t.color, e.fillColor || i.fillColor])
            }), Nt(s, function(s) {
                var o = s[0],
                    n = t[o];
                n ? (n.endX = e.xMap, n.animate({
                    d: e
                })) : (n = {
                    fill: s[2] || s[1],
                    zIndex: 0
                }, s[2] || (n["fill-opacity"] = ie(i.fillOpacity, .75)), n = t[o] = t.chart.renderer.path(e).attr(n).add(t.group), n.isArea = !0), n.startX = e.xMap, n.shiftUnit = i.step ? 2 : 1
            })
        },
        drawLegendSymbol: he.drawRectangle
    });
    Gt.area = Se, oe.spline = s(ne), Ae = f(we, {
            type: "spline",
            getPointSpline: function(t, e, i) {
                var s, o, n, r, a = e.plotX,
                    h = e.plotY,
                    l = t[i - 1],
                    i = t[i + 1];
                if (l && !l.isNull && l.doCurve !== !1 && i && !i.isNull && i.doCurve !== !1) {
                    t = l.plotY, n = i.plotX;
                    var i = i.plotY,
                        c = 0;
                    s = (1.5 * a + l.plotX) / 2.5, o = (1.5 * h + t) / 2.5, n = (1.5 * a + n) / 2.5, r = (1.5 * h + i) / 2.5, n !== s && (c = (r - o) * (n - a) / (n - s) + h - r), o += c, r += c, o > t && o > h ? (o = pt(t, h), r = 2 * h - o) : o < t && o < h && (o = ut(t, h), r = 2 * h - o), r > i && r > h ? (r = pt(i, h), o = 2 * h - r) : r < i && r < h && (r = ut(i, h), o = 2 * h - r), e.rightContX = n, e.rightContY = r
                }
                return e = ["C", ie(l.rightContX, l.plotX), ie(l.rightContY, l.plotY), ie(s, a), ie(o, h), a, h], l.rightContX = l.rightContY = null, e
            }
        }), Gt.spline = Ae, oe.areaspline = s(oe.area), Se = Se.prototype, Ae = f(Ae, {
            type: "areaspline",
            getStackPoints: Se.getStackPoints,
            getGraphPath: Se.getGraphPath,
            setStackCliffs: Se.setStackCliffs,
            drawGraph: Se.drawGraph,
            drawLegendSymbol: he.drawRectangle
        }), Gt.areaspline = Ae, oe.column = s(ne, {
            borderColor: "#FFFFFF",
            borderRadius: 0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1,
                    halo: !1
                },
                select: {
                    color: "#C0C0C0",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null,
                verticalAlign: null,
                y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0
        }), Ae = f(we, {
            type: "column",
            pointAttrToOptions: {
                stroke: "borderColor",
                fill: "color",
                r: "borderRadius"
            },
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function() {
                we.prototype.init.apply(this, arguments);
                var t = this,
                    e = t.chart;
                e.hasRendered && Nt(e.series, function(e) {
                    e.type === t.type && (e.isDirty = !0)
                })
            },
            getColumnMetrics: function() {
                var t, e = this,
                    i = e.options,
                    s = e.xAxis,
                    o = e.yAxis,
                    n = s.reversed,
                    r = {},
                    a = 0;
                i.grouping === !1 ? a = 1 : Nt(e.chart.series, function(i) {
                    var s, n = i.options,
                        h = i.yAxis;
                    i.type === e.type && i.visible && o.len === h.len && o.pos === h.pos && (n.stacking ? (t = i.stackKey, r[t] === R && (r[t] = a++), s = r[t]) : n.grouping !== !1 && (s = a++), i.columnIndex = s)
                });
                var h = ut(ft(s.transA) * (s.ordinalSlope || i.pointRange || s.closestPointRange || s.tickInterval || 1), s.len),
                    l = h * i.groupPadding,
                    c = (h - 2 * l) / a,
                    i = ut(i.maxPointWidth || s.len, ie(i.pointWidth, c * (1 - 2 * i.pointPadding)));
                return e.columnMetrics = {
                    width: i,
                    offset: (c - i) / 2 + (l + ((e.columnIndex || 0) + (n ? 1 : 0)) * c - h / 2) * (n ? -1 : 1)
                }, e.columnMetrics
            },
            crispCol: function(t, e, i, s) {
                var o = this.chart,
                    n = this.borderWidth,
                    r = -(n % 2 ? .5 : 0),
                    n = n % 2 ? .5 : 1;
                return o.inverted && o.renderer.isVML && (n += 1), i = Math.round(t + i) + r, t = Math.round(t) + r, i -= t, s = Math.round(e + s) + n, r = ft(e) <= .5 && s > .5, e = Math.round(e) + n, s -= e, r && s && (e -= 1, s += 1), {
                    x: t,
                    y: e,
                    width: i,
                    height: s
                }
            },
            translate: function() {
                var t = this,
                    e = t.chart,
                    i = t.options,
                    s = t.borderWidth = ie(i.borderWidth, t.closestPointRange * t.xAxis.transA < 2 ? 0 : 1),
                    o = t.yAxis,
                    n = t.translatedThreshold = o.getThreshold(i.threshold),
                    r = ie(i.minPointLength, 5),
                    a = t.getColumnMetrics(),
                    h = a.width,
                    l = t.barW = pt(h, 1 + 2 * s),
                    c = t.pointXOffset = a.offset;
                e.inverted && (n -= .5), i.pointPadding && (l = dt(l)), we.prototype.translate.apply(t), Nt(t.points, function(i) {
                    var s, a = ut(ie(i.yBottom, n), 9e4),
                        d = 999 + ft(a),
                        d = ut(pt(-d, i.plotY), o.len + d),
                        p = i.plotX + c,
                        u = l,
                        f = ut(d, a),
                        g = pt(d, a) - f;
                    ft(g) < r && r && (g = r, s = !o.reversed && !i.negative || o.reversed && i.negative, f = ft(f - n) > r ? a - r : n - (s ? r : 0)), i.barX = p, i.pointWidth = h, i.tooltipPos = e.inverted ? [o.len + o.pos - e.plotLeft - d, t.xAxis.len - p - u / 2, g] : [p + u / 2, d + o.pos - e.plotTop, g], i.shapeType = "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [i.plotX, o.len / 2, 0, 0] : [p, f, u, g])
                })
            },
            getSymbol: Ot,
            drawLegendSymbol: he.drawRectangle,
            drawGraph: Ot,
            drawPoints: function() {
                var t, e, i = this,
                    o = this.chart,
                    n = i.options,
                    r = o.renderer,
                    a = n.animationLimit || 250;
                Nt(i.points, function(l) {
                    var c, d = l.graphic;
                    ee(l.plotY) && null !== l.y ? (t = l.shapeArgs, c = h(i.borderWidth) ? {
                        "stroke-width": i.borderWidth
                    } : {}, e = l.pointAttr[l.selected ? "select" : ""] || i.pointAttr[""], d ? ($t(d), d.attr(c).attr(e)[o.pointCount < a ? "animate" : "attr"](s(t))) : l.graphic = r[l.shapeType](t).attr(c).attr(e).add(l.group || i.group).shadow(n.shadow, null, n.stacking && !n.borderRadius)) : d && (l.graphic = d.destroy())
                })
            },
            animate: function(t) {
                var e = this,
                    i = this.yAxis,
                    s = e.options,
                    o = this.chart.inverted,
                    n = {};
                Mt && (t ? (n.scaleY = .001, t = ut(i.pos + i.len, pt(i.pos, i.toPixels(s.threshold))), o ? n.translateX = t - i.len : n.translateY = t, e.group.attr(n)) : (n[o ? "translateX" : "translateY"] = i.pos, e.group.animate(n, Qt(M(e.options.animation), {
                    step: function(t, i) {
                        e.group.attr({
                            scaleY: pt(.001, i.pos)
                        })
                    }
                })), e.animate = null))
            },
            remove: function() {
                var t = this,
                    e = t.chart;
                e.hasRendered && Nt(e.series, function(e) {
                    e.type === t.type && (e.isDirty = !0)
                }), we.prototype.remove.apply(t, arguments)
            }
        }), Gt.column = Ae, oe.bar = s(oe.column), Se = f(Ae, {
            type: "bar",
            inverted: !0
        }), Gt.bar = Se, oe.scatter = s(ne, {
            lineWidth: 0,
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
            }
        }), Se = f(we, {
            type: "scatter",
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            kdDimensions: 2,
            drawGraph: function() {
                this.options.lineWidth && we.prototype.drawGraph.call(this)
            }
        }), Gt.scatter = Se, oe.pie = s(ne, {
            borderColor: "#FFFFFF",
            borderWidth: 1,
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return null === this.y ? void 0 : this.point.name
                },
                x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                }
            },
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            }
        }), ne = {
            type: "pie",
            isCartesian: !1,
            pointClass: f(ke, {
                init: function() {
                    ke.prototype.init.apply(this, arguments);
                    var t, e = this;
                    return e.name = ie(e.name, "Slice"), t = function(t) {
                        e.slice("select" === t.type)
                    }, jt(e, "select", t), jt(e, "unselect", t), e
                },
                setVisible: function(t, e) {
                    var i = this,
                        s = i.series,
                        o = s.chart,
                        n = s.options.ignoreHiddenPoint,
                        e = ie(e, n);
                    t !== i.visible && (i.visible = i.options.visible = t = t === R ? !i.visible : t, s.options.data[Ft(i, s.data)] = i.options, Nt(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                        i[e] && i[e][t ? "show" : "hide"](!0)
                    }), i.legendItem && o.legend.colorizeItem(i, t), !t && "hover" === i.state && i.setState(""), n && (s.isDirty = !0), e && o.redraw())
                },
                slice: function(t, e, i) {
                    var s = this.series;
                    P(i, s.chart), ie(e, !0), this.sliced = this.options.sliced = t = h(t) ? t : !this.sliced, s.options.data[Ft(this, s.data)] = this.options, t = t ? this.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, this.graphic.animate(t), this.shadowGroup && this.shadowGroup.animate(t)
                },
                haloPath: function(t) {
                    var e = this.shapeArgs,
                        i = this.series.chart;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
                        innerR: this.shapeArgs.r,
                        start: e.start,
                        end: e.end
                    })
                }
            }),
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            animate: function(t) {
                var e = this,
                    i = e.points,
                    s = e.startAngleRad;
                t || (Nt(i, function(t) {
                    var i = t.graphic,
                        o = t.shapeArgs;
                    i && (i.attr({
                        r: t.startR || e.center[3] / 2,
                        start: s,
                        end: s
                    }), i.animate({
                        r: o.r,
                        start: o.start,
                        end: o.end
                    }, e.options.animation))
                }), e.animate = null)
            },
            updateTotals: function() {
                var t, e, i = 0,
                    s = this.points,
                    o = s.length,
                    n = this.options.ignoreHiddenPoint;
                for (t = 0; t < o; t++) e = s[t], e.y < 0 && (e.y = null), i += n && !e.visible ? 0 : e.y;
                for (this.total = i, t = 0; t < o; t++) e = s[t], e.percentage = i > 0 && (e.visible || !n) ? e.y / i * 100 : 0, e.total = i
            },
            generatePoints: function() {
                we.prototype.generatePoints.call(this), this.updateTotals()
            },
            translate: function(t) {
                this.generatePoints();
                var e, i, s, o, n, r = 0,
                    a = this.options,
                    h = a.slicedOffset,
                    l = h + a.borderWidth,
                    c = a.startAngle || 0,
                    d = this.startAngleRad = xt / 180 * (c - 90),
                    c = (this.endAngleRad = xt / 180 * (ie(a.endAngle, c + 360) - 90)) - d,
                    p = this.points,
                    u = a.dataLabels.distance,
                    a = a.ignoreHiddenPoint,
                    f = p.length;
                for (t || (this.center = t = this.getCenter()), this.getX = function(e, i) {
                        return s = ht.asin(ut((e - t[1]) / (t[2] / 2 + u), 1)), t[0] + (i ? -1 : 1) * gt(s) * (t[2] / 2 + u)
                    }, o = 0; o < f; o++) n = p[o], e = d + r * c, a && !n.visible || (r += n.percentage / 100), i = d + r * c, n.shapeType = "arc", n.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: lt(1e3 * e) / 1e3,
                    end: lt(1e3 * i) / 1e3
                }, s = (i + e) / 2, s > 1.5 * xt ? s -= 2 * xt : s < -xt / 2 && (s += 2 * xt), n.slicedTranslation = {
                    translateX: lt(gt(s) * h),
                    translateY: lt(mt(s) * h)
                }, e = gt(s) * t[2] / 2, i = mt(s) * t[2] / 2, n.tooltipPos = [t[0] + .7 * e, t[1] + .7 * i], n.half = s < -xt / 2 || s > xt / 2 ? 1 : 0, n.angle = s, l = ut(l, u / 2), n.labelPos = [t[0] + e + gt(s) * u, t[1] + i + mt(s) * u, t[0] + e + gt(s) * l, t[1] + i + mt(s) * l, t[0] + e, t[1] + i, u < 0 ? "center" : n.half ? "right" : "left", s]
            },
            drawGraph: null,
            drawPoints: function() {
                var t, e, i, s, o, n, r = this,
                    a = r.chart.renderer,
                    h = r.options.shadow;
                h && !r.shadowGroup && (r.shadowGroup = a.g("shadow").add(r.group)), Nt(r.points, function(l) {
                    null !== l.y && (e = l.graphic, o = l.shapeArgs, i = l.shadowGroup, s = l.pointAttr[l.selected ? "select" : ""], s.stroke || (s.stroke = s.fill), h && !i && (i = l.shadowGroup = a.g("shadow").add(r.shadowGroup)), t = l.sliced ? l.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, i && i.attr(t), e ? e.setRadialReference(r.center).attr(s).animate(Qt(o, t)) : (n = {
                        "stroke-linejoin": "round"
                    }, l.visible || (n.visibility = "hidden"), l.graphic = e = a[l.shapeType](o).setRadialReference(r.center).attr(s).attr(n).attr(t).add(r.group).shadow(h, i)))
                })
            },
            searchPoint: Ot,
            sortByAngle: function(t, e) {
                t.sort(function(t, i) {
                    return void 0 !== t.angle && (i.angle - t.angle) * e
                })
            },
            drawLegendSymbol: he.drawRectangle,
            getCenter: be.getCenter,
            getSymbol: Ot
        }, ne = f(we, ne), Gt.pie = ne, we.prototype.drawDataLabels = function() {
            var t, e, i, o, n = this,
                r = n.options,
                a = r.cursor,
                l = r.dataLabels,
                c = n.points,
                d = n.hasRendered || 0,
                p = ie(l.defer, !0),
                u = n.chart.renderer;
            (l.enabled || n._hasPointLabels) && (n.dlProcessOptions && n.dlProcessOptions(l), o = n.plotGroup("dataLabelsGroup", "data-labels", p && !d ? "hidden" : "visible", l.zIndex || 6), p && (o.attr({
                opacity: +d
            }), d || jt(n, "afterAnimate", function() {
                n.visible && o.show(!0), o[r.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), e = l, Nt(c, function(c) {
                var d, p, f, g, m = c.dataLabel,
                    y = c.connector,
                    v = !0,
                    b = {};
                if (t = c.dlOptions || c.options && c.options.dataLabels, d = ie(t && t.enabled, e.enabled) && null !== c.y, m && !d) c.dataLabel = m.destroy();
                else if (d) {
                    if (l = s(e, t), g = l.style, d = l.rotation, p = c.getLabelConfig(), i = l.format ? x(l.format, p) : l.formatter.call(p, l), g.color = ie(l.color, g.color, n.color, "black"), m) h(i) ? (m.attr({
                        text: i
                    }), v = !1) : (c.dataLabel = m = m.destroy(), y && (c.connector = y.destroy()));
                    else if (h(i)) {
                        m = {
                            fill: l.backgroundColor,
                            stroke: l.borderColor,
                            "stroke-width": l.borderWidth,
                            r: l.borderRadius || 0,
                            rotation: d,
                            padding: l.padding,
                            zIndex: 1
                        }, "contrast" === g.color && (b.color = l.inside || l.distance < 0 || r.stacking ? u.getContrast(c.color || n.color) : "#000000"), a && (b.cursor = a);
                        for (f in m) m[f] === R && delete m[f];
                        m = c.dataLabel = u[d ? "text" : "label"](i, 0, -9999, l.shape, null, null, l.useHTML).attr(m).css(Qt(g, b)).add(o).shadow(l.shadow)
                    }
                    m && n.alignDataLabel(c, m, l, null, v)
                }
            }))
        }, we.prototype.alignDataLabel = function(t, e, i, s, o) {
            var n = this.chart,
                r = n.inverted,
                a = ie(t.plotX, -9999),
                h = ie(t.plotY, -9999),
                l = e.getBBox(),
                c = n.renderer.fontMetrics(i.style.fontSize).b,
                d = i.rotation,
                p = i.align,
                u = this.visible && (t.series.forceDL || n.isInsidePlot(a, lt(h), r) || s && n.isInsidePlot(a, r ? s.x + 1 : s.y + s.height - 1, r)),
                f = "justify" === ie(i.overflow, "justify");
            u && (s = Qt({
                    x: r ? n.plotWidth - h : a,
                    y: lt(r ? n.plotHeight - a : h),
                    width: 0,
                    height: 0
                }, s), Qt(i, {
                    width: l.width,
                    height: l.height
                }), d ? (f = !1, r = n.renderer.rotCorr(c, d), r = {
                    x: s.x + i.x + s.width / 2 + r.x,
                    y: s.y + i.y + {
                        top: 0,
                        middle: .5,
                        bottom: 1
                    }[i.verticalAlign] * s.height
                }, e[o ? "attr" : "animate"](r).attr({
                    align: p
                }), a = (d + 720) % 360, a = a > 180 && a < 360, "left" === p ? r.y -= a ? l.height : 0 : "center" === p ? (r.x -= l.width / 2, r.y -= l.height / 2) : "right" === p && (r.x -= l.width, r.y -= a ? 0 : l.height)) : (e.align(i, null, s), r = e.alignAttr), f ? this.justifyDataLabel(e, i, r, l, s, o) : ie(i.crop, !0) && (u = n.isInsidePlot(r.x, r.y) && n.isInsidePlot(r.x + l.width, r.y + l.height)),
                i.shape && !d && e.attr({
                    anchorX: t.plotX,
                    anchorY: t.plotY
                })), u || ($t(e), e.attr({
                y: -9999
            }), e.placed = !1)
        }, we.prototype.justifyDataLabel = function(t, e, i, s, o, n) {
            var r, a, h = this.chart,
                l = e.align,
                c = e.verticalAlign,
                d = t.box ? 0 : t.padding || 0;
            r = i.x + d, r < 0 && ("right" === l ? e.align = "left" : e.x = -r, a = !0), r = i.x + s.width - d, r > h.plotWidth && ("left" === l ? e.align = "right" : e.x = h.plotWidth - r, a = !0), r = i.y + d, r < 0 && ("bottom" === c ? e.verticalAlign = "top" : e.y = -r, a = !0), r = i.y + s.height - d, r > h.plotHeight && ("top" === c ? e.verticalAlign = "bottom" : e.y = h.plotHeight - r, a = !0), a && (t.placed = !n, t.align(e, null, o))
        }, Gt.pie && (Gt.pie.prototype.drawDataLabels = function() {
            var t, e, i, s, o, n, r, a, h, l, c, d = this,
                p = d.data,
                u = d.chart,
                f = d.options.dataLabels,
                g = ie(f.connectorPadding, 10),
                m = ie(f.connectorWidth, 1),
                x = u.plotWidth,
                y = u.plotHeight,
                v = ie(f.softConnector, !0),
                b = f.distance,
                k = d.center,
                A = k[2] / 2,
                S = k[1],
                T = b > 0,
                P = [
                    [],
                    []
                ],
                M = [0, 0, 0, 0],
                C = function(t, e) {
                    return e.y - t.y
                };
            if (d.visible && (f.enabled || d._hasPointLabels)) {
                for (we.prototype.drawDataLabels.apply(d), Nt(p, function(t) {
                        t.dataLabel && t.visible && (P[t.half].push(t), t.dataLabel._pos = null)
                    }), l = 2; l--;) {
                    var L, D = [],
                        I = [],
                        O = P[l],
                        B = O.length;
                    if (B) {
                        for (d.sortByAngle(O, l - .5), c = p = 0; !p && O[c];) p = O[c] && O[c].dataLabel && (O[c].dataLabel.getBBox().height || 21), c++;
                        if (b > 0) {
                            for (o = ut(S + A + b, u.plotHeight), c = pt(0, S - A - b); c <= o; c += p) D.push(c);
                            if (o = D.length, B > o) {
                                for (t = [].concat(O), t.sort(C), c = B; c--;) t[c].rank = c;
                                for (c = B; c--;) O[c].rank >= o && O.splice(c, 1);
                                B = O.length
                            }
                            for (c = 0; c < B; c++) {
                                t = O[c], n = t.labelPos, t = 9999;
                                var z, E;
                                for (E = 0; E < o; E++) z = ft(D[E] - n[1]), z < t && (t = z, L = E);
                                if (L < c && null !== D[c]) L = c;
                                else
                                    for (o < B - c + L && null !== D[c] && (L = o - B + c); null === D[L];) L++;
                                I.push({
                                    i: L,
                                    y: D[L]
                                }), D[L] = null
                            }
                            I.sort(C)
                        }
                        for (c = 0; c < B; c++) t = O[c], n = t.labelPos, s = t.dataLabel, h = t.visible === !1 ? "hidden" : "inherit", t = n[1], b > 0 ? (o = I.pop(), L = o.i, a = o.y, (t > a && null !== D[L + 1] || t < a && null !== D[L - 1]) && (a = ut(pt(0, t), u.plotHeight))) : a = t, r = f.justify ? k[0] + (l ? -1 : 1) * (A + b) : d.getX(a === S - A - b || a === S + A + b ? t : a, l), s._attr = {
                            visibility: h,
                            align: n[6]
                        }, s._pos = {
                            x: r + f.x + ({
                                left: g,
                                right: -g
                            }[n[6]] || 0),
                            y: a + f.y - 10
                        }, s.connX = r, s.connY = a, null === this.options.size && (o = s.width, r - o < g ? M[3] = pt(lt(o - r + g), M[3]) : r + o > x - g && (M[1] = pt(lt(r + o - x + g), M[1])), a - p / 2 < 0 ? M[0] = pt(lt(-a + p / 2), M[0]) : a + p / 2 > y && (M[2] = pt(lt(a + p / 2 - y), M[2])))
                    }
                }(0 === w(M) || this.verifyDataLabelOverflow(M)) && (this.placeDataLabels(), T && m && Nt(this.points, function(t) {
                    e = t.connector, n = t.labelPos, (s = t.dataLabel) && s._pos && t.visible ? (h = s._attr.visibility, r = s.connX, a = s.connY, i = v ? [Rt, r + ("left" === n[6] ? 5 : -5), a, "C", r, a, 2 * n[2] - n[4], 2 * n[3] - n[5], n[2], n[3], Xt, n[4], n[5]] : [Rt, r + ("left" === n[6] ? 5 : -5), a, Xt, n[2], n[3], Xt, n[4], n[5]], e ? (e.animate({
                        d: i
                    }), e.attr("visibility", h)) : t.connector = e = d.chart.renderer.path(i).attr({
                        "stroke-width": m,
                        stroke: f.connectorColor || t.color || "#606060",
                        visibility: h
                    }).add(d.dataLabelsGroup)) : e && (t.connector = e.destroy())
                }))
            }
        }, Gt.pie.prototype.placeDataLabels = function() {
            Nt(this.points, function(t) {
                var e = t.dataLabel;
                e && t.visible && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
                    y: -9999
                }))
            })
        }, Gt.pie.prototype.alignDataLabel = Ot, Gt.pie.prototype.verifyDataLabelOverflow = function(t) {
            var e, i = this.center,
                s = this.options,
                o = s.center,
                n = s.minSize || 80,
                r = n;
            return null !== o[0] ? r = pt(i[2] - pt(t[1], t[3]), n) : (r = pt(i[2] - t[1] - t[3], n), i[0] += (t[3] - t[1]) / 2), null !== o[1] ? r = pt(ut(r, i[2] - pt(t[0], t[2])), n) : (r = pt(ut(r, i[2] - t[0] - t[2]), n), i[1] += (t[0] - t[2]) / 2), r < i[2] ? (i[2] = r, i[3] = Math.min(/%$/.test(s.innerSize || 0) ? r * parseFloat(s.innerSize || 0) / 100 : parseFloat(s.innerSize || 0), r), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
        }), Gt.column && (Gt.column.prototype.alignDataLabel = function(t, e, i, o, n) {
            var r = this.chart.inverted,
                a = t.series,
                h = t.dlBox || t.shapeArgs,
                l = ie(t.below, t.plotY > ie(this.translatedThreshold, a.yAxis.len)),
                c = ie(i.inside, !!this.options.stacking);
            h && (o = s(h), o.y < 0 && (o.height += o.y, o.y = 0), h = o.y + o.height - a.yAxis.len, h > 0 && (o.height -= h), r && (o = {
                x: a.yAxis.len - o.y - o.height,
                y: a.xAxis.len - o.x - o.width,
                width: o.height,
                height: o.width
            }), c || (r ? (o.x += l ? 0 : o.width, o.width = 0) : (o.y += l ? o.height : 0, o.height = 0))), i.align = ie(i.align, !r || c ? "center" : l ? "right" : "left"), i.verticalAlign = ie(i.verticalAlign, r || c ? "middle" : l ? "top" : "bottom"), we.prototype.alignDataLabel.call(this, t, e, i, o, n)
        }),
        function(t) {
            var e = t.Chart,
                i = t.each,
                s = t.pick,
                o = t.addEvent;
            e.prototype.callbacks.push(function(t) {
                function e() {
                    var e = [];
                    i(t.series, function(t) {
                        var o = t.options.dataLabels,
                            n = t.dataLabelCollections || ["dataLabel"];
                        (o.enabled || t._hasPointLabels) && !o.allowOverlap && t.visible && i(n, function(o) {
                            i(t.points, function(t) {
                                t[o] && (t[o].labelrank = s(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[o]))
                            })
                        })
                    }), t.hideOverlappingLabels(e)
                }
                e(), o(t, "redraw", e)
            }), e.prototype.hideOverlappingLabels = function(t) {
                var e, s, o, n, r, a, h, l, c, d = t.length;
                for (s = 0; s < d; s++)(e = t[s]) && (e.oldOpacity = e.opacity, e.newOpacity = 1);
                for (t.sort(function(t, e) {
                        return (e.labelrank || 0) - (t.labelrank || 0)
                    }), s = 0; s < d; s++)
                    for (o = t[s], e = s + 1; e < d; ++e) n = t[e], o && n && o.placed && n.placed && 0 !== o.newOpacity && 0 !== n.newOpacity && (r = o.alignAttr, a = n.alignAttr, h = o.parentGroup, l = n.parentGroup, c = 2 * (o.box ? 0 : o.padding), r = !(a.x + l.translateX > r.x + h.translateX + (o.width - c) || a.x + l.translateX + (n.width - c) < r.x + h.translateX || a.y + l.translateY > r.y + h.translateY + (o.height - c) || a.y + l.translateY + (n.height - c) < r.y + h.translateY)) && ((o.labelrank < n.labelrank ? o : n).newOpacity = 0);
                i(t, function(t) {
                    var e, i;
                    t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function() {
                        t.hide()
                    }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
                })
            }
        }(rt);
    var Te = rt.TrackerMixin = {
        drawTrackerPoint: function() {
            var t = this,
                e = t.chart,
                i = e.pointer,
                s = t.options.cursor,
                o = s && {
                    cursor: s
                },
                n = function(t) {
                    for (var i, s = t.target; s && !i;) i = s.point, s = s.parentNode;
                    i !== R && i !== e.hoverPoint && i.onMouseOver(t)
                };
            Nt(t.points, function(t) {
                t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
            }), t._hasTracking || (Nt(t.trackerGroups, function(e) {
                t[e] && (t[e].addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function(t) {
                    i.onTrackerMouseOut(t)
                }).css(o), W) && t[e].on("touchstart", n)
            }), t._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var t = this,
                e = t.options,
                i = e.trackByArea,
                s = [].concat(i ? t.areaPath : t.graphPath),
                o = s.length,
                n = t.chart,
                r = n.pointer,
                a = n.renderer,
                h = n.options.tooltip.snap,
                l = t.tracker,
                c = e.cursor,
                d = c && {
                    cursor: c
                },
                p = function() {
                    n.hoverSeries !== t && t.onMouseOver()
                },
                u = "rgba(192,192,192," + (Mt ? 1e-4 : .002) + ")";
            if (o && !i)
                for (c = o + 1; c--;) s[c] === Rt && s.splice(c + 1, 0, s[c + 1] - h, s[c + 2], Xt), (c && s[c] === Rt || c === o) && s.splice(c, 0, Xt, s[c - 2] + h, s[c - 1]);
            l ? l.attr({
                d: s
            }) : (t.tracker = a.path(s).attr({
                "stroke-linejoin": "round",
                visibility: t.visible ? "visible" : "hidden",
                stroke: u,
                fill: i ? u : "none",
                "stroke-width": e.lineWidth + (i ? 0 : 2 * h),
                zIndex: 2
            }).add(t.group), Nt([t.tracker, t.markerGroup], function(t) {
                t.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(t) {
                    r.onTrackerMouseOut(t)
                }).css(d), W && t.on("touchstart", p)
            }))
        }
    };
    Gt.column && (Ae.prototype.drawTracker = Te.drawTrackerPoint), Gt.pie && (Gt.pie.prototype.drawTracker = Te.drawTrackerPoint), Gt.scatter && (Se.prototype.drawTracker = Te.drawTrackerPoint), Qt(ye.prototype, {
            setItemEvents: function(t, e, i, s, o) {
                var n = this;
                (i ? e : t.legendGroup).on("mouseover", function() {
                    t.setState("hover"), e.css(n.options.itemHoverStyle)
                }).on("mouseout", function() {
                    e.css(t.visible ? s : o), t.setState()
                }).on("click", function(e) {
                    var i = function() {
                            t.setVisible && t.setVisible()
                        },
                        e = {
                            browserEvent: e
                        };
                    t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : Kt(t, "legendItemClick", e, i)
                })
            },
            createCheckboxForItem: function(t) {
                t.checkbox = u("input", {
                    type: "checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                }, this.options.itemCheckboxStyle, this.chart.container), jt(t.checkbox, "click", function(e) {
                    Kt(t.series || t, "checkboxClick", {
                        checked: e.target.checked,
                        item: t
                    }, function() {
                        t.select()
                    })
                })
            }
        }), G.legend.itemStyle.cursor = "pointer", Qt(ve.prototype, {
            showResetZoom: function() {
                var t = this,
                    e = G.lang,
                    i = t.options.chart.resetZoomButton,
                    s = i.theme,
                    o = s.states,
                    n = "chart" === i.relativeTo ? null : "plotBox";
                this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function() {
                    t.zoomOut()
                }, s, o && o.hover).attr({
                    align: i.position.align,
                    title: e.resetZoomTitle
                }).add().align(i.position, !1, n)
            },
            zoomOut: function() {
                var t = this;
                Kt(t, "selection", {
                    resetSelection: !0
                }, function() {
                    t.zoom()
                })
            },
            zoom: function(t) {
                var e, i, s = this.pointer,
                    o = !1;
                !t || t.resetSelection ? Nt(this.axes, function(t) {
                    e = t.zoom()
                }) : Nt(t.xAxis.concat(t.yAxis), function(t) {
                    var i = t.axis,
                        n = i.isXAxis;
                    (s[n ? "zoomX" : "zoomY"] || s[n ? "pinchX" : "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (o = !0))
                }), i = this.resetZoomButton, o && !i ? this.showResetZoom() : !o && te(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(ie(this.options.chart.animation, t && t.animation, this.pointCount < 100))
            },
            pan: function(t, e) {
                var i, s = this,
                    o = s.hoverPoints;
                o && Nt(o, function(t) {
                    t.setState()
                }), Nt("xy" === e ? [1, 0] : [1], function(e) {
                    var e = s[e ? "xAxis" : "yAxis"][0],
                        o = e.horiz,
                        n = t[o ? "chartX" : "chartY"],
                        o = o ? "mouseDownX" : "mouseDownY",
                        r = s[o],
                        a = (e.pointRange || 0) / 2,
                        h = e.getExtremes(),
                        l = e.toValue(r - n, !0) + a,
                        a = e.toValue(r + e.len - n, !0) - a,
                        r = r > n;
                    e.series.length && (r || l > ut(h.dataMin, h.min)) && (!r || a < pt(h.dataMax, h.max)) && (e.setExtremes(l, a, !1, !1, {
                        trigger: "pan"
                    }), i = !0), s[o] = n
                }), i && s.redraw(!1), p(s.container, {
                    cursor: "move"
                })
            }
        }), Qt(ke.prototype, {
            select: function(t, e) {
                var i = this,
                    s = i.series,
                    o = s.chart,
                    t = ie(t, !i.selected);
                i.firePointEvent(t ? "select" : "unselect", {
                    accumulate: e
                }, function() {
                    i.selected = i.options.selected = t, s.options.data[Ft(i, s.data)] = i.options, i.setState(t && "select"), e || Nt(o.getSelectedPoints(), function(t) {
                        t.selected && t !== i && (t.selected = t.options.selected = !1, s.options.data[Ft(t, s.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                    })
                })
            },
            onMouseOver: function(t, e) {
                var i = this.series,
                    s = i.chart,
                    o = s.tooltip,
                    n = s.hoverPoint;
                s.hoverSeries !== i && i.onMouseOver(), n && n !== this && n.onMouseOut(), this.series && (this.firePointEvent("mouseOver"), o && (!o.shared || i.noSharedTooltip) && o.refresh(this, t), this.setState("hover"), !e) && (s.hoverPoint = this)
            },
            onMouseOut: function() {
                var t = this.series.chart,
                    e = t.hoverPoints;
                this.firePointEvent("mouseOut"), e && Ft(this, e) !== -1 || (this.setState(), t.hoverPoint = null)
            },
            importEvents: function() {
                if (!this.hasImportedEvents) {
                    var t, e = s(this.series.options.point, this.options).events;
                    this.events = e;
                    for (t in e) jt(this, t, e[t]);
                    this.hasImportedEvents = !0
                }
            },
            setState: function(t, e) {
                var i, o = ct(this.plotX),
                    n = this.plotY,
                    r = this.series,
                    a = r.options.states,
                    h = oe[r.type].marker && r.options.marker,
                    l = h && !h.enabled,
                    c = h && h.states[t],
                    d = c && c.enabled === !1,
                    p = r.stateMarkerGraphic,
                    u = this.marker || {},
                    f = r.chart,
                    g = r.halo,
                    t = t || "";
                i = this.pointAttr[t] || r.pointAttr[t], t === this.state && !e || this.selected && "select" !== t || a[t] && a[t].enabled === !1 || t && (d || l && c.enabled === !1) || t && u.states && u.states[t] && u.states[t].enabled === !1 || (this.graphic ? (h = h && this.graphic.symbolName && i.r, this.graphic.attr(s(i, h ? {
                    x: o - h,
                    y: n - h,
                    width: 2 * h,
                    height: 2 * h
                } : {})), p && p.hide()) : (t && c && (h = c.radius, u = u.symbol || r.symbol, p && p.currentSymbol !== u && (p = p.destroy()), p ? p[e ? "animate" : "attr"]({
                    x: o - h,
                    y: n - h
                }) : u && (r.stateMarkerGraphic = p = f.renderer.symbol(u, o - h, n - h, 2 * h, 2 * h).attr(i).add(r.markerGroup), p.currentSymbol = u)), p && (p[t && f.isInsidePlot(o, n, f.inverted) ? "show" : "hide"](), p.element.point = this)), (o = a[t] && a[t].halo) && o.size ? (g || (r.halo = g = f.renderer.path().add(f.seriesGroup)), g.attr(Qt({
                    fill: this.color || r.color,
                    "fill-opacity": o.opacity,
                    zIndex: -1
                }, o.attributes))[e ? "animate" : "attr"]({
                    d: this.haloPath(o.size)
                })) : g && g.attr({
                    d: []
                }), this.state = t)
            },
            haloPath: function(t) {
                var e = this.series,
                    i = e.chart,
                    s = e.getPlotBox(),
                    o = i.inverted,
                    n = Math.floor(this.plotX);
                return i.renderer.symbols.circle(s.translateX + (o ? e.yAxis.len - this.plotY : n) - t, s.translateY + (o ? e.xAxis.len - n : this.plotY) - t, 2 * t, 2 * t)
            }
        }), Qt(we.prototype, {
            onMouseOver: function() {
                var t = this.chart,
                    e = t.hoverSeries;
                e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Kt(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
            },
            onMouseOut: function() {
                var t = this.options,
                    e = this.chart,
                    i = e.tooltip,
                    s = e.hoverPoint;
                e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Kt(this, "mouseOut"), i && !t.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), this.setState()
            },
            setState: function(t) {
                var e = this.options,
                    i = this.graph,
                    s = e.states,
                    o = e.lineWidth,
                    e = 0,
                    t = t || "";
                if (this.state !== t && (this.state = t, !(s[t] && s[t].enabled === !1) && (t && (o = s[t].lineWidth || o + (s[t].lineWidthPlus || 0)), i && !i.dashstyle)))
                    for (t = {
                            "stroke-width": o
                        }, i.attr(t); this["zoneGraph" + e];) this["zoneGraph" + e].attr(t), e += 1
            },
            setVisible: function(t, e) {
                var i, s = this,
                    o = s.chart,
                    n = s.legendItem,
                    r = o.options.chart.ignoreHiddenSeries,
                    a = s.visible;
                i = (s.visible = t = s.options.visible = s.userOptions.visible = void 0 === t ? !a : t) ? "show" : "hide", Nt(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(t) {
                    s[t] && s[t][i]()
                }), o.hoverSeries !== s && (o.hoverPoint && o.hoverPoint.series) !== s || s.onMouseOut(), n && o.legend.colorizeItem(s, t), s.isDirty = !0, s.options.stacking && Nt(o.series, function(t) {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), Nt(s.linkedSeries, function(e) {
                    e.setVisible(t, !1)
                }), r && (o.isDirtyBox = !0), e !== !1 && o.redraw(), Kt(s, i)
            },
            show: function() {
                this.setVisible(!0)
            },
            hide: function() {
                this.setVisible(!1)
            },
            select: function(t) {
                this.selected = t = t === R ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Kt(this, t ? "select" : "unselect")
            },
            drawTracker: Te.drawTrackerGraph
        }), se(we.prototype, "init", function(t) {
            var e;
            t.apply(this, Array.prototype.slice.call(arguments, 1)), (e = this.xAxis) && e.options.ordinal && jt(this, "updatedData", function() {
                delete e.ordinalIndex
            })
        }), se(ce.prototype, "getTimeTicks", function(t, e, i, s, o, n, r, a) {
            var l, c, d, p, u, f = 0,
                g = {},
                m = [],
                x = -Number.MAX_VALUE,
                y = this.options.tickPixelInterval;
            if (!this.options.ordinal && !this.options.breaks || !n || n.length < 3 || i === R) return t.call(this, e, i, s, o);
            for (p = n.length, l = 0; l < p; l++) {
                if (u = l && n[l - 1] > s, n[l] < i && (f = l), l === p - 1 || n[l + 1] - n[l] > 5 * r || u) {
                    if (n[l] > x) {
                        for (c = t.call(this, e, n[f], n[l], o); c.length && c[0] <= x;) c.shift();
                        c.length && (x = c[c.length - 1]), m = m.concat(c)
                    }
                    f = l + 1
                }
                if (u) break
            }
            if (t = c.info, a && t.unitRange <= F.hour) {
                for (l = m.length - 1, f = 1; f < l; f++) Y("%d", m[f]) !== Y("%d", m[f - 1]) && (g[m[f]] = "day", d = !0);
                d && (g[m[0]] = "day"), t.higherRanks = g
            }
            if (m.info = t, a && h(y)) {
                a = t = m.length, l = [];
                var v;
                for (d = []; a--;) f = this.translate(m[a]), v && (d[a] = v - f), l[a] = v = f;
                for (d.sort(), d = d[ct(d.length / 2)], d < .6 * y && (d = null), a = m[t - 1] > s ? t - 1 : t, v = void 0; a--;) f = l[a], s = v - f, v && s < .8 * y && (null === d || s < .8 * d) ? (g[m[a]] && !g[m[a + 1]] ? (s = a + 1, v = f) : s = a, m.splice(s, 1)) : v = f
            }
            return m
        }), Qt(ce.prototype, {
            beforeSetTickPositions: function() {
                var t, e, i, s = [],
                    o = !1,
                    n = this.getExtremes(),
                    r = n.min,
                    a = n.max,
                    h = this.isXAxis && !!this.options.breaks,
                    n = this.options.ordinal,
                    l = this.chart.options.chart.ignoreHiddenSeries;
                if (n || h) {
                    if (Nt(this.series, function(e, i) {
                            if ((!l || e.visible !== !1) && (e.takeOrdinalPosition !== !1 || h) && (s = s.concat(e.processedXData), t = s.length, s.sort(function(t, e) {
                                    return t - e
                                }), t))
                                for (i = t - 1; i--;) s[i] === s[i + 1] && s.splice(i, 1)
                        }), t = s.length, t > 2) {
                        for (e = s[1] - s[0], i = t - 1; i-- && !o;) s[i + 1] - s[i] !== e && (o = !0);
                        !this.options.keepOrdinalPadding && (s[0] - r > e || a - s[s.length - 1] > e) && (o = !0)
                    }
                    o ? (this.ordinalPositions = s, e = this.val2lin(pt(r, s[0]), !0), i = pt(this.val2lin(ut(a, s[s.length - 1]), !0), 1), this.ordinalSlope = a = (a - r) / (i - e), this.ordinalOffset = r - e * a) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = R
                }
                this.isOrdinal = n && o, this.groupIntervalFactor = null
            },
            val2lin: function(t, e) {
                var i, s = this.ordinalPositions;
                if (s) {
                    var o, n = s.length;
                    for (i = n; i--;)
                        if (s[i] === t) {
                            o = i;
                            break
                        }
                    for (i = n - 1; i--;)
                        if (t > s[i] || 0 === i) {
                            s = (t - s[i]) / (s[i + 1] - s[i]), o = i + s;
                            break
                        }
                    i = e ? o : this.ordinalSlope * (o || 0) + this.ordinalOffset
                } else i = t;
                return i
            },
            lin2val: function(t, e) {
                var i = this.ordinalPositions;
                if (i) {
                    var s, o, n = this.ordinalSlope,
                        r = this.ordinalOffset,
                        a = i.length - 1;
                    if (e) t < 0 ? t = i[0] : t > a ? t = i[a] : (a = ct(t), o = t - a);
                    else
                        for (; a--;)
                            if (s = n * a + r, t >= s) {
                                n = n * (a + 1) + r, o = (t - s) / (n - s);
                                break
                            }
                    i = o !== R && i[a] !== R ? i[a] + (o ? o * (i[a + 1] - i[a]) : 0) : t
                } else i = t;
                return i
            },
            getExtendedPositions: function() {
                var t, e, i = this.chart,
                    s = this.series[0].currentDataGrouping,
                    o = this.ordinalIndex,
                    n = s ? s.count + s.unitName : "raw",
                    r = this.getExtremes();
                return o || (o = this.ordinalIndex = {}), o[n] || (t = {
                    series: [],
                    chart: i,
                    getExtremes: function() {
                        return {
                            min: r.dataMin,
                            max: r.dataMax
                        }
                    },
                    options: {
                        ordinal: !0
                    },
                    val2lin: ce.prototype.val2lin
                }, Nt(this.series, function(o) {
                    e = {
                        xAxis: t,
                        xData: o.xData,
                        chart: i,
                        destroyGroupedData: Ot
                    }, e.options = {
                        dataGrouping: s ? {
                            enabled: !0,
                            forced: !0,
                            approximation: "open",
                            units: [
                                [s.unitName, [s.count]]
                            ]
                        } : {
                            enabled: !1
                        }
                    }, o.processData.apply(e), t.series.push(e)
                }), this.beforeSetTickPositions.apply(t), o[n] = t.ordinalPositions), o[n]
            },
            getGroupIntervalFactor: function(t, e, i) {
                var s, i = i.processedXData,
                    o = i.length,
                    n = [];
                if (s = this.groupIntervalFactor, !s) {
                    for (s = 0; s < o - 1; s++) n[s] = i[s + 1] - i[s];
                    n.sort(function(t, e) {
                        return t - e
                    }), n = n[ct(o / 2)], t = pt(t, i[0]), e = ut(e, i[o - 1]), this.groupIntervalFactor = s = o * n / (e - t)
                }
                return s
            },
            postProcessTickInterval: function(t) {
                var e = this.ordinalSlope;
                return e ? this.options.breaks ? this.closestPointRange : t / (e / this.closestPointRange) : t
            }
        }), se(ve.prototype, "pan", function(t, e) {
            var i = this.xAxis[0],
                s = e.chartX,
                o = !1;
            if (i.options.ordinal && i.series.length) {
                var n, r = this.mouseDownX,
                    a = i.getExtremes(),
                    h = a.dataMax,
                    l = a.min,
                    c = a.max,
                    d = this.hoverPoints,
                    u = i.closestPointRange,
                    r = (r - s) / (i.translationSlope * (i.ordinalSlope || u)),
                    f = {
                        ordinalPositions: i.getExtendedPositions()
                    },
                    u = i.lin2val,
                    g = i.val2lin;
                f.ordinalPositions ? ft(r) > 1 && (d && Nt(d, function(t) {
                    t.setState()
                }), r < 0 ? (d = f, n = i.ordinalPositions ? i : f) : (d = i.ordinalPositions ? i : f, n = f), f = n.ordinalPositions, h > f[f.length - 1] && f.push(h), this.fixedRange = c - l, r = i.toFixedRange(null, null, u.apply(d, [g.apply(d, [l, !0]) + r, !0]), u.apply(n, [g.apply(n, [c, !0]) + r, !0])), r.min >= ut(a.dataMin, l) && r.max <= pt(h, c) && i.setExtremes(r.min, r.max, !0, !1, {
                    trigger: "pan"
                }), this.mouseDownX = s, p(this.container, {
                    cursor: "move"
                })) : o = !0
            } else o = !0;
            o && t.apply(this, Array.prototype.slice.call(arguments, 1))
        }), we.prototype.gappedPath = function() {
            var t = this.options.gapSize,
                e = this.points.slice(),
                i = e.length - 1;
            if (t && i > 0)
                for (; i--;) e[i + 1].x - e[i].x > this.closestPointRange * t && e.splice(i + 1, 0, {
                    isNull: !0
                });
            return this.getGraphPath(e)
        },
        function(t) {
            t(rt)
        }(function(t) {
            function e() {
                return Array.prototype.slice.call(arguments, 1)
            }

            function i(t) {
                t.apply(this), this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, s(this.pointArrayMap, ["y"]))
            }
            var s = t.pick,
                o = t.wrap,
                n = t.each,
                r = t.extend,
                a = t.fireEvent,
                h = t.Axis,
                l = t.Series;
            r(h.prototype, {
                isInBreak: function(t, e) {
                    var i = t.repeat || 1 / 0,
                        s = t.from,
                        o = t.to - t.from,
                        i = e >= s ? (e - s) % i : i - (s - e) % i;
                    return t.inclusive ? i <= o : i < o && 0 !== i
                },
                isInAnyBreak: function(t, e) {
                    var i, o, n, r = this.options.breaks,
                        a = r && r.length;
                    if (a) {
                        for (; a--;) this.isInBreak(r[a], t) && (i = !0, o || (o = s(r[a].showPoints, !this.isXAxis)));
                        n = i && e ? i && !o : i
                    }
                    return n
                }
            }), o(h.prototype, "setTickPositions", function(t) {
                if (t.apply(this, Array.prototype.slice.call(arguments, 1)), this.options.breaks) {
                    var e, i = this.tickPositions,
                        s = this.tickPositions.info,
                        o = [];
                    for (e = 0; e < i.length; e++) this.isInAnyBreak(i[e]) || o.push(i[e]);
                    this.tickPositions = o, this.tickPositions.info = s
                }
            }), o(h.prototype, "init", function(t, e, i) {
                if (i.breaks && i.breaks.length && (i.ordinal = !1), t.call(this, e, i), this.options.breaks) {
                    var s = this;
                    s.isBroken = !0, this.val2lin = function(t) {
                        var e, i, o = t;
                        for (i = 0; i < s.breakArray.length; i++)
                            if (e = s.breakArray[i], e.to <= t) o -= e.len;
                            else {
                                if (e.from >= t) break;
                                if (s.isInBreak(e, t)) {
                                    o -= t - e.from;
                                    break
                                }
                            }
                        return o
                    }, this.lin2val = function(t) {
                        var e, i;
                        for (i = 0; i < s.breakArray.length && (e = s.breakArray[i], !(e.from >= t)); i++) e.to < t ? t += e.len : s.isInBreak(e, t) && (t += e.len);
                        return t
                    }, this.setExtremes = function(t, e, i, s, o) {
                        for (; this.isInAnyBreak(t);) t -= this.closestPointRange;
                        for (; this.isInAnyBreak(e);) e -= this.closestPointRange;
                        h.prototype.setExtremes.call(this, t, e, i, s, o)
                    }, this.setAxisTranslation = function(t) {
                        h.prototype.setAxisTranslation.call(this, t);
                        var e, i, o, n, r = s.options.breaks,
                            t = [],
                            l = [],
                            c = 0,
                            d = s.userMin || s.min,
                            p = s.userMax || s.max;
                        for (n in r) i = r[n], e = i.repeat || 1 / 0, s.isInBreak(i, d) && (d += i.to % e - d % e), s.isInBreak(i, p) && (p -= p % e - i.from % e);
                        for (n in r) {
                            for (i = r[n], o = i.from, e = i.repeat || 1 / 0; o - e > d;) o -= e;
                            for (; o < d;) o += e;
                            for (; o < p; o += e) t.push({
                                value: o,
                                move: "in"
                            }), t.push({
                                value: o + (i.to - i.from),
                                move: "out",
                                size: i.breakSize
                            })
                        }
                        t.sort(function(t, e) {
                            return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
                        }), r = 0, o = d;
                        for (n in t) i = t[n], r += "in" === i.move ? 1 : -1, 1 === r && "in" === i.move && (o = i.value), 0 === r && (l.push({
                            from: o,
                            to: i.value,
                            len: i.value - o - (i.size || 0)
                        }), c += i.value - o - (i.size || 0));
                        s.breakArray = l, a(s, "afterBreaks"), s.transA *= (p - s.min) / (p - d - c), s.min = d, s.max = p
                    }
                }
            }), o(l.prototype, "generatePoints", function(t) {
                t.apply(this, e(arguments));
                var i, s, o = this.xAxis,
                    n = this.yAxis,
                    r = this.points,
                    a = r.length,
                    h = this.options.connectNulls;
                if (o && n && (o.options.breaks || n.options.breaks))
                    for (; a--;) i = r[a], s = null === i.y && h === !1, s || !o.isInAnyBreak(i.x, !0) && !n.isInAnyBreak(i.y, !0) || (r.splice(a, 1), this.data[a] && this.data[a].destroyElements())
            }), t.Series.prototype.drawBreaks = function(t, e) {
                var i, o, r, h, l = this,
                    c = l.points;
                n(e, function(e) {
                    i = t.breakArray || [], o = t.isXAxis ? t.min : s(l.options.threshold, t.min), n(c, function(l) {
                        h = s(l["stack" + e.toUpperCase()], l[e]), n(i, function(e) {
                            r = !1, o < e.from && h > e.to || o > e.from && h < e.from ? r = "pointBreak" : (o < e.from && h > e.from && h < e.to || o > e.from && h > e.to && h < e.from) && (r = "pointInBreak"), r && a(t, r, {
                                point: l,
                                brk: e
                            })
                        })
                    })
                })
            }, o(t.seriesTypes.column.prototype, "drawPoints", i), o(t.Series.prototype, "drawPoints", i)
        });
    var Pe = we.prototype,
        Me = Pe.processData,
        Ce = Pe.generatePoints,
        Le = Pe.destroy,
        De = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                month: ["%B %Y", "%B", "-%B %Y"],
                year: ["%Y", "%Y", "-%Y"]
            }
        },
        Ie = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        },
        Oe = [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1]],
            ["week", [1]],
            ["month", [1, 3, 6]],
            ["year", null]
        ],
        Be = {
            sum: function(t) {
                var e, i = t.length;
                if (!i && t.hasNulls) e = null;
                else if (i)
                    for (e = 0; i--;) e += t[i];
                return e
            },
            average: function(t) {
                var e = t.length,
                    t = Be.sum(t);
                return ee(t) && e && (t /= e), t
            },
            open: function(t) {
                return t.length ? t[0] : t.hasNulls ? null : R
            },
            high: function(t) {
                return t.length ? w(t) : t.hasNulls ? null : R
            },
            low: function(t) {
                return t.length ? k(t) : t.hasNulls ? null : R
            },
            close: function(t) {
                return t.length ? t[t.length - 1] : t.hasNulls ? null : R
            },
            ohlc: function(t, e, i, s) {
                if (t = Be.open(t), e = Be.high(e), i = Be.low(i), s = Be.close(s), ee(t) || ee(e) || ee(i) || ee(s)) return [t, e, i, s]
            },
            range: function(t, e) {
                if (t = Be.low(t), e = Be.high(e), ee(t) || ee(e)) return [t, e]
            }
        };
    Pe.groupData = function(t, e, i, s) {
        var o, n, r, a = this.data,
            h = this.options.data,
            l = [],
            c = [],
            d = [],
            p = t.length,
            u = !!e,
            f = [
                [],
                [],
                [],
                []
            ],
            s = "function" == typeof s ? s : Be[s],
            g = this.pointArrayMap,
            m = g && g.length,
            x = 0;
        for (r = n = 0; r <= p && !(t[r] >= i[0]); r++);
        for (; r <= p; r++) {
            for (;
                (void 0 !== i[x + 1] && t[r] >= i[x + 1] || r === p) && (o = i[x], this.dataGroupInfo = {
                    start: n,
                    length: f[0].length
                }, n = s.apply(this, f), n !== R && (l.push(o), c.push(n), d.push(this.dataGroupInfo)), n = r, f[0] = [], f[1] = [], f[2] = [], f[3] = [], x += 1, r !== p););
            if (r === p) break;
            if (g) {
                o = this.cropStart + r, o = a && a[o] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [h[o]]);
                var y, v;
                for (y = 0; y < m; y++) v = o[g[y]], ee(v) ? f[y].push(v) : null === v && (f[y].hasNulls = !0)
            } else o = u ? e[r] : null, ee(o) ? f[0].push(o) : null === o && (f[0].hasNulls = !0)
        }
        return [l, c, d]
    }, Pe.processData = function() {
        var t, e = this.chart,
            i = this.options.dataGrouping,
            s = this.allowDG !== !1 && i && ie(i.enabled, e.options._stock);
        if (this.forceCrop = s, this.groupPixelWidth = null, this.hasProcessed = !0, Me.apply(this, arguments) !== !1 && s && this.visible) {
            this.destroyGroupedData();
            var o = this.processedXData,
                n = this.processedYData,
                r = e.plotSizeX,
                e = this.xAxis,
                a = e.options.ordinal,
                l = this.groupPixelWidth = e.getGroupPixelWidth && e.getGroupPixelWidth();
            if (l) {
                this.isDirty = t = !0;
                var c = e.getExtremes(),
                    s = c.min,
                    c = c.max,
                    a = a && e.getGroupIntervalFactor(s, c, this) || 1,
                    r = l * (c - s) / r * a,
                    l = e.getTimeTicks(e.normalizeTimeTickInterval(r, i.units || Oe), Math.min(s, o[0]), Math.max(c, o[o.length - 1]), e.options.startOfWeek, o, this.closestPointRange),
                    o = Pe.groupData.apply(this, [o, n, l, i.approximation]),
                    n = o[0],
                    a = o[1];
                if (i.smoothed) {
                    for (i = n.length - 1, n[i] = Math.min(n[i], c); i-- && i > 0;) n[i] += r / 2;
                    n[0] = Math.max(n[0], s)
                }
                this.currentDataGrouping = l.info, this.closestPointRange = l.info.totalRange, this.groupMap = o[2], h(n[0]) && n[0] < e.dataMin && (e.min === e.dataMin && (e.min = n[0]), e.dataMin = n[0]), this.processedXData = n, this.processedYData = a
            } else this.currentDataGrouping = this.groupMap = null;
            this.hasGroupedData = t
        }
    }, Pe.destroyGroupedData = function() {
        var t = this.groupedData;
        Nt(t || [], function(e, i) {
            e && (t[i] = e.destroy ? e.destroy() : null)
        }), this.groupedData = null
    }, Pe.generatePoints = function() {
        Ce.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
    }, se(ke.prototype, "update", function(t) {
        this.dataGroup ? e(24) : t.apply(this, [].slice.call(arguments, 1))
    }), se(de.prototype, "tooltipFooterHeaderFormatter", function(t, e, i) {
        var s, o = e.series,
            n = o.tooltipOptions,
            r = o.options.dataGrouping,
            a = n.xDateFormat,
            h = o.xAxis;
        return h && "datetime" === h.options.type && r && ee(e.key) ? (t = o.currentDataGrouping, r = r.dateTimeLabelFormats, t ? (h = r[t.unitName], 1 === t.count ? a = h[0] : (a = h[1], s = h[2])) : !a && r && (a = this.getXDateFormat(e, n, h)), a = Y(a, e.key), s && (a += Y(s, e.key + t.totalRange - 1)), x(n[(i ? "footer" : "header") + "Format"], {
            point: Qt(e.point, {
                key: a
            }),
            series: o
        })) : t.call(this, e, i)
    }), Pe.destroy = function() {
        for (var t = this.groupedData || [], e = t.length; e--;) t[e] && t[e].destroy();
        Le.apply(this)
    }, se(Pe, "setOptions", function(t, e) {
        var i = t.call(this, e),
            o = this.type,
            n = this.chart.options.plotOptions,
            r = oe[o].dataGrouping;
        return Ie[o] && (r || (r = s(De, Ie[o])), i.dataGrouping = s(r, n.series && n.series.dataGrouping, n[o].dataGrouping, e.dataGrouping)), this.chart.options._stock && (this.requireSorting = !0), i
    }), se(ce.prototype, "setScale", function(t) {
        t.call(this), Nt(this.series, function(t) {
            t.hasProcessed = !1
        })
    }), ce.prototype.getGroupPixelWidth = function() {
        var t, e, i = this.series,
            s = i.length,
            o = 0,
            n = !1;
        for (t = s; t--;)(e = i[t].options.dataGrouping) && (o = pt(o, e.groupPixelWidth));
        for (t = s; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (s = (i[t].processedXData || i[t].data).length, (i[t].groupPixelWidth || s > this.chart.plotSizeX / o || s && e.forced) && (n = !0));
        return n ? o : 0
    }, ce.prototype.setDataGrouping = function(t, e) {
        var i, e = ie(e, !0);
        if (t || (t = {
                forced: !1,
                units: null
            }), this instanceof ce)
            for (i = this.series.length; i--;) this.series[i].update({
                dataGrouping: t
            }, !1);
        else Nt(this.chart.options.series, function(e) {
            e.dataGrouping = t
        }, !1);
        e && this.chart.redraw()
    }, oe.ohlc = s(oe.column, {
        lineWidth: 1,
        tooltip: {
            pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null
    }), ne = f(Gt.column, {
        type: "ohlc",
        pointArrayMap: ["open", "high", "low", "close"],
        toYData: function(t) {
            return [t.open, t.high, t.low, t.close]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        upColorProp: "stroke",
        getAttribs: function() {
            Gt.column.prototype.getAttribs.apply(this, arguments);
            var t = this.options,
                e = t.states,
                t = t.upColor || this.color,
                i = s(this.pointAttr),
                o = this.upColorProp;
            i[""][o] = t, i.hover[o] = e.hover.upColor || t, i.select[o] = e.select.upColor || t, Nt(this.points, function(t) {
                t.open < t.close && !t.options.color && (t.pointAttr = i)
            })
        },
        translate: function() {
            var t = this,
                e = t.yAxis,
                i = !!t.modifyValue,
                s = ["plotOpen", "yBottom", "plotClose"];
            Gt.column.prototype.translate.apply(t), Nt(t.points, function(o) {
                Nt([o.open, o.low, o.close], function(n, r) {
                    null !== n && (i && (n = t.modifyValue(n)), o[s[r]] = e.toPixels(n, !0))
                })
            })
        },
        drawPoints: function() {
            var t, e, i, s, o, n, r, a, h = this,
                l = h.chart;
            Nt(h.points, function(c) {
                c.plotY !== R && (r = c.graphic, t = c.pointAttr[c.selected ? "selected" : ""] || h.pointAttr[""], s = t["stroke-width"] % 2 / 2, a = lt(c.plotX) - s, o = lt(c.shapeArgs.width / 2), n = ["M", a, lt(c.yBottom), "L", a, lt(c.plotY)], null !== c.open && (e = lt(c.plotOpen) + s, n.push("M", a, e, "L", a - o, e)), null !== c.close && (i = lt(c.plotClose) + s, n.push("M", a, i, "L", a + o, i)), r ? r.attr(t).animate({
                    d: n
                }) : c.graphic = l.renderer.path(n).attr(t).add(h.group))
            })
        },
        animate: null
    }), Gt.ohlc = ne, oe.candlestick = s(oe.column, {
        lineColor: "black",
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 2
            }
        },
        tooltip: oe.ohlc.tooltip,
        threshold: null,
        upColor: "white"
    }), ne = f(ne, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        upColorProp: "fill",
        getAttribs: function() {
            Gt.ohlc.prototype.getAttribs.apply(this, arguments);
            var t = this.options,
                e = t.states,
                i = t.upLineColor || t.lineColor,
                o = e.hover.upLineColor || i,
                n = e.select.upLineColor || i;
            Nt(this.points, function(t) {
                t.open < t.close && (t.lineColor && (t.pointAttr = s(t.pointAttr), i = t.lineColor), t.pointAttr[""].stroke = i, t.pointAttr.hover.stroke = o, t.pointAttr.select.stroke = n)
            })
        },
        drawPoints: function() {
            var t, e, i, s, o, n, r, a, h, l, c, d, p = this,
                u = p.chart,
                f = p.pointAttr[""];
            Nt(p.points, function(g) {
                l = g.graphic, g.plotY !== R && (t = g.pointAttr[g.selected ? "selected" : ""] || f, a = t["stroke-width"] % 2 / 2, h = lt(g.plotX) - a, e = g.plotOpen, i = g.plotClose, s = ht.min(e, i), o = ht.max(e, i), d = lt(g.shapeArgs.width / 2), n = lt(s) !== lt(g.plotY), r = o !== g.yBottom, s = lt(s) + a, o = lt(o) + a, c = [], c.push("M", h - d, o, "L", h - d, s, "L", h + d, s, "L", h + d, o, "Z", "M", h, s, "L", h, n ? lt(g.plotY) : s, "M", h, o, "L", h, r ? lt(g.yBottom) : o), l ? l.attr(t).animate({
                    d: c
                }) : g.graphic = u.renderer.path(c).attr(t).add(p.group).shadow(p.options.shadow))
            })
        }
    }), Gt.candlestick = ne;
    var ze = re.prototype.symbols;
    oe.flags = s(oe.column, {
        fillColor: "white",
        lineWidth: 1,
        pointRange: 0,
        shape: "flag",
        stackDistance: 12,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        tooltip: {
            pointFormat: "{point.text}<br/>"
        },
        threshold: null,
        y: -30
    }), Gt.flags = f(Gt.column, {
        type: "flags",
        sorted: !1,
        noSharedTooltip: !0,
        allowDG: !1,
        takeOrdinalPosition: !1,
        trackerGroups: ["markerGroup"],
        forceCrop: !0,
        init: we.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function() {
            Gt.column.prototype.translate.apply(this);
            var t, e, i = this.options,
                s = this.chart,
                o = this.points,
                n = o.length - 1,
                r = i.onSeries;
            t = r && s.get(r);
            var a, h, l, i = i.onKey || "y",
                r = t && t.options.step,
                c = t && t.points,
                d = c && c.length,
                p = this.xAxis,
                u = p.getExtremes(),
                f = 0;
            if (t && t.visible && d)
                for (f = (t.pointXOffset || 0) + (t.barW || 0) / 2, t = t.currentDataGrouping, h = c[d - 1].x + (t ? t.totalRange : 0), o.sort(function(t, e) {
                        return t.x - e.x
                    }), i = "plot" + i[0].toUpperCase() + i.substr(1); d-- && o[n] && (t = o[n], a = c[d], !(a.x <= t.x && void 0 !== a[i] && (t.x <= h && (t.plotY = a[i], a.x < t.x && !r && (l = c[d + 1]) && l[i] !== R && (t.plotY += (t.x - a.x) / (l.x - a.x) * (l[i] - a[i]))), n--, d++, n < 0))););
            Nt(o, function(t, i) {
                var n;
                t.plotY === R && (t.x >= u.min && t.x <= u.max ? t.plotY = s.chartHeight - p.bottom - (p.opposite ? p.height : 0) + p.offset - s.plotTop : t.shapeArgs = {}), t.plotX += f, (e = o[i - 1]) && e.plotX === t.plotX && (e.stackIndex === R && (e.stackIndex = 0), n = e.stackIndex + 1), t.stackIndex = n
            })
        },
        drawPoints: function() {
            var t, e, i, o, n, r, a, h, l, c, d = this.pointAttr[""],
                p = this.points,
                u = this.chart,
                f = u.renderer,
                g = this.options,
                m = g.y,
                x = this.yAxis;
            for (n = p.length; n--;) r = p[n], t = r.plotX > this.xAxis.len, e = r.plotX, e > 0 && (e -= ie(r.lineWidth, g.lineWidth) % 2), a = r.stackIndex, o = r.options.shape || g.shape, i = r.plotY, i !== R && (i = r.plotY + m - (a !== R && a * g.stackDistance)), h = a ? R : r.plotX, l = a ? R : r.plotY, a = r.graphic, i !== R && e >= 0 && !t ? (t = r.pointAttr[r.selected ? "select" : ""] || d, c = ie(r.options.title, g.title, "A"), a ? a.attr({
                text: c
            }).attr({
                x: e,
                y: i,
                r: t.r,
                anchorX: h,
                anchorY: l
            }) : r.graphic = f.label(c, e, i, o, h, l, g.useHTML).css(s(g.style, r.style)).attr(t).attr({
                align: "flag" === o ? "left" : "center",
                width: g.width,
                height: g.height
            }).add(this.markerGroup).shadow(g.shadow), r.tooltipPos = u.inverted ? [x.len + x.pos - u.plotLeft - i, this.xAxis.len - e] : [e, i]) : a && (r.graphic = a.destroy())
        },
        drawTracker: function() {
            var t = this.points;
            Te.drawTrackerPoint.apply(this), Nt(t, function(e) {
                var i = e.graphic;
                i && jt(i.element, "mouseover", function() {
                    e.stackIndex > 0 && !e.raised && (e._y = i.y, i.attr({
                        y: e._y - 8
                    }), e.raised = !0), Nt(t, function(t) {
                        t !== e && t.raised && t.graphic && (t.graphic.attr({
                            y: t._y
                        }), t.raised = !1)
                    })
                })
            })
        },
        animate: Ot,
        buildKDTree: Ot,
        setClip: Ot
    }), ze.flag = function(t, e, i, s, o) {
        return ["M", o && o.anchorX || t, o && o.anchorY || e, "L", t, e + s, t, e, t + i, e, t + i, e + s, t, e + s, "Z"];
    }, Nt(["circle", "square"], function(t) {
        ze[t + "pin"] = function(e, i, s, o, n) {
            var r = n && n.anchorX,
                n = n && n.anchorY;
            return "circle" === t && o > s && (e -= lt((o - s) / 2), s = o), e = ze[t](e, i, s, o), r && n && e.push("M", r, i > n ? i : i + o, "L", r, n), e
        }
    }), X === rt.VMLRenderer && Nt(["flag", "circlepin", "squarepin"], function(t) {
        ae.prototype.symbols[t] = ze[t]
    });
    var Ee = {
        height: Tt ? 20 : 14,
        barBackgroundColor: "#bfc8d1",
        barBorderRadius: 0,
        barBorderWidth: 1,
        barBorderColor: "#bfc8d1",
        buttonArrowColor: "#666",
        buttonBackgroundColor: "#ebe7e8",
        buttonBorderColor: "#bbb",
        buttonBorderRadius: 0,
        buttonBorderWidth: 1,
        margin: 10,
        minWidth: 6,
        rifleColor: "#666",
        zIndex: 3,
        step: .2,
        trackBackgroundColor: "#eeeeee",
        trackBorderColor: "#eeeeee",
        trackBorderWidth: 1,
        liveRedraw: Mt && !Tt
    };
    G.scrollbar = s(!0, Ee, G.scrollbar), B.prototype = {
        render: function() {
            var t, e = this.renderer,
                i = this.options,
                s = i.trackBorderWidth,
                o = i.barBorderWidth,
                n = this.size;
            this.group = t = e.g("highcharts-scrollbar").attr({
                zIndex: i.zIndex,
                translateY: -99999
            }).add(), this.track = e.rect().attr({
                height: n,
                width: n,
                y: -s % 2 / 2,
                x: -s % 2 / 2,
                "stroke-width": s,
                fill: i.trackBackgroundColor,
                stroke: i.trackBorderColor,
                r: i.trackBorderRadius || 0
            }).add(t), this.scrollbarGroup = e.g().add(t), this.scrollbar = e.rect().attr({
                height: n,
                width: n,
                y: -o % 2 / 2,
                x: -o % 2 / 2,
                "stroke-width": o,
                fill: i.barBackgroundColor,
                stroke: i.barBorderColor,
                r: i.barBorderRadius || 0
            }).add(this.scrollbarGroup), this.scrollbarRifles = e.path(this.swapXY([Rt, -3, n / 4, Xt, -3, 2 * n / 3, Rt, 0, n / 4, Xt, 0, 2 * n / 3, Rt, 3, n / 4, Xt, 3, 2 * n / 3], i.vertical)).attr({
                stroke: i.rifleColor,
                "stroke-width": 1
            }).add(this.scrollbarGroup), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
        },
        position: function(t, e, i, s) {
            var o = this.options,
                n = o.vertical,
                r = 0,
                a = this.rendered ? "animate" : "attr";
            this.x = t, this.y = e + o.trackBorderWidth, this.width = i, this.xOffset = this.height = s, this.yOffset = r, n ? (this.width = this.yOffset = i = r = this.size, this.xOffset = e = 0, this.barWidth = s - 2 * i, this.x = t += this.options.margin) : (this.height = this.xOffset = s = e = this.size, this.barWidth = i - 2 * s, this.y += this.options.margin), this.group[a]({
                translateX: t,
                translateY: this.y
            }), this.track[a]({
                width: i,
                height: s
            }), this.scrollbarButtons[1].attr({
                translateX: n ? 0 : i - e,
                translateY: n ? s - r : 0
            })
        },
        drawScrollbarButton: function(t) {
            var e, i = this.renderer,
                s = this.scrollbarButtons,
                o = this.options,
                n = this.size;
            e = i.g().add(this.group), s.push(e), i.rect(-.5, -.5, n + 1, n + 1, o.buttonBorderRadius, o.buttonBorderWidth).attr({
                stroke: o.buttonBorderColor,
                "stroke-width": o.buttonBorderWidth,
                fill: o.buttonBackgroundColor
            }).add(e), i.path(this.swapXY(["M", n / 2 + (t ? -1 : 1), n / 2 - 3, "L", n / 2 + (t ? -1 : 1), n / 2 + 3, "L", n / 2 + (t ? 2 : -2), n / 2], o.vertical)).attr({
                fill: o.buttonArrowColor
            }).add(e)
        },
        swapXY: function(t, e) {
            var i, s, o = t.length;
            if (e)
                for (i = 0; i < o; i += 3) s = t[i + 1], t[i + 1] = t[i + 2], t[i + 2] = s;
            return t
        },
        setRange: function(t, e) {
            var i, s, o = this.options,
                n = o.vertical,
                r = o.minWidth,
                a = this.barWidth,
                l = this.rendered && !this.hasDragged ? "animate" : "attr";
            h(a) && (t = Math.max(t, 0), i = a * t, s = a * Math.min(e, 1), this.calculatedWidth = s = T(s - i), s < r && (i = (a - r + s) * t, s = r), r = Math.floor(i + this.xOffset + this.yOffset), a = s / 2 - .5, this.from = t, this.to = e, n ? (this.scrollbarGroup[l]({
                translateY: r
            }), this.scrollbar[l]({
                height: s
            }), this.scrollbarRifles[l]({
                translateY: a
            }), this.scrollbarTop = r, this.scrollbarLeft = 0) : (this.scrollbarGroup[l]({
                translateX: r
            }), this.scrollbar[l]({
                width: s
            }), this.scrollbarRifles[l]({
                translateX: a
            }), this.scrollbarLeft = r, this.scrollbarTop = 0), s <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), o.showFull === !1 && (t <= 0 && e >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0)
        },
        initEvents: function() {
            var t = this;
            t.mouseMoveHandler = function(e) {
                var i = t.chart.pointer.normalize(e),
                    s = t.options.vertical ? "chartY" : "chartX",
                    o = t.initPositions;
                !t.grabbedCenter || e.touches && 0 === e.touches[0][s] || (i = t.cursorToScrollbarPosition(i)[s], s = t[s], s = i - s, t.hasDragged = !0, t.updatePosition(o[0] + s, o[1] + s), t.hasDragged && Kt(t, "changed", {
                    from: t.from,
                    to: t.to,
                    trigger: "scrollbar",
                    DOMType: e.type,
                    DOMEvent: e
                }))
            }, t.mouseUpHandler = function(e) {
                t.hasDragged && Kt(t, "changed", {
                    from: t.from,
                    to: t.to,
                    trigger: "scrollbar",
                    DOMType: e.type,
                    DOMEvent: e
                }), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null
            }, t.mouseDownHandler = function(e) {
                e = t.chart.pointer.normalize(e), e = t.cursorToScrollbarPosition(e), t.chartX = e.chartX, t.chartY = e.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0
            }, t.buttonToMinClick = function(e) {
                var i = T(t.to - t.from) * t.options.step;
                t.updatePosition(T(t.from - i), T(t.to - i)), Kt(t, "changed", {
                    from: t.from,
                    to: t.to,
                    trigger: "scrollbar",
                    DOMEvent: e
                })
            }, t.buttonToMaxClick = function(e) {
                var i = (t.to - t.from) * t.options.step;
                t.updatePosition(t.from + i, t.to + i), Kt(t, "changed", {
                    from: t.from,
                    to: t.to,
                    trigger: "scrollbar",
                    DOMEvent: e
                })
            }, t.trackClick = function(e) {
                var i = t.chart.pointer.normalize(e),
                    s = t.to - t.from,
                    o = t.y + t.scrollbarTop,
                    n = t.x + t.scrollbarLeft;
                t.options.vertical && i.chartY > o || !t.options.vertical && i.chartX > n ? t.updatePosition(t.from + s, t.to + s) : t.updatePosition(t.from - s, t.to - s), Kt(t, "changed", {
                    from: t.from,
                    to: t.to,
                    trigger: "scrollbar",
                    DOMEvent: e
                })
            }
        },
        cursorToScrollbarPosition: function(t) {
            var e = this.options,
                e = e.minWidth > this.calculatedWidth ? e.minWidth : 0;
            return {
                chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - e),
                chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - e)
            }
        },
        updatePosition: function(t, e) {
            e > 1 && (t = T(1 - T(e - t)), e = 1), t < 0 && (e = T(e - t), t = 0), this.from = t, this.to = e
        },
        addEvents: function() {
            var t = this.options.inverted ? [1, 0] : [0, 1],
                e = this.scrollbarButtons,
                i = this.scrollbarGroup.element,
                s = this.mouseDownHandler,
                o = this.mouseMoveHandler,
                n = this.mouseUpHandler,
                t = [
                    [e[t[0]].element, "click", this.buttonToMinClick],
                    [e[t[1]].element, "click", this.buttonToMaxClick],
                    [this.track.element, "click", this.trackClick],
                    [i, "mousedown", s],
                    [at, "mousemove", o],
                    [at, "mouseup", n]
                ];
            W && t.push([i, "touchstart", s], [at, "touchmove", o], [at, "touchend", n]), Nt(t, function(t) {
                jt.apply(null, t)
            }), this._events = t
        },
        removeEvents: function() {
            Nt(this._events, function(t) {
                Zt.apply(null, t)
            }), this._events = R
        },
        destroy: function() {
            this.removeEvents(), Nt([this.track, this.scrollbarRifles, this.scrollbar, this.scrollbarGroup, this.group], function(t) {
                t && t.destroy && t.destroy()
            }), A(this.scrollbarButtons)
        }
    }, se(ce.prototype, "init", function(t) {
        var e = this;
        t.apply(e, [].slice.call(arguments, 1)), e.options.scrollbar && e.options.scrollbar.enabled && (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new B(e.chart.renderer, e.options.scrollbar, e.chart), jt(e.scrollbar, "changed", function(t) {
            var i, s = Math.min(ie(e.options.min, e.min), e.min, e.dataMin),
                o = Math.max(ie(e.options.max, e.max), e.max, e.dataMax) - s;
            e.horiz && !e.reversed || !e.horiz && e.reversed ? (i = s + o * this.to, s += o * this.from) : (i = s + o * (1 - this.from), s += o * (1 - this.to)), e.setExtremes(s, i, !0, !1, t)
        }))
    }), se(ce.prototype, "render", function(t) {
        var e, i = Math.min(ie(this.options.min, this.min), this.min, this.dataMin),
            s = Math.max(ie(this.options.max, this.max), this.max, this.dataMax),
            o = this.scrollbar;
        t.apply(this, [].slice.call(arguments, 1)), o && (this.horiz ? o.position(this.left, this.top + this.height + this.offset + 2 + (this.opposite ? 0 : this.axisTitleMargin), this.width, this.height) : o.position(this.left + this.width + 2 + this.offset + (this.opposite ? this.axisTitleMargin : 0), this.top, this.width, this.height), isNaN(i) || isNaN(s) || !h(this.min) || !h(this.max) ? o.setRange(0, 0) : (e = (this.min - i) / (s - i), i = (this.max - i) / (s - i), this.horiz && !this.reversed || !this.horiz && this.reversed ? o.setRange(e, i) : o.setRange(1 - i, 1 - e)))
    }), se(ce.prototype, "getOffset", function(t) {
        var e = this.horiz ? 2 : 1,
            i = this.scrollbar;
        t.apply(this, [].slice.call(arguments, 1)), i && (this.chart.axisOffset[e] += i.size + i.options.margin)
    }), se(ce.prototype, "destroy", function(t) {
        this.scrollbar && (this.scrollbar = this.scrollbar.destroy()), t.apply(this, [].slice.call(arguments, 1))
    }), rt.Scrollbar = B;
    var ne = [].concat(Oe),
        Re = function(t) {
            var e = Vt(arguments, ee);
            if (e.length) return Math[t].apply(0, e)
        };
    ne[4] = ["day", [1, 2, 3, 4]], ne[5] = ["week", [1, 2, 3]], Qt(G, {
        navigator: {
            handles: {
                backgroundColor: "#ebe7e8",
                borderColor: "#b2b1b6"
            },
            height: 40,
            margin: 25,
            maskFill: "rgba(128,179,236,0.3)",
            maskInside: !0,
            outlineColor: "#b2b1b6",
            outlineWidth: 1,
            series: {
                type: Gt.areaspline === R ? "line" : "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: .05,
                dataGrouping: {
                    approximation: "average",
                    enabled: !0,
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: ne
                },
                dataLabels: {
                    enabled: !1,
                    zIndex: 2
                },
                id: "highcharts-navigator-series",
                lineColor: null,
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1,
                threshold: null
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineColor: "#EEE",
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    style: {
                        color: "#888"
                    },
                    x: 3,
                    y: -4
                },
                crosshair: !1
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: .1,
                maxPadding: .1,
                labels: {
                    enabled: !1
                },
                crosshair: !1,
                title: {
                    text: null
                },
                tickWidth: 0
            }
        }
    }), z.prototype = {
        drawHandle: function(t, e) {
            var i, s = this.chart.renderer,
                o = this.elementsToDestroy,
                n = this.handles,
                r = this.navigatorOptions.handles,
                r = {
                    fill: r.backgroundColor,
                    stroke: r.borderColor,
                    "stroke-width": 1
                };
            this.rendered || (n[e] = s.g("navigator-handle-" + ["left", "right"][e]).css({
                cursor: "ew-resize"
            }).attr({
                zIndex: 10 - e
            }).add(), i = s.rect(-4.5, 0, 9, 16, 0, 1).attr(r).add(n[e]), o.push(i), i = s.path(["M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12]).attr(r).add(n[e]), o.push(i)), n[e][this.rendered && !this.hasDragged ? "animate" : "attr"]({
                translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(t, 10),
                translateY: this.top + this.height / 2 - 8
            })
        },
        render: function(t, e, i, s) {
            var o, n, r, a, l = this.chart,
                c = l.renderer,
                d = this.navigatorGroup;
            a = this.scrollbarHeight;
            var d = this.xAxis,
                p = this.navigatorOptions,
                u = this.height,
                f = this.top,
                g = this.navigatorEnabled,
                m = p.outlineWidth,
                x = m / 2,
                y = this.outlineHeight,
                v = f + x,
                b = this.rendered;
            ee(t) && ee(e) && (!this.hasDragged || h(i)) && (this.navigatorLeft = o = ie(d.left, l.plotLeft + a), this.navigatorWidth = n = ie(d.len, l.plotWidth - 2 * a), this.scrollerLeft = r = o - a, this.scrollerWidth = a = a = n + 2 * a, i = ie(i, d.translate(t)), s = ie(s, d.translate(e)), ee(i) && ft(i) !== 1 / 0 || (i = 0, s = a), d.translate(s, !0) - d.translate(i, !0) < l.xAxis[0].minRange || (this.zoomedMax = ut(pt(i, s, 0), n), this.zoomedMin = ut(pt(this.fixedWidth ? this.zoomedMax - this.fixedWidth : ut(i, s), 0), n), this.range = this.zoomedMax - this.zoomedMin, e = lt(this.zoomedMax), t = lt(this.zoomedMin), !b && g && (this.navigatorGroup = d = c.g("navigator").attr({
                zIndex: 3
            }).add(), this.leftShade = c.rect().attr({
                fill: p.maskFill
            }).add(d), p.maskInside ? this.leftShade.css({
                cursor: "ew-resize"
            }) : this.rightShade = c.rect().attr({
                fill: p.maskFill
            }).add(d), this.outline = c.path().attr({
                "stroke-width": m,
                stroke: p.outlineColor
            }).add(d)), c = b && !this.hasDragged ? "animate" : "attr", g && (this.leftShade[c](p.maskInside ? {
                x: o + t,
                y: f,
                width: e - t,
                height: u
            } : {
                x: o,
                y: f,
                width: t,
                height: u
            }), this.rightShade && this.rightShade[c]({
                x: o + e,
                y: f,
                width: n - e,
                height: u
            }), this.outline[c]({
                d: [Rt, r, v, Xt, o + t - x, v, o + t - x, v + y, Xt, o + e - x, v + y, Xt, o + e - x, v, r + a, v].concat(p.maskInside ? [Rt, o + t + x, v, Xt, o + e - x, v] : [])
            }), this.drawHandle(t + x, 0), this.drawHandle(e + x, 1)), this.scrollbar && (this.scrollbar.hasDragged = this.hasDragged, this.scrollbar.position(this.scrollerLeft, this.top + (g ? this.height : -this.scrollbarHeight), this.scrollerWidth, this.scrollbarHeight), this.scrollbar.setRange(t / n, e / n)), this.rendered = !0))
        },
        addEvents: function() {
            var t, e = this.chart,
                i = e.container,
                s = this.mouseDownHandler,
                o = this.mouseMoveHandler,
                n = this.mouseUpHandler;
            t = [
                [i, "mousedown", s],
                [i, "mousemove", o],
                [at, "mouseup", n]
            ], W && t.push([i, "touchstart", s], [i, "touchmove", o], [at, "touchend", n]), Nt(t, function(t) {
                jt.apply(null, t)
            }), this._events = t, this.series && jt(this.series.xAxis, "foundExtremes", function() {
                e.scroller.modifyNavigatorAxisExtremes()
            }), jt(e, "redraw", function() {
                var t = this.scroller,
                    e = t && t.baseSeries && t.baseSeries.xAxis;
                e && t.render(e.min, e.max)
            })
        },
        removeEvents: function() {
            Nt(this._events, function(t) {
                Zt.apply(null, t)
            }), this._events = R, this.removeBaseSeriesEvents()
        },
        removeBaseSeriesEvents: function() {
            this.navigatorEnabled && this.baseSeries && this.baseSeries.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1 && (Zt(this.baseSeries, "updatedData", this.updatedDataHandler), Zt(this.baseSeries.xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
        },
        init: function() {
            var t, e, i, o = this,
                n = o.chart,
                r = o.scrollbarHeight,
                a = o.navigatorOptions,
                l = o.height,
                c = o.top,
                d = o.baseSeries;
            o.mouseDownHandler = function(e) {
                var s, e = n.pointer.normalize(e),
                    r = o.zoomedMin,
                    a = o.zoomedMax,
                    h = o.top,
                    c = o.scrollerLeft,
                    d = o.scrollerWidth,
                    p = o.navigatorLeft,
                    u = o.navigatorWidth,
                    f = o.scrollbarPad || 0,
                    g = o.range,
                    m = e.chartX,
                    x = e.chartY,
                    e = n.xAxis[0],
                    y = Tt ? 10 : 7;
                x > h && x < h + l && (ht.abs(m - r - p) < y ? (o.grabbedLeft = !0, o.otherHandlePos = a, o.fixedExtreme = e.max, n.fixedRange = null) : ht.abs(m - a - p) < y ? (o.grabbedRight = !0, o.otherHandlePos = r, o.fixedExtreme = e.min, n.fixedRange = null) : m > p + r - f && m < p + a + f ? (o.grabbedCenter = m, o.fixedWidth = g, i = m - r) : m > c && m < c + d && (a = m - p - g / 2, a < 0 ? a = 0 : a + g >= u && (a = u - g, s = o.getUnionExtremes().dataMax), a !== r && (o.fixedWidth = g, r = t.toFixedRange(a, a + g, null, s), e.setExtremes(r.min, r.max, !0, null, {
                    trigger: "navigator"
                }))))
            }, o.mouseMoveHandler = function(t) {
                var e, s = o.scrollbarHeight,
                    r = o.navigatorLeft,
                    a = o.navigatorWidth,
                    h = o.scrollerLeft,
                    l = o.scrollerWidth,
                    c = o.range;
                t.touches && 0 === t.touches[0].pageX || (t = n.pointer.normalize(t), e = t.chartX, e < r ? e = r : e > h + l - s && (e = h + l - s), o.grabbedLeft ? (o.hasDragged = !0, o.render(0, 0, e - r, o.otherHandlePos)) : o.grabbedRight ? (o.hasDragged = !0, o.render(0, 0, o.otherHandlePos, e - r)) : o.grabbedCenter && (o.hasDragged = !0, e < i ? e = i : e > a + i - c && (e = a + i - c), o.render(0, 0, e - i, e - i + c)), o.hasDragged && o.scrollbar && o.scrollbar.options.liveRedraw && (t.DOMType = t.type, setTimeout(function() {
                    o.mouseUpHandler(t)
                }, 0)))
            }, o.mouseUpHandler = function(e) {
                var s, r, a = e.DOMEvent || e;
                (o.hasDragged || "scrollbar" === e.trigger) && (o.zoomedMin === o.otherHandlePos ? s = o.fixedExtreme : o.zoomedMax === o.otherHandlePos && (r = o.fixedExtreme), o.zoomedMax === o.navigatorWidth && (r = o.getUnionExtremes().dataMax), s = t.toFixedRange(o.zoomedMin, o.zoomedMax, s, r), h(s.min) && n.xAxis[0].setExtremes(s.min, s.max, !0, !o.hasDragged && null, {
                    trigger: "navigator",
                    triggerOp: "navigator-drag",
                    DOMEvent: a
                })), "mousemove" !== e.DOMType && (o.grabbedLeft = o.grabbedRight = o.grabbedCenter = o.fixedWidth = o.fixedExtreme = o.otherHandlePos = o.hasDragged = i = null)
            };
            var p = n.xAxis.length,
                u = n.yAxis.length;
            n.extraBottomMargin = o.outlineHeight + a.margin, o.navigatorEnabled ? (o.xAxis = t = new ce(n, s({
                breaks: d && d.xAxis.options.breaks,
                ordinal: d && d.xAxis.options.ordinal
            }, a.xAxis, {
                id: "navigator-x-axis",
                isX: !0,
                type: "datetime",
                index: p,
                height: l,
                offset: 0,
                offsetLeft: r,
                offsetRight: -r,
                keepOrdinalPadding: !0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: !1
            })), o.yAxis = e = new ce(n, s(a.yAxis, {
                id: "navigator-y-axis",
                alignTicks: !1,
                height: l,
                offset: 0,
                index: u,
                zoomEnabled: !1
            })), d || a.series.data ? o.addBaseSeries() : 0 === n.series.length && se(n, "redraw", function(t, e) {
                n.series.length > 0 && !o.series && (o.setBaseSeries(), n.redraw = t), t.call(n, e)
            })) : o.xAxis = t = {
                translate: function(t, e) {
                    var i = n.xAxis[0],
                        s = i.getExtremes(),
                        o = n.plotWidth - 2 * r,
                        a = Re("min", i.options.min, s.dataMin),
                        i = Re("max", i.options.max, s.dataMax) - a;
                    return e ? t * i / o + a : o * (t - a) / i
                },
                toFixedRange: ce.prototype.toFixedRange
            }, n.options.scrollbar.enabled && (o.scrollbar = new B(n.renderer, s(n.options.scrollbar, {
                margin: o.navigatorEnabled ? 0 : 10
            }), n), jt(o.scrollbar, "changed", function(t) {
                var e = o.navigatorWidth,
                    i = e * this.to;
                e *= this.from, o.hasDragged = o.scrollbar.hasDragged, o.render(0, 0, e, i), (n.options.scrollbar.liveRedraw || "mousemove" !== t.DOMType) && setTimeout(function() {
                    o.mouseUpHandler(t)
                })
            })), o.addBaseSeriesEvents(), se(n, "getMargins", function(i) {
                var s = this.legend,
                    n = s.options;
                i.apply(this, [].slice.call(arguments, 1)), o.top = c = o.navigatorOptions.top || this.chartHeight - o.height - o.scrollbarHeight - this.spacing[2] - ("bottom" === n.verticalAlign && n.enabled && !n.floating ? s.legendHeight + ie(n.margin, 10) : 0), t && e && (t.options.top = e.options.top = c, t.setAxisSize(), e.setAxisSize())
            }), o.addEvents()
        },
        getUnionExtremes: function(t) {
            var e, i = this.chart.xAxis[0],
                s = this.xAxis,
                o = s.options,
                n = i.options;
            return t && null === i.dataMin || (e = {
                dataMin: ie(o && o.min, Re("min", n.min, i.dataMin, s.dataMin, s.min)),
                dataMax: ie(o && o.max, Re("max", n.max, i.dataMax, s.dataMax, s.max))
            }), e
        },
        setBaseSeries: function(t) {
            var e = this.chart,
                t = t || e.options.navigator.baseSeries;
            this.series && (this.removeBaseSeriesEvents(), this.series.remove()), this.baseSeries = e.series[t] || "string" == typeof t && e.get(t) || e.series[0], this.xAxis && this.addBaseSeries()
        },
        addBaseSeries: function() {
            var t, e = this.baseSeries,
                i = e ? e.options : {},
                e = i.data,
                o = this.navigatorOptions.series;
            t = o.data, this.hasNavigatorData = !!t, i = s(i, o, {
                enableMouseTracking: !1,
                group: "nav",
                padXAxis: !1,
                xAxis: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                name: "Navigator",
                showInLegend: !1,
                stacking: !1,
                isInternal: !0,
                visible: !0
            }), i.data = t || e.slice(0), this.series = this.chart.initSeries(i), this.addBaseSeriesEvents()
        },
        addBaseSeriesEvents: function() {
            var t = this.baseSeries;
            t && t.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1 && (jt(t, "updatedData", this.updatedDataHandler), jt(t.xAxis, "foundExtremes", this.modifyBaseAxisExtremes), t.userOptions.events = Qt(t.userOptions.event, {
                updatedData: this.updatedDataHandler
            }))
        },
        modifyNavigatorAxisExtremes: function() {
            var t, e = this.xAxis;
            e.getExtremes && (t = this.getUnionExtremes(!0)) && (t.dataMin !== e.min || t.dataMax !== e.max) && (e.min = t.dataMin, e.max = t.dataMax)
        },
        modifyBaseAxisExtremes: function() {
            if (this.chart.scroller.baseSeries && this.chart.scroller.baseSeries.xAxis) {
                var t, e, i = this.chart.scroller,
                    s = this.getExtremes(),
                    o = s.dataMin,
                    n = s.dataMax,
                    s = s.max - s.min,
                    r = i.stickToMin,
                    a = i.stickToMax,
                    h = i.series,
                    l = !!this.setExtremes;
                this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (r && (e = o, t = e + s), a && (t = n, r || (e = pt(t - s, h && h.xData ? h.xData[0] : -Number.MAX_VALUE))), !l || !r && !a || !ee(e)) || (this.min = this.userMin = e, this.max = this.userMax = t), i.stickToMin = i.stickToMax = null
            }
        },
        updatedDataHandler: function() {
            var t = this.chart.scroller,
                e = t.baseSeries,
                i = t.series;
            t.stickToMin = ee(e.xAxis.min) && e.xAxis.min <= e.xData[0], t.stickToMax = Math.round(t.zoomedMax) >= Math.round(t.navigatorWidth), i && !t.hasNavigatorData && (i.options.pointStart = e.xData[0], i.setData(e.options.data, !1, null, !1))
        },
        destroy: function() {
            this.removeEvents(), Nt([this.scrollbar, this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline], function(t) {
                t && t.destroy && t.destroy()
            }), this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = null, Nt([this.handles, this.elementsToDestroy], function(t) {
                A(t)
            })
        }
    }, rt.Navigator = z, se(ce.prototype, "zoom", function(t, e, i) {
        var s, o = this.chart,
            n = o.options,
            r = n.chart.zoomType,
            a = n.navigator,
            n = n.rangeSelector;
        return this.isXAxis && (a && a.enabled || n && n.enabled) && ("x" === r ? o.resetZoomButton = "blocked" : "y" === r ? s = !1 : "xy" === r && (o = this.previousZoom, h(e) ? this.previousZoom = [this.min, this.max] : o && (e = o[0], i = o[1], delete this.previousZoom))), s !== R ? s : t.call(this, e, i)
    }), se(ve.prototype, "init", function(t, e, i) {
        jt(this, "beforeRender", function() {
            var t = this.options;
            (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = new z(this))
        }), t.call(this, e, i)
    }), se(we.prototype, "addPoint", function(t, i, s, o, n) {
        var r = this.options.turboThreshold;
        r && this.xData.length > r && te(i, !0) && this.chart.scroller && e(20, !0), t.call(this, i, s, o, n)
    }), Qt(G, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 18,
                fill: "#f7f7f7",
                padding: 2,
                r: 0,
                "stroke-width": 0,
                style: {
                    color: "#444",
                    cursor: "pointer",
                    fontWeight: "normal"
                },
                zIndex: 7,
                states: {
                    hover: {
                        fill: "#e7e7e7"
                    },
                    select: {
                        fill: "#e7f0f9",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }
            },
            height: 35,
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    }), G.lang = s(G.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    }), E.prototype = {
        clickButton: function(t, e) {
            var i, s, o, n, r, a = this,
                h = a.selected,
                l = a.chart,
                d = a.buttons,
                p = a.buttonOptions[t],
                u = l.xAxis[0],
                f = l.scroller && l.scroller.getUnionExtremes() || u || {},
                g = f.dataMin,
                m = f.dataMax,
                x = u && lt(ut(u.max, ie(m, u.max))),
                y = p.type,
                f = p._range,
                v = p.dataGrouping;
            if (null !== g && null !== m && t !== a.selected) {
                if (l.fixedRange = f, v && (this.forcedDataGrouping = !0, ce.prototype.setDataGrouping.call(u || {
                        chart: this.chart
                    }, v, !1)), "month" === y || "year" === y) u ? (y = {
                    range: p,
                    max: x,
                    dataMin: g,
                    dataMax: m
                }, i = u.minFromRange.call(y), ee(y.newMax) && (x = y.newMax)) : f = p;
                else if (f) i = pt(x - f, g), x = ut(i + f, m);
                else if ("ytd" === y) {
                    if (!u) return void jt(l, "beforeRender", function() {
                        a.clickButton(t)
                    });
                    m === R && (g = Number.MAX_VALUE, m = Number.MIN_VALUE, Nt(l.series, function(t) {
                        t = t.xData, g = ut(t[0], g), m = pt(t[t.length - 1], m)
                    }), e = !1), x = new N(m), i = x.getFullYear(), i = o = pt(g || 0, N.UTC(i, 0, 1)), x = x.getTime(), x = ut(m || x, x)
                } else "all" === y && u && (i = g, x = m);
                d[h] && d[h].setState(0), d[t] && (d[t].setState(2), a.lastSelected = t), u ? (u.setExtremes(i, x, ie(e, 1), null, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: p
                }), a.setSelected(t)) : (s = c(l.options.xAxis)[0], r = s.range, s.range = f, n = s.min, s.min = o, a.setSelected(t), jt(l, "load", function() {
                    s.range = r, s.min = n
                }))
            }
        },
        setSelected: function(t) {
            this.selected = this.options.selected = t
        },
        defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        }],
        init: function(t) {
            var e = this,
                i = t.options.rangeSelector,
                s = i.buttons || [].concat(e.defaultButtons),
                o = i.selected,
                n = e.blurInputs = function() {
                    var t = e.minInput,
                        i = e.maxInput;
                    t && t.blur && Kt(t, "blur"), i && i.blur && Kt(i, "blur")
                };
            e.chart = t, e.options = i, e.buttons = [], t.extraTopMargin = i.height, e.buttonOptions = s, jt(t.container, "mousedown", n), jt(t, "resize", n), Nt(s, e.computeButtonRange), o !== R && s[o] && this.clickButton(o, !1), jt(t, "load", function() {
                jt(t.xAxis[0], "setExtremes", function(i) {
                    this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && this.setDataGrouping(!1, !1)
                }), jt(t.xAxis[0], "afterSetExtremes", function() {
                    e.updateButtonStates(!0)
                })
            })
        },
        updateButtonStates: function(t) {
            var e = this,
                i = this.chart,
                s = i.xAxis[0],
                o = i.scroller && i.scroller.getUnionExtremes() || s,
                n = o.dataMin,
                r = o.dataMax,
                a = e.selected,
                h = e.options.allButtonsEnabled,
                l = e.buttons;
            t && i.fixedRange !== lt(s.max - s.min) && (l[a] && l[a].setState(0), e.setSelected(null)), Nt(e.buttonOptions, function(t, o) {
                var c = lt(s.max - s.min),
                    d = t._range,
                    p = t.type,
                    u = t.count || 1,
                    f = d > r - n,
                    g = d < s.minRange,
                    m = "all" === t.type && s.max - s.min >= r - n && 2 !== l[o].state,
                    x = i.renderer.forExport && o === a,
                    d = d === c,
                    y = !s.hasVisibleSeries;
                ("month" === p || "year" === p) && c >= 864e5 * {
                    month: 28,
                    year: 365
                }[p] * u && c <= 864e5 * {
                    month: 31,
                    year: 366
                }[p] * u && (d = !0), x || d && o !== a && o === e.lastSelected ? (e.setSelected(o), l[o].setState(2)) : !h && (f || g || m || y) ? l[o].setState(3) : 3 === l[o].state && l[o].setState(0)
            })
        },
        computeButtonRange: function(t) {
            var e = t.type,
                i = t.count || 1,
                s = {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5
                };
            s[e] ? t._range = s[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
                month: 30,
                year: 365
            }[e] * i)
        },
        setInputValue: function(t, e) {
            var i = this.chart.options.rangeSelector;
            h(e) && (this[t + "Input"].HCTime = e), this[t + "Input"].value = Y(i.inputEditDateFormat || "%Y-%m-%d", this[t + "Input"].HCTime), this[t + "DateBox"].attr({
                text: Y(i.inputDateFormat || "%b %e, %Y", this[t + "Input"].HCTime)
            })
        },
        showInput: function(t) {
            var e = this.inputGroup,
                i = this[t + "DateBox"];
            p(this[t + "Input"], {
                left: e.translateX + i.x + "px",
                top: e.translateY + "px",
                width: i.width - 2 + "px",
                height: i.height - 2 + "px",
                border: "2px solid silver"
            })
        },
        hideInput: function(t) {
            p(this[t + "Input"], {
                border: 0,
                width: "1px",
                height: "1px"
            }), this.setInputValue(t)
        },
        drawInput: function(t) {
            function e() {
                var t = i.value,
                    e = (c.inputDateParser || N.parse)(t),
                    s = a.scroller && a.scroller.xAxis ? a.scroller.xAxis : a.xAxis[0],
                    n = s.dataMin,
                    h = s.dataMax;
                e !== i.previousValue && (i.previousValue = e, ee(e) || (e = t.split("-"), e = N.UTC(o(e[0]), o(e[1]) - 1, o(e[2]))), ee(e) && (G.global.useUTC || (e += 6e4 * (new N).getTimezoneOffset()), p ? e > r.maxInput.HCTime ? e = R : e < n && (e = n) : e < r.minInput.HCTime ? e = R : e > h && (e = h), e !== R && a.xAxis[0].setExtremes(p ? e : s.min, p ? s.max : e, R, R, {
                    trigger: "rangeSelectorInput"
                })))
            }
            var i, n, r = this,
                a = r.chart,
                h = a.renderer.style,
                l = a.renderer,
                c = a.options.rangeSelector,
                d = r.div,
                p = "min" === t,
                f = this.inputGroup;
            this[t + "Label"] = n = l.label(G.lang[p ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 2
            }).css(s(h, c.labelStyle)).add(f), f.offset += n.width + 5, this[t + "DateBox"] = l = l.label("", f.offset).attr({
                padding: 2,
                width: c.inputBoxWidth || 90,
                height: c.inputBoxHeight || 17,
                stroke: c.inputBoxBorderColor || "silver",
                "stroke-width": 1
            }).css(s({
                textAlign: "center",
                color: "#444"
            }, h, c.inputStyle)).on("click", function() {
                r.showInput(t), r[t + "Input"].focus()
            }).add(f), f.offset += l.width + (p ? 10 : 0), this[t + "Input"] = i = u("input", {
                name: t,
                className: "highcharts-range-selector",
                type: "text"
            }, Qt({
                position: "absolute",
                border: 0,
                width: "1px",
                height: "1px",
                padding: 0,
                textAlign: "center",
                fontSize: h.fontSize,
                fontFamily: h.fontFamily,
                left: "-9em",
                top: a.plotTop + "px"
            }, c.inputStyle), d), i.onfocus = function() {
                r.showInput(t)
            }, i.onblur = function() {
                r.hideInput(t)
            }, i.onchange = e, i.onkeypress = function(t) {
                13 === t.keyCode && e()
            }
        },
        getPosition: function() {
            var t = this.chart,
                e = t.options.rangeSelector,
                t = ie((e.buttonPosition || {}).y, t.plotTop - t.axisOffset[0] - e.height);
            return {
                buttonTop: t,
                inputTop: t - 10
            }
        },
        render: function(t, e) {
            var i, s = this,
                o = s.chart,
                n = o.renderer,
                r = o.container,
                a = o.options,
                l = a.exporting && a.exporting.enabled !== !1 && a.navigation && a.navigation.buttonOptions,
                c = a.rangeSelector,
                d = s.buttons,
                a = G.lang,
                p = s.div,
                p = s.inputGroup,
                f = c.buttonTheme,
                g = c.buttonPosition || {},
                m = c.inputEnabled,
                x = f && f.states,
                y = o.plotLeft,
                v = this.getPosition(),
                b = s.group,
                k = s.rendered;
            k || (s.group = b = n.g("range-selector-buttons").add(), s.zoomText = n.text(a.rangeSelectorZoom, ie(g.x, y), 15).css(c.labelStyle).add(b), i = ie(g.x, y) + s.zoomText.getBBox().width + 5, Nt(s.buttonOptions, function(t, e) {
                d[e] = n.button(t.text, i, 0, function() {
                    s.clickButton(e), s.isActive = !0
                }, f, x && x.hover, x && x.select, x && x.disabled).css({
                    textAlign: "center"
                }).add(b), i += d[e].width + ie(c.buttonSpacing, 5), s.selected === e && d[e].setState(2)
            }), s.updateButtonStates(), m === !1) || (s.div = p = u("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), r.parentNode.insertBefore(p, r), s.inputGroup = p = n.g("input-group").add(), p.offset = 0, s.drawInput("min"), s.drawInput("max")), b[k ? "animate" : "attr"]({
                translateY: v.buttonTop
            }), m !== !1 && (p.align(Qt({
                y: v.inputTop,
                width: p.offset,
                x: l && v.inputTop < (l.y || 0) + l.height - o.spacing[0] ? -40 : 0
            }, c.inputPosition), !0, o.spacingBox), h(m) || (o = b.getBBox(), p[p.translateX < o.x + o.width + 10 ? "hide" : "show"]()), s.setInputValue("min", t), s.setInputValue("max", e)), s.rendered = !0
        },
        destroy: function() {
            var t, e = this.minInput,
                i = this.maxInput,
                s = this.chart,
                o = this.blurInputs;
            Zt(s.container, "mousedown", o), Zt(s, "resize", o), A(this.buttons), e && (e.onfocus = e.onblur = e.onchange = null), i && (i.onfocus = i.onblur = i.onchange = null);
            for (t in this) this[t] && "chart" !== t && (this[t].destroy ? this[t].destroy() : this[t].nodeType && S(this[t])), this[t] = null
        }
    }, ce.prototype.toFixedRange = function(t, e, i, s) {
        var o = this.chart && this.chart.fixedRange,
            t = ie(i, this.translate(t, !0)),
            e = ie(s, this.translate(e, !0)),
            i = o && (e - t) / o;
        return i > .7 && i < 1.3 && (s ? t = e - o : e = t + o), ee(t) || (t = e = void 0), {
            min: t,
            max: e
        }
    }, ce.prototype.minFromRange = function() {
        var t, e, i, s = this.range,
            o = {
                month: "Month",
                year: "FullYear"
            }[s.type],
            n = this.max,
            r = function(t, e) {
                var i = new N(t);
                return i["set" + o](i["get" + o]() + e), i.getTime() - t
            };
        return ee(s) ? (t = this.max - s, i = s) : t = n + r(n, -s.count), e = ie(this.dataMin, Number.MIN_VALUE), ee(t) || (t = e), t <= e && (t = e, void 0 === i && (i = r(t, s.count)), this.newMax = ut(t + i, this.dataMax)), ee(n) || (t = void 0), t
    }, se(ve.prototype, "init", function(t, e, i) {
        jt(this, "init", function() {
            this.options.rangeSelector.enabled && (this.rangeSelector = new E(this))
        }), t.call(this, e, i)
    }), rt.RangeSelector = E, ve.prototype.callbacks.push(function(t) {
        function e() {
            s = t.xAxis[0].getExtremes(), ee(s.min) && n.render(s.min, s.max)
        }

        function i(t) {
            n.render(t.min, t.max)
        }
        var s, o = t.scroller,
            n = t.rangeSelector;
        o && (s = t.xAxis[0].getExtremes(), o.render(s.min, s.max)), n && (jt(t.xAxis[0], "afterSetExtremes", i), jt(t, "resize", e), e()), jt(t, "destroy", function() {
            n && (Zt(t, "resize", e), Zt(t.xAxis[0], "afterSetExtremes", i))
        })
    }), rt.StockChart = rt.stockChart = function(t, e, i) {
        var o, r = n(t) || t.nodeName,
            a = arguments[r ? 1 : 0],
            h = a.series,
            l = ie(a.navigator && a.navigator.enabled, !0) ? {
                startOnTick: !1,
                endOnTick: !1
            } : null,
            d = {
                marker: {
                    enabled: !1,
                    radius: 2
                }
            },
            p = {
                shadow: !1,
                borderWidth: 0
            };
        return a.xAxis = Ut(c(a.xAxis || {}), function(t) {
            return s({
                minPadding: 0,
                maxPadding: 0,
                ordinal: !0,
                title: {
                    text: null
                },
                labels: {
                    overflow: "justify"
                },
                showLastLabel: !0
            }, t, {
                type: "datetime",
                categories: null
            }, l)
        }), a.yAxis = Ut(c(a.yAxis || {}), function(t) {
            return o = ie(t.opposite, !0), s({
                labels: {
                    y: -2
                },
                opposite: o,
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, t)
        }), a.series = null, a = s({
            chart: {
                panning: !0,
                pinchType: "x"
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null,
                style: {
                    fontSize: "16px"
                }
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: d,
                spline: d,
                area: d,
                areaspline: d,
                arearange: d,
                areasplinerange: d,
                column: p,
                columnrange: p,
                candlestick: p,
                ohlc: p
            }
        }, a, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        }), a.series = h, r ? new ve(t, a, i) : new ve(a, e)
    }, se(ue.prototype, "init", function(t, e, i) {
        var s = i.chart.pinchType || "";
        t.call(this, e, i), this.pinchX = this.pinchHor = s.indexOf("x") !== -1, this.pinchY = this.pinchVert = s.indexOf("y") !== -1, this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
    }), se(ce.prototype, "autoLabelAlign", function(t) {
        var e = this.chart,
            i = this.options,
            e = e._labelPanes = e._labelPanes || {},
            s = this.options.labels;
        return this.chart.options._stock && "yAxis" === this.coll && (i = i.top + "," + i.height, !e[i] && s.enabled) ? (15 === s.x && (s.x = 0), void 0 === s.align && (s.align = "right"), e[i] = 1, "right") : t.call(this, [].slice.call(arguments, 1))
    }), se(ce.prototype, "getPlotLinePath", function(t, e, i, s, o, n) {
        var r, a, l, c, d, p, u = this,
            f = this.isLinked && !this.series ? this.linkedParent.series : this.series,
            g = u.chart,
            m = g.renderer,
            x = u.left,
            y = u.top,
            v = [],
            b = [];
        return "colorAxis" === u.coll ? t.apply(this, [].slice.call(arguments, 1)) : (b = u.isXAxis ? h(u.options.yAxis) ? [g.yAxis[u.options.yAxis]] : Ut(f, function(t) {
            return t.yAxis
        }) : h(u.options.xAxis) ? [g.xAxis[u.options.xAxis]] : Ut(f, function(t) {
            return t.xAxis
        }), Nt(u.isXAxis ? g.yAxis : g.xAxis, function(t) {
            if (h(t.options.id) ? t.options.id.indexOf("navigator") === -1 : 1) {
                var e = t.isXAxis ? "yAxis" : "xAxis",
                    e = h(t.options[e]) ? g[e][t.options[e]] : g[e][0];
                u === e && b.push(t)
            }
        }), d = b.length ? [] : [u.isXAxis ? g.yAxis[0] : g.xAxis[0]], Nt(b, function(t) {
            Ft(t, d) === -1 && d.push(t)
        }), p = ie(n, u.translate(e, null, null, s)), ee(p) && (u.horiz ? Nt(d, function(t) {
            var e;
            a = t.pos, c = a + t.len, r = l = lt(p + u.transB), (r < x || r > x + u.width) && (o ? r = l = ut(pt(x, r), x + u.width) : e = !0), e || v.push("M", r, a, "L", l, c)
        }) : Nt(d, function(t) {
            var e;
            r = t.pos, l = r + t.len, a = c = lt(y + u.height - p), (a < y || a > y + u.height) && (o ? a = c = ut(pt(y, a), u.top + u.height) : e = !0), e || v.push("M", r, a, "L", l, c)
        })), v.length > 0 ? m.crispPolyLine(v, i || 1) : null)
    }), ce.prototype.getPlotBandPath = function(t, e) {
        var i, s = this.getPlotLinePath(e, null, null, !0),
            o = this.getPlotLinePath(t, null, null, !0),
            n = [];
        if (o && s && o.toString() !== s.toString())
            for (i = 0; i < o.length; i += 6) n.push("M", o[i + 1], o[i + 2], "L", o[i + 4], o[i + 5], s[i + 4], s[i + 5], s[i + 1], s[i + 2]);
        else n = null;
        return n
    }, re.prototype.crispPolyLine = function(t, e) {
        var i;
        for (i = 0; i < t.length; i += 6) t[i + 1] === t[i + 4] && (t[i + 1] = t[i + 4] = lt(t[i + 1]) - e % 2 / 2), t[i + 2] === t[i + 5] && (t[i + 2] = t[i + 5] = lt(t[i + 2]) + e % 2 / 2);
        return t
    }, X === rt.VMLRenderer && (ae.prototype.crispPolyLine = re.prototype.crispPolyLine), se(ce.prototype, "hideCrosshair", function(t, e) {
        t.call(this, e), this.crossLabel && (this.crossLabel = this.crossLabel.hide())
    }), se(ce.prototype, "drawCrosshair", function(t, e, i) {
        var s, o;
        if (t.call(this, e, i), h(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
            var n, t = this.chart,
                r = this.options.crosshair.label,
                a = this.horiz,
                l = this.opposite,
                c = this.left,
                d = this.top,
                p = this.crossLabel,
                u = r.format,
                f = "",
                g = "inside" === this.options.tickPosition,
                m = this.crosshair.snap !== !1,
                y = 0;
            e || (e = this.cross && this.cross.e), n = a ? "center" : l ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", p || (p = this.crossLabel = t.renderer.label(null, null, null, r.shape || "callout").attr({
                align: r.align || n,
                zIndex: 12,
                fill: r.backgroundColor || this.series[0] && this.series[0].color || "gray",
                padding: ie(r.padding, 8),
                stroke: r.borderColor || "",
                "stroke-width": r.borderWidth || 0,
                r: ie(r.borderRadius, 3)
            }).css(Qt({
                color: "white",
                fontWeight: "normal",
                fontSize: "11px",
                textAlign: "center"
            }, r.style)).add()), a ? (n = m ? i.plotX + c : e.chartX, d += l ? 0 : this.height) : (n = l ? this.width + c : 0, d = m ? i.plotY + d : e.chartY), !u && !r.formatter && (this.isDatetimeAxis && (f = "%b %d, %Y"), u = "{value" + (f ? ":" + f : "") + "}"), e = m ? i[this.isXAxis ? "x" : "y"] : this.toValue(a ? e.chartX : e.chartY), p.attr({
                text: u ? x(u, {
                    value: e
                }) : r.formatter.call(this, e),
                x: n,
                y: d,
                visibility: "visible"
            }), e = p.getBBox(), a ? (g && !l || !g && l) && (d = p.y - e.height) : d = p.y - e.height / 2, a ? (s = c - e.x, o = c + this.width - e.x) : (s = "left" === this.labelAlign ? c : 0, o = "right" === this.labelAlign ? c + this.width : t.chartWidth), p.translateX < s && (y = s - p.translateX), p.translateX + e.width >= o && (y = -(p.translateX + e.width - o)), p.attr({
                x: n + y,
                y: d,
                anchorX: a ? n : this.opposite ? 0 : t.chartWidth,
                anchorY: a ? this.opposite ? t.chartHeight : 0 : d + e.height / 2
            })
        }
    });
    var Xe = Pe.init,
        We = Pe.processData,
        He = ke.prototype.tooltipFormatter;
    return Pe.init = function() {
        Xe.apply(this, arguments), this.setCompare(this.options.compare)
    }, Pe.setCompare = function(t) {
        this.modifyValue = "value" === t || "percent" === t ? function(e, i) {
            var s = this.compareValue;
            return e !== R && (e = "value" === t ? e - s : e = 100 * (e / s) - 100, i) && (i.change = e), e
        } : null, this.userOptions.compare = t, this.chart.hasRendered && (this.isDirty = !0)
    }, Pe.processData = function() {
        var t, e, i, s, o, n = -1;
        if (We.apply(this, arguments), this.xAxis && this.processedYData)
            for (e = this.processedXData, i = this.processedYData, s = i.length, this.pointArrayMap && (n = Ft("close", this.pointArrayMap), n === -1 && (n = Ft(this.pointValKey || "y", this.pointArrayMap))), t = 0; t < s - 1; t++)
                if (o = n > -1 ? i[t][n] : i[t], ee(o) && e[t + 1] >= this.xAxis.min && 0 !== o) {
                    this.compareValue = o;
                    break
                }
    }, se(Pe, "getExtremes", function(t) {
        var e;
        t.apply(this, [].slice.call(arguments, 1)), this.modifyValue && (e = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = k(e), this.dataMax = w(e))
    }), ce.prototype.setCompare = function(t, e) {
        this.isXAxis || (Nt(this.series, function(e) {
            e.setCompare(t)
        }), ie(e, !0) && this.chart.redraw())
    }, ke.prototype.tooltipFormatter = function(t) {
        return t = t.replace("{point.change}", (this.change > 0 ? "+" : "") + rt.numberFormat(this.change, ie(this.series.tooltipOptions.changeDecimals, 2))), He.apply(this, [t])
    }, se(we.prototype, "render", function(t) {
        this.chart.options._stock && this.xAxis && (!this.clipBox && this.animate ? (this.clipBox = s(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] ? ($t(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({
            width: this.xAxis.len,
            height: this.yAxis.len
        })) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len)), t.call(this)
    }), Qt(rt, {
        Color: L,
        Point: ke,
        Tick: I,
        Renderer: X,
        SVGElement: D,
        SVGRenderer: re,
        arrayMin: k,
        arrayMax: w,
        charts: Bt,
        correctFloat: T,
        dateFormat: Y,
        error: e,
        format: x,
        pathAnim: void 0,
        getOptions: function() {
            return G
        },
        hasBidiBug: Ct,
        isTouchDevice: Tt,
        setOptions: function(t) {
            return G = s(!0, G, t), C(), G
        },
        addEvent: jt,
        removeEvent: Zt,
        createElement: u,
        discardElement: S,
        css: p,
        each: Nt,
        map: Ut,
        merge: s,
        splat: c,
        stableSort: b,
        extendClass: f,
        pInt: o,
        svg: Mt,
        canvas: Lt,
        vml: !Mt && !Lt,
        product: "Highstock",
        version: "4.2.7"
    }), rt
});