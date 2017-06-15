//Iterating over an object's properties
let objectA = {
	foo: 'This is foo',
	bar: 'This is foo',
	fun: 'This is fun',
	quux: 'This is quux',
	spam: 'This is spam'
}

let findKeys = function(obj) {
	let keys = [];
	for(var key in obj) {
		keys.push(key);
	}
	//console.log(keys);
	return keys;
}

let findProperties = function(obj) {
	let props = [];
	for(var key in obj) {
		props.push(obj[key])
	}
	//console.log(props);
	return props;
}

//Problem is in on line 34
function createLog(obj) {
	findKeys(obj);
	findProperties(obj);
	console.log(obj);
	for(var i = 0; i < obj.length; i++) {
		console.log(findKeys[i] + ': ' + findProperties[i]);
	}
}

createLog(objectA);