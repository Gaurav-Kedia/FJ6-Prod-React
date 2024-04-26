#!/bin/bash

echo "********** Running Script .sh file **********"
Tag_Ref = $1

# Change directory to your React project
cd /home/ubuntu/React-1/FJ6-Prod-React/

# Install dependencies
npm install

# Fetch latest changes from remote repository
git fetch

# Checkout the specific tag
git checkout "$Tag_Ref"  # Replace <some-tag-name> with the desired tag name

# Build the project
npm run build

# Copy build files to Apache server directory
sudo cp -r build/* /var/www/html/

# List files in the copied directory for verification
ls -l /var/www/html/

# Reload Apache to apply changes
sudo systemctl reload apache2

echo "********** End of Script .sh file **********"
