!(function(t) {
  var o = {};
  function r(e) {
    if (o[e]) return o[e].exports;
    var n = (o[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = o),
    (r.d = function(e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if ((r.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
        for (var o in n)
          r.d(
            t,
            o,
            function(e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function(e, n, t) {
    var o = t(1);
    o.keys().forEach(o);
    var r = document.querySelector("video"),
      u = document.querySelector("audio"),
      c = document.querySelector(".play"),
      i = document.querySelector(".replay"),
      l = document.querySelector(".volume"),
      a = document.querySelector(".berserk"),
      s = document.getElementById("cover");
    (s.style.animation = "none"),
      (s.style.pointerEvents = "auto"),
      (r.volume = 0.75),
      (c.onclick = function() {
        r.paused ? r.play() : r.pause();
      }),
      (i.onclick = function() {
        (r.loop = !r.loop), (this.innerHTML = "Replay:<br />" + (r.loop ? "ON" : "OFF"));
      }),
      (l.onclick = function() {
        (r.muted = !r.muted), (this.innerHTML = "Volume:<br />" + (r.muted ? "OFF" : "ON"));
      }),
      (a.onclick = function() {
        u.play();
      }),
      (window.sound = function(e) {
        (l.innerHTML = "Volume:<br />" + (e ? "ON" : "OFF")),
          (r.muted = !e),
          (r.onplay = null),
          r.play(),
          (s.style.transition = "1s opacity"),
          (s.style.webkitTransition = "1s opacity"),
          (s.style.opacity = "0"),
          (s.style.pointerEvents = "");
      }),
      (r.onplay = function() {
        r.pause();
      });
  },
  function(e, n, t) {
    var o = { "./cover.css": 2, "./eva.css": 3, "./index.css": 4, "./lyrics.css": 5, "./magi.css": 6 };
    function r(e) {
      var n = u(e);
      return t(n);
    }
    function u(e) {
      var n = o[e];
      if (n + 1) return n;
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    (r.keys = function() {
      return Object.keys(o);
    }),
      (r.resolve = u),
      ((e.exports = r).id = 1);
  },
  function(e, n, t) {},
  function(e, n, t) {},
  function(e, n, t) {},
  function(e, n, t) {},
  function(e, n, t) {}
]);
