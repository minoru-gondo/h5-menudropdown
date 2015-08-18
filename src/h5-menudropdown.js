var React = require('react');
var h5dropdown = require('h5-dropdown');
require('./icondropdown.less');

var i = 1;
var H5Menudropdown = React.createClass({
    propTypes: {
        actions: React.PropTypes.object.isRequired,
        icon: React.PropTypes.string.isRequired
    },
    mixins: [h5dropdown],
    render: function () {
        var total_actions = Object.keys(this.props.actions);
        var class_position = this.props.icon.split(' ');
        class_position = class_position[class_position.length-1];
        var style_desktop = {
        marginTop: - total_actions.length * 33 + "px !important",
        marginLeft: -20 + "px !important"
        }
        return (React.createElement("div", {}, [React.createElement("icon", {
                className: this.props.icon + " icon_details ",
                onClick: this.toggleDropDown
            }),
            this.isDropDown() ? React.createElement("div", {className: class_position, style: style_desktop}, [this.createItensMenu()]) : null
      ]));
    },
    createItensMenu: function () {
        var actions = this.props.actions;
        var itens = [];

        for (var action in actions) {
            itens.push(React.createElement("div", {
                className: "h_iconDropDown_action " + action,
                onClick: this._click
            }, [actions[action].labelText]));
        }
        return itens;
    },

    _click: function(action_clicked){
        var x = action_clicked.currentTarget.className.split(' ');
                x = x[x.length-1];
                this.props.actions[x].run();
                this.closeDropDown();
    }
});

module.exports = H5Menudropdown;
