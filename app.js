let dateArea = document.querySelector('#main');
let switcher = true;

function Clock(elem){
	this.dateArea = elem;	
}

Clock.prototype.showDate = function () {
	let dateFormat = new Date();
	this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
}

function LongDateType(elem){
	Clock.call(this, elem);
}

LongDateType.prototype = Object.create(Clock.prototype);
LongDateType.prototype.showDate = function () {
	let date = new Date();
	let dateFormat = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
	this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
}

function ShortDateType(elem){
	Clock.call(this, elem);
}

ShortDateType.prototype = Object.create(Clock.prototype);
ShortDateType.prototype.showDate = function () {
	let date = new Date();
	let dateFormat = date.getHours() + ' : ' + date.getMinutes();
	this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
}

dateArea.addEventListener('click', (e) => {
	e.preventDefault();
	if(e.target.tagName === 'P'){
		switcher = !switcher;
		console.log('clicked ' + switcher);
	}
})

let longDate = new LongDateType(dateArea);
let shortDate = new ShortDateType(dateArea);


setInterval(function(){
	switcher === true ? longDate.showDate() : shortDate.showDate()
}, 1000)