import axios from 'axios' 

const headers =  'application/json';
// axios.defaults.baseURL = process.env.REACT_APP_API_HOST+"api";
axios.defaults.baseURL = 'https://chatapp-fa.herokuapp.com/api';

axios.defaults.headers.delete['Content-Type']=headers;
axios.defaults.headers.post['Content-Type']=headers;
axios.defaults.headers.put['Content-Type']=headers;
axios.defaults.headers.get['Content-Type']=headers;

export default axios;