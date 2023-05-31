// import { useEffect } from 'react';
// import axios from 'axios';
// import queryString from 'query-string';

// const Callback = () => {
    
//   useEffect((e) => {
//     e.preventDefault()
//     const tokenEndpointUrl = 'http://master.revel-dev.test:8051/oauth2/token';
//     const authorizationCode = queryString.parse(window.location.search).code;

//     // Exchange the authorization code for an access token
//     axios
//       .post(tokenEndpointUrl, {
        
//         grant_type: 'authorization_code',
//         code: authorizationCode,
//         redirect_uri: './dashbord ',
        
//       })
//       .then((response) => {
//         const accessToken = response.data.access_token;
//         // Store the access token securely (e.g., in a server-side session or HTTP-only cookie)
//         console.log('Access Token:', accessToken);

//         // Redirect the user to a protected route or perform API requests with the access token
//         // ...
//       })
//       .catch((error) => {
//         console.error('Token Exchange Error:', error);
//       });
//   }, []);
//   console.log('token:',accessToken)

 

//   return <div>Processing login...</div>;
// };

// export default Callback;

import axios from 'axios';
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_PROVIDER_TOKEN_URL, OAUTH_REDIRECT_URL } from '../src/config/config';
export default async function callback(req , res) {
  try {
    const { code } = req.query;
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(OAUTH_PROVIDER_TOKEN_URL, {
      code,
      client_id: OAUTH_CLIENT_ID,
      client_secret: OAUTH_CLIENT_SECRET,
      redirect_uri: OAUTH_REDIRECT_URL,
      grant_type: 'authorization_code',
    });
    const { access_token: accessToken } = tokenResponse.data;
    // Store the access token in a cookie or session
    res.setHeader('Set-Cookie', `access_token=${accessToken}; Path=/`);
    // Redirect the user to the dashboard or any other authorized page
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error during OAuth2 callback:', error);
    res.status(500).send('Error during OAuth2 callback');
  }
}