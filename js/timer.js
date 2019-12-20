    var initial = 6000;
    var count = initial;
    var counter = setInterval(timer, 10); //10 will  run it every 100th of a second
    var firstClick = true;
    var purpleTeam = 0;
    var blueTeam = 0;
    var greenTeam = 0;
    var yellowTeam = 0;
    var orangeTeam = 0;
    var redTeam = 0;
    var greyTeam = 0;
    var totalClicks = 0;

    function timer() {
        if (count <= 0) {
            clearInterval(counter);
            document.getElementById("sonar-emitter").style.cursor = "default";
            document.getElementById("sonar-emitter").style.backgroundColor = "grey";
            document.getElementById("sonar-wave").style.backgroundColor = "grey";
            document.getElementById("sonar-emitter").onclick = "";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: grey;'>grey</span>!";    
                greyTeam++;
                totalClicks++;
                updateStats();
            }
            firstClick = false;
            setTimeout(reset, 1000 + Math.random() * 10000);
            return;
        }
        count--;
        displayCount(count);
    }

    function displayCount(count) {
        var res = count / 100;
        document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length);
    }

    function start() {
        counter = setInterval(timer, 10);
    };

    function stop() {
        clearInterval(counter);
        document.getElementById("sonar-wave").style.animation = "none";
        document.getElementById("sonar-emitter").style.cursor = "default";
        document.getElementById("sonar-emitter").onclick = "";
        if (count <= 6000 && count >= 5200) {
            document.getElementById("sonar-emitter").style.backgroundColor = "purple";
            document.getElementById("sonar-wave").style.backgroundColor = "purple";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: purple;'>purple</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: purple;'>purple</span>!";
            }
            purpleTeam++;
        } else if (count < 5200 && count >= 4200){
            document.getElementById("sonar-emitter").style.backgroundColor = "blue";
            document.getElementById("sonar-wave").style.backgroundColor = "blue";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: blue;'>blue</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: blue;'>blue</span>!";
            }
            blueTeam++;
        } else if (count < 4200 && count >= 3200){
            document.getElementById("sonar-emitter").style.backgroundColor = "green";
            document.getElementById("sonar-wave").style.backgroundColor = "green";
           if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: green;'>green</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: green;'>green</span>!";
            }
            greenTeam++;
        } else if (count < 3200 && count >= 2200){
            document.getElementById("sonar-emitter").style.backgroundColor = "yellow";
            document.getElementById("sonar-wave").style.backgroundColor = "yellow";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: yellow;'>yellow</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: yellow;'>yellow</span>!";
            }
            yellowTeam++;
        } else if (count < 2200 && count >= 1200){
            document.getElementById("sonar-emitter").style.backgroundColor = "orange";
            document.getElementById("sonar-wave").style.backgroundColor = "orange";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: orange;'>orange</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: orange;'>orange</span>!";
            }
            orangeTeam++;
        } else if (count < 1200 && count > 0){
            document.getElementById("sonar-emitter").style.backgroundColor = "red";
            document.getElementById("sonar-wave").style.backgroundColor = "red";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: red;'>red</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: red;'>red</span>!";
            }
            redTeam++;
         } else if (count <= 0){
            document.getElementById("sonar-emitter").style.backgroundColor = "grey";
            document.getElementById("sonar-wave").style.backgroundColor = "grey";
            if(firstClick){
                document.getElementById("msgUser").innerHTML = "You've joined team <span style='color: grey;'>grey</span>!";
            } else{
                document.getElementById("randUser").innerHTML = "Another user has joined team <span style='color: grey;'>grey</span>!";
            }
            greyTeam++;
        }
        totalClicks++;
        updateStats();
    };

    function reset() {
        stop();
        clearInterval(counter);
        count = initial;
        displayCount(count);
        start();
        document.getElementById("sonar-wave").style.animation = "sonarWave 1s linear infinite";
        firstClick = false;
        randomClicks();
    };

    displayCount(initial);

    function randomClicks() {
        setTimeout(reset, 1000 + Math.random() * 60000);
    }

    function updateStats(){
        if (firstClick) {
            document.getElementById("statsContainer").style.display = "block";
             document.getElementById("randUser").style.display = "block";
            document.getElementById("purpleLabel").innerHTML = "Purple";
            document.getElementById("blueLabel").innerHTML = "Blue";
            document.getElementById("greenLabel").innerHTML = "Green";
            document.getElementById("yellowLabel").innerHTML = "Yellow";
            document.getElementById("orangeLabel").innerHTML = "Orange";
            document.getElementById("redLabel").innerHTML = "Red";
            document.getElementById("greyLabel").innerHTML = "Grey";
        }
            document.getElementById("purpleCounter").innerHTML = purpleTeam;
            document.getElementById("blueCounter").innerHTML = blueTeam;
            document.getElementById("greenCounter").innerHTML = greenTeam;
            document.getElementById("yellowCounter").innerHTML = yellowTeam;
            document.getElementById("orangeCounter").innerHTML = orangeTeam;
            document.getElementById("redCounter").innerHTML = redTeam;
            document.getElementById("greyCounter").innerHTML = greyTeam;
            document.getElementById("purpleBar").style.height = ((purpleTeam*100)/totalClicks) + '%';
            document.getElementById("blueBar").style.height = ((blueTeam*100)/totalClicks) + '%';
            document.getElementById("greenBar").style.height = ((greenTeam*100)/totalClicks) + '%';
            document.getElementById("yellowBar").style.height = ((yellowTeam*100)/totalClicks) + '%';
            document.getElementById("orangeBar").style.height = ((orangeTeam*100)/totalClicks) + '%';
            document.getElementById("redBar").style.height = ((redTeam*100)/totalClicks) + '%';
            document.getElementById("greyBar").style.height = ((greyTeam*100)/totalClicks) + '%';
    }