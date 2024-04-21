#!/bin/bash
echo "********** Running Script .sh file **********"
# Access the argument passed to the script (GitHub ref)
github_ref="$1"
# Use the GitHub ref as needed in your deployment logic
echo "Echoing: Deploying with GitHub ref: $github_ref"
cd
cd /home/ubuntu/React-1/FJ6-Prod-React/
echo "Echoing: checking out master, pulling all, fetching, and then checking out tag_ref"
git checkout master
git pull --all
git fetch
git checkout tags/ $github_ref
echo "Echoing: Checked out tags/ $github_ref"
npm i 
echo "Echoing: Installed npm packages"
npm run build
echo "Echoing: Build completed, and now moving over files to prod location"
sudo cp -r build/* /var/www/html/
ls -l
pwd
sudo systemctl reload apache2
echo "********** End of Script .sh file 1 **********"
