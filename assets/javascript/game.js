$(document).ready(function() {

    var char0 = {
        name:"Baby Yoda", 
        health: 80,
        baseAtk: 8,
        atk: 8,
        counter: 5  
    };

    var char1 = {
        name:"Mando", 
        health: 80,
        baseAtk: 8,
        atk: char0.atk,
        counter: 30  
    };

    var char2 = {
        name:"Jar Jar Binks", 
        health: 120,
        baseAtk: 5,
        atk: 5,
        counter: 16   
    };

    var char3 = {
        name:"Darth Vader", 
        health: 200,
        baseAtk: 4, 
        atk: 4,
        counter: 20 
    };

    var char4 = {
        name:"Luke Skywalker", 
        health: 180,
        baseAtk: 6,
        atk: 6,
        counter: 25  
    };

    var gameOn = false;
    var chars = document.getElementById("select");
    var yodaC = document.getElementById("yodaC");
    var lukeC = document.getElementById("lukeC");
    var jarC = document.getElementById("jarC");
    var vaderC = document.getElementById("vaderC");
    
    function clearOpp(){
        yodaD.style.display= "none";
        jarD.style.display='none';
        vaderD.style.display='none';
        lukeD.style.display= 'none';
    }

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

                if(you.name==="Jar Jar Binks"){
                    $('#jarC > div > p').text(hit);
                    if(opp.name==="Baby Yoda"){
                        $('#yodaD > div > p').text(attack);
                    } else if(opp.name=="Darth Vader"){
                        $('#vaderD > div > p').text(attack);
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
                        } else{
                            $('#yodaD > div > p').text(attack);
                            }
                }

    $('#myDmg').text(you.name + " attacks " + opp.name + " for " + you.atk + " damage.")
    $('#oppDmg').text(opp.name + " counter attacks " + you.name + " for " + opp.counter + " damage.")
        you.atk += you.baseAtk;
        if(hit <= 0){
            gameOn=false;
            alert ("you lose");
            //reset game
        }
        if(attack<=0){
            if($('#yodaE').css('display')==='none'&&$('#vaderE').css('display')==='none'&&$('#jarE').css('display')==='none'&&$('#lukeE').css('display')==='none'){
                alert("you win!")
                clearOpp();
                //reset game
            } else{
            gameOn=false;
            clearOpp();
            alert("select next")
            }
        }  
    }
    
$(".card").on("click", function() {
    
    if(gameOn){
        return false
    } else{
    
        
        $("#selectText").text("Your Character");
        $("#oppText").text("Select Opponent");
        
        chars.style.display = "none";
  

        if($(this).attr('id')=="yodaS"){  
            yodaC.style.display = "block";
            vaderE.style.display= "block";
            lukeE.style.display= "block";
            jarE.style.display= "block";
            return false;
        } else { 
            if($(this).attr('id')=="lukeS"){  
                lukeC.style.display = "block";
                vaderE.style.display= "block";
                yodaE.style.display= "block";
                jarE.style.display= "block";
                return false;
            } else { 
                if($(this).attr('id')=="vaderS"){  
                    vaderC.style.display = "block";
                    lukeE.style.display= "block";
                    yodaE.style.display= "block";
                    jarE.style.display= "block";
                    return false;
                } else { 
                    if($(this).attr('id')=="jarS"){  
                        jarC.style.display = "block";
                        vaderE.style.display= "block";
                        yodaE.style.display= "block";
                        lukeE.style.display= "block";
                        return false;
                    }
                }
            }
        }


        if($(this).attr('id')=="yodaE"){
            if(gameOn){
                return false;
            }else{
            yodaE.style.display= "none";
            yodaD.style.display= "block";
            gameOn=true;
            }
        } else{
        if($(this).attr('id')=="jarE"){
            if(gameOn){
                return false;
            }else{
            jarE.style.display= "none";
            jarD.style.display= "block";
            console.log(gameOn)
            gameOn=true;
            }
        } else{
            if($(this).attr('id')=="vaderE"){
                if(gameOn){
                    return false;
                }else{
                vaderE.style.display= "none";
                vaderD.style.display= "block";
                gameOn=true;
                }
            } else{
                if($(this).attr('id')=="lukeE"){
                    if(gameOn){
                        return false;
                    }else{
                    lukeE.style.display= "none";
                    lukeD.style.display= "block";
                    gameOn=true;
                    }
                }
            }
        }
    }
    };
})


$("#attackBtn").on("click", function(){
    if(gameOn==false){
        return false
    } else {
        if($('#yodaC').css('display')==='block'){
            if($('#jarD').css('display')==='block'){
                ATTACK(char0, char2);
            } else if($('#vaderD').css('display')==='block'){
                ATTACK(char0, char3);
            } else {  
                ATTACK(char0, char4);
            }
        } else if($('#jarC').css('display')==='block'){
                if($('#yodaD').css('display')==='block'){
                    ATTACK(char2, char0);
                } else if($('#vaderD').css('display')==='block'){
                    ATTACK(char2, char3);
                } else {  
                    ATTACK(char2, char4);
                }
            } else if($('#vaderC').css('display')==='block'){
                    if($('#jarD').css('display')==='block'){
                        ATTACK(char3, char2);
                    } else if($('#yodaD').css('display')==='block'){
                        ATTACK(char3, char0);
                    } else {  
                        ATTACK(char3, char4);
                    }
                } else if($('#lukeC').css('display')==='block'){
                        if($('#jarD').css('display')==='block'){
                            ATTACK(char4, char2);
                        } else if($('#vaderD').css('display')==='block'){
                            ATTACK(char4, char3);
                        } else {  
                            ATTACK(char4, char0);
                        }
                    }
        }
    })


})
