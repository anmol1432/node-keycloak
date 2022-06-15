const KcAdminClient = require('@keycloak/keycloak-admin-client')

// To configure the client, pass an object to override any of these  options:
// {
//   baseUrl: 'http://127.0.0.1:8080/auth',
//   realmName: 'master',
//   requestConfig: {
//     /* Axios request config options https://github.com/axios/axios#request-config */
//   },
// }
const kcAdminClient = new KcAdminClient();

// Authorize with username / password
const checkAuth = async ()=>{
  return  await kcAdminClient.auth({
        username: 'anmol.singh',
        password: '1234',
        grantType: 'password',
        clientId: 'bms',
    });
}  

// List all users
const users = async () => await kcAdminClient.users.find();
console.log(users)

// Override client configuration for all further requests:
// kcAdminClient.setConfig({
//   realmName: 'another-realm',
// });

// This operation will now be performed in 'another-realm' if the user has access.
// const groups = await kcAdminClient.groups.find();

// Set a `realm` property to override the realm for only a single operation.
// For example, creating a user in another realm:
// await this.kcAdminClient.users.create({
//   realm: 'a-third-realm',
//   username: 'username',
//   email: 'user@example.com',
// });