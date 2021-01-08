@echo off

echo OBS Websocket Bot for Twitch by derrobin154
echo.
echo.
echo Schritt 1: Config erstellen
echo.
echo Wie ist der Twitch Benutzername des Bots?
:top
set /p twitchusername=
echo.
echo Wie heisst dein Kanal bei Twitch?
:top
set /p twitchkanal=
echo.
echo Wie ist der OAUTH Token des Twitch Accounts?
:top
set /p twitchoauth=
echo.
echo Wie lautet die IP des OBS Websocket?
:top
set /p obsip=
echo.
echo Wie lautet der Port des OBS Websocket?
:top
set /p obsport=
echo.
echo Wie lautet das Passwort des OBS Websocket?
:top
set /p obspass=
echo.
echo Wie lautet die Quelle der Kamera in OBS?
:top
set /p obscamera=
echo.
echo.
echo Nun werden die Paketabhaengigkeiten installiert, danach schliesst dieses Fenster automatisch. Bitte druecke ENTER zum Starten.
pause
echo KANALNAME=%twitchkanal% >> .env
echo USERNAME=%twitchusername% >> .env
echo OAUTH=%twitchoauth% >> .env
echo OBS_IP=%obsip% >> .env
echo OBS_PORT=%obsport% >> .env
echo OBS_PASSWORD=%obspass% >> .env
echo OBS_ITEMCAMERA=%obscamera% >> .env
npm i --quiet --no-progress
echo Installationsscript erfolgreich abgeschlossen. Druecke ENTER zum Schließen.


