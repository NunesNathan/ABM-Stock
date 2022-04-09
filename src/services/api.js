const crudCrudId = '58d91ae56403413ba90d021289546b5d';

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

const Stock = {
  insert,
  getAll,
  getOneById,
}

export default Stock;