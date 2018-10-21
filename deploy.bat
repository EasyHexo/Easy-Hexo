npm run docs:build

cd docs/.vuepress/dist

git add -A

git commit -m ':clap: deploy'

git push -f git@github.com:EasyHexo/Easy-Hexo.git master:gh-pages