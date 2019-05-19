import { Response, Request, NextFunction } from 'express';

const auth = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        return res.send({ 'a': 'b' })
    }
};

export { auth };