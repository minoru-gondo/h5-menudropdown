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

//var mock_store = {
//    menu: [__fields___]
//};

var mock_store = {
    actions: {
        voltar: {
            labelText: 'Voltar',
            mode: 'visible',
            kind: 'secondary',
            run: function () {
                alert("OK");
            },
            hintText: 'Sair da tela de edição do paciente'
        },
        tirar_foto: {
            labelText: 'Tirar Foto',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_1: {
            labelText: 'Tirar Foto 1',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_2: {
            labelText: 'Tirar Foto 2',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_3: {
            labelText: 'Tirar Foto 3',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_4: {
            labelText: 'Tirar Foto 4',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_5: {
            labelText: 'Tirar Foto 5',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_6: {
            labelText: 'Tirar Foto 6',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_7: {
            labelText: 'Tirar Foto 7',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        },
        tirar_foto_8: {
            labelText: 'Tirar Foto 8',
            mode: 'visible',
            kind: 'tertiary',
            run: function () {
                alert("OK");
            },
            hintText: 'Tirar foto do paciente'
        }
    }
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
                key: "EXEMPLO",
                icon: 'fa fa-ellipsis-v fa-2x',
                actions: mock_store.actions
            })

           ]);
    }
});

React.render(React.createElement(Exemplo), document.getElementById('app'));
