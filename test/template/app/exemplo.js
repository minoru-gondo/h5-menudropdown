var React = require('react');
var Menudropdown = require('../../../src/h5-menudropdown.js');

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
    menu: [
        {
            caption: "QuickEdit",
            onClick: function clica() {
                alert("QuickEdit");
            }
        },
        {
            caption: "Quick Docs",
            onClick: function clica() {
                alert("Quick Docs");
            }
        }
    ]
};
//var mock_store = {
//    items: [___fields___]
//};

var Exemplo = React.createClass({
    render: function () {
        return     React.createElement('div', {},[ 'exemplo menu drop down',
        React.createElement(Menudropdown, {menu: mock_store.menu })
        ]);
    }
});

React.render(React.createElement(Exemplo), document.getElementById('app'));
