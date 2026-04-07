import mongoose, { Schema, Document } from "mongoose";

export interface ICompany extends Document {
    companyName: string;
    companyEmail: string;
    companyAddress?: number;
}

const CompanySchema: Schema = new Schema({
 companyName: { type: String, required: true },
  companyEmail: { type: String, required: true, unique: true },
  companyAddress: { type: Number },
});

export const Company = mongoose.model<ICompany>("Company", CompanySchema);
