import { Request, Response } from "express";
import { Orders as Model } from "../entities/Orders";
import { Users as ModelUser } from "../entities/Users";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      street_address,
      latitude,
      longitude,
      accuracy,
      altitude_accuracy,
      speed,
      heading,
      altitude,
      iduser_delivery,
      iduser_patient,
      iduser_logistic,
      order,
    } = req.body;

    const model = new Model();

    const id_delivery: any = await ModelUser.findOne({where:[{ id: String(iduser_delivery) },{ document: Number(iduser_delivery) }]});
    const id_patient: any = await ModelUser.findOne({where:[{ id: String(iduser_patient) },{ document: Number(iduser_delivery) }]});
    const id_logistic: any = await ModelUser.findOne({where:[{ id: String(iduser_logistic) },{ document: Number(iduser_delivery) }]});

    model.streetAddress = street_address;
    model.latitude = latitude;
    model.longitude = longitude;
    model.accuracy = accuracy;
    model.altitudeAccuracy = altitude_accuracy;
    model.speed = speed;
    model.heading = heading;
    model.altitude = altitude;
    model.user_delivery = id_delivery;
    model.user_logistics = id_logistic;
    model.user_patient = id_patient;
    model.order = order;
    await model.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const response = await Model.find({
      relations: { 
        user_delivery: true, 
        user_logistics: true, 
        user_patient: true
      },
    });
    return res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// export const updateLocationById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     let param = await Model.findOne({
//       where: { id: id },
//     });
//     if (!param) return res.status(404).json({ error: "param not found" });
//     const {
//       street_address,
//       latitude,
//       longitude,
//       accuracy,
//       altitude_accuracy,
//       speed,
//       heading,
//       altitude,
//     } = req.body;
//     const json = {
//       street_address: street_address,
//       latitude: latitude,
//       longitude: longitude,
//       accuracy: accuracy,
//       altitude_accuracy: altitude_accuracy,
//       speed: speed,
//       heading: heading,
//       altitude: altitude,
//     };
//     Model.update({ id: id }, json);
//     return res.sendStatus(204);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// };

// export const getLocationById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     let param = await Model.findOne({
//       where: { id: id },
//       relations: { user: true },
//     });
//     if (!param) return res.status(404).json({ error: "param not found" });
//     return res.json(param);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// };

// export const deleteLocationById = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     let param = await Model.delete({ id: id });

//     if (!param) return res.status(404).json({ error: "param not found" });

//     const result = await Model.delete({ id: id });
//     console.log(result);
//     if (!result.affected) return res.status(204).send("deleted param");
//     else return res.sendStatus(204);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// };
