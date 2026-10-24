if exist "noted.7z" del "noted.7z"
"C:\Program Files\7-Zip\7z" a -p -mhe=on -xr!"node_modules" -x!"*.7z" temp.7z ./
certutil -encode "temp.7z" "noted.txt"
"C:\Program Files\7-Zip\7z" a -p  noted.7z ./noted.txt
del "temp.7z"
del "noted.txt"