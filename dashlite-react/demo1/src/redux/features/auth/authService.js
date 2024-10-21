import axios from 'axios'


//login
const login = async(userData) => {
    const response = await axios.post('https://staging.pekadis.com/api/login', userData)
    console.log(response.data.token)
    localStorage.setItem("accessToken", response.data.token)
    return response.data
};


const authService = {
    login
};

export default authService;
