var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8100");
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

module.exports = allowCrossDomain;
