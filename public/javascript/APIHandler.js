class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // async getFullList() {
 async getFullList() {
   return await axios.get(`${this.BASE_URL}/characters`)
    //   if(all.status === 200){
    //   console.log("Successfully fetched all");
    // } else {
    //   console.log("COuldnt fetch")
  // }
  }


  async getOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`)
   
    if(characterId.status === 200){
      console.log("Successfully fetched id");
    } else {
      console.log("Couldnt fetch id")
    }
  }

  async createOneRegister(characterInfo) {
    return await axios.post(`${this.BASE_URL}/characters`, characterInfo)
  }

  async updateOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`, id)
  }

  async deleteOneRegister(id) {
    return await axios.delete(`${this.BASE_URL}/characters/${id}`)
    // if(response.status === 200){
    //   console.log("Successfully deleted");
    // } else {
    //   console.log("Character wasn't found")
    // }
  }
}
