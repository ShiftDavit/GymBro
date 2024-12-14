const data = require('./test.json');

exports.login = (req, res, next) => {
    const {username, password} = req.body;

    if (!username===data.username || !password===data.password){
        return res.status(401).json({error: "Failed to authenticate"});
    }
        
    res.status(200)
}