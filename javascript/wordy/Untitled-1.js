var result;
var question = 'What is -12 divided by 2 divided by -3'

result = question.replace(/plus/gi, '+');
result = result.replace(/minus/gi, '-');
result = result.replace(/multiplied/gi, '*');
result = result.replace(/divided/gi, '\/');
console.log(result)
var r = /-*([\d])+|\+|-|\*|\//g;

arr = result.match(r);
console.log(arr)
var x=1; y=x;
for (x=1; y<arr.length; x++) {
    if (arr[x] == '*' || arr[x] == '\/') {
        for (y=x+2; y<arr.length; y++) {
            if (arr[y]  !== '*' && arr[y] !== '\/') {
                arr.splice(x-1,0,"(")
                x++;y++;
                arr.splice(y+1,0,")")
                y+=2
                break;
            }        
        }
    }
}
console.log(arr);
result = eval(arr.join(''))

console.log(result)


