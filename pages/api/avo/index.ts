import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const response = {
    length: allEntries.length,
    data: allEntries,
  };

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(response));
};

export default allAvos;
