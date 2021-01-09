import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export class Auth {
    public static instance = new Auth()
    public static getInstance = () => Auth.instance
    public generateToken (tokenData: object): string {
      const expiresIn = 60 * 60
      const secret = process.env.JWT_SECRET || ''
      const token = jwt.sign(tokenData, secret, { expiresIn })
      return token
    }

    public validateToken (token: string) {
      const secret = process.env.JWT_SECRET || ''

      return jwt.verify(token, secret)
    }
}
