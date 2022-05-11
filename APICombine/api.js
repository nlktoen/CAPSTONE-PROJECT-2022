var Db1 =require('./incentiveop');
var Incentive = require('./incentive');
const incentiveop = require('./incentiveop');

var Db2 =require('./MKTop');
var MKT = require('./MKT');
const mktop = require('./MKTop');

var Db3 =require('./authop');
var Auth = require('./auth');
const authop = require('./authop');
const authpostop = require('./authpostop');



var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response,response2, response3,response4 } = require('express');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);


router.use((request,response,response2, response3,response4,next) => {
    console.log('middleware');
    next();
})

/////////////////////////////////////////////////////////////// incentive api
router.route("/incentive").get((request,response) => {

    incentiveop.getIncentive().then(result => {
        //console.log(result);
        response.json(result[0]);
        //response.json(result);
    })

})


/////////////////////////////////////////////////////////////// mkt api

router.route("/mkt").get((request,response2) => {

    mktop.getMKT().then(result1 => {
        //console.log(result);
        response2.json(result1[0]);
        //response.json(result);
    })

})

/////////////////////////////////////////////////////////////// auth api
router.route("/authAPI").get((request,response3) => {


    authop.getAuth().then(result2 => {
        //console.log(result);
        response3.json(result2[0])
        //response.json(result);
    })

})

router.route("/authAPI").post((request,response4) => {

    //response4.send(request['body']);
    //response4.send(request['body']['user_name']);
    authpostop.postAuth(request['body']);
    response4.send('Successfully!');
    //response4.send('POST request to the homepage')
    //authop.postAuth(request);

})



var port1 = process.env.PORT || 8091;
app.listen(port1);
console.log('API is running at '+port1);











