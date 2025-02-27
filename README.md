- Poc adonis js rest api

```

node version 20+

=Command=
npm install

node ace serve --watch


=DB=
docker run -d -p 5432:5432 --name my-postgres -e POSTGRES_PASSWORD=test1234 postgres

node ace make:service users
node ace make:migration run
```
document : https://docs.adonisjs.com/guides/getting-started/installation
