#!/bin/bash

echo "********** Running Script .sh file **********"

# Change directory to your React project
cd /home/ubuntu/React-1/FJ6-Prod-React/

# Install dependencies
npm install

# Receive tag reference as input parameter
tag_ref="$1"

if [ -z "$tag_ref" ]; then
  echo "Error: Tag reference is empty. Exiting..."
  exit 1
fi

# Fetch latest changes from remote repository
git fetch

# Checkout the specified tag
git checkout "$tag_ref"

# Build the project
npm run build

# Copy build files to Apache server directory
sudo cp -r build/* /var/www/html/

# List files in the copied directory for verification
ls -l /var/www/html/

# Reload Apache to apply changes
sudo systemctl reload apache2

echo "********** End of Script .sh file **********"
