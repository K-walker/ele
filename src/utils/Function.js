
export function parseImage (image_path , params)  {
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