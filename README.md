# blog


### QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

1. 首先需要配置数据库 mysql 
 `
 config.mysql = {
     client: {
       host: 'localhost',
       port: '3306',
       user: 'root',
       password: 'root',
       database: 'test'
     },
     app: true,
     agent: false
   };
 `
 2. 启动前端服务
   ```bash
   $ cd app/public
   $ npm i 
   $ npm start
   ```
 3. 本地开发启动后台服务
 ```bash
 $ npm i
 $ npm run dev
 $ open http://localhost:7001/dev
 
 ```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
