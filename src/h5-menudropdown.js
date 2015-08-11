var React = require('react');
var h5dropdown = require('h5-dropdown');
require('./icondropdown.less');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var H5Menudropdown = React.createClass({
    propTypes: {
        menu: React.PropTypes.array.isRequired
    },
    mixins: [h5dropdown],
    render: function () {
        console.log('render '+new Date().toString()+"  "+   this.isDropDown());
        var props = {key:'icon'};
        var props_Menu = {};
        var width = document.getElementsByTagName('body');

        if(width[0].offsetWidth >= 502) {
            props_Menu.className = 'h_iconDropDown_menu_desktop';
            props.className = "fa fa-ellipsis-v fa-2x h_iconDropDown_desktop";
        }

        else {
            props_Menu.className = 'h_iconDropDown_menu_mobile';
            props.className = "fa fa-ellipsis-v h_iconDropDown_mobile";

        }
        props.menuDropDownItems = this.props.menu;
        props.onTouchTap = this.toggleDropDown;
        var self = this;

        var dropDown = (this.isDropDown() ?
                < div key="dropdown" className = {props_Menu.className} >
            {
                props.menuDropDownItems.map(function (item, idx, arrayDropDown) {
                    return ( < div key={item.caption} className = 'h_iconDropDown_itens'
                        onClick = {
                            function (e) {
                                e.preventDefault();
                                self._click(item);
                                self.closeDropDown();
                            }
                        } > {
                            item.caption
                        } < /div>
                    )
                })
            }
                < /div>
            : null);

        return (React.createElement('div', {}, [React.createElement('icon', props),
            dropDown
        ]));

    },
    _click: function (item) {
        item.onClick();
        this.setState({});
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
