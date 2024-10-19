import axios from 'axios'


//login
const login = async(userData) => {
    const response = await axios.post('https://staging.pekadis.com/api/login', userData)
    return response.data
};


const authService = {
    login
};

export default authService;


// https://staging.pekadis.com/api