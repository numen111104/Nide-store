import{u as b,r as n,R as e,H as f,d as p}from"./app-7d2671bd.js";import{L as N}from"./Account-207f5831.js";import{S as h}from"./sweetalert2.all-0cf0fb55.js";function w(){const{errors:s,permissions:o,role:r}=b().props,[c,i]=n.useState(r.name),[m,d]=n.useState(r.permissions.map(a=>a.name)),u=a=>{let t=m;t.some(l=>l===a.target.value)?t=t.filter(l=>l!==a.target.value):t.push(a.target.value),d(t)},E=async a=>{a.preventDefault(),p.Inertia.put(`/account/roles/${r.id}`,{name:c,permissions:m},{onSuccess:()=>{h.fire({title:"Sukses!",text:"Data berhasil diupdate!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement("title",null,"Edit Role - Nide Store")),e.createElement(N,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shield-alt"})," Edit Role")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:E},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama Role"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>i(a.target.value),placeholder:"Masukkan nama role"})),s.name&&e.createElement("div",{className:"alert alert-danger custom-alert"},s.name),e.createElement("hr",null),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold form-label"},"Hak Akses"),e.createElement("br",null),o.map((a,t)=>e.createElement("div",{className:"form-check form-check-inline",key:t},e.createElement("input",{className:"form-check-input",type:"checkbox",value:a.name,defaultChecked:m.some(l=>l===a.name),onChange:u,id:`check-${a.id}`}),e.createElement("label",{className:"form-check-label",htmlFor:`check-${a.id}`},a.name))),s.permissions&&e.createElement("div",{className:"alert alert-danger custom-alert mt-2"},s.permissions)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Perbarui"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{w as default};
