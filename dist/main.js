!(function(o) {
  var t = {};
  function r(e) {
    if (t[e]) return t[e].exports;
    var n = (t[e] = { i: e, l: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = o),
    (r.c = t),
    (r.d = function(e, n, o) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if ((r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
        for (var t in n)
          r.d(
            o,
            t,
            function(e) {
              return n[e];
            }.bind(null, t)
          );
      return o;
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
  function(e, n, o) {
    var t = o(1);
    t.keys().forEach(t);
    var r = document.querySelector("video"),
      u = document.querySelector("audio"),
      c = document.querySelector(".play"),
      i = document.querySelector(".replay"),
      l = document.querySelector(".volume"),
      a = document.querySelector(".berserk"),
      f = document.getElementById("cover");
    (f.style.opacity = "1"),
      (f.style.pointerEvents = "auto"),
      (r.volume = 0.75),
      (c.onclick = function() {
        r.paused ? r.play() : r.pause();
      }),
      (i.onclick = function() {
        (r.loop = !r.loop), (this.innerHTML = "Replay:<br />" + (r.loop ? "ON" : "OFF"));
      }),
      (l.onclick = function() {
        (r.volume = r.volume ? 0 : 0.75), (this.innerHTML = "Volume:<br />" + (r.volume ? "ON" : "OFF"));
      }),
      (a.onclick = function() {
        u.play();
      }),
      (window.sound = function(e) {
        (r.muted = !e), (r.onplay = null), r.play(), (f.style.opacity = ""), (f.style.pointerEvents = "");
      }),
      (r.onplay = function() {
        r.pause();
      });
  },
  function(e, n, o) {
    var t = { "./cover.css": 2, "./eva.css": 3, "./index.css": 4, "./lyrics.css": 5, "./magi.css": 6 };
    function r(e) {
      var n = u(e);
      return o(n);
    }
    function u(e) {
      var n = t[e];
      if (n + 1) return n;
      var o = new Error("Cannot find module '" + e + "'");
      throw ((o.code = "MODULE_NOT_FOUND"), o);
    }
    (r.keys = function() {
      return Object.keys(t);
    }),
      (r.resolve = u),
      ((e.exports = r).id = 1);
  },
  function(e, n, o) {},
  function(e, n, o) {},
  function(e, n, o) {},
  function(e, n, o) {},
  function(e, n, o) {}
]);
