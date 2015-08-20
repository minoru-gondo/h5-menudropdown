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
        var _html = document.querySelector("html");
        var largura_html = _html.offsetWidth;
        var altura_html = _html.offsetHeight;
        var icon = this.props.icon.split(' ');
        var _icon = document.querySelector("." + icon[1]);
        var left_icon;
        var top_icon;
        var largura_icon;
        var altura_icon;
        var style;

        function getOffset( elemento ) {
            var x = 0;
            var y = 0;
            while( elemento && !isNaN( elemento.offsetLeft ) && !isNaN( elemento.offsetTop ) ) {
                x += elemento.offsetLeft - elemento.scrollLeft;
                y += elemento.offsetTop - elemento.scrollTop;
                elemento = elemento.offsetParent;
            }
            return { top: y, left: x };
        }
        var icon_abs_pos;

        if(_icon){
            left_icon = _icon.offsetLeft;
            top_icon = _icon.offsetTop;
            largura_icon = _icon.offsetWidth;
            altura_icon = _icon.offsetHeight;
            icon_abs_pos = getOffset( _icon );
        }


        if(top_icon <= (altura_html/2) && left_icon <= (largura_html/2)){
            style = {
                left: left_icon,
                top: top_icon + altura_icon + 2,
                position: 'absolute'
            }
        }
        if(top_icon > (altura_html/2) && left_icon <= (largura_html/2)){
            style = {
                left: left_icon,
                bottom: document.documentElement.clientHeight -  icon_abs_pos.top + 2,
                position: 'absolute'
            }
        }
        if(top_icon <= (altura_html/2) && left_icon >= (largura_html/2)){
            style = {
                right: document.documentElement.clientWidth - left_icon,
                top: top_icon + altura_icon + 2,
                position: 'absolute'
            }
        }
        if(top_icon > (altura_html/2) && left_icon >= (largura_html/2)){
            style = {
                right: document.documentElement.clientWidth - left_icon,
                bottom: document.documentElement.clientHeight -  icon_abs_pos.top + 2,
                position: 'absolute'
            }
        }
        return (React.createElement("div", {}, [React.createElement("icon", {
                className: this.props.icon + " icon_details ",
                onClick: this.toggleDropDown
            }),
            this.isDropDown() ? React.createElement("div", {style: style}, [this.createItensMenu()]) : null
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
