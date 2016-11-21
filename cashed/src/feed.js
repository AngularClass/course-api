const random = require('lodash/random')

const getUser = function(db, notThisUser = 000000) {
  const size = db.get('users').size().value()

  if (size < 3) {
    var mocks = [
      {
        username: 'GinaZaz',
        avatar: 'https://api.adorable.io/avatars/250/yo',
        city: 'Atlanta',
        state: 'GA'
      },
      {
        username: 'TyDolla',
        avatar: 'https://api.adorable.io/avatars/250/mean',
        city: 'LA',
        state: 'CA'
      },
      {
        username: 'yellyT',
        avatar: 'https://api.adorable.io/avatars/250/happy',
        city: 'NY',
        state: 'NY'
      },
      {
        username: 'tj_hustle',
        avatar: 'https://api.adorable.io/avatars/250/extra',
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
    'Never had a Tesla pick me up as an Uber',
    'Don\'t forget to get the right size this time!',
    'just returning the favor',
    'I can\'t beleive I lost that bet, here ya go'
  ][random(0, 7)]
}

const createTransaction = function(db, user1, user2) {
  const transaction = {
    fromId: user1.id,
    toId: user2.id,
    from: user1,
    to: user2,
    amount: random(10, 1300),
    createdAt: new Date(),
    reason: getRandomReason()
  }

  return db.get('payments')
  .insert(transaction)
  .value()
}

module.exports = {
  realtime(socket, db) {
    setInterval(() => {
      const user1 = getUser(db)
      if (user1) {
        const user2 = getUser(db, user1.id)
        const transaction = createTransaction(db, user1, user2)
        socket.emit('transaction', transaction)
      }
    }, 3300)
  },

  seed(db) {
    db.set('users', []).value()
    db.set('payments', []).value()
    
    Array(30).fill(1)
    .forEach(() => {
      const user = getUser(db)
      const user2 = getUser(db, user.id)
      createTransaction(db, user, user2)
    })

    db.set('me', {
      username: 'ItsMe',
      avatar: 'https://api.adorable.io/avatars/250/me',
      city: 'Dallas',
      state: 'TX',
      current_amount: 0,
      credit_cards: [],
      default_card: {},
      password: ''
    })
    console.log('seeded DB')
  }
}
