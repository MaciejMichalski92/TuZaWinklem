import { CodegenConfig } from '@graphql-codegen/cli';
import { fetchConfig } from './src/graphQL/fetchConfig';

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params
    }
  ],
  generates: {
    './src/graphQL/generatedContentfulTypes/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/**/*.graphql']
    }
  }
};

export default config;
