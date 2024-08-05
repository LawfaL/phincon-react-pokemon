const express = require("express");
const router = express.Router();

const {
  Create,
  Delete,
  Find,
  List,
  Update,
} = require("../../infrastructure/persistence/pokemon");

router.get("/", List);
router.get("/:id", Find);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Delete);

module.exports = router;
