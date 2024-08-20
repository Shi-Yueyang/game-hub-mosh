import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key:"4d13a40d40634150ab89b9b0210bd7ee"
    }
})