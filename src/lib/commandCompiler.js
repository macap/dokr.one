export const commandCompiler = (command, variables, values) => {
  let result = command + "";
  const lineVariables = Array.from(command.matchAll(/{{(\w+)}}/gi));

  lineVariables.forEach(([str, name]) => {
    if (!!values[name]) {
      result = result
        .replaceAll(str, values[name])
        .replaceAll(`{{#${name}}}`, "")
        .replaceAll(`{{\/${name}}}`, "");
    } else {
      result = result.replaceAll(str, "");
      const matches = result.match("{{#" + name + "}}[^{]+{{/" + name + "}}");

      if (matches) {
        result = [
          result.slice(0, matches.index),
          result.slice(matches.index + matches[0].length),
        ].join("");
      }
    }
  });

  return result;
};
