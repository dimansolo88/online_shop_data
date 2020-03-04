import { instance } from './instance'

export const getDetailedProductApi = {
  async getDetailed(id) {
    try {
      const res = await instance.get(`/products/${id}`)
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
