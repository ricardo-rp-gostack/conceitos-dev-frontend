# `Notas`

## **Ambiente de desenvolvimento**

### **`Babel:`**

Converte (`transpila`) codigo javascript moderno para codigo entendível por browsers.

Rodando o comando:

`❯ yarn babel src/index.js --out-file public/bundle.js`

Teremos o arquivo index.js (`ES6`) transpilado para JS usável pelo browser.

### **`Webpack:`**

É um `module bundler`, ou `empacotador de módulos`. Ele junta os arquivos .js da aplicação (sejam nossos ou dependências externas) em um ou mais arquivos, de forma otimizada.

Webpack é altamente configurável e extensível através de `plugins`. Isso permite fazer coisas como:

- Utilizar outros sabores de JS, como `ES6+`, `TypeScript`, `JSX` e fazer a `transpilação` automaticamente no processo de empacotamento.

- Tratar e empacotar outros tipos de arquivos, como CSS (e variações como SASS, LESS, Stylus), SVG, imagens, arquivos de templates (Pug, Handlebars).

#### **`Loaders`** (babel-loader, css-loader, image-loader)

O webpack, por padrão, entende só JS. Se você fizer, por exemplo, import './styles.css' e tentar rodar o webpack, ele vai reclamar:

`ERROR in ./styles.css You may need an appropriate loader to handle this file type.`

Loaders são `módulos` instalados separadamente e que fazem a transformação do arquivo original para código JS. A forma como esta transformação é feita depende de cada loader. Loaders também podem ser usados para converter JS de uma versão para outra (por exemplo, ES6 para ES5).

## Conceitos do ReactJs

### `<Components/>`

Componentes são a peça fundamental de qualquer aplicação React. Um app React típica terá vários componentes.
São funções ou classes javascript que podem aceitar inputs (propriedaes) e retornam um elemento React que descreve como uma parte da UI deve ser mostrada.

### `(props)`
Props é uma abreviação para propriedades. As props são usadas para transferir dados entre componentes. O fluxo de dados dos componentes React é unidirecional. (parent -> child).

### `[state]`
O estado é um objeto JS que armazena os dados dinámicos de um componente e determina o comportamento do componente. Como o estado é dinâmico, o Componente pode ser dinámico e interativo e acompanhar informação que está mudando entre renderizações.