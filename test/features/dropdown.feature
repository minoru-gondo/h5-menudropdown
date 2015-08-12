  Funcionalidade: componente para agrupar opções
  Para permitir ao usuario ter acesso à esse agrupamento
  Eu, como programador
  Desejo utilizar o componente h5-menudropdown

  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Então deverá ser exibido [spec]
  Exemplos:
    caso    | estado | spec
    ---------------------------------------------------
    fechado |        | body:
            |        |   contains icon
    ---------------------------------------------------
    posição |        | icon:
            |        |   below span 0 to 20 px
            |        |   inside body 19px top, 0px left
    ---------------------------------------------------
    tamanho |        | icon:
            |        |   width 7 px
            |        |   height 32 px
    ---------------------------------------------------

  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E eu clicar no ícone
  Então deverá ser exibido [spec]
  Exemplos:
    caso     | estado                | spec
    ---------------------------------------------------
    0 opcoes |                       | item:
             |                       |   absent
    ---------------------------------------------------
    2 opcoes | {caption: "opção 1"}, | body:
             | {caption: "opção 2"}  |   contains itens



  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E eu clicar no ícone
  E eu clicar no ícone
  Então deverá ser exibido [spec]
  Exemplos:
    caso     | estado                | spec
    -------------------------------------------
    2 opcoes | {caption: "opção 1"}, | itens:
             | {caption: "opção 2"}  |   absent
