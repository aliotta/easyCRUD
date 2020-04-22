// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './examples/KnexSqliteExample/dev.sqlite3'
    },
    migrations: {
      directory: './examples/KnexSqliteExample/migrations',
      tableName: 'knex_migrations',
    }
  }
};
