## React Hooks for api call
### Usage
import useFetch from 'react-axios-data';
const {data, error} = useFetch({url :'',method: '', body: {}, headers:{}, params: {}})

## Note
you can also set Base Url 
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
