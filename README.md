# Dogs API (Express)

Simple Express server providing CRUD for `dogs` with fields: `name`, `breed`, `age`.

Run locally:

```powershell
npm install
npm run dev   # requires nodemon
```

API endpoints:

- `GET /` -> returns plain greeting text
- `GET /dogs` -> list all dogs (JSON array)
- `GET /dogs/:id` -> get dog by id
- `POST /dogs` -> create dog (JSON body `{ name, breed, age }`)
- `PUT /dogs/:id` -> update dog (JSON body `{ name, breed, age }`)
- `DELETE /dogs/:id` -> delete dog

Validation: request bodies are validated with Joi; errors return status 400 and JSON error messages.
