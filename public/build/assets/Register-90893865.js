import{u as p,r as s,R as e,H as E,L as N,d as g}from"./app-7d2671bd.js";function f(){const{errors:t}=p().props,[l,c]=s.useState(""),[r,o]=s.useState(""),[m,i]=s.useState(""),[n,d]=s.useState(""),u=async a=>{a.preventDefault(),g.Inertia.post("/register",{name:l,email:r,password:m,password_confirmation:n})};return e.createElement(e.Fragment,null,e.createElement(E,null,e.createElement("title",null,"Daftar Akun | Nide Store")),e.createElement("div",{className:"container"},e.createElement("div",{className:"row justify-content-center"},e.createElement("div",{className:"col-md-8 mt-80"},e.createElement("div",{className:"text-center mb-4"},e.createElement("img",{src:"/assets/images/logo2.png",width:"100"}),e.createElement("h4",null,e.createElement("strong",null,"NIDE")," STORE")),e.createElement("div",{className:"card border-0 rounded-3 shadow-sm border-top-success"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"text-center"},e.createElement("h6",{className:"fw-bold"},"BUAT AKUN BARU"),e.createElement("hr",null)),e.createElement("form",{onSubmit:u},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Nama Lengkap"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-user-circle","aria-hidden":"true"})),e.createElement("input",{type:"text",className:"form-control",value:l,onChange:a=>c(a.target.value),placeholder:"Isi Nama Lengkap!"})),t.name&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.name)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Email"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-envelope"})),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>o(a.target.value),placeholder:"Isi Email!"})),t.email&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.email))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-lock"})),e.createElement("input",{type:"password",className:"form-control",value:m,onChange:a=>i(a.target.value),placeholder:"Isi Password!"})),t.password&&e.createElement("div",{className:"alert alert-danger custom-alert"},t.password)),e.createElement("div",{className:"col-md-6"},e.createElement("label",{className:"mb-1"},"Konfirmasi Password"),e.createElement("div",{className:"input-group mb-3"},e.createElement("span",{className:"input-group-text"},e.createElement("i",{className:"fa fa-unlock"})),e.createElement("input",{type:"password",className:"form-control",value:n,onChange:a=>d(a.target.value),placeholder:"Ulangi Password!"})))),e.createElement("button",{className:"btn btn-success shadow-sm rounded-sm px-4 w-100",type:"submit"},"DAFTAR")))),e.createElement("div",{className:"register text-center mt-3"},"Sudah punya akun? ",e.createElement(N,{href:"/login"},"Masuk!"))))))}export{f as default};
