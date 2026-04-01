import { Router } from "express";
import { UserService } from "../services/user.services";

const router = Router();
const service = new UserService();

// CREATE
router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await service.createUser(name, email);
  res.json(user);
});

// READ
router.get("/users", async (_req, res) => {
  const users = await service.getUsers();
  res.json(users);
});

// ✏️ UPDATE
router.put("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  const [updated] = await service.updateUser(id, name, email);

  if (updated) {
    res.json({ message: "User updated successfully ✅" });
  } else {
    res.status(404).json({ message: "User not found ❌" });
  }
});

// 🗑️ DELETE
router.delete("/users/:id", async (req, res) => {
  console.log("DELETE HIT 🚀", req.params.id);

  const id = Number(req.params.id);
  const deleted = await service.deleteUser(id);

  if (deleted) {
    res.json({ message: "User deleted successfully ✅" });
  } else {
    res.status(404).json({ message: "User not found ❌" });
  }
});
export default router;




// //# CREATE
// curl -X POST http://localhost:5000/api/users \
//   -H "Content-Type: application/json" \
//   -d '{"name":"Amal","email":"amal@example.com"}'

// # READ
// curl http://localhost:5000/api/users

// # UPDATE
// curl -X PUT http://localhost:5000/api/users/1 \
//   -H "Content-Type: application/json" \
//   -d '{"name":"Updated","email":"updated@example.com"}'

// # DELETE
// curl -X DELETE http://localhost:5000/api/users/1