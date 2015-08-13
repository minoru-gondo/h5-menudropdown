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
    ----------------------------------
    fechado |        | app:
            |        |   contains icon
    ----------------------------------
    @only
    posição |        | icon:
            |        |   below span
            |        |   inside app
    ----------------------------------
    tamanho |        | icon:
            |        |   width 7 px
            |        |   height 32 px
    ----------------------------------

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
    2 opcoes | {caption: "opção 1"}, | app:
             | {caption: "opção 2"}  |   contains itens



  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E eu clicar no ícone
  E eu clicar no ícone
  Então deverá ser exibido [spec]
  Exemplos:
    caso            | estado                | spec
    --------------------------------------------------
    clicar no ícone | {caption: "opção 1"}, | itens:
                    | {caption: "opção 2"}  |   absent


  Cenário: Renderização do h5-menudropdown [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E eu clicar no ícone
  E eu clicar no item
  Então deverá ser exibido [spec]
  Exemplos:
    caso             | estado                                                                 | spec
    ------------------------------------------------------------------------------------------------------------
    clicar no item   | {caption: "opção 1", onClick: function clica() {alert("QuickEdit");}}, | itens:
                     |                                                                        |   absent
    ------------------------------------------------------------------------------------------------------------
    clicar no item_2 | {caption: "opção 1"}                                                   | app:
                     |                                                                        |   contains itens


#
#  // nao preocupar com o posicionamento do icone
#  // o menuitem recebe a posição e pronto
