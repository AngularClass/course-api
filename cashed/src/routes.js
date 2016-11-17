const router = require('express').Router()
const controller = require('./controller')

router.param('user', controller.getUserByParam)
router.param('payment', controller.getPaymentByParam)


router.route('/payments')
.post(controller.createPayment)
.get(controller.getPayments)

router.get('/payments/:payment', controller.getOnePayment)

router.route('/users')
.post(controller.createUser)
.get(controller.getUser)
.put(controller.updateUser)
.delete(controller.deleteUser)

router.get('/users/:user', controller.getOneUser)

module.exports = () => router
