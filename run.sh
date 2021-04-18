docker kill tdbak && sleep 2
docker rm -f tdbak

docker run -d --user=$(id -u) --restart=always --name=tdbak -v $(pwd)/_td_database:/app/_td_database -v $(pwd)/_td_files:/app/_td_files hades32/tg-back:latest
