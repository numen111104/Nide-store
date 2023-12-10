import{u as w,r,R as e,H as g,d as k}from"./app-7d2671bd.js";import{L as y}from"./Account-207f5831.js";import{S as C}from"./sweetalert2.all-0cf0fb55.js";function U(){const{errors:t,roles:u,user:m}=w().props,[n,E]=r.useState(m.name),[o,p]=r.useState(m.email),[d,N]=r.useState(""),[i,f]=r.useState(""),[c,b]=r.useState(m.roles.map(a=>a.name)),v=a=>{let l=c;l.some(s=>s===a.target.value)?l=l.filter(s=>s!==a.target.value):l.push(a.target.value),b(l)},h=async a=>{a.preventDefault(),k.Inertia.put(`/account/users/${m.id}`,{name:n,email:o,password:d,password_confirmation:i,roles:c},{onSuccess:()=>{C.fire({title:"Sukses!",text:"Data berhasil diperbarui!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement("title",null,"Edit Users - Nide Store")),e.createElement(y,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Edit User")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:h},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama Lengkap"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>E(a.target.value),placeholder:"Masukkan Nama Lengkap"})),t.name&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"text",className:"form-control",value:o,onChange:a=>p(a.target.value),placeholder:"Masukkan Email"})),t.email&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Password"),e.createElement("input",{type:"password",className:"form-control",value:d,onChange:a=>N(a.target.value),placeholder:"Masukkan Password"})),t.password&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.password)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Konfirmasi Password"),e.createElement("input",{type:"password",className:"form-control",value:i,onChange:a=>f(a.target.value),placeholder:"Ulangi Password"})))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold"},"Roles"),e.createElement("br",null),u.map((a,l)=>e.createElement("div",{className:"form-check form-check-inline",key:l},e.createElement("input",{className:"form-check-input",type:"checkbox",value:a.name,defaultChecked:c.some(s=>s===a.name),onChange:v,id:`check-${a.id}`}),e.createElement("label",{className:"form-check-label",htmlFor:`check-${a.id}`},a.name))),t.roles&&e.createElement("div",{className:"alert alert-danger custom-alert mt-2"},t.roles)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Update"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{U as default};
