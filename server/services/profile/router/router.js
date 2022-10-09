const router = require('express').Router()
const profileUsecase = require("../usecase/profile_ucase").ProfileUsecase

router.get('/detail',async (req, res) => {
    let profile = await profileUsecase.GetProfileInfo({})
    if (profile.error) {
        return res.json({ status: 0, message: "ERROR" })
    }

    res.json({ status: 1,  data: profile })
})

module.exports = router