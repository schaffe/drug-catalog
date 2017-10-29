docker-machine -D create \
--driver generic \
--generic-ip-address=rpi \
--engine-install-url https://get.docker.com \
--engine-storage-driver overlay2 \
--generic-ssh-key ~/.ssh/id_rsa \
--generic-ssh-user docker-tech \
man