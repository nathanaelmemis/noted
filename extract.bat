"C:\Program Files\7-Zip\7z" x "noted.7z"
certutil -decode "noted.txt" "temp.7z"
"C:\Program Files\7-Zip\7z" x "temp.7z" -aoa
del "temp.7z"
del "noted.txt"