# SCCON — Teste Frontend

**Desenvolvedor:** Luan Lee da Costa Faria  
**Data do teste:** 10/04/2026

🔗 **[Projeto publicado](https://luanleecf.github.io/Teste-Frontend-SCCON/home)**

---

## 📋 Sobre o projeto

Aplicação Angular desenvolvida como parte do processo seletivo para a vaga de desenvolvedor front-end da SCCON. O objetivo é buscar endereços a partir de um CEP via API [ViaCEP](https://viacep.com.br), exibir os resultados em uma tabela com histórico persistido e permitir a exclusão de registros.

---

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm start
```

Acesse `http://localhost:4200`

### Build de produção

```bash
npm run build
```

---

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar com relatório de cobertura
npm run test:coverage
```

**Resultado:** 11 suítes · 120 testes · 100% de cobertura nos arquivos com lógica

> Os únicos arquivos sem cobertura são `app.config.ts`, `app.routes.ts` e `cep.routes.ts` — arquivos declarativos de configuração e rotas, sem lógica testável, o que puxa a média global para ~90%.

---

## 🗂️ Estrutura do projeto

```
src/app/
├── components/
│   └── header/              # Componente de cabeçalho (separado, compartilhado)
│       ├── header.component
│       └── header-menu.component
├── core/
│   ├── buscas-api.service   # Comunicação HTTP com a API de buscas (mock)
│   ├── in-memory-data.service  # Banco de dados em memória (angular-in-memory-web-api)
│   └── paginator-pt-br      # Tradução do paginador do Angular Material para PT-BR
└── modules/
    ├── home/                # Módulo Home (Lazy Load)
    │   └── pages/home/
    └── cep/                 # Módulo de Endereços (Lazy Load)
        ├── pages/busca/     # Página com formulário de busca
        ├── components/listagem/  # Componente de tabela do histórico
        └── services/
            ├── cep.service           # Integração com ViaCEP
            └── busca-historico.service  # Gerenciamento do histórico de buscas
```

---

## 🔌 API mockada com `angular-in-memory-web-api`

> ⚠️ **Ponto importante para a avaliação**

A persistência de dados é feita via **REST API simulada em memória**, utilizando o pacote [`angular-in-memory-web-api`](https://github.com/angular/angular-in-memory-web-api). Isso significa que:

- A aplicação realiza requisições HTTP reais (`GET`, `POST`, `DELETE`) que são interceptadas em tempo de execução
- Os dados **são mantidos durante a sessão** e exibidos corretamente na tabela ao recarregar entre rotas
- Ao fechar ou recarregar o browser, os dados são resetados (comportamento esperado de um mock em memória)
- A lógica é idêntica à de uma API REST real — o service `BuscasApiService` usa `HttpClient` normalmente, sem nenhuma condicional de mock no código de produção

**Endpoints simulados:**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/buscas` | Lista todas as buscas realizadas |
| `POST` | `/api/buscas` | Salva uma nova busca |
| `DELETE` | `/api/buscas/:id` | Remove uma busca pelo id |

---

## ✅ Requisitos implementados

### Funcionais
- [x] Busca de CEP via API ViaCEP com tratamento de erros
- [x] Máscara de CEP (`00000-000`) via `ngx-mask`
- [x] Validação de CEP com REGEX — borda vermelha quando inválido
- [x] Reactive Forms com `NonNullableFormBuilder`
- [x] Tabela com histórico de buscas (CEP · Endereço · Data)
- [x] Paginação da tabela (5 / 10 / 25 itens por página)
- [x] Botão para deletar linha individualmente
- [x] Loader animado (`mat-spinner`) durante a requisição à API
- [x] Mensagem de feedback com tempo de exibição automático (4s)
- [x] Animação de entrada nas linhas da tabela (Angular Animations)
- [x] Redirecionamento automático entre rotas

### Arquitetura
- [x] Angular 21 com Standalone Components
- [x] Lazy Load nos módulos Home e CEP
- [x] Separação de responsabilidades (components, services, models)
- [x] Observables (RxJS): `switchMap`, `catchError`, `finalize`, `takeUntilDestroyed`
- [x] Signals e computed signals para estado reativo

### Layout e estilos
- [x] Header como componente separado com logo SCCON em SVG
- [x] Menu com cor `#670000`, responsivo com toggle mobile
- [x] Botões cor `#D7DBDD` com hover escurecendo 6% via mixin SCSS
- [x] Cantos arredondados nos botões de formulário
- [x] Transitions em todos os elementos interativos
- [x] Variáveis SCSS organizadas em `_variables.scss`
- [x] Pseudo-elementos `::before` / `::after` no menu
- [x] HTML5 semântico (`header`, `nav`, `main`, `section`)
- [x] Grid responsivo com Angular Material

### Diferenciais
- [x] Testes unitários com Jest — 120 testes, 100% de cobertura nos arquivos com lógica
- [x] Persistência via REST API mockada (`angular-in-memory-web-api`)
- [x] Favicon SVG customizado com a identidade visual do projeto
- [x] Paginador do Material traduzido para PT-BR

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| Angular | 21.2 |
| TypeScript | 5.9 |
| Angular Material | 21.2 |
| RxJS | 7.8 |
| ngx-mask | 21.0 |
| angular-in-memory-web-api | 0.21 |
| Jest | 30 |
| SCSS | — |
