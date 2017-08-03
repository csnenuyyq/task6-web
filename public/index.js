
function clear(){
	let mes = document.getElementById('message');
	let input = document.getElementsByTagName('input');
	for(let i in input){
		input[i].value = '';
	}
	let con = document.getElementById('continue');
	mes.innerText =' ';
	con.style.display = 'none';
}
// document.getElementById('btn').onclick = clear;
function calculatePrice(){
	let input = fromInput();
	if(input==0){
		return;
	}
	let answer = bestCharge(input);
	let mes = document.getElementById('message');
	let con = document.getElementById('continue');
	mes.innerText = answer;
	con.style.display = 'block';
}
function showItems(){
	let item = loadAllItems();
	for(let i in item){
		let divItems = document.createElement('div');
		let img = document.createElement('img');
		img.src = i + '.jpg';
		let items =document.getElementById('items');
		let p = document.createElement('p');
		let input = document.createElement('input');
		input.type = 'number';
		let text = '';
		// text += '编号：'+item[i].id+'\n';
		text += '商品名：'+item[i].name+'\n';
		text += '价格：' + item[i].price +'\n';
		p.innerText = text;
		divItems.className = 'itembox'; 
		divItems.appendChild(img);
		divItems.appendChild(p);
		divItems.appendChild(input);
		items.appendChild(divItems);
	}
}


function showSale(){
	let promotions = document.getElementById('promotions');
	let promotion = loadPromotions();
	let item = loadAllItems();
	let text='今日促销信息：';
	for(let i in promotion){
		text = text + promotion[i].type + ' ';
		if(promotion[i].items){
			for(let value of promotion[i].items){
				for(let k in item){
					if(item[k].id ==value){
						text +=  item[k].name+'  ';
					}
				}
				
			}
		}
	}
	promotions.innerHTML = '<p>'+text+'</p>';
}
function fromInput(){
	let arr = [];
	let all = document.getElementById('items').getElementsByTagName('input');
	let item = loadAllItems();
	let count = 0;//all zero = nothing
	for(let i in item){
		if(all[i].value<0){
			alert('不合法的输入，请重新购买');
			// clear();
			return 0;
		}
		count += all[i].value;
		let temp='';
		temp += item[i].id+' x '+all[i].value;
		arr.push(temp);
	}
	if(count==0) {
		alert('请购买物品');
		return 0;
	}
	return arr;
}
function lowZero(){
	let inp = document.getElementsByTagName('input');
	for(let i in inp){
		inp[i].onblur = function(){
			if(this.value<0) this.value = 0;
		}
	}
}

window.onload=function(){
	showItems();
	showSale();
	lowZero();
	document.getElementsByTagName('button')[0].onclick = calculatePrice;
	document.getElementsByTagName('button')[1].onclick = clear;
};