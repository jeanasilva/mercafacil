'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
    up() {
        this.create('contacts', (table) => {
            table.increments('id_serial')
            table.string('nome').notNullable()
            table.string('telefone').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('contacts')
    }
}

module.exports = ContactSchema