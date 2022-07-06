import { Request, Response } from "express";
import { Roles as Model } from "../entities/Roles";
import { Users as ModelUser } from "../entities/Users";

export const createRole = async (req: Request, res: Response) => {
  try {
    const {
      role_user,
      admin,
      logistics,
      patient,
      delivery,
      technical,
      iduser
    } = req.body;

    const model = new Model();
    const id:any = await ModelUser.findOneBy({ id: iduser });
    
    model.role_user = role_user;
    model.admin = admin;
    model.logistics = logistics;
    model.patient = patient;
    model.delivery = delivery;
    model.technical = technical;
    model.user = id;
    await model.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const response = await Model.find({
      relations: {user: true,},
    });
    return res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const updateRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOne({
      where:{ id: id },
      relations: {user: true,},
    });
    if (!param) return res.status(404).json({ error: "param not found" });
    const { role_user, admin, logistics, patient, delivery, technical } = req.body
    const json_role:any = {"role_user":role_user,"admin":admin,"logistics":logistics,"patient":patient,"delivery":delivery,"technical":technical}
    Model.update({ id: id }, json_role);
    return res.sendStatus(200);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOne({
      where: { id: id },
      relations:{user:true}
    });
    if (!param) return res.status(404).json({ error: "param not found" });
    return res.json(param);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.delete({ id: id });

    if (!param) return res.status(404).json({ error: "param not found" });

    const result = await Model.delete({ id: id });
    console.log(result);
    if (!result.affected) return res.status(204).send("deleted param");
    else return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
