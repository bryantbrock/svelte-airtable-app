import Airtable from 'airtable'

Airtable.configure({apiKey: process.env.AIRTABLE_API_KEY})

export const client = Airtable.base(process.env.AIRTABLE_BASE_KEY)