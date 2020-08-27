import { create } from "apisauce";

const api = create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

class ApiSauce {
 
  async get(url) {
    api.setHeaders({
      "Content-Type": "application/json",
        Accept: "application/json",
    });
    const response = await api.get(url);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {

    if (
      response.data &&
      response.data.success
    ) {
      
      resolve(response.data);
    } else {
      if (
        !response.data.success
      ) {
        reject(response?.data?.msg);
      }
    }
  };
}

export default new ApiSauce();
