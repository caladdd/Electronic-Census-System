# Electronic-Census-System

## Instalacciones

Instalar NodeJs linux (Ubuntu)


    sudo apt-get install curl python-software-properties
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - 
    sudo apt-get install nodejs

Instalar Mongodb


    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
    echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    echo "mongodb-org hold" | sudo dpkg --set-selections
    echo "mongodb-org-server hold" | sudo dpkg --set-selections
    echo "mongodb-org-shell hold" | sudo dpkg --set-selections
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
    echo "mongodb-org-tools hold" | sudo dpkg --set-selections


Install dependencias (package.json)


    npm install



## Run

    npm start
