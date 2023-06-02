import router from "express-promise-router";
import sse from '../stream';

const r = router();

r.route("/").get([], (req, res) => {
    res.flush = () => undefined;
    return sse.init(req, res);
});

export default r;
// import express from "express";
// import sse from "../stream";

// const router = express.Router();

// router.get("/", sse.init);

// export default router;

// https://github.com/techfortified/react-node-sse
