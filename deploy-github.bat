REM # build
REM vuepress build

REM # navigate into the build output directory
cd .vuepress
cd dist

REM # if you are deploying to a custom domain
echo billzhonggz.com> CNAME

git init
git add -A
git commit -m 'deploy'

REM # if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:billzhonggz/billzhonggz.github.io.git master