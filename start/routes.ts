/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')

router.get('/', async ({ view }) => {
  return view.render('pages/login')
})

router.get('/signup', async ({ view }) => {
  return view.render('pages/signup')
})