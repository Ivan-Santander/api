import { Request, Response } from "express";
import request from "request";
import { Users as Model } from "../entities/Users";
import { Roles as ModelRoles, Roles } from "../entities/Roles";
import { AppSettings } from "../environment.dev";
import { AppDataSource } from "../db";
const API = AppSettings.API_ENDPOINT;
export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      lastname,
      type_document,
      document,
      indicative,
      phone,
      status,
      role_admin,
      role_logistics,
      role_delivery,
      role_patient,
      street_address,
    } = req.body;
    const model = new Model();
    model.name = name;
    model.lastname = lastname;
    model.type_document = type_document;
    model.document = document;
    model.indicative = indicative;
    model.phone = phone;
    model.status = status;

    let save = await model.save();

    const json_role: any = {
      role_user: true,
      admin: role_admin,
      logistics: role_logistics,
      patient: role_patient,
      delivery: role_delivery,
      technical: false,
      iduser:save.id,
    };

    const json_location:any = {
      street_address: street_address,
      latitude:10,
      longitude:10,
      accuracy:10,
      altitude_accuracy:10,
      speed:10,
      heading:10,
      altitude:10,
      iduser:save.id
    }

    request(
      {
        url: `${API}rol/create`,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        json: json_role,
      },
      function (error, resp, body) {
        if (!error){
          request(
            {
              url: `${API}location/create`,
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              json: json_location,
            },
            function (error, resp, body) {
              if (!error) res.send({ req: json_role });
              else return res.status(500).json({ error });
            }
          );
        } 
        else return res.status(500).json({ error });
      }
    );

    
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    // const response = await Model.find({relations:{location:true}});
    const response = await Model.find({ relations: ["location"] });

    // const userRepository = Model.getRepository()
    // const users = await userRepository.find({
    //     relations: {
    //         order: true,
    //     },
    // })
    // const users = await Model.find({ relations: ["order"] });
    // const photos = await Roles.findOne({ relations: ["user"] });

    return res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOneBy({ id: id });
    if (!param) return res.status(404).json({ error: "param not found" });
    let body = req.body;
    const json_user: any = {
      name: body.name,
      lastname: body.lastname,
      type_document: body.type_document,
      document: body.document,
      indicative: body.indicative,
      phone: body.phone,
      status: body.status,
    };
    const json_role: any = {
      role_user: true,
      admin: body.role_admin,
      logistics: body.role_logistics,
      patient: body.role_patient,
      delivery: body.role_delivery,
      technical: false,
    };
    Model.update({ id: id }, json_user);
    ModelRoles.update({ id: id }, json_role);
    return res.send(req.body);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOneBy({ id: id });
    if (!param) return res.status(404).json({ error: "param not found" });
    return res.json(param);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
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
