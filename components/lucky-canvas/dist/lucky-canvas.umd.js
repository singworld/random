(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LuckyCanvas = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    /**
     * ????????????????????????????????? app ?????????????????????????????????, ??????????????????
     */
    // vivo x7 ?????????????????? app ?????? includes ??????
    if (!String.prototype.includes) {
      String.prototype.includes = function (search, start) {

        if (typeof start !== 'number') {
          start = 0;
        }

        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      };
    } // vivo x7 ?????????????????? app ?????? find ??????


    if (!Array.prototype.find) {
      Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

          var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


          var thisArg = arguments[1]; // 5. Let k be 0.

          var k = 0; // 6. Repeat, while k < len

          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, ?? kValue, k, O ??)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];

            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            } // e. Increase k by 1.


            k++;
          } // 7. Return undefined.


          return void 0;
        }
      });
    }

    /**
     * ??????????????????????????????
     * @param { any } param ?????????????????????
     * @param { ...string } types ???????????????
     * @return { boolean } ????????????????????????
     */
    var isExpectType = function (param) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        return types.some(function (type) { return Object.prototype.toString.call(param).slice(8, -1).toLowerCase() === type; });
    };
    /**
     * ??????\n
     * @param { string } str ????????????????????????
     * @return { string } ?????????????????????
     */
    var removeEnter = function (str) {
        return [].filter.call(str, function (s) { return s !== '\n'; }).join('');
    };
    /**
     * ?????????????????????????????????
     * @param num
     */
    var getNumber = function (num) {
        if (num === null)
            return 0;
        if (typeof num === 'object')
            return NaN;
        if (typeof num === 'number')
            return num;
        if (typeof num === 'string') {
            if (num[num.length - 1] === '%') {
                return Number(num.slice(0, -1)) / 100;
            }
            return Number(num);
        }
        return NaN;
    };
    /**
     * ???????????????????????? (????????? === ??????)
     * @param color ??????
     */
    var hasBackground = function (color) {
        if (typeof color !== 'string')
            return false;
        color = color.toLocaleLowerCase().trim();
        if (color === 'transparent')
            return false;
        if (/^rgba/.test(color)) {
            var alpha = /([^\s,]+)\)$/.exec(color);
            if (getNumber(alpha) === 0)
                return false;
        }
        return true;
    };
    /**
     * ??????padding??????
     * @return { object } block ????????????
     */
    var computePadding = function (block) {
        var _a;
        var padding = ((_a = block.padding) === null || _a === void 0 ? void 0 : _a.replace(/px/g, '').split(' ').map(function (n) { return ~~n; })) || [0], paddingTop = 0, paddingBottom = 0, paddingLeft = 0, paddingRight = 0;
        switch (padding.length) {
            case 1:
                paddingTop = paddingBottom = paddingLeft = paddingRight = padding[0];
                break;
            case 2:
                paddingTop = paddingBottom = padding[0];
                paddingLeft = paddingRight = padding[1];
                break;
            case 3:
                paddingTop = padding[0];
                paddingLeft = paddingRight = padding[1];
                paddingBottom = padding[2];
                break;
            default:
                paddingTop = padding[0];
                paddingBottom = padding[1];
                paddingLeft = padding[2];
                paddingRight = padding[3];
        }
        // ???????????????????????????, ????????????0
        var res = { paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight };
        for (var key in res) {
            // ????????????????????????, ???????????????????????????
            res[key] = Object.prototype.hasOwnProperty.call(block, key) && isExpectType(block[key], 'string', 'number')
                ? ~~String(block[key]).replace(/px/g, '')
                : res[key];
        }
        return [paddingTop, paddingBottom, paddingLeft, paddingRight];
    };

    var name = "lucky-canvas";
    var version = "1.5.4";

    var Dep = /** @class */ (function () {
        /**
         * ?????????????????????
         */
        function Dep() {
            this.subs = [];
        }
        /**
         * ????????????
         * @param {*} sub
         */
        Dep.prototype.addSub = function (sub) {
            // ??????????????????includes???????????????
            if (!this.subs.includes(sub)) {
                this.subs.push(sub);
            }
        };
        /**
         * ????????????
         */
        Dep.prototype.notify = function () {
            this.subs.forEach(function (sub) {
                sub.update();
            });
        };
        return Dep;
    }());

    var hasProto = '__proto__' in {};
    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        });
    }
    function parsePath(path) {
        path += '.';
        var segments = [], segment = '';
        for (var i = 0; i < path.length; i++) {
            var curr = path[i];
            if (/\[|\./.test(curr)) {
                segments.push(segment);
                segment = '';
            }
            else if (/\W/.test(curr)) {
                continue;
            }
            else {
                segment += curr;
            }
        }
        return function (data) {
            return segments.reduce(function (data, key) {
                return data[key];
            }, data);
        };
    }
    function traverse(value) {
        // const seenObjects = new Set()
        var dfs = function (data) {
            if (!isExpectType(data, 'array', 'object'))
                return;
            Object.keys(data).forEach(function (key) {
                var value = data[key];
                dfs(value);
            });
        };
        dfs(value);
        // seenObjects.clear()
    }

    /**
     * ???????????????????????????
     */
    var oldArrayProto = Array.prototype;
    var newArrayProto = Object.create(oldArrayProto);
    var methods = ['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'];
    methods.forEach(function (method) {
        newArrayProto[method] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var res = oldArrayProto[method].apply(this, args);
            var luckyOb = this['__luckyOb__'];
            if (['push', 'unshift', 'splice'].includes(method))
                luckyOb.walk(this);
            luckyOb.dep.notify();
            return res;
        };
    });

    var Observer = /** @class */ (function () {
        /**
         * ??????????????????
         * @param value
         */
        function Observer(value) {
            // this.value = value
            this.dep = new Dep();
            // ?????????????????????????????????value??????, ??????????????????enumerable?????????false
            def(value, '__luckyOb__', this);
            if (Array.isArray(value)) { // ???????????????, ?????????????????????
                if (hasProto) {
                    value['__proto__'] = newArrayProto;
                }
                else {
                    Object.getOwnPropertyNames(newArrayProto).forEach(function (key) {
                        def(value, key, newArrayProto[key]);
                    });
                }
            }
            this.walk(value);
        }
        Observer.prototype.walk = function (data) {
            Object.keys(data).forEach(function (key) {
                defineReactive(data, key, data[key]);
            });
        };
        return Observer;
    }());
    /**
     * ???????????????
     * @param { Object | Array } data
     */
    function observe(data) {
        if (!data || typeof data !== 'object')
            return;
        var luckyOb;
        if ('__luckyOb__' in data) {
            luckyOb = data['__luckyOb__'];
        }
        else {
            luckyOb = new Observer(data);
        }
        return luckyOb;
    }
    /**
     * ?????? setter / getter
     * @param {*} data
     * @param {*} key
     * @param {*} val
     */
    function defineReactive(data, key, val) {
        var dep = new Dep();
        var property = Object.getOwnPropertyDescriptor(data, key);
        if (property && property.configurable === false) {
            return;
        }
        var getter = property && property.get;
        var setter = property && property.set;
        if ((!getter || setter) && arguments.length === 2) {
            val = data[key];
        }
        var childOb = observe(val);
        Object.defineProperty(data, key, {
            get: function () {
                var value = getter ? getter.call(data) : val;
                if (Dep.target) {
                    dep.addSub(Dep.target);
                    if (childOb) {
                        childOb.dep.addSub(Dep.target);
                    }
                }
                return value;
            },
            set: function (newVal) {
                if (newVal === val)
                    return;
                val = newVal;
                if (getter && !setter)
                    return;
                if (setter) {
                    setter.call(data, newVal);
                }
                else {
                    val = newVal;
                }
                childOb = observe(newVal);
                dep.notify();
            }
        });
    }

    var uid = 0;
    var Watcher = /** @class */ (function () {
        /**
         * ??????????????????
         * @param {*} $lucky
         * @param {*} expr
         * @param {*} cb
         */
        function Watcher($lucky, expr, cb, options) {
            if (options === void 0) { options = {}; }
            this.id = uid++;
            this.$lucky = $lucky;
            this.expr = expr;
            this.deep = !!options.deep;
            if (typeof expr === 'function') {
                this.getter = expr;
            }
            else {
                this.getter = parsePath(expr);
            }
            this.cb = cb;
            this.value = this.get();
        }
        /**
         * ???????????????????????????
         */
        Watcher.prototype.get = function () {
            Dep.target = this;
            var value = this.getter.call(this.$lucky, this.$lucky);
            // ??????????????????
            if (this.deep) {
                traverse(value);
            }
            Dep.target = null;
            return value;
        };
        /**
         * ?????? watcher ??????
         */
        Watcher.prototype.update = function () {
            // get????????????
            var newVal = this.get();
            // ???????????????????????????
            var oldVal = this.value;
            this.value = newVal;
            // ?????? watch ??????
            this.cb.call(this.$lucky, newVal, oldVal);
        };
        return Watcher;
    }());

    var Lucky = /** @class */ (function () {
        /**
         * ???????????????
         * @param config
         */
        function Lucky(config) {
            var _this = this;
            this.htmlFontSize = 16;
            this.rAF = function () { };
            this.boxWidth = 0;
            this.boxHeight = 0;
            // ???????????? fontSize ??????????????? rem ??????
            this.setHTMLFontSize();
            /* eslint-disable */
            // ??????????????????: ???????????? v1.0.6 ?????????????????????????????? dom
            if (typeof config === 'string')
                config = { el: config };
            else if (config.nodeType === 1)
                config = { el: '', divElement: config };
            config = config;
            /* eslint-enable */
            this.config = config;
            // ?????? config ???????????? dpr
            this.setDpr();
            // ????????? window ??????
            this.initWindowFunction();
            if (!config.flag)
                config.flag = 'WEB';
            if (!Object.prototype.hasOwnProperty.call(config, 'ob'))
                config.ob = true;
            if (config.el)
                config.divElement = document.querySelector(config.el);
            // ?????????????????????, ?????????canvas??????
            if (config.divElement) {
                // ????????????????????????canvas?????????????????????
                config.canvasElement = document.createElement('canvas');
                config.divElement.appendChild(config.canvasElement);
            }
            // ???????????????
            this.resetWidthAndHeight();
            // ?????? canvas ?????????
            if (config.canvasElement) {
                config.ctx = config.canvasElement.getContext('2d');
                // ??????????????????????????????, ????????????????????????
                config.canvasElement.setAttribute('package', name + "@" + version);
                config.canvasElement.addEventListener('click', function (e) { return _this.handleClick(e); });
                config.canvasElement.addEventListener('mousemove', function (e) { return _this.handleMouseMove(e); });
                config.canvasElement.addEventListener('mousedown', function (e) { return _this.handleMouseDown(e); });
                config.canvasElement.addEventListener('mouseup', function (e) { return _this.handleMouseUp(e); });
            }
            this.ctx = config.ctx;
            // ????????????????????? canvas ?????????????????????????????????
            if (!config.ctx) {
                console.error('??????????????? CanvasContext2D');
                return;
            }
            if (!this.boxWidth || !this.boxHeight) {
                console.error('??????????????????????????????');
                return;
            }
        }
        /**
         * ???????????????
         */
        Lucky.prototype.init = function (willUpdateImgs) {
            this.setDpr();
            this.setHTMLFontSize();
            this.resetWidthAndHeight();
            this.zoomCanvas();
        };
        /**
         * ??????????????????
         * @param e ????????????
         */
        Lucky.prototype.handleClick = function (e) { };
        /**
         * ??????????????????
         * @param e ????????????
         */
        Lucky.prototype.handleMouseDown = function (e) { };
        /**
         * ??????????????????
         * @param e ????????????
         */
        Lucky.prototype.handleMouseUp = function (e) { };
        /**
         * ??????????????????
         * @param e ????????????
         */
        Lucky.prototype.handleMouseMove = function (e) { };
        /**
         * ????????????
         */
        Lucky.prototype.conversionAxis = function (x, y) {
            return [0, 0];
        };
        /**
         * ???????????????
         * window ?????????????????????, ????????????????????????
         */
        Lucky.prototype.setDpr = function () {
            var config = this.config;
            if (config.dpr) ;
            else if (window) {
                window.dpr = config.dpr = window.devicePixelRatio || 1;
            }
            else if (!config.dpr) {
                console.error(config, '????????? dpr ???????????????????????????');
            }
        };
        /**
         * ????????????????????????
         */
        Lucky.prototype.setHTMLFontSize = function () {
            if (!window)
                return;
            this.htmlFontSize = +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2);
        };
        /**
         * ???????????????canvas?????????
         */
        Lucky.prototype.resetWidthAndHeight = function () {
            var config = this.config;
            // ??????????????????????????????????????????
            var boxWidth = 0, boxHeight = 0;
            if (config.divElement) {
                boxWidth = config.divElement.offsetWidth;
                boxHeight = config.divElement.offsetHeight;
            }
            // ?????? config ??????????????????, ?????? style ?????????
            this.boxWidth = this.getLength(config.width) || boxWidth;
            this.boxHeight = this.getLength(config.height) || boxHeight;
            // ???????????????????????????
            if (config.divElement) {
                config.divElement.style.overflow = 'hidden';
                config.divElement.style.width = this.boxWidth + 'px';
                config.divElement.style.height = this.boxHeight + 'px';
            }
        };
        /**
         * ??? window ???????????????????????????
         */
        Lucky.prototype.initWindowFunction = function () {
            var config = this.config;
            if (window) {
                this.rAF = (function () {
                    return window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window['mozRequestAnimationFrame'] ||
                        function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };
                })();
                config.setTimeout = window.setTimeout;
                config.setInterval = window.setInterval;
                config.clearTimeout = window.clearTimeout;
                config.clearInterval = window.clearInterval;
                return;
            }
            if (config.rAF) {
                // ?????????????????????
                this.rAF = config.rAF;
            }
            else if (config.setTimeout) {
                // ?????????????????????
                var timeout_1 = config.setTimeout;
                this.rAF = function (callback) { return timeout_1(callback, 16.7); };
            }
            else {
                // ??????config??????????????????, ??????????????????????????????setTimeout
                this.rAF = function (callback) { return setTimeout(callback, 16.7); };
            }
        };
        /**
         * ?????? dpr ?????? canvas ???????????????
         */
        Lucky.prototype.zoomCanvas = function () {
            var _a = this, config = _a.config, ctx = _a.ctx;
            var canvasElement = config.canvasElement, dpr = config.dpr;
            var _b = [this.boxWidth * dpr, this.boxHeight * dpr], width = _b[0], height = _b[1];
            var compute = function (len) { return (len * dpr - len) / (len * dpr) * (dpr / 2) * 100; };
            if (!canvasElement)
                return;
            canvasElement.width = width;
            canvasElement.height = height;
            canvasElement.style.width = width + "px";
            canvasElement.style.height = height + "px";
            canvasElement.style.transform = "scale(" + 1 / dpr + ") translate(" + -compute(width) + "%, " + -compute(height) + "%)";
            ctx.scale(dpr, dpr);
        };
        /**
         * ????????????????????????????????????????????????
         * @param src ????????????
         * @param info ????????????
         */
        Lucky.prototype.loadImg = function (src, info, resolveName) {
            var _this = this;
            if (resolveName === void 0) { resolveName = '$resolve'; }
            return new Promise(function (resolve, reject) {
                if (!src)
                    reject("=> '" + info.src + "' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0D\u5408\u6CD5");
                if (_this.config.flag === 'WEB') {
                    var imgObj_1 = new Image();
                    imgObj_1.src = src;
                    imgObj_1.onload = function () { return resolve(imgObj_1); };
                    imgObj_1.onerror = function () { return reject("=> '" + info.src + "' \u56FE\u7247\u52A0\u8F7D\u5931\u8D25"); };
                }
                else {
                    // ????????????????????????, ????????????????????????
                    info[resolveName] = resolve;
                    return;
                }
            });
        };
        /**
         * ???????????????????????????
         * @param imgObj ????????????
         * @param xAxis x?????????
         * @param yAxis y?????????
         * @param width ????????????
         * @param height ????????????
         */
        Lucky.prototype.drawImage = function (imgObj, xAxis, yAxis, width, height) {
            var drawImg, _a = this, config = _a.config, ctx = _a.ctx;
            if (['WEB', 'MP-WX'].includes(config.flag)) {
                // ????????????????????????????????????
                drawImg = imgObj;
            }
            else if (['UNI-H5', 'UNI-MP', 'TARO-H5', 'TARO-MP'].includes(config.flag)) {
                // ????????????????????????????????????
                drawImg = imgObj.path;
            }
            return ctx.drawImage(drawImg, xAxis, yAxis, width, height);
        };
        /**
         * ????????????
         * @param length ?????????????????????
         * @return ????????????
         */
        Lucky.prototype.getLength = function (length) {
            if (isExpectType(length, 'number'))
                return length;
            if (isExpectType(length, 'string'))
                return this.changeUnits(length);
            return 0;
        };
        /**
         * ????????????
         * @param { string } value ??????????????????
         * @param { number } denominator ??????
         * @return { number } ?????????????????????
         */
        Lucky.prototype.changeUnits = function (value, denominator) {
            var _this = this;
            if (denominator === void 0) { denominator = 1; }
            return Number(value.replace(/^([-]*[0-9.]*)([a-z%]*)$/, function (value, num, unit) {
                var unitFunc = {
                    '%': function (n) { return n * (denominator / 100); },
                    'px': function (n) { return n * 1; },
                    'rem': function (n) { return n * _this.htmlFontSize; },
                }[unit];
                if (unitFunc)
                    return unitFunc(num);
                // ???????????????????????????, ?????????????????????
                var otherUnitFunc = _this.config.unitFunc;
                return otherUnitFunc ? otherUnitFunc(num, unit) : num;
            }));
        };
        /**
         * ????????????????????????????????? (??????)
         * @param data ??????
         * @param key ??????
         * @param value ??????
         */
        Lucky.prototype.$set = function (data, key, value) {
            if (!data || typeof data !== 'object')
                return;
            defineReactive(data, key, value);
        };
        /**
         * ???????????????????????? (??????)
         * @param data ?????????
         * @param key ?????????
         * @param callback ????????????
         */
        Lucky.prototype.$computed = function (data, key, callback) {
            var _this = this;
            Object.defineProperty(data, key, {
                get: function () {
                    return callback.call(_this);
                }
            });
        };
        /**
         * ????????????????????? create user watcher
         * @param expr ?????????
         * @param handler ????????????
         * @param watchOpt ????????????
         * @return ?????????????????????????????? (????????????)
         */
        Lucky.prototype.$watch = function (expr, handler, watchOpt) {
            if (watchOpt === void 0) { watchOpt = {}; }
            if (typeof handler === 'object') {
                watchOpt = handler;
                handler = watchOpt.handler;
            }
            // ?????? user watcher
            var watcher = new Watcher(this, expr, handler, watchOpt);
            // ??????????????????????????????????????????
            if (watchOpt.immediate) {
                handler.call(this, watcher.value);
            }
            // ??????????????????????????????????????????
            return function unWatchFn() { };
        };
        return Lucky;
    }());

    /**
     * ?????????????????????
     * @param { number } deg ????????????
     * @return { number } ????????????
     */
    var getAngle = function (deg) {
        return Math.PI / 180 * deg;
    };
    /**
     * ??????????????????????????????
     * @param { number } deg ????????????
     * @param { number } r ??????
     * @return { Array<number> } ??????[x, y]
     */
    var getArcPointerByDeg = function (deg, r) {
        return [+(Math.cos(deg) * r).toFixed(8), +(Math.sin(deg) * r).toFixed(8)];
    };
    /**
     * ???????????????????????????
     * @param { number } x ?????????
     * @param { number } y ?????????
     * @return { Array<number> } [??????, ??????]
     */
    var getTangentByPointer = function (x, y) {
        var k = -x / y;
        var b = -k * x + y;
        return [k, b];
    };
    // ?????????????????????
    var drawRadian = function (flag, ctx, r, start, end, direction) {
        var _a;
        if (direction === void 0) { direction = true; }
        // ????????????????????????180???, ??????????????????, ?????? arcTo ????????????180????????????
        if (Math.abs(end - start).toFixed(8) >= getAngle(180).toFixed(8)) {
            var middle = (end + start) / 2;
            if (direction) {
                drawRadian(flag, ctx, r, start, middle, direction);
                drawRadian(flag, ctx, r, middle, end, direction);
            }
            else {
                drawRadian(flag, ctx, r, middle, end, direction);
                drawRadian(flag, ctx, r, start, middle, direction);
            }
            return false;
        }
        // ??????????????????, ????????????????????????
        if (!direction)
            _a = [end, start], start = _a[0], end = _a[1];
        var _b = getArcPointerByDeg(start, r), x1 = _b[0], y1 = _b[1];
        var _c = getArcPointerByDeg(end, r), x2 = _c[0], y2 = _c[1];
        var _d = getTangentByPointer(x1, y1), k1 = _d[0], b1 = _d[1];
        var _e = getTangentByPointer(x2, y2), k2 = _e[0], b2 = _e[1];
        // ???????????????????????????
        var x0 = (b2 - b1) / (k1 - k2);
        var y0 = (k2 * b1 - k1 * b2) / (k2 - k1);
        // ????????????????????????????????????x???, ??????????????????
        if (isNaN(x0)) {
            Math.abs(x1) === +r.toFixed(8) && (x0 = x1);
            Math.abs(x2) === +r.toFixed(8) && (x0 = x2);
        }
        if (k1 === Infinity || k1 === -Infinity) {
            y0 = k2 * x0 + b2;
        }
        else if (k2 === Infinity || k2 === -Infinity) {
            y0 = k1 * x0 + b1;
        }
        ctx.lineTo(x1, y1);
        // ?????????????????? arcTo ??????????????????????????? bug
        if (flag.indexOf('MP') > 0) {
            ctx.quadraticCurveTo(x0, y0, x2, y2);
        }
        else {
            ctx.arcTo(x0, y0, x2, y2, r);
        }
    };
    // ????????????
    var drawSector = function (flag, ctx, minRadius, maxRadius, start, end, gutter, background) {
        // ??????????????? getter, ??????????????? arc ????????????
        if (!gutter) {
            ctx.beginPath();
            ctx.fillStyle = background;
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, maxRadius, start, end, false);
            ctx.closePath();
            ctx.fill();
        }
        else {
            drawSectorByArcTo(flag, ctx, minRadius, maxRadius, start, end, gutter, background);
        }
    };
    // ??????arcTo????????????
    var drawSectorByArcTo = function (flag, ctx, minRadius, maxRadius, start, end, gutter, background) {
        if (!minRadius)
            minRadius = gutter;
        // ????????????????????????????????????
        var maxGutter = getAngle(90 / Math.PI / maxRadius * gutter);
        var minGutter = getAngle(90 / Math.PI / minRadius * gutter);
        var maxStart = start + maxGutter;
        var maxEnd = end - maxGutter;
        var minStart = start + minGutter;
        var minEnd = end - minGutter;
        ctx.beginPath();
        ctx.fillStyle = background;
        ctx.moveTo.apply(ctx, getArcPointerByDeg(maxStart, maxRadius));
        drawRadian(flag, ctx, maxRadius, maxStart, maxEnd, true);
        // ?????? getter ???????????????????????????, ???????????????????????????
        if (minEnd > minStart) {
            drawRadian(flag, ctx, minRadius, minStart, minEnd, false);
        }
        else {
            ctx.lineTo.apply(ctx, getArcPointerByDeg((start + end) / 2, gutter / 2 / Math.abs(Math.sin((start - end) / 2))));
        }
        ctx.closePath();
        ctx.fill();
    };
    // ?????????????????? (???????????????????????? arcTo ??? bug, ????????????????????????????????????????????????)
    var drawRoundRect = function (ctx, x, y, w, h, r, color) {
        var min = Math.min(w, h);
        if (r > min / 2)
            r = min / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        // ctx.arcTo(x + w, y, x + w, y + r, r)
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        // ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        // ctx.arcTo(x, y + h, x, y + h - r, r)
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        // ctx.arcTo(x, y, x + r, y, r)
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.fill();
    };
    /**
     * ?????????????????????
     */
    var getLinearGradient = function (ctx, x, y, w, h, background) {
        var context = /linear-gradient\((.+)\)/.exec(background)[1]
            .split(',') // ??????????????????
            .map(function (text) { return text.trim(); }); // ??????????????????
        var deg = context.shift(), direction = [0, 0, 0, 0];
        // ??????????????????????????????????????????????????????, ???????????????????????????????????????????????????....
        if (deg.includes('deg')) {
            deg = deg.slice(0, -3) % 360;
            // ??????4???????????????????????????, ??????45?????????8???????????????????????????
            var getLenOfTanDeg = function (deg) { return Math.tan(deg / 180 * Math.PI); };
            if (deg >= 0 && deg < 45)
                direction = [x, y + h, x + w, y + h - w * getLenOfTanDeg(deg - 0)];
            else if (deg >= 45 && deg < 90)
                direction = [x, y + h, (x + w) - h * getLenOfTanDeg(deg - 45), y];
            else if (deg >= 90 && deg < 135)
                direction = [x + w, y + h, (x + w) - h * getLenOfTanDeg(deg - 90), y];
            else if (deg >= 135 && deg < 180)
                direction = [x + w, y + h, x, y + w * getLenOfTanDeg(deg - 135)];
            else if (deg >= 180 && deg < 225)
                direction = [x + w, y, x, y + w * getLenOfTanDeg(deg - 180)];
            else if (deg >= 225 && deg < 270)
                direction = [x + w, y, x + h * getLenOfTanDeg(deg - 225), y + h];
            else if (deg >= 270 && deg < 315)
                direction = [x, y, x + h * getLenOfTanDeg(deg - 270), y + h];
            else if (deg >= 315 && deg < 360)
                direction = [x, y, x + w, y + h - w * getLenOfTanDeg(deg - 315)];
        }
        // ?????????????????????????????????
        else if (deg.includes('top'))
            direction = [x, y + h, x, y];
        else if (deg.includes('bottom'))
            direction = [x, y, x, y + h];
        else if (deg.includes('left'))
            direction = [x + w, y, x, y];
        else if (deg.includes('right'))
            direction = [x, y, x + w, y];
        // ??????????????????????????????????????????
        var gradient = ctx.createLinearGradient.apply(ctx, direction.map(function (n) { return n >> 0; }));
        // ??????????????????, ??????any??????
        return context.reduce(function (gradient, item, index) {
            var info = item.split(' ');
            if (info.length === 1)
                gradient.addColorStop(index, info[0]);
            else if (info.length === 2)
                gradient.addColorStop.apply(gradient, info);
            return gradient;
        }, gradient);
    };

    /**
     * ????????????
     * t: current time??????????????????
     * b: beginning value???????????????
     * c: change in value???????????????
     * d: duration??????????????????
     *
     * ????????????????????? https://github.com/zhangxinxu/Tween
     */
    // ??????????????????
    var quad = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * (t /= d) * t + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return -c * (t /= d) * (t - 2) + b;
        }
    };
    // ??????????????????
    var cubic = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * (t /= d) * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }
    };
    // ??????????????????
    var quart = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    };
    // ??????????????????
    var quint = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
    };
    // ?????????????????????
    var sine = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }
    };
    // ?????????????????????
    var expo = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    };
    // ?????????????????????
    var circ = {
        easeIn: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function (t, b, c, d) {
            if (t >= d)
                t = d;
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        }
    };

    var Tween = /*#__PURE__*/Object.freeze({
        __proto__: null,
        quad: quad,
        cubic: cubic,
        quart: quart,
        quint: quint,
        sine: sine,
        expo: expo,
        circ: circ
    });

    var LuckyWheel = /** @class */ (function (_super) {
        __extends(LuckyWheel, _super);
        /**
         * ??????????????????
         * @param config ????????????
         * @param data ???????????????
         */
        function LuckyWheel(config, data) {
            if (data === void 0) { data = {}; }
            var _a;
            var _this = _super.call(this, config) || this;
            _this.blocks = [];
            _this.prizes = [];
            _this.buttons = [];
            _this.defaultConfig = {};
            _this._defaultConfig = {
                gutter: '0px',
                offsetDegree: 0,
                speed: 20,
                speedFunction: 'quad',
                accelerationTime: 2500,
                decelerationTime: 2500,
                stopRange: 0.8,
            };
            _this.defaultStyle = {};
            _this._defaultStyle = {
                fontSize: '18px',
                fontColor: '#000',
                fontStyle: 'sans-serif',
                fontWeight: '400',
                lineHeight: '',
                background: 'rgba(0,0,0,0)',
                wordWrap: true,
                lengthLimit: '90%',
            };
            _this.Radius = 0; // ???????????????
            _this.prizeRadius = 0; // ??????????????????
            _this.prizeDeg = 0; // ??????????????????
            _this.prizeRadian = 0; // ??????????????????
            _this.rotateDeg = 0; // ??????????????????
            _this.maxBtnRadius = 0; // ??????????????????
            _this.startTime = 0; // ???????????????
            _this.endTime = 0; // ???????????????
            _this.stopDeg = 0; // ????????????
            _this.endDeg = 0; // ????????????
            _this.FPS = 16.6; // ???????????????
            _this.blockImgs = [[]];
            _this.prizeImgs = [[]];
            _this.btnImgs = [[]];
            if (config.ob) {
                _this.initData(data);
                _this.initWatch();
            }
            _this.initComputed();
            // ?????????????????????
            (_a = config.beforeCreate) === null || _a === void 0 ? void 0 : _a.call(_this);
            // ???????????????????????????
            _this.init({
                blockImgs: _this.blocks.map(function (block) { return block.imgs; }),
                prizeImgs: _this.prizes.map(function (prize) { return prize.imgs; }),
                btnImgs: _this.buttons.map(function (btn) { return btn.imgs; }),
            });
            return _this;
        }
        /**
         * ???????????????
         * @param data
         */
        LuckyWheel.prototype.initData = function (data) {
            this.$set(this, 'blocks', data.blocks || []);
            this.$set(this, 'prizes', data.prizes || []);
            this.$set(this, 'buttons', data.buttons || []);
            this.$set(this, 'defaultConfig', data.defaultConfig || {});
            this.$set(this, 'defaultStyle', data.defaultStyle || {});
            this.$set(this, 'startCallback', data.start);
            this.$set(this, 'endCallback', data.end);
        };
        /**
         * ?????????????????????
         */
        LuckyWheel.prototype.initComputed = function () {
            var _this = this;
            // ????????????
            this.$computed(this, '_defaultConfig', function () {
                var config = __assign({ gutter: '0px', offsetDegree: 0, speed: 20, speedFunction: 'quad', accelerationTime: 2500, decelerationTime: 2500, stopRange: 0.8 }, _this.defaultConfig);
                return config;
            });
            // ????????????
            this.$computed(this, '_defaultStyle', function () {
                var style = __assign({ fontSize: '18px', fontColor: '#000', fontStyle: 'sans-serif', fontWeight: '400', background: 'rgba(0,0,0,0)', wordWrap: true, lengthLimit: '90%' }, _this.defaultStyle);
                return style;
            });
        };
        /**
         * ??????????????????
         */
        LuckyWheel.prototype.initWatch = function () {
            var _this = this;
            // ?????? blocks ??????????????????
            this.$watch('blocks', function (newData) {
                return _this.init({ blockImgs: newData.map(function (cell) { return cell.imgs; }) });
            }, { deep: true });
            // ?????? prizes ??????????????????
            this.$watch('prizes', function (newData) {
                return _this.init({ prizeImgs: newData.map(function (cell) { return cell.imgs; }) });
            }, { deep: true });
            // ?????? buttons ??????????????????
            this.$watch('buttons', function (newData) {
                return _this.init({ btnImgs: newData.map(function (cell) { return cell.imgs; }) });
            }, { deep: true });
            this.$watch('defaultConfig', function () { return _this.draw(); }, { deep: true });
            this.$watch('defaultStyle', function () { return _this.draw(); }, { deep: true });
            this.$watch('startCallback', function () { return _this.init({}); });
            this.$watch('endCallback', function () { return _this.init({}); });
        };
        /**
         * ????????? canvas ??????
         * @param { willUpdateImgs } willUpdateImgs ?????????????????????
         */
        LuckyWheel.prototype.init = function (willUpdateImgs) {
            var _this = this;
            var _a, _b;
            _super.prototype.init.call(this);
            var _c = this, config = _c.config, ctx = _c.ctx;
            this.Radius = Math.min(this.boxWidth, this.boxHeight) / 2;
            // ????????????????????????
            (_a = config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
            ctx.translate(this.Radius, this.Radius);
            this.draw(); // ????????????, ????????????
            this.draw(); // ????????????, ???????????????????????????
            // ??????????????????
            Object.keys(willUpdateImgs).forEach(function (key) {
                var imgName = key;
                var cellName = {
                    blockImgs: 'blocks',
                    prizeImgs: 'prizes',
                    btnImgs: 'buttons',
                }[imgName];
                var willUpdate = willUpdateImgs[imgName];
                willUpdate && willUpdate.forEach(function (imgs, cellIndex) {
                    imgs && imgs.forEach(function (imgInfo, imgIndex) {
                        _this.loadAndCacheImg(cellName, cellIndex, imgName, imgIndex, function () {
                            _this.draw();
                        });
                    });
                });
            });
            // ????????????????????????
            (_b = config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
        };
        /**
         * canvas????????????
         * @param e ????????????
         */
        LuckyWheel.prototype.handleClick = function (e) {
            var _a;
            var ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(0, 0, this.maxBtnRadius, 0, Math.PI * 2, false);
            if (!ctx.isPointInPath(e.offsetX, e.offsetY))
                return;
            if (this.startTime)
                return;
            (_a = this.startCallback) === null || _a === void 0 ? void 0 : _a.call(this, e);
        };
        /**
         * ?????????????????????????????????????????????????????????
         * @param { number } cellIndex ????????????
         * @param { number } imgIndex ??????????????????
         * @param { Function } callBack ????????????????????????
         */
        LuckyWheel.prototype.loadAndCacheImg = function (cellName, cellIndex, imgName, imgIndex, callBack) {
            return __awaiter(this, void 0, void 0, function () {
                var cell, imgInfo;
                var _this = this;
                return __generator(this, function (_a) {
                    cell = this[cellName][cellIndex];
                    if (!cell || !cell.imgs)
                        return [2 /*return*/];
                    imgInfo = cell.imgs[imgIndex];
                    if (!imgInfo)
                        return [2 /*return*/];
                    if (!this[imgName][cellIndex])
                        this[imgName][cellIndex] = [];
                    // ??????????????????
                    this.loadImg(imgInfo.src, imgInfo).then(function (res) {
                        _this[imgName][cellIndex][imgIndex] = res;
                        callBack.call(_this);
                    }).catch(function (err) {
                        console.error(cellName + "[" + cellIndex + "].imgs[" + imgIndex + "] " + err);
                    });
                    return [2 /*return*/];
                });
            });
        };
        /**
         * ???????????????????????????
         * @param imgObj ??????????????????
         * @param imgInfo ????????????
         * @param maxWidth ????????????
         * @param maxHeight ????????????
         * @return [????????????, ????????????]
         */
        LuckyWheel.prototype.computedWidthAndHeight = function (imgObj, imgInfo, maxWidth, maxHeight) {
            // ????????????????????????????????????????????????
            if (!imgInfo.width && !imgInfo.height) {
                // ????????????????????????, ??????????????????????????????
                return [imgObj.width, imgObj.height];
            }
            else if (imgInfo.width && !imgInfo.height) {
                // ????????????????????????, ???????????????
                var trueWidth = this.getWidth(imgInfo.width, maxWidth);
                // ??????????????????????????????????????????
                return [trueWidth, imgObj.height * (trueWidth / imgObj.width)];
            }
            else if (!imgInfo.width && imgInfo.height) {
                // ????????????????????????, ???????????????
                var trueHeight = this.getHeight(imgInfo.height, maxHeight);
                // ??????????????????????????????????????????
                return [imgObj.width * (trueHeight / imgObj.height), trueHeight];
            }
            // ?????????????????????????????????, ???????????????
            return [
                this.getWidth(imgInfo.width, maxWidth),
                this.getHeight(imgInfo.height, maxHeight)
            ];
        };
        /**
         * ????????????
         */
        LuckyWheel.prototype.draw = function () {
            var _this = this;
            var _a, _b;
            var _c = this, config = _c.config, ctx = _c.ctx, _defaultConfig = _c._defaultConfig, _defaultStyle = _c._defaultStyle;
            // ?????????????????????
            (_a = config.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(this, ctx);
            // ????????????
            ctx.clearRect(-this.Radius, -this.Radius, this.Radius * 2, this.Radius * 2);
            // ??????blocks??????
            this.prizeRadius = this.blocks.reduce(function (radius, block, blockIndex) {
                if (hasBackground(block.background)) {
                    ctx.beginPath();
                    ctx.fillStyle = block.background;
                    ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
                    ctx.fill();
                }
                block.imgs && block.imgs.forEach(function (imgInfo, imgIndex) {
                    if (!_this.blockImgs[blockIndex])
                        return;
                    var blockImg = _this.blockImgs[blockIndex][imgIndex];
                    if (!blockImg)
                        return;
                    // ????????????
                    var _a = _this.computedWidthAndHeight(blockImg, imgInfo, radius * 2, radius * 2), trueWidth = _a[0], trueHeight = _a[1];
                    var _b = [_this.getOffsetX(trueWidth), _this.getHeight(imgInfo.top, radius * 2) - radius], xAxis = _b[0], yAxis = _b[1];
                    ctx.save();
                    imgInfo.rotate && ctx.rotate(getAngle(_this.rotateDeg));
                    _this.drawImage(blockImg, xAxis, yAxis, trueWidth, trueHeight);
                    ctx.restore();
                });
                return radius - _this.getLength(block.padding && block.padding.split(' ')[0]);
            }, this.Radius);
            // ??????????????????
            this.prizeDeg = 360 / this.prizes.length;
            this.prizeRadian = getAngle(this.prizeDeg);
            var start = getAngle(-90 + this.rotateDeg + _defaultConfig.offsetDegree);
            // ?????????????????????
            var getFontX = function (line) {
                return _this.getOffsetX(ctx.measureText(line).width);
            };
            // ?????????????????????
            var getFontY = function (font, height, lineIndex) {
                // ????????????????????????, ????????????????????????, ????????????????????????, ??????????????????????????????
                var lineHeight = font.lineHeight || _defaultStyle.lineHeight || font.fontSize || _defaultStyle.fontSize;
                return _this.getHeight(font.top, height) + (lineIndex + 1) * _this.getLength(lineHeight);
            };
            ctx.save();
            // ??????prizes????????????
            this.prizes.forEach(function (prize, prizeIndex) {
                // ???????????????????????????????????????
                var currMiddleDeg = start + prizeIndex * _this.prizeRadian;
                // ????????????????????????
                var prizeHeight = _this.prizeRadius - _this.maxBtnRadius;
                // ????????????
                var background = prize.background || _defaultStyle.background;
                hasBackground(background) && drawSector(config.flag, ctx, _this.maxBtnRadius, _this.prizeRadius, currMiddleDeg - _this.prizeRadian / 2, currMiddleDeg + _this.prizeRadian / 2, _this.getLength(_defaultConfig.gutter), background);
                // ?????????????????????????????????
                var x = Math.cos(currMiddleDeg) * _this.prizeRadius;
                var y = Math.sin(currMiddleDeg) * _this.prizeRadius;
                ctx.translate(x, y);
                ctx.rotate(currMiddleDeg + getAngle(90));
                // ????????????
                prize.imgs && prize.imgs.forEach(function (imgInfo, imgIndex) {
                    if (!_this.prizeImgs[prizeIndex])
                        return;
                    var prizeImg = _this.prizeImgs[prizeIndex][imgIndex];
                    if (!prizeImg)
                        return;
                    var _a = _this.computedWidthAndHeight(prizeImg, imgInfo, _this.prizeRadian * _this.prizeRadius, prizeHeight), trueWidth = _a[0], trueHeight = _a[1];
                    var _b = [_this.getOffsetX(trueWidth), _this.getHeight(imgInfo.top, prizeHeight)], xAxis = _b[0], yAxis = _b[1];
                    _this.drawImage(prizeImg, xAxis, yAxis, trueWidth, trueHeight);
                });
                // ??????????????????
                prize.fonts && prize.fonts.forEach(function (font) {
                    var fontColor = font.fontColor || _defaultStyle.fontColor;
                    var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
                    var fontSize = _this.getLength(font.fontSize || _defaultStyle.fontSize);
                    var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
                    ctx.fillStyle = fontColor;
                    ctx.font = fontWeight + " " + (fontSize >> 0) + "px " + fontStyle;
                    var lines = [], text = String(font.text);
                    if (Object.prototype.hasOwnProperty.call(font, 'wordWrap') ? font.wordWrap : _defaultStyle.wordWrap) {
                        text = removeEnter(text);
                        var str = '';
                        for (var i = 0; i < text.length; i++) {
                            str += text[i];
                            var currWidth = ctx.measureText(str).width;
                            var maxWidth = (_this.prizeRadius - getFontY(font, prizeHeight, lines.length))
                                * Math.tan(_this.prizeRadian / 2) * 2 - _this.getLength(_defaultConfig.gutter);
                            if (currWidth > _this.getWidth(font.lengthLimit || _defaultStyle.lengthLimit, maxWidth)) {
                                lines.push(str.slice(0, -1));
                                str = text[i];
                            }
                        }
                        if (str)
                            lines.push(str);
                        if (!lines.length)
                            lines.push(text);
                    }
                    else {
                        lines = text.split('\n');
                    }
                    lines.filter(function (line) { return !!line; }).forEach(function (line, lineIndex) {
                        ctx.fillText(line, getFontX(line), getFontY(font, prizeHeight, lineIndex));
                    });
                });
                // ?????????????????????????????????
                ctx.rotate(getAngle(360) - currMiddleDeg - getAngle(90));
                ctx.translate(-x, -y);
            });
            ctx.restore();
            // ????????????
            this.buttons.forEach(function (btn, btnIndex) {
                var radius = _this.getHeight(btn.radius);
                // ??????????????????
                _this.maxBtnRadius = Math.max(_this.maxBtnRadius, radius);
                if (hasBackground(btn.background)) {
                    ctx.beginPath();
                    ctx.fillStyle = btn.background;
                    ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
                    ctx.fill();
                }
                // ????????????
                if (btn.pointer && hasBackground(btn.background)) {
                    ctx.beginPath();
                    ctx.fillStyle = btn.background;
                    ctx.moveTo(-radius, 0);
                    ctx.lineTo(radius, 0);
                    ctx.lineTo(0, -radius * 2);
                    ctx.closePath();
                    ctx.fill();
                }
                // ??????????????????
                btn.imgs && btn.imgs.forEach(function (imgInfo, imgIndex) {
                    if (!_this.btnImgs[btnIndex])
                        return;
                    var btnImg = _this.btnImgs[btnIndex][imgIndex];
                    if (!btnImg)
                        return;
                    var _a = _this.computedWidthAndHeight(btnImg, imgInfo, radius * 2, radius * 2), trueWidth = _a[0], trueHeight = _a[1];
                    var _b = [_this.getOffsetX(trueWidth), _this.getHeight(imgInfo.top, radius)], xAxis = _b[0], yAxis = _b[1];
                    _this.drawImage(btnImg, xAxis, yAxis, trueWidth, trueHeight);
                });
                // ??????????????????
                btn.fonts && btn.fonts.forEach(function (font) {
                    var fontColor = font.fontColor || _defaultStyle.fontColor;
                    var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
                    var fontSize = _this.getLength(font.fontSize || _defaultStyle.fontSize);
                    var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
                    ctx.fillStyle = fontColor;
                    ctx.font = fontWeight + " " + (fontSize >> 0) + "px " + fontStyle;
                    String(font.text).split('\n').forEach(function (line, lineIndex) {
                        ctx.fillText(line, getFontX(line), getFontY(font, radius, lineIndex));
                    });
                });
            });
            // ?????????????????????
            (_b = config.afterDraw) === null || _b === void 0 ? void 0 : _b.call(this, ctx);
        };
        /**
         * ????????????: ??????????????????
         */
        LuckyWheel.prototype.play = function () {
            // ????????????, ??????play????????????????????????
            if (this.startTime)
                return;
            this.startTime = Date.now();
            this.prizeFlag = void 0;
            this.run();
        };
        /**
         * ????????????: ??????????????????
         * @param index ????????????
         */
        LuckyWheel.prototype.stop = function (index) {
            // ?????? prizeFlag ???????????? -1
            this.prizeFlag = index < 0 ? -1 : index % this.prizes.length;
            // ????????? -1 ??????????????????
            if (this.prizeFlag === -1) {
                this.rotateDeg = this.prizeDeg / 2 - this._defaultConfig.offsetDegree;
                this.draw();
            }
        };
        /**
         * ????????????????????????
         * @param num ??????????????????????????????
         */
        LuckyWheel.prototype.run = function (num) {
            if (num === void 0) { num = 0; }
            var _a = this, rAF = _a.rAF, prizeFlag = _a.prizeFlag, prizeDeg = _a.prizeDeg, rotateDeg = _a.rotateDeg, _defaultConfig = _a._defaultConfig;
            var interval = Date.now() - this.startTime;
            // ???????????????, ?????????
            if (interval >= _defaultConfig.accelerationTime && prizeFlag !== void 0) {
                // ????????????
                this.FPS = interval / num;
                // ??????????????????????????????
                this.endTime = Date.now();
                // ???????????????????????????
                this.stopDeg = rotateDeg;
                // ????????????
                var stopRange = (Math.random() * prizeDeg - prizeDeg / 2) * this.getLength(_defaultConfig.stopRange);
                // ???????????????????????????
                var i = 0;
                while (++i) {
                    var endDeg = 360 * i - prizeFlag * prizeDeg - rotateDeg - _defaultConfig.offsetDegree + stopRange;
                    var currSpeed = Tween[_defaultConfig.speedFunction].easeOut(this.FPS, this.stopDeg, endDeg, _defaultConfig.decelerationTime) - this.stopDeg;
                    if (currSpeed > _defaultConfig.speed) {
                        this.endDeg = endDeg;
                        break;
                    }
                }
                return this.slowDown();
            }
            this.rotateDeg = (rotateDeg + Tween[_defaultConfig.speedFunction].easeIn(interval, 0, _defaultConfig.speed, _defaultConfig.accelerationTime)) % 360;
            this.draw();
            rAF(this.run.bind(this, num + 1));
        };
        /**
         * ?????????????????????
         */
        LuckyWheel.prototype.slowDown = function () {
            var _a;
            var _b = this, rAF = _b.rAF, prizes = _b.prizes, prizeFlag = _b.prizeFlag, stopDeg = _b.stopDeg, endDeg = _b.endDeg, _defaultConfig = _b._defaultConfig;
            var interval = Date.now() - this.endTime;
            if (prizeFlag === -1)
                return (this.startTime = 0, void 0);
            if (interval >= _defaultConfig.decelerationTime) {
                this.startTime = 0;
                (_a = this.endCallback) === null || _a === void 0 ? void 0 : _a.call(this, __assign({}, prizes.find(function (prize, index) { return index === prizeFlag; })));
                return;
            }
            this.rotateDeg = Tween[_defaultConfig.speedFunction].easeOut(interval, stopDeg, endDeg, _defaultConfig.decelerationTime) % 360;
            this.draw();
            rAF(this.slowDown.bind(this));
        };
        /**
         * ??????????????????
         * @param length ?????????????????????
         * @param width ?????????????????????
         * @return ??????????????????
         */
        LuckyWheel.prototype.getWidth = function (length, width) {
            if (width === void 0) { width = this.prizeRadian * this.prizeRadius; }
            if (isExpectType(length, 'number'))
                return length;
            if (isExpectType(length, 'string'))
                return this.changeUnits(length, width);
            return 0;
        };
        /**
         * ??????????????????
         * @param length ?????????????????????
         * @param height ?????????????????????
         * @return ??????????????????
         */
        LuckyWheel.prototype.getHeight = function (length, height) {
            if (height === void 0) { height = this.prizeRadius; }
            if (isExpectType(length, 'number'))
                return length;
            if (isExpectType(length, 'string'))
                return this.changeUnits(length, height);
            return 0;
        };
        /**
         * ????????????(??????)X??????
         * @param width
         * @return ??????x??????
         */
        LuckyWheel.prototype.getOffsetX = function (width) {
            return -width / 2;
        };
        /**
         * ??????????????????
         * @param x
         * @param y
         */
        LuckyWheel.prototype.conversionAxis = function (x, y) {
            var config = this.config;
            return [x / config.dpr - this.Radius, y / config.dpr - this.Radius];
        };
        return LuckyWheel;
    }(Lucky));

    var LuckyGrid = /** @class */ (function (_super) {
        __extends(LuckyGrid, _super);
        /**
         * ??????????????????
         * @param config ????????????
         * @param data ???????????????
         */
        function LuckyGrid(config, data) {
            if (data === void 0) { data = {}; }
            var _a;
            var _this = _super.call(this, config) || this;
            _this.rows = 3;
            _this.cols = 3;
            _this.blocks = [];
            _this.prizes = [];
            _this.buttons = [];
            _this.defaultConfig = {};
            _this._defaultConfig = {
                gutter: 5,
                speed: 20,
                accelerationTime: 2500,
                decelerationTime: 2500,
            };
            _this.defaultStyle = {};
            _this._defaultStyle = {
                borderRadius: 20,
                fontColor: '#000',
                fontSize: '18px',
                fontStyle: 'sans-serif',
                fontWeight: '400',
                lineHeight: '',
                background: 'rgba(0,0,0,0)',
                shadow: '',
                wordWrap: true,
                lengthLimit: '90%',
            };
            _this.activeStyle = {};
            _this._activeStyle = {
                background: '#ffce98',
                shadow: '',
                fontStyle: '',
                fontWeight: '',
                fontSize: '',
                lineHeight: '',
                fontColor: '',
            };
            _this.cellWidth = 0; // ????????????
            _this.cellHeight = 0; // ????????????
            _this.startTime = 0; // ???????????????
            _this.endTime = 0; // ???????????????
            _this.currIndex = 0; // ??????index??????
            _this.stopIndex = 0; // ????????????
            _this.endIndex = 0; // ????????????
            _this.demo = false; // ??????????????????
            _this.timer = 0; // ???????????????
            _this.FPS = 16.6; // ???????????????
            /**
             * ????????????
             * prizeFlag = undefined ???, ????????????????????????, ????????????
             * prizeFlag >= 0 ???, ??????stop???????????????, ???????????????????????????
             * prizeFlag === -1 ???, ??????stop???????????????, ?????????????????????, ??????????????????
             */
            _this.prizeFlag = -1;
            // ????????????
            _this.cells = [];
            // ????????????
            _this.blockImgs = [[]];
            _this.btnImgs = [[]];
            _this.prizeImgs = [];
            if (config.ob) {
                _this.initData(data);
                _this.initWatch();
            }
            _this.initComputed();
            // ?????????????????????
            (_a = config.beforeCreate) === null || _a === void 0 ? void 0 : _a.call(_this);
            var btnImgs = _this.buttons.map(function (btn) { return btn.imgs; });
            if (_this.button)
                btnImgs.push(_this.button.imgs);
            _this.init({
                blockImgs: _this.blocks.map(function (block) { return block.imgs; }),
                prizeImgs: _this.prizes.map(function (prize) { return prize.imgs; }),
                btnImgs: btnImgs,
            });
            return _this;
        }
        /**
         * ???????????????
         * @param data
         */
        LuckyGrid.prototype.initData = function (data) {
            this.$set(this, 'rows', Number(data.rows) || 3);
            this.$set(this, 'cols', Number(data.cols) || 3);
            this.$set(this, 'blocks', data.blocks || []);
            this.$set(this, 'prizes', data.prizes || []);
            this.$set(this, 'buttons', data.buttons || []);
            // ??????????????????, ?????????2.x????????????
            this.$set(this, 'button', data.button);
            this.$set(this, 'defaultConfig', data.defaultConfig || {});
            this.$set(this, 'defaultStyle', data.defaultStyle || {});
            this.$set(this, 'activeStyle', data.activeStyle || {});
            this.$set(this, 'startCallback', data.start);
            this.$set(this, 'endCallback', data.end);
        };
        /**
         * ?????????????????????
         */
        LuckyGrid.prototype.initComputed = function () {
            var _this = this;
            // ????????????
            this.$computed(this, '_defaultConfig', function () {
                var config = __assign({ gutter: 5, speed: 20, accelerationTime: 2500, decelerationTime: 2500 }, _this.defaultConfig);
                config.gutter = _this.getLength(config.gutter);
                config.speed = config.speed / 40;
                return config;
            });
            // ????????????
            this.$computed(this, '_defaultStyle', function () {
                return __assign({ borderRadius: 20, fontColor: '#000', fontSize: '18px', fontStyle: 'sans-serif', fontWeight: '400', background: 'rgba(0,0,0,0)', shadow: '', wordWrap: true, lengthLimit: '90%' }, _this.defaultStyle);
            });
            // ????????????
            this.$computed(this, '_activeStyle', function () {
                return __assign({ background: '#ffce98', shadow: '' }, _this.activeStyle);
            });
        };
        /**
         * ??????????????????
         */
        LuckyGrid.prototype.initWatch = function () {
            var _this = this;
            // ?????? blocks ???????????????
            this.$watch('blocks', function (newData) {
                return _this.init({ blockImgs: newData.map(function (block) { return block.imgs; }) });
            }, { deep: true });
            // ?????? prizes ???????????????
            this.$watch('prizes', function (newData) {
                return _this.init({ prizeImgs: newData.map(function (prize) { return prize.imgs; }) });
            }, { deep: true });
            // ?????? button ???????????????
            this.$watch('buttons', function (newData) {
                var btnImgs = newData.map(function (btn) { return btn.imgs; });
                if (_this.button)
                    btnImgs.push(_this.button.imgs);
                return _this.init({ btnImgs: btnImgs });
            }, { deep: true });
            // ??????????????????, ?????????2.x????????????
            this.$watch('button', function () {
                var btnImgs = _this.buttons.map(function (btn) { return btn.imgs; });
                if (_this.button)
                    btnImgs.push(_this.button.imgs);
                return _this.init({ btnImgs: btnImgs });
            }, { deep: true });
            this.$watch('rows', function () { return _this.init({}); });
            this.$watch('cols', function () { return _this.init({}); });
            this.$watch('defaultConfig', function () { return _this.draw(); }, { deep: true });
            this.$watch('defaultStyle', function () { return _this.draw(); }, { deep: true });
            this.$watch('activeStyle', function () { return _this.draw(); }, { deep: true });
            this.$watch('startCallback', function () { return _this.init({}); });
            this.$watch('endCallback', function () { return _this.init({}); });
        };
        /**
         * ????????? canvas ??????
         * @param willUpdateImgs ?????????????????????
         */
        LuckyGrid.prototype.init = function (willUpdateImgs) {
            var _this = this;
            var _a, _b;
            _super.prototype.init.call(this);
            var _c = this, config = _c.config; _c.ctx; _c.button;
            // ????????????????????????
            (_a = config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
            // ????????????????????????
            this.draw();
            // ??????????????????
            Object.keys(willUpdateImgs).forEach(function (key) {
                var imgName = key;
                var willUpdate = willUpdateImgs[imgName];
                var cellName = {
                    blockImgs: 'blocks',
                    prizeImgs: 'prizes',
                    btnImgs: 'buttons',
                }[imgName];
                willUpdate && willUpdate.forEach(function (imgs, cellIndex) {
                    imgs && imgs.forEach(function (imgInfo, imgIndex) {
                        _this.loadAndCacheImg(cellName, cellIndex, imgName, imgIndex, function () {
                            _this.draw();
                        });
                    });
                });
            });
            // ????????????????????????
            (_b = config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
        };
        /**
         * canvas????????????
         * @param e ????????????
         */
        LuckyGrid.prototype.handleClick = function (e) {
            var _this = this;
            var ctx = this.ctx;
            __spreadArray(__spreadArray([], this.buttons), [
                this.button
            ]).forEach(function (btn) {
                var _a;
                if (!btn)
                    return;
                var _b = _this.getGeometricProperty([
                    btn.x, btn.y, btn.col || 1, btn.row || 1
                ]), x = _b[0], y = _b[1], width = _b[2], height = _b[3];
                ctx.beginPath();
                ctx.rect(x, y, width, height);
                if (!ctx.isPointInPath(e.offsetX, e.offsetY))
                    return;
                if (_this.startTime)
                    return;
                // ??????btn???????????????????????????, ????????????
                if (typeof btn.callback === 'function')
                    btn.callback.call(_this, btn);
                // ????????????????????????
                (_a = _this.startCallback) === null || _a === void 0 ? void 0 : _a.call(_this, e, btn);
            });
        };
        /**
         * ?????????????????????????????????????????????
         * @param { number } prizeIndex ????????????
         * @param { number } imgIndex ??????????????????
         * @param { Function } callBack ????????????????????????
         */
        LuckyGrid.prototype.loadAndCacheImg = function (cellName, cellIndex, imgName, imgIndex, callBack) {
            return __awaiter(this, void 0, void 0, function () {
                var cell, imgInfo, request;
                var _this = this;
                return __generator(this, function (_a) {
                    cell = this[cellName][cellIndex];
                    // ??????????????????, ?????????2.x????????????
                    if (cellName === 'buttons' && !this.buttons.length && this.button) {
                        cell = this.button;
                    }
                    if (!cell || !cell.imgs)
                        return [2 /*return*/];
                    imgInfo = cell.imgs[imgIndex];
                    if (!imgInfo)
                        return [2 /*return*/];
                    if (!this[imgName][cellIndex])
                        this[imgName][cellIndex] = [];
                    request = [
                        this.loadImg(imgInfo.src, imgInfo),
                        imgInfo['activeSrc'] && this.loadImg(imgInfo['activeSrc'], imgInfo, '$activeResolve')
                    ];
                    Promise.all(request).then(function (_a) {
                        var defaultImg = _a[0], activeImg = _a[1];
                        _this[imgName][cellIndex][imgIndex] = { defaultImg: defaultImg, activeImg: activeImg };
                        callBack.call(_this);
                    }).catch(function (err) {
                        console.error(cellName + "[" + cellIndex + "].imgs[" + imgIndex + "] " + err);
                    });
                    return [2 /*return*/];
                });
            });
        };
        /**
         * ???????????????????????????
         * @param imgObj ??????????????????
         * @param imgInfo ????????????
         * @param cell ????????????
         * @return [????????????, ????????????]
         */
        LuckyGrid.prototype.computedWidthAndHeight = function (imgObj, imgInfo, cell) {
            // ????????????????????????????????????????????????
            if (!imgInfo.width && !imgInfo.height) {
                // ????????????????????????, ??????????????????????????????
                return [imgObj.width, imgObj.height];
            }
            else if (imgInfo.width && !imgInfo.height) {
                // ????????????????????????, ???????????????
                var trueWidth = this.getWidth(imgInfo.width, cell.col);
                // ??????????????????????????????????????????
                return [trueWidth, imgObj.height * (trueWidth / imgObj.width)];
            }
            else if (!imgInfo.width && imgInfo.height) {
                // ????????????????????????, ???????????????
                var trueHeight = this.getHeight(imgInfo.height, cell.row);
                // ??????????????????????????????????????????
                return [imgObj.width * (trueHeight / imgObj.height), trueHeight];
            }
            // ?????????????????????????????????, ???????????????
            return [
                this.getWidth(imgInfo.width, cell.col),
                this.getHeight(imgInfo.height, cell.row)
            ];
        };
        /**
         * ?????????????????????
         */
        LuckyGrid.prototype.draw = function () {
            var _this = this;
            var _a, _b;
            var _c = this, config = _c.config, ctx = _c.ctx, _defaultConfig = _c._defaultConfig, _defaultStyle = _c._defaultStyle, _activeStyle = _c._activeStyle;
            // ?????????????????????
            (_a = config.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(this, ctx);
            // ????????????
            ctx.clearRect(0, 0, this.boxWidth, this.boxHeight);
            // ?????????????????????
            this.cells = __spreadArray(__spreadArray([], this.prizes), this.buttons);
            if (this.button)
                this.cells.push(this.button);
            this.cells.forEach(function (cell) {
                cell.col = cell.col || 1;
                cell.row = cell.row || 1;
            });
            // ???????????????????????????????????????
            this.prizeArea = this.blocks.reduce(function (_a, block) {
                var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
                var _b = computePadding(block), paddingTop = _b[0], paddingBottom = _b[1], paddingLeft = _b[2], paddingRight = _b[3];
                var r = block.borderRadius ? _this.getLength(block.borderRadius) : 0;
                // ????????????
                var background = block.background || _defaultStyle.background;
                if (hasBackground(background)) {
                    drawRoundRect(ctx, x, y, w, h, r, _this.handleBackground(x, y, w, h, background));
                }
                return {
                    x: x + paddingLeft,
                    y: y + paddingTop,
                    w: w - paddingLeft - paddingRight,
                    h: h - paddingTop - paddingBottom
                };
            }, { x: 0, y: 0, w: this.boxWidth, h: this.boxHeight });
            // ??????????????????????????????????????????
            this.cellWidth = (this.prizeArea.w - _defaultConfig.gutter * (this.cols - 1)) / this.cols;
            this.cellHeight = (this.prizeArea.h - _defaultConfig.gutter * (this.rows - 1)) / this.rows;
            // ??????????????????
            this.cells.forEach(function (cell, cellIndex) {
                var _a = _this.getGeometricProperty([cell.x, cell.y, cell.col, cell.row]), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
                // ???????????????????????????
                var isActive = false;
                // ?????? prizeFlag ????????????, ?????????????????????
                if (_this.prizeFlag === void 0 || _this.prizeFlag > -1) {
                    isActive = cellIndex === _this.currIndex % _this.prizes.length >> 0;
                }
                // ???????????????
                var background = isActive ? _activeStyle.background : (cell.background || _defaultStyle.background);
                if (hasBackground(background)) {
                    // ???????????? (????????????any, ?????????????????????)
                    var shadow = (isActive ? _activeStyle.shadow : (cell.shadow || _defaultStyle.shadow))
                        .replace(/px/g, '') // ??????px?????????
                        .split(',')[0].split(' ') // ??????????????????????????????, ?????????????????????
                        .map(function (n, i) { return i < 3 ? Number(n) : n; }); // ????????????????????????*?????????
                    // ????????????
                    if (shadow.length === 4) {
                        ctx.shadowColor = shadow[3];
                        ctx.shadowOffsetX = shadow[0] * config.dpr;
                        ctx.shadowOffsetY = shadow[1] * config.dpr;
                        ctx.shadowBlur = shadow[2];
                        // ??????(??????+??????)?????????, ???????????????????????????
                        shadow[0] > 0 ? (width -= shadow[0]) : (width += shadow[0], x -= shadow[0]);
                        shadow[1] > 0 ? (height -= shadow[1]) : (height += shadow[1], y -= shadow[1]);
                    }
                    drawRoundRect(ctx, x, y, width, height, _this.getLength(cell.borderRadius ? cell.borderRadius : _defaultStyle.borderRadius), _this.handleBackground(x, y, width, height, background));
                    // ????????????
                    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 0;
                }
                // ??????????????????
                var cellName = 'prizeImgs';
                if (cellIndex >= _this.prizes.length) {
                    cellName = 'btnImgs';
                    cellIndex -= _this.prizes.length;
                }
                // ????????????
                cell.imgs && cell.imgs.forEach(function (imgInfo, imgIndex) {
                    if (!_this[cellName][cellIndex])
                        return;
                    var cellImg = _this[cellName][cellIndex][imgIndex];
                    if (!cellImg)
                        return;
                    var renderImg = (isActive && cellImg['activeImg']) || cellImg.defaultImg;
                    if (!renderImg)
                        return;
                    var _a = _this.computedWidthAndHeight(renderImg, imgInfo, cell), trueWidth = _a[0], trueHeight = _a[1];
                    var _b = [
                        x + _this.getOffsetX(trueWidth, cell.col),
                        y + _this.getHeight(imgInfo.top, cell.row)
                    ], xAxis = _b[0], yAxis = _b[1];
                    _this.drawImage(renderImg, xAxis, yAxis, trueWidth, trueHeight);
                });
                // ????????????
                cell.fonts && cell.fonts.forEach(function (font) {
                    // ????????????
                    var style = isActive && _activeStyle.fontStyle
                        ? _activeStyle.fontStyle
                        : (font.fontStyle || _defaultStyle.fontStyle);
                    // ????????????
                    var fontWeight = isActive && _activeStyle.fontWeight
                        ? _activeStyle.fontWeight
                        : (font.fontWeight || _defaultStyle.fontWeight);
                    // ????????????
                    var size = isActive && _activeStyle.fontSize
                        ? _this.getLength(_activeStyle.fontSize)
                        : _this.getLength(font.fontSize || _defaultStyle.fontSize);
                    // ????????????
                    var lineHeight = isActive && _activeStyle.lineHeight
                        ? _activeStyle.lineHeight
                        : font.lineHeight || _defaultStyle.lineHeight || font.fontSize || _defaultStyle.fontSize;
                    ctx.font = fontWeight + " " + (size >> 0) + "px " + style;
                    ctx.fillStyle = (isActive && _activeStyle.fontColor) ? _activeStyle.fontColor : (font.fontColor || _defaultStyle.fontColor);
                    var lines = [], text = String(font.text);
                    // ??????????????????
                    if (Object.prototype.hasOwnProperty.call(font, 'wordWrap') ? font.wordWrap : _defaultStyle.wordWrap) {
                        text = removeEnter(text);
                        var str = '';
                        for (var i = 0; i < text.length; i++) {
                            str += text[i];
                            var currWidth = ctx.measureText(str).width;
                            var maxWidth = _this.getWidth(font.lengthLimit || _defaultStyle.lengthLimit, cell.col);
                            if (currWidth > maxWidth) {
                                lines.push(str.slice(0, -1));
                                str = text[i];
                            }
                        }
                        if (str)
                            lines.push(str);
                        if (!lines.length)
                            lines.push(text);
                    }
                    else {
                        lines = text.split('\n');
                    }
                    lines.forEach(function (line, lineIndex) {
                        ctx.fillText(line, x + _this.getOffsetX(ctx.measureText(line).width, cell.col), y + _this.getHeight(font.top, cell.row) + (lineIndex + 1) * _this.getLength(lineHeight));
                    });
                });
            });
            // ?????????????????????
            (_b = config.afterDraw) === null || _b === void 0 ? void 0 : _b.call(this, ctx);
        };
        /**
         * ???????????????
         * @param x
         * @param y
         * @param width
         * @param height
         * @param background
         * @param isActive
         */
        LuckyGrid.prototype.handleBackground = function (x, y, width, height, background) {
            var ctx = this.ctx;
            // ??????????????????
            if (background.includes('linear-gradient')) {
                background = getLinearGradient(ctx, x, y, width, height, background);
            }
            return background;
        };
        /**
         * ????????????: ??????????????????
         */
        LuckyGrid.prototype.play = function () {
            var clearInterval = this.config.clearInterval;
            if (this.startTime)
                return;
            clearInterval(this.timer);
            this.startTime = Date.now();
            this.prizeFlag = void 0;
            this.run();
        };
        /**
         * ????????????: ??????????????????
         * @param index ????????????
         */
        LuckyGrid.prototype.stop = function (index) {
            // ?????? prizeFlag ???????????? -1
            this.prizeFlag = index < 0 ? -1 : index % this.prizes.length;
            // ????????? -1 ??????????????????
            if (this.prizeFlag === -1) {
                this.currIndex = 0;
                this.draw();
            }
        };
        /**
         * ????????????????????????
         * @param num ??????????????????????????????
         */
        LuckyGrid.prototype.run = function (num) {
            if (num === void 0) { num = 0; }
            var _a = this, rAF = _a.rAF, currIndex = _a.currIndex, prizes = _a.prizes, prizeFlag = _a.prizeFlag, startTime = _a.startTime, _defaultConfig = _a._defaultConfig;
            var interval = Date.now() - startTime;
            // ???????????????, ?????????
            if (interval >= _defaultConfig.accelerationTime && prizeFlag !== void 0) {
                // ????????????
                this.FPS = interval / num;
                // ??????????????????????????????
                this.endTime = Date.now();
                // ???????????????????????????
                this.stopIndex = currIndex;
                // ???????????????????????????
                var i = 0;
                while (++i) {
                    var endIndex = prizes.length * i + prizeFlag - (currIndex >> 0);
                    var currSpeed = quad.easeOut(this.FPS, this.stopIndex, endIndex, _defaultConfig.decelerationTime) - this.stopIndex;
                    if (currSpeed > _defaultConfig.speed) {
                        this.endIndex = endIndex;
                        break;
                    }
                }
                return this.slowDown();
            }
            this.currIndex = (currIndex + quad.easeIn(interval, 0.1, _defaultConfig.speed, _defaultConfig.accelerationTime)) % prizes.length;
            this.draw();
            rAF(this.run.bind(this, num + 1));
        };
        /**
         * ?????????????????????
         */
        LuckyGrid.prototype.slowDown = function () {
            var _a;
            var _b = this, rAF = _b.rAF, prizes = _b.prizes, prizeFlag = _b.prizeFlag, stopIndex = _b.stopIndex, endIndex = _b.endIndex, _defaultConfig = _b._defaultConfig;
            var interval = Date.now() - this.endTime;
            // ???????????? -1 ?????????????????????
            if (prizeFlag === -1)
                return (this.startTime = 0, void 0);
            if (interval > _defaultConfig.decelerationTime) {
                this.startTime = 0;
                (_a = this.endCallback) === null || _a === void 0 ? void 0 : _a.call(this, __assign({}, prizes.find(function (prize, index) { return index === prizeFlag; })));
                return;
            }
            this.currIndex = quad.easeOut(interval, stopIndex, endIndex, _defaultConfig.decelerationTime) % prizes.length;
            this.draw();
            rAF(this.slowDown.bind(this));
        };
        /**
         * ??????????????????????????????
         */
        LuckyGrid.prototype.walk = function () {
            var _this = this;
            var _a = this.config, setInterval = _a.setInterval, clearInterval = _a.clearInterval;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                _this.currIndex += 1;
                _this.draw();
            }, 1300);
        };
        /**
         * ?????????????????????????????????
         * @param { array } [...????????????, col, row]
         * @return { array } [...????????????, width, height]
         */
        LuckyGrid.prototype.getGeometricProperty = function (_a) {
            var x = _a[0], y = _a[1], col = _a[2], row = _a[3];
            var _b = this, cellWidth = _b.cellWidth, cellHeight = _b.cellHeight;
            var gutter = this._defaultConfig.gutter;
            var res = [
                this.prizeArea.x + (cellWidth + gutter) * x,
                this.prizeArea.y + (cellHeight + gutter) * y
            ];
            col && row && res.push(cellWidth * col + gutter * (col - 1), cellHeight * row + gutter * (row - 1));
            return res;
        };
        /**
         * ?????????????????????
         * @param width ?????????????????????
         * @param col ?????????????????????
         * @return ??????????????????
         */
        LuckyGrid.prototype.getWidth = function (width, col) {
            if (col === void 0) { col = 1; }
            if (isExpectType(width, 'number'))
                return width;
            if (isExpectType(width, 'string'))
                return this.changeUnits(width, this.cellWidth * col + this._defaultConfig.gutter * (col - 1));
            return 0;
        };
        /**
         * ?????????????????????
         * @param height ?????????????????????
         * @param row ?????????????????????
         * @return ??????????????????
         */
        LuckyGrid.prototype.getHeight = function (height, row) {
            if (row === void 0) { row = 1; }
            if (isExpectType(height, 'number'))
                return height;
            if (isExpectType(height, 'string'))
                return this.changeUnits(height, this.cellHeight * row + this._defaultConfig.gutter * (row - 1));
            return 0;
        };
        /**
         * ????????????(??????)X??????
         * @param width
         * @param col
         */
        LuckyGrid.prototype.getOffsetX = function (width, col) {
            if (col === void 0) { col = 1; }
            return (this.cellWidth * col + this._defaultConfig.gutter * (col - 1) - width) / 2;
        };
        /**
         * ??????????????????
         * @param x
         * @param y
         */
        LuckyGrid.prototype.conversionAxis = function (x, y) {
            var config = this.config;
            return [x / config.dpr, y / config.dpr];
        };
        return LuckyGrid;
    }(Lucky));

    exports.LuckyGrid = LuckyGrid;
    exports.LuckyWheel = LuckyWheel;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
