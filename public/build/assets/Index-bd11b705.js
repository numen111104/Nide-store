import{u as r,R as e,H as c}from"./app-7d2671bd.js";import{L as m}from"./Account-207f5831.js";import{D as s}from"./Delete-e544af69.js";import n from"./Create-eaf6d8c1.js";import"./sweetalert2.all-0cf0fb55.js";function u(){const{sliders:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"Slider - Nide Store")),e.createElement(m,null,e.createElement(n,null),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-images"})," Gambar Slider")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered text-center"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"20%"}},"Gambar"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Link"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Aksi"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",{className:"text-center"},e.createElement("img",{src:a.image,width:"200",className:"rounded-3"})),e.createElement("td",{className:"text-center"},a.link),e.createElement("td",{className:"text-center"},e.createElement(s,{URL:"/account/sliders",id:a.id})))))))))))))}export{u as default};
