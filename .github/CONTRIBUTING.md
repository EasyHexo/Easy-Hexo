# 贡献

Hi，欢迎对本项目贡献！

这里是一些贡献的规范，希望你能遵守，**并在开始贡献前认真通读一遍**。

## 选题

选题比较自由，你可以到 [Issue](https://github.com/EasyHexo/Easy-Hexo/issues) 这里认领任务，或者写自己想写的。

我们想要：

- 较流行的主题*
- 较实用的插件
- 实用技巧
- ......

*：至少在 GitHub 获得 150 stars。

## Git 工作流

> 本部分内容由 [yi-yun](https://github.com/yi-yun) 贡献。

注意：

- 多人协作最重要的就是同步仓库，所以在开发前请保证你的本地仓库是最新的。

- 不要随意覆盖其他人的文件，大不了后面加。之前有点混乱了，一般框架一俩人搭建就够了，然后搭建完成之后，组员再进行调试环境。

### 配置 Git

**极其重要，不然 merge 时代码会很乱**。

1. 编辑器改成（UX）模式
    - 换行符采用 LF
    - UTF-8 编码
2. Git 命令行配置
    - `git config --global core.safecrlf true`
    - `git config --global core.autocrlf false`
  
> 原因见 [链接](https://github.com/cssmagic/blog/issues/22)。

### 工作流程

1. Fork 一份[原仓库](https://github.com/EasyHexo/Easy-Hexo)
2. [搭建本地服务器](https://easyhexo.com/0-Intro/0-3-contributing.html)
3. 干任何事之前，`git fetch` 到本地仓库新建分支，然后合并。
    > 可使用 `git fetch https://github.com/EasyHexo/Easy-Hexo.git master:分支名` 命令，然后 `git merge 分支名`，如有冲突先解决。
4. 写作。
5. 提交到自己 Fork 的仓库
6. 提交 [PR](https://github.com/EasyHexo/Easy-Hexo/compare) 请求。

## 规范

> **必须遵守**。否则将直接拒绝 PR。

请熟读 [中文文案排版指北
](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.md) ，并严格遵守。

注意：

- 专有名词请严格遵守。如 GitHub 勿写为 Github。
- 如果在 Markdown 中需要用到代码块语法，请使用 https://prismjs.com/#languages-list 作为标准。例如：
    ```markdown
    \`\`\`yaml
    ···
    \`\`\`
    ```

你也可以使用 [lint-md](https://github.com/hustcc/lint-md/tree/master/packages/lint-md-cli) 这个工具来检测一下是否合规。

## 提示

- 图片需要在项目内的 `./docs/.vuepress/img` 文件夹里整理好。（当然如果你嫌麻烦我们也是可以帮你搞定的~你只要专注于内容就好）
- 文章要放对位置。
