import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/**/*.graphql',
  generates: {
    './src/lib/apollo/generated-types.ts': {
      config: {
        useIndexSignature: true,
        contextType: './context#ApolloContext',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix', 'prettier --write'],
  },
};

export default config;
