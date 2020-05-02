const express = require('express');
const Courses = require('../models/courses');
const helpers = require('../helpers');

const { customError, defaultError } = helpers;

const app = express();
    
app.get('/courses', async (undefined, resp) => {
    const selectors = {};
    const returnFields = 'title description teacher image price';
    const sortFields = { title: 1 };
    await Courses.find(selectors, returnFields).sort(sortFields).exec((errorFind, courses) => {
        if (errorFind) return defaultError(resp, errorFind);
        Courses.countDocuments((errorCount, total) => {
            if (errorCount) return defaultError(resp, errorCount);
            if (total === 0) return customError(resp, 'No courses available');
            resp.json({ ok: true, total, courses });
        });
    });
});

module.exports = app;