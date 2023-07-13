// const Token = ({token}) => {

//   let token = "";
//   if (typeof window !== "undefined") {
//     token = JSON.parse(localStorage.getItem("token"));
//   }
// return(
//   <>

//   </>
// )
// }
// export default Token

// export const getTokenFromLocalStorage = () => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   return(token) ;
// };


import { useEffect } from 'react';

const Token = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      // Do something with the token value
    }
  }, []);

  // Rest of your component code
};

export default Token;