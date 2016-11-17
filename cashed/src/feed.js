const random = require('lodash')

const getUser = function(db, notThisUser = 000000) {
  const size = db.get('users').size().value()

  if (size < 3) {
    console.log('insert users')
    var mocks = [
      {
        username: 'GinaZaz',
        avatar: '',
        city: 'Atlanta',
        state: 'GA'
      },
      {
        username: 'TyDolla',
        avatar: '',
        city: 'LA',
        state: 'CA'
      },
      {
        username: 'yellyT',
        avatar: '',
        city: 'NY',
        state: 'NY'
      },
      {
        username: 'tj_hustle',
        avatar: '',
        city: 'Chicago',
        state: 'IL'
      }
    ]
    mocks.map(user => db.get('users').insert(user).value())
  }

   const users = db.get('users')
    .filter(user => user.id !== notThisUser)
    .filter(user => !user.admin)
    .value()

  return users[random(0, users.length - 1)]
}


const getRandomReason = function() {
  return [
    'For the foods the other day',
    'my share for the rent..',
    'just because',
    'yesterday was dope',
    'Never had a Tesla pick me up as an Uber'
  ][random(0, 5)]
}

const createTransaction = function(db, user1, user2) {
  const transaction = {
    fromId: user1.id,
    toId: user2.id,
    from: user1,
    to: user2,
    amount: random(10.1, 2499.99),
    createdAt: new Date(),
    reason: getRandomReason()
  }

  return db.get('payments')
  .insert(transaction)
  .value()
}

module.exports = function(socket, db) {
  setInterval(() => {
    const user1 = getUser(db)
    if (user1) {
      const user2 = getUser(db, user1.id)
      const transaction = createTransaction(db, user1, user2)
      console.log(JSON.stringify(transaction, null, 2))
      // socket.emit('transaction', transaction)
    }
  }, 3300)
}