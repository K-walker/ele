
export function parseImage (image_path , params)  {
	if(!image_path || image_path == '') return '' ;
    let url = 'https://fuss10.elemecdn.com/' 
    let a = image_path.charAt(0, 1) 
    let b = image_path.substring(1, 3)
    let c = image_path.substring(3)
    url = url + a + '/' + b + '/' + c ;
    if(image_path.endsWith('jpeg')) {
      url += '.jpeg';
    } else {
      url += '.png';
    }
    return url + params;
}

export function isEmpty (value) {
	let type = getType(value);
	if(type === 'Undefined' || type === 'Null') return true ;
	if(type === 'Array') return  value.length == 0 ;
	if(type === 'String') return value.replace(/\s/g,'') === '' ;
	if(type === 'Object') return Object.keys(value).length === 0 ;
	return false ;
}

export function getType (obj) {
	let type = Object.prototype.toString.call(obj);
	if(type === '[object String]') return 'String' ;
	if(type === '[object Number]') return 'Number' ;
	if(type === '[object Null]') return 'Null' ;
	if(type === '[object Boolean]') return 'Boolean' ;
	if(type === '[object Object]') return 'Object' ;
	if(type === '[object Array]') return 'Array' ;
	if(type === '[object Undefined]') return 'Undefined' ;
	if(type === '[object Date]') return 'Date' ;
}