echo "********** Running Script .sh file **********"
cd
cd /home/ubuntu/React-1/FJ6-Prod-React/
npm i
npm run build
sudo cp -r build/* /var/www/html/
ls -l
pwd
sudo systemctl reload apache2
echo "********** End of Script .sh file 1 **********"
