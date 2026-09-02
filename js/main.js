const products=[
 {name:"Produto brasileiro",category:"bebidas",icon:"🥤"},
 {name:"Doce brasileiro",category:"doces",icon:"🍫"},
 {name:"Molho brasileiro",category:"molhos",icon:"🌶️"},
 {name:"Arroz e feijão",category:"mercearia",icon:"🛒"},
 {name:"Produto regional",category:"regionais",icon:"🇧🇷"},
 {name:"Kit Sabores do Brasil",category:"kits",icon:"🎁"},
 {name:"Bebida brasileira",category:"bebidas",icon:"🍹"},
 {name:"Snack brasileiro",category:"doces",icon:"🍬"}
];

function getCart(){return JSON.parse(localStorage.getItem("saboresCart")||"[]")}
function saveCart(cart){localStorage.setItem("saboresCart",JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const el=document.getElementById("cartCount");if(el)el.textContent=getCart().length}
function showToast(msg){const t=document.getElementById("toast");if(!t)return;t.textContent=msg;t.style.display="block";setTimeout(()=>t.style.display="none",2200)}
function addToCart(name){const cart=getCart();cart.push({name});saveCart(cart);showToast("Produto adicionado ao carrinho!")}
function renderProducts(filter="todos"){
 const grid=document.getElementById("productGrid");if(!grid)return;
 const list=filter==="todos"?products:products.filter(p=>p.category===filter);
 grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image">${p.icon}</div><span class="tag">Brasil</span><h3>${p.name}</h3><p class="product-category">${p.category}</p><[...]
}
function searchProducts(){
 const q=document.getElementById("searchInput")?.value.trim();
 if(q)window.location.href="produtos.html?pesquisa="+encodeURIComponent(q);else window.location.href="produtos.html";
}
function renderCart(){
 const box=document.getElementById("cartItems");if(!box)return;
 const cart=getCart();
 if(!cart.length){box.innerHTML='<div class="empty-state"><span>🛒</span><h2>O carrinho está vazio</h2><p>Escolha alguns produtos para começar.</p><a class="btn" href="produtos.html">Ver produ[...]'
 box.innerHTML=`<h2>Itens selecionados</h2>`+cart.map((p,i)=>`<p>${i+1}. ${p.name} <button onclick="removeCart(${i})">Remover</button></p>`).join("")+`<hr><p><strong>Subtotal: € 0,00</strong></p[...]
}
function removeCart(i){const cart=getCart();cart.splice(i,1);saveCart(cart);renderCart()}
function setupFilters(){
 document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");rende[...]
 const params=new URLSearchParams(location.search), cat=params.get("categoria");
 if(cat){const btn=document.querySelector(`.filter[data-filter="${cat}"]`);if(btn){btn.click()}}
}
function renderFooter(){
 const f=document.getElementById("footer");if(!f)return;
 f.innerHTML=`<div class="footer-grid"><div><h3>Sabores do Brasil</h3><p>Produtos brasileiros em Portugal, com qualidade, autenticidade e carinho.</p><p>Instagram • Facebook • WhatsApp</p></di[...]
}
document.addEventListener("DOMContentLoaded",()=>{updateCartCount();renderFooter();renderProducts();renderCart();setupFilters();document.querySelectorAll(".add-cart").forEach(b=>b.addEventListener[...] 
