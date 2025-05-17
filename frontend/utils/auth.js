import { setToken, getToken } from "./token";
import { baseUrl } from "./config";



const getInfo = async () => {
 const response = await fetch(`${baseUrl}/users/me`, {
  headers: {
   'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
 });
 const data = await response.json();
 return data;
};
const signup = async (userdata) => {
 const response = await fetch(`${baseUrl}/signup`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(userdata)
 });
 if (response.status === 400) {
  return { error: 'Invalid email or password' };
 }
 const data = await response.json();
 setToken(data.token);
 return data;
};
const signin = async (userdata) => {
 const response = await fetch(`${baseUrl}/signin`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(userdata)
 });
 if (response.status === 400) {
  return { error: 'Invalid email or password' };
 }

 const data = await response.json();
 setToken(data.token);
 return data;
};



const fetchData = async (endpoint) => {
 const token = getToken();
 const response = await fetch(`${baseUrl}${endpoint}`, {
  headers: {
   'Authorization': `Bearer ${token}`,
  },
 });
 const data = await response.json();
 return data;
};


export { signin, signup, fetchData, getInfo, };