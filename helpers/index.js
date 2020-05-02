const defaultError = (resp, error) => resp.status(500).json({ ok: false, error });
const customError = (resp, message) => resp.status(400).json({ ok: false, error: { message } });
const validateCourses = courses =>
    !Array.isArray(courses) || !courses.length || !courses.every(c => typeof c === 'string' && c.length);

module.exports = { defaultError, customError, validateCourses };