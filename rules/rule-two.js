module.exports = function (callback) {
    console.log('rule-two executed');
    callback (null, 'rule-two executed response');
};