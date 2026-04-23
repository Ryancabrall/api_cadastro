@echo off
echo Iniciando deploy do projeto...
echo.

echo 1. Verificando se Vercel esta instalado...
vercel --version >nul 2>&1
if errorlevel 1 (
    echo Vercel nao encontrado. Instalando...
    npm install -g vercel
)

echo.
echo 2. Fazendo deploy para producao...
vercel --prod --yes

echo.
echo Deploy concluido!
pause
