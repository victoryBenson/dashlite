import axios from 'axios'


//register
const login = async(userData) => {
    const response = await axios.post('https://api.myartstocks.com/login', userData)
    sessionStorage.setItem('token', response.token);
    return response.data
};



const authService = {
    login
};

export default authService;