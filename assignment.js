let h=10
let b=10
while (h) {
    h=b % 10
    if (h>10){
        console.log ('true')
    }
    else if (h>1) {
        console.log ('greater than 1')
        b=b+1
    }else if ( h>1||h>2 || h==0){
        console.log ('greater than 1')
        console.log ('greater than 2')
        console.log ('greater than 3')
        return b
    }
}