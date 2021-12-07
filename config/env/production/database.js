const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host:"ec2-18-210-159-154.compute-1.amazonaws.com",
      port: "5432",
      database: "db85s9d0v5qtkf",
      user: "nuwqtcfyvsqrsi",
      password: "4edcd5c57a17ce36bb9899160107c07ed4206c7292c5d192560f5d390fbf5c8b",
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});


