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
    var myDmg = document.getElementById("myDmg");
    var oppDmg = document.getElementById("oppDmg");

    function ATTACK (you, opp) {
        if($('#yodaC').css('display')==='block'){
            if($('#vaderD').css('display')==='block'){
            
                var attack = opp.health -= you.atk;
                var hit = you.health -= opp.counter;
                if(you.name=="Baby Yoda"){
                    if(opp.name=="Jar Jar Binks"){
                        $('#yodaC > div > p').text(hit);
                        $('#jarD > div > p').text(attack);
                    } else if(opp.name=="Darth Vader"){
                        $('#yodaC > div > p').text(hit);
                        $('#vaderD > div > p').text(attack);
                }
                //finish the above
            
            $('#myDmg').text(char0.name + " attacks " + char3.name + " for " + char0.atk + " damage.")
            $('#oppDmg').text(char3.name + " counter attacks " + char0.name + " for " + char3.counter + " damage.")
                char0.atk= char0.atk + char0.baseAtk;
                if(hit <= 0){
                    yodaC.style.display= "none";
                    mandoC.style.display= "block";
    
                }
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
        
            var attack = char2.health = char2.health - char0.atk;
            var hit = char0.health = char0.health - char2.counter;
            
        $('#yodaC > div > p').text(hit);
        $('#jarD > div > p').text(attack);
        $('#myDmg').text(char0.name + " attacks " + char2.name + " for " + char0.atk + " damage.")
        $('#oppDmg').text(char2.name + " counter attacks " + char0.name + " for " + char2.counter + " damage.")
            char0.atk= char0.atk + char0.baseAtk;
            if(hit <= 0){
                yodaC.style.display= "none";
                mandoC.style.display= "block";

            }
    }
    } else if($('#yodaC').css('display')==='block'){
        if($('#vaderD').css('display')==='block'){
        
            var attack = char3.health = char3.health - char0.atk;
            var hit = char0.health = char0.health - char3.counter;
            
        $('#yodaC > div > p').text(hit);
        $('#vaderD > div > p').text(attack);
        $('#myDmg').text(char0.name + " attacks " + char3.name + " for " + char0.atk + " damage.")
        $('#oppDmg').text(char3.name + " counter attacks " + char0.name + " for " + char3.counter + " damage.")
            char0.atk= char0.atk + char0.baseAtk;
            if(hit <= 0){
                yodaC.style.display= "none";
                mandoC.style.display= "block";

            }
    }
    }
    }
})


})
