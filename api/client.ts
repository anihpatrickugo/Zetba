
import axios from 'axios'
import * as SecureStore from "expo-secure-store";


const url = process.env.EXPO_PUBLIC_DOMAIN_NAME || ''

const client = axios.create({baseURL: url})

// Set the AUTH token for any request


client.interceptors.request.use( 

  // intercepting requests
  async request => {
    const accessToken = await SecureStore.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  }, error => {
    return Promise.reject(error);
  },
);


client.interceptors.response.use(
  response => response, // Directly return successful responses.

    // intercepting errors
    async error => {
    
      const originalRequest = error.config;
       
      
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

       
        try {
          // Retrieve the stored refresh token.
          const refresh = await SecureStore.getItemAsync('refreshToken');

         
          // Make a request to your auth server to refresh the token.
          const response = await axios.post(`${url}/user/auth/refresh-token/`, {
            refresh,
          });


          const { access } = response.data;
          // Store the new access and refresh tokens.

          
          await SecureStore.setItemAsync('accessToken', access);
          

          console.log("updated successfully")
          // Update the authorization header with the new access token.
          client.defaults.headers.common['Authorization'] = `Bearer ${access}`;
          return client(originalRequest); // Retry the original request with the new access token.
        } catch (refreshError) {
          // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
          console.error('Token refresh failed:', refreshError);
          await SecureStore.deleteItemAsync('accessToken');
          // await SecureStore.deleteItemAsync('refreshToken');

          // window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error); // For all other errors, return the error as is.
    }
);






export default client
