// function showItems(){
// 	let item = loadAllItems();
// 	for(let i in item){
// 		let divItems = document.createElement('div');
// 		let items =document.getElementById('items');
// 		let p = document.createElement('p');
// 		let input = document.createElement('input');
// 		let text = '';
// 		text += '编号：'+item[i].id+'\n';
// 		text += '商品名：'+item[i].name+'\n';
// 		text += '价格：' + item[i].price +'\n';
// 		p.innerText = text;
// 		divItems.className = 'itembox'; 
// 		divItems.appendChild(p);
// 		divItems.appendChild(input);
// 		items.appendChild(divItems);
// 	}
// }


// function showSale(){
// 	let promotions = document.getElementById('promotions');
// 	let promotion = loadPromotions();
// 	let item = loadAllItems();
// 	let text='今日促销信息：';
// 	for(let i in promotion){
// 		text = text + promotion[i].type + ' ';
// 		if(promotion[i].items){
// 			for(let value of promotion[i].items){
// 				for(let k in item){
// 					if(item[k].id ==value){
// 						text +=  item[k].name+'  ';
// 					}
// 				}
				
// 			}
// 		}
// 	}
// 	promotions.innerHTML = '<p>'+text+'</p>';
// }
// function fromInput(){
// 	let arr = [];
// 	let all = document.getElementById('items').getElementsByTagName('input');
// 	let item = loadAllItems();
// 	for(let i in item){
// 		let temp='';
// 		temp += item[i].id+' x '+all[i].value;
// 		arr.push(temp);
// 	}
// 	return arr;
// }


// window.onload=function(){
// 	showItems();
// 	showSale();
// };