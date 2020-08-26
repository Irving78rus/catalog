var clothes = [
            { id: 'q1234' ,name: 'maika', price: 1000 ,img: 'img/shirt.png'},
            { id: 'w1234' ,name: 'boots', price: 2000 ,img: 'img/boots.png'},
            { id: 'e1234' ,name: 'legs',  price: 3000 ,img: 'img/jeans.png'},
            { id: 'r1234' ,name: 'Shirt', price: 1000 ,img: 'img/shirt.png'},
            { id: 't1234' ,name: 'Shoes', price: 2000 ,img: 'img/boots.png'},
            { id: 'y1234' ,name: 'Jeans', price: 3000 ,img: 'img/jeans.png'},
];

var cart = [];

var product = document.createElement("div");
document.body.appendChild(product);
product.classList.add("product");


    
   
   
     // рисуем блоки+ пишем цену +рисуем товар 
     function rednerCatalog (){
      for (var i = 0; i < clothes.length; i++) {
        var div = document.createElement('div');
        product.append(div);
        div.className = "block" ;
        div.append(clothes[i].name)
        div.append ("Цена : " + clothes[i].price + 'р');
        

        var img = document.createElement("IMG");
        img.src = clothes[i].img;
        div.appendChild(img)
        img.className = "img"

        var button = document.createElement("button");
        div.append(button);
        button.innerHTML = "Добавить товар в корзину";
        button.className = "buttonIn"
        button.id  = clothes[i].id
        
        button.onclick = buttonclick
       
        
      } return
    } 
    rednerCatalog ()
    
      function buttonclick(e){
        var targid = e.target.id
        var foundProduct = clothes.find(func => func.id == targid)
         
        if(cart.indexOf(foundProduct) == -1){
          foundProduct.count = 1
          cart.push(foundProduct) 
          
          console.log(cart) 
        }
        
        
        //   console.log(cart.indexOf(foundProduct))
        //  var countClothes = cart[cart.indexOf(foundProduct)].count++
        //   console.log(countClothes)
          
          
        
        
        
      
        
        
        document.getElementById('blockBasket').innerHTML = '';
          for (var i = 0; i < cart.length; i++) {
            
          var div = document.createElement('div');
          blockBasket.append(div);
          div.className = "clothesInBasket" ;
          div.append(cart[i].name)
          div.append ("Цена : " + cart[i].price + 'р');
          div.id  = targid
          
          var img = document.createElement("IMG");
          img.src = cart[i].img;
          div.appendChild(img)
          img.className = "basketImg"
          var buttonPlus = document.createElement("button");
          div.append(buttonPlus);
          buttonPlus.innerHTML = "+";
          buttonPlus.className = "buttonBasket"
          buttonPlus.id  = targid + "btn+"
          buttonPlus.onclick = countChangePlus
          var buttonMinus = document.createElement("button");
          div.append(buttonMinus);
          buttonMinus.innerHTML = "-";
          buttonMinus.className = "buttonBasket"
          buttonMinus.id  = targid + "btn-"
          // buttonMinus.onclick = countChangeMinus

          div.append("кол-во " + cart[i].count)
              
          }
          // return targid
      }    

      function countChangePlus (e){
        var targid = e.target.id
        var foundProduct = cart.find(func => (func.id + "btn+") == targid)
        
cart[cart.indexOf(foundProduct)].count++
console.log(foundProduct)
      }

      
      
      
      
      
      
      
      
     

function renderBasket(){
var allBasket = document.createElement("div");
document.body.appendChild(allBasket);
allBasket.classList.add("basket");
allBasket.id = 'allBasket';
allBasket.append("Корзина товаров")
if (cart.length==0){
  allBasket.append('Ваша корзина пуста');
}
else {

  allBasket.append()
  // listRender('cart', cart);
  // allBasket.append('В корзине '+countCartAmount(cart)+ ' товаров на сумму ' +countCartPrice(cart)+ ' рублей.');
}

var blockBasket = document.createElement("div");
allBasket.appendChild(blockBasket);
blockBasket.id = 'blockBasket';
return
}
renderBasket()
// var noBasket = document.createElement("div");
// allBasket.appendChild(noBasket);
// noBasket.id = 'noBasket';
// document.getElementById("noBasket").innerHTML = "В корзине нет товаров";

//отображение цены корзины
// function f (allcount,allcost){
//     if (allcount == 0) {
//         document.getElementById("noBasket").innerHTML = "В корзине нет товаров";
//     }
//     else { 
//          document.getElementById("noBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; 
//     }
//     return 
// }
//добавление товара рубашка



// function BasketShirt(e){
//     if (e.target == buttonInShirt){
//             countShirt++
//     }
//     else if (e.target.id == buttonInShoes){
//         countShoes++

//     }
//     else if (e.target.id == buttonInJeans){
//         countJeans++
//     }
//     console.log(countShirt)
//     return
// }

//     else if (e.target == buttonOutShirt) {
//             countShirt--
//             if (countShirt <= 0) {
//             countShirt = 0;
//             document.getElementById("ShirtInBasket").remove();
//             }
//     }
//     var allcost = countBasketPrice(countShirt, countShoes, countJeans);
//     var allcount = allСountBasket(countShirt, countShoes, countJeans);
//     var shirtCost = shirt.price * countShirt;

//     f(allcount,allcost);
//     //отрисовка товара рубашка в корзине
//     if (countShirt>0){
//         if (document.getElementById("ShirtInBasket")){
//             document.getElementById("ShirtInBasket").remove();
            
//           }
//         console.log(countShirt)
//         var ShirtInBasket = document.createElement("div");
//         blockBasket.appendChild(ShirtInBasket);
//         ShirtInBasket.id = 'ShirtInBasket';
//         document.getElementById("ShirtInBasket").innerHTML = "Цена : " + shirt.price + 'р' + " x " + countShirt + " =" + shirtCost+ 'р';
        
        
//         var basketImg = document.createElement("IMG");
//         basketImg.src = massImg[0];
//         ShirtInBasket.appendChild(basketImg)
//         basketImg.id = 'basketImg'



//       var buttonInShirtBasket = document.createElement("button");
//       buttonInShirtBasket.innerHTML = "+";
//       var buttonOutShirtBasket = document.createElement("button");
//       buttonOutShirtBasket.innerHTML = "-";
//       ShirtInBasket.appendChild(buttonInShirtBasket);
//       ShirtInBasket.appendChild(buttonOutShirtBasket);
//       buttonInShirtBasket.id = 'button'
//       buttonOutShirtBasket.id = 'button'
//       buttonInShirtBasket.onclick = function(){ buttonInShirt.click();}
//       buttonOutShirtBasket.onclick = function(){ buttonOutShirt.click();}
      
//     }
    
//     return countShirt   
// }
// //добавление товара обувь
// function BasketShoes(e){
//     if (e.target == buttonInShoes){
//         countShoes++

//     }
//     else if (e.target == buttonOutShoes) {
//         countShoes--
//             if (countShoes <= 0) {
//                 countShoes = 0;
//                 document.getElementById("ShoesInBasket").remove();
//             }
            
//     }
//     var shoesCost = shoes.price * countShoes;
//     var allcost = countBasketPrice(countShirt, countShoes, countJeans);
//     var allcount = allСountBasket(countShirt, countShoes, countJeans);
//     f(allcount,allcost);
//     //отрисовка товара обувь в корзине
//     if (countShoes>0){
//         if (document.getElementById("ShoesInBasket")){
//             document.getElementById("ShoesInBasket").remove();
            
//           }
//         console.log(countShoes)
//         var ShoesInBasket = document.createElement("div");
//         blockBasket.appendChild(ShoesInBasket);
//         ShoesInBasket.id = 'ShoesInBasket';
//         document.getElementById("ShoesInBasket").innerHTML = "Цена : " + shoes.price + 'р' + " x " + countShoes + " =" + shoesCost+ 'р';
        
        
//         var basketImg1 = document.createElement("IMG");
//         basketImg1.src = massImg[1];
//         ShoesInBasket.appendChild(basketImg1)
//         basketImg1.id = 'basketImg'




//       var buttonInShoesBasket = document.createElement("button");
//       buttonInShoesBasket.innerHTML = "+";
//       var buttonOutShoesBasket = document.createElement("button");
//       buttonOutShoesBasket.innerHTML = "-";
//       ShoesInBasket.appendChild(buttonInShoesBasket);
//       ShoesInBasket.appendChild(buttonOutShoesBasket);
//       buttonInShoesBasket.id = 'button'
//       buttonOutShoesBasket.id = 'button'
//       buttonInShoesBasket.onclick = function(){ buttonInShoes.click();}
//       buttonOutShoesBasket.onclick = function(){ buttonOutShoes.click();}
      
// }
// return countShoes 
// }

//добавление товара обувь
// function BasketJeans(e){
//     if (e.target == buttonInJeans){
//         countJeans++
//     }
//     else if (e.target == buttonOutJeans) {
//         countJeans--
//             if (countJeans <= 0) {
//                 countJeans = 0;
//                 document.getElementById("JeansInBasket").remove();
//             }
//     }
//     var jeansCost = jeans.price * countJeans;
//     var allcost = countBasketPrice(countShirt, countShoes, countJeans);
//     var allcount = allСountBasket(countShirt, countShoes, countJeans);
//     f(allcount,allcost);
//     //отрисовка товара джинсы в корзине
//     if (countJeans>0){
//         if (document.getElementById("JeansInBasket")){
//             document.getElementById("JeansInBasket").remove();
            
//           }
//         console.log(countJeans)
//         var JeansInBasket = document.createElement("div");
//         blockBasket.appendChild(JeansInBasket);
//         JeansInBasket.id = 'JeansInBasket';
//         document.getElementById("JeansInBasket").innerHTML = "Цена : " + jeans.price + 'р' + " x " + countJeans + " =" + jeansCost+ 'р';
        
        
//         var basketImg = document.createElement("IMG");
//         basketImg.src = massImg[2];
//         JeansInBasket.appendChild(basketImg)
//         basketImg.id = 'basketImg'




//       var buttonInJeansBasket = document.createElement("button");
//       buttonInJeansBasket.innerHTML = "+";
//       var buttonOutJeansBasket = document.createElement("button");
//       buttonOutJeansBasket.innerHTML = "-";
//       JeansInBasket.appendChild(buttonInJeansBasket);
//       JeansInBasket.appendChild(buttonOutJeansBasket);
//       buttonInJeansBasket.id = 'button'
//       buttonOutJeansBasket.id = 'button'
//       buttonInJeansBasket.onclick = function(){ buttonInJeans.click();}
//       buttonOutJeansBasket.onclick = function(){ buttonOutJeans.click();}
      
// }
//     return countJeans   
// }




// function buttonclick(e){
        
//   var targid = e.target.id
//   function ff (targid){
//     var foundProduct = clothes.find(func => func.id == targid)
//     foundProduct.count = countClothes
    
//     return foundProduct
//   }
  
 
          
//   console.log(targid,ff(targid))

//   if(cart.indexOf(ff(targid)) == -1){
    
//     cart.push(ff(targid)) 
    
//     console.log(cart) 
//   }