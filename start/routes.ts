/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ view }) => {
  return view.render('pages/login')
})

router.get('/signup', async ({ view }) => {
  return view.render('pages/signup')
})

router.get('/home', async ({ view }) => {
  return view.render('pages/home')
})

router.get('/profile', async ({ view }) => {
  return view.render('pages/profile')
})

router.get('/settings', async ({ view }) => {
  return view.render('pages/settings')
})