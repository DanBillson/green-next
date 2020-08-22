import { NextApiRequest, NextApiResponse } from 'next'

const mockAuth = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 1000))

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { body: email } = req

  await mockAuth()
  res.status(200)
  res.send({ email })
}
