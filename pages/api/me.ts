import { validateRoute, validateROute } from "../../lib/auth"

export default validateRoute((req, res, user)=>{
    res.json(user)
})