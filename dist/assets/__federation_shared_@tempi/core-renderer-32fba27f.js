import { importShared } from '../__federation_fn_import-13825f49.js';
import { P as PropTypes, j as jsxRuntimeExports, d as dayjs, c as clsx, G as Global, g as get, s as set } from '../clsx.m-f851f1b8-1726417061713.js';
import { g as getDefaultExportFromCjs, r as reactExports, c as commonjsGlobal } from '../__federation_shared_react-df44a686.js';
import { n as newStyled } from '../emotion-styled.browser.esm-1954e952-1726417061713.js';

const pbFontFamily = [
  "Alfa Slab One",
  "Anton",
  "Arima Madurai",
  "Arimo",
  "Athiti",
  "Bahianita",
  "Baloo Bhaina",
  "Barlow",
  "Barlow Condensed",
  "Bungee",
  "Bungee Inline",
  "Bungee Outline",
  "Bungee Shade",
  "Cabin",
  "Chonburi",
  "Cormorant Upright",
  "Crimson Pro",
  "Dancing Script",
  "Dosis",
  "EB Garamond",
  "Exo",
  "Epilogue",
  "Fira Sans",
  "Hepta Slab",
  "Inconsolata",
  "Inter",
  "Itim",
  "Josefin Sans",
  "Judson",
  "Jura",
  "Kanit",
  "K2D",
  "Lexend",
  "Literata",
  "Lobster",
  "Lora",
  "Manrope",
  "Maven Pro",
  "Merriweather",
  "Montserrat",
  "Mulish",
  "Niramit",
  "Noto Serif",
  "Open Sans",
  "Oswald",
  "Pattaya",
  "Paytone One",
  "Philosopher",
  "Play",
  "Playfair Display",
  "Poppins",
  "Prata",
  "Quicksand",
  "Raleway",
  "Roboto",
  "Roboto Slab",
  "Rokkit",
  "Source Sans Pro",
  "Space Grotesk",
  "Sriracha",
  "Taviraj",
  "Thasadith",
  "Tinos",
  "Trirong",
  "VT323",
  "Work Sans",
  "Yeseva One"
];
const pbFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};
const fontWeightQueryParams = Object.values(pbFontWeight).join(";");
const fontQueryParams = pbFontFamily.map((font) => {
  return `family=${encodeURIComponent(font)}:wght@${fontWeightQueryParams}`;
}).join("&");

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$a = reactExports;
var React__default = _interopDefault(React$a);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React$a.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

var lib$1 = withSideEffect;

const withSideEffect$1 = /*@__PURE__*/getDefaultExportFromCjs(lib$1);

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

const isEqual$2 = /*@__PURE__*/getDefaultExportFromCjs(reactFastCompare);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

const objectAssign$1 = /*@__PURE__*/getDefaultExportFromCjs(objectAssign);

const React$9 = await importShared('react');

var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = objectAssign$1({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [React$9.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return React$9.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !isEqual$2(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            React$9.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return React$9.createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }(React$9.Component), _class.propTypes = {
        base: PropTypes.object,
        bodyAttributes: PropTypes.object,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        defaultTitle: PropTypes.string,
        defer: PropTypes.bool,
        encodeSpecialCharacters: PropTypes.bool,
        htmlAttributes: PropTypes.object,
        link: PropTypes.arrayOf(PropTypes.object),
        meta: PropTypes.arrayOf(PropTypes.object),
        noscript: PropTypes.arrayOf(PropTypes.object),
        onChangeClientState: PropTypes.func,
        script: PropTypes.arrayOf(PropTypes.object),
        style: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
        titleAttributes: PropTypes.object,
        titleTemplate: PropTypes.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = withSideEffect$1(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

const {createElement} = await importShared('react');

var __defProp$k = Object.defineProperty;
var __defProps$d = Object.defineProperties;
var __getOwnPropDescs$d = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$d = (a, b) => __defProps$d(a, __getOwnPropDescs$d(b));
const landingLinks = [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "preLoad stylesheet",
    href: `https://fonts.googleapis.com/css2?${fontQueryParams}&display=swap`,
    as: "style",
    type: "text/css"
  },
  {
    rel: "preLoad stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    as: "style",
    type: "text/css"
  }
];
const LandingLinks = () => /* @__PURE__ */ jsxRuntimeExports.jsx(HelmetExport, {
  children: landingLinks.map((link, index) => /* @__PURE__ */ createElement("link", __spreadProps$d(__spreadValues$j({}, link), {
    key: index
  })))
});
const publicBffUrl = {
  local: "http://localhost:8081",
  dev: "https://public-builder-bff.dev.tekoapis.net",
  stag: "https://public-builder-bff.stag.tekoapis.net",
  production: "https://public-bff.tempi.vn",
  "test-1": "https://public-builder-bff.test-1.tekoapis.net",
  internal: "http://public-bff-api.page-management"
};

var lib = {};

var binary_carrier = {};

Object.defineProperty(binary_carrier, "__esModule", { value: true });
/**
 * Convenience class to use as a binary carrier.
 *
 * Any valid Object with a field named `buffer` may be used as a binary carrier;
 * this class is only one such type of object that can be used.
 */
var BinaryCarrier = /** @class */ (function () {
    function BinaryCarrier(buffer) {
        this.buffer = buffer;
    }
    return BinaryCarrier;
}());
binary_carrier.default = BinaryCarrier;

var tags = {};

Object.defineProperty(tags, "__esModule", { value: true });
/** SPAN_KIND hints at relationship between spans, e.g. client/server */
tags.SPAN_KIND = 'span.kind';
/** Marks a span representing the client-side of an RPC or other remote call */
tags.SPAN_KIND_RPC_CLIENT = 'client';
/** Marks a span representing the server-side of an RPC or other remote call */
tags.SPAN_KIND_RPC_SERVER = 'server';
/** Marks a span representing the producing-side within a messaging system or other remote call */
tags.SPAN_KIND_MESSAGING_PRODUCER = 'producer';
/** Marks a span representing the consuming-side within a messaging system or other remote call */
tags.SPAN_KIND_MESSAGING_CONSUMER = 'consumer';
/**
 * ERROR (boolean) true if and only if the application considers the operation
 * represented by the Span to have failed
 */
tags.ERROR = 'error';
/**
 * COMPONENT (string) ia s low-cardinality identifier of the module, library,
 * or package that is generating a span.
 */
tags.COMPONENT = 'component';
/**
 * SAMPLING_PRIORITY (number) determines the priority of sampling this Span.
 * If greater than 0, a hint to the Tracer to do its best to capture the trace.
 * If 0, a hint to the trace to not-capture the trace. If absent, the Tracer
 * should use its default sampling mechanism.
 */
tags.SAMPLING_PRIORITY = 'sampling.priority';
// ---------------------------------------------------------------------------
// PEER_* tags can be emitted by either client-side of server-side to describe
// the other side/service in a peer-to-peer communications, like an RPC call.
// ---------------------------------------------------------------------------
/**
 * PEER_SERVICE (string) Remote service name (for some unspecified
 * definition of "service"). E.g., "elasticsearch", "a_custom_microservice", "memcache"
 */
tags.PEER_SERVICE = 'peer.service';
/** PEER_HOSTNAME (string) Remote hostname. E.g., "opentracing.io", "internal.dns.name" */
tags.PEER_HOSTNAME = 'peer.hostname';
/**
 * PEER_ADDRESS (string) Remote "address", suitable for use in a
 * networking client library. This may be a "ip:port", a bare
 * "hostname", a FQDN, or even a JDBC substring like "mysql://prod-db:3306"
 */
tags.PEER_ADDRESS = 'peer.address';
/**
 * PEER_HOST_IPV4 (number) Remote IPv4 address as a .-separated tuple.
 * E.g., "127.0.0.1"
 */
tags.PEER_HOST_IPV4 = 'peer.ipv4';
// PEER_HOST_IPV6 (string) Remote IPv6 address as a string of
// colon-separated 4-char hex tuples. E.g., "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
tags.PEER_HOST_IPV6 = 'peer.ipv6';
// PEER_PORT (number) Remote port. E.g., 80
tags.PEER_PORT = 'peer.port';
// ---------------------------------------------------------------------------
// HTTP tags
// ---------------------------------------------------------------------------
/**
 * HTTP_URL (string) URL of the request being handled in this segment of the
 * trace, in standard URI format. E.g., "https://domain.net/path/to?resource=here"
 */
tags.HTTP_URL = 'http.url';
/**
 * HTTP_METHOD (string) HTTP method of the request for the associated Span. E.g.,
 * "GET", "POST"
 */
tags.HTTP_METHOD = 'http.method';
/**
 * HTTP_STATUS_CODE (number) HTTP response status code for the associated Span.
 * E.g., 200, 503, 404
 */
tags.HTTP_STATUS_CODE = 'http.status_code';
// -------------------------------------------------------------------------
// Messaging tags
// -------------------------------------------------------------------------
/**
 * MESSAGE_BUS_DESTINATION (string) An address at which messages can be exchanged.
 * E.g. A Kafka record has an associated "topic name" that can be extracted
 * by the instrumented producer or consumer and stored using this tag.
 */
tags.MESSAGE_BUS_DESTINATION = 'message_bus.destination';
// --------------------------------------------------------------------------
// Database tags
// --------------------------------------------------------------------------
/**
 * DB_INSTANCE (string) Database instance name. E.g., In java, if the
 * jdbc.url="jdbc:mysql://127.0.0.1:3306/customers", the instance name is "customers".
 */
tags.DB_INSTANCE = 'db.instance';
/**
 * DB_STATEMENT (string) A database statement for the given database type.
 * E.g., for db.type="SQL", "SELECT * FROM wuser_table";
 * for db.type="redis", "SET mykey 'WuValue'".
 */
tags.DB_STATEMENT = 'db.statement';
/**
 * DB_TYPE (string) Database type. For any SQL database, "sql". For others,
 * the lower-case database category, e.g. "cassandra", "hbase", or "redis".
 */
tags.DB_TYPE = 'db.type';
/**
 * DB_USER (string) Username for accessing database. E.g., "readonly_user"
 * or "reporting_user"
 */
tags.DB_USER = 'db.user';

var noop$1 = {};

var span = {};

var hasRequiredSpan;

function requireSpan () {
	if (hasRequiredSpan) return span;
	hasRequiredSpan = 1;
	Object.defineProperty(span, "__esModule", { value: true });
	var noop = requireNoop();
	/**
	 * Span represents a logical unit of work as part of a broader Trace. Examples
	 * of span might include remote procedure calls or a in-process function calls
	 * to sub-components. A Trace has a single, top-level "root" Span that in turn
	 * may have zero or more child Spans, which in turn may have children.
	 */
	var Span = /** @class */ (function () {
	    function Span() {
	    }
	    // ---------------------------------------------------------------------- //
	    // OpenTracing API methods
	    // ---------------------------------------------------------------------- //
	    /**
	     * Returns the SpanContext object associated with this Span.
	     *
	     * @return {SpanContext}
	     */
	    Span.prototype.context = function () {
	        return this._context();
	    };
	    /**
	     * Returns the Tracer object used to create this Span.
	     *
	     * @return {Tracer}
	     */
	    Span.prototype.tracer = function () {
	        return this._tracer();
	    };
	    /**
	     * Sets the string name for the logical operation this span represents.
	     *
	     * @param {string} name
	     */
	    Span.prototype.setOperationName = function (name) {
	        this._setOperationName(name);
	        return this;
	    };
	    /**
	     * Sets a key:value pair on this Span that also propagates to future
	     * children of the associated Span.
	     *
	     * setBaggageItem() enables powerful functionality given a full-stack
	     * opentracing integration (e.g., arbitrary application data from a web
	     * client can make it, transparently, all the way into the depths of a
	     * storage system), and with it some powerful costs: use this feature with
	     * care.
	     *
	     * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
	     * *future* causal descendants of the associated Span.
	     *
	     * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
	     * value is copied into every local *and remote* child of the associated
	     * Span, and that can add up to a lot of network and cpu overhead.
	     *
	     * @param {string} key
	     * @param {string} value
	     */
	    Span.prototype.setBaggageItem = function (key, value) {
	        this._setBaggageItem(key, value);
	        return this;
	    };
	    /**
	     * Returns the value for a baggage item given its key.
	     *
	     * @param  {string} key
	     *         The key for the given trace attribute.
	     * @return {string}
	     *         String value for the given key, or undefined if the key does not
	     *         correspond to a set trace attribute.
	     */
	    Span.prototype.getBaggageItem = function (key) {
	        return this._getBaggageItem(key);
	    };
	    /**
	     * Adds a single tag to the span.  See `addTags()` for details.
	     *
	     * @param {string} key
	     * @param {any} value
	     */
	    Span.prototype.setTag = function (key, value) {
	        var _a;
	        // NOTE: the call is normalized to a call to _addTags()
	        this._addTags((_a = {}, _a[key] = value, _a));
	        return this;
	    };
	    /**
	     * Adds the given key value pairs to the set of span tags.
	     *
	     * Multiple calls to addTags() results in the tags being the superset of
	     * all calls.
	     *
	     * The behavior of setting the same key multiple times on the same span
	     * is undefined.
	     *
	     * The supported type of the values is implementation-dependent.
	     * Implementations are expected to safely handle all types of values but
	     * may choose to ignore unrecognized / unhandle-able values (e.g. objects
	     * with cyclic references, function objects).
	     *
	     * @return {[type]} [description]
	     */
	    Span.prototype.addTags = function (keyValueMap) {
	        this._addTags(keyValueMap);
	        return this;
	    };
	    /**
	     * Add a log record to this Span, optionally at a user-provided timestamp.
	     *
	     * For example:
	     *
	     *     span.log({
	     *         size: rpc.size(),  // numeric value
	     *         URI: rpc.URI(),  // string value
	     *         payload: rpc.payload(),  // Object value
	     *         "keys can be arbitrary strings": rpc.foo(),
	     *     });
	     *
	     *     span.log({
	     *         "error.description": someError.description(),
	     *     }, someError.timestampMillis());
	     *
	     * @param {object} keyValuePairs
	     *        An object mapping string keys to arbitrary value types. All
	     *        Tracer implementations should support bool, string, and numeric
	     *        value types, and some may also support Object values.
	     * @param {number} timestamp
	     *        An optional parameter specifying the timestamp in milliseconds
	     *        since the Unix epoch. Fractional values are allowed so that
	     *        timestamps with sub-millisecond accuracy can be represented. If
	     *        not specified, the implementation is expected to use its notion
	     *        of the current time of the call.
	     */
	    Span.prototype.log = function (keyValuePairs, timestamp) {
	        this._log(keyValuePairs, timestamp);
	        return this;
	    };
	    /**
	     * DEPRECATED
	     */
	    Span.prototype.logEvent = function (eventName, payload) {
	        return this._log({ event: eventName, payload: payload });
	    };
	    /**
	     * Sets the end timestamp and finalizes Span state.
	     *
	     * With the exception of calls to Span.context() (which are always allowed),
	     * finish() must be the last call made to any span instance, and to do
	     * otherwise leads to undefined behavior.
	     *
	     * @param  {number} finishTime
	     *         Optional finish time in milliseconds as a Unix timestamp. Decimal
	     *         values are supported for timestamps with sub-millisecond accuracy.
	     *         If not specified, the current time (as defined by the
	     *         implementation) will be used.
	     */
	    Span.prototype.finish = function (finishTime) {
	        this._finish(finishTime);
	        // Do not return `this`. The Span generally should not be used after it
	        // is finished so chaining is not desired in this context.
	    };
	    // ---------------------------------------------------------------------- //
	    // Derived classes can choose to implement the below
	    // ---------------------------------------------------------------------- //
	    // By default returns a no-op SpanContext.
	    Span.prototype._context = function () {
	        return noop.spanContext;
	    };
	    // By default returns a no-op tracer.
	    //
	    // The base class could store the tracer that created it, but it does not
	    // in order to ensure the no-op span implementation has zero members,
	    // which allows V8 to aggressively optimize calls to such objects.
	    Span.prototype._tracer = function () {
	        return noop.tracer;
	    };
	    // By default does nothing
	    Span.prototype._setOperationName = function (name) {
	    };
	    // By default does nothing
	    Span.prototype._setBaggageItem = function (key, value) {
	    };
	    // By default does nothing
	    Span.prototype._getBaggageItem = function (key) {
	        return undefined;
	    };
	    // By default does nothing
	    //
	    // NOTE: both setTag() and addTags() map to this function. keyValuePairs
	    // will always be an associative array.
	    Span.prototype._addTags = function (keyValuePairs) {
	    };
	    // By default does nothing
	    Span.prototype._log = function (keyValuePairs, timestamp) {
	    };
	    // By default does nothing
	    //
	    // finishTime is expected to be either a number or undefined.
	    Span.prototype._finish = function (finishTime) {
	    };
	    return Span;
	}());
	span.Span = Span;
	span.default = Span;
	
	return span;
}

var span_context = {};

Object.defineProperty(span_context, "__esModule", { value: true });
/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
var SpanContext = /** @class */ (function () {
    function SpanContext() {
    }
    // The SpanContext is entirely implementation dependent
    /**
     * Returns a string representation of the implementation internal trace ID.
     *
     * @returns {string}
     */
    SpanContext.prototype.toTraceId = function () {
        return '';
    };
    /**
     * Returns a string representation of the implementation internal span ID.
     *
     * @returns {string}
     */
    SpanContext.prototype.toSpanId = function () {
        return '';
    };
    return SpanContext;
}());
span_context.SpanContext = SpanContext;
span_context.default = SpanContext;

var tracer = {};

var functions = {};

var constants = {};

Object.defineProperty(constants, "__esModule", { value: true });
/**
 * The FORMAT_BINARY format represents SpanContexts in an opaque binary
 * carrier.
 *
 * Tracer.inject() will set the buffer field to an Array-like (Array,
 * ArrayBuffer, or TypedBuffer) object containing the injected binary data.
 * Any valid Object can be used as long as the buffer field of the object
 * can be set.
 *
 * Tracer.extract() will look for `carrier.buffer`, and that field is
 * expected to be an Array-like object (Array, ArrayBuffer, or
 * TypedBuffer).
 */
constants.FORMAT_BINARY = 'binary';
/**
 * The FORMAT_TEXT_MAP format represents SpanContexts using a
 * string->string map (backed by a Javascript Object) as a carrier.
 *
 * NOTE: Unlike FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP places no restrictions
 * on the characters used in either the keys or the values of the map
 * entries.
 *
 * The FORMAT_TEXT_MAP carrier map may contain unrelated data (e.g.,
 * arbitrary gRPC metadata); as such, the Tracer implementation should use
 * a prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
constants.FORMAT_TEXT_MAP = 'text_map';
/**
 * The FORMAT_HTTP_HEADERS format represents SpanContexts using a
 * character-restricted string->string map (backed by a Javascript Object)
 * as a carrier.
 *
 * Keys and values in the FORMAT_HTTP_HEADERS carrier must be suitable for
 * use as HTTP headers (without modification or further escaping). That is,
 * the keys have a greatly restricted character set, casing for the keys
 * may not be preserved by various intermediaries, and the values should be
 * URL-escaped.
 *
 * The FORMAT_HTTP_HEADERS carrier map may contain unrelated data (e.g.,
 * arbitrary HTTP headers); as such, the Tracer implementation should use a
 * prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
constants.FORMAT_HTTP_HEADERS = 'http_headers';
/**
 * A Span may be the "child of" a parent Span. In a “child of” reference,
 * the parent Span depends on the child Span in some capacity.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
constants.REFERENCE_CHILD_OF = 'child_of';
/**
 * Some parent Spans do not depend in any way on the result of their child
 * Spans. In these cases, we say merely that the child Span “follows from”
 * the parent Span in a causal sense.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
constants.REFERENCE_FOLLOWS_FROM = 'follows_from';

var reference = {};

var hasRequiredReference;

function requireReference () {
	if (hasRequiredReference) return reference;
	hasRequiredReference = 1;
	Object.defineProperty(reference, "__esModule", { value: true });
	var span_1 = requireSpan();
	/**
	 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
	 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
	 *
	 * See the exported childOf() and followsFrom() functions at the package level.
	 */
	var Reference = /** @class */ (function () {
	    /**
	     * Initialize a new Reference instance.
	     *
	     * @param {string} type - the Reference type constant (e.g.,
	     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
	     * @param {SpanContext} referencedContext - the SpanContext being referred
	     *        to. As a convenience, a Span instance may be passed in instead
	     *        (in which case its .context() is used here).
	     */
	    function Reference(type, referencedContext) {
	        this._type = type;
	        this._referencedContext = (referencedContext instanceof span_1.default ?
	            referencedContext.context() :
	            referencedContext);
	    }
	    /**
	     * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
	     *         REFERENCE_FOLLOWS_FROM).
	     */
	    Reference.prototype.type = function () {
	        return this._type;
	    };
	    /**
	     * @return {SpanContext} The SpanContext being referred to (e.g., the
	     *         parent in a REFERENCE_CHILD_OF Reference).
	     */
	    Reference.prototype.referencedContext = function () {
	        return this._referencedContext;
	    };
	    return Reference;
	}());
	reference.default = Reference;
	
	return reference;
}

var hasRequiredFunctions;

function requireFunctions () {
	if (hasRequiredFunctions) return functions;
	hasRequiredFunctions = 1;
	Object.defineProperty(functions, "__esModule", { value: true });
	var Constants = constants;
	var reference_1 = requireReference();
	var span_1 = requireSpan();
	/**
	 * Return a new REFERENCE_CHILD_OF reference.
	 *
	 * @param {SpanContext} spanContext - the parent SpanContext instance to
	 *        reference.
	 * @return a REFERENCE_CHILD_OF reference pointing to `spanContext`
	 */
	function childOf(spanContext) {
	    // Allow the user to pass a Span instead of a SpanContext
	    if (spanContext instanceof span_1.default) {
	        spanContext = spanContext.context();
	    }
	    return new reference_1.default(Constants.REFERENCE_CHILD_OF, spanContext);
	}
	functions.childOf = childOf;
	/**
	 * Return a new REFERENCE_FOLLOWS_FROM reference.
	 *
	 * @param {SpanContext} spanContext - the parent SpanContext instance to
	 *        reference.
	 * @return a REFERENCE_FOLLOWS_FROM reference pointing to `spanContext`
	 */
	function followsFrom(spanContext) {
	    // Allow the user to pass a Span instead of a SpanContext
	    if (spanContext instanceof span_1.default) {
	        spanContext = spanContext.context();
	    }
	    return new reference_1.default(Constants.REFERENCE_FOLLOWS_FROM, spanContext);
	}
	functions.followsFrom = followsFrom;
	
	return functions;
}

var hasRequiredTracer;

function requireTracer () {
	if (hasRequiredTracer) return tracer;
	hasRequiredTracer = 1;
	Object.defineProperty(tracer, "__esModule", { value: true });
	var Functions = requireFunctions();
	var Noop = requireNoop();
	var span_1 = requireSpan();
	/**
	 * Tracer is the entry-point between the instrumentation API and the tracing
	 * implementation.
	 *
	 * The default object acts as a no-op implementation.
	 *
	 * Note to implementators: derived classes can choose to directly implement the
	 * methods in the "OpenTracing API methods" section, or optionally the subset of
	 * underscore-prefixed methods to pick up the argument checking and handling
	 * automatically from the base class.
	 */
	var Tracer = /** @class */ (function () {
	    function Tracer() {
	    }
	    // ---------------------------------------------------------------------- //
	    // OpenTracing API methods
	    // ---------------------------------------------------------------------- //
	    /**
	     * Starts and returns a new Span representing a logical unit of work.
	     *
	     * For example:
	     *
	     *     // Start a new (parentless) root Span:
	     *     var parent = Tracer.startSpan('DoWork');
	     *
	     *     // Start a new (child) Span:
	     *     var child = Tracer.startSpan('load-from-db', {
	     *         childOf: parent.context(),
	     *     });
	     *
	     *     // Start a new async (FollowsFrom) Span:
	     *     var child = Tracer.startSpan('async-cache-write', {
	     *         references: [
	     *             opentracing.followsFrom(parent.context())
	     *         ],
	     *     });
	     *
	     * @param {string} name - the name of the operation (REQUIRED).
	     * @param {SpanOptions} [options] - options for the newly created span.
	     * @return {Span} - a new Span object.
	     */
	    Tracer.prototype.startSpan = function (name, options) {
	        if (options === void 0) { options = {}; }
	        // Convert options.childOf to fields.references as needed.
	        if (options.childOf) {
	            // Convert from a Span or a SpanContext into a Reference.
	            var childOf = Functions.childOf(options.childOf);
	            if (options.references) {
	                options.references.push(childOf);
	            }
	            else {
	                options.references = [childOf];
	            }
	            delete (options.childOf);
	        }
	        return this._startSpan(name, options);
	    };
	    /**
	     * Injects the given SpanContext instance for cross-process propagation
	     * within `carrier`. The expected type of `carrier` depends on the value of
	     * `format.
	     *
	     * OpenTracing defines a common set of `format` values (see
	     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
	     * an expected carrier type.
	     *
	     * Consider this pseudocode example:
	     *
	     *     var clientSpan = ...;
	     *     ...
	     *     // Inject clientSpan into a text carrier.
	     *     var headersCarrier = {};
	     *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
	     *     // Incorporate the textCarrier into the outbound HTTP request header
	     *     // map.
	     *     Object.assign(outboundHTTPReq.headers, headersCarrier);
	     *     // ... send the httpReq
	     *
	     * @param  {SpanContext} spanContext - the SpanContext to inject into the
	     *         carrier object. As a convenience, a Span instance may be passed
	     *         in instead (in which case its .context() is used for the
	     *         inject()).
	     * @param  {string} format - the format of the carrier.
	     * @param  {any} carrier - see the documentation for the chosen `format`
	     *         for a description of the carrier object.
	     */
	    Tracer.prototype.inject = function (spanContext, format, carrier) {
	        // Allow the user to pass a Span instead of a SpanContext
	        if (spanContext instanceof span_1.default) {
	            spanContext = spanContext.context();
	        }
	        return this._inject(spanContext, format, carrier);
	    };
	    /**
	     * Returns a SpanContext instance extracted from `carrier` in the given
	     * `format`.
	     *
	     * OpenTracing defines a common set of `format` values (see
	     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
	     * an expected carrier type.
	     *
	     * Consider this pseudocode example:
	     *
	     *     // Use the inbound HTTP request's headers as a text map carrier.
	     *     var headersCarrier = inboundHTTPReq.headers;
	     *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
	     *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
	     *
	     * @param  {string} format - the format of the carrier.
	     * @param  {any} carrier - the type of the carrier object is determined by
	     *         the format.
	     * @return {SpanContext}
	     *         The extracted SpanContext, or null if no such SpanContext could
	     *         be found in `carrier`
	     */
	    Tracer.prototype.extract = function (format, carrier) {
	        return this._extract(format, carrier);
	    };
	    // ---------------------------------------------------------------------- //
	    // Derived classes can choose to implement the below
	    // ---------------------------------------------------------------------- //
	    // NOTE: the input to this method is *always* an associative array. The
	    // public-facing startSpan() method normalizes the arguments so that
	    // all N implementations do not need to worry about variations in the call
	    // signature.
	    //
	    // The default behavior returns a no-op span.
	    Tracer.prototype._startSpan = function (name, fields) {
	        return Noop.span;
	    };
	    // The default behavior is a no-op.
	    Tracer.prototype._inject = function (spanContext, format, carrier) {
	    };
	    // The default behavior is to return a no-op SpanContext.
	    Tracer.prototype._extract = function (format, carrier) {
	        return Noop.spanContext;
	    };
	    return Tracer;
	}());
	tracer.Tracer = Tracer;
	tracer.default = Tracer;
	
	return tracer;
}

var hasRequiredNoop;

function requireNoop () {
	if (hasRequiredNoop) return noop$1;
	hasRequiredNoop = 1;
	Object.defineProperty(noop$1, "__esModule", { value: true });
	var span_1 = requireSpan();
	var span_context_1 = span_context;
	var tracer_1 = requireTracer();
	noop$1.tracer = null;
	noop$1.spanContext = null;
	noop$1.span = null;
	// Deferred initialization to avoid a dependency cycle where Tracer depends on
	// Span which depends on the noop tracer.
	function initialize() {
	    noop$1.tracer = new tracer_1.default();
	    noop$1.span = new span_1.default();
	    noop$1.spanContext = new span_context_1.default();
	}
	noop$1.initialize = initialize;
	
	return noop$1;
}

var mock_tracer$1 = {};

var mock_context = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(mock_context, "__esModule", { value: true });
var span_context_1 = span_context;
/**
 * OpenTracing Context implementation designed for use in
 * unit tests.
 */
var MockContext = /** @class */ (function (_super) {
    __extends$1(MockContext, _super);
    function MockContext(span) {
        var _this = _super.call(this) || this;
        // Store a reference to the span itself since this is a mock tracer
        // intended to make debugging and unit testing easier.
        _this._span = span;
        return _this;
    }
    MockContext.prototype.span = function () {
        return this._span;
    };
    return MockContext;
}(span_context_1.SpanContext));
mock_context.MockContext = MockContext;
mock_context.default = MockContext;

var mock_span = {};

var hasRequiredMock_span;

function requireMock_span () {
	if (hasRequiredMock_span) return mock_span;
	hasRequiredMock_span = 1;
	/* eslint-disable import/no-extraneous-dependencies */
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(mock_span, "__esModule", { value: true });
	var opentracing = requireLib();
	var mock_context_1 = mock_context;
	/**
	 * OpenTracing Span implementation designed for use in unit tests.
	 */
	var MockSpan = /** @class */ (function (_super) {
	    __extends(MockSpan, _super);
	    //------------------------------------------------------------------------//
	    // MockSpan-specific
	    //------------------------------------------------------------------------//
	    function MockSpan(tracer) {
	        var _this = _super.call(this) || this;
	        _this._mockTracer = tracer;
	        _this._uuid = _this._generateUUID();
	        _this._startMs = Date.now();
	        _this._finishMs = 0;
	        _this._operationName = '';
	        _this._tags = {};
	        _this._logs = [];
	        return _this;
	    }
	    //------------------------------------------------------------------------//
	    // OpenTracing implementation
	    //------------------------------------------------------------------------//
	    MockSpan.prototype._context = function () {
	        return new mock_context_1.default(this);
	    };
	    MockSpan.prototype._setOperationName = function (name) {
	        this._operationName = name;
	    };
	    MockSpan.prototype._addTags = function (set) {
	        var keys = Object.keys(set);
	        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	            var key = keys_1[_i];
	            this._tags[key] = set[key];
	        }
	    };
	    MockSpan.prototype._log = function (fields, timestamp) {
	        this._logs.push({
	            fields: fields,
	            timestamp: timestamp
	        });
	    };
	    MockSpan.prototype._finish = function (finishTime) {
	        this._finishMs = finishTime || Date.now();
	    };
	    MockSpan.prototype.uuid = function () {
	        return this._uuid;
	    };
	    MockSpan.prototype.operationName = function () {
	        return this._operationName;
	    };
	    MockSpan.prototype.durationMs = function () {
	        return this._finishMs - this._startMs;
	    };
	    MockSpan.prototype.tags = function () {
	        return this._tags;
	    };
	    MockSpan.prototype.tracer = function () {
	        return this._mockTracer;
	    };
	    MockSpan.prototype._generateUUID = function () {
	        var p0 = ("00000000" + Math.abs((Math.random() * 0xFFFFFFFF) | 0).toString(16)).substr(-8);
	        var p1 = ("00000000" + Math.abs((Math.random() * 0xFFFFFFFF) | 0).toString(16)).substr(-8);
	        return "" + p0 + p1;
	    };
	    MockSpan.prototype.addReference = function (ref) {
	    };
	    /**
	     * Returns a simplified object better for console.log()'ing.
	     */
	    MockSpan.prototype.debug = function () {
	        var obj = {
	            uuid: this._uuid,
	            operation: this._operationName,
	            millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
	        };
	        if (Object.keys(this._tags).length) {
	            obj.tags = this._tags;
	        }
	        return obj;
	    };
	    return MockSpan;
	}(opentracing.Span));
	mock_span.MockSpan = MockSpan;
	mock_span.default = MockSpan;
	
	return mock_span;
}

var mock_tracer = {};

var mock_report = {};

Object.defineProperty(mock_report, "__esModule", { value: true });
/**
 * Index a collection of reported MockSpans in a way that's easy to run unit
 * test assertions against.
 */
var MockReport = /** @class */ (function () {
    function MockReport(spans) {
        var _this = this;
        this.spans = spans;
        this.spansByUUID = {};
        this.spansByTag = {};
        this.debugSpans = [];
        this.unfinishedSpans = [];
        spans.forEach(function (span) {
            if (span._finishMs === 0) {
                _this.unfinishedSpans.push(span);
            }
            _this.spansByUUID[span.uuid()] = span;
            _this.debugSpans.push(span.debug());
            var tags = span.tags();
            Object.keys(tags).forEach(function (key) {
                var val = tags[key];
                _this.spansByTag[key] = _this.spansByTag[key] || {};
                _this.spansByTag[key][val] = _this.spansByTag[key][val] || [];
                _this.spansByTag[key][val].push(span);
            });
        });
    }
    MockReport.prototype.firstSpanWithTagValue = function (key, val) {
        var m = this.spansByTag[key];
        if (!m) {
            return null;
        }
        var n = m[val];
        if (!n) {
            return null;
        }
        return n[0];
    };
    return MockReport;
}());
mock_report.MockReport = MockReport;
mock_report.default = MockReport;

var hasRequiredMock_tracer$1;

function requireMock_tracer$1 () {
	if (hasRequiredMock_tracer$1) return mock_tracer;
	hasRequiredMock_tracer$1 = 1;
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(mock_tracer, "__esModule", { value: true });
	// TODO: Move mock-tracer to its own NPM package once it is complete and tested.
	var opentracing = requireLib();
	var mock_report_1 = mock_report;
	var mock_span_1 = requireMock_span();
	/**
	 * OpenTracing Tracer implementation designed for use in unit tests.
	 */
	var MockTracer = /** @class */ (function (_super) {
	    __extends(MockTracer, _super);
	    //------------------------------------------------------------------------//
	    // MockTracer-specific
	    //------------------------------------------------------------------------//
	    function MockTracer() {
	        var _this = _super.call(this) || this;
	        _this._spans = [];
	        return _this;
	    }
	    //------------------------------------------------------------------------//
	    // OpenTracing implementation
	    //------------------------------------------------------------------------//
	    MockTracer.prototype._startSpan = function (name, fields) {
	        // _allocSpan is given it's own method so that derived classes can
	        // allocate any type of object they want, but not have to duplicate
	        // the other common logic in startSpan().
	        var span = this._allocSpan();
	        span.setOperationName(name);
	        this._spans.push(span);
	        if (fields.references) {
	            for (var _i = 0, _a = fields.references; _i < _a.length; _i++) {
	                var ref = _a[_i];
	                span.addReference(ref);
	            }
	        }
	        // Capture the stack at the time the span started
	        span._startStack = new Error().stack;
	        return span;
	    };
	    MockTracer.prototype._inject = function (span, format, carrier) {
	        throw new Error('NOT YET IMPLEMENTED');
	    };
	    MockTracer.prototype._extract = function (format, carrier) {
	        throw new Error('NOT YET IMPLEMENTED');
	    };
	    MockTracer.prototype._allocSpan = function () {
	        return new mock_span_1.default(this);
	    };
	    /**
	     * Discard any buffered data.
	     */
	    MockTracer.prototype.clear = function () {
	        this._spans = [];
	    };
	    /**
	     * Return the buffered data in a format convenient for making unit test
	     * assertions.
	     */
	    MockTracer.prototype.report = function () {
	        return new mock_report_1.default(this._spans);
	    };
	    return MockTracer;
	}(opentracing.Tracer));
	mock_tracer.MockTracer = MockTracer;
	mock_tracer.default = MockTracer;
	
	return mock_tracer;
}

var hasRequiredMock_tracer;

function requireMock_tracer () {
	if (hasRequiredMock_tracer) return mock_tracer$1;
	hasRequiredMock_tracer = 1;
	Object.defineProperty(mock_tracer$1, "__esModule", { value: true });
	var mock_context_1 = mock_context;
	mock_tracer$1.MockContext = mock_context_1.default;
	var mock_span_1 = requireMock_span();
	mock_tracer$1.MockSpan = mock_span_1.default;
	var mock_tracer_1 = requireMock_tracer$1();
	mock_tracer$1.MockTracer = mock_tracer_1.default;
	
	return mock_tracer$1;
}

var global_tracer = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(global_tracer, "__esModule", { value: true });
var tracer_1 = requireTracer();
var noopTracer = new tracer_1.default();
var _globalTracer = null;
// Allows direct importing/requiring of the global tracer:
//
// let globalTracer = require('opentracing/global');
//      OR
// import globalTracer from 'opentracing/global';
//
// Acts a bridge to the global tracer that can be safely called before the
// global tracer is initialized. The purpose of the delegation is to avoid the
// sometimes nearly intractible initialization order problems that can arise in
// applications with a complex set of dependencies, while also avoiding the
// case where
var GlobalTracerDelegate = /** @class */ (function (_super) {
    __extends(GlobalTracerDelegate, _super);
    function GlobalTracerDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalTracerDelegate.prototype.startSpan = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.startSpan.apply(tracer, arguments);
    };
    GlobalTracerDelegate.prototype.inject = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.inject.apply(tracer, arguments);
    };
    GlobalTracerDelegate.prototype.extract = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.extract.apply(tracer, arguments);
    };
    return GlobalTracerDelegate;
}(tracer_1.default));
var globalTracerDelegate = new GlobalTracerDelegate();
/**
 * Set the global Tracer.
 *
 * The behavior is undefined if this function is called more than once.
 *
 * @param {Tracer} tracer - the Tracer implementation
 */
function initGlobalTracer(tracer) {
    _globalTracer = tracer;
}
global_tracer.initGlobalTracer = initGlobalTracer;
/**
 * Returns the global tracer.
 */
function globalTracer() {
    // Return the delegate.  Since the global tracer is largely a convenience
    // (the user can always create their own tracers), the delegate is used to
    // give the added convenience of not needing to worry about initialization
    // order.
    return globalTracerDelegate;
}
global_tracer.globalTracer = globalTracer;

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	(function (exports) {
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		Object.defineProperty(exports, "__esModule", { value: true });
		var binary_carrier_1 = binary_carrier;
		exports.BinaryCarrier = binary_carrier_1.default;
		var Tags = tags;
		exports.Tags = Tags;
		var Noop = requireNoop();
		var reference_1 = requireReference();
		exports.Reference = reference_1.default;
		var span_1 = requireSpan();
		exports.Span = span_1.default;
		var span_context_1 = span_context;
		exports.SpanContext = span_context_1.default;
		var tracer_1 = requireTracer();
		exports.Tracer = tracer_1.Tracer;
		var mock_tracer_1 = requireMock_tracer();
		exports.MockTracer = mock_tracer_1.MockTracer;
		__export(global_tracer);
		__export(constants);
		__export(requireFunctions());
		// Initialize the noops last to avoid a dependecy cycle between the classes.
		Noop.initialize();
		
	} (lib));
	return lib;
}

var libExports = requireLib();

class ApiError {
  constructor(message, code, response) {
    this.message = message;
    this.response = response;
    this.code = code;
  }
  get reason() {
    return this.response;
  }
}

var __defProp$j = Object.defineProperty;
var __defProps$c = Object.defineProperties;
var __getOwnPropDescs$c = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$c = (a, b) => __defProps$c(a, __getOwnPropDescs$c(b));
const normalizeSlashUrl = (baseURL = "", url) => {
  const normalizedBaseUrl = baseURL.endsWith("/") ? baseURL.slice(0, baseURL.length - 1) : baseURL;
  const normalizedPath = url.startsWith("/") ? url.slice(1) : url;
  return `${normalizedBaseUrl}/${normalizedPath}`;
};
const DEFAULT_ERROR_MESSAGE = "\u0110\xE3 c\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng th\u1EED l\u1EA1i sau!";
class Api {
  constructor(url, getError, defaultConfig = {}) {
    this.baseURL = url;
    this.interceptors = [];
    this.getError = getError;
    this.defaultConfig = defaultConfig;
  }
  _parseJson(response) {
    return response.text().then((text) => text ? JSON.parse(text) : null);
  }
  addInterceptor(interceptFn) {
    this.interceptors.push(interceptFn);
  }
  appendParamsToURL(url, params = {}) {
    if (params) {
      const paramsArr = [];
      for (const k of Object.keys(params)) {
        if (params[k] !== null && params[k] !== void 0) {
          paramsArr.push(`${k}=${encodeURIComponent(params[k])}`);
        }
      }
      if (paramsArr.length > 0)
        url = `${url}?${paramsArr.join("&")}`;
    }
    return url;
  }
  async request(path, body, method, config = {}) {
    var _a;
    const { params: configParams } = config;
    let headers = config.headers || {};
    const url = this.appendParamsToURL(path, configParams || {});
    let serializedBody = null;
    const isFormData = body && typeof body !== "string" && "append" in body;
    if (body) {
      if (typeof body !== "string") {
        if (isFormData) {
          serializedBody = new URLSearchParams(body).toString();
        } else {
          serializedBody = JSON.stringify(body);
          headers = __spreadValues$i({
            "Content-Type": "application/json"
          }, headers);
        }
      }
    }
    let serializedParams = null;
    if (configParams) {
      serializedParams = JSON.stringify(configParams);
    }
    const tracer = libExports.globalTracer();
    const spanName = `[${method}] ${normalizeSlashUrl(this.baseURL, path)}`;
    const span = tracer.startSpan(spanName);
    tracer.inject(span, libExports.FORMAT_HTTP_HEADERS, headers);
    span.setTag("http.method", method);
    span.setTag("http.baseurl", this.baseURL);
    span.log({
      body: serializedBody,
      params: serializedParams
    });
    const requestObj = __spreadProps$c(__spreadValues$i({}, this.defaultConfig), {
      method,
      headers: new Headers(headers),
      body: isFormData ? body : serializedBody
    });
    this.interceptors.forEach((fn) => fn(requestObj));
    const res = await fetch(
      url.startsWith("http") ? url : normalizeSlashUrl(this.baseURL, url),
      requestObj
    );
    if (res.status >= 400) {
      const resp = await res.json();
      const error = ((_a = this.getError) == null ? void 0 : _a.call(this, resp)) || new ApiError(DEFAULT_ERROR_MESSAGE, -1, resp);
      span.setTag("status", "error");
      span.log({
        error: JSON.stringify(error)
      });
      span.finish();
      return Promise.reject(error);
    }
    const respHeaders = {};
    res.headers.forEach((val, key) => respHeaders[key] = val);
    const data = await this._parseJson(res);
    span.setTag("status", "success");
    span.finish();
    return { code: res.status, data, headers: respHeaders };
  }
  async get(url, config = {}) {
    return await this.request(url, null, "GET", config);
  }
  async post(url, body, config = {}) {
    return await this.request(url, body, "POST", config);
  }
  async patch(url, body, config = {}) {
    return await this.request(url, body, "PATCH", config);
  }
  async put(url, body, config = {}) {
    return await this.request(url, body, "PUT", config);
  }
  async delete(url, body = {}, config = {}) {
    return await this.request(url, body, "DELETE", config);
  }
}

var __defProp$i = Object.defineProperty;
var __defProps$b = Object.defineProperties;
var __getOwnPropDescs$b = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$b = (a, b) => __defProps$b(a, __getOwnPropDescs$b(b));
var __objRest$6 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
class Builder {
  init(domain, config) {
    this.domain = domain;
    if (!config.env) {
      config.env = "production";
    }
    this.pageManagementClient = new Api(publicBffUrl[config.env]);
    this.internalClient = new Api(publicBffUrl.internal);
  }
  async getPublicPage(params, internal = false) {
    const client = internal ? this.internalClient : this.pageManagementClient;
    const { data } = await client.get("/v1/page", {
      params: __spreadProps$b(__spreadValues$h({}, params), {
        domain: this.domain
      })
    });
    return data == null ? void 0 : data.data;
  }
  async getPublicPageV2(params, internal = false) {
    var _b, _c, _d;
    const client = internal ? this.internalClient : this.pageManagementClient;
    const _a = params, { languageCode, slug, password } = _a, rest = __objRest$6(_a, ["languageCode", "slug", "password"]);
    const { data } = await client.get("/v1/page", {
      params: __spreadProps$b(__spreadValues$h({}, rest), {
        slug,
        domain: this.domain
      }),
      headers: {
        "Accept-Language": languageCode || "*",
        "x-password": password
      }
    });
    return __spreadProps$b(__spreadValues$h({}, (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.page), {
      pbConfig: (_d = (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.page) == null ? void 0 : _d.content
    });
  }
  async getPrivatePageV2(params, headers) {
    var _a, _b, _c;
    const client = this.pageManagementClient;
    const { data } = await client.get("/v1/page", {
      params: __spreadProps$b(__spreadValues$h({}, params), {
        domain: this.domain
      }),
      headers
    });
    return __spreadProps$b(__spreadValues$h({}, (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.page), {
      pbConfig: (_c = (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.page) == null ? void 0 : _c.content
    });
  }
  getSSRInputs(pbConfig, option) {
    const { device = "desktop", ssrComponentTags, getSlotDataFunc } = option;
    return Object.keys(pbConfig).filter((k) => {
      return ssrComponentTags.includes(pbConfig[k].tag);
    }).map((k) => ({
      key: k,
      data: getSlotDataFunc(pbConfig[k], device)
    })).reduce(
      (acc, curr) => __spreadProps$b(__spreadValues$h({}, acc), {
        [curr.key]: curr.data
      }),
      {}
    );
  }
}
Builder.ITEMS_PER_PAGE = 18;
const builder = new Builder();

const React$8 = await importShared('react');
const {useMemo: useMemo$6,useContext: useContext$4} = React$8;


var __defProp$h = Object.defineProperty;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const StoreStateContext = React$8.createContext(
  {}
);
const StoreProvider = (_a) => {
  var _b = _a, {
    children,
    device = "desktop"
  } = _b, rest = __objRest$5(_b, [
    "children",
    "device"
  ]);
  var _a2, _b2;
  const menu = (_a2 = rest.globalData) == null ? void 0 : _a2.menu;
  const prefixLangUrl = ((_b2 = rest.globalData) == null ? void 0 : _b2.prefixLangUrl) || "";
  const mappingWebsiteMenuHref = useMemo$6(() => {
    const getHref = (item) => {
      if (!item)
        return;
      if (item.linkType === "LINK")
        return item.href;
      const { slug, isHomepage } = item.page || {};
      if (!slug && !isHomepage)
        return;
      return prefixLangUrl + `/` + (slug || "");
    };
    return menu == null ? void 0 : menu.reduce((acc, curr) => {
      acc[curr == null ? void 0 : curr.id] = getHref(curr);
      return acc;
    }, {});
  }, [JSON.stringify(menu)]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StoreStateContext.Provider, {
    value: __spreadValues$g({ device, mappingWebsiteMenuHref }, rest),
    children
  });
};
function useStore() {
  const context = useContext$4(
    StoreStateContext
  );
  if (!context) {
    throw new Error(
      "useStore must be inside a StoreStateContext with a state value"
    );
  }
  return context;
}

const reset = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.3;
    color: unset;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #0d6efd;
    text-decoration: none;
  }

  a:hover {
    color: #024dbc;
  }

  a:not([href]),
  a:not([href]):hover {
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 1em;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: none;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: textfield;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
    white-space: normal;
  }

  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }

  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0px;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  @media (max-width: 767px) {
    .hidden-xs {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .hidden-md {
      display: none !important;
    }
  }
`;

const rcCascaderCss = `
.rc-cascader {
  font-size: 12px;
}
.rc-cascader-menus {
  font-size: 12px;
  overflow: hidden;
  background: #fff;
  position: absolute;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0,0,0,0.17);
  white-space: nowrap;
}
.rc-cascader-menus-hidden {
  display: none;
}
.rc-cascader-menus.slide-up-enter, .rc-cascader-menus.slide-up-appear {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08,0.82,0.17,1);
  animation-play-state: paused;
}
.rc-cascader-menus.slide-up-leave {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6,0.04,0.98,0.34);
  animation-play-state: paused;
}
.rc-cascader-menus.slide-up-enter.slide-up-enter-active.rc-cascader-menus-placement-bottomLeft, .rc-cascader-menus.slide-up-appear.slide-up-appear-active.rc-cascader-menus-placement-bottomLeft {
  animation-name: SlideUpIn;
  animation-play-state: running;
}
.rc-cascader-menus.slide-up-enter.slide-up-enter-active.rc-cascader-menus-placement-topLeft, .rc-cascader-menus.slide-up-appear.slide-up-appear-active.rc-cascader-menus-placement-topLeft {
  animation-name: SlideDownIn;
  animation-play-state: running;
}
.rc-cascader-menus.slide-up-leave.slide-up-leave-active.rc-cascader-menus-placement-bottomLeft {
  animation-name: SlideUpOut;
  animation-play-state: running;
}
.rc-cascader-menus.slide-up-leave.slide-up-leave-active.rc-cascader-menus-placement-topLeft {
  animation-name: SlideDownOut;
  animation-play-state: running;
}
.rc-cascader-menu {
  display: inline-block;
  height: 192px;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-right:1em
  border-right: 1px solid #e9e9e9;
  overflow: auto;
}
.rc-cascader-menu:last-child {
  border-right: 0;
}
.rc-cascader-menu-item {
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
  position: relative;
}
.rc-cascader-menu-item:hover {
  background: #2db6f5e7;
}
.rc-cascader-menu-item-disabled {
  cursor: not-allowed;
  color: #ccc;
}
.rc-cascader-menu-item-disabled:hover {
  background: transparent;
}
.rc-cascader-menu-item-loading:after {
  position: absolute;
  right: 12px;
  content: 'loading';
  color: #aaa;
  font-style: italic;
}
.rc-cascader-menu-item-active {
  background:  #2db6f5dd;
}
.rc-cascader-menu-item-active:hover {
  background:  #2db6f5e7;
}
.rc-cascader-menu-item-expand {
  position: relative;
}
.rc-cascader-menu-item-expand-icon {
  font-size: 12px;
  color: #999;
  position: absolute;
  right: 16px;
  line-height: 32px;
}
@keyframes SlideUpIn {
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(.8);
 }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
 }
}
@keyframes SlideUpOut {
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
 }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0.8);
 }
}
@keyframes SlideDownIn {
  0% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0.8);
 }
  100% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
 }
}
@keyframes SlideDownOut {
  0% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
 }
  100% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0.8);
 }
}

`;

const animationCss = `
    .animation-hidden {
        visibility: hidden!important;
        opacity: 0!important;
    }

    @keyframes bg-marquee-horizontal {
        0% {
          background-position-x: 0;
        }
      
        100% {
          background-position-x: -99999px;
        }
      }
  
      @keyframes bg-marquee-vertical {
        0% {
          background-position-y: 0;
        }
      
        100% {
          background-position-y: -99999px;
        }
    }
`;

const ROOT = "ROOT";
const ROOT_SELECTOR_NAME = "RootEditor";
const HEADER = "HEADER";
const FOOTER = "FOOTER";
const BUBBLE = "BUBBLE";
const ARTICLE_HEADER = "ARTICLE_HEADER";
const MINESTONE_M_WIDTH = 768;
const MAX_DPR = 5;
const COMPONENT_TAG = {
  SECTION: "section",
  ROW: "row",
  POPUP: "popupv1",
  BUBBLE: "contactbubble"
};
const TEMPI_MAIN_IFRAME = "tempi-main-iframe";

var RepeatTypeEnum = /* @__PURE__ */ ((RepeatTypeEnum2) => {
  RepeatTypeEnum2["DAILY"] = "DAILY";
  RepeatTypeEnum2["DAY_IN_WEEK"] = "DAY_IN_WEEK";
  RepeatTypeEnum2["CUSTOM"] = "CUSTOM";
  RepeatTypeEnum2["NO_REPEAT"] = "NO_REPEAT";
  return RepeatTypeEnum2;
})(RepeatTypeEnum || {});
var UnitRepeatEnum = /* @__PURE__ */ ((UnitRepeatEnum2) => {
  UnitRepeatEnum2["DAY"] = "DAILY";
  UnitRepeatEnum2["WEEK"] = "WEEKLY";
  UnitRepeatEnum2["MONTH"] = "MONTH";
  UnitRepeatEnum2["YEAR"] = "YEAR";
  UnitRepeatEnum2["DURATION"] = "DURATION";
  return UnitRepeatEnum2;
})(UnitRepeatEnum || {});
var RuleRepeatEnum = /* @__PURE__ */ ((RuleRepeatEnum2) => {
  RuleRepeatEnum2["FREQ"] = "FREQ";
  RuleRepeatEnum2["INTERVAL"] = "INTERVAL";
  RuleRepeatEnum2["BYDAY"] = "BYDAY";
  RuleRepeatEnum2["UNTIL"] = "UNTIL";
  return RuleRepeatEnum2;
})(RuleRepeatEnum || {});

const formatDate = (date) => {
  if (!date)
    return void 0;
  return new Date(date).toISOString();
};
const parseRuleRepeat = (field, ruleRepeat) => {
  var _a;
  const regex = new RegExp(`(${field}:)[^;]+(?=;)`, "g");
  const result = ruleRepeat.match(regex);
  return (result == null ? void 0 : result.length) > 0 ? (_a = result[0]) == null ? void 0 : _a.replaceAll(`${field}:`, "") : void 0;
};
const validateIsVisibleComponent = ({
  startTime,
  endTime,
  ruleRepeat,
  date,
  duration
}) => {
  var _a;
  const now = new Date().toISOString();
  const formattedStartTime = formatDate(startTime);
  const formattedEndTime = formatDate(endTime);
  if (formattedStartTime && now < formattedStartTime) {
    return false;
  }
  if (formattedEndTime && now >= formattedEndTime) {
    return false;
  }
  if (ruleRepeat) {
    const interval = parseRuleRepeat(RuleRepeatEnum.INTERVAL, ruleRepeat) ? parseInt(parseRuleRepeat(RuleRepeatEnum.INTERVAL, ruleRepeat)) : 1;
    const freq = parseRuleRepeat(RuleRepeatEnum.FREQ, ruleRepeat);
    const until = parseRuleRepeat(RuleRepeatEnum.UNTIL, ruleRepeat);
    const byDay = parseRuleRepeat(RuleRepeatEnum.BYDAY, ruleRepeat);
    if (date && now < dayjs(date).hour(0).minute(0).second(0).toISOString())
      return false;
    if (until && now > formatDate(until))
      return false;
    let isDateVisible = true;
    const isValidTime = (unit) => {
      if (interval === 1 && (unit === "day" || unit === "week"))
        return true;
      const dateDiff = date ? dayjs(now).diff(date, unit) : -1;
      return dateDiff >= 0 && dateDiff % interval === 0;
    };
    switch (freq) {
      case UnitRepeatEnum.DAY:
        isDateVisible = isValidTime("day");
        break;
      case UnitRepeatEnum.WEEK:
        isDateVisible = isValidTime("week") && ((_a = byDay == null ? void 0 : byDay.split(",")) == null ? void 0 : _a.includes(dayjs(now).day().toString()));
        break;
      case UnitRepeatEnum.MONTH:
        isDateVisible = isValidTime("month") && dayjs(now).get("date") === dayjs(date).get("date");
        break;
      case UnitRepeatEnum.YEAR:
        isDateVisible = isValidTime("year") && dayjs(now).get("date") === dayjs(date).get("date") && dayjs(now).get("month") === dayjs(date).get("month");
        break;
    }
    if (!isDateVisible)
      return false;
    if (duration && (duration[0] && dayjs(now).hour() * 60 + dayjs(now).minute() < duration[0] || duration[1] && dayjs(now).hour() * 60 + dayjs(now).minute() >= duration[1]))
      return false;
  }
  return true;
};
const calculateTimeDelta = (startTime, endTime) => {
  const fromTimestamp = startTime.getTime();
  const endTimestamp = endTime.getTime();
  const durationInSecond = Math.max(
    0,
    Math.round((endTimestamp - fromTimestamp) / 1e3)
  );
  return {
    durationInSecond,
    days: Math.floor(durationInSecond / (3600 * 24)),
    hours: Math.floor(durationInSecond / 3600 % 24),
    minutes: Math.floor(durationInSecond / 60 % 60),
    seconds: Math.floor(durationInSecond % 60)
  };
};

const React$7 = await importShared('react');
const {useState: useState$d,useEffect: useEffect$d,useMemo: useMemo$5} = React$7;

var __defProp$g = Object.defineProperty;
var __defProps$a = Object.defineProperties;
var __getOwnPropDescs$a = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$a = (a, b) => __defProps$a(a, __getOwnPropDescs$a(b));
const BuilderComponent = (props) => {
  const {
    content,
    configs,
    ssrData = {},
    mappingDynamicSlots,
    rootId = "ROOT",
    componentDict,
    addGlobalStyle = true,
    numOfHydratedBlocks,
    addLandingLinks = true
  } = props;
  const [clientSide, setClientSide] = useState$d(false);
  useEffect$d(() => {
    setClientSide(true);
  }, []);
  const newContent = useMemo$5(() => {
    return Object.entries(content).reduce((acc, [k, compData]) => {
      var _a, _b;
      const { startTime, endTime, ruleRepeat, date, duration } = compData;
      const props2 = __spreadValues$f(__spreadProps$a(__spreadValues$f({}, compData.customAttributes[compData.tag] || {}), {
        commonStyle: compData.style || {},
        id: compData.elementId,
        "data-id": compData.elementId,
        "data-uniq-id": compData.id,
        dataUniqId: compData.id
      }), configs);
      const clsName = clsx({
        "hidden-xs": (_a = props2 == null ? void 0 : props2.responsive) == null ? void 0 : _a.hiddenXs,
        "hidden-md": (_b = props2 == null ? void 0 : props2.responsive) == null ? void 0 : _b.hiddenMd
      });
      const isVisible = validateIsVisibleComponent({
        startTime,
        endTime,
        ruleRepeat,
        date,
        duration
      });
      acc[k] = __spreadProps$a(__spreadValues$f({}, compData), {
        props: props2,
        clsName,
        isVisible
      });
      return acc;
    }, {});
  }, [JSON.stringify(content)]);
  const renderComponent = (id) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const comp = componentDict[(_a = newContent == null ? void 0 : newContent[id]) == null ? void 0 : _a.tag];
    let returnComp;
    if (!componentDict[(_b = newContent == null ? void 0 : newContent[id]) == null ? void 0 : _b.tag]) {
      console.warn(
        "Cannot found component: " + ((_d = (_c = newContent == null ? void 0 : newContent[id]) == null ? void 0 : _c.tag) == null ? void 0 : _d.toString())
      );
      return null;
    }
    if (!((_e = newContent == null ? void 0 : newContent[id]) == null ? void 0 : _e.isVisible)) {
      return null;
    }
    if ((_g = (_f = newContent == null ? void 0 : newContent[id]) == null ? void 0 : _f.children) == null ? void 0 : _g.length) {
      let totalHydratedBlocks = 0;
      returnComp = React$7.createElement(
        comp,
        __spreadValues$f({
          key: id,
          ssrData: ssrData[id],
          className: (_h = newContent[id]) == null ? void 0 : _h.clsName
        }, (_i = newContent[id]) == null ? void 0 : _i.props),
        newContent[id].children.map((childId, idx) => {
          var _a2;
          if (id === ROOT) {
            if (typeof numOfHydratedBlocks === "undefined") {
              return renderComponent(childId);
            }
            const isDefaultHydratedNode = [
              COMPONENT_TAG.BUBBLE,
              COMPONENT_TAG.POPUP
            ].includes((_a2 = newContent[childId]) == null ? void 0 : _a2.tag);
            if (totalHydratedBlocks < numOfHydratedBlocks || isDefaultHydratedNode) {
              totalHydratedBlocks++;
              return renderComponent(childId);
            }
            if (clientSide) {
              return renderComponent(childId);
            }
            return null;
          }
          return renderComponent(childId);
        })
      );
    } else {
      returnComp = React$7.createElement(comp, __spreadValues$f({
        key: id,
        ssrData: ssrData[id],
        className: (_j = newContent[id]) == null ? void 0 : _j.clsName
      }, (_k = newContent[id]) == null ? void 0 : _k.props));
    }
    return returnComp;
  };
  if (!(content == null ? void 0 : content[rootId]))
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StoreProvider, __spreadProps$a(__spreadValues$f({
    mappingDynamicSlots
  }, configs), {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        addGlobalStyle && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
              styles: reset
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
              styles: rcCascaderCss
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
              styles: animationCss
            })
          ]
        }),
        addLandingLinks && /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLinks, {}),
        renderComponent(rootId)
      ]
    })
  }));
};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

const colorName$1 = /*@__PURE__*/getDefaultExportFromCjs(colorName);

const float = "-?\\d*(?:\\.\\d+)";
const number = `(${float}?)`;
const percentage = `(${float}?%)`;
const numberOrPercentage = `(${float}?%?)`;
const pattern1 = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
const hexRe = new RegExp(pattern1, "i");
const pattern2 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
const hsl3Re = new RegExp(pattern2);
const pattern3 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
const hsl4Re = new RegExp(pattern3);
const pattern4 = `^
  rgba?\\(
    \\s*${number}\\s*,
    \\s*${number}\\s*,
    \\s*${number}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
const rgb3NumberRe = new RegExp(pattern4);
const pattern5 = `^
  rgba?\\(
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
const rgb3PercentageRe = new RegExp(pattern5);
const pattern6 = `^
  rgba?\\(
    \\s*${number}
    \\s+${number}
    \\s+${number}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
const rgb4NumberRe = new RegExp(pattern6);
const pattern7 = `^
  rgba?\\(
    \\s*${percentage}
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
const rgb4PercentageRe = new RegExp(pattern7);
const pattern8 = /^transparent$/;
const transparentRe = new RegExp(pattern8, "i");

const hexCharacters = "a-f\\d";
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
function hex2Rgb(hex, options = { format: void 0 }) {
  if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError("Expected a valid hex string");
  }
  hex = hex.replace(/^#/, "");
  let alpha = 1;
  if (hex.length === 8) {
    alpha = Math.floor(Number.parseInt(hex.slice(6, 8), 16) / 255 * 100) / 100;
    hex = hex.slice(0, 6);
  }
  if (hex.length === 4) {
    alpha = Math.floor(Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255 * 100) / 100;
    hex = hex.slice(0, 3);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = number >> 8 & 255;
  const blue = number & 255;
  if (options.format === "array") {
    return [red, green, blue, alpha];
  }
  if (options.format === "css") {
    const alphaString = alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`;
    return `rgb(${red} ${green} ${blue}${alphaString})`;
  }
  return { red, green, blue, alpha };
}

const clamp$2 = (num, min, max) => Math.min(Math.max(min, num), max);
const parseRGB = (num) => {
  let n = num;
  if (typeof n !== "number")
    n = n.endsWith("%") ? parseFloat(n) * 255 / 100 : parseFloat(n);
  return clamp$2(Math.round(n), 0, 255);
};
const parsePercentage$1 = (percentage) => clamp$2(parseFloat(percentage), 0, 100);
function parseAlpha(alpha) {
  let a = alpha;
  if (typeof a !== "number")
    a = a.endsWith("%") ? parseFloat(a) / 100 : parseFloat(a);
  return clamp$2(a, 0, 1);
}
function getHEX(hex) {
  const [r, g, b, a] = hex2Rgb(hex, { format: "array" });
  return getRGB([null, ...[r, g, b, a]]);
}
function getHSL([, h, s, l, a = 1]) {
  let hh = h;
  if (hh.endsWith("turn")) {
    hh = parseFloat(hh) * 360 / 1;
  } else if (hh.endsWith("rad")) {
    hh = Math.round(parseFloat(hh) * 180 / Math.PI);
  } else {
    hh = parseFloat(hh);
  }
  return {
    type: "hsl",
    values: [hh, parsePercentage$1(s), parsePercentage$1(l)],
    alpha: parseAlpha(a === null ? 1 : a)
  };
}
function getRGB([, r, g, b, a = 1]) {
  return {
    type: "rgb",
    values: [r, g, b].map(parseRGB),
    alpha: parseAlpha(a === null ? 1 : a)
  };
}

const parseCSSColor = (str) => {
  if (typeof str !== "string")
    return null;
  const hex = hexRe.exec(str);
  if (hex)
    return getHEX(hex[0]);
  const hsl = hsl4Re.exec(str) || hsl3Re.exec(str);
  if (hsl)
    return getHSL(hsl);
  const rgb = rgb4NumberRe.exec(str) || rgb4PercentageRe.exec(str) || rgb3NumberRe.exec(str) || rgb3PercentageRe.exec(str);
  if (rgb)
    return getRGB(rgb);
  if (transparentRe.exec(str))
    return getRGB([null, 0, 0, 0, 0]);
  const cn = colorName$1[str.toLowerCase()];
  if (cn)
    return getRGB([null, cn[0], cn[1], cn[2], 1]);
  return null;
};
var parse$1 = parseCSSColor;

function clamp$1(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
function hsl2rgb(hsl) {
  const h = hsl[0] / 360, s = hsl[1] / 100, l = hsl[2] / 100;
  let t2, t3, val;
  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;
    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;
    rgb[i] = val * 255;
  }
  return rgb;
}
function componentToHex(c) {
  const value = Math.round(clamp$1(c, 0, 255));
  const hex = value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgb2hex(rgb) {
  const alpha = rgb.length === 4 ? componentToHex(rgb[3] * 255) : "";
  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + alpha;
}
function rgb2hsl(rgb) {
  const r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), delta = max - min;
  let h, s;
  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;
  h = Math.min(h * 60, 360);
  if (h < 0)
    h += 360;
  const l = (min + max) / 2;
  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);
  return [h, s * 100, l * 100];
}

function parseColor$1(color) {
  const res = parse$1(color);
  if (res === null)
    return null;
  if (res.type === "hsl")
    res.values = hsl2rgb(res.values);
  return res;
}
function mix(color1, color2, percentage = 50) {
  const c1 = parseColor$1(color1);
  const c2 = parseColor$1(color2);
  if (!c1 || !c2)
    return null;
  const p = Math.min(Math.max(0, percentage), 100) / 100;
  const w = p * 2 - 1;
  const a = c1.alpha - c2.alpha;
  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
  const w2 = 1 - w1;
  const [r, g, b] = c1.values.map(
    (c, i) => Math.round(c1.values[i] * w1 + c2.values[i] * w2)
  );
  const alpha = parseFloat((c1.alpha * p + c2.alpha * (1 - p)).toFixed(8));
  return {
    hex: rgb2hex([r, g, b]),
    hexa: rgb2hex([r, g, b, alpha]),
    rgba: [r, g, b, alpha],
    hsla: [...rgb2hsl([r, g, b]).map(Math.round), alpha]
  };
}

const defaultNumberParam = (v, d) => v === null || isNaN(v) || typeof v === "string" ? d : v;
class ColorCore {
  constructor(color = "#000", type = "base", weight = 0) {
    [this.rgb, this.alpha, this.type, this.weight] = [
      [0, 0, 0],
      1,
      type,
      weight
    ];
    const c = color === null ? "#000" : color;
    if (typeof c !== "string")
      throw new TypeError(`Input should be a string: ${c}`);
    const parsed = parse$1(c);
    if (!parsed)
      throw new Error(`Unable to parse color from string: ${c}`);
    return this[`_setFrom${parsed.type.toUpperCase()}`]([
      ...parsed.values,
      parsed.alpha
    ]);
  }
  get hex() {
    return this.hexString().replace(/^#/, "");
  }
  setColor(color) {
    const parsed = parse$1(color);
    if (!parsed)
      return null;
    return this[`_setFrom${parsed.type.toUpperCase()}`]([
      ...parsed.values,
      parsed.alpha
    ]);
  }
  tint(weight, w = defaultNumberParam(weight, 50)) {
    return new ColorCore(
      `rgb(${mix("#fff", this.rgbString(), w).rgba})`,
      "tint",
      w
    );
  }
  shade(weight, w = defaultNumberParam(weight, 50)) {
    return new ColorCore(
      `rgb(${mix("#000", this.rgbString(), w).rgba})`,
      "shade",
      w
    );
  }
  tints(weight, w = defaultNumberParam(weight, 10)) {
    return Array.from({ length: 100 / w }, (_, i) => this.tint((i + 1) * w));
  }
  shades(weight, w = defaultNumberParam(weight, 10)) {
    return Array.from({ length: 100 / w }, (_, i) => this.shade((i + 1) * w));
  }
  all(weight = 10) {
    return [
      ...this.tints(weight).reverse(),
      Object.assign(this),
      ...this.shades(weight)
    ];
  }
  hexString() {
    return rgb2hex(this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha]);
  }
  rgbString() {
    const channels = (this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha]).join(", ");
    return `${this.alpha >= 1 ? "rgb" : "rgba"}(${channels})`;
  }
  getBrightness() {
    return Math.round(this.rgb.reduce((a, b) => a + b) / (255 * 3) * 100);
  }
  _setFromRGB([r, g, b, a]) {
    [this.rgb, this.alpha] = [[r, g, b], a];
    return this;
  }
  _setFromHSL([h, s, l, a]) {
    [this.rgb, this.alpha] = [hsl2rgb([h, s, l]).map(Math.round), a];
    return this;
  }
}

const DEFAULT_WEIGHT = 5;
const valueOptions = {
  50: 1,
  100: 2,
  200: 4,
  500: 20,
  600: 22,
  700: 24
};
function generate(color, type = "") {
  const patterns = {};
  const pColors = new ColorCore(color).all(DEFAULT_WEIGHT);
  Object.keys(valueOptions).forEach((key) => {
    patterns[`${type}${key}`] = pColors[valueOptions[key]].hexString();
  });
  return patterns;
}

const {useState: useState$c,useEffect: useEffect$c} = await importShared('react');


const useIntersectionObserver = (elementRef, {
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false
}) => {
  const [isIntersected, setIsIntersected] = useState$c(false);
  const frozen = isIntersected && freezeOnceVisible;
  useEffect$c(() => {
    const node = elementRef == null ? void 0 : elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node)
      return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersected(entry.isIntersecting);
    }, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef == null ? void 0 : elementRef.current, threshold, root, rootMargin, frozen]);
  return isIntersected;
};

const {useState: useState$b,useEffect: useEffect$b} = await importShared('react');

const useAnimation = (animation, animationRef) => {
  var _a;
  const isVisible = useIntersectionObserver(
    (animation == null ? void 0 : animation.name) ? animationRef : null,
    { freezeOnceVisible: true }
  );
  const [isFirstRender, setFirstRender] = useState$b(true);
  const [animationClassName, setClassName] = useState$b("animation-hidden");
  useEffect$b(() => {
    if (!(animation == null ? void 0 : animation.name) || !isFirstRender || !(animationRef == null ? void 0 : animationRef.current))
      return;
    if (isVisible && isFirstRender) {
      const timeout = setTimeout(() => {
        setClassName("");
        setFirstRender(false);
      }, ((animation == null ? void 0 : animation.delay) || 0) * 1e3 + 20);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, animation, isFirstRender, animationRef]);
  if (!(animation == null ? void 0 : animation.name))
    return { style: {}, animationClassName: "" };
  if (isVisible && isFirstRender || !isFirstRender) {
    const style = {
      animationName: animation == null ? void 0 : animation.name,
      animationDelay: `${(animation == null ? void 0 : animation.delay) || 0}s`,
      animationDuration: `${(animation == null ? void 0 : animation.duration) || 0}s`,
      animationIterationCount: (animation == null ? void 0 : animation.repeatType) === "infinite" ? "infinite" : ((_a = animation == null ? void 0 : animation.repeatNumber) == null ? void 0 : _a.toString()) || "1"
    };
    return { style, animationClassName };
  }
  return { style: {}, animationClassName };
};

// src/index.ts
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time = raf.now() + ms;
  const cancel = () => {
    const i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };
  const timeout = { time, handler, cancel };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
    pendingCount -= count;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each) {
  values.forEach((value) => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

var __defProp$f = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp$f(target, name, { get: all[name], enumerable: true });
};

// src/globals.ts
var globals_exports = {};
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});

// src/helpers.ts
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual$1(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

// src/globals.ts
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

// src/clamp.ts
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// src/colors.ts
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};

// src/colorMatchers.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

// src/normalizeColor.ts
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color] !== void 0) {
    return colors[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}

// src/colorToRgba.ts
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r = (int32Color & 4278190080) >>> 24;
  const g = (int32Color & 16711680) >>> 16;
  const b = (int32Color & 65280) >>> 8;
  const a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// src/createInterpolator.ts
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
  const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
  const easing = config.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}

// src/easings.ts
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};
var easings = {
  linear: (x) => x,
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: (x) => x * x * x * x,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: (x) => x * x * x * x * x,
  easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: (x) => Math.sin(x * Math.PI / 2),
  easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
  easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: (x) => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: (x) => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x) => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2,
  steps
};

// src/fluids.ts
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

// src/regexs.ts
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

// src/variableToRgba.ts
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

// src/stringInterpolation.ts
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_, i) => keyframes.map((values) => {
      if (!(i in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config, output: output2 })
  );
  return (input) => {
    const missingUnit = !unitRegex.test(output[0]) && output.find((value) => unitRegex.test(value))?.replace(numberRegex, "");
    let i = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};

// src/deprecations.ts
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(
    `${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}

// src/isAnimatedString.ts
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}

// src/hooks/useConstant.ts
await importShared('react');

// src/hooks/useForceUpdate.ts
const {useState: useState$a} = await importShared('react');


// src/hooks/useIsMounted.ts
const {useRef:useRef2} = await importShared('react');


// src/hooks/useIsomorphicLayoutEffect.ts
const {useEffect: useEffect$a,useLayoutEffect} = await importShared('react');

var useIsomorphicLayoutEffect = isSSR() ? useEffect$a : useLayoutEffect;

// src/hooks/useIsMounted.ts
var useIsMounted = () => {
  const isMounted = useRef2(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

// src/hooks/useForceUpdate.ts
function useForceUpdate() {
  const update = useState$a()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update(Math.random());
    }
  };
}

// src/hooks/useMemoOne.ts
const {useEffect:useEffect2,useRef:useRef3,useState:useState2} = await importShared('react');

function useMemoOne(getResult, inputs) {
  const [initial] = useState2(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = useRef3();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  useEffect2(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }
  return true;
}

// src/hooks/useOnce.ts
const {useEffect:useEffect3} = await importShared('react');

var useOnce = (effect) => useEffect3(effect, emptyDeps);
var emptyDeps = [];

// src/hooks/usePrev.ts
const {useEffect:useEffect4,useRef:useRef4} = await importShared('react');

function usePrev(value) {
  const prevRef = useRef4();
  useEffect4(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// src/hooks/useReducedMotion.ts
await importShared('react');

var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};

// src/context.ts
var TreeContext = { dependencies: null };

// src/AnimatedObject.ts
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};

// src/AnimatedArray.ts
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}

// src/withAnimated.tsx
const React$6 = await importShared('react');

const {forwardRef,useRef: useRef$6,useCallback,useEffect: useEffect$9} = await importShared('react');
var withAnimated = (Component, host) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return forwardRef((givenProps, givenRef) => {
    const instanceRef = useRef$6(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = useRef$6();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    useEffect$9(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return /* @__PURE__ */ React$6.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}

// src/createHost.ts
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues,
    createAnimatedStyle,
    getComponentProps
  };
  const animated = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated[key] = animated(Component);
  });
  return {
    animated
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = { to: to2 };
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return { ...props };
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  ctrl.ref?.delete(ctrl);
  ref?.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    ctrl.ref?.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

// src/hooks/useSprings.ts
const {useContext:useContext2,useMemo: useMemo$4,useRef: useRef$5} = await importShared('react');

// src/constants.ts
var config = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
};

// src/AnimationConfig.ts
var defaults = {
  ...config.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    /**
     * The initial velocity of one or more values.
     *
     * @default 0
     */
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = { ...defaultConfig };
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = { ...defaultConfig, ...newConfig };
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let { frequency, damping } = config2;
  const { mass } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}

// src/Animation.ts
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? defaultProps?.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps?.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({ ...props, callId, cancel }, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

// src/AnimationResult.ts
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(
  target.get(),
  results.every((result) => result.finished)
);
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});

// src/runAsync.ts
function runAsync(to2, props, state, target) {
  const { callId, parentId, onRest } = props;
  const { asyncTo: prevTo, promise: prevPromise } = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = getDefaultProps(
      props,
      (value, key) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        key === "onRest" ? void 0 : value
      )
    );
    let preventBail;
    let bail;
    const bailPromise = new Promise(
      (resolve, reject) => (preventBail = resolve, bail = reject)
    );
    const bailIfEnded = (bailSignal) => {
      const bailResult = (
        // The `cancel` prop or `stop` method was used.
        callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
        callId !== state.asyncId && getFinishedResult(target, false)
      );
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? { ...arg1 } : { ...arg2, to: arg1 };
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to2)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t) => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;
      this._onPriorityChange(priority);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority
    });
  }
};

// src/SpringPhase.ts
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

// src/SpringValue.ts
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    /** The animation state */
    this.animation = new Animation();
    /** Some props have customizable default values */
    this.defaultProps = {};
    /** The state for `runAsync` calls */
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    /** The promise resolvers of pending `start` calls */
    this._pendingCalls = /* @__PURE__ */ new Set();
    /** The counter for tracking `scheduleProps` calls */
    this._lastCallId = 0;
    /** The last `scheduleProps` call that changed the `to` prop */
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? { ...arg1 } : { ...arg2, from: arg1 };
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return hasAnimated(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return isAnimating(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return isPaused(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let { toValues } = anim;
    const { config: config2 } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i) => {
      if (node2.done)
        return;
      const to2 = (
        // Animated strings always go from 0 to 1.
        node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i]
      );
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
        if (!is.und(config2.duration)) {
          let p = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node2.durationProgress = p;
          }
          position = from + config2.easing(p) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to2);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  /** Set the current value, while stopping the current animation */
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: true });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: false });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (isAnimating(this)) {
      const { to: to2, config: config2 } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue;
    if (!is.und(to2)) {
      queue = [is.obj(to2) ? to2 : { ...arg2, to: to2 }];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(
      queue.map((props) => {
        const up = this._update(props);
        return up;
      })
    ).then((results) => getCombinedResult(this, results));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(cancel) {
    const { to: to2 } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: true });
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(props) {
    const key = this.key || "";
    let { to: to2, from } = props;
    to2 = is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = { to: to2, from };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...props }, isLoop) {
    const { key, defaultProps } = this;
    if (props.default)
      Object.assign(
        defaultProps,
        getDefaultProps(
          props,
          (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value
        )
      );
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(
              this,
              "onPause",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(
              this,
              "onResume",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  /** Merge props into the current animation */
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const { key, defaultProps, animation: anim } = this;
    const { to: prevTo, from: prevFrom } = anim;
    let { to: to2 = prevTo, from = prevFrom } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual$1(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual$1(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const { config: config2 } = anim;
    const { decay, velocity } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(
        config2,
        callProp(props.config, key),
        // Avoid calling the same "config" prop twice.
        props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0
      );
    }
    let node = getAnimated(this);
    if (!node || is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key)
    );
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(
            `Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`
          );
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual$1(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual$1(anim.immediate, immediate) && !immediate || !isEqual$1(config2.decay, decay) || !isEqual$1(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const { onRest } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest?.(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart?.(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority = 0;
    const { to: to2 } = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority = to2.priority + 1;
      }
    }
    this.priority = priority;
  }
  _detach() {
    const { to: to2 } = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual$1(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(
        this,
        "onStart",
        getFinishedResult(this, checkFinished(this, anim.to)),
        this
      );
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual$1(value, goal);
}
function createLoopUpdate(props, loop = props.loop, to2 = props.to) {
  const loopRet = callProp(loop);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop,
      // Avoid updating default props when looping.
      default: false,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      // Ignore the "from" prop except on reset.
      from: reset ? props.from : void 0,
      reset,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...overrides
    });
  }
}
function createUpdate(props) {
  const { to: to2, from } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to2))
    findDefined(to2, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update2 = createUpdate(props);
  if (is.und(update2.default)) {
    update2.default = getDefaultProps(update2);
  }
  return update2;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  target.animation[type]?.(...args);
  target.defaultProps[type]?.(...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    /** The animated values */
    this.springs = {};
    /** The queue of props passed to the `update` method. */
    this.queue = [];
    /** The counter for tracking `scheduleProps` calls */
    this._lastAsyncId = 0;
    /** The values currently being animated */
    this._active = /* @__PURE__ */ new Set();
    /** The values that changed recently */
    this._changed = /* @__PURE__ */ new Set();
    /** Equals false when `onStart` listeners can be called */
    this._started = false;
    /** State used by the `runAsync` function */
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    /** The event queues that are flushed once per frame maximum */
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({ default: true, ...props });
    }
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  /** Get the current values of our springs */
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  /** Set the current values without animating. */
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  /** Push an update onto the queue of each value. */
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(props) {
    let { queue } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  /** @internal */
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  /** Freeze the active animation in time */
  pause(keys) {
    if (is.und(keys)) {
      this.start({ pause: true });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(keys) {
    if (is.und(keys)) {
      this.start({ pause: false });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart, onChange, onRest } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then(
    (results) => getCombinedResult(ctrl, results)
  );
}
async function flushUpdate(ctrl, props, isLoop) {
  const { keys, to: to2, from, loop, onRest, onResolve } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({ finished, cancelled }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map(
    (key) => ctrl.springs[key].start(props)
  );
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(
      scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(
                runAsync(
                  asyncTo,
                  props2,
                  state,
                  ctrl
                )
              );
            }
          }
        }
      })
    );
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = { ...ctrl.springs };
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = { ...props2, to: void 0 };
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}

// src/SpringContext.tsx
const React$5 = await importShared('react');

const {useContext: useContext$3} = await importShared('react');
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = useContext$3(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return /* @__PURE__ */ React$5.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React$5.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = _getProps(props, ctrl, i);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i = current.indexOf(ctrl);
    if (~i)
      current.splice(i, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i) => {
      const update2 = is.fun(values) ? values(i, ctrl) : values;
      if (update2) {
        ctrl.set(update2);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = this._getProps(props, ctrl, i);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };
  const _getProps = function(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};

// src/hooks/useSprings.ts
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = useMemo$4(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const layoutId = useRef$5(0);
  const forceUpdate = useForceUpdate();
  const state = useMemo$4(
    () => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }),
    []
  );
  const ctrls = useRef$5([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  useMemo$4(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  useMemo$4(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update2 = propsFn ? propsFn(i, ctrl) : props[i];
      if (update2) {
        updates[i] = declareUpdate(update2);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = useContext2(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const { queue } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i) => {
      ref?.add(ctrl);
      if (hasContext) {
        ctrl.start({ default: context });
      }
      const update2 = updates[i];
      if (update2) {
        replaceRef(ctrl, update2.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update2);
        } else {
          ctrl.start(update2);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x) => ({ ...x }));
  return ref ? [values, ref] : values;
}

// src/hooks/useSpring.ts
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(
    1,
    isFn ? props : [props],
    isFn ? deps || [] : deps
  );
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

// src/hooks/useSpringRef.ts
await importShared('react');

// src/hooks/useTransition.tsx
await importShared('react');

await importShared('react');

// src/hooks/useInView.ts
await importShared('react');
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    /** Equals false when in the frameloop */
    this.idle = true;
    /** The inputs which are currently animating */
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual$1(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});

const {unstable_batchedUpdates} = await importShared('react-dom');

// src/applyAnimatedValues.ts
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const { style, children, scrollTop, scrollLeft, viewBox, ...attributes } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n) => "-" + n.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix) => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x, y, z, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x2, y2, z2, deg]) => [
            `rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v) => addUnit(v, unit)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t;
      identity = identity && id;
    });
    return identity ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count) {
    if (count == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count) {
    if (count == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};

// src/primitives.ts
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = host.animated;

var __defProp$e = Object.defineProperty;
var __defProps$9 = Object.defineProperties;
var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$9 = (a, b) => __defProps$9(a, __getOwnPropDescs$9(b));
const imgAttributeMapping = {
  width: "w",
  height: "h",
  webp: "rw",
  png: "rp",
  jpg: "rj",
  stretch: "s",
  crop: "c"
};
const preProcesssorGoogleImageParams = (googleParams, config) => {
  return __spreadProps$9(__spreadValues$e(__spreadValues$e({}, config), googleParams), {
    width: (googleParams == null ? void 0 : googleParams.percent) ? Math.round((googleParams == null ? void 0 : googleParams.width) * (googleParams == null ? void 0 : googleParams.percent) / 100) : googleParams == null ? void 0 : googleParams.width
  });
};
const formatGoogleParams = (config) => {
  const newConfig = __spreadValues$e({}, config);
  const { width, percent } = newConfig || {};
  if (width && percent) {
    newConfig.width = Math.round(width * percent / 100);
  }
  return newConfig;
};
const constructGoogleImageParams = (url, config) => {
  const baseUrl = url.indexOf("=") >= 0 ? url.substring(0, url.indexOf("=")) : url;
  const params = [];
  const newConfig = formatGoogleParams(config);
  Object.entries(newConfig).forEach(([key, value]) => {
    if (value !== 0 && !value)
      return;
    if (key === "format") {
      params.push(imgAttributeMapping[value]);
      return;
    }
    if (key === "size" && value) {
      params.push(`${imgAttributeMapping[key]}0`);
      return;
    }
    if (imgAttributeMapping[key]) {
      if (typeof value === "boolean") {
        if (value) {
          params.push(`${imgAttributeMapping[key]}`);
          return;
        }
        return;
      }
      params.push(`${imgAttributeMapping[key]}${value}`);
    }
  });
  return params.length > 0 ? `${baseUrl}=${params.join("-")}` : url;
};
const getImageUrlFromGoogleUserContent = (imageUrl, config) => {
  if (imageUrl && imageUrl.includes("googleusercontent.com") && !imageUrl.includes("="))
    return constructGoogleImageParams(imageUrl, config);
  return imageUrl;
};
const formatImageUrlQuality = (url, resolution = 800) => {
  if (!(url == null ? void 0 : url.startsWith("https://lh3.googleusercontent.com/")))
    return url;
  const resizedImageReg = /\S*=(rw(-w\d+)?|w\d+)/g;
  return resizedImageReg.test(url) ? url.replace(/=(rw(-w\d+)?|w\d+)/, `=rw-w${resolution}`) : url + `=w${resolution}`;
};

const React$4 = await importShared('react');
const {useState: useState$9,useContext: useContext$2} = React$4;

var __defProp$d = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const PreviewGroupContext = React$4.createContext({});
const PreviewGroupProvider = ({
  children,
  images
}) => {
  const [currentIndex, setCurrentIndex] = useState$9();
  const newSrcImages = images.map((image) => {
    const { src, googleImageParams } = image;
    const newSrc = getImageUrlFromGoogleUserContent(
      src,
      preProcesssorGoogleImageParams(googleImageParams, {
        format: "webp"
      })
    );
    const pngSrc = getImageUrlFromGoogleUserContent(
      src,
      preProcesssorGoogleImageParams(googleImageParams, { format: "png" })
    );
    return __spreadProps$8(__spreadValues$d({}, image), { src: newSrc || pngSrc || src });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewGroupContext.Provider, {
    value: { images: newSrcImages, currentIndex, setCurrentIndex },
    children
  });
};
const usePreviewGroup = () => {
  const context = useContext$2(PreviewGroupContext);
  if (!context) {
    throw new Error(
      "usePreviewGroup must be inside a PreviewGroupContext with a state value"
    );
  }
  return context;
};

const getOffset = (node) => {
  const parentWindow = node && node.ownerDocument.defaultView || window;
  const parentDocument = node && node.ownerDocument || document;
  const box = node.getBoundingClientRect();
  const docElem = parentDocument.documentElement;
  return {
    left: box.left + (parentWindow.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (parentWindow.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
};

const {useRef: useRef$4,useState: useState$8,useEffect: useEffect$8} = await importShared('react');

const {createPortal} = await importShared('react-dom');

var __defProp$c = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
const Preview = ({
  open,
  onClose,
  mousePosition,
  src
}) => {
  const ref = useRef$4();
  const [rendered, setRendered] = useState$8(open);
  const [currentSrc, setCurrentSrc] = useState$8(src);
  const [showMask, setShowMask] = useState$8(open);
  const [showContent, setShowContent] = useState$8(open);
  const [previewPosition, setPreviewPosition] = useState$8();
  const [prevBodyAttrs, setPrevBodyAttrs] = useState$8({});
  const { images, currentIndex, setCurrentIndex } = usePreviewGroup();
  useEffect$8(() => {
    if (!images)
      return;
    if (open) {
      const baseIndex = images.findIndex((image) => src.includes(image.src)) || 0;
      if (currentIndex !== baseIndex) {
        setCurrentIndex(baseIndex);
      }
    } else {
      currentSrc !== src && setCurrentSrc(src);
    }
  }, [open]);
  const [props, api] = useSpring(
    () => ({
      from: { opacity: open ? 0 : 1 },
      to: { opacity: open ? 1 : 0 },
      config: {
        duration: 100
      },
      onResolve: () => {
        if (!open)
          setShowMask(false);
      }
    }),
    [open]
  );
  const [imgProps, imgApi] = useSpring(() => {
    const baseScale = typeof (previewPosition == null ? void 0 : previewPosition.width) === "number" ? mousePosition.width / (previewPosition == null ? void 0 : previewPosition.width) : 1;
    const baseTranslateX = typeof (previewPosition == null ? void 0 : previewPosition.left) === "number" ? mousePosition.left - (previewPosition == null ? void 0 : previewPosition.left) : 0;
    const baseTranslateY = typeof (previewPosition == null ? void 0 : previewPosition.top) === "number" ? mousePosition.top - (previewPosition == null ? void 0 : previewPosition.top) : 0;
    const scaleFrom = open ? baseScale : 1;
    const translateFrom = open ? `translate(${baseTranslateX}px, ${baseTranslateY}px)` : `translate(0px, 0px)`;
    const scaleTo = open ? 1 : baseScale;
    const translateTo = open ? `translate(0px, 0px)` : `translate(${baseTranslateX}px, ${baseTranslateY}px)`;
    return {
      from: { transform: translateFrom, scale: scaleFrom },
      to: { transform: translateTo, scale: scaleTo },
      config: {
        duration: 100
      },
      onResolve: () => {
        if (!open)
          setShowContent(false);
      }
    };
  }, [open, previewPosition]);
  const getParentWindow = () => {
    var _a, _b;
    return ((_b = (_a = ref.current) == null ? void 0 : _a.ownerDocument) == null ? void 0 : _b.defaultView) || window;
  };
  const getParentDocument = () => {
    var _a;
    return ((_a = ref.current) == null ? void 0 : _a.ownerDocument) || document;
  };
  const bodyScrollDisable = () => {
    setPrevBodyAttrs({
      overflow: getParentDocument().body.style.overflow,
      width: getParentDocument().body.style.width
    });
    const clientWidth = getParentDocument().body.clientWidth;
    getParentDocument().body.style.overflow = "hidden";
    getParentDocument().body.style.width = `${clientWidth}px`;
  };
  const bodyScrollEnable = () => {
    getParentDocument().body.style.width = prevBodyAttrs.width;
    getParentDocument().body.style.overflow = prevBodyAttrs.overflow;
    setPrevBodyAttrs({});
  };
  const handleClosePreview = () => {
    onClose == null ? void 0 : onClose();
  };
  useEffect$8(() => {
    api.start();
    imgApi.start();
  }, [open]);
  useEffect$8(() => {
    if (open) {
      setShowMask(true);
      setShowContent(true);
    }
  }, [open]);
  useEffect$8(() => {
    if (open && !rendered) {
      setRendered(true);
    }
  }, [open, rendered]);
  useEffect$8(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        handleClosePreview();
      }
    };
    if (open && rendered) {
      bodyScrollDisable();
      getParentWindow().addEventListener("wheel", handleClosePreview);
      getParentDocument().addEventListener("keydown", handleKeyDown, false);
    } else {
      bodyScrollEnable();
      getParentWindow().removeEventListener("wheel", handleClosePreview);
      getParentWindow().removeEventListener("touchstart", handleClosePreview);
      getParentDocument().removeEventListener("keydown", handleKeyDown, false);
    }
    return () => {
      getParentWindow().removeEventListener("wheel", handleClosePreview);
      getParentWindow().removeEventListener("touchstart", handleClosePreview);
      getParentDocument().removeEventListener("keydown", handleKeyDown, false);
    };
  }, [open, rendered]);
  const onSwitchLeft = (e) => {
    var _a;
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentSrc((_a = images[currentIndex - 1]) == null ? void 0 : _a.src);
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const onSwitchRight = (e) => {
    var _a;
    e.stopPropagation();
    if (currentIndex < (images == null ? void 0 : images.length) - 1) {
      setCurrentSrc((_a = images[currentIndex + 1]) == null ? void 0 : _a.src);
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const nextButton = currentIndex < (images == null ? void 0 : images.length) - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(StyledNextButton, {
    onClick: onSwitchRight,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M28.1933 16.9884L10.0808 2.84154C10.0335 2.80427 9.9766 2.78112 9.9167 2.77473C9.85681 2.76833 9.79632 2.77897 9.7422 2.8054C9.68807 2.83183 9.6425 2.873 9.61071 2.92416C9.57893 2.97533 9.56222 3.03443 9.5625 3.09466V6.20046C9.5625 6.39734 9.65491 6.58618 9.80759 6.70671L24.2719 18.0009L9.80759 29.2951C9.6509 29.4156 9.5625 29.6045 9.5625 29.8014V32.9072C9.5625 33.1764 9.87188 33.325 10.0808 33.1603L28.1933 19.0134C28.3473 18.8933 28.4718 18.7397 28.5574 18.5643C28.6431 18.3888 28.6876 18.1962 28.6876 18.0009C28.6876 17.8057 28.6431 17.613 28.5574 17.4376C28.4718 17.2621 28.3473 17.1085 28.1933 16.9884Z",
        fill: "black"
      })
    })
  });
  const prevButton = currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPrevButton, {
    onClick: onSwitchLeft,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        d: "M26.5188 6.19866V3.09286C26.5188 2.82366 26.2095 2.675 26.0005 2.83974L7.88802 16.9866C7.73413 17.1063 7.60961 17.2595 7.52395 17.4347C7.4383 17.6098 7.39377 17.8022 7.39377 17.9971C7.39377 18.1921 7.4383 18.3844 7.52395 18.5595C7.60961 18.7347 7.73413 18.8879 7.88802 19.0076L26.0005 33.1545C26.2135 33.3192 26.5188 33.1705 26.5188 32.9013V29.7955C26.5188 29.5987 26.4264 29.4098 26.2737 29.2893L11.8095 17.9991L26.2737 6.70491C26.4264 6.58438 26.5188 6.39554 26.5188 6.19866Z",
        fill: "black"
      })
    })
  });
  const unzoomButton = /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledButtonUnzoom, {
      type: "button",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
        "aria-hidden": "true",
        "data-rmiz-btn-unzoom-icon": true,
        fill: "currentColor",
        focusable: "false",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"
        })
      })
    })
  });
  const operations = images ? [prevButton, nextButton, unzoomButton] : [unzoomButton];
  return rendered ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref,
        style: { display: "none" }
      }),
      createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          children: [
            showMask && /* @__PURE__ */ jsxRuntimeExports.jsx(MaskSpring, {
              style: props
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, {
              onClick: onClose,
              style: showContent ? {} : { display: "none" },
              children: [
                operations,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ImageSpring, {
                  style: __spreadProps$7(__spreadValues$c({}, imgProps), { transformOrigin: "top left" }),
                  src: currentSrc,
                  onLoad: (e) => {
                    if (!previewPosition)
                      setPreviewPosition(__spreadValues$c({
                        width: e.currentTarget.offsetWidth
                      }, getOffset(e.currentTarget)));
                  }
                })
              ]
            })
          ]
        }),
        getParentDocument().body
      )
    ]
  }) : null;
};
const Mask = newStyled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  pointer-events: none;
`;
const MaskSpring = animated(Mask);
const Content = newStyled.div`
  position: fixed;
  inset: 0;
  z-index: 10001;
  overflow: auto;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = newStyled.img`
  max-width: 100vw;
  max-height: 100vh;
  cursor: zoom-out;
`;
const ImageSpring = animated(Image);
const StyledButton = `
position: absolute;
cursor: pointer;
z-index: 1;
border-radius: 50%;
background-color: transparent;
border: none;

&:hover{
  background-color: rgba(0, 0, 0, 0.25);
}
top: 0;
bottom: 0;
margin: auto 0;
padding: 0;
touch-action: manipulation;
height: 72px;
width: 72px;`;
const StyledPrevButton = newStyled.button`
  ${StyledButton}
  inset: 20px 20px
`;
const StyledNextButton = newStyled.button`
  ${StyledButton}
  right: 20px;
`;
const StyledButtonUnzoom = newStyled.button`
  position: absolute;
  cursor: pointer;
  inset: 20px 20px auto auto;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  color: #fff;
  height: 40px;
  margin: 0;
  outline-offset: 2px;
  padding: 9px;
  touch-action: manipulation;
  width: 40px;
`;

var UnitEnum = /* @__PURE__ */ ((UnitEnum2) => {
  UnitEnum2["percent"] = "%";
  UnitEnum2["pixel"] = "px";
  return UnitEnum2;
})(UnitEnum || {});
var OverlayType = /* @__PURE__ */ ((OverlayType2) => {
  OverlayType2["color"] = "color";
  OverlayType2["gradient"] = "gradient";
  return OverlayType2;
})(OverlayType || {});
var ColorType = /* @__PURE__ */ ((ColorType2) => {
  ColorType2["solid"] = "solid";
  ColorType2["gradient"] = "gradient";
  return ColorType2;
})(ColorType || {});
var GradientType = /* @__PURE__ */ ((GradientType2) => {
  GradientType2["linear"] = "linear";
  GradientType2["radial"] = "radial";
  return GradientType2;
})(GradientType || {});
var Alignment = /* @__PURE__ */ ((Alignment2) => {
  Alignment2["left"] = "left";
  Alignment2["center"] = "center";
  Alignment2["right"] = "right";
  Alignment2["justify"] = "justify";
  return Alignment2;
})(Alignment || {});
var VerticalAlignment = /* @__PURE__ */ ((VerticalAlignment2) => {
  VerticalAlignment2["top"] = "top";
  VerticalAlignment2["center"] = "center";
  VerticalAlignment2["bottom"] = "bottom";
  return VerticalAlignment2;
})(VerticalAlignment || {});

const BG_VISIBLE_LAZY_CLASS_NAME = "bg-visible-lazy";
const BG_LAZY_CLASS_NAME = "bg-lazy";

function getRgbaFromHex(hex, alpha = 1) {
  var _a;
  const rgb = hex2Rgb(hex);
  if (!rgb) {
    return null;
  }
  return `rgba(${rgb.red},${rgb.green},${rgb.blue},${(_a = rgb == null ? void 0 : rgb.alpha) != null ? _a : alpha})`;
}

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const isNumeric = (str) => {
  if (typeof str === "number")
    return true;
  if (typeof str !== "string")
    return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};
const jsToCss = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const getCommonCss = (attribute) => {
  return attribute && Object.entries(attribute).reduce((acc, curr) => {
    const [key, value] = curr;
    if ([null, void 0, false].some((el) => el === value) || /Unit$/.test(key))
      return acc;
    return `${acc}
${jsToCss(key)}: ${unitParse(
      value,
      attribute[`${key}Unit`]
    )};`;
  }, "");
};
const getFourSideCss = (props) => {
  const sidesOrder = ["top", "right", "bottom", "left"];
  const corderOrder = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
  return Object.entries(props).reduce((acc, curr) => {
    const [key, value = {}] = curr;
    const _a = value, { unit = UnitEnum.pixel } = _a, restValue = __objRest$4(_a, ["unit"]);
    return acc + "\n" + Object.keys(restValue).filter(
      (attr) => (sidesOrder.includes(attr) || corderOrder.includes(attr)) && value[attr] !== null && value[attr] !== void 0
    ).map((attr) => {
      let childValue;
      if (isNumeric(value[attr])) {
        childValue = value[attr] + unit;
      } else {
        childValue = value[attr];
      }
      return `${jsToCss(`${key}-${attr}`)}: ${childValue};`;
    }).join("\n");
  }, "");
};
const getBackgroundOverlay = (type, value) => {
  if (type === OverlayType.color && value) {
    return `
      & {
        position: relative;

        &:before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          content: '';
          background: ${value};
          border-radius: inherit;
          z-index: -1;
        }
      }
    `;
  }
  return "";
};
const getBackgroundImageMarquee = (bgImgMarqueeDirection, bgImgMarqueeSpeed) => {
  if (!bgImgMarqueeDirection)
    return "";
  return `
    & {
      background-repeat: ${bgImgMarqueeDirection === "horizontal" ? "repeat-x" : "repeat-y"} !important;
      animation: ${bgImgMarqueeDirection === "horizontal" ? "bg-marquee-horizontal" : "bg-marquee-vertical"} ${99999 / (bgImgMarqueeSpeed || 30)}s linear infinite;
    }
  `;
};
const getBoxShadow = (shadow) => {
  let boxShadow = "";
  if (shadow == null ? void 0 : shadow.color) {
    boxShadow = "box-shadow: ";
    boxShadow += (shadow == null ? void 0 : shadow.x) ? `${shadow.x}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.y) ? `${shadow.y}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.blur) ? `${shadow.blur}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.spread) ? `${shadow.spread}px ` : "0 ";
    boxShadow += `${shadow.color};`;
  }
  if (shadow == null ? void 0 : shadow.on) {
    boxShadow = "box-shadow: ";
    boxShadow += (shadow == null ? void 0 : shadow.x) ? `${shadow.x}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.y) ? `${shadow.y}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.blur) ? `${shadow.blur}px ` : "0 ";
    boxShadow += (shadow == null ? void 0 : shadow.spread) ? `${shadow.spread}px ` : "0 ";
    boxShadow += `rgba(0,0,0,${shadow == null ? void 0 : shadow.opacity});`;
  }
  return boxShadow;
};
const getTextShadow = (shadow) => {
  let textShadow = "";
  if (shadow == null ? void 0 : shadow.color) {
    textShadow = "text-shadow: ";
    textShadow += (shadow == null ? void 0 : shadow.x) ? `${shadow.x}px ` : "0 ";
    textShadow += (shadow == null ? void 0 : shadow.y) ? `${shadow.y}px ` : "0 ";
    textShadow += (shadow == null ? void 0 : shadow.blur) ? `${shadow.blur}px ` : "0 ";
    textShadow += `${shadow.color};`;
  }
  return textShadow;
};
const getHoverStyle = (hover) => {
  return `
    &:hover {
      ${getCommonCss(__spreadValues$b(__spreadValues$b(__spreadValues$b(__spreadValues$b({}, (hover == null ? void 0 : hover.color) && { color: hover.color }), (hover == null ? void 0 : hover.backgroundColor) && {
    backgroundColor: hover.backgroundColor
  }), (hover == null ? void 0 : hover.background) && {
    background: hover.background
  }), (hover == null ? void 0 : hover.borderColor) && { borderColor: hover.borderColor }))}
      ${(hover == null ? void 0 : hover.transparent) ? `opacity: ${hover.transparent / 100};` : ""}
      ${(hover == null ? void 0 : hover.zoom) ? `transform: scale(${hover.zoom / 100})` : ""}
    }
    `;
};
const getAnimation = (animation) => {
  return `
    ${(animation == null ? void 0 : animation.name) ? `animation-name: ${animation.name};` : ""}
    ${isNumeric(animation == null ? void 0 : animation.delay) ? `animation-delay: ${animation.delay}s;` : ""}
    ${isNumeric(animation == null ? void 0 : animation.duration) ? `animation-duration: ${animation.duration}s;` : ""}
    ${(animation == null ? void 0 : animation.repeatType) === "infinite" ? `animation-iteration-count: infinite;` : isNumeric(animation == null ? void 0 : animation.repeatNumber) ? `animation-iteration-count: ${animation.repeatNumber};` : ""}
    `;
};
const getBackgroundImageUrl = (bgImage, bgImageWidth, bgImagePercent) => {
  const isUrlPrefix = /^url\((.*)\)$/.test(bgImage);
  if (!isUrlPrefix && bgImage) {
    return `url(${getImageUrlFromGoogleUserContent(bgImage, {
      width: bgImageWidth,
      percent: bgImagePercent
    })})`;
  }
  return bgImage;
};
const getBackgroundImagePlaceholderUrl = (bgImage) => {
  return getBackgroundImageUrl(bgImage, 200, 100);
};
const getDefaultOverlay = (value) => {
  if (value)
    return `
      & {
        position: relative;
        z-index: 0;

        &:before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          content: '';
          background: #000;
          border-radius: inherit;
          z-index: -1;
          opacity: ${value};
        }
      }`;
  return "";
};
const getStyle = (props, opts = { lazyBgImage: false }) => {
  const { lazyBgImage } = opts;
  if (!props)
    return "";
  const _a = props, {
    margin = {},
    padding = {},
    border = {},
    shadow,
    textShadow,
    backgroundVideo,
    backgroundOverlay,
    backgroundOverlayType,
    bgImageWidth,
    bgImagePercent,
    backgroundImage,
    hover = {},
    animation = {},
    defaultOverlay,
    background,
    backgroundColor,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    backgroundMarqueeDirection,
    backgroundMarqueeSpeed,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    cornerType
  } = _a, rest = __objRest$4(_a, [
    "margin",
    "padding",
    "border",
    "shadow",
    "textShadow",
    "backgroundVideo",
    "backgroundOverlay",
    "backgroundOverlayType",
    "bgImageWidth",
    "bgImagePercent",
    "backgroundImage",
    "hover",
    "animation",
    "defaultOverlay",
    "background",
    "backgroundColor",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundSize",
    "backgroundMarqueeDirection",
    "backgroundMarqueeSpeed",
    "borderRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "cornerType"
  ]);
  const objBorderRadius = cornerType === "detail" ? {
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius
  } : { borderRadius };
  let bgCss = ``;
  if (!(backgroundVideo == null ? void 0 : backgroundVideo.src) && !(backgroundVideo == null ? void 0 : backgroundVideo.uploadSrc)) {
    bgCss += `${getCommonCss({
      background,
      backgroundColor
    })}`;
    if (backgroundImage) {
      const bgImage = getBackgroundImageUrl(
        backgroundImage,
        bgImageWidth,
        bgImagePercent
      );
      const bgImagePlaceHolder = getBackgroundImagePlaceholderUrl(backgroundImage);
      bgCss += bgImage !== bgImagePlaceHolder && lazyBgImage ? `
        background-image: ${bgImagePlaceHolder};
        &.${BG_VISIBLE_LAZY_CLASS_NAME} {
          background-image: ${bgImage};
        }
      ` : `
        background-image: ${bgImage};
      `;
      bgCss += getBackgroundImageMarquee(
        backgroundMarqueeDirection,
        backgroundMarqueeSpeed
      );
    }
    bgCss += `
      ${getBackgroundOverlay(backgroundOverlayType, backgroundOverlay)}
      ${getCommonCss({
      backgroundPosition,
      backgroundRepeat,
      backgroundSize
    })}
    `;
  } else {
    bgCss += `
      position: relative;
    `;
  }
  return `
    & {
      ${getBoxShadow(shadow)}
      ${getTextShadow(textShadow)}
      ${getCommonCss(__spreadValues$b(__spreadValues$b(__spreadValues$b({}, objBorderRadius), border), rest))}
      ${bgCss}
      ${getFourSideCss({ margin, padding })}
      ${getHoverStyle(hover)}
      ${getDefaultOverlay(defaultOverlay)}
    }
    `;
};
const getScrollbarWidth = () => {
  let width = 0;
  if (typeof window !== "undefined") {
    if (document.body.scrollHeight <= window.innerHeight)
      return 0;
    if (window.scrollbarWidth && document.body.scrollHeight > window.innerHeight) {
      return window.scrollbarWidth;
    }
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    document.body.appendChild(outer);
    const inner = document.createElement("div");
    outer.appendChild(inner);
    width = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
  }
  return width;
};
const pixelParse = (value) => {
  if (typeof value === "number")
    return `${value}px`;
  return value;
};
const unitParse = (value, unit = UnitEnum.pixel) => {
  if (typeof value === "number")
    return `${value}${unit}`;
  return value;
};
const debounce = (fn, delay = 200) => {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};
const stringifyColor = (color) => {
  if (color.colorType === ColorType.solid)
    return color.colorValue;
  const gradientColor = color.colorValue;
  if (!gradientColor)
    return "";
  const cloneArr = [...gradientColor.colors];
  const gradientType = `${gradientColor.gradientType}-gradient`;
  const gradientRadius = gradientColor.gradientType === GradientType.radial ? "circle" : `${gradientColor.radius}deg`;
  const gradientList = cloneArr.sort((color1, color2) => color1.stop - color2.stop).map((color2) => `${color2.color} ${color2.stop}%`).join(",");
  return `${gradientType}(${gradientRadius}, ${gradientList})`;
};
const parseColor = (color) => {
  if (!color || typeof color !== "string")
    return;
  if (!color.includes("-gradient"))
    return {
      colorType: ColorType.solid,
      colorValue: color.includes("#") ? getRgbaFromHex(color) : color
    };
  const gradientType = color.slice(0, color.indexOf("-gradient"));
  const content = color.substring(
    color.indexOf("(") + 1,
    color.lastIndexOf(")")
  );
  const arr = content.split(
    /,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/
  );
  const radius = arr.shift();
  const colorList = arr.map((colorString) => {
    const colorArray = colorString.trim().split(" ");
    return { color: colorArray[0], stop: parseInt(colorArray[1]) };
  });
  return {
    colorType: ColorType.gradient,
    colorValue: {
      colors: [...colorList],
      radius: parseInt(radius) || void 0,
      gradientType: gradientType === GradientType.linear ? GradientType.linear : GradientType.radial
    }
  };
};
const generateRandomId = (length = 7) => Math.random().toString(36).substring(1, length);
const escapeString = (text) => {
  if (!text)
    return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, function(m) {
    return map[m];
  });
};
const unescapeString = (text) => {
  if (!text)
    return "";
  const map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'"
  };
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function(m) {
    return map[m];
  });
};
const formatCurrencyVND = (value, includeUnit = true) => {
  if (typeof value !== "number")
    return null;
  let currencyFormat;
  if (includeUnit)
    currencyFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    });
  else
    currencyFormat = new Intl.NumberFormat("vi-VN");
  return currencyFormat.format(value);
};

const isAbsoluteWidth = (w) => w.unit === "px";

const {createContext,useContext: useContext$1} = await importShared('react');

const BreakpointWidthContext = createContext({
  sWidth: {
    value: 100,
    unit: "%"
  },
  mWidth: {
    value: 100,
    unit: "%"
  }
});
const getAggregateWidth = (currWidth, aggWidth) => {
  if (isAbsoluteWidth(currWidth))
    return currWidth;
  return {
    value: aggWidth.value * currWidth.value / 100,
    unit: isAbsoluteWidth(aggWidth) ? "px" : "%"
  };
};
const BreakpointWidthProvider = ({ children, sWidth, mWidth }) => {
  const { sWidth: aggregateSWidth, mWidth: aggregateMWidth } = useBreakpointWidth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BreakpointWidthContext.Provider, {
    value: {
      sWidth: getAggregateWidth(sWidth, aggregateSWidth),
      mWidth: getAggregateWidth(mWidth, aggregateMWidth)
    },
    children
  });
};
const useBreakpointWidth = () => {
  return useContext$1(BreakpointWidthContext);
};

const getBreakpointWidthFromStyle = (style) => {
  const defaultValue = {
    value: 100,
    unit: "%"
  };
  const width = style == null ? void 0 : style.width;
  const widthUnit = style == null ? void 0 : style.widthUnit;
  if (widthUnit) {
    if (isNaN(+width))
      return defaultValue;
    return {
      value: +width,
      unit: widthUnit
    };
  }
  if (typeof width === "number")
    return {
      value: width,
      unit: "px"
    };
  return defaultValue;
};

const generateArraySrcSet = (min, max) => {
  const arr = [];
  let i = 1;
  while (min * i < max) {
    if (i > 100)
      return arr;
    arr.push(min * i);
    i++;
  }
  arr.push(max);
  return arr;
};
const getSrcSetImageWidth = (maxWidthImage, breakpointWidth) => {
  const breakpointWidthS = breakpointWidth.sWidth;
  let sWidth;
  if (isAbsoluteWidth(breakpointWidthS)) {
    const minSrcSetWidth = breakpointWidthS.value;
    const maxSrcSetWidth = Math.min(maxWidthImage, minSrcSetWidth * MAX_DPR);
    sWidth = generateArraySrcSet(minSrcSetWidth, maxSrcSetWidth);
  } else {
    const minSrcSetWidth = Math.floor(
      breakpointWidthS.value * MINESTONE_M_WIDTH / 100
    );
    const maxSrcSetWidth = Math.min(maxWidthImage, minSrcSetWidth * MAX_DPR);
    sWidth = generateArraySrcSet(minSrcSetWidth, maxSrcSetWidth);
  }
  let mWidth;
  const breakpointWidthM = breakpointWidth.mWidth;
  if (isAbsoluteWidth(breakpointWidthM)) {
    const minSrcSetWidth = breakpointWidthM.value;
    const maxSrcSetWidth = Math.min(maxWidthImage, minSrcSetWidth * MAX_DPR);
    mWidth = generateArraySrcSet(minSrcSetWidth, maxSrcSetWidth);
  } else {
    const minSrcSetWidth = Math.floor(
      breakpointWidthM.value * MINESTONE_M_WIDTH / 100
    );
    const maxSrcSetWidth = maxWidthImage;
    mWidth = generateArraySrcSet(minSrcSetWidth, maxSrcSetWidth);
  }
  return {
    sWidth,
    mWidth
  };
};

const buildSrcset = (src, listWidth) => {
  return listWidth.map((w) => `${formatImageUrlQuality(src, w)} ${w}w`).join(",");
};

const buildSizes = (w) => {
  if (isAbsoluteWidth(w))
    return `${w.value}${w.unit}`;
  return `${w.value}vw`;
};

const ImageOptimize = ({
  src,
  googleImageParams
}) => {
  const breakpointWidth = useBreakpointWidth();
  const { sWidth, mWidth } = getSrcSetImageWidth(
    googleImageParams.width,
    breakpointWidth
  );
  if (!src)
    return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("source", {
        media: `(max-width: ${MINESTONE_M_WIDTH}px)`,
        srcSet: buildSrcset(src, sWidth),
        sizes: buildSizes(breakpointWidth.sWidth),
        type: "image/webp"
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("source", {
        srcSet: buildSrcset(src, mWidth),
        sizes: buildSizes(breakpointWidth.mWidth),
        type: "image/webp"
      })
    ]
  });
};

const getAttrTracking = (trackingAttr) => {
  if (!trackingAttr)
    return {};
  const { regionName, contentName, target, payload } = trackingAttr;
  return {
    "data-track-content": true,
    "data-content-region-name": regionName,
    "data-content-name": contentName,
    "data-content-target": target,
    "data-content-payload": payload
  };
};

const {useRef: useRef$3} = await importShared('react');

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$a.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$a.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Link = (_a) => {
  var _b = _a, {
    eventType,
    children,
    className,
    sectionMarginTop = 0,
    trackingEventName,
    conversionGGAdsId,
    conversionGGAdsLabel,
    scriptCustom,
    style
  } = _b, rest = __objRest$3(_b, [
    "eventType",
    "children",
    "className",
    "sectionMarginTop",
    "trackingEventName",
    "conversionGGAdsId",
    "conversionGGAdsLabel",
    "scriptCustom",
    "style"
  ]);
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  const ref = useRef$3();
  const openPopup = (popupId) => {
    var _a3;
    (_a3 = ref.current.ownerDocument.querySelector(
      `[data-uniq-id="${popupId}"]`
    )) == null ? void 0 : _a3.click();
  };
  const closePopup = (popupId) => {
    const popup = ref.current.ownerDocument.querySelector(
      `[data-uniq-id="${popupId}"]`
    );
    const maskPopup = popup == null ? void 0 : popup.parentElement;
    maskPopup.classList.remove("show");
    maskPopup.classList.add("hide-from-btn");
    popup == null ? void 0 : popup.click();
  };
  const closePopupList = (popupIds) => {
    const getAllElement = ref.current.ownerDocument.querySelectorAll(
      `[data-uniq-id]`
    );
    const popupList = [];
    getAllElement.forEach((el) => {
      if (popupIds.includes(el.getAttribute("data-uniq-id")))
        popupList.push(el);
    });
    popupList.forEach((popup) => {
      const maskPopup = popup == null ? void 0 : popup.parentElement;
      maskPopup.classList.remove("show");
      maskPopup.classList.add("hide-from-btn");
      popup == null ? void 0 : popup.click();
    });
  };
  const scrollToElement = (elementId) => {
    const isInIframe = ref.current.ownerDocument !== document;
    let innerWindow = window;
    if (isInIframe) {
      const iframeElements = window.document.getElementsByTagName("iframe");
      for (const iframe of iframeElements) {
        if (iframe.contentDocument === ref.current.ownerDocument) {
          innerWindow = iframe.contentWindow;
          break;
        }
      }
    }
    const elements = ref.current.ownerDocument.querySelectorAll(
      `[data-id="${elementId}"]`
    );
    for (const element of elements) {
      if (innerWindow.getComputedStyle(element).display !== "none") {
        const top = element.getBoundingClientRect().top + innerWindow.pageYOffset - sectionMarginTop;
        innerWindow.scrollTo({
          top,
          behavior: "smooth"
        });
      }
    }
  };
  const trackEventClick = () => {
    var _a3, _b3, _c2, _d2;
    if (trackingEventName) {
      (_a3 = window == null ? void 0 : window.gtag) == null ? void 0 : _a3.call(window, "event", trackingEventName);
      (_b3 = window == null ? void 0 : window.fbq) == null ? void 0 : _b3.call(window, "trackCustom", trackingEventName);
      (_c2 = window == null ? void 0 : window.track) == null ? void 0 : _c2.call(window, "customEvent", trackingEventName);
    }
    if (conversionGGAdsId && conversionGGAdsLabel) {
      (_d2 = window == null ? void 0 : window.gtag) == null ? void 0 : _d2.call(window, "event", "conversion", {
        send_to: `AW-${conversionGGAdsId}/${conversionGGAdsLabel}`
      });
    }
    runStringFunc(scriptCustom);
  };
  const runStringFunc = (script) => {
    if (script == null ? void 0 : script.trim()) {
      try {
        const excuteScript = new Function(unescapeString(script));
        excuteScript();
      } catch (err) {
        console.error(err);
      }
    }
  };
  if (eventType === "openPageOfWebsite" && ((_a2 = rest["openPageOfWebsite"]) == null ? void 0 : _a2.href))
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      style: __spreadValues$a({
        textDecoration: "none",
        color: "unset",
        cursor: "pointer"
      }, style),
      href: rest["openPageOfWebsite"].href,
      onClick: trackEventClick,
      target: ((_b2 = rest[eventType]) == null ? void 0 : _b2.openNewTab) ? "_blank" : "_top",
      className,
      children
    });
  if (eventType === "link" && ((_c = rest["link"]) == null ? void 0 : _c.href))
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      style: __spreadValues$a({
        textDecoration: "none",
        color: "unset",
        cursor: "pointer"
      }, style),
      href: rest["link"].href,
      onClick: trackEventClick,
      target: ((_d = rest[eventType]) == null ? void 0 : _d.openNewTab) ? "_blank" : "_top",
      className,
      rel: ((_e = rest[eventType]) == null ? void 0 : _e.nofollow) ? "nofollow" : "noopener noreferrer",
      children
    });
  if (eventType === "inPage" && rest["inPage"])
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      style: __spreadValues$a({ cursor: "pointer" }, style),
      onClick: () => {
        scrollToElement(rest["inPage"]);
        trackEventClick();
      },
      ref,
      children
    });
  if (eventType === "internal" && ((_f = rest["internal"]) == null ? void 0 : _f.href))
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      style: __spreadValues$a({
        textDecoration: "none",
        color: "unset",
        cursor: "pointer"
      }, style),
      href: `/${rest["internal"].href}`,
      onClick: trackEventClick,
      target: ((_g = rest["internal"]) == null ? void 0 : _g.openNewTab) ? "_blank" : "_top",
      className,
      rel: "noopener noreferrer",
      children
    });
  if (eventType === "email" && rest["email"])
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      style: __spreadValues$a({
        textDecoration: "none",
        color: "unset",
        cursor: "pointer"
      }, style),
      href: `mailto:${rest["email"]}`,
      onClick: trackEventClick,
      className,
      rel: "noopener noreferrer",
      target: "_top",
      children
    });
  if (eventType === "phone" && rest["phone"])
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      style: __spreadValues$a({
        textDecoration: "none",
        color: "unset",
        cursor: "pointer"
      }, style),
      href: `tel:${rest["phone"]}`,
      onClick: trackEventClick,
      className,
      rel: "noopener noreferrer",
      target: "_top",
      children
    });
  if (eventType === "openPopup" && rest["togglePopup"]) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      style,
      onClick: () => {
        openPopup(rest["togglePopup"]);
        trackEventClick();
      },
      children
    });
  }
  if (eventType === "closePopupList" && ((_h = rest["togglePopupList"]) == null ? void 0 : _h.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      style,
      onClick: () => {
        closePopupList(rest["togglePopupList"]);
        trackEventClick();
      },
      children
    });
  }
  if (eventType === "closePopup" && rest["togglePopup"]) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref,
      style,
      onClick: () => {
        closePopup(rest["togglePopup"]);
        trackEventClick();
      },
      children
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style,
    onClick: trackEventClick,
    children
  });
};

const mappingAssets = {
  cardDefaultImage: "https://lh3.googleusercontent.com/XkvvC_Xpbpatsq8nf_NUjQgAdyB2wD7qbBQO1omzrUoa3eAV7WZuKGkBHHQzDP134RfgK5TFH1tiszH11ptSXQUr5RuvkGgw",
  defaultImage: "https://lh3.googleusercontent.com/Av6FDtBu9SniovENlthB014sqhpxhMSolIBzF9NCXcs1Ky1zelW1DlQ6UHaNxDRJRoJdY-AxjQJAbnKug8WKdHhpCqGu1iJabA",
  defaultImageSvg: "https://landingbuilder-cdn.tekoapis.com/static-assets/images/default_image.svg",
  rouletteImage: "https://lh3.googleusercontent.com/E66gFfiSLjcORXrWIS91o5DKUEPVKqjYN4cc2gn-ORBa12J-2B64bYQ-y938L_ggJbxnUkfkchtlfbFxUd5fT2im6F6ONGm4tw",
  spinTriggerImage: "https://lh3.googleusercontent.com/1ZxAxoPeshezR3ZevusxeAtmn8PHtf-yK4_SMMYUsvpTdz1l0M_LWWtIo9eDNMxy3Vdssy_QLSwUSK-KpyGUlF32h7eutKA",
  checkedInputGroupImageBkg: "https://lh3.googleusercontent.com/gb3xmoWfyljDOoCzs17NowaMtKFZllc4UHeBRtAuJWxinFDRJtfmzWnZUd1Sih83LKlP1lPNFdusQVOGyn2iEs13Vra5S74",
  noProductFoundImage: "https://lh3.googleusercontent.com/aCaLPZj5x231b37or78je16Gtd7e1mOvkpPkFH_pCvr6byaFgc9rw8lOfrClBFH6RRFHP2aZTpT9eN9RuVV743YtQgKV8jG4",
  VN: "https://landingbuilder-cdn.tekoapis.com/static-assets/json/VN.json"
};

const React$3 = await importShared('react');
const {useRef: useRef$2,useState: useState$7,useEffect: useEffect$7} = React$3;

var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const { defaultImage } = mappingAssets;
const ImageWrapper = newStyled.div(
  ({
    alignment,
    customStyle
  }) => `
    text-align: ${alignment};
    ${getStyle(customStyle)}
  `
);
const funcWrapperImage = ({ commonStyle }) => `
    max-width: 100%;
    vertical-align: top;
    display: inline-block;
    transition: transform 0.3s;
    overflow: hidden;
    position: relative;
    object-fit: cover;
    object-position: inherit;
    ${getStyle(commonStyle)}
    &:before {
      z-index: 1;
    }
  `;
const StyledImageWrapperDiv = newStyled.div(funcWrapperImage);
const StyledImageWrapperPicture = newStyled.picture(funcWrapperImage);
const StyledImage = newStyled.img(
  ({
    ratioWidth,
    ratioHeight,
    src
  }) => `
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: inherit;
  &.preview {
    cursor: zoom-in;
  }
  aspect-ratio: ${!!src ? `auto ${ratioWidth} / ${ratioHeight}` : "unset"};
`
);
const PlaceholderImage = newStyled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: inherit;
  object-position: inherit;
`;
const ImageBase = React$3.forwardRef(
  (props, ref) => {
    var _b;
    const _a = props, {
      src,
      alt = "",
      commonStyle,
      alignment = "center",
      event,
      googleImageParams,
      isEditingMode = false,
      zoomPreview = false,
      fetchPriority = "auto",
      showPlaceholder = true,
      autoOptimize = true,
      linkStyle,
      imageWrapperStyle,
      isPreview = true,
      isLinkConfig = true,
      width,
      height
    } = _a, rest = __objRest$2(_a, [
      "src",
      "alt",
      "commonStyle",
      "alignment",
      "event",
      "googleImageParams",
      "isEditingMode",
      "zoomPreview",
      "fetchPriority",
      "showPlaceholder",
      "autoOptimize",
      "linkStyle",
      "imageWrapperStyle",
      "isPreview",
      "isLinkConfig",
      "width",
      "height"
    ]);
    const { tekoTrackingEvent } = event || {};
    const imageRef = useRef$2(null);
    const [showPreview, setShowPreview] = useState$7(false);
    const [mousePosition, setMousePosition] = useState$7();
    const handleOpenPreview = (e) => {
      if (!zoomPreview)
        return;
      const { left, top } = getOffset(e.target);
      setMousePosition({
        left,
        top,
        width: e.target.clientWidth
      });
      setShowPreview(true);
    };
    const imageWrapperRef = useRef$2(null);
    const mergedWrapperRef = ref || imageWrapperRef;
    const { style: animationStyle, animationClassName } = useAnimation(
      commonStyle == null ? void 0 : commonStyle.animation,
      mergedWrapperRef
    );
    const [fullLoaded, setFullLoaded] = useState$7(false);
    const newSrc = getImageUrlFromGoogleUserContent(
      src,
      preProcesssorGoogleImageParams(googleImageParams, { format: "webp" })
    );
    const pngSrc = getImageUrlFromGoogleUserContent(
      src,
      preProcesssorGoogleImageParams(googleImageParams, { format: "png" })
    );
    const imgError = (image2) => {
      image2.target.src = defaultImage;
      return;
    };
    const placeholderSrc = showPlaceholder ? formatImageUrlQuality(newSrc, 200) : "";
    const allowOptimzeImage = autoOptimize && (googleImageParams == null ? void 0 : googleImageParams.width);
    const visiblePlaceholder = showPlaceholder && !fullLoaded && placeholderSrc !== newSrc;
    const fallbackImage = /* @__PURE__ */ jsxRuntimeExports.jsx(StyledImage, {
      ref: imageRef,
      src: newSrc,
      alt,
      ratioWidth: width != null ? width : 16,
      ratioHeight: height != null ? height : 9,
      onError: imgError,
      decoding: "async",
      className: clsx("lazyload", { preview: zoomPreview }),
      loading: fetchPriority === "high" ? "eager" : "lazy",
      fetchpriority: fetchPriority,
      onLoad: () => {
        setFullLoaded(true);
      },
      onClick: handleOpenPreview
    });
    const image = allowOptimzeImage && !!src ? /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledImageWrapperPicture, {
      ref: mergedWrapperRef,
      commonStyle,
      style: animationStyle,
      className: animationClassName,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOptimize, {
          src: newSrc,
          googleImageParams
        }),
        pngSrc && /* @__PURE__ */ jsxRuntimeExports.jsx("source", {
          srcSet: pngSrc,
          type: "image/png"
        }),
        fallbackImage
      ]
    }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledImageWrapperDiv, {
      ref: mergedWrapperRef,
      commonStyle,
      style: animationStyle,
      className: animationClassName,
      children: [
        fallbackImage,
        visiblePlaceholder && /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderImage, {
          src: placeholderSrc,
          alt,
          onError: imgError,
          fetchpriority: "high"
        })
      ]
    });
    useEffect$7(() => {
      if ((imageRef == null ? void 0 : imageRef.current) !== void 0 && imageRef.current.complete !== fullLoaded)
        setFullLoaded(imageRef.current.complete);
    }, [(_b = imageRef == null ? void 0 : imageRef.current) == null ? void 0 : _b.complete, fullLoaded]);
    const renderImg = () => {
      var _a2;
      const coreImg = /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWrapper, __spreadProps$6(__spreadValues$9(__spreadValues$9(__spreadValues$9({
        customStyle: imageWrapperStyle,
        alignment
      }, getAttrTracking(tekoTrackingEvent)), tekoTrackingEvent ? tekoTrackingEvent : {}), rest), {
        children: image
      }));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
          isLinkConfig ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, __spreadProps$6(__spreadValues$9({
            style: linkStyle
          }, event), {
            children: coreImg
          })) : coreImg,
          isPreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(Preview, {
            src: newSrc || pngSrc || ((_a2 = imageRef.current) == null ? void 0 : _a2.currentSrc),
            open: showPreview,
            onClose: () => {
              setShowPreview(false);
            },
            mousePosition
          }) : null
        ]
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(BreakpointWidthProvider, {
      sWidth: getBreakpointWidthFromStyle(commonStyle),
      mWidth: getBreakpointWidthFromStyle(commonStyle),
      children: isEditingMode ? image : renderImg()
    });
  }
);

const {useRef: useRef$1,useState: useState$6,useEffect: useEffect$6} = await importShared('react');

const LazyComponent = ({ children }) => {
  const ref = useRef$1(null);
  const [hydrated, setHydrated] = useState$6(false);
  const isIntersected = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin: "30% 0px"
  });
  useEffect$6(() => {
    if (isIntersected)
      setHydrated(true);
  }, [isIntersected]);
  if (hydrated)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children
    });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: "lazy-component",
    style: { width: "100%", height: 100 }
  });
};

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

const isEqual = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

var dist = {exports: {}};

var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

var sister = Sister;

var loadYouTubeIframeApi = {exports: {}};

var loadScript = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');

  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts || {};
  cb = cb || function() {};

  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;

  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }

  if (opts.text) {
    script.text = '' + opts.text;
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script);
};

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null;
    cb(null, script); // there is no way to catch loading errors in IE8
  };
}

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadScript = loadScript;

	var _loadScript2 = _interopRequireDefault(_loadScript);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (emitter) {
	  /**
	   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
	   * The promise is resolved with a reference to window.YT object.
	   */
	  var iframeAPIReady = new Promise(function (resolve) {
	    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
	      resolve(window.YT);

	      return;
	    } else {
	      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

	      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
	        if (error) {
	          emitter.trigger('error', error);
	        }
	      });
	    }

	    var previous = window.onYouTubeIframeAPIReady;

	    // The API will call this function when page has finished downloading
	    // the JavaScript for the player API.
	    window.onYouTubeIframeAPIReady = function () {
	      if (previous) {
	        previous();
	      }

	      resolve(window.YT);
	    };
	  });

	  return iframeAPIReady;
	};

	module.exports = exports['default']; 
} (loadYouTubeIframeApi, loadYouTubeIframeApi.exports));

var loadYouTubeIframeApiExports = loadYouTubeIframeApi.exports;

var YouTubePlayer = {exports: {}};

var browser = {exports: {}};

var debug = {exports: {}};

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

(function (module, exports) {
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = ms;

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	} 
} (debug, debug.exports));

var debugExports = debug.exports;

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

(function (module, exports) {
	exports = module.exports = debugExports;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit');

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = ({}).DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	} 
} (browser, browser.exports));

var browserExports = browser.exports;

var functionNames = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	/**
	 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
	 */
	exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
	module.exports = exports['default']; 
} (functionNames, functionNames.exports));

var functionNamesExports = functionNames.exports;

var eventNames = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	/**
	 * @see https://developers.google.com/youtube/iframe_api_reference#Events
	 * `volumeChange` is not officially supported but seems to work
	 * it emits an object: `{volume: 82.6923076923077, muted: false}`
	 */
	exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
	module.exports = exports['default']; 
} (eventNames, eventNames.exports));

var eventNamesExports = eventNames.exports;

var FunctionStateMap = {exports: {}};

var PlayerStates = {exports: {}};

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  BUFFERING: 3,
	  ENDED: 0,
	  PAUSED: 2,
	  PLAYING: 1,
	  UNSTARTED: -1,
	  VIDEO_CUED: 5
	};
	module.exports = exports["default"]; 
} (PlayerStates, PlayerStates.exports));

var PlayerStatesExports = PlayerStates.exports;

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PlayerStates = PlayerStatesExports;

	var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  pauseVideo: {
	    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
	    stateChangeRequired: false
	  },
	  playVideo: {
	    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
	    stateChangeRequired: false
	  },
	  seekTo: {
	    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
	    stateChangeRequired: true,

	    // TRICKY: `seekTo` may not cause a state change if no buffering is
	    // required.
	    timeout: 3000
	  }
	};
	module.exports = exports['default']; 
} (FunctionStateMap, FunctionStateMap.exports));

var FunctionStateMapExports = FunctionStateMap.exports;

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debug = browserExports;

	var _debug2 = _interopRequireDefault(_debug);

	var _functionNames = functionNamesExports;

	var _functionNames2 = _interopRequireDefault(_functionNames);

	var _eventNames = eventNamesExports;

	var _eventNames2 = _interopRequireDefault(_eventNames);

	var _FunctionStateMap = FunctionStateMapExports;

	var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable promise/prefer-await-to-then */

	var debug = (0, _debug2.default)('youtube-player');

	var YouTubePlayer = {};

	/**
	 * Construct an object that defines an event handler for all of the YouTube
	 * player events. Proxy captured events through an event emitter.
	 *
	 * @todo Capture event parameters.
	 * @see https://developers.google.com/youtube/iframe_api_reference#Events
	 */
	YouTubePlayer.proxyEvents = function (emitter) {
	  var events = {};

	  var _loop = function _loop(eventName) {
	    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

	    events[onEventName] = function (event) {
	      debug('event "%s"', onEventName, event);

	      emitter.trigger(eventName, event);
	    };
	  };

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var eventName = _step.value;

	      _loop(eventName);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return events;
	};

	/**
	 * Delays player API method execution until player state is ready.
	 *
	 * @todo Proxy all of the methods using Object.keys.
	 * @todo See TRICKY below.
	 * @param playerAPIReady Promise that resolves when player is ready.
	 * @param strictState A flag designating whether or not to wait for
	 * an acceptable state when calling supported functions.
	 * @returns {Object}
	 */
	YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
	  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var functions = {};

	  var _loop2 = function _loop2(functionName) {
	    if (strictState && _FunctionStateMap2.default[functionName]) {
	      functions[functionName] = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return playerAPIReady.then(function (player) {
	          var stateInfo = _FunctionStateMap2.default[functionName];
	          var playerState = player.getPlayerState();

	          // eslint-disable-next-line no-warning-comments
	          // TODO: Just spread the args into the function once Babel is fixed:
	          // https://github.com/babel/babel/issues/4270
	          //
	          // eslint-disable-next-line prefer-spread
	          var value = player[functionName].apply(player, args);

	          // TRICKY: For functions like `seekTo`, a change in state must be
	          // triggered given that the resulting state could match the initial
	          // state.
	          if (stateInfo.stateChangeRequired ||

	          // eslint-disable-next-line no-extra-parens
	          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
	            return new Promise(function (resolve) {
	              var onPlayerStateChange = function onPlayerStateChange() {
	                var playerStateAfterChange = player.getPlayerState();

	                var timeout = void 0;

	                if (typeof stateInfo.timeout === 'number') {
	                  timeout = setTimeout(function () {
	                    player.removeEventListener('onStateChange', onPlayerStateChange);

	                    resolve();
	                  }, stateInfo.timeout);
	                }

	                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
	                  player.removeEventListener('onStateChange', onPlayerStateChange);

	                  clearTimeout(timeout);

	                  resolve();
	                }
	              };

	              player.addEventListener('onStateChange', onPlayerStateChange);
	            }).then(function () {
	              return value;
	            });
	          }

	          return value;
	        });
	      };
	    } else {
	      functions[functionName] = function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return playerAPIReady.then(function (player) {
	          // eslint-disable-next-line no-warning-comments
	          // TODO: Just spread the args into the function once Babel is fixed:
	          // https://github.com/babel/babel/issues/4270
	          //
	          // eslint-disable-next-line prefer-spread
	          return player[functionName].apply(player, args);
	        });
	      };
	    }
	  };

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var functionName = _step2.value;

	      _loop2(functionName);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  return functions;
	};

	exports.default = YouTubePlayer;
	module.exports = exports['default']; 
} (YouTubePlayer, YouTubePlayer.exports));

var YouTubePlayerExports = YouTubePlayer.exports;

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _sister = sister;

	var _sister2 = _interopRequireDefault(_sister);

	var _loadYouTubeIframeApi = loadYouTubeIframeApiExports;

	var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

	var _YouTubePlayer = YouTubePlayerExports;

	var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @typedef YT.Player
	 * @see https://developers.google.com/youtube/iframe_api_reference
	 * */

	/**
	 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
	 */
	var youtubeIframeAPI = void 0;

	/**
	 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
	 *
	 * @param maybeElementId Either An existing YT.Player instance,
	 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
	 * @param options See `options` (Ignored when using an existing YT.Player instance).
	 * @param strictState A flag designating whether or not to wait for
	 * an acceptable state when calling supported functions. Default: `false`.
	 * See `FunctionStateMap.js` for supported functions and acceptable states.
	 */

	exports.default = function (maybeElementId) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var emitter = (0, _sister2.default)();

	  if (!youtubeIframeAPI) {
	    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
	  }

	  if (options.events) {
	    throw new Error('Event handlers cannot be overwritten.');
	  }

	  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
	    throw new Error('Element "' + maybeElementId + '" does not exist.');
	  }

	  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

	  var playerAPIReady = new Promise(function (resolve) {
	    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
	      var player = maybeElementId;

	      resolve(player);
	    } else {
	      // asume maybeElementId can be rendered inside
	      // eslint-disable-next-line promise/catch-or-return
	      youtubeIframeAPI.then(function (YT) {
	        // eslint-disable-line promise/prefer-await-to-then
	        var player = new YT.Player(maybeElementId, options);

	        emitter.on('ready', function () {
	          resolve(player);
	        });

	        return null;
	      });
	    }
	  });

	  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

	  playerApi.on = emitter.on;
	  playerApi.off = emitter.off;

	  return playerApi;
	};

	module.exports = exports['default']; 
} (dist, dist.exports));

var distExports = dist.exports;
const youTubePlayer = /*@__PURE__*/getDefaultExportFromCjs(distExports);

var __defProp$8 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const React$2 = await importShared('react');
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps$5(__spreadValues$8({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps$5(__spreadValues$8({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !isEqual(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
};
var propTypes = {
  videoId: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  iframeClassName: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  opts: PropTypes.objectOf(PropTypes.any),
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func
};
var _YouTube = class extends React$2.Component {
  constructor(props) {
    super(props);
    this.destroyPlayerPromise = void 0;
    this.onPlayerReady = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerError = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerStateChange = (event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
      switch (event.data) {
        case _YouTube.PlayerState.ENDED:
          (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
          break;
        case _YouTube.PlayerState.PLAYING:
          (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
          break;
        case _YouTube.PlayerState.PAUSED:
          (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
          break;
      }
    };
    this.onPlayerPlaybackRateChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerPlaybackQualityChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
    };
    this.destroyPlayer = () => {
      if (this.internalPlayer) {
        this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
        return this.destroyPlayerPromise;
      }
      return Promise.resolve();
    };
    this.createPlayer = () => {
      if (typeof document === "undefined")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const playerOpts = __spreadProps$5(__spreadValues$8({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = youTubePlayer(this.container, playerOpts);
      this.internalPlayer.on("ready", this.onPlayerReady);
      this.internalPlayer.on("error", this.onPlayerError);
      this.internalPlayer.on("stateChange", this.onPlayerStateChange);
      this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
      this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
      if (this.props.title || this.props.loading) {
        this.internalPlayer.getIframe().then((iframe) => {
          if (this.props.title)
            iframe.setAttribute("title", this.props.title);
          if (this.props.loading)
            iframe.setAttribute("loading", this.props.loading);
        });
      }
    };
    this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
    this.updatePlayer = () => {
      var _a;
      (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
        if (this.props.id)
          iframe.setAttribute("id", this.props.id);
        else
          iframe.removeAttribute("id");
        if (this.props.iframeClassName)
          iframe.setAttribute("class", this.props.iframeClassName);
        else
          iframe.removeAttribute("class");
        if (this.props.opts && this.props.opts.width)
          iframe.setAttribute("width", this.props.opts.width.toString());
        else
          iframe.removeAttribute("width");
        if (this.props.opts && this.props.opts.height)
          iframe.setAttribute("height", this.props.opts.height.toString());
        else
          iframe.removeAttribute("height");
        if (this.props.title)
          iframe.setAttribute("title", this.props.title);
        else
          iframe.setAttribute("title", "YouTube video player");
        if (this.props.loading)
          iframe.setAttribute("loading", this.props.loading);
        else
          iframe.removeAttribute("loading");
      });
    };
    this.getInternalPlayer = () => {
      return this.internalPlayer;
    };
    this.updateVideo = () => {
      var _a, _b, _c, _d;
      if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
        (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
        return;
      }
      let autoplay = false;
      const opts = {
        videoId: this.props.videoId
      };
      if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
        autoplay = this.props.opts.playerVars.autoplay === 1;
        if ("start" in this.props.opts.playerVars) {
          opts.startSeconds = this.props.opts.playerVars.start;
        }
        if ("end" in this.props.opts.playerVars) {
          opts.endSeconds = this.props.opts.playerVars.end;
        }
      }
      if (autoplay) {
        (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
        return;
      }
      (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
    };
    this.refContainer = (container) => {
      this.container = container;
    };
    this.container = null;
    this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(prevProps) {
    return __async(this, null, function* () {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }
      if (shouldResetPlayer(prevProps, this.props)) {
        yield this.resetPlayer();
      }
      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ React$2.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ React$2.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var YouTube_default = YouTube;

const isGCSUrl = (url) => {
  if (!!url) {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?storage\.googleapis\.com/i;
    const match = new RegExp(regExp).test(url);
    if (match) {
      return true;
    }
  }
  return false;
};

const youtubeParser = (url) => {
  var _a;
  const formattedUrl = url == null ? void 0 : url.trim();
  if (!formattedUrl)
    return "";
  const regExp = new RegExp("^(https?:\\/\\/)?(www\\.)?(youtu\\.be\\/|youtube\\.com\\/(embed\\/|v\\/|watch\\?(.+&)*v=))(?<videoId>(\\w|-)+)");
  const { videoId } = ((_a = regExp.exec(formattedUrl)) == null ? void 0 : _a.groups) || {};
  return (videoId == null ? void 0 : videoId.length) === 11 ? videoId : "";
};

const {useRef,useState: useState$5,useEffect: useEffect$5} = await importShared('react');

var __defProp$7 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
const BackgroundVideo = ({
  src,
  uploadSrc,
  defaultOverlay,
  background,
  objectFit
}) => {
  const wrapperRef = useRef();
  const intervalRef = useRef();
  const [size, setSize] = useState$5();
  const getWidthHeightOfYtb = () => {
    if (!(wrapperRef == null ? void 0 : wrapperRef.current))
      return;
    let { clientWidth: width, clientHeight: height } = wrapperRef.current;
    const displayRatio = 16 / 9;
    const containerRatio = width / height;
    if (containerRatio < displayRatio) {
      width = height * displayRatio;
    } else if (containerRatio > displayRatio) {
      height = width / displayRatio;
    }
    return {
      width,
      height
    };
  };
  useEffect$5(() => {
    return () => clearTimeout(intervalRef.current);
  }, []);
  useEffect$5(() => {
    const resetWidthHeigthVideo = () => {
      const newSize = getWidthHeightOfYtb();
      if (newSize)
        setSize(newSize);
    };
    resetWidthHeigthVideo();
    window.addEventListener("resize", resetWidthHeigthVideo);
    return () => {
      window.removeEventListener("resize", resetWidthHeigthVideo);
    };
  }, [wrapperRef == null ? void 0 : wrapperRef.current]);
  const isIntersected = useIntersectionObserver(wrapperRef, {
    freezeOnceVisible: true
  });
  if (!src && !uploadSrc && !defaultOverlay)
    return null;
  const renderVideo = () => {
    if (!isIntersected || !wrapperRef.current)
      return null;
    if (isGCSUrl(uploadSrc)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("video", __spreadProps$4(__spreadValues$7({}, size), {
        style: __spreadProps$4(__spreadValues$7({}, videoStyle), {
          objectFit: objectFit || "fill"
        }),
        playsInline: true,
        loop: true,
        autoPlay: true,
        muted: true,
        src: uploadSrc
      }));
    }
    const videoId = youtubeParser(src);
    if (!videoId)
      return null;
    let videoPlayer;
    let totalVideoTime;
    const OVERHEAD = 10;
    const RESTART_BEFORE = 1e3;
    function checkVideoPos() {
      let currentTime = videoPlayer.getCurrentTime();
      currentTime = currentTime * 1e3;
      if (currentTime >= totalVideoTime) {
        videoPlayer.seekTo(0);
        intervalRef.current = setTimeout(checkVideoPos, totalVideoTime);
      } else {
        const newTime = totalVideoTime - currentTime - OVERHEAD;
        intervalRef.current = setTimeout(checkVideoPos, newTime);
      }
    }
    const onReady = (event) => {
      videoPlayer = event.target;
      totalVideoTime = videoPlayer.getDuration() * 1e3 - RESTART_BEFORE;
      intervalRef.current = setTimeout(checkVideoPos, totalVideoTime);
    };
    const onEnd = () => {
      clearTimeout(intervalRef.current);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StyledYtb, {
      videoId,
      opts: __spreadProps$4(__spreadValues$7({}, size), {
        playerVars: {
          playlist: videoId,
          playsInLine: 1,
          mute: 1,
          controls: 0,
          allowFullScreen: 1,
          autoplay: 1
        }
      }),
      onReady,
      onEnd
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, {
    ref: wrapperRef,
    commonStyle: {
      defaultOverlay,
      background
    },
    children: renderVideo()
  });
};
const Wrapper = newStyled.div(
  ({ commonStyle }) => `
  ${getStyle(commonStyle)}

  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`
);
const StyledYtb = newStyled(YouTube_default)`
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2; // z-index of overlay: -1
  }
`;
const videoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "-2"
};

var __defProp$6 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const getComponentProps = (compData, configs, ssrData) => {
  var _a, _b;
  const {
    customAttributes,
    style,
    elementId,
    id,
    startTime,
    endTime,
    ruleRepeat,
    date,
    duration,
    tag,
    children
  } = compData || {};
  const props = __spreadValues$6(__spreadProps$3(__spreadValues$6({}, customAttributes[tag] || {}), {
    commonStyle: style || {},
    id: elementId,
    "data-id": elementId,
    "data-uniq-id": id,
    dataUniqId: id
  }), configs);
  const clsName = clsx({
    "hidden-xs": (_a = props.responsive) == null ? void 0 : _a.hiddenXs,
    "hidden-md": (_b = props.responsive) == null ? void 0 : _b.hiddenMd
  });
  const isVisible = validateIsVisibleComponent({
    startTime,
    endTime,
    ruleRepeat,
    date,
    duration
  });
  return {
    key: id,
    props,
    className: clsName,
    ssrData,
    isVisible,
    nodes: children || []
  };
};

const React$1 = await importShared('react');
const {useMemo: useMemo$3} = React$1;

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const NodeElement = (_a) => {
  var _b = _a, {
    id
  } = _b, rest = __objRest$1(_b, [
    "id"
  ]);
  const _a2 = useStore(), { content, ssrData, componentDict, mappingDynamicSlots } = _a2, configs = __objRest$1(_a2, ["content", "ssrData", "componentDict", "mappingDynamicSlots"]);
  return useMemo$3(() => {
    var _a3, _b2;
    const nodeData = content[id];
    if (!nodeData || !componentDict[nodeData.tag]) {
      console.warn("Cannot found component: " + ((_a3 = nodeData == null ? void 0 : nodeData.tag) == null ? void 0 : _a3.toString()));
      return null;
    }
    const { className, props, isVisible } = getComponentProps(
      nodeData,
      configs,
      ssrData[id]
    );
    if (!isVisible)
      return null;
    let children;
    if ((_b2 = nodeData == null ? void 0 : nodeData.children) == null ? void 0 : _b2.length) {
      children = nodeData.children.map((childId) => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeElement, {
        id: childId
      }, childId));
    }
    const render = React$1.createElement(
      componentDict[nodeData.tag],
      __spreadValues$5(__spreadValues$5({ key: id, ssrData: ssrData[id], className }, props), rest),
      children
    );
    return render;
  }, [content[id], rest]);
};

const PATTERN_VALIDATION = {
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  phone: /^(0|84|\+84)[1-9]([0-9]{8,9})$/
};

const {useEffect: useEffect$4} = await importShared('react');


const useLocationChange = (callback, runWhenInit = false) => {
  useEffect$4(() => {
    if (runWhenInit) {
      callback();
    }
    const oldPushState = window.history.pushState;
    const oldReplaceState = window.history.replaceState;
    const dispatchEventLocationChange = () => {
      window.dispatchEvent(new Event("locationchange"));
    };
    (() => {
      window.history.pushState = function pushState(...args) {
        const ret = oldPushState.apply(this, args);
        dispatchEventLocationChange();
        return ret;
      };
      window.history.replaceState = function replaceState(...args) {
        const ret = oldReplaceState.apply(this, args);
        dispatchEventLocationChange();
        return ret;
      };
      window.addEventListener("popstate", dispatchEventLocationChange, false);
    })();
    window.addEventListener("locationchange", callback, false);
    return () => {
      window.removeEventListener("locationchange", callback, false);
      window.history.pushState = oldPushState;
      window.history.replaceState = oldReplaceState;
      window.removeEventListener(
        "popstate",
        dispatchEventLocationChange,
        false
      );
    };
  }, []);
};

const computeStringHandleBarsExpression = (str, inputs) => {
  const returnStr = str.replaceAll(/"{{([\w,.]*)}}"/g, (i) => {
    const value = get(inputs, i.replace(/"{{/, "").replace(/}}"/, ""));
    return JSON.stringify(value);
  });
  return returnStr.replaceAll(/{{([\w,.]*)}}/g, (i) => {
    var _a;
    const value = get(inputs, i.replace(/{{/, "").replace(/}}/, ""));
    return typeof value === "string" || typeof value === "number" ? (_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value) : i;
  });
};
const getAllHandleBarsVariables = (str) => {
  return (str.match(/{{([\w,.]*)}}/g) || []).map(
    (el) => el.replace(/{{/, "").replace(/}}/, "")
  );
};
const isHandleBarsVariable = (str) => {
  if (!str)
    return false;
  const regex = /{{([\w,.]*)}}/g;
  return regex.test(str);
};

const React = await importShared('react');
const {useState: useState$4,useContext} = React;

const PageDataStateContext = React.createContext({});
const PageDataProvider = ({ children, user }) => {
  const [queryParams, setQueryParams] = useState$4();
  const [components, setComponents] = useState$4();
  useLocationChange(() => {
    const search = window.location.search;
    setQueryParams(Object.fromEntries(new URLSearchParams(search)));
  }, true);
  const setComponentValueByPath = (path, value) => {
    const newComponents = Object.assign({}, components);
    set(newComponents, path, value);
    setComponents(newComponents);
  };
  const getValueByPath = (contextPath) => {
    if (!isHandleBarsVariable(contextPath))
      return get({ components, user, queryParams }, contextPath);
    return computeStringHandleBarsExpression(contextPath, {
      components,
      user,
      queryParams
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageDataStateContext.Provider, {
    value: {
      setComponentValueByPath,
      getValueByPath,
      storeData: {
        components,
        queryParams,
        user
      }
    },
    children
  });
};
function usePageData() {
  const context = useContext(PageDataStateContext);
  if (!context) {
    throw new Error(
      "use must be inside a ComponentStateContext with a state value"
    );
  }
  return context;
}

const {useMemo: useMemo$2} = await importShared('react');

const useInitValue = ({
  settingValue
}) => {
  const { storeData, getValueByPath } = usePageData();
  const initValue = useMemo$2(() => {
    const { valueType, contextPath, staticValue } = settingValue || {};
    let value;
    if (valueType === "STATIC") {
      value = staticValue;
    }
    if (valueType === "CONTEXT_PATH") {
      value = getValueByPath(contextPath);
    }
    return value;
  }, [settingValue, storeData == null ? void 0 : storeData.components]);
  return {
    initValue
  };
};

const {useEffect: useEffect$3} = await importShared('react');


var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const useInjectLinksToHTML = (links, customDocument) => {
  useEffect$3(() => {
    if (!(links == null ? void 0 : links.length))
      return;
    const injectedDocument = customDocument || document;
    const mappingExistedLinks = [
      ...injectedDocument.getElementsByTagName("link")
    ].reduce((acc, cur) => __spreadProps$2(__spreadValues$4({}, acc), { [cur.href]: true }), {});
    links.forEach(({ type, rel, href }) => {
      if (!mappingExistedLinks[href]) {
        const link = injectedDocument.createElement("link");
        if (type)
          link.type = type;
        if (rel)
          link.rel = rel;
        link.href = href;
        injectedDocument.head.appendChild(link);
        mappingExistedLinks[href] = true;
      }
    });
  }, [customDocument]);
};

const {useState: useState$3,useEffect: useEffect$2} = await importShared('react');

const useTimer = (endAt) => {
  const [time, setTime] = useState$3(() => {
    return endAt ? calculateTimeDelta(new Date(), endAt) : null;
  });
  useEffect$2(() => {
    const timer = setInterval(
      () => setTime(calculateTimeDelta(new Date(), endAt)),
      1e3
    );
    return () => {
      clearInterval(timer);
    };
  }, [endAt]);
  return time;
};

const {useMemo: useMemo$1} = await importShared('react');

const useTimeVisibility = (items, isEditingMode = false) => {
  const displayItems = useMemo$1(() => {
    return items == null ? void 0 : items.filter((item) => {
      return !isEditingMode ? validateIsVisibleComponent((item == null ? void 0 : item.timeVisibility) || {}) : true;
    });
  }, [isEditingMode, items]);
  return {
    displayItems
  };
};

const useInjectDynamicLinks = (text, trackingAttr) => {
  const { mappingWebsiteMenuHref } = useStore();
  const formatText = () => {
    let baseText = text;
    if (text && trackingAttr)
      baseText = text.replace(
        /<a(.*?)<\/a>/g,
        `<span ${trackingAttr}><a$1</a></span>`
      );
    if (!text || !mappingWebsiteMenuHref)
      return baseText;
    return baseText.replace(
      new RegExp('(?<start><a[^>]+data-page-id=)"(?<pageId>[a-zA-Z0-9]+)"(?<end>[^>]*>)', "g"),
      (string, start, pageId, end) => {
        const href = mappingWebsiteMenuHref[pageId];
        if (!href)
          return string;
        return `${start}"${pageId}" href="${href}"${end}`;
      }
    );
  };
  return {
    text: formatText()
  };
};

const {useState: useState$2,useEffect: useEffect$1} = await importShared('react');

var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const useEndpointHandler = (endpointId) => {
  const [queryParams, setQueryParams] = useState$2();
  const [loading, setLoading] = useState$2(false);
  const [data, setData] = useState$2();
  const [error, setError] = useState$2();
  const {
    auth: { getAccessToken, user = {} } = {},
    globalData: { endpoints = [] } = {}
  } = useStore();
  const checkCanFetchData = (endpoint) => {
    const urlVars = getAllHandleBarsVariables(endpoint.url || "");
    const bodyVars = getAllHandleBarsVariables(endpoint.body || "");
    const headerVars = getAllHandleBarsVariables(endpoint.headers || "");
    return [...urlVars, ...bodyVars, ...headerVars].every((variable) => {
      const value = get({ queryParams, user }, variable);
      return typeof value !== "undefined";
    });
  };
  const fetchData = async () => {
    const endpoint = endpoints.find((e) => e.id === endpointId);
    if (!endpoint || !checkCanFetchData(endpoint) || !queryParams)
      return;
    const api = new Api("");
    const url = computeStringHandleBarsExpression(endpoint.url, {
      queryParams,
      user
    });
    let body, headers = {};
    if (endpoint.method !== "GET" && endpoint.body) {
      try {
        body = JSON.parse(
          computeStringHandleBarsExpression(endpoint.body, {
            queryParams,
            user
          })
        );
      } catch (e) {
        console.error(e);
        body = {};
      }
    }
    if (endpoint.headers) {
      try {
        headers = JSON.parse(
          computeStringHandleBarsExpression(endpoint.headers, {
            queryParams,
            user
          })
        );
      } catch (e) {
        console.error(e);
        headers = {};
      }
    }
    const accessToken = getAccessToken == null ? void 0 : getAccessToken();
    const tenant_id = user == null ? void 0 : user.tenant_id;
    try {
      setLoading(true);
      const res = await api.request(url, body, endpoint.method, {
        headers: __spreadValues$3(__spreadValues$3(__spreadValues$3({}, headers), accessToken ? { Authorization: `Bearer ${accessToken}` } : {}), tenant_id ? { "X-Tenant-Id": tenant_id } : {})
      });
      setError(void 0);
      setData(res.data);
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useLocationChange(() => {
    const search = window.location.search;
    setQueryParams(Object.fromEntries(new URLSearchParams(search)));
  }, true);
  useEffect$1(() => {
    const revalidateDataOnFocus = () => {
      if (document.visibilityState === "visible") {
        fetchData();
      }
    };
    fetchData();
    document.addEventListener("visibilitychange", revalidateDataOnFocus);
    return () => {
      document.removeEventListener("visibilitychange", revalidateDataOnFocus);
    };
  }, [endpointId, JSON.stringify(endpoints), JSON.stringify(queryParams)]);
  return {
    result: data,
    loading: data == void 0 && loading,
    error,
    queryParams
  };
};

const {useState: useState$1} = await importShared('react');

var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const useEndpointHandlerV2 = () => {
  const [loading, setLoading] = useState$1(false);
  const { auth: { getAccessToken } = {}, globalData: { endpoints = [] } = {} } = useStore();
  const { getValueByPath, storeData } = usePageData();
  const buildParamsObject = (endpointParam, mappingParam, onlyRequiredField = false) => {
    if (!endpointParam)
      return;
    const objMapParam = (mappingParam || []).reduce((prev, curr) => {
      prev[curr.name] = curr;
      return prev;
    }, {});
    const objParam = endpointParam.reduce((prev, curr) => {
      if (onlyRequiredField && !curr.isRequired)
        return prev;
      const valueType = objMapParam[curr.paramName].valueType;
      const staticValue = objMapParam[curr.paramName].staticValue;
      const contextPath = objMapParam[curr.paramName].contextPath;
      if (valueType === "CONTEXT_PATH" && contextPath) {
        prev[curr.paramName] = getValueByPath(contextPath);
      }
      if (valueType === "STATIC" && staticValue) {
        prev[curr.paramName] = staticValue;
      }
      return prev;
    }, {});
    return objParam;
  };
  const checkCanFetchData = (endpoint, mappingParams) => {
    const params = buildParamsObject(endpoint.params, mappingParams, true) || {};
    const inputs = __spreadProps$1(__spreadValues$2({}, storeData), { params });
    const urlVars = getAllHandleBarsVariables(endpoint.url || "");
    const bodyVars = getAllHandleBarsVariables(endpoint.body || "");
    const headerVars = getAllHandleBarsVariables(endpoint.headers || "");
    return [...urlVars, ...bodyVars, ...headerVars].every((variable) => {
      const value = get(inputs, variable);
      return typeof value !== "undefined";
    });
  };
  const fetchData = async ({
    endpointId,
    mappingParams
  }) => {
    var _a, _b;
    const endpoint = endpoints.find((e) => e.id === endpointId);
    if (!endpoint || !checkCanFetchData(endpoint, mappingParams))
      return;
    const params = buildParamsObject(endpoint.params, mappingParams) || {};
    const inputs = __spreadProps$1(__spreadValues$2({}, storeData), { params });
    const api = new Api("");
    const url = computeStringHandleBarsExpression(endpoint.url, inputs);
    let body, headers = {};
    if (endpoint.method !== "GET" && endpoint.body) {
      try {
        body = JSON.parse(
          computeStringHandleBarsExpression(endpoint.body, inputs)
        );
      } catch (e) {
        console.error(e);
        body = {};
      }
    }
    if (endpoint.headers) {
      try {
        headers = JSON.parse(
          computeStringHandleBarsExpression(endpoint.headers, inputs)
        );
      } catch (e) {
        console.error(e);
        headers = {};
      }
    }
    const accessToken = getAccessToken == null ? void 0 : getAccessToken();
    const tenant_id = (_a = storeData == null ? void 0 : storeData.user) == null ? void 0 : _a.tenant_id;
    try {
      setLoading(true);
      const res = await api.request(url, body, endpoint.method, {
        headers: __spreadValues$2(__spreadValues$2(__spreadValues$2({}, headers), accessToken ? { Authorization: `Bearer ${accessToken}` } : {}), tenant_id ? { "X-Tenant-Id": tenant_id } : {})
      });
      return (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.data;
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };
  return {
    fetchData,
    loading
  };
};

const useGetDynamicValue = () => {
  const { getValueByPath } = usePageData();
  const getValue = (valueConfig, extraDataSrc) => {
    const { valueType, contextPath, staticValue } = valueConfig || {};
    if (valueType === "STATIC" && staticValue)
      return staticValue;
    if (valueType === "CONTEXT_PATH" && contextPath) {
      return get(extraDataSrc, contextPath) || getValueByPath(contextPath);
    }
  };
  return { getValue };
};

const buildSrcsetDPR = (imageUrl, absolutedWidth) => {
  if (!imageUrl)
    return "";
  if (!imageUrl.startsWith("https://lh3.googleusercontent.com/"))
    return imageUrl;
  return Array.from({ length: MAX_DPR }, (_, i) => i + 1).map(
    (dpr) => `${constructGoogleImageParams(imageUrl, {
      width: absolutedWidth * dpr,
      format: "webp"
    })} ${dpr}x`
  ).join(", ");
};

var lodash_merge = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
lodash_merge.exports;

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeMax = Math.max,
	    nativeNow = Date.now;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge; 
} (lodash_merge, lodash_merge.exports));

var lodash_mergeExports = lodash_merge.exports;
const mergeLodash = /*@__PURE__*/getDefaultExportFromCjs(lodash_mergeExports);

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const getTrackingData = ({
  isTrackContent,
  contentName,
  index,
  regionName,
  target,
  payload
}) => {
  return __spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, regionName && { "data-content-region-name": regionName }), isTrackContent && { "data-track-content": true }), contentName && { "data-content-name": contentName }), (index || index === 0) && { "data-content-index": index }), target && { "data-content-target": target }), payload && { "data-content-payload": payload });
};
const getPropsByDevice = (props, device = "desktop") => {
  const _a = props, { syncDeviceStyle, desktop, mobile, commonStyle } = _a, rest = __objRest(_a, ["syncDeviceStyle", "desktop", "mobile", "commonStyle"]);
  const _b = commonStyle || {}, {
    desktop: desktopStyle,
    mobile: mobileStyle
  } = _b, restStyle = __objRest(_b, [
    "desktop",
    "mobile"
  ]);
  if (!desktop && !mobile && !desktopStyle && !mobileStyle)
    return props;
  if (device === "mobile") {
    const inheritDesktopProps = syncDeviceStyle === void 0;
    const newCommonStyle2 = mergeLodash(
      {},
      restStyle,
      inheritDesktopProps ? desktopStyle : {},
      mobileStyle
    );
    return mergeLodash(
      { commonStyle: newCommonStyle2 },
      rest,
      inheritDesktopProps ? desktop : {},
      mobile
    );
  }
  const newCommonStyle = mergeLodash(
    {},
    restStyle,
    desktopStyle
  );
  return mergeLodash(
    { commonStyle: newCommonStyle },
    rest,
    desktop
  );
};
const getTargetOfTrackingFromEvent = (event) => {
  var _a;
  const key = event == null ? void 0 : event.eventType;
  switch (key) {
    case "openPageOfWebsite":
    case "link":
    case "internal":
      return (_a = event[key]) == null ? void 0 : _a.href;
    case "email":
    case "phone":
    case "inPage":
      return event[key];
    case "openPopup":
    case "closePopup":
      return event.togglePopup;
    default:
      return void 0;
  }
};
const buildComponentDict = (objComponent) => {
  const components = Object.values(objComponent);
  return components.reduce((acc, cur) => {
    const name = cur.displayName || cur.name;
    const key = name.toLowerCase();
    acc[key] = cur;
    return acc;
  }, {});
};

const {useState,useEffect,useMemo} = await importShared('react');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const RenderPage = ({
  content = {},
  configs,
  ssrData = {},
  mappingDynamicSlots,
  rootId = "ROOT",
  addGlobalStyle = true,
  numOfHydratedBlocks,
  addLandingLinks = true,
  componentDict
}) => {
  var _a, _b, _c;
  const [client, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const RootComp = componentDict[(_c = (_b = (_a = content[rootId]) == null ? void 0 : _a.tag) == null ? void 0 : _b.toString()) == null ? void 0 : _c.toLowerCase()];
  const rootProps = useMemo(() => {
    return getComponentProps(content[rootId], configs, ssrData[rootId]);
  }, [content[rootId]]);
  const childNode = useMemo(() => {
    var _a2;
    const childLength = ((_a2 = rootProps.nodes) == null ? void 0 : _a2.length) || 0;
    return !client && numOfHydratedBlocks && childLength > numOfHydratedBlocks ? rootProps.nodes.slice(0, numOfHydratedBlocks) : rootProps.nodes;
  }, [rootProps.nodes, client]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(StoreProvider, __spreadProps(__spreadValues({
    ssrData,
    content,
    mappingDynamicSlots,
    componentDict
  }, configs), {
    children: [
      addGlobalStyle && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
            styles: reset
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
            styles: rcCascaderCss
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
            styles: animationCss
          })
        ]
      }),
      addLandingLinks && /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLinks, {}),
      RootComp && rootProps.isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(RootComp, __spreadProps(__spreadValues({
        className: rootProps.className,
        ssrData: ssrData[rootId]
      }, rootProps.props), {
        children: childNode.map((nodeId) => /* @__PURE__ */ jsxRuntimeExports.jsx(NodeElement, {
          id: nodeId
        }, nodeId))
      }), rootProps.key)
    ]
  }));
};

export { ARTICLE_HEADER, Alignment, Api, ApiError, BG_LAZY_CLASS_NAME, BG_VISIBLE_LAZY_CLASS_NAME, BUBBLE, BackgroundVideo, BreakpointWidthProvider, BuilderComponent, COMPONENT_TAG, ColorType, FOOTER, GradientType, HEADER, ImageBase, ImageOptimize, LandingLinks, LazyComponent, Link, MAX_DPR, MINESTONE_M_WIDTH, NodeElement, OverlayType, PATTERN_VALIDATION, PageDataProvider, PreviewGroupProvider, ROOT, ROOT_SELECTOR_NAME, RenderPage, RepeatTypeEnum, RuleRepeatEnum, StoreProvider, TEMPI_MAIN_IFRAME, UnitEnum, UnitRepeatEnum, VerticalAlignment, animationCss, buildComponentDict, buildSizes, buildSrcset, buildSrcsetDPR, builder, calculateTimeDelta, computeStringHandleBarsExpression, constructGoogleImageParams, debounce, escapeString, fontQueryParams, formatCurrencyVND, formatImageUrlQuality, generate, generateRandomId, getAllHandleBarsVariables, getAnimation, getAttrTracking, getBackgroundImageMarquee, getBackgroundOverlay, getBoxShadow, getBreakpointWidthFromStyle, getCommonCss, getComponentProps, getImageUrlFromGoogleUserContent, getOffset, getPropsByDevice, getRgbaFromHex, getScrollbarWidth, getSrcSetImageWidth, getStyle, getTargetOfTrackingFromEvent, getTrackingData, isAbsoluteWidth, isGCSUrl, isHandleBarsVariable, landingLinks, mappingAssets, parseColor, parseRuleRepeat, pbFontFamily, pbFontWeight, pixelParse, preProcesssorGoogleImageParams, publicBffUrl, rcCascaderCss, reset, stringifyColor, unescapeString, unitParse, useAnimation, useBreakpointWidth, useEndpointHandler, useEndpointHandlerV2, useGetDynamicValue, useInitValue, useInjectDynamicLinks, useInjectLinksToHTML, useIntersectionObserver, useLocationChange, usePageData, usePreviewGroup, useStore, useTimeVisibility, useTimer, validateIsVisibleComponent, youtubeParser };
