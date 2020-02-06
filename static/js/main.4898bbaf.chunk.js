(this.webpackJsonpisell=this.webpackJsonpisell||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=a(9),s=a(27),i=a(55),u=a(22),m=a(17),d=a.n(m),h=d.a.create({baseURL:"http://localhost:5000/api"}),p=function(e){var t=0;return e?(e.map((function(e){return t+=Number(e.price*e.qty)})),t):t},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cart:{items:[],qty:0,id:null,totalCostBeforeTax:0},user:{id:null}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a=t.payload,n=a.item,r=a.qty,c=n.id,o=e.cart,l=o.items,s=(o.qty,o.id);n.qty=r;var i=[].concat(Object(u.a)(l.filter((function(e){return e._id!==c?e:null}))),[n]),m=p(i),d=i?i.length:0;return Object.assign({},e,{cart:{items:i,qty:d,id:s,totalCostBeforeTax:m.toFixed(2)}});case"REMOVE_ITEM":var h=t.payload.products,g=e.cart.id;console.log(t);var b=p(h),f=h?h.length:0;return Object.assign({},e,{cart:{items:h,id:g,totalCostBeforeTax:b.toFixed(2),qty:f}});case"CREATE_CART":var E=t.data,v=E._id,y=E.user.id;return console.log(E),Object.assign({},e,{user:{id:y},cart:{items:[],qty:0,id:v,totalCostBeforeTax:0}});case"GET_CART":var C=t.cart,j=C.products,O=C._id,N=(C.createdAt,t.user),k=p(j),T=j?j.length:0;return Object.assign({},e,{user:N,cart:{items:j,qty:T,id:O,totalCostBeforeTax:k.toFixed(2)}});default:return e}},b=Object(s.c)({handleItem:g}),f=a(56),E=function(e){return{type:"GET_CART",cart:{_id:e._id,products:e.products},user:e.user}},v=function(e){return{type:"CREATE_CART",data:e}},y=function(e,t){return{type:"ADD_ITEM",payload:{qty:e,item:t}}},C=function(e){return{type:"REMOVE_ITEM",payload:{products:e.products}}},j=Object(f.createLogger)(),O=Object(s.d)(b,Object(s.a)(i.a,j)),N=(a(90),a(23)),k=a.n(N),T=a(3),w=a(5),x=a(7),I=a(6),S=a(8),A=(a(53),a(12)),L=a(112),P=a(113),D=(a(92),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a.shortDescription=function(e){return e?e.length<=15?e:e.slice(0,15)+"...":""},a.handleRemoveItem=function(e,t){var n=a.props,r=n.removeItem,c=n.cart,o=c.items,l=c.id,s=n.item.qty,i=o.filter((function(t){return t._id!==e})).map((function(e){return e._id})),m={products:Object(u.a)(i)};s>1&&h.patch("/products/".concat(e),{qty:1},{}).then((function(e){console.log(e.statusText,"Product updated")})),h.patch("/carts/".concat(l),m,{}).then((function(e){console.log(e.data,"Item removed"),r(e.data)})).catch((function(e){alert("Error removing item")}))},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.error,n=t.item,c=t.hideModal,o=n._id,l=n.name,s=n.price,i=n.description,u=n.image,m=n.qty;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontSize:"2.6em"}},a):r.a.createElement("div",{className:"modal-cart-item-container"},r.a.createElement(A.b,{to:{pathname:"/Products/".concat(o,"/show"),state:{item:n}},className:"modal-link-to-product-show",onClick:function(){return c()}},r.a.createElement("img",{src:u,alt:l,className:"modal-cart-image"})),r.a.createElement("span",{className:"modal-cart-name"},l),r.a.createElement("span",{className:"modal-cart-short-desc"},this.shortDescription(i)),r.a.createElement("span",{className:"modal-cart-price"},"CAD ",r.a.createElement("strong",null,"$",s*m)," "),r.a.createElement("span",{className:"modal-cart-qty"},"QTY ",m," @ $",s),r.a.createElement("button",{className:"modal-cart-remove-item btn btn-outline-danger",onClick:function(){return e.handleRemoveItem(o,s)}},"Remove Item")))}}]),t}(n.Component)),q=Object(l.b)((function(e){return{cart:e.handleItem.cart}}),{removeItem:C})(D),B=(a(94),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(c)))).state={},a.showCartItems=function(){var e=a.props.cart,t=e.qty,n=e.items;return t>=1?n.map((function(e,t){return r.a.createElement(q,{item:e,key:t,hideModal:a.checkout})})):r.a.createElement(q,{item:{name:null,price:null,description:null,image:null},error:"Your cart is empty"})},a.checkout=function(){(0,a.props.onHide)()},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.cart,t.onHide),n=t.cart.totalCostBeforeTax;t.removeFromCart;return r.a.createElement(L.a,Object.assign({},t,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(L.a.Header,null,r.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Your Cart"),r.a.createElement(P.a,{onClick:a,variant:"outline-danger"},"X")),r.a.createElement(L.a.Body,null,this.showCartItems()),r.a.createElement(L.a.Footer,null,r.a.createElement(A.b,{className:"nav-link btn-success proceed-to-checkout-btn",onClick:function(){return e.checkout()},to:{pathname:"/ShoppingCart"}},"Proceed to checkout",r.a.createElement("br",null),r.a.createElement("span",{className:"proceed-to-checkout-total"},"Total: $",n))))}}]),t}(n.Component)),R=Object(l.b)((function(e){return{cart:e.handleItem.cart}}),{})(B),_=a(15),F=a.n(_),M=a(36),U=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(x.a)(this,Object(I.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(M.a)({},r,n))},a.onSubmit=function(e){var t=a.props.handleLogin;e.preventDefault(),d()("http://localhost:5000/api/signup",{method:"POST",data:JSON.stringify(a.state),headers:{"Content-Type":"application/json"}}).then((function(e){if(console.log(e.data),200!==e.status)throw new Error(e.error);F.a.set("token",e.data.token,{expires:7}),t(e.data.token,e.data.userId);var n={id:e.data.userId};a.handleCreateCart(n),a.props.history.push("/")})).catch((function(e){console.error(e),alert("Error creating user, please try again.")}))},a.handleCreateCart=function(e){var t={user:e,products:[]};h.post("/carts",t,{}).then((function(e){a.props.createCart(e.data)})).catch((function(e){alert("Error creating cart",e)}))},a.state={email:"",password:""},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"register-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},r.a.createElement("h1",null,"Signup!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),J=Object(l.b)((function(e,t){return console.log(e),{item:"item"}}),{createCart:v})(U),H=(a(95),function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(x.a)(this,Object(I.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(M.a)({},r,n))},a.onSubmit=function(e){var t=a.props.handleLogin;e.preventDefault(),d()("http://localhost:5000/api/authenticate/",{method:"POST",data:a.state,headers:{"Content-Type":"application/json"}}).then((function(e){var n=e.data,r=n.token,c=n.id;if(200!==e.status)throw new Error(e.error);F.a.set("token",r,{expires:7}),F.a.set("id",c,{expires:7}),console.log("Cookie: ",F.a.get()),t(e.data.token,e.data.id),a.handleGetCart(c),a.props.history.push("/")})).catch((function(e){console.log(e),alert("Error logging in please try again")}))},a.handleGetCart=function(e){return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(h.get("/carts/find/".concat(e)).then((function(t){console.log(t,e),a.props.getCart(t.data)})).catch((function(e){alert("Error getting cart",e)})));case 2:case"end":return t.stop()}}))},a.state={email:"",password:"",containerClass:a.props.redirect?"register-form-container login-redirect":"register-form-container"},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.redirect,t=this.state.containerClass;return r.a.createElement("div",{className:t},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login Below!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handleInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})),e&&r.a.createElement(A.b,{to:"/signup",className:"signup-redirect-btn"},"Signup"))}}]),t}(n.Component)),Y=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{getCart:E})(H),$=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleLogout=function(){var e=a.props.handleLogin;F.a.remove("token"),F.a.remove("id"),e()},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"logout-btn",onClick:function(){return e.handleLogout()}},"Logout")}}]),t}(n.Component);d.a.defaults.xsrfCookieName="csrftoken",d.a.defaults.xsrfHeaderName="X-CSRFToken";var X=d.a.create({baseURL:"https://isellapi.herokuapp.com/api"}),G=(a(96),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.handleLogin;return r.a.createElement("div",{className:"auth"},t?r.a.createElement("div",null,r.a.createElement($,{handleLogin:a})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-btn"},r.a.createElement(A.b,{to:"/login"},"Login")),r.a.createElement("br",null),r.a.createElement("div",{className:"signup-btn"},r.a.createElement(A.b,{to:"/signup"},"Signup")))))}}]),t}(n.Component)),Q=(a(97),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={showCart:!1,expanded:!1},a.handleShowCart=function(e){var t=a.state.showCart;a.setState({showCart:!t})},a.handleToggler=function(){var e=a.state.expanded;a.setState({expanded:!e})},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.handleLogin,c=t.cart.qty,o=this.state,l=o.showCart,s=o.expanded;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/isell"},"Isell"),r.a.createElement("button",{className:s?"cart-btn cart-btn-1 btn cart-btn-expanded":"cart-btn cart-btn-1 btn",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,c)),l&&r.a.createElement(R,{onHide:function(){return e.handleShowCart()},show:l}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return e.handleToggler()}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active","data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement(A.b,{className:"nav-link",to:{pathname:"/Products",state:{isLoggedIn:a}}},"Products",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"}),r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement("button",{className:"cart-btn btn cart-btn-2",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,c))))),r.a.createElement(G,{isLoggedIn:a,handleLogin:n})))}}]),t}(n.Component)),V=Object(l.b)((function(e,t){return{cart:e.handleItem.cart}}),{})(Q),K=a(26),W=function e(t,a,n,r,c,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;Object(T.a)(this,e),this._id=t,this.name=a,this.description=n,this.price=r,this.image=c,this.category=o,this.qty=l},z=[],Z=new W("5e2e3d8d50d8891b1cd5d9e1","Gucci Sticker","Juul Sticker","2.53","https://jaybenaim.github.io/isell/images/img1.jpg","TEST"),ee=new W("5e2e3dde50d8891b1cd5d9e2","Rick and Morty","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img2.jpg","Phone Accesories"),te=new W("5e2e3e1450d8891b1cd5d9e3","Supreme","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img3.jpg","Phone Accesories");z.push(Z,ee,te);var ae=z,ne=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(c)))).state={isLoaded:!1,showDesc:!1,qty:1,addToCartButtonText:"Add to cart",addToCartButtonDisabled:!1},a.shortDescription=function(e){return e.length<=15?e:e.slice(0,15)+"..."},a.showDescription=function(){var e=a.state.showDesc;a.setState({showDesc:!e})},a.handleSetQty=function(e){var t=Number(e.target.value);a.setState({qty:t})},a.getImageURl=function(){var e=a.props,t=e.image,n=e.name;return void 0===t?r.a.createElement("img",{src:"https://placehold.it/700x400",className:"card-img-top",alt:n}):r.a.createElement("img",{src:t,className:"card-img-top",alt:"none"})},a.handleAddProduct=function(e,t){var n=a.props,r=n.addItemToCart,c=n.cart,o=c.id,l=c.items,s={qty:e},i=l.map((function(e){return e._id}));i.push(t._id);var m={products:Object(u.a)(i)};e>1&&h.patch("/products/".concat(t._id),s,{}).then((function(e){console.log(e.statusText,"Product updated")})),h.patch("/carts/".concat(o),m,{}).then((function(a){console.log(a.data+"Item added"),r(e,t)})).catch((function(e){alert("Error adding item")})),a.setState({addToCartButtonText:"Added to cart",addToCartButtonDisabled:!0})},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.setState({image:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.qty,t.showDesc),n=(t.addToCartButtonText,t.addToCartButtonDisabled,this.props),c=n.name,o=n.description,l=n.price,s=n.productClass,i=n.id,u=n.product,m=n.image,d=n.isLoggedIn;return c=c.replace(/^\w/,(function(e){return e.toUpperCase()})),o=o.replace(/^\w/,(function(e){return e.toUpperCase()})),!m&&(m=u.image),r.a.createElement("div",{className:"".concat(s," card")},this.getImageURl(),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},c),r.a.createElement("p",{className:"card-text",onClick:function(){return e.showDescription()}},a?o:this.shortDescription(o)),r.a.createElement("br",null),r.a.createElement(A.b,{to:{pathname:"/Products/".concat(i,"/show"),state:{id:i,name:c,description:o,price:l,image:m,isLoggedIn:d,product:u}},className:"btn btn-primary show-product-btn"},r.a.createElement("span",null,"CAD $",l))))}}]),t}(n.Component),re=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{addItemToCart:y,removeItemFromCart:C})(ne),ce=(a(98),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addToCart,a=e.isLoggedIn;return r.a.createElement("div",{className:"featured-products-container"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Featured Products"),r.a.createElement("p",{className:"card-text"},"Take an additional 10% when using the code"," ",r.a.createElement("span",{className:"text-secondary"},"FREESTUFF "),r.a.createElement("br",null))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"featured-products-grid"},r.a.createElement("div",{className:"card-1"},r.a.createElement(re,Object.assign({},ae[0],{product:ae[0],productClass:"product-card-1 product-card",addToCart:t,isLoggedIn:a}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-2"},r.a.createElement(re,Object.assign({},ae[1],{product:ae[1],productClass:"product-card-2 product-card",addToCart:t,isLoggedIn:a}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-3"},r.a.createElement(re,Object.assign({},ae[2],{product:ae[2],productClass:"product-card-3 product-card",addToCart:t,isLoggedIn:a}))))),r.a.createElement("div",{className:"card-footer text-muted"},"2 days ago")))}}]),t}(n.Component)),oe=function e(t,a,n,r,c,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;Object(T.a)(this,e),this.name=a,this.description=n,this.price=r,this.image=c,this.category=o,this.qty=l},le=[],se=new oe("5e2e3e3d50d8891b1cd5d9e4","Louis Vuitton","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img4.jpg","Phone Accesories"),ie=new oe("5e2e3e6d50d8891b1cd5d9e5","Hello","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img5.jpg","Phone Accesories"),ue=new oe("5e2e3ea050d8891b1cd5d9e6","Marble","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img6.jpg","Phone Accesories"),me=new oe("5e2e3ef050d8891b1cd5d9e7","Juul Holder","Juul Holder, Sticks to anywhere! Reusable!","2.00","https://jaybenaim.github.io/isell/images/img7.jpg","Phone Accesories"),de=new oe("5e2e3f2350d8891b1cd5d9e8","Rick and Morty","Juul Sticker","2.00","https://jaybenaim.github.io/isell/images/img8.jpg","Phone Accesories");le.push(se,ie,ue,me,de);var he=le,pe=(a(99),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.location.state.isLoggedIn,t=this.props.addToCart,a=he.map((function(a,n){a.id;var c=a.image;return void 0===a.image?null:r.a.createElement(re,Object.assign({key:n},a,{product:a,url:c,productClass:"products-card product-card",addToCart:t,isLoggedIn:e}))}));return r.a.createElement("div",null,r.a.createElement(ce,{addToCart:t}),r.a.createElement("div",{className:"product-container"},a))}}]),t}(n.Component)),ge=a(13),be=(a(100),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addToCart,a=e.isLoggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"home-carousel",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active carousel-item-1",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"50% OFF"),r.a.createElement("p",{className:"discount"},"Use code SALETIME for 50% off"))),r.a.createElement("div",{className:"carousel-item carousel-item-2",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Got a Product?"),r.a.createElement("p",null,"Let us help you get is sold for top dollar"))),r.a.createElement("div",{className:"carousel-item carousel-item-3",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Local Products"),r.a.createElement("p",null,"All sellers are in your current area")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#home-carousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#home-carousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("div",null,r.a.createElement(ce,{addToCart:t,isLoggedIn:a})))}}]),t}(n.Component)),fe=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(c)))).state={qty:1,addToCartButtonText:"Add to cart",addToCartButtonDisabled:!1},a.getImageOr404=function(e,t){return void 0===e?r.a.createElement("img",{src:"https://placehold.it/700x400",className:"card-img-top",alt:"none"}):r.a.createElement("img",{src:e,className:"card-img-top",alt:t})},a.handleAddProduct=function(e,t){var n=a.props,r=n.addItemToCart,c=n.cart,o=c.id,l=c.items,s={qty:e},i=(void 0===l?[]:l).map((function(e){return e._id}));i.push(t._id);var m={products:Object(u.a)(i)};e>1&&h.patch("/products/".concat(t._id),s,{}).then((function(e){console.log(e.statusText,"Product updated")})),h.patch("/carts/".concat(o),m,{}).then((function(a){console.log(a.data+"Item added"),r(e,t)})).catch((function(e){alert("Error adding item")})),a.setState({addToCartButtonText:"Added to cart",addToCartButtonDisabled:!0})},a.handleSetQty=function(e){var t=Number(e.target.value);a.setState({qty:t})},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.location.state,a=t.name,n=t.description,c=t.price,o=t.image,l=(t.id,t.product),s=this.state,i=s.addToCartButtonDisabled,u=s.addToCartButtonText,m=s.qty;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 mb-3"},r.a.createElement("small",null," ",a)),r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"/isell"},"Home")),r.a.createElement("li",{className:"breadcrumb-item active"},a)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},this.getImageOr404(o,a)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",{className:"my-3"},"Product Description"),r.a.createElement("p",null,n),r.a.createElement("h3",{className:"my-3"}," CAD $",c),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"qty-integer"},"Qty: "),r.a.createElement("input",{className:"qty-input",type:"number",name:"quantity",min:"1",max:"100",placeholder:"1",ref:this.qtyRef,onChange:this.handleSetQty,disabled:i}),r.a.createElement("button",{disabled:i,className:"add-to-cart-btn ",onClick:function(){return e.handleAddProduct(m,l)}},u)))),r.a.createElement("h3",{className:"my-4"},"Related Products"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:o},r.a.createElement("img",{className:"img-fluid related-images",src:"https://jaybenaim.github.io/isell/images/img8.jpg",alt:a}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:o},r.a.createElement("img",{className:"img-fluid related-images",src:"https://jaybenaim.github.io/isell/images/img3.jpg",alt:""}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:o},r.a.createElement("img",{className:"img-fluid related-images",src:"https://jaybenaim.github.io/isell/images/img2.jpg",alt:""}))),r.a.createElement("div",{className:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:o},r.a.createElement("img",{className:"img-fluid related-images",src:"https://jaybenaim.github.io/isell/images/img1.jpg",alt:""})))))}}]),t}(n.Component),Ee=Object(l.b)((function(e){var t=e.handleItem;return{totalCostBeforeTax:t.totalCostBeforeTax,cart:t.cart,user:t.user}}),{addItemToCart:y,removeItemFromCart:C})(fe),ve=(a(101),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleRemoveItem=function(e,t){var n=a.props,r=n.removeItem,c=n.cart,o=c.items,l=c.id,s=n.qty,i=o.filter((function(t){return t._id!==e})).map((function(e){return e._id})),m={products:Object(u.a)(i)};s>1&&h.patch("/products/".concat(e),{qty:1},{}).then((function(e){console.log(e.statusText,"Product updated")})),h.patch("/carts/".concat(l),m,{}).then((function(e){console.log(e.data,"Item removed"),r(e.data)})).catch((function(e){alert("Error removing item")}))},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t._id,n=t.name,c=t.description,o=t.price,l=t.image,s=t.qty;t.removeItem;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("img",{className:"checkout-item-image",src:l,alt:n}),r.a.createElement("div",{className:"checkout-item-name"}," ",n),r.a.createElement("div",{className:"checkout-item-desc"},c),r.a.createElement("div",{className:"checkout-item-qty"},"QTY ",r.a.createElement("br",null)," ",s," "),r.a.createElement("div",{className:"checkout-item-price"},"$",o*s),r.a.createElement("button",{className:"btn btn-outline-danger checkout-item-delete-btn",onClick:function(){return e.handleRemoveItem(a,o)}},"X"))}}]),t}(n.Component)),ye=Object(l.b)((function(e){return{cart:e.handleItem.cart}}),{removeItem:C})(ve),Ce=a(30),je=a(25),Oe=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(x.a)(this,Object(I.a)(t).call(this,e))).state={complete:!1},a.submit=a.submit.bind(Object(je.a)(a)),a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"submit",value:function(e){var t,a,n,r;return k.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t="sk_test_59y42s9amXyOuAPudcbNBta500g0JElmda",Object({NODE_ENV:"production",PUBLIC_URL:"."}).SK_LIVE,a=this.props.subTotal,c.next=5,k.a.awrap(this.props.stripe.createToken({name:"Name"}));case 5:return n=c.sent,r=n.token,console.log(a),a=Math.round(a),a=JSON.stringify(a),console.log(e),c.next=13,k.a.awrap(X("/charge",{method:"POST",headers:{"Content-Type":"text/plain",Authorization:"Bearer ".concat(t),token:r.id,total:a}}));case 13:"OK"===c.sent.statusText&&this.setState({complete:!0});case 15:case"end":return c.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.subTotal;return e=Math.round(e),e=JSON.stringify(e),this.state.complete?r.a.createElement("h1",null,"Purchase Complete"):r.a.createElement("div",{className:"checkout"},r.a.createElement("p",null,"Would you like to complete the purchase for $",e/100,"? "),r.a.createElement(Ce.CardElement,null),r.a.createElement("button",{onClick:this.submit,class:"btn btn-outline-success"},"Purchase"))}}]),t}(n.Component),Ne=Object(Ce.injectStripe)(Oe),ke=(a(107),function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(c)))).state={isCheckedOut:!1,tax:0,proccessFee:0,subTotal:0},a.showCheckoutItems=function(){var e=a.props.cart,t=e.items,n=e.qty;return t.map((function(e,t){return r.a.createElement(ye,Object.assign({},e,{key:t,cartQty:n}))}))},a.handleCheckout=function(e){var t=a.state.isCheckedOut;a.setState({isCheckedOut:!t||e})},a.showCheckoutForm=function(){var e=a.props.location.params.totalCostBeforeTax,t=(Object({NODE_ENV:"production",PUBLIC_URL:"."}).PK_LIVE,(100*a.calculateSubTotal(e).subTotal).toFixed(2));return r.a.createElement(Ce.StripeProvider,{apiKey:"pk_test_kUyitnXXbG5Rg8HhhfYhnklR00qMm6iAaZ"},r.a.createElement("div",{className:"stripe-container"},r.a.createElement("button",{className:"outline-danger btn",onClick:function(){return a.handleCheckout(!1)}},"x"),r.a.createElement("h1",null,"Confirm"),r.a.createElement("div",{className:"checkout-container"},r.a.createElement(Ce.Elements,null,r.a.createElement(Ne,{subTotal:t})))))},a.calculateSubTotal=function(e){var t=.13*(e=Number(e)),a=.029*e+.35,n=e+t+a;return{tax:t.toFixed(2),proccessFee:a.toFixed(2),subTotal:n.toFixed(2)}},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.cart,n=t.totalCostBeforeTax,c=(t.items,this.state.isCheckedOut),o=this.calculateSubTotal(n),l=o.tax,s=o.proccessFee,i=o.subTotal;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h1",null,"Review Order"),a&&this.showCheckoutItems(),r.a.createElement("div",{className:"checkout-total-container"},r.a.createElement("div",{className:"checkout-messege"},"You have"," ",a.qty>=2?"".concat(a.qty," items "):"".concat(a.qty," item "),"in your cart."),r.a.createElement("span",{className:"checkout-label-tax"},"Tax:"),r.a.createElement("span",{className:"checkout-amount-tax"}," ",l),r.a.createElement("div",{className:"checkout-label-process-fees"},"Process Fee:"),r.a.createElement("span",{className:"checkout-amount-fees"},s),r.a.createElement("div",{className:"checkout-label-subtotal"},r.a.createElement("strong",null,"SubTotal:")),r.a.createElement("span",{className:"checkout-subtotal"},"CAD $",i)),r.a.createElement("div",{className:"checkout-btn btn btn-success",onClick:function(){return e.handleCheckout()}},"Proceed to checkout"),c&&this.showCheckoutForm())}}]),t}(n.Component)),Te=Object(l.b)((function(e){var t=e.handleItem,a=t.cart,n=t.cart;return{cart:a,totalCostBeforeTax:n.totalCostBeforeTax,items:n.items}}),{removeItem:C})(ke),we=a(61),xe=a(60);a(108);var Ie=function(e){var t=e.isLoggedIn,a=e.children,c=Object(xe.a)(e,["isLoggedIn","children"]),o=Object(n.useState)(!0),l=Object(we.a)(o,2),s=l[0],i=l[1];return r.a.createElement(K.a,Object.assign({},c,{render:function(e){return t?a:s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger login-alert",role:"alert"},"Please login first!",r.a.createElement("button",{className:"btn-danger alert-close-btn",onClick:function(){return i(!1)}},"X")),r.a.createElement(Y,{redirect:!0}))}}))},Se=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,"form for profile")}}]),t}(n.Component),Ae=Object(ge.a)(),Le=F.a.get().token,Pe=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(x.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:void 0!==Le,selectedProduct:null,addedToCart:!1,valid:!1,showAlert:!1},a.setSelectedProduct=function(e){a.setState({selectProduct:e})},a.toggleAlert=function(){var e=a.state.showAlert;a.setState({showAlert:!e})},a.handleLogin=function(e,t){a.getCart(t),a.setState({isLoggedIn:!!e,userID:t})},a.getCart=function(e){return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("null"!==a.props.user.id){t.next=5;break}alert("Please sign in"),t.next=7;break;case 5:return t.next=7,k.a.awrap(h.get("/carts/find/".concat(e)).then((function(e){console.log(e.body),a.props.getCart(e.data)})).catch((function(e){alert("Error getting cart",e)})));case 7:case"end":return t.stop()}}))},a}return Object(S.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=F.a.get("id");this.getCart(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.showAlert,n=t.isLoggedIn;this.props.cart;return r.a.createElement(A.a,{basename:"/isell",history:Ae},r.a.createElement("div",{className:"App"},r.a.createElement(V,{isLoggedIn:n,handleLogin:this.handleLogin}),a&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("button",{className:"btn-danger alert-close-btn",onClick:function(){return e.toggleAlert()}},"X"),r.a.createElement("br",null),"YOU ALREADY ADDED THIS ITEM TO YOUR CART!",r.a.createElement("br",null),r.a.createElement("em",null,"Check your cart for multiples"),r.a.createElement("br",null)),r.a.createElement("div",{className:"content"},r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/"},r.a.createElement(be,{isLoggedIn:n})),r.a.createElement(K.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(Y,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(K.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(J,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(K.a,{exact:!0,path:"/Products",render:function(t){return r.a.createElement(pe,Object.assign({},t,{removeFromCart:e.removeFromCart,selectProduct:e.setSelectedProduct}))}}),r.a.createElement(K.a,{exact:!0,path:"/Products/:id/Show",component:Ee,render:function(e){return r.a.createElement(Ee,e)}}),r.a.createElement(Ie,{path:"/ShoppingCart",isLoggedIn:n},r.a.createElement(K.a,{exact:!0,path:"/ShoppingCart",render:function(e){return r.a.createElement(Te,Object.assign({},e,{timestamp:(new Date).toString()}))}})),r.a.createElement(Ie,{path:"/profiles/new",isLoggedIn:n},r.a.createElement(K.a,{exact:!0,path:"/profiles/new",render:function(e){return r.a.createElement(Se,e)}})))),r.a.createElement("footer",{className:"py-5 bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2019 NOT A REAL ECOMMERCE SITE DO NOT TRY TO PURCHASE")))))}}]),t}(n.Component),De=Object(l.b)((function(e){var t=e.handleItem;return{cart:t.cart,user:t.user}}),{createCart:v,getCart:E})(Pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:O},r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t,a){},63:function(e,t,a){e.exports=a(109)},90:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.4898bbaf.chunk.js.map