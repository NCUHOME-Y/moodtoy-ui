# Stars Connected

先搭基础框架，动效以后再做

**实时**的习惯圈子？

## 基础功能

- 用户可以创建状态并等待他人加入
- 用户之间可以添加好友
- 用户可以加入他人创建的状态
- 登录注册
- 用户加入状态的记录，计算亲密度？
- 状态的创建者可以指定可以加入的人，群组，或公开

## UI设计

### 刚进入页面

- 登录注册界面

### 主页

- 一个状态周围环绕着正在参与的用户头像
- 常用的状态排在前面
- 需要搜索吗

### 我的

- 账户基本信息，昵称，邮箱等
- 登录操作

## API

### Models

```ts
interface User {
    id: number,
    name: string,
    avatar_url: string,
}

interface Status {
    id: number,
    name: string,
    creator_id: string,
    custom_img: string?,
}
```

### Errors

```ts
{
    message: string,
}
```

### Resources

`POST /login`

```ts
{
    email: string,
    password: string,
}

{
    token: string,
    user: User,
}
```

`POST /register`

```ts
// 注册可以暂时不用做
{
    email: string,
    password: string,
    name: string,
}

// empty response if success
```

`POST /new-status`

```ts
{
    name: string,
    limit: 'whitelist' | 'blacklist' | 'public',
    users: User[],
}

{Status}
```

`WebSocket /ws/status`

```ts
// Join a status
{
    id: UUID,
    action: 'join',
    status_id: ID,
}

{
    id: UUID,
    code: number,
    users: User[],
    message: string,
}

// Exit a status
{
    id: UUID,
    action: 'exit',
    status_id: ID,
}

{
    id: UUID,
    code: number,
    message: string,
}

// A user joined
{
    id: UUID,
    action: 'userJoined',
    user: User,
}

// A user joined
{
    id: UUID,
    action: 'userExited',
    user: User,
}
```
