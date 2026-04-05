"use strict";
{
    const DarkmodeBtn = document.getElementById('darkBtn');
    const LightmodeBtn = document.getElementById('lightBtn');
    const JsBtn = document.getElementById('jsBtn');
    const TsBtn = document.getElementById('tsBtn');
    const Body = document.body;
    const SetTheme = (mode) => {
        if (mode === "dark") {
            Body.className = "dark";
            DarkmodeBtn.disabled = true;
            LightmodeBtn.disabled = false;
        }
        else {
            Body.className = "light";
            LightmodeBtn.disabled = true;
            DarkmodeBtn.disabled = false;
        }
    };
    const toggleXScript = (mode) => {
        const snippets = document.querySelectorAll('.xscript-code');
        snippets.forEach(s => {
            s.style.display = s.classList.contains(mode) ? 'block' : 'none';
        });
    };
    DarkmodeBtn.addEventListener("click", () => SetTheme("dark"));
    LightmodeBtn.addEventListener("click", () => SetTheme("light"));
    JsBtn.addEventListener("click", () => toggleXScript("js"));
    TsBtn.addEventListener("click", () => toggleXScript("ts"));
}
