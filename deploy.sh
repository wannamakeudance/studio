# complication & publish online
cd /usr/local/lighthouse/softwares/nginx/www/
sudo rm -rf *
sudo mv /home/lighthouse/studio/build/* ./
sudo service nginx restart
[lighthouse@VM-4-4-centos 