import * as fs from 'fs';

const dirPath = `/src/components/${
  process.argv[2] ? process.argv[2] : 'NewComponent'
}/${process.argv[3] ? process.argv[3] : 'NewComponent'}`;
const componentName = process.argv[3] || 'NewComponent';
const contentIndex = `export { ${componentName} as default } from './${componentName}';`;
const contentStyled = `.${componentName}{\r\n}`;
const contentStories = `import type { Meta } from '@storybook/react';\r\n
import { ${componentName} } from './${componentName}';\r\n
const meta: Meta<typeof ${componentName}> = {
  title: '${componentName}',
  component: ${componentName}
};
\r\n
export default meta;
`;
const contentTypes = `export interface ${componentName}Props {};`;
const contentComponent = `import { ${componentName}Props } from './${componentName}.types';\r\nimport style from './${componentName}.module.scss';\r\n\r\nexport const ${componentName} = ({}: ${componentName}Props) => {};`;

const createDir = dirPath => {
  fs.mkdirSync(
    `${process.cwd()}${dirPath}`,
    { recursive: true },
    err => {
      if (err) console.error(err);
      else console.log('new dir has been made');
    }
  );
};

const createFile = (filePath, fileName, fileContent) => {
  fs.writeFile(
    `${process.cwd()}/${filePath}/${fileName}`,
    fileContent,
    err => {
      if (err) console.error(err);
      else console.log(`new ${fileName} has been made`);
    }
  );
};

createDir(dirPath);
createFile(dirPath, 'index.ts', contentIndex);
createFile(dirPath, `${componentName}.tsx`, contentComponent);
createFile(dirPath, `${componentName}.types.ts`, contentTypes);
createFile(dirPath, `${componentName}.module.scss`, contentStyled);
createFile(dirPath, `${componentName}.stories.tsx`, contentStories);
