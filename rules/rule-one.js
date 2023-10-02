module.exports = function (callback) {
    console.log('rule-one executed');
    callback (null,'rule-one executed response');
};