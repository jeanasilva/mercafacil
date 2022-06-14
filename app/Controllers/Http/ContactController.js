'use strict'

const Contact = use('App/Models/Contact')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contacts
 */
class ContactController {

    async index({ request, response, view }) {

        const contacts = Contact.all()
        return contacts

    }

    async store({ auth, request, response }) {

        const { id } = auth.user
        const data = request.only([
            'nome',
            'telefone'
        ])

        const contacts = await Contact.create({...data })

    }


    async show({ params, request, response, view }) {

        const contacts = await Contact.findOrFail(params.id)
        return contacts

    }

    async update({ params, request, response }) {}


    async destroy({ params, request, response }) {



    }
}

module.exports = ContactController