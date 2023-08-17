import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
      const tokenString = localStorage.getItem('accessToken')||null;
      const userToken = JSON.parse(tokenString);
      return userToken
    };
  
    const [token, setToken] = useState(getToken());
  
    const saveToken = userToken => {
      localStorage.setItem('accessToken', JSON.stringify(userToken));
      setToken(userToken.token);
    };
  
    return {
      setToken: saveToken,
      token
    }
  }