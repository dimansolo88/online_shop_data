import { instance } from './instance'

export const getProductApi = {
  async getProducts() {
    try {
      const res = await instance.get('/products/')
      return res
    } catch (e) {
      // console.log(e)
    }
  },
}

// _start=20&_end=30
