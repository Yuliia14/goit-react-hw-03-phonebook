(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__PN3CO",formInputs:"ContactForm_formInputs__3ng7j",text:"ContactForm_text__3GKFI",label:"ContactForm_label__16EVm ContactForm_text__3GKFI",input:"ContactForm_input__YMCbw",button:"ContactForm_button__v4K7I ContactForm_text__3GKFI",span:"ContactForm_span__zW-SI ContactForm_text__3GKFI"}},function(t,e,n){t.exports={list:"ContactList_list__1H4xZ",item:"ContactList_item__1-msK",input:"ContactList_input__3TMaF",text:"ContactList_text__176kB"}},,,,,,,function(t,e,n){},,function(t,e,n){t.exports={input:"Filter_input__3vVUZ"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(9),s=n.n(r),i=(n(19),n(13)),u=n(4),l=n(5),m=n(7),b=n(6),h=n(22),j=n(10),f=n.n(j),d=n(3),p=n.n(d),_=function(t){var e=t.name,n=t.number,c=t.onRemove;return Object(a.jsxs)("li",{className:p.a.item,children:[Object(a.jsxs)("p",{className:p.a.text,children:[e,": ",n]}),Object(a.jsx)("button",{type:"button",onClick:c,children:"Delete contact"})]})},C=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsx)(_,{name:c,number:o,onRemove:function(){return n(e)}},e)}))})},v=n(11),x=n(2),O=n.n(x),g=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact({name:a,number:c}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:O.a.formInputs,children:[Object(a.jsxs)("label",{className:O.a.label,children:["Name",Object(a.jsx)("input",{type:"text",placeholder:"Enter name",className:O.a.input,name:"name",value:e,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:O.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",placeholder:"Enter number",className:O.a.input,name:"number",value:n,onChange:this.handleChange})]})]}),Object(a.jsx)("button",{type:"submit",className:O.a.button,children:Object(a.jsxs)("span",{className:O.a.span,children:["Add contact ",e]})})]})}}]),n}(c.Component),F=n(12),N=n.n(F);function y(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",className:N.a.input,name:"filter",value:e,onChange:function(t){return n(t.target.value)}})})}var S=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(h.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name===n}))?(console.log(t.state.contacts),alert("".concat(n," is already in contacts"))):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(g,{onAddContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("p",{className:f.a.text,children:"Find contacts by name"}),Object(a.jsx)(y,{filter:n,onChangeFilter:this.changeFilter}),e.length>0&&Object(a.jsx)(C,{contacts:c,onRemoveContact:this.removeContact})]})}}]),n}(c.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),I()}],[[20,1,2]]]);
//# sourceMappingURL=main.b5527997.chunk.js.map