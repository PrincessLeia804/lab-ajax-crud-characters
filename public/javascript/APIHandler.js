class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = axios.create({
      baseUrl: 'http://localhost:8000/characters'
    });
  }

  async getFullList() {

   const all = await axios
   .get(`http://localhost:8000/characters`)

      if(all.status === 200){
      console.log("Successfully fetched all");
    } else {
      console.log("COuldnt fetch")
    }
    return all
  }


  getOneRegister(id) {
    return this.BASE_URL.get('/:id')

    // axios
    //   .get(`http://localhost:8000/characters/:id`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch(err => {
    //     console.log(err);
    //     err.response.status === 404 ? alert(`The data doesn't exist.`) : alert('Server error! Sorry.');
    //   })

  }

  createOneRegister(characterInfo) {
    return this.BASE_URL.post('', characterInfo)
  }

  updateOneRegister(id) {
    return this.BASE_URL.put('/:id', id)
  }

  async deleteOneRegister(id) {
    const response = await axios.delete("http://localhost:8000/characters/:id")
    if(response.status === 200){
      console.log("Successfully deleted");
    } else {
      console.log("Character wasn't found")
    }
    return response .data
  }
}
