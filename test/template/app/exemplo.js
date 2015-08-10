var React = require('react');
var Menudropdown = require('../../../src/h5-menudropdown.js');

window.hsession = {
    language: 'pt_br'
};

var mock_store = {
    items: [
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

var Exemplo = React.createClass({
    render: function () {
        return React.createElement(Menudropdown, {
            store: mock_store
        });
    }
});

React.render(React.createElement(Exemplo), document.getElementById('app'));
