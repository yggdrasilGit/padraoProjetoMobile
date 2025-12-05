# README da pasta `/hooks`

## Hooks

Pasta destinada a hooks personalizados usados em diversas partes do aplicativo.

### Estrutura recomendada

```
hooks/
  useAuth.ts
  useForm.ts
  useFetch.ts
```

### Responsabilidade

* Reutilizar lógicas compartilhadas entre componentes e telas.
* Encapsular comportamentos específicos.
* Reduzir duplicação de código.

### Boas práticas

* Nomear sempre começando com `use`.
* Manter os hooks livres de elementos visuais.
* Criar hooks com responsabilidade bem definida.