/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'

router.get('/register', [UsersController, 'showRegister'])
router.post('/users', [UsersController, 'store'])

router.get('/home', async ({ view }) => {
  return view.render('pages/home')
})
