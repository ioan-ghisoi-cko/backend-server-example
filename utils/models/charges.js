var config = require("../../config/config");

module.exports = {
    charge: {
        cardToken: null,
        value: config.value,
        currency: config.currency,
        email: config.email,
        autoCapture: "Y",
        autoCapTime: "0",
    },
    authorise: {
        cardToken: null,
        value: config.value,
        currency: config.currency,
        email: config.email,
        autoCapture: "N",
    },
    charge3d: {
        cardToken: null,
        value: config.value,
        currency: config.currency,
        email: config.email,
        chargeMode: 2,
    },
    authorise3d: {
        cardToken: null,
        value: config.value,
        currency: config.currency,
        email: config.email,
        autoCapture: "N",
        chargeMode: 2,
    }
};