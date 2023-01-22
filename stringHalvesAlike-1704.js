/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let a = s.slice(0, s.length/2);
    let b = s.slice(s.length/2, s.length);
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   console.log(a,b)
    let avowels = 0, bvowels = 0;
    for(i of a){
        if(vowels.includes(i)) avowels++;
        //   console.log(vowels.includes(i), avowels)
    }
    for(i of b){
        if(vowels.includes(i)) bvowels++;
    }

    return avowels === bvowels;

};
