const vscode = require('vscode');
const { dbMethods, dbInstanceMethods, tableMethods, rowMethods, resultMethods } = require('./methods');
const { t } = require('./locales/i18n');

const allMethods = [...dbMethods, ...dbInstanceMethods, ...tableMethods, ...rowMethods, ...resultMethods];

function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'javascript' },
        {
            provideCompletionItems() {
                return allMethods;
            }
        },
        '.'
    );
    context.subscriptions.push(provider);

    const helloWorld = vscode.commands.registerCommand('ormn-snippets.helloWorld', () => {
        vscode.window.showInformationMessage(t('helloWorld'));
    });
    context.subscriptions.push(helloWorld);
}

function deactivate() {}

module.exports = { activate, deactivate };
