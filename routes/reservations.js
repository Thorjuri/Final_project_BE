const express = require('express');
const router = express.Router();

const ReservationsController = require('../controllers/reservationsController.js');
const reservationsController = new ReservationsController();
const authMiddleware = require('../middlewares/auth_middleware')
const wrapAsyncController = require('../middlewares/wrapAsyncController');


// 1. 매치 예약 신청
router.post('/register', authMiddleware, wrapAsyncController(reservationsController.createMatch));

// 2. 장소별-날짜별 예약현황 조회
router.get('/register/:place/:date', authMiddleware, wrapAsyncController(reservationsController.getMatch));

// 3. 나의 매치 조회
router.get('/me', authMiddleware, wrapAsyncController(reservationsController.getMyMatch));

// 4. 전체 매칭 조회 (매칭 전/후 구분)
router.get('/register', authMiddleware, wrapAsyncController(reservationsController.getAllMatch))

// 5. 매치 예약 취소
router.put('/register/delete', authMiddleware, wrapAsyncController(reservationsController.deleteMatch));

module.exports = router;