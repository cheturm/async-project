
const express = require('express')
const async = require('async')
const app = express()

app.post('/test', (req, res) => {

    console.log('req.body', req.body);
    var ruleList = ["rule-one", "rule-two", "rule-three"]
    console.log(getRule(ruleList));
    function getRule(ruleName) {
        var x = [];
        ruleName.forEach(element => {
            console.log('./rules/' + element + '.js')
            x.push(require('./rules/' + element + '.js'));
            console.log(x);
        })
        return x;
    }
    async.parallel(getRule(ruleList), (err, result) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.send(result)
    })
    // async.waterfall([], (err, result) => {

    //     if (err) {
    //         return res.status(500).send(err)
    //     }

    //     return res.send(result)
    // })
    // res.send("I ran all the rules");
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});