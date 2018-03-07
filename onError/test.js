!
function(e) {
    function t() {
        var e = document.currentScript;
        if (!e) {
            var t = document.scripts;
            e = t[t.length - 1]
        }
        return e
    }
    function r(e, t, r) {
        var n = e[t];
        e[t] = r(n)
    }
    function n(e) {
        return "function" != typeof e ? e: (e.__injected__ || (e.__injected__ = function() {
            try {
                return e.apply(this, arguments)
            } catch(e) {
                throw s(e),
                w = !0,
                e
            }
        }), e.__injected__)
    }
    function a(e, t) {
        var r = /^[0-9a-z]{64}$/i;
        return e ? !!e.match(r) || (t || console.error("Fundebug: apikey格式错误"), !1) : (t || console.error("Fundebug: 请配置apikey"), !1)
    }
    function i(t) {
        if (!t) return null;
        var r = {};
        return e.XMLHttpRequest ? r = {
            name: t.name,
            message: t.message,
            fileName: t.fileName || t.sourceURL,
            lineNumber: t.lineNumber || t.line,
            columnNumber: t.columnNumber || t.column
        }: r.message = t.message,
        r
    }
    function o() {
        var e;
        try {
            throw new Error("")
        } catch(t) {
            e = t.stack
        }
        if (e) return e = e.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, ""),
        e = e.replace(/^Error\n/g, ""),
        e = "generated-stack:\n" + e
    }
    function u() {
        for (var e, t = [], r = arguments.callee.caller.caller; r && t.length < 10;) {
            var n = r.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
            e = n && n[1] || "[anonymous]",
            t.push(e),
            r = r.caller
        }
        return "generated-stack:\n" + t.join("\n")
    }
    function s(e) {
        if (e) {
            var t = e.stack;
            t = t.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, "");
            var r = i(e);
            h({
                name: r.name || "uncaught error",
                message: r.message,
                fileName: r.fileName,
                lineNumber: r.lineNumber,
                columnNumber: r.columnNumber,
                stacktrace: t,
                severity: "error",
                type: "uncaught"
            })
        }
    }
    function l(t) {
        if (!L.silentResource && !t.message) {
            var r;
            r = t.target ? t.target: t.srcElement;
            var n = r && r.outerHTML;
            n && n.length > 200 && (n = n.slice(0, 200));
            var a = {
                type: "resourceError",
                target: {
                    outerHTML: n,
                    src: r && r.src,
                    tagName: r && r.tagName,
                    id: r && r.id,
                    className: r && r.className,
                    name: r && r.name,
                    type: r && r.type,
                    XPath: c(r),
                    selector: m(r),
                    timeStamp: t.timeStamp
                }
            };
            if (r.src !== e.location.href && (!r.src || !r.src.match(/.*\/(.*)$/) || r.src.match(/.*\/(.*)$/)[1]) && a.target.src && e.XMLHttpRequest) {
                var i = new XMLHttpRequest;
                i.Fundebug = !0,
                i.open("HEAD", a.target.src),
                i.send(),
                i.onload = function(e) {
                    200 !== e.target.status && (a.target.status = e.target.status, a.target.statusText = e.target.statusText),
                    h(a)
                }
            }
        }
    }
    function c(e) {
        for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
            var r, n = 0,
            a = !1;
            for (r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
            for (r = e.nextSibling; r && !a; r = r.nextSibling) r.nodeName == e.nodeName && (a = !0);
            var i = (e.prefix ? e.prefix + ":": "") + e.localName,
            o = n || a ? "[" + (n + 1) + "]": "";
            t.splice(0, 0, i + o)
        }
        return t.length ? "/" + t.join("/") : null
    }
    function m(e) {
        for (var t = []; e.parentNode;) {
            if (e.id) {
                t.unshift("#" + e.id);
                break
            }
            if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
            else {
                for (var r = 1,
                n = e; n.previousElementSibling; n = n.previousElementSibling, r++);
                t.unshift(e.tagName + ":nth-child(" + r + ")")
            }
            e = e.parentNode
        }
        return t.join(" > ")
    }
    function f(e) {
        x.push(e),
        x.length > 20 && x.shift()
    }
    function p(t) {
        var r;
        r = t.target ? t.target: t.srcElement;
        var n = r && r.outerHTML;
        n && n.length > 200 && (n = n.slice(0, 200)),
        f({
            type: "click",
            page: {
                url: e.location.href,
                title: document.title
            },
            detail: {
                outerHTML: n,
                tagName: r && r.tagName,
                id: r && r.id,
                className: r && r.className,
                name: r && r.name
            },
            time: (new Date).getTime()
        })
    }
    function d(e, t) {
        M = t;
        var r = {
            type: "navigation",
            detail: {
                from: e,
                to: t
            },
            time: (new Date).getTime()
        };
        f(r)
    }
    function g(t) {
        var r = console[t];
        console[t] = function() {
            var n = {
                type: "console",
                page: {
                    url: e.location.href,
                    title: document.title
                },
                detail: {
                    level: t,
                    arguments: Array.prototype.slice.apply(arguments).join(" ")
                },
                time: (new Date).getTime()
            };
            if (L.silentConsole || f(n), "function" == typeof r) if (r.apply) r.apply(console, arguments);
            else {
                var a = Array.prototype.slice.apply(arguments).join(" ");
                r(a)
            }
        }
    }
    function v(e) {
        return ! L.silentHttp && ((0 !== e.detail.status || !/^file:\/\/\//.test(e.detail.url)) && 2 !== parseInt(e.detail.status / 100))
    }
    function h(t) {
        if (a(D.getAttribute("apikey") || L.apikey) && L.maxEventNumber && !L.silent) {
            L.maxEventNumber -= 1;
            var r = {
                notifierVersion: "0.3.4",
                userAgent: e.navigator.userAgent,
                locale: e.navigator.language || e.navigator.userLanguage,
                url: e.location.href,
                title: document.title,
                appVersion: D.getAttribute("appversion") || L.appversion,
                apiKey: D.getAttribute("apikey") || L.apikey,
                releaseStage: D.getAttribute("releasestage") || L.releasestage,
                metaData: t.metaData || L.metaData,
                user: t.user || L.user,
                name: t.name,
                time: (new Date).getTime(),
                message: t.message,
                fileName: t.fileName,
                lineNumber: t.lineNumber,
                columnNumber: t.columnNumber,
                stacktrace: t.stacktrace,
                type: t.type,
                severity: t.severity,
                target: t.target,
                req: t.req,
                res: t.res,
                breadcrumbs: x
            };
            r.userAgent && r.userAgent.match(/Googlebot/) || y(r) || T(r)
        }
    }
    function y(e) {
        var t = L.filters;
        if (!t || !t.length) return ! 1;
        for (var r = 0; r < t.length; r++) if (b(e, t[r])) return ! 0;
        return ! 1
    }
    function b(e, t) {
        if (!e) return ! 1;
        if (Object.keys && !Object.keys(t).length) return ! 1;
        for (var r in t) if (t.hasOwnProperty(r)) if (t[r].constructor === RegExp) {
            if (!t[r].test(e[r])) return ! 1
        } else {
            if (t[r].constructor !== Object) return ! 1;
            if (!b(e[r], t[r])) return ! 1
        }
        return ! 0
    }
    function N(e) {
        if ("undefined" != typeof JSON) return JSON.stringify(e);
        if (e instanceof Array) {
            for (var t = [], r = 0; r < e.length; r++) t.push(N(e[r]));
            return "[" + t.join(",") + "]"
        }
        var n = [];
        for (var a in e) if (e.hasOwnProperty(a)) {
            var i = '"' + a + '":',
            o = e[a];
            o && ("object" == typeof o ? i += N(o) : "number" == typeof o ? i += o: i = i + '"' + o.replace(/\n/g, "\\n") + '"', n.push(i))
        }
        return "{" + n.join(",") + "}"
    }
    function E(e) {
        var t;
        try {
            t = N(e)
        } catch(r) {
            delete e.metaData;
            try {
                t = N(e)
            } catch(e) {
                return
            }
        }
        return t
    }
    function T(t) {
        var r = E(t);
        if (r) {
            var n = k;
            if (e.XMLHttpRequest && e.atob) {
                var a = new XMLHttpRequest;
                a.Fundebug = !0,
                a.open("POST", n),
                a.setRequestHeader("Content-Type", "application/json"),
                a.send(r)
            } else { (new Image).src = n + "?event=" + encodeURIComponent(r)
            }
        }
    }
    var k = "https://fundebug.com/javascript/",
    L = {};
    e.fundebug = L;
    var w = !1,
    D = t();
    L.silent = D.getAttribute("silent") || !1,
    L.maxEventNumber = D.getAttribute("maxEventNumber") || 10,
    L.silentResource = D.getAttribute("silentResource") || !1,
    L.silentHttp = D.getAttribute("silentHttp") || !1,
    L.silentConsole = L.silentConsole || D.getAttribute("silentConsole") || !1,
    r(e, "onerror",
    function() {
        return function(t, r, n, a, o) {
            if (w) return void(w = !1);
            void 0 === a && e.event && (a = e.event.errorCharacter);
            var s;
            s = r && r !== e.location.href ? r: null;
            var l = i(o);
            return h({
                message: t,
                lineNumber: n,
                columnNumber: a,
                fileName: s || l && l.fileName,
                name: l && l.name || "uncaught error",
                stacktrace: o && o.stack || u(),
                severity: "error",
                type: "uncaught"
            }),
            !1
        }
    });
    var H = !0;
    if (e.atob) {
        if (e.ErrorEvent) try {
            e.ErrorEvent.prototype.hasOwnProperty("error") && (H = !1)
        } catch(e) {}
    } else H = !1;
    "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,
    function(t) {
        if (H) {
            var a = e[t] && e[t].prototype;
            a && a.hasOwnProperty && a.hasOwnProperty("addEventListener") && (r(a, "addEventListener",
            function(e) {
                return function(t, r, a, i) {
                    return r && r.handleEvent && (r.handleEvent = n(r.handleEvent)),
                    e.call(this, t, n(r), a, i)
                }
            }), r(a, "removeEventListener",
            function(e) {
                return function(t, r, a) {
                    return e.call(this, t, r, a),
                    e.call(this, t, n(r), a)
                }
            }))
        }
    }),
    L.notify = function(e, t, r) {
        if (e) {
            var n = {
                name: e || r && r.name,
                message: t || r && r.message,
                severity: r && r.message || "warning",
                stacktrace: o(),
                type: "notification",
                user: r && r.user,
                metaData: r && r.metaData
            },
            i = D.getAttribute("apikey") || L.apikey;
            return a(i, !0) ? (h(n), "fundebug.com" === location.host ? "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!": "请查看邮箱以及Fundebug控制台!") : i ? "apikey格式错误": "请配置apikey"
        }
    },
    L.notifyError = function(t, r) {
        if (t) {
            e.console && console.error(t);
            var n = i(t);
            h({
                name: n.name || r && r.name || "caught error",
                message: n.message || r && r.message,
                stacktrace: t.stack,
                fileName: n.fileName,
                lineNumber: n.lineNumber,
                columnNumber: n.columnNumber,
                severity: r && r.severity || "error",
                type: "caught",
                user: r && r.user,
                metaData: r && r.metaData
            })
        }
    },
    L.notifyHttpError = function(e, t, r) {
        h({
            type: "httpError",
            req: e,
            res: t,
            user: r && r.user,
            metaData: r && r.metaData
        })
    },
    e.addEventListener && e.addEventListener("unhandledrejection",
    function(e) {
        L.notifyError(e.reason)
    }),
    e.addEventListener && e.addEventListener("error", l, !0);
    var x = [];
    e.addEventListener ? e.addEventListener("click", p, !0) : document.attachEvent("onclick", p);
    var M = {
        url: e.location.href
    };
    document.addEventListener ? document.addEventListener("DOMContentLoaded",
    function() {
        M = {
            url: e.location.href,
            title: document.title
        }
    }) : document.attachEvent("onreadystatechange",
    function() {
        M = {
            url: e.location.href,
            title: document.title
        }
    });
    var R = e.onpopstate;
    e.onpopstate = function() {
        var t = {
            url: e.location.href
        };
        if (M.title || (M.title = document.title), M.url !== t.url && d(M, t), R) return R.apply(this, arguments)
    };
    var S = e.history.pushState;
    e.history.pushState = function() {
        M = {
            url: e.location.href,
            title: document.title
        };
        var t = {};
        if (3 === arguments.length && (t.url = arguments[2]), M.url !== t.url && d(M, t), S) return S.apply(this, arguments)
    };
    var A = e.onhashchange;
    e.onhashchange = function() {
        var t = {
            url: e.location.href,
            title: document.title
        };
        if (M.url !== t.url && d(M, t), A) return A.apply(this, arguments)
    };
    for (var j = ["log", "warn", "error", "debug", "info"], q = 0; q < j.length; q++) e.console && g(j[q]);
    var O = !1;
    if (e.XMLHttpRequest) {
        var _ = XMLHttpRequest.prototype;
        if (!_) return;
        var C, X, F, P = _.open;
        _.open = function(e, t) {
            C = e,
            X = t,
            F = (new Date).getTime();
            try {
                P.apply(this, arguments)
            } catch(e) {
                O = !0,
                L.notifyError(e, {
                    metaData: {
                        description: "XMLHttpRequest请求失败(如果是拒绝访问，则是由于浏览器跨域限制)",
                        method: C,
                        httpUrl: X
                    }
                })
            }
        };
        var I = _.send;
        _.send = function() {
            if (O) return void(O = !1);
            var t = this,
            r = t.onreadystatechange;
            t.onreadystatechange = function() {
                if (4 === t.readyState && !t.Fundebug && X != k) {
                    var n = (new Date).getTime() - F,
                    a = {
                        type: "XMLHttpRequest",
                        page: {
                            url: e.location.href
                        },
                        detail: {
                            method: C,
                            url: t.responseURL || X,
                            status: t.status,
                            statusText: t.statusText
                        },
                        elapsedTime: n,
                        time: F
                    };
                    if (v(a)) {
                        var i = {
                            method: a.detail.method,
                            url: a.detail.url
                        },
                        o = {
                            status: t.status,
                            statusText: t.statusText,
                            response: t.response,
                            elapsedTime: n
                        };
                        L.notifyHttpError(i, o)
                    }
                    f(a)
                }
                r && r.apply(this, arguments)
            },
            I.apply(this, arguments)
        }
    }
    if (e.fetch) {
        var U = e.fetch;
        e.fetch = function(t, r) {
            var n = (new Date).getTime();
            return U.apply(this, arguments).then(function(t) {
                var a = (new Date).getTime() - n,
                i = {
                    type: "fetch",
                    page: {
                        url: e.location.href,
                        title: document.title
                    },
                    detail: {
                        method: r && r.method || "GET",
                        url: t.url,
                        status: t.status,
                        statusText: t.statusText
                    },
                    elapsedTime: a,
                    time: n
                };
                if (v(i)) {
                    var o = {
                        method: i.detail.method,
                        url: i.detail.url
                    },
                    u = {
                        status: t.status,
                        statusText: t.statusText,
                        elapsedTime: a
                    };
                    L.notifyHttpError(o, u)
                }
                return f(i),
                t
            })
        }
    }
    var W = "function" == typeof define,
    $ = "undefined" != typeof module && module.exports;
    W ? define(L) : $ && (module.exports = L)
} (window);