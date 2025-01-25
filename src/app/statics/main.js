"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = handleCommand;
exports.executeCommand = executeCommand;
var input = document.querySelector('.txt-input');
var content = document.querySelector('.content');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var clear = document.getElementsByClassName('.clear');
input.addEventListener('keydown', handleCommand);
function handleCommand(event) {
    if (event.key === 'Enter') {
        var command = input.value.trim();
        input.value = '';
        content.innerHTML += "$ ".concat(command, "<br>");
        executeCommand(command);
    }
}
function executeCommand(command) {
    switch (command) {
        case "help":
            content.innerHTML += '<p class="dummy-txt">Available commands: <span class="cmd-txt">help</span>, <span class="cmd-txt">aboutMe</span>,  <span class="cmd-txt">projects</span>, <span class="cmd-txt">blogs</span>, <span class="cmd-txt">techStack</span>, <span class="cmd-txt">socials</span>, <span class="cmd-txt">clear</span></p><br>';
            break;
        case "clear":
            setTimeout(function () {
                content.innerHTML = '<a id="clear"></a>';
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var before = document.getElementById("clear");
            }, 1);
            break;
        case "aboutMe":
            var aboutMe = document.createElement('div');
            aboutMe.classList.add('about-me');
            aboutMe.innerHTML = "\n            <span class=\"about-txt\">Hello folks, Welcome to DevCh.<br> Myself Sayan Chatterjee, a MERN developer, AI enthusiast and Data Scientist.<br>\n             I specialize in building dynamic web applications that not only provide seamless user experiences <br> but also integrate artificial intelligence to enhance functionality and performance.\n            ";
            content.appendChild(aboutMe);
            input.value = '';
        case "projects":
        case "socials":
        case "techStack":
            var techStack = document.createElement('div');
            techStack.classList.add('tech-stack');
            techStack.innerHTML =
                "\n            <img src=\"/tech.jpg\" alt=\"tech-stack\" style = \"width: 300px; height: 300px; border-radius: 8px;\" />\n             ";
            content.appendChild(techStack);
            input.value = '';
            break;
        case "blogs":
            break;
        default:
            content.innerHTML += "Unknown command: ".concat(command, ", for a list of commands type help.<br>");
    }
}
