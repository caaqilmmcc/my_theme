import{af as n,a5 as a}from"./index-3d65e1d5.js";const u=n("UserListStore",{actions:{fetchUsers(s){return a.get("/apps/users/list",{params:s})},addUser(s){return new Promise((r,t)=>{a.post("/apps/users/user",{user:s}).then(e=>r(e)).catch(e=>t(e))})},fetchUser(s){return new Promise((r,t)=>{a.get(`/apps/users/${s}`).then(e=>r(e)).catch(e=>t(e))})},deleteUser(s){return new Promise((r,t)=>{a.delete(`/apps/users/${s}`).then(e=>r(e)).catch(e=>t(e))})}}});export{u};
