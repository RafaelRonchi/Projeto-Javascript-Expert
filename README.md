# JSExpertMax Gesture Controller - Semana JS Expert 7.0

Seja bem vindo(a) ao projeto dá Semana Javascript Expert.


## Preview
<img width=100% src="./initial-template/assets/demo-template-lg.gif">

## Pre-reqs
- Este projeto foi criado usando Node.js v19.6
- O ideal é que você use o projeto em ambiente Unix (Linux). Se você estiver no Windows, é recomendado que use o [Windows Subsystem Linux](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) pois nas aulas são mostrados comandos Linux que possam não existir no Windows.

## Running

- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features
- Titles List
  - [] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
  - [] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano  continuem sendo clicáveis  🙌
  - [] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
  - [] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
  - [] - Deve disparar click no elemento mais próximo quando usar  gesto de pinça 🤏🏻
  - [] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
  - [] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
  - [] - Todo processamento de Machine Learning deve ser feito via Web worker

### Desafios
- [] - Aula 01 - Diferenciar piscada de olhos entre olho direito e esquerdo e atualizar log para mostrar qual olho que piscou.
- [] - Aula 02 - Reconhecer gestos de mãos individuais e printar no log
- [] - Aula 03 - A definir
- [] - Aula 04 - A definir

### Créditos ao Layout
- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
