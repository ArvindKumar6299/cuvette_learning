
function arvind(){
    let count= 0;
    function update(){
        count++;
        console.log(`update value after every 10sec: ${count}`);
    }
    return update;
}

let increment = arvind();
increment();
// increment();
setInterval(increment,1000);