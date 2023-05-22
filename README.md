# Getting Started

create .env.local file in the root of the project:

```text
CONTENTFUL_DELIVERY_TOKEN=<token>
CONTENTFUL_PREVIEW_TOKEN=<token>
CONTENTFUL_SPACE_ID=<id>
```

to make a new component automatically, run the command:

```bash
npm run component <file(atoms||molecules||organisms||layouts)> <componentName>
```

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Caveats and tips

- **For using Layout with dynamic components based on UserAgent device:**

```js
export const getServerSideProps: GetServerSideProps = async ({
  req: { headers }
}) => {
  const { device, isBot } = getDeviceInfoFromClient(headers);

  return {
    props: {
      device,
      isBot
    }
  };
};
```

- **I've implemented 'next-redux-wrapper' library, for using SSR redux:**

```js
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    store =>
      async ({ req: { headers } }) => {
        const { device, isBot } = getDeviceInfoFromClient(headers);

        // ...code with dispatch

        return {
          props: {
            // ...code
          }
        };
      }
  );
```

more info [here](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)

### Testing

- [common mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- Don't use cleanup function with testing (more on it [here](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup))
