# Telegram Transkript

A super simple Telegram client that logs all text messages to `_td_files/log.txt`.

## Setup

1. run `./build.sh` to build the image. If you're on a slow machine (like a RaspberryPi) this might take quite some time
2. run `./runFirstTime.sh`. After the logs have stopped, hit `ENTER` once. You should get a prompt to enter your phone number.
   Enter it, wait for the secret code and enter it as well. Now all your chat messages should appear
3. hit `CTRL-C` to stop the program
3. run `./run.sh`

Now the Telegram transcription is running in the background. 
If you want to check, what's going on, you can either check the logs in `_td_files/log.txt` or live via `docker logs -f tdbak`.
