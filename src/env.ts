const env = {
    development: {
      BASE_URL: 'https://identityServer.com/',
      USER_NAME: 'testing@gmail.com',
      PASSWORD: 'testing'
    },
    production: {
      BASE_URL: 'https://identityServer.com/',
      USER_NAME: 'testingn@gmail.com',
      PASSWORD: 'testing'
    },
    test: {
      BASE_URL: 'https://identityServer.com/',
      USER_NAME: 'testingn@gmail.com',
      PASSWORD: 'testing'
    },
  };
  
  export const env_var = env[process.env.NODE_ENV];