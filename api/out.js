import axios from 'axios'

export const getSearchDaData = async (query) => {
  try {
    const { data } = await axios.post(process.env.api.dadata, { query, count: 5 }, {
      headers: {
        'Authorization': `Token ${process.env.dadata_key}`
      }
    })

    return data
  } catch (e) {
    if (e && e.data && e.data.error) {
      return e.response.data
    } else {
      console.error({ error: 'Bad request' })
    }
  }
}
