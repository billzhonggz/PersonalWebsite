cd .vuepress
cd dist
echo billzhonggz.com> CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/billzhonggz/billzhonggz.github.io.git master