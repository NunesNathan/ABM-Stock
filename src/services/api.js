const crudCrudId = 'e84e3b1289e640b7bc2c11162f2db18c';

const insert = async (body) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  };

  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock`, headers)
    .then((data) => data.json());

  return result;
};

const getAll = async () => {
  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock`)
    .then((data) => data.json());

  return result;
};

const getOneById = async (id) => {
  const result = await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`)
    .then((data) => data.json());

  return result;
};

const update = async (id, body) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(body),
  };

  await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`, headers);
};

const remove = async (id) => {
  const headers = {
    headers: { 'content-type': 'application/json' },
    method: 'DELETE',
  };

  await fetch(`https://crudcrud.com/api/${crudCrudId}/stock/${id}`, headers);
};

const Stock = {
  insert,
  getAll,
  getOneById,
  update,
  delete: remove,
};

export default Stock;
