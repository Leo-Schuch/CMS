const TOKEN = '857acf71796b1f68d1d5ed0b3f8583';

const globalQuery = `
  query{
    globalFooter{
      description
    }
  }
`;

const BASE_ENDPOINT = 'https://graphql.datocms.com/'
const PREVIEW_ENDPOINT = 'https://graphql.datocms.com/'

export async function cmsService({
  query,
  preview,
}) {
  const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT;
  try {
    const pageContentResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query,
      })
    })
    .then(async (respostaDoServer) => {
      const body = await respostaDoServer.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    })
    const globalContentResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query: globalQuery,
      })
    })
    .then(async (respostaDoServer) => {
      const body = await respostaDoServer.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    })
    // console.log('pageContentResponse', pageContentResponse);
  
    return {
      data: {
        ...pageContentResponse.data,
        globalContent: {
          ...globalContentResponse.data,
        }
      },
    }
  } catch(err) {
    throw new Error(err.message);
  }
}
