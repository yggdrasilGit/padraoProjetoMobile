# README da pasta `/utils`

## Utils (Funções Utilitárias)

Funções auxiliares e ferramentas gerais ficam nesta pasta.

### Estrutura recomendada

```
utils/
  formatDate.ts
  validateEmail.ts
  constants.ts
```

### Responsabilidade

* Centralizar funções puras e reutilizáveis.
* Não depender de hooks, telas ou componentes.

### Boas práticas

* Manter funções simples e específicas.
* Evitar criar utilitários muito grandes.
* Garantir que cada arquivo tenha uma única responsabilidade.
