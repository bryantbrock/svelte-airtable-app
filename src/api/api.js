import {query, client as airtable} from 'api/airtable'

export const getRecords = () => {
  return client(table).select(queryParams).firstPage()
}