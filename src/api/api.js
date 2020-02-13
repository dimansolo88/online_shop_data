import { instance } from './instance'

export const api = {
  async getProducts () {
    try {
      const res = await instance.get('/products?_start=20&_end=30')
      return res
    } catch (e) {
      // console.log(e)
    }
  },
}
