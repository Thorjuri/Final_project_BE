const express = require('express');
const router = express.Router();

const ReservationsController = require('../controllers/reservationsController.js');
const reservationsController = new ReservationsController();
const authMiddleware = require('../middlewares/auth_middleware')

// 1. 매치 등록 (팀1, 팀2 공통)
router.post('/register', authMiddleware, reservationsController.createMatch)

// 2. 매치 조회 (특정 날짜, 타임 클릭 시 매치 내역 조회 )
router.get('/register', authMiddleware, reservationsController.getMatch)

//3. 나의 매치 예약현황 조회
router.get('/me', authMiddleware, reservationsController.getMyMatch)



module.exports = router;