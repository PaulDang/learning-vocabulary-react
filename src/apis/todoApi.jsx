import http from "./commonHttp";

const todoApi = {
  add: (data)=>{
    console.log(data)
    return http.post("/add", data)
  },
  getAll: () => {
    return http.get("/list")
  }
}

export default todoApi