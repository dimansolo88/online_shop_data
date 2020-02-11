import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {},
})

export const api = {
  async getProducts() {
    try {
      const res = await instance.get('/products?_start=20&_end=30')
      return res
    } catch (e) {
      // console.log(e)
    }
  },
}
