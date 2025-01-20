export default function Home() {
  return (
    <>
      <a href="" className="clear"></a>
      <p className="hello-txt">
        <span>visitor</span>@devch.com:~$ welcome
      </p>
      <div className="flex flex-row -space-x-10">
      <div className="art -space-y-4 banner-txt">
        <div>       __________</div>
        <div>      /  _____   \</div>
        <div>     /  /     /  /</div>
        <div>    /  /     /  /</div>
        <div>   /  /     /  /</div>
        <div>  /  /     /  /</div>
        <div> /  /_____/  /</div>
        <div>/___________/</div>
     </div>
     <div className="art -space-y-4 banner-txt">
        <div>       __________  </div>
        <div>      /  _______/  </div>
        <div>     /  /          </div>
        <div>    /  /______     </div>
        <div>   /  _______/     </div>
        <div>  /  /             </div>
        <div> /  /_______       </div>
        <div>/__________/       </div>
     </div>
     <div className="art -space-y-4 space-x-2 banner-txt">
        <div>  ___       __  </div>
        <div> |  |     /  / </div>
        <div> |  |    /  / </div>
        <div> |  |   /  / </div>
        <div> |  |  /  / </div>
        <div> |  | /  / </div>
        <div> |  |/  / </div>
        <div> |_____/ </div>
      
     </div>
     <div className="art -space-y-4 -space-x-3 banner-txt">
        <div>      ________ </div>
        <div>      /  _____/</div>
        <div>     /  /      </div>
        <div>    /  /      </div>
        <div>   /  /      </div>
        <div>  /  /      </div>
        <div> /  /_____ </div>
        <div>/________/ </div>
     </div>
     <div className="art -space-y-4 -space-x-4 banner-txt">
        <div>       __       __ </div>
        <div>       /  /     /  /</div>
        <div>      /  /     /  /</div>
        <div>     /  /____ /  /</div>
        <div>    /  _____    /  </div>
        <div>   /  /     /  /</div>
        <div>  /  /     /  /</div>
        <div> /__/     /__/</div>
     </div>
     </div>
      <div className="txt">
        <p className="welcome-txt">
          Welcome to my terminal like portfolio . <br />
          For a list of the commands, type
          <span className="help-txt"> &quot;help&quot; </span> .
        </p>
      </div>

      <div className="content"></div>

      <div id="txt">
        <p className="path">visitor@devch.com:~$</p>
        <div className="cursor">
          <input type="text" className="txt-input" />
          <i></i>
        </div>
      </div>
    </>
  );
}
