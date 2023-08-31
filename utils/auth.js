const withAuth = (req, res, next) => {
    if (!req.session.uderId) {
        res.direct("/login");
    } else {
        next();
    }
};

module.exports = withAuth;
