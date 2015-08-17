var React = require('react');
var h5dropdown = require('h5-dropdown');
//require('./icondropdown.less');

var i = 1;
var H5Menudropdown = React.createClass({
    propTypes: {
        actions: React.PropTypes.object.isRequired,
        icon: React.PropTypes.string.isRequired
    },
    mixins: [h5dropdown],
    render: function () {

        return (React.createElement("div", {}, [React.createElement("icon", {
                className: this.props.icon,
                onClick: this.toggleDropDown
            }),
            this.isDropDown() ? React.createElement("ul", {}, [this.createItensMenu()]) : null
      ]));
    },
    createItensMenu: function () {
        var actions = this.props.actions;
        var itens = [];
        for (action in actions) {
            itens.push(React.createElement("li", {
                onClick: function () {
                    alert(actions[action].labelText);
                    actions[action].run();
                }
            }, [actions[action].labelText]));
        }
        return itens;
    }
});

module.exports = H5Menudropdown;
