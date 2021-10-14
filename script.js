function createCircle(n) {
    var array = []
    // var fill = ["#cdb4db", "#ffc8dd", "#e9c46a", "#a2d2ff", "#e76f51"]
    var fill = ["#cdb4db", "#ffc8dd", "#f2dca7", "#a2d2ff",  "#95f0a7", "#fb3853"]
    for(var i = 0; i<=n; i++){  
        let x = Math.round(Math.random() * 1500 + 20);
        let y = Math.round(Math.random() * 700 + 20);
        let r = Math.round(Math.random() * 65 + 35);
        let fillIndex = Math.round(Math.random() * 5);
        console.log(fillIndex);
        var currentCircle = (`<circle id="circle2" style="opacity: 0.91;" cx=${x} cy=${y} r=${r} stroke="black" stroke-width="2" fill=${fill[fillIndex]}  />`);
        array.push(currentCircle);
    }
    for(var i =0; i<=array.length; i++){
        var circle = document.getElementById('circle');
        circle.innerHTML += array[i];
    }
    }
createCircle(40);
