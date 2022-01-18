import { validateRoute } from "../../lib/auth.ts"

export default validateRoute((req, res, user)=>{
    res.json(user)
})