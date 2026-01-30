@echo off
cd /d "%~dp0"
node .\node_modules\typescript\bin\tsc && node .\node_modules\vite\bin\vite.js build
