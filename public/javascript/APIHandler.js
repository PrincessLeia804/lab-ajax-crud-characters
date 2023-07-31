class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // async getFullList() {
 async getFullList() {
   return await axios.get(`${this.BASE_URL}/characters`)
  }


  async getOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  async createOneRegister(characterInfo) {
    return await axios.post(`${this.BASE_URL}/characters`, characterInfo)
  }

  async updateOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`, id)
  }

  async deleteOneRegister(id) {
    return await axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
