import express from 'express'
import authCtrl from '../controllers/auth.controller'
import router from '../routes/user.routes'

router.route('/auth/signin')
    .post (authCtrl.signin)
    
router.route('/auth/signout')
    .get (authCtrl.signout)

export default router;