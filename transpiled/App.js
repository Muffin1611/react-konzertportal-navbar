'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { 'class': 'navbar navbar-default navbar-fixed-top' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', 'class': 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
                            _react2.default.createElement('span', { 'class': 'icon-bar' }),
                            _react2.default.createElement('span', { 'class': 'icon-bar' }),
                            _react2.default.createElement('span', { 'class': 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { 'class': 'navbar-brand', href: '#home' },
                            'Logo'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'collapse navbar-collapse', id: 'myNavbar' },
                        _react2.default.createElement(
                            'ul',
                            { 'class': 'nav navbar-nav navbar-right' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#home' },
                                    'HOME'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#login' },
                                    'ANMELDEN'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#contact' },
                                    'KONTAKT'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { 'class': 'dropdown' },
                                _react2.default.createElement(
                                    'a',
                                    { 'class': 'dropdown-toggle', 'data-toggle': 'dropdown', href: '#more' },
                                    'MEHR',
                                    _react2.default.createElement('span', { 'class': 'caret' })
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { 'class': 'dropdown-menu' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#merchandise' },
                                            'Merchandise'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#extras' },
                                            'Extras'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#media' },
                                            'Media'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#search' },
                                    _react2.default.createElement('span', { 'class': 'glyphicon glyphicon-search' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;