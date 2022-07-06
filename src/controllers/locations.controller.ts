import { Request, Response } from "express";
import { Locations as Model } from "../entities/Locations";
import { Users as ModelUser } from "../entities/Users";

export const createLocation = async (req: Request, res: Response) => {
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
      iduser,
    } = req.body;

    const model = new Model();
    const id: any = await ModelUser.findOne({
      where: { id: iduser },
    });

    model.street_address = street_address;
    model.latitude = latitude;
    model.longitude = longitude;
    model.accuracy = accuracy;
    model.altitude_accuracy = altitude_accuracy;
    model.speed = speed;
    model.heading = heading;
    model.altitude = altitude;
    model.user = id;
    await model.save();
    res.send({ req: req.body });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const response = await Model.find({
      relations: { user: true },
    });
    return res.json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const updateLocationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOne({
      where: { id: id },
    });
    if (!param) return res.status(404).json({ error: "param not found" });
    const {
      street_address,
      latitude,
      longitude,
      accuracy,
      altitude_accuracy,
      speed,
      heading,
      altitude,
    } = req.body;
    const json = {
      street_address: street_address,
      latitude: latitude,
      longitude: longitude,
      accuracy: accuracy,
      altitude_accuracy: altitude_accuracy,
      speed: speed,
      heading: heading,
      altitude: altitude,
    };
    Model.update({ id: id }, json);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getLocationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let param = await Model.findOne({
      where: { id: id },
      relations: { user: true },
    });
    if (!param) return res.status(404).json({ error: "param not found" });
    return res.json(param);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteLocationById = async (req: Request, res: Response) => {
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
