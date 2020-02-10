// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './examples/dev.sqlite3'
    },
    migrations: {
      directory: './examples/db/migrations',
      tableName: 'knex_migrations',
    }
  }
};
