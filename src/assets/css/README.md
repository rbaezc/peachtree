# This css folder contains the css from sass files. The sass files live in other project called sass_framework.

# created the sass_framework project using node-sass package, and then add the next command to the package.json file from that project.

# in the scripts section
"scss": "node-sass --watch scss -o css"

# then run the command
npm run scss

# so everytime i created a new scss file and write sass code there i got the .css file with the proper css instructions.