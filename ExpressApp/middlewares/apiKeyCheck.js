function apiKey(req, res, next)
{
    const trueapi = '1234567';
    const userapi = req.query.api_key;
    if (userapi && userapi === trueapi)
    {
        next();
    }
    else
    {
        res.json({message: 'Not Allowed'})
    }
}

module.exports = apiKey
