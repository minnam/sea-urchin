try {
    var Theme = require('./theme.js');
    console.log('provide', Theme.default);
    module.exports = {
        ...Theme.default
    };
} catch (ex) {
    console.log('provide', 'nope');
    module.exports.Theme = {};
}
