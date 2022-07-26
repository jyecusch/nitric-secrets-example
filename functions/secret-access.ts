import { api, secret } from "@nitric/sdk";

// In many cases database credentials will be written manually at deploy time
//  and periodically rotated by an administrator. When that's the case your
//  function will only need 'access' permissions.
const dbSecret = secret("primary-db-credentials").for("access");

const helloApi = api("main");

helloApi.post("/customers", async (ctx) => {
  // Access the latest credentials for your database (or other secret)
  const dbCredentials = (await dbSecret.latest().access()).asString();

  // Your code goes here...
});