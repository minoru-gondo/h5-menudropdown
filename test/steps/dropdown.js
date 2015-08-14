module.exports = function (library, expect, h5_test) {
    library
        .given('que o estado da estória é ([^\u0000]*)', function (estado, next) {
            expect(estado, 'estado').to.be.an('string');
            h5_test.replace('___fields___', estado);
            next();
        }).when('eu renderizar (.*)', function (caso, next) {
            h5_test.replace('___caso___', caso);
            h5_test.file('app/exemplo.js');
            h5_test.serve('app/index.html');
            h5_test.pack('app', next);
        }).when('eu clicar no icone', function (next) {
            h5_test.run('test/clickIcon.js');
            next();
        }).when('eu clicar no item', function (next) {
            h5_test.run('test/clickItem.js');
            next();
        }).then('deverá ser exibido ([^\u0000]*)', function (spec, next) {
            expect(spec).to.be.an('string');
            h5_test.replace('___spec___', spec.replace(/\n/g, '\n    '));
            h5_test.check('test/homepage.spec');
            next();
        })
};
