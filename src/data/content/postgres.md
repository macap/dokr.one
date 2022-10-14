## Description

### Starting postgresql database quickly

Use those commands to quickly spin up postgres instance using docker. You can alter parameters using the form below to change the default configuration. It is useful for development environments or just testing.

### Using psql to interact with postgres db

Using **run psql** command, you can start cli to interact with your postgres database. You can view and alter data using SQL, and use builtin commands such as:

- `\l` list databases
- `\c <db-name>` select database
- `\dt` display tables
