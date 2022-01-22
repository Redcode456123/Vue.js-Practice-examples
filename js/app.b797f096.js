(function (t) {
    function e(e) {
        for (var s, n, i = e[0], l = e[1], o = e[2], u = 0, d = []; u < i.length; u++) n = i[u], Object.prototype.hasOwnProperty.call(c, n) && c[n] && d.push(c[n][0]), c[n] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        f && f(e);
        while (d.length) d.shift()();
        return r.push.apply(r, o || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, n = 1; n < a.length; n++) {
                var i = a[n];
                0 !== c[i] && (s = !1)
            }
            s && (r.splice(e--, 1), t = l(l.s = a[0]))
        }
        return t
    }

    var s = {}, n = {app: 0}, c = {app: 0}, r = [];

    function i(t) {
        return l.p + "js/" + ({}[t] || t) + "." + {
            "chunk-1630895c": "6b606d73",
            "chunk-2d21a36a": "011448c1",
            "chunk-2d2255f7": "6a429cb7",
            "chunk-2d22d746": "bc70cc63",
            "chunk-3dacbc94": "c97a5bf9",
            "chunk-5241b98c": "f6eebd31",
            "chunk-624f704c": "ef4fa4c3",
            "chunk-8feb3fe6": "36e17c26",
            "chunk-f30224e4": "0164eb13"
        }[t] + ".js"
    }

    function l(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {i: e, l: !1, exports: {}};
        return t[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }

    l.e = function (t) {
        var e = [], a = {
            "chunk-1630895c": 1,
            "chunk-3dacbc94": 1,
            "chunk-5241b98c": 1,
            "chunk-624f704c": 1,
            "chunk-8feb3fe6": 1,
            "chunk-f30224e4": 1
        };
        n[t] ? e.push(n[t]) : 0 !== n[t] && a[t] && e.push(n[t] = new Promise((function (e, a) {
            for (var s = "css/" + ({}[t] || t) + "." + {
                "chunk-1630895c": "841fb8f8",
                "chunk-2d21a36a": "31d6cfe0",
                "chunk-2d2255f7": "31d6cfe0",
                "chunk-2d22d746": "31d6cfe0",
                "chunk-3dacbc94": "deb89a94",
                "chunk-5241b98c": "fea70abb",
                "chunk-624f704c": "36dba35d",
                "chunk-8feb3fe6": "fa1f29a6",
                "chunk-f30224e4": "79ae0eb8"
            }[t] + ".css", c = l.p + s, r = document.getElementsByTagName("link"), i = 0; i < r.length; i++) {
                var o = r[i], u = o.getAttribute("data-href") || o.getAttribute("href");
                if ("stylesheet" === o.rel && (u === s || u === c)) return e()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                o = d[i], u = o.getAttribute("data-href");
                if (u === s || u === c) return e()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function (e) {
                var s = e && e.target && e.target.src || c,
                    r = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = s, delete n[t], f.parentNode.removeChild(f), a(r)
            }, f.href = c;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        })).then((function () {
            n[t] = 0
        })));
        var s = c[t];
        if (0 !== s) if (s) e.push(s[2]); else {
            var r = new Promise((function (e, a) {
                s = c[t] = [e, a]
            }));
            e.push(s[2] = r);
            var o, u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = i(t);
            var d = new Error;
            o = function (e) {
                u.onerror = u.onload = null, clearTimeout(f);
                var a = c[t];
                if (0 !== a) {
                    if (a) {
                        var s = e && ("load" === e.type ? "missing" : e.type), n = e && e.target && e.target.src;
                        d.message = "Loading chunk " + t + " failed.\n(" + s + ": " + n + ")", d.name = "ChunkLoadError", d.type = s, d.request = n, a[1](d)
                    }
                    c[t] = void 0
                }
            };
            var f = setTimeout((function () {
                o({type: "timeout", target: u})
            }), 12e4);
            u.onerror = u.onload = o, document.head.appendChild(u)
        }
        return Promise.all(e)
    }, l.m = t, l.c = s, l.d = function (t, e, a) {
        l.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) l.d(a, s, function (e) {
            return t[e]
        }.bind(null, s));
        return a
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "Vue.js-Practice-examples/", l.oe = function (t) {
        throw console.error(t), t
    };
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], u = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var d = 0; d < o.length; d++) e(o[d]);
    var f = u;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    }, "3b7c": function (t, e, a) {
    }, 4678: function (t, e, a) {
        var s = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function n(t) {
            var e = c(t);
            return a(e)
        }

        function c(t) {
            if (!a.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return s[t]
        }

        n.keys = function () {
            return Object.keys(s)
        }, n.resolve = c, t.exports = n, n.id = "4678"
    }, "50c2": function (t, e, a) {
        "use strict";
        a("3b7c")
    }, "56d7": function (t, e, a) {
        "use strict";
        a.r(e), a.d(e, "UrlResolver", (function () {
            return N
        }));
        var s = a("2b0e"), n = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "app"}}, [a("Navbar"), a("router-view")], 1)
            }, c = [], r = (a("ab8b"), a("1e4b"), function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "Navbar"}}, [t._m(0), a("header", {
                    staticClass: "u-align-center-sm u-align-center-xs u-clearfix u-gradient u-header u-sticky u-sticky-3a3f u-header",
                    attrs: {id: "sec-28ab"}
                }, [a("div", {staticClass: "u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1"}, [t._m(1), a("div", {staticClass: "u-social-icons u-spacing-10 u-social-icons-1"}, [a("a", {
                    staticClass: "u-social-url",
                    attrs: {title: "facebook", target: "_blank", href: ""}
                }, [a("span", {staticClass: "u-icon u-social-facebook u-social-icon u-icon-1"}, [a("svg", {
                    staticClass: "u-svg-link",
                    attrs: {preserveAspectRatio: "xMidYMin slice", viewBox: "0 0 112 112"}
                }, [a("use", {
                    attrs: {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xlink:href": "#svg-25bb"
                    }
                })]), a("svg", {
                    staticClass: "u-svg-content",
                    attrs: {viewBox: "0 0 112 112", x: "0", y: "0", id: "svg-25bb"}
                }, [a("circle", {
                    attrs: {
                        fill: "currentColor",
                        cx: "56.1",
                        cy: "56.1",
                        r: "55"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2\n            c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                    }
                })])])]), a("a", {
                    staticClass: "u-social-url",
                    attrs: {title: "twitter", target: "_blank", href: ""}
                }, [a("span", {staticClass: "u-icon u-social-icon u-social-twitter u-icon-2"}, [a("svg", {
                    staticClass: "u-svg-link",
                    attrs: {preserveAspectRatio: "xMidYMin slice", viewBox: "0 0 112 112"}
                }, [a("use", {
                    attrs: {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xlink:href": "#svg-d756"
                    }
                })]), a("svg", {
                    staticClass: "u-svg-content",
                    attrs: {viewBox: "0 0 112 112", x: "0", y: "0", id: "svg-d756"}
                }, [a("circle", {
                    staticClass: "st0",
                    attrs: {fill: "currentColor", cx: "56.1", cy: "56.1", r: "55"}
                }), a("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2\n            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1\n            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14\n            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4\n            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                    }
                })])])]), a("a", {
                    staticClass: "u-social-url",
                    attrs: {title: "instagram", target: "_blank", href: ""}
                }, [a("span", {staticClass: "u-icon u-social-icon u-social-instagram u-icon-3"}, [a("svg", {
                    staticClass: "u-svg-link",
                    attrs: {preserveAspectRatio: "xMidYMin slice", viewBox: "0 0 112 112"}
                }, [a("use", {
                    attrs: {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xlink:href": "#svg-f183"
                    }
                })]), a("svg", {
                    staticClass: "u-svg-content",
                    attrs: {viewBox: "0 0 112 112", x: "0", y: "0", id: "svg-f183"}
                }, [a("circle", {
                    attrs: {
                        fill: "currentColor",
                        cx: "56.1",
                        cy: "56.1",
                        r: "55"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2\n            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                    }
                }), a("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8\n            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5\n            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                    }
                })])])])]), a("nav", {staticClass: "u-align-center u-menu u-menu-dropdown u-offcanvas u-menu-1"}, [a("div", {
                    staticClass: "menu-collapse",
                    staticStyle: {"font-size": "1rem"}
                }, [a("a", {
                    staticClass: "u-button-style u-nav-link",
                    attrs: {href: "#"}
                }, [a("svg", {
                    staticClass: "u-svg-link",
                    attrs: {preserveAspectRatio: "xMidYMin slice", viewBox: "0 0 302 302"}
                }, [a("use", {
                    attrs: {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xlink:href": "#svg-8a8f"
                    }
                })]), a("svg", {
                    staticClass: "u-svg-content",
                    staticStyle: {"enable-background": "new 0 0 302 302"},
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1",
                        id: "svg-8a8f",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 302 302",
                        "xml:space": "preserve"
                    }
                }, [a("g", [a("rect", {attrs: {y: "36", width: "302", height: "30"}}), a("rect", {
                    attrs: {
                        y: "236",
                        width: "302",
                        height: "30"
                    }
                }), a("rect", {
                    attrs: {
                        y: "136",
                        width: "302",
                        height: "30"
                    }
                })]), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g"), a("g")])])]), a("div", {staticClass: "u-custom-menu u-nav-container"}, [a("ul", {staticClass: "u-nav u-unstyled u-nav-1"}, [a("li", {staticClass: "u-nav-item"}, [a("a", {staticClass: "u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"}, [a("router-link", {
                    staticStyle: {color: "#0f0f0f"},
                    attrs: {to: "/"}
                }, [t._v("Home")])], 1)]), a("li", {staticClass: "u-nav-item"}, [a("a", {staticClass: "u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"}, [a("router-link", {
                    staticStyle: {color: "#0f0f0f"},
                    attrs: {to: "/Products"}
                }, [t._v("Products")])], 1)]), t._m(2), t._m(3)])]), a("div", {staticClass: "u-custom-menu u-nav-container-collapse"}, [a("div", {staticClass: "u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav"}, [a("div", {staticClass: "u-inner-container-layout u-sidenav-overflow"}, [a("div", {staticClass: "u-menu-close"}, [a("ul", {staticClass: "u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"}, [a("li", {staticClass: "u-nav-item"}, [a("a", {staticClass: "u-button-style u-nav-link"}, [a("router-link", {
                    staticStyle: {color: "white"},
                    attrs: {to: "/"}
                }, [t._v("Home")])], 1)]), a("li", {staticClass: "u-nav-item"}, [a("a", {staticClass: "u-button-style u-nav-link"}, [a("router-link", {
                    staticStyle: {color: "white"},
                    attrs: {to: "/Products"}
                }, [t._v("Products")])], 1)]), t._m(4), t._m(5)])])])]), a("div", {staticClass: "u-black u-menu-overlay u-opacity u-opacity-80"})])]), a("a", {
                    staticClass: "u-shopping-cart u-shopping-cart-1",
                    style: t.onCartCountChange(),
                    on: {
                        click: function (e) {
                            return t.$router.push({name: "Cart"})
                        }
                    }
                }, [a("span", {staticClass: "u-icon u-shopping-cart-icon"}, [a("svg", {
                    staticClass: "u-svg-link",
                    attrs: {preserveAspectRatio: "xMidYMin slice", viewBox: "0 0 16 16"}
                }, [a("use", {
                    attrs: {
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xlink:href": "#svg-f766"
                    }
                })]), a("svg", {
                    staticClass: "u-svg-content",
                    attrs: {viewBox: "0 0 16 16", x: "0px", y: "0px", id: "svg-f766"}
                }, [a("path", {attrs: {d: "M14.5,3l-2.1,5H6.1L5.9,7.6L4,3H14.5 M0,0v1h2.1L5,8l-2,4h11v-1H4.6l1-2H13l3-7H3.6L2.8,0H0z M12.5,13\n\tc-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S13.3,13,12.5,13L12.5,13z M4.5,13C3.7,13,3,13.7,3,14.5S3.7,16,4.5,16\n\tS6,15.3,6,14.5S5.3,13,4.5,13L4.5,13z"}})]), a("span", {
                    staticClass: "u-icon-circle u-palette-1-base u-shopping-cart-count",
                    staticStyle: {"font-size": "0.75rem"}
                }, [t._v(" " + t._s(t.calcSum) + " ")])])])])])])
            }), i = [function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("head", [a("meta", {
                    attrs: {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }
                }), a("meta", {attrs: {charset: "utf-8"}}), a("title", [t._v("Copy of Home")]), a("link", {
                    attrs: {
                        id: "u-theme-google-font",
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
                    }
                }), a("script", {
                    staticClass: "u-script",
                    attrs: {type: "application/javascript", src: "Vue.js-Practice-examples/src/assets/js/nicepage.js"}
                }), a("link", {
                    attrs: {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "//www.shieldui.com/shared/components/latest/css/light-glow/all.min.css"
                    }
                })])
            }, function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("a", {
                    staticClass: "u-image u-logo u-image-1",
                    attrs: {href: "#", "data-image-width": "80", "data-image-height": "40"}
                }, [a("img", {staticClass: "u-logo-image u-logo-image-1", attrs: {src: "Vue.js-Practice-examples/src/assets/images/logo.png"}})])
            }, function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("li", {staticClass: "u-nav-item"}, [a("a", {
                    staticClass: "u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base",
                    staticStyle: {padding: "10px 20px"},
                    attrs: {href: "#"}
                }, [t._v("Contact")])])
            }, function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("li", {staticClass: "u-nav-item"}, [a("a", {
                    staticClass: "u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base",
                    staticStyle: {padding: "10px 20px"},
                    attrs: {href: "#"}
                }, [t._v("Page 1")])])
            }, function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("li", {staticClass: "u-nav-item"}, [a("a", {
                    staticClass: "u-button-style u-nav-link",
                    attrs: {href: "Contact.html"}
                }, [t._v("Contact")])])
            }, function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("li", {staticClass: "u-nav-item"}, [a("a", {
                    staticClass: "u-button-style u-nav-link",
                    attrs: {href: "Page-1.html"}
                }, [t._v("Page 1")])])
            }], l = {
                name: "Navbar", methods: {
                    onCartCountChange: function () {
                        return this.calcSum > 0 ? "pointerEvent:auto;cursor:pointer" : "pointerEvent:none;cursor:not-allowed;pointer-events: none;"
                    }
                }, computed: {
                    calcSum() {
                        let t = 0;
                        return null === this.$store.state.cart[0] || this.$store.state.cart.forEach((e, a) => {
                            t += e.quantity
                        }), t
                    }
                }
            }, o = l, u = (a("50c2"), a("2877")), d = Object(u["a"])(o, r, i, !1, null, "2ee6626e", null), f = d.exports,
            h = {
                data() {
                    return {}
                }, components: {Navbar: f}
            }, p = h, b = Object(u["a"])(p, n, c, !1, null, null, null), m = b.exports, v = a("2f62"), g = a("bc3a"),
            j = a.n(g), y = a("0e44"), k = a("b330"), C = a("15a4");
        s["default"].use(v["a"]);
        const w = new v["a"].Store({
            state: {count: 0, products: [], cart: [], onSale: [], newComing: [], productSelected: ""},
            plugins: [Object(y["a"])({paths: ["cart"]})],
            mutations: {
                INCREMENT(t) {
                    t.count++
                }, deleteProductFromCart(t, {index: e}) {
                    t.cart.splice(e, 1)
                }, setProducts(t, e) {
                    t.products = e
                }, setOnSale(t, e) {
                    t.onSale = e
                }, setNewComing(t, e) {
                    t.newComing = e
                }, resetCart(t, e) {
                    t.cart = []
                }, addToCart(t, e) {
                    this.state.cart.push({id: e.id, model: e.model, image: e.image, price: e.price, quantity: 1})
                }, RemoveFromCart(t, e) {
                    t.products.find(t => t.id === parseInt(e.id));
                    let a = t.cart.findIndex(t => t.id === e.id);
                    if (-1 === a) ; else {
                        if (t.cart[a].quantity < 1) return;
                        this.state.cart[a].quantity--
                    }
                }, incrementItemQuantity(t, e) {
                    this.state.cart[e].quantity = parseInt(this.state.cart[e].quantity) + 1
                }
            },
            actions: {
                addProductToCart(t, e) {
                    let a = e.itemRequested, s = t.state.cart.findIndex(t => parseInt(t.id) === parseInt(a.id));
                    if (-1 !== s) {
                        if (t.state.cart[s].quantity > t.getters["getQuantityAvailableInDbById"](parseInt(a.id)) - 1) return;
                        t.commit("incrementItemQuantity", s)
                    } else t.commit("addToCart", a)
                }, async fetchProducts({commit: t, state: e}) {
                    let a = N.resolve("Vue.js-Practice-examples/src/assets/phones.json", "");
                    await j.a.get(a).then(e => {
                        t("setProducts", e.data)
                    });
                    let s = [];
                    e.products.map(t => {
                        for (let e = 0; e < Object.keys(t).length; e++) t["onSale"] && s.push(t["onSale"])
                    }), t("setOnSale", s[0]), s = [], e.products.map(t => {
                        for (let e = 0; e < Object.keys(t).length; e++) t["newComing"] && s.push(t["newComing"])
                    }), t("setNewComing", s[0])
                }
            },
            getters: {
                getOnSale: t => t.onSale, getQuantityAvailableInDbById: (t, e) => t => {
                    let a = e.getProductRequestedById(t);
                    return parseInt(a.quantity)
                }, getProductRequestedById: (t, e) => t => {
                    const a = Object(k["a"])(C["a"]);
                    let s = null, n = !1;
                    a.findDeep(e.getAllProducts, (e, a, c) => {
                        (n || "id" === a && e === parseInt(t)) && (n = !1, s = c)
                    }, {checkCircular: !1, skipChildren: !0, cloneDeep: !1});
                    return n = !1, s
                }, getMyCart: t => t.cart, getAllProducts: t => t.products, getTotalToPay: t => {
                    if (null === t.cart[0]) return 0;
                    {
                        let e = 0;
                        return t.cart.forEach((t, a) => {
                            e += t.quantity * t.price
                        }), e
                    }
                }, getTotalItemsInCart: t => {
                    let e = 0;
                    return null === t.cart[0] || t.cart.forEach((t, a) => {
                        e += t.quantity
                    }), e
                }
            }
        });
        s["default"].mixin({
            computed: {}, mounted: function () {
            }
        });
        var x = w, _ = a("8c4f");
        s["default"].use(_["a"]);
        const S = _["a"].prototype.push, z = _["a"].prototype.replace;
        _["a"].prototype.push = function (t, e, a) {
            return e || a ? S.call(this, t, e, a) : S.call(this, t).catch(t => t)
        }, _["a"].prototype.replace = function (t, e, a) {
            return e || a ? z.call(this, t, e, a) : z.call(this, t).catch(t => t)
        };
        var F = new _["a"]({
               // mode: "history",
                routes: [{
                    path: "/",
                    name: "/home",
                    component: () => a.e("chunk-1630895c").then(a.bind(null, "bb51"))
                }, {
                    path: "/Products",
                    name: "products",
                    component: () => a.e("chunk-f30224e4").then(a.bind(null, "e6dc"))
                }, {
                    path: "/CartDetails",
                    name: "Cart",
                    params: !0,
                    component: () => a.e("chunk-3dacbc94").then(a.bind(null, "b789"))
                }, {
                    path: "/about",
                    name: "about",
                    component: () => a.e("chunk-2d22d746").then(a.bind(null, "f820"))
                }, {
                    path: "/showDetail",
                    name: "showDetail",
                    params: !0,
                    component: () => a.e("chunk-624f704c").then(a.bind(null, "c6fe"))
                }, {
                    path: "/success",
                    name: "success",
                    component: () => a.e("chunk-2d21a36a").then(a.bind(null, "bb0d"))
                }, {
                    path: "/failure",
                    name: "failure",
                    component: () => a.e("chunk-2d2255f7").then(a.bind(null, "e3b5"))
                }, {
                    path: "/info",
                    name: "info",
                    params: !0,
                    component: () => a.e("chunk-5241b98c").then(a.bind(null, "2469")),
                    beforeEnter(t, e, a) {
                        "/info" === t.path ? x.state.cart.length > 0 ? a("/Info") : a("/") : a()
                    }
                }, {
                    path: "/order-complete",
                    name: "order-complete",
                    params: "true",
                    component: () => a.e("chunk-8feb3fe6").then(a.bind(null, "092c"))
                }],
                scrollBehavior() {
                    document.getElementById("app").scrollIntoView()
                }
            }), P = a("f309"), E = a("5f5b"), M = a("133f"), O = a.n(M), I = a("d768"), B = a.n(I), q = a("1dce"),
            A = a.n(q), H = a("11a1");
        const N = a("6107");
        s["default"].use(E["a"]), s["default"].use(O.a), s["default"].use(A.a), s["default"].use(B.a), s["default"].use(H["a"]), s["default"].use(P["a"]);
        const T = {};
        new s["default"]({
            store: x, router: F, opts: T, data: {}, created() {
                x.dispatch("fetchProducts").then(t => {
                }).catch(t => console.log(t))
            }, render: t => t(m)
        }).$mount("#app")
    }
});
//# sourceMappingURL=app.b797f096.js.map
