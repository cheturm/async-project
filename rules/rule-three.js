module.exports = function (callback) {
    console.log('rule-three executed');
    callback (null,'rule-three executed response');
};