let r = process.argv.slice(2)

let area = (r) =>{
    let pi = 3.14;
    let result = pi*Math.pow(r,2);
    console.log(`Yarıçapı (${r}) olan dairenin alanı: (${result})`);
    return result;
}

area(r*1);