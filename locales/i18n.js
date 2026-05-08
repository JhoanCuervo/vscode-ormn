const vscode = require('vscode');
const en = require('./en.json');
const es = require('./es.json');

const locales = { en, es };

function lang() {
    const code = (vscode.env.language || 'en').substring(0, 2);
    return locales[code] ? code : 'en';
}

function t(key) {
    const locale = locales[lang()] || locales.en;
    return key.split('.').reduce((obj, k) => obj?.[k], locale) || key;
}

module.exports = { t, lang };
