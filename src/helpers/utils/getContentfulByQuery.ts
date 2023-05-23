const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } =
  process.env;

export const getContentfulByQuery = async (
  query: string
): Promise<any> => {
  let data;
  try {
    const responseFromContentful = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
      {
        headers: {
          Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          query
        })
      }
    );
    if (responseFromContentful.ok) {
      data = await responseFromContentful.json();
    } else {
      console.log(
        `HTTP Response Code: ${responseFromContentful?.status}`
      );
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
