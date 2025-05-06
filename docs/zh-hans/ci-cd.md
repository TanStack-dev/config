---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-05-06T20:28:06.923Z'
id: ci-cd
title: CI/CD
---
## GitHub 工作流 (GitHub Workflows)

- `pr.yml`:
    - 为所有拉取请求 (pull requests) 运行测试
    - 运行 `nx affected` 命令，该命令仅执行缓存失效的任务
    - 同时使用 `pkg-pr-new` 发布包预览版本并创建示例链接
- `release.yml`:
    - 为合并到发布分支的代码运行测试
    - 运行 `nx run-many` 命令，该命令执行所有任务并确保输出存在（发布构建所必需）
    - 使用 [Changesets](https://github.com/changesets/changesets) 处理版本控制和发布

## Nx

TanStack 项目使用 Nx 来实现测试和构建的快速执行。任务会并行化并在本地和 CI 环境中缓存。虽然 Nx 拥有丰富的插件系统，但我们仅将其作为 NPM 脚本运行器使用。

### 配置文件 (Config Files)

- `./nx.json`: 主配置文件，定义任务依赖关系、输入和输出
- `./package.json`: 需要手动指定根级别脚本（例如 `test:format`）
- `./**/package.json`: 包级别脚本（例如 `build`）会被自动检测

### Nx 代理 (Nx Agents)

- Nx 允许你将任务分配到多个 CI 机器上运行，从而增加可并行执行的作业数量
- 请注意，这会带来相当显著的启动延迟
