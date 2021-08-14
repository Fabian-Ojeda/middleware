#!/bin/bash
while :
do

ping -c 4 google.com
if [ $? -eq 0 ]
then
echo Servidor en funcionamiento
date +"%d %m %y - %H:%M google.com Funcionando">>info.log
else
echo Servidor caido
date +"%d %m %y - %H:%M google.com Caido">>info.log
fi

sleep 2m
done
