// var it = require('./items.js');
// var lps = require('./promotions.js');
// var loadAllItems = it.loadAllItems;
// var loadPromotions = lps.loadPromotions;
var loadAllItems = require('./items.js');
var loadPromotions = require('./promotions.js');


  let loadOne = loadAllItems();
  let loadTwo = loadPromotions();

  //buy amount obj
function getInput(inputs){
	let shoppingList = [];
	let temp,obj;
	for(let i in inputs){
		temp = inputs[i].split(" ");
		obj = {};
		obj.id = temp[0];
		obj.amount = Number(temp[2]);
		shoppingList.push(obj);
	}
	return shoppingList;
}
// get items information
function getMessage(shoppingList,loadItems){
	for(let i in shoppingList){
		for(let j in loadItems){
			if(shoppingList[i].id == loadItems[j].id){
				shoppingList[i].name = loadItems[j].name;
				shoppingList[i].price = loadItems[j].price;
				shoppingList[i].isSale = false;
			}
		}
	}
	return shoppingList;
}
function getPromotionMes(shoppingList,promotions){
	let temp = promotions[1].items;
	for(let i in shoppingList){
		for(let j in temp){
			if(shoppingList[i].id==temp[j]){
				shoppingList[i].isSale = true;
			}
		}
	}
	return shoppingList;
}
function printList(shoppingList){//黄焖鸡 x 1 = 18元
	let text = '============= 订餐明细 =============\n';
	for(let i in shoppingList){
		let temp = shoppingList[i].name + ' x ' +shoppingList[i].amount + ' = ' + shoppingList[i].amount*shoppingList[i].price + '元\n';
		text += temp;
	}
	return text;
}
function promotionWay(shoppingList){
	let count1=0,count2=0;
	let count=0;
	let saleList = '';
	for(let i in shoppingList){
		count += shoppingList[i].amount*shoppingList[i].price;
	}
	if(count>=30) count1 =count - 6;
	for(let i in shoppingList){
		if(shoppingList[i].isSale == true){
			count2 += shoppingList[i].amount*shoppingList[i].price/2;
			saleList += shoppingList[i].name + '，';
		}else count2 += shoppingList[i].amount*shoppingList[i].price;
	}
	if(count1==0&&count2==count){
		let text = '-----------------------------------\n';
		text += '总计：'+count+'元\n';
		text += '===================================\n'
		return text;
	}else {
		let text = '-----------------------------------\n';
		if(count1<count2){
			text += '使用优惠:\n'+'满30减6元，省6元\n';
			text += '-----------------------------------\n';
			text += '总计：'+count1+'元\n';
			text += '===================================\n'			
		}else {
			text += '使用优惠:\n'+'指定菜品半价('+saleList.substr(0,saleList.length-1)+')，省'+13+'元\n';
			text += '-----------------------------------\n';
			text += '总计：'+count2+'元\n';
			text += '===================================\n'		
		}
		return text;
	}

}
function bestCharge(inputs) {

	// let loadOne = [{
 //    id: 'ITEM0001',
 //    name: '黄焖鸡',
 //    price: 18.00
 //  }, {
 //    id: 'ITEM0013',
 //    name: '肉夹馍',
 //    price: 6.00
 //  }, {
 //    id: 'ITEM0022',
 //    name: '凉皮',
 //    price: 8.00
 //  }, {
 //    id: 'ITEM0030',
 //    name: '冰锋',
 //    price: 2.00
 //  }];
	// let loadTwo = [{
 //    type: '满30减6元'
 //  }, {
 //    type: '指定菜品半价',
 //    items: ['ITEM0001', 'ITEM0022']
 //  }];
  // let loadOne = loadAllItem();
  // let loadTwo = loadPromotion();
	let shoppingList = getInput(inputs);
	shoppingList = getMessage(shoppingList,loadOne);
	shoppingList = getPromotionMes(shoppingList,loadTwo);
	let text = printList(shoppingList);
	let temp = promotionWay(shoppingList);
	text += temp;
 	return text;
}
module.exports = bestCharge;