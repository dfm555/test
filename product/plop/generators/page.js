module.exports = {
  description: 'Page Template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter page name',
    },
    {
      type: 'directory',
      name: 'path',
      message: 'where would you like to put this page?',
    },
  ],
  actions: data => {
    const actions = []

    if (data.path) {
      actions.push(
        {
          type: 'add',
          path: 'pages/{{path}}/{{lowerCase name}}.js',
          templateFile: 'plop/templates/page/page.hbs',
        },
        {
          type: 'add',
          path: 'pages/{{path}}/{{lowerCase name}}.test.js',
          templateFile: 'plop/templates/page/test.hbs',
        }
      )
    } else {
      actions.push(
        {
          type: 'add',
          path: 'pages/{{lowerCase name}}/index.js',
          templateFile: 'plop/templates/page/page.hbs',
        },
        {
          type: 'add',
          path: 'pages/{{lowerCase name}}/{{lowerCase name}}.test.js',
          templateFile: 'plop/templates/page/test.hbs',
        }
      )
    }

    return actions
  },
}
