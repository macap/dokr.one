# About

I've created this tool to easily use dockerized tools for development. I often need a temporary/test redis, postgres instance, while i don't want to invest to fully dockerize the project environment.

As tools are dockerized its easy to use different versions, clean them up if you dont need them anymore, and most importantly you spin up time is much faster compared to local installation. You may find it useful to play around with something and easily remove it afterwards without cluttering your system.

General principle is that you create a named docker container with just one command, and then start/stop/remove it with simple _docker start|stop|remove containername_.

I've also found it handy for smaller node projects, where i can add something like:

```
"db:create": "docker run -d --name dev-postgres  -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=projectdb -v ${pwd}/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres",
"db:start": "docker start dev-postgres",
"db:stop": "docker stop dev-postgres"
```

to package.json "scripts" and use project with db easily, without necesity to spin everything up with docker-compose.
