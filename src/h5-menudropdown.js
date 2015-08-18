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

        return (React.createElement("div", {}, [React.createElement("icon", {
                className: this.props.icon + " icon_details",
                onClick: this.toggleDropDown
            }),
            this.isDropDown() ? React.createElement("div", {}, [this.createItensMenu()]) : null
      ]));
    },
    createItensMenu: function () {
        var actions = this.props.actions;
        var itens = [];
        var action_names;
        for (var action in actions) {
            action_names = Object.keys(actions);
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
