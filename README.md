# dockr.one

I've created this tool to easily use dockerized tools for development. I often need a temporary/test redis, postgres instance, while i don't want to invest to fully dockerize the project environment.

As tools are dockerized its easy to use different versions, clean them up if you dont need them anymore, and most importantly you spin up time is much faster compared to local installation. You may find it useful to play around with something and easily remove it afterwards without cluttering your system.

General principle is that you create a named docker container with just one command, and then start/stop/remove it with simple _docker start|stop|remove containername_.

## 🚀 Development

This project is built with [gatsbyjs](https://www.gatsbyjs.com/), so refer to [gatsbyjs docs](https://www.gatsbyjs.com/docs/) to learn more about development

TLDR to start the project locally:

- `npm install` && `npm run develop`

## Contribution

If you want to add your tool to dockr.one feel free to open pull requests. To define a tool clone `template.json` into `src/data/tools` and fill in relevant content.

### Description and content

- `content` field should (optionally) contain the path to markdown file in `src/data/content` if you want to provide extensive tool description to be included on the tool page
- `description` field is a string which will be shown as tool description if `content` file is not provided (good for short and plaintext descriptions)

Everything else feels self explanatory, refer to other json files to get the idea how it works.

### Templating commands

As you can see on (dockr.one)[https://dockr.one] website, the user can customize commands by providing parameters. Parameters form is automatically generated if you provide variables config in tools json:

```jsonc
/* fragment of template.json */
"variables": [
  {
    "name": "var", // variable name/token used in command as {{var}}
    "default": null, // default value
    "required": false, // false if variable is optional (wrapped in conditional block: {{#var}} -rf {{var}} {{/var}})
    "description": "test var", // short description to show on the page
    "values": [] // not used yet
  }
]

```

and use them in command definition:

```jsonc
/* fragment of template.json */
"commands": [
    {
      "name": "command",
      "description": "description",
      "value": "rm{{#var}} -rf {{var}} {{/var}} {{name}}"
    }
  ],
```

- `{{#var}} {{/var}}` - optional block - anything inside will be ommited if variable is optional and was not provided by the user
- `{{var}}` - will be replaced with user input
