let h=5
let b=10
while (h) {
    h=b % 3
    if (h>9) {
        console.log('correct')   
    }
    else if (h>-1) {
        console.log('greater than -1')
        b=b+1
    }
    console.log('running')
}