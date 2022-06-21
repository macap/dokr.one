import { commandCompiler } from "./commandCompiler";

describe("Command compiler", () => {
  it("works", () => {
    expect(
      commandCompiler(
        "docker run --rm --name {{container_name}} -p 5432:5432{{#base_image}} -e IMAGE={{base_image}}{{/base_image}} -e POSTGRES_PASSWORD={{password}}{{#user}} -e POSTGRES_USER={{user}}{{/user}} -d postgres",
        [
          {
            name: "container_name",
            default: "postgrestemp",
            required: true,
            description: "docker container name",
          },
          {
            name: "base_image",
            default: null,
            required: false,
            description: "Base image",
          },
          {
            name: "password",
            default: "mypassword",
            required: true,
            description: "db password",
          },
          {
            name: "user",
            default: null,
            required: false,
            description: "db default user",
          },
        ],
        {
          container_name: "somecontainername",
          base_image: null,
          password: "somecontainerpw",
          user: "root",
        }
      )
    ).toEqual(
      "docker run --rm --name somecontainername -p 5432:5432 -e POSTGRES_PASSWORD=somecontainerpw -e POSTGRES_USER=root -d postgres"
    );
  });
});
