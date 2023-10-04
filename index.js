import express from 'express';
import async from 'async';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/mad-route';

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MADEngine', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/MADEngine', { useNewUrlParser: true }, function (err) {
    routes(app);

// app.post('/rules', function (req, res, next) {
//    Rules.Rules(req,res,next);
// });

app.post('/test', (req, res) => {
    console.log(req.body);
// Todo receive rule list from client
    var ruleList = ["rule-one", "rule-two", "rule-three"]
    function getRule(ruleName) {
        var x = [];
        ruleName.forEach(element => {
            x.push(require('./rules/' + element + '.js'));
        })
        return x;
    }



    //  Running all rules in parallel
    async.parallel(getRule(ruleList), (err, result) => {
        if (err) {
            // Todo handle error
            return res.status(500).send(err)
        }
        // Todo handle success
        return res.send(result)
    })
})

app.post('/run-series',(req,res,next)=>{
    console.log(req.body);
    return res.json(req.body);
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
