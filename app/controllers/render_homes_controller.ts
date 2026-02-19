import type { HttpContext } from '@adonisjs/core/http'

export default class RenderHomesController {
    public async index({ view }: HttpContext) {
        return view.render('pages/home')
    }
}