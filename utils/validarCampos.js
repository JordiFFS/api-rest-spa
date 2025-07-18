
const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            msg: errors.array()[0].msg,
            errors: errors.array()
        });
    }
    
    next();
};

module.exports = {
    validarCampos
};