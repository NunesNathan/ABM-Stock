const crudCrudId = 'ab080ad1daaf417087ef73c755447c0d';
const badRequest = 'Bad Request - Check your crudcrud id';

const insert = async (body) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  };

  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock`, headers)
    .then((data) => data.json())
    .catch(() => badRequest);

  return result;
};

const getAll = async () => {
  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock`)
    .then((data) => data.json())
    .catch(() => badRequest);

  return result;
};

const getOneById = async (id) => {
  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`)
    .then((data) => data.json())
    .catch(() => badRequest);

  return result;
};

const update = async (id, body) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(body),
  };

  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`, headers)
    .then((data) => data.json())
    .catch(() => badRequest);

  return result;
};

const remove = async (id) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'DELETE',
  };

  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`, headers)
    .then((data) => data.json())
    .catch(() => badRequest);

  return result;
};

const Stock = {
  crudCrudId,
  insert,
  getAll,
  getOneById,
  update,
  delete: remove,
};

export default Stock;
