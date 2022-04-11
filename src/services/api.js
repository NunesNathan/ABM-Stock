const crudCrudId = '90ab247f689545e2a5133651397b4823';

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
