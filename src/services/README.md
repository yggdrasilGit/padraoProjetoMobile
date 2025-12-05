# README da pasta `/services`

## Services (Serviços e API)

Esta pasta contém funções responsáveis por comunicação com APIs, banco de dados e serviços externos.

### Estrutura recomendada

```
services/
  api.ts
  authService.ts
  userService.ts
```

### Responsabilidade

* Realizar requisições HTTP (axios ou fetch).
* Centralizar regras de acesso a dados.
* Padronizar tratamento de respostas e erros.

### Boas práticas

* Evitar chamadas de API diretamente em telas e componentes.
* Manter funções pequenas e bem definidas.
* Documentar endpoints quando possível.