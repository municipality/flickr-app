echo "Bundling vendor files"
gulp vendor-bundle
echo "Bundling app files"
jspm bundle-sfx app/main.js dist/app.js
