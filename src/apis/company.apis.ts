import express from "express";
import { Company } from "../models/company";

const router = express.Router();

// Create a new Company
router.post("/", async (req, res) => {
  try {
    const company = new Company(req.body);
    const savedCompany = await company.save();
    res.json(savedCompany);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Get all Companys
router.get("/", async (req, res) => {
  try {
    const Companys = await Company.find();
    res.json(Companys);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Update a Company
router.put("/:id", async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCompany) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(updatedCompany);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Delete a Company
router.delete("/:id", async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
