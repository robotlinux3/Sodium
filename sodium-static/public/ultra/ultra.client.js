;(() => {
    var Ae = Object.create
    var q = Object.defineProperty
    var Te = Object.getOwnPropertyDescriptor
    var Ue = Object.getOwnPropertyNames
    var je = Object.getPrototypeOf,
        qe = Object.prototype.hasOwnProperty
    var We = (a, e) => () => (
        e || a((e = { exports: {} }).exports, e), e.exports
    )
    var _e = (a, e, r, t) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
            for (let n of Ue(e))
                !qe.call(a, n) &&
                    n !== r &&
                    q(a, n, {
                        get: () => e[n],
                        enumerable: !(t = Te(e, n)) || t.enumerable,
                    })
        return a
    }
    var p = (a, e, r) => (
        (r = a != null ? Ae(je(a)) : {}),
        _e(
            e || !a || !a.__esModule
                ? q(r, 'default', { value: a, enumerable: !0 })
                : r,
            a,
        )
    )
    var c = We((Je, P) => {
        'use strict'
        var m = typeof Reflect == 'object' ? Reflect : null,
            W =
                m && typeof m.apply == 'function'
                    ? m.apply
                    : function (e, r, t) {
                          return Function.prototype.apply.call(e, r, t)
                      },
            f
        m && typeof m.ownKeys == 'function'
            ? (f = m.ownKeys)
            : Object.getOwnPropertySymbols
              ? (f = function (e) {
                    return Object.getOwnPropertyNames(e).concat(
                        Object.getOwnPropertySymbols(e),
                    )
                })
              : (f = function (e) {
                    return Object.getOwnPropertyNames(e)
                })
        function Fe(a) {
            console && console.warn && console.warn(a)
        }
        var F =
            Number.isNaN ||
            function (e) {
                return e !== e
            }
        function l() {
            l.init.call(this)
        }
        P.exports = l
        P.exports.once = Xe
        l.EventEmitter = l
        l.prototype._events = void 0
        l.prototype._eventsCount = 0
        l.prototype._maxListeners = void 0
        var _ = 10
        function w(a) {
            if (typeof a != 'function')
                throw new TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                        typeof a,
                )
        }
        Object.defineProperty(l, 'defaultMaxListeners', {
            enumerable: !0,
            get: function () {
                return _
            },
            set: function (a) {
                if (typeof a != 'number' || a < 0 || F(a))
                    throw new RangeError(
                        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                            a +
                            '.',
                    )
                _ = a
            },
        })
        l.init = function () {
            ;(this._events === void 0 ||
                this._events === Object.getPrototypeOf(this)._events) &&
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0)
        }
        l.prototype.setMaxListeners = function (e) {
            if (typeof e != 'number' || e < 0 || F(e))
                throw new RangeError(
                    'The value of "n" is out of range. It must be a non-negative number. Received ' +
                        e +
                        '.',
                )
            return (this._maxListeners = e), this
        }
        function G(a) {
            return a._maxListeners === void 0
                ? l.defaultMaxListeners
                : a._maxListeners
        }
        l.prototype.getMaxListeners = function () {
            return G(this)
        }
        l.prototype.emit = function (e) {
            for (var r = [], t = 1; t < arguments.length; t++)
                r.push(arguments[t])
            var n = e === 'error',
                i = this._events
            if (i !== void 0) n = n && i.error === void 0
            else if (!n) return !1
            if (n) {
                var o
                if ((r.length > 0 && (o = r[0]), o instanceof Error)) throw o
                var h = new Error(
                    'Unhandled error.' + (o ? ' (' + o.message + ')' : ''),
                )
                throw ((h.context = o), h)
            }
            var u = i[e]
            if (u === void 0) return !1
            if (typeof u == 'function') W(u, this, r)
            else
                for (var d = u.length, v = z(u, d), t = 0; t < d; ++t)
                    W(v[t], this, r)
            return !0
        }
        function B(a, e, r, t) {
            var n, i, o
            if (
                (w(r),
                (i = a._events),
                i === void 0
                    ? ((i = a._events = Object.create(null)),
                      (a._eventsCount = 0))
                    : (i.newListener !== void 0 &&
                          (a.emit(
                              'newListener',
                              e,
                              r.listener ? r.listener : r,
                          ),
                          (i = a._events)),
                      (o = i[e])),
                o === void 0)
            )
                (o = i[e] = r), ++a._eventsCount
            else if (
                (typeof o == 'function'
                    ? (o = i[e] = t ? [r, o] : [o, r])
                    : t
                      ? o.unshift(r)
                      : o.push(r),
                (n = G(a)),
                n > 0 && o.length > n && !o.warned)
            ) {
                o.warned = !0
                var h = new Error(
                    'Possible EventEmitter memory leak detected. ' +
                        o.length +
                        ' ' +
                        String(e) +
                        ' listeners added. Use emitter.setMaxListeners() to increase limit',
                )
                ;(h.name = 'MaxListenersExceededWarning'),
                    (h.emitter = a),
                    (h.type = e),
                    (h.count = o.length),
                    Fe(h)
            }
            return a
        }
        l.prototype.addListener = function (e, r) {
            return B(this, e, r, !1)
        }
        l.prototype.on = l.prototype.addListener
        l.prototype.prependListener = function (e, r) {
            return B(this, e, r, !0)
        }
        function Ge() {
            if (!this.fired)
                return (
                    this.target.removeListener(this.type, this.wrapFn),
                    (this.fired = !0),
                    arguments.length === 0
                        ? this.listener.call(this.target)
                        : this.listener.apply(this.target, arguments)
                )
        }
        function K(a, e, r) {
            var t = {
                    fired: !1,
                    wrapFn: void 0,
                    target: a,
                    type: e,
                    listener: r,
                },
                n = Ge.bind(t)
            return (n.listener = r), (t.wrapFn = n), n
        }
        l.prototype.once = function (e, r) {
            return w(r), this.on(e, K(this, e, r)), this
        }
        l.prototype.prependOnceListener = function (e, r) {
            return w(r), this.prependListener(e, K(this, e, r)), this
        }
        l.prototype.removeListener = function (e, r) {
            var t, n, i, o, h
            if ((w(r), (n = this._events), n === void 0)) return this
            if (((t = n[e]), t === void 0)) return this
            if (t === r || t.listener === r)
                --this._eventsCount === 0
                    ? (this._events = Object.create(null))
                    : (delete n[e],
                      n.removeListener &&
                          this.emit('removeListener', e, t.listener || r))
            else if (typeof t != 'function') {
                for (i = -1, o = t.length - 1; o >= 0; o--)
                    if (t[o] === r || t[o].listener === r) {
                        ;(h = t[o].listener), (i = o)
                        break
                    }
                if (i < 0) return this
                i === 0 ? t.shift() : Be(t, i),
                    t.length === 1 && (n[e] = t[0]),
                    n.removeListener !== void 0 &&
                        this.emit('removeListener', e, h || r)
            }
            return this
        }
        l.prototype.off = l.prototype.removeListener
        l.prototype.removeAllListeners = function (e) {
            var r, t, n
            if (((t = this._events), t === void 0)) return this
            if (t.removeListener === void 0)
                return (
                    arguments.length === 0
                        ? ((this._events = Object.create(null)),
                          (this._eventsCount = 0))
                        : t[e] !== void 0 &&
                          (--this._eventsCount === 0
                              ? (this._events = Object.create(null))
                              : delete t[e]),
                    this
                )
            if (arguments.length === 0) {
                var i = Object.keys(t),
                    o
                for (n = 0; n < i.length; ++n)
                    (o = i[n]),
                        o !== 'removeListener' && this.removeAllListeners(o)
                return (
                    this.removeAllListeners('removeListener'),
                    (this._events = Object.create(null)),
                    (this._eventsCount = 0),
                    this
                )
            }
            if (((r = t[e]), typeof r == 'function')) this.removeListener(e, r)
            else if (r !== void 0)
                for (n = r.length - 1; n >= 0; n--) this.removeListener(e, r[n])
            return this
        }
        function X(a, e, r) {
            var t = a._events
            if (t === void 0) return []
            var n = t[e]
            return n === void 0
                ? []
                : typeof n == 'function'
                  ? r
                      ? [n.listener || n]
                      : [n]
                  : r
                    ? Ke(n)
                    : z(n, n.length)
        }
        l.prototype.listeners = function (e) {
            return X(this, e, !0)
        }
        l.prototype.rawListeners = function (e) {
            return X(this, e, !1)
        }
        l.listenerCount = function (a, e) {
            return typeof a.listenerCount == 'function'
                ? a.listenerCount(e)
                : Q.call(a, e)
        }
        l.prototype.listenerCount = Q
        function Q(a) {
            var e = this._events
            if (e !== void 0) {
                var r = e[a]
                if (typeof r == 'function') return 1
                if (r !== void 0) return r.length
            }
            return 0
        }
        l.prototype.eventNames = function () {
            return this._eventsCount > 0 ? f(this._events) : []
        }
        function z(a, e) {
            for (var r = new Array(e), t = 0; t < e; ++t) r[t] = a[t]
            return r
        }
        function Be(a, e) {
            for (; e + 1 < a.length; e++) a[e] = a[e + 1]
            a.pop()
        }
        function Ke(a) {
            for (var e = new Array(a.length), r = 0; r < e.length; ++r)
                e[r] = a[r].listener || a[r]
            return e
        }
        function Xe(a, e) {
            return new Promise(function (r, t) {
                function n(o) {
                    a.removeListener(e, i), t(o)
                }
                function i() {
                    typeof a.removeListener == 'function' &&
                        a.removeListener('error', n),
                        r([].slice.call(arguments))
                }
                J(a, e, i, { once: !0 }),
                    e !== 'error' && Qe(a, n, { once: !0 })
            })
        }
        function Qe(a, e, r) {
            typeof a.on == 'function' && J(a, 'error', e, r)
        }
        function J(a, e, r, t) {
            if (typeof a.on == 'function') t.once ? a.once(e, r) : a.on(e, r)
            else if (typeof a.addEventListener == 'function')
                a.addEventListener(e, function n(i) {
                    t.once && a.removeEventListener(e, n), r(i)
                })
            else
                throw new TypeError(
                    'The "emitter" argument must be of type EventEmitter. Received type ' +
                        typeof a,
                )
        }
    })
    var Y = p(c(), 1)
    var g = class {
            #e
            #t
            constructor(e = {}, r = null, t = null) {
                ;(this.#e = !1),
                    (this.#t = null),
                    (this.data = e),
                    (this.target = r),
                    (this.that = t)
            }
            get intercepted() {
                return this.#e
            }
            get returnValue() {
                return this.#t
            }
            respondWith(e) {
                ;(this.#t = e), (this.#e = !0)
            }
        },
        s = g
    var x = class extends Y.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.document = this.window.document),
                    (this.Document = this.window.Document || {}),
                    (this.DOMParser = this.window.DOMParser || {}),
                    (this.docProto = this.Document.prototype || {}),
                    (this.domProto = this.DOMParser.prototype || {}),
                    (this.title = e.nativeMethods.getOwnPropertyDescriptor(
                        this.docProto,
                        'title',
                    )),
                    (this.cookie = e.nativeMethods.getOwnPropertyDescriptor(
                        this.docProto,
                        'cookie',
                    )),
                    (this.referrer = e.nativeMethods.getOwnPropertyDescriptor(
                        this.docProto,
                        'referrer',
                    )),
                    (this.domain = e.nativeMethods.getOwnPropertyDescriptor(
                        this.docProto,
                        'domain',
                    )),
                    (this.documentURI =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.docProto,
                            'documentURI',
                        )),
                    (this.write = this.docProto.write),
                    (this.writeln = this.docProto.writeln),
                    (this.querySelector = this.docProto.querySelector),
                    (this.querySelectorAll = this.docProto.querySelectorAll),
                    (this.parseFromString = this.domProto.parseFromString),
                    (this.URL = e.nativeMethods.getOwnPropertyDescriptor(
                        this.docProto,
                        'URL',
                    ))
            }
            overrideParseFromString() {
                this.ctx.override(
                    this.domProto,
                    'parseFromString',
                    (e, r, t) => {
                        if (2 > t.length) return e.apply(r, t)
                        let [n, i] = t,
                            o = new s({ string: n, type: i }, e, r)
                        return (
                            this.emit('parseFromString', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.string,
                                      o.data.type,
                                  )
                        )
                    },
                )
            }
            overrideQuerySelector() {
                this.ctx.override(this.docProto, 'querySelector', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n] = t,
                        i = new s({ selectors: n }, e, r)
                    return (
                        this.emit('querySelector', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.selectors)
                    )
                })
            }
            overrideDomain() {
                this.ctx.overrideDescriptor(this.docProto, 'domain', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getDomain', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        return (
                            this.emit('setDomain', n),
                            n.intercepted
                                ? n.returnValue
                                : n.target.call(n.that, n.data.value)
                        )
                    },
                })
            }
            overrideReferrer() {
                this.ctx.overrideDescriptor(this.docProto, 'referrer', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('referrer', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideCreateTreeWalker() {
                this.ctx.override(
                    this.docProto,
                    'createTreeWalker',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n, i = 4294967295, o, h] = t,
                            u = new s(
                                {
                                    root: n,
                                    show: i,
                                    filter: o,
                                    expandEntityReferences: h,
                                },
                                e,
                                r,
                            )
                        return (
                            this.emit('createTreeWalker', u),
                            u.intercepted
                                ? u.returnValue
                                : u.target.call(
                                      u.that,
                                      u.data.root,
                                      u.data.show,
                                      u.data.filter,
                                      u.data.expandEntityReferences,
                                  )
                        )
                    },
                )
            }
            overrideWrite() {
                this.ctx.override(this.docProto, 'write', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [...n] = t,
                        i = new s({ html: n }, e, r)
                    return (
                        this.emit('write', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.apply(i.that, i.data.html)
                    )
                }),
                    this.ctx.override(this.docProto, 'writeln', (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [...n] = t,
                            i = new s({ html: n }, e, r)
                        return (
                            this.emit('writeln', i),
                            i.intercepted
                                ? i.returnValue
                                : i.target.apply(i.that, i.data.html)
                        )
                    })
            }
            overrideDocumentURI() {
                this.ctx.overrideDescriptor(this.docProto, 'documentURI', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('documentURI', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideURL() {
                this.ctx.overrideDescriptor(this.docProto, 'URL', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('url', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideCookie() {
                this.ctx.overrideDescriptor(this.docProto, 'cookie', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getCookie', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        return (
                            this.emit('setCookie', n),
                            n.intercepted
                                ? n.returnValue
                                : n.target.call(n.that, n.data.value)
                        )
                    },
                })
            }
            overrideTitle() {
                this.ctx.overrideDescriptor(this.docProto, 'title', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getTitle', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        return (
                            this.emit('setTitle', n),
                            n.intercepted
                                ? n.returnValue
                                : n.target.call(n.that, n.data.value)
                        )
                    },
                })
            }
        },
        Z = x
    var $ = p(c(), 1)
    var b = class extends $.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Audio = this.window.Audio),
                    (this.Element = this.window.Element),
                    (this.elemProto = this.Element
                        ? this.Element.prototype
                        : {}),
                    (this.innerHTML = e.nativeMethods.getOwnPropertyDescriptor(
                        this.elemProto,
                        'innerHTML',
                    )),
                    (this.outerHTML = e.nativeMethods.getOwnPropertyDescriptor(
                        this.elemProto,
                        'outerHTML',
                    )),
                    (this.setAttribute = this.elemProto.setAttribute),
                    (this.getAttribute = this.elemProto.getAttribute),
                    (this.removeAttribute = this.elemProto.removeAttribute),
                    (this.hasAttribute = this.elemProto.hasAttribute),
                    (this.querySelector = this.elemProto.querySelector),
                    (this.querySelectorAll = this.elemProto.querySelectorAll),
                    (this.insertAdjacentHTML =
                        this.elemProto.insertAdjacentHTML),
                    (this.insertAdjacentText =
                        this.elemProto.insertAdjacentText)
            }
            overrideQuerySelector() {
                this.ctx.override(
                    this.elemProto,
                    'querySelector',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ selectors: n }, e, r)
                        return (
                            this.emit('querySelector', i),
                            i.intercepted
                                ? i.returnValue
                                : i.target.call(i.that, i.data.selectors)
                        )
                    },
                )
            }
            overrideAttribute() {
                this.ctx.override(this.elemProto, 'getAttribute', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n] = t,
                        i = new s({ name: n }, e, r)
                    return (
                        this.emit('getAttribute', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.name)
                    )
                }),
                    this.ctx.override(
                        this.elemProto,
                        'setAttribute',
                        (e, r, t) => {
                            if (2 > t.length) return e.apply(r, t)
                            let [n, i] = t,
                                o = new s({ name: n, value: i }, e, r)
                            return (
                                this.emit('setAttribute', o),
                                o.intercepted
                                    ? o.returnValue
                                    : o.target.call(
                                          o.that,
                                          o.data.name,
                                          o.data.value,
                                      )
                            )
                        },
                    ),
                    this.ctx.override(
                        this.elemProto,
                        'hasAttribute',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ name: n }, e, r)
                            return (
                                this.emit('hasAttribute', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.name)
                            )
                        },
                    ),
                    this.ctx.override(
                        this.elemProto,
                        'removeAttribute',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ name: n }, e, r)
                            return (
                                this.emit('removeAttribute', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.name)
                            )
                        },
                    )
            }
            overrideAudio() {
                this.ctx.override(
                    this.window,
                    'Audio',
                    (e, r, t) => {
                        if (!t.length) return new e(...t)
                        let [n] = t,
                            i = new s({ url: n }, e, r)
                        return (
                            this.emit('audio', i),
                            i.intercepted
                                ? i.returnValue
                                : new i.target(i.data.url)
                        )
                    },
                    !0,
                )
            }
            overrideHtml() {
                this.hookProperty(this.Element, 'innerHTML', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getInnerHTML', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        if ((this.emit('setInnerHTML', n), n.intercepted))
                            return n.returnValue
                        e.call(r, n.data.value)
                    },
                }),
                    this.hookProperty(this.Element, 'outerHTML', {
                        get: (e, r) => {
                            let t = new s({ value: e.call(r) }, e, r)
                            return (
                                this.emit('getOuterHTML', t),
                                t.intercepted ? t.returnValue : t.data.value
                            )
                        },
                        set: (e, r, [t]) => {
                            let n = new s({ value: t }, e, r)
                            if ((this.emit('setOuterHTML', n), n.intercepted))
                                return n.returnValue
                            e.call(r, n.data.value)
                        },
                    })
            }
            overrideInsertAdjacentHTML() {
                this.ctx.override(
                    this.elemProto,
                    'insertAdjacentHTML',
                    (e, r, t) => {
                        if (2 > t.length) return e.apply(r, t)
                        let [n, i] = t,
                            o = new s({ position: n, html: i }, e, r)
                        return (
                            this.emit('insertAdjacentHTML', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.position,
                                      o.data.html,
                                  )
                        )
                    },
                )
            }
            overrideInsertAdjacentText() {
                this.ctx.override(
                    this.elemProto,
                    'insertAdjacentText',
                    (e, r, t) => {
                        if (2 > t.length) return e.apply(r, t)
                        let [n, i] = t,
                            o = new s({ position: n, text: i }, e, r)
                        return (
                            this.emit('insertAdjacentText', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.position,
                                      o.data.text,
                                  )
                        )
                    },
                )
            }
            hookProperty(e, r, t) {
                if (!e) return !1
                if (this.ctx.nativeMethods.isArray(e)) {
                    for (let i of e) this.hookProperty(i, r, t)
                    return !0
                }
                let n = e.prototype
                return this.ctx.overrideDescriptor(n, r, t), !0
            }
        },
        ee = b
    var te = p(c(), 1)
    var O = class extends te.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Node = e.window.Node || {}),
                    (this.nodeProto = this.Node.prototype || {}),
                    (this.compareDocumentPosition =
                        this.nodeProto.compareDocumentPosition),
                    (this.contains = this.nodeProto.contains),
                    (this.insertBefore = this.nodeProto.insertBefore),
                    (this.replaceChild = this.nodeProto.replaceChild),
                    (this.append = this.nodeProto.append),
                    (this.appendChild = this.nodeProto.appendChild),
                    (this.removeChild = this.nodeProto.removeChild),
                    (this.textContent =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.nodeProto,
                            'textContent',
                        )),
                    (this.parentNode = e.nativeMethods.getOwnPropertyDescriptor(
                        this.nodeProto,
                        'parentNode',
                    )),
                    (this.parentElement =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.nodeProto,
                            'parentElement',
                        )),
                    (this.childNodes = e.nativeMethods.getOwnPropertyDescriptor(
                        this.nodeProto,
                        'childNodes',
                    )),
                    (this.baseURI = e.nativeMethods.getOwnPropertyDescriptor(
                        this.nodeProto,
                        'baseURI',
                    )),
                    (this.previousSibling =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.nodeProto,
                            'previousSibling',
                        )),
                    (this.ownerDocument =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.nodeProto,
                            'ownerDocument',
                        ))
            }
            overrideTextContent() {
                this.ctx.overrideDescriptor(this.nodeProto, 'textContent', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getTextContent', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        if ((this.emit('setTextContent', n), n.intercepted))
                            return n.returnValue
                        e.call(r, n.data.value)
                    },
                })
            }
            overrideAppend() {
                this.ctx.override(this.nodeProto, 'append', (e, r, [...t]) => {
                    let n = new s({ nodes: t }, e, r)
                    return (
                        this.emit('append', n),
                        n.intercepted
                            ? n.returnValue
                            : n.target.call(n.that, n.data.nodes)
                    )
                }),
                    this.ctx.override(
                        this.nodeProto,
                        'appendChild',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ node: n }, e, r)
                            return (
                                this.emit('appendChild', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.node)
                            )
                        },
                    )
            }
            overrideBaseURI() {
                this.ctx.overrideDescriptor(this.nodeProto, 'baseURI', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('baseURI', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideParent() {
                this.ctx.overrideDescriptor(this.nodeProto, 'parentNode', {
                    get: (e, r) => {
                        let t = new s({ node: e.call(r) }, e, r)
                        return (
                            this.emit('parentNode', t),
                            t.intercepted ? t.returnValue : t.data.node
                        )
                    },
                }),
                    this.ctx.overrideDescriptor(
                        this.nodeProto,
                        'parentElement',
                        {
                            get: (e, r) => {
                                let t = new s({ element: e.call(r) }, e, r)
                                return (
                                    this.emit('parentElement', t),
                                    t.intercepted ? t.returnValue : t.data.node
                                )
                            },
                        },
                    )
            }
            overrideOwnerDocument() {
                this.ctx.overrideDescriptor(this.nodeProto, 'ownerDocument', {
                    get: (e, r) => {
                        let t = new s({ document: e.call(r) }, e, r)
                        return (
                            this.emit('ownerDocument', t),
                            t.intercepted ? t.returnValue : t.data.document
                        )
                    },
                })
            }
            overrideCompareDocumentPosit1ion() {
                this.ctx.override(
                    this.nodeProto,
                    'compareDocumentPosition',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ node: n }, e, r)
                        return i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.node)
                    },
                )
            }
            overrideChildMethods() {
                this.ctx.override(this.nodeProto, 'removeChild')
            }
        },
        re = O
    var ie = p(c(), 1)
    var S = class extends ie.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Attr = this.window.Attr || {}),
                    (this.attrProto = this.Attr.prototype || {}),
                    (this.value = e.nativeMethods.getOwnPropertyDescriptor(
                        this.attrProto,
                        'value',
                    )),
                    (this.name = e.nativeMethods.getOwnPropertyDescriptor(
                        this.attrProto,
                        'name',
                    )),
                    (this.getNamedItem = this.attrProto.getNamedItem || null),
                    (this.setNamedItem = this.attrProto.setNamedItem || null),
                    (this.removeNamedItem =
                        this.attrProto.removeNamedItem || null),
                    (this.getNamedItemNS =
                        this.attrProto.getNamedItemNS || null),
                    (this.setNamedItemNS =
                        this.attrProto.setNamedItemNS || null),
                    (this.removeNamedItemNS =
                        this.attrProto.removeNamedItemNS || null),
                    (this.item = this.attrProto.item || null)
            }
            overrideNameValue() {
                this.ctx.overrideDescriptor(this.attrProto, 'name', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('name', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                }),
                    this.ctx.overrideDescriptor(this.attrProto, 'value', {
                        get: (e, r) => {
                            let t = new s(
                                {
                                    name: this.name.get.call(r),
                                    value: e.call(r),
                                },
                                e,
                                r,
                            )
                            return (
                                this.emit('getValue', t),
                                t.intercepted ? t.returnValue : t.data.value
                            )
                        },
                        set: (e, r, [t]) => {
                            let n = new s(
                                { name: this.name.get.call(r), value: t },
                                e,
                                r,
                            )
                            if ((this.emit('setValue', n), n.intercepted))
                                return n.returnValue
                            n.target.call(n.that, n.data.value)
                        },
                    })
            }
            overrideItemMethods() {
                this.ctx.override(this.attrProto, 'getNamedItem', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n] = t,
                        i = new s({ name: n }, e, r)
                    return (
                        this.emit('getNamedItem', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.name)
                    )
                }),
                    this.ctx.override(
                        this.attrProto,
                        'setNamedItem',
                        (e, r, t) => {
                            if (2 > t.length) return e.apply(r, t)
                            let [n, i] = t,
                                o = new s({ name: n, value: i }, e, r)
                            return (
                                this.emit('setNamedItem', o),
                                o.intercepted
                                    ? o.returnValue
                                    : o.target.call(
                                          o.that,
                                          o.data.name,
                                          o.data.value,
                                      )
                            )
                        },
                    ),
                    this.ctx.override(
                        this.attrProto,
                        'removeNamedItem',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ name: n }, e, r)
                            return (
                                this.emit('removeNamedItem', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.name)
                            )
                        },
                    ),
                    this.ctx.override(this.attrProto, 'item', (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ index: n }, e, r)
                        return (
                            this.emit('item', i),
                            i.intercepted
                                ? i.returnValue
                                : i.target.call(i.that, i.data.name)
                        )
                    }),
                    this.ctx.override(
                        this.attrProto,
                        'getNamedItemNS',
                        (e, r, t) => {
                            if (2 > t.length) return e.apply(r, t)
                            let [n, i] = t,
                                o = new s({ namespace: n, localName: i }, e, r)
                            return (
                                this.emit('getNamedItemNS', o),
                                o.intercepted
                                    ? o.returnValue
                                    : o.target.call(
                                          o.that,
                                          o.data.namespace,
                                          o.data.localName,
                                      )
                            )
                        },
                    ),
                    this.ctx.override(
                        this.attrProto,
                        'setNamedItemNS',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ attr: n }, e, r)
                            return (
                                this.emit('setNamedItemNS', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.name)
                            )
                        },
                    ),
                    this.ctx.override(
                        this.attrProto,
                        'removeNamedItemNS',
                        (e, r, t) => {
                            if (2 > t.length) return e.apply(r, t)
                            let [n, i] = t,
                                o = new s({ namespace: n, localName: i }, e, r)
                            return (
                                this.emit('removeNamedItemNS', o),
                                o.intercepted
                                    ? o.returnValue
                                    : o.target.call(
                                          o.that,
                                          o.data.namespace,
                                          o.data.localName,
                                      )
                            )
                        },
                    )
            }
        },
        ne = S
    var oe = p(c(), 1)
    var L = class extends oe.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Function = this.window.Function),
                    (this.fnProto = this.Function.prototype),
                    (this.toString = this.fnProto.toString),
                    (this.fnStrings = e.fnStrings),
                    (this.call = this.fnProto.call),
                    (this.apply = this.fnProto.apply),
                    (this.bind = this.fnProto.bind)
            }
            overrideFunction() {
                this.ctx.override(
                    this.window,
                    'Function',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let n = t[t.length - 1],
                            i = []
                        for (let h = 0; h < t.length - 1; h++) i.push(t[h])
                        let o = new s({ script: n, args: i }, e, r)
                        return (
                            this.emit('function', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      ...o.data.args,
                                      o.data.script,
                                  )
                        )
                    },
                    !0,
                )
            }
            overrideToString() {
                this.ctx.override(this.fnProto, 'toString', (e, r) => {
                    let t = new s({ fn: r }, e, r)
                    return (
                        this.emit('toString', t),
                        t.intercepted ? t.returnValue : t.target.call(t.data.fn)
                    )
                })
            }
        },
        se = L
    var ae = p(c(), 1)
    var E = class extends ae.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Object = this.window.Object),
                    (this.getOwnPropertyDescriptors =
                        this.Object.getOwnPropertyDescriptors),
                    (this.getOwnPropertyDescriptor =
                        this.Object.getOwnPropertyDescriptor),
                    (this.getOwnPropertyNames = this.Object.getOwnPropertyNames)
            }
            overrideGetPropertyNames() {
                this.ctx.override(
                    this.Object,
                    'getOwnPropertyNames',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ names: e.call(r, n) }, e, r)
                        return (
                            this.emit('getOwnPropertyNames', i),
                            i.intercepted ? i.returnValue : i.data.names
                        )
                    },
                )
            }
            overrideGetOwnPropertyDescriptors() {
                this.ctx.override(
                    this.Object,
                    'getOwnPropertyDescriptors',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ descriptors: e.call(r, n) }, e, r)
                        return (
                            this.emit('getOwnPropertyDescriptors', i),
                            i.intercepted ? i.returnValue : i.data.descriptors
                        )
                    },
                )
            }
        },
        he = E
    var le = p(c(), 1)
    var D = class extends le.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.fetch = this.window.fetch),
                    (this.Request = this.window.Request),
                    (this.Response = this.window.Response),
                    (this.Headers = this.window.Headers),
                    (this.reqProto = this.Request
                        ? this.Request.prototype
                        : {}),
                    (this.resProto = this.Response
                        ? this.Response.prototype
                        : {}),
                    (this.headersProto = this.Headers
                        ? this.Headers.prototype
                        : {}),
                    (this.reqUrl = e.nativeMethods.getOwnPropertyDescriptor(
                        this.reqProto,
                        'url',
                    )),
                    (this.resUrl = e.nativeMethods.getOwnPropertyDescriptor(
                        this.resProto,
                        'url',
                    )),
                    (this.reqHeaders = e.nativeMethods.getOwnPropertyDescriptor(
                        this.reqProto,
                        'headers',
                    )),
                    (this.resHeaders = e.nativeMethods.getOwnPropertyDescriptor(
                        this.resProto,
                        'headers',
                    ))
            }
            override() {
                return (
                    this.overrideRequest(),
                    this.overrideUrl(),
                    this.overrideHeaders(),
                    !0
                )
            }
            overrideRequest() {
                return this.fetch
                    ? (this.ctx.override(this.window, 'fetch', (e, r, t) => {
                          if (!t.length || t[0] instanceof this.Request)
                              return e.apply(r, t)
                          let [n, i = {}] = t,
                              o = new s({ input: n, options: i }, e, r)
                          return (
                              this.emit('request', o),
                              o.intercepted
                                  ? o.returnValue
                                  : o.target.call(
                                        o.that,
                                        o.data.input,
                                        o.data.options,
                                    )
                          )
                      }),
                      this.ctx.override(
                          this.window,
                          'Request',
                          (e, r, t) => {
                              if (!t.length) return new e(...t)
                              let [n, i = {}] = t,
                                  o = new s({ input: n, options: i }, e)
                              return (
                                  this.emit('request', o),
                                  o.intercepted
                                      ? o.returnValue
                                      : new o.target(
                                            o.data.input,
                                            o.data.options,
                                        )
                              )
                          },
                          !0,
                      ),
                      !0)
                    : !1
            }
            overrideUrl() {
                return (
                    this.ctx.overrideDescriptor(this.reqProto, 'url', {
                        get: (e, r) => {
                            let t = new s({ value: e.call(r) }, e, r)
                            return (
                                this.emit('requestUrl', t),
                                t.intercepted ? t.returnValue : t.data.value
                            )
                        },
                    }),
                    this.ctx.overrideDescriptor(this.resProto, 'url', {
                        get: (e, r) => {
                            let t = new s({ value: e.call(r) }, e, r)
                            return (
                                this.emit('responseUrl', t),
                                t.intercepted ? t.returnValue : t.data.value
                            )
                        },
                    }),
                    !0
                )
            }
            overrideHeaders() {
                return this.Headers
                    ? (this.ctx.overrideDescriptor(this.reqProto, 'headers', {
                          get: (e, r) => {
                              let t = new s({ value: e.call(r) }, e, r)
                              return (
                                  this.emit('requestHeaders', t),
                                  t.intercepted ? t.returnValue : t.data.value
                              )
                          },
                      }),
                      this.ctx.overrideDescriptor(this.resProto, 'headers', {
                          get: (e, r) => {
                              let t = new s({ value: e.call(r) }, e, r)
                              return (
                                  this.emit('responseHeaders', t),
                                  t.intercepted ? t.returnValue : t.data.value
                              )
                          },
                      }),
                      this.ctx.override(
                          this.headersProto,
                          'get',
                          (e, r, [t]) => {
                              if (!t) return e.call(r)
                              let n = new s(
                                  { name: t, value: e.call(r, t) },
                                  e,
                                  r,
                              )
                              return (
                                  this.emit('getHeader', n),
                                  n.intercepted ? n.returnValue : n.data.value
                              )
                          },
                      ),
                      this.ctx.override(this.headersProto, 'set', (e, r, t) => {
                          if (2 > t.length) return e.apply(r, t)
                          let [n, i] = t,
                              o = new s({ name: n, value: i }, e, r)
                          return (
                              this.emit('setHeader', o),
                              o.intercepted
                                  ? o.returnValue
                                  : o.target.call(
                                        o.that,
                                        o.data.name,
                                        o.data.value,
                                    )
                          )
                      }),
                      this.ctx.override(this.headersProto, 'has', (e, r, t) => {
                          if (!t.length) return e.call(r)
                          let [n] = t,
                              i = new s({ name: n, value: e.call(r, n) }, e, r)
                          return (
                              this.emit('hasHeader', i),
                              i.intercepted ? i.returnValue : i.data
                          )
                      }),
                      this.ctx.override(
                          this.headersProto,
                          'append',
                          (e, r, t) => {
                              if (2 > t.length) return e.apply(r, t)
                              let [n, i] = t,
                                  o = new s({ name: n, value: i }, e, r)
                              return (
                                  this.emit('appendHeader', o),
                                  o.intercepted
                                      ? o.returnValue
                                      : o.target.call(
                                            o.that,
                                            o.data.name,
                                            o.data.value,
                                        )
                              )
                          },
                      ),
                      this.ctx.override(
                          this.headersProto,
                          'delete',
                          (e, r, t) => {
                              if (!t.length) return e.apply(r, t)
                              let [n] = t,
                                  i = new s({ name: n }, e, r)
                              return (
                                  this.emit('deleteHeader', i),
                                  i.intercepted
                                      ? i.returnValue
                                      : i.target.call(i.that, i.data.name)
                              )
                          },
                      ),
                      !0)
                    : !1
            }
        },
        ue = D
    var de = p(c(), 1)
    var M = class extends de.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.XMLHttpRequest = this.window.XMLHttpRequest),
                    (this.xhrProto = this.window.XMLHttpRequest
                        ? this.window.XMLHttpRequest.prototype
                        : {}),
                    (this.open = this.xhrProto.open),
                    (this.abort = this.xhrProto.abort),
                    (this.send = this.xhrProto.send),
                    (this.overrideMimeType = this.xhrProto.overrideMimeType),
                    (this.getAllResponseHeaders =
                        this.xhrProto.getAllResponseHeaders),
                    (this.getResponseHeader = this.xhrProto.getResponseHeader),
                    (this.setRequestHeader = this.xhrProto.setRequestHeader),
                    (this.responseURL =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.xhrProto,
                            'responseURL',
                        )),
                    (this.responseText =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.xhrProto,
                            'responseText',
                        ))
            }
            override() {
                this.overrideOpen(),
                    this.overrideSend(),
                    this.overrideMimeType(),
                    this.overrideGetResHeader(),
                    this.overrideGetResHeaders(),
                    this.overrideSetReqHeader()
            }
            overrideOpen() {
                this.ctx.override(this.xhrProto, 'open', (e, r, t) => {
                    if (2 > t.length) return e.apply(r, t)
                    let [n, i, o = !0, h = null, u = null] = t,
                        d = new s(
                            {
                                method: n,
                                input: i,
                                async: o,
                                user: h,
                                password: u,
                            },
                            e,
                            r,
                        )
                    return (
                        this.emit('open', d),
                        d.intercepted
                            ? d.returnValue
                            : d.target.call(
                                  d.that,
                                  d.data.method,
                                  d.data.input,
                                  d.data.async,
                                  d.data.user,
                                  d.data.password,
                              )
                    )
                })
            }
            overrideResponseUrl() {
                this.ctx.overrideDescriptor(this.xhrProto, 'responseURL', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('responseUrl', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideSend() {
                this.ctx.override(this.xhrProto, 'send', (e, r, [t = null]) => {
                    let n = new s({ body: t }, e, r)
                    return (
                        this.emit('send', n),
                        n.intercepted
                            ? n.returnValue
                            : n.target.call(n.that, n.data.body)
                    )
                })
            }
            overrideSetReqHeader() {
                this.ctx.override(
                    this.xhrProto,
                    'setRequestHeader',
                    (e, r, t) => {
                        if (2 > t.length) return e.apply(r, t)
                        let [n, i] = t,
                            o = new s({ name: n, value: i }, e, r)
                        return (
                            this.emit('setReqHeader', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.name,
                                      o.data.value,
                                  )
                        )
                    },
                )
            }
            overrideGetResHeaders() {
                this.ctx.override(
                    this.xhrProto,
                    'getAllResponseHeaders',
                    (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getAllResponseHeaders', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                )
            }
            overrideGetResHeader() {
                this.ctx.override(
                    this.xhrProto,
                    'getResponseHeader',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ name: n, value: e.call(r, n) }, e, r)
                        return i.intercepted ? i.returnValue : i.data.value
                    },
                )
            }
        },
        ce = M
    var pe = p(c(), 1)
    var k = class extends pe.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.EventSource = this.window.EventSource || {}),
                    (this.esProto = this.EventSource.prototype || {}),
                    (this.url = e.nativeMethods.getOwnPropertyDescriptor(
                        this.esProto,
                        'url',
                    )),
                    (this.CONNECTING = 0),
                    (this.OPEN = 1),
                    (this.CLOSED = 2)
            }
            overrideConstruct() {
                this.ctx.override(
                    this.window,
                    'EventSource',
                    (e, r, t) => {
                        if (!t.length) return new e(...t)
                        let [n, i = {}] = t,
                            o = new s({ url: n, config: i }, e, r)
                        return (
                            this.emit('construct', o),
                            o.intercepted
                                ? o.returnValue
                                : new o.target(o.data.url, o.data.config)
                        )
                    },
                    !0,
                ),
                    'EventSource' in this.window &&
                        ((this.window.EventSource.CONNECTING = this.CONNECTING),
                        (this.window.EventSource.OPEN = this.OPEN),
                        (this.window.EventSource.CLOSED = this.CLOSED))
            }
            overrideUrl() {
                this.ctx.overrideDescriptor(this.esProto, 'url', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return this.emit('url', t), t.data.value
                    },
                })
            }
        },
        ve = k
    var me = p(c(), 1)
    var V = class extends me.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = this.ctx.window),
                    (this.History = this.window.History),
                    (this.history = this.window.history),
                    (this.historyProto = this.History
                        ? this.History.prototype
                        : {}),
                    (this.pushState = this.historyProto.pushState),
                    (this.replaceState = this.historyProto.replaceState),
                    (this.go = this.historyProto.go),
                    (this.back = this.historyProto.back),
                    (this.forward = this.historyProto.forward)
            }
            override() {
                this.overridePushState(),
                    this.overrideReplaceState(),
                    this.overrideGo(),
                    this.overrideForward(),
                    this.overrideBack()
            }
            overridePushState() {
                this.ctx.override(this.historyProto, 'pushState', (e, r, t) => {
                    if (2 > t.length) return e.apply(r, t)
                    let [n, i, o = ''] = t,
                        h = new s({ state: n, title: i, url: o }, e, r)
                    return (
                        this.emit('pushState', h),
                        h.intercepted
                            ? h.returnValue
                            : h.target.call(
                                  h.that,
                                  h.data.state,
                                  h.data.title,
                                  h.data.url,
                              )
                    )
                })
            }
            overrideReplaceState() {
                this.ctx.override(
                    this.historyProto,
                    'replaceState',
                    (e, r, t) => {
                        if (2 > t.length) return e.apply(r, t)
                        let [n, i, o = ''] = t,
                            h = new s({ state: n, title: i, url: o }, e, r)
                        return (
                            this.emit('replaceState', h),
                            h.intercepted
                                ? h.returnValue
                                : h.target.call(
                                      h.that,
                                      h.data.state,
                                      h.data.title,
                                      h.data.url,
                                  )
                        )
                    },
                )
            }
            overrideGo() {
                this.ctx.override(this.historyProto, 'go', (e, r, [t]) => {
                    let n = new s({ delta: t }, e, r)
                    return (
                        this.emit('go', n),
                        n.intercepted
                            ? n.returnValue
                            : n.target.call(n.that, n.data.delta)
                    )
                })
            }
            overrideForward() {
                this.ctx.override(this.historyProto, 'forward', (e, r) => {
                    let t = new s(null, e, r)
                    return (
                        this.emit('forward', t),
                        t.intercepted ? t.returnValue : t.target.call(t.that)
                    )
                })
            }
            overrideBack() {
                this.ctx.override(this.historyProto, 'back', (e, r) => {
                    let t = new s(null, e, r)
                    return (
                        this.emit('back', t),
                        t.intercepted ? t.returnValue : t.target.call(t.that)
                    )
                })
            }
        },
        fe = V
    var we = p(c(), 1),
        N = class extends we.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.location = this.window.location),
                    (this.WorkerLocation = this.ctx.worker
                        ? this.window.WorkerLocation
                        : null),
                    (this.workerLocProto = this.WorkerLocation
                        ? this.WorkerLocation.prototype
                        : {}),
                    (this.keys = [
                        'href',
                        'protocol',
                        'host',
                        'hostname',
                        'port',
                        'pathname',
                        'search',
                        'hash',
                        'origin',
                    ]),
                    (this.HashChangeEvent =
                        this.window.HashChangeEvent || null),
                    (this.href = this.WorkerLocation
                        ? e.nativeMethods.getOwnPropertyDescriptor(
                              this.workerLocProto,
                              'href',
                          )
                        : e.nativeMethods.getOwnPropertyDescriptor(
                              this.location,
                              'href',
                          ))
            }
            overrideWorkerLocation(e) {
                if (!this.WorkerLocation) return !1
                let r = this
                for (let t of this.keys)
                    this.ctx.overrideDescriptor(this.workerLocProto, t, {
                        get: () => e(r.href.get.call(this.location))[t],
                    })
                return !0
            }
            emulate(e, r) {
                let t = {},
                    n = this
                for (let i of n.keys)
                    this.ctx.nativeMethods.defineProperty(t, i, {
                        get() {
                            return e(n.href.get.call(n.location))[i]
                        },
                        set:
                            i !== 'origin'
                                ? function (o) {
                                      switch (i) {
                                          case 'href':
                                              n.location.href = r(o)
                                              break
                                          case 'hash':
                                              n.emit(
                                                  'hashchange',
                                                  t.href,
                                                  o.trim().startsWith('#')
                                                      ? new URL(
                                                            o.trim(),
                                                            t.href,
                                                        ).href
                                                      : new URL(
                                                            '#' + o.trim(),
                                                            t.href,
                                                        ).href,
                                                  n,
                                              )
                                              break
                                          default:
                                              {
                                                  let h = new URL(t.href)
                                                  ;(h[i] = o),
                                                      (n.location.href = r(
                                                          h.href,
                                                      ))
                                              }
                                              break
                                      }
                                  }
                                : void 0,
                        configurable: !1,
                        enumerable: !0,
                    })
                return (
                    'reload' in this.location &&
                        this.ctx.nativeMethods.defineProperty(t, 'reload', {
                            value: this.ctx.wrap(
                                this.location,
                                'reload',
                                (i, o) => i.call(o === t ? this.location : o),
                            ),
                            writable: !1,
                            enumerable: !0,
                        }),
                    'replace' in this.location &&
                        this.ctx.nativeMethods.defineProperty(t, 'replace', {
                            value: this.ctx.wrap(
                                this.location,
                                'assign',
                                (i, o, h) => {
                                    ;(!h.length || o !== t) && i.call(o),
                                        (o = this.location)
                                    let [u] = h,
                                        d = new URL(u, t.href)
                                    return i.call(
                                        o === t ? this.location : o,
                                        r(d.href),
                                    )
                                },
                            ),
                            writable: !1,
                            enumerable: !0,
                        }),
                    'assign' in this.location &&
                        this.ctx.nativeMethods.defineProperty(t, 'assign', {
                            value: this.ctx.wrap(
                                this.location,
                                'assign',
                                (i, o, h) => {
                                    ;(!h.length || o !== t) && i.call(o),
                                        (o = this.location)
                                    let [u] = h,
                                        d = new URL(u, t.href)
                                    return i.call(
                                        o === t ? this.location : o,
                                        r(d.href),
                                    )
                                },
                            ),
                            writable: !1,
                            enumerable: !0,
                        }),
                    'ancestorOrigins' in this.location &&
                        this.ctx.nativeMethods.defineProperty(
                            t,
                            'ancestorOrigins',
                            {
                                get() {
                                    let i = []
                                    return (
                                        n.window.DOMStringList &&
                                            n.ctx.nativeMethods.setPrototypeOf(
                                                i,
                                                n.window.DOMStringList
                                                    .prototype,
                                            ),
                                        i
                                    )
                                },
                                set: void 0,
                                enumerable: !0,
                            },
                        ),
                    this.ctx.nativeMethods.defineProperty(t, 'toString', {
                        value: this.ctx.wrap(
                            this.location,
                            'toString',
                            () => t.href,
                        ),
                        enumerable: !0,
                        writable: !1,
                    }),
                    this.ctx.nativeMethods.defineProperty(
                        t,
                        Symbol.toPrimitive,
                        { value: () => t.href, writable: !1, enumerable: !1 },
                    ),
                    this.ctx.window.Location &&
                        this.ctx.nativeMethods.setPrototypeOf(
                            t,
                            this.ctx.window.Location.prototype,
                        ),
                    t
                )
            }
        },
        ye = N
    var Pe = p(c(), 1)
    var R = class extends Pe.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = this.ctx.window),
                    (this.postMessage = this.window.postMessage),
                    (this.MessageEvent = this.window.MessageEvent || {}),
                    (this.MessagePort = this.window.MessagePort || {}),
                    (this.mpProto = this.MessagePort.prototype || {}),
                    (this.mpPostMessage = this.mpProto.postMessage),
                    (this.messageProto = this.MessageEvent.prototype || {}),
                    (this.messageData =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.messageProto,
                            'data',
                        )),
                    (this.messageOrigin =
                        e.nativeMethods.getOwnPropertyDescriptor(
                            this.messageProto,
                            'origin',
                        ))
            }
            overridePostMessage() {
                this.ctx.override(this.window, 'postMessage', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let n, i, o
                    this.ctx.worker ? ([n, o = []] = t) : ([n, i, o = []] = t)
                    let h = new s(
                        {
                            message: n,
                            origin: i,
                            transfer: o,
                            worker: this.ctx.worker,
                        },
                        e,
                        r,
                    )
                    return (
                        this.emit('postMessage', h),
                        h.intercepted
                            ? h.returnValue
                            : this.ctx.worker
                              ? h.target.call(
                                    h.that,
                                    h.data.message,
                                    h.data.transfer,
                                )
                              : h.target.call(
                                    h.that,
                                    h.data.message,
                                    h.data.origin,
                                    h.data.transfer,
                                )
                    )
                })
            }
            wrapPostMessage(e, r, t = !1) {
                return this.ctx.wrap(e, r, (n, i, o) => {
                    if (this.ctx.worker ? !o.length : 2 > o)
                        return n.apply(i, o)
                    let h, u, d
                    t ? (([h, d = []] = o), (u = null)) : ([h, u, d = []] = o)
                    let v = new s(
                        {
                            message: h,
                            origin: u,
                            transfer: d,
                            worker: this.ctx.worker,
                        },
                        n,
                        e,
                    )
                    return (
                        this.emit('postMessage', v),
                        v.intercepted
                            ? v.returnValue
                            : t
                              ? v.target.call(
                                    v.that,
                                    v.data.message,
                                    v.data.transfer,
                                )
                              : v.target.call(
                                    v.that,
                                    v.data.message,
                                    v.data.origin,
                                    v.data.transfer,
                                )
                    )
                })
            }
            overrideMessageOrigin() {
                this.ctx.overrideDescriptor(this.messageProto, 'origin', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('origin', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
            overrideMessageData() {
                this.ctx.overrideDescriptor(this.messageProto, 'data', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('data', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
        },
        ge = R
    var xe = p(c(), 1)
    var I = class extends xe.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.navigator = this.window.navigator),
                    (this.Navigator = this.window.Navigator || {}),
                    (this.navProto = this.Navigator.prototype || {}),
                    (this.sendBeacon = this.navProto.sendBeacon)
            }
            overrideSendBeacon() {
                this.ctx.override(this.navProto, 'sendBeacon', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n, i = ''] = t,
                        o = new s({ url: n, data: i }, e, r)
                    return (
                        this.emit('sendBeacon', o),
                        o.intercepted
                            ? o.returnValue
                            : o.target.call(o.that, o.data.url, o.data.data)
                    )
                })
            }
        },
        be = I
    var Oe = p(c(), 1)
    var H = class extends Oe.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.Worker = this.window.Worker || {}),
                    (this.Worklet = this.window.Worklet || {}),
                    (this.workletProto = this.Worklet.prototype || {}),
                    (this.workerProto = this.Worker.prototype || {}),
                    (this.postMessage = this.workerProto.postMessage),
                    (this.terminate = this.workerProto.terminate),
                    (this.addModule = this.workletProto.addModule)
            }
            overrideWorker() {
                this.ctx.override(
                    this.window,
                    'Worker',
                    (e, r, t) => {
                        if (!t.length) return new e(...t)
                        let [n, i = {}] = t,
                            o = new s({ url: n, options: i }, e, r)
                        return (
                            this.emit('worker', o),
                            o.intercepted
                                ? o.returnValue
                                : new o.target(o.data.url, o.data.options)
                        )
                    },
                    !0,
                )
            }
            overrideAddModule() {
                this.ctx.override(this.workletProto, 'addModule', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n, i = {}] = t,
                        o = new s({ url: n, options: i }, e, r)
                    return (
                        this.emit('addModule', o),
                        o.intercepted
                            ? o.returnValue
                            : o.target.call(o.that, o.data.url, o.data.options)
                    )
                })
            }
            overridePostMessage() {
                this.ctx.override(
                    this.workerProto,
                    'postMessage',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n, i = []] = t,
                            o = new s({ message: n, transfer: i }, e, r)
                        return (
                            this.emit('postMessage', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.message,
                                      o.data.transfer,
                                  )
                        )
                    },
                )
            }
            overrideImportScripts() {
                this.ctx.override(this.window, 'importScripts', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let n = new s({ scripts: t }, e, r)
                    return (
                        this.emit('importScripts', n),
                        n.intercepted
                            ? n.returnValue
                            : n.target.apply(n.that, n.data.scripts)
                    )
                })
            }
        },
        Se = H
    var Le = p(c(), 1)
    var C = class extends Le.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = this.ctx.window),
                    (this.URL = this.window.URL || {}),
                    (this.createObjectURL = this.URL.createObjectURL),
                    (this.revokeObjectURL = this.URL.revokeObjectURL)
            }
            overrideObjectURL() {
                this.ctx.override(this.URL, 'createObjectURL', (e, r, t) => {
                    if (!t.length) return e.apply(r, t)
                    let [n] = t,
                        i = new s({ object: n }, e, r)
                    return (
                        this.emit('createObjectURL', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.object)
                    )
                }),
                    this.ctx.override(
                        this.URL,
                        'revokeObjectURL',
                        (e, r, t) => {
                            if (!t.length) return e.apply(r, t)
                            let [n] = t,
                                i = new s({ url: n }, e, r)
                            return (
                                this.emit('revokeObjectURL', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.url)
                            )
                        },
                    )
            }
        },
        Ee = C
    var Ce = p(c(), 1)
    var De = p(c(), 1)
    var A = class extends De.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.localStorage = this.window.localStorage || null),
                    (this.sessionStorage = this.window.sessionStorage || null),
                    (this.Storage = this.window.Storage || {}),
                    (this.storeProto = this.Storage.prototype || {}),
                    (this.getItem = this.storeProto.getItem || null),
                    (this.setItem = this.storeProto.setItem || null),
                    (this.removeItem = this.storeProto.removeItem || null),
                    (this.clear = this.storeProto.clear || null),
                    (this.key = this.storeProto.key || null),
                    (this.methods = [
                        'key',
                        'getItem',
                        'setItem',
                        'removeItem',
                        'clear',
                    ]),
                    (this.wrappers = new e.nativeMethods.Map())
            }
            overrideMethods() {
                this.ctx.override(this.storeProto, 'getItem', (e, r, t) => {
                    if (!t.length) return e.apply(this.wrappers.get(r) || r, t)
                    let [n] = t,
                        i = new s({ name: n }, e, this.wrappers.get(r) || r)
                    return (
                        this.emit('getItem', i),
                        i.intercepted
                            ? i.returnValue
                            : i.target.call(i.that, i.data.name)
                    )
                }),
                    this.ctx.override(this.storeProto, 'setItem', (e, r, t) => {
                        if (2 > t.length)
                            return e.apply(this.wrappers.get(r) || r, t)
                        let [n, i] = t,
                            o = new s(
                                { name: n, value: i },
                                e,
                                this.wrappers.get(r) || r,
                            )
                        return (
                            this.emit('setItem', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.name,
                                      o.data.value,
                                  )
                        )
                    }),
                    this.ctx.override(
                        this.storeProto,
                        'removeItem',
                        (e, r, t) => {
                            if (!t.length)
                                return e.apply(this.wrappers.get(r) || r, t)
                            let [n] = t,
                                i = new s(
                                    { name: n },
                                    e,
                                    this.wrappers.get(r) || r,
                                )
                            return (
                                this.emit('removeItem', i),
                                i.intercepted
                                    ? i.returnValue
                                    : i.target.call(i.that, i.data.name)
                            )
                        },
                    ),
                    this.ctx.override(this.storeProto, 'clear', (e, r) => {
                        let t = new s(null, e, this.wrappers.get(r) || r)
                        return (
                            this.emit('clear', t),
                            t.intercepted
                                ? t.returnValue
                                : t.target.call(t.that)
                        )
                    }),
                    this.ctx.override(this.storeProto, 'key', (e, r, t) => {
                        if (!t.length)
                            return e.apply(this.wrappers.get(r) || r, t)
                        let [n] = t,
                            i = new s(
                                { index: n },
                                e,
                                this.wrappers.get(r) || r,
                            )
                        return (
                            this.emit('key', i),
                            i.intercepted
                                ? i.returnValue
                                : i.target.call(i.that, i.data.index)
                        )
                    })
            }
            overrideLength() {
                this.ctx.overrideDescriptor(this.storeProto, 'length', {
                    get: (e, r) => {
                        let t = new s(
                            { length: e.call(this.wrappers.get(r) || r) },
                            e,
                            this.wrappers.get(r) || r,
                        )
                        return (
                            this.emit('length', t),
                            t.intercepted ? t.returnValue : t.data.length
                        )
                    },
                })
            }
            emulate(e, r = {}) {
                this.ctx.nativeMethods.setPrototypeOf(r, this.storeProto)
                let t = new this.ctx.window.Proxy(r, {
                    get: (n, i) => {
                        if (i in this.storeProto || typeof i == 'symbol')
                            return e[i]
                        let o = new s({ name: i }, null, e)
                        return (
                            this.emit('get', o),
                            o.intercepted ? o.returnValue : e[o.data.name]
                        )
                    },
                    set: (n, i, o) => {
                        if (i in this.storeProto || typeof i == 'symbol')
                            return (e[i] = o)
                        let h = new s({ name: i, value: o }, null, e)
                        return (
                            this.emit('set', h),
                            h.intercepted
                                ? h.returnValue
                                : (e[h.data.name] = h.data.value)
                        )
                    },
                    deleteProperty: (n, i) => {
                        if (typeof i == 'symbol') return delete e[i]
                        let o = new s({ name: i }, null, e)
                        return (
                            this.emit('delete', o),
                            o.intercepted
                                ? o.returnValue
                                : delete e[o.data.name]
                        )
                    },
                })
                return (
                    this.wrappers.set(t, e),
                    this.ctx.nativeMethods.setPrototypeOf(t, this.storeProto),
                    t
                )
            }
        },
        Me = A
    var ke = p(c(), 1)
    var T = class extends ke.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.CSSStyleDeclaration =
                        this.window.CSSStyleDeclaration || {}),
                    (this.cssStyleProto =
                        this.CSSStyleDeclaration.prototype || {}),
                    (this.getPropertyValue =
                        this.cssStyleProto.getPropertyValue || null),
                    (this.setProperty = this.cssStyleProto.setProperty || null),
                    this.cssText -
                        e.nativeMethods.getOwnPropertyDescriptors(
                            this.cssStyleProto,
                            'cssText',
                        ),
                    (this.urlProps = [
                        'background',
                        'backgroundImage',
                        'borderImage',
                        'borderImageSource',
                        'listStyle',
                        'listStyleImage',
                        'cursor',
                    ]),
                    (this.dashedUrlProps = [
                        'background',
                        'background-image',
                        'border-image',
                        'border-image-source',
                        'list-style',
                        'list-style-image',
                        'cursor',
                    ]),
                    (this.propToDashed = {
                        background: 'background',
                        backgroundImage: 'background-image',
                        borderImage: 'border-image',
                        borderImageSource: 'border-image-source',
                        listStyle: 'list-style',
                        listStyleImage: 'list-style-image',
                        cursor: 'cursor',
                    })
            }
            overrideSetGetProperty() {
                this.ctx.override(
                    this.cssStyleProto,
                    'getPropertyValue',
                    (e, r, t) => {
                        if (!t.length) return e.apply(r, t)
                        let [n] = t,
                            i = new s({ property: n }, e, r)
                        return (
                            this.emit('getPropertyValue', i),
                            i.intercepted
                                ? i.returnValue
                                : i.target.call(i.that, i.data.property)
                        )
                    },
                ),
                    this.ctx.override(
                        this.cssStyleProto,
                        'setProperty',
                        (e, r, t) => {
                            if (2 > t.length) return e.apply(r, t)
                            let [n, i] = t,
                                o = new s({ property: n, value: i }, e, r)
                            return (
                                this.emit('setProperty', o),
                                o.intercepted
                                    ? o.returnValue
                                    : o.target.call(
                                          o.that,
                                          o.data.property,
                                          o.data.value,
                                      )
                            )
                        },
                    )
            }
            overrideCssText() {
                this.ctx.overrideDescriptor(this.cssStyleProto, 'cssText', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('getCssText', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                    set: (e, r, [t]) => {
                        let n = new s({ value: t }, e, r)
                        return (
                            this.emit('setCssText', n),
                            n.intercepted
                                ? n.returnValue
                                : n.target.call(n.that, n.data.value)
                        )
                    },
                })
            }
        },
        Ve = T
    var Ne = p(c(), 1)
    var U = class extends Ne.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = this.ctx.window),
                    (this.IDBDatabase = this.window.IDBDatabase || {}),
                    (this.idbDatabaseProto = this.IDBDatabase.prototype || {}),
                    (this.IDBFactory = this.window.IDBFactory || {}),
                    (this.idbFactoryProto = this.IDBFactory.prototype || {}),
                    (this.open = this.idbFactoryProto.open)
            }
            overrideOpen() {
                this.ctx.override(
                    this.IDBFactory.prototype,
                    'open',
                    (e, r, t) => {
                        if (!t.length || !t.length) return e.apply(r, t)
                        let [n, i] = t,
                            o = new s({ name: n, version: i }, e, r)
                        return (
                            this.emit('idbFactoryOpen', o),
                            o.intercepted
                                ? o.returnValue
                                : o.target.call(
                                      o.that,
                                      o.data.name,
                                      o.data.version,
                                  )
                        )
                    },
                )
            }
            overrideName() {
                this.ctx.overrideDescriptor(this.idbDatabaseProto, 'name', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return (
                            this.emit('idbFactoryName', t),
                            t.intercepted ? t.returnValue : t.data.value
                        )
                    },
                })
            }
        },
        Re = U
    var Ie = p(c(), 1)
    var j = class extends Ie.default {
            constructor(e) {
                super(),
                    (this.ctx = e),
                    (this.window = e.window),
                    (this.WebSocket = this.window.WebSocket || {}),
                    (this.wsProto = this.WebSocket.prototype || {}),
                    (this.url = e.nativeMethods.getOwnPropertyDescriptor(
                        this.wsProto,
                        'url',
                    )),
                    (this.protocol = e.nativeMethods.getOwnPropertyDescriptor(
                        this.wsProto,
                        'protocol',
                    )),
                    (this.readyState = e.nativeMethods.getOwnPropertyDescriptor(
                        this.wsProto,
                        'readyState',
                    )),
                    (this.send = this.wsProto.send),
                    (this.CONNECTING = WebSocket.CONNECTING),
                    (this.OPEN = WebSocket.OPEN),
                    (this.CLOSING = WebSocket.CLOSING),
                    (this.CLOSED = WebSocket.CLOSED)
            }
            overrideWebSocket() {
                this.ctx.override(
                    this.window,
                    'WebSocket',
                    (e, r, t) => {
                        if (!t.length) return new e(...t)
                        let n = new s({ args: t }, e, r)
                        return (
                            this.emit('websocket', n),
                            n.intercepted
                                ? n.returnValue
                                : new n.target(n.data.url, n.data.protocols)
                        )
                    },
                    !0,
                ),
                    (this.window.WebSocket.CONNECTING = this.CONNECTING),
                    (this.window.WebSocket.OPEN = this.OPEN),
                    (this.window.WebSocket.CLOSING = this.CLOSING),
                    (this.window.WebSocket.CLOSED = this.CLOSED)
            }
            overrideURL() {
                this.ctx.overrideDescriptor(this.wsProto, 'url', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return this.emit('url', t), t.data.value
                    },
                })
            }
            overrideProtocol() {
                this.ctx.overrideDescriptor(this.wsProto, 'protocol', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return this.emit('protocol', t), t.data.value
                    },
                })
            }
            overrideReadyState() {
                this.ctx.overrideDescriptor(this.wsProto, 'readyState', {
                    get: (e, r) => {
                        let t = new s({ value: e.call(r) }, e, r)
                        return this.emit('readyState', t), t.data.value
                    },
                })
            }
            overrideSend() {
                this.ctx.override(this.wsProto, 'send', (e, r, t) => {
                    let n = new s({ args: t }, e, r)
                    return (
                        this.emit('send', n),
                        n.intercepted
                            ? n.returnValue
                            : n.target.call(n.that, n.data.args)
                    )
                })
            }
        },
        He = j
    var y = class extends Ce.default {
            constructor(e = self, r, t = !e.window) {
                super(),
                    (this.window = e),
                    (this.nativeMethods = {
                        fnToString: this.window.Function.prototype.toString,
                        defineProperty: this.window.Object.defineProperty,
                        getOwnPropertyDescriptor:
                            this.window.Object.getOwnPropertyDescriptor,
                        getOwnPropertyDescriptors:
                            this.window.Object.getOwnPropertyDescriptors,
                        getOwnPropertyNames:
                            this.window.Object.getOwnPropertyNames,
                        keys: this.window.Object.keys,
                        getOwnPropertySymbols:
                            this.window.Object.getOwnPropertySymbols,
                        isArray: this.window.Array.isArray,
                        setPrototypeOf: this.window.Object.setPrototypeOf,
                        isExtensible: this.window.Object.isExtensible,
                        Map: this.window.Map,
                        Proxy: this.window.Proxy,
                    }),
                    (this.worker = t),
                    (this.bareClient = r),
                    (this.fetch = new ue(this)),
                    (this.xhr = new ce(this)),
                    (this.idb = new Re(this)),
                    (this.history = new fe(this)),
                    (this.element = new ee(this)),
                    (this.node = new re(this)),
                    (this.document = new Z(this)),
                    (this.function = new se(this)),
                    (this.object = new he(this)),
                    (this.websocket = new He(this)),
                    (this.message = new ge(this)),
                    (this.navigator = new be(this)),
                    (this.eventSource = new ve(this)),
                    (this.attribute = new ne(this)),
                    (this.url = new Ee(this)),
                    (this.workers = new Se(this)),
                    (this.location = new ye(this)),
                    (this.storage = new Me(this)),
                    (this.style = new Ve(this))
            }
            override(e, r, t, n) {
                let i = this.wrap(e, r, t, n)
                return (e[r] = i), i
            }
            overrideDescriptor(e, r, t = {}) {
                let n = this.wrapDescriptor(e, r, t)
                return n ? (this.nativeMethods.defineProperty(e, r, n), n) : {}
            }
            wrap(e, r, t, n = !1) {
                let i = e[r]
                if (!i) return i
                let o =
                    'prototype' in i
                        ? function () {
                              return t(i, this, [...arguments])
                          }
                        : {
                              attach() {
                                  return t(i, this, [...arguments])
                              },
                          }.attach
                return (
                    n &&
                        ((o.prototype = i.prototype),
                        (o.prototype.constructor = o)),
                    this.emit('wrap', i, o, n),
                    o
                )
            }
            wrapDescriptor(e, r, t = {}) {
                let n = this.nativeMethods.getOwnPropertyDescriptor(e, r)
                if (!n) return !1
                for (let i in t)
                    i in n &&
                        (i === 'get' || i === 'set'
                            ? (n[i] = this.wrap(n, i, t[i]))
                            : (n[i] =
                                  typeof t[i] == 'function'
                                      ? t[i](n[i])
                                      : t[i]))
                return n
            }
        },
        er = y
    typeof self == 'object' && (self.UVClient = y)
})()
//# sourceMappingURL=uv.client.js.map
