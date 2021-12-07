module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dbdffe05755d7b901376914da27dc598'),
  },
});
