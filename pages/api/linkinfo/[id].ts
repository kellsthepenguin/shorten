import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../global'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string
  const link = await prisma.link.findFirst({ where: { id: id as string } })

  if (!link) return res.json({})
  
  res.json({ id: link?.id, url: link?.url })
}
