# README da pasta `/navigation`

## Navigation (Navegação)

Aqui ficam todas as configurações relacionadas ao sistema de navegação do aplicativo.

### Estrutura recomendada

```
navigation/
  AppNavigator.tsx
  HomeStack.tsx
  AuthStack.tsx
```

### Responsabilidade

* Definir stacks, tabs, drawers e rotas.
* Centralizar a lógica de navegação.
* Registrar todas as telas do aplicativo.

### Boas práticas

* Criar stacks específicos para áreas do app.
* Utilizar tipagem para rotas quando estiver usando TypeScript.
* Manter a navegação separada da lógica visual.