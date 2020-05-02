const express = require('express');
const Orders = require('../models/orders');
const helpers = require('../helpers');

const { customError, defaultError, validateCourses } = helpers;

const app = express();

app.post('/orders', async (req, resp) => {
    const { courses } = req.body;
    if (validateCourses(courses)) return customError(resp, 'Courses are required');
    const body = { courses };
    await new Orders(body).save((error, order) => {
        if (error) return defaultError(resp, error);
        const { _id, courses } = order;
        const { length } = courses;
        resp.json({ ok: true, order: { _id, total_courses: length, courses } });
    });
});

module.exports = app;