import { NextApiRequest, NextApiResponse } from "next";
import { selectWith } from "$sql";
import { translateCourt } from "$sql/orm";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const items = await selectWith(translateCourt)`
      select *
      from courts
  `;

  if (Array.isArray(items)) {
    await response.status(200).json({
      items,
      total: items.length,
    });
  } else {
    await response.status(500).json({
      message: "Failed to fetch items",
    });
  }
};

export default handler;
