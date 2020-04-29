const message = '{PATH} is required';
const required = [true, message];
const stringData = { type: String, required };

const defaultError = (resp, error) => resp.status(500).json({ ok: false, error });
const customError = (resp, message) => resp.status(400).json({ ok: false, error: { message } });

module.exports = { message, required, stringData, defaultError, customError };