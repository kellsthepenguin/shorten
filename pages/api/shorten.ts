import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import { isWebUri } from 'valid-url'

import { prisma } from '../../global'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body

  if (!url) return res.json({ result: null })
  if (isWebUri(url)) {
    prisma.link.create({
      data: {
        url,
        id: nanoid(5)
      }
    }).then(({ id }) => {
      res.json({ id })
    })
  } else {
    return res.json({ result: null })
  }
}
