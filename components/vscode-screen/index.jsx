export default function VscodeScreen() {
  return (
    <>
      <div className="vscode-holdbox">
        <div className="vscode-screen slide-top-1">
          <img
            draggable={false}
            src="/svgs/vscode-screen/top-menu.svg"
            className="top-menu-vscode"
            alt="simulador vs code"
          />
          <img
            draggable={false}
            src="/svgs/vscode-screen/codes.svg"
            className="codes-vscode"
            alt="simulador vs code"
          />
        </div>
        <div className="terminal-screen slide-top">
          <img
            draggable={false}
            src="/svgs/vscode-screen/codes2.svg"
            className="codes-vscode"
            alt="simulador vs code"
          />
        </div>
      </div>
    </>
  );
}
