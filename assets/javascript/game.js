$(document).ready(function() {
    //character data
    var char0 = {
        name:"Baby Yoda", 
        health: 60,
        baseAtk: 8,
        atk: 8,
        counter: 5  
    };

    var char1 = {
        name:"Mando", 
        health: 100,
        baseAtk: 8,
        atk: char0.atk,
        counter: 6  
    };

    var char2 = {
        name:"Jar Jar Binks", 
        health: 125,
        baseAtk: 10,
        atk: 10,
        counter: 5   
    };

    var char3 = {
        name:"Darth Vader", 
        health: 180,
        baseAtk: 4, 
        atk: 4,
        counter: 25 
    };

    var char4 = {
        name:"Luke Skywalker", 
        health: 150,
        baseAtk: 6,
        atk: 6,
        counter: 20  
    };

    var gameOn = false;
    var chars = document.getElementById("select");
    var yodaC = document.getElementById("yodaC");
    var lukeC = document.getElementById("lukeC");
    var jarC = document.getElementById("jarC");
    var vaderC = document.getElementById("vaderC");

    //clears the Opponent when it's defeated
    function clearOpp(){
        yodaD.style.display= "none";
        jarD.style.display='none';
        vaderD.style.display='none';
        lukeD.style.display= 'none';
        mandoD.style.display= 'none';
    }

    //this will reset the game
    function resetGame(){
       window.location.reload(false);
    }

    //this function handles damage calcs. based on which character is passed through
    function ATTACK (you, opp) {
        var attack = opp.health -= you.atk;
        var hit = you.health -= opp.counter;

        if(you.name==="Baby Yoda"){
            $('#yodaC > div > p').text(hit);
            if(opp.name==="Jar Jar Binks"){
                $('#jarD > div > p').text(attack);
            } else if(opp.name=="Darth Vader"){
                $('#vaderD > div > p').text(attack);
            } else{
                $('#lukeD > div > p').text(attack);
            }
        }

        if(you.name==="Mando"){
            $('#mandoC > div > p').text(hit);
            if(opp.name==="Jar Jar Binks"){
                $('#jarD > div > p').text(attack);
            } else if(opp.name=="Darth Vader"){
                $('#vaderD > div > p').text(attack);
            } else{
                $('#lukeD > div > p').text(attack);
            }
        }

        if(you.name==="Jar Jar Binks"){
            $('#jarC > div > p').text(hit);
            if(opp.name==="Baby Yoda"){
                $('#yodaD > div > p').text(attack);
            } else if(opp.name=="Darth Vader"){
                $('#vaderD > div > p').text(attack);
            } else if(opp.name=="Mando"){
                $('#mandoD > div > p').text(attack);
            } else{
                $('#lukeD > div > p').text(attack);
            }
        }

        if(you.name==="Darth Vader"){
            $('#vaderC > div > p').text(hit);
            if(opp.name==="Baby Yoda"){
                $('#yodaD > div > p').text(attack);
            } else if(opp.name=="Jar Jar Binks"){
                $('#jarD > div > p').text(attack);
            } else if(opp.name=="Mando"){
                $('#mandoD > div > p').text(attack);
            } else{
                $('#lukeD > div > p').text(attack);
            }
        }

        if(you.name==="Luke Skywalker"){
            $('#lukeC > div > p').text(hit);
            if(opp.name==="Baby Yoda"){
                $('#yodaD > div > p').text(attack);
            } else if(opp.name=="Darth Vader"){
                $('#vaderD > div > p').text(attack);
            } else if(opp.name=="Mando"){
                $('#mandoD > div > p').text(attack);
            } else{
                $('#yodaD > div > p').text(attack);
            }
        }

        //prints text to bottom about what happened when attack was clicked
        $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
        $('#oppDmg').text(opp.name + " counter attacks " + you.name + " for " + opp.counter + " damage.")

        //increases attack of users char
        you.atk += you.baseAtk;

        //special yoda condition
        if(you.name === "Baby Yoda"){
            if(hit <= 0){
                yodaC.style.display= "none";
                mandoC.style.display= "block";
                alert('Mando arrives and saves Baby Yoda')
                char1.atk = you.atk;
            }
            if(attack<=0){
                gameOn=false;
                clearOpp();
                $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
                $('#oppDmg').text("You have defeated " + opp.name + ". Select a new challenger" )
            }      
        } else if(hit <= 0){
            gameOn=false;
            $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
            $('#oppDmg').text("You have been defeated by" + opp.name + ". Game Over!" )
        } else if(attack<=0){
            if($('#yodaE').css('display') === 'none' && $('#vaderE').css('display') === 'none' && $('#jarE').css('display') === 'none' && $('#lukeE').css('display') === 'none'){
                $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
                $('#oppDmg').text("You have defeated all Opponents! You Win!" )
                gameOn=false;
                clearOpp();
            } else if(opp.name === 'Baby Yoda'){
                yodaD.style.display= "none";
                mandoD.style.display= "block";
                alert('Mando arrives and saves Baby Yoda')
            } else{
                gameOn=false;
                clearOpp();
                $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
                $('#oppDmg').text("You have defeated " + opp.name + ". Select a new challenger" )
            }
        }       
    }
    
$(".card").on("click", function() {
    
    if(gameOn){
        return false
    } else{
     
        $("#selectText").text("Your Character");
        $("#oppText").text("Select Opponent");
        
        //clears all characters from screen
        chars.style.display = "none";
  
        //this shows the user's choice as their character and puts remaining as options for opponents
        if($(this).attr('id')=="yodaS"){  
            yodaC.style.display = "block";
            vaderE.style.display= "block";
            lukeE.style.display= "block";
            jarE.style.display= "block";
            return false;
        } else if($(this).attr('id')=="lukeS"){  
            lukeC.style.display = "block";
            vaderE.style.display= "block";
            yodaE.style.display= "block";
            jarE.style.display= "block";
            return false;
        } else if($(this).attr('id')=="vaderS"){  
            vaderC.style.display = "block";
            lukeE.style.display= "block";
            yodaE.style.display= "block";
            jarE.style.display= "block";
            return false;
        } else if($(this).attr('id')=="jarS"){  
            jarC.style.display = "block";
            vaderE.style.display= "block";
            yodaE.style.display= "block";
            lukeE.style.display= "block";
            return false;
        }             
    }

    //this moves user's opponent choice from the options to the "chosen opponent" section
    if($(this).attr('id')=="yodaE"){
        if(gameOn){
            return false;
        } else {
        yodaE.style.display= "none";
        yodaD.style.display= "block";
        gameOn=true;
        }
    } else if($(this).attr('id')=="jarE"){
        if(gameOn){
            return false;
        } else {
        jarE.style.display= "none";
        jarD.style.display= "block";
        gameOn=true;
        }
    } else if($(this).attr('id')=="vaderE"){
        if(gameOn){
            return false;
        } else {
        vaderE.style.display= "none";
        vaderD.style.display= "block";
        gameOn=true;
        }
    } else if($(this).attr('id')=="lukeE"){
        if(gameOn){
            return false;
        } else {
        lukeE.style.display= "none";
        lukeD.style.display= "block";
        gameOn=true;
        }      
    }   
})

//when the attack button is clicked this calls the ATTACK function and passes in the characters
$("#attackBtn").on("click", function(){
    if(gameOn==false){
        $('#myDmg').text("Attacked No One, You Have")
        $('#oppDmg').text("")
        return false
    } else if($('#yodaC').css('display')==='block'){
        if($('#jarD').css('display')==='block'){
            ATTACK(char0, char2);
        } else if($('#vaderD').css('display')==='block'){
            ATTACK(char0, char3);
        } else {  
            ATTACK(char0, char4);
        }
//special yoda line
    }else if($('#mandoC').css('display')==='block'){
        if($('#jarD').css('display')==='block'){
            ATTACK(char1, char2);
        } else if($('#vaderD').css('display')==='block'){
            ATTACK(char1, char3);
        } else {  
            ATTACK(char1, char4);
        }
//end of special yoda line
    } else if($('#jarC').css('display')==='block'){
        if($('#yodaD').css('display')==='block'){
            ATTACK(char2, char0);
        } else if($('#vaderD').css('display')==='block'){
            ATTACK(char2, char3);
        } else if($('#mandoD').css('display')==='block'){
            ATTACK(char2, char1);
        }else {  
            ATTACK(char2, char4);
        }
    } else if($('#vaderC').css('display')==='block'){
            if($('#jarD').css('display')==='block'){
                ATTACK(char3, char2);
            } else if($('#yodaD').css('display')==='block'){
                ATTACK(char3, char0);
            } else if($('#mandoD').css('display')==='block'){
                ATTACK(char3, char1);
            } else {  
                ATTACK(char3, char4);
            }
        } else if($('#lukeC').css('display')==='block'){
            if($('#jarD').css('display')==='block'){
                ATTACK(char4, char2);
            } else if($('#vaderD').css('display')==='block'){
                ATTACK(char4, char3);
            } else if($('#mandoD').css('display')==='block'){
                ATTACK(char4, char1);
            }else {  
                ATTACK(char4, char0);
            }
        }      
    })

    $("#resetBtn").on("click", function(){
        resetGame();
    });
    
})
