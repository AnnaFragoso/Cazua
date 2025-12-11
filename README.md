# Cazua

Projeto desenvolvido com React, TypeScript e Vite, utilizando componentes do Radix UI e estilização com Tailwind CSS.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
  - Você pode verificar sua versão com: `node --version`
  - Para instalar, acesse: [https://nodejs.org/](https://nodejs.org/)

- **npm** ou **pnpm** (gerenciador de pacotes)
  - O npm vem junto com o Node.js
  - Para verificar: `npm --version`
  - Para instalar o pnpm: `npm install -g pnpm`

## 🚀 Instalação

1. **Clone o repositório** (se ainda não tiver feito):
   ```bash
   git clone <url-do-repositório>
   cd cazua/cazua
   ```

2. **Instale as dependências**:
   
   Usando npm:
   ```bash
   npm install
   ```
   
   Ou usando pnpm:
   ```bash
   pnpm install
   ```

## 🏃 Como Rodar o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

ou

```bash
pnpm dev
```

O projeto estará disponível em: `http://localhost:5173`

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

ou

```bash
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

ou

```bash
pnpm preview
```

### Linting

Para verificar o código com ESLint:

```bash
npm run lint
```

ou

```bash
pnpm lint
```

## 📦 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **Vite 7.2.2** - Build tool e dev server
- **Tailwind CSS 3.4.18** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e sem estilo
- **React Router DOM 6.28.0** - Roteamento para React
- **React Hook Form 7.66.0** - Gerenciamento de formulários
- **Lucide React** - Biblioteca de ícones
- **Embla Carousel** - Carrossel para React
- **Recharts** - Biblioteca de gráficos

## 📁 Estrutura do Projeto

```
cazua/
├── public/          # Arquivos estáticos
├── src/             # Código-fonte da aplicação
│   ├── components/  # Componentes React
│   └── ...
├── index.html       # Página HTML principal
├── package.json     # Dependências e scripts
├── tsconfig.json    # Configuração do TypeScript
├── vite.config.ts   # Configuração do Vite
├── tailwind.config.ts # Configuração do Tailwind CSS
└── postcss.config.js  # Configuração do PostCSS
```

## 🔧 Configurações Importantes

- **Alias de importação**: O projeto usa `@/` como alias para a pasta `src/`
- **Tailwind CSS**: Configurado com modo dark suportado e animações customizadas
- **TypeScript**: Configuração estrita com paths mapeados

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🐛 Solução de Problemas

### Erro ao instalar dependências

Se encontrar erros durante a instalação:

1. Limpe o cache do npm:
   ```bash
   npm cache clean --force
   ```

2. Delete a pasta `node_modules` e o arquivo `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstale as dependências:
   ```bash
   npm install
   ```

### Porta já em uso

Se a porta 5173 estiver em uso, o Vite tentará usar a próxima porta disponível automaticamente.

## 📄 Licença

Este projeto é privado.

---

Desenvolvido com ❤️
