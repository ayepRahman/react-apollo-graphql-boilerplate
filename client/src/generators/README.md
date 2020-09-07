# Generators

Generators (Scaffolding) allow us to generate code quickly. It allow dev to follow the best practice in the code structure.

### Instructions:

1. Run `npm run generate`.

2. Select generators options from the lists e.g component.

3. Input your generator name.

4. Select your choices.

## Structure

### Containers

Smart component that handle graphql api

```
/src
  -> /containers
    -> /Todos <features naming conventions>
      -> index.tsx
      -> gql.ts ( gql-tag )
      -> enums.ts ( typescript enums )
      -> validations.ts ( validation schema using yup )
      -> styled.tsx ( Styled Component )
      -> interfaces.ts
      -> /__tests__
        -> /__snapshot__
        -> index.test.tsx
```

### Components

Components focuses on reusability, styling

```
/src
  -> /components
    -> /Spinner
      -> index.tsx
      -> /__tests__
        -> /__snapshot__
        -> index.test.tsx
```

### Pages

Pages focuses on viewing page

```
/src
  -> /pages
    -> /Home
      -> index.tsx
      -> intefaces.ts
      -> /__tests__
        -> /__snapshot__
        -> index.test.tsx
```

### Apollo

Apollo focuses on adding client state resolvers, e.g queries, mutations.

```
/src
  -> /apollo
    -> index.ts
    -> /cache
      -> index.ts
    -> /gql
      -> user.ts
      -> trendLine.ts
      -> infoCart.ts
    -> /resolvers
      -> index.ts
      -> /mutations.ts
        -> index.ts
        -> user.ts
      -> /queries.ts
        -> index.ts
        -> user.ts

```
