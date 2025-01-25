const input = document.querySelector('.txt-input') as HTMLInputElement;
const content = document.querySelector('.content') as HTMLElement;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clear = document.getElementsByClassName('.clear');

input.addEventListener('keydown', handleCommand);

function handleCommand(event:KeyboardEvent) : void {
    if(event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        content.innerHTML += `$ ${command}<br>`;
        executeCommand(command);
    }
}

function executeCommand(command: string) : void {
    switch (command) {
        case "help":
            content.innerHTML += '<p class="dummy-txt">Available commands: <span class="cmd-txt">help</span>, <span class="cmd-txt">aboutMe</span>,  <span class="cmd-txt">projects</span>, <span class="cmd-txt">blogs</span>, <span class="cmd-txt">techStack</span>, <span class="cmd-txt">socials</span>, <span class="cmd-txt">clear</span></p><br>';
            break;
        case "clear":
            setTimeout(function() {
                content.innerHTML = '<a id="clear"></a>';
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const before = document.getElementById("clear");
              }, 1);
            break;
        case "aboutMe":
            const aboutMe = document.createElement('div');
            aboutMe.classList.add('about-me');
            aboutMe.innerHTML =`
            <span class="about-txt">Hello folks, Welcome to DevCh.<br> Myself Sayan Chatterjee, a MERN developer, AI enthusiast and Data Scientist.<br>
             I specialize in building dynamic web applications that not only provide seamless user experiences <br> but also integrate artificial intelligence to enhance functionality and performance.
            `
            content.appendChild(aboutMe);
            input.value = '';
        case "projects":

        case "socials":

        case "techStack":
            const techStack = document.createElement('div');
            techStack.classList.add('tech-stack');
            techStack.innerHTML =
            `
            <img src="/tech.jpg" alt="tech-stack" style = "width: 300px; height: 300px; border-radius: 8px;" />
             `
            content.appendChild(techStack);
            input.value = '';
            break;

        case "blogs":

            break;
        default:
            content.innerHTML += `Unknown command: ${command}, for a list of commands type help.<br>`;
    }
}

  export { handleCommand, executeCommand };