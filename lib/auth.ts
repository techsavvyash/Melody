import jwt from 'jsonwebtoken';
import prisma from './prisma';
import { NextApiRequest, NextApiResponse } from 'next'

export const validateRoute = (handler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.TRAX_ACCESS_TOKEN

        if(token) {
            let user

            try {
                const {id} = jwt.verify(token, 'hello')
                user = prisma.user.findUnique({
                    where: {id},
                })

                if(!user) {
                    throw new Error('Not real user')
                }
            } catch(e) {
                res.status(401)
                res.json({
                    error: "Not Authorised"
                })
                return 
            }

            return handler(req, res, user) 
        } 

        res.status(401)
        res.json({error: 'Not AUthorised'})
    }
}