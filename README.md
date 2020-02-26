![Banana](https://logodownload.org/wp-content/uploads/2016/08/Mercado-Livre-logo.png)

## Libs (Produção e Desenvolvimento)

1. React.JS
1. React Router Dom
1. Styled Components
1. EsLint
1. Prettier

## Considerações

1. Como fiz apenas o front-end, busquei bastante na documentação da api do mercado livre, para atender os requisitos desejados.

1. Com um pouco mais de tempo, faria a conversão da moeda de acordo com o site_id ao invés de deixar fixa em R\$, também não demoraria para fazer um componente de produtos relacionados, e uma galeria de imagens;

1. Apesar de gostar do redux, a aplicação não tinha necessidade de aplicar essa arquitetura (Projetos com Redux no fim do readme);

1. Inspecionei a aplicação e não houve necessidade de melhorar a performance, já que so exibe 4 produtos, caso fosse um scroll infinito, eu faria isso virtualizando os dados;

1. tentei seguir o máximo o que estava na especificação do pdf, outros dados retirei do próprio mercado livre;

## Iniciando

Baixe as dependências utilizando o comando a seguir

```shell
  yarn
```

Inicie a aplicação utilizando o comando a seguir

```shell
  yarn start
```

## Deploy

Não realizei o deploy, pois tive problemas com as rotas no netlify, é necessário fazer algumas configurações, para que o roteamento fique por conta da aplicação e não do servidor;

## Outros Projetos

Um lista de projetos desenvolvidos apenas por estudo ou diversão.

1.[Task App](https://task-minimal.netlify.com/) : controle de atividades do dia;

2. [Best Sellers NYT](https://bestsellers.netlify.com/): Consumo da api do New York Times;
3. [VUTTR](https://github.com/JulioVMelo/vuttr) : Projeto para salvar libs que gostei e pretendo usar em algum momento (Desenvolvido com redux e sagas);
4. [Loja Mobile](https://github.com/JulioVMelo/RocketShoesMobile) : App desenvolvido com react native, redux e sagas;
5. [Clone do gmail](https://github.com/JulioVMelo/clone-gmail): apenas uma brincadeira, na época estava estudando flexbox;
6. [Clone do Twitter](https://github.com/JulioVMelo/clone-gmail): apenas diversão;

## Empresa

Projetos desenvolvidos em produção

1. [PWA Institucional](https://www.alfagroup.tech/): utilizando Gatsby + GraphQL;
1. [PWA institucional 2](https://www.alfainteligencia.com.br/): utilizando Gatsby + GraphQL;
1. [Style guide de desenvolvimento CSS](http://styleguide.sogo.com.br/docs/css/): Como tech lead criei um projeto utilizando o Docusaurus para ajudar os novos funcionários a seguirem os padrões de desenvolvimento com CSS;
1. Mais 80 órgãos governamentais utilizando um thema wordpress que criei seguindo as regras do Tribunal de contas;
1. Nesse momento possuo 2 dashboards em desenvolvimento, infográficos utilizando a biblioteca Recharts (d3);
1. [Design de app](https://prototipotensai.netlify.com/): (NÃO SOU DESIGN, não tenho essa competência) Feito por conta de uma necessidade da empresa;
