import{r as c,R as e,d as o}from"./app-7d2671bd.js";function m({URL:n}){const[t,s]=c.useState(""),r=a=>{a.preventDefault(),o.Inertia.get(`${n}?q=${t}`)};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:r},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",value:t,onChange:a=>s(a.target.value),className:"form-control border-0 shadow-sm",placeholder:"Sedang cari apa nih?"}),e.createElement("span",{className:"input-group-text-search border-0 shadow-sm",type:"button",onClick:r},e.createElement("i",{className:"fa fa-search"})))))}export{m as S};
