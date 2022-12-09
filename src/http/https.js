import axios from '@/ulit/requrse'
// 按需抛出
export let gitlong = (obj) => axios.post('login', obj)