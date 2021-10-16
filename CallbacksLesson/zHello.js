function Hello(text) {
    
    let randTime = (Math.floor(Math.random() * (5 + 1)) * 1000);
    setTimeout(() => {
        console.log(`Random time is: ${randTime}`);
        console.log(text);
    }, randTime);
}

Hello('Hello');
Hello('World');
Hello('Im');
Hello('here');
