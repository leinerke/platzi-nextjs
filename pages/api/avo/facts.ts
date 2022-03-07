import { NextApiRequest, NextApiResponse } from 'next';
import enablePublicAccess from '@cors';
import DB from '@database';


const facts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    const db = new DB();
    const allEntries = await db.getFacts();
    const length = allEntries.length;

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json({ length, data: allEntries });
  } catch (e) {
    console.error(e);
    res.status(500).json({ length: 0, data: [], error: 'Something went wrong' });
  }
};

export default facts;
