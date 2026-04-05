{const DarkmodeBtn = document.getElementById('darkBtn') as HTMLButtonElement;
const LightmodeBtn = document.getElementById('lightBtn') as HTMLButtonElement;
const JsBtn = document.getElementById('jsBtn') as HTMLButtonElement;
const TsBtn = document.getElementById('tsBtn') as HTMLButtonElement;
const Body = document.body;

const SetTheme = (mode: "light" | "dark") => {
    if (mode === "dark") {
        Body.className = "dark";
        DarkmodeBtn.disabled = true;
        LightmodeBtn.disabled = false;
    } else {
        Body.className = "light";
        LightmodeBtn.disabled = true;
        DarkmodeBtn.disabled = false;
    }
};
const toggleXScript = (mode: 'js' | 'ts') => {
   const snippets = document.querySelectorAll('.xscript-code');
   snippets.forEach(s => {
       (s as HTMLElement).style.display = s.classList.contains(mode) ? 'block' : 'none';
   });
}


DarkmodeBtn.addEventListener("click", () => SetTheme("dark"));
LightmodeBtn.addEventListener("click", () => SetTheme("light"));
JsBtn.addEventListener("click", () => toggleXScript("js"));
TsBtn.addEventListener("click", () => toggleXScript("ts"));}