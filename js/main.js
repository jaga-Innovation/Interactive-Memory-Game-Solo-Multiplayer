(this["webpackJsonpmemory-game"] = this["webpackJsonpmemory-game"] || []).push([
    [0],
    [, , , , , , function (e, t, n) {
        e.exports = {
            "game-settings-menu": "GameSettingsMenu_game-settings-menu__1inRB",
            "game-settings-menu__title": "GameSettingsMenu_game-settings-menu__title__1vnIe",
            "game-settings-menu__buttons": "GameSettingsMenu_game-settings-menu__buttons__3PRvX"
        }
    }, function (e, t, n) {
        e.exports = {
            "game-info": "GameInfo_game-info__3AAPv",
            "game-info__title": "GameInfo_game-info__title__35aS6",
            "game-info--active": "GameInfo_game-info--active__3vozP",
            "game-info--winner": "GameInfo_game-info--winner__14G2r",
            "game-info__player--short": "GameInfo_game-info__player--short__3vT-c",
            "game-info__player--long": "GameInfo_game-info__player--long__17Pzg"
        }
    }, , , function (e, t, n) {
        e.exports = {
            "game-button": "GameButton_game-button__27_wE",
            "game-button__cover": "GameButton_game-button__cover__2d_nm",
            "game-button__content": "GameButton_game-button__content__3QJx5",
            "game-button__cover--hidden": "GameButton_game-button__cover--hidden__Bjd9j",
            "game-button__content--active": "GameButton_game-button__content--active__37RSN"
        }
    }, , , , function (e, t, n) {
        e.exports = {
            button: "Button_button__2SZ4k",
            "button-menu-start": "Button_button-menu-start___oChi",
            "button-menu-selection": "Button_button-menu-selection__C0gYk",
            "button-menu-selection--active": "Button_button-menu-selection--active__266bh",
            "button-primary": "Button_button-primary__ibZeM",
            "button-secondary": "Button_button-secondary__Xl0pe",
            "button-mobile": "Button_button-mobile__1H6l-"
        }
    }, , , , function (e, t, n) {
        e.exports = {
            "game-grid": "GameGrid_game-grid__2FkJ6",
            "game-grid--4x4": "GameGrid_game-grid--4x4__2X0LF",
            "game-grid--6x6": "GameGrid_game-grid--6x6__2wZE_"
        }
    }, , function (e, t, n) {
        e.exports = {
            header: "Header_header__1fnJb",
            header__buttons: "Header_header__buttons__1OZj4"
        }
    }, function (e, t, n) {
        e.exports = {
            backdrop: "Backdrop_backdrop__2fE0s",
            "backdrop--light": "Backdrop_backdrop--light__3kY9r",
            "backdrop--dark": "Backdrop_backdrop--dark__3VUmw"
        }
    }, function (e, t, n) {
        e.exports = {
            "game-info-container": "GameInfoContainer_game-info-container__2ywF0",
            "game-info-container--vertical": "GameInfoContainer_game-info-container--vertical__1BrGY",
            "game-info-container--horizontal": "GameInfoContainer_game-info-container--horizontal__1wHXU"
        }
    }, function (e, t, n) {
        e.exports = {
            "game-end-info": "GameEndInfo_game-end-info__2WjyY",
            "game-end-info__buttons": "GameEndInfo_game-end-info__buttons__36Wud"
        }
    }, , , function (e, t, n) {
        e.exports = {
            modal: "Modal_modal__3Sw5R"
        }
    }, function (e, t, n) {
        e.exports = {
            "modal-window": "ModalWindow_modal-window__RHaU0"
        }
    }, , , , , , function (e, t, n) {}, , , , , , , , , , function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(1),
            c = n.n(a),
            i = n(8),
            o = n.n(i),
            s = (n(33), n(18)),
            r = n.n(s),
            l = n(5),
            u = n(10),
            m = n.n(u),
            d = n(0),
            b = function (e) {
                return Object(d.jsxs)("div", Object(l.a)(Object(l.a)({
                    className: "".concat(m.a["game-button"])
                }, e.isVisible ? {} : {
                    onClick: e.onMoveMade
                }), {}, {
                    children: [Object(d.jsx)("button", {
                        className: "".concat(m.a["game-button__cover"], " ").concat(e.isVisible ? m.a["game-button__cover--hidden"] : "")
                    }), Object(d.jsx)("div", {
                        className: "".concat(m.a["game-button__content"], "  ").concat(e.isActive ? m.a["game-button__content--active"] : ""),
                        children: e.children
                    })]
                }))
            },
            j = n(2),
            g = n(9),
            _ = n(4),
            f = [_.k, _.a, _.b, _.c, _.d, _.e, _.f, _.g, _.i, _.j, _.l, _.m, _.n, _.o, _.p, _.q, _.h, _.r],
            h = {
                NUMBERS: "numbers",
                ICONS: "icons"
            },
            O = {
                "4x4": 16,
                "6x6": 36
            },
            v = {
                gameElements: [],
                minutesElapsed: 0,
                secondsElapsed: 0,
                moves: [],
                pairs: [],
                lastTwoMoves: [],
                gameStarted: 0,
                gridTheme: h.NUMBERS,
                numOfPlayers: 1,
                activePlayerIndex: 0,
                gridSize: O["4x4"],
                isGameFinished: !1
            },
            p = Object(g.b)({
                name: "gameSlice",
                initialState: v,
                reducers: {
                    setGameSettings: function (e, t) {
                        e.gridSize = t.payload.gridSize, e.gridTheme = t.payload.gridTheme, e.numOfPlayers = t.payload.numOfPlayers
                    },
                    generateGameElements: function (e) {
                        for (var t = e.gridSize / 2, n = [], a = 0; a < t; a++) {
                            var c = 0,
                                i = 0;
                            do {
                                void 0 === n[c = Math.floor(Math.random() * e.gridSize)] && (n[c] = {
                                    value: a + 1,
                                    isVisible: !1,
                                    isActive: !1
                                }, i++)
                            } while (i < 2);
                            i = 0
                        }
                        e.gameElements = n
                    },
                    updateTimer: function (e) {
                        e.secondsElapsed + 1 === 60 ? (e.minutesElapsed += 1, e.secondsElapsed = 0) : e.secondsElapsed += 1
                    },
                    handleClickGameElement: function (e, t) {
                        var n = t.payload;
                        e.gameElements[n.index].isVisible = !0, e.gameElements[n.index].isActive = !0, e.lastTwoMoves.push(n)
                    },
                    hideGameElementsVisibility: function (e, t) {
                        t.payload.forEach((function (t) {
                            e.gameElements[t.index].isVisible = !1
                        }))
                    },
                    disableElementsActiveState: function (e, t) {
                        t.payload.forEach((function (t) {
                            e.gameElements[t.index].isActive = !1
                        }))
                    },
                    startNewGame: function (e) {
                        e.isGameFinished = !1, e.minutesElapsed = 0, e.secondsElapsed = 0, e.gameElements = [], e.lastTwoMoves = [], e.moves = [], e.pairs = [], e.activePlayerIndex = 0, e.gameStarted += 1;
                        for (var t = 0; t < e.numOfPlayers; t++) e.moves[t] = e.pairs[t] = 0
                    },
                    changePlayerTurn: function (e) {
                        e.activePlayerIndex + 1 === e.numOfPlayers ? e.activePlayerIndex = 0 : e.activePlayerIndex += 1
                    },
                    setGameFinished: function (e) {
                        e.isGameFinished = !0
                    },
                    resetLastTwoMoves: function (e) {
                        e.moves[e.activePlayerIndex] += 1, e.lastTwoMoves = []
                    },
                    updatePairs: function (e) {
                        e.pairs[e.activePlayerIndex] += 1
                    }
                }
            }),
            x = p.actions,
            y = x.setGameSettings,
            M = x.generateGameElements,
            E = (x.restartGame, x.updateTimer),
            G = x.handleClickGameElement,
            S = x.hideGameElementsVisibility,
            V = x.disableElementsActiveState,
            w = x.startNewGame,
            N = x.changePlayerTurn,
            k = x.setGameFinished,
            P = x.resetLastTwoMoves,
            T = x.updatePairs,
            C = p.reducer,
            I = Object(g.b)({
                name: "modals",
                initialState: {
                    isModalMenuSettingsVisible: !0,
                    isModalGameEndVisible: !1,
                    isModalMenuVisible: !1
                },
                reducers: {
                    toggleModalMenuSettigsVisibility: function (e) {
                        e.isModalMenuSettingsVisible = !e.isModalMenuSettingsVisible
                    },
                    toggleModalGameEndVisibility: function (e) {
                        e.isModalGameEndVisible = !e.isModalGameEndVisible
                    },
                    toggleModalMenuVisibility: function (e) {
                        e.isModalMenuVisible = !e.isModalMenuVisible
                    }
                }
            }),
            B = I.actions,
            z = B.toggleModalMenuSettigsVisibility,
            R = B.toggleModalGameEndVisibility,
            F = B.toggleModalMenuVisibility,
            A = I.reducer,
            Z = n(25),
            W = function () {
                var e = Object(j.c)((function (e) {
                        return e.game.gridSize
                    })),
                    t = Object(j.c)((function (e) {
                        return e.game.gridTheme
                    })),
                    n = Object(j.c)((function (e) {
                        return e.game.gameElements
                    })),
                    c = Object(j.c)((function (e) {
                        return e.game.lastTwoMoves
                    })),
                    i = Object(j.c)((function (e) {
                        return e.game.numOfPlayers
                    })),
                    o = Object(j.b)(),
                    s = 2 !== c.length;
                Object(a.useEffect)((function () {
                    var e;
                    return s || (e = setTimeout((function () {
                            c[0].value !== c[1].value ? (o(S([c[0], c[1]])), o(V([c[0], c[1]])), o(P()), i > 1 && o(N())) : (o(V([c[0], c[1]])), o(P()), o(T())), n.length > 0 && n.every((function (e) {
                                return e.isVisible
                            })) && (o(k()), o(R()))
                        }), 1e3)),
                        function () {
                            !s && e && clearTimeout(e)
                        }
                }), [n, c, i, s, o]);
                var l = Object(a.useCallback)((function (e) {
                        s && o(G(e))
                    }), [o, s]),
                    u = Object(a.useMemo)((function () {
                        var e = [];
                        return n.forEach((function (n, a) {
                            e.push(Object(d.jsx)(b, {
                                canPlay: s,
                                isVisible: n.isVisible,
                                isActive: n.isActive,
                                onMoveMade: l.bind(null, {
                                    value: n.value,
                                    index: a
                                }),
                                children: t === h.NUMBERS ? n.value : Object(d.jsx)(Z.a, {
                                    icon: f[n.value - 1]
                                })
                            }, a))
                        })), e
                    }), [n, t, l, s]);
                return Object(d.jsx)("div", {
                    className: "".concat(r.a["game-grid"], " ").concat(r.a["game-grid--".concat(e === O["4x4"] ? "4x4" : "6x6")]),
                    children: u
                })
            },
            H = n(20),
            U = n.n(H),
            J = n(14),
            Y = n.n(J),
            X = function (e) {
                return Object(d.jsx)("button", {
                    onClick: e.onClick,
                    className: "".concat(Y.a.button, " ").concat(Y.a["button-".concat(e.type)], " ").concat(e.showOnlyOn ? Y.a["button-".concat(e.showOnlyOn)] : ""),
                    children: e.children
                })
            },
            L = function (e) {
                var t = Object(j.b)();
                return Object(d.jsx)(d.Fragment, {
                    children: Object(d.jsx)(X, {
                        onClick: function () {
                            t(F())
                        },
                        type: e.type,
                        showOnlyOn: "mobile",
                        children: e.children
                    })
                })
            },
            q = function (e) {
                return Object(d.jsx)("svg", {
                    width: "150",
                    height: "28",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: Object(d.jsx)("path", {
                        d: "M6.08 21V10.64c0-1.733.287-3.053.86-3.96s1.487-1.36 2.74-1.36c.96 0 1.647.233 2.06.7.413.467.667 1.087.76 1.86.093.773.14 1.627.14 2.56V21h6.12V10.52c0-1.733.28-3.033.84-3.9.56-.867 1.453-1.3 2.68-1.3.987 0 1.693.233 2.12.7.427.467.693 1.087.8 1.86.107.773.16 1.627.16 2.56V21h6.08V8.92c0-2.693-.48-4.753-1.44-6.18C29.04 1.313 27.293.6 24.76.6c-1.387 0-2.673.28-3.86.84a7.44 7.44 0 0 0-2.94 2.48c-.453-1.093-1.153-1.92-2.1-2.48C14.913.88 13.653.6 12.08.6c-1.467 0-2.72.347-3.76 1.04-1.04.693-1.787 1.413-2.24 2.16l-.76-2.64H0V21h6.08Zm39.2.48c1.627 0 3.22-.36 4.78-1.08 1.56-.72 2.86-1.84 3.9-3.36l-4.84-1.76c-.373.427-.9.78-1.58 1.06s-1.487.42-2.42.42c-1.12 0-2.14-.347-3.06-1.04-.92-.693-1.433-1.733-1.54-3.12H55.2c.133-2.347-.2-4.42-1-6.22-.8-1.8-1.98-3.213-3.54-4.24C49.1 1.113 47.227.6 45.04.6c-1.92 0-3.687.427-5.3 1.28a10.074 10.074 0 0 0-3.88 3.6c-.973 1.547-1.46 3.373-1.46 5.48 0 2.187.46 4.067 1.38 5.64a9.228 9.228 0 0 0 3.84 3.62c1.64.84 3.527 1.26 5.66 1.26ZM49.56 9h-9.04c.187-1.36.727-2.347 1.62-2.96.893-.613 1.913-.92 3.06-.92 1.173 0 2.187.327 3.04.98.853.653 1.293 1.62 1.32 2.9Zm14.6 12V10.64c0-1.733.287-3.053.86-3.96s1.487-1.36 2.74-1.36c.96 0 1.647.233 2.06.7.413.467.667 1.087.76 1.86.093.773.14 1.627.14 2.56V21h6.12V10.52c0-1.733.28-3.033.84-3.9.56-.867 1.453-1.3 2.68-1.3.987 0 1.693.233 2.12.7.427.467.693 1.087.8 1.86.107.773.16 1.627.16 2.56V21h6.08V8.92c0-2.693-.48-4.753-1.44-6.18C87.12 1.313 85.373.6 82.84.6c-1.387 0-2.673.28-3.86.84a7.44 7.44 0 0 0-2.94 2.48c-.453-1.093-1.153-1.92-2.1-2.48C72.993.88 71.733.6 70.16.6c-1.467 0-2.72.347-3.76 1.04-1.04.693-1.787 1.413-2.24 2.16l-.76-2.64h-5.32V21h6.08Zm38.84.48c1.813 0 3.52-.373 5.12-1.12 1.6-.747 2.893-1.9 3.88-3.46.987-1.56 1.48-3.527 1.48-5.9 0-2.4-.493-4.367-1.48-5.9-.987-1.533-2.28-2.667-3.88-3.4-1.6-.733-3.307-1.1-5.12-1.1-1.84 0-3.56.367-5.16 1.1-1.6.733-2.893 1.867-3.88 3.4-.987 1.533-1.48 3.5-1.48 5.9 0 2.373.493 4.34 1.48 5.9.987 1.56 2.28 2.713 3.88 3.46 1.6.747 3.32 1.12 5.16 1.12Zm0-4.72c-1.227 0-2.253-.44-3.08-1.32-.827-.88-1.24-2.36-1.24-4.44 0-2.107.42-3.58 1.26-4.42.84-.84 1.86-1.26 3.06-1.26 1.173 0 2.18.42 3.02 1.26.84.84 1.26 2.313 1.26 4.42 0 2.08-.407 3.56-1.22 4.44-.813.88-1.833 1.32-3.06 1.32ZM122.52 21V11c0-1.573.393-2.707 1.18-3.4.787-.693 1.913-1.04 3.38-1.04.293 0 .56.007.8.02.24.013.52.047.84.1V.6c-1.52-.08-2.813.2-3.88.84-1.067.64-1.907 1.76-2.52 3.36l-1.08-3.64h-4.8V21h6.08Zm11.36 6.44c1.733 0 3.107-.187 4.12-.56 1.013-.373 1.847-1.027 2.5-1.96s1.3-2.24 1.94-3.92l7.6-19.84h-6.52l-3.8 12.4-3.88-12.4h-6.52l7.6 19.72c-.213.667-.447 1.153-.7 1.46-.253.307-.607.5-1.06.58-.453.08-1.133.12-2.04.12h-1.2v4.4h1.96Z",
                        fill: e.color,
                        fillRule: "nonzero"
                    })
                })
            },
            Q = function (e) {
                var t = Object(j.b)(),
                    n = Object(j.c)((function (e) {
                        return e.modals.isModalGameEndVisible
                    })),
                    a = Object(j.c)((function (e) {
                        return e.modals.isModalMenuVisible
                    }));
                return Object(d.jsx)(d.Fragment, {
                    children: Object(d.jsx)(X, {
                        onClick: function () {
                            n && t(R()), a && t(F()), t(w())
                        },
                        type: e.type,
                        children: e.children
                    })
                })
            },
            D = function (e) {
                var t = Object(j.b)(),
                    n = Object(j.c)((function (e) {
                        return e.modals.isModalGameEndVisible
                    })),
                    a = Object(j.c)((function (e) {
                        return e.modals.isModalMenuSettingsVisible
                    })),
                    c = Object(j.c)((function (e) {
                        return e.modals.isModalMenuVisible
                    }));
                return Object(d.jsx)(d.Fragment, {
                    children: Object(d.jsx)(X, {
                        onClick: function () {
                            n && t(R()), c && t(F()), a && (t(y(e.settingsChoice)), t(w())), t(z())
                        },
                        type: e.type,
                        children: e.children
                    })
                })
            },
            K = function () {
                return Object(d.jsxs)("header", {
                    className: "".concat(U.a.header),
                    children: [Object(d.jsx)(q, {
                        color: "#152938"
                    }), Object(d.jsxs)("div", {
                        className: "".concat(U.a.header__buttons),
                        children: [Object(d.jsx)(L, {
                            type: "primary",
                            children: "Menu"
                        }), Object(d.jsx)(Q, {
                            type: "primary",
                            children: "Restart"
                        }), Object(d.jsx)(D, {
                            type: "secondary",
                            children: "New Game"
                        })]
                    })]
                })
            },
            $ = n(26),
            ee = n.n($),
            te = function (e) {
                return o.a.createPortal(Object(d.jsx)("div", {
                    className: ee.a.modal,
                    children: e.children
                }), document.getElementById("root"))
            },
            ne = n(21),
            ae = n.n(ne),
            ce = function (e) {
                return Object(d.jsx)("div", {
                    className: "".concat(ae.a.backdrop, " ").concat(ae.a["backdrop--".concat(e.type)])
                })
            },
            ie = n(15),
            oe = n(6),
            se = n.n(oe),
            re = function (e) {
                return e[0].toUpperCase() + e.slice(1)
            },
            le = function () {
                var e = Object(a.useState)(Object(j.c)((function (e) {
                        return e.game.gridSize
                    }))),
                    t = Object(ie.a)(e, 2),
                    n = t[0],
                    c = t[1],
                    i = Object(a.useState)(Object(j.c)((function (e) {
                        return e.game.numOfPlayers
                    }))),
                    o = Object(ie.a)(i, 2),
                    s = o[0],
                    r = o[1],
                    l = Object(a.useState)(Object(j.c)((function (e) {
                        return e.game.gridTheme
                    }))),
                    u = Object(ie.a)(l, 2),
                    m = u[0],
                    b = u[1],
                    g = function (e) {
                        b(e)
                    },
                    _ = function (e) {
                        r(e)
                    },
                    f = function (e) {
                        c(e)
                    },
                    v = Object(a.useMemo)((function () {
                        var e = [];
                        for (var t in h) e.push(Object(d.jsx)(X, {
                            onClick: g.bind(null, h[t]),
                            type: "menu-selection".concat(h[t] === m ? "--active" : ""),
                            children: re(h[t])
                        }, t));
                        return e
                    }), [m]),
                    p = Object(a.useMemo)((function () {
                        for (var e = [], t = 0; t < 4; t++) e.push(Object(d.jsx)(X, {
                            onClick: _.bind(null, t + 1),
                            type: "menu-selection".concat(t + 1 === s ? "--active" : ""),
                            children: t + 1
                        }, t));
                        return e
                    }), [s]),
                    x = Object(a.useMemo)((function () {
                        var e = [];
                        for (var t in O) e.push(Object(d.jsx)(X, {
                            onClick: f.bind(null, O[t]),
                            type: "menu-selection".concat(O[t] === n ? "--active" : ""),
                            children: t
                        }, t));
                        return e
                    }), [n]);
                return Object(d.jsxs)("div", {
                    className: se.a["game-settings-menu"],
                    children: [Object(d.jsx)("h3", {
                        className: se.a["game-settings-menu__title"],
                        children: "Select Theme"
                    }), Object(d.jsx)("div", {
                        className: se.a["game-settings-menu__buttons"],
                        children: v
                    }), Object(d.jsx)("h3", {
                        className: se.a["game-settings-menu__title"],
                        children: "Numbers of Players"
                    }), Object(d.jsx)("div", {
                        className: se.a["game-settings-menu__buttons"],
                        children: p
                    }), Object(d.jsx)("h3", {
                        className: se.a["game-settings-menu__title"],
                        children: "Grid Size"
                    }), Object(d.jsx)("div", {
                        className: se.a["game-settings-menu__buttons"],
                        children: x
                    }), Object(d.jsx)(D, {
                        settingsChoice: {
                            gridSize: n,
                            numOfPlayers: s,
                            gridTheme: m
                        },
                        type: "menu-start",
                        children: "Start Game"
                    })]
                })
            },
            ue = n(27),
            me = n.n(ue),
            de = function (e) {
                return Object(d.jsx)("div", {
                    className: me.a["modal-window"],
                    children: e.children
                })
            },
            be = n(28),
            je = n(22),
            ge = n.n(je),
            _e = n(7),
            fe = n.n(_e),
            he = function (e) {
                return Object(d.jsxs)("div", {
                    className: "".concat(fe.a["game-info"], " ").concat(fe.a["".concat(e.isActive ? "game-info--active" : "")], " ").concat(fe.a["".concat(e.isWinner ? "game-info--winner" : "")]),
                    children: [Object(d.jsxs)("p", {
                        children: [Object(d.jsx)("span", {
                            className: e.children.startsWith("Player") ? "".concat(fe.a["game-info__player--long"]) : "",
                            children: e.children
                        }), e.playerShortText && Object(d.jsx)("span", {
                            className: "".concat(fe.a["game-info__player--short"]),
                            children: e.playerShortText
                        }), " ", e.isWinner ? "(Winner)" : ""]
                    }), Object(d.jsxs)("h2", {
                        className: "".concat(fe.a["game-info__title"]),
                        children: [e.value, " ", e.showMovesString ? "Moves" : "", " ", e.showPairsString ? e.value > 1 ? "Pairs" : "Pair" : ""]
                    })]
                })
            },
            Oe = function (e) {
                var t = Object(j.c)((function (e) {
                        return e.game.minutesElapsed
                    })),
                    n = Object(j.c)((function (e) {
                        return e.game.secondsElapsed
                    })),
                    c = Object(j.c)((function (e) {
                        return e.game.moves
                    })),
                    i = Object(j.c)((function (e) {
                        return e.game.pairs
                    })),
                    o = Object(j.c)((function (e) {
                        return e.game.numOfPlayers
                    })),
                    s = Object(j.c)((function (e) {
                        return e.game.activePlayerIndex
                    })),
                    r = Object(a.useRef)(""),
                    u = Object(a.useRef)(""),
                    m = Object(a.useMemo)((function () {
                        var m = [];
                        if (1 === o) m.push(Object(d.jsx)(he, {
                            value: "".concat(t, ":").concat(n.toString().padStart(2, "0")),
                            children: "Time ".concat(e.gameEnd ? "Elapsed" : "")
                        }, 1)), m.push(Object(d.jsx)(he, Object(l.a)(Object(l.a)({
                            value: c[s]
                        }, e.gameEnd ? {
                            showMovesString: !0
                        } : {}), {}, {
                            children: "Moves ".concat(e.gameEnd ? "Taken" : "")
                        }), 2)), e.gameEnd && (r.current = "You did it!", u.current = "Game over! Here's how you got on");
                        else {
                            for (var b = 0; b < o; b++) m.push(Object(a.createElement)(he, Object(l.a)(Object(l.a)(Object(l.a)({}, e.gameEnd ? {} : {
                                isActive: s === b
                            }), {}, {
                                key: b
                            }, e.gameEnd ? {
                                showPairsString: !0
                            } : {}), {}, {
                                value: e.gameEnd ? i[b] : c[b],
                                isWinner: e.gameEnd && i[b] === Math.max.apply(Math, Object(be.a)(i)),
                                playerShortText: "P".concat(b + 1)
                            }), "Player ".concat(b + 1)));
                            if (e.gameEnd) {
                                m.sort((function (e, t) {
                                    return t.props.value - e.props.value
                                }));
                                var j = m.filter((function (e) {
                                    return e.props.isWinner
                                }));
                                j.length > 1 ? r.current = "It's a tie!" : r.current = "".concat(j[0].props.children, " Wins!"), u.current = "Game over! Here are the results"
                            }
                        }
                        return m
                    }), [s, c, o, i, e.gameEnd, t, n]);
                return Object(d.jsxs)(d.Fragment, {
                    children: [e.gameEnd && Object(d.jsxs)("div", {
                        children: [Object(d.jsx)("h1", {
                            children: r.current
                        }), Object(d.jsx)("p", {
                            children: u.current
                        })]
                    }), Object(d.jsx)("div", {
                        className: "".concat(ge.a["game-info-container"], " ").concat(ge.a["game-info-container--".concat(e.layout)]),
                        children: m
                    })]
                })
            },
            ve = n(23),
            pe = n.n(ve),
            xe = function () {
                var e = Object(j.b)();
                return Object(d.jsxs)("div", {
                    className: pe.a["game-end-info"],
                    children: [Object(d.jsx)(Oe, {
                        layout: "vertical",
                        gameEnd: !0
                    }), Object(d.jsxs)("div", {
                        className: pe.a["game-end-info__buttons"],
                        children: [Object(d.jsx)(Q, {
                            type: "primary",
                            children: "Restart"
                        }), Object(d.jsx)(D, {
                            onStartNewGame: function () {
                                e(R()), e(z())
                            },
                            type: "secondary",
                            children: "Setup New Game"
                        })]
                    })]
                })
            };
        var ye = function () {
                var e = Object(j.c)((function (e) {
                        return e.modals.isModalMenuSettingsVisible
                    })),
                    t = Object(j.c)((function (e) {
                        return e.modals.isModalGameEndVisible
                    })),
                    n = Object(j.c)((function (e) {
                        return e.modals.isModalMenuVisible
                    })),
                    c = Object(j.c)((function (e) {
                        return e.game.gameStarted
                    })),
                    i = Object(j.c)((function (e) {
                        return e.game.isGameFinished
                    })),
                    o = Object(j.b)();
                return Object(a.useEffect)((function () {
                    if (!i && !n) {
                        o(M());
                        var e = setInterval((function () {
                            o(E())
                        }), 1e3);
                        return function () {
                            clearTimeout(e)
                        }
                    }
                }), [c, i, n, o]), Object(d.jsxs)(d.Fragment, {
                    children: [e && Object(d.jsxs)(te, {
                        children: [Object(d.jsx)(ce, {
                            type: "dark"
                        }), Object(d.jsx)(q, {
                            color: "#fcfcfc"
                        }), Object(d.jsx)(de, {
                            children: Object(d.jsx)(le, {})
                        })]
                    }), t && Object(d.jsxs)(te, {
                        children: [Object(d.jsx)(ce, {
                            type: "light"
                        }), Object(d.jsx)(de, {
                            children: Object(d.jsx)(xe, {})
                        })]
                    }), n && Object(d.jsxs)(te, {
                        children: [Object(d.jsx)(ce, {
                            type: "light"
                        }), Object(d.jsxs)(de, {
                            children: [Object(d.jsx)(Q, {
                                type: "primary",
                                children: "Restart"
                            }), Object(d.jsx)(D, {
                                type: "secondary",
                                children: "New Game"
                            }), Object(d.jsx)(L, {
                                type: "secondary",
                                children: "Resume Game"
                            })]
                        })]
                    }), Object(d.jsx)(K, {}), Object(d.jsx)(W, {}), Object(d.jsx)(Oe, {
                        layout: "horizontal"
                    })]
                })
            },
            Me = Object(g.a)({
                reducer: {
                    game: C,
                    modals: A
                }
            });
        o.a.render(Object(d.jsx)(c.a.StrictMode, {
            children: Object(d.jsx)(j.a, {
                store: Me,
                children: Object(d.jsx)(ye, {})
            })
        }), document.getElementById("game"))
    }],
    [
        [43, 1, 2]
    ]
]);
