# webpakc-demo1
demo of webpack

## technology
webpack，node, vue, eslint

# 使用淘宝镜像
* npm install -g cnpm --registry=https://registry.npm.taobao.org

* cnpm install vue --save-dev

* 注： vue-loader版本>=14太高，就需要在plugins中声明，否者打包出错

* 项目地址 https://github.com/ZhangRuyi0528/webpack-demo1
* npm i 安装依赖包
* npm run dev 运行项目
* open file => webpack-demo1/html/index.html

# 安装 eslint
* npm i eslint
* eslint --init
* eslint package.json include 'eslint-plugin-vue@latest, eslint-config-eslint,
*       essential@latest, vue-eslint-parser',

* global,test: eslint --ext .js,.vue + (/dir)
* pre-commit: 需安装lint-staged

* husky配置hooks定义
*   =》代码检测规范，会访问自身定义的pre-commit脚本
*       :基于eslint规范加入自定义rules
*   =》提交规范，会访问自身定义的commitlint.config配置文件
*       引入@commitlint/cli"， "@commitlint/config-conventional
*       栗子:<type>: <subject>


# 页面配置
* file 
*      => lib               外部库
*      => pages             页面层
*      => components        组件
*      => router            路由