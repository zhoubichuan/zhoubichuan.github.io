# 自动化打包同时将打包后的代码发布到gh-pages分支

# 1.打包
npm run build

# 2.进入打包目录
cd prod

# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add github https://github.com/zhoubichuan/zhoubichuan.github.io.git
git push -f github gh-pages

# 4.返回初始目录
cd -