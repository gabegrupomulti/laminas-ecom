# Multi ECOM - Template
Arquivo de template que será usado como ponto de partida para criação de todas as lâminas

## Tecnologias
- Eslint
- EditorConfig
- TailwindCSS
- HTML, CSS, JavaScript

## Estrutura
```
template/
├── node_modules/
├── dist/
│   ├── output.css
├── src/
│   ├── assets/
│   │   ├── scripts/  (.js)
│   │   ├── images/   (.jpg, .jpeg, .avif, etc)
│   │   └── icons/    (.svg)
│   ├── index.html
│   ├── input.css
└── ...
```

## Inicialização do Projeto

### 1. Instale as Dependências

```bash 
npm install
```

### 2. Gerando CSS com TailwindCSS

Para gerar os estilos CSS a partir de arquivos fonte usando o Tailwind CSS, execute o seguinte comando:

```bash 
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Este comando monitorará as modificações no arquivo de entrada CSS (input.css) e gerará uma versão minificada dos estilos CSS em output.css na pasta dist.

Certifique-se de que seu projeto tenha uma estrutura de diretório correspondente.

### 2. Servindo HTML

Instale a extensão "Live Server" do VSCode, que pode ser encontrada na loja de extensões do VS Code ou através deste [link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
