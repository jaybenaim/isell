(this.webpackJsonpisell=this.webpackJsonpisell||[]).push([[0],{100:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=a(9),s=a(25),i=a(55),m=a(31),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cart:{items:[],qty:0,id:null},totalCostBeforeTax:0,user:{id:null}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a=t.payload,n=a.item,r=a.qty,c=n.id,o=e.cart,l=o.items,s=o.qty,i=o.id,u=e.totalCostBeforeTax,d=0;n.qty=r;for(var h=1;h<=r;h++)d+=Number(n.price);return console.log(e),Object.assign({},e,{cart:{items:[].concat(Object(m.a)(l.filter((function(e){return e.id!==c?e:null}))),[n]),qty:s+r,id:i},totalCostBeforeTax:Number(Number(u+Number(d)).toFixed(2))});case"REMOVE_ITEM":var p=t.payload,g=p.id,b=p.price,E=e.cart,v=E.items,f=E.qty,y=e.totalCostBeforeTax;return Object.assign({},e,{cart:{items:Object(m.a)(v.filter((function(e){return e.id!==g?e.id:null}))),qty:f-1,id:i},totalCostBeforeTax:Number(Number(y-b).toFixed(2))});case"CREATE_CART":var C=t.data,N=C._id,O=C.user.id;return console.log(C),Object.assign({},e,{user:{id:O},cart:{items:[],qty:0,id:N}});default:return e}},d=Object(s.c)({handleItem:u}),h=a(56),p=function(e){return{type:"CREATE_CART",data:e}},g=function(e,t){return{type:"REMOVE_ITEM",payload:{id:e,price:t}}},b=Object(h.createLogger)(),E=Object(s.d)(d,Object(s.a)(i.a,b)),v=(a(72),a(3)),f=a(5),y=a(7),C=a(6),N=a(8),O=(a(45),a(10)),j=a(112),k=a(113),w=(a(73),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a.shortDescription=function(e){return e.length<=15?e:e.slice(0,15)+"..."},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.error,n=t.item,c=t.hideModal,o=n.id,l=n.name,s=n.price,i=n.description,m=n.image,u=n.qty;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontSize:"2.6em"}},a):r.a.createElement("div",{className:"modal-cart-item-container"},r.a.createElement(O.b,{to:{pathname:"/Products/".concat(o,"/show"),state:{name:l,description:i,price:s,image:m}},className:"modal-link-to-product-show",onClick:function(){return c()}},r.a.createElement("img",{src:m,alt:l,className:"modal-cart-image"})),r.a.createElement("span",{className:"modal-cart-name"},l),r.a.createElement("span",{className:"modal-cart-short-desc"},this.shortDescription(i)),r.a.createElement("span",{className:"modal-cart-price"},"CAD ",r.a.createElement("strong",null,"$",s*u)," "),r.a.createElement("span",{className:"modal-cart-qty"},"QTY ",u," @ $",s),r.a.createElement("button",{className:"modal-cart-remove-item btn btn-outline-danger",onClick:function(){return e.props.removeItem(o,s)}},"Remove Item")))}}]),t}(n.Component)),T=Object(l.b)((function(e){var t=e.handleItem,a={items:t.items,qty:t.qty};return console.log(e),{cart:a}}),{removeItem:g})(w),x=(a(75),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={},a.showCartItems=function(){var e=a.props.cart,t=e.qty,n=e.items;return t>=1?n.map((function(e,t){return r.a.createElement(T,{item:e,key:t,hideModal:a.checkout})})):r.a.createElement(T,{item:{name:null,price:null,description:null,image:null},error:"Your cart is empty"})},a.checkout=function(){(0,a.props.onHide)()},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cart,n=t.onHide,c=t.totalCostBeforeTax,o=t.removeFromCart;return r.a.createElement(j.a,Object.assign({},t,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(j.a.Header,null,r.a.createElement(j.a.Title,{id:"contained-modal-title-vcenter"},"Your Cart"),r.a.createElement(k.a,{onClick:n,variant:"outline-danger"},"X")),r.a.createElement(j.a.Body,null,this.showCartItems()),r.a.createElement(j.a.Footer,null,r.a.createElement(O.b,{className:"nav-link btn-success proceed-to-checkout-btn",onClick:function(){return e.checkout()},to:{pathname:"/ShoppingCart",params:{totalCostBeforeTax:c,removeFromCart:o},state:{cart:a}}},"Proceed to checkout",r.a.createElement("br",null),r.a.createElement("span",{className:"proceed-to-checkout-total"},"Total: $",c))))}}]),t}(n.Component)),I=Object(l.b)((function(e,t){var a=e.handleItem;return{cart:{items:a.items,qty:a.qty},totalCostBeforeTax:a.totalCostBeforeTax}}),{})(x),S=a(13),L=a.n(S),A=a(35),q=a(16),D=a.n(q),P=D.a.create({baseURL:"http://localhost:5000/api"}),B=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(A.a)({},r,n))},a.onSubmit=function(e){a.props.handleLogin;e.preventDefault(),D()("http://localhost:5000/api/signup",{method:"POST",data:JSON.stringify(a.state),headers:{"Content-Type":"application/json"}}).then((function(e){if(console.log(e.data),200!==e.status)throw new Error(e.error);L.a.set("token",e.data.token,{expires:7}),L.a.set("id",e.data.userId,{expires:7});var t={id:e.data.userId};a.handleCreateCart(t),a.props.history.push("/")})).catch((function(e){console.error(e),alert("Error creating user, please try again.")}))},a.handleCreateCart=function(e){var t={user:e,products:[]};console.log(t),P.post("/carts",t,{}).then((function(e){console.log(e.data,"HELLLO"),a.props.createCart(e.data)})).catch((function(e){alert("Error creating cart",e)}))},a.state={email:"",password:""},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"register-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},r.a.createElement("h1",null,"Signup!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),F=Object(l.b)((function(e,t){return console.log(e),{item:"item"}}),{createCart:p})(B),R=(a(94),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(A.a)({},r,n))},a.onSubmit=function(e){a.props.handleLogin;e.preventDefault(),D()("http://localhost:5000/api/authenticate",{method:"POST",data:a.state,headers:{"Content-Type":"application/json"}}).then((function(e){if(console.log(e.data),200!==e.status)throw new Error(e.error);L.a.set("token",e.data.token,{expires:7}),L.a.set("id",e.data.id,{expires:7}),console.log(e.data),a.handleCreateCart(e.data),a.props.history.push("/")})).catch((function(e){console.log(e),alert("Error logging in please try again")}))},a.handleCreateCart=function(e){var t=L.a.get("id");console.log(t);var n={user:{id:t}};P.post("/carts",n,{}).then((function(e){a.props.createCart(e.data),console.log(e.data)})).catch((function(e){alert("Error creating cart",e)}))},a.state={email:"",password:"",containerClass:a.props.redirect?"register-form-container login-redirect":"register-form-container"},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.redirect,t=this.state.containerClass;return r.a.createElement("div",{className:t},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login Below!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})),e&&r.a.createElement(O.b,{to:"/signup",className:"signup-redirect-btn"},"Signup"))}}]),t}(n.Component)),M=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{createCart:p})(R),U=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleLogout=function(){var e=a.props.handleLogin;L.a.remove("token"),L.a.remove("id"),e()},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"logout-btn",onClick:function(){return e.handleLogout()}},"Logout")}}]),t}(n.Component);D.a.defaults.xsrfCookieName="csrftoken",D.a.defaults.xsrfHeaderName="X-CSRFToken";var _=D.a.create({baseURL:"https://isellapi.herokuapp.com/api"}),J=(a(95),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.handleLogin;return r.a.createElement("div",{className:"auth"},t?r.a.createElement("div",null,r.a.createElement(U,{handleLogin:a}),"Logged In"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-btn"},r.a.createElement(O.b,{to:"/login"},"Login")),r.a.createElement("br",null),r.a.createElement("div",{className:"signup-btn"},r.a.createElement(O.b,{to:"/signup"},"Signup")))))}}]),t}(n.Component)),H=(a(96),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={showCart:!1,expanded:!1},a.handleShowCart=function(e){var t=a.state.showCart;a.setState({showCart:!t})},a.handleToggler=function(){var e=a.state.expanded;a.setState({expanded:!e})},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.handleLogin,c=t.cart.qty,o=this.state,l=o.showCart,s=o.expanded;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/isell"},"Isell"),r.a.createElement("button",{className:s?"cart-btn cart-btn-1 btn cart-btn-expanded":"cart-btn cart-btn-1 btn",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,c)),l&&r.a.createElement(I,{onHide:function(){return e.handleShowCart()},show:l}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return e.handleToggler()}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active","data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement(O.b,{className:"nav-link",to:{pathname:"/Products",state:{isLoggedIn:a}}},"Products",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Pricing")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown link"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))),r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement("button",{className:"cart-btn btn cart-btn-2",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,c))))),r.a.createElement(J,{isLoggedIn:a,handleLogin:n})))}}]),t}(n.Component)),Y=Object(l.b)((function(e,t){var a=e.handleItem;return{cart:{items:a.items,qty:a.qty}}}),{})(H),$=a(24),X=function e(t,a,n,r,c,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;Object(v.a)(this,e),this.id=t,this.name=a,this.description=n,this.price=r,this.image=c,this.category=o,this.qty=l},V=[],Q=new X("5e2e3d8d50d8891b1cd5d9e1","Gucci","Juul Sticker","2.53","https://jaybenaim.github.io/isell/images/img1.jpg","TEST"),K=new X("5e2e3dde50d8891b1cd5d9e2","Rick and Morty","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img2.jpg","Phone Accesories"),W=new X("5e2e3e1450d8891b1cd5d9e3","Supreme","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img3.jpg","Phone Accesories");V.push(Q,K,W);var z=V,G=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={isLoaded:!1,showDesc:!1,qty:1,addToCartButtonText:"Add to cart",addToCartButtonDisabled:!1},a.shortDescription=function(e){return e.length<=15?e:e.slice(0,15)+"..."},a.showDescription=function(){var e=a.state.showDesc;a.setState({showDesc:!e})},a.handleSetQty=function(e){var t=Number(e.target.value);a.setState({qty:t})},a.getImageURl=function(){var e=a.props,t=e.image,n=e.name;return void 0===t?r.a.createElement("img",{src:"https://placehold.it/700x400",className:"card-img-top",alt:n}):r.a.createElement("img",{src:t,className:"card-img-top",alt:"none"})},a.handleAddProduct=function(e,t){var n=a.props,r=n.addItemToCart,c=n.cart,o=c.id,l=c.qty,s=void 0===l?e:l,i=c.items.map((function(e){return e}));i.push(t.id);var u={user:{id:o},products:Object(m.a)(i)};P.patch("/carts/".concat(o),u,{}).then((function(e){console.log(e.data+"Item added"),r(s,t)})).catch((function(e){alert("Error adding item")})),a.setState({addToCartButtonText:"Added to cart",addToCartButtonDisabled:!0})},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.setState({image:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.qty,n=t.showDesc,c=t.addToCartButtonText,o=t.addToCartButtonDisabled,l=this.props,s=l.name,i=l.description,m=l.price,u=l.productClass,d=l.id,h=l.product,p=l.image,g=l.isLoggedIn;return s=s.replace(/^\w/,(function(e){return e.toUpperCase()})),i=i.replace(/^\w/,(function(e){return e.toUpperCase()})),!p&&(p=h.image),r.a.createElement("div",{className:"".concat(u," card")},this.getImageURl(),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},s),r.a.createElement("p",{className:"card-text",onClick:function(){return e.showDescription()}},n?i:this.shortDescription(i)),r.a.createElement("p",null,"CAD $",m),r.a.createElement("label",{htmlFor:"qty-integer"},"Qty: "),r.a.createElement("input",{className:"qty-input",type:"number",name:"quantity",min:"1",max:"10",placeholder:"1",ref:this.qtyRef,onChange:this.handleSetQty,disabled:o}),r.a.createElement("button",{disabled:o,className:"add-to-cart-btn ",onClick:function(){return e.handleAddProduct(a,h)}},c),r.a.createElement(O.b,{to:{pathname:"/Products/".concat(d,"/show"),state:{id:d,name:s,description:i,price:m,image:p,isLoggedIn:g}},className:"btn btn-primary"},"Show Details")))}}]),t}(n.Component),Z=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{addItemToCart:function(e,t){return{type:"ADD_ITEM",payload:{qty:e,item:t}}},removeItemFromCart:g})(G),ee=(a(97),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addToCart,a=e.isLoggedIn;return r.a.createElement("div",{className:"featured-products-container"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Featured Products"),r.a.createElement("p",{className:"card-text"},"Take an additional 10% when using the code"," ",r.a.createElement("span",{className:"text-secondary"},"FREESTUFF "),r.a.createElement("br",null))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"featured-products-grid"},r.a.createElement("div",{className:"card-1"},r.a.createElement(Z,Object.assign({},z[0],{product:z[0],productClass:"product-card-".concat(z[0].id," product-card"),addToCart:t,isLoggedIn:a}))),r.a.createElement("div",{className:"card-2"},r.a.createElement(Z,Object.assign({},z[1],{product:z[1],productClass:"product-card-".concat(z[1].id," product-card"),addToCart:t,isLoggedIn:a}))),r.a.createElement("div",{className:"card-3"},r.a.createElement(Z,Object.assign({},z[2],{product:z[2],productClass:"product-card-".concat(z[2].id," product-card"),addToCart:t,isLoggedIn:a}))))),r.a.createElement("div",{className:"card-footer text-muted"},"2 days ago")))}}]),t}(n.Component)),te=function e(t,a,n,r,c,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:2;Object(v.a)(this,e),this.name=a,this.description=n,this.price=r,this.image=c,this.category=o,this.qty=l},ae=[],ne=new te("5e2e3e3d50d8891b1cd5d9e4","Louis Vuitton","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img4.jpg","Phone Accesories"),re=new te("5e2e3e6d50d8891b1cd5d9e5","Hello","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img5.jpg","Phone Accesories"),ce=new te("5e2e3ea050d8891b1cd5d9e6","Marble","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img6.jpg","Phone Accesories"),oe=new te("5e2e3ef050d8891b1cd5d9e7","Juul Holder","Juul Holder, Sticks to anywhere! Reusable!","2.00","https://jaybenaim.github.io/isell/images/img7.jpg","Phone Accesories"),le=new te("5e2e3f2350d8891b1cd5d9e8","Rick and Morty","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img8.jpg","Phone Accesories");ae.push(ne,re,ce,oe,le);var se=ae,ie=(a(98),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.location.state.isLoggedIn,t=this.props.addToCart,a=se.map((function(a,n){var c=a.id,o=a.image;return void 0===a.image?null:r.a.createElement(Z,Object.assign({key:n},a,{product:a,url:o,productClass:"product-card-".concat(c," product-card"),addToCart:t,isLoggedIn:e}))}));return r.a.createElement("div",null,r.a.createElement(ee,{addToCart:t}),r.a.createElement("div",{className:"product-container"},a))}}]),t}(n.Component)),me=a(14),ue=(a(99),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addToCart,a=e.isLoggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"home-carousel",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active carousel-item-1",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"50% OFF"),r.a.createElement("p",{className:"discount"},"Use code SALETIME for 50%"))),r.a.createElement("div",{className:"carousel-item carousel-item-2",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Got a Product?"),r.a.createElement("p",null,"Let us help you get is sold for top dollar"))),r.a.createElement("div",{className:"carousel-item carousel-item-3",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Local Products"),r.a.createElement("p",null,"All sellers are in your current area")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#home-carousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#home-carousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("div",null,r.a.createElement(ee,{addToCart:t,isLoggedIn:a})))}}]),t}(n.Component)),de=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={},a.getImageOr404=function(e,t){return void 0===e?r.a.createElement("img",{src:"https://placehold.it/700x400",className:"card-img-top",alt:"none"}):r.a.createElement("img",{src:e,className:"card-img-top",alt:t})},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=e.name,a=e.description,n=e.price,c=e.image;e.id;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 mb-3"},r.a.createElement("small",null," ",t)),r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"/isell"},"Home")),r.a.createElement("li",{className:"breadcrumb-item active"},t)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},this.getImageOr404(c,t)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",{className:"my-3"},"Project Description"),r.a.createElement("p",null,a),r.a.createElement("h3",{className:"my-3"},"$",n))),r.a.createElement("h3",{className:"my-4"},"Related Projects"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{className:"img-fluid",src:"https://placehold.it/500x300",alt:t}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{className:"img-fluid",src:"https://placehold.it/500x300",alt:""}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{className:"img-fluid",src:"https://placehold.it/500x300",alt:""}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{className:"img-fluid",src:"https://placehold.it/500x300",alt:""})))))}}]),t}(n.Component),he=(a(100),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.description,c=e.price,o=e.image,l=e.qty,s=e.removeItem;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("img",{className:"checkout-item-image",src:o,alt:a}),r.a.createElement("div",{className:"checkout-item-name"}," ",a),r.a.createElement("div",{className:"checkout-item-desc"},n),r.a.createElement("div",{className:"checkout-item-qty"},"QTY ",r.a.createElement("br",null)," ",l," "),r.a.createElement("div",{className:"checkout-item-price"},"$",c*l),r.a.createElement("button",{className:"btn btn-outline-danger checkout-item-delete-btn",onClick:function(){return s(t,c)}},"X"))}}]),t}(n.Component)),pe=Object(l.b)((function(e){var t=e.handleItem;return{cart:{items:t.items,qty:t.qty}}}),{removeItem:g})(he),ge=a(28),be=a(36),Ee=a.n(be),ve=a(23),fe=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).state={complete:!1},a.submit=a.submit.bind(Object(ve.a)(a)),a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"submit",value:function(e){var t,a,n,r;return Ee.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t="sk_test_59y42s9amXyOuAPudcbNBta500g0JElmda",Object({NODE_ENV:"production",PUBLIC_URL:"."}).SK_LIVE,a=this.props.subTotal,c.next=5,Ee.a.awrap(this.props.stripe.createToken({name:"Name"}));case 5:return n=c.sent,r=n.token,console.log(a),a=Math.round(a),a=JSON.stringify(a),console.log(e),c.next=13,Ee.a.awrap(_("/charge",{method:"POST",headers:{"Content-Type":"text/plain",Authorization:"Bearer ".concat(t),token:r.id,total:a}}));case 13:"OK"===c.sent.statusText&&this.setState({complete:!0});case 15:case"end":return c.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.subTotal;return e=Math.round(e),e=JSON.stringify(e),this.state.complete?r.a.createElement("h1",null,"Purchase Complete"):r.a.createElement("div",{className:"checkout"},r.a.createElement("p",null,"Would you like to complete the purchase for $",e/100,"? "),r.a.createElement(ge.CardElement,null),r.a.createElement("button",{onClick:this.submit,class:"btn btn-outline-success"},"Purchase"))}}]),t}(n.Component),ye=Object(ge.injectStripe)(fe),Ce=(a(107),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={isCheckedOut:!1},a.showCheckoutItems=function(){var e=a.props.cart,t=e.items,n=e.qty;return t.map((function(e,t){return r.a.createElement(pe,Object.assign({},e,{key:t,cartQty:n}))}))},a.handleCheckout=function(e){var t=a.state.isCheckedOut;a.setState({isCheckedOut:!t||e})},a.showCheckoutForm=function(){var e=a.props.location.params.totalCostBeforeTax,t=(Object({NODE_ENV:"production",PUBLIC_URL:"."}).PK_LIVE,(100*a.calculateSubTotal(e).subTotal).toFixed(2));return r.a.createElement(ge.StripeProvider,{apiKey:"pk_test_kUyitnXXbG5Rg8HhhfYhnklR00qMm6iAaZ"},r.a.createElement("div",{className:"stripe-container"},r.a.createElement("button",{className:"outline-danger btn",onClick:function(){return a.handleCheckout(!1)}},"x"),r.a.createElement("h1",null,"Confirm"),r.a.createElement("div",{className:"checkout-container"},r.a.createElement(ge.Elements,null,r.a.createElement(ye,{subTotal:t})))))},a.calculateSubTotal=function(e){var t=.13*Number(e),a=.029*e+.35,n=e+t+a;return{tax:t.toFixed(2),proccessFee:a.toFixed(2),subTotal:n.toFixed(2)}},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.cart,n=t.totalCostBeforeTax,c=this.state.isCheckedOut,o=this.calculateSubTotal(n),l=o.tax,s=o.proccessFee,i=o.subTotal;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h1",null,"Review Order"),a&&this.showCheckoutItems(),r.a.createElement("div",{className:"checkout-total-container"},r.a.createElement("div",{className:"checkout-message"},"You have ",a.qty," items in your cart."),r.a.createElement("span",{className:"checkout-label-tax"},"Tax:"),r.a.createElement("span",{className:"checkout-amount-tax"}," ",l),r.a.createElement("div",{className:"checkout-label-process-fees"},"Process Fee:"),r.a.createElement("span",{className:"checkout-amount-fees"},s),r.a.createElement("div",{className:"checkout-label-subtotal"},r.a.createElement("strong",null,"SubTotal:")),r.a.createElement("span",{className:"checkout-subtotal"},"$",i)),r.a.createElement("div",{className:"checkout-btn btn btn-success",onClick:function(){return e.handleCheckout()}},"Proceed to checkout"),c&&this.showCheckoutForm())}}]),t}(n.Component)),Ne=Object(l.b)((function(e){var t=e.handleItem;return{cart:{items:t.items,qty:t.qty},totalCostBeforeTax:t.totalCostBeforeTax}}),{removeItem:g})(Ce),Oe=a(61),je=a(60);a(108);var ke=function(e){var t=e.isLoggedIn,a=e.children,c=Object(je.a)(e,["isLoggedIn","children"]),o=Object(n.useState)(!0),l=Object(Oe.a)(o,2),s=l[0],i=l[1];return r.a.createElement($.a,Object.assign({},c,{render:function(e){return t?a:s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger login-alert",role:"alert"},"Please login first!",r.a.createElement("button",{className:"btn-danger alert-close-btn",onClick:function(){return i(!1)}},"X")),r.a.createElement(M,{redirect:!0}))}}))},we=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,"form for profile")}}]),t}(n.Component),Te=Object(me.a)(),xe=L.a.get().token,Ie=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:void 0!==xe,selectedProduct:null,addedToCart:!1,valid:!1,showAlert:!1},a.setSelectedProduct=function(e){a.setState({selectProduct:e})},a.toggleAlert=function(){var e=a.state.showAlert;a.setState({showAlert:!e})},a.handleLogin=function(e){a.setState({isLoggedIn:!!e})},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=L.a.get("id");console.log(L.a.get());var a=this.props.user.id,n={user:{id:void 0===t?a:t}};this.state.isLoggedIn&&P.post("/carts",n,{}).then((function(t){e.props.createCart(t.data),console.log(t.data)})).catch((function(e){alert("Error creating cart",e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.showAlert,n=t.isLoggedIn;return r.a.createElement(O.a,{basename:"/isell",history:Te},r.a.createElement("div",{className:"App"},r.a.createElement(Y,{isLoggedIn:n,handleLogin:this.handleLogin}),a&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("button",{className:"btn-danger alert-close-btn",onClick:function(){return e.toggleAlert()}},"X"),r.a.createElement("br",null),"YOU ALREADY ADDED THIS ITEM TO YOUR CART!",r.a.createElement("br",null),r.a.createElement("em",null,"Check your cart for multiples"),r.a.createElement("br",null)),r.a.createElement("div",{className:"content"},r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/"},r.a.createElement(ue,{isLoggedIn:n})),r.a.createElement($.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(M,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement($.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(F,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement($.a,{exact:!0,path:"/Products",render:function(t){return r.a.createElement(ie,Object.assign({},t,{removeFromCart:e.removeFromCart,selectProduct:e.setSelectedProduct}))}}),r.a.createElement($.a,{exact:!0,path:"/Products/:id/Show",component:de,render:function(e){return r.a.createElement(de,e)}}),r.a.createElement(ke,{path:"/ShoppingCart",isLoggedIn:n},r.a.createElement($.a,{exact:!0,path:"/ShoppingCart",component:Ne,render:function(t){return r.a.createElement(Ne,Object.assign({},t,{timestamp:(new Date).toString(),removeFromCart:e.removeFromCart}))}})),r.a.createElement(ke,{path:"/profiles/new",isLoggedIn:n},r.a.createElement($.a,{exact:!0,path:"/profiles/new",render:function(e){return r.a.createElement(we,e)}})))),r.a.createElement("footer",{className:"py-5 bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2019 NOT A REAL ECOMMERCE SITE DO NOT TRY TO PURCHASE")))))}}]),t}(n.Component),Se=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{createCart:p})(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:E},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){},63:function(e,t,a){e.exports=a(109)},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.48ed0e48.chunk.js.map