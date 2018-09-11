const faker = require('faker')

module.exports = {
  String: () => faker.hacker.phrase(),
  Query: () => ({
    dashboard: () => ({
      widgets: [{ id: '1' }, { id: '2' }],
    }),
    widget: () => ({
      id: '2',
    }),
  }),
}
