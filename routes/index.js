const express = require("express");
const middleware = require("../utils/middleware");
var jwt = require("jsonwebtoken");
const app = express();
const router = express.Router();

var session = require("express-session");
var Keycloak = require("keycloak-connect");
var memoryStore = new session.MemoryStore();
let kcConfig = {
       '​clientId': 'bms-angular-app',
       '​bearerOnly': true,
       '​serverUrl': "http://localhost:8080", //
       '​realm': 'bms',
       '​realmPublicKey': 'secret-key'
  }



  const  keycloak = new Keycloak({
    store: memoryStore
  },kcConfig)
app.use(keycloak.middleware());

const saveBill = require(".././controllers/SaveBills");
const getNewToken = require(".././controllers/getNewAccessToken");
const signUp = require(".././controllers/signup");
const signIn = require(".././controllers/signin");

router.get("/get/token", keycloak.protect(), getNewToken);
router.post("/save/bill", keycloak.protect(), saveBill);
// router.get('/get/token', getNewToken);
// router.post('/save/bill',saveBill);
router.post("/signup", middleware, signUp);
router.post("/signin", middleware, signIn);

module.exports = router;
