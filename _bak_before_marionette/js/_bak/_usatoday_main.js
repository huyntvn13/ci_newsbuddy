/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
/**!
 * @preserve Color animation 20120928
 * http://www.bitstorm.org/jquery/color-animation/
 * Copyright 2011, 2012 Edwin Martin <edwin@bitstorm.org>
 * Released under the MIT and GPL licenses.
 */
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
/*   OnlineOpinion v5.6.2 Released: 7/26/2012. Compiled 07/26/2012 03:14:59 PM -0500 Branch: master f85964d08a7431113cc4cc29b4bea8abe31650d3 Components: Full The following code is Copyright 1998-2012 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab    */
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri(e) {
    for (var t = parseUri.options, i = t.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, s = 14; s--;) n[t.key[s]] = i[s] || "";
    return n[t.q.name] = {}, n[t.key[12]].replace(t.q.parser, function (e, i, s) {
        i && (n[t.q.name][i] = s)
    }), n
}(function (e, t) {
    function i(e) {
        var t = ft[e] = {};
        return K.each(e.split(tt), function (e, i) {
            t[i] = !0
        }), t
    }
    function n(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var s = "data-" + i.replace(mt, "-$1").toLowerCase();
            if (n = e.getAttribute(s), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : gt.test(n) ? K.parseJSON(n) : n
                } catch (r) {}
                K.data(e, i, n)
            } else n = t
        }
        return n
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function r() {
        return !1
    }
    function o() {
        return !0
    }
    function a(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function l(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function c(e, t, i) {
        if (t = t || 0, K.isFunction(t)) return K.grep(e, function (e, n) {
            var s = !! t.call(e, n, e);
            return s === i
        });
        if (t.nodeType) return K.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = K.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Rt.test(t)) return K.filter(t, n, !i);
            t = K.filter(t, n)
        }
        return K.grep(e, function (e) {
            return K.inArray(e, t) >= 0 === i
        })
    }
    function u(e) {
        var t = jt.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement) for (; t.length;) i.createElement(t.pop());
        return i
    }
    function h(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function d(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var i, n, s, r = K._data(e),
                o = K._data(t, r),
                a = r.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a) for (n = 0, s = a[i].length; s > n; n++) K.event.add(t, i, a[i][n])
            }
            o.data && (o.data = K.extend({}, o.data))
        }
    }
    function p(e, t) {
        var i;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Yt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
    }
    function f(e) {
        return e.getElementsByTagName !== t ? e.getElementsByTagName("*") : e.querySelectorAll !== t ? e.querySelectorAll("*") : []
    }
    function g(e) {
        Yt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function m(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = vi.length; s--;) if (t = vi[s] + i, t in e) return t;
        return n
    }
    function v(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }
    function y(e, t) {
        for (var i, n, s = [], r = 0, o = e.length; o > r; r++) i = e[r], i.style && (s[r] = K._data(i, "olddisplay"), t ? (s[r] || "none" !== i.style.display || (i.style.display = ""), "" === i.style.display && v(i) && (s[r] = K._data(i, "olddisplay", k(i.nodeName)))) : (n = ii(i, "display"), s[r] || "none" === n || K._data(i, "olddisplay", n)));
        for (r = 0; o > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }
    function b(e, t, i) {
        var n = ui.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }
    function w(e, t, i, n) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += K.css(e, i + mi[s], !0)), n ? ("content" === i && (r -= parseFloat(ii(e, "padding" + mi[s])) || 0), "margin" !== i && (r -= parseFloat(ii(e, "border" + mi[s] + "Width")) || 0)) : (r += parseFloat(ii(e, "padding" + mi[s])) || 0, "padding" !== i && (r += parseFloat(ii(e, "border" + mi[s] + "Width")) || 0));
        return r
    }
    function C(e, t, i) {
        var n = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = !0,
            r = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= n || null == n) {
            if (n = ii(e, t), (0 > n || null == n) && (n = e.style[t]), hi.test(n)) return n;
            s = r && (K.support.boxSizingReliable || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + w(e, t, i || (r ? "border" : "content"), s) + "px"
    }
    function k(e) {
        if (pi[e]) return pi[e];
        var t = K("<" + e + ">").appendTo(F.body),
            i = t.css("display");
        return t.remove(), ("none" === i || "" === i) && (ni = F.body.appendChild(ni || K.extend(F.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), si && ni.createElement || (si = (ni.contentWindow || ni.contentDocument).document, si.write("<!doctype html><html><body>"), si.close()), t = si.body.appendChild(si.createElement(e)), i = ii(t, "display"), F.body.removeChild(ni)), pi[e] = i, i
    }
    function x(e, t, i, n) {
        var s;
        if (K.isArray(t)) K.each(t, function (t, s) {
            i || wi.test(e) ? n(e, s) : x(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
        });
        else if (i || "object" !== K.type(t)) n(e, t);
        else for (s in t) x(e + "[" + s + "]", t[s], i, n)
    }
    function S(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s, r, o = t.toLowerCase().split(tt),
                a = 0,
                l = o.length;
            if (K.isFunction(i)) for (; l > a; a++) n = o[a], r = /^\+/.test(n), r && (n = n.substr(1) || "*"), s = e[n] = e[n] || [], s[r ? "unshift" : "push"](i)
        }
    }
    function T(e, i, n, s, r, o) {
        r = r || i.dataTypes[0], o = o || {}, o[r] = !0;
        for (var a, l = e[r], c = 0, u = l ? l.length : 0, h = e === Ri; u > c && (h || !a); c++) a = l[c](i, n, s), "string" == typeof a && (!h || o[a] ? a = t : (i.dataTypes.unshift(a), a = T(e, i, n, s, a, o)));
        return !h && a || o["*"] || (a = T(e, i, n, s, "*", o)), a
    }
    function E(e, i) {
        var n, s, r = K.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== t && ((r[n] ? e : s || (s = {}))[n] = i[n]);
        s && K.extend(!0, e, s)
    }
    function $(e, i, n) {
        var s, r, o, a, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (r in u) r in n && (i[u[r]] = n[r]);
        for (;
        "*" === c[0];) c.shift(), s === t && (s = e.mimeType || i.getResponseHeader("content-type"));
        if (s) for (r in l) if (l[r] && l[r].test(s)) {
            c.unshift(r);
            break
        }
        if (c[0] in n) o = c[0];
        else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : t
    }
    function _(e, t) {
        var i, n, s, r, o = e.dataTypes.slice(),
            a = o[0],
            l = {}, c = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), o[1]) for (i in e.converters) l[i.toLowerCase()] = e.converters[i];
        for (; s = o[++c];) if ("*" !== s) {
            if ("*" !== a && a !== s) {
                if (i = l[a + " " + s] || l["* " + s], !i) for (n in l) if (r = n.split(" "), r[1] === s && (i = l[a + " " + r[0]] || l["* " + r[0]])) {
                    i === !0 ? i = l[n] : l[n] !== !0 && (s = r[0], o.splice(c--, 0, s));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t);
                else try {
                    t = i(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: i ? u : "No conversion from " + a + " to " + s
                    }
                }
            }
            a = s
        }
        return {
            state: "success",
            data: t
        }
    }
    function A() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function I() {
        return setTimeout(function () {
            Xi = t
        }, 0), Xi = K.now()
    }
    function D(e, t) {
        K.each(t, function (t, i) {
            for (var n = (Zi[t] || []).concat(Zi["*"]), s = 0, r = n.length; r > s; s++) if (n[s].call(e, t, i)) return
        })
    }
    function O(e, t, i) {
        var n, s = 0,
            r = Ki.length,
            o = K.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                for (var t = Xi || I(), i = Math.max(0, l.startTime + l.duration - t), n = i / l.duration || 0, s = 1 - n, r = 0, a = l.tweens.length; a > r; r++) l.tweens[r].run(s);
                return o.notifyWith(e, [l, s, i]), 1 > s && a ? i : (o.resolveWith(e, [l]), !1)
            }, l = o.promise({
                elem: e,
                props: K.extend({}, t),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Xi || I(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = K.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (t) {
                    for (var i = 0, n = t ? l.tweens.length : 0; n > i; i++) l.tweens[i].run(1);
                    return t ? o.resolveWith(e, [l, t]) : o.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (N(c, l.opts.specialEasing); r > s; s++) if (n = Ki[s].call(l, e, c, l.opts)) return n;
        return D(l, c), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function N(e, t) {
        var i, n, s, r, o;
        for (i in e) if (n = K.camelCase(i), s = t[n], r = e[i], K.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), o = K.cssHooks[n], o && "expand" in o) {
            r = o.expand(r), delete e[n];
            for (i in r) i in e || (e[i] = r[i], t[i] = s)
        } else t[n] = s
    }
    function M(e, t, i) {
        var n, s, r, o, a, l, c, u, h, d = this,
            p = e.style,
            f = {}, g = [],
            m = e.nodeType && v(e);
        i.queue || (u = K._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function () {
            u.unqueued || h()
        }), u.unqueued++, d.always(function () {
            d.always(function () {
                u.unqueued--, K.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", K.support.shrinkWrapBlocks || d.done(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t) if (r = t[n], Yi.exec(r)) {
            if (delete t[n], l = l || "toggle" === r, r === (m ? "hide" : "show")) continue;
            g.push(n)
        }
        if (o = g.length) {
            a = K._data(e, "fxshow") || K._data(e, "fxshow", {}), "hidden" in a && (m = a.hidden), l && (a.hidden = !m), m ? K(e).show() : d.done(function () {
                K(e).hide()
            }), d.done(function () {
                var t;
                K.removeData(e, "fxshow", !0);
                for (t in f) K.style(e, t, f[t])
            });
            for (n = 0; o > n; n++) s = g[n], c = d.createTween(s, m ? a[s] : 0), f[s] = a[s] || K.style(e, s), s in a || (a[s] = c.start, m && (c.end = c.start, c.start = "width" === s || "height" === s ? 1 : 0))
        }
    }
    function R(e, t, i, n, s) {
        return new R.prototype.init(e, t, i, n, s)
    }
    function z(e, t) {
        var i, n = {
            height: e
        }, s = 0;
        for (t = t ? 1 : 0; 4 > s; s += 2 - t) i = mi[s], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }
    function L(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var j, B, F = e.document,
        H = e.location,
        q = e.navigator,
        W = e.jQuery,
        V = e.$,
        U = Array.prototype.push,
        X = Array.prototype.slice,
        G = Array.prototype.indexOf,
        Y = Object.prototype.toString,
        Q = Object.prototype.hasOwnProperty,
        J = String.prototype.trim,
        K = function (e, t) {
            return new K.fn.init(e, t, j)
        }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        rt = /^[\],:{}\s]*$/,
        ot = /(?:^|:|,)(?:\s*\[)+/g,
        at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ct = /^-ms-/,
        ut = /-([\da-z])/gi,
        ht = function (e, t) {
            return (t + "").toUpperCase()
        }, dt = function () {
            F.addEventListener ? (F.removeEventListener("DOMContentLoaded", dt, !1), K.ready()) : "complete" === F.readyState && (F.detachEvent("onreadystatechange", dt), K.ready())
        }, pt = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function (e, i, n) {
            var s, r, o;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : nt.exec(e), !s || !s[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                if (s[1]) return i = i instanceof K ? i[0] : i, o = i && i.nodeType ? i.ownerDocument || i : F, e = K.parseHTML(s[1], o, !0), st.test(s[1]) && K.isPlainObject(i) && this.attr.call(e, i, !0), K.merge(this, e);
                if (r = F.getElementById(s[2]), r && r.parentNode) {
                    if (r.id !== s[2]) return n.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = F, this.selector = e, this
            }
            return K.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return X.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, i) {
            var n = K.merge(this.constructor(), e);
            return n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
        },
        each: function (e, t) {
            return K.each(this, e, t)
        },
        ready: function (e) {
            return K.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(K.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function () {
        var e, i, n, s, r, o, a = arguments[0] || {}, l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || K.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (e = arguments[l])) for (i in e) n = a[i], s = e[i], a !== s && (u && s && (K.isPlainObject(s) || (r = K.isArray(s))) ? (r ? (r = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, a[i] = K.extend(u, o, s)) : s !== t && (a[i] = s));
        return a
    }, K.extend({
        noConflict: function (t) {
            return e.$ === K && (e.$ = V), t && e.jQuery === K && (e.jQuery = W), K
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!F.body) return setTimeout(K.ready, 1);
                K.isReady = !0, e !== !0 && --K.readyWait > 0 || (B.resolveWith(F, [K]), K.fn.trigger && K(F).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === K.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : pt[Y.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            var n;
            for (n in e);
            return n === t || Q.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, i) {
            var n;
            return e && "string" == typeof e ? ("boolean" == typeof t && (i = t, t = 0), t = t || F, (n = st.exec(e)) ? [t.createElement(n[1])] : (n = K.buildFragment([e], t, i ? null : []), K.merge([], (n.cacheable ? K.clone(n.fragment) : n.fragment).childNodes))) : null
        },
        parseJSON: function (i) {
            return i && "string" == typeof i ? (i = K.trim(i), e.JSON && e.JSON.parse ? e.JSON.parse(i) : rt.test(i.replace(at, "@").replace(lt, "]").replace(ot, "")) ? Function("return " + i)() : (K.error("Invalid JSON: " + i), t)) : null
        },
        parseXML: function (i) {
            var n, s;
            if (!i || "string" != typeof i) return null;
            try {
                e.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
            } catch (r) {
                n = t
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + i), n
        },
        noop: function () {},
        globalEval: function (t) {
            t && et.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ct, "ms-").replace(ut, ht)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, i, n) {
            var s, r = 0,
                o = e.length,
                a = o === t || K.isFunction(e);
            if (n) if (a) {
                for (s in e) if (i.apply(e[s], n) === !1) break
            } else for (; o > r && i.apply(e[r++], n) !== !1;);
            else if (a) {
                for (s in e) if (i.call(e[s], s, e[s]) === !1) break
            } else for (; o > r && i.call(e[r], r, e[r++]) !== !1;);
            return e
        },
        trim: J && !J.call("﻿ ") ? function (e) {
            return null == e ? "" : J.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(it, "")
        },
        makeArray: function (e, t) {
            var i, n = t || [];
            return null != e && (i = K.type(e), null == e.length || "string" === i || "function" === i || "regexp" === i || K.isWindow(e) ? U.call(n, e) : K.merge(n, e)), n
        },
        inArray: function (e, t, i) {
            var n;
            if (t) {
                if (G) return G.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function (e, i) {
            var n = i.length,
                s = e.length,
                r = 0;
            if ("number" == typeof n) for (; n > r; r++) e[s++] = i[r];
            else for (; i[r] !== t;) e[s++] = i[r++];
            return e.length = s, e
        },
        grep: function (e, t, i) {
            var n, s = [],
                r = 0,
                o = e.length;
            for (i = !! i; o > r; r++) n = !! t(e[r], r), i !== n && s.push(e[r]);
            return s
        },
        map: function (e, i, n) {
            var s, r, o = [],
                a = 0,
                l = e.length,
                c = e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e));
            if (c) for (; l > a; a++) s = i(e[a], a, n), null != s && (o[o.length] = s);
            else for (r in e) s = i(e[r], r, n), null != s && (o[o.length] = s);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, i) {
            var n, s, r;
            return "string" == typeof i && (n = e[i], i = e, e = n), K.isFunction(e) ? (s = X.call(arguments, 2), r = function () {
                return e.apply(i, s.concat(X.call(arguments)))
            }, r.guid = e.guid = e.guid || K.guid++, r) : t
        },
        access: function (e, i, n, s, r, o, a) {
            var l, c = null == n,
                u = 0,
                h = e.length;
            if (n && "object" == typeof n) {
                for (u in n) K.access(e, i, u, n[u], 1, o, s);
                r = 1
            } else if (s !== t) {
                if (l = a === t && K.isFunction(s), c && (l ? (l = i, i = function (e, t, i) {
                    return l.call(K(e), i)
                }) : (i.call(e, s), i = null)), i) for (; h > u; u++) i(e[u], n, l ? s.call(e[u], u, i(e[u], n)) : s, a);
                r = 1
            }
            return r ? e : c ? i.call(e) : h ? i(e[0], n) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), K.ready.promise = function (t) {
        if (!B) if (B = K.Deferred(), "complete" === F.readyState) setTimeout(K.ready, 1);
        else if (F.addEventListener) F.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", K.ready, !1);
        else {
            F.attachEvent("onreadystatechange", dt), e.attachEvent("onload", K.ready);
            var i = !1;
            try {
                i = null == e.frameElement && F.documentElement
            } catch (n) {}
            i && i.doScroll && function s() {
                if (!K.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(s, 50)
                    }
                    K.ready()
                }
            }()
        }
        return B.promise(t)
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        pt["[object " + t + "]"] = t.toLowerCase()
    }), j = K(F);
    var ft = {};
    K.Callbacks = function (e) {
        e = "string" == typeof e ? ft[e] || i(e) : K.extend({}, e);
        var n, s, r, o, a, l, c = [],
            u = !e.once && [],
            h = function (t) {
                for (n = e.memory && t, s = !0, l = o || 0, o = 0, a = c.length, r = !0; c && a > l; l++) if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                r = !1, c && (u ? u.length && h(u.shift()) : n ? c = [] : d.disable())
            }, d = {
                add: function () {
                    if (c) {
                        var t = c.length;
                        (function i(t) {
                            K.each(t, function (t, n) {
                                var s = K.type(n);
                                "function" === s ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== s && i(n)
                            })
                        })(arguments), r ? a = c.length : n && (o = t, h(n))
                    }
                    return this
                },
                remove: function () {
                    return c && K.each(arguments, function (e, t) {
                        for (var i;
                        (i = K.inArray(t, c, i)) > -1;) c.splice(i, 1), r && (a >= i && a--, l >= i && l--)
                    }), this
                },
                has: function (e) {
                    return K.inArray(e, c) > -1
                },
                empty: function () {
                    return c = [], this
                },
                disable: function () {
                    return c = u = n = t, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = t, n || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !c || s && !u || (r ? u.push(t) : h(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return d
    }, K.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                ["notify", "progress", K.Callbacks("memory")]
            ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return K.Deferred(function (i) {
                            K.each(t, function (t, n) {
                                var r = n[0],
                                    o = e[t];
                                s[n[1]](K.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && K.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === s ? i : this, [e])
                                } : i[r])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? K.extend(e, n) : n
                    }
                }, s = {};
            return n.pipe = n.then, K.each(t, function (e, r) {
                var o = r[2],
                    a = r[3];
                n[r[1]] = o.add, a && o.add(function () {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), s[r[0]] = o.fire, s[r[0] + "With"] = o.fireWith
            }), n.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var t, i, n, s = 0,
                r = X.call(arguments),
                o = r.length,
                a = 1 !== o || e && K.isFunction(e.promise) ? o : 0,
                l = 1 === a ? e : K.Deferred(),
                c = function (e, i, n) {
                    return function (s) {
                        i[e] = this, n[e] = arguments.length > 1 ? X.call(arguments) : s, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1) for (t = Array(o), i = Array(o), n = Array(o); o > s; s++) r[s] && K.isFunction(r[s].promise) ? r[s].promise().done(c(s, n, r)).fail(l.reject).progress(c(s, i, t)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), K.support = function () {
        var i, n, s, r, o, a, l, c, u, h, d, p = F.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), s = p.getElementsByTagName("a")[0], !n || !s || !n.length) return {};
        r = F.createElement("select"), o = r.appendChild(F.createElement("option")), a = p.getElementsByTagName("input")[0], s.style.cssText = "top:1px;float:left;opacity:.5", i = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(s.getAttribute("style")),
            hrefNormalized: "/a" === s.getAttribute("href"),
            opacity: /^0.5/.test(s.style.opacity),
            cssFloat: !! s.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !! F.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === F.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, i.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, i.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (f) {
            i.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", d = function () {
            i.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", d)), a = F.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), i.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), l = F.createDocumentFragment(), l.appendChild(p.lastChild), i.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, i.appendChecked = a.checked, l.removeChild(a), l.appendChild(p), p.attachEvent) for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + u, h = c in p, h || (p.setAttribute(c, "return;"), h = "function" == typeof p[c]), i[u + "Bubbles"] = h;
        return K(function () {
            var n, s, r, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                l = F.getElementsByTagName("body")[0];
            l && (n = F.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", l.insertBefore(n, l.firstChild), s = F.createElement("div"), n.appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = s.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", i.reliableHiddenOffsets = h && 0 === r[0].offsetHeight, s.innerHTML = "", s.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", i.boxSizing = 4 === s.offsetWidth, i.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, e.getComputedStyle && (i.pixelPosition = "1%" !== (e.getComputedStyle(s, null) || {}).top, i.boxSizingReliable = "4px" === (e.getComputedStyle(s, null) || {
                width: "4px"
            }).width, o = F.createElement("div"), o.style.cssText = s.style.cssText = a, o.style.marginRight = o.style.width = "0", s.style.width = "1px", s.appendChild(o), i.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), s.style.zoom !== t && (s.innerHTML = "", s.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", i.inlineBlockNeedsLayout = 3 === s.offsetWidth, s.style.display = "block", s.style.overflow = "visible", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", i.shrinkWrapBlocks = 3 !== s.offsetWidth, n.style.zoom = 1), l.removeChild(n), n = s = r = o = null)
        }), l.removeChild(p), n = s = r = o = a = l = p = null, i
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !! e && !s(e)
        },
        data: function (e, i, n, s) {
            if (K.acceptData(e)) {
                var r, o, a = K.expando,
                    l = "string" == typeof i,
                    c = e.nodeType,
                    u = c ? K.cache : e,
                    h = c ? e[a] : e[a] && a;
                if (h && u[h] && (s || u[h].data) || !l || n !== t) return h || (c ? e[a] = h = K.deletedIds.pop() || K.guid++ : h = a), u[h] || (u[h] = {}, c || (u[h].toJSON = K.noop)), ("object" == typeof i || "function" == typeof i) && (s ? u[h] = K.extend(u[h], i) : u[h].data = K.extend(u[h].data, i)), r = u[h], s || (r.data || (r.data = {}), r = r.data), n !== t && (r[K.camelCase(i)] = n), l ? (o = r[i], null == o && (o = r[K.camelCase(i)])) : o = r, o
            }
        },
        removeData: function (e, t, i) {
            if (K.acceptData(e)) {
                var n, r, o, a = e.nodeType,
                    l = a ? K.cache : e,
                    c = a ? e[K.expando] : K.expando;
                if (l[c]) {
                    if (t && (n = i ? l[c] : l[c].data)) {
                        K.isArray(t) || (t in n ? t = [t] : (t = K.camelCase(t), t = t in n ? [t] : t.split(" ")));
                        for (r = 0, o = t.length; o > r; r++) delete n[t[r]];
                        if (!(i ? s : K.isEmptyObject)(n)) return
                    }(i || (delete l[c].data, s(l[c]))) && (a ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                }
            }
        },
        _data: function (e, t, i) {
            return K.data(e, t, i, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), K.fn.extend({
        data: function (e, i) {
            var s, r, o, a, l, c = this[0],
                u = 0,
                h = null;
            if (e === t) {
                if (this.length && (h = K.data(c), 1 === c.nodeType && !K._data(c, "parsedAttrs"))) {
                    for (o = c.attributes, l = o.length; l > u; u++) a = o[u].name, a.indexOf("data-") || (a = K.camelCase(a.substring(5)), n(c, a, h[a]));
                    K._data(c, "parsedAttrs", !0)
                }
                return h
            }
            return "object" == typeof e ? this.each(function () {
                K.data(this, e)
            }) : (s = e.split(".", 2), s[1] = s[1] ? "." + s[1] : "", r = s[1] + "!", K.access(this, function (i) {
                return i === t ? (h = this.triggerHandler("getData" + r, [s[0]]), h === t && c && (h = K.data(c, e), h = n(c, e, h)), h === t && s[1] ? this.data(s[0]) : h) : (s[1] = i, this.each(function () {
                    var t = K(this);
                    t.triggerHandler("setData" + r, s), K.data(this, e, i), t.triggerHandler("changeData" + r, s)
                }), t)
            }, null, i, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                K.removeData(this, e)
            })
        }
    }), K.extend({
        queue: function (e, i, n) {
            var s;
            return e ? (i = (i || "fx") + "queue", s = K._data(e, i), n && (!s || K.isArray(n) ? s = K._data(e, i, K.makeArray(n)) : s.push(n)), s || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = K.queue(e, t),
                n = i.length,
                s = i.shift(),
                r = K._queueHooks(e, t),
                o = function () {
                    K.dequeue(e, t)
                };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return K._data(e, i) || K._data(e, i, {
                empty: K.Callbacks("once memory").add(function () {
                    K.removeData(e, t + "queue", !0), K.removeData(e, i, !0)
                })
            })
        }
    }), K.fn.extend({
        queue: function (e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? K.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = K.queue(this, e, i);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                K.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, i) {
            var n, s = 1,
                r = K.Deferred(),
                o = this,
                a = this.length,
                l = function () {
                    --s || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; a--;) n = K._data(o[a], e + "queueHooks"), n && n.empty && (s++, n.empty.add(l));
            return l(), r.promise(i)
        }
    });
    var vt, yt, bt, wt = /[\t\r\n]/g,
        Ct = /\r/g,
        kt = /^(?:button|input)$/i,
        xt = /^(?:button|input|object|select|textarea)$/i,
        St = /^a(?:rea|)$/i,
        Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Et = K.support.getSetAttribute;
    K.fn.extend({
        attr: function (e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                K.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = K.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (i) {}
            })
        },
        addClass: function (e) {
            var t, i, n, s, r, o, a;
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e) for (t = e.split(tt), i = 0, n = this.length; n > i; i++) if (s = this[i], 1 === s.nodeType) if (s.className || 1 !== t.length) {
                for (r = " " + s.className + " ", o = 0, a = t.length; a > o; o++) 0 > r.indexOf(" " + t[o] + " ") && (r += t[o] + " ");
                s.className = K.trim(r)
            } else s.className = e;
            return this
        },
        removeClass: function (e) {
            var i, n, s, r, o, a, l;
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t) for (i = (e || "").split(tt), a = 0, l = this.length; l > a; a++) if (s = this[a], 1 === s.nodeType && s.className) {
                for (n = (" " + s.className + " ").replace(wt, " "), r = 0, o = i.length; o > r; r++) for (; n.indexOf(" " + i[r] + " ") >= 0;) n = n.replace(" " + i[r] + " ", " ");
                s.className = e ? K.trim(n) : ""
            }
            return this
        },
        toggleClass: function (e, t) {
            var i = typeof e,
                n = "boolean" == typeof t;
            return K.isFunction(e) ? this.each(function (i) {
                K(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i) for (var s, r = 0, o = K(this), a = t, l = e.split(tt); s = l[r++];) a = n ? a : !o.hasClass(s), o[a ? "addClass" : "removeClass"](s);
                else("undefined" === i || "boolean" === i) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var i, n, s, r = this[0]; {
                if (arguments.length) return s = K.isFunction(e), this.each(function (n) {
                    var r, o = K(this);
                    1 === this.nodeType && (r = s ? e.call(this, n, o.val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), i = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
                });
                if (r) return i = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, n = e.options, s = e.selectedIndex, r = "select-one" === e.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++) if (i = n[l], !(!i.selected && l !== s || (K.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                        if (t = K(i).val(), r) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function (e, t) {
                    var i = K.makeArray(t);
                    return K(e).find("option").each(function () {
                        this.selected = K.inArray(K(this).val(), i) >= 0
                    }), i.length || (e.selectedIndex = -1), i
                }
            }
        },
        attrFn: {},
        attr: function (e, i, n, s) {
            var r, o, a, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return s && K.isFunction(K.fn[i]) ? K(e)[i](n) : e.getAttribute === t ? K.prop(e, i, n) : (a = 1 !== l || !K.isXMLDoc(e), a && (i = i.toLowerCase(), o = K.attrHooks[i] || (Tt.test(i) ? yt : vt)), n !== t ? null === n ? (K.removeAttr(e, i), t) : o && "set" in o && a && (r = o.set(e, n, i)) !== t ? r : (e.setAttribute(i, n + ""), n) : o && "get" in o && a && null !== (r = o.get(e, i)) ? r : (r = e.getAttribute(i), null === r ? t : r))
        },
        removeAttr: function (e, t) {
            var i, n, s, r, o = 0;
            if (t && 1 === e.nodeType) for (n = t.split(tt); n.length > o; o++) s = n[o], s && (i = K.propFix[s] || s, r = Tt.test(s), r || K.attr(e, s, ""), e.removeAttribute(Et ? s : i), r && i in e && (e[i] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (kt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return vt && K.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                },
                set: function (e, i, n) {
                    return vt && K.nodeName(e, "button") ? vt.set(e, i, n) : (e.value = i, t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, i, n) {
            var s, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !K.isXMLDoc(e), o && (i = K.propFix[i] || i, r = K.propHooks[i]), n !== t ? r && "set" in r && (s = r.set(e, n, i)) !== t ? s : e[i] = n : r && "get" in r && null !== (s = r.get(e, i)) ? s : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var i = e.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : xt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), yt = {
        get: function (e, i) {
            var n, s = K.prop(e, i);
            return s === !0 || "boolean" != typeof s && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
        },
        set: function (e, t, i) {
            var n;
            return t === !1 ? K.removeAttr(e, i) : (n = K.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
        }
    }, Et || (bt = {
        name: !0,
        id: !0,
        coords: !0
    }, vt = K.valHooks.button = {
        get: function (e, i) {
            var n;
            return n = e.getAttributeNode(i), n && (bt[i] ? "" !== n.value : n.specified) ? n.value : t
        },
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || (n = F.createAttribute(i), e.setAttributeNode(n)), n.value = t + ""
        }
    }, K.each(["width", "height"], function (e, i) {
        K.attrHooks[i] = K.extend(K.attrHooks[i], {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(i, "auto"), n) : t
            }
        })
    }), K.attrHooks.contenteditable = {
        get: vt.get,
        set: function (e, t, i) {
            "" === t && (t = "false"), vt.set(e, t, i)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function (e, i) {
        K.attrHooks[i] = K.extend(K.attrHooks[i], {
            get: function (e) {
                var n = e.getAttribute(i, 2);
                return null === n ? t : n
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function (e, i) {
                return K.isArray(i) ? e.checked = K.inArray(K(e).val(), i) >= 0 : t
            }
        })
    });
    var $t = /^(?:textarea|input|select)$/i,
        _t = /^([^\.]*|)(?:\.(.+)|)$/,
        At = /(?:^|\s)hover(\.\S+|)\b/,
        Pt = /^key/,
        It = /^(?:mouse|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        Ot = function (e) {
            return K.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
        };
    K.event = {
        add: function (e, i, n, s, r) {
            var o, a, l, c, u, h, d, p, f, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (o = K._data(e))) {
                for (n.handler && (f = n, n = f.handler, r = f.selector), n.guid || (n.guid = K.guid++), l = o.events, l || (o.events = l = {}), a = o.handle, a || (o.handle = a = function (e) {
                    return K === t || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), i = K.trim(Ot(i)).split(" "), c = 0; i.length > c; c++) u = _t.exec(i[c]) || [], h = u[1], d = (u[2] || "").split(".").sort(), m = K.event.special[h] || {}, h = (r ? m.delegateType : m.bindType) || h, m = K.event.special[h] || {}, p = K.extend({
                    type: h,
                    origType: u[1],
                    data: s,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && K.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, f), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(e, s, d, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? g.splice(g.delegateCount++, 0, p) : g.push(p), K.event.global[h] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, i, n, s) {
            var r, o, a, l, c, u, h, d, p, f, g, m = K.hasData(e) && K._data(e);
            if (m && (d = m.events)) {
                for (t = K.trim(Ot(t || "")).split(" "), r = 0; t.length > r; r++) if (o = _t.exec(t[r]) || [], a = l = o[1], c = o[2], a) {
                    for (p = K.event.special[a] || {}, a = (n ? p.delegateType : p.bindType) || a, f = d[a] || [], u = f.length, c = c ? RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0; f.length > h; h++) g = f[h], !s && l !== g.origType || i && i.guid !== g.guid || c && !c.test(g.namespace) || n && n !== g.selector && ("**" !== n || !g.selector) || (f.splice(h--, 1), g.selector && f.delegateCount--, p.remove && p.remove.call(e, g));
                    0 === f.length && u !== f.length && (p.teardown && p.teardown.call(e, c, m.handle) !== !1 || K.removeEvent(e, a, m.handle), delete d[a])
                } else for (a in d) K.event.remove(e, a + t[r], i, n, !0);
                K.isEmptyObject(d) && (delete m.handle, K.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (i, n, s, r) {
            if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
                var o, a, l, c, u, h, d, p, f, g, m = i.type || i,
                    v = [];
                if (!Dt.test(m + K.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), s && !K.event.customEvent[m] || K.event.global[m])) if (i = "object" == typeof i ? i[K.expando] ? i : new K.Event(m, i) : new K.Event(m), i.type = m, i.isTrigger = !0, i.exclusive = a, i.namespace = v.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0 > m.indexOf(":") ? "on" + m : "", s) {
                    if (i.result = t, i.target || (i.target = s), n = null != n ? K.makeArray(n) : [], n.unshift(i), d = K.event.special[m] || {}, !d.trigger || d.trigger.apply(s, n) !== !1) {
                        if (f = [
                            [s, d.bindType || m]
                        ], !r && !d.noBubble && !K.isWindow(s)) {
                            for (g = d.delegateType || m, c = Dt.test(g + m) ? s : s.parentNode, u = s; c; c = c.parentNode) f.push([c, g]), u = c;
                            u === (s.ownerDocument || F) && f.push([u.defaultView || u.parentWindow || e, g])
                        }
                        for (l = 0; f.length > l && !i.isPropagationStopped(); l++) c = f[l][0], i.type = f[l][1], p = (K._data(c, "events") || {})[i.type] && K._data(c, "handle"), p && p.apply(c, n), p = h && c[h], p && K.acceptData(c) && p.apply && p.apply(c, n) === !1 && i.preventDefault();
                        return i.type = m, r || i.isDefaultPrevented() || d._default && d._default.apply(s.ownerDocument, n) !== !1 || "click" === m && K.nodeName(s, "a") || !K.acceptData(s) || h && s[m] && ("focus" !== m && "blur" !== m || 0 !== i.target.offsetWidth) && !K.isWindow(s) && (u = s[h], u && (s[h] = null), K.event.triggered = m, s[m](), K.event.triggered = t, u && (s[h] = u)), i.result
                    }
                } else {
                    o = K.cache;
                    for (l in o) o[l].events && o[l].events[m] && K.event.trigger(i, n, o[l].handle.elem, !0)
                }
            }
        },
        dispatch: function (i) {
            i = K.event.fix(i || e.event);
            var n, s, r, o, a, l, c, u, h, d = (K._data(this, "events") || {})[i.type] || [],
                p = d.delegateCount,
                f = X.call(arguments),
                g = !i.exclusive && !i.namespace,
                m = K.event.special[i.type] || {}, v = [];
            if (f[0] = i, i.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, i) !== !1) {
                if (p && (!i.button || "click" !== i.type)) for (r = i.target; r != this; r = r.parentNode || this) if (r.disabled !== !0 || "click" !== i.type) {
                    for (a = {}, c = [], n = 0; p > n; n++) u = d[n], h = u.selector, a[h] === t && (a[h] = u.needsContext ? K(h, this).index(r) >= 0 : K.find(h, this, null, [r]).length), a[h] && c.push(u);
                    c.length && v.push({
                        elem: r,
                        matches: c
                    })
                }
                for (d.length > p && v.push({
                    elem: this,
                    matches: d.slice(p)
                }), n = 0; v.length > n && !i.isPropagationStopped(); n++) for (l = v[n], i.currentTarget = l.elem, s = 0; l.matches.length > s && !i.isImmediatePropagationStopped(); s++) u = l.matches[s], (g || !i.namespace && !u.namespace || i.namespace_re && i.namespace_re.test(u.namespace)) && (i.data = u.data, i.handleObj = u, o = ((K.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f), o !== t && (i.result = o, o === !1 && (i.preventDefault(), i.stopPropagation())));
                return m.postDispatch && m.postDispatch.call(this, i), i.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var n, s, r, o = i.button,
                    a = i.fromElement;
                return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || F, s = n.documentElement, r = n.body, e.pageX = i.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = i.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? i.toElement : a), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[K.expando]) return e;
            var t, i, n = e,
                s = K.event.fixHooks[e.type] || {}, r = s.props ? this.props.concat(s.props) : this.props;
            for (e = K.Event(n), t = r.length; t;) i = r[--t], e[i] = n[i];
            return e.target || (e.target = n.srcElement || F), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, n) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, i) {
                    K.isWindow(this) && (this.onbeforeunload = i)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var s = K.extend(new K.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? K.event.trigger(s, null, t) : K.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, K.event.handle = K.event.dispatch, K.removeEvent = F.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, i, n) {
        var s = "on" + i;
        e.detachEvent && (e[s] === t && (e[s] = null), e.detachEvent(s, n))
    }, K.Event = function (e, i) {
        return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? o : r) : this.type = e, i && K.extend(this, i), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, t) : new K.Event(e, i)
    }, K.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = o;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = o;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = o, this.stopPropagation()
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    s = e.relatedTarget,
                    r = e.handleObj;
                return r.selector, (!s || s !== n && !K.contains(n, s)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), K.support.submitBubbles || (K.event.special.submit = {
        setup: function () {
            return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function (e) {
                var i = e.target,
                    n = K.nodeName(i, "input") || K.nodeName(i, "button") ? i.form : t;
                n && !K._data(n, "_submit_attached") && (K.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), K._data(n, "_submit_attached", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), t)
        }
    }), K.support.changeBubbles || (K.event.special.change = {
        setup: function () {
            return $t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), K.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
            })), !1) : (K.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $t.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0)
                }), K._data(t, "_change_attached", !0))
            }), t)
        },
        handle: function (e) {
            var i = e.target;
            return this !== i || e.isSimulated || e.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return K.event.remove(this, "._change"), !$t.test(this.nodeName)
        }
    }), K.support.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = 0,
            n = function (e) {
                K.event.simulate(t, e.target, K.event.fix(e), !0)
            };
        K.event.special[t] = {
            setup: function () {
                0 === i++ && F.addEventListener(e, n, !0)
            },
            teardown: function () {
                0 === --i && F.removeEventListener(e, n, !0)
            }
        }
    }), K.fn.extend({
        on: function (e, i, n, s, o) {
            var a, l;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = t);
                for (l in e) this.on(l, i, n, e[l], o);
                return this
            }
            if (null == n && null == s ? (s = i, n = i = t) : null == s && ("string" == typeof i ? (s = n, n = t) : (s = n, n = i, i = t)), s === !1) s = r;
            else if (!s) return this;
            return 1 === o && (a = s, s = function (e) {
                return K().off(e), a.apply(this, arguments)
            }, s.guid = a.guid || (a.guid = K.guid++)), this.each(function () {
                K.event.add(this, e, s, n, i)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, i, n) {
            var s, o;
            if (e && e.preventDefault && e.handleObj) return s = e.handleObj, K(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, i, e[o]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = r), this.each(function () {
                K.event.remove(this, e, n, i)
            })
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, i) {
            return K(this.context).on(e, this.selector, t, i), this
        },
        die: function (e, t) {
            return K(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        trigger: function (e, t) {
            return this.each(function () {
                K.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, i) {
            return this[0] ? K.event.trigger(e, i, this[0], !0) : t
        },
        toggle: function (e) {
            var t = arguments,
                i = e.guid || K.guid++,
                n = 0,
                s = function (i) {
                    var s = (K._data(this, "lastToggle" + e.guid) || 0) % n;
                    return K._data(this, "lastToggle" + e.guid, s + 1), i.preventDefault(), t[s].apply(this, arguments) || !1
                };
            for (s.guid = i; t.length > n;) t[n++].guid = i;
            return this.click(s)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        K.fn[t] = function (e, i) {
            return null == i && (i = e, e = null), arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }, Pt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), It.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
    }),
    function (e, t) {
        function i(e, t, i, n) {
            i = i || [], t = t || I;
            var s, r, o, a, l = t.nodeType;
            if (!e || "string" != typeof e) return i;
            if (1 !== l && 9 !== l) return [];
            if (o = C(t), !o && !n && (s = it.exec(e))) if (a = s[1]) {
                if (9 === l) {
                    if (r = t.getElementById(a), !r || !r.parentNode) return i;
                    if (r.id === a) return i.push(r), i
                } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && k(t, r) && r.id === a) return i.push(r), i
            } else {
                if (s[2]) return R.apply(i, z.call(t.getElementsByTagName(e), 0)), i;
                if ((a = s[3]) && dt && t.getElementsByClassName) return R.apply(i, z.call(t.getElementsByClassName(a), 0)), i
            }
            return g(e.replace(J, "$1"), t, i, n, o)
        }
        function n(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }
        function s(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function r(e) {
            return j(function (t) {
                return t = +t, j(function (i, n) {
                    for (var s, r = e([], i.length, t), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }
        function o(e, t, i) {
            if (e === t) return i;
            for (var n = e.nextSibling; n;) {
                if (n === t) return -1;
                n = n.nextSibling
            }
            return 1
        }
        function a(e, t) {
            var n, s, r, o, a, l, c, u = H[A][e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = b.preFilter; a;) {
                (!n || (s = Z.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])), n = !1, (s = et.exec(a)) && (r.push(n = new P(s.shift())), a = a.slice(n.length), n.type = s[0].replace(J, " "));
                for (o in b.filter)!(s = at[o].exec(a)) || c[o] && !(s = c[o](s)) || (r.push(n = new P(s.shift())), a = a.slice(n.length), n.type = o, n.matches = s);
                if (!n) break
            }
            return t ? a.length : a ? i.error(e) : H(e, l).slice(0)
        }
        function l(e, t, i) {
            var n = t.dir,
                s = i && "parentNode" === t.dir,
                r = N++;
            return t.first ? function (t, i, r) {
                for (; t = t[n];) if (s || 1 === t.nodeType) return e(t, i, r)
            } : function (t, i, o) {
                if (o) {
                    for (; t = t[n];) if ((s || 1 === t.nodeType) && e(t, i, o)) return t
                } else for (var a, l = O + " " + r + " ", c = l + v; t = t[n];) if (s || 1 === t.nodeType) {
                    if ((a = t[A]) === c) return t.sizset;
                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                        if (t.sizset) return t
                    } else {
                        if (t[A] = c, e(t, i, o)) return t.sizset = !0, t;
                        t.sizset = !1
                    }
                }
            }
        }
        function c(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var s = e.length; s--;) if (!e[s](t, i, n)) return !1;
                return !0
            } : e[0]
        }
        function u(e, t, i, n, s) {
            for (var r, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!i || i(r, n, s)) && (o.push(r), c && t.push(a));
            return o
        }
        function h(e, t, i, n, s, r) {
            return n && !n[A] && (n = h(n)), s && !s[A] && (s = h(s, r)), j(function (r, o, a, l) {
                var c, h, d, p = [],
                    g = [],
                    m = o.length,
                    v = r || f(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : u(v, p, e, a, l),
                    b = i ? s || (r ? e : m || n) ? [] : o : y;
                if (i && i(y, b, a, l), n) for (c = u(b, g), n(c, [], a, l), h = c.length; h--;)(d = c[h]) && (b[g[h]] = !(y[g[h]] = d));
                if (r) {
                    if (s || e) {
                        if (s) {
                            for (c = [], h = b.length; h--;)(d = b[h]) && c.push(y[h] = d);
                            s(null, b = [], c, l)
                        }
                        for (h = b.length; h--;)(d = b[h]) && (c = s ? L.call(r, d) : p[h]) > -1 && (r[c] = !(o[c] = d))
                    }
                } else b = u(b === o ? b.splice(m, b.length) : b), s ? s(null, o, b, l) : R.apply(o, b)
            })
        }
        function d(e) {
            for (var t, i, n, s = e.length, r = b.relative[e[0].type], o = r || b.relative[" "], a = r ? 1 : 0, u = l(function (e) {
                return e === t
            }, o, !0), p = l(function (e) {
                return L.call(t, e) > -1
            }, o, !0), f = [function (e, i, n) {
                return !r && (n || i !== E) || ((t = i).nodeType ? u(e, i, n) : p(e, i, n))
            }]; s > a; a++) if (i = b.relative[e[a].type]) f = [l(c(f), i)];
            else {
                if (i = b.filter[e[a].type].apply(null, e[a].matches), i[A]) {
                    for (n = ++a; s > n && !b.relative[e[n].type]; n++);
                    return h(a > 1 && c(f), a > 1 && e.slice(0, a - 1).join("").replace(J, "$1"), i, n > a && d(e.slice(a, n)), s > n && d(e = e.slice(n)), s > n && e.join(""))
                }
                f.push(i)
            }
            return c(f)
        }
        function p(e, t) {
            var n = t.length > 0,
                s = e.length > 0,
                r = function (o, a, l, c, h) {
                    var d, p, f, g = [],
                        m = 0,
                        y = "0",
                        w = o && [],
                        C = null != h,
                        k = E,
                        x = o || s && b.find.TAG("*", h && a.parentNode || a),
                        S = O += null == k ? 1 : Math.E;
                    for (C && (E = a !== I && a, v = r.el); null != (d = x[y]); y++) {
                        if (s && d) {
                            for (p = 0; f = e[p]; p++) if (f(d, a, l)) {
                                c.push(d);
                                break
                            }
                            C && (O = S, v = ++r.el)
                        }
                        n && ((d = !f && d) && m--, o && w.push(d))
                    }
                    if (m += y, n && y !== m) {
                        for (p = 0; f = t[p]; p++) f(w, g, a, l);
                        if (o) {
                            if (m > 0) for (; y--;) w[y] || g[y] || (g[y] = M.call(c));
                            g = u(g)
                        }
                        R.apply(c, g), C && !o && g.length > 0 && m + t.length > 1 && i.uniqueSort(c)
                    }
                    return C && (O = S, E = k), w
                };
            return r.el = 0, n ? j(r) : r
        }
        function f(e, t, n) {
            for (var s = 0, r = t.length; r > s; s++) i(e, t[s], n);
            return n
        }
        function g(e, t, i, n, s) {
            var r, o, l, c, u, h = a(e);
            if (h.length, !n && 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (l = o[0]).type && 9 === t.nodeType && !s && b.relative[o[1].type]) {
                    if (t = b.find.ID(l.matches[0].replace(ot, ""), t, s)[0], !t) return i;
                    e = e.slice(o.shift().length)
                }
                for (r = at.POS.test(e) ? -1 : o.length - 1; r >= 0 && (l = o[r], !b.relative[c = l.type]); r--) if ((u = b.find[c]) && (n = u(l.matches[0].replace(ot, ""), nt.test(o[0].type) && t.parentNode || t, s))) {
                    if (o.splice(r, 1), e = n.length && o.join(""), !e) return R.apply(i, z.call(n, 0)), i;
                    break
                }
            }
            return x(e, h)(n, t, s, i, nt.test(e)), i
        }
        function m() {}
        var v, y, b, w, C, k, x, S, T, E, $ = !0,
            _ = "undefined",
            A = ("sizcache" + Math.random()).replace(".", ""),
            P = String,
            I = e.document,
            D = I.documentElement,
            O = 0,
            N = 0,
            M = [].pop,
            R = [].push,
            z = [].slice,
            L = [].indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++) if (this[t] === e) return t;
                return -1
            }, j = function (e, t) {
                return e[A] = null == t || t, e
            }, B = function () {
                var e = {}, t = [];
                return j(function (i, n) {
                    return t.push(i) > b.cacheLength && delete e[t.shift()], e[i + " "] = n
                }, e)
            }, F = B(),
            H = B(),
            q = B(),
            W = "[\\x20\\t\\r\\n\\f]",
            V = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            U = V.replace("w", "w#"),
            X = "([*^$|!~]?=)",
            G = "\\[" + W + "*(" + V + ")" + W + "*(?:" + X + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + W + "*\\]",
            Y = ":(" + V + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)",
            Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)",
            J = RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
            Z = RegExp("^" + W + "*," + W + "*"),
            et = RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"),
            tt = RegExp(Y),
            it = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            nt = /[\x20\t\r\n\f]*[+~]/,
            st = /h\d/i,
            rt = /input|select|textarea|button/i,
            ot = /\\(?!\\)/g,
            at = {
                ID: RegExp("^#(" + V + ")"),
                CLASS: RegExp("^\\.(" + V + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + V + ")['\"]?\\]"),
                TAG: RegExp("^(" + V.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + G),
                PSEUDO: RegExp("^" + Y),
                POS: RegExp(Q, "i"),
                CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                needsContext: RegExp("^" + W + "*[>+~]|" + Q, "i")
            }, lt = function (e) {
                var t = I.createElement("div");
                try {
                    return e(t)
                } catch (i) {
                    return !1
                } finally {
                    t = null
                }
            }, ct = lt(function (e) {
                return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
            }),
            ut = lt(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== _ && "#" === e.firstChild.getAttribute("href")
            }),
            ht = lt(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }),
            dt = lt(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }),
            pt = lt(function (e) {
                e.id = A + 0, e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", D.insertBefore(e, D.firstChild);
                var t = I.getElementsByName && I.getElementsByName(A).length === 2 + I.getElementsByName(A + 0).length;
                return y = !I.getElementById(A), D.removeChild(e), t
            });
        try {
            z.call(D.childNodes, 0)[0].nodeType
        } catch (ft) {
            z = function (e) {
                for (var t, i = []; t = this[e]; e++) i.push(t);
                return i
            }
        }
        i.matches = function (e, t) {
            return i(e, null, null, t)
        }, i.matchesSelector = function (e, t) {
            return i(t, null, null, [e]).length > 0
        }, w = i.getText = function (e) {
            var t, i = "",
                n = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += w(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else for (; t = e[n]; n++) i += w(t);
            return i
        }, C = i.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, k = i.contains = D.contains ? function (e, t) {
            var i = 9 === e.nodeType ? e.documentElement : e,
                n = t && t.parentNode;
            return e === n || !! (n && 1 === n.nodeType && i.contains && i.contains(n))
        } : D.compareDocumentPosition ? function (e, t) {
            return t && !! (16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }, i.attr = function (e, t) {
            var i, n = C(e);
            return n || (t = t.toLowerCase()), (i = b.attrHandle[t]) ? i(e) : n || ht ? e.getAttribute(t) : (i = e.getAttributeNode(t), i ? "boolean" == typeof e[t] ? e[t] ? t : null : i.specified ? i.value : null : null)
        }, b = i.selectors = {
            cacheLength: 50,
            createPseudo: j,
            match: at,
            attrHandle: ut ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: y ? function (e, t, i) {
                    if (typeof t.getElementById !== _ && !i) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                } : function (e, i, n) {
                    if (typeof i.getElementById !== _ && !n) {
                        var s = i.getElementById(e);
                        return s ? s.id === e || typeof s.getAttributeNode !== _ && s.getAttributeNode("id").value === e ? [s] : t : []
                    }
                },
                TAG: ct ? function (e, i) {
                    return typeof i.getElementsByTagName !== _ ? i.getElementsByTagName(e) : t
                } : function (e, t) {
                    var i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var n, s = [], r = 0; n = i[r]; r++) 1 === n.nodeType && s.push(n);
                        return s
                    }
                    return i
                },
                NAME: pt && function (e, i) {
                    return typeof i.getElementsByName !== _ ? i.getElementsByName(name) : t
                },
                CLASS: dt && function (e, i, n) {
                    return typeof i.getElementsByClassName === _ || n ? t : i.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ot, ""), e[3] = (e[4] || e[5] || "").replace(ot, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || i.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && i.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, i;
                    return at.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (i = a(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = t), e.slice(0, 3))
                }
            },
            filter: {
                ID: y ? function (e) {
                    return e = e.replace(ot, ""),
                    function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace(ot, ""),
                    function (t) {
                        var i = typeof t.getAttributeNode !== _ && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                },
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(ot, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = F[A][e + " "];
                    return t || (t = RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && F(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== _ && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (s) {
                        var r = i.attr(s, e);
                        return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.substr(r.length - n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, i, n) {
                    return "nth" === e ? function (e) {
                        var t, s, r = e.parentNode;
                        if (1 === i && 0 === n) return !0;
                        if (r) for (s = 0, t = r.firstChild; t && (1 !== t.nodeType || (s++, e !== t)); t = t.nextSibling);
                        return s -= n, s === i || 0 === s % i && s / i >= 0
                    } : function (t) {
                        var i = t;
                        switch (e) {
                            case "only":
                            case "first":
                                for (; i = i.previousSibling;) if (1 === i.nodeType) return !1;
                                if ("first" === e) return !0;
                                i = t;
                            case "last":
                                for (; i = i.nextSibling;) if (1 === i.nodeType) return !1;
                                return !0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                    return s[A] ? s(t) : s.length > 1 ? (n = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? j(function (e, i) {
                        for (var n, r = s(e, t), o = r.length; o--;) n = L.call(e, r[o]), e[n] = !(i[n] = r[o])
                    }) : function (e) {
                        return s(e, 0, n)
                    }) : s
                }
            },
            pseudos: {
                not: j(function (e) {
                    var t = [],
                        i = [],
                        n = x(e.replace(J, "$1"));
                    return n[A] ? j(function (e, t, i, s) {
                        for (var r, o = n(e, null, s, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, s, r) {
                        return t[0] = e, n(t, null, r, i), !i.pop()
                    }
                }),
                has: j(function (e) {
                    return function (t) {
                        return i(e, t).length > 0
                    }
                }),
                contains: j(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !b.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    for (e = e.firstChild; e;) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return st.test(e.nodeName)
                },
                text: function (e) {
                    var t, i;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (i = e.getAttribute("type")) || i.toLowerCase() === t)
                },
                radio: n("radio"),
                checkbox: n("checkbox"),
                file: n("file"),
                password: n("password"),
                image: n("image"),
                submit: s("submit"),
                reset: s("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function (e) {
                    return rt.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: r(function () {
                    return [0]
                }),
                last: r(function (e, t) {
                    return [t - 1]
                }),
                eq: r(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: r(function (e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: r(function (e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: r(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: r(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; t > ++n;) e.push(n);
                    return e
                })
            }
        }, S = D.compareDocumentPosition ? function (e, t) {
            return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        } : function (e, t) {
            if (e === t) return T = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var i, n, s = [],
                r = [],
                a = e.parentNode,
                l = t.parentNode,
                c = a;
            if (a === l) return o(e, t);
            if (!a) return -1;
            if (!l) return 1;
            for (; c;) s.unshift(c), c = c.parentNode;
            for (c = l; c;) r.unshift(c), c = c.parentNode;
            i = s.length, n = r.length;
            for (var u = 0; i > u && n > u; u++) if (s[u] !== r[u]) return o(s[u], r[u]);
            return u === i ? o(e, r[u], -1) : o(s[u], t, 1)
        }, [0, 0].sort(S), $ = !T, i.uniqueSort = function (e) {
            var t, i = [],
                n = 1,
                s = 0;
            if (T = $, e.sort(S), T) {
                for (; t = e[n]; n++) t === e[n - 1] && (s = i.push(n));
                for (; s--;) e.splice(i[s], 1)
            }
            return e
        }, i.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, x = i.compile = function (e, t) {
            var i, n = [],
                s = [],
                r = q[A][e + " "];
            if (!r) {
                for (t || (t = a(e)), i = t.length; i--;) r = d(t[i]), r[A] ? n.push(r) : s.push(r);
                r = q(e, p(s, n))
            }
            return r
        }, I.querySelectorAll && function () {
            var e, t = g,
                n = /'|\\/g,
                s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                r = [":focus"],
                o = [":active"],
                l = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector;
            lt(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || r.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || r.push(":checked")
            }), lt(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && r.push("[*^$]=" + W + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || r.push(":enabled", ":disabled")
            }), r = RegExp(r.join("|")), g = function (e, i, s, o, l) {
                if (!o && !l && !r.test(e)) {
                    var c, u, h = !0,
                        d = A,
                        p = i,
                        f = 9 === i.nodeType && e;
                    if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                        for (c = a(e), (h = i.getAttribute("id")) ? d = h.replace(n, "\\$&") : i.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + c[u].join("");
                        p = nt.test(e) && i.parentNode || i, f = c.join(",")
                    }
                    if (f) try {
                        return R.apply(s, z.call(p.querySelectorAll(f), 0)), s
                    } catch (g) {} finally {
                        h || i.removeAttribute("id")
                    }
                }
                return t(e, i, s, o, l)
            }, l && (lt(function (t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), o.push("!=", Y)
                } catch (i) {}
            }), o = RegExp(o.join("|")), i.matchesSelector = function (t, n) {
                if (n = n.replace(s, "='$1']"), !C(t) && !o.test(n) && !r.test(n)) try {
                    var a = l.call(t, n);
                    if (a || e || t.document && 11 !== t.document.nodeType) return a
                } catch (c) {}
                return i(n, null, null, [t]).length > 0
            })
        }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, i.attr = K.attr, K.find = i, K.expr = i.selectors, K.expr[":"] = K.expr.pseudos, K.unique = i.uniqueSort, K.text = i.getText, K.isXMLDoc = i.isXML, K.contains = i.contains
    }(e);
    var Nt = /Until$/,
        Mt = /^(?:parents|prev(?:Until|All))/,
        Rt = /^.[^:#\[\.,]*$/,
        zt = K.expr.match.needsContext,
        Lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function (e) {
            var t, i, n, s, r, o, a = this;
            if ("string" != typeof e) return K(e).filter(function () {
                for (t = 0, i = a.length; i > t; t++) if (K.contains(a[t], this)) return !0
            });
            for (o = this.pushStack("", "find", e), t = 0, i = this.length; i > t; t++) if (n = o.length, K.find(e, this[t], o), t > 0) for (s = n; o.length > s; s++) for (r = 0; n > r; r++) if (o[r] === o[s]) {
                o.splice(s--, 1);
                break
            }
            return o
        },
        has: function (e) {
            var t, i = K(e, this),
                n = i.length;
            return this.filter(function () {
                for (t = 0; n > t; t++) if (K.contains(this, i[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(c(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(c(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? zt.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var i, n = 0, s = this.length, r = [], o = zt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; s > n; n++) for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
                if (o ? o.index(i) > -1 : K.find.matchesSelector(i, e)) {
                    r.push(i);
                    break
                }
                i = i.parentNode
            }
            return r = r.length > 1 ? K.unique(r) : r, this.pushStack(r, "closest", e)
        },
        index: function (e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var i = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                n = K.merge(this.get(), i);
            return this.pushStack(a(i[0]) || a(n[0]) ? n : K.unique(n))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), K.fn.andSelf = K.fn.addBack, K.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return K.dir(e, "parentNode", i)
        },
        next: function (e) {
            return l(e, "nextSibling")
        },
        prev: function (e) {
            return l(e, "previousSibling")
        },
        nextAll: function (e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return K.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return K.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return K.sibling(e.firstChild)
        },
        contents: function (e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function (e, t) {
        K.fn[e] = function (i, n) {
            var s = K.map(this, t, i);
            return Nt.test(e) || (n = i), n && "string" == typeof n && (s = K.filter(n, s)), s = this.length > 1 && !Lt[e] ? K.unique(s) : s, this.length > 1 && Mt.test(e) && (s = s.reverse()), this.pushStack(s, e, X.call(arguments).join(","))
        }
    }), K.extend({
        filter: function (e, t, i) {
            return i && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        },
        dir: function (e, i, n) {
            for (var s = [], r = e[i]; r && 9 !== r.nodeType && (n === t || 1 !== r.nodeType || !K(r).is(n));) 1 === r.nodeType && s.push(r), r = r[i];
            return s
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Bt = / jQuery\d+="(?:null|\d+)"/g,
        Ft = /^\s+/,
        Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qt = /<([\w:]+)/,
        Wt = /<tbody/i,
        Vt = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Xt = /<(?:script|object|embed|option|style)/i,
        Gt = RegExp("<(?:" + jt + ")[\\s/>]", "i"),
        Yt = /^(?:checkbox|radio)$/,
        Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jt = /\/(java|ecma)script/i,
        Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, ei = u(F),
        ti = ei.appendChild(F.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
        text: function (e) {
            return K.access(this, function (e) {
                return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return K.isFunction(e) ? this.each(function (t) {
                K(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = K(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = K.isFunction(e);
            return this.each(function (i) {
                K(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (!a(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if (!a(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            for (var i, n = 0; null != (i = this[n]); n++)(!e || K.filter(e, [i]).length) && (t || 1 !== i.nodeType || (K.cleanData(i.getElementsByTagName("*")), K.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return K.clone(this, e, t)
            })
        },
        html: function (e) {
            return K.access(this, function (e) {
                var i = this[0] || {}, n = 0,
                    s = this.length;
                if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Bt, "") : t;
                if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Gt.test(e) || !K.support.leadingWhitespace && Ft.test(e) || Zt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ht, "<$1></$2>");
                    try {
                        for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && (K.cleanData(i.getElementsByTagName("*")), i.innerHTML = e);
                        i = 0
                    } catch (r) {}
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function (t) {
                var i = K(this),
                    n = i.html();
                i.replaceWith(e.call(this, t, n))
            }) : ("string" != typeof e && (e = K(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    i = this.parentNode;
                K(this).remove(), t ? K(t).before(e) : K(i).append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, i, n) {
            e = [].concat.apply([], e);
            var s, r, o, a, l = 0,
                c = e[0],
                u = [],
                d = this.length;
            if (!K.support.checkClone && d > 1 && "string" == typeof c && Qt.test(c)) return this.each(function () {
                K(this).domManip(e, i, n)
            });
            if (K.isFunction(c)) return this.each(function (s) {
                var r = K(this);
                e[0] = c.call(this, s, i ? r.html() : t), r.domManip(e, i, n)
            });
            if (this[0]) {
                if (s = K.buildFragment(e, this, u), o = s.fragment, r = o.firstChild, 1 === o.childNodes.length && (o = r), r) for (i = i && K.nodeName(r, "tr"), a = s.cacheable || d - 1; d > l; l++) n.call(i && K.nodeName(this[l], "table") ? h(this[l], "tbody") : this[l], l === a ? o : K.clone(o, !0, !0));
                o = r = null, u.length && K.each(u, function (e, t) {
                    t.src ? K.ajax ? K.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), K.buildFragment = function (e, i, n) {
        var s, r, o, a = e[0];
        return i = i || F, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, !(1 === e.length && "string" == typeof a && 512 > a.length && i === F && "<" === a.charAt(0)) || Xt.test(a) || !K.support.checkClone && Qt.test(a) || !K.support.html5Clone && Gt.test(a) || (r = !0, s = K.fragments[a], o = s !== t), s || (s = i.createDocumentFragment(), K.clean(e, i, s, n), r && (K.fragments[a] = o && s)), {
            fragment: s,
            cacheable: r
        }
    }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        K.fn[e] = function (i) {
            var n, s = 0,
                r = [],
                o = K(i),
                a = o.length,
                l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return o[t](this[0]), this;
            for (; a > s; s++) n = (s > 0 ? this.clone(!0) : this).get(), K(o[s])[t](n), r = r.concat(n);
            return this.pushStack(r, e, o.selector)
        }
    }), K.extend({
        clone: function (e, t, i) {
            var n, s, r, o;
            if (K.support.html5Clone || K.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ti.innerHTML = e.outerHTML, ti.removeChild(o = ti.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (p(e, o), n = f(e), s = f(o), r = 0; n[r]; ++r) s[r] && p(n[r], s[r]);
            if (t && (d(e, o), i)) for (n = f(e), s = f(o), r = 0; n[r]; ++r) d(n[r], s[r]);
            return n = s = null, o
        },
        clean: function (e, i, n, s) {
            var r, o, a, l, c, h, d, p, f, m, v, y = i === F && ei,
                b = [];
            for (i && i.createDocumentFragment !== t || (i = F), r = 0; null != (a = e[r]); r++) if ("number" == typeof a && (a += ""), a) {
                if ("string" == typeof a) if (Vt.test(a)) {
                    for (y = y || u(i), d = i.createElement("div"), y.appendChild(d), a = a.replace(Ht, "<$1></$2>"), l = (qt.exec(a) || ["", ""])[1].toLowerCase(), c = Zt[l] || Zt._default, h = c[0], d.innerHTML = c[1] + a + c[2]; h--;) d = d.lastChild;
                    if (!K.support.tbody) for (p = Wt.test(a), f = "table" !== l || p ? "<table>" !== c[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = f.length - 1; o >= 0; --o) K.nodeName(f[o], "tbody") && !f[o].childNodes.length && f[o].parentNode.removeChild(f[o]);
                    !K.support.leadingWhitespace && Ft.test(a) && d.insertBefore(i.createTextNode(Ft.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
                } else a = i.createTextNode(a);
                a.nodeType ? b.push(a) : K.merge(b, a)
            }
            if (d && (a = d = y = null), !K.support.appendChecked) for (r = 0; null != (a = b[r]); r++) K.nodeName(a, "input") ? g(a) : a.getElementsByTagName !== t && K.grep(a.getElementsByTagName("input"), g);
            if (n) for (m = function (e) {
                return !e.type || Jt.test(e.type) ? s ? s.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : t
            }, r = 0; null != (a = b[r]); r++) K.nodeName(a, "script") && m(a) || (n.appendChild(a), a.getElementsByTagName !== t && (v = K.grep(K.merge([], a.getElementsByTagName("script")), m), b.splice.apply(b, [r + 1, 0].concat(v)), r += v.length));
            return b
        },
        cleanData: function (e, t) {
            for (var i, n, s, r, o = 0, a = K.expando, l = K.cache, c = K.support.deleteExpando, u = K.event.special; null != (s = e[o]); o++) if ((t || K.acceptData(s)) && (n = s[a], i = n && l[n])) {
                if (i.events) for (r in i.events) u[r] ? K.event.remove(s, r) : K.removeEvent(s, r, i.handle);
                l[n] && (delete l[n], c ? delete s[a] : s.removeAttribute ? s.removeAttribute(a) : s[a] = null, K.deletedIds.push(n))
            }
        }
    }),
    function () {
        var e, t;
        K.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = K.uaMatch(q.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function () {
            function e(t, i) {
                return new e.fn.init(t, i)
            }
            K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (i, n) {
                return n && n instanceof K && !(n instanceof e) && (n = e(n)), K.fn.init.call(this, i, n, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(F);
            return e
        }
    }();
    var ii, ni, si, ri = /alpha\([^)]*\)/i,
        oi = /opacity=([^)]*)/,
        ai = /^(top|right|bottom|left)$/,
        li = /^(none|table(?!-c[ea]).+)/,
        ci = /^margin/,
        ui = RegExp("^(" + Z + ")(.*)$", "i"),
        hi = RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        di = RegExp("^([-+])=(" + Z + ")", "i"),
        pi = {
            BODY: "block"
        }, fi = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, gi = {
            letterSpacing: 0,
            fontWeight: 400
        }, mi = ["Top", "Right", "Bottom", "Left"],
        vi = ["Webkit", "O", "Moz", "ms"],
        yi = K.fn.toggle;
    K.fn.extend({
        css: function (e, i) {
            return K.access(this, function (e, i, n) {
                return n !== t ? K.style(e, i, n) : K.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function () {
            return y(this, !0)
        },
        hide: function () {
            return y(this)
        },
        toggle: function (e, t) {
            var i = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? yi.apply(this, arguments) : this.each(function () {
                (i ? e : v(this)) ? K(this).show() : K(this).hide()
            })
        }
    }), K.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = ii(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, i, n, s) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, l = K.camelCase(i),
                    c = e.style;
                if (i = K.cssProps[l] || (K.cssProps[l] = m(c, l)), a = K.cssHooks[i] || K.cssHooks[l], n === t) return a && "get" in a && (r = a.get(e, !1, s)) !== t ? r : c[i];
                if (o = typeof n, "string" === o && (r = di.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(e, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || K.cssNumber[l] || (n += "px"), a && "set" in a && (n = a.set(e, n, s)) === t))) try {
                    c[i] = n
                } catch (u) {}
            }
        },
        css: function (e, i, n, s) {
            var r, o, a, l = K.camelCase(i);
            return i = K.cssProps[l] || (K.cssProps[l] = m(e.style, l)), a = K.cssHooks[i] || K.cssHooks[l], a && "get" in a && (r = a.get(e, !0, s)), r === t && (r = ii(e, i)), "normal" === r && i in gi && (r = gi[i]), n || s !== t ? (o = parseFloat(r), n || K.isNumeric(o) ? o || 0 : r) : r
        },
        swap: function (e, t, i) {
            var n, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            n = i.call(e);
            for (s in t) e.style[s] = r[s];
            return n
        }
    }), e.getComputedStyle ? ii = function (t, i) {
        var n, s, r, o, a = e.getComputedStyle(t, null),
            l = t.style;
        return a && (n = a.getPropertyValue(i) || a[i], "" !== n || K.contains(t.ownerDocument, t) || (n = K.style(t, i)), hi.test(n) && ci.test(i) && (s = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = n, n = a.width, l.width = s, l.minWidth = r, l.maxWidth = o)), n
    } : F.documentElement.currentStyle && (ii = function (e, t) {
        var i, n, s = e.currentStyle && e.currentStyle[t],
            r = e.style;
        return null == s && r && r[t] && (s = r[t]), hi.test(s) && !ai.test(t) && (i = r.left, n = e.runtimeStyle && e.runtimeStyle.left, n && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : s, s = r.pixelLeft + "px", r.left = i, n && (e.runtimeStyle.left = n)), "" === s ? "auto" : s
    }), K.each(["height", "width"], function (e, i) {
        K.cssHooks[i] = {
            get: function (e, n, s) {
                return n ? 0 === e.offsetWidth && li.test(ii(e, "display")) ? K.swap(e, fi, function () {
                    return C(e, i, s)
                }) : C(e, i, s) : t
            },
            set: function (e, t, n) {
                return b(e, t, n ? w(e, i, n, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function (e, t) {
            return oi.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var i = e.style,
                n = e.currentStyle,
                s = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, t >= 1 && "" === K.trim(r.replace(ri, "")) && i.removeAttribute && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = ri.test(r) ? r.replace(ri, s) : r + " " + s)
        }
    }), K(function () {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function (e, i) {
                return K.swap(e, {
                    display: "inline-block"
                }, function () {
                    return i ? ii(e, "marginRight") : t
                })
            }
        }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function (e, t) {
            K.cssHooks[t] = {
                get: function (e, i) {
                    if (i) {
                        var n = ii(e, t);
                        return hi.test(n) ? K(e).position()[t] + "px" : n
                    }
                }
            }
        })
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ii(e, "display"))
    }, K.expr.filters.visible = function (e) {
        return !K.expr.filters.hidden(e)
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        K.cssHooks[e + t] = {
            expand: function (i) {
                var n, s = "string" == typeof i ? i.split(" ") : [i],
                    r = {};
                for (n = 0; 4 > n; n++) r[e + mi[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, ci.test(e) || (K.cssHooks[e + t].set = b)
    });
    var bi = /%20/g,
        wi = /\[\]$/,
        Ci = /\r?\n/g,
        ki = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xi = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function () {
            return K.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || xi.test(this.nodeName) || ki.test(this.type))
            }).map(function (e, t) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ci, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ci, "\r\n")
                }
            }).get()
        }
    }), K.param = function (e, i) {
        var n, s = [],
            r = function (e, t) {
                t = K.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (i === t && (i = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
            r(this.name, this.value)
        });
        else for (n in e) x(n, e[n], i, r);
        return s.join("&").replace(bi, "+")
    };
    var Si, Ti, Ei = /#.*$/,
        $i = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _i = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Ai = /^(?:GET|HEAD)$/,
        Pi = /^\/\//,
        Ii = /\?/,
        Di = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Oi = /([?&])_=[^&]*/,
        Ni = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Mi = K.fn.load,
        Ri = {}, zi = {}, Li = ["*/"] + ["*"];
    try {
        Ti = H.href
    } catch (ji) {
        Ti = F.createElement("a"), Ti.href = "", Ti = Ti.href
    }
    Si = Ni.exec(Ti.toLowerCase()) || [], K.fn.load = function (e, i, n) {
        if ("string" != typeof e && Mi) return Mi.apply(this, arguments);
        if (!this.length) return this;
        var s, r, o, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), K.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (r = "POST"), K.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: i,
            complete: function (e, t) {
                n && a.each(n, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, a.html(s ? K("<div>").append(e.replace(Di, "")).find(s) : e)
        }), this
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        K.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), K.each(["get", "post"], function (e, i) {
        K[i] = function (e, n, s, r) {
            return K.isFunction(n) && (r = r || s, s = n, n = t), K.ajax({
                type: i,
                url: e,
                data: n,
                success: s,
                dataType: r
            })
        }
    }), K.extend({
        getScript: function (e, i) {
            return K.get(e, t, i, "script")
        },
        getJSON: function (e, t, i) {
            return K.get(e, t, i, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? E(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), E(e, t), e
        },
        ajaxSettings: {
            url: Ti,
            isLocal: _i.test(Si[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Li
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: S(Ri),
        ajaxTransport: S(zi),
        ajax: function (e, i) {
            function n(e, i, n, o) {
                var c, h, y, b, C, x = i;
                2 !== w && (w = 2, l && clearTimeout(l), a = t, r = o || "", k.readyState = e > 0 ? 4 : 0, n && (b = $(d, k, n)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (C = k.getResponseHeader("Last-Modified"), C && (K.lastModified[s] = C), C = k.getResponseHeader("Etag"), C && (K.etag[s] = C)), 304 === e ? (x = "notmodified", c = !0) : (c = _(d, b), x = c.state, h = c.data, y = c.error, c = !y)) : (y = x, (!x || e) && (x = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (i || x) + "", c ? g.resolveWith(p, [h, x, k]) : g.rejectWith(p, [k, x, y]), k.statusCode(v), v = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [k, d, c ? h : y]), m.fireWith(p, [k, x]), u && (f.trigger("ajaxComplete", [k, d]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var s, r, o, a, l, c, u, h, d = K.ajaxSetup({}, i),
                p = d.context || d,
                f = p !== d && (p.nodeType || p instanceof K) ? K(p) : K.event,
                g = K.Deferred(),
                m = K.Callbacks("once memory"),
                v = d.statusCode || {}, y = {}, b = {}, w = 0,
                C = "canceled",
                k = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!w) {
                            var i = e.toLowerCase();
                            e = b[i] = b[i] || e, y[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? r : null
                    },
                    getResponseHeader: function (e) {
                        var i;
                        if (2 === w) {
                            if (!o) for (o = {}; i = $i.exec(r);) o[i[1].toLowerCase()] = i[2];
                            i = o[e.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (e) {
                        return w || (d.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || C, a && a.abort(e), n(0, e), this
                    }
                };
            if (g.promise(k), k.success = k.done, k.error = k.fail, k.complete = m.add, k.statusCode = function (e) {
                if (e) {
                    var t;
                    if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                    else t = e[k.status], k.always(t)
                }
                return this
            }, d.url = ((e || d.url) + "").replace(Ei, "").replace(Pi, Si[1] + "//"), d.dataTypes = K.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (c = Ni.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === Si[1] && c[2] === Si[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Si[3] || ("http:" === Si[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), T(Ri, d, i, k), 2 === w) return k;
            if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Ai.test(d.type), u && 0 === K.active++ && K.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ii.test(d.url) ? "&" : "?") + d.data, delete d.data), s = d.url, d.cache === !1)) {
                var x = K.now(),
                    S = d.url.replace(Oi, "$1_=" + x);
                d.url = S + (S === d.url ? (Ii.test(d.url) ? "&" : "?") + "_=" + x : "")
            }(d.data && d.hasContent && d.contentType !== !1 || i.contentType) && k.setRequestHeader("Content-Type", d.contentType), d.ifModified && (s = s || d.url, K.lastModified[s] && k.setRequestHeader("If-Modified-Since", K.lastModified[s]), K.etag[s] && k.setRequestHeader("If-None-Match", K.etag[s])), k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Li + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers) k.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (d.beforeSend.call(p, k, d) === !1 || 2 === w)) return k.abort();
            C = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) k[h](d[h]);
            if (a = T(zi, d, i, k)) {
                k.readyState = 1, u && f.trigger("ajaxSend", [k, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    k.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, a.send(y, n)
                } catch (E) {
                    if (!(2 > w)) throw E;
                    n(-1, E)
                }
            } else n(-1, "No Transport");
            return k
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Bi = [],
        Fi = /\?/,
        Hi = /(=)\?(?=&|$)|\?\?/,
        qi = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Bi.pop() || K.expando + "_" + qi++;
            return this[e] = !0, e
        }
    }), K.ajaxPrefilter("json jsonp", function (i, n, s) {
        var r, o, a, l = i.data,
            c = i.url,
            u = i.jsonp !== !1,
            h = u && Hi.test(c),
            d = u && !h && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Hi.test(l);
        return "jsonp" === i.dataTypes[0] || h || d ? (r = i.jsonpCallback = K.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, o = e[r], h ? i.url = c.replace(Hi, "$1" + r) : d ? i.data = l.replace(Hi, "$1" + r) : u && (i.url += (Fi.test(c) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function () {
            return a || K.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", e[r] = function () {
            a = arguments
        }, s.always(function () {
            e[r] = o, i[r] && (i.jsonpCallback = n.jsonpCallback, Bi.push(r)), a && K.isFunction(o) && o(a[0]), a = o = t
        }), "script") : t
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return K.globalEval(e), e
            }
        }
    }), K.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), K.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
            return {
                send: function (s, r) {
                    i = F.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, s) {
                        (s || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, s || r(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    var Wi, Vi = e.ActiveXObject ? function () {
            for (var e in Wi) Wi[e](0, 1)
        } : !1,
        Ui = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && A() || P()
    } : A,
    function (e) {
        K.extend(K.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function (i) {
        if (!i.crossDomain || K.support.cors) {
            var n;
            return {
                send: function (s, r) {
                    var o, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields) for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in s) l.setRequestHeader(a, s[a])
                    } catch (c) {}
                    l.send(i.hasContent && i.data || null), n = function (e, s) {
                        var a, c, u, h, d;
                        try {
                            if (n && (s || 4 === l.readyState)) if (n = t, o && (l.onreadystatechange = K.noop, Vi && delete Wi[o]), s) 4 !== l.readyState && l.abort();
                            else {
                                a = l.status, u = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d);
                                try {
                                    h.text = l.responseText
                                } catch (p) {}
                                try {
                                    c = l.statusText
                                } catch (p) {
                                    c = ""
                                }
                                a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                            }
                        } catch (f) {
                            s || r(-1, f)
                        }
                        h && r(a, c, h, u)
                    }, i.async ? 4 === l.readyState ? setTimeout(n, 0) : (o = ++Ui, Vi && (Wi || (Wi = {}, K(e).unload(Vi)), Wi[o] = n), l.onreadystatechange = n) : n()
                },
                abort: function () {
                    n && n(0, 1)
                }
            }
        }
    });
    var Xi, Gi, Yi = /^(?:toggle|show|hide)$/,
        Qi = RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Ji = /queueHooks$/,
        Ki = [M],
        Zi = {
            "*": [function (e, t) {
                var i, n, s = this.createTween(e, t),
                    r = Qi.exec(t),
                    o = s.cur(),
                    a = +o || 0,
                    l = 1,
                    c = 20;
                if (r) {
                    if (i = +r[2], n = r[3] || (K.cssNumber[e] ? "" : "px"), "px" !== n && a) {
                        a = K.css(s.elem, e, !0) || i || 1;
                        do l = l || ".5", a /= l, K.style(s.elem, e, a + n);
                        while (l !== (l = s.cur() / o) && 1 !== l && --c)
                    }
                    s.unit = n, s.start = a, s.end = r[1] ? a + (r[1] + 1) * i : i
                }
                return s
            }]
        };
    K.Animation = K.extend(O, {
        tweener: function (e, t) {
            K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, s = e.length; s > n; n++) i = e[n], Zi[i] = Zi[i] || [], Zi[i].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Ki.unshift(e) : Ki.push(e)
        }
    }), K.Tween = R, R.prototype = {
        constructor: R,
        init: function (e, t, i, n, s, r) {
            this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (K.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = R.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, K.each(["toggle", "show", "hide"], function (e, t) {
        var i = K.fn[t];
        K.fn[t] = function (n, s, r) {
            return null == n || "boolean" == typeof n || !e && K.isFunction(n) && K.isFunction(s) ? i.apply(this, arguments) : this.animate(z(t, !0), n, s, r)
        }
    }), K.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function (e, t, i, n) {
            var s = K.isEmptyObject(e),
                r = K.speed(t, i, n),
                o = function () {
                    var t = O(this, K.extend({}, e), r);
                    s && t.stop(!0)
                };
            return s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function (e, i, n) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    r = K.timers,
                    o = K._data(this);
                if (i) o[i] && o[i].stop && s(o[i]);
                else for (i in o) o[i] && o[i].stop && Ji.test(i) && s(o[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                (t || !n) && K.dequeue(this, e)
            })
        }
    }), K.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        K.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), K.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? K.extend({}, e) : {
            complete: i || !i && t || K.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !K.isFunction(t) && t
        };
        return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
        }, n
    }, K.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, K.timers = [], K.fx = R.prototype.init, K.fx.tick = function () {
        var e, i = K.timers,
            n = 0;
        for (Xi = K.now(); i.length > n; n++) e = i[n], e() || i[n] !== e || i.splice(n--, 1);
        i.length || K.fx.stop(), Xi = t
    }, K.fx.timer = function (e) {
        e() && K.timers.push(e) && !Gi && (Gi = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.interval = 13, K.fx.stop = function () {
        clearInterval(Gi), Gi = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function (e) {
        return K.grep(K.timers, function (t) {
            return e === t.elem
        }).length
    });
    var en = /^(?:body|html)$/i;
    K.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            K.offset.setOffset(this, e, t)
        });
        var i, n, s, r, o, a, l, c = {
            top: 0,
            left: 0
        }, u = this[0],
            h = u && u.ownerDocument;
        if (h) return (n = h.body) === u ? K.offset.bodyOffset(u) : (i = h.documentElement, K.contains(i, u) ? (u.getBoundingClientRect !== t && (c = u.getBoundingClientRect()), s = L(h), r = i.clientTop || n.clientTop || 0, o = i.clientLeft || n.clientLeft || 0, a = s.pageYOffset || i.scrollTop, l = s.pageXOffset || i.scrollLeft, {
            top: c.top + a - r,
            left: c.left + l - o
        }) : c)
    }, K.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                i = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, i += parseFloat(K.css(e, "marginLeft")) || 0), {
                top: t,
                left: i
            }
        },
        setOffset: function (e, t, i) {
            var n = K.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var s, r, o = K(e),
                a = o.offset(),
                l = K.css(e, "top"),
                c = K.css(e, "left"),
                u = ("absolute" === n || "fixed" === n) && K.inArray("auto", [l, c]) > -1,
                h = {}, d = {};
            u ? (d = o.position(), s = d.top, r = d.left) : (s = parseFloat(l) || 0, r = parseFloat(c) || 0), K.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : o.css(h)
        }
    }, K.fn.extend({
        position: function () {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    i = this.offset(),
                    n = en.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return i.top -= parseFloat(K.css(e, "marginTop")) || 0, i.left -= parseFloat(K.css(e, "marginLeft")) || 0, n.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || F.body; e && !en.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                return e || F.body
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, i) {
        var n = /Y/.test(i);
        K.fn[e] = function (s) {
            return K.access(this, function (e, s, r) {
                var o = L(e);
                return r === t ? o ? i in o ? o[i] : o.document.documentElement[s] : e[s] : (o ? o.scrollTo(n ? K(o).scrollLeft() : r, n ? r : K(o).scrollTop()) : e[s] = r, t)
            }, e, s, arguments.length, null)
        }
    }), K.each({
        Height: "height",
        Width: "width"
    }, function (e, i) {
        K.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function (n, s) {
            K.fn[s] = function (s, r) {
                var o = arguments.length && (n || "boolean" != typeof s),
                    a = n || (s === !0 || r === !0 ? "margin" : "border");
                return K.access(this, function (i, n, s) {
                    var r;
                    return K.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + e], r["scroll" + e], i.body["offset" + e], r["offset" + e], r["client" + e])) : s === t ? K.css(i, n, s, a) : K.style(i, n, s, a)
                }, i, o ? s : t, o, null)
            }
        })
    }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return K
    })
})(window),
function () {
    function e(t, i, n) {
        if (t === i) return 0 !== t || 1 / t == 1 / i;
        if (null == t || null == i) return t === i;
        if (t._chain && (t = t._wrapped), i._chain && (i = i._wrapped), t.isEqual && C.isFunction(t.isEqual)) return t.isEqual(i);
        if (i.isEqual && C.isFunction(i.isEqual)) return i.isEqual(t);
        var s = l.call(t);
        if (s != l.call(i)) return !1;
        switch (s) {
            case "[object String]":
                return t == i + "";
            case "[object Number]":
                return t != +t ? i != +i : 0 == t ? 1 / t == 1 / i : t == +i;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +i;
            case "[object RegExp]":
                return t.source == i.source && t.global == i.global && t.multiline == i.multiline && t.ignoreCase == i.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof i) return !1;
        for (var r = n.length; r--;) if (n[r] == t) return !0;
        n.push(t);
        var r = 0,
            o = !0;
        if ("[object Array]" == s) {
            if (r = t.length, o = r == i.length) for (; r-- && (o = r in t == r in i && e(t[r], i[r], n)););
        } else {
            if ("constructor" in t != "constructor" in i || t.constructor != i.constructor) return !1;
            for (var a in t) if (C.has(t, a) && (r++, !(o = C.has(i, a) && e(t[a], i[a], n)))) break;
            if (o) {
                for (a in i) if (C.has(i, a) && !r--) break;
                o = !r
            }
        }
        return n.pop(), o
    }
    var t = this,
        i = t._,
        n = {}, s = Array.prototype,
        r = Object.prototype,
        o = s.slice,
        a = s.unshift,
        l = r.toString,
        c = r.hasOwnProperty,
        u = s.forEach,
        h = s.map,
        d = s.reduce,
        p = s.reduceRight,
        f = s.filter,
        g = s.every,
        m = s.some,
        v = s.indexOf,
        y = s.lastIndexOf,
        r = Array.isArray,
        b = Object.keys,
        w = Function.prototype.bind,
        C = function (e) {
            return new _(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : t._ = C, C.VERSION = "1.3.1";
    var k = C.each = C.forEach = function (e, t, i) {
        if (null != e) if (u && e.forEach === u) e.forEach(t, i);
        else if (e.length === +e.length) for (var s = 0, r = e.length; r > s && !(s in e && t.call(i, e[s], s, e) === n); s++);
        else for (s in e) if (C.has(e, s) && t.call(i, e[s], s, e) === n) break
    };
    C.map = C.collect = function (e, t, i) {
        var n = [];
        return null == e ? n : h && e.map === h ? e.map(t, i) : (k(e, function (e, s, r) {
            n[n.length] = t.call(i, e, s, r)
        }), e.length === +e.length && (n.length = e.length), n)
    }, C.reduce = C.foldl = C.inject = function (e, t, i, n) {
        var s = arguments.length > 2;
        if (null == e && (e = []), d && e.reduce === d) return n && (t = C.bind(t, n)), s ? e.reduce(t, i) : e.reduce(t);
        if (k(e, function (e, r, o) {
            s ? i = t.call(n, i, e, r, o) : (i = e, s = !0)
        }), !s) throw new TypeError("Reduce of empty array with no initial value");
        return i
    }, C.reduceRight = C.foldr = function (e, t, i, n) {
        var s = arguments.length > 2;
        if (null == e && (e = []), p && e.reduceRight === p) return n && (t = C.bind(t, n)), s ? e.reduceRight(t, i) : e.reduceRight(t);
        var r = C.toArray(e).reverse();
        return n && !s && (t = C.bind(t, n)), s ? C.reduce(r, t, i, n) : C.reduce(r, t)
    }, C.find = C.detect = function (e, t, i) {
        var n;
        return x(e, function (e, s, r) {
            return t.call(i, e, s, r) ? (n = e, !0) : void 0
        }), n
    }, C.filter = C.select = function (e, t, i) {
        var n = [];
        return null == e ? n : f && e.filter === f ? e.filter(t, i) : (k(e, function (e, s, r) {
            t.call(i, e, s, r) && (n[n.length] = e)
        }), n)
    }, C.reject = function (e, t, i) {
        var n = [];
        return null == e ? n : (k(e, function (e, s, r) {
            t.call(i, e, s, r) || (n[n.length] = e)
        }), n)
    }, C.every = C.all = function (e, t, i) {
        var s = !0;
        return null == e ? s : g && e.every === g ? e.every(t, i) : (k(e, function (e, r, o) {
            return (s = s && t.call(i, e, r, o)) ? void 0 : n
        }), s)
    };
    var x = C.some = C.any = function (e, t, i) {
        t || (t = C.identity);
        var s = !1;
        return null == e ? s : m && e.some === m ? e.some(t, i) : (k(e, function (e, r, o) {
            return s || (s = t.call(i, e, r, o)) ? n : void 0
        }), !! s)
    };
    C.include = C.contains = function (e, t) {
        var i = !1;
        return null == e ? i : v && e.indexOf === v ? -1 != e.indexOf(t) : i = x(e, function (e) {
            return e === t
        })
    }, C.invoke = function (e, t) {
        var i = o.call(arguments, 2);
        return C.map(e, function (e) {
            return (C.isFunction(t) ? t || e : e[t]).apply(e, i)
        })
    }, C.pluck = function (e, t) {
        return C.map(e, function (e) {
            return e[t]
        })
    }, C.max = function (e, t, i) {
        if (!t && C.isArray(e)) return Math.max.apply(Math, e);
        if (!t && C.isEmpty(e)) return -1 / 0;
        var n = {
            computed: -1 / 0
        };
        return k(e, function (e, s, r) {
            s = t ? t.call(i, e, s, r) : e, s >= n.computed && (n = {
                value: e,
                computed: s
            })
        }), n.value
    }, C.min = function (e, t, i) {
        if (!t && C.isArray(e)) return Math.min.apply(Math, e);
        if (!t && C.isEmpty(e)) return 1 / 0;
        var n = {
            computed: 1 / 0
        };
        return k(e, function (e, s, r) {
            s = t ? t.call(i, e, s, r) : e, n.computed > s && (n = {
                value: e,
                computed: s
            })
        }), n.value
    }, C.shuffle = function (e) {
        var t, i = [];
        return k(e, function (e, n) {
            0 == n ? i[0] = e : (t = Math.floor(Math.random() * (n + 1)), i[n] = i[t], i[t] = e)
        }), i
    }, C.sortBy = function (e, t, i) {
        return C.pluck(C.map(e, function (e, n, s) {
            return {
                value: e,
                criteria: t.call(i, e, n, s)
            }
        }).sort(function (e, t) {
            var i = e.criteria,
                n = t.criteria;
            return n > i ? -1 : i > n ? 1 : 0
        }), "value")
    }, C.groupBy = function (e, t) {
        var i = {}, n = C.isFunction(t) ? t : function (e) {
                return e[t]
            };
        return k(e, function (e, t) {
            var s = n(e, t);
            (i[s] || (i[s] = [])).push(e)
        }), i
    }, C.sortedIndex = function (e, t, i) {
        i || (i = C.identity);
        for (var n = 0, s = e.length; s > n;) {
            var r = n + s >> 1;
            i(t) > i(e[r]) ? n = r + 1 : s = r
        }
        return n
    }, C.toArray = function (e) {
        return e ? e.toArray ? e.toArray() : C.isArray(e) ? o.call(e) : C.isArguments(e) ? o.call(e) : C.values(e) : []
    }, C.size = function (e) {
        return C.toArray(e).length
    }, C.first = C.head = function (e, t, i) {
        return null == t || i ? e[0] : o.call(e, 0, t)
    }, C.initial = function (e, t, i) {
        return o.call(e, 0, e.length - (null == t || i ? 1 : t))
    }, C.last = function (e, t, i) {
        return null == t || i ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
    }, C.rest = C.tail = function (e, t, i) {
        return o.call(e, null == t || i ? 1 : t)
    }, C.compact = function (e) {
        return C.filter(e, function (e) {
            return !!e
        })
    }, C.flatten = function (e, t) {
        return C.reduce(e, function (e, i) {
            return C.isArray(i) ? e.concat(t ? i : C.flatten(i)) : (e[e.length] = i, e)
        }, [])
    }, C.without = function (e) {
        return C.difference(e, o.call(arguments, 1))
    }, C.uniq = C.unique = function (e, t, i) {
        var i = i ? C.map(e, i) : e,
            n = [];
        return C.reduce(i, function (i, s, r) {
            return 0 != r && (t === !0 ? C.last(i) == s : C.include(i, s)) || (i[i.length] = s, n[n.length] = e[r]), i
        }, []), n
    }, C.union = function () {
        return C.uniq(C.flatten(arguments, !0))
    }, C.intersection = C.intersect = function (e) {
        var t = o.call(arguments, 1);
        return C.filter(C.uniq(e), function (e) {
            return C.every(t, function (t) {
                return C.indexOf(t, e) >= 0
            })
        })
    }, C.difference = function (e) {
        var t = C.flatten(o.call(arguments, 1));
        return C.filter(e, function (e) {
            return !C.include(t, e)
        })
    }, C.zip = function () {
        for (var e = o.call(arguments), t = C.max(C.pluck(e, "length")), i = Array(t), n = 0; t > n; n++) i[n] = C.pluck(e, "" + n);
        return i
    }, C.indexOf = function (e, t, i) {
        if (null == e) return -1;
        var n;
        if (i) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
        if (v && e.indexOf === v) return e.indexOf(t);
        for (i = 0, n = e.length; n > i; i++) if (i in e && e[i] === t) return i;
        return -1
    }, C.lastIndexOf = function (e, t) {
        if (null == e) return -1;
        if (y && e.lastIndexOf === y) return e.lastIndexOf(t);
        for (var i = e.length; i--;) if (i in e && e[i] === t) return i;
        return -1
    }, C.range = function (e, t, i) {
        1 >= arguments.length && (t = e || 0, e = 0);
        for (var i = arguments[2] || 1, n = Math.max(Math.ceil((t - e) / i), 0), s = 0, r = Array(n); n > s;) r[s++] = e, e += i;
        return r
    };
    var S = function () {};
    C.bind = function (e, t) {
        var i, n;
        if (e.bind === w && w) return w.apply(e, o.call(arguments, 1));
        if (!C.isFunction(e)) throw new TypeError;
        return n = o.call(arguments, 2), i = function () {
            if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
            S.prototype = e.prototype;
            var s = new S,
                r = e.apply(s, n.concat(o.call(arguments)));
            return Object(r) === r ? r : s
        }
    }, C.bindAll = function (e) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = C.functions(e)), k(t, function (t) {
            e[t] = C.bind(e[t], e)
        }), e
    }, C.memoize = function (e, t) {
        var i = {};
        return t || (t = C.identity),
        function () {
            var n = t.apply(this, arguments);
            return C.has(i, n) ? i[n] : i[n] = e.apply(this, arguments)
        }
    }, C.delay = function (e, t) {
        var i = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(e, i)
        }, t)
    }, C.defer = function (e) {
        return C.delay.apply(C, [e, 1].concat(o.call(arguments, 1)))
    }, C.throttle = function (e, t) {
        var i, n, s, r, o, a = C.debounce(function () {
            o = r = !1
        }, t);
        return function () {
            i = this, n = arguments, s || (s = setTimeout(function () {
                s = null, o && e.apply(i, n), a()
            }, t)), r ? o = !0 : e.apply(i, n), a(), r = !0
        }
    }, C.debounce = function (e, t) {
        var i;
        return function () {
            var n = this,
                s = arguments;
            clearTimeout(i), i = setTimeout(function () {
                i = null, e.apply(n, s)
            }, t)
        }
    }, C.once = function (e) {
        var t, i = !1;
        return function () {
            return i ? t : (i = !0, t = e.apply(this, arguments))
        }
    }, C.wrap = function (e, t) {
        return function () {
            var i = [e].concat(o.call(arguments, 0));
            return t.apply(this, i)
        }
    }, C.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, i = e.length - 1; i >= 0; i--) t = [e[i].apply(this, t)];
            return t[0]
        }
    }, C.after = function (e, t) {
        return 0 >= e ? t() : function () {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, C.keys = b || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t, i = [];
        for (t in e) C.has(e, t) && (i[i.length] = t);
        return i
    }, C.values = function (e) {
        return C.map(e, C.identity)
    }, C.functions = C.methods = function (e) {
        var t, i = [];
        for (t in e) C.isFunction(e[t]) && i.push(t);
        return i.sort()
    }, C.extend = function (e) {
        return k(o.call(arguments, 1), function (t) {
            for (var i in t) e[i] = t[i]
        }), e
    }, C.defaults = function (e) {
        return k(o.call(arguments, 1), function (t) {
            for (var i in t) null == e[i] && (e[i] = t[i])
        }), e
    }, C.clone = function (e) {
        return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
    }, C.tap = function (e, t) {
        return t(e), e
    }, C.isEqual = function (t, i) {
        return e(t, i, [])
    }, C.isEmpty = function (e) {
        if (C.isArray(e) || C.isString(e)) return 0 === e.length;
        for (var t in e) if (C.has(e, t)) return !1;
        return !0
    }, C.isElement = function (e) {
        return !(!e || 1 != e.nodeType)
    }, C.isArray = r || function (e) {
        return "[object Array]" == l.call(e)
    }, C.isObject = function (e) {
        return e === Object(e)
    }, C.isArguments = function (e) {
        return "[object Arguments]" == l.call(e)
    }, C.isArguments(arguments) || (C.isArguments = function (e) {
        return !(!e || !C.has(e, "callee"))
    }), C.isFunction = function (e) {
        return "[object Function]" == l.call(e)
    }, C.isString = function (e) {
        return "[object String]" == l.call(e)
    }, C.isNumber = function (e) {
        return "[object Number]" == l.call(e)
    }, C.isNaN = function (e) {
        return e !== e
    }, C.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
    }, C.isDate = function (e) {
        return "[object Date]" == l.call(e)
    }, C.isRegExp = function (e) {
        return "[object RegExp]" == l.call(e)
    }, C.isNull = function (e) {
        return null === e
    }, C.isUndefined = function (e) {
        return void 0 === e
    }, C.has = function (e, t) {
        return c.call(e, t)
    }, C.noConflict = function () {
        return t._ = i, this
    }, C.identity = function (e) {
        return e
    }, C.times = function (e, t, i) {
        for (var n = 0; e > n; n++) t.call(i, n)
    }, C.escape = function (e) {
        return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, C.mixin = function (e) {
        k(C.functions(e), function (t) {
            P(t, C[t] = e[t])
        })
    };
    var T = 0;
    C.uniqueId = function (e) {
        var t = T++;
        return e ? e + t : t
    }, C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var E = /.^/,
        $ = function (e) {
            return e.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
        };
    C.template = function (e, t) {
        var i = C.templateSettings,
            i = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(i.escape || E, function (e, t) {
                return "',_.escape(" + $(t) + "),'"
            }).replace(i.interpolate || E, function (e, t) {
                return "'," + $(t) + ",'"
            }).replace(i.evaluate || E, function (e, t) {
                return "');" + $(t).replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            n = Function("obj", "_", i);
        return t ? n(t, C) : function (e) {
            return n.call(this, e, C)
        }
    }, C.chain = function (e) {
        return C(e).chain()
    };
    var _ = function (e) {
        this._wrapped = e
    };
    C.prototype = _.prototype;
    var A = function (e, t) {
        return t ? C(e).chain() : e
    }, P = function (e, t) {
        _.prototype[e] = function () {
            var e = o.call(arguments);
            return a.call(e, this._wrapped), A(t.apply(C, e), this._chain)
        }
    };
    C.mixin(C), k("pop,push,reverse,shift,sort,splice,unshift".split(","), function (e) {
        var t = s[e];
        _.prototype[e] = function () {
            var i = this._wrapped;
            t.apply(i, arguments);
            var n = i.length;
            return ("shift" == e || "splice" == e) && 0 === n && delete i[0], A(i, this._chain)
        }
    }), k(["concat", "join", "slice"], function (e) {
        var t = s[e];
        _.prototype[e] = function () {
            return A(t.apply(this._wrapped, arguments), this._chain)
        }
    }), _.prototype.chain = function () {
        return this._chain = !0, this
    }, _.prototype.value = function () {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return C
    })
}.call(this),
function (e, t) {
    "undefined" != typeof exports ? t(e, exports, require("underscore")) : "function" == typeof define && define.amd ? define("backbone", ["underscore", "jquery", "exports"], function (i, n, s) {
        e.Backbone = t(e, s, i, n)
    }) : e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender)
}(this, function (e, t, i, n) {
    var s = e.Backbone,
        r = Array.prototype.slice,
        o = Array.prototype.splice;
    t.VERSION = "0.9.2", t.setDomLibrary = function (e) {
        n = e
    }, t.noConflict = function () {
        return e.Backbone = s, t
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var a = /\s+/,
        l = t.Events = {
            on: function (e, t, i) {
                var n, s, r, o, l;
                if (!t) return this;
                for (e = e.split(a), n = this._callbacks || (this._callbacks = {}); s = e.shift();) l = n[s], r = l ? l.tail : {}, r.next = o = {}, r.context = i, r.callback = t, n[s] = {
                    tail: o,
                    next: l ? l.next : r
                };
                return this
            },
            off: function (e, t, n) {
                var s, r, o, l, c, u;
                if (r = this._callbacks) {
                    if (!(e || t || n)) return delete this._callbacks, this;
                    for (e = e ? e.split(a) : i.keys(r); s = e.shift();) if (o = r[s], delete r[s], o && (t || n)) for (l = o.tail;
                    (o = o.next) !== l;) c = o.callback, u = o.context, (t && c !== t || n && u !== n) && this.on(s, c, u);
                    return this
                }
            },
            trigger: function (e) {
                var t, i, n, s, o, l, c;
                if (!(n = this._callbacks)) return this;
                for (l = n.all, e = e.split(a), c = r.call(arguments, 1); t = e.shift();) {
                    if (i = n[t]) for (s = i.tail;
                    (i = i.next) !== s;) i.callback.apply(i.context || this, c);
                    if (i = l) for (s = i.tail, o = [t].concat(c);
                    (i = i.next) !== s;) i.callback.apply(i.context || this, o)
                }
                return this
            }
        };
    l.bind = l.on, l.unbind = l.off;
    var c = t.Model = function (e, t) {
        var n;
        e || (e = {}), t && t.parse && (e = this.parse(e)), (n = E(this, "defaults")) && (e = i.extend({}, n, e)), t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = i.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
            silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = i.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    i.extend(c.prototype, l, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return i.clone(this.attributes)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            var t;
            if (t = this._escapedAttributes[e]) return t;
            var n = this.get(e);
            return this._escapedAttributes[e] = i.escape(null == n ? "" : "" + n)
        },
        has: function (e) {
            return null != this.get(e)
        },
        set: function (e, t, n) {
            var s, r, o;
            if (i.isObject(e) || null == e ? (s = e, n = t) : (s = {}, s[e] = t), n || (n = {}), !s) return this;
            if (s instanceof c && (s = s.attributes), n.unset) for (r in s) s[r] = void 0;
            if (!this._validate(s, n)) return !1;
            this.idAttribute in s && (this.id = s[this.idAttribute]);
            var a = n.changes = {}, l = this.attributes,
                u = this._escapedAttributes,
                h = this._previousAttributes || {};
            for (r in s) o = s[r], (!i.isEqual(l[r], o) || n.unset && i.has(l, r)) && (delete u[r], (n.silent ? this._silent : a)[r] = !0), n.unset ? delete l[r] : l[r] = o, i.isEqual(h[r], o) && i.has(l, r) == i.has(h, r) ? (delete this.changed[r], delete this._pending[r]) : (this.changed[r] = o, n.silent || (this._pending[r] = !0));
            return n.silent || this.change(n), this
        },
        unset: function (e, t) {
            return (t || (t = {})).unset = !0, this.set(e, null, t)
        },
        clear: function (e) {
            return (e || (e = {})).unset = !0, this.set(i.clone(this.attributes), e)
        },
        fetch: function (e) {
            e = e ? i.clone(e) : {};
            var n = this,
                s = e.success;
            return e.success = function (t, i, r) {
                return n.set(n.parse(t, r), e) ? (s && s(n, t), void 0) : !1
            }, e.error = t.wrapError(e.error, n, e), (this.sync || t.sync).call(this, "read", this, e)
        },
        save: function (e, n, s) {
            var r, o;
            if (i.isObject(e) || null == e ? (r = e, s = n) : (r = {}, r[e] = n), s = s ? i.clone(s) : {}, s.wait) {
                if (!this._validate(r, s)) return !1;
                o = i.clone(this.attributes)
            }
            var a = i.extend({}, s, {
                silent: !0
            });
            if (r && !this.set(r, s.wait ? a : s)) return !1;
            var l = this,
                c = s.success;
            s.success = function (e, t, n) {
                var o = l.parse(e, n);
                return s.wait && (delete s.wait, o = i.extend(r || {}, o)), l.set(o, s) ? (c ? c(l, e) : l.trigger("sync", l, e, s), void 0) : !1
            }, s.error = t.wrapError(s.error, l, s);
            var u = this.isNew() ? "create" : "update",
                h = (this.sync || t.sync).call(this, u, this, s);
            return s.wait && this.set(o, a), h
        },
        destroy: function (e) {
            e = e ? i.clone(e) : {};
            var n = this,
                s = e.success,
                r = function () {
                    n.trigger("destroy", n, n.collection, e)
                };
            if (this.isNew()) return r(), !1;
            e.success = function (t) {
                e.wait && r(), s ? s(n, t) : n.trigger("sync", n, t, e)
            }, e.error = t.wrapError(e.error, n, e);
            var o = (this.sync || t.sync).call(this, "delete", this, e);
            return e.wait || r(), o
        },
        url: function () {
            var e = E(this, "urlRoot") || E(this.collection, "url") || $();
            return this.isNew() ? e : e + ("/" == e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        change: function (e) {
            e || (e = {});
            var t = this._changing;
            this._changing = !0;
            for (var n in this._silent) this._pending[n] = !0;
            var s = i.extend({}, e.changes, this._silent);
            this._silent = {};
            for (var n in s) this.trigger("change:" + n, this, this.get(n), e);
            if (t) return this;
            for (; !i.isEmpty(this._pending);) {
                this._pending = {}, this.trigger("change", this, e);
                for (var n in this.changed) this._pending[n] || this._silent[n] || delete this.changed[n];
                this._previousAttributes = i.clone(this.attributes)
            }
            return this._changing = !1, this
        },
        hasChanged: function (e) {
            return arguments.length ? i.has(this.changed, e) : !i.isEmpty(this.changed)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? i.clone(this.changed) : !1;
            var t, n = !1,
                s = this._previousAttributes;
            for (var r in e) i.isEqual(s[r], t = e[r]) || ((n || (n = {}))[r] = t);
            return n
        },
        previous: function (e) {
            return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function () {
            return i.clone(this._previousAttributes)
        },
        isValid: function () {
            return !this.validate(this.attributes)
        },
        _validate: function (e, t) {
            if (t.silent || !this.validate) return !0;
            e = i.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
        }
    });
    var u = t.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
            silent: !0,
            parse: t.parse
        })
    };
    i.extend(u.prototype, l, {
        model: c,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        add: function (e, t) {
            var n, s, r, a, l, c, u = {}, h = {}, d = [];
            for (t || (t = {}), e = i.isArray(e) ? e.slice() : [e], n = 0, r = e.length; r > n; n++) {
                if (!(a = e[n] = this._prepareModel(e[n], t))) throw Error("Can't add an invalid model to a collection");
                l = a.cid, c = a.id, u[l] || this._byCid[l] || null != c && (h[c] || this._byId[c]) ? d.push(n) : u[l] = h[c] = a
            }
            for (n = d.length; n--;) e.splice(d[n], 1);
            for (n = 0, r = e.length; r > n; n++)(a = e[n]).on("all", this._onModelEvent, this), this._byCid[a.cid] = a, null != a.id && (this._byId[a.id] = a);
            if (this.length += r, s = null != t.at ? t.at : this.models.length, o.apply(this.models, [s, 0].concat(e)), this.comparator && this.sort({
                silent: !0
            }), t.silent) return this;
            for (n = 0, r = this.models.length; r > n; n++) u[(a = this.models[n]).cid] && (t.index = n, a.trigger("add", a, this, t));
            return this
        },
        remove: function (e, t) {
            var n, s, r, o;
            for (t || (t = {}), e = i.isArray(e) ? e.slice() : [e], n = 0, s = e.length; s > n; n++) o = this.getByCid(e[n]) || this.get(e[n]), o && (delete this._byId[o.id], delete this._byCid[o.cid], r = this.indexOf(o), this.models.splice(r, 1), this.length--, t.silent || (t.index = r, o.trigger("remove", o, this, t)), this._removeReference(o));
            return this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, t), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, i.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        get: function (e) {
            return null == e ? void 0 : this._byId[null != e.id ? e.id : e]
        },
        getByCid: function (e) {
            return e && this._byCid[e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e) {
            return i.isEmpty(e) ? [] : this.filter(function (t) {
                for (var i in e) if (e[i] !== t.get(i)) return !1;
                return !0
            })
        },
        sort: function (e) {
            if (e || (e = {}), !this.comparator) throw Error("Cannot sort a set without a comparator");
            var t = i.bind(this.comparator, this);
            return 1 == this.comparator.length ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
        },
        pluck: function (e) {
            return i.map(this.models, function (t) {
                return t.get(e)
            })
        },
        reset: function (e, t) {
            e || (e = []), t || (t = {});
            for (var n = 0, s = this.models.length; s > n; n++) this._removeReference(this.models[n]);
            return this._reset(), this.add(e, i.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        fetch: function (e) {
            e = e ? i.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var n = this,
                s = e.success;
            return e.success = function (t, i, r) {
                n[e.add ? "add" : "reset"](n.parse(t, r), e), s && s(n, t)
            }, e.error = t.wrapError(e.error, n, e), (this.sync || t.sync).call(this, "read", this, e)
        },
        create: function (e, t) {
            var n = this;
            if (t = t ? i.clone(t) : {}, e = this._prepareModel(e, t), !e) return !1;
            t.wait || n.add(e, t);
            var s = t.success;
            return t.success = function (i, r) {
                t.wait && n.add(i, t), s ? s(i, r) : i.trigger("sync", e, r, t)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        chain: function () {
            return i(this.models).chain()
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
        },
        _prepareModel: function (e, t) {
            if (t || (t = {}), e instanceof c) e.collection || (e.collection = this);
            else {
                var i = e;
                t.collection = this, e = new this.model(i, t), e._validate(e.attributes, t) || (e = !1)
            }
            return e
        },
        _removeReference: function (e) {
            this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, i, n) {
            ("add" != e && "remove" != e || i == this) && ("destroy" == e && this.remove(t, n), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments))
        }
    });
    var h = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    i.each(h, function (e) {
        u.prototype[e] = function () {
            return i[e].apply(i, [this.models].concat(i.toArray(arguments)))
        }
    });
    var d = t.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, p = /:\w+/g,
        f = /\*\w+/g,
        g = /[-[\]{}()+?.,\\^$|#\s]/g;
    i.extend(d.prototype, l, {
        initialize: function () {},
        route: function (e, n, s) {
            return t.history || (t.history = new m), i.isRegExp(e) || (e = this._routeToRegExp(e)), s || (s = this[n]), t.history.route(e, i.bind(function (i) {
                var r = this._extractParameters(e, i);
                s && s.apply(this, r), this.trigger.apply(this, ["route:" + n].concat(r)), t.history.trigger("route", this, n, r)
            }, this)), this
        },
        navigate: function (e, i) {
            t.history.navigate(e, i)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var e = [];
                for (var t in this.routes) e.unshift([t, this.routes[t]]);
                for (var i = 0, n = e.length; n > i; i++) this.route(e[i][0], e[i][1], this[e[i][1]])
            }
        },
        _routeToRegExp: function (e) {
            return e = e.replace(g, "\\$&").replace(p, "([^/]+)").replace(f, "(.*?)"), RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            return e.exec(t).slice(1)
        }
    });
    var m = t.History = function () {
        this.handlers = [], i.bindAll(this, "checkUrl")
    }, v = /^[#\/]/,
        y = /msie [\w.]+/;
    m.started = !1, i.extend(m.prototype, l, {
        interval: 50,
        getHash: function (e) {
            var t = e ? e.location : window.location,
                i = t.href.match(/#(.*)$/);
            return i ? i[1] : ""
        },
        getFragment: function (e, t) {
            return null == e && (e = this._hasPushState || !this._wantsHashChange || t ? window.location.pathname : this.getHash()), e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(v, "")
        },
        start: function (e) {
            if (m.started) throw Error("Backbone.history has already been started");
            m.started = !0, this.options = i.extend({}, {
                root: "/"
            }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && window.history && window.history.pushState);
            var t = this.getFragment(),
                s = document.documentMode,
                r = y.exec(navigator.userAgent.toLowerCase()) && (!s || 7 >= s);
            r && this._wantsHashChange && (this.iframe = n('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? n(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? n(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var o = window.location,
                a = o.pathname == this.options.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && o.hash && (this.fragment = this.getHash().replace(v, ""), window.history.replaceState({}, document.title, o.protocol + "//" + o.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function () {
            n(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), m.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            return e == this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e == this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = i.any(this.handlers, function (e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                });
            return n
        },
        navigate: function (e, t) {
            if (!m.started) return !1;
            t && t !== !0 || (t = {
                trigger: t
            });
            var i = (e || "").replace(v, "");
            this.fragment != i && (this._hasPushState ? (0 != i.indexOf(this.options.root) && (i = this.options.root + i), this.fragment = i, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i)) : this._wantsHashChange ? (this.fragment = i, this._updateHash(window.location, i, t.replace), this.iframe && i != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, i, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e))
        },
        _updateHash: function (e, t, i) {
            i ? e.replace(("" + e).replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t
        }
    });
    var b = t.View = function (e) {
        this.cid = i.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, w = /^(\S+)\s*(.*)$/,
        C = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    i.extend(b.prototype, l, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this
        },
        make: function (e, t, i) {
            var s = document.createElement(e);
            return t && n(s).attr(t), null != i && n(s).html(i), s
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof n ? e : n(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (e || (e = E(this, "events"))) {
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    if (i.isFunction(n) || (n = this[e[t]]), !n) throw Error('Method "' + e[t] + '" does not exist');
                    var s = t.match(w),
                        r = s[1],
                        o = s[2];
                    n = i.bind(n, this), r += ".delegateEvents" + this.cid, "" === o ? this.$el.bind(r, n) : this.$el.delegate(o, r, n)
                }
            }
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function (e) {
            this.options && (e = i.extend({}, this.options, e));
            for (var t = 0, n = C.length; n > t; t++) {
                var s = C[t];
                e[s] && (this[s] = e[s])
            }
            this.options = e
        },
        _ensureElement: function () {
            if (this.el) this.setElement(this.el, !1);
            else {
                var e = E(this, "attributes") || {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
            }
        }
    });
    var k = function (e, t) {
        var i = T(this, e, t);
        return i.extend = this.extend, i
    };
    c.extend = u.extend = d.extend = b.extend = k;
    var x = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    t.sync = function (e, s, r) {
        var o = x[e];
        r || (r = {});
        var a = {
            type: o,
            dataType: "json"
        };
        return r.url || (a.url = E(s, "url") || $()), r.data || !s || "create" != e && "update" != e || (a.contentType = "application/json", a.data = JSON.stringify(s.toJSON())), t.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
            model: a.data
        } : {}), t.emulateHTTP && ("PUT" === o || "DELETE" === o) && (t.emulateJSON && (a.data._method = o), a.type = "POST", a.beforeSend = function (e) {
            e.setRequestHeader("X-HTTP-Method-Override", o)
        }), "GET" === a.type || t.emulateJSON || (a.processData = !1), n.ajax(i.extend(a, r))
    }, t.wrapError = function (e, t, i) {
        return function (n, s) {
            s = n === t ? s : n, e ? e(t, s, i) : t.trigger("error", t, s, i)
        }
    };
    var S = function () {}, T = function (e, t, n) {
        var s;
        return s = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            e.apply(this, arguments)
        }, i.extend(s, e), S.prototype = e.prototype, s.prototype = new S, t && i.extend(s.prototype, t), n && i.extend(s, n), s.prototype.constructor = s, s.__super__ = e.prototype, s
    }, E = function (e, t) {
        return e && e[t] ? i.isFunction(e[t]) ? e[t]() : e[t] : null
    }, $ = function () {
        throw Error('A "url" property or function must be specified')
    };
    return t
}), define("pubsub", ["underscore", "backbone"], function (e, t) {
    var i = e.extend({}, t.Events);
    i.attach = function (t, i) {
        e.each(t, e.bind(function (e, t) {
            this.on(t, e, i)
        }, this))
    }, i.unattach = function (t, i) {
        e.each(t, e.bind(function (e, t) {
            this.off(t, e, i)
        }, this))
    };
    var n = i.trigger;
    return i.trigger = function (e) {
        try {
            n.apply(i, arguments)
        } catch (t) {
            console.error('PubSub trigger "' + e + '" threw exception: ', t.stack || t.stacktrace || t.message)
        }
        return i
    }, i
}), define("app", ["jquery", "underscore", "backbone", "pubsub"], function ($, _, Backbone, PubSub) {
    var AppModel = Backbone.Model.extend({
        initialize: function () {
            this.set("DEBUG", !0), this.set("document", $(document)), this.set("win", $(window)), this.set("body", $("body")), this.set("scrollEl", $("html,body")), this.set("doc", $(document)), this.set("navEl", $("#nav")), this.set("headerEl", $("#header")), this.set("breakingEl", $("#breaking")), this.set("breakingWrapEl", $("#breaking-wrap")), this.baseUrl = window.location.protocol + "//" + window.location.host + "/"
        },
        getPageUrl: function () {
            return document.location.protocol + "//" + document.location.host + document.location.pathname
        },
        setTrack: function (e, t, i) {
            e && e.length && (t = e.data("ht"), i = e.data("uotrack")), t && PubSub.trigger("heattrack", t), i && PubSub.trigger("uotrack", i)
        },
        getScrollPosition: function () {
            return window.pageYOffset || document.body.scrollTop
        },
        loadScript: function (scriptUrl, symbol, callback) {
            eval("window." + symbol) ? callback() : require([scriptUrl], function () {
                eval("window." + symbol) ? callback() : console.error("Error loading " + scriptUrl)
            })
        },
        openPopup: function (e, t, i) {
            t = t || 600, i = i || 400;
            var n = this.popupCoords(t, i);
            window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + i + ",width=" + t + ",top=" + n.top + ",left=" + n.left)
        },
        popupCoords: function (e, t) {
            var i = window.screenLeft ? window.screenLeft : window.screenX,
                n = window.screenTop ? window.screenTop : window.screenY,
                s = window.outerWidth ? window.outerWidth : document.documentElement.clientWidth,
                r = window.outerHeight ? window.outerHeight : document.documentElement.clientHeight;
            return {
                left: i + s / 2 - e / 2,
                top: n + r / 2 - t / 2 - 25
            }
        },
        getDefinedRoute: function (e) {
            if ("#" === e) return null;
            if (e.indexOf(this.baseUrl)) {
                if (-1 !== e.indexOf("://")) return null
            } else e = e.substring(this.baseUrl.length);
            e = Backbone.history.getFragment(e);
            var t = _.any(Backbone.history.handlers, function (t) {
                return t.route.test(e)
            });
            return t ? e : null
        },
        triggerRoute: function (e, t, i) {
            var n;
            if (e instanceof $ || _.isElement(e)) {
                var s = $(e);
                n = s.attr("href"), this.setTrack(s)
            } else _.isString(e) && (n = e, this.setTrack(void 0, t, i));
            if (n = $.trim(n), this.isValidUrl(n)) {
                if (Modernizr.history) {
                    var r = this.getDefinedRoute(n);
                    if (null !== r) return Backbone.history.navigate(r, {
                        trigger: !0
                    }), !0
                }
                return window.location = n, !0
            }
            return !1
        },
        isValidUrl: function (e) {
            return e ? -1 !== e.indexOf("javascript:") ? !1 : "#" === e[0] && 1 === e.length ? !1 : -1 !== e.indexOf("../") ? (console.error("Attempting to load a relative url, bad code monkey! (" + e + ")"), !1) : "/" !== e[0] && -1 === e.indexOf("://") ? (console.error("Attempting to load a relative url, bad code monkey! (" + e + ")"), !1) : !0 : !1
        },
        addCommas: function (e) {
            e += "";
            for (var t = e.split("."), i = t[0], n = t.length > 1 ? "." + t[1] : "", s = /(\d+)(\d{3})/; s.test(i);) i = i.replace(s, "$1,$2");
            return i + n
        },
        lazyLoadImage: function (e, t, i) {
            t = t || "data-src";
            var n = e.attr(t),
                s = e.attr("src");
            return n && s !== n ? (e.attr("src", n), i || e.removeAttr(t), !0) : !1
        }
    });
    return new AppModel
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, n, s) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, s)
    },
    easeInQuad: function (e, t, i, n, s) {
        return n * (t /= s) * t + i
    },
    easeOutQuad: function (e, t, i, n, s) {
        return -n * (t /= s) * (t - 2) + i
    },
    easeInOutQuad: function (e, t, i, n, s) {
        return 1 > (t /= s / 2) ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (e, t, i, n, s) {
        return n * (t /= s) * t * t + i
    },
    easeOutCubic: function (e, t, i, n, s) {
        return n * ((t = t / s - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (e, t, i, n, s) {
        return 1 > (t /= s / 2) ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (e, t, i, n, s) {
        return n * (t /= s) * t * t * t + i
    },
    easeOutQuart: function (e, t, i, n, s) {
        return -n * ((t = t / s - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (e, t, i, n, s) {
        return 1 > (t /= s / 2) ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (e, t, i, n, s) {
        return n * (t /= s) * t * t * t * t + i
    },
    easeOutQuint: function (e, t, i, n, s) {
        return n * ((t = t / s - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (e, t, i, n, s) {
        return 1 > (t /= s / 2) ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (e, t, i, n, s) {
        return -n * Math.cos(t / s * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (e, t, i, n, s) {
        return n * Math.sin(t / s * (Math.PI / 2)) + i
    },
    easeInOutSine: function (e, t, i, n, s) {
        return -n / 2 * (Math.cos(Math.PI * t / s) - 1) + i
    },
    easeInExpo: function (e, t, i, n, s) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / s - 1)) + i
    },
    easeOutExpo: function (e, t, i, n, s) {
        return t == s ? i + n : n * (-Math.pow(2, -10 * t / s) + 1) + i
    },
    easeInOutExpo: function (e, t, i, n, s) {
        return 0 == t ? i : t == s ? i + n : 1 > (t /= s / 2) ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function (e, t, i, n, s) {
        return -n * (Math.sqrt(1 - (t /= s) * t) - 1) + i
    },
    easeOutCirc: function (e, t, i, n, s) {
        return n * Math.sqrt(1 - (t = t / s - 1) * t) + i
    },
    easeInOutCirc: function (e, t, i, n, s) {
        return 1 > (t /= s / 2) ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function (e, t, i, n, s) {
        var r = 1.70158,
            o = 0,
            a = n;
        if (0 == t) return i;
        if (1 == (t /= s)) return i + n;
        if (o || (o = .3 * s), Math.abs(n) > a) {
            a = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - r) * 2 * Math.PI / o)) + i
    },
    easeOutElastic: function (e, t, i, n, s) {
        var r = 1.70158,
            o = 0,
            a = n;
        if (0 == t) return i;
        if (1 == (t /= s)) return i + n;
        if (o || (o = .3 * s), Math.abs(n) > a) {
            a = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * s - r) * 2 * Math.PI / o) + n + i
    },
    easeInOutElastic: function (e, t, i, n, s) {
        var r = 1.70158,
            o = 0,
            a = n;
        if (0 == t) return i;
        if (2 == (t /= s / 2)) return i + n;
        if (o || (o = s * .3 * 1.5), Math.abs(n) > a) {
            a = n;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(n / a);
        return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - r) * 2 * Math.PI / o) + i : .5 * a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - r) * 2 * Math.PI / o) + n + i
    },
    easeInBack: function (e, t, i, n, s, r) {
        return void 0 == r && (r = 1.70158), n * (t /= s) * t * ((r + 1) * t - r) + i
    },
    easeOutBack: function (e, t, i, n, s, r) {
        return void 0 == r && (r = 1.70158), n * ((t = t / s - 1) * t * ((r + 1) * t + r) + 1) + i
    },
    easeInOutBack: function (e, t, i, n, s, r) {
        return void 0 == r && (r = 1.70158), 1 > (t /= s / 2) ? n / 2 * t * t * (((r *= 1.525) + 1) * t - r) + i : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i
    },
    easeInBounce: function (e, t, i, n, s) {
        return n - jQuery.easing.easeOutBounce(e, s - t, 0, n, s) + i
    },
    easeOutBounce: function (e, t, i, n, s) {
        return 1 / 2.75 > (t /= s) ? n * 7.5625 * t * t + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function (e, t, i, n, s) {
        return s / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - s, 0, n, s) + .5 * n + i
    }
}), define("easing", function () {}), define("views/modules/alert", ["jquery", "underscore", "backbone", "pubsub", "app", "easing"], function (e, t, i, n) {
    var s = i.View.extend({
        el: "body",
        events: {},
        initialize: function (t) {
            this.options = e.extend({
                templateID: "alert"
            }, t || {}), this.render()
        },
        render: function () {
            this.$alert = e('<div class="ui-alert"><span class="text"></span><span class="close-btn">Close</span></div>').appendTo(this.$el), this.$alertText = this.$alert.find(".text"), this.$alert.on("click", ".close-btn", t.bind(function () {
                this.hidePrompt()
            }, this))
        },
        show: function (e) {
            n.trigger("show:alert"), this.$alertText.html(e), this.$alert.addClass("active").removeClass("error")
        },
        hide: function () {
            n.trigger("hide:alert"), this.$alert.removeClass("active").removeClass("error")
        },
        showError: function (e) {
            n.trigger("show:error:alert"), this.$alertText.html(e), this.$alert.addClass("active").addClass("error")
        },
        showPrompt: function (t, i, n) {
            function s(e) {
                e.preventDefault(), e.stopPropagation(), "function" == typeof i && i()
            }
            function r(e) {
                e.preventDefault(), e.stopPropagation(), "function" == typeof n && n()
            }
            var o = e("<a/>", {
                html: "Okay"
            }),
                a = e("<a/>", {
                    html: "Cancel"
                }),
                l = e("<div/>", {
                    "class": "prompt",
                    html: t
                });
            l.append(o).append(a), this.$alert.addClass("active").html(l), o.on("click", s), a.on("click", r)
        },
        hidePrompt: function () {
            this.$alert.removeClass("active")
        }
    });
    return new s
}), define("managers/trafficcop", ["jquery", "underscore"], function (e, t) {
    var i = function () {
        this.DEBUG = !0, this.animationTimeout = 2e3, this.activeRequests = [], this.activeAnimations = [], this.animationCompletion = null
    };
    return i.prototype = {
        addRequest: function (i) {
            var n = {
                ajaxPromise: i,
                gate: e.Deferred(),
                requestResult: null
            };
            this.activeRequests.push(n), i.always(t.bind(function (e) {
                n.requestResult = e, 0 === this.activeAnimations.length && ("resolved" === i.state() ? n.gate.resolve() : n.gate.reject(), this._clearFinishedRequests())
            }, this));
            var s = n.gate.promise();
            return s = s.pipe(function () {
                return n.requestResult
            }, function () {
                return n.requestResult
            }), s.abort = i.abort, s
        },
        addAnimation: function (i, n, s, r) {
            if (!i || "pending" !== i.state()) return i;
            this.animationCompletion || (this.animationCompletion = e.Deferred());
            var o = {
                promise: i,
                el: n && n[0],
                property: s,
                value: r
            };
            return o.timeout = setTimeout(t.bind(function () {
                console.warn("ANIMATION did NOT resolve within " + this.animationTimeout + " ms, releasing barrier " + this._getAnimationPropertyDescription(s, r), o.el), this.activeAnimations = t.without(this.activeAnimations, o), this._resolveAnimation()
            }, this), this.animationTimeout), this.activeAnimations.push(o), i.always(t.bind(function () {
                window.clearTimeout(o.timeout);
                var t = e.inArray(o, this.activeAnimations); - 1 !== t ? (this.activeAnimations.splice(t, 1), this._resolveAnimation()) : console.warn("animation finished after being released " + this._getAnimationPropertyDescription(s, r), o.el)
            }, this)), this.animationCompletion.promise()
        },
        _getAnimationPropertyDescription: function (e, t) {
            return e && null != t ? "on property " + e + ":" + t : "on unregistered element"
        },
        _resolveAnimation: function () {
            if (0 === this.activeAnimations.length) {
                var e = this.animationCompletion;
                this.animationCompletion = null, this._triggerEvents(), e.resolve()
            }
        },
        _triggerEvents: function () {
            t.each(this.activeRequests, function (e) {
                var t = e.ajaxPromise.state();
                "resolved" === t ? e.gate.resolve() : "rejected" === t && e.gate.reject()
            }), this._clearFinishedRequests()
        },
        _clearFinishedRequests: function () {
            this.activeRequests = t.reject(this.activeRequests, function (e) {
                return "pending" !== e.gate.state()
            })
        }
    }, new i
}), define("managers/requestmanager", ["jquery", "underscore", "managers/trafficcop"], function (e, t, i) {
    var n = function () {
        this.DEBUG = !0, this.navRequest = null, this.xhrList = []
    };
    return n.prototype = {
        fetchHtml: function (e, t, i, n) {
            return this.fetchData(e, t, i, n, !0)
        },
        fetchData: function (n, s, r, o, a) {
            var l = this._initializeFetchData(n, r);
            if (!l) {
                var c = e.Deferred().reject();
                return c.abort = function () {}, c
            }
            var u = {};
            o && (u["X-PJAX"] = "true", u["X-PJAX-Container"] = "#overlay"), n ? 0 !== n.indexOf("/") && 0 !== n.indexOf("http") && (n = "/" + n) : n = "/", s = e.extend({
                url: n,
                data: {
                    ajax: !0
                },
                beforeSend: function (t) {
                    e.each(u, function (e, i) {
                        t.setRequestHeader(e, i)
                    })
                },
                timeout: 3e4
            }, s);
            var h = e.ajax(s);
            this.DEBUG && h.fail(function (e) {
                "abort" !== e.statusText && console.log("fetchData Error: ", e.statusText, n)
            });
            var d = e.Deferred();
            h = i.addRequest(h), this._registerNavDoneHandlers(h, d, a), this._registerNavRequests(h, d, r);
            var p = d.promise();
            return p.abort = t.bind(function () {
                h.abort(), d.reject()
            }, this), p
        },
        _registerNavDoneHandlers: function (t, i, n) {
            t.done(function (s) {
                if (n) {
                    var r = document.createDocumentFragment(),
                        o = document.createElement("div");
                    o.innerHTML = s, r.appendChild(o), s = e(r).children().children()
                }
                i.resolveWith(t, [s])
            }).fail(function (e) {
                i.rejectWith(t, [e])
            })
        },
        _registerNavRequests: function (e, i, n) {
            if (n) this.navRequest.xhr = e, this.navRequest.deferred = i, i.always(t.bind(function () {
                this.navRequest = null
            }, this));
            else {
                var s = {
                    ajaxPromise: e,
                    resultDeferred: i
                };
                this.xhrList.push(s), e.always(t.bind(function () {
                    this.xhrList = t.without(this.xhrList, s)
                }, this))
            }
        },
        _initializeFetchData: function (e, t) {
            if (t) {
                if (this.navRequest) {
                    if (this.navRequest.path === e) return !1;
                    console.log("aborting nav request"), this.navRequest.xhr && this.navRequest.xhr.abort(), this.navRequest && this.navRequest.deferred && this.navRequest.deferred.reject()
                }
                jQuery.each(this.xhrList, function (e, t) {
                    t.ajaxPromise.abort(), t.resultDeferred.reject()
                }), this.xhrList = [], this.navRequest = {
                    path: e
                }
            } else if (this.navRequest) return !1;
            return !0
        }
    }, new n
}), define("managers/routemanager", ["jquery", "underscore", "backbone"], function (e, t, i) {
    var n = i.Router.extend({
        initialize: function (t) {
            this.options = e.extend(!0, {
                siteConfig: {},
                onRouteChange: function () {}
            }, t), this.urls = [], this.parseSiteConfig(this.options.siteConfig)
        },
        destroy: function () {
            i.history.stop()
        },
        getRouteInfoForPath: function (e) {
            return t.find(this.urls, function (t) {
                return t.url.test(e)
            })
        },
        parseSiteConfig: function (e) {
            var n = 0,
                s = this;
            t.each(e.apps, function (r) {
                require([r.appClass], function (o) {
                    r.appClass = o, t.each(r.routes, function (e) {
                        t.each(e.urls, function (t) {
                            var i = RegExp(t);
                            s.urls.unshift({
                                url: i,
                                appClass: o,
                                app: r,
                                route: e
                            }), s.route(i, r.name, function (t) {
                                s.options.onRouteChange(r, e, t)
                            })
                        })
                    }), n++, n === e.apps.length && (i.history.start({
                        pushState: !0,
                        hashChange: !1
                    }), console.log("App Loaded"))
                })
            })
        }
    });
    return n
}), define("managers/resourcemanager", ["jquery", "underscore"], function (e, t) {
    var i = function () {
        this._initialize()
    };
    return i.prototype = {
        _initialize: function () {
            this.$stylesheets = e([]), this.stylesheets = [], this.staticUrl = window.site_static_url || "/static/", this.staticVersion = window.site_static_version || "off", e("link[data-identifier]").each(t.bind(function (t, i) {
                this.stylesheets.push(e(i).data("identifier")), this.$stylesheets.push(i)
            }, this))
        },
        fetchStyles: function (i, n, s) {
            var r = t.difference(i, this.stylesheets),
                o = t.difference(this.stylesheets, i);
            s && o.length && console.log("removing styles from dom: ", o), s && r.length && console.log("adding styles to dom: ", r);
            var a = this._findStyleTags(o);
            this.stylesheets = i, this.$stylesheets = e(t.filter(this.$stylesheets, function (e) {
                return !t.include(a, e)
            })), this._addStylesToHead(r), a.length && n.done(function () {
                a.remove()
            })
        },
        fetchJavascript: function (i, n) {
            return e.Deferred(function (e) {
                i && n ? require([i], t.bind(function () {
                    require([n], t.bind(function (t) {
                        e.resolveWith(this, [t])
                    }, this))
                }, this)) : n ? require([n], t.bind(function (t) {
                    e.resolveWith(this, [t])
                }, this)) : e.resolve()
            }).promise()
        },
        _findStyleTags: function (i) {
            return e(t.filter(this.$stylesheets, function (n) {
                var s = e(n).data("identifier");
                return t.find(i, function (e) {
                    return s === e
                })
            }))
        },
        _addStylesToHead: function (i) {
            if (i && i.length > 0) {
                var n = e([]);
                t.each(i, function (t) {
                    var i = e('<link rel="stylesheet" data-identifier="' + t + '" href="' + this.staticUrl + "css/" + t + (window.use_minified_css ? ".min" : "") + ".css?v=" + this.staticVersion + '">')[0];
                    n.push(i), this.$stylesheets.push(i)
                }, this), e("head").append(n)
            }
        }
    }, i
}), define("state", ["jquery", "underscore", "pubsub", "app", "views/modules/alert", "managers/trafficcop", "managers/requestmanager", "managers/routemanager", "managers/resourcemanager"], function (e, t, i, n, s, r, o, a, l) {
    var c = function () {
        this.scrollEl = n.get("scrollEl"), this.nav = n.get("navEl"), this.body = n.get("body"), this.breaking = n.get("breakingEl"), this.initialize(), window.stateManager = this
    };
    return c.prototype = {
        DEBUG: !0,
        LAYER_OVERLAY: "overlay",
        LAYER_PRELOAD: "preload",
        LAYER_BASE: "base",
        REFRESH_FREQUENCY: 9e5,
        start: function (e) {
            this.routeManager = new a({
                siteConfig: e,
                onRouteChange: t.bind(this._onRouteChange, this)
            }), this.resourceManager = new l, this.startRefreshTimer()
        },
        initialize: function () {
            this.activeAppInfo = {
                path: null,
                css: [],
                layer: null,
                app: null
            }, this._clearPreloadedAppInfo(), this.fullscreenView = null
        },
        _clearPreloadedAppInfo: function () {
            this.preloadedAppInfo = {
                path: null,
                css: [],
                app: null
            }
        },
        _onRouteChange: function (e, t, i) {
            console.log("Route: " + e.name), this._loadApp(e.appClass, {
                preloadedUrl: t.preloadedUrl || t.preloadedUrl
            }, i, e.overlay, t)
        },
        preloadPath: function (t) {
            return this.activeAppInfo.layer && this.activeAppInfo.layer !== this.LAYER_OVERLAY ? e.Deferred().reject() : this._loadPath(t, !0)
        },
        _loadPath: function (e, t) {
            var i = this.routeManager.getRouteInfoForPath(e);
            return i ? t ? this._preloadApp(i.appClass, {}, e, i.route) : this._loadApp(i.appClass, {}, e, i.app.overlay, i.route) : (console.error("StateManager: tried navigating to path, but no match found: " + e), null)
        },
        navigateToPreloadedUrl: function (e) {
            var t = this.preloadedAppInfo.path || e || n.get("currentCardPath");
            t ? "/" !== t[0] && (t = "/" + t) : t = "/", n.triggerRoute(t)
        },
        registerFullScreenView: function (e) {
            this._setFixedPosition(this.activeAppInfo.app, !0), this.fullscreenView = e, this.activeAppInfo.app.pause()
        },
        clearFullScreenView: function () {
            this._clearFixedPosition(this.activeAppInfo.app), this.fullscreenView && (this.fullscreenView = null, this._loadPath(this.activeAppInfo.path))
        },
        _loadApp: function (e, i, n, s, r) {
            var o, a = s ? this.LAYER_OVERLAY : this.LAYER_BASE,
                l = this.resourceManager.fetchJavascript(r.module, r.view);
            return this._closeFullscreenView(), o = this.activeAppInfo.app ? this._handleTransition(this.activeAppInfo.app, e, i, a, this.activeAppInfo.path, n, l) : this._buildNewApp(e, i, a).revealApp(null, n, null, l), this.activeAppInfo.path = n, this.activeAppInfo.css = r.css || [], this.resourceManager.fetchStyles(t.union(this.preloadedAppInfo.css, this.activeAppInfo.css), o), o
        },
        _preloadApp: function (i, n, s, r) {
            this.DEBUG && console.log("Router: Preloading: ", s);
            var o = this._handleTransition(this.preloadedAppInfo.app, i, n, this.LAYER_PRELOAD, this.preloadedAppInfo.path, s, e.Deferred().resolve());
            return this.preloadedAppInfo.css = r.css || [], this.preloadedAppInfo.path = s, this.resourceManager.fetchStyles(t.union(this.preloadedAppInfo.css, this.activeAppInfo.css), o), o
        },
        _closeFullscreenView: function () {
            if (this.fullscreenView) {
                var e = this.fullscreenView;
                this.fullscreenView = null, e.close()
            }
        },
        _handleTransition: function (i, n, s, r, o, a, l) {
            var c, u, h, d = r === this.LAYER_PRELOAD,
                p = this._removeCurrentApp(n, r, o, a);
            return p ? r === this.LAYER_BASE && this.preloadedAppInfo.app ? (i = this._movePreloadAppToActiveApp(r), o = this.activeAppInfo.path, o !== a && (u = this._fetchPathHtml(a, d)), c = e.Deferred(t.bind(function (e) {
                p.done(t.bind(function () {
                    i.changePage(o, a, u, l, d).done(function () {
                        e.resolve()
                    })
                }, this))
            }, this)).promise()) : (u = this._fetchPathHtml(a, d), h = this._buildNewApp(n, s, r), c = e.Deferred(t.bind(function (e) {
                p.done(t.bind(function () {
                    this.scrollEl.scrollTop(0), h.revealApp(o, a, u, l, d).done(function () {
                        e.resolve()
                    })
                }, this))
            }, this)).promise()) : (o !== a && (u = this._fetchPathHtml(a, d)), r === this.LAYER_OVERLAY && this.activeAppInfo.layer === this.LAYER_BASE ? (h = this._buildNewApp(n, s, r), c = this._revealOverlay(h, o, a, u, l)) : d && !this.preloadedAppInfo.app ? (h = this._buildNewApp(n, s, r), c = h.revealApp(o, a, u, l, !0)) : c = i.changePage(o, a, u, l, d)), c
        },
        _movePreloadAppToActiveApp: function (e) {
            var t = this.activeAppInfo.app = this.preloadedAppInfo.app;
            return this.activeAppInfo.css = this.preloadedAppInfo.css, this.activeAppInfo.path = this.preloadedAppInfo.path, this.activeAppInfo.layer = e, this._clearPreloadedAppInfo(), t
        },
        _buildNewApp: function (e, t, i) {
            var n = new e(t);
            return i === this.LAYER_PRELOAD ? this.preloadedAppInfo.app = n : (i === this.LAYER_OVERLAY && this.activeAppInfo.app && (this.activeAppInfo.app.pause(), this.preloadedAppInfo.app = this.activeAppInfo.app, this.preloadedAppInfo.path = this.activeAppInfo.path, this.preloadedAppInfo.css = this.activeAppInfo.css || []), this.activeAppInfo.app = n, this.activeAppInfo.layer = i), n
        },
        _revealOverlay: function (e, i, n, s, r) {
            var o = this.preloadedAppInfo.app;
            this.body.css("overflow-y", "scroll"), this._transitionToOverlayScroll(o);
            var a = e.revealApp(i, n, s, r, !1);
            return a.done(t.bind(function () {
                this.body.css("overflow-y", ""), o.afterOverlayReveal(this.scrollTop)
            }, this)), a
        },
        _removeCurrentApp: function (i, n, s, r) {
            var o = null,
                a = this.preloadedAppInfo.app;
            return this.activeAppInfo.layer === n ? this._shouldRemoveApp(this.activeAppInfo.app, i) && (o = this.activeAppInfo.app.removeApp(s, r)) : n === this.LAYER_PRELOAD ? a && this._shouldRemoveApp(a, i) && (o = a.removeApp(s, r)) : n === this.LAYER_BASE ? (a && a.beforeOverlayRemove(), o = this.activeAppInfo.app.removeApp(s, r), a && (this._shouldRemoveApp(a, i) ? (o = e.when(o, a.removeApp(s, r)), this._clearPreloadedAppInfo()) : o.done(t.bind(function () {
                this._transitionFromOverlayScroll(a)
            }, this)))) : n !== this.LAYER_OVERLAY || this.activeAppInfo.app.isRevealed() || (o = this.activeAppInfo.app.removeApp(s, r)), o
        },
        _shouldRemoveApp: function (e, t) {
            return Object.getPrototypeOf(e) !== t.prototype || !e.isRevealed()
        },
        _fetchPathHtml: function (e, i) {
            var n = this.fetchHtml(e, null, !i);
            return i || n.fail(t.bind(function (e) {
                if (e) {
                    var t = this.generateRequestError(e);
                    t && s.showError(t), (200 !== e.status && e.status || "timeout" === e.statusText) && window.history.back()
                }
            }, this)), n
        },
        generateRequestError: function (e) {
            if (e) {
                if (500 === e.status) return "Connection Error... (INTERNAL SERVER ERROR)";
                if (404 === e.status) return "Connection Error... (FILE NOT FOUND)";
                if (200 !== e.status && e.status) return "Connection Error... (" + (e.statusText || "Unknown Error") + ")"
            }
            return null
        },
        _transitionFromOverlayScroll: function (e) {
            e && (e.isApple ? e.show() : this._clearFixedPosition(e), e.$el.css("z-index", ""))
        },
        _transitionToOverlayScroll: function (e) {
            e && (e.isApple ? e.hide() : this._setFixedPosition(e), e.$el.css("z-index", "0"))
        },
        _clearFixedPosition: function (e) {
            var t = this.getBreakingNewsOffset();
            e.clearFixedPosition(), this.scrollEl.scrollTop(Math.abs(this.scrollTop - t))
        },
        _setFixedPosition: function (e, t) {
            this.scrollTop = this.getBreakingNewsOffset() - n.getScrollPosition(), e.setFixedPosition(this.scrollTop, t), this.scrollEl.scrollTop(0)
        },
        updateActivityTimestamp: function () {
            this.lastActivityTimestamp = (new Date).getTime()
        },
        getCurrentPageInfo: function () {
            return this.activeAppInfo.app.pageInfo
        },
        getPreloadedPageInfo: function () {
            return this.preloadedAppInfo.app && this.preloadedAppInfo.app.pageInfo
        },
        getActiveApp: function () {
            return this.activeAppInfo.app
        },
        getPreloadedApp: function () {
            return this.preloadedAppInfo.app
        },
        startRefreshTimer: function () {
            this.refreshTimer || (this.lastActivityTimestamp = 0, this.refreshTimer = setInterval(t.bind(function () {
                if (!this.fullscreenView && this.activeAppInfo.layer !== this.LAYER_OVERLAY) {
                    var e = (new Date).getTime(),
                        t = e - this.lastActivityTimestamp;
                    t > this.REFRESH_FREQUENCY && (window.location = window.location)
                }
            }, this), this.REFRESH_FREQUENCY))
        },
        stopRefreshTimer: function () {
            this.refreshTimer && (clearInterval(this.refreshTimer), this.refreshTimer = null)
        },
        getBreakingNewsOffset: function () {
            return this.nav.outerHeight() + this.breaking.outerHeight()
        },
        registerAnimation: function (e, t, i, n) {
            return r.addAnimation(e, t, i, n)
        },
        fetchHtml: function (e, t, i, n) {
            return o.fetchHtml(e, t, i, n, !0)
        },
        fetchData: function (e, t, i, n, s) {
            return o.fetchData(e, t, i, n, s)
        }
    }, new c
}), define("text", ["module"], function (e) {
    var t, i, n = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        s = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        r = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        o = "undefined" != typeof location && location.href,
        a = o && location.protocol && location.protocol.replace(/\:/, ""),
        l = o && location.hostname,
        c = o && (location.port || void 0),
        u = [],
        h = e.config && e.config() || {};
    return t = {
        version: "2.0.3",
        strip: function (e) {
            if (e) {
                e = e.replace(s, "");
                var t = e.match(r);
                t && (e = t[1])
            } else e = "";
            return e
        },
        jsEscape: function (e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: h.createXhr || function () {
            var e, t, i;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject) for (t = 0; 3 > t; t += 1) {
                i = n[t];
                try {
                    e = new ActiveXObject(i)
                } catch (s) {}
                if (e) {
                    n = [i];
                    break
                }
            }
            return e
        },
        parseName: function (e) {
            var t = !1,
                i = e.indexOf("."),
                n = e.substring(0, i),
                s = e.substring(i + 1, e.length);
            return i = s.indexOf("!"), -1 !== i && (t = s.substring(i + 1, s.length), t = "strip" === t, s = s.substring(0, i)), {
                moduleName: n,
                ext: s,
                strip: t
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (e, i, n, s) {
            var r, o, a, l = t.xdRegExp.exec(e);
            return l ? (r = l[2], o = l[3], o = o.split(":"), a = o[1], o = o[0], !(r && r !== i || o && o.toLowerCase() !== n.toLowerCase() || (a || o) && a !== s)) : !0
        },
        finishLoad: function (e, i, n, s) {
            n = i ? t.strip(n) : n, h.isBuild && (u[e] = n), s(n)
        },
        load: function (e, i, n, s) {
            if (s.isBuild && !s.inlineText) return n(), void 0;
            h.isBuild = s.isBuild;
            var r = t.parseName(e),
                u = r.moduleName + "." + r.ext,
                d = i.toUrl(u),
                p = h.useXhr || t.useXhr;
            !o || p(d, a, l, c) ? t.get(d, function (i) {
                t.finishLoad(e, r.strip, i, n)
            }, function (e) {
                n.error && n.error(e)
            }) : i([u], function (e) {
                t.finishLoad(r.moduleName + "." + r.ext, r.strip, e, n)
            })
        },
        write: function (e, i, n) {
            if (u.hasOwnProperty(i)) {
                var s = t.jsEscape(u[i]);
                n.asModule(e + "!" + i, "define(function () { return '" + s + "';});\n")
            }
        },
        writeFile: function (e, i, n, s, r) {
            var o = t.parseName(i),
                a = o.moduleName + "." + o.ext,
                l = n.toUrl(o.moduleName + "." + o.ext) + ".js";
            t.load(a, n, function () {
                var i = function (e) {
                    return s(l, e)
                };
                i.asModule = function (e, t) {
                    return s.asModule(e, l, t)
                }, t.write(e, a, i, r)
            }, r)
        }
    }, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node ? (i = require.nodeRequire("fs"), t.get = function (e, t) {
        var n = i.readFileSync(e, "utf8");
        0 === n.indexOf("﻿") && (n = n.substring(1)), t(n)
    }) : "xhr" === h.env || !h.env && t.createXhr() ? t.get = function (e, i, n) {
        var s = t.createXhr();
        s.open("GET", e, !0), h.onXhr && h.onXhr(s, e), s.onreadystatechange = function () {
            var t, r;
            4 === s.readyState && (t = s.status, t > 399 && 600 > t ? (r = Error(e + " HTTP status: " + t), r.xhr = s, n(r)) : i(s.responseText))
        }, s.send(null)
    } : ("rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java) && (t.get = function (e, t) {
        var i, n, s = "utf-8",
            r = new java.io.File(e),
            o = java.lang.System.getProperty("line.separator"),
            a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), s)),
            l = "";
        try {
            for (i = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), i.append(n); null !== (n = a.readLine());) i.append(o), i.append(n);
            l = "" + i + ""
        } finally {
            a.close()
        }
        t(l)
    }), t
}), define("text!siteconfig.json", [], function () {
    return '{\n    "apps": [\n        {\n            "name": "Error",\n            "appClass": "views/pages/404",\n            "overlay": true,\n            "routes": [\n                {\n                    "name": "CatchAll",\n                    "urls": ["^(.*)$", "^(errors/.*)$", "^(404.html)$"]\n                }\n            ]\n        },\n        {\n            "name": "Cards",\n            "appClass": "views/modules/cards2",\n            "routes": [\n                {\n                    "name": "Generic Section",\n                    "view": "views/pages/generic-section",\n                    "mainInclude": true,\n                    "urls": ["^((news|life|money|tech|travel|opinion)/[a-zA-Z0-9%\\\\-/\\\\.]*)$"]\n                },\n                {\n                    "name": "Home",\n                    "view": "views/pages/home",\n                    "mainInclude": true,\n                    "urls": ["^()$", "^(index.html)$"]\n                },\n                {\n                    "name": "Sports",\n                    "module": "modules/sports",\n                    "view": "views/pages/sports",\n                    "css": ["sports", "sports-logos"],\n                    "urls": ["^(sports/[a-zA-Z0-9%\\\\-/\\\\.]*)$"]\n                },\n                {\n                    "name": "Weather",\n                    "module": "modules/weather",\n                    "view": "views/pages/weather",\n                    "css": ["weather"],\n                    "urls": ["^(weather/[a-zA-Z0-9%\\\\-/\\\\.]*)$"]\n                }\n            ]\n        },\n        {\n            "name": "BigPage",\n            "appClass": "views/modules/coverview",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(big-page/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "Search",\n            "appClass": "views/pages/search",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(search/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "Topics",\n            "appClass": "views/pages/topic",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": [\n                        "^(topic/.*)$",\n                        "^(election-2012/.*)$"\n                    ]\n                }\n            ]\n        },\n        {\n            "name": "MediaView",\n            "appClass": "views/pages/media",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(media/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "Blog",\n            "appClass": "views/pages/blog",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(blog/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "UserAuth",\n            "appClass": "views/pages/userauth",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(userauth/default/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "ContactUs",\n            "appClass": "views/pages/contactus-overlay",\n            "overlay": true,\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(contactus/?)$"]\n                }\n            ]\n        },\n        {\n            "name": "SiteMap",\n            "appClass": "views/pages/sitemap",\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(sitemap/.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "StaticOverlay",\n            "appClass": "views/pages/static-overlay",\n            "overlay": true,\n            "routes": [\n                {\n                    "name": "Default",\n                    "urls": ["^(shop.*|about.*|rss.*|mobile-apps.*|mediakit.*|reporters.*|legal.*|editorial-policy.*|conversation-guidelines.*)$"]\n                }\n            ]\n        },\n        {\n            "name": "SimpleOverlay",\n            "appClass": "simpleoverlay",\n            "overlay": true,\n            "routes": [\n                {\n                    "name": "Sports BoxScores",\n                    "view": "views/pages/boxscore",\n                    "preloadedUrl": "sports/",\n                    "css": ["sports", "sports-logos"],\n                    "urls": [\n                        "^(sports/[a-zA-Z]+/game/.*)$"\n                    ]\n                }\n            ]\n        },\n        {\n            "name": "Overlay",\n            "appClass": "views/modules/overlay",\n            "overlay": true,\n            "routes": [\n                {\n                    "name": "Story",\n                    "module": "modules/story",\n                    "view": "views/pages/story",\n                    "urls": [\n                        "^((photos|interactives|picture-gallery|videos|story|article|puzzles|lottery)/.*/)$",\n                        "^(money/(economic-calendar|etfs|funds|markets|stocks|lookup)/.*/)$",\n                        "^(blog/corrections/.*)$"\n                    ]\n                },\n                {\n                    "name": "Gift Guide",\n                    "view": "views/pages/specials/gift-guide",\n                    "urls": ["^(holiday-gift-guide/.*)$"]\n                }\n            ]\n        }\n    ]\n}'
}),
function (e, t) {
    function i() {
        o = e.now(), a = a || t(n, 10)
    }
    function n() {
        var i = e.now();
        e.resizestop.threshold > i - o ? a = t(n, 10) : (clearTimeout(a), a = o = 0, l.width = s.width(), l.height = s.height(), r.trigger("resizestop"))
    }
    var s = e(window),
        r = e([]),
        o = 0,
        a = 0,
        l = {};
    e.resizestop = {
        propagate: !1,
        threshold: 500
    }, e.event.special.resizestop = {
        setup: function () {
            r = r.not(this), r = r.add(this), 1 === r.length && s.bind("resize", i)
        },
        teardown: function () {
            r = r.not(this), r.length || s.unbind("resize", i)
        },
        add: function (t) {
            var i = t.handler;
            t.handler = function (t) {
                return e.resizestop.propagate || t.stopPropagation(), t.data = t.data || {}, t.data.size = t.data.size || {}, e.extend(t.data.size, l), i.apply(this, arguments)
            }
        }
    }
}(jQuery, setTimeout), define("resizestop", function () {}),
function (e) {
    e.support.css = e.support.css || {}, Modernizr.csstransitions && (e.support.css.transition = {
        cssName: Modernizr.prefixed("transition"),
        endEventNames: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        }
    }, e.support.css.transition.endName = e.support.css.transition.endEventNames[e.support.css.transition.cssName], e.support.css.transition.registerTransitionEndListener = function (t, i) {
        i || (i = e.Deferred());
        var n = e.support.css.transition.endName,
            s = function () {
                this.removeEventListener(n, s), i.resolve(), s = null
            };
        return t[0].addEventListener(e.support.css.transition.endName, s), i.promise()
    }), !Modernizr.csstransforms3d || navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && -1 !== navigator.userAgent.indexOf("Version/5") || (e.support.css.transform = {
        cssName: Modernizr.prefixed("transform"),
        originCssName: Modernizr.prefixed("transformOrigin"),
        styleCssName: Modernizr.prefixed("transformStyle"),
        backfaceVisibilityCssName: Modernizr.prefixed("backfaceVisibility"),
        perspectiveCssName: Modernizr.prefixed("perspective"),
        perspectiveOriginCssName: Modernizr.prefixed("perspectiveOrigin")
    }, e.support.css.transform.cssHyphenName = e.support.css.transform.cssName.replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-"))
}(jQuery), define("transformSupport", function () {}), define("baseview", ["jquery", "underscore", "backbone", "state", "app", "pubsub", "managers/trafficcop", "easing", "transformSupport"], function (e, t, i, n, s, r, o) {
    var a = i.View.extend({
        useCSSTransitions: !! e.support.css.transition,
        transEndEventNames: e.support.css.transition && e.support.css.transition.endEventNames,
        transitionCssName: e.support.css.transition && e.support.css.transition.cssName,
        transitionEndName: e.support.css.transition && e.support.css.transition.endName,
        useCSSTransforms: !! e.support.css.transform,
        transformOriginCssName: e.support.css.transform && e.support.css.transform.originCssName,
        transformCssName: e.support.css.transform && e.support.css.transform.cssName,
        transformStyleCssName: e.support.css.transform && e.support.css.transform.styleCssName,
        backfaceVisibilityCssName: e.support.css.transform && e.support.css.transform.backfaceVisibilityCssName,
        transformCssHyphenName: e.support.css.transform && e.support.css.transform.cssHyphenName,
        perspectiveCssName: e.support.css.transform && e.support.css.transform.perspectiveCssName,
        perspectiveOriginCssName: e.support.css.transform && e.support.css.transform.perspectiveOriginCssName,
        isSafari: navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("iPhone") && -1 === navigator.userAgent.indexOf("iPad"),
        isSafari5: navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && -1 !== navigator.userAgent.indexOf("Version/5"),
        isApple: navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1,
        pubSub: null,
        options: {
            animations: {
                fadeIn: {
                    duration: 200,
                    easing: "easeInQuad"
                },
                fadeOut: {
                    duration: 200,
                    easing: "easeOutSine"
                },
                slide: {
                    duration: 350,
                    easing: "ease-in-out"
                },
                useCSSTransitions: !0
            }
        },
        initialize: function (t) {
            this.options = e.extend(!0, {}, a.prototype.options, t), this.useCSSTransitions = this.options.animations.useCSSTransitions && this.useCSSTransitions, this.useCSSTransitions || (this.useCSSTransforms = !1), this.subviews = this.subviews || {}, this.clear$$(), this.pubSub && r.attach(this.pubSub, this)
        },
        $$: function (e) {
            var t = this.cachedSelectors[e];
            return t || (t = this.$(e), this.cachedSelectors[e] = t), t
        },
        clear$$: function (e) {
            e ? delete this.cachedSelectors[e] : this.cachedSelectors = {}
        },
        setElement: function () {
            this.clear$$(), i.View.prototype.setElement.apply(this, arguments)
        },
        destroy: function (e, t) {
            this.destroyModules(e, t), this.clear$$(), this.pubSub && r.unattach(this.pubSub, this), e && this.$el.remove()
        },
        destroyModules: function (e, t) {
            this._callCollection(this.subviews, "destroy", [e, t]), this.undelegateEvents(), this.subviews = {}
        },
        triggerEvent: function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            this._callCollection(this.subviews, e, t)
        },
        _callCollection: function (i, n, s) {
            t.each(i, function (i) {
                try {
                    e.isArray(i) ? t.each(i, function (t) {
                        e.isFunction(t[n]) && t[n].apply(t, s)
                    }) : e.isFunction(i[n]) && i[n].apply(i, s)
                } catch (r) {
                    console.error("subview threw exception on destruction: ", r.stack || r.stacktrace || r.message)
                }
            })
        },
        registerAnimation: function (e, t, i, n) {
            return o.addAnimation(e, t, i, n)
        },
        slide: function (i, r, o, a) {
            var l = null,
                c = null;
            "left" === r ? (l = "left", c = -100) : "right" === r && (l = "left", c = 100);
            var u = n.getBreakingNewsOffset();
            this.$el.css(l, "0%"), this.$el.css({
                position: "absolute",
                top: u - s.getScrollPosition()
            }), i = e(i), i.css(l, -1 * c + "%"), i.css({
                position: "absolute",
                top: u
            }), i.insertAfter(this.$el);
            var h = e.Deferred();
            return t.defer(t.bind(function () {
                0 !== this.$el.length && this.animate(this.$el, l, c + "%", o, a);
                var e = this.animate(i, l, "0%", o, a);
                e.done(t.bind(function () {
                    this.$el.remove(), i.css({
                        position: "",
                        top: ""
                    }), this.setElement(i), h.resolve()
                }, this))
            }, this)), h.promise()
        },
        animate: function (t, i, n, s, r, o) {
            if (!t || 0 === t.length) return console.error("tried animating null or empty jquery object"), e.Deferred().reject();
            r = r || "linear";
            var a = null;
            if (this.useCSSTransitions) if (o = o ? " " + o + "ms" : "", !this.useCSSTransforms || "left" !== i && "top" !== i) {
                if ("opacity" === i && "none" === t.css("display")) return console.error("tried animating the opacity of a display:none property", t), e.Deferred().reject();
                a = this._transition(t, i, n, s, r, o)
            } else a = this._transform(t, i, n, s, r, o);
            else {
                -1 !== r.indexOf("cubic-bezier") ? r = "swing" : "ease-in" === r ? r = "easeInQuad" : "ease-out" === r ? r = "easeOutQuad" : "ease-in-out" === r && (r = "easeInOutQuad");
                var l = {};
                l[i] = n, a = t.animate(l, s, r).promise()
            }
            return this.registerAnimation(a, t, i, n), a
        },
        _transition: function (i, n, s, r, o, a) {
            var l = e.Deferred();
            return i[0].style[this.transitionCssName] = n + " " + r + "ms " + o + a, 0 === r ? (i.css(n, s), l.resolve()) : parseFloat(s) === parseFloat(i.css(n)) ? l.resolve() : t.delay(t.bind(function () {
                this.registerTransitionEndListener(i, l), i.css(n, s)
            }, this)), l.promise()
        },
        _transform: function (i, n, s, r, o, a) {
            var l = e.Deferred(),
                c = this.transformCssHyphenName + " " + r + "ms " + o + a,
                u = this._buildTranslate3d(n, s),
                h = i.css(n);
            if (h && "0px" !== h && (i[0].style[this.transformCssName] = this._buildTranslate3d(n, h), i.css(n, "auto")), 0 === r) i[0].style[this.transitionCssName] = c, i[0].style[this.transformCssName] = u, l.resolve();
            else {
                var d = i[0].style[this.transformCssName] || "";
                u.replace(/[px ]/g, "") === d.replace(/[px ]/g, "") ? l.resolve() : t.delay(t.bind(function () {
                    this.registerTransitionEndListener(i, l), i[0].style[this.transitionCssName] = c, i[0].style[this.transformCssName] = u
                }, this))
            }
            return l.done(t.bind(function () {
                this.clearTransition(i), i.css(n, s)
            }, this)), l.promise()
        },
        _buildTranslate3d: function (e, t) {
            var i = "translate3d(";
            return i += "left" === e ? t : "0", i += ",", i += "top" === e ? t : "0", i += ",0)"
        },
        clearTransition: function () {
            this.useCSSTransitions && e(arguments).each(t.bind(function (t, i) {
                i && (i instanceof e && (i = i[0]), i.style[this.transitionCssName] = "", this.useCSSTransforms && (i.style[this.perspectiveCssName] = "", i.style[this.perspectiveOriginCssName] = "", i.style[this.backfaceVisibilityCssName] = "", i.style[this.transformCssName] = "", i.style[this.transformStyleCssName] = "", i.style[this.transformOriginCssName] = ""))
            }, this))
        },
        registerTransitionEndListener: function (t, i) {
            return e.support.css.transition ? e.support.css.transition.registerTransitionEndListener(t, i) : e.Deferred.reject()
        },
        show: function (t, i) {
            var n = null;
            return t && !this.isSafari5 ? (n = this.$el.fadeTo(this.options.animations.fadeIn.duration, 1, this.options.animations.fadeIn.easing).promise(), this.registerAnimation(n, this.$el, "opacity", 1)) : (n = e.Deferred().resolve(), this.$el.css({
                display: "block",
                opacity: 1
            })), n.done(function () {
                i && i()
            }), n
        },
        hide: function (i, n) {
            var s = null;
            return i && !this.isSafari5 ? (s = this.$el.fadeTo(this.options.animations.fadeOut.duration, 0, this.options.animations.fadeOut.easing).promise(), s.done(t.bind(function () {
                this.$el.css({
                    display: "none"
                })
            }, this)), this.registerAnimation(s, this.$el, "opacity", 0)) : (s = e.Deferred().resolve(), this.$el.css({
                display: "none",
                opacity: 0
            })), s.done(function () {
                n && n()
            }), s
        }
    });
    return a
}), define("baseappview", ["jquery", "underscore", "baseview", "state", "managers/trafficcop", "app", "pubsub"], function (e, t, i, n, s, r, o) {
    var a = i.extend({
        currentPath: "",
        initialize: function (e) {
            this._animId = 0, this.$top = r.get("scrollEl"), this.appRevealed = !1, i.prototype.initialize.call(this, e)
        },
        destroy: function (e) {
            i.prototype.destroy.call(this, e)
        },
        isRevealed: function () {
            return this.appRevealed
        },
        revealApp: function (i, n, s, r, o) {
            var a = {
                fromPath: i,
                toPath: n,
                animId: this._animId,
                resourcePromise: r,
                paused: o
            };
            if (this.currentPath = n, s) {
                if ("rejected" === s.state()) return s;
                var l = e.Deferred();
                if (this._setupBeforePageReveal(s, i, n, o), "resolved" === s.state()) s.done(t.bind(function (e) {
                    this._revealAppMarkup(e, a, l)
                }, this));
                else {
                    var c = this.getRevealAppLoader(n);
                    c ? (c instanceof e || (c = e(c)), this._revealAppMarkup(c, a, l, s)) : (this._triggerGenericLoader(s), s.done(t.bind(function (e) {
                        this._revealAppMarkup(e, a, l)
                    }, this))), s.fail(function () {
                        l.reject()
                    })
                }
                return l.promise()
            }
            return this._setupBeforePageReveal(null, i, n, o), this._triggerAfterPageReveal(a), e.Deferred().resolve()
        },
        _insertAppMarkup: function (e, t) {
            e.hide(), this.setElement(e, !1), this.$el.insertAfter("#header"), t && this.setFixedPosition(n.getBreakingNewsOffset())
        },
        changePage: function (t, i, n, s, r) {
            var o = {
                fromPath: t,
                toPath: i,
                animId: ++this._animId,
                resourcePromise: s,
                paused: r
            };
            this.destroyModules(), this._setupBeforePageReveal(n, t, i, r);
            var a = null;
            return t !== i && (a = this.animateChangePagePreData(t, i, n)), this.currentPath = i, a ? (n && (a = e.when(n, a)), this._finishChangePage(a, o)) : n ? (this._triggerGenericLoader(n), this._finishChangePage(n, o)) : (this._triggerAfterPageReveal(o), e.Deferred().resolve())
        },
        _triggerGenericLoader: function (e) {
            "pending" === e.state() && (this.activateLoader(), e.always(t.bind(function () {
                this.deactivateLoader()
            }, this)))
        },
        _finishChangePage: function (i, s) {
            var r = e.Deferred();
            return i.done(t.bind(function (e) {
                if (s.animId === this._animId) {
                    var i = this.animateChangePagePostData(s.fromPath, s.toPath, e, s.paused);
                    s.paused && this.setFixedPosition(n.getBreakingNewsOffset()), i ? i.done(t.bind(function () {
                        this._triggerAfterPageReveal(s).done(function () {
                            r.resolve()
                        })
                    }, this)) : this._triggerAfterPageReveal(s).done(function () {
                        r.resolve()
                    })
                }
            }, this)), r.promise()
        },
        swapContent: function (t, i, n) {
            if (this.isSafari5 || this.isApple || n) return i.insertAfter(t), t.remove(), e.Deferred().resolve();
            var s = t.css("top") || 0;
            return s -= r.getScrollPosition(), this.$top.scrollTop(0), i.css({
                "z-index": 100
            }), t.css({
                position: "absolute",
                "z-index": 101,
                opacity: 1,
                top: s
            }), i.insertAfter(t), this.animate(t, "opacity", 0, this.options.animations.fadeIn.duration).always(function () {
                i.css({
                    "z-index": ""
                }), t.remove()
            })
        },
        pause: function () {
            this.destroyModules(!1, !0)
        },
        _revealAppMarkup: function (e, i, n, r) {
            if (i.animId === this._animId) {
                this._insertAppMarkup(e, i.paused);
                var o = this.animateRevealApp(i.fromPath, i.toPath, i.paused);
                s.addAnimation(o), o.done(t.bind(function () {
                    r ? r.done(t.bind(function (e) {
                        if (i.animId === this._animId) {
                            var s = this.swapContent(this.$el, e, i.paused);
                            this.setElement(e, !1), s.done(t.bind(function () {
                                this._triggerAfterPageReveal(i).done(function () {
                                    n.resolve()
                                })
                            }, this))
                        }
                    }, this)) : this._triggerAfterPageReveal(i).done(function () {
                        n.resolve()
                    })
                }, this))
            }
        },
        _triggerAfterPageReveal: function (i) {
            return this.appRevealed = !0, e.Deferred(t.bind(function (e) {
                i.resourcePromise.done(t.bind(function (t) {
                    if (i.animId === this._animId) {
                        try {
                            i.paused || null === i.fromPath || this.delegateEvents(), this.afterPageReveal(i.fromPath, i.toPath, i.paused, t)
                        } catch (n) {
                            console.error("View threw an exception on afterPageReveal event: ", n.stack || n.stacktrace || n.message)
                        }
                        e.resolve()
                    }
                }, this))
            }, this)).promise()
        },
        _setupBeforePageReveal: function (e, i, n, s) {
            if (e) e.done(t.bind(function (e) {
                try {
                    this.beforePageReveal(i, n, e, s)
                } catch (t) {
                    console.error("View threw an exception on beforePageReveal event: ", t.stack || t.stacktrace || t.message)
                }
                this._getPageInfo(i, n, s, e)
            }, this));
            else {
                try {
                    this.beforePageReveal(i, n, this.$el, s)
                } catch (r) {
                    console.error("View threw an exception on beforePageReveal event: ", r.stack || r.stacktrace || r.message)
                }
                this._getPageInfo(i, n, s, this.$el)
            }
        },
        _getPageInfo: function (e, t, i, n) {
            this.pageInfo = {};
            try {
                this.setPage(e, t, i, n)
            } catch (s) {
                console.error("View threw an exception on setPage event: ", s.stack || s.stacktrace || s.message)
            }
            i || (document.title = "None" === (this.pageInfo.seotitletag || "None") ? "USATODAY.com" : this.pageInfo.seotitletag)
        },
        removeApp: function (i, n) {
            var s = e.Deferred();
            try {
                this._animId++, this.beforeAppRemove(i, n), this.destroyModules(!1), t.defer(t.bind(function () {
                    this._triggerAnimateRemoveApp(i, n, s)
                }, this))
            } catch (r) {
                console.error("View threw an exception trying to removeApp: ", r.stack || r.stacktrace || r.message), s.resolve()
            }
            return s.always(t.bind(function () {
                try {
                    this.afterAppRemove(i, n)
                } catch (e) {
                    console.error("View threw an exception on afterAppRemove event: ", e.stack || e.stacktrace || e.message)
                }
                this._safeDestroy()
            }, this)), s.promise()
        },
        _triggerAnimateRemoveApp: function (e, t, i) {
            try {
                var n = this.animateRemoveApp(e, t);
                s.addAnimation(n).always(function () {
                    i.resolve()
                })
            } catch (r) {
                console.error("View threw an exception on animateRemoveApp: ", r.stack || r.stacktrace || r.message), i.resolve()
            }
        },
        _safeDestroy: function () {
            try {
                this.destroy(!0)
            } catch (e) {
                console.error("View threw an exception on destroy: ", e.stack || e.stacktrace || e.message), this.$el.remove()
            }
        },
        animateRevealApp: function (t, i, n) {
            return this.isApple && n ? e.Deferred().resolve() : this.show(!0)
        },
        animateRemoveApp: function () {
            return this.hide(!0)
        },
        animateChangePagePreData: function () {},
        animateChangePagePostData: function (e, t, i, n) {
            var s = this.swapContent(this.$el, i, n);
            return this.setElement(i, !1), s
        },
        setFixedPosition: function (e, t) {
            t || !this.isSafari5 && !this.isApple ? this.$el.css({
                position: "fixed",
                top: e
            }) : this.$el.hide()
        },
        clearFixedPosition: function () {
            this.isSafari5 || this.isApple ? this.$el.show() : this.$el.css({
                position: "",
                top: ""
            })
        },
        activateLoader: function () {},
        deactivateLoader: function () {},
        beforeAppRemove: function () {},
        afterAppRemove: function () {},
        beforePageReveal: function () {},
        afterPageReveal: function (e, t, i, n) {
            n && (this.subviews.page = new n({
                el: this.$el
            }))
        },
        getRevealAppLoader: function () {},
        beforeOverlayRemove: function () {},
        afterOverlayReveal: function () {},
        setPage: function (i, n, s, a) {
            this.pageInfo = e.parseJSON(a.find(".pageinfo.data").text()) || {}, this.pageInfo.templatetype || (this.pageInfo.templatetype = a.attr("data-template") || ""), this.pageInfo.url || (this.pageInfo.url = r.getPageUrl()), s || t.defer(t.bind(function () {
                o.trigger("page:load", this.pageInfo)
            }, this))
        }
    });
    return a
}), define("simpleoverlay", ["jquery", "underscore", "backbone", "baseappview", "state", "app", "pubsub"], function (e, t, i, n, s, r, o) {
    var a = n.extend({
        el: "#overlay",
        originalEvents: {
            "click .transition-wrap": "close",
            "click .close-overlay": "close"
        },
        additionalEvents: {},
        events: function () {
            return t.extend({}, this.originalEvents, this.additionalEvents)
        },
        initialize: function (i) {
            i = e.extend(!0, {
                template: '<div id="overlay" class="no-transition"><div class="content"><div class="transition-wrap"><article class="asset clearfix story ui-loading light-medium"><div class="close-wrap"><a href="#" class="close close-overlay" data-ht="modalclose"></a></div></article></div></div><div class="film show"></div></div>'
            }, i), this.preloadUrl = i.preloadedUrl || "", this.win = r.get("win"), this.scrollEl = r.get("scrollEl"), t.bindAll(this, "close"), n.prototype.initialize.call(this, i)
        },
        beforeAppRemove: function () {
            this.positionCloseButton("absolute", r.getScrollPosition())
        },
        getRevealAppLoader: function () {
            var t = e(this.options.template),
                i = this.win.height() - 40,
                n = t.find(".transition-wrap");
            return this.prepareContentForTransition(n, 0, i), t
        },
        animateChangePagePreData: function () {
            var t = this.win.height() - 40,
                i = r.getScrollPosition(),
                n = this.$(".transition-wrap:last");
            this.prepareContentForTransition(n, i, t);
            var s = e(this.options.template),
                o = s.find(".transition-wrap");
            return this.prepareContentForTransition(o, 0, t), this.collection.append(o), this.scrollEl.scrollTop(0), this.positionCloseButton("absolute", i, n), this.swapContent(n, o).promise()
        },
        prepareContentForTransition: function (e, t, i) {
            e.css({
                height: i
            }), e.children().css({
                top: -1 * t
            })
        },
        animateChangePagePostData: function (e, i, n) {
            var s = n.find(".transition-wrap");
            return s.css("height", this.win.height() - 40), this.swapContent(this.$(".transition-wrap"), s).done(t.bind(function () {
                s.css("height", "")
            }, this))
        },
        afterPageReveal: function (e, t, i, n) {
            null === e && s.preloadPath(this.preloadUrl), this.collection = this.$(".content"), this.positionCloseButton("fixed"), n && (this.subviews.view = new n({
                el: this.$(".transition-wrap:first"),
                path: t
            }))
        },
        positionCloseButton: function (e, t, i) {
            var n = i ? i.find(".close-wrap") : this.$(".close-wrap");
            "absolute" === e ? n.css({
                position: e,
                top: t || 0
            }) : n.css({
                position: e,
                top: ""
            })
        },
        close: function (t) {
            if (!t || t.target === t.currentTarget) {
                var i = e(t.currentTarget).attr("data-ht") || "modalclose";
                return o.trigger("heattrack", i), s.navigateToPreloadedUrl(), t ? !1 : void 0
            }
        }
    });
    return a
}), define("views/modules/footer", ["jquery", "underscore", "backbone", "easing", "pubsub", "app"], function (e, t, i, n, s, r) {
    var o = i.View.extend({
        el: ".footer",
        events: {
            "click p.site-index": "toggle",
            "click .footer-more-trigger": "showMore"
        },
        initialize: function () {
            this.$scrollEl = r.get("scrollEl"), this.$nav = e("nav", this.$el), this.$doc = r.get("doc"), this.$win = r.get("win"), this.$toggle = e("p.site-index"), this.footerHeight = 383
        },
        showMore: function (t) {
            t.preventDefault();
            var i = e(t.currentTarget);
            i.hide().siblings(".footer-more-item").show()
        },
        subscribers: function (e) {
            var t;
            for (t in e) this.subscribe(t, e[t])
        },
        subscribe: function (t, i) {
            "function" == typeof this[i] && s.on(t, e.proxy(function () {
                this[i].apply(this, arguments)
            }, this))
        },
        toggle: function (t) {
            t && t.preventDefault();
            var i = this.$el.offset().top - e("#nav").height() - e("#breaking").height();
            this.$toggle.toggleClass("open"), this.$scrollEl.animate({
                scrollTop: i
            }, 500, "easeInOutCubic"), this.$nav.slideToggle(500, "easeInOutCubic")
        },
        close: function () {
            this.$nav.hide(), this.$toggle.removeClass("open")
        },
        destroy: function (e) {
            this.undelegateEvents(), e && this.remove()
        }
    });
    return o
}), define("views/pages/static-overlay", ["jquery", "underscore", "backbone", "state", "app", "simpleoverlay", "views/modules/footer"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        additionalEvents: {
            "click .static-page-faq a": "expandFaq"
        },
        initialize: function (e) {
            r.prototype.initialize.call(this, e)
        },
        afterPageReveal: function () {
            this.subviews.footer = new o, r.prototype.afterPageReveal.apply(this, arguments)
        },
        expandFaq: function (t) {
            var i = e(t.target),
                n = i.next();
            n.is(":visible") ? (i.parent().removeClass("active"), n.slideUp(200)) : (i.parent().addClass("active"), n.slideDown(200))
        }
    });
    return a
}),
function (e) {
    function t(t) {
        var i = t || window.event,
            n = [].slice.call(arguments, 1),
            s = 0,
            r = 0,
            o = 0;
        return t = e.event.fix(i), t.type = "mousewheel", i.wheelDelta && (s = i.wheelDelta / 90), i.detail && (s = -i.detail / 3), o = s, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (o = 0, r = -1 * s), void 0 !== i.wheelDeltaY && (o = i.wheelDeltaY / 90), void 0 !== i.wheelDeltaX && (r = -1 * i.wheelDeltaX / 90), n.unshift(t, s, r, o), (e.event.dispatch || e.event.handle).apply(this, n)
    }
    var i = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks) for (var n = i.length; n;) e.event.fixHooks[i[--n]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var e = i.length; e;) this.addEventListener(i[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function () {
            if (this.removeEventListener) for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery), define("mousewheel", function () {}), define("views/modules/scroller/base-scroll", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app", "mousewheel"], function (e, t, i, n, s, r) {
    var o = n.extend({
        events: {
            mousewheel: "handleMouseWheel",
            mouseenter: "onMouseEnter",
            mouseleave: "onMouseLeave",
            touchstart: "onTouchStart",
            "mousedown .scrolldragger": "onDraggerMouseDown",
            "mouseenter .scrolldragger": "onDraggerMouseOver",
            "mouseleave .scrolldragger": "onDraggerMouseOut",
            "mousedown .scrollbar": "onBarClick"
        },
        removeActiveDelay: 300,
        initialize: function (i) {
            i = e.extend({
                disabled: !1,
                contentClass: ".scrollable-content",
                lockPageScroll: !0,
                delayScroll: !1,
                minDraggerSize: 40
            }, i), t.bindAll(this, "onDraggerMouseUp", "onDraggerMouseMove", "onTouchMove", "onTouchStop", "setMouseInHouse", "clearMouseInHouse"), this.content = this.$(i.contentClass), this.bar = e(i.template).hide(), this.bar.addClass("scrollbar"), this.dragger = this.bar.find(".scrolldragger"), this.body = r.get("body"), this.$el.append(this.bar), this.isMouseDown = !1, this.isMouseOver = !1, this.draggerOffset = 0, n.prototype.initialize.call(this, i), this.refresh()
        },
        bindEvents: function () {
            this.delegateEvents()
        },
        unbindEvents: function () {
            this.undelegateEvents(), this.body.off("." + this.cid), clearInterval(this.accelerationTimer), clearTimeout(this.enterDelay), clearTimeout(this.leaveDelay)
        },
        refresh: function () {
            if (this.content = this.$(this.options.contentClass), !this.options.disabled && 0 !== this.content.length) if (this.viewportSize = this.getViewportSize(), this.contentSize = this.getContentSize(), this.contentViewportRatio = this.viewportSize / this.contentSize, 1 > this.contentViewportRatio) {
                var e = this._calculateDraggerSize(this.viewportSize, this.contentViewportRatio, this.contentSize);
                this.draggerSize = this._setDraggerSize(e), this.active || (this.bar.show(), this.bindEvents(), this.active = !0), this.shiftContent(0, 0)
            } else this.active && (this.bar.hide(), this.unbindEvents(), this.active = !1)
        },
        _calculateDraggerSize: function (e, t, i) {
            var n = Math.round(e * t);
            if (this.options.minDraggerSize > n) {
                var s = i - e,
                    r = e - this.options.minDraggerSize;
                this.contentViewportRatio = r / s, n = this.options.minDraggerSize
            }
            return n
        },
        onTouchStart: function (e) {
            var t = e.originalEvent.touches;
            t.length > 1 || this.options.disabled || (clearInterval(this.accelerationTimer), this.touchX = t[0].pageX, this.touchY = t[0].pageY, this.touchVectorX = 0, this.touchVectorY = 0, this.touchDragStarted = !1, this.touchLastMove = (new Date).getTime(), this.body.on("touchend." + this.cid, this.onTouchStop), this.body.on("touchcancel." + this.cid, this.onTouchStop), this.body.on("touchmove." + this.cid, this.onTouchMove))
        },
        onTouchStop: function (e) {
            if (0 === e.originalEvent.touches.length && (this.body.off("." + this.cid), this.touchDragStarted)) {
                var t = (new Date).getTime(),
                    i = t - this.touchLastMove;
                return e.preventDefault(), 100 > i && this._triggerScrollingDecelerate(this.touchVectorX, this.touchVectorY, 1500), !1
            }
        },
        _triggerScrollingDecelerate: function (e, i, n) {
            var s = (new Date).getTime(),
                r = s + n,
                o = s;
            this.accelerationTimer = setInterval(t.bind(function () {
                var t = (new Date).getTime(),
                    a = t - o;
                if (o = t, t > r) return clearInterval(this.accelerationTimer), void 0;
                t -= s;
                var l = this._adjustVelocityVector(e, t, n),
                    c = this._adjustVelocityVector(i, t, n);
                this.shiftContent(l * a, c * a)
            }, this), 20)
        },
        _adjustVelocityVector: function (e, t, i) {
            return e * Math.pow(1 - t / i, 3)
        },
        onTouchMove: function (e) {
            if (1 === e.originalEvent.touches.length) {
                var t = e.originalEvent.touches,
                    i = t[0].pageX - this.touchX,
                    n = t[0].pageY - this.touchY;
                if (this.touchDragStarted || Math.abs(i) > 10 || Math.abs(n) > 10) {
                    var s = (new Date).getTime();
                    this.touchDragStarted = !0, this.touchX = t[0].pageX, this.touchVectorX = i / (s - this.touchLastMove), this.touchY = t[0].pageY, this.touchVectorY = n / (s - this.touchLastMove), this.touchLastMove = (new Date).getTime(), this.shiftContent(i, n) === !1 && e.preventDefault()
                }
            }
        },
        onBarClick: function (e) {
            if (1 === e.which && !e.isDefaultPrevented()) {
                e.preventDefault();
                var t = this.bar.offset(),
                    i = e.pageX - t.left - this.draggerSize / 2,
                    n = e.pageY - t.top - this.draggerSize / 2;
                this.moveDraggerToPosition(i, n), this.onDraggerMouseOver(e), this.onDraggerMouseDown(e)
            }
        },
        onDraggerMouseDown: function (e) {
            if (1 === e.which) {
                this.isMouseDown = !0, e.preventDefault(), this.body.on("mousemove." + this.cid, this.onDraggerMouseMove), this.body.on("mouseup." + this.cid, this.onDraggerMouseUp);
                var t = this.dragger.offset();
                this.draggerClickOffset = {
                    left: e.pageX - t.left,
                    top: e.pageY - t.top
                }
            }
        },
        onDraggerMouseUp: function (e) {
            1 === e.which && (e.preventDefault(), this.isMouseDown = !1, this.body.off("." + this.cid), this.isMouseOver || this.dragger.removeClass("hover"))
        },
        onDraggerMouseMove: function (e) {
            if (this.isMouseDown) {
                var t = this.bar.offset(),
                    i = e.pageX - t.left - this.draggerClickOffset.left,
                    n = e.pageY - t.top - this.draggerClickOffset.top;
                this.moveDraggerToPosition(i, n)
            }
        },
        onDraggerMouseOver: function () {
            this.isMouseOver = !0, this.dragger.addClass("hover")
        },
        onDraggerMouseOut: function () {
            this.isMouseOver = !1, this.isMouseDown || this.dragger.removeClass("hover")
        },
        onMouseEnter: function () {
            clearTimeout(this.leaveDelay), this.enterDelay = setTimeout(this.setMouseInHouse, 300)
        },
        onMouseLeave: function () {
            clearTimeout(this.enterDelay), this.leaveDelay = setTimeout(this.clearMouseInHouse, 300)
        },
        setMouseInHouse: function () {
            this.isMouseInTheHouse = !0
        },
        clearMouseInHouse: function () {
            this.isMouseInTheHouse = !1
        },
        handleMouseWheel: function (e, t, i, n) {
            this.isMouseDown || this.options.delayScroll && !this.isMouseInTheHouse || (n = 20 * n, i = 20 * -1 * i || n, this.shiftContent(i, n) === !1 && e.preventDefault())
        },
        shiftContent: function (e, t) {
            var i = this.content.position(),
                n = this.content.parent(),
                s = i.left + e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("margin-left"), 10),
                r = i.top + t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("margin-top"), 10);
            return this.moveContentToPosition(s, r) ? !1 : this.options.lockPageScroll ? !1 : void 0
        },
        destroy: function () {
            this.unbindEvents(), this.bar.remove(), n.prototype.destroy.apply(this, arguments)
        },
        moveDraggerToPosition: function () {},
        moveContentToPosition: function () {},
        animateContentToPosition: function () {},
        getViewportSize: function () {
            return 0
        },
        getContentSize: function () {
            return 0
        },
        _setDraggerSize: function (e) {
            return e
        }
    });
    return o
}), define("views/modules/scroller/vertical-scroll", ["jquery", "underscore", "app", "views/modules/scroller/base-scroll"], function (e, t, i, n) {
    var s = n.extend({
        initialize: function (i) {
            i = e.extend({
                color: "light",
                fadeout: !1,
                draggerPaddingTop: 3,
                draggerPaddingBottom: 3
            }, i);
            var s = this.options.fadeout ? "fadeout" : "",
                r = t.template('<div class="vertical-scroll ui-<%= color %> <%= fade %>"><div class="scrolldragger"></div></div>');
            i.template = r({
                color: i.color,
                fade: s
            }), this.$(".vertical-scroll").remove(), n.prototype.initialize.call(this, i)
        },
        getViewportSize: function () {
            return this.$el.height()
        },
        getContentSize: function () {
            return this.content.height()
        },
        _setDraggerSize: function (e) {
            return e -= this.options.draggerPaddingTop + this.options.draggerPaddingBottom, this.dragger.css({
                height: e
            }), e
        },
        animateContentToPosition: function (i, n, s, r) {
            var o = this.viewportSize - this.contentSize,
                a = Math.max(o, Math.min(n, 0));
            r = r || "ease-out", e.when(this.animate(this.dragger, "top", -1 * a * this.contentViewportRatio + "px", s, r), this.animate(this.content, "top", a + "px", s, r)).done(t.bind(function () {
                this.$el.trigger("scrollBarUpdate", [a / o])
            }, this))
        },
        moveContentToPosition: function (e, t) {
            if (!this.active) return !1;
            var i = this.viewportSize - this.contentSize,
                n = Math.max(i, Math.min(t, 0));
            return this._positionDragger(-1 * n * this.contentViewportRatio), this._positionContent(n), this.$el.trigger("scrollBarUpdate", [n / i]), n === t
        },
        moveDraggerToPosition: function (e, t) {
            if (!this.active) return !1;
            var i = this.viewportSize - (this.draggerSize + this.options.draggerPaddingBottom + this.options.draggerPaddingTop),
                n = Math.max(0, Math.min(t, i));
            return this._positionDragger(n), this._positionContent(-1 * n / this.contentViewportRatio), this.$el.trigger("scrollBarUpdate", n / i), n === t
        },
        _positionDragger: function (e) {
            e += this.options.draggerPaddingTop, e = Math.round(e), this.useCSSTransforms ? (this.dragger.css({
                top: "0"
            }), this.dragger[0].style[this.transformCssName] = "translate(0," + e + "px)") : this.dragger.css({
                top: e
            })
        },
        _positionContent: function (e) {
            e = Math.round(e), this.useCSSTransforms ? (this.content.css({
                top: "0"
            }), this.content[0].style[this.transformCssName] = "translate(0," + e + "px)") : this.content.css({
                top: e
            })
        }
    });
    return s
}), define("views/modules/scroller/sidebar-scroll", ["jquery", "underscore", "views/modules/scroller/vertical-scroll"], function (e, t, i) {
    var n = i.extend({
        initialize: function (n) {
            t.bindAll(this, "onScrollUpdated", "removeActiveClass"), n = e.extend({
                removeActiveDelay: 700,
                onScrollListen: null
            }, n), Modernizr.touch && (this.$el.css({
                "-webkit-overflow-scrolling": "touch"
            }), "touch" === this.$el.css("-webkit-overflow-scrolling") && (this.$el.css({
                overflow: "scroll"
            }), n.disabled = !0)), this.addBottomShadow(), this.addTopShadow(), i.prototype.initialize.call(this, n), this.bar.addClass("hide")
        },
        bindEvents: function () {
            this.options.disabled || (this.$el.on("scrollBarUpdate." + this.cid, this.onScrollUpdated), i.prototype.bindEvents.apply(this, arguments))
        },
        destroy: function () {
            this.$el.off("." + this.cid), this.bar.remove(), this.topShadow.remove(), this.bottomShadow.remove(), clearTimeout(this.removeActiveClassDelay), clearTimeout(this.hideClassDelay), i.prototype.destroy.apply(this, arguments)
        },
        addTopShadow: function () {
            this.topShadow = e('<div class="shadow top-shadow"></div>').hide(), this.$el.append(this.topShadow)
        },
        addBottomShadow: function () {
            this.bottomShadow = e('<div class="shadow bottom-shadow"></div>').hide(), this.$el.append(this.bottomShadow)
        },
        removeActiveClass: function () {
            this.isMouseDown || this.isMouseOver || (this.bar.removeClass("active"), clearTimeout(this.removeActiveClassDelay), this.hideClassDelay = setTimeout(t.bind(function () {
                this.bar.addClass("hide")
            }, this), 1e3))
        },
        addActiveClass: function (e) {
            this.bar.addClass("active"), this.bar.removeClass("hide"), this.startTimeout(e || this.options.removeActiveDelay)
        },
        startTimeout: function (e) {
            clearTimeout(this.removeActiveClassDelay), this.removeActiveClassDelay = setTimeout(this.removeActiveClass, e)
        },
        onMouseOut: function () {
            i.prototype.onMouseOut.apply(this, arguments), this.isMouseDown || this.startTimeout(this.options.removeActiveDelay)
        },
        onMouseEnter: function () {
            i.prototype.onMouseEnter.apply(this, arguments), this.addActiveClass(this.options.removeActiveDelay)
        },
        onScrollListen: null,
        onScrollUpdated: function (e, t) {
            0 === t ? this.topShadow.hide() : this.topShadow.show(), 1 === t ? this.bottomShadow.hide() : this.bottomShadow.show(), this.addActiveClass(), this.options.onScrollListen && this.options.onScrollListen()
        }
    });
    return n
}), define("views/modules/live-feed-view", ["jquery", "underscore", "baseview", "pubsub", "state", "app", "views/modules/scroller/sidebar-scroll"], function (e, t, i, n, s, r, o) {
    var a = i.extend({
        initialize: function (n) {
            t.bindAll(this, "refreshMarkup", "refreshScrollBar", "onScrollListen", "initMarkup", "fetchUpdate"), n = e.extend({
                maxItems: 60,
                ads: !1,
                removeNewHighlight: 20,
                updateDelay: 30,
                dataSrcAttr: "data-src"
            }, n), n.section = this.$el.attr("data-livefeed") || n.section, this.win = r.get("win"), this.body = r.get("body"), this.$ad = this.$el.siblings(".partner-sidebar-ad"), n.ads || this.$el.css("top", 0), this.pubSub = {
                "showmore:headlines": this.onHeadlinesUpdated
            }, i.prototype.initialize.call(this, n)
        },
        onShowSidebarAd: function () {
            this.$el.css("top", this.$ad.outerHeight()), this.$el.addClass("ad-above"), this.refreshScrollBar()
        },
        onHideSidebarAd: function () {
            this.$el.css("top", 0), this.$el.removeClass("ad-above"), this.refreshScrollBar()
        },
        onScrollListen: function () {
            this.loadLazyImages(), this.subviews.vscrollbar && (this.subviews.vscrollbar.options.onScrollListen = null)
        },
        loadLazyImages: function (t) {
            var i = this.options.dataSrcAttr;
            t = t || this.$(".live-feed-multimedia"), t.each(function (t, n) {
                r.lazyLoadImage(e(n), i, !0)
            })
        },
        render: function (e) {
            this.$ul = this.$("ul"), this.setLiveFeedWidth(e), this.subviews.vscrollbar = new o({
                el: this.$(".live-feed-content"),
                color: this.options.color,
                padding: 2,
                lockPageScroll: !1,
                delayScroll: !1,
                fadeout: !0,
                onScrollListen: this.onScrollListen
            }), this.$ul.find("li").length ? (this.subviews.vscrollbar.moveDraggerToPosition(0, 0), this.$ul.children(".newcontent").removeClass("newcontent"), this.fetchUpdate()) : (this.$el.addClass("loading"), this.fetchData("/feeds/live/" + this.options.section + "/?count=40", this.initMarkup)), this.startUpdateCheck()
        },
        fetchUpdate: function () {
            var e = this.$ul.find("li:first").attr("data-timestamp"),
                t = "/feeds/live/" + this.options.section + "/?date=" + e;
            this.fetchData(t, this.refreshMarkup)
        },
        fetchData: function (e, i) {
            s.fetchHtml(e).done(i).always(t.bind(function () {
                this.$el.removeClass("loading")
            }, this))
        },
        refreshMarkup: function (i) {
            if (i && 0 !== i.length) {
                var n = this.$ul.find("li"),
                    s = {};
                this.options.dataSrcAttr, n.removeClass("top"), i.each(function () {
                    s[e(this).attr("data-content-id")] = !0
                }), n.each(function () {
                    var t = e(this);
                    s[t.attr("data-content-id")] && t.remove()
                }), i.eq(0).addClass("top").append('<div class="shadow"></div>'), this.$ul.prepend(i), i.addClass("newcontent"), this.loadLazyImages(i.find(".live-feed-multimedia")), n = this.$ul.children("li"), n.length > 60 && n.slice(60).remove(), this.refreshScrollBar(), this.afterNewContent = setTimeout(t.bind(function () {
                    i.removeClass("newcontent")
                }, this), 1e3 * this.options.removeNewHighlight)
            }
        },
        initMarkup: function (t) {
            this.$ul.append(t);
            var i = this.$el.height(),
                n = this.options.dataSrcAttr;
            Modernizr.touch ? this.loadLazyImages(t.find(".live-feed-multimedia")) : t.each(function (t, s) {
                e(s).hasClass("has-image") && i > e(s).offset().top && r.lazyLoadImage(e(s).find(".live-feed-multimedia"), n, !0)
            }), this.refreshScrollBar(), this.startUpdateCheck()
        },
        refreshScrollBar: function () {
            this.subviews && this.subviews.vscrollbar && this.subviews.vscrollbar.refresh()
        },
        onCardWidthChange: function (e) {
            this.setLiveFeedWidth(e), this.loadLazyImages(), this.refreshScrollBar()
        },
        setLiveFeedWidth: function (e) {
            var t = "data-src",
                i = "small";
            (e || this.options.currentCardInfo) && (i = e.name || this.options.currentCardInfo.name), this.$ul.removeClass("live-feed-wide"), "large" === i ? (t = "data-src-large", this.$ul.addClass("live-feed-wide")) : this.$ul.removeClass("live-feed-wide"), this.options.dataSrcAttr = t
        },
        onHeadlinesUpdated: function () {
            this.headlinesUpdate = setTimeout(this.refreshScrollBar, 1e3)
        },
        startUpdateCheck: function () {
            clearInterval(this.interval), this.interval = setInterval(this.fetchUpdate, 1e3 * this.options.updateDelay)
        },
        stopUpdateCheck: function () {
            clearInterval(this.interval)
        },
        destroy: function (e) {
            this.$el.removeClass("loading"), this.stopUpdateCheck(), clearTimeout(this.afterNewContent), clearTimeout(this.headlinesUpdate), e && this.$ul.empty(), i.prototype.destroy.call(this, !1)
        }
    });
    return a
}), define("views/modules/video", ["jquery", "underscore", "baseview", "pubsub", "state"], function (e, t, i, n, s) {
    var r = i.extend({
        events: {
            "click .videoStillPlay": "swapImageForVideo",
            "click .videoCloseButton": "hidePlayer"
        },
        initialize: function (n) {
            n && n.el && (n = e.extend(!0, {
                onVideoComplete: null,
                onVideoShow: null,
                onVideoHide: null
            }, n), this.scriptsLoaded = !1, this.liveHidden = !1, this.videoDetail = {}, this.player = !1, this.modVP = !1, this.modExp = !1, this.$videoObj = this.$(".videoObject"), this.brightcoveId = this.$(".BrightcoveExperience").attr("id"), this.$videoObj.length && this.brightcoveId && (this.inited = !0, this.tenpercent = !1, this.fiftypercent = !1, this.ninetyfivepercent = !1, this.throttledDetermine = t.throttle(this.determineCompletion, 1500), t.isUndefined(site_config.SMARTPLAYER) && (site_config.SMARTPLAYER = !1), t.bindAll(this, "createPlayer", "onBrightCoveLoad", "onVideoComplete", "getVideoDetail", "onVideoStart", "destroy", "isPlayingHandler", "determineCompletion"), this.pubSub = {
                "carousel:switchSlide": this.hidePlayer
            }, i.prototype.initialize.call(this, n), (this.options.autostart || this.options.autocreate) && this.createPlayer(), this._buildBrightCoveLoadCallback()))
        },
        _buildBrightCoveLoadCallback: function () {
            window.BCCallbacks || (window.BCCallbacks = {}), window.BCCallbacks[this.brightcoveId] = this.onBrightCoveLoad, window.BCLoad || (window.BCLoad = function (e) {
                window.BCCallbacks[e] ? window.BCCallbacks[e](e) : console.warning("received brightcove callback for video that does not exist: " + e)
            })
        },
        onBrightCoveLoad: function (e) {
            this.$(".temp-loader").fadeOut(), this.player = window.brightcove.api.getExperience(e), this.player ? (this.modVP = this.player.getModule(window.brightcove.api.modules.APIModules.VIDEO_PLAYER), this.modVP && site_config.SMARTPLAYER && (this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.BEGIN, this.onVideoStart), this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.COMPLETE, this.onVideoComplete), this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.PLAY, this.onMediaEventFired), this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.STOP, this.onMediaEventFired), this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.SEEK_NOTIFY, this.onMediaEventFired), this.modVP.addEventListener(window.brightcove.api.events.MediaEvent.PROGRESS, this.throttledDetermine))) : console.warn("brightcove video loaded, but could not get experience: " + e)
        },
        onVideoStart: function (e) {
            this.videoDetail.videoDuration = 120 > e.duration ? "less than 2 min" : "greater than 2 min", this.videoDetail.completion = "0%", this.videoDetail.contenttype = "video", this.videoDetail.videoName = e.media.displayName, this.videoDetail.eventtype = "video:load", this.videoDetail.contentid = e.target.experience.id, n.trigger("video:load", this.videoDetail)
        },
        onVideoComplete: function () {
            console.log("video playback finished: " + this.brightcoveId), e.isFunction(this.options.onVideoComplete) && this.options.onVideoComplete()
        },
        onMediaEventFired: function (e) {
            n.trigger("uotrack", e.type)
        },
        determineCompletion: function (e) {
            var t = e.duration,
                i = e.position,
                s = Math.round(100 * (i / t));
            !this.fiftypercent && s >= 50 && 95 > s ? (n.trigger("vitrack", "50%"), this.fiftypercent = !0) : !this.ninetyfivepercent && s >= 95 && 99 > s && (n.trigger("vitrack", "95%"), this.ninetyfivepercent = !0)
        },
        createPlayer: function () {
            if (window.brightcove) {
                this.getVideoDetail();
                var t = e(".open-sidebar");
                t.is(":visible") && 0 === e("#overlay").length && (t.hide(), this.liveHidden = !0), window.brightcove.createExperiences(null, this.brightcoveId), s.stopRefreshTimer(), this.$videoObj.show()
            } else this.loadScripts(this.createPlayer)
        },
        destroy: function () {
            this.inited && (s.startRefreshTimer(), this.brightcoveId && window.brightcove && (this.player && this.modVP && site_config.SMARTPLAYER && (this.modVP.getIsPlaying(this.isPlayingHandler), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.BEGIN, this.onVideoStart), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.COMPLETE, this.onVideoComplete), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.PLAY, this.onMediaEventFired), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.STOP, this.onMediaEventFired), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.SEEK_NOTIFY, this.onMediaEventFired), this.modVP.removeEventListener(window.brightcove.api.events.MediaEvent.PROGRESS, this.throttledDetermine)), window.brightcove && (window.brightcove.experiences && delete window.brightcove.experiences[this.brightcoveId], window.brightcove.instances && delete window.brightcove.instances[this.brightcoveId])), window.BCCallbacks ? (window.BCCallbacks[this.brightcoveId] && delete window.BCCallbacks[this.brightcoveId], 0 === t.size(window.BCCallbacks) && (delete window.BCCallbacks, delete window.BCLoad)) : console.warn("BCCallbacks no longer available on video destroy")), i.prototype.destroy.apply(this, arguments)
        },
        hidePlayer: function () {
            this.liveHidden && (e(".open-sidebar").show(), this.liveHidden = !1), this.$videoObj && this.$videoObj.hide(), e.isFunction(this.options.onVideoHide) && this.options.onVideoHide(), s.startRefreshTimer()
        },
        loadScripts: function (e) {
            require(["http://admin.brightcove.com/js/BrightcoveExperiences.js"], function () {
                window.brightcove !== void 0 ? (e(), console.log("loading Brightcove")) : console.log("Error loading Brightcove")
            })
        },
        swapImageForVideo: function (t) {
            this.$el.closest(".hero").length && e(t.target).is("a") || (this.createPlayer(), e.isFunction(this.options.onVideoShow) && this.options.onVideoShow(), this.$(".temp-loader").show(), n.trigger("video:playClick"))
        },
        getVideoDetail: function () {
            this.videoDetail.videoPlayerName = this.$(".vpname").attr("value"), this.videoDetail.videoContentProvider = this.$(".vcp").attr("value"), this.videoDetail.keywords = this.$(".vtags").attr("value"), this.videoDetail.ssts = this.$(".ssts").attr("value"), this.videoDetail.cst = this.$(".cst").attr("value"), this.videoDetail.templateType = this.$(".templatetype").attr("value");
            try {
                this.videoDetail.cstlist = this.videoDetail.cst.split("/"), this.videoDetail.sstslist = this.videoDetail.ssts.split("/")
            } catch (e) {
                return console.error("Invalid page", e.stack || e.stacktrace || e.message), void 0
            }
            this.videoDetail.category = this.videoDetail.cstlist[0], this.videoDetail.cst = this.videoDetail.cstlist.slice(0, 3).join(":"), this.videoDetail.section = this.videoDetail.sstslist[0], this.videoDetail.ssts = this.videoDetail.sstslist.join(":"), this.videoDetail.subcategory = this.videoDetail.cstlist.slice(0, 2).join(":"), this.videoDetail.subsection = this.videoDetail.sstslist.slice(0, 2).join(":"), this.videoDetail.topic = this.videoDetail.sstslist.slice(0, 3).join(":")
        },
        isPlayingHandler: function (e) {
            e && this.modVP.pause(!0)
        }
    });
    return r
}), define("views/modules/taboola", ["jquery", "underscore", "backbone", "app", "state"], function (e, t, i, n) {
    var s = i.View.extend({
        apiKey: "90393b522c6937bd3b1e815ead8d189cea03650",
        initialize: function (i) {
            this.options = e.extend({}, i || {}), this.options.widget && n.loadScript("http://cdn.taboolasyndication.com/libtrc/usatodaydemo/loader.js", "_taboola", t.bind(this.getWidget, this))
        },
        destroy: function () {
            this.remove()
        },
        registerTaboolaClick: function (e, t, i, n) {
            n || (n = "below-photo");
            var s = "http://api.taboola.com/1.0/json/usatodaydemo/recommendations.notify-click?app.type=desktop&app.apikey=" + this.apiKey + "&response.id=" + i + "&item.type=" + t + "&item.id=" + e + "&placement=" + n;
            (new Image).src = s
        },
        registerTaboolaVisible: function (e) {
            var t = "http://api.taboola.com/1.0/json/usatodaydemo/recommendations.notify-visible?app.type=desktop&app.apikey=" + this.apiKey + "&response.id=" + e;
            (new Image).src = t
        },
        getRelated: function (i, s, r, o, a, l) {
            if (i) {
                s || (s = "video"), r || (r = "video"), o || (o = 6), a || (a = window.location.href), l || (l = 0);
                var c = "http://api.taboola.com/1.0/json/usatodaydemo/recommendations.get";
                c += "?output.callback=define&app.type=desktop&app.apikey=" + this.apiKey, c += "&source.id=" + l + "&source.url=" + encodeURIComponent(a) + "&source.type=" + s + "&rec.type=" + r + "&count=" + o, require([c], t.bind(function (t) {
                    n.set("taboolaResponseID", t.id), require.undef(c), e('script[data-requiremodule="' + c + '"]').remove(), t.list || (t.list = {}), this.registerTaboolaVisible(t.id), i(t)
                }, this))
            }
        },
        getWidget: function () {
            console.log("TABOOLA more stories"), _taboola.push({
                notify: "newPageLoad"
            }), _taboola.push({
                article: "auto",
                target_type: "mix",
                url: window.location.href
            }), -1 !== n.getPageUrl().indexOf("/sports/") || -1 !== n.getPageUrl().indexOf("/gameon/") ? _taboola.push({
                category: "sports",
                mode: this.options.mode,
                container: this.options.container
            }) : _taboola.push({
                mode: this.options.mode,
                container: this.options.container
            })
        }
    });
    return s
}),
function (e) {
    e.cookie = function (t, i, n) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || null === i || void 0 === i)) {
            if (n = e.extend({}, n), (null === i || void 0 === i) && (n.expires = -1), "number" == typeof n.expires) {
                var s = n.expires,
                    r = n.expires = new Date;
                r.setDate(r.getDate() + s)
            }
            return i += "", document.cookie = [encodeURIComponent(t), "=", n.raw ? i : encodeURIComponent(i), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = i || {};
        for (var o, a = n.raw ? function (e) {
                return e
            } : decodeURIComponent, l = document.cookie.split("; "), c = 0; o = l[c] && l[c].split("="); c++) if (a(o[0]) === t) return a(o[1] || "");
        return null
    }
}(jQuery), define("cookie", function () {}), define("admanager", ["jquery", "underscore", "app", "cookie"], function (e, t) {
    var i = function () {
        this.initialize()
    };
    return i.prototype = {
        adSizes: {
            commenttag: [1, 1],
            pushdown: [1200, 615],
            elastic: [1080, 810],
            outofpage: [1080, 810],
            heroflip: [720, 524],
            livefeed: [360, 800],
            videotakeover: [720, 405],
            lowerthird: [1, 1],
            mediumrectangle: [300, 250],
            halfpage: [300, 600],
            iabpushdown: [970, 90],
            billboard: [970, 250],
            portrait: [300, 1050],
            leaderboard: [728, 90]
        },
        csId: "J06575",
        debug: !1,
        isIE: !1,
        noAds: !1,
        slots: {},
        _containsValue: function (e, t) {
            return Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
                for (var t = 0; this.length > t; t++) if (this[t] === e) return t;
                return -1
            }), e.indexOf(t)
        },
        _createScript: function (e, t, i) {
            this.logDebug("Creating script", e, t, i);
            var n = document.createElement("script");
            n.id = e, n.src = t, n.type = "text/javascript", n.defer = !1, "undefined" != typeof callback && null != callback && (n.onreadystatechange = function () {
                ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = this.onload = null)
            }, n.onload = function () {
                this.onreadystatechange = this.onload = null
            }), i[0].appendChild(n)
        },
        _createStyleSheet: function (e, t, i) {
            if (null != t && "" != t) {
                var n = document.createElement("link");
                n.id = e, n.rel = "stylesheet", n.type = "text/css", n.href = t, i.append(n)
            }
        },
        _get: function (t) {
            return Modernizr.localstorage ? e.parseJSON(sessionStorage[t]) : e.parseJSON(e.cookie(t))
        },
        _getUrlParam: function (e) {
            var t = decodeURI((RegExp(e + "=" + "(.+?)(&|$)").exec(location.search) || [, !1])[1]);
            return "false" === t ? !1 : "true" === t ? !0 : t
        },
        _set: function (t, i) {
            this.logDebug("_set", t, i), "string" != typeof i && (i = this._toString(i)), Modernizr.localstorage ? sessionStorage.setItem(t, i) : e.cookie(t, i)
        },
        _unset: function (t) {
            Modernizr.localstorage ? sessionStorage.removeItem(t) : e.cookie(t, null)
        },
        _sortUnique: function (e) {
            e = e.sort(function (e, t) {
                return 1 * e - 1 * t
            });
            for (var t = [e[0]], i = 1; e.length > i; i++) e[i - 1] !== e[i] && t.push(e[i]);
            return t
        },
        _split: function (e, t) {
            if (e.split) {
                var i = e.split(t);
                if (i.length) return i
            }
            return e
        },
        _toString: function (t) {
            if (window.JSON) return JSON.stringify(t);
            if (e.isArray(t)) {
                for (var i = "[", n = 0; t.length > n; n++) n > 0 && (i += ","), i += "number" == typeof t[n] || "boolean" == typeof t[n] ? t[n] : '"' + t[n] + '"';
                return i += "]"
            }
            return this.logWarn("String conversion not supported for:", t), ""
        },
        checkMeter: function (e, t, i) {
            this.logDebug("checkMeter(" + e + ", " + t + ", " + i + ")");
            var n = site_config.ADS.THRESHOLDS[e.toUpperCase()];
            if (n === void 0) return this.logWarn("Rate Meter threshold not found"), !1;
            var s = !1,
                r = "rm_" + e;
            null != t && (r += "_" + t);
            var o = this._get(r);
            if (this.logDebug("Found from storage", o), o === void 0 || null === o) o = Array(), o[0] = n[0], o[1] = 0;
            else if (-1 === o[0]) return !1;
            return o[0]--, 1 > o[0] && i ? o[0]++ : 1 > o[0] && (s = !0, o[1]++, o[1] >= n.length && o[1]--, o[0] = n[o[1]]), this._set(r, o), s
        },
        clearMeter: function (e, t) {
            var i = "rm_" + e;
            null != t && (i += "_" + t), this._unset(i)
        },
        convertAdTypeToAdUnit: function (e) {
            if (!e) return null;
            switch (e) {
                case "Pushdown+":
                    return "pushdown";
                case "Live Feed Takeover":
                    return "livefeed";
                case "outofpage":
                    return e;
                default:
                    return e.toLowerCase().replace(" ", "")
            }
        },
        MockGoogleSizeClass: function () {},
        overwriteGoogleSizesWithMySizes: function (e, i) {
            this.MockGoogleSizeClass.prototype = Object.getPrototypeOf(e[0]), i = t.map(i, t.bind(function (e) {
                var t = new this.MockGoogleSizeClass;
                return t.constructor.apply(t, e), t
            }, this)), i.splice(0, 0, 0, e.length), e.splice.apply(e, i)
        },
        defineSlot: function (e, i, n, s, r) {
            var o = this.slots[e];
            if (o !== void 0) {
                this.overwriteGoogleSizesWithMySizes(o.slot.getSizes(), s), o.slot.clearTargeting();
                for (var a in r) r.hasOwnProperty(a) && null != r[a] && (this.logInfo('Set "' + a + '" targeting for ' + n, r[a]), this.setTargeting(o.slot, a, r[a]));
                return o
            }
            var l = {};
            l.isRefreshable = !1, l.sizes = s, l.slot = null, l.slotId = n, l.placementId = e, this.slots[e] = l;
            var c = {
                accountId: site_config.ADS.DFP.ACCOUNTID,
                accountName: site_config.ADS.DFP.ACCOUNTNAME,
                adUnit: i
            };
            this._getUrlParam("usatai") && this._getUrlParam("usatan") && this._getUrlParam("usatl") && (c.accountId = this._getUrlParam("usatai"), c.accountName = this._getUrlParam("usatan"), r.adlabel = this._getUrlParam("usatl"));
            var u = t.template("<%= accountId %>/<%= accountName %>/<%= adUnit %>", c);
            return this.registerSlotWithGoogle(e, u, s, n, r), l
        },
        defineOutOfPageSlot: function (e, i, n, s) {
            if (this.slots[e] !== void 0) return this.slots[e];
            var r = {};
            r.isRefreshable = !1, r.sizes = null, r.slot = null, r.slotId = n, r.placementId = e, this.slots[e] = r;
            var o = {
                accountId: site_config.ADS.DFP.ACCOUNTID,
                accountName: site_config.ADS.DFP.ACCOUNTNAME,
                adUnit: i
            };
            this._getUrlParam("usatai") && this._getUrlParam("usatan") && this._getUrlParam("usatl") && (o.accountId = this._getUrlParam("usatai"), o.accountName = this._getUrlParam("usatan"), s.adlabel = this._getUrlParam("usatl"));
            var a = t.template("<%= accountId %>/<%= accountName %>/<%= adUnit %>", o);
            return this.registerOutOfPageSlotWithGoogle(e, a, n, s), r
        },
        getBlankStateObj: function () {
            var e = {};
            return e.ecid = null, e.isOpen = !0, e
        },
        getCreativeState: function (e) {
            var t = this._get("dfpc_" + e);
            if (t === void 0 || null === t) {
                var i = this.getBlankStateObj();
                return i.ecid = e, i
            }
            return t
        },
        getSize: function (e) {
            var t = this.adSizes[e];
            return t === void 0 ? (this.logWarn("Size not found for " + e), null) : t
        },
        getSizes: function (t, i) {
            var n = this;
            return e(this._split(i, ",")).each(function () {
                t.push(n.getSize(this))
            }), this._sortUnique(t)
        },
        getVCESize: function (e) {
            var t = this.getSize(e);
            return null == t ? "1x1" : t[0] + "x" + t[1]
        },
        initialize: function () {
            return "undefined" == typeof googletag || this._getUrlParam("no_ads") ? (this.noAds = !0, void 0) : (this.noAds = !1, (isAdDebug || "1" == this._getUrlParam("usat_console")) && (this.debug = !0), this.logDebug("AdManager initializing", this), this.isIE = e("html").hasClass("lt-ie11"), this.initializeGoogletag(), this.initializeBaseTargeting(), this.logDebug("AdManager initialize", this), void 0)
        },
        initializeGoogletag: function () {
            var e = this;
            googletag.cmd.push(function () {
                e.logInfo("Collapses the empty divs. Used for the asset pages where the slot and placement are the same"), googletag.pubads().collapseEmptyDivs(), e.logInfo("Enabled the ad calls"), googletag.enableServices()
            })
        },
        initializeBaseTargeting: function () {
            var t = this;
            googletag.cmd.push(function () {
                var i = e.cookie("rsi_segs");
                if (null != i) {
                    for (var n = t._split(i, "|"), s = RegExp("^" + this.csId + "_", "i"), r = [], o = 0; n.length > o; o++) r.push(n[o].replace(s, ""));
                    t.logInfo("set revsci targeting", r), t.setTargeting(null, "segments", r)
                }
            }), site_config.ADS.DFP.ENV && googletag.cmd.push(function () {
                t.logInfo("set env targeting", site_config.ADS.DFP.ENV), t.setTargeting(null, "env", site_config.ADS.DFP.ENV)
            }), this._getUrlParam("usatenv") ? googletag.cmd.push(function () {
                var i = t._getUrlParam("usatenv");
                t.logInfo("set param override env targeting", i), t.setTargeting(null, "env", i), e.cookie("usatenv", i, {
                    expires: null
                })
            }) : e.cookie("usatenv") && googletag.cmd.push(function () {
                var i = e.cookie("usatenv");
                t.logInfo("set cookie override env targeting", i), t.setTargeting(null, "env", i), e.cookie("usatenv", i, {
                    expires: null
                })
            })
        },
        loadAd: function (t) {
            var i = this;
            googletag.cmd.push(function () {
                var n = t.slot;
                return n || (n = i.slots[t.slotId].slot), e("iframe", "#" + t.slotId).attr("allowtransparency", "true"), n.isRefreshable ? (googletag.pubads().refresh([t.slot]), i.logInfo("Ad refreshed for " + t.slotId, t), void 0) : (n.isRefreshable = !0, void 0)
            })
        },
        _log: function (e, t, i) {
            if (window.console && console[t] && (console[t]("Ad " + t, i), this.isIE)) for (var n = 0, s = i.length; s > n; n++) console[t]("|- " + i[n])
        },
        logDebug: function (e) {
            this.debug && this._log(e, "log", arguments)
        },
        logError: function (e) {
            this._log(e, "error", arguments)
        },
        logInfo: function (e) {
            this.debug && this._log(e, "info", arguments)
        },
        logWarn: function (e) {
            this._log(e, "warn", arguments)
        },
        registerCreativeState: function (e, t) {
            this._set("dfpc_" + e, t)
        },
        registerOutOfPageSlotWithGoogle: function (e, t, i, n) {
            var s = this;
            googletag.cmd.push(function () {
                var r = s.slots[e];
                r.slot = googletag.defineOutOfPageSlot(t, i).addService(googletag.pubads());
                for (var o in n) n.hasOwnProperty(o) && null != n[o] && (s.logInfo('Set preloaded "' + o + '" targeting', n[o]), s.setTargeting(r.slot, o, n[o]))
            }), googletag.cmd.push(function () {
                googletag.display(i)
            })
        },
        registerSlotWithGoogle: function (e, t, i, n, s) {
            var r = this;
            googletag.cmd.push(function () {
                var o = r.slots[e];
                o.slot = googletag.defineSlot(t, i, n).addService(googletag.pubads()), r.logInfo("Slot defined for " + n, o);
                for (var a in s) s.hasOwnProperty(a) && null != s[a] && (r.logInfo('Set "' + a + '" targeting for ' + n, s[a]), r.setTargeting(o.slot, a, s[a]))
            }), googletag.cmd.push(function () {
                googletag.display(n), r.logInfo("Slot enabled for " + n)
            })
        },
        refreshAd: function (e) {
            return this.slots[e] === void 0 ? (this.logWarn("Trying to fresh an ad slot that does not exist, " + e), !1) : (this.loadAd(this.slots[e]), void 0)
        },
        setTargeting: function (e, t, i) {
            this._split(i, "|"), null == e ? googletag.pubads().setTargeting(t, i) : e.setTargeting(t, i)
        }
    }, new i
}), define("views/modules/partner/overlay", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager", "state"], function (e, t, i, n, s, r) {
    var o = s.extend({
        events: {
            "click a.close-partner": "onClickCloseButton",
            "click .film": "onClickCloseButton"
        },
        pubSub: null,
        destroy: function () {
            this.$arrows.removeClass("aboveFilm"), s.prototype.destroy.call(this, !0)
        },
        findSizeForAd: function () {
            var e = {
                adSizeClass: "size-s",
                adTop: "50%"
            }, t = 450,
                i = App.get("headerEl").outerHeight(),
                n = document.documentElement.clientHeight - i - 80,
                s = document.documentElement.clientWidth - 160;
            return s > 1080 && n > 810 ? (e.adSizeClass = "size-xl", t = 810) : s > 936 && n > 700 ? (e.adSizeClass = "size-l", t = 700) : s > 768 && n > 576 && (e.adSizeClass = "size-m", t = 576), e.adTop = (document.documentElement.clientHeight - i - t) / 2 + i + "px", e
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), e("article.asset", document).length > 0 ? (this.$arrows = e(".overlay-arrows .next-wrap, .overlay-arrows .previous-wrap"), this.$el.addClass("withAsset")) : this.$arrows = e("#cards #nextSection, #cards #prevSection"), t.bindAll(this), s.prototype.initialize.call(this, i), this.listen(), this.onResize(), r.logDebug("Partner Overlay initialized", this)
        },
        listen: function () {
            null == this.pubSub && (this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":ready"] = this.onReady, this.pubSub["partner:" + this.config.dfp.ecid + ":close"] = this.onClose, this.pubSub["partner:" + this.config.dfp.ecid + ":leavebehind:clicked"] = this.showOverlay, this.pubSub["open:overlay"] = this.onClose, this.pubSub["resize:app"] = this.onResize, this.pubSub["breakingbar:after:open"] = this.onResize, this.pubSub["breakingbar:after:close"] = this.onResize, n.attach(this.pubSub, this))
        },
        onClickCloseButton: function () {
            this.onClose()
        },
        onClose: function () {
            this.$arrows.removeClass("aboveFilm"), n.trigger("overlay:close:show"), n.trigger("partner:" + this.config.dfp.ecid + ":stopToClose"), this.hide(!0, t.bind(function () {
                this.$el.removeAttr("style")
            }, this))
        },
        onFinish: function () {},
        onReady: function () {
            this.config.startVisible ? (this.showOverlay(), n.trigger("partner:" + this.config.dfp.ecid + ":creative:defaultshow")) : n.trigger("partner:" + this.config.dfp.ecid + ":leavebehind:defaultshow")
        },
        onResize: function () {
            var e = this.findSizeForAd();
            this.config.$adEl.removeClass("size-s").removeClass("size-m").removeClass("size-l").removeClass("size-xl").addClass(e.adSizeClass).css({
                top: e.adTop
            })
        },
        showOverlay: function () {
            this.$arrows.addClass("aboveFilm"), n.trigger("overlay:close:hide"), this.show(!0).done(t.bind(function () {
                n.trigger("partner:" + this.config.dfp.ecid + ":play")
            }, this))
        }
    });
    return o
}), define("views/modules/partner/inline", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager", "state"], function (e, t, i, n, s, r) {
    var o = s.extend({
        pubSub: null,
        destroy: function (e) {
            s.prototype.destroy.call(this, e)
        },
        findSizeForAd: function (e, t) {
            var i = {
                adSizeClass: "size-s",
                marginTop: "5px"
            }, n = 450;
            return e > 1080 && t > 810 ? (i.adSizeClass = "size-xl", n = 810) : e > 936 && t > 700 ? (i.adSizeClass = "size-l", n = 700) : e > 768 && t > 576 && (i.adSizeClass = "size-m", n = 576), i.marginTop = (t - n) / 2 + "px", i
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), this.adReady = !1, s.prototype.initialize.call(this, i), this.listen(), this.onResize(this.config.viewportWidth, this.config.viewportHeight), r.logDebug("Partner Inline initialized", this)
        },
        listen: function () {
            null == this.pubSub && (this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":ready"] = this.onReady, this.pubSub["partner:" + this.config.dfp.ecid + ":close"] = this.onClose, this.pubSub["open:overlay"] = this.onClose, n.attach(this.pubSub, this))
        },
        onClickCloseButton: function () {
            this.onClose()
        },
        onClose: function () {
            n.trigger("partner:" + this.config.dfp.ecid + ":stopToClose")
        },
        onFinish: function () {},
        onReady: function () {
            this.adReady = !0
        },
        onResize: function (e, t) {
            var i = this.findSizeForAd(e, t);
            this.$el.removeClass("size-s").removeClass("size-m").removeClass("size-l").removeClass("size-xl").addClass(i.adSizeClass).css("margin-top", i.marginTop)
        },
        showInline: function () {
            n.trigger("partner:" + this.config.dfp.ecid + ":play")
        }
    });
    return o
}), define("advertisementpreload", ["jquery", "underscore", "backbone", "pubsub", "app", "baseview", "state", "admanager", "views/modules/partner/overlay", "views/modules/partner/inline"], function (e, t, i, n, s, r, o, a, l, c) {
    var u = r.extend({
        isStartVisible: !1,
        closeAd: function () {
            this.subviews.inline && this.subviews.inline.showInline && (this.$el.unbind().empty().attr("data-is-loaded", "false"), this.render())
        },
        destroy: function (e) {
            this.destroyed = !0, this.$el.unbind(), r.prototype.destroy.call(this, e)
        },
        getAdSlot: function () {
            return this.$overlayEl
        },
        initialize: function (i) {
            if (r.prototype.initialize.call(this, {}), a.noAds) return a.logWarn("Advertisement not initialized due to ads turned off"), void 0;
            t.bindAll(this);
            var n = this.$el.closest(".viewport");
            if (this.config = e.extend({
                showClose: !0,
                viewportHeight: n.height(),
                viewportWidth: n.width()
            }, i || {}), n.length > 0 && (450 > this.config.viewportHeight || 600 > this.config.viewportWidth)) return a.logWarn("Advertisement viewport is too small: " + this.config.viewportWidth + "x" + this.config.viewportHeight), void 0;
            if (a.logDebug("Preloaded Advertisement initialized", this), this.config.isRateMetered) {
                var s = null;
                this.config.rateMeterId && (s = this.config.rateMeterId, a.clearMeter(this.config.rateMeter, this.config.rateMeterId)), a.checkMeter(this.config.rateMeter, s, this.config.excludeTransitionAd) && (this.isStartVisible = !0), this.render()
            }
        },
        playAd: function () {
            a.logDebug("playAd() called"), this.subviews.inline && this.subviews.inline.showInline && this.subviews.inline.showInline()
        },
        render: function () {
            var t = this,
                i = {
                    series: this.config.series,
                    sitepage: this.config.sitePage,
                    title: this.config.title,
                    topic: this.config.topic
                }, n = this.config.aws;
            this.$el.each(function () {
                var s = e(this);
                s.empty(), a.logInfo("Found Preload Slot: " + s.attr("id"), s);
                var r = n,
                    o = s.attr("data-cst");
                o !== void 0 && (r = o);
                var l = s.attr("data-slot-position") + "/" + r,
                    c = s.attr("id"),
                    u = s.attr("data-placement-id"),
                    h = a.defineOutOfPageSlot(u, l, c, i);
                s.bind("partnersetup", function (e, i) {
                    var n = null;
                    if (i !== void 0 && i.data !== void 0) n = i.data;
                    else {
                        if (void 0 === e.originalEvent || void 0 === e.originalEvent.data) return a.logError("Found a high impact ad, can't find the data object from the iFrame", arguments), void 0;
                        n = e.originalEvent.data
                    }
                    t.setupHighImpact(n, s), s.attr("data-is-loaded", "true")
                }), a.loadAd(h)
            })
        },
        setAdSize: function (e, i) {
            this.subviews.inline && t.isFunction(this.subviews.inline.onResize) && this.subviews.inline.onResize(e, i)
        },
        setupHighImpact: function (i, s) {
            var r = this;
            this.data = i;
            var o, u, h = this.adEl = "elastic_" + i.dfp.ecid;
            if ("asset" == this.config.masterPageType) {
                var d = {
                    id: h,
                    position: "elastic"
                };
                o = t.template(e("#partner_overlay_template").html(), d), this.$overlayEl = e(o).appendTo(this.$el), this.overlayEl = this.$overlayEl.attr("id"), u = this.$adEl = e("#" + h)
            } else "gallery" == this.config.masterPageType && (o = '<div class="gallery-photo-border"></div>', this.$overlayEl = s, this.overlayEl = s.attr("id"), u = this.$adEl = e(o).appendTo(s));
            this.pubSub = {}, this.pubSub["partner:" + i.dfp.ecid + ":play"] = this.trackView, n.attach(this.pubSub, this), a._createStyleSheet(u.attr("id") + "_stylesheet", i.stylesheet, u);
            var p = {
                html: i.html
            };
            this.config.showClose ? e(t.template(e("#partner_container_template").html(), p)).appendTo(u) : e(t.template('<div class="container"><%= html %></div>', p)).appendTo(u);
            var f = e.extend({
                $adEl: r.$adEl,
                adEl: r.adEl,
                el: r.$overlayEl,
                startVisible: r.isStartVisible,
                viewportHeight: r.config.viewportHeight,
                viewportWidth: r.config.viewportWidth
            }, i || {});
            "asset" == this.config.masterPageType ? this.subviews.overlay = new l(f) : "gallery" == this.config.masterPageType && (this.subviews.inline = new c(f)), require([i.script], function (t) {
                if (!r.destroyed) {
                    var n = e.extend({
                        el: r.$adEl
                    }, i || {});
                    r.subviews.partner = new t(n)
                }
            })
        },
        shouldShowAd: function () {
            return a.logDebug("shouldShowAd()", this.subviews.inline), this.subviews.inline ? a.checkMeter(this.config.rateMeter, this.config.rateMeterId) : !1
        },
        trackVCE: function (e, t, i) {
            var n = "http://b.voicefive.com/c2/6035223/rs.js";
            e.vCEUrl && (n = e.vCEUrl);
            var s = n + "#c1=3&amp;c3=" + e.dfp.ebuy + "&amp;c4=" + e.dfp.ecid + "&amp;c5=" + e.dfp.epid + "&amp;c6=&amp;c10=1&amp;c11=" + e.dfp.esid + "&amp;c13=" + a.getVCESize(t) + ";&amp;c16=dfp";
            a._createScript(i.attr("id") + "_vce", s, i)
        },
        trackView: function () {
            if (null != this.data.viewUrl && "" != this.data.viewUrl) {
                var e = '<img src="' + this.data.viewUrl + 'http://www.gannett-cdn.com/static/images/pixels/pixel-transparent.png" style="display:none;" class="hide">';
                this.$adEl.append(e), a.logInfo("Tracked view for " + this.data.dfp.ecid, this.data), "Yes" == this.data.trackVCE && this.trackVCE(this.data, a.convertAdTypeToAdUnit(this.data.adType), this.$adEl)
            }
        }
    });
    return u
}), define("views/modules/carousel/gallery", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app", "views/modules/taboola", "advertisementpreload"], function (e, t, i, n, s, r, o, a) {
    var l = n.extend({
        events: {
            "click .gallery-actions-replay, .gallery-photo": "nextSlide",
            "click .gallery-related-link": "taboolaClick"
        },
        selectors: {
            endSlate: ".endslate",
            slides: ".slide:not(.partner-placement)"
        },
        endSlateTemplate: '<% _.each(data, function(item) { item.thumbnail[0].url = item.thumbnail[0].url.replace("-4_3_rx512_c680x510.jpg", "-16_9_rx86_c150x84.jpg?35580e2dd9b3eae5e5abdf01549071435bf24c1b"); %><li class="gallery-related-item"><a class="gallery-related-link" data-taboola-type="<%= item.type %>" data-taboola-id="<%= item.id %>" data-taboola-response-id="<%=response_id%>"href="<%= item.url %>"><span class="taboola-image-crop"><img src="<%= item.thumbnail[0].url %>" class="taboola-related-img" alt="" /></span><%= item.name %></a><span class="gallery-related-date"><%= item.created %></span></li><% }); %>',
        initialize: function (i) {
            t.bindAll(this, "_showEndslate"), i = e.extend({
                ads: !0,
                slideTransition: 0,
                imageLazySrcAttr: "data-src",
                lookAheadAmount: 2
            }, i), this.index = i.index, n.prototype.initialize.call(this, i), i.ads && (this.subviews.ad = new a({
                aws: this.$el.attr("data-cst"),
                el: e('.partner-slot[data-slot-type="out"]', this.$el),
                excludeTransitionAd: null,
                isRateMetered: !0,
                masterPageType: "gallery",
                title: this.$el.attr("data-seo-title"),
                rateMeter: "slide",
                rateMeterId: this.$el.attr("data-gallery-id"),
                sitePage: "usat/" + (this.$el.attr("data-ssts") || "").replace(/\/\/*$/, ""),
                showClose: !1,
                series: this.$el.attr("data-series") || null,
                topic: this.$el.attr("data-topic") || null
            })), this.endSlateBuilt = !1
        },
        render: function () {
            this._loadImage(this.$$(this.selectors.slides).eq(this.index))
        },
        taboolaClick: function (t) {
            var i = e(t.currentTarget);
            o.prototype.registerTaboolaClick(i.attr("data-taboola-id"), i.attr("data-taboola-type"), i.attr("data-taboola-response-id"), "end-slate")
        },
        nextSlide: function (e) {
            e.preventDefault(), this.options.carousel.switchSlide(null, 1)
        },
        _buildEndslate: function () {
            this.endSlateBuilt = !0;
            var e = window.location.href;
            this.$el.hasClass("hasendslate") && this.$el.data("gallery-id") && (e = window.location.protocol + "//" + window.location.host + "/picture-gallery/" + this.$el.data("gallery-id") + "/");
            var t = new o;
            this.$$(this.selectors.endSlate).addClass("loading"), t.getRelated(this._showEndslate, "photo", "photo", 4, e, this.$el.data("gallery-id"))
        },
        _showEndslate: function (e) {
            var i = this.$$(this.selectors.endSlate).removeClass("loading");
            if (1 === i.length) {
                var n = t.template(this.endSlateTemplate, {
                    data: e.list,
                    response_id: e.id
                });
                i.find(".gallery-endslate-related").html(n)
            }
        },
        goToSlide: function (t) {
            var i = this._getSlideOut(),
                n = this._getSlideIn(t);
            return n.length ? (this.index = t, s.trigger("carousel:switchSlide"), this._switchSlides(n, i, this.options.slideTransition)) : e.Deferred().reject()
        },
        shouldShowAd: function () {
            return !this.showingAd && this.options.ads && this.subviews.ad.shouldShowAd() ? !0 : !1
        },
        showAd: function () {
            var i = this._getSlideOut();
            return this.showingAd = this.subviews.ad.getAdSlot(), i[0] !== this.showingAd[0] ? this._switchSlides(this.showingAd, i, this.options.slideTransition).done(t.bind(function () {
                this.subviews.ad.playAd()
            }, this)) : e.Deferred().reject()
        },
        _switchSlides: function (i, n, s) {
            var r = e.Deferred();
            return n.css({
                opacity: 1
            }), this.animate(n, "opacity", 0, s, "ease-in-out").done(t.bind(function () {
                n.removeClass("active"), n === this.showingAd && (this.subviews.ad.closeAd(), this.showingAd = null), this._fadeInSlide(i, s).done(function () {
                    n.css({
                        visibility: "hidden",
                        opacity: 0
                    }), r.resolve()
                })
            }, this)), r.promise()
        },
        _getSlideOut: function () {
            var e;
            return e = this.showingAd ? this.showingAd : this.$$(this.selectors.slides).eq(this.index)
        },
        _getSlideIn: function (e) {
            var t;
            return t = this.$$(this.selectors.slides).eq(e), this._loadImage(t, this.index > e), !this.endSlateBuilt && t.hasClass("endslate") && this._buildEndslate(), t
        },
        _loadImage: function (e, t) {
            var i = this.options.lookAheadAmount;
            do this._fetchImage(e.find("img")), i--, e = t ? e.prev() : e.next();
            while (i >= 0 && e.length > 0)
        },
        _fetchImage: function (e) {
            if (e.length > 0 && r.lazyLoadImage(e, this.options.imageLazySrcAttr)) {
                var i = e.parent();
                i.addClass("loading"), e.load(t.bind(function () {
                    i.removeClass("loading"), this._resizeMeta(e)
                }, this))
            }
        },
        _fadeInSlide: function (e, t) {
            return e.css({
                visibility: "visible",
                "z-index": 1
            }), e.addClass("active"), this._resizeMeta(e.find(".gallery-photo")), this.animate(e, "opacity", 1, t, "ease-in-out")
        },
        _resizeMeta: function (e) {
            if (e.length) {
                var t = this._getImageWidth(e);
                t && e.parent().width(t)
            }
        },
        _getImageWidth: function (e) {
            return e.width()
        },
        viewportResize: function () {
            this.$(".active .gallery-photo").each(t.bind(function (t, i) {
                this._resizeMeta(e(i))
            }, this))
        }
    });
    return l
}), define("views/modules/carousel/controls", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app"], function (e, t, i, n, s) {
    var r = n.extend({
        events: {
            "click .slide-nav": "switchSlide",
            "click .autoplay": "autoplay",
            "click .thumbnails": "thumbsToggle",
            "click .captions": "captionsToggle",
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            "click .fullscreen": "launchFullscreen"
        },
        selectors: {
            allCaptions: ".meta",
            captionBtnLabel: ".captionLabel",
            nextArrow: ".slide-nav.next",
            playBtn: ".playbtn",
            prevArrow: ".slide-nav.prev",
            thumbsBtnLabel: ".thumbLabel",
            thumbsWrapper: ".thumbs",
            ticker: ".ticker",
            viewport: ".viewport"
        },
        initialize: function (t) {
            t = e.extend({
                index: 0,
                hoverShowControls: !0,
                interactionDemo: !0,
                interactionShowDelay: 600,
                interactionHideDelay: 3600,
                totalImages: 0,
                totalSlides: 0
            }, t), this.index = t.index, n.prototype.initialize.call(this, t)
        },
        render: function () {
            this.updateTicker(), this.updateNextPrevArrows(this.index), this.options.interactionDemo && this.startInteractionDemo()
        },
        destroy: function (e) {
            this.clearUserInteractionDemo(), n.prototype.destroy.call(this, e)
        },
        switchSlide: function (t) {
            t.preventDefault(), e(t.currentTarget).hasClass("prev") ? this.options.carousel.switchSlide(null, -1) : this.options.carousel.switchSlide(null, 1)
        },
        autoplay: function (e) {
            e.preventDefault(), this.options.carousel.autoplay()
        },
        startInteractionDemo: function () {
            var e = this;
            this.uxTimeout1 = setTimeout(function () {
                e.$el.addClass("hover")
            }, this.options.interactionShowDelay), this.uxTimeout2 = setTimeout(function () {
                e.$el.removeClass("hover")
            }, this.options.interactionHideDelay)
        },
        clearUserInteractionDemo: function () {
            clearTimeout(this.uxTimeout1), clearTimeout(this.uxTimeout2)
        },
        mouseover: function () {
            this.options.hoverShowControls && this.$$(this.selectors.viewport).addClass("hover"), this.$el.addClass("hover"), this.clearUserInteractionDemo()
        },
        mouseout: function () {
            this.options.hoverShowControls && this.$$(this.selectors.viewport).removeClass("hover"), this.$el.removeClass("hover")
        },
        launchFullscreen: function (e) {
            e.preventDefault(), s.trigger("openFullScreenCarousel", {
                carousel: this,
                fullScreen: !0,
                parent: this.$el
            })
        },
        captionsToggle: function (e) {
            var t = this.$$(this.selectors.allCaptions),
                i = this.$$(this.selectors.captionBtnLabel);
            e.preventDefault(), t.hasClass("on") ? (t.removeClass("on"), i.html("Show Captions")) : (t.addClass("on"), i.html("Hide Captions"))
        },
        thumbsToggle: function (e) {
            var t = this.$$(this.selectors.thumbsBtnLabel),
                i = this.$$(this.selectors.thumbsWrapper);
            e.preventDefault(), i.hasClass("on") ? (i.removeClass("on"), t.html("Show Thumbnails"), this.options.carousel.toggleThumbnail(!1)) : (i.addClass("on"), t.html("Hide Thumbnails"), this.options.carousel.toggleThumbnail(!0))
        },
        updateNextPrevArrows: function (e) {
            var t = this.$$(this.selectors.prevArrow),
                i = this.$$(this.selectors.nextArrow);
            0 === e ? t.hide() : t.show(), this.options.totalSlides - 1 > e ? i.show() : i.hide()
        },
        updateTicker: function () {
            var e = this.$$(this.selectors.ticker);
            e.length && (this.options.totalImages > this.index ? e.css({
                visibility: "visible"
            }) : e.css({
                visibility: "hidden"
            }), e.html("<b>" + (this.index + 1) + "</b> of <b>" + this.options.totalImages + "</b>"))
        },
        goToSlide: function (e) {
            this.index = e, this.updateNextPrevArrows(e), this.updateTicker()
        },
        onPlay: function () {
            this.$$(this.selectors.playBtn).addClass("pause").text("Pause")
        },
        onStop: function () {
            this.$$(this.selectors.playBtn).removeClass("pause").text("Autoplay")
        }
    });
    return r
}), define("views/modules/scroller/horizontal-scroll", ["jquery", "underscore", "views/modules/scroller/base-scroll", "app"], function (e, t, i) {
    var n = i.extend({
        initialize: function (n) {
            n = e.extend({
                color: "light",
                draggerPaddingLeft: 0,
                draggerPaddingRight: 2,
                delayScroll: !0
            }, n);
            var s = t.template('<div class="horizontal-scroll ui-<%= color %>"><div class="scrolldragger"><div class="over-icon"></div></div></div>');
            n.template = s({
                color: n.color
            }), this.$(".horizontal-scroll").remove(), i.prototype.initialize.call(this, n)
        },
        destroy: function (e) {
            i.prototype.destroy.call(this, e)
        },
        getViewportSize: function () {
            return this.$el.width()
        },
        getContentSize: function () {
            return this.content.width()
        },
        _setDraggerSize: function (e) {
            return e -= this.options.draggerPaddingLeft + this.options.draggerPaddingRight, this.dragger.css({
                width: e
            }), e
        },
        animateContentToPosition: function (i, n, s, r) {
            var o = this.viewportSize - this.contentSize,
                a = Math.max(o, Math.min(i, 0));
            r = r || "ease-out", e.when(this.animate(this.dragger, "left", -1 * a * this.contentViewportRatio + "px", s, r), this.animate(this.content, "left", a + "px", s, r)).done(t.bind(function () {
                this.$el.trigger("scrollBarUpdate", [a / o])
            }, this))
        },
        moveContentToPosition: function (e) {
            if (!this.active) return !1;
            var t = this.viewportSize - this.contentSize,
                i = Math.max(t, Math.min(e, 0));
            return this._positionDragger(-1 * i * this.contentViewportRatio), this._positionContent(i), this.$el.trigger("scrollBarUpdate", [i / t]), i === e
        },
        moveDraggerToPosition: function (e) {
            if (!this.active) return !1;
            var t = this.viewportSize - (this.draggerSize + this.options.draggerPaddingRight + this.options.draggerPaddingLeft),
                i = Math.max(0, Math.min(e, t));
            return this._positionDragger(i), this._positionContent(-1 * i / this.contentViewportRatio), this.$el.trigger("scrollBarUpdate", i / t), i === e
        },
        _positionDragger: function (e) {
            e += this.options.draggerPaddingLeft, e = Math.round(e), this.useCSSTransforms ? (this.dragger.css({
                left: "0"
            }), this.dragger[0].style[this.transformCssName] = "translate(" + e + "px,0)") : this.dragger.css({
                left: e
            })
        },
        _positionContent: function (e) {
            e = Math.round(e), this.useCSSTransforms ? (this.content.css({
                left: "0"
            }), this.content[0].style[this.transformCssName] = "translate(" + e + "px,0)") : this.content.css({
                left: e
            })
        }
    });
    return n
}), define("views/modules/scroller/gallery-thumb-scroll", ["jquery", "underscore", "views/modules/scroller/horizontal-scroll"], function (e, t, i) {
    var n = i.extend({
        initialize: function (t) {
            t = e.extend({
                autoScrollTime: 350
            }, t), i.prototype.initialize.call(this, t)
        },
        updateThumbsPosition: function () {
            if (this.active) {
                var e = this.content.children(".active");
                e.length && this.checkThumbPosition(e)
            }
        },
        checkThumbPosition: function (e) {
            var t, i = e.outerWidth(),
                n = e.position().left + e.parent().position().left,
                s = n + i;
            if (0 > n) {
                var r = this.getViewportSize();
                t = n + (i - r)
            } else s > this.getViewportSize() && (t = n);
            if (t) {
                var o = this.content.position().left - t;
                this.animateContentToPosition(o, 0, this.options.autoScrollTime)
            }
        }
    });
    return n
}), define("views/modules/carousel/thumbs", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app", "views/modules/scroller/gallery-thumb-scroll"], function (e, t, i, n, s, r, o) {
    var a = n.extend({
        events: {
            "mouseenter li": "thumbMouseover",
            "mouseleave li": "thumbMouseout",
            "click li": "switchSlide"
        },
        selectors: {
            thumbs: "li"
        },
        initialize: function (t) {
            t = e.extend({
                hoverTransition: 0
            }, t), this.index = t.index, n.prototype.initialize.call(this, t), this.subviews.scrollbar = new o({
                el: this.$el,
                color: this.options.scrollerColor,
                padding: 2
            })
        },
        destroy: function (e) {
            n.prototype.destroy.call(this, e)
        },
        switchSlide: function (t) {
            t.preventDefault();
            var i = e(t.currentTarget).index();
            this.options.carousel.switchSlide(i)
        },
        showAd: function () {
            var e = this.$$(this.selectors.thumbs);
            e.eq(this.index).removeClass("active")
        },
        thumbMouseover: function (i) {
            var n = i.currentTarget;
            this.options.hoverTransition && (this.hoverTimeout = setTimeout(t.bind(function () {
                this.hoverTimeout = null, this.options.carousel.switchSlide(e(n).index(), null, !0)
            }, this), this.options.hoverTransition))
        },
        thumbMouseout: function () {
            this.options.hoverTransition && this.hoverTimeout && clearTimeout(this.hoverTimeout)
        },
        goToSlide: function (e) {
            var t = this.$$(this.selectors.thumbs);
            t.eq(this.index).removeClass("active"), t.eq(e).addClass("active"), this.index = e, this.subviews.scrollbar.updateThumbsPosition()
        },
        viewportResize: function () {
            this.subviews.scrollbar && this.subviews.scrollbar.refresh()
        }
    });
    return a
}), define("views/modules/carousel", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app", "views/modules/carousel/gallery", "views/modules/carousel/controls", "views/modules/carousel/thumbs"], function (e, t, i, n, s, r, o, a, l) {
    var c = n.extend({
        events: {
            mouseenter: "mouseEnter"
        },
        selectors: {
            slides: ".slide:not(.partner-placement)",
            images: ".slide:not(.partner-placement,.endslate)"
        },
        initialize: function (i) {
            i = e.extend({
                ads: !0,
                slideTransition: 0,
                hoverShowControls: !0,
                hoverTransition: 0,
                interactionDemo: !0,
                linkPath: null,
                rotate: !1,
                controlsSelector: null,
                gallerySelector: null,
                thumbsSelector: ".thumbs",
                imageLazySrcAttr: "data-src",
                scrollerColor: "light",
                rotateInterval: 3e3,
                autostart: !1
            }, i), t.bindAll(this, "rotateCarousel"), this.index = this.$(".slide.active").index(), -1 === this.index && (this.index = 0), this.linkPath = i.linkPath ? i.linkPath : "", this.playTimer = null, this.subviews = {}, this._initializeGallery(i.imageLazySrcAttr, i.slideTransition, i.ads, i.gallerySelector), this._initializeControls(i.hoverShowControls, i.interactionDemo, i.controlsSelector), this._initializeThumbs(i.hoverTransition, i.scrollerColor, i.thumbsSelector), this.pubSub = {
                "carousel:stoptimer": this.stoptimer,
                "carousel:starttimer": this.resumeAutoPlay
            }, n.prototype.initialize.call(this, i), i.autostart && this._startCarouselRotate()
        },
        _initializeGallery: function (e, t, i, n) {
            this.subviews.gallery = new o({
                ads: i,
                el: n ? this.$(n) : this.$el,
                index: this.index,
                imageLazySrcAttr: e,
                slideTransition: t,
                carousel: this
            })
        },
        _initializeControls: function (e, t, i) {
            var n = this.$(this.selectors.images),
                s = this.$$(this.selectors.slides);
            this.subviews.controls = new a({
                el: i ? this.$(i) : this.$el,
                hoverShowControls: e,
                interactionDemo: t,
                index: this.index,
                totalSlides: s.length,
                totalImages: n.length,
                carousel: this
            }), this.subviews.controls.render()
        },
        _initializeThumbs: function (e, t, i) {
            this.subviews.thumbs = new l({
                el: i ? this.$(i) : this.$el,
                hoverTransition: e,
                index: this.index,
                scrollerColor: t,
                carousel: this
            })
        },
        mouseEnter: function () {
            this.options.autostart && this._stopCarouselRotate()
        },
        rotateCarousel: function () {
            var e = this.$$(this.selectors.slides).length - 1;
            this.switchSlide(null, 1, !0), this.index !== e || this.options.rotate || this._stopCarouselRotate()
        },
        destroy: function (e) {
            this.playTimer && this._stopCarouselRotate(), n.prototype.destroy.call(this, e)
        },
        stoptimer: function () {
            clearInterval(this.playTimer), this.playTimer = null
        },
        switchSlide: function (e, t, i) {
            var n = this.$$(this.selectors.slides).length;
            if (!this.showingAd && this.subviews.gallery.shouldShowAd()) return this.showingAd = !0, this.slideAdStep = t, this.triggerEvent("showAd"), void 0;
            if (t) {
                this.slideAdStep && this.slideAdStep !== t && (t += this.slideAdStep);
                var s = this.index + t;
                e = 0 > s ? n - 1 : s >= n ? 0 : s
            } else 0 > e ? e = 0 : e >= n && (e = n - 1);
            (this.index !== e || this.showingAd) && (this.showingAd = !1, this.slideAdStep = 0, this.index = e, this.triggerEvent("goToSlide", e), i || this._trackSlideChange())
        },
        _trackSlideChange: function () {
            var t;
            t = this.$el.hasClass("galleries") ? this.$el : this.$(".galleries");
            var i = t.attr("data-gallery-id"),
                n = (t.attr("data-gal-pageurl") || "").replace(/^.*\/\/[^\/]+/, ""),
                r = {
                    gallery_id: i,
                    gallery_title: t.attr("data-title"),
                    gallery_index: this.index + 1,
                    slide_id: t.find(".slide.active img").attr("data-id"),
                    ssts: t.attr("data-ssts"),
                    cst: (t.attr("data-cst") || "bugpages").replace(/\/+$/, ""),
                    contenttype: "snapshot" === i ? "snapshot" : "galleries",
                    pathName: "" === n ? this.linkPath : n
                };
            s.trigger("slide:change", r), e.ajax({
                url: "/static/html/comscorepvcandidate.xml",
                cache: !1
            })
        },
        autoplay: function () {
            this.playTimer ? this._stopCarouselRotate() : this._startCarouselRotate(!0)
        },
        _startCarouselRotate: function (e) {
            this.playTimer = setInterval(this.rotateCarousel, this.options.rotateInterval), e && this.rotateCarousel(), this.triggerEvent("onPlay")
        },
        _stopCarouselRotate: function () {
            this.stoptimer(), this.options.autostart = !1, this.triggerEvent("onStop")
        },
        resumeAutoPlay: function () {
            this.options.autostart && !this.playTimer && this._startCarouselRotate()
        },
        toggleThumbnail: function () {
            this.triggerEvent("viewportResize")
        }
    });
    return c
}),
function (e) {
    var t = "uiPageTurn",
        i = {
            useTransforms: !! e.support.css.transform,
            fallback: "crossfade",
            pageSelector: ".ui-page-turn",
            placerSelector: ".ui-placer",
            transitionTiming: "linear",
            turnDuration: 300,
            perspective: "2200px",
            slideDuration: 200,
            fadeDuration: 200,
            shadow: !0,
            shadowOpacity: .7,
            onPageTurn: function () {}
        }, n = {
            init: function (n) {
                return this.each(function () {
                    var s = e(this),
                        r = e.extend({}, i, n),
                        o = s.find(r.pageSelector + ".active");
                    0 === o.length && (o = s.children(":first")), o.next(r.pageSelector).addClass("preload"), s.data(t, {
                        currentPage: o,
                        busy: !1,
                        settings: r
                    })
                })
            },
            option: function (e, i) {
                var n = this.data(t);
                if (n && e) {
                    if (!i) return n[e];
                    ("function" == typeof i || "onPageTurn" !== e) && (n[e] = i)
                }
            },
            nextPage: function () {
                var e = this.data(t),
                    i = e.settings,
                    n = e.currentPage,
                    r = n.next(i.pageSelector);
                return s.transition(this, n, r, !1, i, e)
            },
            prevPage: function () {
                var e = this.data(t),
                    i = e.settings,
                    n = e.currentPage,
                    r = n.prev(i.pageSelector);
                return s.transition(this, n, r, !0, i, e)
            },
            goToPage: function (i) {
                var n = this.data(t),
                    r = n.settings,
                    o = n.currentPage,
                    a = this.children(r.pageSelector + ":eq(" + i + ")"),
                    l = o.index(r.pageSelector);
                return l === i ? e.Deferred().reject() : s.transition(this, o, a, l > i, r, n)
            }
        }, s = {
            transition: function (t, i, n, r, o, a) {
                if (!n.length || a.busy) return e.Deferred().reject();
                a.busy = !0, n.removeClass("preload");
                var l;
                return l = o.useTransforms ? s.flipTransform(t, i, n, r, o) : "slide" === o.fallback ? s.slideTransition(i, n, r, o) : s.fadeTransition(i, n, o), l.done(function () {
                    o.onPageTurn(n), a.busy = !1, i.removeClass("active"), n.addClass("active"), r ? n.prev(o.pageSelector).addClass("preload") : n.next(o.pageSelector).addClass("preload"), a.currentPage = n
                }), l
            },
            flipTransform: function (t, i, n, r, o) {
                i.removeClass("active");
                var a = i.clone(),
                    l = n.clone(),
                    c = e('<div class="ui-shadow"></div>'),
                    u = e('<div class="ui-shadow"></div>'),
                    h = e('<div class="ui-page-turn-animator"></div>');
                o.shadow && (n.append(c), i.append(u), c.css({
                    opacity: o.shadowOpacity
                }), u.css({
                    opacity: 0
                })), h.append(a), h.append(l), t.append(h), r ? (i.addClass("right"), n.addClass("left"), l.addClass("right"), a.addClass("left")) : (i.addClass("left"), n.addClass("right"), l.addClass("left"), a.addClass("right")), s.setupTransition(t, h, a, l, r, o);
                var d = e.Deferred();
                return e.support.css.transition.registerTransitionEndListener(h, d).done(function () {
                    u.remove(), c.remove(), h.remove(), n.removeClass("left right"), i.removeClass("left right"), t[0].style[e.support.css.transform.perspectiveCssName] = "", t[0].style[e.support.css.transform.styleCssName] = ""
                }), setTimeout(function () {
                    var t = r ? "rotateY(180deg)" : "rotateY(-180deg)";
                    h[0].style[e.support.css.transform.cssName] = t, o.shadow && (c[0].style[e.support.css.transition.cssName] = s.getTransitionStyle("opacity", o.turnDuration / 2, o.transitionTiming), u[0].style[e.support.css.transition.cssName] = s.getTransitionStyle("opacity", o.turnDuration / 2, o.transitionTiming, o.turnDuration / 2), c.css({
                        opacity: 0
                    }), u.css({
                        opacity: o.shadowOpacity
                    }))
                }, 20), d.promise()
            },
            slideTransition: function (t, i, n, r) {
                if (i.addClass("active"), t.css({
                    left: "0%"
                }), n ? i.css({
                    left: "-100%"
                }) : i.css({
                    left: "100%"
                }), e.support.css.transition) {
                    var o = s.getTransitionStyle("left", r.slideDuration, r.transitionTiming);
                    return i[0].style[e.support.css.transition.cssName] = o, t[0].style[e.support.css.transition.cssName] = o, setTimeout(function () {
                        i.css({
                            left: "0%"
                        }), t.css({
                            left: n ? "100%" : "-100%"
                        })
                    }, 20), e.support.css.transition.registerTransitionEndListener(i)
                }
                return t.animate({
                    left: n ? "100%" : "-100%"
                }, r.slideDuration, r.transitionTiming), i.animate({
                    left: "0%"
                }, r.slideDuration, r.transitionTiming).promise()
            },
            fadeTransition: function (e, t, i) {
                e.css({
                    opacity: 1,
                    "z-index": 11
                }).show(), t.css({
                    opacity: 1,
                    "z-index": 10
                }).show();
                var n = e.fadeOut(i.fadeDuration).promise();
                return n.done(function () {
                    e.css({
                        "z-index": ""
                    }), t.css({
                        "z-index": ""
                    })
                }), n
            },
            getTransitionStyle: function (e, t, i, n) {
                var s = e + " " + t + "ms " + i;
                return n && (s += " " + n + "ms"), s
            },
            setupTransition: function (t, i, n, r, o, a) {
                t[0].style[e.support.css.transform.perspectiveCssName] = a.perspective, t[0].style[e.support.css.transform.styleCssName] = "preserve-3d", i[0].style[e.support.css.transform.styleCssName] = "preserve-3d", i[0].style[e.support.css.transform.perspectiveCssName] = a.perspective, i[0].style[e.support.css.transition.cssName] = s.getTransitionStyle(e.support.css.transform.cssHyphenName, a.turnDuration, a.transitionTiming), n[0].style[e.support.css.transform.styleCssName] = "preserve-3d", n[0].style[e.support.css.transform.cssName] = "rotateY(0deg)", n[0].style[e.support.css.transform.backfaceVisibilityCssName] = "hidden", r[0].style[e.support.css.transform.styleCssName] = "preserve-3d", o ? (n[0].style[e.support.css.transform.originCssName] = "right center", r[0].style[e.support.css.transform.originCssName] = "left center", r[0].style[e.support.css.transform.cssName] = "rotateY(-180deg) translateZ(1px)") : (n[0].style[e.support.css.transform.originCssName] = "left center", r[0].style[e.support.css.transform.originCssName] = "right center", r[0].style[e.support.css.transform.cssName] = "rotateY(180deg) translateZ(1px)")
            }
        };
    e.fn.uiPageTurn = function (t) {
        return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.uiPageTurn"), void 0) : n.init.apply(this, arguments)
    }
}(jQuery), define("uiPageTurn", function () {}), define("views/modules/hero", ["jquery", "underscore", "backbone", "baseview", "pubsub", "state", "views/modules/video", "views/modules/carousel", "uiPageTurn"], function (e, t, i, n, s, r, o, a) {
    var l = n.extend({
        events: {
            "click .slide": "open",
            "click .hero-asset-open": "open",
            "click .carousel-thumbs > li": "openTile",
            "click .hero-turn-trigger, .hero-popular .hero-page-trigger": "toggleFrontBack"
        },
        destroy: function (e) {
            this.upSetupPartner(), n.prototype.destroy.call(this, e)
        },
        initialize: function (i) {
            if (i = e.extend(!0, {
                animate: {
                    duration: 200
                },
                popularCount: 8,
                shadow: {
                    opacity: ".4",
                    duration: 200,
                    delay: 0
                }
            }, i), n.prototype.initialize.call(this, i), t.bindAll(this, "_finishAnimation", "onVideoShow", "onVideoHide"), this.visibleFace = "front", this.mostPopularLoaded = !1, this.pubSub = {}, this.pubSub["hero:pageturn:show"] = this.setUpPartner, this.pubSub["hero:pageturn:hide"] = this.setUpPartner, s.attach(this.pubSub, this), this.cacheSelectors(), this.$(".popular").length) {
                520 > this.$el.height() && (i.popularCount = 6);
                var l = "/services/most-popular/hero/" + i.section + "/" + i.popularCount + "/";
                this.$el.uiPageTurn({
                    perspective: "1400px"
                }), r.fetchHtml(l).done(t.bind(function (e) {
                    this.$(".popular .ui-placer").html(e), this.$(".hero-turn-trigger").fadeIn(500), this.mostPopularLoaded = !0
                }, this))
            }
            this.$el.hasClass("carousel") && (this.subviews.heroCarousel = new a({
                el: this.$el,
                ads: !1,
                hoverTransition: 200,
                thumbsSelector: ".carousel-thumbs",
                rotate: !0,
                autostart: !0
            })), this.subviews.video = [], this.$(".video").each(t.bind(function (t, i) {
                var n = new o({
                    el: e(i).parent().get(0),
                    onVideoShow: this.onVideoShow,
                    onVideoHide: this.onVideoHide
                });
                this.subviews.video.push(n)
            }, this))
        },
        cacheSelectors: function () {
            this.$theatre = e(".theatre")
        },
        onVideoShow: function () {
            this.$(".hero-turn-trigger").hide()
        },
        onVideoHide: function () {
            this.$(".hero-turn-trigger").show()
        },
        open: function (t) {
            var i = e(t.currentTarget);
            0 !== i.find(".text.video").length || e(t.target).is("a") ? i.find(".text.video").length > 0 && !e(t.target).hasClass("videoStillPlay") && e(t.target).find(".videoStillPlay").click() : i.find(".story > h1 > a").trigger("click")
        },
        openTile: function (t) {
            var i = e(t.currentTarget).index();
            this.$(".slide:eq(" + i + ") .story > h1 > a").click()
        },
        setUpPartner: function () {
            var i = this.$theatre,
                n = i.find(".partner-placement"),
                s = i.hasClass("flip");
            n.addClass("ui-page-turn"), n.children(".container").addClass("ui-placer");
            var r;
            this._setupAnimation(), s ? (r = "front" === this.visibleFace ? this.$el.uiPageTurn("nextPage") : this.$el.uiPageTurn("goToPage", 2), r.done(function () {
                i.removeClass("flip")
            })) : (n.parent()[0] !== this.$el[0] && this.$el.prepend(n), r = e.Deferred(), t.defer(t.bind(function () {
                this.$el.uiPageTurn("goToPage", 0).done(function () {
                    i.addClass("flip"), r.resolve()
                })
            }, this))), r.done(this._finishAnimation), this.registerAnimation(r)
        },
        _setupAnimation: function () {
            this.$el.closest(".size-well").css({
                "z-index": 2
            })
        },
        _finishAnimation: function () {
            this.$el.closest(".size-well").css({
                "z-index": ""
            })
        },
        upSetupPartner: function () {
            var t = this.$el.closest(".theatre"),
                i = e(".partner-placement", t),
                n = t.hasClass("flip");
            n && (t.removeClass("flip"), i.removeClass("active").empty(), i.next(".ui-page-turn").addClass("active"))
        },
        toggleFrontBack: function (t) {
            var i = e(t.currentTarget),
                n = i.attr("data-side");
            if (this.mostPopularLoaded) {
                this._setupAnimation();
                var r;
                return "front" === n ? (r = this.$el.uiPageTurn("nextPage"), this.visibleFace = "back", s.trigger("uotrack", "mostpopularopen")) : (r = this.$el.uiPageTurn("prevPage"), this.visibleFace = "front", s.trigger("uotrack", "mostpopularclose")), r.done(this._finishAnimation), this.registerAnimation(r), !1
            }
        }
    });
    return l
}), define("views/modules/loader", ["jquery", "underscore", "backbone", "pubsub", "app"], function (e, t, i, n, s) {
    var r = i.View.extend({
        initialize: function (t) {
            this.options = e.extend({
                msg: ""
            }, t || {}), this.win = s.get("win"), this.body = s.get("body"), this.el = e(this.options.el), this.msg = this.options.msg, this.render()
        },
        render: function () {
            var t = e("<div>").addClass("loading-icon");
            this.$loader = e("<div>").addClass("ui-loader"), this.$target = this.$el, this.$target.append(this.$loader.append(t).append(e("<span>").html(this.msg))), this.$el = this.$loader
        },
        destroy: function (e) {
            this.hide(), e && this.remove()
        },
        show: function () {
            this.$loader.addClass("active")
        },
        hide: function () {
            this.$loader.removeClass("active")
        }
    });
    return r
}), define("views/modules/gallery-carousel", ["jquery", "underscore", "backbone", "pubsub", "baseview", "app", "views/modules/carousel", "views/modules/loader", "state"], function (e, t, i, n, s, r, o, a, l) {
    var c = s.extend({
        empty: !0,
        events: {
            "click #CList-galleries li": "select"
        },
        initialize: function () {
            if (this.$galleries = this.$(".front-gallery"), this.$navItems = this.$(".galleries li"), t.bindAll(this, "switchGallery"), this.loader = new a({
                el: this.$galleries.parent()
            }), s.prototype.initialize.call(this, {}), this.$galleries.find(".slide.active").length) {
                var e = this.$(".front-gallery.selected"),
                    i = e.index();
                this.subviews["gallery" + i] = new o({
                    ads: !0,
                    linkPath: this.$navItems.filter(".selected").find("a").attr("href"),
                    el: e.find(".mod.galleries"),
                    fullScreen: !0
                }), this.empty = !1
            } else {
                var n = this.$navItems.first().find("a").attr("href");
                n !== void 0 && n.length > 1 && this.fetchData(n, 0, this.switchGallery)
            }
        },
        destroy: function (e) {
            this.loader.destroy(e), s.prototype.destroy.call(this, e)
        },
        fetchData: function (e, t, i) {
            var n = this,
                s = !0,
                r = this.$(".front-gallery.selected");
            r.length && (r.css({
                opacity: 1
            }), this.animate(r, "opacity", 0, 200).done(function () {
                s && n.loading(!0)
            })), l.fetchHtml(e, {
                data: {
                    type: "front"
                }
            }).done(function (n) {
                i(n, t, e)
            }).always(function () {
                s = !1, n.loading(!1)
            })
        },
        loading: function (e) {
            e ? this.loader.show() : this.loader.hide()
        },
        select: function (t) {
            var i = e(t.currentTarget),
                n = i.index(),
                s = this.$galleries.eq(n),
                o = i.find("a"),
                a = o.attr("href");
            r.setTrack(o), 0 !== a.indexOf("http") && (s.find(".galleries").length > 0 ? this.switchGallery(null, n, a) : this.fetchData(a, n, this.switchGallery), t && t.preventDefault()), this.$navItems.removeClass("selected"), i.addClass("selected")
        },
        switchGallery: function (e, t, i) {
            this.$navItems.eq(t);
            var n = this.$galleries.eq(t);
            if (this.$galleries.removeClass("selected"), n.addClass("selected"), e && n.html(e), this.subviews["gallery" + t]) this.trackGalleryChange(this.subviews["gallery" + t]);
            else {
                var s = this;
                setTimeout(function () {
                    var e = s.subviews["gallery" + t] = new o({
                        ads: !0,
                        el: n.find(".mod.galleries"),
                        fullScreen: !0,
                        linkPath: i
                    });
                    s.empty || s.trackGalleryChange(e), s.empty = !1
                }, 100)
            }
            n.css({
                opacity: 0
            }), this.animate(n, "opacity", 1, 200)
        },
        trackGalleryChange: function (e) {
            e._trackSlideChange()
        }
    });
    return c
}), define("views/modules/tooltip", ["jquery", "underscore", "backbone", "pubsub"], function (e, t, i) {
    var n = i.View.extend({
        events: {
            mouseenter: "show",
            mouseleave: "hide"
        },
        initialize: function (i) {
            this.options = e.extend({
                template: '<div class="tooltip"><div class="tooltip-indicator"></div><div class="tooltip-inner"></div></div>',
                animation: {
                    fadeIn: 0,
                    fadeOut: 200,
                    opacity: .9
                },
                position: "top",
                offset: {
                    x: 0,
                    y: 0
                }
            }, i || {}), this.el = e(this.options.el), t.each(this.el, function (t) {
                e(t).data("title", e(t).attr("title")).removeAttr("title")
            }), this.tip().addClass(this.options.position)
        },
        destroy: function (e) {
            this.undelegateEvents(), this.tip().remove(), e && this.tip().remove()
        },
        tip: function () {
            return this.tooltip = this.tooltip || e(this.options.template)
        },
        show: function (t) {
            var i = e(t.currentTarget);
            switch (e(document.body).append(this.tip()), this.tip().children(".tooltip-inner").html(i.data("title")), this.tip().addClass("active"), this.options.position) {
                case "left":
                    var n = i.offset().left - this.tip().outerWidth(),
                        s = i.offset().top + .5 * (i.outerHeight() - this.tip().outerHeight());
                    break;
                case "bottom":
                    var n = i.offset().left + .5 * (i.outerWidth() - this.tip().outerWidth()),
                        s = i.offset().top + this.tip().outerHeight();
                    break;
                case "right":
                    var n = i.offset().left + i.outerWidth(),
                        s = i.offset().top + .5 * (i.outerHeight() - this.tip().outerHeight());
                    break;
                case "top":
                    var n = i.offset().left + .5 * (i.outerWidth() - this.tip().outerWidth()),
                        s = i.offset().top - this.tip().outerHeight()
            }
            s += this.options.offset.x, s += this.options.offset.y, this.tip().css({
                left: n + "px",
                top: s + "px"
            }), this.tip().stop(!0, !1).fadeTo(this.options.animation.fadeIn, this.options.animation.opacity, function () {})
        },
        hide: function () {
            this.tip().removeClass("active"), this.tip().stop(!0, !1).fadeTo(this.options.animation.fadeOut, 0, function () {})
        }
    });
    return n
}), define("views/modules/headline", ["jquery", "underscore", "backbone", "state", "pubsub"], function (e, t, i, n, s) {
    var r = i.View.extend({
        events: {
            "click .button-add-content": "showMore",
            'click .headline-toggler:not(".big-picture") .ui-btn:not(".active")': "toggleGridListView"
        },
        initialize: function (e) {
            this.itemsPerPage = this.$el.data("itemsPerPage"), this.$button = this.$(".button-add-content"), this.section = e.section + "front", t.bindAll(this, "transitionMore")
        },
        destroy: function (e) {
            this.undelegateEvents(), e && this.remove()
        },
        getMoreHeadlines: function (e, i) {
            n.fetchHtml(window.location.pathname + e + "/").done(t.bind(function (e) {
                var t = e.find(".page").removeClass("active").addClass("inactive"),
                    n = e.find(".button-add-content");
                this.$(".collection").append(t), n.length > 0 ? this.$(".show-more").html(n) : this.$button.addClass("inactive"), i(t)
            }, this)).fail(t.bind(function () {
                var e = this.$button.attr("data-default");
                this.$button.removeClass("loading").addClass("inactive").text(e)
            }, this))
        },
        showMore: function (t) {
            if (e(t.target).hasClass("inactive")) return !1;
            this.$button = e(".button-add-content", this.el), this.$button.addClass("loading").text(this.$button.attr("data-loading"));
            var i;
            if (this.$el.hasClass("stag")) {
                var n = parseInt(e(t.target).data("next"), 10);
                this.getMoreHeadlines(n, this.transitionMore)
            } else {
                i = this.$(".page.active:last").next();
                var r = i.attr("data-itemnum"),
                    o = i.attr("data-items-per-page"),
                    a = Math.round(r / o);
                e("img", i).each(function () {
                    var t = e(this);
                    t.attr("src", t.attr("data-src"))
                }), s.trigger("uotrack", this.section + "morestories" + a), this.transitionMore(i)
            }
            t.preventDefault()
        },
        toggleGridListView: function (t) {
            var i = e(t.currentTarget),
                n = e(".headline-toggler .ui-btn", this.el),
                r = e(".collection", this.el),
                o = i.hasClass("grid-big") ? "grid-big" : "list-big";
            n.removeClass("active"), i.addClass("active"), "list-big" == o ? (r.addClass("listview"), s.trigger("uotrack", "listview")) : (r.removeClass("listview"), s.trigger("uotrack", "gridview"))
        },
        transitionMore: function (t) {
            Modernizr.csstransitions ? t.removeClass("inactive").addClass("active") : t.animate({
                "max-height": "5000px"
            }, 200, function () {
                e(this).removeClass("inactive").addClass("active").css("max-height", "")
            }), 0 >= this.$(".page.inactive").length && this.$button.addClass("inactive"), this.$button.removeClass("loading").text(this.$button.attr("data-default")), s.trigger("showmore:headlines")
        }
    });
    return r
}), define("views/modules/partner/leavebehind", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager"], function (e, t, i, n, s, r) {
    var o = s.extend({
        destroy: function () {
            this.$el.removeClass("leave-behind-compact"), this.$html.unbind(), this.hideLeavebehind(!0), this.undelegateEvents(), s.prototype.destroy.call(this, !1)
        },
        hideLeavebehind: function (e) {
            this.hide(!0, t.bind(function () {
                this.$el.removeClass("show")
            }, this)), e && this.$el.empty()
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":stopToClose"] = this.showLeavebehind, s.prototype.initialize.call(this, i), this.setup(), this.config.startVisible && this.showLeavebehind(), r.logDebug("LeaveBehind initialized", this)
        },
        onClick: function () {
            this.hideLeavebehind(), n.trigger("partner:" + this.config.dfp.ecid + ":leavebehind:clicked")
        },
        setup: function () {
            var i = this.config.$adEl.closest(".card-wrap").find(".card").hasClass("card-bumped");
            i ? this.$el.addClass("leave-behind-compact") : this.$el.removeClass("leave-behind-compact");
            var n = {
                image_alt: this.config.leaveBehindText,
                image_url: this.config.leaveBehindImage
            }, s = e("#partner_leave_behind_template").html(),
                r = t.template(s, n);
            this.$html = e(r).appendTo(this.$el), this.$html.bind("click", t.bind(function () {
                this.onClick()
            }, this))
        },
        showLeavebehind: function () {
            this.show(!0, t.bind(function () {
                this.$el.addClass("show")
            }, this))
        }
    });
    return o
}), define("views/modules/partner/slider", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager"], function (e, t, i, n, s, r) {
    var o = s.extend({
        events: {
            "click a.close-partner": "onClickCloseButton"
        },
        closeTime: 8e3,
        closeTimer: null,
        sliderCheckCounter: 0,
        sliderCheckTimer: null,
        destroy: function () {
            this.stopListenForAd(), this.stopCloseTimer(), this.hide(), this.$adEl.remove(), s.prototype.destroy.call(this, !1)
        },
        hide: function () {
            s.prototype.hide.call(this, !0, e.proxy(this.onHidden, this))
        },
        initialize: function (t) {
            this.config = e.extend({}, t || {}), this.$adEl = e("#partner_high_impact_" + this.config.awsId), this.pubSub = {
                "breakingbar:before:close": this.shiftTop,
                "breakingbar:before:open": this.shiftTop
            }, s.prototype.initialize.call(this, this.config), r.logDebug("Slider initialized", this), this.$bb = App.get("breakingEl").css("display"), this.$hh = App.get("headerEl").outerHeight()
        },
        listenForAd: function () {
            if ("block" == this.$bb && this.shiftTop(this.$hh), this.$adEl.length && "none" === this.$adEl[0].style.display) return clearTimeout(this.sliderCheckTimer), this.sliderCheckCounter[n] = 0, void 0;
            var i = e("iframe:first", this.$adEl);
            if (300 == i.attr("width")) return this.show(), clearTimeout(this.sliderCheckTimer), this.sliderCheckCounter[n] = 0, void 0;
            var n = this.$adEl.attr("id");
            if (t.isUndefined(this.sliderCheckCounter[n])) this.sliderCheckCounter[n] = 0;
            else if (this.sliderCheckCounter[n] > 10) return this.stopListenForAd(), void 0;
            this.sliderCheckTimer = setTimeout(t.bind(function () {
                this.sliderCheckCounter[n]++, this.listenForAd()
            }, this), 100)
        },
        onClickCloseButton: function (e) {
            e && e.preventDefault(), this.hide(), this.stopCloseTimer()
        },
        onHidden: function () {
            this.$adEl.hide(), this.$el.removeClass("show").removeAttr("style")
        },
        onShown: function () {
            this.$el.addClass("show"), this.startCloseTimer()
        },
        show: function () {
            s.prototype.show.call(this, !0, e.proxy(this.onShown, this))
        },
        startCloseTimer: function () {
            this.closeTime = site_config.ADS.SLIDER.CLOSETIME, -1 != this.closeTime && (this.closeTimer = setTimeout(t.bind(function () {
                this.hide()
            }, this), this.closeTime))
        },
        stopListenForAd: function () {
            var e = this.$adEl.attr("id");
            this.hide(), clearTimeout(this.sliderCheckTimer), this.sliderCheckCounter[e] = 0
        },
        stopCloseTimer: function () {
            clearTimeout(this.closeTimer)
        },
        shiftTop: function (e, t) {
            this.$el.stop().animate({
                top: e
            }, t)
        }
    });
    return o
}), define("views/modules/partner/sidebar", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager"], function (e, t, i, n, s, r) {
    var o = s.extend({
        checkCounter: 0,
        checkTimer: null,
        height: null,
        destroy: function () {
            this.$adEl.empty(), clearTimeout(this.checkTimer), s.prototype.destroy.call(this, !1)
        },
        initialize: function (t) {
            this.config = e.extend({}, t || {}), this.$adEl = e("#partner_high_impact_" + this.config.awsId), s.prototype.initialize.call(this, this.config), r.logDebug("Sidebar initialized", this)
        },
        listenForAd: function () {
            if (this.$adEl.length && "none" === this.$adEl[0].style.display) return clearTimeout(this.checkTimer), this.checkCounter[s] = 0, void 0;
            var i = e("iframe:first", this.$adEl);
            if (300 == i.attr("width")) return this.height = i.attr("height"), i.addClass("sidebar-ad-iframe"), this.show(), n.trigger("partner:showSidebarAd"), clearTimeout(this.checkTimer), this.checkCounter[s] = 0, void 0;
            var s = this.slotId = this.$adEl.attr("id");
            if (t.isUndefined(this.checkCounter[s])) this.checkCounter[s] = 0;
            else if (this.checkCounter[s] > 10) return this.stopListenForAd(), void 0;
            this.checkTimer = setTimeout(t.bind(function () {
                this.checkCounter[s]++, this.listenForAd()
            }, this), 100)
        },
        onCardWidthChange: function (e) {
            e.sidebarAds || this.stopListenForAd()
        },
        stopListenForAd: function () {
            n.trigger("partner:hideSidebarAd"), this.hide(), clearTimeout(this.checkTimer), this.checkCounter[this.slotId] = 0
        }
    });
    return o
}),
function (e) {
    function t(e, t, i) {
        var n = "rgb" + (Modernizr.rgba ? "a" : "") + "(" + parseInt(e[0] + i * (t[0] - e[0]), 10) + "," + parseInt(e[1] + i * (t[1] - e[1]), 10) + "," + parseInt(e[2] + i * (t[2] - e[2]), 10);
        return Modernizr.rgba && (n += "," + (e && t ? parseFloat(e[3] + i * (t[3] - e[3])) : 1)), n += ")"
    }
    function i(e) {
        var t, i;
        return (t = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e)) ? i = [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1] : (t = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e)) ? i = [17 * parseInt(t[1], 16), 17 * parseInt(t[2], 16), 17 * parseInt(t[3], 16), 1] : (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? i = [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), 1] : (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e)) && (i = [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4])]), i
    }
    var n = ["color", "backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "outlineColor"];
    e.each(n, function (n, s) {
        e.Tween.propHooks[s] = {
            get: function (t) {
                return e(t.elem).css(s)
            },
            set: function (n) {
                var r = n.elem.style,
                    o = i(e(n.elem).css(s)),
                    a = i(n.end);
                n.run = function (e) {
                    r[s] = t(o, a, e)
                }
            }
        }
    }), e.Tween.propHooks.borderColor = {
        set: function (s) {
            var r = s.elem.style,
                o = [],
                a = n.slice(2, 6);
            e.each(a, function (t, n) {
                o[n] = i(e(s.elem).css(n))
            });
            var l = i(s.end);
            s.run = function (i) {
                e.each(a, function (e, n) {
                    r[n] = t(o[n], l, i)
                })
            }
        }
    }
}(jQuery), define("animatecolors", function () {}), define("views/modules/partner/pushdown", ["jquery", "underscore", "backbone", "app", "pubsub", "baseview", "admanager", "state", "animatecolors"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        events: {
            "click a.close-partner": "onClickCloseButton"
        },
        pubSub: null,
        changeBackground: function () {
            if ("transparent" != this.config.backgroundSolidColor) {
                var e = n.get("body");
                e.addClass("partner-background"), this.animate(e, "background-color", this.config.backgroundSolidColor, 200, "ease-in").done(t.bind(function () {
                    null != this.config.backgroundRepeatingImage && "" != this.config.backgroundRepeatingImage ? this.changeBackgroundImage(e, this.config.backgroundRepeatingImage) : this.changeBackgroundImage(e, "/static/images/pixels/pixel-transparent.png")
                }, this))
            }
        },
        changeBackgroundImage: function (e, t) {
            e.css({
                "background-image": "url('" + t + "')",
                "background-repeat": "repeat"
            })
        },
        clearBackground: function () {
            var e = n.get("body");
            e.css({
                "background-image": "",
                "background-repeat": ""
            }), this.animate(e, "background-color", "rgb(246,246,246)", 200, "ease-in").done(t.bind(function () {
                e.removeClass("partner-background")
            }, this))
        },
        destroy: function (e) {
            this.config.isPersistantBackground = !1, this.onClose(), s.off("complete:adjsttopmargin:cards", this.onCardsPushdownComplete, this), this.$el.empty(), r.prototype.destroy.call(this, e)
        },
        initialize: function (i) {
            this.config = e.extend({
                isPersistantBackground: !1
            }, i || {}), t.bindAll(this), this.listen(), r.prototype.initialize.call(this, i);
            var n = "size-s";
            "large" === this.config.cardInfo.name ? n = "size-l" : "medium" === this.config.cardInfo.name && (n = "size-m"), this.$el.removeClass("size-s size-m size-l").addClass(n), o.logDebug("Pushdown Advertisment initialized", this)
        },
        listen: function () {
            null == this.pubSub && (this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":ready"] = this.onReady, this.pubSub["partner:" + this.config.dfp.ecid + ":close"] = this.onClose, this.pubSub["partner:" + this.config.dfp.ecid + ":leavebehind:clicked"] = this.showPushdownAd, this.pubSub["open:overlay"] = this.onClose)
        },
        onCardsPushdownComplete: function () {
            this.$el.addClass("open"), s.trigger("partner:" + this.config.dfp.ecid + ":play"), s.off("complete:adjsttopmargin:cards", this.onCardsPushdownComplete, this)
        },
        onCardWidthChange: function (e) {
            s.trigger("partner:" + this.config.dfp.ecid + ":cardwidthchange", e);
            var t = "size-s";
            "large" === e.name ? t = "size-l" : "medium" === e.name && (t = "size-m"), this.$el.removeClass("size-s size-m size-l").addClass(t)
        },
        onClickCloseButton: function () {
            this.onClose()
        },
        onClose: function () {
            s.trigger("partner:" + this.config.dfp.ecid + ":stopToClose"), this.$el.removeClass("open"), s.trigger("pullup:cards"), this.config.isPersistantBackground || this.clearBackground()
        },
        onFinish: function () {},
        onReady: function () {
            this.config.startVisible ? (this.showPushdownAd(), s.trigger("partner:" + this.config.dfp.ecid + ":creative:defaultshow")) : this.config.isPersistantBackground ? (this.changeBackground(), s.trigger("partner:" + this.config.dfp.ecid + ":background:defaultshow")) : s.trigger("partner:" + this.config.dfp.ecid + ":leavebehind:defaultshow")
        },
        showPushdownAd: function () {
            s.on("complete:adjsttopmargin:cards", this.onCardsPushdownComplete, this), s.trigger("pushdown:cards"), this.changeBackground()
        }
    });
    return a
}), define("views/modules/partner/flip", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager", "state"], function (e, t, i, n, s, r) {
    var o = s.extend({
        events: {
            "click a.close-partner": "onClickCloseButton"
        },
        destroy: function (e) {
            n.trigger("sidebar:button:show", !0), this.$theatre.removeClass("flip"), this.config.$adEl.removeClass("show"), this.config.$adEl.hide(), this.clearTransform(), n.unattach(this.pubSub, this), s.prototype.destroy.call(this, e), r.logDebug("Partner Flip destroyed")
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), s.prototype.initialize.call(this, i), this.listen(), r.logDebug("Partner Flip initialized", this)
        },
        listen: function () {
            this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":ready"] = this.onReady, this.pubSub["partner:" + this.config.dfp.ecid + ":close"] = this.onUnflip, this.pubSub["partner:" + this.config.dfp.ecid + ":leavebehind:clicked"] = this.onFlip, n.attach(this.pubSub, this)
        },
        onClickCloseButton: function () {
            this.onUnflip()
        },
        onFinish: function () {},
        onFlip: function () {
            n.trigger("carousel:stoptimer"), n.trigger("sidebar:button:hide", !0), this.$theatre.addClass("flip"), this.config.$adEl.addClass("partner-flip"), this.useCSSTransforms ? (this.initializeTransform("0deg", "-180deg"), this.resetTransitionOnCompletion(this.$hero), t.defer(t.bind(function () {
                this.triggerFlipCss("180deg", "0deg")
            }, this))) : this.config.$adEl.addClass("show"), n.trigger("partner:" + this.config.dfp.ecid + ":play")
        },
        onReady: function () {
            this.$theatre = this.$(".theatre"), this.$hero = e(".hero", this.$theatre), this.config.startVisible ? t.delay(t.bind(function () {
                this.onFlip(), n.trigger("partner:" + this.config.dfp.ecid + ":creative:defaultshow")
            }, this), 600) : n.trigger("partner:" + this.config.dfp.ecid + ":leavebehind:defaultshow")
        },
        onUnflip: function () {
            n.trigger("carousel:starttimer"), n.trigger("sidebar:button:show", !0), n.trigger("partner:" + this.config.dfp.ecid + ":stopToClose"), this.useCSSTransforms ? (this.initializeTransform("180deg", "0deg"), this.resetTransitionOnCompletion(this.$hero).done(t.bind(function () {
                this.config.$adEl.hide()
            }, this)), t.defer(t.bind(function () {
                this.triggerFlipCss("0deg", "-180deg")
            }, this))) : this.config.$adEl.removeClass("show"), this.$theatre.removeClass("flip")
        },
        triggerFlipCss: function (e, t) {
            var i = this.transformCssHyphenName + " 0.6s ease-in-out";
            this.$hero[0].style[this.transitionCssName] = i, this.config.$adEl[0].style[this.transitionCssName] = i, this.$hero[0].style[this.transformCssName] = "rotateX(" + e + ")", this.config.$adEl[0].style[this.transformCssName] = "rotateX(" + t + ")"
        },
        resetTransitionOnCompletion: function (e) {
            return this.registerTransitionEndListener(e).done(t.bind(function () {
                this.clearTransform()
            }, this))
        },
        initializeTransform: function (e, t) {
            this.$theatre[0].style[this.perspectiveCssName] = "900px", this.$hero[0].style[this.backfaceVisibilityCssName] = "hidden", this.$hero[0].style[this.transformStyleCssName] = "preserve-3d", this.config.$adEl.show(), this.config.$adEl[0].style[this.backfaceVisibilityCssName] = "hidden", this.config.$adEl[0].style[this.transformStyleCssName] = "preserve-3d", this.$hero[0].style[this.transformCssName] = "rotateX(" + e + ")", this.config.$adEl[0].style[this.transformCssName] = "rotateX(" + t + ")"
        },
        clearTransform: function () {
            this.clearTransition(this.$theatre, this.$hero, this.config.$adEl)
        }
    });
    return o
}), define("views/modules/partner/page-turn", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager", "state"], function (e, t, i, n, s, r) {
    var o = s.extend({
        events: {
            "click a.close-partner": "onClickCloseButton"
        },
        destroy: function (e) {
            n.trigger("sidebar:button:show", !0), n.unattach(this.pubSub, this), s.prototype.destroy.call(this, e)
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), s.prototype.initialize.call(this, i), this.listen(), r.logDebug("Partner Page Turn initialized", this)
        },
        listen: function () {
            this.pubSub = {}, this.pubSub["partner:" + this.config.dfp.ecid + ":ready"] = this.onReady, this.pubSub["partner:" + this.config.dfp.ecid + ":close"] = this.onUnflip, this.pubSub["partner:" + this.config.dfp.ecid + ":leavebehind:clicked"] = this.onFlip, n.attach(this.pubSub, this)
        },
        onClickCloseButton: function () {
            this.onUnflip()
        },
        onFinish: function () {},
        onFlip: function () {
            n.trigger("sidebar:button:hide", !0), n.trigger("hero:pageturn:show"), n.trigger("partner:" + this.config.dfp.ecid + ":play")
        },
        onReady: function () {
            this.$theatre = this.$(".theatre"), this.$hero = e(".hero", this.$theatre), this.config.startVisible ? t.delay(t.bind(function () {
                this.onFlip(), n.trigger("partner:" + this.config.dfp.ecid + ":creative:defaultshow")
            }, this), 600) : n.trigger("partner:" + this.config.dfp.ecid + ":leavebehind:defaultshow")
        },
        onUnflip: function () {
            n.trigger("sidebar:button:show", !0), n.trigger("partner:" + this.config.dfp.ecid + ":stopToClose"), n.trigger("hero:pageturn:hide")
        }
    });
    return o
});
var swfobject = function () {
    function e() {
        if (!q) {
            try {
                var e = R.getElementsByTagName("body")[0].appendChild(m("span"));
                e.parentNode.removeChild(e)
            } catch (t) {
                return
            }
            q = !0;
            for (var i = j.length, n = 0; i > n; n++) j[n]()
        }
    }
    function t(e) {
        q ? e() : j[j.length] = e
    }
    function i(e) {
        if (typeof M.addEventListener != _) M.addEventListener("load", e, !1);
        else if (typeof R.addEventListener != _) R.addEventListener("load", e, !1);
        else if (typeof M.attachEvent != _) v(M, "onload", e);
        else if ("function" == typeof M.onload) {
            var t = M.onload;
            M.onload = function () {
                t(), e()
            }
        } else M.onload = e
    }
    function n() {
        L ? s() : r()
    }
    function s() {
        var e = R.getElementsByTagName("body")[0],
            t = m(A);
        t.setAttribute("type", D);
        var i = e.appendChild(t);
        if (i) {
            var n = 0;
            (function () {
                if (typeof i.GetVariable != _) {
                    var s = i.GetVariable("$version");
                    s && (s = s.split(" ")[1].split(","), U.pv = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
                } else if (10 > n) return n++, setTimeout(arguments.callee, 10), void 0;
                e.removeChild(t), i = null, r()
            })()
        } else r()
    }
    function r() {
        var e = B.length;
        if (e > 0) for (var t = 0; e > t; t++) {
            var i = B[t].id,
                n = B[t].callbackFn,
                s = {
                    success: !1,
                    id: i
                };
            if (U.pv[0] > 0) {
                var r = g(i);
                if (r) if (!y(B[t].swfVersion) || U.wk && 312 > U.wk) if (B[t].expressInstall && a()) {
                    var u = {};
                    u.data = B[t].expressInstall, u.width = r.getAttribute("width") || "0", u.height = r.getAttribute("height") || "0", r.getAttribute("class") && (u.styleclass = r.getAttribute("class")), r.getAttribute("align") && (u.align = r.getAttribute("align"));
                    for (var h = {}, d = r.getElementsByTagName("param"), p = d.length, f = 0; p > f; f++) "movie" != d[f].getAttribute("name").toLowerCase() && (h[d[f].getAttribute("name")] = d[f].getAttribute("value"));
                    l(u, h, i, n)
                } else c(r), n && n(s);
                else w(i, !0), n && (s.success = !0, s.ref = o(i), n(s))
            } else if (w(i, !0), n) {
                var m = o(i);
                m && typeof m.SetVariable != _ && (s.success = !0, s.ref = m), n(s)
            }
        }
    }
    function o(e) {
        var t = null,
            i = g(e);
        if (i && "OBJECT" == i.nodeName) if (typeof i.SetVariable != _) t = i;
        else {
            var n = i.getElementsByTagName(A)[0];
            n && (t = n)
        }
        return t
    }
    function a() {
        return !W && y("6.0.65") && (U.win || U.mac) && !(U.wk && 312 > U.wk)
    }
    function l(e, t, i, n) {
        W = !0, S = n || null, T = {
            success: !1,
            id: i
        };
        var s = g(i);
        if (s) {
            "OBJECT" == s.nodeName ? (k = u(s), x = null) : (k = s, x = i), e.id = O, (typeof e.width == _ || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == _ || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), R.title = R.title.slice(0, 47) + " - Flash Player Installation";
            var r = U.ie && U.win ? "ActiveX" : "PlugIn",
                o = "MMredirectURL=" + ("" + M.location).replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + R.title;
            if (typeof t.flashvars != _ ? t.flashvars += "&" + o : t.flashvars = o, U.ie && U.win && 4 != s.readyState) {
                var a = m("div");
                i += "SWFObjectNew", a.setAttribute("id", i), s.parentNode.insertBefore(a, s), s.style.display = "none",
                function () {
                    4 == s.readyState ? s.parentNode.removeChild(s) : setTimeout(arguments.callee, 10)
                }()
            }
            h(e, t, i)
        }
    }
    function c(e) {
        if (U.ie && U.win && 4 != e.readyState) {
            var t = m("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(u(e), t), e.style.display = "none",
            function () {
                4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else e.parentNode.replaceChild(u(e), e)
    }
    function u(e) {
        var t = m("div");
        if (U.win && U.ie) t.innerHTML = e.innerHTML;
        else {
            var i = e.getElementsByTagName(A)[0];
            if (i) {
                var n = i.childNodes;
                if (n) for (var s = n.length, r = 0; s > r; r++) 1 == n[r].nodeType && "PARAM" == n[r].nodeName || 8 == n[r].nodeType || t.appendChild(n[r].cloneNode(!0))
            }
        }
        return t
    }
    function h(e, t, i) {
        var n, s = g(i);
        if (U.wk && 312 > U.wk) return n;
        if (s) if (typeof e.id == _ && (e.id = i), U.ie && U.win) {
            var r = "";
            for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? r += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (r += " " + o + '="' + e[o] + '"'));
            var a = "";
            for (var l in t) t[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + t[l] + '" />');
            s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + a + "</object>", F[F.length] = e.id, n = g(e.id)
        } else {
            var c = m(A);
            c.setAttribute("type", D);
            for (var u in e) e[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? c.setAttribute("class", e[u]) : "classid" != u.toLowerCase() && c.setAttribute(u, e[u]));
            for (var h in t) t[h] != Object.prototype[h] && "movie" != h.toLowerCase() && d(c, h, t[h]);
            s.parentNode.replaceChild(c, s), n = c
        }
        return n
    }
    function d(e, t, i) {
        var n = m("param");
        n.setAttribute("name", t), n.setAttribute("value", i), e.appendChild(n)
    }
    function p(e) {
        var t = g(e);
        t && "OBJECT" == t.nodeName && (U.ie && U.win ? (t.style.display = "none", function () {
            4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function f(e) {
        var t = g(e);
        if (t) {
            for (var i in t) "function" == typeof t[i] && (t[i] = null);
            t.parentNode.removeChild(t)
        }
    }
    function g(e) {
        var t = null;
        try {
            t = R.getElementById(e)
        } catch (i) {}
        return t
    }
    function m(e) {
        return R.createElement(e)
    }
    function v(e, t, i) {
        e.attachEvent(t, i), H[H.length] = [e, t, i]
    }
    function y(e) {
        var t = U.pv,
            i = e.split(".");
        return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2] ? !0 : !1
    }
    function b(e, t, i, n) {
        if (!U.ie || !U.mac) {
            var s = R.getElementsByTagName("head")[0];
            if (s) {
                var r = i && "string" == typeof i ? i : "screen";
                if (n && (E = null, $ = null), !E || $ != r) {
                    var o = m("style");
                    o.setAttribute("type", "text/css"), o.setAttribute("media", r), E = s.appendChild(o), U.ie && U.win && typeof R.styleSheets != _ && R.styleSheets.length > 0 && (E = R.styleSheets[R.styleSheets.length - 1]), $ = r
                }
                U.ie && U.win ? E && typeof E.addRule == A && E.addRule(e, t) : E && typeof R.createTextNode != _ && E.appendChild(R.createTextNode(e + " {" + t + "}"))
            }
        }
    }
    function w(e, t) {
        if (V) {
            var i = t ? "visible" : "hidden";
            q && g(e) ? g(e).style.visibility = i : b("#" + e, "visibility:" + i)
        }
    }
    function C(e) {
        var t = /[\\\"<>\.;]/,
            i = null != t.exec(e);
        return i && typeof encodeURIComponent != _ ? encodeURIComponent(e) : e
    }
    var k, x, S, T, E, $, _ = "undefined",
        A = "object",
        P = "Shockwave Flash",
        I = "ShockwaveFlash.ShockwaveFlash",
        D = "application/x-shockwave-flash",
        O = "SWFObjectExprInst",
        N = "onreadystatechange",
        M = window,
        R = document,
        z = navigator,
        L = !1,
        j = [n],
        B = [],
        F = [],
        H = [],
        q = !1,
        W = !1,
        V = !0,
        U = function () {
            var e = typeof R.getElementById != _ && typeof R.getElementsByTagName != _ && typeof R.createElement != _,
                t = z.userAgent.toLowerCase(),
                i = z.platform.toLowerCase(),
                n = i ? /win/.test(i) : /win/.test(t),
                s = i ? /mac/.test(i) : /mac/.test(t),
                r = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                o = !1,
                a = [0, 0, 0],
                l = null;
            if (typeof z.plugins != _ && typeof z.plugins[P] == A) l = z.plugins[P].description, !l || typeof z.mimeTypes != _ && z.mimeTypes[D] && !z.mimeTypes[D].enabledPlugin || (L = !0, o = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof M.ActiveXObject != _) try {
                var c = new ActiveXObject(I);
                c && (l = c.GetVariable("$version"), l && (o = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
            } catch (u) {}
            return {
                w3: e,
                pv: a,
                wk: r,
                ie: o,
                win: n,
                mac: s
            }
        }();
    return function () {
        U.w3 && ((typeof R.readyState != _ && "complete" == R.readyState || typeof R.readyState == _ && (R.getElementsByTagName("body")[0] || R.body)) && e(), q || (typeof R.addEventListener != _ && R.addEventListener("DOMContentLoaded", e, !1), U.ie && U.win && (R.attachEvent(N, function () {
            "complete" == R.readyState && (R.detachEvent(N, arguments.callee), e())
        }), M == top && function () {
            if (!q) {
                try {
                    R.documentElement.doScroll("left")
                } catch (t) {
                    return setTimeout(arguments.callee, 0), void 0
                }
                e()
            }
        }()), U.wk && function () {
            return q ? void 0 : /loaded|complete/.test(R.readyState) ? (e(), void 0) : (setTimeout(arguments.callee, 0), void 0)
        }(), i(e)))
    }(),
    function () {
        U.ie && U.win && window.attachEvent("onunload", function () {
            for (var e = H.length, t = 0; e > t; t++) H[t][0].detachEvent(H[t][1], H[t][2]);
            for (var i = F.length, n = 0; i > n; n++) p(F[n]);
            for (var s in U) U[s] = null;
            U = null;
            for (var r in swfobject) swfobject[r] = null;
            swfobject = null
        })
    }(), {
        registerObject: function (e, t, i, n) {
            if (U.w3 && e && t) {
                var s = {};
                s.id = e, s.swfVersion = t, s.expressInstall = i, s.callbackFn = n, B[B.length] = s, w(e, !1)
            } else n && n({
                success: !1,
                id: e
            })
        },
        getObjectById: function (e) {
            return U.w3 ? o(e) : void 0
        },
        embedSWF: function (e, i, n, s, r, o, c, u, d, p) {
            var f = {
                success: !1,
                id: i
            };
            U.w3 && !(U.wk && 312 > U.wk) && e && i && n && s && r ? (w(i, !1), t(function () {
                n += "", s += "";
                var t = {};
                if (d && typeof d === A) for (var g in d) t[g] = d[g];
                t.data = e, t.width = n, t.height = s;
                var m = {};
                if (u && typeof u === A) for (var v in u) m[v] = u[v];
                if (c && typeof c === A) for (var b in c) typeof m.flashvars != _ ? m.flashvars += "&" + b + "=" + c[b] : m.flashvars = b + "=" + c[b];
                if (y(r)) {
                    var C = h(t, m, i);
                    t.id == i && w(i, !0), f.success = !0, f.ref = C
                } else {
                    if (o && a()) return t.data = o, l(t, m, i, p), void 0;
                    w(i, !0)
                }
                p && p(f)
            })) : p && p(f)
        },
        switchOffAutoHideShow: function () {
            V = !1
        },
        ua: U,
        getFlashPlayerVersion: function () {
            return {
                major: U.pv[0],
                minor: U.pv[1],
                release: U.pv[2]
            }
        },
        hasFlashPlayerVersion: y,
        createSWF: function (e, t, i) {
            return U.w3 ? h(e, t, i) : void 0
        },
        showExpressInstall: function (e, t, i, n) {
            U.w3 && a() && l(e, t, i, n)
        },
        removeSWF: function (e) {
            U.w3 && p(e)
        },
        createCSS: function (e, t, i, n) {
            U.w3 && b(e, t, i, n)
        },
        addDomLoadEvent: t,
        addLoadEvent: i,
        getQueryParamValue: function (e) {
            var t = R.location.search || R.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return C(t);
                for (var i = t.split("&"), n = 0; i.length > n; n++) if (i[n].substring(0, i[n].indexOf("=")) == e) return C(i[n].substring(i[n].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (W) {
                var e = g(O);
                e && k && (e.parentNode.replaceChild(k, e), x && (w(x, !0), U.ie && U.win && (k.style.display = "block")), S && S(T)), W = !1
            }
        }
    }
}();
define("libs/swfobject/swfobject", function () {}), define("views/modules/partner/iab", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager", "libs/swfobject/swfobject"], function (e, t, i, n, s, r) {
    var o = s.extend({
        destroy: function () {
            this.hide(), this.$el.empty(), s.prototype.destroy.call(this, !1)
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), s.prototype.initialize.call(this, i), r.logDebug("IABView initialized", this), this.render()
        },
        render: function () {
            "flash" === this.config.data.adCreativeType ? this.setupFlash() : "image" === this.config.data.adCreativeType ? this.setupImage() : "third" === this.config.data.adCreativeType && this.setupThirdParty(), this.show()
        },
        setupFlash: function () {
            var e = {
                clickTag: this.config.data.clickUrl + this.config.data.clickThruUrl
            }, t = {
                allowscriptaccess: "always",
                wmode: "transparent"
            }, i = {};
            swfobject.embedSWF(this.config.data.flashUrl, this.flashId, this.config.data.width, this.config.data.height, "9.0.0", null, e, t, i)
        },
        setupImage: function () {
            var e = "";
            e += '<a href="' + this.config.data.clickUrl + this.config.data.clickThruUrl + '" target="_blank">', e += '<img src="' + this.config.data.imageUrl + '">', e += "</a>", this.$el.append(e)
        },
        setupThirdParty: function () {
            var e = document.createElement("iframe");
            e.src = "about:blank", e.width = this.config.width, e.height = this.config.height, e.scrolling = "no", e.marginWidth = 0, e.marginHeight = 0, e.frameBorder = 0, e.className = "iab-iframe";
            var t = this.$el[0];
            if (t.appendChild(e), e.doc = null, e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), null == e.doc) throw "Document not found, append the parent element to the DOM before creating the IFrame";
            e.doc.open(), e.doc.write('<!doctype html><html><head></head><body><script src="' + this.config.data.thirdPartyScript + '"></script></body></html>'), e.doc.close()
        }
    });
    return o
}), define("views/modules/partner/asset-sponsorship", ["jquery", "underscore", "backbone", "pubsub", "baseview", "admanager"], function (e, t, i, n, s, r) {
    var o = s.extend({
        isSetup: !1,
        destroy: function () {
            this.isSetup, s.prototype.destroy.call(this, !1)
        },
        initialize: function (i) {
            this.config = e.extend({}, i || {}), t.bindAll(this), s.prototype.initialize.call(this, i), r.logDebug("Asset Sponsorship initialized", this), "asset" == this.config.masterPageType && (this.isSetup = !0, this.setup())
        },
        setup: function () {
            this.setupBackground(), this.setupLogo()
        },
        setupBackground: function () {
            if (null != this.options.data.imageSkinLeft && null != this.options.data.imageSkinRight && "" != this.options.data.imageSkinLeft && "" != this.options.data.imageSkinRight) {
                var e = '<img src="<%= srcLeft %>" class="asset-sponsorship-skin asset-sponsorship-skin-left" /><img src="<%= srcRight %>" class="asset-sponsorship-skin asset-sponsorship-skin-right" />',
                    i = {
                        srcLeft: this.options.data.imageSkinLeft,
                        srcRight: this.options.data.imageSkinRight
                    }, n = t.template(e, i);
                this.$el.append(n)
            }
        },
        setupLogo: function () {
            var i = e(".content-bar .title", this.$el);
            if (0 != i.length) {
                var n = {
                    clickthru: this.config.data.clickThru,
                    logoText: this.config.data.imageLogoAlt,
                    logoUrl: this.config.data.imageLogo
                }, s = '<div class="sponsor"><a href="<%= clickthru %>" target="_blank"><img src="<%= logoUrl %>" alt="<%= logoText %>"><span>Sponsored by <br/><%= logoText %></span></a></div>';
                i.after(t.template(s, n))
            }
        }
    });
    return o
}), define("advertisement", ["jquery", "underscore", "backbone", "pubsub", "app", "baseview", "state", "admanager", "views/modules/partner/leavebehind", "views/modules/partner/slider", "views/modules/partner/sidebar", "views/modules/partner/overlay", "views/modules/partner/pushdown", "views/modules/partner/flip", "views/modules/partner/page-turn", "views/modules/partner/iab", "views/modules/partner/asset-sponsorship"], function (e, t, i, n, s, r, o, a, l, c, u, h, d, p, f, g, m) {
    var v = r.extend({
        refresh: null,
        destroy: function (t) {
            this.destroyed = !0, null != this.refresh && n.off(this.refresh), e('.partner-slot[data-slot-type="in"]', this.$el).hide().unbind().empty(), null != this.$adEl && this.$adEl.empty(), r.prototype.destroy.call(this, t)
        },
        initialize: function (t) {
            if (a.noAds) return a.logWarn("Advertisement not initialized due to ads turned off"), void 0;
            this.$adEl = this.adEl = null, this.config = e.extend({}, t || {}), r.prototype.initialize.call(this, {});
            var i = this.config.aws.split("/").join("_");
            this.autoCreateSlot(i, this.config.uniqueId), "slider" == this.config.functionality ? this.subviews.slider = new c({
                awsId: i,
                el: ".partner.slider"
            }) : "sidebar" == this.config.functionality && (this.subviews.sidebar = new u({
                awsId: i,
                el: this.$(".partner-sidebar-ad")
            })), a.logDebug("Advertisement initialized", this), this.render(i)
        },
        listenForPoster: function (e) {
            a.logDebug("Listening for slider, " + e.attr("id"), e), this.subviews.slider ? this.subviews.slider.listenForAd() : this.subviews.sidebar && this.subviews.sidebar.listenForAd()
        },
        autoCreateSlot: function (i, n) {
            if ("slider" == this.config.functionality && 1 == e("#partner_high_impact_" + i + "_slider,.partner.slider").length) {
                var s = {
                    section_name: i,
                    uid: n
                }, r = '<div id="partner_high_impact_<%= section_name %>" class="partner-slot partner-placement high-impact" data-slot-position="high_impact" data-slot-id="partner_high_impact_<%= section_name %>" data-placement-id="partner_high_impact_<%= section_name %>_<%= uid %>" data-slot-type="in" data-sizes="mediumrectangle,halfpage,elastic,videotakeover" data-section-path="<%= section_name %>"data-functionality-type="slider"></div>',
                    o = t.template(r, s);
                e(o).appendTo(".partner.slider"), a.logDebug("Slot autocreated for " + i)
            }
        },
        render: function (t) {
            var i = this,
                s = null;
            this.config.cardInfo && (s = this.config.cardInfo.name);
            var r = {
                cardsize: s,
                pageType: null,
                series: this.config.series,
                sitepage: this.config.sitePage,
                title: this.config.title,
                topic: this.config.topic
            }, o = this.config.aws,
                l = '.partner-slot[data-slot-type="in"]';
            "sidebar" == this.config.functionality ? l = '.partner-slot[data-functionality-type="sidebar"],.partner-slot.rising-star' : "slider" == this.config.functionality && (l = '.partner-slot[data-functionality-type="slider"],.partner-slot.rising-star'), this.$slots = this.$(l).each(function () {
                var l = e(this);
                if (a.logInfo("Found Slot: " + l.attr("id"), l), i.config.autoCreateSlot && l.attr("data-section-path") != t) return a.logInfo("Ignored Slot (auto create rules): " + l.attr("id"), l), !0;
                if (null != s && l.attr("data-card-support") && !l.is('[data-card-support~="' + s + '"]')) return a.logInfo("Ignored Slot (card size support): " + l.attr("id"), l), void 0;
                var c = o,
                    u = l.attr("data-cst");
                u !== void 0 && (c = u);
                var h = l.attr("data-slot-position") + "/" + c,
                    d = l.attr("data-slot-id"),
                    p = l.attr("data-placement-id") || d + "_" + (new Date).getTime(),
                    f = l.attr("data-functionality-type") || null,
                    g = [],
                    m = [],
                    v = '.partner-placement[data-slot-id="' + d + '"]';
                "slider" != f && "sidebar" != f || d == "partner_high_impact_" + i.config.sectionPath || (v += ',.partner-placement[data-slot-id="partner_high_impact_' + i.config.sectionPath + '"][data-shared-placement]'), e(v).each(function () {
                    var t = e(this);
                    if (!("sidebar" == i.config.functionality && "slider" == t.attr("data-functionality-type") || "slider" == i.config.functionality && "sidebar" == t.attr("data-functionality-type") || t.attr("data-card-support") && !t.is('[data-card-support~="' + s + '"]'))) {
                        var n = a._split(t.attr("data-sizes"), ",");
                        "sidebar" !== i.config.functionality || "small" != s && "medium" != s || (n = e.grep(n, function (e) {
                            return "mediumrectangle" === e || "halfpage" === e ? !1 : !0
                        })), g = a.getSizes(g, n), m = m.concat(n), a.logInfo("Found Placement: " + t.attr("id"), t)
                    }
                });
                var y = a.defineSlot(p, h, d, g, r);
                null != i.config.functionality && "high_impact" == l.attr("data-slot-position") && (a._containsValue(m, "mediumrectangle") > 0 || a._containsValue(m, "halfpage") > 0) && (l.removeAttr("style"), e("iframe", l).attr("width", "0").attr("height", "0"), i.listenForPoster(l)), l.bind("partnersetup", function (t, n) {
                    var s = null;
                    if (n !== void 0 && n.data !== void 0) s = n.data;
                    else {
                        if (void 0 === t.originalEvent || void 0 === t.originalEvent.data) return a.logError("Found a high impact ad, can't find the data object from the iFrame", arguments), void 0;
                        s = t.originalEvent.data
                    }
                    i.setupHighImpact(s, e(this))
                });
                var b = this.refresh = l.attr("data-refresh");
                b !== void 0 && b !== !1 && n.on(b, function () {
                    i.refreshAd(p, d)
                }, i);
                var w = !0;
                l.attr("data-defer") !== void 0 && "true" == l.attr("data-defer") && (w = !1), w && (a.loadAd(y), e('.partner-placement[data-slot-id="' + d + '"][data-default-text]', i.$el).each(function () {
                    var t = e(this),
                        i = t.attr("data-default-text");
                    e('<span class="partner-label">' + i + "</span>").prependTo(t)
                }))
            })
        },
        onCardWidthChange: function (t) {
            this.triggerEvent("onCardWidthChange", t);
            var i = t.name;
            this.$el.find("*[data-card-support]").each(function () {
                var t = e(this);
                t.is('[data-card-support~="' + i + '"]') || t.hide().empty()
            })
        },
        refreshAd: function (t) {
            a.refreshAd(t), e('.partner-placement[data-placement-id="' + t + '"][data-default-text]', this.$el).each(function () {
                var t = e(this),
                    i = t.attr("data-default-text");
                e('<span class="partner-label">' + i + "</span>").prependTo(t)
            })
        },
        setupAssetSponsorship: function (t) {
            a.logDebug("Found Asset Sponsorship", t);
            var i = e.extend(this.config, {});
            i.data = t, i.el = this.$el.closest(".asset"), this.subviews.sponsorship = new m(i)
        },
        setupIAB: function (e, t, i, n) {
            a.logDebug("Found IAB Ad in High Impact", e, t, i, n), this.subviews.iab = new g({
                data: e,
                el: t,
                height: n,
                width: i
            }), "Yes" == e.trackVCE && this.trackVCE(e, "iab_" + e.dfp.ecid, t)
        },
        setupHighImpact: function (i, n) {
            var s = this;
            if (this.stopListenForSliderPoster(), "Rising Star" === i.adType) {
                var r = n.find("iframe:first").attr("height"),
                    o = n.find("iframe:first").attr("width");
                return this.setupIAB(i, this.$(".partner-placement.rising-star"), o, r), void 0
            }
            if ("sponsorship" == i.adType) return this.setupAssetSponsorship(i), void 0;
            "Pushdown+" == i.adType && (i.isPersistantBackground = !0);
            var c = a.getCreativeState(i.dfp.ecid),
                u = a.convertAdTypeToAdUnit(i.adType),
                g = null,
                m = null,
                v = null;
            if ("elastic" == u) {
                g = "elastic_" + i.dfp.ecid;
                var y = {
                    id: g,
                    position: "elastic"
                }, b = t.template(e("#partner_overlay_template").html(), y);
                v = e(b).appendTo("body"), m = e("#" + g)
            } else m = e(".partner-placement." + u, this.$el), g = m.attr("id");
            this.adEl = g, this.$adEl = m;
            var w = e(".partner-placement-leavebehind", this.$el);
            this.subviews.leavebehind = new l({
                el: w,
                dfp: i.dfp,
                leaveBehindImage: i.leaveBehindImage,
                leaveBehindText: i.leaveBehindText,
                startVisible: !c.isOpen,
                $adEl: m
            }), a._createStyleSheet(m.attr("id") + "_stylesheet", i.stylesheet, m);
            var C = i.html;
            if ("livefeed" != u) {
                var y = {
                    html: i.html
                };
                C = t.template(e("#partner_container_template").html(), y)
            }
            if (e(C).appendTo(m), "elastic" == u) {
                var k = e.extend({
                    $adEl: s.$adEl,
                    adEl: s.adEl,
                    el: v,
                    startVisible: c.isOpen
                }, i || {});
                this.subviews.overlay = new h(k)
            } else if ("pushdown" == u) {
                var x = e.extend({
                    cardInfo: s.config.cardInfo,
                    el: s.$adEl,
                    startVisible: c.isOpen
                }, i || {});
                this.subviews.pushdown = new d(x)
            } else if ("heroflip" == u) {
                var S = e.extend({
                    $adEl: m,
                    el: s.$el,
                    startVisible: c.isOpen
                }, i || {}),
                    T = m.closest(".theatre").find(".hero");
                T.hasClass("hero-page-turn") ? this.subviews.heroturn = new f(S) : this.subviews.flip = new p(S)
            }
            require([i.script], function (t) {
                if (!s.destroyed) {
                    var n = e.extend({
                        el: s.$adEl
                    }, i || {});
                    s.subviews.partner = new t(n)
                }
            }), "Yes" == i.trackVCE && (c.isOpen ? s.trackVCE(i, u, m) : s.trackVCE(i, u, w)), c.isOpen = !1, a.registerCreativeState(c.ecid, c)
        },
        stopListenForSliderPoster: function () {
            a.logDebug("Stop listening for slider."), this.subviews.slider && this.subviews.slider.stopListenForAd()
        },
        trackVCE: function (e, t, i) {
            var n = "http://b.voicefive.com/c2/6035223/rs.js";
            e.vCEUrl && (n = e.vCEUrl);
            var s = n + "#c1=3&amp;c3=" + e.dfp.ebuy + "&amp;c4=" + e.dfp.ecid + "&amp;c5=" + e.dfp.epid + "&amp;c6=&amp;c10=1&amp;c11=" + e.dfp.esid + "&amp;c13=" + a.getVCESize(t) + ";&amp;c16=dfp&amp;ax_n=" + i.attr("id");
            a._createScript(i.attr("id") + "_vce", s, i), a.logDebug("Tracked vCE", s, i[0])
        }
    });
    return v
}), define("views/pages/base-page", ["jquery", "underscore", "backbone", "app", "pubsub", "baseview", "state", "views/modules/live-feed-view", "views/modules/footer", "views/modules/hero", "views/modules/carousel", "views/modules/gallery-carousel", "views/modules/tooltip", "views/modules/headline", "advertisement"], function (e, t, i, n, s, r, o, a, l, c, u, h, d, p, f) {
    var g = r.extend({
        initialize: function (t) {
            "/" === t.path.substr(-1) && (t.path = t.path.substr(0, t.path.length - 1)), t = e.extend(!0, {
                liveFeedColor: "light"
            }, t), this.expandedviews = {}, this.pubSub = e.extend(!0, {
                "partner:showSidebarAd": this.onShowSidebarAd,
                "partner:hideSidebarAd": this.onHideSidebarAd
            }, t.pubSub), r.prototype.initialize.apply(this, arguments)
        },
        render: function (e) {
            this.subviews.hero = new c({
                el: this.$(".hero:first"),
                section: this.options.section
            }), this.subviews.galleryList = new h({
                el: this.$(".front-galleries")
            }), this.subviews.tooltip = new d({
                el: this.$(".add-tooltip"),
                offset: {
                    x: -3,
                    y: 3
                }
            }), this.subviews.headline = new p({
                el: this.$(".mod.headlines"),
                section: this.options.section
            }), this.subviews.footer = new l, this.setAds(e)
        },
        renderExpanded: function (e) {
            this.$(".mod.live-feed").length && (this.subviews.livefeed = this.expandedviews.livefeed = new a({
                el: this.$(".mod.live-feed"),
                ads: e.sidebarAds,
                section: this.options.path,
                color: this.options.liveFeedColor,
                currentCardInfo: e
            }), this.expandedviews.livefeed.render(e))
        },
        destroy: function (e) {
            this.destroyExpanded(e), r.prototype.destroy.apply(this, arguments)
        },
        destroyExpanded: function (e) {
            this._callCollection(this.expandedviews, "destroy", [e]), this.expandedviews = {}
        },
        setAds: function (e) {
            try {
                var t = o.getCurrentPageInfo(),
                    i = "usat/" + t.ssts;
                "fronts/default" === t.templatename && "home" !== this.options.section && (i += "/front");
                var n = this.$el.closest(".card-wrap"),
                    s = n.add(".partner.slider");
                this.subviews.ads = new f({
                    aws: t.aws,
                    cardInfo: e,
                    el: s,
                    functionality: "sidebar",
                    masterPageType: "card",
                    title: t.seotitletag,
                    sectionPath: this.options.section,
                    sitePage: i,
                    series: null,
                    topic: null,
                    uniqueId: null
                })
            } catch (r) {
                console.error("advertisement threw exception:", r.stack || r.stacktrace || r.message)
            }
        },
        onShowSidebarAd: function () {
            this.triggerEvent("onShowSidebarAd")
        },
        onHideSidebarAd: function () {
            this.triggerEvent("onHideSidebarAd")
        },
        onCardWidthChange: function (e) {
            e.sidebarAds || this.triggerEvent("onHideSidebarAd"), this.triggerEvent("onCardWidthChange", e)
        }
    });
    return g
}), define("views/modules/snapshots", ["jquery", "underscore", "backbone", "pubsub", "app", "state", "cookie"], function (e, t, i, n, s, r) {
    var o = i.View.extend({
        el: ".front-galleries",
        events: {
            "click a.vote": "revealQuickQuestion",
            "click .snap-vote a.cancel": "revealSnapshotTeaser",
            "click a.snap-vote-btn": "registerVote"
        },
        initialize: function () {
            this.subviews = {}, this.render()
        },
        render: function () {
            if (0 >= e("#snapshots").length) {
                var t = e("#CList-galleries ul li:first-child");
                t.after('<li data-id="gallery" id="snapshots" data-href="/services/snapshots/gallery/"><a href="/services/snapshots/gallery/" data-href="/services/snapshots/gallery/">Snapshots</a></li>')
            }
        },
        revealQuickQuestion: function (t) {
            var i = e(t.currentTarget).closest(".snapshot-card");
            e(".snapshot", i).hide(), e(".snap-vote", i).not(".results").fadeIn()
        },
        revealSnapshotTeaser: function (t) {
            var i = e(t.currentTarget).closest(".snapshot-card");
            e(".snap-vote", i).hide(), e(".snapshot", i).fadeIn()
        },
        revealResults: function (t, i) {
            var n = e(t.currentTarget).closest(".snapshot-card");
            n.find(".snap-vote.results").length ? n.find(".snap-vote.results").replaceWith(i) : n.append(i), e(".snap-vote", n).hide(), e(".snap-vote.results", n).fadeIn()
        },
        registerVote: function (i) {
            var n = (e(i.currentTarget).closest(".snapshot-card"), e(i.currentTarget).attr("data-answer-id")),
                s = "/services/snapshots/vote/" + n + "/";
            e(i.currentTarget).addClass("loading");
            var o = e(".slide.active[data-qqid]", this.el).attr("data-qqid");
            e.cookie(o) && (s = "/services/snapshots/get/" + o + "/"), this.ajax = r.fetchData(s).done(t.bind(function (n) {
                var s = t.pluck(n.question[0].location[0].answer, "answerCount"),
                    r = t.reduce(s, function (e, t) {
                        return e + parseFloat(t)
                    }, 0),
                    a = n.question[0].location[0].answer.length - 1,
                    l = 0;
                t.each(n.question[0].location[0].answer, function (e, t) {
                    var i = Math.round(100 * (parseFloat(e.answerCount) / r));
                    t == a ? i = 100 - l : l += i, e.answerPercent = i
                });
                var c = e("#snapshot-results"),
                    u = t.template(c.html(), {
                        data: n.question[0]
                    });
                this.revealResults(i, u), e(i.currentTarget).removeClass("loading"), e.cookie(o, !0)
            }, this))
        },
        destroy: function (e) {
            this.undelegateEvents(), t.each(this.subviews, function (t) {
                t.destroy !== void 0 && t.destroy(e)
            }), e && this.remove()
        }
    });
    return o
}), define("views/modules/ajax-widget", ["jquery", "underscore", "backbone", "state"], function (e, t, i, n) {
    var s = i.View.extend({
        initialize: function () {
            var i = e(this.options.contents).length > 0;
            this.loadData(this.options.url, i), this.options.refresh && this.options.contents && (this.refresh = setInterval(t.bind(function () {
                this.loadData(this.options.url, !0)
            }, this), this.options.refresh))
        },
        loadData: function (i) {
            return e(this.options.contents).hasClass("paused") ? (clearInterval(this.refresh), void 0) : (this.ajax = n.fetchHtml(i).done(t.bind(function (e) {
                this.ajax = null, this.$el.html(e)
            }, this)).always(t.bind(function () {
                this.$el.removeClass("loading")
            }, this)), void 0)
        },
        destroy: function (e) {
            this.undelegateEvents(), this.ajax && this.ajax.abort(), clearInterval(this.refresh), e && this.remove()
        }
    });
    return s
}), define("views/modules/markets", ["jquery", "underscore", "backbone", "baseview", "views/modules/ajax-widget", "pubsub"], function (e, t, i, n, s) {
    var r = n.extend({
        el: "#CList-Markets",
        events: {
            "click .market": "changeMarketFocus"
        },
        initialize: function () {
            this.subviews = {}, this.subviews.markets = new s({
                el: this.$el,
                url: "/services/markets/home-widget/",
                refresh: 6e4,
                contents: "#homepage-markets-widget"
            })
        },
        changeMarketFocus: function (t) {
            var i = this.$(".market"),
                n = e(t.currentTarget);
            i.removeClass("active"), n.addClass("active")
        }
    });
    return r
}), define("views/modules/set-homepage", ["jquery", "underscore", "backbone", "pubsub"], function (e, t, i) {
    var n = i.View.extend({
        el: ".size-suspender:first",
        events: {
            "click .set-homepage": "setHomepage"
        },
        initialize: function () {
            this.render()
        },
        render: function () {
            document.all && 0 === e(".set-homepage").length && this.$el.append('<div class="set-homepage">Set as my Home Page</div>')
        },
        setHomepage: function () {
            document.all && (document.body.style.behavior = "url(#default#homepage)", document.body.setHomePage("http://www.usatoday.com"))
        },
        destroy: function (e) {
            this.undelegateEvents(), e && this.remove()
        }
    });
    return n
}), define("views/modules/quick-links", ["jquery", "underscore", "backbone", "baseview"], function (e, t, i, n) {
    var s = n.extend({
        initialize: function (i, s) {
            if (0 === e("#CList-quick-links").length && 1 === s.length && ("home" == i || "travel" == i)) {
                var r = this.getLinks(i),
                    o = e("#quick-links-template");
                if (r.length > 0 && 1 === o.length) {
                    var a = t.template(o.html(), {
                        data: r
                    });
                    "home" == i ? s.find(".size-suspender:first").append(a) : s.find(".size-well").each(function () {
                        var t = e(this),
                            i = t.children(".size-suspender");
                        return 1 !== i.length || 0 !== i.children().length && 0 !== i.children().eq(0).children().length ? void 0 : (i.append(a), !1)
                    })
                }
            }
            n.prototype.initialize.apply(this, arguments)
        },
        getLinks: function (e) {
            var t = [];
            return "home" == e ? t = [{
                url: "/sports/",
                text: "Sports Scores"
            }, {
                url: "/puzzles/crossword/",
                text: "Crosswords"
            }, {
                url: "/puzzles/sudoku/",
                text: "Sudoku"
            }, {
                url: "http://puzzles.usatoday.com/",
                text: "More Games",
                target: !0
            }] : "travel" == e && (t = [{
                url: "/blog/cruiselog/",
                text: "Cruise Log"
            }, {
                url: "/blog/todayinthesky/",
                text: "Today in the Sky"
            }, {
                url: "/blog/hotelcheckin/",
                text: "Hotel Check-In"
            }, {
                url: "/blog/dispatches/",
                text: "Dispatches"
            }]), t
        }
    });
    return s
}), define("views/pages/home", ["jquery", "underscore", "views/pages/base-page", "views/modules/snapshots", "views/modules/markets", "views/modules/set-homepage", "views/modules/quick-links"], function (e, t, i, n, s, r, o) {
    var a = i.extend({
        render: function () {
            this.subviews.snapshots = new n, i.prototype.render.apply(this, arguments), e(".load-markets").length && (this.subviews.markets = new s), this.$(".mod.featured-content").length && require(["views/modules/featured-content"], t.bind(function (e) {
                this.subviews.featured = new e({
                    el: this.$(".featured-content"),
                    transition: {
                        interval: 15e3
                    }
                })
            }, this)), this.subviews.quickLinks = new o("home", this.$el), t.defer(t.bind(function () {
                this.subviews.set_homepage = new r
            }, this))
        }
    });
    return a
}), define("views/modules/twitter", ["jquery", "underscore", "backbone", "state", "pubsub", "baseview", "views/modules/scroller/sidebar-scroll"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        events: {
            "click .twitter a": "onClickTweetLink"
        },
        initialize: function (i) {
            if (this.options = e.extend({
                num_tweets: 6,
                columns: 1,
                default_account: null,
                sidebar: !1
            }, i || {}), i.ads || this.onHideSidebarAd(), this.tweetTemplate = this.$("#tweet-list-template"), this.tweetTemplate.length) {
                t.bindAll(this, "createTweetsHTML"), this.twitter_el = this.$(".tweet-list");
                var n = this.twitter_el.attr("data-user-id"),
                    s = this.twitter_el.attr("data-section-id") || this.options.default_account;
                n || (n = s || "USAToday"), this.loadTweets(n, this.options.num_tweets, this.createTweetsHTML), r.prototype.initialize.call(this, this.options)
            }
        },
        destroy: function (e) {
            e && this.twitter_el.empty(), r.prototype.destroy.call(this, !1)
        },
        onShowSidebarAd: function () {
            this.$ad = this.$el.siblings(".partner-sidebar-ad"), this.$el.css("height", this.$el.outerHeight() - this.$ad.outerHeight()), this.$el.siblings(".weather-forecast").addClass("ad-above"), this.subviews && this.subviews.scrollbar && this.subviews.scrollbar.refresh()
        },
        onHideSidebarAd: function () {
            this.$el.css("height", ""), this.$el.siblings(".weather-forecast").removeClass("ad-above"), this.subviews && this.subviews.scrollbar && this.subviews.scrollbar.refresh()
        },
        loadTweets: function (e, t, i) {
            var s = this;
            n.fetchData("http://api.twitter.com/1/statuses/user_timeline.json", {
                dataType: "jsonp",
                data: {
                    screen_name: e,
                    include_rts: !0,
                    count: t,
                    include_entities: !1
                }
            }).done(function (e) {
                for (var t = [], n = 0; e.length > n; n++) e[n].text = s.ify.clean(e[n].text), e[n].created_at = s.timeAgo(e[n].created_at), t.push(e[n]);
                i(t)
            })
        },
        onClickTweetLink: function () {
            s.trigger("uotrack", "{% section %}tweets")
        },
        createTweetsHTML: function (e) {
            var i = t.template(this.tweetTemplate.html(), {
                data: e
            });
            this.twitter_el.html(i), this.twitter_el.find("li").slice(0, this.options.columns).addClass("no-border"), this.options.scroller && this.addScrollbar()
        },
        addScrollbar: function () {
            this.subviews.scrollbar = new o({
                el: this.$(".twitter-scroll-content"),
                color: "light",
                lockPageScroll: !0,
                fadeout: !0
            })
        },
        timeAgo: function (t) {
            var i = new Date,
                n = new Date(t);
            e.browser.msie && (n = Date.parse(t.replace(/( \+)/, " UTC$1")));
            var s = i - n,
                r = 1e3,
                o = 60 * r,
                a = 60 * o,
                l = 24 * a;
            return isNaN(s) || 0 > s ? "" : 2 * r > s ? "right now" : o > s ? Math.floor(s / r) + " seconds ago" : 2 * o > s ? "about 1 minute ago" : a > s ? Math.floor(s / o) + " minutes ago" : 2 * a > s ? "about 1 hour ago" : l > s ? Math.floor(s / a) + " hours ago" : s > l && 2 * l > s ? "yesterday" : 365 * l > s ? Math.floor(s / l) + " days ago" : "over a year ago"
        },
        ify: {
            link: function (e) {
                return e.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function (e, t, i, n, s) {
                    var r = i.match(/w/) ? "http://" : "";
                    return '<a target="_blank" href="' + r + t + '">' + (t.length > 25 ? t.substr(0, 24) + "..." : t) + "</a>" + s
                })
            },
            at: function (e) {
                return e.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function (e, t) {
                    return '<a target="_blank" href="http://twitter.com/intent/user?screen_name=' + t + '">@' + t + "</a>"
                })
            },
            list: function (e) {
                return e.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function (e, t) {
                    return '<a target="_blank" href="http://twitter.com/' + t + '">@' + t + "</a>"
                })
            },
            hash: function (e) {
                return e.replace(/(^|\s+)#(\w+)/gi, function (e, t, i) {
                    return t + '<a target="_blank" href="http://twitter.com/search?q=%23' + i + '">#' + i + "</a>"
                })
            },
            clean: function (e) {
                return this.hash(this.at(this.list(this.link(e))))
            }
        }
    });
    return a
}), define("views/modules/generic-paginator", ["jquery", "underscore", "backbone", "baseview", "pubsub"], function (e, t, i, n) {
    var s = n.extend({
        events: {
            "click .paginator-indicator-target": "onPaginatorClick"
        },
        initialize: function (t) {
            this.$pageElements = this.$(".paginator-indicator-target"), t = e.extend({
                onGoTo: null
            }, t), n.prototype.initialize.call(this, t)
        },
        onPaginatorClick: function (t) {
            t && t.preventDefault();
            var i = e(t.currentTarget).index();
            this.goToPage(i)
        },
        goToPage: function (e) {
            if (0 !== this.$pageElements.length) {
                0 > e ? e = 0 : e >= this.$pageElements.length && (e = this.$pageElements.length - 1);
                var t = this.$pageElements.eq(e);
                this.$(".paginator-indicator-bullet").removeClass("active"), t.find(".paginator-indicator-bullet").addClass("active"), this.options.onGoTo && this.options.onGoTo(e)
            }
        },
        goToNextPage: function (e) {
            var t = this.$(".paginator-indicator-bullet.active"),
                i = t.parent().index();
            this.$pageElements.length - 1 > i ? this.goToPage(i + 1) : e && this.goToPage(0)
        },
        goToPrevPage: function (e) {
            var t = this.$(".paginator-indicator-bullet.active"),
                i = t.parent().index();
            i > 0 ? this.goToPage(i - 1) : e && this.goToPage(this.$pageElements.length - 1)
        }
    });
    return s
}), define("views/modules/featured-content", ["jquery", "underscore", "backbone", "baseview", "pubsub", "views/modules/generic-paginator"], function (e, t, i, n, s, r) {
    var o = n.extend({
        events: {
            mouseenter: "stoptimer",
            mouseleave: "starttimer"
        },
        initialize: function (i) {
            t.bindAll(this, "automate", "goTo"), i = e.extend({
                itemWidth: 180,
                itemsPerView: 4,
                transition: {
                    interval: 15e3
                }
            }, i), this.subviews = {}, this.moveMe = this.$("ul:first"), this.subviews.paginator = new r({
                el: this.$(".paginator"),
                onGoTo: this.goTo
            }), i.transition && (this.interval = i.transition.interval || !1, this.timer = null, this.interval && this.starttimer()), n.prototype.initialize.call(this, i)
        },
        automate: function () {
            this.subviews.paginator.goToNextPage(!0)
        },
        destroy: function (e) {
            this.stoptimer(), n.prototype.destroy.call(this, e)
        },
        goTo: function (t) {
            var i, n = this.options.itemWidth * this.options.itemsPerView,
                s = n * t,
                r = t * this.options.itemsPerView,
                o = r + this.options.itemsPerView;
            this.animate(this.moveMe, "left", "-" + s + "px", 450, "ease-in-out"), this.moveMe.find("li").each(function (t, n) {
                i = e(n).find("img"), t >= r && o > t && i.attr("data-src") && (i.attr("src", i.attr("data-src")), i.removeAttr("data-src"))
            })
        },
        starttimer: function () {
            this.interval && !this.timer && (this.timer = setInterval(this.automate, this.interval))
        },
        stoptimer: function () {
            this.timer && (clearInterval(this.timer), this.timer = null)
        }
    });
    return o
}), define("views/modules/blogs", ["jquery", "underscore", "backbone", "baseview", "pubsub"], function (e, t, i, n) {
    var s = n.extend({
        events: {
            "click .scroller": "scroll"
        },
        initialize: function (t) {
            this.$moveMe = this.$(".stage ul"), this.totalItems = e("li", this.$moveMe).length, this.$scrollerLeft = this.$(".scroller.left"), this.$scrollerRight = this.$(".scroller.right"), n.prototype.initialize.call(this, t)
        },
        scroll: function (t) {
            t && t.preventDefault();
            var i = e(t.target);
            if (i.hasClass("disabled")) return !1;
            var n = i.hasClass("right"),
                s = this.$moveMe.data("item-offset"),
                r = 4;
            Modernizr.mq("screen and (min-width: 1250px)") ? r = 6 : Modernizr.mq("screen and (min-width: 1150px)") && (r = 5), n && (r = -1 * r);
            var o = r + s;
            o > 0 && (o = 0);
            var a = 183 * s - 1,
                l = 183 * r,
                c = l + a;
            c = 183 * o - 1, 0 == o ? this.$scrollerLeft.addClass("disabled") : this.$scrollerLeft.removeClass("disabled");
            var u = Math.abs(o) + Math.abs(r);
            u >= this.totalItems ? (this.$scrollerRight.addClass("disabled"), r += u - this.totalItems, o = r + s, l = 183 * r, c = l + a, c = 183 * o - 1) : this.$scrollerRight.removeClass("disabled"), this.$moveMe.data("item-offset", o), this.animate(this.$moveMe, "left", c + "px", 200, "ease-in")
        }
    });
    return s
}), define("views/modules/form", ["jquery", "baseview"], function (e, t) {
    var i = t.extend({
        events: {
            "focus .ui-text-input-container input": "onFocus",
            "blur .ui-text-input-container input": "onBlur",
            "keyup .ui-text-input-container input": "onTyping",
            "click .ui-text-input-clear": "onClearButtonClick"
        },
        initialize: function () {
            this.$('input[type="text"],input[type="search"]').each(function () {
                var t = e(this),
                    i = e('<div class="ui-text-input-clear" style="display: none"></div>');
                t.val(t.data("placeholder")), t.wrap('<div class="ui-text-input-container"></div>'), t.parent().append(i)
            })
        },
        onFocus: function (t) {
            var i = e(t.currentTarget),
                n = i.data("placeholder");
            i.val() === n && i.val(""), this.showHideClearButton(i)
        },
        onBlur: function (t) {
            var i = e(t.currentTarget),
                n = i.data("placeholder");
            n && "" === e.trim(i.val()) && i.val(n), this.showHideClearButton(i)
        },
        onTyping: function (t) {
            this.showHideClearButton(e(t.currentTarget))
        },
        onClearButtonClick: function (t) {
            var i = e(t.currentTarget).parent().find("input");
            t.preventDefault(), this.clearField(i)
        },
        showHideClearButton: function (e) {
            var t = e.parent().find(".ui-text-input-clear");
            e.val() && e.val() !== e.data("placeholder") ? t.show() : t.hide()
        },
        clearField: function (e) {
            var t = e.data("placeholder");
            t ? e.val(t) : e.val(""), this.showHideClearButton(e)
        }
    });
    return i
}), define("views/modules/autocomplete", ["jquery", "underscore", "backbone", "pubsub", "state"], function (e, t, i, n, s) {
    var r = i.View.extend({
        events: {
            "keyup .ui-autocomplete-input": "onTyping",
            "focus .ui-autocomplete-input": "onFocus",
            "blur .ui-autocomplete-input": "onBlur",
            "mousedown .ui-autocomplete li": "onSelectResult",
            "hover .ui-autocomplete li": "onHover"
        },
        initialize: function (i) {
            this.url = i.url, this.minChars = i.min_chars || 3, this.maxResults = i.max_results || 8, this.$field = e(i.el).attr("tabindex", "0"), this.$container = this.$field.parent().addClass("ui-autocomplete-container"), this.$autoCompleteContainer = e("<div>").addClass("ui-autocomplete-content"), this.$autoComplete = e("<ul>").addClass("ui-autocomplete"), this.$error = e("<div>").addClass("error"), this.$form = this.$el.find("form"), this.keyPressTimer = null, this.isAutoCompleteOpen = !1, this.activeResultIndex = null, this.$field.hasClass("ui-autocomplete-input") || this.$field.addClass("ui-autocomplete-input"), this.setElement(this.$container), this.$el.append(this.$autoCompleteContainer.append(this.$autoComplete)).append(this.$error), t.bindAll(this), this.$autoComplete.empty()
        },
        destroy: function () {
            this.undelegateEvents()
        },
        onTyping: function (t) {
            var i = t.keyCode ? t.keyCode : t.which;
            if (this.isAutoCompleteOpen = 0 != this.$autoComplete.children("li").length ? !0 : !1, "keypress" != !t.type) {
                if ((38 == i || 40 == i) && this.isAutoCompleteOpen) {
                    var n, s = this.$autoComplete.children("li"),
                        r = s.length;
                    return s.removeClass("hover"), null != this.activeResultIndex ? 38 == i ? n = Math.max(this.activeResultIndex - 1, 0) : 40 == i && (n = Math.min(this.activeResultIndex + 1, r - 1)) : n = 0, s.eq(n).addClass("hover"), this.$field.val(s.eq(n).text()), this.$form.attr("data-type", s.eq(n).attr("data-type")), this.activeResultIndex = n, void 0
                }
                if (13 == i) {
                    var o = null == this.activeResultIndex ? null : this.$autoComplete.children("li").eq(this.activeResultIndex);
                    return this.clearResults(), this.onEnter(o), void 0
                }
                this.$autoComplete.empty(), e(t.currentTarget).val().length >= this.minChars - 1 && this.getResults()
            }
        },
        getResults: function () {
            clearTimeout(this.keyPressTimer), this.keyPressTimer = t.delay(this.fetchData, 500)
        },
        fetchData: function () {
            var i, n = this.$field.val();
            this.clearResults(), this.$error.empty();
            var r = t.bind(function (n) {
                null != n[0] ? (this.$autoComplete.show(), n = n.splice(0, this.maxResults), e.map(n, t.bind(function (t) {
                    var i = e("<li>").html(t.City + ", " + t.State);
                    this.$autoComplete.append(i)
                }, this))) : this.displayError(), i = n
            }, this);
            this.fetch && this.fetch.abort(), this.fetch = s.fetchData(this.url + n).done(r)
        },
        onHover: function (t) {
            e(t.currentTarget).hasClass("hover") || (this.$autoComplete.find("li").removeClass("hover"), e(t.currentTarget).addClass("hover"))
        },
        onFocus: function () {
            this.$error.empty()
        },
        onSelectResult: function (t) {
            var i = e(t.currentTarget).text();
            this.$field.val(i), this.$field.data("placeholder", i), this.clearResults()
        },
        onEnter: function () {},
        onBlur: function () {
            this.clearResults()
        },
        clearResults: function () {
            this.activeResultIndex = null, this.$autoComplete.empty(), this.$error.empty()
        },
        displayError: function (e) {
            e = e || "Data cannot be found.", this.$error.html(e)
        }
    });
    return r
}), define("views/modules/markets-autocomplete", ["jquery", "underscore", "app", "views/modules/autocomplete", "state"], function (e, t, i, n, s) {
    var r = n.extend({
        initialize: function () {
            n.prototype.initialize.apply(this, arguments), this.$form = this.$field.closest("form"), this.$form.on("submit", this.disableSubmit())
        },
        fetchData: function () {
            this.$error.empty();
            var i = this.$field.val();
            this.clearResults(), this.$error.empty();
            var n = t.bind(function (i) {
                this.fetch = null, i.Results.length ? (this.$form.off("submit"), this.$autoComplete.show(), i = i.Results, i = i.splice(0, this.maxResults), e.map(i, t.bind(function (t) {
                    var i = e("<li>").html(t.Symbol + " - " + t.Name).attr("data-type", t.SymbolType);
                    this.$autoComplete.append(i)
                }, this))) : (this.$error.append('<b class="message">No results found</b>'), this.$form.on("submit", this.disableSubmit()))
            }, this);
            this.fetch && this.fetch.abort(), this.fetch = s.fetchData(this.url + i).done(n)
        },
        disableSubmit: function () {
            return !1
        },
        onSelectResult: function (t) {
            n.prototype.onSelectResult.call(this, t), "" == this.$error.html() && this.$form.attr("data-type", e(t.currentTarget).attr("data-type")).submit()
        },
        onEnter: function () {},
        destroy: function () {
            this.$form.off("submit")
        }
    });
    return r
}), define("views/pages/generic-section", ["jquery", "underscore", "backbone", "app", "pubsub", "views/pages/base-page", "views/modules/twitter", "views/modules/featured-content", "views/modules/blogs", "views/modules/form", "views/modules/markets-autocomplete", "views/modules/ajax-widget", "views/modules/quick-links"], function (e, t, i, n, s, r, o, a, l, c, u, h, d) {
    var p = r.extend({
        events: {
            "submit #money-tools-form": "onMoneyToolsFormSubmit"
        },
        destroy: function () {
            this.destroyed = !0, r.prototype.destroy.apply(this, arguments)
        },
        render: function () {
            this.subviews.twitter = new o({
                el: this.$(".mod.twitter"),
                num_tweets: 4,
                columns: 2
            }), this.subviews.quickLinks = new d(this.options.section, this.$el), this.$(".mod.lottery").length && require(["views/modules/lottery"], t.bind(function (e) {
                this.destroyed || (this.subviews.lottery = new e)
            }, this)), this.$(".mod.dcdeals").length && require(["views/modules/dcdeals"], t.bind(function (e) {
                this.destroyed || (this.subviews.dcdeals = new e)
            }, this)), this.$(".mod.shermansdeals").length && require(["views/modules/shermansdeals"], t.bind(function (e) {
                this.destroyed || (this.subviews.shermans = new e)
            }, this)), this.$(".idc-market-tools").length && (this.subviews.moneyToolsForm = new c({
                el: this.$("#money-tools-form")
            }), this.subviews.markets_autocomplete || (this.subviews.markets_autocomplete = new u({
                el: this.$(".idc-market-tools .query"),
                url: "/services/markets/autocomplete/json/",
                max_results: 4
            })), this.subviews.markets = new h({
                el: ".load-markets",
                url: "/services/markets/interior-widget/",
                refresh: 6e4,
                contents: "#default-market-quotes"
            })), this.$(".featured-content").each(t.bind(function (e, t) {
                this.subviews["featured" + e] = new a({
                    el: t,
                    transition: {
                        interval: 15e3
                    }
                })
            }, this)), this.subviews.blogs = new l({
                el: this.$(".mod.blogs")
            }), r.prototype.render.apply(this, arguments)
        },
        onMoneyToolsFormSubmit: function (t) {
            t.preventDefault(), this.subviews.markets_autocomplete.clearResults();
            var n, s = e(t.currentTarget).find(".query"),
                r = s.val(),
                o = e(t.currentTarget).attr("data-type");
            switch (r = r.split(" - ")[0], s.val(r), s.attr("data-symbol", r), o) {
                case "C":
                    n = "stocks";
                    break;
                case "F":
                    n = "mutual-funds";
                    break;
                case "G":
                    n = "etfs";
                    break;
                default:
                    n = "stocks"
            }
            var a = "/money/lookup/" + n + "/" + s.attr("data-symbol") + "/";
            Modernizr.history ? i.history.navigate(a, {
                trigger: !0
            }) : window.location = a
        }
    });
    return p
}), define("libs/onlineopinion/oo_engine", [], function () {
    var e = {
        Browser: function () {
            var e = navigator.userAgent,
                t = "[object Opera]" === Object.prototype.toString.call(window.opera),
                i = {
                    IE: !! window.attachEvent && !t,
                    Opera: t,
                    WebKit: e.indexOf("AppleWebKit/") > -1,
                    Chrome: e.indexOf("Chrome") > -1,
                    Gecko: e.indexOf("Gecko") > -1 && -1 === e.indexOf("KHTML"),
                    MobileSafari: /Apple.*Mobile.*Safari/.test(e),
                    PalmPre: e.indexOf("Pre/") > -1,
                    BlackBerry: e.indexOf("BlackBerry") > -1,
                    Fennec: e.indexOf("Fennec") > -1,
                    IEMobile: e.indexOf("IEMobile") > -1,
                    OperaMobile: e.search(/Opera (?:Mobi|Mini)/) > -1,
                    ua: e
                };
            return i.isMobile = i.MobileSafari || i.PalmPre || i.BlackBerry || i.Fennec || i.IEMobile || i.OperaMobile, i
        }()
    };
    return e.Cache = {}, e.instanceCount = 0, e.K = function () {},
    function () {
        function t(e) {
            return document.getElementById(e)
        }
        function i(e, t) {
            var i;
            for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }
        function n(e, t, i, n) {
            e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
        }
        function s(e, t, i, n) {
            e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
        }
        function r(e) {
            var t, i = [];
            for (t in e) e.hasOwnProperty(t) && i.push(t + "=" + (encodeURIComponent(e[t]) || ""));
            return i.join("&")
        }
        function o(t) {
            var i = r(t.metrics),
                n = t.tealeafId + "|" + t.clickTalePID + "/" + t.clickTaleUID + "/" + t.ClickTaleGetSID;
            return i += "&custom_var=" + e.createLegacyVars(t.legacyVariables, n), "OnPage" === t.metrics.type && (i += "|iframe"), t.asm && (i += "&asm=2"), i += "&_rev=2", t.customVariables && (i += "&customVars=" + encodeURIComponent(e.serialize(t.customVariables))), i
        }
        function a(t, i) {
            var n = document,
                s = n.createElement("form"),
                r = n.createElement("input"),
                a = t.referrerRewrite;
            return t.metrics.referer = location.href, a && (t.metrics.referer = e.referrerRewrite(a)), s.style.display = "none", s.method = "post", s.target = i || "OnlineOpinion", s.action = t.onPageCard ? "https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r=" + location.href : "https://secure.opinionlab.com/ccc01/comment_card_d.asp", t.commentCardUrl && (s.action = t.commentCardUrl, t.onPageCard && (s.action += "?r=" + location.href)), r.name = "params", r.value = o(t), s.appendChild(r), n.body.appendChild(s), s
        }
        function l() {
            return {
                width: screen.width,
                height: screen.height,
                referer: location.href,
                prev: document.referrer,
                time1: (new Date).getTime(),
                time2: null,
                currentURL: location.href,
                ocodeVersion: "5.6.2"
            }
        }
        function c(e, t) {
            return e = e || {}, "string" == typeof e ? t + "|" + e : e.override ? e.vars : t + (e.vars ? "|" + e.vars : "")
        }
        function u(e, t) {
            return t || (t = location), "string" == typeof e ? e : e.searchPattern ? t.href.replace(e.searchPattern, e.replacePattern) : e.replacePattern
        }
        function h() {
            e.$("oo_container").style.display = "none"
        }
        function d() {
            var t = e.$("oo_invitation_prompt");
            if (t) {
                var i = e.$("oo_container");
                return this.showPrompt(i), void 0
            }
            var n = window.XMLHttpRequest ? new XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"),
                s = this;
            document.createElement("link"), n.onreadystatechange = function () {
                4 === n.readyState && s.showPrompt(n.responseText)
            }, n.open("GET", this.options.pathToAssets + this.options.promptMarkup, !0), n.send(null)
        }
        function p(t, i) {
            var n, s, r, o = document,
                a = "string" == typeof t ? o.createElement("div") : t,
                l = o.createElement("div"),
                c = this.options;
            l.id = "oo_invitation_overlay", a.id = "oo_container", a.style.visibility = "hidden", "string" == typeof t && (a.innerHTML = t, o.body.appendChild(a)), a.appendChild(l), r = e.$("oo_launch_prompt"), c.companyLogo && (n = new Image, n.src = c.companyLogo, e.$("oo_company_logo").appendChild(n)), e.addEventListener(r, "click", i.bind(this), !1), c.clickCallbacks && ("function" == typeof c.clickCallbacks.yes && e.addEventListener(r, "click", function () {
                c.clickCallbacks.yes()
            }, !1), "function" == typeof c.clickCallbacks.no && e.addEventListener(e.$("oo_no_thanks"), "click", function () {
                c.clickCallbacks.no()
            }, !1)), c.neverShowAgainButton && (s = e.$("oo_never_show"), s.style.visibility = "visible", e.addEventListener(s, "click", this.killPrompt.bind(this), !1)), e.Browser.IE && !window.XMLHttpRequest && (l.style.position = "absolute", l.style.width = Math.max(document.documentElement.clientWidth, document.body.offsetWidth) + "px", l.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + "px", a.style.position = "absolute"), a.style.visibility = "visible", a.style.display = "block", l.className = "no_loading"
        }
        var f = function () {
            var e, t, i, n, s, r = document.body;
            return document.createElement && r && r.appendChild && r.removeChild ? (e = document.createElement("div"), e.getBoundingClientRect ? (e.innerHTML = "x", e.style.cssText = "position:fixed;top:100px;", r.appendChild(e), t = r.style.height, i = r.scrollTop, r.style.height = "3000px", r.scrollTop = 500, n = e.getBoundingClientRect().top, r.style.height = t, s = 100 === n, r.removeChild(e), r.scrollTop = i, s) : null) : null
        }(),
            g = function () {
                if ("Microsoft Internet Explorer" === navigator.appName && -1 !== navigator.userAgent.search("MSIE 6")) return !0;
                var e, t, i = document.body;
                return document.createElement && i && i.appendChild && i.removeChild ? (e = document.createElement("iframe"), t = !1, e.setAttribute("name", "oo_test"), e.style.display = "none", i.appendChild(e), t = !document.getElementsByName("oo_test")[0], i.removeChild(e), t) : null
            }();
        i(e, {
            extend: i,
            toQueryString: r,
            addEventListener: n,
            $: t,
            appendOOForm: a,
            removeEventListener: s,
            createMetrics: l,
            createLegacyVars: c,
            POSITION_FIXED_SUPPORTED: f,
            DYNAMIC_FRAME_NAME_IS_BUGGY: g,
            getFormParams: o,
            referrerRewrite: u,
            hidePrompt: h,
            getPrompt: d,
            showPrompt: p
        })
    }(),
    function () {
        function t(e) {
            if (!e) return null;
            switch (typeof e) {
                case "number":
                case "boolean":
                case "function":
                    return e;
                case "string":
                    return "'" + e + "'";
                case "object":
                    var i, n, s, r;
                    if (e.constructor === Array || e.callee !== void 0) {
                        for (i = "[", s = e.length, n = 0; s - 1 > n; n += 1) i += t(e[n]) + ",";
                        i += t(e[n]) + "]"
                    } else {
                        i = "{";
                        for (r in e) e.hasOwnProperty(r) && (i += r + ":" + t(e[r]) + ",");
                        i = i.replace(/\,$/, "") + "}"
                    }
                    return i;
                default:
                    return null
            }
        }
        e.extend(e, {
            serialize: t
        })
    }(),
    function () {
        function t(t, i, n) {
            var s;
            return -1 !== t.search(i[0]) ? (e.createCookie(n, 0), !1) : e.readCookie(n) ? (s = parseInt(e.readCookie(n), 10), -1 !== t.search(i[s + 1]) && s + 1 !== i.length - 1 ? (e.createCookie(n, s + 1), !1) : -1 !== t.search(i[s]) ? !1 : s + 1 === i.length - 1 && -1 !== t.search(i.pop()) ? (e.eraseCookie(n), !0) : (e.eraseCookie(n), !1)) : !1
        }
        e.extend(e, {
            checkTunnel: t
        })
    }(),
    function () {
        function t(e) {
            var t, i = "";
            for (t = 7; t >= 0; t -= 1) i += "0123456789abcdef".charAt(15 & e >> 4 * t);
            return i
        }
        function i(e) {
            var t, i = (e.length + 8 >> 6) + 1,
                n = Array(16 * i);
            for (t = 0; 16 * i > t; t += 1) n[t] = 0;
            for (t = 0; e.length > t; t += 1) n[t >> 2] |= e.charCodeAt(t) << 24 - 8 * (t % 4);
            return n[t >> 2] |= 128 << 24 - 8 * (t % 4), n[16 * i - 1] = 8 * e.length, n
        }
        function n(e, t) {
            var i = (65535 & e) + (65535 & t),
                n = (e >> 16) + (t >> 16) + (i >> 16);
            return n << 16 | 65535 & i
        }
        function s(e, t) {
            return e << t | e >>> 32 - t
        }
        function r(e, t, i, n) {
            return 20 > e ? t & i | ~t & n : 40 > e ? t ^ i ^ n : 60 > e ? t & i | t & n | i & n : t ^ i ^ n
        }
        function o(e) {
            return 20 > e ? 1518500249 : 40 > e ? 1859775393 : 60 > e ? -1894007588 : -899497514
        }
        function a(e) {
            var a, l, c, u, h, d, p, f, g = i(e),
                m = Array(80),
                v = 1732584193,
                y = -271733879,
                b = -1732584194,
                w = 271733878,
                C = -1009589776;
            for (p = 0; g.length > p; p += 16) {
                for (a = v, l = y, c = b, u = w, h = C, f = 0; 80 > f; f += 1) m[f] = 16 > f ? g[p + f] : s(m[f - 3] ^ m[f - 8] ^ m[f - 14] ^ m[f - 16], 1), d = n(n(s(v, 5), r(f, y, b, w)), n(n(C, m[f]), o(f))), C = w, w = b, b = s(y, 30), y = v, v = d;
                v = n(v, a), y = n(y, l), b = n(b, c), w = n(w, u), C = n(C, h)
            }
            return t(v) + t(y) + t(b) + t(w) + t(C)
        }
        e.extend(e, {
            sha1: a
        })
    }(),
    function () {
        function t(t, i) {
            i || (i = location);
            var n = t.cookieName || "oo_abandon",
                s = e.readCookie(n),
                r = t.startPage,
                o = t.endPage,
                a = t.middle;
            return s ? -1 !== i.pathname.indexOf(o) ? (e.eraseCookie(n), !1) : -1 !== i.pathname.search(a) ? !1 : (e.eraseCookie(n), !0) : (-1 !== i.pathname.indexOf(r) && e.createCookie(n), !1)
        }
        e.extend(e, {
            checkAbandonment: t
        })
    }(),
    function () {
        function t(t) {
            var i, n;
            for (i = t.length - 1; i >= 0; i -= 1) if (t[i].read) {
                if (n = e.readCookie(t[i].name), n && n === t[i].value) return !0;
                if (t[i].value === void 0 && e.readCookie(t[i].name)) return !0
            }
            return !1
        }
        function i(t) {
            var i;
            for (i = t.length - 1; i >= 0; i -= 1) t[i].set && e.createCookie(t[i].name, t[i].value, t[i].expiration)
        }
        e.extend(e, {
            checkThirdPartyCookies: t,
            setThirdPartyCookies: i
        })
    }(), e.extend(Function.prototype, function () {
        function e(e, t) {
            for (var i = e.length, n = t.length; n;) n -= 1, e[i + n] = t[n];
            return e
        }
        function t(t, i) {
            return t = n.call(t, 0), e(t, i)
        }
        function i(e) {
            if (2 > arguments.length && e === void 0) return this;
            var i = this,
                s = n.call(arguments, 1);
            return function () {
                var n = t(s, arguments);
                return i.apply(e, n)
            }
        }
        if (void 0 === Function.prototype.bind) {
            var n = Array.prototype.slice;
            return {
                bind: i
            }
        }
    }()),
    function () {
        function t(e) {
            e || (e = location);
            var t;
            if (-1 !== e.host.search(/\.[a-z]+/)) {
                if (t = e.host.split(".").reverse(), t.length > 3) return e.host;
                t = "." + t[1] + "." + t[0]
            } else t = e.host;
            return t
        }
        function i(e, i, n) {
            var s = "",
                r = "";
            n && (s = new Date, s.setTime(s.getTime() + 1e3 * n), r = "; expires=" + s.toGMTString()), document.cookie = location.host !== t() ? e + "=" + i + r + "; path=/; domain=" + t() + ";" : e + "=" + i + r + "; path=/;"
        }
        function n(e) {
            var t, i, n = e + "=",
                s = document.cookie.split(";");
            for (i = 0; s.length > i; i += 1) {
                for (t = s[i];
                " " === t.charAt(0);) t = t.substring(1, t.length);
                if (0 === t.indexOf(n)) return t.substring(n.length, t.length)
            }
            return null
        }
        function s(e) {
            i(e, "", -1)
        }
        e.extend(e, {
            getCookieDomain: t,
            createCookie: i,
            readCookie: n,
            eraseCookie: s
        })
    }(), e.Ocode = function (t) {
        var i, n = e.Browser;
        t.disableMobile && n.isMobile || t.disableNoniOS && (-1 !== navigator.userAgent.search("Android") || n.PalmPre || n.IEMobile || n.OperaMobile || n.Fennec) || (e.instanceCount += 1, this.options = {
            tealeafCookieName: "TLTSID"
        }, e.extend(this.options, t), i = this.options, i.metrics = e.createMetrics(), this.frameName = i.onPageCard ? "OnlineOpinion" + e.instanceCount : "OnlineOpinion", i.cookie && e.Ocode.matchUrl(i.cookie, location) || i.thirdPartyCookies && e.checkThirdPartyCookies(i.thirdPartyCookies) || (!i.abandonment || e.checkAbandonment(i.abandonment)) && (!i.tunnel || e.checkTunnel(location.pathname, i.tunnel.path, i.tunnel.cookieName)) && (i.events && i.events.onSingleClick && (this.singProbability = 1 - i.events.onSingleClick / 100 > Math.random()), i.tealeafId = e.readCookie(i.tealeafCookieName) || e.readCookie(i.sessionCookieName), i.events && (this.setupEvents(), (i.events.disableLinks || i.events.disableFormElements) && this.setupDisableElements()), i.floating ? this.floating() : i.bar ? this.bar() : i.tab && this.tab()))
    }, e.Ocode.prototype = {
        show: function (t, i) {
            if ("Tab" === t && i && i.preventDefault && i.preventDefault(), !this.onPageCardVisible) {
                var n, s = this.options;
                if (s.events && s.events.prompt && (s.cookie && e.eraseCookie(s.cookie.name || "oo_r"), e.hidePrompt()), !(this.interruptShow || !this.floatingLogo && s.cookie && e.Ocode.matchUrl(s.cookie) || !s.floating && s.events && this.singProbability)) {
                    if (s.events && s.events.onSingleClick && (this.singProbability = !0), s.cookie && e.Ocode.tagUrl(s.cookie), s.thirdPartyCookies) {
                        if (e.checkThirdPartyCookies(s.thirdPartyCookies)) return;
                        e.setThirdPartyCookies(s.thirdPartyCookies)
                    }
                    return this.floatingLogo && this.floatingLogo.children[0].blur(), this.floatingLogo && s.disappearOnClick && (this.floatingLogo.style.display = "none"), t && (s.metrics.trigger = t), s.clickTalePID && "function" == typeof window.ClickTale && (s.clickTaleUID = window.ClickTaleGetUID(), s.clickTaleSID = window.ClickTaleGetSID()), s.onPageCard ? this.setupOnPageCC() : this.launchOOPopup(), n = s.floating || s.tab || s.bar, n && "function" == typeof n.onClickCallback && n.onClickCallback(), e.Browser.IE ? !1 : void 0
                }
            }
        }
    }, e.extend(e.Ocode, {
        tagUrl: function (t, i) {
            i || (i = location);
            var n = t.name || "oo_r",
                s = "page" === t.type ? i.href : i.hostname,
                r = e.readCookie(n) || "";
            e.Ocode.matchUrl(t, i) || e.createCookie(n, r + e.sha1(s), t.expiration)
        },
        matchUrl: function (t, i) {
            i || (i = location);
            var n, s = e.readCookie(t.name || "oo_r");
            return s ? (n = "page" === t.type ? i.href : i.hostname, -1 !== s.search(e.sha1(n))) : !1
        }
    }),
    function () {
        function t() {
            var t, i, n = this.options,
                s = n.newWindowSize || [545, 325],
                r = [parseInt((n.metrics.height - s[1]) / 2, 10), parseInt((n.metrics.width - s[0]) / 2, 10)],
                o = "location=no,status=no,width=" + s[0] + ",height=" + s[1] + ",top=" + r[0] + ",left=" + r[1],
                a = e.Browser.IE && -1 !== navigator.userAgent.search("MSIE 7");
            n.metrics.time2 = (new Date).getTime(), n.metrics.type = "Popup", n.asm && (o += ",scrollbars=1"), t = e.appendOOForm(n), i = window.open(a ? n.commentCardUrl || "https://secure.opinionlab.com/ccc01/comment_card_d.asp?" + t.children[0].value : "", "OnlineOpinion", o), i && !a && t.submit()
        }
        e.extend(e.Ocode.prototype, {
            launchOOPopup: t
        })
    }(),
    function () {
        function t() {
            var t, i, n, s, r = this.options.events,
                o = [!1, !1],
                a = ["onExit", "onEntry"],
                l = e.Browser.Opera ? "unload" : "beforeunload";
            for (r.prompt && e.extend(this.options, {
                promptMarkup: r.prompt.promptMarkup || "oo_event_prompt.html",
                neverShowAgainButton: !1,
                pathToAssets: r.prompt.pathToAssets
            }), i = a.length - 1; i >= 0; i -= 1) if (t = a[i], r[t] instanceof Array) for (n = r[t], s = n.length; s && !o[i];) s -= 1, -1 !== window.location.href.search(n[s].url) && Math.random() >= 1 - n[s].p / 100 && (o[i] = !0);
            else r[t] && Math.random() >= 1 - r[t] / 100 && (o[i] = !0);
            o[0] && e.addEventListener(window, l, this.show.bind(this, "onExit"), !1), o[1] && (r.delayEntry ? window.setTimeout(function () {
                r.prompt ? this.getPrompt() : this.show()
            }.bind(this, "onEntry"), 1e3 * r.delayEntry) : r.prompt ? this.getPrompt() : this.show("onEntry"))
        }
        function i(e) {
            for (var t = (e || window.event, e.target || e.srcElement), i = this.options.events, n = t.parentNode, s = 5, r = 0; n && ("A" !== t.nodeName || "INPUT" !== t.nodeName) && r !== s;) "A" === n.nodeName && (t = n), n = n.parentNode, r += 1;
            !i.disableFormElements || "INPUT" !== t.tagName || "submit" !== t.type && "image" !== t.type || (this.interruptShow = !0), i.disableLinks && "A" === t.nodeName && "http" === t.href.substr(0, 4) && -1 !== t.href.search(i.disableLinks) && (this.interruptShow = !0)
        }
        function n() {
            this.interruptShow = !0
        }
        function s() {
            if (e.addEventListener(document.body, "mousedown", i.bind(this)), this.options.events.disableFormElements) {
                var t, s = document.getElementsByTagName("form");
                for (t = s.length - 1; t >= 0; t -= 1) e.addEventListener(s[t], "submit", n.bind(this))
            }
        }
        e.extend(e.Ocode.prototype, {
            setupEvents: t,
            setupDisableElements: s,
            getPrompt: function () {
                e.getPrompt.call(this)
            },
            showPrompt: function (t) {
                this.options.cookie && e.Ocode.tagUrl(this.options.cookie), e.showPrompt.call(this, t, this.show)
            }
        })
    }(), e.extend(e.Ocode.prototype, {
        floating: function () {
            function t(e) {
                return e.offsetLeft + e.offsetWidth
            }
            function i() {
                a.style.left = t(b) + "px"
            }
            function n() {
                var e = d.documentElement.scrollTop || d.body.scrollTop,
                    t = d.documentElement.clientHeight || document.body.clientHeight;
                p.style.top = e + t - (u || 0) - 10 + "px"
            }
            var s, r, o, a, l, c, u, h, d = document,
                p = this.floatingLogo = document.createElement("div"),
                f = d.createElement("div"),
                g = d.createElement("div"),
                m = d.createElement("div"),
                v = d.createElement("span"),
                y = this.options.floating,
                b = e.$(y.contentId),
                w = "10px",
                C = y.id,
                k = d.createElement("span");
            if (k.innerHTML = "Screen reader users: Please switch to forms mode for this link.", k.className = "screenReader", C && (p.id = C), p.className = "oo_feedback_float", g.className = "oo_transparent", f.className = "olUp", m.className = "olOver", f.tabIndex = 0, f.onkeyup = function (e) {
                s = e || window.event, 13 === s.keyCode && this.show()
            }.bind(this), f.innerHTML = y.caption || "Feedback", p.appendChild(k), p.appendChild(f), v.innerHTML = y.hoverCaption || "Click here to<br>rate this page", m.appendChild(v), p.appendChild(m), p.appendChild(g), e.Browser.MobileSafari ? -1 !== e.Browser.ua.search("OS 4") && (r = window.innerHeight, p.style.bottom = null, p.style.top = window.pageYOffset + window.innerHeight - 60 + "px", h = function () {
                o = window.pageYOffset - (r - window.innerHeight), p.style.webkitTransform = "translateY(" + o + "px)"
            }, e.addEventListener(window, "scroll", h, !1), setTimeout(h, 100)) : e.POSITION_FIXED_SUPPORTED || (p.style.position = "absolute", p.style.bottom = "", e.addEventListener(window, "scroll", n, !1), e.addEventListener(window, "resize", n, !1), "BackCompat" === d.compatMode && (p.style.background = "white")), y.position && y.position.search(/Content/) && b) {
                switch (a = this.spacer = d.createElement("div"), l = e.Browser.WebKit ? d.body : d.documentElement, a.id = "oo_feedback_fl_spacer", a.style.left = t(b) + "px", d.body.appendChild(a), y.position) {
                    case "rightOfContent":
                        c = function () {
                            p.style.left = t(b) - l.scrollLeft + "px", e.POSITION_FIXED_SUPPORTED || (c = null)
                        };
                        break;
                    case "fixedPreserveContent":
                        c = function () {
                            var i = e.Browser.IE ? d.body.clientWidth : window.innerWidth,
                                n = e.POSITION_FIXED_SUPPORTED ? l.scrollLeft : 0;
                            t(b) + p.offsetWidth + parseInt(w, 10) >= i ? p.style.left = t(b) - n + "px" : (p.style.left = "", p.style.right = w)
                        };
                        break;
                    case "fixedContentMax":
                        c = function (i) {
                            var n = e.Browser.IE ? d.body.clientWidth : window.innerWidth;
                            t(b) + p.offsetWidth + parseInt(w, 10) >= n ? (p.style.left = "", p.style.right = w, !e.POSITION_FIXED_SUPPORTED && i && "scroll" === i.type && (p.style.left = d.body.clientWidth + d.body.scrollLeft - 105 + "px")) : (p.style.left = t(b) - l.scrollLeft + "px", p.style.right = "")
                        }
                }
                window.setTimeout(c, 0), e.addEventListener(window, "scroll", c, !1), e.addEventListener(window, "resize", c, !1), e.addEventListener(window, "resize", i, !1)
            } else p.style.right = w;
            e.addEventListener(p, "click", this.show.bind(this, "Floating"), !1), e.addEventListener(p, "touchstart", this.show.bind(this, "Floating"), !1), d.body.appendChild(p), e.POSITION_FIXED_SUPPORTED || e.Browser.MobileSafari || (g.style.height = p.clientHeight + "px", u = p.clientHeight, setTimeout(n, 100))
        },
        removeFloatingLogo: function () {
            document.body.removeChild(this.floatingLogo), this.spacer && document.body.removeChild(this.spacer)
        }
    }), e.extend(e.Ocode.prototype, {
        bar: function () {
            function t(e) {
                var t = 0,
                    i = 0;
                if (e.offsetParent) {
                    do i += e.offsetLeft, t += e.offsetTop;
                    while (e = e.offsetParent);
                    return [i, t]
                }
            }
            function i() {
                var e, i = document.activeElement;
                i && (e = t(i), e && e[1] + i.clientHeight > (window.innerHeight || document.body.clientHeight) + (window.pageYOffset || document.body.scrollTop) - a.clientHeight && window.scrollBy(0, i.clientHeight + 20))
            }
            var n, s, r, o = document,
                a = this.floatingLogo = o.createElement("div"),
                l = o.createElement("span");
            o.documentElement.scrollTop || o.body.scrollTop, this.reflowBar = e.K, a.id = "oo_bar", l.innerHTML = this.options.bar.caption || "Feedback", a.appendChild(l), a.tabIndex = 0, a.onkeyup = function (e) {
                var t = e || window.event;
                13 === t.keyCode && this.show()
            }.bind(this), e.addEventListener(a, "click", this.show.bind(this, "Bar")), document.body.className += 1 > document.body.className ? "oo_bar" : " oo_bar", document.body.appendChild(a), e.Browser.IE ? (n = "CSS1Compat" === o.compatMode ? function (e) {
                e && "resize" === e.type && setTimeout(n, 50), a.style.top = o.documentElement.scrollTop + document.documentElement.clientHeight - a.clientHeight - 1 + "px", a.style.width = Math.max(o.documentElement.clientWidth, o.body.offsetWidth) + "px"
            } : function () {
                a.style.top = o.body.scrollTop + document.body.clientHeight - a.clientHeight - 1 + "px", a.style.width = Math.max(o.documentElement.clientWidth, o.body.offsetWidth) - 22 + "px"
            }, a.style.position = "absolute", e.addEventListener(window, "scroll", n, !1), e.addEventListener(window, "resize", n, !1), this.reflowBar = function () {
                a.style.display = "none", n(), a.style.display = "block"
            }, n()) : e.Browser.MobileSafari && -1 !== e.Browser.ua.search("OS 4") && (s = window.innerHeight, a.style.bottom = null, a.style.top = window.pageYOffset + window.innerHeight - 22 + "px", n = function () {
                r = window.pageYOffset - (s - window.innerHeight), a.style.webkitTransform = "translateY(" + r + "px)"
            }, e.addEventListener(window, "scroll", n, !1), setTimeout(n, 100)), e.addEventListener(document.body, "keyup", i, !1)
        }
    }), e.extend(e.Ocode.prototype, {
        tab: function () {
            function t() {
                var e = n.documentElement.scrollTop || n.body.scrollTop,
                    t = n.documentElement.scrollLeft || n.body.scrollLeft,
                    i = n.documentElement.clientHeight || document.body.clientHeight;
                s.style.top = e + (i / 2 - s.clientHeight / 2) + "px", a.position && "right" !== a.position || (s.style.right = -1 * t + 2 + "px")
            }
            function i() {
                s.style.top = window.pageYOffset + (window.innerHeight / 2 - s.clientHeight / 2) + "px", s.style.right = document.documentElement.clientWidth - window.innerWidth - window.pageXOffset - 15 + "px"
            }
            var n = document,
                s = this.floatingLogo = n.createElement("div"),
                r = n.createElement("div"),
                o = n.createElement("span"),
                a = this.options.tab;
            s.id = "oo_tab", s.className = "oo_tab_" + (a.position || "right"), e.POSITION_FIXED_SUPPORTED || e.Browser.MobileSafari || (s.style.position = "absolute", a.position && "right" !== a.position || !e.Browser.IE || (s.className += " oo_tab_ie_right", -1 === e.Browser.ua.search("IE 6") && (e.addEventListener(window, "scroll", t, !1), e.addEventListener(window, "resize", t, !1)))), s.tabIndex = 0, s.onkeyup = function (e) {
                var t = e || window.event;
                13 === t.keyCode && this.show()
            }.bind(this), r.appendChild(o), s.appendChild(r), e.addEventListener(s, "click", this.show.bind(this, "Tab"), !1), n.body.appendChild(s), e.Browser.MobileSafari && -1 !== e.Browser.ua.search("OS 4") && (s.style.position = "absolute", e.addEventListener(window, "scroll", i, !1), setTimeout(i, 100))
        }
    }), e.extend(e.Ocode.prototype, {
        setupOnPageCC: function () {
            function t(t) {
                return t && t.preventDefault && t.preventDefault(), document.body.focus(), f.tabIndex = -1, f.title = "empty", f["aria-hidden"] = "true", l.style.display = "none", l.className = "", a.body.removeChild(c), window.postMessage ? e.removeEventListener(window, "message", s) : window.clearInterval(n), y = !1, b.onPageCardVisible = !1, !1
            }
            var i, n, s, r, o, a = document,
                l = e.Cache.overlay || a.createElement("div"),
                c = this.wrapper = a.createElement("div"),
                u = a.createElement("div"),
                h = a.createElement("div"),
                d = a.createElement("span"),
                p = this.frameName,
                f = a.createElement(e.DYNAMIC_FRAME_NAME_IS_BUGGY ? '<iframe name="' + p + '">' : "iframe"),
                g = a.createDocumentFragment(),
                m = this.options,
                v = m.onPageCard,
                y = !1,
                b = this;
            s = e.Ocode.postMessageHandler(function (i) {
                var n, s, r = parseInt(i, 10);
                if (r > 0) {
                    if (y) return;
                    y = !0, n = window.innerHeight || a.documentElement.clientHeight || a.body.clientHeight, s = r, o = c.offsetTop, s + o > n && (s = n - 40 - o, f.style.width = "555px"), f.style.height = s + "px", c.style.visibility = "visible", 20 > d.clientHeight && (d.style.height = c.offsetHeight + "px"), l.className = "no_loading", b.onPageCardVisible = !0
                } else "submitted" === i && t();
                e.Browser.IE && "BackCompat" === a.compatMode && window.scrollTo(0, 0)
            }, b.options.commentCardUrl), m.metrics.type = "OnPage", e.Cache.overlay = l, l.id = "oo_overlay", l.style.display = "block", l.className = "", h.className = "iwrapper", c.className = "oo_cc_wrapper", u.className = "oo_cc_close", u.innerHTML = "X", u.title = "Click to close comment card", c.style.visibility = "hidden", u.tabIndex = 0, u.onkeyup = function (e) {
                var i = e || window.event;
                13 === i.keyCode && t()
            }, e.Browser.IE && (f.frameBorder = "0", window.XMLHttpRequest && "BackCompat" !== a.compatMode || (r = Math.max(a.documentElement.clientWidth, a.body.offsetWidth), l.style.position = "absolute", l.style.width = "BackCompat" === a.compatMode ? r - 21 + "px" : r + "px", l.style.height = Math.max(a.documentElement.clientHeight, a.body.offsetHeight) + "px", c.style.position = "absolute", e.addEventListener(window, "scroll", function () {
                l.style.top = a.body.scrollTop + document.body.clientHeight - l.clientHeight + "px", c.style.top = a.body.scrollTop + o + 25 + "px"
            }))), e.addEventListener(u, "click", t), v.closeWithOverlay && !e.Browser.isMobile && (c.appendChild(d), d.onclick = t, l.onclick = t), f.src = " ", f.name = p, h.appendChild(u), h.appendChild(f), c.appendChild(h), g.appendChild(c), g.appendChild(l), a.body.appendChild(g), window.postMessage ? e.addEventListener(window, "message", s) : n = setInterval(s, 500), m.metrics.time2 = (new Date).getTime(), i = e.appendOOForm(m, p), i.submit()
        }
    }), e.extend(e.Ocode, {
        postMessageHandler: function (e, t, i) {
            return function (n) {
                var s, r = "https://secure.opinionlab.com";
                return i || (i = location), n && n.origin !== r && 0 === n.origin.indexOf(t) || !n && -1 === i.hash.search("OL=") ? !1 : (s = n ? n.data : i.hash.split("=").pop(), !n && location.hash && (location.hash = ""), e(s), s)
            }
        }
    }), e.Invitation = function (t) {
        if (!e.Browser.isMobile) {
            this.options = {
                tunnelCookie: "oo_inv_tunnel",
                repromptTime: 604800,
                responseRate: 50,
                repromptCookie: "oo_inv_reprompt",
                promptMarkup: "oo_inv_prompt.html",
                promptStyles: "oo_inverstitial_style.css",
                percentageCookie: "oo_inv_percent",
                pagesHitCookie: "oo_inv_hit",
                popupType: "popunder",
                promptDelay: 0,
                neverShowAgainButton: !1,
                loadPopupInBackground: !1,
                tealeafCookieName: "TLTSID",
                monitorWindow: "oo_inv_monitor.html",
                beforePrompt: e.K
            }, this.popupShown = !1, e.extend(this.options, t);
            var i = this.options,
                n = parseInt(e.readCookie(i.pagesHitCookie), 10) || 0;
            if (e.Invitation.friendlyDomains = i.friendlyDomains || null, -1 !== location.search.search("evs") && (i.loadPopupInBackground = !0, this.launchPopup(), e.createCookie(i.repromptCookie, 1, -1 === i.repromptTime ? 0 : i.repromptTime)), setTimeout(function () {
                window.oo_inv_monitor && (i.area && -1 === location.href.search(i.area) ? (this.options.popupType = "popup", this.launchPopup()) : i.goal && -1 !== location.href.search(i.goal) && window.oo_inv_monitor.close())
            }.bind(this), 1600), !(e.readCookie(i.repromptCookie) || i.thirdPartyCookies && e.checkThirdPartyCookies(i.thirdPartyCookies))) {
                if (e.readCookie(i.percentageCookie) || e.createCookie(i.percentageCookie, Math.random() > 1 - i.responseRate / 100 ? "1" : "0"), i.promptTrigger !== void 0) if (i.promptTrigger instanceof RegExp) {
                    if (!window.location.href.match(i.promptTrigger)) return
                } else if (i.promptTrigger instanceof Array && !e.checkTunnel(location.pathname, i.promptTrigger, i.tunnelCookie)) return;
                n += 1, e.createCookie(i.pagesHitCookie, n), i.pagesHit && i.pagesHit > n || (e.eraseCookie(i.tunnelCookie), "1" === e.readCookie(i.percentageCookie) && window.setTimeout(function () {
                    e.createCookie(i.repromptCookie, 1, i.repromptTime), this.options.beforePrompt(), this.getPrompt()
                }.bind(this), 1e3 * i.promptDelay))
            }
        }
    }, e.Invitation.prototype = {
        getPrompt: function () {
            e.getPrompt.call(this)
        },
        showPrompt: function (t) {
            e.showPrompt.call(this, t, this.launchPopup)
        },
        launchPopup: function () {
            if (!this.popupShown) {
                this.popupShown = !0;
                var t, i, n, s = this.options,
                    r = (window.location.href, "popup" === s.popupType ? "https://secure.opinionlab.com/ccc01/comment_card.asp?" : s.pathToAssets + s.monitorWindow + "?" + (new Date).getTime() + "&"),
                    o = s.asm ? [555, 500] : [400, 335],
                    a = e.createMetrics(),
                    l = e.readCookie(s.tealeafCookieName);
                s.clickTalePID && window.ClickTaleGetUID && window.ClickTaleGetSID && (l += "|" + [s.clickTalePID, window.ClickTaleGetUID(), window.ClickTaleGetSID()].join("/")), o = s.newWindowSize || o, n = "location=no,status=no,width=" + o[0] + ",height=" + o[1], s.referrerRewrite && (a.referer = e.referrerRewrite(s.referrerRewrite)), s.thirdPartyCookies && e.setThirdPartyCookies(s.thirdPartyCookies), t = e.toQueryString(a) + "&type=Invitation", s.customVariables && (t += "&customVars=" + encodeURIComponent(e.serialize(s.customVariables))), t += "&custom_var=" + e.createLegacyVars(s.legacyVariables, l), s.asm && (t += "&asm=2", n += ",scrollbars=1"), i = window.open(r + t, "OnlineOpinionInvitation", n), !s.loadPopupInBackground && e.$("oo_container") && e.hidePrompt(), "popunder" === s.popupType ? e.Browser.Chrome ? (s.loadPopupInBackground || window.alert(s.chromeMainWinPrompt || "Please fill out the form behind this window when you are finished."), s.chromeSurveyPrompt && setTimeout(function () {
                    i.postMessage(s.chromeSurveyPrompt, "*")
                }, 500)) : (i.blur(), window.focus()) : window.oo_inv_monitor && (window.blur(), i.focus())
            }
        },
        killPrompt: function () {
            this.options.clickCallbacks && "function" == typeof this.options.clickCallbacks.no && this.options.clickCallbacks.no(), e.createCookie(this.options.repromptCookie, 1, 15768e4), e.hidePrompt()
        }
    }, e.extend(e.Invitation, {
        navigateToFriendlyDomain: function (e) {
            location.href = e
        }
    }), e
}), define("views/modules/cards2", ["jquery", "underscore", "backbone", "pubsub", "app", "baseappview", "views/pages/home", "views/pages/generic-section", "views/modules/alert", "state", "libs/onlineopinion/oo_engine"], function (e, t, i, n, s, r, o, a, l, c, u) {
    var h = r.extend({
        el: "#cards",
        events: {
            "click .open-sidebar": "openSidebar",
            "click .close-sidebar": "closeSidebar",
            "click .feedback": "openFeedback"
        },
        cards: ["home", "news", "sports", "life", "money", "tech", "travel", "opinion", "weather"],
        cardSizes: [{
            name: "large",
            sidebarAds: !0,
            cardWidth: 1180,
            windowWidth: 1250
        }, {
            name: "medium",
            sidebarAds: !1,
            cardWidth: 1080,
            windowWidth: 1150
        }, {
            name: "small",
            sidebarAds: !1,
            cardWidth: 840,
            windowWidth: 980
        }],
        initialize: function (i) {
            i = e.extend(!0, {
                animations: {
                    horizontal: {
                        duration: 350,
                        easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
                    },
                    vertical: {
                        duration: 400,
                        easing: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
                    },
                    fadeIn: {
                        duration: 200
                    },
                    sidebar: {
                        button: {
                            fadeIn: 200,
                            fadeOut: 200
                        },
                        slide: 250
                    }
                },
                UPDATE_FREQUENCY: 9e5,
                keyboard: !1,
                peekWidth: -100,
                minCardWrapWidth: 904,
                template: '<section class="card-wrap"><section class="card <%= section %> card-loading" data-section-id="<%= section %>" id="section_<%= section %>"><div class="left-suspender size-suspender"><div class="mod clst sections navigation" id="CList-sections"><h1 class="content-list-section-name"><%= section %></h1></div></div><div class="border"><div class="punchout-cover"></div></div></section></section>',
                overlayTemplate: '<section class="card-wrap"><section class="card <%= section %> card-loading" data-section-id="<%= section %>" id="section_<%= section %>"><div class="left-suspender size-suspender"></div><div class="border"></div><div class="size-bar paper-shade"><div class="mod live-feed"></div></div></section></section>'
            }, i), t.bindAll(this), this.$top = s.get("scrollEl"), this.$doc = s.get("doc"), this.$body = s.get("body"), this.$window = s.get("win"), this.$fixedHeader = s.get("headerEl").children(".fixed-wrap"), this.template = t.template(i.template), this.overlayTemplate = t.template(i.overlayTemplate), this.containerOffset = 0, this.pubSub = {
                "pushdown:cards": t.bind(this.adjustTopMargin, this, "615px"),
                "pullup:cards": t.bind(this.adjustTopMargin, this, "0"),
                "sidebar:button:hide": this.hideSidebarOpenButton,
                "sidebar:button:show": this.delayShowSidebarOpenButton,
                "sidebar:hide": this.closeSidebar,
                "sidebar:show": this.openSidebar
            };
            var n = t.throttle(this.handleResizeWindow, 50);
            this.$window.on("resize." + this.cid, n), this.options.keyboard && this.$doc.on("keydown." + this.cid, this.keyNavigation), this.topAdjusted = !1, this.domInitialized = !1, r.prototype.initialize.call(this, i), this.calculateCardDimensions(this.$window.width()), this.isSidebarOpen = !this.isMinCardWidth()
        },
        openFeedback: function () {
            new u.Ocode({}).show()
        },
        destroy: function (e) {
            this.$window.off("." + this.cid), this.$doc.off("." + this.cid), r.prototype.destroy.call(this, e)
        },
        destroyModules: function () {
            this.topAdjusted && this.adjustTopMargin(0), r.prototype.destroyModules.apply(this, arguments)
        },
        animateChangePagePreData: function (e, t) {
            var i = this._getSectionPath(t);
            this.updateNavigation(i);
            var n = this.goTo(i);
            if (!n && this.currentPath !== t) {
                var s = this.createAndInitializeEmptyCard(i);
                s = s.children(".card"), n = this.swapContent(this.$currentCard, s)
            }
            return n
        },
        animateRevealApp: function (t, i, n) {
            var s = this._getSectionPath(i);
            return this.updateNavigation(s), n ? (this.afterOverlayReveal(c.getBreakingNewsOffset()), e.Deferred().resolve()) : r.prototype.animateRevealApp.apply(this, arguments)
        },
        beforePageReveal: function (e, t, i, n) {
            n && i.css("display", "none"), s.set("currentCardPath", t)
        },
        afterPageReveal: function (e, t, i, s) {
            if (this.domInitialized) this.$currentCard = this.$cards.filter("[data-order=0]").children(".card");
            else {
                var r = this._getSectionPath(t);
                this.updateNavigation(r), this.initializeDom()
            }
            this.addSidebar(), i || (this.subviews.view = this._getViewMethod(t, s), this.subviews.view.render(this.currentCardInfo), this.isSidebarOpen && this.onSidebarOpen()), n.trigger("cards:loaded")
        },
        beforeAppRemove: function () {
            e("#nav > ul .text").removeClass("active")
        },
        animateChangePagePostData: function (e, t, i) {
            var n = this.$cards.eq(this.currentIndex),
                s = n.children(".card");
            if (0 === n.children(".ad_container1").length) {
                var r = i.find(".ad_container1");
                n.prepend(r)
            }
            return i.find(".hero.bump").length && s.find(".punchout-cover").addClass("show"), n.css({
                height: "",
                overflow: "",
                "padding-right": ""
            }), i = i.find("section.card-wrap").children(".card"), this.swapContent(s, i)
        },
        getRevealAppLoader: function (t) {
            var i = this._getSectionPath(t);
            this.updateNavigation(i);
            var n = e(this.template({
                section: i
            }));
            return n = e('<div class="card-container"></div>').append(n), n = e('<article id="cards" class="cards"></article>').append(n)
        },
        activateLoader: function () {},
        initializeDom: function () {
            this.$container = this.$(".card-container"), this.$currentCard = this.$container.find(".card"), this.$prevBtn = this.$("#cards-prev-link"), this.$nextBtn = this.$("#cards-next-link"), this.currentId = this.$currentCard.attr("data-section-id") || "home", this.currentIndex = e.inArray(this.currentId, this.cards), this.createCards(), this.domInitialized = !0
        },
        handleResizeWindow: function () {
            if (this.domInitialized) {
                var i = this.$window.width();
                if (this.windowWidth === i) return !1;
                var n = this.currentCardInfo;
                this.calculateCardDimensions(i), this.$cards.each(t.bind(function (t, i) {
                    var n = e(i);
                    this._positionCard(n, n.attr("data-order"))
                }, this)), this.currentCardInfo !== n && (this.resetSidebar(this.isMinCardWidth() || n === this.getMinCardInfo()), this.triggerEvent("onCardWidthChange", this.currentCardInfo))
            }
        },
        calculateCardDimensions: function (e) {
            var i = this.getMinCardInfo();
            i.windowWidth > e && (e = i.windowWidth), this.windowWidth = e;
            var n = i,
                s = (window.matchMedia || Modernizr.mq("only all")) && !this.$top.hasClass("lt-ie9");
            return t.find(this.cardSizes, function (t) {
                if (s) {
                    if (Modernizr.mq("only screen and (min-width: " + t.windowWidth + "px)")) return n = t, !0
                } else if (e >= t.windowWidth) return n = t, !0
            }), this.cardWrapWidth = n.cardWidth + ((e - 2 * this.options.peekWidth - n.cardWidth) / 2 + .5) >> 0, this.options.minCardWrapWidth > this.cardWrapWidth && (this.cardWrapWidth = this.options.minCardWrapWidth), this.leftMargin = (e - n.cardWidth - 2 * this.options.peekWidth) / 2 + this.options.peekWidth + .5 >> 0, this.currentCardInfo = n, n
        },
        createCards: function () {
            var t = this.cards.length,
                i = t / 2 >> 0;
            this.$cards = e([]);
            for (var n = 0, s = this.cards.length; s > n; n++) {
                var r;
                n === this.currentIndex ? (r = this.$currentCard.parent(), r.css({
                    margin: 0
                }), r.attr("data-order", 0), this.$cards.push(r[0])) : (r = this.createAndInitializeEmptyCard(this.cards[n]), r.css({
                    margin: 0
                }), this.$cards.push(r[0]), this.$container.append(r));
                var o = n - this.currentIndex;
                Math.abs(o) > i && (o > 0 ? o -= t : o += t), r.attr("data-order", o), this._positionCard(r, o), -1 === o ? (r.hide().fadeIn(500), this.updateNavLinks(this.$prevBtn, this.cards[n])) : 1 === o && (r.show().fadeIn(500), this.updateNavLinks(this.$nextBtn, this.cards[n]))
            }
        },
        compareTime: function (e, t) {
            var i = (new Date).getTime(),
                n = 1e3 * parseInt(e, 10);
            return i - n > t
        },
        updateNavigation: function (t) {
            var i = e("nav.quick ul li"),
                n = e("#nav > ul .text");
            "" === t && (t = "home"), i.removeClass("active"), i.filter("." + t).addClass("active"), n.removeClass("active"), n.filter("." + t).addClass("active")
        },
        _getViewMethod: function (e, t) {
            var i = this._getSectionPath(e);
            return {
                el: this.$currentCard,
                path: e,
                section: i
            }, t ? new t({
                el: this.$currentCard,
                path: e,
                section: i
            }) : "home" === i ? new o({
                el: this.$currentCard,
                path: e,
                section: i
            }) : new a({
                el: this.$currentCard,
                path: e,
                section: i
            })
        },
        updateNavLinks: function (e, t) {
            t = "home" === t ? "/" : "/" + t + "/", e.attr("href", t)
        },
        reorder: function () {
            for (var e = this.$cards.length, t = e / 2 >> 0, i = 0; e > i; i++) {
                var n = this.$cards.eq(i),
                    s = i - this.currentIndex;
                Math.abs(s) > t && (s > 0 ? s -= e : s += e), n.attr("data-order", s), i === this.currentIndex ? n.css({
                    position: "relative",
                    margin: 0
                }) : (n.css({
                    position: "absolute",
                    bottom: 0,
                    margin: 0
                }), -1 === s ? this.updateNavLinks(this.$prevBtn, this.cards[i]) : 1 === s ? this.updateNavLinks(this.$nextBtn, this.cards[i]) : n.hide())
            }
        },
        keyNavigation: function (e) {
            switch (e.keyCode) {
                case 37:
                    this.previous();
                    break;
                case 39:
                    this.next();
                    break;
                default:
            }
        },
        inBounds: function (e, t) {
            return !isNaN(parseFloat(e, 10)) && isFinite(e) && e >= 0 && t - 1 >= e
        },
        goTo: function (i) {
            var n = e.inArray(i, this.cards);
            if (this.inBounds(n, this.cards.length) && n !== this.currentIndex) {
                var r = s.getScrollPosition();
                if (this.isApple && r > 0) {
                    var o = e.Deferred();
                    return this.$top.animate({
                        scrollTop: 0
                    }, 200).promise().done(t.bind(function () {
                        this._animateCards(n, r).done(function () {
                            o.resolve()
                        })
                    }, this)), o.promise()
                }
                return this._animateCards(n, r)
            }
        },
        _animateCards: function (t, i) {
            var n = this.$window.height(),
                s = this.prepareOffscreenCardsForAnimation(t);
            this.$currentCard.parent().css({
                height: n,
                overflow: "hidden",
                "-webkit-backface-visibility": "hidden",
                "padding-right": "20px"
            }), this.isApple ? this.$fixedHeader.css({
                position: "absolute"
            }) : i > 0 && (this.$top.scrollTop(0), this.$currentCard.css({
                top: -1 * i
            })), this.$cards.eq(t).css({
                height: n,
                overflow: "hidden"
            });
            var r = this.currentIndex;
            this.currentIndex = t;
            var o = this.options.animations.horizontal.duration,
                a = this.options.animations.horizontal.easing;
            this.containerOffset -= s * this.cardWrapWidth;
            var l = this.animate(this.$container, "left", this.containerOffset + "px", o, a);
            return l.done(e.proxy(function () {
                this.isApple && this.$fixedHeader.css({
                    position: ""
                });
                var e = this.createAndInitializeEmptyCard(this.cards[r]);
                e = e.children(".card");
                var i = this.$cards.eq(r);
                i.css({
                    "-webkit-backface-visibility": "",
                    height: ""
                });
                var n = i.children(".card");
                Math.abs(r - t) > 1 ? this.swapContent(n, e, !0) : this.swapContent(n, e), this.reorder()
            }, this)), l
        },
        createAndInitializeEmptyCard: function (t) {
            var i = e(this.template({
                section: t
            }));
            return i.css({
                margin: 0,
                position: "absolute",
                bottom: 0
            }), i
        },
        prepareOffscreenCardsForAnimation: function (e) {
            var t, i, n = this.$cards.eq(e).show(),
                s = parseInt(n.attr("data-order"), 10);
            if (s > 0) if (t = this._getNextCard(s).show(), s > 3) {
                this._positionCard(t, 4), this._positionCard(n, 3);
                var i = this._getPreviousCard(s).show();
                this._positionCard(i, 2);
                var r = s - 1;
                do i = this._getPreviousCard(r).hide(), r--;
                while (r > 2);
                s = 3
            } else this._positionCard(t, s + 1), s > 1 && (i = this._getPreviousCard(s).show(), this._positionCard(i, s - 1));
            else if (i = this._getPreviousCard(s).show(), -3 > s) {
                this._positionCard(i, -4), this._positionCard(n, -3), t = this._getNextCard(s).show(), this._positionCard(t, -2);
                var r = s + 1;
                do t = this._getNextCard(r).hide(), r++;
                while (-2 > r);
                s = -3
            } else this._positionCard(i, s - 1), -1 > s && (t = this._getNextCard(s).show(), this._positionCard(t, s + 1));
            return this._positionCard(n, s), s
        },
        _getNextCard: function (e) {
            var t = this.$cards.filter("[data-order=" + (e + 1) + "]");
            return t.length || (t = this.$cards.filter("[data-order=" + -1 * e + "]")), t
        },
        _getPreviousCard: function (e) {
            var t = this.$cards.filter("[data-order=" + (e - 1) + "]");
            return t.length || (t = this.$cards.filter("[data-order=" + -1 * e + "]")), t
        },
        _positionCard: function (e, t) {
            e.css({
                left: this.leftMargin - this.containerOffset + t * this.cardWrapWidth
            })
        },
        adjustTopMargin: function (e, t) {
            t = t || this.options.animations.vertical.duration, this.topAdjusted = e ? !0 : !1, this.animate(this.$currentCard, "margin-top", e, t).done(function () {
                n.trigger("complete:adjsttopmargin:cards")
            })
        },
        _getSectionPath: function (e) {
            if (e && "/" !== e) {
                var t = e.indexOf("/");
                return -1 === t ? e : e.substring(0, t)
            }
            return "home"
        },
        addSidebar: function () {
            this.sidebar = this.$currentCard.find(".size-bar"), this.sidebarOpenButton = this.$currentCard.find(".open-sidebar"), this.sidebarCloseButton = this.$currentCard.find(".close-sidebar")
        },
        openSidebar: function (e) {
            e && (e.preventDefault(), e.stopPropagation()), this.onSidebarOpen(), this._slideSidebar(this.sidebarOpenButton, !0)
        },
        onSidebarOpen: function () {
            this.subviews.view && this.subviews.view.renderExpanded && this.subviews.view.renderExpanded(this.currentCardInfo), this.isSidebarOpen = !0
        },
        closeSidebar: function (e) {
            e && (e.preventDefault(), e.stopPropagation());
            var t = this._slideSidebar(this.sidebarCloseButton, !1);
            this.onSidebarClose(t)
        },
        onSidebarClose: function (e) {
            this.isSidebarOpen = !1, this.subviews.view && this.subviews.view.destroyExpanded && (e ? e.done(t.bind(function () {
                this.subviews.view.destroyExpanded(!0)
            }, this)) : this.subviews.view.destroyExpanded(!0))
        },
        _slideSidebar: function (t, i) {
            var n = this.options.animations.sidebar.slide,
                s = this.options.animations.sidebar.button.fadeOut,
                r = t.fadeOut(s, "easeInOutCubic").promise();
            this.registerAnimation(r);
            var o = parseInt(this.sidebar.css("width"), 10),
                a = null;
            if (this.isMinCardWidth()) a = this.animate(this.sidebar, "right", -o + "px", n, "ease-in-out");
            else {
                var l = i ? this.currentCardInfo : this.getMinCardInfo();
                this.sidebar.removeClass("top"), a = this.animate(this.$currentCard, "width", l.cardWidth, n, "ease-in-out")
            }
            var c = e.Deferred();
            return a.done(e.proxy(function () {
                var e = this.animate(this.sidebar, "right", 0, n, "ease-in-out");
                i ? this.isMinCardWidth() ? (this.sidebar.addClass("top"), e.done(this.showSidebarCloseButton)) : (this.sidebar.removeClass("top"), this.$currentCard.css("width", "")) : (e.done(this.showSidebarOpenButton), this.sidebar.removeClass("top")), e.done(function () {
                    c.resolve()
                })
            }, this)), c.promise()
        },
        isMinCardWidth: function () {
            return this.currentCardInfo === this.getMinCardInfo()
        },
        getMinCardInfo: function () {
            return this.cardSizes[this.cardSizes.length - 1]
        },
        resetSidebar: function (e) {
            this.$currentCard.css("width", ""), this.sidebar.removeClass("top"), this.isMinCardWidth() ? (this.sidebarOpenButton.show(), this.sidebarCloseButton.hide(), e && this.onSidebarClose()) : (this.sidebarOpenButton.hide(), this.sidebarCloseButton.show(), e && this.onSidebarOpen())
        },
        showSidebarOpenButton: function (e) {
            return this.adVisible && !e ? !1 : (this.sidebarOpenButton.css({
                visibility: "visible",
                display: "none"
            }), this.sidebarOpenButton.fadeIn(this.options.animations.sidebar.button.fadeIn, "easeInOutCubic"), e && (this.adVisible = !1), void 0)
        },
        showSidebarCloseButton: function () {
            this.sidebarCloseButton.fadeIn(this.options.animations.sidebar.button.fadeIn, "easeInOutCubic")
        },
        delayShowSidebarOpenButton: function (e) {
            t.delay(t.bind(function () {
                this.isMinCardWidth() && this.showSidebarOpenButton(e)
            }, this), 1e3)
        },
        hideSidebarOpenButton: function (e) {
            e && (this.adVisible = !0), this.sidebarOpenButton.fadeOut(this.options.animations.sidebar.button.fadeOut, "easeInOutCubic")
        },
        afterOverlayReveal: function (e) {
            this.$el.hide();
            var t = c.getActiveApp().$el,
                i = this._getSectionPath(this.currentPath),
                n = '<div id="cards-offset-placeholder" style="top:' + e + 'px;"></div>',
                s = this.overlayTemplate({
                    section: i
                });
            t.append(n + s)
        },
        beforeOverlayRemove: function () {
            this.$el.show();
            var e = c.getActiveApp().$el;
            e.find("#cards-offset-placeholder").css("display", "none"), e.find(".card-wrap").css("display", "none")
        }
    });
    return h
}), define("views/pages/404", ["jquery", "underscore", "backbone", "baseappview", "state", "pubsub", "views/pages/static-overlay", "views/modules/footer", "views/modules/cards2"], function (e, t, i, n, s, r, o) {
    var a = o.extend({
        initialize: function (e) {
            o.prototype.initialize.call(this, e), this.options.ajax && (this.render(this.options.htmlFrag), s.registerFullScreenView(this), this.afterPageReveal())
        },
        afterPageReveal: function () {
            o.prototype.afterPageReveal.apply(this, arguments)
        },
        close: function (e) {
            return e && e.target !== e.currentTarget ? void 0 : (this.options.ajax ? (s.clearFullScreenView(this), this.destroy(!0)) : s.navigateToPreloadedUrl(), !1)
        }
    });
    return a
}), define("fwinfo", ["jquery", "underscore", "backbone", "pubsub"], function (e, t, i, n) {
    function s() {
        if (!l && (l = {}, document.cookie.match(/\bfwutil=([^\;]*)/))) {
            var e, t, i, n = RegExp.$1.split(o),
                s = n.length;
            for (e = 0; s > e; e++) t = n[e].split(a), i = t.length, 2 == i && (l[t[0]] = decodeURIComponent(t[1]))
        }
    }
    function r() {
        var e, t = "fwutil=",
            i = "";
        for (e in l) l.hasOwnProperty(e) && (t += i + e + a + encodeURIComponent(l[e]), i = o);
        document.cookie = t + ";path=/"
    }
    var o = "~",
        a = ":",
        l = null,
        c = new(i.Model.extend({
            interactiveTracker: function (e) {
                this.firstClick = !1, this.track = function (t) {
                    0 == this.firstClick && (n.trigger("uotrack", e), this.firstClick = !0), n.trigger("uotrack", t)
                }
            },
            getuseruniqueid: function () {
                return ""
            },
            setsessionvalue: function (e, t) {
                l || s(), l[e] = t, r()
            },
            getsessionvalue: function (e) {
                return l || s(), l[e]
            },
            getandclearsessionvalue: function (e) {
                var t = c.getsessionvalue(e);
                return t ? (c.setsessionvalue(e, ""), t) : null
            }
        }));
    return c
}), define("facebook", ["jquery", "underscore", "pubsub", "fwinfo", "app"], function (e, t, i, n, s) {
    function r() {
        require(["//connect.facebook.net/en_US/all.js"], function () {
            v || (FB.init({
                appId: d,
                channelUrl: p,
                status: !0,
                cookie: !0,
                xfbml: !1
            }), FB.Event.subscribe("auth.authResponseChange", function (e) {
                f = e, i.trigger("auth.authResponseChange", e)
            }), v = !0), w.resolve(FB)
        })
    }
    function o(e) {
        k.getFB(function () {
            "connected" == e.status && null != e.authResponse ? l(e.authResponse) : a(e.authResponse)
        })
    }
    function a() {
        k.getFB(function () {
            f = void 0, g = {}, n.setsessionvalue("uniqueid", ""), C.hasClass("fbauth") && C.removeClass("fbauth"), c()
        })
    }
    function l(t) {
        k.getFB(function () {
            f = t, C.hasClass("fbauth") || C.addClass("fbauth"), FB.api({
                method: "fql.query",
                query: "SELECT name, pic_square FROM user WHERE uid= " + t.userID
            }, function (e) {
                g.name = e[0].name, g.photoSmall = e[0].pic_square, i.trigger("auth:user", e[0])
            }), y || (e.ajax({
                url: "/facebook/tokens/" + t.accessToken,
                type: "POST",
                data: {
                    accessExpires: t.expiresIn,
                    accessToken: t.accessToken,
                    userID: t.userID
                },
                success: function (e) {
                    n.setsessionvalue("uniqueid", e.success.UserUniqueId)
                },
                error: function () {}
            }), y = !0), "/userauth/default/" == document.location.pathname.toLowerCase() && (console.log("user auth'd! about to go back!"), history.back())
        })
    }
    function c() {
        var t = g.photoSmall || "",
            i = g.name || "";
        k.getFB(function () {
            e(".fb-avatar").attr({
                src: t,
                height: 22,
                width: 22
            }), e(".fb-display-name").text(i)
        })
    }
    function u() {
        k.getFB(function () {
            FB.getLoginStatus(function (e) {
                o(e)
            }, !0), b || (i.off("page:load", u), b = !0)
        })
    }
    var h = site_config.AUTH.FACEBOOK,
        d = h.APPID,
        p = h.CHANNELURL,
        f = void 0,
        g = {}, m = h.PERMISSIONS,
        v = !1,
        y = !1,
        b = !1,
        w = e.Deferred(),
        C = s.get("body");
    i.on("auth.authResponseChange", o), i.on("auth:user", c), i.on("page:load", u);
    var k = {
        getFB: function (e) {
            return w.then(e), r(), w.promise()
        },
        init: function () {},
        login: function (e) {
            this.getFB(function () {
                FB.login(e, {
                    scope: m
                })
            })
        },
        logout: function () {
            this.getFB(function () {
                n.setsessionvalue("uniqueid", ""), FB.logout(function () {})
            })
        },
        parse: function () {
            this.getFB(function () {
                FB.XFBML.parse()
            })
        },
        permissions: function () {
            return m
        },
        status: function () {
            return t.isUndefined(f) ? !1 : f.status
        }
    };
    return t.extend(k, Backbone.Events), k
}), define("views/modules/weather/weather-autocomplete", ["jquery", "underscore", "app", "views/modules/autocomplete", "state"], function (e, t, i, n, s) {
    var r = n.extend({
        initialize: function () {
            n.prototype.initialize.apply(this, arguments), this.defaultLocation = e.cookie("weatherLocation", {
                path: "/"
            }), this.$field.data("placeholder", e.cookie("weatherLocation", {
                path: "/"
            })), this.$field.val(this.defaultLocation)
        },
        fetchData: function () {
            this.clearResults(), this.$error.empty();
            var i = this.$field.val(),
                n = t.bind(function (n) {
                    if (this.fetch = null, null !== n[0]) this.$autoComplete.show(), n = n.splice(0, this.maxResults), e.map(n, t.bind(function (t) {
                        var i = e("<li>").html(t.City + ", " + t.State);
                        this.$autoComplete.append(i)
                    }, this));
                    else if (/^\d{5}$/.test(i)) return this.$field.val(i), void 0
                }, this);
            this.fetch && this.fetch.abort(), this.fetch = s.fetchData(this.url + i).done(n)
        },
        onSelectResult: function (e) {
            e.preventDefault(), n.prototype.onSelectResult.call(this, e), this.$field.closest("form").submit()
        },
        onEnter: function () {
            this.$field.closest("form").submit()
        }
    });
    return r
}), define("views/modules/weather/weather-dropdown", ["jquery", "underscore", "backbone", "baseview", "pubsub", "app", "state", "views/modules/form", "views/modules/weather/weather-autocomplete", "easing", "animatecolors", "cookie"], function (e, t, i, n, s, r, o, a, l) {
    var c = n.extend({
        el: "#navbar .weather",
        events: {
            hover: "onHoverWeatherNav",
            "click .settings-btn": "showSettingsPanel",
            "click .cancel-x": "hideSettingsPanel",
            "click .cancel-btn": "hideSettingsPanel",
            "click .submit": "onClickSubmitLocation",
            "submit #weather-dropdown-form": "onSubmitLocationForm",
            "focus #weather-dropdown-form .query": "onFocusLocationField",
            "blur #weather-dropdown-form .query": "onBlurLocationField",
            "click .full-forecast": "closeDropdown"
        },
        initialize: function (i) {
            t.bindAll(this, "refreshData", "openDropdown", "closeDropdown"), i = e.extend({
                hoverDelay: 300
            }, i), this.dropdown = this.$(".dropdown"), this.panels = this.$(".dropdown-panel"), this.navBtnTemp = this.$(".btn-temp"), this.frontPanel = this.panels.find(".front-panel"), this.frontWeatherLocation = this.frontPanel.find(".location.heading"), this.frontWeatherIcon = this.frontPanel.find(".drop-icon"), this.settingsPanel = this.panels.find(".settings-panel"), this.locationField = this.settingsPanel.find("#weather-dropdown-form .query");
            var s = e.cookie("weatherLocation");
            s || (s = "McLean, VA", this.setWeatherCookie(s)), this.locationField.data("placeholder", s), this.body = r.get("body"), this.weatherDataRefresh = setInterval(this.refreshData, 3e5), n.prototype.initialize.call(this, i)
        },
        render: function () {
            this.refreshData()
        },
        onClickSubmitLocation: function (t) {
            t.preventDefault(), e(t.currentTarget).closest("form").submit()
        },
        onSubmitLocationForm: function (t) {
            t.preventDefault(), this.locationField.blur(), this.locationField.val() !== e.cookie("weatherLocation") && this.updateWeatherLocation(this.locationField.val())
        },
        _setupLocationForm: function () {
            this.subviews.locationForm = new a({
                el: this.$("#weather-dropdown-form")
            }), this.subviews.autocomplete = new l({
                el: this.locationField,
                url: "/services/city/autocomplete/json/",
                max_results: 4
            })
        },
        onHoverWeatherNav: function (e) {
            clearTimeout(this.navBtnHoverDelay), "mouseenter" === e.type ? this.navBtnHoverDelay = t.delay(this.openDropdown, this.options.hoverDelay) : this.locationFieldInFocus || (this.navBtnHoverDelay = t.delay(this.closeDropdown, this.options.hoverDelay))
        },
        closeDropdown: function () {
            this.isSettingsPanelActive ? e.when(this.hideSettingsPanel()).then(this.$el.removeClass("dropdown-active")) : this.$el.removeClass("dropdown-active"), this.body.off("." + this.cid)
        },
        openDropdown: function () {
            this.$el.addClass("dropdown-active")
        },
        showSettingsPanel: function () {
            this.$el.hasClass("settings-active") || (this.$el.addClass("settings-active"), this.isSettingsPanelActive = !0), this.subviews.locationForm || this._setupLocationForm()
        },
        hideSettingsPanel: function () {
            this.locationField.blur(), this.$el.hasClass("settings-active") && (this.$el.removeClass("settings-active"), this.isSettingsPanelActive = !1), ("" !== this.locationField.val() || this.locationField.val() !== this.locationField.data("placeholder")) && this.subviews.locationForm.clearField(this.locationField)
        },
        onFocusLocationField: function () {
            this.locationFieldInFocus = !0, this.body.on("click." + this.cid, t.bind(function (t) {
                0 === e(t.target).closest(this.el).length && this.closeDropdown()
            }, this))
        },
        onBlurLocationField: function () {
            this.locationFieldInFocus = !1
        },
        setWeatherCookie: function (t) {
            e.cookie("weatherLocation", t, {
                path: "/",
                expires: 1825
            })
        },
        updateWeatherLocation: function (e) {
            return e ? this._fetchData(e).done(t.bind(function (e) {
                var t = e[0].local.city + ", " + e[0].local.adminArea.code;
                this.setWeatherCookie(t), this.locationField.data("placeholder", t), this.hideSettingsPanel(), s.trigger("weather:newLocation", e)
            }, this)).fail(t.bind(function (e) {
                this.subviews.autocomplete && this.subviews.autocomplete.displayError(e)
            }, this)) : void 0
        },
        refreshData: function () {
            return this._fetchData(e.cookie("weatherLocation"))
        },
        _fetchData: function (i) {
            return i = i.replace(",", ""), this.isBusyGettingData ? e.Deferred().reject() : (this.isBusyGettingData = !0, e.Deferred(t.bind(function (e) {
                o.fetchData("/services/weather/forecast/json/" + i + "/").done(t.bind(function (t) {
                    t.length && t[0] ? (this._parseData(t), e.resolveWith(this, [t])) : e.rejectWith(this, ["No data is available for this location."]), this.isBusyGettingData = !1
                }, this)).fail(t.bind(function () {
                    e.rejectWith(this, ["There was an error finding this location. Please try again later."]), this.isBusyGettingData = !1
                }, this))
            }, this)))
        },
        _parseData: function (i) {
            if (i[0].currentconditions) {
                var n = i[0],
                    s = n.currentconditions,
                    r = n.local.city + ", " + n.local.adminArea.code,
                    o = "wicon-" + s.weathericon,
                    a = s.temperature;
                this.$("[data-weather]").each(t.bind(function (t, i) {
                    var n = e(i);
                    n.html((s[n.data("weather")] || "") + (n.data("weather-suffix") || ""))
                }, this)), r.length > 20 && this.frontWeatherLocation.addClass("longname"), this.frontWeatherLocation.html(r), a > 99 && this.frontWeatherTemp.addClass("three-digit"), this.navBtnTemp.attr("class", "btn-temp " + o), this.frontWeatherIcon.attr("class", "drop-icon " + o), this.navBtnTemp.addClass(o), this.$el.addClass("has-data")
            }
        },
        destroy: function () {
            this.body.off("." + this.cid), clearInterval(this.weatherDataRefresh), n.prototype.destroy.apply(this, arguments)
        }
    });
    return c
}), define("views/modules/livevideo", ["jquery", "underscore", "backbone", "pubsub", "state", "app", "views/modules/video"], function (e, t, i, n, s, r, o) {
    var a = i.View.extend({
        events: {
            "click #close_modal_link": "close"
        },
        initialize: function () {
            this.m_uiModal = {}, this.m_uiModalBgrnd = {}, this.win = r.get("win")[0], this.body = r.get("body"), s.registerFullScreenView(this), this.win.gannett = {};
            var t = this;
            this.win.gannett.videoplayer_modal = {
                openPopup: function () {
                    var i = "/livevideos/popout/",
                        n = e("#videoplayer_modal .video-title").text(),
                        s = e("#videoplayer_modal .sponsor-text").text(),
                        o = e("#videoplayer_modal .video-logo").attr("src"),
                        a = e("#videoplayer_modal").attr("data-assetid");
                    i += "?videoid=" + a + "&description=" + n + "&sponsor=" + s + "&sourcelogo=" + o, a && (r.openPopup(i, 310, 260), t.close())
                }
            }
        },
        loadLiveVideo: function (t) {
            var i = this;
            s.fetchHtml("/services/livevideos/" + t).done(function (t) {
                i.body.append(t), i.video = new o({
                    el: e("#videoplayer_modal"),
                    autostart: !0
                }), i.m_uiModal = e("#videoplayer_modal"), i.m_uiModalBgrnd = e("#lightbox"), i.m_uiModal.show(), i.m_uiModalBgrnd.fadeIn(300), i.setElement("#videoplayer_modal")
            })
        },
        close: function () {
            if (this.m_uiModal) {
                s.clearFullScreenView();
                var e = this.m_uiModalBgrnd;
                this.destroy(!0), this.m_uiModalBgrnd.fadeOut(300, function () {
                    e.remove()
                }), this.m_uiModal = null, this.m_uiModalBgrnd = null, this.win.gannett = {}
            }
        },
        destroy: function (e) {
            this.video && this.video.destroy(!0), this.undelegateEvents(), e && this.remove()
        }
    });
    return a
}), define("views/modules/header", ["jquery", "underscore", "backbone", "pubsub", "app", "state", "facebook", "views/modules/form", "views/modules/weather/weather-dropdown", "views/modules/livevideo", "easing", "animatecolors", "cookie"], function (e, t, i, n, s, r, o, a, l, c) {
    var u = i.View.extend({
        el: "#header",
        events: {
            "hover #navbar .user": "onHoverUserNav",
            "click .fb-login-btn": "onClickLogin",
            "click .fb-logout-btn": "onClickLogout",
            "click #breaking .headline": "onClickBreakingBtn",
            "click #breaking .button": "onClickBreakingBtn",
            "click #breaking .close-btn": "onClickCloseBreakingBtn",
            "click #nav .search": "onClickNavSearch",
            "click #search-form .cancel": "cancelSearch"
        },
        initialize: function () {
            this.win = s.get("win"), this.body = s.get("body"), this.scrollEl = s.get("scrollEl"), this.fixedWrap = this.$(".fixed-wrap"), this.logo = this.fixedWrap.find(".logo"), this.searchWrap = e("#search-form"), this.nav = s.get("navEl"), this.navSearchBtn = this.nav.find(".search"), this.breaking = s.get("breakingEl"), this.breakingWrap = s.get("breakingWrapEl"), this.navHeight = this.nav.outerHeight(), this.mastheadHeight = 80, this.breakingColors = {
                breaking: {
                    normal: "rgb(247,0,0)",
                    highlight: "rgb(191,49,49)"
                },
                live: {
                    normal: "rgb(0,170,255)",
                    highlight: "rgb(0,145,218)"
                },
                developing: {
                    normal: "rgb(0,170,255)",
                    highlight: "rgb(0,145,218)"
                }
            }, t.bindAll(this), this.preventScrollEvent = !1, this.isMastheadExpanded = !1, this.isSearchResultsOpen = this.body.hasClass("show-search"), this.slideSpeed = 200, s.set("headerSlideSpeed", this.slideSpeed), this.slideEasing = "easeOutCubic", n.on("created:cards", this.shiftSideCards, this), n.on("open:searchResults", this.openSearchResults, this), n.on("close:searchResults", this.closeSearchResults, this), n.on("masthead:expand", this.expandMasthead, this), n.on("masthead:collapse", this.collapseMasthead, this), this.breakingLastUpdateClosed = parseFloat(e.cookie("breakingLastUpdateClosed", {
                path: "/"
            })), this.breakingLastItem = {
                lastUpdate: this.breaking.data("lastupdate"),
                type: this.breaking.data("type"),
                content: this.breaking.find("p").eq(0).text()
            }, setTimeout(this.updateBreakingBar, 1e3), this.breakingNewsPoll = setInterval(this.updateBreakingBar, 91e3), this.weatherDropdown = new l, this.weatherDropdown.render()
        },
        onScrollWindow: function () {
            this.preventScrollEvent || this.isSearchResultsOpen || this.collapseMasthead(!0)
        },
        onClickBreakingBtn: function (t) {
            var i = e(t.currentTarget).attr("href");
            if (i.indexOf("livevideoassetid") > 0) {
                var n = new c;
                return n.loadLiveVideo(i.split("#")[1].split("=")[1]), !1
            }
        },
        onHoverUserNav: function (e) {
            clearTimeout(this.userNavTimer), this.userNavTimer = t.delay(this.toggleUserDropdown, 300, void 0, "mouseenter" === e.type)
        },
        toggleUserDropdown: function (e, t) {
            return this.preventScrollEvent ? void 0 : (this.userNavBtn || (this.userNavBtn = this.nav.find(".user")), this.userNavBtn.toggleClass("active", t), this.userNavBtn.hasClass("active") ? this.win.on("scroll", this.toggleUserDropdown) : this.win.off("scroll", this.toggleUserDropdown), !1)
        },
        onClickNavSearch: function (e) {
            this.isMastheadExpanded && !this.isSearchResultsOpen ? this.collapseMasthead(!0) : this.expandMasthead(!0), e && e.preventDefault()
        },
        onClickCloseBreakingBtn: function () {
            this.closeBreakingBar(!0), n.trigger("uotrack", "breakingnewsbarexit")
        },
        openSearchResults: function () {
            this.isSearchResultsOpen = !0
        },
        cancelSearch: function () {
            this.isSearchResultsOpen && r.navigateToPreloadedUrl(this.originalPath), this.closeSearchResults()
        },
        closeSearchResults: function () {
            this.collapseMasthead(!0), this.isSearchResultsOpen = !1, this.body.removeClass("show-search")
        },
        collapseMasthead: function (e) {
            if (this.isMastheadExpanded) {
                this.isMastheadExpanded = !1;
                var t = {
                    height: "0"
                };
                e ? this.searchWrap.stop().animate(t, this.slideSpeed, this.slideEasing) : this.searchWrap.stop(!1, !0).css(t), this.toggleLogo(e, !1), this.win.off("scroll", this.onScrollWindow)
            }
        },
        expandMasthead: function (e) {
            if (!this.isMastheadExpanded) {
                this.isMastheadExpanded = !0;
                var t = {
                    height: this.mastheadHeight
                }, i = this.$(".text-input"),
                    n = null !== navigator.userAgent.match(/iPad/i);
                e ? this.searchWrap.stop().animate(t, this.slideSpeed, this.slideEasing, function () {
                    i.focus()
                }) : this.searchWrap.stop(!1, !0).css(t), this.toggleLogo(e, !0), this.searchForm || (this.searchForm = new a({
                    el: this.$("#search-form")
                })), n || this.win.on("scroll", this.onScrollWindow)
            }
        },
        toggleLogo: function (e, i) {
            e ? this.logo.stop().fadeOut(150, t.bind(function () {
                this.logo.toggleClass("large", i).fadeIn(150)
            }, this)) : this.logo.stop(!1, !0).toggleClass("large", i)
        },
        shouldHeaderAnimate: function () {
            return 40 >= s.getScrollPosition()
        },
        closeBreakingBar: function (i) {
            n.trigger("breakingbar:before:close", this.navHeight, this.slideSpeed), this.isBreakingBarOpen = !1, i && (this.breakingLastUpdateClosed = this.breakingLastItem.lastUpdate, e.cookie("breakingLastUpdateClosed", this.breakingLastItem.lastUpdate, {
                path: "/"
            })), this.breakingHeight = -this.breaking.height(), this.breaking.css("height", -this.breakingHeight), this.breakingWrap.css("position", "absolute"), this.breaking.stop().animate({
                height: 0
            }, this.slideSpeed, t.bind(function () {
                this.shouldHeaderAnimate() || this.updateHeaderMinHeight(), this.breaking.css("background-color", ""), this.breaking.hide(), n.trigger("breakingbar:after:close")
            }, this)), this.shouldHeaderAnimate() && this.updateHeaderMinHeight(!0), this.shiftSideCards(this.navHeight, !0)
        },
        openBreakingBar: function () {
            this.isBreakingBarOpen = !0, this.breaking.show(), this.breakingHeight = this.breakingWrap.height(), n.trigger("breakingbar:before:open", this.breakingHeight + this.navHeight, this.slideSpeed);
            var e = {
                height: this.breakingHeight
            };
            this.breaking.stop().animate(e, this.slideSpeed, this.onCompleteOpenBreakingBar), this.shouldHeaderAnimate() && this.updateHeaderMinHeight(!0), this.shiftSideCards(this.breakingHeight + this.navHeight, !0)
        },
        onCompleteOpenBreakingBar: function () {
            this.breaking.css("height", "auto"), this.breakingWrap.css("position", "static"), this.shouldHeaderAnimate() || this.updateHeaderMinHeight(), n.trigger("breakingbar:after:open")
        },
        updateHeaderMinHeight: function (e) {
            var t = this.isBreakingBarOpen ? this.breakingWrap.height() : 0,
                i = this.navHeight + t;
            e ? this.$el.stop().animate({
                "min-height": i
            }, this.slideSpeed) : this.$el.css("min-height", i), this.shouldHeaderAnimate() || this.setScrollTop(this.win.scrollTop() + this.breakingHeight), this.busyCheckingBreakingNews = !1
        },
        shiftSideCards: function (t, i) {
            t = t || this.navHeight + this.breaking.height();
            var n = e(".card-fixed-container, #cards-offset-placeholder");
            i ? n.stop().animate({
                top: t
            }, this.slideSpeed) : n.css({
                top: t
            })
        },
        updateBreakingBar: function () {
            this.busyCheckingBreakingNews || (this.busyCheckingBreakingNews = !0, r.fetchHtml("/services/breaking-news/nav-bar/").done(this.parseBreakingNews))
        },
        parseBreakingNews: function (i) {
            var n = e(i),
                s = n.find("p"),
                r = {
                    lastUpdate: parseFloat(n.data("lastupdate")),
                    type: n.data("type"),
                    content: n.find("p").eq(0).text()
                };
            if (r.lastUpdate) if (this.breakingLastUpdateClosed !== r.lastUpdate && this.breakingLastItem.lastUpdate !== r.lastUpdate || !t.isEqual(this.breakingLastItem, r) && this.breakingAfterFirstLoad) if (this.isBreakingBarOpen) {
                this.breakingWrap.html(s).stop();
                var o = this.breakingColors[r.type].highlight,
                    a = this.breakingColors[r.type].normal;
                this.breaking.animate({
                    backgroundColor: o
                }).animate({
                    backgroundColor: a
                }), this.busyCheckingBreakingNews = !1
            } else this.breakingWrap.html(s), this.breaking.attr("class", "").addClass(r.type), this.openBreakingBar();
            else this.busyCheckingBreakingNews = !1;
            else this.isBreakingBarOpen && this.closeBreakingBar(), this.busyCheckingBreakingNews = !1;
            this.breakingLastItem = r, this.breakingAfterFirstLoad = !0
        },
        setScrollTop: function (e) {
            this.preventScrollEvent = !0, this.scrollEl.scrollTop(e), setTimeout(t.bind(function () {
                this.preventScrollEvent = !1
            }, this), 100)
        },
        onClickLogout: function () {
            this.toggleUserDropdown(), n.trigger("uotrack", "headerprofilelogout"), o.logout()
        },
        onClickLogin: function () {
            this.toggleUserDropdown(), o.login(), n.trigger("uotrack", "headerprofilelogin")
        }
    });
    return u
}), define("views/modules/carousel/carousel-autosize", ["jquery", "underscore", "backbone", "baseview", "app", "views/modules/carousel"], function (e, t, i, n, s, r) {
    var o = r.extend({
        initialize: function (i) {
            t.bindAll(this, "handleResizeWindow"), this.options = e.extend({
                hoverShowControls: !1,
                verticalAdjust: 80,
                interactionDemo: !1,
                horizontalAdjust: 0,
                thumbSize: 84,
                imageLazySrcAttr: "data-large-src"
            }, i), this.$win = s.get("win"), this.$el.hasClass("galleries") ? this.$el.addClass("autosize") : this.$(".galleries").addClass("autosize");
            var n = t.throttle(this.handleResizeWindow, 50);
            this.$win.on("resize." + this.cid, n), this.handleResizeWindow(), r.prototype.initialize.call(this, this.options), this.subviews.gallery.render()
        },
        destroy: function (e) {
            this.$win.off("." + this.cid), r.prototype.destroy.call(this, e)
        },
        handleResizeWindow: function () {
            this.windowHeight = this.$win.height(), this.windowWidth = this.$win.width(), this.viewportResize()
        },
        viewportResize: function () {
            var e = this.windowHeight - this.options.verticalAdjust;
            this.showThumbs && (e -= this.options.thumbSize), this.$$(".viewport").height(e), this.triggerEvent("viewportResize", this.windowWidth, e), this.subviews && this.subviews.ad && this.subviews.ad.setAdSize(this.windowWidth, e)
        },
        toggleThumbnail: function (e) {
            this.showThumbs = e, this.viewportResize()
        }
    });
    return o
}), define("views/modules/carousel/carousel-fullscreen", ["jquery", "exports", "underscore", "backbone", "baseview", "app", "state", "views/modules/carousel/carousel-autosize"], function (e, t, i, n, s, r, o, a) {
    var l = a.extend({
        initialize: function (t) {
            i.bindAll(this, "handleKeyPress", "close"), t = e.extend({
                scrollerColor: "dark"
            }, t), this.$body = r.get("body"), this.$doc = r.get("document"), this.carousel = t.carousel, this.parent = t.parent, o.registerFullScreenView(this), this.$doc.on("keydown." + this.cid, this.handleKeyPress), this.$body.on("click." + this.cid, ".close", this.close), this.launch(), a.prototype.initialize.call(this, t)
        },
        close: function (t) {
            t && t.preventDefault(), this.animate(this.$el.parent(), "opacity", 0, 300, "ease-in-out").done(i.bind(function () {
                if (this.destroy(!0), o.clearFullScreenView(), this.carousel) {
                    var t = e(".thumbs li", this.parent);
                    t.eq(this.index).click()
                }
            }, this))
        },
        destroy: function (e) {
            this.$doc.off("." + this.cid), this.$body.off("." + this.cid), e && this.$el.parent().remove(), a.prototype.destroy.call(this, !1)
        },
        launch: function () {
            var t = e('<article class="gallery fullscreen" style="opacity: 0"><a class="close" href="#"></a><div class="film fullscreen"></div></article>'),
                i = this.parent.clone();
            i.find(".viewport").removeClass("hover");
            var n = i.find(".partner-placement");
            if (n.length) {
                var s = n.attr("id") + "_fs";
                n.attr("id", s).attr("data-slot-id", s)
            }
            t.append(i), this.$body.append(t), this.animate(t, "opacity", 1, 300, "ease-in-out"), this.setElement(i)
        },
        handleKeyPress: function (e) {
            return 37 === e.keyCode ? (this.prevSlide(), !1) : 39 === e.keyCode ? (this.nextSlide(), !1) : 27 === e.keyCode ? (this.close(), !1) : void 0
        }
    });
    return l
}), define("views/app", ["jquery", "underscore", "backbone", "app", "pubsub", "state", "text!siteconfig.json", "resizestop", "views/pages/404", "views/modules/header", "views/modules/carousel/carousel-fullscreen", "libs/onlineopinion/oo_engine"], function (e, t, i, n, s, r, o, a, l, c, u, h) {
    var d = i.View.extend({
        el: "body",
        events: {
            click: "triggerRoute",
            "submit form.search": "triggerSearch"
        },
        initialize: function () {
            var t = {};
            window.console === void 0 || window.console.log === void 0 ? (t.log = t.error = t.info = t.debug = t.warn = t.trace = t.dir = t.dirxml = t.group = t.groupEnd = t.time = t.timeEnd = t.assert = t.profile = function () {}, window.console = t) : t = window.console, window.appViewEventProxy = s, window.App = n, this.DEBUG = n.get("DEBUG"), this.$win = n.get("win"), window.header = new c, this.pubSub = {
                "opinionlab:show": this.openOpinionLabFeedback,
                openFullScreenCarousel: this.openFullScreenCarousel
            }, s.attach(this.pubSub, this), window.location.search && window.location.search.indexOf("404=true") > -1 && this.loadAjaxError("/404.html"), this.$win.on("resizestop." + this.cid, function () {
                s.trigger("resize:app")
            }).trigger("resizestop"), r.start(e.parseJSON(o))
        },
        openFullScreenCarousel: function (e) {
            return new u(e)
        },
        loadAjaxError: function (e) {
            r.fetchHtml(e).done(function (e) {
                new l({
                    ajax: !0,
                    htmlFrag: e
                })
            })
        },
        openOpinionLabFeedback: function () {
            new h.Ocode({}).show()
        },
        destroy: function () {
            this.undelegateEvents(), delete window.header, delete window.appViewEventProxy, delete window.App, this.$win.off("." + this.cid), s.unattach(this.pubSub, this)
        },
        triggerRoute: function (t) {
            var s = e(t.target).closest("a");
            if (n.setTrack(s), r.updateActivityTimestamp(), !(!s.length || t.isDefaultPrevented() || t.metaKey || t.altKey || 2 == t.which || s.attr("target")) && Modernizr.history) {
                var o = e.trim(s.attr("href"));
                n.isValidUrl(o) ? (o = n.getDefinedRoute(o), null !== o && (i.history.navigate(o, {
                    trigger: !0
                }), t.preventDefault())) : t.preventDefault()
            }
        },
        triggerSearch: function (t) {
            t.preventDefault();
            var r = "/search/" + encodeURI(e(t.currentTarget.q).val()) + "/";
            if (s.trigger("heattrack", "usersearch"), Modernizr.history) {
                var o = n.getDefinedRoute(r);
                if (null !== o) return i.history.navigate(o, {
                    trigger: !0
                }), void 0
            }
            "/search//" === r ? window.location += "" : window.location = r
        }
    });
    return d
}), parseUri.options = {
    strictMode: !1,
    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
},
function () {
    var e, t = this;
    t.Raven = e = {};
    var i = e;
    e.VERSION = "0.7.1";
    var n = t.jQuery || t.Zepto || t.ender;
    if (n === void 0) throw "Raven requires one of the following libraries: jQuery, Zepto, or ender";
    if (t.jQuery === n && "1.5.0" > n.fn.jquery) throw "A newer version of jQuery is required";
    e.options = {
        secretKey: void 0,
        publicKey: void 0,
        servers: [],
        projectId: 1,
        logger: "javascript",
        site: void 0,
        dataCallback: null,
        signatureUrl: void 0,
        fetchHeaders: !1,
        testMode: !1,
        ignoreErrors: [],
        ignoreUrls: []
    }, e.funcNameRE = /function\s*([\w\-$]+)?\s*\(/i, e.config = function (t) {
        var s = [];
        if ("string" == typeof t) {
            if (0 !== t.indexOf("http")) throw "Base64 encoded config is no longer supported - use DSN";
            t = e.parseDSN(t)
        }
        n.each(t, function (e, t) {
            i.options[e] = t
        }), n.each(i.options.servers, function (e, t) {
            "/" !== t.slice(-1) && (t += "/"), s.push(t + "api/" + i.options.projectId + "/store/")
        }), i.options.servers = s
    }, e.parseDSN = function (e) {
        var t, i, n = parseUri(e),
            s = n.path.lastIndexOf("/");
        return -1 === s ? (t = n.path.substr(1), i = "") : (i = n.path.substr(1, s), t = n.path.substr(s + 1)), {
            servers: [n.protocol + "://" + n.host + ":" + n.port + "/" + i],
            publicKey: n.user,
            secretKey: n.password,
            projectId: t
        }
    }, e.getHeaders = function () {
        var e = {};
        return i.options.fetchHeaders && !i.options.testMode && (e = n.ajax({
            type: "HEAD",
            url: t.location,
            async: !1
        }).getAllResponseHeaders()), e.Referer = document.referrer, e["User-Agent"] = navigator.userAgent, e
    }, e.parseHeaders = function (e) {
        var t = {};
        return n.each(e.split("\n"), function (e, i) {
            var n = i.slice(0, i.indexOf(":")),
                s = i.slice(i.indexOf(":") + 2);
            t[n] = s
        }), t
    }, e.getSignature = function (e, t, s) {
        i.options.signatureUrl ? n.ajax({
            type: "POST",
            url: i.options.signatureUrl,
            data: {
                message: e,
                timestamp: t
            },
            dataType: "json",
            success: function (e) {
                s(e.signature)
            }
        }) : s()
    }, e.getAuthHeader = function (e, t) {
        var n = "Sentry sentry_version=2.0, ";
        return n += "sentry_timestamp=" + t + ", ", n += "sentry_client=raven-js/" + i.VERSION, i.options.publicKey && (n += ", sentry_key=" + i.options.publicKey), e && (n += ", sentry_signature=" + e), n
    }, e.captureException = function (t, n) {
        var s, r, o;
        t.line ? s = t.line : t.lineNumber && (s = t.lineNumber), t.sourceURL ? r = t.sourceURL : t.fileName && (r = t.fileName), t.arguments && t.stack ? o = i.chromeTraceback(t) : t.stack ? o = -1 == t.stack.indexOf("@") ? i.chromeTraceback(t) : i.firefoxOrSafariTraceback(t) : (o = [{
            filename: r,
            lineno: s
        }], o = o.concat(i.otherTraceback(e.captureException))), i.process(t, r, s, o, n)
    }, e.captureMessage = function (e, t) {
        var n = i.arrayMerge({
            message: e
        }, t);
        i.send(n)
    }, e.process = function (e, t, s, r, o) {
        var a, l, c, u;
        if ("object" == typeof e && (a = e.name, e = e.message), !(n.inArray(e, i.options.ignoreErrors) >= 0)) {
            r ? (l = {
                frames: r
            }, t = t || r[0].filename) : t && (l = {
                frames: [{
                    filename: t,
                    lineno: s
                }]
            });
            for (var h = 0; i.options.ignoreUrls.length > h; h++) if (i.options.ignoreUrls[h].test(t)) return;
            c = s ? e + " at " + s : e, u = i.arrayMerge({
                "sentry.interfaces.Exception": {
                    type: a,
                    value: e
                },
                "sentry.interfaces.Stacktrace": l,
                culprit: t,
                message: c
            }, o), i.send(u)
        }
    }, e.arrayMerge = function (e, t) {
        return t === void 0 ? e : (n.each(t, function (t, i) {
            e[t] = i
        }), e)
    }, e.trimString = function (e) {
        return e.replace(/^\s+|\s+$/g, "")
    }, e.chromeTraceback = function (t) {
        var i, s, r, o, a, l = [],
            c = t.stack.split("\n");
        return n.each(c.slice(1), function (t, n) {
            i = e.trimString(n).slice(3), "unknown source" != i && (i = i.split(" "), i.length > 2 ? (s = i[0], r = i.slice(1).join(" "), o = "(unknown)") : 2 == i.length ? (s = i[0], r = i[1]) : (s = "(unknown)", r = i[0]), r && "(unknown source)" !== r && ("(" === r[0] && (r = r.slice(1, -1)), a = r.split(":"), o = a[2], r = a.slice(0, 2).join(":")), l.push({
                "function": s,
                filename: r,
                lineno: o
            }))
        }), l
    }, e.firefoxOrSafariTraceback = function (e) {
        var t, i, s, r, o, a = [],
            l = e.stack.split("\n");
        return n.each(l, function (e, n) {
            n && (t = n.split("@"), t[0] ? (i = t[0].split("("), s = i.length > 1 && ")" != i[1] ? i[1].slice(0, -1).split(",") : void 0, i = i[0] ? i[0] : "(unknown)") : i = "(unknown)", t.length > 1 ? (r = t[1].split(":"), o = r.slice(-1)[0], r = r.slice(0, -1).join(":")) : "[native code]" == t[0] && (i = "(unknown)", r = "[native code]", o = 0, s = void 0), a.push({
                "function": i,
                filename: r,
                lineno: o,
                vars: {
                    arguments: s
                }
            }))
        }), a
    }, e.otherTraceback = function (e) {
        for (var t, n, s = "<anonymous>", r = [], o = 9; e && o > r.length;) t = e.name || (i.funcNameRE.test("" + e) ? RegExp.$1 || s : s), n = e.arguments ? i.stringifyArguments(e.arguments) : void 0, r.push({
            filename: "(unknown source)",
            lineno: "(unknown)",
            "function": t,
            post_context: ("" + e).split("\n"),
            vars: {
                arguments: n
            }
        }), e = e.caller;
        return r
    }, e.stringifyArguments = function (e) {
        var t, i = this,
            s = "<unknown>",
            r = [];
        return n.each(e, function (e, n) {
            void 0 === n ? r.push("undefined") : null === n ? r.push("null") : n instanceof Array ? r.push(i.stringifyArguments(n)) : n.constructor ? (t = n.constructor.name || (i.funcNameRE.test("" + n.constructor) ? RegExp.$1 || s : s), "String" == t ? r.push('"' + n + '"') : "Number" == t || "Date" == t ? r.push(n) : "Boolean" == t ? r.push(n ? "true" : "false") : r.push(t)) : r.push(s)
        }), r
    }, e.pad = function (e, t) {
        var i, n = ("" + e).length;
        if (t === void 0 && (t = 2), n >= t) return e;
        for (i = 0; t - n > i; i++) e = "0" + e;
        return e
    }, e.dateToISOString = function (e) {
        return Date.prototype.toISOString ? e.toISOString() : e.getUTCFullYear() + "-" + i.pad(e.getUTCMonth() + 1) + "-" + i.pad(e.getUTCDate()) + "T" + i.pad(e.getUTCHours()) + ":" + i.pad(e.getUTCMinutes()) + ":" + i.pad(e.getUTCSeconds()) + "." + i.pad(e.getUTCMilliseconds(), 3) + "Z"
    }, e.send = function (e) {
        var s, r = (new Date).getTime(),
            o = t.location.protocol + "//" + t.location.host + t.location.pathname,
            a = t.location.search.slice(1);
        e = i.arrayMerge({
            project: i.options.projectId,
            logger: i.options.logger,
            site: i.options.site,
            timestamp: new Date,
            "sentry.interfaces.Http": {
                url: o,
                querystring: a,
                headers: i.getHeaders()
            }
        }, e), "function" == typeof i.options.dataCallback && (e = i.options.dataCallback(e)), e.timestamp = i.dateToISOString(e.timestamp), s = JSON.stringify(e), i.getSignature(s, r, function (e) {
            var t = i.getAuthHeader(e, r);
            n.each(i.options.servers, function (e, i) {
                n.ajax({
                    type: "POST",
                    url: i,
                    data: s,
                    dataType: "json",
                    headers: {
                        "X-Sentry-Auth": t,
                        Authentication: t
                    }
                })
            })
        })
    }
}.call(this), define("raven", function () {}), define("settealium", ["pubsub", "fwinfo", "underscore", "backbone"], function (e, t, i) {
    function n(e, t) {
        for (var i in t) t.hasOwnProperty(i) && t[i] && (t[i] = ("" + t[i]).toLowerCase());
        utag.track(e, t)
    }
    var s = {}, r = [],
        o = function (e, t) {
            r.push([e, t])
        }, a = Backbone.Model.extend({
            initialize: function () {
                this.clickName = "", this.clickPage = "", e.on("page:load", function (e) {
                    l.page_load(e)
                }), e.on("uotrack", function (e) {
                    l.uotrack(e)
                }), e.on("heattrack", function (e) {
                    l.heattrack(e)
                }), e.on("slide:change", function (e) {
                    l.slide_change(e)
                }), e.on("video:load", function (e) {
                    l.video_load(e)
                }), e.on("vitrack", function (e) {
                    l.vitrack(e)
                }), self.utag && this.ready()
            },
            ready: function () {
                i.defer(function () {
                    for (var e = 0; r.length > e; e++) n.apply(utag, r[e]);
                    r = [], o = function (e, t) {
                        n(e, t), s_ut.prop41 = ""
                    }
                })
            },
            relevant_data: function (e, i) {
                e.aws || (e.aws = "undefined"), e.ssts || (e.ssts = "bugpages");
                var n = e.aws.replace(/\/\/*$/, "").split("/"),
                    s = new Date(18e5 * parseInt((new Date).getTime() / 18e5, 10)),
                    r = s.getHours(),
                    o = location.hash.match(/\bht=([^&]*)/) && RegExp.$1,
                    a = window.location.search.match(/[?&]csp=([^&]*)/i) && RegExp.$1;
                return sstslist = e.ssts.split("/"), this.clickName = function (e, t) {
                    return e || t
                }(o, t.getandclearsessionvalue("clickName")), this.clickPage = t.getandclearsessionvalue("clickPage"), {
                    assetid: e.assetid,
                    atyponuserid: t.getsessionvalue("atyponid"),
                    blogname: e.blogname || e.blognamebackup || "",
                    category: n[0],
                    clickName: this.clickName,
                    clickPage: this.clickPage,
                    contenttype: e.contenttype,
                    cst: n.slice(0, 3).join(":"),
                    dayofweek: "sunday monday tuesday wednesday thursday friday saturday".split(" ")[(new Date).getDay()],
                    eventtype: i,
                    gcionid: document.cookie.match(/\bGCIONID=([^;]*)/) && RegExp.$1,
                    halfhour: 1 + (r + 11) % 12 + ":" + function (e) {
                        return e.substr(e.length - 2)
                    }("0" + s.getMinutes()) + (r > 11 ? " pm" : " am"),
                    linkTrackVars: "prop1",
                    pathName: e.pathName || "",
                    prevpath: t.getandclearsessionvalue("prevpath"),
                    referrerhost: o ? document.referrer.split("/")[2] : "",
                    searchkeywords: e.searchkeywords,
                    section: sstslist[0],
                    ssts: sstslist.join(":"),
                    subcategory: n.slice(0, 2).join(":"),
                    subsection: sstslist.slice(0, 2).join(":"),
                    templatetype: e.templatetype,
                    topic: sstslist.slice(0, 3).join(":"),
                    typeofday: ((new Date).getDay() + 8) % 7 > 1 ? "weekday" : "weekend",
                    uniqueuserid: t.getsessionvalue("uniqueid"),
                    videoincluded: e.videoincluded || "no",
                    taxonomykeywords: e.taxonomykeywords || "",
                    gallerytitle: e.gallerytitle || "",
                    galleryindex: e.galleryindex || "",
                    queryparamtrack: a || "",
                    noinitialanalytics: e.noinitialanalytics || ""
                }
            },
            page_load: function (e) {
                var n = s = l.relevant_data(e, "page:load");
                t.setsessionvalue("prevpath", document.location.pathname), o("view", n), i.defer(function () {
                    self.s_ut && s_ut.getPPVSetup && s_ut.getPPVSetup()
                })
            },
            uotrack: function (e) {
                "string" != typeof e && (console.error("uotrack has been given a non-string event argument", e), e = (e || {}).prop41 || "somethingbad");
                var t = e.match(/{% *[a-z0-9_]* *%}/gi);
                if (t) for (var i = 0; t.length > i; i++) {
                    var n = t[i],
                        r = n.match(/{% *([a-z0-9_]*) *%}/) && RegExp.$1;
                    e = e.replace(n, s[r])
                }
                var a = {
                    clickName: e,
                    eventtype: "uotrack",
                    linkTrackEvents: "None",
                    linkTrackVars: "prop41"
                };
                o("link", a)
            },
            vitrack: function (e) {
                "string" != typeof e && (console.error("vitrack has been given a non-string event argument", e), e = (e || {}).prop9 || "somethingbad");
                var t = {
                    milestonetrack: e,
                    eventtype: "vitrack",
                    linkTrackEvents: "None",
                    linkTrackVars: "prop9"
                };
                o("link", t)
            },
            heattrack: function (e) {
                t.setsessionvalue("clickName", e), t.setsessionvalue("clickPage", location.href)
            },
            slide_change: function (e) {
                var i, n, r = s;
                try {
                    i = e.cst.split("/"), n = e.ssts.split("/")
                } catch (a) {
                    return console.error("Invalid page", a.stack || a.stacktrace || a.message), void 0
                }
                r.clickName = t.getandclearsessionvalue("clickName"), r.contenttype = e.contenttype, r.videoincluded = e.videoincluded || "no", r.gallerytitle = e.gallery_title, r.galleryindex = e.gallery_index, r.assetid = e.gallery_id, r.eventtype = "slide:change", r.templatetype = "", r.category = i[0], r.cst = i.slice(0, 3).join(":"), r.section = n[0], r.ssts = n.join(":"), r.subcategory = i.slice(0, 2).join(":"), r.subsection = n.slice(0, 2).join(":"), r.topic = n.slice(0, 3).join(":"), r.pathName = e.pathName || "", o("view", r)
            },
            video_load: function (e) {
                var t = s;
                t.clickName = this.clickName, t.clickPage = this.clickPage, t.category = e.category, t.cst = e.cst, t.section = e.section, t.ssts = e.ssts, t.subcategory = e.subcategory, t.subsection = e.subsection, t.topic = e.topic, t.videoPlayerName = e.videoPlayerName, t.completion = e.completion, t.keywords = e.keywords, t.contenttype = e.contenttype, t.videoName = e.videoName, t.videoDuration = e.videoDuration, t.eventtype = e.eventtype, t.videoContentID = e.contentid, t.viralVideoDomain = e.viralVideoDomain, t.videoContentProvider = e.videoContentProvider, t.templatetype = e.templateType, t.noinitialanalytics = !1, o("view", t)
            }
        }),
        l = new a;
    return l
}), window.onerror = function () {
    function e() {
        window.js_debug_chance > Math.random() && Raven.process.apply(Raven, arguments)
    }
    self.Raven && window.js_debug_chance && (Raven.config({
        publicKey: "aedac890efdb434d95e273b667b470ce",
        servers: ["http://app.getsentry.com"],
        projectId: "3635",
        dataCallback: function (e) {
            return e.multiplier = 1 / window.js_debug_chance, e
        }
    }), window.onerror = e, e.apply(Raven, arguments))
}, require.config({
    paths: {
        jquery: "libs/jquery/jquery-1.8.3",
        jqueryui: "libs/jquery/plugins/jquery-ui-1.9.2.custom.min",
        underscore: "libs/underscore/underscore-min",
        backbone: "libs/backbone/backbone-dev",
        raven: "libs/getsentry/raven-0.7.1",
        pubsub: "libs/backbone/plugins/pubsub",
        app: "models/app",
        state: "managers/statemanager",
        baseview: "views/baseview",
        baseappview: "views/baseappview",
        simpleoverlay: "views/simple-overlay",
        cookie: "libs/jquery/plugins/jquery.cookie",
        easing: "libs/jquery/plugins/jquery.easing.1.3",
        animatecolors: "libs/jquery/plugins/jquery.animate-colors-min",
        resizestop: "libs/jquery/plugins/jquery.resizeStop",
        chosen: "libs/jquery/plugins/chosen.jquery.min",
        mousewheel: "libs/jquery/plugins/jquery.mousewheel.min",
        transform: "libs/jquery/plugins/audio-player/jquery.transform",
        uiPageTurn: "libs/jquery.ui-page-turn",
        transformSupport: "libs/jquery.transformSupport",
        fwinfo: "fw/models/fwinfo",
        settealium: "fw/models/settealium",
        facebook: "fw/facebook/facebook",
        fitvids: "libs/jquery/plugins/jquery.fitvids",
        datepicker: "libs/jquery/plugins/jquery-ui.datepicker.min",
        draggable: "libs/jquery/plugins/jquery-ui.draggable.min",
        advertisement: "views/modules/advertisement",
        advertisementpreload: "views/modules/advertisement-preload",
        advertisementpreroll: "views/modules/advertisement-preroll",
        text: "libs/require/text"
    },
    shim: {
        raven: ["jquery"],
        cookie: ["jquery"],
        easing: ["jquery"],
        animatecolors: ["jquery"],
        resizestop: ["jquery"],
        chosen: ["jquery"],
        mousewheel: ["jquery"],
        circleplayer: ["jquery"],
        grab: ["jquery"],
        jplayer: ["jquery"],
        transform: ["jquery"],
        fitvids: ["jquery"],
        uiPageTurn: ["jquery", "transformSupport"],
        "libs/flot/jquery.flot": ["libs/flot/excanvas"]
    }
}), require(["views/app", "raven", "admanager", "facebook", "settealium", "fwinfo"], function (e) {
    new e
}), define("main", function () {}), define("views/modules/coverview", ["jquery", "underscore", "backbone", "pubsub", "app", "baseappview", "uiPageTurn"], function (e, t, i, n, s, r) {
    var o = r.extend({
        el: "#cover-view",
        events: {
            "click .prev": "prevSlide",
            "click .ui-page-turn": "palmSlide",
            "click .next": "nextSlide"
        },
        initialize: function (i) {
            i = e.extend(!0, {
                animation: {
                    slideDuration: 350
                }
            }, i), t.bindAll(this, "onPageTurn", "resizeHandler"), this.$body = s.get("body"), this.$top = s.get("scrollEl"), this.$doc = s.get("doc"), this.$win = s.get("win"), this.flipTransformStyle = this.transformCssHyphenName + " " + i.animation.slideDuration + "ms linear";
            var n = t.throttle(this.resizeHandler, 50);
            this.$win.on("resize." + this.cid, n), r.prototype.initialize.call(this, i)
        },
        resizeHandler: function () {
            this.$pages && (this.$win.width() % 2 ? this.$pages.addClass("width-wiggler") : this.$pages.removeClass("width-wiggler"))
        },
        palmSlide: function (t) {
            if (!e(t.target).hasClass("load-story") && !e(t.target).hasClass("parent-label")) {
                var i = t.screenX,
                    n = this.$win.width() >> 1;
                i > n ? this.nextSlide(t) : this.prevSlide(t)
            }
        },
        prevSlide: function (e) {
            e && e.preventDefault();
            var t = this.$pages.uiPageTurn("prevPage");
            this.registerAnimation(t), n.trigger("heattrack", "thebigpageleft")
        },
        nextSlide: function (e) {
            e && e.preventDefault();
            var t = this.$pages.uiPageTurn("nextPage");
            this.registerAnimation(t), n.trigger("heattrack", "thebigpageright")
        },
        slideTransition: function (e, i) {
            e.addClass("active"), i ? e.css("left", "100%") : e.css("left", "-100%"), this.animate(e, "left", 0, this.options.animation.slideDuration, "linear").done(t.bind(function () {
                this.$activePage = e, this.busy = !1
            }, this)), this.$activePage.css("left", "0%"), this.animate(this.$activePage, "left", i ? "-100%" : "100%", this.options.animation.slideDuration, "linear")
        },
        setFixedPosition: function () {
            r.prototype.setFixedPosition.call(this, 0)
        },
        keyboardShortcuts: function (e) {
            37 === e.which ? this.prevSlide(e) : 39 === e.which && this.nextSlide()
        },
        afterPageReveal: function () {
            t.bindAll(this, "keyboardShortcuts"), this.$prev = this.$(".prev"), this.$next = this.$(".next"), this.$pages = this.$("#cover-view-pages"), this.$pages.uiPageTurn({
                onPageTurn: this.onPageTurn,
                turnDuration: 600,
                fallback: "slide",
                shadow: !1
            }), this.resizeHandler(), this.$doc.on("keyup." + this.cid, this.keyboardShortcuts), this.trackPageChange(this.$(".ui-page-turn.active"))
        },
        onPageTurn: function (e) {
            e.prev(".ui-page-turn").length ? this.$prev.show() : this.$prev.hide(), e.next(".ui-page-turn").length ? this.$next.show() : this.$next.hide(), this.trackPageChange(e)
        },
        setPage: function () {},
        trackPageChange: function (t) {
            var r = t.find("span.coverInfo").text() || {}, o = e.parseJSON(r) || {};
            s.set("pagename", o.pagename), s.set("seotitle", o.seotitle), s.set("ssts", o.ssts), s.set("aws", o.aws), s.set("url", "http://www.usatoday.com/" + i.history.fragment), s.set("contenttype", o.contenttype);
            var a = {
                pagename: s.get("pagename"),
                seotitle: s.get("seotitle"),
                ssts: s.get("ssts"),
                aws: s.get("aws"),
                url: s.get("url"),
                contenttype: s.get("contenttype")
            };
            n.trigger("page:load", a)
        },
        getRevealAppLoader: function () {
            return '<section id="cover-view" class="ui-loading dark-medium"></section>'
        },
        activateLoader: function () {},
        destroy: function () {
            this.$doc.off("." + this.cid), this.$win.off("." + this.cid), r.prototype.destroy.apply(this, arguments)
        }
    });
    return o
}),
function () {
    var e = {}, t = {};
    document.writeln = (self.console || {}).log || function () {}, document.write = function () {
        for (var i in e) if (e.hasOwnProperty(i)) try {
            e[i].apply({}, arguments)
        } catch (n) {}
        for (var s = Array.prototype.join.call(arguments, ""), r = "<script[^<>]*src=['\"]?([^'\"<> :/]*:*//[a-z0-9.]*google.com/[^'\"<> ]*)['\"]?[^<>]*>[^<>]*</script>", o = RegExp(r, "gi"), a = RegExp(r, "i"), l = s.match(o) || [], c = 0; l.length > c; c++) l[c].match(a), $.ajax({
            cache: !0,
            dataType: "script",
            success: function () {
                for (var e in t) if (t.hasOwnProperty(e)) try {
                    t[e].apply({}, arguments)
                } catch (i) {}
            },
            url: RegExp.$1
        }), s = s.replace(l[c], "");
        if (!s.match(/^\s*$/)) try {
            console.log("document.write ignoring ", s)
        } catch (n) {}
    }, document.write.addOnWrite = function (t, i) {
        "function" == typeof i && (e[t] || (e[t] = i))
    }, document.write.addOnScript = function (e, i) {
        "function" == typeof i && (t[e] || (t[e] = i))
    }, document.write.delOnWrite = function (t) {
        delete e[t] || (e[t] = void 0)
    }, document.write.delOnScript = function (e) {
        delete t[e] || (t[e] = void 0)
    }
}(), define("documentWrite", function () {}), define("views/pages/search", ["jquery", "underscore", "backbone", "pubsub", "app", "baseappview", "state", "documentWrite"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        el: ".search-results",
        events: {
            "click .grid": "gridView",
            "click .list": "listView",
            "click .cancel": "close"
        },
        initialize: function (i) {
            i = e.extend(!0, {
                delay: {
                    playlistAutoClose: 250
                },
                animations: {
                    open: {
                        duration: 250,
                        easing: "ease-in-out"
                    },
                    close: {
                        duration: 250,
                        easing: "ease-in-out"
                    }
                }
            }, i), this.win = s.get("win"), this.body = s.get("body"), this.scrollEl = s.get("scrollEl"), this.body.removeClass("show-search"), n.trigger("masthead:expand"), t.bindAll(this, "lazyload"), this.currentView = "view-grid", this.init = !1, this.requestInProgress = !1, this.win.on("scroll." + this.cid, t.throttle(this.lazyload, 200)), r.prototype.initialize.call(this, i)
        },
        getRevealAppLoader: function () {
            return '<article class="search-results ui-loading dark-medium"></article>'
        },
        animateRevealApp: function (i) {
            if (null == i) return e.Deferred().resolve();
            this.$("#search-form").css("height", ""), this.$el.css({
                opacity: 1,
                display: "block",
                top: "-100%",
                height: "100%"
            });
            var s = this.animate(this.$el, "top", "0%", this.options.animations.open.duration, this.options.animations.open.easing);
            return s.done(t.bind(function () {
                this.$el.css("height", ""), n.trigger("open:searchResults")
            }, this)), s
        },
        setFixedPosition: function () {
            n.trigger("masthead:collapse"), r.prototype.setFixedPosition.apply(this, arguments)
        },
        clearFixedPosition: function () {
            n.trigger("masthead:expand"), r.prototype.clearFixedPosition.apply(this, arguments)
        },
        animateRemoveApp: function () {
            var e = s.getScrollPosition();
            return this.$el.css({
                marginTop: -1 * e,
                height: this.win.height() + e
            }), this.$(".summary").css("position", "absolute"), this.scrollEl.scrollTop(0), this.animate(this.$el, "top", "-100%", this.options.animations.close.duration, this.options.animations.close.easing)
        },
        afterAppRemove: function () {
            n.trigger("close:searchResults"), n.trigger("uotrack", "searchResultsclose")
        },
        beforePageReveal: function () {
            n.trigger("open:searchResults")
        },
        afterPageReveal: function (e) {
            this.init || (this.init = !0, this.originalPath = e), this.moreResultsPlacer = this.$(".more-results"), this.lazyload(), this.searchWrap = this.$("#search-form"), this.searchTextInput = this.searchWrap.find(".text-input"), this.setup(), this.setupTextAd()
        },
        getMoreResults: function (e) {
            return this.requestInProgress = !0, o.fetchHtml(e).done(t.bind(function (e) {
                this.moreResultsPlacer.parent().append(e), this.moreResultsPlacer.remove(), this.moreResultsPlacer = this.$(".more-results")
            }, this)).fail(t.bind(function () {
                this.moreResultsPlacer.remove(), this.moreResultsPlacer = null
            }, this)).always(t.bind(function () {
                this.requestInProgress = !1
            }, this)), !1
        },
        getTerm: function () {
            return e(".search-term .term", this.$el).attr("data-term")
        },
        setup: function () {
            this.results = this.$(".results"), this.summary = this.$(".summary"), this.sidebar = this.$(".sidebar"), this.viewGrid = this.$(".grid"), this.viewList = this.$(".list"), "view-list" === this.currentView && this.listView()
        },
        setupTextAd: function () {
            var t = this.getTerm(),
                i = "partner_search_text_ads" + (new Date).getTime();
            e(".tile.ad", this.$el).attr("id", i);
            var n = {
                pubId: "partner-gannett",
                query: t,
                hl: "en"
            }, s = {
                container: i,
                lines: "3",
                fontFamily: "arial",
                fontSizeTitle: "13px",
                fontSizeDescription: "12px",
                fontSizeDomainLink: "12px",
                colorTitleLink: "1EA3FF",
                colorText: "FFFFFF",
                colorDomainLink: "00C641",
                colorBackground: "2C2C2C"
            };
            this.loadGoogleSearchAds(n, s)
        },
        gridView: function () {
            return this.viewGrid.addClass("active"), this.viewList.removeClass("active"), this.summary.removeClass("list").addClass("grid"), this.results.removeClass("view-list").addClass("view-grid"), this.currentView = "view-grid", e(".ad").appendTo(".sidebar"), !1
        },
        listView: function () {
            return this.viewList.addClass("active"), this.viewGrid.removeClass("active"), this.summary.removeClass("grid").addClass("list"), this.results.removeClass("view-grid").addClass("view-list"), this.currentView = "view-list", e(".ad").prependTo(".list-content"), !1
        },
        lazyload: function () {
            if (this.init && this.moreResultsPlacer && this.moreResultsPlacer.length && !this.requestInProgress) {
                var e = s.getScrollPosition(),
                    t = this.body.height();
                e + t >= this.moreResultsPlacer.offset().top && this.getMoreResults(this.moreResultsPlacer.data("href"))
            }
        },
        close: function () {
            o.navigateToPreloadedUrl(this.originalPath)
        },
        loadGoogleSearchAds: function (t, i) {
            var n = !1,
                s = function () {
                    return n ? (document.write.delOnWrite("searchads"), document.write.delOnScript("searchads"), void 0) : self.google ? google.ads ? google.ads.search ? google.ads.search.Ads ? (n = new google.ads.search.Ads(t, i), document.write.delOnWrite("searchads"), document.write.delOnScript("searchads"), void 0) : !1 : !1 : !1 : !1
                };
            s() || (document.write.addOnWrite("searchads", s), document.write.addOnScript("searchads", s), e.ajax({
                cache: !0,
                dataType: "script",
                success: s,
                url: "http://www.google.com/adsense/search/ads.js"
            }))
        },
        destroy: function () {
            document.write.delOnWrite("searchads"), document.write.delOnScript("searchads"), this.win.off("." + this.cid), r.prototype.destroy.apply(this, arguments)
        }
    });
    return a
}), define("views/pages/stag-front", ["jquery", "underscore", "backbone", "app", "pubsub", "baseappview", "advertisement", "views/modules/alert", "views/modules/footer", "views/modules/headline", "views/modules/video", "views/modules/carousel", "views/modules/form"], function (e, t, i, n, s, r, o, a, l, c, u, h, d) {
    var p = r.extend({
        events: {
            "click .ui-btn": "toggleHeadlineView"
        },
        initialize: function (e) {
            this.$top = n.get("scrollEl"), r.prototype.initialize.call(this, e)
        },
        beforePageReveal: function () {},
        afterPageReveal: function (e, t) {
            n.set("currentCardPath", t), this._initializeTopic(e, "stag")
        },
        _initializeTopic: function () {
            var t = this;
            this.headlineCollection = this.$(".collection"), this.toggleList = this.$(".ui-btn.list"), this.toggleGrid = this.$(".ui-btn.grid"), this.subviews.video = [], e(".stag.hero .video").each(function () {
                var i = new u({
                    el: e(this).parent().get(0)
                });
                t.subviews.video.push(i)
            }), this.subviews.formview = new d({
                el: this.el
            }), this.subviews.footer = new l, this.subviews.headline = new c({
                el: ".stag .mod.headlines"
            }), this.subviews.gallery = new h({
                ads: !0,
                el: ".stag .mod.galleries",
                fullScreen: !0,
                track: !0
            });
            var i = {};
            try {
                i = this.pageInfo || {};
                var n = ".partner.slider",
                    s = i.topic || null,
                    r = i.series || null;
                this.subviews.ads = new o({
                    aws: i.aws,
                    el: n,
                    functionality: "slider",
                    masterPageType: "card",
                    title: document.title,
                    series: r,
                    sitePage: "usat/" + i.ssts + "/front",
                    topic: s,
                    uniqueId: s,
                    cardInfo: null,
                    sectionPath: null
                })
            } catch (a) {
                console.error("advertisement threw exception:", a.stack || a.stacktrace || a.message)
            }
        },
        getRevealAppLoader: function () {
            return '<article id="stag-view" class="cards stag ui-loading dark-medium"></article>'
        },
        adjust: function () {
            this.$top.animate({
                scrollTop: 0
            }, 200)
        },
        toggleHeadlineView: function (t) {
            t.preventDefault();
            var i = e(t.currentTarget);
            i.hasClass("grid") ? (this.headlineCollection.removeClass("listview").addClass("gridview"), i.addClass("active"), this.toggleList.removeClass("active")) : i.hasClass("list") && (this.headlineCollection.addClass("listview").removeClass("gridview"), i.addClass("active"), this.toggleGrid.removeClass("active"))
        }
    });
    return p
}), define("views/modules/previous-bar", ["jquery", "underscore", "backbone"], function (e, t, i) {
    var n = i.View.extend({
        el: ".previous-bar",
        initialize: function (t) {
            this.options = e.extend({}, t || {});
            var i = e(".previous-bar").addClass("active");
            i.find(".title").text(t.title), i.attr("href", t.url)
        }
    });
    return n
}), define("views/modules/interactives/election-autocomplete", ["jquery", "underscore", "app", "views/modules/autocomplete", "state"], function (e, t, i, n, s) {
    var r = n.extend({
        initialize: function () {
            n.prototype.initialize.apply(this, arguments)
        },
        fetchData: function () {
            this.clearResults(), this.$error.empty();
            var i = this.$field.val(),
                n = t.bind(function (i) {
                    if (this.fetch = null, null !== i[0]) {
                        var n = t.keys(i),
                            s = t.values(i),
                            r = t.zip(n, s);
                        this.$autoComplete.show(), e.map(r, t.bind(function (t) {
                            var i = e("<li>").html(t[0]).attr("data-url", t[1]);
                            this.$autoComplete.append(i)
                        }, this))
                    }
                }, this);
            this.fetch && this.fetch.abort(), this.fetch = s.fetchData(this.url + i).done(n)
        },
        onSelectResult: function (t) {
            t.preventDefault();
            var s = e(t.currentTarget).attr("data-url");
            i.triggerRoute(s), n.prototype.onSelectResult.call(this, t), this.$field.closest("form").submit()
        },
        onEnter: function (e) {
            if (e) {
                var t = e.attr("data-url");
                i.triggerRoute(t)
            }
        }
    });
    return r
}), define("views/pages/election-2012", ["jquery", "underscore", "backbone", "app", "pubsub", "baseview", "views/modules/interactives/election-autocomplete"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        el: "#topic-card",
        events: {
            "submit #election-state-nav-form": "onSubmitStateForm"
        },
        initialize: function () {
            this.ElectionAutoComplete = new o({
                el: e("#election-state-nav-form .query"),
                url: "/election-2012/autocomplete/states/?q=",
                max_results: 4
            }), e("#election-results-fullscreen") && (this.onResize(), e(window).bind("resize", this.onResize))
        },
        onSubmitStateForm: function (e) {
            e.preventDefault()
        },
        onResize: function () {
            var t = e(window).height() > 620 ? e(window).height() : 620;
            e("#election-results-fullscreen").height(t)
        },
        destroy: function () {
            e(window).unbind("resize", this.onResize)
        }
    });
    return a
}), define("views/pages/topic", ["jquery", "underscore", "backbone", "app", "pubsub", "views/pages/stag-front", "views/modules/featured-content", "views/modules/previous-bar", "views/pages/election-2012", "views/modules/twitter"], function (e, t, i, n, s, r, o, a, l, c) {
    var u = r.extend({
        el: "#topic-card",
        _initializeTopic: function (e) {
            "story" == n.get("contenttype") && (this.subviews.prevBar = new a({
                url: "/" + e,
                title: n.get("seotitle")
            })), this.$(".mod.featured-content .paginator ul > li").outerWidth(), this.$(".mod.featured-content .paginator").outerWidth();
            var i = this.$(".mod.tweets");
            this.$(".featured-content").each(t.bind(function (e, t) {
                this.subviews.featured = new o({
                    el: t,
                    itemWidth: 192,
                    itemsPerView: 5,
                    transition: {
                        interval: !1
                    }
                })
            }, this)), this.subviews.election2012 = new l, i.length > 0 && (this.subviews.twitter = new c({
                el: ".mod.tweets",
                num_tweets: 9,
                columns: 3
            })), r.prototype._initializeTopic.call(this, e, "topic")
        }
    });
    return u
}), define("views/pages/media", ["jquery", "underscore", "backbone", "pubsub", "app", "baseappview", "views/modules/carousel/carousel-autosize", "views/modules/video", "views/modules/taboola"], function (e, t, i, n, s, r, o, a, l) {
    var c = r.extend({
        el: "#media-view",
        events: {
            "click .recommended, .more-from, .expando": "mediaTabClick",
            "mouseout .media-playlist": "mediaPlaylistMouseOut",
            "mouseover .media-playlist": "mediaPlaylistMouseIn",
            "click .filter-group li label": "filterSelect",
            "click .search-toggle": "searchToggle",
            "click .media-playlist a": "changeMediaClick",
            "click .sidenav li.sub": "sectionHighlight",
            "click .tabgroup a": "onClickTabgroupLinks",
            click: "userInteraction"
        },
        initialize: function (i) {
            i = e.extend(!0, {
                delay: {
                    playlistAutoClose: 250
                },
                animations: {
                    cinematic: {
                        change: {
                            fadeOut: {
                                duration: 300,
                                easing: "ease-in-out"
                            },
                            fadeIn: {
                                duration: 300,
                                easing: "ease-in-out"
                            }
                        }
                    }
                }
            }, i), t.bindAll(this, "switchToNextVideo", "handleResizeWindow"), this.win = s.get("win"), this.scrollEl = s.get("scrollEl"), this.breakingBar = s.get("breakingEl"), this.win.on("resize." + this.cid, t.throttle(this.handleResizeWindow, 50)), this.pubSub = {
                "breakingbar:before:open": t.bind(this.adjustTop, this, !0),
                "breakingbar:before:close": t.bind(this.adjustTop, this, !1)
            }, this.playlistTimer = null, this.init = !1, r.prototype.initialize.call(this, i);
            var n = e(".sidenav > li.sub-active");
            this.lastSectionName = n.attr("data-section")
        },
        handleResizeWindow: function () {
            this.browse && this.columnize(this.$el)
        },
        beforePageReveal: function (e, t, i) {
            this.isCinematicPath(t) || this.columnize(i)
        },
        afterPageReveal: function (e, t) {
            this.isCinematicPath(t) ? (this.$el.css({
                "-webkit-transform": "none",
                "-webkit-perspective": 0
            }), this.asset_type = null, -1 !== t.indexOf("/gallery") ? (this.asset_type = "gallery", this._initializeGallery()) : -1 !== t.indexOf("/photo") ? (this.asset_type = "photo", this._initializeImage(this.$el)) : -1 !== t.indexOf("/video") && (this.asset_type = "video", this._initializeVideo(this.$el)), this.browse = !1, this.isCinematicPath(e) || (this.playlistStuckOpen = !1, this.delayClosePlaylist(), e && this.$(".back-to-media").attr("href", "/" + e))) : this._initializeBrowse(), this.handleResizeWindow()
        },
        getRevealAppLoader: function () {
            return '<article id="media-view" class="ui-loading dark-medium"></article>'
        },
        animateChangePagePostData: function (e, t, i) {
            return this.isCinematicPath(t) ? this.isCinematicPath(e) ? this._fadeInNewCinematicContent(t, i) : this.slide(i, "left", this.options.animations.slide.duration, this.options.animations.slide.easing) : this.isCinematicPath(e) ? this.slide(i, "right", this.options.animations.slide.duration, this.options.animations.slide.easing) : r.prototype.animateChangePagePostData.apply(this, arguments)
        },
        animateChangePagePreData: function (e, t) {
            return this.isCinematicPath(e) || this.isCinematicPath(t) ? void 0 : this.changeBrowseSection(e, t)
        },
        changeBrowseSection: function (t, i) {
            var n = this.$(".sidenav"),
                s = this._getSubSectionPath(t),
                r = this._getSubSectionPath(i);
            if (s !== r) {
                var o, a;
                return n.children().each(function (t, i) {
                    i = e(i);
                    var n = i.attr("data-section") || "";
                    n === s ? (o = i.children("div").slideUp(250), i.removeClass("active")) : n === r && (a = i.children("div").slideDown(250), i.addClass("active"))
                }), o && this.registerAnimation(o.promise()), a && this.registerAnimation(a.promise()), e.when(o, a)
            }
        },
        _getSubSectionPath: function (e) {
            if (e = e.replace(/^media\/((latest|popular)\/)?/, "")) {
                var t = e.indexOf("/");
                return -1 === t ? e : e.substring(0, t)
            }
            return ""
        },
        isCinematicPath: function (e) {
            return e && -1 !== e.indexOf("/cinematic")
        },
        _fadeInNewCinematicContent: function (i, n) {
            return e.Deferred(t.bind(function (e) {
                this._swapRelatedMedia(n), this._swapNavBar(n), this._swapMainView(n, e)
            }, this)).promise()
        },
        _swapNavBar: function (e) {
            var i = this.animate(this.$(".cinematic-side-nav-ul"), "opacity", 0, this.options.animations.cinematic.change.fadeOut.duration, this.options.animations.cinematic.change.fadeOut.easing);
            i.done(t.bind(function () {
                var t = e.find(".cinematic-side-nav-ul");
                t.css("opacity", 0), this.$(".cinematic-side-nav-ul").replaceWith(t), this.animate(t, "opacity", 1, this.options.animations.cinematic.change.fadeIn.duration, this.options.animations.cinematic.change.fadeIn.easing)
            }, this))
        },
        _swapMainView: function (e, i) {
            var n = this.animate(this.$(".media-main-view"), "opacity", 0, this.options.animations.cinematic.change.fadeOut.duration, this.options.animations.cinematic.change.fadeOut.easing);
            n.done(t.bind(function () {
                var n = e.find(".media-main-view");
                if (n.css("opacity", 0), this.$(".media-main-view").replaceWith(n), n.length) {
                    var s = this.animate(n, "opacity", 1, this.options.animations.cinematic.change.fadeIn.duration, this.options.animations.cinematic.change.fadeIn.easing);
                    s.done(t.bind(function () {
                        i.resolve()
                    }, this))
                } else i.resolve()
            }, this))
        },
        _swapRelatedMedia: function (e) {
            var i = this.animate(this.$(".recommended"), "opacity", this.options.animations.cinematic.change.fadeOut.duration, this.options.animations.cinematic.change.fadeOut.easing);
            i.done(t.bind(function () {
                var t = e.find(".recommended");
                t.css("opacity", 0), this.$(".recommended").replaceWith(t), t.length && this.animate(t, "opacity", 1, this.options.animations.cinematic.change.fadeIn.duration, this.options.animations.cinematic.change.fadeIn.easing)
            }, this))
        },
        _initializeGallery: function () {
            var e = this.$(".galleries"),
                t = e.data().galleryId || 0;
            this.subviews.carousel = new o({
                ads: !1,
                el: this.$el,
                gallerySelector: e,
                scrollerColor: "dark",
                verticalAdjust: 117
            }), this.subviews.taboola = new l, this.subviews.taboola.getRelated(this.showRecommended, "photo", "photo", 10, null, t)
        },
        _initializeVideo: function (e) {
            var t = this.$(".video .videoObject").attr("id");
            this.subviews.video = new a({
                el: e,
                onVideoComplete: this.switchToNextVideo,
                autostart: !0
            }), this.subviews.taboola = new l, this.subviews.taboola.getRelated(this.showRecommended, "video", "video", 10, null, t)
        },
        userInteraction: function () {
            this.switchVideoTimer && clearTimeout(this.switchVideoTimer)
        },
        switchToNextVideo: function () {
            var e = this.$(".more-from .active").next();
            e.length && (this.switchVideoTimer = setTimeout(function () {
                e.find("a").click()
            }, 5e3))
        },
        _initializeImage: function (t) {
            s.lazyLoadImage(e(t).find(".viewport img"), "data-large-src")
        },
        onClickTabgroupLinks: function (t) {
            this.$(".tabgroup a").removeClass("active"), e(t.currentTarget).addClass("active")
        },
        destroy: function (e) {
            clearTimeout(this.switchVideoTimer), this.win.off("." + this.cid), r.prototype.destroy.call(this, e)
        },
        changeMediaClick: function (t) {
            var i = e(t.target);
            if (this.$(".playlist li.active").removeClass("active"), i.closest("li").addClass("active"), i.closest("nav").hasClass("recommended")) {
                var n = i.closest("img"),
                    r = s.get("taboolaResponseID"),
                    o = n.attr("data-type"),
                    a = n.attr("data-id");
                l.prototype.registerTaboolaClick(a, o, r)
            }
        },
        mediaTabClick: function (t) {
            var i = this.$(".media-playlist"),
                n = e(t.target).closest("li");
            n.hasClass("expando") ? i.hasClass("open") ? (this.playlistStuckOpen = !1, i.removeClass("open")) : (this.playlistStuckOpen = !0, i.addClass("open")) : n.hasClass("tab") && (i.addClass("open"), n.hasClass("active") || (i.find(".media-tabs .active").removeClass("active"), n.addClass("active"), i.find(".playlist").addClass("hidden"), i.find("." + n.attr("for")).removeClass("hidden")))
        },
        mediaPlaylistMouseOut: function () {
            this.playlistStuckOpen || this.delayClosePlaylist()
        },
        mediaPlaylistMouseIn: function () {
            clearTimeout(this.playlistTimer)
        },
        delayClosePlaylist: function () {
            this.$(".media-playlist").removeClass("initial")
        },
        _initializeBrowse: function () {
            this.gridWrapper = this.$(".grid-wrapper"), this.browse = !0
        },
        columnize: function (t) {
            var i = 360,
                n = t.find(".medialistitems"),
                s = e(window).width();
            window.clientWidth;
            var r = s - 157,
                o = Math.floor(r / i);
            1 > o && (o = 1), this.browseContent = t.find("#media-content"), this.browseContent.width(o * i + 31), n.removeClass("mediaview-featured");
            var a = n.slice(0, o);
            a.addClass("mediaview-featured")
        },
        filterSelect: function (t) {
            var i = e(t.currentTarget),
                n = i.parents(".filter-group").find("label");
            n.removeClass("active"), i.addClass("active")
        },
        adjustTop: function (e) {
            if (this.isBreakingBarOpen === e) return this.$el.addClass("no-transition"), e ? this.$el.addClass("offset") : this.$el.removeClass("offset"), void 0;
            this.$el.removeClass("no-transition"), this.isBreakingBarOpen = e;
            var i = 250;
            e ? (this.$el.addClass("offset"), setTimeout(t.bind(function () {
                this._setContentHeight(this.$el, this.breakingBar.height()), this.isCinematicPath(this.currentPath) || this.adjustMediaHeight(this.$el)
            }, this), i)) : (this._setContentHeight(this.$el), this.$el.removeClass("offset"), this.isCinematicPath(this.currentPath) || setTimeout(t.bind(function () {
                this.adjustMediaHeight(this.$el)
            }, this), i))
        },
        adjustMediaHeight: function () {
            this.adjustTop(this.isBreakingBarOpen)
        },
        searchToggle: function (t) {
            t && (t.stopPropagation(), t.preventDefault());
            var i = e(t.currentTarget);
            i.hasClass("active") ? (i.removeClass("active"), this.browseContent.removeClass("search"), this.searchOpen = !1) : (i.addClass("active"), this.browseContent.addClass("search"), this.searchOpen = !0), this.adjustMediaHeight(this.$el)
        },
        sectionHighlight: function (t) {
            var i = e(t.currentTarget);
            if (i.hasClass("active") && !e(t.target).attr("href")) {
                var n = i.children("div");
                i.hasClass("collapsed") ? (this.registerAnimation(n.slideDown(250).promise()), i.removeClass("collapsed")) : (this.registerAnimation(n.slideUp(250).promise()), i.addClass("collapsed"))
            }
        },
        showRecommended: function (i) {
            var n = e("#mediaview-recommended-template");
            if (1 === n.length) {
                var s = t.template(n.html(), {
                    data: i.list
                });
                e("#mediaview-cinematic-recommended").append(s)
            }
        }
    });
    return c
}), define("views/pages/blog", ["jquery", "underscore", "backbone", "app", "pubsub", "views/pages/stag-front", "views/modules/twitter", "views/modules/blogs"], function (e, t, i, n, s, r, o, a) {
    var l = r.extend({
        el: "#blog-card",
        _initializeTopic: function (e) {
            this.subviews.twitter = new o({
                el: ".stag .mod.tweets",
                num_tweets: 9,
                columns: 3
            }), this.subviews.blogs = new a({
                el: ".stag .mod.blogs"
            }), r.prototype._initializeTopic.call(this, e, "blog")
        }
    });
    return l
}), define("views/pages/userauth", ["jquery", "underscore", "backbone", "app", "pubsub", "baseview", "facebook", "fwinfo"], function (e, t, i, n, s, r, o) {
    var a = r.extend({
        el: "#userauth-card",
        initialize: function (e) {
            this.$top = n.get("scrollEl"), r.prototype.initialize.call(this, e)
        },
        afterPageReveal: function (t, i) {
            n.set("currentCardPath", i), o.init(function () {}, !0), e(".fb-login-button").attr("scope", o.permissions()), o.parse()
        },
        adjust: function () {
            this.$top.animate({
                scrollTop: 0
            }, 200)
        }
    });
    return a
}), define("views/pages/contactus-overlay", ["jquery", "underscore", "backbone", "state", "app", "simpleoverlay", "views/modules/footer", "pubsub"], function (e, t, i, n, s, r, o, a) {
    var l = r.extend({
        additionalEvents: {
            click: "closeOverlayForm",
            "click .contactus-tabs a": "changeTabs",
            "click .contact-us-faq a": "expandFaq",
            "click .overlayForm": "openOverlayForm",
            "click .faq-search": "openSearchForm"
        },
        initialize: function (e) {
            this.currentTab = null, this.overlayOpen = !1, r.prototype.initialize.call(this, e)
        },
        closeOverlayForm: function () {
            return this.overlayOpen ? (this.overlayOpen.fadeOut(200), this.overlayOpen = null, !1) : void 0
        },
        openSearchForm: function () {
            return a.trigger("masthead:expand", !0), !1
        },
        afterPageReveal: function () {
            this.$contactUsTabs = this.$(".contactus-tabs"), this.$clarificationsModal = this.$("#clarifications"), this.$letterToEditorModal = this.$("#letterToEditor"), this.subviews.footer = new o, r.prototype.afterPageReveal.apply(this, arguments)
        },
        expandFaq: function (t) {
            var i = e(t.target),
                n = i.next();
            n.is(":visible") ? (i.parent().removeClass("active"), n.slideUp(200)) : (i.parent().addClass("active"), n.slideDown(200))
        },
        changeTabs: function (t) {
            var i = e(t.target),
                n = i.attr("tab");
            n && this.currentTab !== n && (this.currentTab = n, this.$contactUsTabs.find(".active").removeClass("active"), this.$(".contact-us-faq").hide(), i.parent().addClass("active"), this.$("." + n).show())
        },
        openOverlayForm: function (t) {
            var i = e(t.target),
                n = i.data("flyout");
            if (n) {
                if (this.overlayOpen) return this.closeOverlayForm(), void 0;
                this.overlayOpen = "clarifications" === n ? this.$clarificationsModal : this.$letterToEditorModal, this.overlayOpen.fadeIn(200)
            }
            return !1
        }
    });
    return l
}), define("views/pages/sitemap", ["jquery", "underscore", "backbone", "pubsub", "app", "views/pages/base-page", "views/modules/ajax-widget", "baseappview"], function (e, t, i, n, s, r, o, a) {
    var l = a.extend({
        el: ".sitemap",
        initialize: function (e) {
            a.prototype.initialize.call(this, e)
        }
    });
    return l
}), define("views/modules/overlay", ["jquery", "underscore", "backbone", "pubsub", "app", "baseappview", "state", "views/modules/cards2", "views/modules/form", "views/modules/markets-autocomplete", "views/modules/ajax-widget"], function (e, t, i, n, s, r, o, a, l, c, u) {
    var h = r.extend({
        el: "#overlay",
        events: {
            "click .transition-wrap": "close",
            "click .close-overlay": "close",
            "submit #money-tools-form": "onMoneyToolsFormSubmit"
        },
        initialize: function (i) {
            i = e.extend(!0, {
                template: '<div id="overlay" class="no-transition"><div class="content"><div class="transition-wrap"><article class="asset clearfix story ui-loading light-medium"><div class="close-wrap"><a href="#" class="close close-overlay" data-ht="modalclose"></a></div></article></div></div><div class="film show"></div></div>'
            }), this.init = !1, t.bindAll(this, "close", "updateArrowLinks"), this.win = s.get("win"), this.scrollEl = s.get("scrollEl"), this.nav = s.get("navEl"), this.breaking = s.get("breakingEl"), this.breakingWrap = s.get("breakingWrapEl"), this.currentStoryIndex = -1, this.fromPath = null, this.storyCollection = [], this.animationIndex = 0, this.subviews = {}, this.pubSub = {
                "close:overlay": this.close,
                "updateArrowLinks:overlay": this.updateArrowLinks
            }, r.prototype.initialize.call(this, i)
        },
        setFixedPosition: function () {
            this.positionCloseButton("fixed"), r.prototype.setFixedPosition.apply(this, arguments)
        },
        animateChangePagePostData: function (e, i, n) {
            var s = n.find(".transition-wrap");
            return s.css("height", this.win.height() - 40), this.swapContent(this.$(".transition-wrap"), s).done(t.bind(function () {
                s.css("height", "")
            }, this))
        },
        getRevealAppLoader: function () {
            return this.options.template
        },
        beforePageReveal: function (e) {
            this.appRevealed || null === e || this.$el.find(".film").remove()
        },
        afterPageReveal: function (i, s, r, a) {
            var h = this.$(".transition-wrap:first"),
                d = h.find("article.asset"),
                p = this.win.height();
            if (p > d.outerHeight() && d.css({
                "min-height": p
            }), this.fromPath = i, null === i) {
                var f = this.getSectionName();
                o.preloadPath(f).done(t.bind(function () {
                    this.updateArrowLinks()
                }, this))
            }
            this.init || (this.initializeDom(), this.init = !0, this.currentStoryIndex = this.getBestStoryIndex(s), n.trigger("open:overlay")), this.updateArrowLinks(), a && (this.subviews.storyView = new a({
                el: h
            })), e(".idc-market-tools").length && (this.moneyToolsForm = new l({
                el: this.$el.find("#money-tools-form")
            }), this.subviews.MarketsAutocomplete || (this.subviews.markets_autocomplete = new c({
                el: this.$(".idc-market-tools .query"),
                url: "/services/markets/autocomplete/json/",
                max_results: 4
            })), this.subviews.markets = new u({
                el: ".load-markets",
                url: "/services/markets/interior-widget/",
                refresh: 6e4,
                contents: "#default-market-quotes"
            })), this.positionCloseButton("fixed")
        },
        initializeDom: function () {
            this.arrowWrapTemplate = this.$("#overlay-arrow-wrap"), this.arrowContainer = this.$(".overlay-arrows"), this.film = this.$(".film"), this.collection = this.$(".content")
        },
        animateRevealApp: function () {
            var i = this.$(".transition-wrap"),
                n = this.win.height() - 40;
            if (this.isSafari5 || !this.useCSSTransforms) return i.css({
                height: n
            }), this.show();
            i.css({
                height: n,
                overflow: "hidden",
                opacity: 0
            }), i[0].style[this.transformCssName] = "scale(0.4)", i[0].style[this.transformOriginCssName] = "50% " + .25 * n + "px", i[0].style[this.transitionCssName] = this.transformCssHyphenName + " 300ms linear, opacity 300ms linear", this.$el.show().css({
                opacity: 1,
                display: "block"
            });
            var s = this.$(".film").removeClass("show"),
                r = this.animate(s, "opacity", ".85", 300, "linear");
            t.delay(t.bind(function () {
                i[0].style[this.transformCssName] = "scale(1.0)", i[0].style.opacity = 1
            }, this));
            var o = this.registerTransitionEndListener(i);
            return e.when(o, r).done(t.bind(function () {
                this.clearTransition(i), i[0].style[this.transformOriginCssName] = ""
            }, this)), o.promise()
        },
        beforeAppRemove: function () {
            this.positionCloseButton("absolute", s.getScrollPosition())
        },
        animateRemoveApp: function () {
            return this.isSafari5 ? this.hide() : this.appRevealed ? this.animate(this.$el, "opacity", 0, 250) : (this.$el.css("z-index", 1e3), this.hide(!0))
        },
        updateArrowLinks: function () {
            if (-1 === this.currentStoryIndex && (this.currentStoryIndex = this.getBestStoryIndex(window.location.pathname), -1 === this.currentStoryIndex)) return this.arrowContainer.removeClass("show"), void 0;
            var e = this.getStoryCollection();
            if (this.prevAsset !== e[this.currentStoryIndex - 1] || this.nextAsset !== e[this.currentStoryIndex + 1]) {
                this.prevAsset = e[this.currentStoryIndex - 1], this.nextAsset = e[this.currentStoryIndex + 1];
                var t = this.buildArrowDom(this.prevAsset, "previous");
                t = t.add(this.buildArrowDom(this.nextAsset, "next")), this.arrowContainer.empty().append(t), this.arrowContainer.addClass("show")
            }
        },
        buildArrowDom: function (i, n) {
            var s = !i;
            if (i ? i.disabled = "" : i = {
                disabled: "disabled"
            }, i.dir = n, i.photo && i.photo.crops && i.photo.crops["1_1"] && -1 !== i.photo.crops["1_1"].indexOf(".jpg")) {
                i.image = i.photo.crops["1_1"];
                var r = "_r64.jpg?3aa4db7cc8ccd5d587e4ef60ee4f4bfbf4814675";
                i.image = i.image.replace(".jpg", r)
            }
            var o = e(t.template(this.arrowWrapTemplate.html(), i));
            return s ? this.isApple ? o.css({
                display: "none"
            }) : o.css({
                "z-index": 1
            }) : this.isApple && o.find(".preview").remove(), o
        },
        positionCloseButton: function (e, t, i) {
            var n = i ? i.find(".close-wrap") : this.$(".close-wrap");
            "absolute" === e ? n.css({
                position: e,
                top: t || 0
            }) : n.css({
                position: e,
                top: ""
            })
        },
        close: function (t) {
            if (!t || t.target === t.currentTarget) {
                var i = e(t.currentTarget).attr("data-ht") || "modalclose";
                return n.trigger("heattrack", i), o.navigateToPreloadedUrl(), t ? !1 : void 0
            }
        },
        destroy: function (e) {
            r.prototype.destroy.call(this, e)
        },
        getSectionName: function () {
            var e, i = "",
                n = this.pageInfo;
            if (n && (n.ss || n.ssts)) {
                if (e = n.ss, !e) {
                    e = n.ssts;
                    var r = e.indexOf("/");
                    r > 0 && (e = e.substring(0, r)), -1 === t.indexOf(a.prototype.cards, e) && (e = null)
                }
                s.set("ss", e), i = e, e.indexOf("/") > 0 && (i = e.substring(0, e.indexOf("/"))), "home" === i ? i = "/" : i += "/"
            }
            return i
        },
        getBestStoryIndex: function (e) {
            e && "/" !== e[0] && (e = "/" + e);
            var t = this.getStoryCollection();
            if (!t || 0 === t.length) return -1;
            var i = -1,
                n = -1,
                s = this.currentStoryIndex; - 1 === s && (s = 0);
            var r;
            for (r = s; r >= 0; r--) if (t[r].links.html === e) {
                i = r;
                break
            }
            for (r = s; t.length > r; r++) if (t[r].links.html === e) {
                n = r;
                break
            }
            if (-1 === n && -1 === i) {
                var o = {
                    links: {
                        html: e
                    }
                };
                return this.storyCollection.unshift(o), 0
            }
            return -1 === n ? i : -1 === i ? n : n - s > s - i ? i : n
        },
        getStoryCollection: function () {
            if (0 === this.storyCollection.length) {
                var e = o.getPreloadedPageInfo(),
                    i = e && e.asset_collection;
                i && (this.storyCollection = t.filter(i, function (e) {
                    return 0 !== e.links.html.indexOf("http") ? e.headline && e.links && e.links.html : void 0
                }))
            }
            return this.storyCollection
        },
        animateChangePagePreData: function (i, n) {
            var r = e.Deferred(),
                o = this.win.height() - 40,
                a = s.getScrollPosition(),
                l = this.$(".transition-wrap:last");
            this.prepareContentForTransition(l, a, o);
            var c = e(this.options.template),
                u = c.find(".transition-wrap");
            u.css({
                position: "absolute"
            }), u.attr("data-animation-index", ++this.animationIndex), this.prepareContentForTransition(u, 0, o), this.scrollEl.scrollTop(0), this.collection.append(u), this.positionCloseButton("absolute", a, l);
            var h = this.getBestStoryIndex(n);
            if (-1 !== this.currentStoryIndex && -1 !== h) {
                l.css("left", "0%");
                var d, p = "0%";
                this.currentStoryIndex > h ? (u.css("left", "-100%"), d = "100%") : (u.css("left", "100%"), d = "-100%");
                var f = e.when(this.animate(l, "left", d, 350, "ease-in-out"), this.animate(u, "left", p, 350, "ease-in-out"));
                f.done(t.bind(function () {
                    this.clearTransition(l), l.remove(), parseInt(u.attr("data-animation-index"), 10) === this.animationIndex && this.resetContentTransition(u), r.resolve()
                }, this))
            } else r = this.swapContent(l, u);
            return this.currentStoryIndex = h, r.promise()
        },
        prepareContentForTransition: function (e, t, i) {
            e.css({
                height: i
            }), e.children().css({
                top: -1 * t
            })
        },
        resetContentTransition: function (e) {
            e.css({
                position: "relative"
            })
        },
        onMoneyToolsFormSubmit: function (t) {
            t.preventDefault(), this.subviews.markets_autocomplete.clearResults();
            var n, s = e(t.currentTarget).find(".query"),
                r = s.val(),
                o = e(t.currentTarget).attr("data-type");
            switch (r = r.split(" - ")[0], s.val(r), s.attr("data-symbol", r), o) {
                case "C":
                    n = "stocks";
                    break;
                case "F":
                    n = "mutual-funds";
                    break;
                case "G":
                    n = "etfs";
                    break;
                default:
                    n = "stocks"
            }
            var a = "/money/lookup/" + n + "/" + s.attr("data-symbol") + "/";
            Modernizr.history ? i.history.navigate(a, {
                trigger: !0
            }) : window.location = a
        }
    });
    return h
}), define("common", function () {});