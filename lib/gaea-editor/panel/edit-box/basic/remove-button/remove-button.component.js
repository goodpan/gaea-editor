"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./remove-button.type");
var mobx_react_1 = require("mobx-react");
var index_1 = require('nt-web-button');
var index_2 = require('nt-web-modal');
var index_3 = require('nt-auto-bind');
var RemoveButton = function (_React$Component) {
    _inherits(RemoveButton, _React$Component);

    function RemoveButton() {
        _classCallCheck(this, RemoveButton);

        var _this = _possibleConstructorReturn(this, (RemoveButton.__proto__ || Object.getPrototypeOf(RemoveButton)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(RemoveButton, [{
        key: "handleShowModalOrClick",
        value: function handleShowModalOrClick() {
            if (this.props.setting.data.confirmWhenRemoveComponent) {
                this.setState({
                    show: true
                });
            } else {
                this.handleOk();
            }
        }
    }, {
        key: "handleOk",
        value: function handleOk() {
            var currentEditComponentMapUniqueKey = this.props.viewport.currentEditComponentMapUniqueKey;
            this.props.viewport.deleteComponentByMapUniqueKeyWithHistory(currentEditComponentMapUniqueKey);
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(index_1.default, { type: "secondary", onClick: this.handleShowModalOrClick }, "移除", React.createElement(index_2.default, { show: this.state.show, onOk: this.handleOk, onCancel: this.handleCancel }, React.createElement("p", null, "是否要移除此组件?")));
        }
    }]);

    return RemoveButton;
}(React.Component);
RemoveButton.defaultProps = new typings.Props();
__decorate([index_3.autoBindMethod], RemoveButton.prototype, "handleShowModalOrClick", null);
__decorate([index_3.autoBindMethod], RemoveButton.prototype, "handleOk", null);
__decorate([index_3.autoBindMethod], RemoveButton.prototype, "handleCancel", null);
RemoveButton = __decorate([mobx_react_1.inject('viewport', 'setting'), mobx_react_1.observer], RemoveButton);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RemoveButton;