(this.webpackJsonpisell=this.webpackJsonpisell||[]).push([[0],{35:function(e,t,a){},51:function(e,t,a){e.exports=a(92)},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),s=(a(56),a(49)),o=a(3),i=a(5),m=a(7),u=a(6),d=a(8),p=(a(35),a(18)),h=a(95),E=a(96),v=(a(57),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.item,n=a.name,c=a.price,l=a.description,s=a.image;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",null,"No Items in cart."):r.a.createElement("div",{className:"modal-cart-item"},r.a.createElement("p",null,r.a.createElement("a",{href:s,role:"button",className:"btn btn-secondary popover-test",title:"Popover title","data-content":"".concat(l)},n)),c," ",r.a.createElement("span",null,"X")))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a.showCartItems=function(){var e=a.props.cart,t=e.qty,n=e.items;return t>=1?n.map((function(e,t){return r.a.createElement(v,{item:e,key:t})})):r.a.createElement(v,{item:{name:null,price:null,description:null},error:"No Items Found"})},a.checkout=function(){(0,a.props.onHide)()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cart;return r.a.createElement(h.a,Object.assign({},t,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(h.a.Header,null,r.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},"My Cart")),r.a.createElement(h.a.Body,null,this.showCartItems()),r.a.createElement(h.a.Footer,null,r.a.createElement(p.b,{className:"nav-link",onClick:function(){return e.checkout()},to:{pathname:"/ShoppingCart",params:a}},"Checkout"),r.a.createElement(E.a,{onClick:t.onHide},"Close")))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showCart:!1},a.handleShowCart=function(e){var t=a.state.showCart;a.setState({showCart:!t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cart,a=this.state.showCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Isell"),r.a.createElement("button",{className:"cart-btn cart-btn-1 btn",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,t.qty)),a&&r.a.createElement(b,{onHide:function(){return e.handleShowCart()},show:a,cart:t}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active","data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement(p.b,{className:"nav-link",to:"/","data-toggle":"collapse","data-target":"#navbarNavDropdown"},"Isell ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement(p.b,{className:"nav-link",to:"/Products"},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Pricing")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown link"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))),r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNavDropdown"},r.a.createElement("button",{className:"cart-btn btn",onClick:function(){return e.handleShowCart()}},"Cart \xa0 ",r.a.createElement("span",null,t.qty)))))))}}]),t}(n.Component),f=a(21),N=function e(t,a,n,r,c,l){var s=this;Object(o.a)(this,e),this.changePrice=function(e){return s.price=e,!0},this.id=t,this.name=a,this.description=n,this.price=r,this.image=c,this.category=l},y=[],O=new N(1,"TEST","TEST",".01","../images/img1.jpg","TEST"),j=new N(2,"Rick and Morty","Juul Sticker","3.99","../images/img2.jpg","Phone Accesories"),k=new N(3,"Supreme","Juul Sticker","9.99","../images/img3.jpg","Phone Accesories");y.push(O,j,k);var C=y,w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isLoaded:!1,qty:1},a.handleSetQty=function(e){var t=Number(e.target.value);a.setState({qty:t})},a.getImageURl=function(){var e=a.props,t=e.image,n=e.name;return void 0===t?r.a.createElement("img",{src:"https://placehold.it/700x400",className:"card-img-top",alt:n}):r.a.createElement("img",{src:t,className:"card-img-top",alt:"none"})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({image:!0})}},{key:"render",value:function(){var e=this.state.qty,t=this.props,a=t.name,n=t.description,c=t.price,l=t.productClass,s=t.id,o=t.product,i=t.image,m=t.addToCart;return a=a.replace(/^\w/,(function(e){return e.toUpperCase()})),n=n.replace(/^\w/,(function(e){return e.toUpperCase()})),!i&&(i=o.image),r.a.createElement("div",{className:"".concat(l," card"),style:{width:"18em"}},this.getImageURl(),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},n),r.a.createElement("p",null," ",c),r.a.createElement("input",{className:"qty-input",type:"number",name:"quantity",min:"1",max:"10",placeholder:"1",ref:this.qtyRef,onChange:this.handleSetQty}),r.a.createElement("button",{className:"add-to-cart-btn",onClick:function(){return m(e,o)}},"Add to cart"),r.a.createElement(p.b,{to:{pathname:"/Products/".concat(s,"/show"),state:{name:a,description:n,price:c,image:i}},className:"btn btn-primary"},"Show Details")))}}]),t}(n.Component),T=(a(63),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.addToCart;return r.a.createElement("div",{className:"featured-products-container"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},"Featured"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Featured Products"),r.a.createElement("p",{className:"card-text"},"Take an additional 10% when using the code"," ",r.a.createElement("span",{className:"text-secondary"},"FREESTUFF "),r.a.createElement("br",null),"NOT A REAL ECOMMERCE SITE DO NOT TRY TO PURCHASE"),r.a.createElement("div",{className:"featured-products-grid"},r.a.createElement("div",{className:"card-1"},r.a.createElement(w,Object.assign({},C[0],{product:C[0],productClass:"product-card-".concat(C[0].id," product-card"),addToCart:e}))),r.a.createElement("div",{className:"card-2"},r.a.createElement(w,Object.assign({},C[1],{product:C[1],productClass:"product-card-".concat(C[1].id," product-card"),addToCart:e}))),r.a.createElement("div",{className:"card-3"},r.a.createElement(w,Object.assign({},C[2],{product:C[2],productClass:"product-card-".concat(C[2].id," product-card"),addToCart:e}))))),r.a.createElement("div",{className:"card-footer text-muted"},"2 days ago")))}}]),t}(n.Component)),S=function e(t,a,n,r,c,l){var s=this;Object(o.a)(this,e),this.changePrice=function(e){return s.price=e,!0},this.id=t,this.name=a,this.description=n,this.price=r,this.image=c,this.category=l},x=[],P=new S(1,"Louis Vuitton","Juul Sticker","9.99","../images/img4.jpg","Phone Accesories"),A=new S(2,"Hello","Juul Sticker","3.99","../images/img5.jpg","Phone Accesories"),I=new S(3,"Marble","Juul Sticker","9.99","../images/img6.jpg","Phone Accesories"),R=new S(4,"Juul Holder","Juul Holder, Sticks to anywhere! Reusable!","12.99","../images/img7.jpg","Phone Accesories"),D=new S(5,"Rick and Morty","Juul Sticker","9.99","../images/img8.jpg","Phone Accesories");x.push(P,A,I,R,D);var F=x,L=(a(64),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.addToCart,t=F.map((function(t,a){var n=t.id,c=t.image;return void 0===t.image?null:r.a.createElement(w,Object.assign({key:a},t,{product:t,url:c,productClass:"product-card-".concat(n," product-card"),addToCart:e}))}));return r.a.createElement("div",null,r.a.createElement(T,{addToCart:e}),r.a.createElement("div",{className:"product-container"},t))}}]),t}(n.Component)),U=a(11),J=(a(65),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.addToCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"home-carousel",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#home-carousel","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"First Slide"),r.a.createElement("p",{className:"discount"},"50% OFF"))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Second Slide"),r.a.createElement("p",null,"This is a description for the second slide."))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:'url("https://placehold.it/1900x1080")'}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",null,"Third Slide"),r.a.createElement("p",null,"This is a description for the third slide.")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#home-carousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#home-carousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("div",null,r.a.createElement(T,{addToCart:e})))}}]),t}(n.Component)),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=e.name,a=e.description,n=e.price,c=e.image;return console.log(this),r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"mt-4 mb-3"},r.a.createElement("small",null," ",t)),r.a.createElement("ol",{class:"breadcrumb"},r.a.createElement("li",{class:"breadcrumb-item"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",{class:"breadcrumb-item active"},t)),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-8"},r.a.createElement("img",{class:"img-fluid",src:c,alt:t})),r.a.createElement("div",{class:"col-md-4"},r.a.createElement("h3",{class:"my-3"},"Project Description"),r.a.createElement("p",null,a),r.a.createElement("h3",{class:"my-3"},n))),r.a.createElement("h3",{class:"my-4"},"Related Projects"),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{class:"img-fluid",src:"https://placehold.it/500x300",alt:t}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{class:"img-fluid",src:"https://placehold.it/500x300",alt:""}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{class:"img-fluid",src:"https://placehold.it/500x300",alt:""}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 mb-4"},r.a.createElement("a",{href:c},r.a.createElement("img",{class:"img-fluid",src:"https://placehold.it/500x300",alt:""})))))}}]),t}(n.Component),q=(a(66),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,n=e.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"checkout-item-name"}," ",t),r.a.createElement("div",{className:"checkout-item-desc"},a),r.a.createElement("div",{className:"checkout-item-qty"},"QTY BOX "),r.a.createElement("div",{className:"checkout-item-price"},n))}}]),t}(n.Component)),H=a(24),_=a(28),B=a.n(_),Q=a(20),X=a(19),V=a.n(X);V.a.defaults.xsrfCookieName="csrftoken",V.a.defaults.xsrfHeaderName="X-CSRFToken";var Y=V.a.create({baseURL:"https://isell-development.herokuapp.com/api"}),K=(V.a.create({baseURL:"http://localhost:9000/api"}),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={complete:!1},a.submit=a.submit.bind(Object(Q.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e){var t,a,n,r,c;return B.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t="sk_test_59y42s9amXyOuAPudcbNBta500g0JElmda",Object({NODE_ENV:"production",PUBLIC_URL:"."}).SK_LIVE,a=this.props.subTotal,e.next=5,B.a.awrap(this.props.stripe.createToken({name:"Name"}));case 5:return n=e.sent,r=n.token,c={token:r.id,subTotal:a},c=JSON.stringify(c),a=JSON.stringify(a),e.next=12,B.a.awrap(Y("/charge",{method:"POST",headers:{"Content-Type":"text/plain",Authorization:"Bearer ".concat(t),token:r.id,total:a},body:c}));case 12:"OK"===e.sent.statusText&&this.setState({complete:!0});case 14:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){return this.state.complete?r.a.createElement("h1",null,"Purchase Complete"):r.a.createElement("div",{className:"checkout"},r.a.createElement("p",null,"Would you like to complete the purchase?"),r.a.createElement(H.CardElement,null),r.a.createElement("button",{onClick:this.submit},"Purchase"))}}]),t}(n.Component)),W=Object(H.injectStripe)(K),z=(a(91),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={subTotal:0,isCheckedOut:!1},a.calculateTotal=function(){var e=a.props.location.params.items,t=0;e.map((function(e,a){return t+=Number(e.price)})),a.setState((function(e){return{subTotal:e.subTotal+=t}}))},a.showCheckoutItems=function(){return a.props.location.params.items.map((function(e,t){return r.a.createElement(q,Object.assign({},e,{key:t}))}))},a.handleCheckout=function(){var e=a.state.isCheckedOut;a.setState({isCheckedOut:!e})},a.showCheckoutForm=function(){var e=a.state.subTotal;Object({NODE_ENV:"production",PUBLIC_URL:"."}).PK_LIVE;return r.a.createElement(H.StripeProvider,{apiKey:"pk_test_kUyitnXXbG5Rg8HhhfYhnklR00qMm6iAaZ"},r.a.createElement("div",{className:"example"},r.a.createElement("h1",null,"Confirm"),r.a.createElement(H.Elements,null,r.a.createElement(W,{subTotal:e}))))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.calculateTotal()}},{key:"render",value:function(){var e=this,t=this.props.location.params,a=this.state,n=a.subTotal,c=a.isCheckedOut;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h1",null,"Review Order"),t&&this.showCheckoutItems(),r.a.createElement("div",null,"SubTotal: ",r.a.createElement("span",null," ",n)),c&&this.showCheckoutForm(),r.a.createElement("div",{onClick:function(){return e.handleCheckout()}},"Proceed to checkout"))}}]),t}(n.Component)),G=function e(t,a,n,r,c,l){var s=this;Object(o.a)(this,e),this.changePrice=function(e){return s.price=e,!0},this.id=t,this.name=a,this.description=n,this.price=r,this.image=c,this.category=l},Z=Object(U.a)(),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cartQty:0,cartItems:[],selectedProduct:null},a.addToCart=function(e,t){for(var n=t.id,r=t.name,c=t.description,l=t.price,o=t.image,i=[],m=1;m<=e;m++)i.push(new G(n+1,r,c,l,o));0!==e&&void 0!==e&&"0"!==e||(e=1),a.setState((function(t){return{cartQty:t.cartQty+=e,cartItems:[].concat(Object(s.a)(t.cartItems),i)}}))},a.setSelectedProduct=function(e){a.setState({selectProduct:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.cartItems,n=t.cartQty;return r.a.createElement(p.a,{basename:"/isell",history:Z},r.a.createElement("div",{className:"App"},r.a.createElement(g,{cart:{qty:n,items:a}}),r.a.createElement("div",{className:"content"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(J,{addToCart:this.addToCart})),r.a.createElement(f.a,{exact:!0,path:"/Products"},r.a.createElement(L,{addToCart:this.addToCart,selectProduct:this.setSelectedProduct,history:Z})),r.a.createElement(f.a,{exact:!0,path:"/Products/:id/Show",component:M,render:function(t){return r.a.createElement(M,Object.assign({},t,{addToCart:e.addToCart}))}}),r.a.createElement(f.a,{exact:!0,path:"/ShoppingCart",component:z,render:function(e){return r.a.createElement(z,e)}}))),r.a.createElement("footer",{className:"py-5 bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2019 NOT A REAL ECOMMERCE SITE DO NOT TRY TO PURCHASE")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.88a73610.chunk.js.map