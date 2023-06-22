## Prisma

guide is available at:

https://fullstack-v2-instructions.vercel.app/lessons/db/db-schema

### Create Schema

Everything starts with an DB schema. We need to model our data using Prisma.

### Migrate

After creating our schema, we need to do a few things:

- Sync our DB and schema together
- Generate a typesafe ORM based on our schema so we can interact with the DB

Luckily for us, prisma handles all of this for us. We can use the migrate command.

`npx prisma migrate dev`

### create db connection helper

Because Next API functions run in a serveless environment, we're going to cache our Prisma client and reuse it when possible to avoid having too many connections.

see `/lib/db.ts`

### create sees script

see seed script at `/prisma/seed.ts`

The seed script will be running using `ts-node`, so we need to create a new tsconfig for that runtime.

see `/tsconfig-seed.json`

add the following to the `package.json`:

"prisma": {
"seed": "ts-node -P tsconfig-seed.json -r tsconfig-paths/register --transpileOnly prisma/seed.ts"
}

### run seed script

`npx prisma db seed`

### check the data

`npx prisma studio`

### deploy prisma migrations

add production database url to the env and run

`npx prisma migrate deploy`
