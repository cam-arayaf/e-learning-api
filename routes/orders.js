const express = require('express');
const Orders = require('../models/orders');
const helpers = require('../helpers');

const { defaultError, customError } = helpers;

const defaultResp = (resp, { _id, courses }) =>
    resp.json({ ok: true, order: { _id, total_courses: courses.length, courses } });

const app = express();

app.post('/orders', async (req, resp) => {
    const { courses } = req.body;
    if (!courses) return customError(resp, 'courses is required');
    const body = { courses };
    await new Orders(body).save((error, order) => {
        if (error) return defaultError(resp, error);
        defaultResp(resp, order);
    });
});

module.exports = app;