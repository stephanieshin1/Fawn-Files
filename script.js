function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var dt = new Date()
    document.getElementById('datetime').innerHTML = dt.toLocaleString();
    display_c();
}

function ShowHide(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function LogOut() {
    var signIn = document.getElementById('login_prompt');
    var chat = document.getElementById('mandy_chat');
    signIn.style.display = "block";
    chat.style.display = "none";
}

function ChatLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var window = document.getElementById('login_prompt');
    var errorMessage = document.getElementById('error_message');
    var chat = document.getElementById('mandy_chat');
    if (username == "fawngreen11" && password == "!girlCoffee19") {
        window.style.display = "none";
        chat.style.display = "block";
        errorMessage.style.display = "none";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    } else 
        errorMessage.style.display = "block";
}

function Chat() {
    var text = document.getElementById('user').value;    

    if (text != "") {
        var f_message = document.createElement('div');
        f_message.className = "fawn_message";
        var f_figure = document.createElement('figure');
        f_figure.className = "fawn_avatar";
        var f_avatar = document.createElement('img');
        f_avatar.src = "images/icon.jpg";
        var f_text = document.createElement('p');
        f_text.innerHTML = text;

        f_figure.appendChild(f_avatar);
        f_message.appendChild(f_figure);
        f_message.appendChild(f_text);
        document.getElementById('messages-content').appendChild(f_message); 
        Scroll();

        document.getElementById('user').value = "";
        setTimeout(Reply, 500, text);
    }
}

function Reply(text) {
    text = text.toLowerCase();
    var m_message = document.createElement('div');
    m_message.className = "mandy_message";
    var m_figure = document.createElement('figure');
    m_figure.className = "mandy_avatar";
    var m_avatar = document.createElement('img');
    m_avatar.src = "images/mandy_cropped.jpg";
    var m_text = document.createElement('p');

    //insert function for AI
    m_text.innerHTML = getReply(text);

    m_figure.appendChild(m_avatar);
    m_message.appendChild(m_figure);
    m_message.appendChild(m_text);
    document.getElementById('messages-content').appendChild(m_message);
    Scroll();
}

function getReply(msg) {
    var greetings = ["hey fawn!", "hii whats up :)", "heyyy!"];
    var farewells = ["bye!!", "see u :)", "talk later!"];
    var emotions = ["im good. but tired af per usual...", "kind of stressed bc of school :( but u know how it goes lol", "im okay wbu??"]
    var otherReplies = ["did u have class today?", "how have u been?", "did u hear abt that concert thats gonna be in town?", "we should totally hangout sometime", "have u heard that new song thats been on the radio...", "god my roommates are being so loud right now >:(", "do u wanna play stardew valley multiplayer tonight?"]
    var reactions = ["nice!", "LOL", "hahah", ":)", "cooool"]
    
    if (msg.includes("hi") ||  msg.includes("what's up") || msg.includes("hey") || msg.includes("hello") || msg.includes("whats up")) {
        var message = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (msg.includes("bye") || msg.includes("see you") || msg.includes("see ya")) {
        var message = farewells[Math.floor(Math.random() * farewells.length)];
    } else if (msg.includes("how are you") || msg.includes("how are u") || msg.includes("how r u") || msg.includes("how r you")){
        var message = emotions[Math.floor(Math.random() * emotions.length)];
    } else {
        var num = Math.floor(Math.random() * otherReplies.length);
        var message = otherReplies[num];
    }
    return message;
}

// function getReplyAI(msg) {
//     const fs = require('fs') 
  
//     fs.readFile('chatbot.txt', (err, data) => { 
//         if (err) throw err; 
//         var lines = this.result.split('\n');
//         for(var line = 0; line < lines.length; line++){
//             if (msg == lines[line]) {
//                 return lines[line + 1];
//             }
//         }
//         return msg;
//     }) 
// }

function MoveFront(id) {
    var x = document.getElementById(id);
    var allElements = document.getElementById("*");

    allElements.style.zIndex = 0;
    x.style.zIndex = 1;
}

function Scroll() {
    var elem = document.getElementById('messages');
    elem.scrollTop = elem.scrollHeight;
}

$(document).ready(function() {
    $('#pic_folder, #login_file, #gif_folder,#note_file, #chat_room, #app_icon, #folder_icon, #note_icon, #hotdog, #panda, #poem_file').draggable({stack: "section"});
});