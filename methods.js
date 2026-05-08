const vscode = require('vscode');
const { t } = require('./locales/i18n');

function buildMethods(category) {
    const items = [];
    for (const [name, entry] of Object.entries(t(category) || {})) {
        if (entry.firma) {
            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Method);
            item.detail = entry.firma;
            item.documentation = new vscode.MarkdownString(entry.docs);
            items.push(item);
        } else if (entry.tipo) {
            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Property);
            item.detail = entry.tipo;
            item.documentation = new vscode.MarkdownString(entry.docs);
            items.push(item);
        }
    }
    return items;
}

const dbMethods = buildMethods('dbMethods');
const dbInstanceMethods = buildMethods('dbInstanceMethods');
const tableMethods = buildMethods('tableMethods');
const rowMethods = buildMethods('rowMethods');
const resultMethods = buildMethods('resultMethods');

module.exports = { dbMethods, dbInstanceMethods, tableMethods, rowMethods, resultMethods };
