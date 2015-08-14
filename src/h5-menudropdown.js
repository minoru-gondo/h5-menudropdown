var React = require('react');
var h5dropdown = require('h5-dropdown');
require('./icondropdown.less');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var H5Menudropdown = React.createClass({
    propTypes: {
        actions: React.PropTypes.array.isRequired
    },
    mixins: [h5dropdown],
    render: function () {

        var self = this;
        var children = [];
        if (this.isDropDown()) {
            var dropdownProps = {
                style: {
                    position: 'fixed',
                    left: 0,
                    top: 0
                }
            }
            children.push( React.createElement('ul', dropdownProps,
                this.props.actions.map(function (action) {
                var itemProps = {
                    key: action.labelText,
                    className: 'h_iconDropDown_action',
                    teste: "1",
                    onmouseover: function () {
                        console.log('over')
                    },
                    onClick: function (e) {
                        alert('xxxx');
                        e.preventDefault();
                        self.closeDropDown();
                        action.run();
                    }
                }
                return React.createElement('li', itemProps, action.labelText)
            })))
        }

        var iconsProps = {
            key: 'icon',
            className: this.props.icon,
            onClick: function () {
                self.toggleDropDown()
            }
            //onBlur: this.closeDropDown
        }

        children.unshift(React.createElement('div', iconsProps, {}))

        return React.createElement('div', null, children);

    }
});

module.exports = H5Menudropdown;









//
//
//var H5Menudropdown = React.createClass({
//    propTypes: {
//        iconClassName: React.PropTypes.string.isRequired,
//        onClick: React.PropTypes.func,
//        style: React.PropTypes.object,
//    },
//    mixins: [h5dropdown],
//    render: function () {
//
//        if (!this.props.iconClassName && !this.props.className)
//            return console.error("Is necessary propreyty iconClassName or name in button");
//
//        var props = {};
//        if(this.props.name){
//            if (this.props.name == "hpencil")
//                props.className = "fa fa-pencil";
//            else if (this.props.name == "hpencil_spin")
//                props.className = "fa fa-pencil fa-spin";
//            else if (this.props.name == "hamburger_pontos")
//                props.className = "fa fa-ellipsis-v";
//            else if (this.props.name == "excluir")
//                props.className = "fa fa-times testImgBtn";
//            else if (this.props.name == "salvar")
//                props.className = "fa fa-floppy-o testImgBtn";
//            else
//                props.className = this.props.name;
//        }
//        else if(this.props.className)
//            props.className = this.props.className;
//        else
//            props.className = this.props.iconClassName;
//        props.style = this.props.style;
//        props.onTouchTap = this.toggleDropDown;
//
//        var self = this;
//        return (React.createElement('div', {}, [React.createElement('icon', props),
//            this.isDropDown() ?
//                <div className='h_iconDropDown_menu'>
//                    {this.props.menuDropDownItens.map(function(item, idx, arrayDropDown){
//                        return(
//                                <div className='h_iconDropDown_itens' onClick={function(e){
//                                        e.preventDefault();
//                                                self.closeDropDown();
//                                        self.props.onItemClick(self.props.indexItens, self.props.arrayItens, e, idx, arrayDropDown[idx]);
//                                }}>{item.text}</div>
//                            )
//                        })
//                    }
//                </div> : null
//        ]));
//    }
//
//});
//
//module.exports = HIcon;
