## git使用笔记
`017-07-15`

- 创建分支 `git branch temp` 或者 `git checkout -b temp`
- 推送本地分支到远程 `git push origin temp`
- 删除本地分支 `git branch -d temp` 有时候你可能需要一个大写的D
- 删除远程分支 git v1.7.0只后可以用 `git push origin --delete temp` 通用做法是(推动一个空分支覆盖远程分支) `git push origin :temp`
- 撤销错误的提交
    - 本地代码还原至老版本 `git reset --hard <commit-hash>`
    - 强制提交覆盖 `git push -f origin temp`
- 创建标签 创建普通标签 `git tag v2.3.1` 创建带注释的标签 `git tag -a v2.3.1 -m "2.3.1源码"` git tag 是打标签的命令，-a 是添加标签，其后要跟新标签号，-m 及后面的字符串是对该标签的注释。
- 操作标签 显示本地所有标签 `git tag` 提交标签 `git push origin v2.3.1` 一次性提交所有标签 `git push origin --tags` 删除本地标签 `git tag -d v2.3.1` 删除远程标签 `git push origin :refs/tags/v2.3.1` 或者git v1.7.0 以后和删除分支一样 `git push origin --delete v2.3.1`
- 直接创建并拉取远程分支，然后切换到这个分支 `git checkout -t origin/temp` 
