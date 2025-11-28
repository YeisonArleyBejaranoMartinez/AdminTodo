# Development

pasos para levantar la app en desarrollo

-1 levantar la base de datos

```
docker compose up -d
```

-2 Renombrar el .env.template a .env
-3 Reemplazar las variables de entorno
-4 ejecutar en postman http://localhost:3000/api/seed para llenar la base de datos.

# Prisma commands

```
npx prisma init
npx prisma migrate
npx prisma generate

```

# Prod

# Stage
