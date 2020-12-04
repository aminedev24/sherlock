var start = document.getElementById('start');
var input = document.getElementById('input');
var counter = 1;
var messages = document.getElementById('messages');
var clear = document.getElementById('clear');
var date = new Date;
var time = "<p class='time'>" + 'posted on: '  + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + "</p>";
var hour = "<p class='hour'>" + date.getHours() + ':' + date.getMinutes() + "</p>";
var messageCount = document.querySelector('.messageCount');
var num = 0;



input.onkeyup = function(e){
    e.preventDefault();
    if(e.keyCode == 13){
     press();
    }
}

function generateMessage(param){
            switch(input.value){
                case 'hello':
                    var param = 'friend';
                    break;
                case 'i want to be a programmer':
                    var param = 'programmer';
                    break;
                case 'wordpress programmer':
                    var param = 'wordpress';
                    break;
                case 'why not?':
                    var param = 'possible';
                    break;
                case 'what time is it?':
                    var param = 'time';
                    break;
                case 'how are you?':
                    var param = 'fine';
                    break;
                case 'who\'s my lil hamster?':
                    var param = 'hamster';
                    break;

            }
         
            var message="<div class='message'>";
            message+= time;
            message += "<br>";
            message += '<p>User:</p>'; 
            message += '&nbsp;';
            message += "<p>" +input.value+ "</p>";
            message += hour;
            message += "<br>";
            message += '<p>Robot:</p>';
            message += '&nbsp;';
            if(param == 'friend'){
                message += "<p> Hello, friend.</p>";
            }else if(param == 'programmer'){
                message += "<p> what type of programmer? </p>";
            }else if(param == 'wordpress'){
                message += "<p> Sorry that\'s not possible. </p>";

            }else if(param == 'possible'){
                message += "<p> Because i don\'t consider wordpress programmer as a programmer or a developer. </p>";

            }else if(param == 'time'){
                message+= "the time is " + date.getHours() + ':' + date.getMinutes() + '.';
            }else if(param == 'fine'){
                message += "<p> I am fine, wbu? </p>";

            }
            else if(param == 'hamster'){
                message += "<p> Hmm lemme see.....it's Blanka lel. </p>";

            }
         

            message += "<hr>";
            message += "</div>";
            messages.innerHTML += message;
            input.value = '';
            
    
}


function press(param){
   
    
    switch(input.value){

        case 'hello':
            
            generateMessage(param);
            break;
        case 'i want to be a programmer':
           
           generateMessage(param);
            break;
        case 'wordpress programmer':
            generateMessage(param);
            break;
        case 'why not?':
            generateMessage(param);
            break;

        case 'what time is it?':
            generateMessage(param);
            break;
        case 'how are you?':
            generateMessage(param);
            break;
        case 'who\'s my lil hamster?':
            generateMessage(param);
            break;
        
        default:
            alert('error');

    }

            switch(messages.childElementCount){
            case 1:
                messageCount.innerText = messages.childElementCount + ' messages';
                break;
          
                
            default:
              messageCount.innerText = messages.childElementCount + ' messages';
        }
     
    
}




if(messages.childElementCount == 0){
    messageCount.innerText = 'there are no messages';
}


start.onclick = function(){
    switch (counter){
        case 1:
            
             input.style.display = 'block';
             this.innerText = 'close';
             messages.style.display = 'block';
            
        break;
        default:
            this.innerText = 'start';
            input.style.display = '';
            messages.style.display = 'none';
            
            counter = 0;
    }
    counter++;
}

clear.onclick = function(){
    var message = document.querySelectorAll('div.message');
    if(messages.childElementCount >= 1){
        message.forEach(function(elem){
            messages.removeChild(elem);
            messageCount.innerText = 'there are no messages';
        });
}}