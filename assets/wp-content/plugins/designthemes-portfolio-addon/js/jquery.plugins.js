/* nicescroll v3.7.0 InuYaksa - MIT - http://nicescroll.areaaperta.com */ ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var o = !1,
        t = !1,
        r = 0,
        i = 2e3,
        n = 0,
        s = e,
        l = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || !1
        }(),
        a = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || !1
        }();
    l ? window.cancelAnimationFrame || (a = function(e) {}) : (l = function(e, o) {
        var t = (new Date).getTime(),
            r = Math.max(0, 16 - (t - lastTime)),
            i = window.setTimeout(function() {
                e(t + r)
            }, r);
        return lastTime = t + r, i
    }, a = function(e) {
        window.clearTimeout(e)
    });
    var c = window.MutationObserver || window.WebKitMutationObserver || !1,
        d = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "6px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            emulatetouch: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: function() {
                var e = document.getElementsByTagName("script"),
                    o = e.length ? e[e.length - 1].src.split("?")[0] : "";
                return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
            }(),
            preventmultitouchscrolling: !0,
            disablemutationobserver: !1,
            enableobserver: !0
        },
        u = !1,
        h = function() {
            if (u) return u;
            var e = document.createElement("DIV"),
                o = e.style,
                t = navigator.userAgent,
                r = navigator.platform,
                i = {};
            return i.haspointerlock = "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document, i.isopera = "opera" in window, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), i.isie = "all" in document && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in document) || 7 === document.documentMode), i.isie8 = i.isie && "documentMode" in document && 8 === document.documentMode, i.isie9 = i.isie && "performance" in window && 9 === document.documentMode, i.isie10 = i.isie && "performance" in window && 10 === document.documentMode, i.isie11 = "msRequestFullscreen" in e && document.documentMode >= 11, i.ismsedge = "msCredentials" in window, i.isie9mobile = /iemobile.9/i.test(t), i.isie9mobile && (i.isie9 = !1), i.isie7mobile = !i.isie9mobile && i.isie7 && /iemobile/i.test(t), i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = !i.ismsedge && "chrome" in window, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, i.hasw3ctouch = (window.PointerEvent || !1) && (navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (window.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in document, i.isios8 = i.isios && "hidden" in document, i.isios10 = i.isios && window.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function() {
                var e, t = ["msTransform", "webkitTransform", "MozTransform", "OTransform"];
                for (e = 0; e < t.length; e++)
                    if (void 0 !== o[t[e]]) {
                        i.trstyle = t[e];
                        break
                    }
                i.hastransform = !!i.trstyle
            }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function() {
                i.transitionend = !1;
                for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], n = 0; n < e.length; n++)
                    if (e[n] in o) {
                        i.transitionstyle = e[n], i.prefixstyle = t[n], i.transitionend = r[n];
                        break
                    }
                i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
            }(), i.cursorgrabvalue = function() {
                var e = ["grab", "-webkit-grab", "-moz-grab"];
                (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    if (o.cursor = r, o.cursor == r) return r
                }
                return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
            }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== c, e = null, u = i, i
        },
        p = function(e, u) {
            function p() {
                var e = b.doc.css(z.trstyle);
                return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
            }

            function f() {
                var e = b.win;
                if ("zIndex" in e) return e.zIndex();
                for (; e.length > 0;) {
                    if (9 == e[0].nodeType) return !1;
                    var o = e.css("zIndex");
                    if (!isNaN(o) && 0 != o) return parseInt(o);
                    e = e.parent()
                }
                return !1
            }

            function g(e, o, t) {
                var r = e.css(o),
                    i = parseFloat(r);
                if (isNaN(i)) {
                    var n = 3 == (i = E[r] || 0) ? t ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1;
                    return b.isie8 && i && (i += 1), n ? i : 0
                }
                return i
            }

            function w(e, o, t, r) {
                b._bind(e, o, function(r) {
                    var i = {
                        original: r = r || window.event,
                        target: r.target || r.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                        },
                        stopImmediatePropagation: function() {
                            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                        }
                    };
                    return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
                }, r)
            }

            function v(e, o, t) {
                var r, i;
                if (0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (b.opt.mousescrollstep / 54)), i = -Math.floor(e.deltaY * (b.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * b.opt.mousescrollstep), i = -Math.floor(e.deltaY * b.opt.mousescrollstep)), o && b.opt.oneaxismousemode && 0 == r && i && (r = i, i = 0, t && (r < 0 ? b.getScrollLeft() >= b.page.maxw : b.getScrollLeft() <= 0) && (i = r, r = 0)), b.isrtlmode && (r = -r), r && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += r, b.debounced("mousewheelx", function() {
                        var e = b.lastdeltax;
                        b.lastdeltax = 0, b.rail.drag || b.doScrollLeftBy(e)
                    }, 15)), i) {
                    if (b.opt.nativeparentscrolling && t && !b.ispage && !b.zoomactive)
                        if (i < 0) {
                            if (b.getScrollTop() >= b.page.maxh) return !0
                        } else if (b.getScrollTop() <= 0) return !0;
                    b.scrollmom && b.scrollmom.stop(), b.lastdeltay += i, b.synched("mousewheely", function() {
                        var e = b.lastdeltay;
                        b.lastdeltay = 0, b.rail.drag || b.doScrollBy(e)
                    }, 15)
                }
                return e.stopImmediatePropagation(), e.preventDefault()
            }
            var b = this;
            if (this.version = "3.7.0", this.name = "nicescroll", this.me = u, this.opt = {
                    doc: s("body"),
                    win: !1
                }, s.extend(this.opt, d), this.opt.snapbackspeed = 80, e)
                for (var y in b.opt) void 0 !== e[y] && (b.opt[y] = e[y]);
            if (b.opt.disablemutationobserver && (c = !1), this.doc = b.opt.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== b.opt.win, this.win = b.opt.win || (this.ispage ? s(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? s(window) : this.win, this.body = s("body"), this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != b.opt.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                    x: 0,
                    y: 0
                }, this.scrollratio = {
                    x: 0,
                    y: 0
                }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
                var x = this.win[0] == window ? this.body : this.win,
                    S = x.css("writing-mode") || x.css("-webkit-writing-mode") || x.css("-ms-writing-mode") || x.css("-moz-writing-mode");
                "horizontal-tb" == S || "lr-tb" == S || "" == S ? (this.isrtlmode = "rtl" == x.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == S || "tb" == S || "tb-rl" == S || "rl-tb" == S, this.isvertical = "vertical-rl" == S || "tb" == S || "tb-rl" == S)
            } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;
            this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1;
            do {
                this.id = "ascrail" + i++
            } while (document.getElementById(this.id));
            this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.visibility = !0, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = b.opt.overflowx, this.overflowy = b.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = h();
            var z = s.extend({}, this.detected);
            this.canhwscroll = z.hastransform && b.opt.hwacceleration, this.ishwscroll = this.canhwscroll && b.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(z.iswebkit || z.isie || z.isie11) : this.hasreversehr = !(z.iswebkit || z.isie && !z.isie10 && !z.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, z.cantouch || !z.hasw3ctouch && !z.hasmstouch ? !z.cantouch || z.isios || z.isandroid || !z.iswebkit && !z.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, b.opt.enablemouselockapi || (z.hasmousecapture = !1, z.haspointerlock = !1), this.debounced = function(e, o, t) {
                b && (b.delaylist[e] || !1 || (b.delaylist[e] = {
                    h: l(function() {
                        b.delaylist[e].fn.call(b), b.delaylist[e] = !1
                    }, t)
                }, o.call(b)), b.delaylist[e].fn = o)
            };
            var T = !1;
            this.synched = function(e, o) {
                return b.synclist[e] = o,
                    function() {
                        T || (l(function() {
                            if (b) {
                                T = !1;
                                for (var e in b.synclist) {
                                    var o = b.synclist[e];
                                    o && o.call(b), b.synclist[e] = !1
                                }
                            }
                        }), T = !0)
                    }(), e
            }, this.unsynched = function(e) {
                b.synclist[e] && (b.synclist[e] = !1)
            }, this.css = function(e, o) {
                for (var t in o) b.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
            }, this.scrollTop = function(e) {
                return void 0 === e ? b.getScrollTop() : b.setScrollTop(e)
            }, this.scrollLeft = function(e) {
                return void 0 === e ? b.getScrollLeft() : b.setScrollLeft(e)
            };
            var k = function(e, o, t, r, i, n, s) {
                this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = n || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
            };
            if (k.prototype = {
                    B2: function(e) {
                        return 3 * e * e * (1 - e)
                    },
                    B3: function(e) {
                        return 3 * e * (1 - e) * (1 - e)
                    },
                    B4: function(e) {
                        return (1 - e) * (1 - e) * (1 - e)
                    },
                    getNow: function() {
                        var e = 1 - ((new Date).getTime() - this.ts) / this.spd,
                            o = this.B2(e) + this.B3(e) + this.B4(e);
                        return e < 0 ? this.ed : this.st + Math.round(this.df * o)
                    },
                    update: function(e, o) {
                        return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                    }
                }, this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, z.hastranslate3d && z.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(e) {
                    if (!e) {
                        var o = p();
                        if (o) return 16 == o.length ? -o[13] : -o[5];
                        if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
                    }
                    return b.doc.translate.y
                }, this.getScrollLeft = function(e) {
                    if (!e) {
                        var o = p();
                        if (o) return 16 == o.length ? -o[12] : -o[4];
                        if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
                    }
                    return b.doc.translate.x
                }, this.notifyScrollEvent = function(e) {
                    var o = document.createEvent("UIEvents");
                    o.initUIEvent("scroll", !1, !0, window, 1), o.niceevent = !0, e.dispatchEvent(o)
                };
                var M = this.isrtlmode ? 1 : -1;
                z.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function(e, o) {
                    b.doc.translate.y = e, b.doc.translate.ty = -1 * e + "px", b.doc.css(z.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), o || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(e, o) {
                    b.doc.translate.x = e, b.doc.translate.tx = e * M + "px", b.doc.css(z.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), o || b.notifyScrollEvent(b.win[0])
                }) : (this.setScrollTop = function(e, o) {
                    b.doc.translate.y = e, b.doc.translate.ty = -1 * e + "px", b.doc.css(z.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(e, o) {
                    b.doc.translate.x = e, b.doc.translate.tx = e * M + "px", b.doc.css(z.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0])
                })
            } else this.getScrollTop = function() {
                return b.docscroll.scrollTop()
            }, this.setScrollTop = function(e) {
                return setTimeout(function() {
                    b && b.docscroll.scrollTop(e)
                }, 1)
            }, this.getScrollLeft = function() {
                return b.hasreversehr ? b.detected.ismozilla ? b.page.maxw - Math.abs(b.docscroll.scrollLeft()) : b.page.maxw - b.docscroll.scrollLeft() : b.docscroll.scrollLeft()
            }, this.setScrollLeft = function(e) {
                return setTimeout(function() {
                    if (b) return b.hasreversehr && (e = b.detected.ismozilla ? -(b.page.maxw - e) : b.page.maxw - e), b.docscroll.scrollLeft(e)
                }, 1)
            };
            this.getTarget = function(e) {
                return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
            }, this.hasParent = function(e, o) {
                if (!e) return !1;
                for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
                return !1 !== t
            };
            var E = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            if (this.getDocumentScrollOffset = function() {
                    return {
                        top: window.pageYOffset || document.documentElement.scrollTop,
                        left: window.pageXOffset || document.documentElement.scrollLeft
                    }
                }, this.getOffset = function() {
                    if (b.isfixed) {
                        var e = b.win.offset(),
                            o = b.getDocumentScrollOffset();
                        return e.top -= o.top, e.left -= o.left, e
                    }
                    var t = b.win.offset();
                    if (!b.viewport) return t;
                    var r = b.viewport.offset();
                    return {
                        top: t.top - r.top,
                        left: t.left - r.left
                    }
                }, this.updateScrollBar = function(e) {
                    var o, t;
                    if (b.ishwscroll) b.rail.css({
                        height: b.win.innerHeight() - (b.opt.railpadding.top + b.opt.railpadding.bottom)
                    }), b.railh && b.railh.css({
                        width: b.win.innerWidth() - (b.opt.railpadding.left + b.opt.railpadding.right)
                    });
                    else {
                        var r = b.getOffset();
                        if (o = {
                                top: r.top,
                                left: r.left - (b.opt.railpadding.left + b.opt.railpadding.right)
                            }, o.top += g(b.win, "border-top-width", !0), o.left += b.rail.align ? b.win.outerWidth() - g(b.win, "border-right-width") - b.rail.width : g(b.win, "border-left-width"), (t = b.opt.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), b.railslocked || b.rail.css({
                                top: o.top,
                                left: o.left,
                                height: (e ? e.h : b.win.innerHeight()) - (b.opt.railpadding.top + b.opt.railpadding.bottom)
                            }), b.zoom && b.zoom.css({
                                top: o.top + 1,
                                left: 1 == b.rail.align ? o.left - 20 : o.left + b.rail.width + 4
                            }), b.railh && !b.railslocked) {
                            o = {
                                top: r.top,
                                left: r.left
                            }, (t = b.opt.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                            var i = b.railh.align ? o.top + g(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : o.top + g(b.win, "border-top-width", !0),
                                n = o.left + g(b.win, "border-left-width");
                            b.railh.css({
                                top: i - (b.opt.railpadding.top + b.opt.railpadding.bottom),
                                left: n,
                                width: b.railh.width
                            })
                        }
                    }
                }, this.doRailClick = function(e, o, t) {
                    var r, i, n, s;
                    b.railslocked || (b.cancelEvent(e), o ? (r = t ? b.doScrollLeft : b.doScrollTop)(n = t ? (e.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (e.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y) : (r = t ? b.doScrollLeftBy : b.doScrollBy, n = t ? b.scroll.x : b.scroll.y, s = t ? e.pageX - b.railh.offset().left : e.pageY - b.rail.offset().top, i = t ? b.view.w : b.view.h, r(n >= s ? i : -i)))
                }, b.hasanimationframe = "requestAnimationFrame" in window, b.hascancelanimationframe = "cancelAnimationFrame" in window, this.init = function() {
                    if (b.saved.css = [], z.isie7mobile) return !0;
                    if (z.isoperamini) return !0;
                    if (z.isandroid && !("hidden" in document)) return !0;
                    var e = z.ismodernie || z.isie10 ? {
                        "-ms-overflow-style": "none"
                    } : {
                        "overflow-y": "hidden"
                    };
                    if (b.opt.emulatetouch = b.opt.emulatetouch || b.opt.touchbehavior, b.zindex = "auto", b.ispage || "auto" != b.opt.zindex ? b.zindex = b.opt.zindex : b.zindex = f() || "auto", !b.ispage && "auto" != b.zindex && b.zindex > n && (n = b.zindex), b.isie && 0 == b.zindex && "auto" == b.opt.zindex && (b.zindex = "auto"), !b.ispage || !z.cantouch && !z.isieold && !z.isie9mobile) {
                        var i = b.docscroll;
                        b.ispage && (i = b.haswrapper ? b.win : b.doc), z.isie9mobile || b.css(i, e), b.ispage && z.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(s("html"), {
                            "overflow-y": "hidden"
                        }) : "HTML" == b.doc[0].nodeName && b.css(s("body"), e)), !z.isios || b.ispage || b.haswrapper || b.css(s("body"), {
                            "-webkit-overflow-scrolling": "touch"
                        });
                        var l = s(document.createElement("div"));
                        l.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: b.opt.cursorwidth,
                            height: 0,
                            "background-color": b.opt.cursorcolor,
                            border: b.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": b.opt.cursorborderradius,
                            "-moz-border-radius": b.opt.cursorborderradius,
                            "border-radius": b.opt.cursorborderradius
                        }), l.hborder = parseFloat(l.outerHeight() - l.innerHeight()), l.addClass("nicescroll-cursors"), b.cursor = l;
                        var a = s(document.createElement("div"));
                        a.attr("id", b.id), a.addClass("nicescroll-rails nicescroll-rails-vr");
                        var d, u, h = ["left", "right", "top", "bottom"];
                        for (var p in h) u = h[p], (d = b.opt.railpadding[u]) ? a.css("padding-" + u, d + "px") : b.opt.railpadding[u] = 0;
                        a.append(l), a.width = Math.max(parseFloat(b.opt.cursorwidth), l.outerWidth()), a.css({
                            width: a.width + "px",
                            zIndex: b.zindex,
                            background: b.opt.background,
                            cursor: "default"
                        }), a.visibility = !0, a.scrollable = !0, a.align = "left" == b.opt.railalign ? 0 : 1, b.rail = a, b.rail.drag = !1;
                        var g = !1;
                        !b.opt.boxzoom || b.ispage || z.isieold || (g = document.createElement("div"), b.bind(g, "click", b.doZoom), b.bind(g, "mouseenter", function() {
                            b.zoom.css("opacity", b.opt.cursoropacitymax)
                        }), b.bind(g, "mouseleave", function() {
                            b.zoom.css("opacity", b.opt.cursoropacitymin)
                        }), b.zoom = s(g), b.zoom.css({
                            cursor: "pointer",
                            zIndex: b.zindex,
                            backgroundImage: "url(" + b.opt.scriptpath + "zoomico.png)",
                            height: 18,
                            width: 18,
                            backgroundPosition: "0px 0px"
                        }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), z.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function(e) {
                            return e.scale > 1.5 && b.doZoomIn(e), e.scale < .8 && b.doZoomOut(e), b.cancelEvent(e)
                        }, b.bind(b.win, "gestureend", b.ongesturezoom))), b.railh = !1;
                        var w;
                        if (b.opt.horizrailenabled && (b.css(i, {
                                overflowX: "hidden"
                            }), (l = s(document.createElement("div"))).css({
                                position: "absolute",
                                top: 0,
                                height: b.opt.cursorwidth,
                                width: 0,
                                backgroundColor: b.opt.cursorcolor,
                                border: b.opt.cursorborder,
                                backgroundClip: "padding-box",
                                "-webkit-border-radius": b.opt.cursorborderradius,
                                "-moz-border-radius": b.opt.cursorborderradius,
                                "border-radius": b.opt.cursorborderradius
                            }), z.isieold && l.css("overflow", "hidden"), l.wborder = parseFloat(l.outerWidth() - l.innerWidth()), l.addClass("nicescroll-cursors"), b.cursorh = l, (w = s(document.createElement("div"))).attr("id", b.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(b.opt.cursorwidth), l.outerHeight()), w.css({
                                height: w.height + "px",
                                zIndex: b.zindex,
                                background: b.opt.background
                            }), w.append(l), w.visibility = !0, w.scrollable = !0, w.align = "top" == b.opt.railvalign ? 0 : 1, b.railh = w, b.railh.drag = !1), b.ispage) a.css({
                            position: "fixed",
                            top: 0,
                            height: "100%"
                        }), a.align ? a.css({
                            right: 0
                        }) : a.css({
                            left: 0
                        }), b.body.append(a), b.railh && (w.css({
                            position: "fixed",
                            left: 0,
                            width: "100%"
                        }), w.align ? w.css({
                            bottom: 0
                        }) : w.css({
                            top: 0
                        }), b.body.append(w));
                        else {
                            if (b.ishwscroll) {
                                "static" == b.win.css("position") && b.css(b.win, {
                                    position: "relative"
                                });
                                var v = "HTML" == b.win[0].nodeName ? b.body : b.win;
                                s(v).scrollTop(0).scrollLeft(0), b.zoom && (b.zoom.css({
                                    position: "absolute",
                                    top: 1,
                                    right: 0,
                                    "margin-right": a.width + 4
                                }), v.append(b.zoom)), a.css({
                                    position: "absolute",
                                    top: 0
                                }), a.align ? a.css({
                                    right: 0
                                }) : a.css({
                                    left: 0
                                }), v.append(a), w && (w.css({
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }), w.align ? w.css({
                                    bottom: 0
                                }) : w.css({
                                    top: 0
                                }), v.append(w))
                            } else {
                                b.isfixed = "fixed" == b.win.css("position");
                                var y = b.isfixed ? "fixed" : "absolute";
                                b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, 0 == /fixed|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
                                    position: "relative"
                                })), a.css({
                                    position: y
                                }), b.zoom && b.zoom.css({
                                    position: y
                                }), b.updateScrollBar(), b.body.append(a), b.zoom && b.body.append(b.zoom), b.railh && (w.css({
                                    position: y
                                }), b.body.append(w))
                            }
                            z.isios && b.css(b.win, {
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                "-webkit-touch-callout": "none"
                            }), z.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), z.iswebkit && b.opt.disableoutline && b.win.css("outline", "none")
                        }
                        if (!1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
                                opacity: b.opt.cursoropacitymax
                            }), b.railh && b.railh.css({
                                opacity: b.opt.cursoropacitymax
                            })) : !0 === b.opt.autohidemode || "leave" === b.opt.autohidemode ? (b.autohidedom = s().add(b.rail), z.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && z.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = s().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = s().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.railslocked = !1), z.isie9mobile) {
                            b.scrollmom = new m(b), b.onmangotouch = function() {
                                var e = b.getScrollTop(),
                                    o = b.getScrollLeft();
                                if (e == b.scrollmom.lastscrolly && o == b.scrollmom.lastscrollx) return !0;
                                var t = e - b.mangotouch.sy,
                                    r = o - b.mangotouch.sx;
                                if (0 != Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2)))) {
                                    var i = t < 0 ? -1 : 1,
                                        n = r < 0 ? -1 : 1,
                                        s = +new Date;
                                    if (b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy), s - b.mangotouch.tm > 80 || b.mangotouch.dry != i || b.mangotouch.drx != n) b.scrollmom.stop(), b.scrollmom.reset(o, e), b.mangotouch.sy = e, b.mangotouch.ly = e, b.mangotouch.sx = o, b.mangotouch.lx = o, b.mangotouch.dry = i, b.mangotouch.drx = n, b.mangotouch.tm = s;
                                    else {
                                        b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - r, b.mangotouch.sy - t), b.mangotouch.tm = s;
                                        var l = Math.max(Math.abs(b.mangotouch.ly - e), Math.abs(b.mangotouch.lx - o));
                                        b.mangotouch.ly = e, b.mangotouch.lx = o, l > 2 && (b.mangotouch.lazy = setTimeout(function() {
                                            b.mangotouch.lazy = !1, b.mangotouch.dry = 0, b.mangotouch.drx = 0, b.mangotouch.tm = 0, b.scrollmom.doMomentum(30)
                                        }, 100))
                                    }
                                }
                            };
                            var x = b.getScrollTop(),
                                S = b.getScrollLeft();
                            b.mangotouch = {
                                sy: x,
                                ly: x,
                                dry: 0,
                                sx: S,
                                lx: S,
                                drx: 0,
                                lazy: !1,
                                tm: 0
                            }, b.bind(b.docscroll, "scroll", b.onmangotouch)
                        } else {
                            if (z.cantouch || b.istouchcapable || b.opt.emulatetouch || z.hasmstouch) {
                                b.scrollmom = new m(b), b.ontouchstart = function(e) {
                                    if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                    if (b.hasmoving = !1, !b.railslocked) {
                                        var o;
                                        if (z.hasmstouch)
                                            for (o = !!e.target && e.target; o;) {
                                                var t = s(o).getNiceScroll();
                                                if (t.length > 0 && t[0].me == b.me) break;
                                                if (t.length > 0) return !1;
                                                if ("DIV" == o.nodeName && o.id == b.id) break;
                                                o = !!o.parentNode && o.parentNode
                                            }
                                        if (b.cancelScroll(), (o = b.getTarget(e)) && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return b.stopPropagation(e);
                                        if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), b.forcescreen) {
                                            var r = e;
                                            (e = {
                                                original: e.original ? e.original : e
                                            }).clientX = r.screenX, e.clientY = r.screenY
                                        }
                                        if (b.rail.drag = {
                                                x: e.clientX,
                                                y: e.clientY,
                                                sx: b.scroll.x,
                                                sy: b.scroll.y,
                                                st: b.getScrollTop(),
                                                sl: b.getScrollLeft(),
                                                pt: 2,
                                                dl: !1,
                                                tg: o
                                            }, b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
                                        else {
                                            var i = {
                                                    w: s(window).width(),
                                                    h: s(window).height()
                                                },
                                                n = {
                                                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                                },
                                                l = Math.max(0, n.h - i.h),
                                                a = Math.max(0, n.w - i.w);
                                            !b.rail.scrollable && b.railh.scrollable ? b.rail.drag.ck = l > 0 && "v" : b.rail.scrollable && !b.railh.scrollable ? b.rail.drag.ck = a > 0 && "h" : b.rail.drag.ck = !1, b.rail.drag.ck || (b.rail.drag.dl = "f")
                                        }
                                        if (b.opt.emulatetouch && b.isiframe && z.isie) {
                                            var c = b.win.position();
                                            b.rail.drag.x += c.left, b.rail.drag.y += c.top
                                        }
                                        if (b.hasmoving = !1, b.lastmouseup = !1, b.scrollmom.reset(e.clientX, e.clientY), !z.cantouch && !this.istouchcapable && !e.pointerType) {
                                            if (!(!!o && /INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))) return !b.ispage && z.hasmousecapture && o.setCapture(), b.opt.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function(e) {
                                                if (b.hasmoving) return !1;
                                                o._onclick.call(this, e)
                                            }), b.cancelEvent(e)) : b.stopPropagation(e);
                                            /SUBMIT|CANCEL|BUTTON/i.test(s(o).attr("type")) && (b.preventclick = {
                                                tg: o,
                                                click: !1
                                            })
                                        }
                                    }
                                }, b.ontouchend = function(e) {
                                    if (!b.rail.drag) return !0;
                                    if (2 == b.rail.drag.pt) {
                                        if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                        if (!b.hasmoving) {
                                            var o = b.rail.drag.tg;
                                            setTimeout(function() {
                                                o && s(o).trigger("click")
                                            }, 20)
                                        }
                                        if (b.rail.drag = !1, b.hasmoving && (b.scrollmom.doMomentum(), b.lastmouseup = !0, b.hideCursor(), z.hasmousecapture && document.releaseCapture(), !z.cantouch)) return b.cancelEvent(e)
                                    } else if (1 == b.rail.drag.pt) return b.onmouseup(e)
                                };
                                var T = b.opt.emulatetouch && b.isiframe && !z.hasmousecapture;
                                b.ontouchmove = function(e, o) {
                                    if (!b.rail.drag) return !1;
                                    if (e.targetTouches && b.opt.preventmultitouchscrolling && e.targetTouches.length > 1) return !1;
                                    if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                    if (z.isandroid && b.cancelEvent(e), 2 == b.rail.drag.pt) {
                                        if ("changedTouches" in (e = s.extend({
                                                original: e
                                            }, e)) && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), b.forcescreen) {
                                            var t = e;
                                            (e = {
                                                original: e.original ? e.original : e
                                            }).clientX = t.screenX, e.clientY = t.screenY
                                        }
                                        if (b.rail.drag.y === e.clientY && b.rail.drag.x === e.clientX) return !1;
                                        b.hasmoving = !0, b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
                                        var r, i;
                                        if (i = r = 0, T && !o) {
                                            var n = b.win.position();
                                            i = -n.left, r = -n.top
                                        }
                                        var l = e.clientY + r,
                                            a = l - b.rail.drag.y,
                                            c = e.clientX + i,
                                            d = c - b.rail.drag.x,
                                            u = b.rail.drag.st - a;
                                        b.ishwscroll && b.opt.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > b.page.maxh && (u = b.page.maxh + Math.round((u - b.page.maxh) / 2)) : (u < 0 && (u = 0, l = 0), u > b.page.maxh && (u = b.page.maxh, l = 0));
                                        var h;
                                        b.railh && b.railh.scrollable && (h = b.isrtlmode ? d - b.rail.drag.sl : b.rail.drag.sl - d, b.ishwscroll && b.opt.bouncescroll ? h < 0 ? h = Math.round(h / 2) : h > b.page.maxw && (h = b.page.maxw + Math.round((h - b.page.maxw) / 2)) : (h < 0 && (h = 0, c = 0), h > b.page.maxw && (h = b.page.maxw, c = 0)));
                                        var p = !1;
                                        if (b.rail.drag.dl) p = !0, "v" == b.rail.drag.dl ? h = b.rail.drag.sl : "h" == b.rail.drag.dl && (u = b.rail.drag.st);
                                        else {
                                            var m = Math.abs(a),
                                                f = Math.abs(d),
                                                g = b.opt.directionlockdeadzone;
                                            if ("v" == b.rail.drag.ck) {
                                                if (m > g && f <= .3 * m) return b.rail.drag = !1, !0;
                                                f > g && (b.rail.drag.dl = "f", s("body").scrollTop(s("body").scrollTop()))
                                            } else if ("h" == b.rail.drag.ck) {
                                                if (f > g && m <= .3 * f) return b.rail.drag = !1, !0;
                                                m > g && (b.rail.drag.dl = "f", s("body").scrollLeft(s("body").scrollLeft()))
                                            }
                                        }
                                        if (b.synched("touchmove", function() {
                                                b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(u), b.scrollmom.update(c, l), b.railh && b.railh.scrollable ? (b.setScrollLeft(h), b.showCursor(u, h)) : b.showCursor(u), z.isie10 && document.selection.clear())
                                            }), z.ischrome && b.istouchcapable && (p = !1), p) return b.cancelEvent(e)
                                    } else if (1 == b.rail.drag.pt) return b.onmousemove(e)
                                }, b.ontouchstartCursor = function(e, o) {
                                    if (!b.rail.drag || 3 == b.rail.drag.pt) {
                                        if (b.locked) return b.cancelEvent(e);
                                        b.cancelScroll(), b.rail.drag = {
                                            x: e.touches[0].clientX,
                                            y: e.touches[0].clientY,
                                            sx: b.scroll.x,
                                            sy: b.scroll.y,
                                            pt: 3,
                                            hr: !!o
                                        };
                                        var t = b.getTarget(e);
                                        return !b.ispage && z.hasmousecapture && t.setCapture(), b.isiframe && !z.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                            "pointer-events": "none"
                                        })), b.cancelEvent(e)
                                    }
                                }, b.ontouchendCursor = function(e) {
                                    if (b.rail.drag) {
                                        if (z.hasmousecapture && document.releaseCapture(), b.isiframe && !z.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 3 != b.rail.drag.pt) return;
                                        return b.rail.drag = !1, b.cancelEvent(e)
                                    }
                                }, b.ontouchmoveCursor = function(e) {
                                    if (b.rail.drag) {
                                        if (3 != b.rail.drag.pt) return;
                                        if (b.cursorfreezed = !0, b.rail.drag.hr) {
                                            b.scroll.x = b.rail.drag.sx + (e.touches[0].clientX - b.rail.drag.x), b.scroll.x < 0 && (b.scroll.x = 0);
                                            var o = b.scrollvaluemaxw;
                                            b.scroll.x > o && (b.scroll.x = o)
                                        } else {
                                            b.scroll.y = b.rail.drag.sy + (e.touches[0].clientY - b.rail.drag.y), b.scroll.y < 0 && (b.scroll.y = 0);
                                            var t = b.scrollvaluemax;
                                            b.scroll.y > t && (b.scroll.y = t)
                                        }
                                        return b.synched("touchmove", function() {
                                            b.rail.drag && 3 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                        }), b.cancelEvent(e)
                                    }
                                }
                            }
                            if (b.onmousedown = function(e, o) {
                                    if (!b.rail.drag || 1 == b.rail.drag.pt) {
                                        if (b.railslocked) return b.cancelEvent(e);
                                        b.cancelScroll(), b.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: b.scroll.x,
                                            sy: b.scroll.y,
                                            pt: 1,
                                            hr: o || !1
                                        };
                                        var t = b.getTarget(e);
                                        return !b.ispage && z.hasmousecapture && t.setCapture(), b.isiframe && !z.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                            "pointer-events": "none"
                                        })), b.hasmoving = !1, b.cancelEvent(e)
                                    }
                                }, b.onmouseup = function(e) {
                                    if (b.rail.drag) return 1 != b.rail.drag.pt || (z.hasmousecapture && document.releaseCapture(), b.isiframe && !z.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), b.rail.drag = !1, b.hasmoving && b.triggerScrollEnd(), b.cancelEvent(e))
                                }, b.onmousemove = function(e) {
                                    if (b.rail.drag) {
                                        if (1 !== b.rail.drag.pt) return;
                                        if (z.ischrome && 0 === e.which) return b.onmouseup(e);
                                        if (b.cursorfreezed = !0, b.hasmoving = !0, b.rail.drag.hr) {
                                            b.scroll.x = b.rail.drag.sx + (e.clientX - b.rail.drag.x), b.scroll.x < 0 && (b.scroll.x = 0);
                                            var o = b.scrollvaluemaxw;
                                            b.scroll.x > o && (b.scroll.x = o)
                                        } else {
                                            b.scroll.y = b.rail.drag.sy + (e.clientY - b.rail.drag.y), b.scroll.y < 0 && (b.scroll.y = 0);
                                            var t = b.scrollvaluemax;
                                            b.scroll.y > t && (b.scroll.y = t)
                                        }
                                        return b.synched("mousemove", function() {
                                            b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.hasreversehr ? b.doScrollLeft(b.scrollvaluemaxw - Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                        }), b.cancelEvent(e)
                                    }
                                    b.checkarea = 0
                                }, z.cantouch || b.opt.emulatetouch) b.onpreventclick = function(e) {
                                if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(e)
                            }, b.onclick = !z.isios && function(e) {
                                return !b.lastmouseup || (b.lastmouseup = !1, b.cancelEvent(e))
                            }, b.opt.grabcursorenabled && z.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
                                cursor: z.cursorgrabvalue
                            }), b.css(b.rail, {
                                cursor: z.cursorgrabvalue
                            }));
                            else {
                                var k = function(e) {
                                    if (b.selectiondrag) {
                                        if (e) {
                                            var o = b.win.outerHeight(),
                                                t = e.pageY - b.selectiondrag.top;
                                            t > 0 && t < o && (t = 0), t >= o && (t -= o), b.selectiondrag.df = t
                                        }
                                        if (0 != b.selectiondrag.df) {
                                            var r = 2 * -Math.floor(b.selectiondrag.df / 6);
                                            b.doScrollBy(r), b.debounced("doselectionscroll", function() {
                                                k()
                                            }, 50)
                                        }
                                    }
                                };
                                "getSelection" in document ? b.hasTextSelected = function() {
                                    return document.getSelection().rangeCount > 0
                                } : "selection" in document ? b.hasTextSelected = function() {
                                    return "None" != document.selection.type
                                } : b.hasTextSelected = function() {
                                    return !1
                                }, b.onselectionstart = function(e) {
                                    b.ispage || (b.selectiondrag = b.win.offset())
                                }, b.onselectionend = function(e) {
                                    b.selectiondrag = !1
                                }, b.onselectiondrag = function(e) {
                                    b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function() {
                                        k(e)
                                    }, 250)
                                }
                            }
                            z.hasw3ctouch ? (b.css(b.ispage ? s("html") : b.win, {
                                "touch-action": "none"
                            }), b.css(b.rail, {
                                "touch-action": "none"
                            }), b.css(b.cursor, {
                                "touch-action": "none"
                            }), b.bind(b.win, "pointerdown", b.ontouchstart), b.bind(document, "pointerup", b.ontouchend), b.bind(document, "pointermove", b.ontouchmove)) : z.hasmstouch ? (b.css(b.ispage ? s("html") : b.win, {
                                "-ms-touch-action": "none"
                            }), b.css(b.rail, {
                                "-ms-touch-action": "none"
                            }), b.css(b.cursor, {
                                "-ms-touch-action": "none"
                            }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function(e) {
                                e.preventDefault()
                            }), b.bind(b.cursor, "contextmenu", function(e) {
                                e.preventDefault()
                            })) : z.cantouch && (b.bind(b.win, "touchstart", b.ontouchstart, !1, !0), b.bind(document, "touchend", b.ontouchend, !1, !0), b.bind(document, "touchcancel", b.ontouchend, !1, !0), b.bind(document, "touchmove", b.ontouchmove, !1, !0)), b.opt.emulatetouch && (b.bind(b.win, "mousedown", b.ontouchstart, !1, !0), b.bind(document, "mouseup", b.ontouchend, !1, !0), b.bind(document, "mousemove", b.ontouchmove, !1, !0)), (b.opt.cursordragontouch || !z.cantouch && !b.opt.emulatetouch) && (b.rail.css({
                                cursor: "default"
                            }), b.railh && b.railh.css({
                                cursor: "default"
                            }), b.jqbind(b.rail, "mouseenter", function() {
                                if (!b.ispage && !b.win.is(":visible")) return !1;
                                b.canshowonmouseevent && b.showCursor(), b.rail.active = !0
                            }), b.jqbind(b.rail, "mouseleave", function() {
                                b.rail.active = !1, b.rail.drag || b.hideCursor()
                            }), b.opt.sensitiverail && (b.bind(b.rail, "click", function(e) {
                                b.doRailClick(e, !1, !1)
                            }), b.bind(b.rail, "dblclick", function(e) {
                                b.doRailClick(e, !0, !1)
                            }), b.bind(b.cursor, "click", function(e) {
                                b.cancelEvent(e)
                            }), b.bind(b.cursor, "dblclick", function(e) {
                                b.cancelEvent(e)
                            })), b.railh && (b.jqbind(b.railh, "mouseenter", function() {
                                if (!b.ispage && !b.win.is(":visible")) return !1;
                                b.canshowonmouseevent && b.showCursor(), b.rail.active = !0
                            }), b.jqbind(b.railh, "mouseleave", function() {
                                b.rail.active = !1, b.rail.drag || b.hideCursor()
                            }), b.opt.sensitiverail && (b.bind(b.railh, "click", function(e) {
                                b.doRailClick(e, !1, !0)
                            }), b.bind(b.railh, "dblclick", function(e) {
                                b.doRailClick(e, !0, !0)
                            }), b.bind(b.cursorh, "click", function(e) {
                                b.cancelEvent(e)
                            }), b.bind(b.cursorh, "dblclick", function(e) {
                                b.cancelEvent(e)
                            })))), b.opt.cursordragontouch && (this.istouchcapable || z.cantouch) && (b.bind(b.cursor, "touchstart", b.ontouchstartCursor), b.bind(b.cursor, "touchmove", b.ontouchmoveCursor), b.bind(b.cursor, "touchend", b.ontouchendCursor), b.cursorh && b.bind(b.cursorh, "touchstart", function(e) {
                                b.ontouchstartCursor(e, !0)
                            }), b.cursorh && b.bind(b.cursorh, "touchmove", b.ontouchmoveCursor), b.cursorh && b.bind(b.cursorh, "touchend", b.ontouchendCursor)), z.cantouch || b.opt.emulatetouch ? (b.bind(z.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch ? (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.cursorh && b.bind(b.cursorh, "mousedown", function(e) {
                                b.onmousedown(e, !0)
                            }), b.cursorh && b.bind(b.cursorh, "mouseup", b.onmouseup)) : (b.bind(b.rail, "mousedown", function(e) {
                                e.preventDefault()
                            }), b.railh && b.bind(b.railh, "mousedown", function(e) {
                                e.preventDefault()
                            }))) : (b.bind(z.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.railh && (b.bind(b.cursorh, "mousedown", function(e) {
                                b.onmousedown(e, !0)
                            }), b.bind(b.cursorh, "mouseup", b.onmouseup)), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function() {
                                b.canshowonmouseevent && b.showCursor(), b.rail.active = !0
                            }), b.jqbind(b.zoom, "mouseleave", function() {
                                b.rail.active = !1, b.rail.drag || b.hideCursor()
                            }))), b.opt.enablemousewheel && (b.isiframe || b.mousewheel(z.isie && b.ispage ? document : b.win, b.onmousewheel), b.mousewheel(b.rail, b.onmousewheel), b.railh && b.mousewheel(b.railh, b.onmousewheelhr)), b.ispage || z.cantouch || /HTML|^BODY/.test(b.win[0].nodeName) || (b.win.attr("tabindex") || b.win.attr({
                                tabindex: r++
                            }), b.jqbind(b.win, "focus", function(e) {
                                o = b.getTarget(e).id || !0, b.hasfocus = !0, b.canshowonmouseevent && b.noticeCursor()
                            }), b.jqbind(b.win, "blur", function(e) {
                                o = !1, b.hasfocus = !1
                            }), b.jqbind(b.win, "mouseenter", function(e) {
                                t = b.getTarget(e).id || !0, b.hasmousefocus = !0, b.canshowonmouseevent && b.noticeCursor()
                            }), b.jqbind(b.win, "mouseleave", function() {
                                t = !1, b.hasmousefocus = !1, b.rail.drag || b.hideCursor()
                            }))
                        }
                        if (b.onkeypress = function(e) {
                                if (b.railslocked && 0 == b.page.maxh) return !0;
                                e = e || window.e;
                                var r = b.getTarget(e);
                                if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
                                if (s(r).attr("contenteditable")) return !0;
                                if (b.hasfocus || b.hasmousefocus && !o || b.ispage && !o && !t) {
                                    var i = e.keyCode;
                                    if (b.railslocked && 27 != i) return b.cancelEvent(e);
                                    var n = e.ctrlKey || !1,
                                        l = e.shiftKey || !1,
                                        a = !1;
                                    switch (i) {
                                        case 38:
                                        case 63233:
                                            b.doScrollBy(72), a = !0;
                                            break;
                                        case 40:
                                        case 63235:
                                            b.doScrollBy(-72), a = !0;
                                            break;
                                        case 37:
                                        case 63232:
                                            b.railh && (n ? b.doScrollLeft(0) : b.doScrollLeftBy(72), a = !0);
                                            break;
                                        case 39:
                                        case 63234:
                                            b.railh && (n ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), a = !0);
                                            break;
                                        case 33:
                                        case 63276:
                                            b.doScrollBy(b.view.h), a = !0;
                                            break;
                                        case 34:
                                        case 63277:
                                            b.doScrollBy(-b.view.h), a = !0;
                                            break;
                                        case 36:
                                        case 63273:
                                            b.railh && n ? b.doScrollPos(0, 0) : b.doScrollTo(0), a = !0;
                                            break;
                                        case 35:
                                        case 63275:
                                            b.railh && n ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh), a = !0;
                                            break;
                                        case 32:
                                            b.opt.spacebarenabled && (l ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), a = !0);
                                            break;
                                        case 27:
                                            b.zoomactive && (b.doZoom(), a = !0)
                                    }
                                    if (a) return b.cancelEvent(e)
                                }
                            }, b.opt.enablekeyboard && b.bind(document, z.isopera && !z.isopera12 ? "keypress" : "keydown", b.onkeypress), b.bind(document, "keydown", function(e) {
                                (e.ctrlKey || !1) && (b.wheelprevented = !0)
                            }), b.bind(document, "keyup", function(e) {
                                e.ctrlKey || !1 || (b.wheelprevented = !1)
                            }), b.bind(window, "blur", function(e) {
                                b.wheelprevented = !1
                            }), b.bind(window, "resize", b.lazyResize), b.bind(window, "orientationchange", b.lazyResize), b.bind(window, "load", b.lazyResize), z.ischrome && !b.ispage && !b.haswrapper) {
                            var M = b.win.attr("style"),
                                E = parseFloat(b.win.css("width")) + 1;
                            b.win.css("width", E), b.synched("chromefix", function() {
                                b.win.attr("style", M)
                            })
                        }
                        b.onAttributeChange = function(e) {
                            b.lazyResize(b.isieold ? 250 : 30)
                        }, b.opt.enableobserver && (b.isie11 || !1 === c || (b.observerbody = new c(function(e) {
                            if (e.forEach(function(e) {
                                    if ("attributes" == e.type) return s("body").hasClass("modal-open") && s("body").hasClass("modal-dialog") && !s.contains(s(".modal-dialog")[0], b.doc[0]) ? b.hide() : b.show()
                                }), b.me.clientWidth != b.page.width || b.me.clientHeight != b.page.height) return b.lazyResize(30)
                        }), b.observerbody.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                            characterData: !1,
                            attributes: !0,
                            attributeFilter: ["class"]
                        })), b.ispage || b.haswrapper || (!1 !== c ? (b.observer = new c(function(e) {
                            e.forEach(b.onAttributeChange)
                        }), b.observer.observe(b.win[0], {
                            childList: !0,
                            characterData: !1,
                            attributes: !0,
                            subtree: !1
                        }), b.observerremover = new c(function(e) {
                            e.forEach(function(e) {
                                if (e.removedNodes.length > 0)
                                    for (var o in e.removedNodes)
                                        if (b && e.removedNodes[o] == b.win[0]) return b.remove()
                            })
                        }), b.observerremover.observe(b.win[0].parentNode, {
                            childList: !0,
                            characterData: !1,
                            attributes: !1,
                            subtree: !1
                        })) : (b.bind(b.win, z.isie && !z.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), z.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function(e) {
                            e.target == b.win[0] && b.remove()
                        })))), !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom), b.istextarea && (b.bind(b.win, "keydown", b.lazyResize), b.bind(b.win, "mouseup", b.lazyResize)), b.lazyResize(30)
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var L = function() {
                            b.iframexd = !1;
                            var o;
                            try {
                                (o = "contentDocument" in this ? this.contentDocument : this.contentWindow.document).domain
                            } catch (e) {
                                b.iframexd = !0, o = !1
                            }
                            if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                            if (b.forcescreen = !0, b.isiframe && (b.iframe = {
                                    doc: s(o),
                                    html: b.doc.contents().find("html")[0],
                                    body: b.doc.contents().find("body")[0]
                                }, b.getContentSize = function() {
                                    return {
                                        w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                        h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                                    }
                                }, b.docscroll = s(b.iframe.body)), !z.isios && b.opt.iframeautoresize && !b.isiframe) {
                                b.win.scrollTop(0), b.doc.height("");
                                var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                                b.doc.height(t)
                            }
                            b.lazyResize(30), z.isie7 && b.css(s(b.iframe.html), e), b.css(s(b.iframe.body), e), z.isios && b.haswrapper && b.css(s(o.body), {
                                "-webkit-transform": "translate3d(0,0,0)"
                            }), "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(o, "scroll", b.onscroll), b.opt.enablemousewheel && b.mousewheel(o, b.onmousewheel), b.opt.enablekeyboard && b.bind(o, z.isopera ? "keypress" : "keydown", b.onkeypress), z.cantouch ? (b.bind(o, "touchstart", b.ontouchstart), b.bind(o, "touchmove", b.ontouchmove)) : b.opt.emulatetouch && (b.bind(o, "mousedown", b.ontouchstart), b.bind(o, "mousemove", function(e) {
                                return b.ontouchmove(e, !0)
                            }), b.opt.grabcursorenabled && z.cursorgrabvalue && b.css(s(o.body), {
                                cursor: z.cursorgrabvalue
                            })), b.bind(o, "mouseup", b.ontouchend), b.zoom && (b.opt.dblclickzoom && b.bind(o, "dblclick", b.doZoom), b.ongesturezoom && b.bind(o, "gestureend", b.ongesturezoom))
                        };
                        this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                            L.call(b.doc[0], !1)
                        }, 500), b.bind(this.doc, "load", L)
                    }
                }, this.showCursor = function(e, o) {
                    if (b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0), b.rail) {
                        if (b.autohidedom && (b.autohidedom.stop().css({
                                opacity: b.opt.cursoropacitymax
                            }), b.cursoractive = !0), b.rail.drag && 1 == b.rail.drag.pt || (void 0 !== e && !1 !== e && (b.scroll.y = Math.round(1 * e / b.scrollratio.y)), void 0 !== o && (b.scroll.x = Math.round(1 * o / b.scrollratio.x))), b.cursor.css({
                                height: b.cursorheight,
                                top: b.scroll.y
                            }), b.cursorh) {
                            var t = b.hasreversehr ? b.scrollvaluemaxw - b.scroll.x : b.scroll.x;
                            !b.rail.align && b.rail.visibility ? b.cursorh.css({
                                width: b.cursorwidth,
                                left: t + b.rail.width
                            }) : b.cursorh.css({
                                width: b.cursorwidth,
                                left: t
                            }), b.cursoractive = !0
                        }
                        b.zoom && b.zoom.stop().css({
                            opacity: b.opt.cursoropacitymax
                        })
                    }
                }, this.hideCursor = function(e) {
                    b.cursortimeout || b.rail && b.autohidedom && (b.hasmousefocus && "leave" == b.opt.autohidemode || (b.cursortimeout = setTimeout(function() {
                        b.rail.active && b.showonmouseevent || (b.autohidedom.stop().animate({
                            opacity: b.opt.cursoropacitymin
                        }), b.zoom && b.zoom.stop().animate({
                            opacity: b.opt.cursoropacitymin
                        }), b.cursoractive = !1), b.cursortimeout = 0
                    }, e || b.opt.hidecursordelay)))
                }, this.noticeCursor = function(e, o, t) {
                    b.showCursor(o, t), b.rail.active || b.hideCursor(e)
                }, this.getContentSize = b.ispage ? function() {
                    return {
                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                } : b.haswrapper ? function() {
                    return {
                        w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                        h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
                    }
                } : function() {
                    return {
                        w: b.docscroll[0].scrollWidth,
                        h: b.docscroll[0].scrollHeight
                    }
                }, this.onResize = function(e, o) {
                    if (!b || !b.win) return !1;
                    if (!b.haswrapper && !b.ispage) {
                        if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
                        b.hidden || b.visibility || b.showRail().showRailHr()
                    }
                    var t = b.page.maxh,
                        r = b.page.maxw,
                        i = {
                            h: b.view.h,
                            w: b.view.w
                        };
                    if (b.view = {
                            w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                            h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                        }, b.page = o || b.getContentSize(), b.page.maxh = Math.max(0, b.page.h - b.view.h), b.page.maxw = Math.max(0, b.page.w - b.view.w), b.page.maxh == t && b.page.maxw == r && b.view.w == i.w && b.view.h == i.h) {
                        if (b.ispage) return b;
                        var n = b.win.offset();
                        if (b.lastposition) {
                            var s = b.lastposition;
                            if (s.top == n.top && s.left == n.left) return b
                        }
                        b.lastposition = n
                    }
                    return 0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail && (b.rail.scrollable = !1)) : (b.page.maxh -= b.opt.railpadding.top + b.opt.railpadding.bottom, b.rail.scrollable = !0), 0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh && (b.railh.scrollable = !1)) : (b.page.maxw -= b.opt.railpadding.left + b.opt.railpadding.right, b.railh && (b.railh.scrollable = b.opt.horizrailenabled)), b.railslocked = b.locked || 0 == b.page.maxh && 0 == b.page.maxw, b.railslocked ? (b.ispage || b.updateScrollBar(b.view), !1) : (b.hidden || b.visibility ? !b.railh || b.hidden || b.railh.visibility || b.showRailHr() : b.showRail().showRailHr(), b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20), b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h))), b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight), b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w))), b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth), b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder - (b.opt.railpadding.top + b.opt.railpadding.bottom), b.railh && (b.railh.width = b.page.maxh > 0 ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder - (b.opt.railpadding.left + b.opt.railpadding.right)), b.ispage || b.updateScrollBar(b.view), b.scrollratio = {
                        x: b.page.maxw / b.scrollvaluemaxw,
                        y: b.page.maxh / b.scrollvaluemax
                    }, b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor()), b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y)), b)
                }, this.resize = b.onResize, this.hlazyresize = 0, this.lazyResize = function(e) {
                    return b.haswrapper || b.hide(), b.hlazyresize && clearTimeout(b.hlazyresize), b.hlazyresize = setTimeout(function() {
                        b && (b.resize(), b.show())
                    }, 240), b
                }, this.jqbind = function(e, o, t) {
                    b.events.push({
                        e: e,
                        n: o,
                        f: t,
                        q: !0
                    }), s(e).bind(o, t)
                }, this.mousewheel = function(e, o, t) {
                    var r = "jquery" in e ? e[0] : e;
                    if ("onwheel" in document.createElement("div")) b._bind(r, "wheel", o, t || !1);
                    else {
                        var i = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        w(r, i, o, t || !1), "DOMMouseScroll" == i && w(r, "MozMousePixelScroll", o, t || !1)
                    }
                }, z.haseventlistener) {
                this.bind = function(e, o, t, r, i) {
                    var n = "jquery" in e ? e[0] : e;
                    b._bind(n, o, t, r || !1, i || !1)
                };
                var L = !1;
                try {
                    var C = Object.defineProperty({}, "passive", {
                        get: function() {
                            L = !0
                        }
                    });
                    window.addEventListener("test", null, C)
                } catch (e) {}
                this._bind = function(e, o, t, r, i) {
                    b.events.push({
                        e: e,
                        n: o,
                        f: t,
                        b: r,
                        q: !1
                    }), L && i ? e.addEventListener(o, t, {
                        passive: !1,
                        capture: r
                    }) : e.addEventListener(o, t, r || !1)
                }, this.cancelEvent = function(e) {
                    return !!e && ((e = e.original ? e.original : e).cancelable && e.preventDefault(), e.stopPropagation(), e.preventManipulation && e.preventManipulation(), !1)
                }, this.stopPropagation = function(e) {
                    return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
                }, this._unbind = function(e, o, t, r) {
                    e.removeEventListener(o, t, r)
                }
            } else this.bind = function(e, o, t, r) {
                var i = "jquery" in e ? e[0] : e;
                b._bind(i, o, function(e) {
                    return (e = e || window.event || !1) && e.srcElement && (e.target = e.srcElement), "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop), !1 !== t.call(i, e) && !1 !== r || b.cancelEvent(e)
                })
            }, this._bind = function(e, o, t, r) {
                b.events.push({
                    e: e,
                    n: o,
                    f: t,
                    b: r,
                    q: !1
                }), e.attachEvent ? e.attachEvent("on" + o, t) : e["on" + o] = t
            }, this.cancelEvent = function(e) {
                return !!(e = window.event || !1) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1, !1)
            }, this.stopPropagation = function(e) {
                return !!(e = window.event || !1) && (e.cancelBubble = !0, !1)
            }, this._unbind = function(e, o, t, r) {
                e.detachEvent ? e.detachEvent("on" + o, t) : e["on" + o] = !1
            };
            this.unbindAll = function() {
                for (var e = 0; e < b.events.length; e++) {
                    var o = b.events[e];
                    o.q ? o.e.unbind(o.n, o.f) : b._unbind(o.e, o.n, o.f, o.b)
                }
            }, this.showRail = function() {
                return 0 == b.page.maxh || !b.ispage && "none" == b.win.css("display") || (b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block")), b
            }, this.showRailHr = function() {
                return b.railh ? (0 == b.page.maxw || !b.ispage && "none" == b.win.css("display") || (b.railh.visibility = !0, b.railh.css("display", "block")), b) : b
            }, this.hideRail = function() {
                return b.visibility = !1, b.rail.visibility = !1, b.rail.css("display", "none"), b
            }, this.hideRailHr = function() {
                return b.railh ? (b.railh.visibility = !1, b.railh.css("display", "none"), b) : b
            }, this.show = function() {
                return b.hidden = !1, b.railslocked = !1, b.showRail().showRailHr()
            }, this.hide = function() {
                return b.hidden = !0, b.railslocked = !0, b.hideRail().hideRailHr()
            }, this.toggle = function() {
                return b.hidden ? b.show() : b.hide()
            }, this.remove = function() {
                b.stop(), b.cursortimeout && clearTimeout(b.cursortimeout);
                for (var e in b.delaylist) b.delaylist[e] && a(b.delaylist[e].h);
                b.doZoomOut(), b.unbindAll(), z.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange), !1 !== b.observer && b.observer.disconnect(), !1 !== b.observerremover && b.observerremover.disconnect(), !1 !== b.observerbody && b.observerbody.disconnect(), b.events = null, b.cursor && b.cursor.remove(), b.cursorh && b.cursorh.remove(), b.rail && b.rail.remove(), b.railh && b.railh.remove(), b.zoom && b.zoom.remove();
                for (var o = 0; o < b.saved.css.length; o++) {
                    var t = b.saved.css[o];
                    t[0].css(t[1], void 0 === t[2] ? "" : t[2])
                }
                b.saved = !1, b.me.data("__nicescroll", "");
                var r = s.nicescroll;
                r.each(function(e) {
                    if (this && this.id === b.id) {
                        delete r[e];
                        for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
                        --r.length && delete r[r.length]
                    }
                });
                for (var i in b) b[i] = null, delete b[i];
                b = null
            }, this.scrollstart = function(e) {
                return this.onscrollstart = e, b
            }, this.scrollend = function(e) {
                return this.onscrollend = e, b
            }, this.scrollcancel = function(e) {
                return this.onscrollcancel = e, b
            }, this.zoomin = function(e) {
                return this.onzoomin = e, b
            }, this.zoomout = function(e) {
                return this.onzoomout = e, b
            }, this.isScrollable = function(e) {
                var o = e.target ? e.target : e;
                if ("OPTION" == o.nodeName) return !0;
                for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
                    var t = s(o),
                        r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                    if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
                    o = !!o.parentNode && o.parentNode
                }
                return !1
            }, this.getViewport = function(e) {
                for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                    var t = s(o);
                    if (/fixed|absolute/.test(t.css("position"))) return t;
                    var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                    if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
                    if (t.getNiceScroll().length > 0) return t;
                    o = !!o.parentNode && o.parentNode
                }
                return !1
            }, this.triggerScrollEnd = function() {
                if (b.onscrollend) {
                    var e = b.getScrollLeft(),
                        o = b.getScrollTop(),
                        t = {
                            type: "scrollend",
                            current: {
                                x: e,
                                y: o
                            },
                            end: {
                                x: e,
                                y: o
                            }
                        };
                    b.onscrollend.call(b, t)
                }
            }, this.onmousewheel = function(e) {
                if (!b.wheelprevented) {
                    if (b.railslocked) return b.debounced("checkunlock", b.resize, 250), !0;
                    if (b.rail.drag) return b.cancelEvent(e);
                    if ("auto" == b.opt.oneaxismousemode && 0 != e.deltaX && (b.opt.oneaxismousemode = !1), b.opt.oneaxismousemode && 0 == e.deltaX && !b.rail.scrollable) return !b.railh || !b.railh.scrollable || b.onmousewheelhr(e);
                    var o = +new Date,
                        t = !1;
                    if (b.opt.preservenativescrolling && b.checkarea + 600 < o && (b.nativescrollingarea = b.isScrollable(e), t = !0), b.checkarea = o, b.nativescrollingarea) return !0;
                    var r = v(e, !1, t);
                    return r && (b.checkarea = 0), r
                }
            }, this.onmousewheelhr = function(e) {
                if (!b.wheelprevented) {
                    if (b.railslocked || !b.railh.scrollable) return !0;
                    if (b.rail.drag) return b.cancelEvent(e);
                    var o = +new Date,
                        t = !1;
                    return b.opt.preservenativescrolling && b.checkarea + 600 < o && (b.nativescrollingarea = b.isScrollable(e), t = !0), b.checkarea = o, !!b.nativescrollingarea || (b.railslocked ? b.cancelEvent(e) : v(e, !0, t))
                }
            }, this.stop = function() {
                return b.cancelScroll(), b.scrollmon && b.scrollmon.stop(), b.cursorfreezed = !1, b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.noticeCursor(), b
            }, this.getTransitionSpeed = function(e) {
                var o = Math.round(10 * b.opt.scrollspeed),
                    t = Math.min(o, Math.round(e / 20 * b.opt.scrollspeed));
                return t > 20 ? t : 0
            }, b.opt.smoothscroll ? b.ishwscroll && z.hastransition && b.opt.usetransition && b.opt.smoothscroll ? (this.prepareTransition = function(e, o) {
                var t = o ? e > 20 ? e : 0 : b.getTransitionSpeed(e),
                    r = t ? z.prefixstyle + "transform " + t + "ms ease-out" : "";
                return b.lasttransitionstyle && b.lasttransitionstyle == r || (b.lasttransitionstyle = r, b.doc.css(z.transitionstyle, r)), t
            }, this.doScrollLeft = function(e, o) {
                var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(e, t, o)
            }, this.doScrollTop = function(e, o) {
                var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(t, e, o)
            }, this.doScrollPos = function(e, o, t) {
                var r = b.getScrollTop(),
                    i = b.getScrollLeft();
                return ((b.newscrolly - r) * (o - r) < 0 || (b.newscrollx - i) * (e - i) < 0) && b.cancelScroll(), 0 == b.opt.bouncescroll && (o < 0 ? o = 0 : o > b.page.maxh && (o = b.page.maxh), e < 0 ? e = 0 : e > b.page.maxw && (e = b.page.maxw)), (!b.scrollrunning || e != b.newscrollx || o != b.newscrolly) && (b.newscrolly = o, b.newscrollx = e, b.newscrollspeed = t || !1, !b.timer && void(b.timer = setTimeout(function() {
                    var t = b.getScrollTop(),
                        r = b.getScrollLeft(),
                        i = {};
                    i.x = e - r, i.y = o - t, i.px = r, i.py = t;
                    var n = Math.round(Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2))),
                        s = b.newscrollspeed && b.newscrollspeed > 1 ? b.newscrollspeed : b.getTransitionSpeed(n);
                    if (b.newscrollspeed && b.newscrollspeed <= 1 && (s *= b.newscrollspeed), b.prepareTransition(s, !0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), s > 0) {
                        if (!b.scrollrunning && b.onscrollstart) {
                            var l = {
                                type: "scrollstart",
                                current: {
                                    x: r,
                                    y: t
                                },
                                request: {
                                    x: e,
                                    y: o
                                },
                                end: {
                                    x: b.newscrollx,
                                    y: b.newscrolly
                                },
                                speed: s
                            };
                            b.onscrollstart.call(b, l)
                        }
                        z.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, z.transitionend, b.onScrollTransitionEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollTransitionEnd, s));
                        var a = t,
                            c = r;
                        b.timerscroll = {
                            bz: new k(a, b.newscrolly, s, 0, 0, .58, 1),
                            bh: new k(c, b.newscrollx, s, 0, 0, .58, 1)
                        }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function() {
                            b.showCursor(b.getScrollTop(), b.getScrollLeft())
                        }, 60))
                    }
                    b.synched("doScroll-set", function() {
                        b.timer = 0, b.scrollendtrapped && (b.scrollrunning = !0), b.setScrollTop(b.newscrolly), b.setScrollLeft(b.newscrollx), b.scrollendtrapped || b.onScrollTransitionEnd()
                    })
                }, 50)))
            }, this.cancelScroll = function() {
                if (!b.scrollendtrapped) return !0;
                var e = b.getScrollTop(),
                    o = b.getScrollLeft();
                return b.scrollrunning = !1, z.transitionend || clearTimeout(z.transitionend), b.scrollendtrapped = !1, b._unbind(b.doc[0], z.transitionend, b.onScrollTransitionEnd), b.prepareTransition(0), b.setScrollTop(e), b.railh && b.setScrollLeft(o), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1, b.cursorfreezed = !1, b.showCursor(e, o), b
            }, this.onScrollTransitionEnd = function() {
                b.scrollendtrapped && b._unbind(b.doc[0], z.transitionend, b.onScrollTransitionEnd), b.scrollendtrapped = !1, b.prepareTransition(0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1;
                var e = b.getScrollTop(),
                    o = b.getScrollLeft();
                if (b.setScrollTop(e), b.railh && b.setScrollLeft(o), b.noticeCursor(!1, e, o), b.cursorfreezed = !1, e < 0 ? e = 0 : e > b.page.maxh && (e = b.page.maxh), o < 0 ? o = 0 : o > b.page.maxw && (o = b.page.maxw), e != b.newscrolly || o != b.newscrollx) return b.doScrollPos(o, e, b.opt.snapbackspeed);
                b.onscrollend && b.scrollrunning && b.triggerScrollEnd(), b.scrollrunning = !1
            }) : (this.doScrollLeft = function(e, o) {
                var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(e, t, o)
            }, this.doScrollTop = function(e, o) {
                var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(t, e, o)
            }, this.doScrollPos = function(e, o, t) {
                function r() {
                    if (b.cancelAnimationFrame) return !0;
                    if (b.scrollrunning = !0, h = 1 - h) return b.timer = l(r) || 1;
                    var e, o, t = 0,
                        i = o = b.getScrollTop();
                    b.dst.ay ? (((s = (i = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly) - o) < 0 && i < b.newscrolly || s > 0 && i > b.newscrolly) && (i = b.newscrolly), b.setScrollTop(i), i == b.newscrolly && (t = 1)) : t = 1;
                    var n = e = b.getScrollLeft();
                    if (b.dst.ax) {
                        var s = (n = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx) - e;
                        (s < 0 && n < b.newscrollx || s > 0 && n > b.newscrollx) && (n = b.newscrollx), b.setScrollLeft(n), n == b.newscrollx && (t += 1)
                    } else t += 1;
                    2 == t ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, i < 0 ? i = 0 : i > b.page.maxh && (i = Math.max(0, b.page.maxh)), n < 0 ? n = 0 : n > b.page.maxw && (n = b.page.maxw), n != b.newscrollx || i != b.newscrolly ? b.doScrollPos(n, i) : b.onscrollend && b.triggerScrollEnd()) : b.timer = l(r) || 1
                }
                var o = void 0 === o || !1 === o ? b.getScrollTop(!0) : o;
                if (b.timer && b.newscrolly == o && b.newscrollx == e) return !0;
                b.timer && a(b.timer), b.timer = 0;
                var i = b.getScrollTop(),
                    n = b.getScrollLeft();
                ((b.newscrolly - i) * (o - i) < 0 || (b.newscrollx - n) * (e - n) < 0) && b.cancelScroll(), b.newscrolly = o, b.newscrollx = e, b.bouncescroll && b.rail.visibility || (b.newscrolly < 0 ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh)), b.bouncescroll && b.railh.visibility || (b.newscrollx < 0 ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw)), b.dst = {}, b.dst.x = e - n, b.dst.y = o - i, b.dst.px = n, b.dst.py = i;
                var s = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
                b.dst.ax = b.dst.x / s, b.dst.ay = b.dst.y / s;
                var c = 0,
                    d = s;
                0 == b.dst.x ? (c = i, d = o, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (c = n, d = e, b.dst.ax = 1, b.dst.px = 0);
                var u = b.getTransitionSpeed(s);
                if (t && t <= 1 && (u *= t), b.bzscroll = u > 0 && (b.bzscroll ? b.bzscroll.update(d, u) : new k(c, d, u, 0, 1, 0, 1)), !b.timer) {
                    (i == b.page.maxh && o >= b.page.maxh || n == b.page.maxw && e >= b.page.maxw) && b.checkContentSize();
                    var h = 1;
                    if (b.cancelAnimationFrame = !1, b.timer = 1, b.onscrollstart && !b.scrollrunning) {
                        var p = {
                            type: "scrollstart",
                            current: {
                                x: n,
                                y: i
                            },
                            request: {
                                x: e,
                                y: o
                            },
                            end: {
                                x: b.newscrollx,
                                y: b.newscrolly
                            },
                            speed: u
                        };
                        b.onscrollstart.call(b, p)
                    }
                    r(), (i == b.page.maxh && o >= i || n == b.page.maxw && e >= n) && b.checkContentSize(), b.noticeCursor()
                }
            }, this.cancelScroll = function() {
                return b.timer && a(b.timer), b.timer = 0, b.bzscroll = !1, b.scrollrunning = !1, b
            }) : (this.doScrollLeft = function(e, o) {
                var t = b.getScrollTop();
                b.doScrollPos(e, t, o)
            }, this.doScrollTop = function(e, o) {
                var t = b.getScrollLeft();
                b.doScrollPos(t, e, o)
            }, this.doScrollPos = function(e, o, t) {
                var r = e > b.page.maxw ? b.page.maxw : e;
                r < 0 && (r = 0);
                var i = o > b.page.maxh ? b.page.maxh : o;
                i < 0 && (i = 0), b.synched("scroll", function() {
                    b.setScrollTop(i), b.setScrollLeft(r)
                })
            }, this.cancelScroll = function() {}), this.doScrollBy = function(e, o) {
                var t = 0;
                if (t = o ? Math.floor((b.scroll.y - e) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - e, b.bouncescroll) {
                    var r = Math.round(b.view.h / 2);
                    t < -r ? t = -r : t > b.page.maxh + r && (t = b.page.maxh + r)
                }
                b.cursorfreezed = !1;
                var i = b.getScrollTop(!0);
                return t < 0 && i <= 0 ? b.noticeCursor() : t > b.page.maxh && i >= b.page.maxh ? (b.checkContentSize(), b.noticeCursor()) : void b.doScrollTop(t)
            }, this.doScrollLeftBy = function(e, o) {
                var t = 0;
                if (t = o ? Math.floor((b.scroll.x - e) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - e, b.bouncescroll) {
                    var r = Math.round(b.view.w / 2);
                    t < -r ? t = -r : t > b.page.maxw + r && (t = b.page.maxw + r)
                }
                b.cursorfreezed = !1;
                var i = b.getScrollLeft(!0);
                return t < 0 && i <= 0 ? b.noticeCursor() : t > b.page.maxw && i >= b.page.maxw ? b.noticeCursor() : void b.doScrollLeft(t)
            }, this.doScrollTo = function(e, o) {
                var t = o ? Math.round(e * b.scrollratio.y) : e;
                t < 0 ? t = 0 : t > b.page.maxh && (t = b.page.maxh), b.cursorfreezed = !1, b.doScrollTop(e)
            }, this.checkContentSize = function() {
                var e = b.getContentSize();
                e.h == b.page.h && e.w == b.page.w || b.resize(!1, e)
            }, b.onscroll = function(e) {
                b.rail.drag || (b.cursorfreezed || b.synched("scroll", function() {
                    b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x))), b.noticeCursor()
                }), b.triggerScrollEnd())
            }, b.bind(b.docscroll, "scroll", b.onscroll), this.doZoomIn = function(e) {
                if (!b.zoomactive) {
                    b.zoomactive = !0, b.zoomrestore = {
                        style: {}
                    };
                    var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                        t = b.win[0].style;
                    for (var r in o) {
                        var i = o[r];
                        b.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                    }
                    b.zoomrestore.style.width = b.win.css("width"), b.zoomrestore.style.height = b.win.css("height"), b.zoomrestore.padding = {
                        w: b.win.outerWidth() - b.win.width(),
                        h: b.win.outerHeight() - b.win.height()
                    }, z.isios4 && (b.zoomrestore.scrollTop = s(window).scrollTop(), s(window).scrollTop(0)), b.win.css({
                        position: z.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        zIndex: n + 100,
                        margin: 0
                    });
                    var l = b.win.css("backgroundColor");
                    return ("" == l || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(l)) && b.win.css("backgroundColor", "#fff"), b.rail.css({
                        zIndex: n + 101
                    }), b.zoom.css({
                        zIndex: n + 102
                    }), b.zoom.css("backgroundPosition", "0px -18px"), b.resizeZoom(), b.onzoomin && b.onzoomin.call(b), b.cancelEvent(e)
                }
            }, this.doZoomOut = function(e) {
                if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), z.isios4 && s(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
                    "z-index": b.zindex
                }), b.zoom.css({
                    "z-index": b.zindex
                }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(e)
            }, this.doZoom = function(e) {
                return b.zoomactive ? b.doZoomOut(e) : b.doZoomIn(e)
            }, this.resizeZoom = function() {
                if (b.zoomactive) {
                    var e = b.getScrollTop();
                    b.win.css({
                        width: s(window).width() - b.zoomrestore.padding.w + "px",
                        height: s(window).height() - b.zoomrestore.padding.h + "px"
                    }), b.onResize(), b.setScrollTop(Math.min(b.page.maxh, e))
                }
            }, this.init(), s.nicescroll.push(this)
        },
        m = function(e) {
            var o = this;
            this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.time = function() {
                return +new Date
            }, this.reset = function(e, t) {
                o.stop();
                var r = o.time();
                o.steptime = 0, o.lasttime = r, o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
            }, this.update = function(e, t) {
                var r = o.time();
                o.steptime = r - o.lasttime, o.lasttime = r;
                var i = t - o.lasty,
                    n = e - o.lastx,
                    s = o.nc.getScrollTop() + i,
                    l = o.nc.getScrollLeft() + n;
                o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = s < 0 || s > o.nc.page.maxh, o.speedx = n, o.speedy = i, o.lastx = e, o.lasty = t
            }, this.stop = function() {
                o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
            }, this.doSnapy = function(e, t) {
                var r = !1;
                t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
            }, this.doMomentum = function(e) {
                var t = o.time(),
                    r = e ? t + e : o.lasttime,
                    i = o.nc.getScrollLeft(),
                    n = o.nc.getScrollTop(),
                    s = o.nc.page.maxh,
                    l = o.nc.page.maxw;
                o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = s > 0 ? Math.min(60, o.speedy) : 0;
                var a = r && t - r <= 60;
                (n < 0 || n > s || i < 0 || i > l) && (a = !1);
                var c = !(!o.speedy || !a) && o.speedy,
                    d = !(!o.speedx || !a) && o.speedx;
                if (c || d) {
                    var u = Math.max(16, o.steptime);
                    if (u > 50) {
                        var h = u / 50;
                        o.speedx *= h, o.speedy *= h, u = 50
                    }
                    o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                    var p = o.lastscrollx,
                        m = o.lastscrolly,
                        f = function() {
                            var e = o.time() - t > 600 ? .04 : .02;
                            o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > s) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function() {
                                if (o.speedx) {
                                    o.nc.getScrollLeft();
                                    o.chkx = p, o.nc.setScrollLeft(p)
                                }
                                if (o.speedy) {
                                    o.nc.getScrollTop();
                                    o.chky = m, o.nc.setScrollTop(m)
                                }
                                o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
                            }), o.demulxy < 1 ? o.timer = setTimeout(f, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
                        };
                    f()
                } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
            }
        },
        f = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(e, o, t) {
            var r = s.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : f.call(e)
        },
        set: function(e, o) {
            var t = s.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : f.call(e, o), this
        }
    }, e.fn.scrollTop = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (s.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : f.call(this)
        }
        return this.each(function() {
            var o = s.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : f.call(s(this), e)
        })
    };
    var g = e.fn.scrollLeft;
    s.cssHooks.pageXOffset = {
        get: function(e, o, t) {
            var r = s.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : g.call(e)
        },
        set: function(e, o) {
            var t = s.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : g.call(e, o), this
        }
    }, e.fn.scrollLeft = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (s.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : g.call(this)
        }
        return this.each(function() {
            var o = s.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : g.call(s(this), e)
        })
    };
    var w = function(e) {
        var o = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
                return s.each(o, e), o
            }, this.push = function(e) {
                o[o.length] = e, o.length++
            }, this.eq = function(e) {
                return o[e]
            }, e)
            for (var t = 0; t < e.length; t++) {
                var r = s.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r, this.length++)
            }
        return this
    };
    ! function(e, o, t) {
        for (var r = 0; r < o.length; r++) t(e, o[r])
    }(w.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, o) {
        e[o] = function() {
            var e = arguments;
            return this.each(function() {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function(e) {
        return void 0 === e ? new w(this) : this[e] && s.data(this[e], "__nicescroll") || !1
    }, e.expr[":"].nicescroll = function(e) {
        return void 0 !== s.data(e, "__nicescroll")
    }, s.fn.niceScroll = function(e, o) {
        void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1), o = s.extend({}, o);
        var t = new w;
        void 0 === o && (o = {}), e && (o.doc = s(e), o.win = s(this));
        var r = !("doc" in o);
        return r || "win" in o || (o.win = s(this)), this.each(function() {
            var e = s(this).data("__nicescroll") || !1;
            e || (o.doc = r ? s(this) : o.doc, e = new p(o, s(this)), s(this).data("__nicescroll", e)), t.push(e)
        }), 1 == t.length ? t[0] : t
    }, window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    }, s.nicescroll || (s.nicescroll = new w, s.nicescroll.options = d)
});


// Scroll To
jQuery.noConflict();;
(function($) {
    var h = $.scrollTo = function(a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {
        axis: 'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true
    };
    h.window = function(a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function() {
        return this.map(function() {
            var a = this,
                isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function(e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function') g = {
            onAfter: g
        };
        if (e == 'max') e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue) f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function() {
            if (!e) return;
            var d = this,
                $elem = $(d),
                targ = e,
                toff, attr = {},
                win = $elem.is('html,body');
            switch (typeof targ) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length) return;
                case 'object':
                    if (targ.is || targ.style) toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function(i, a) {
                var b = a == 'x' ? 'Left' : 'Top',
                    pos = b.toLowerCase(),
                    key = 'scroll' + b,
                    old = d[key],
                    max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key]) animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);

            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function() {
                    a.call(this, e, g)
                })
            }
        }).end()
    };
    h.max = function(a, b) {
        var c = b == 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + c;
        if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c,
            html = a.ownerDocument.documentElement,
            body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };

    function both(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);