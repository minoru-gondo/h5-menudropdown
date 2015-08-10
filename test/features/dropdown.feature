  Funcionalidade: componente para agrupar opções
  Para permitir ao usuario ter acesso à esse agrupamento
  Eu, como programador
  Desejo utilizar o componente h5-menudropdown

  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Então deverá ser exibido [spec]
  Exemplos:
    caso                | estado                   | spec
    ----------------------------------------------------------------
    3 opções && fechado | {caption: "QuickEdit"},  | body:
                        | {caption: "Quick Docs"}, |   contains icon
                        | {caption: "Quick Edit"}  |
