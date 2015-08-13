var React = require('react');
var Menudropdown = require('../../../src/h5-menudropdown.js');

window.hsession = {
    language: 'pt_br'
};

//var mock_store = {
//    menu: [
//        {
//            caption: "QuickEdit",
//            onClick: function clica() {
//                alert("QuickEdit");
//            }
//        },
//        {
//            caption: "Quick Docs",
//            onClick: function clica() {
//                alert("Quick Docs");
//            }
//        }
//    ]
//};


var mock_store = {
    menu: [___fields___]
};

var Exemplo = React.createClass({
    render: function () {

        //        var width = document.getElementsByTagName('body');
        //
        //        if(width[0].offsetWidth >= 502) {
        //            props_Menu.className = 'h_iconDropDown_menu_desktop';
        //            props.className = "fa fa-ellipsis-v fa-2x h_iconDropDown_desktop";
        //        }
        //
        //        else {
        //            props_Menu.className = 'h_iconDropDown_menu_mobile';
        //            props.className = "fa fa-ellipsis-v h_iconDropDown_mobile";
        //
        //        }



        return React.createElement('div', {}, ['exemplo menu drop down',
                   React.createElement(Menudropdown, {
                icon: 'fa fa-ellipsis-v fa-2x',
                menu: mock_store.menu
            })

           ]);
    }
});

React.render(React.createElement(Exemplo), document.getElementById('app'));
