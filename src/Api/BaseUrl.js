import axios from "axios";
const BaseUrl=axios.create({baseURL:"http://localhost:8000"})
export default BaseUrl;