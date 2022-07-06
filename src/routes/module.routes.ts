import { Router } from "express";
import { createLocation, deleteLocationById, getLocationById, getLocations, updateLocationById } from "../controllers/locations.controller";
import { createOrder, getOrders } from "../controllers/orders.controller";
import { createRole, deleteRoleById, getRoleById, getRoles, updateRoleById } from "../controllers/roles.controller";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "../controllers/users.controller";
const router = Router();

///CREATE USER
router.post("/api/user/create", createUser);
/**
 * @openapi
 * /api/user/create:
 *    post:
 *      tags:
 *        - Users
 *      summary: "Create "
 *      description: Register new
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/users"
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///VIEW USER
router.get("/api/users", getUsers);
/**
 * @openapi
 * /api/users:
 *    get:
 *      tags:
 *        - Users
 *      summary: "Get"
 *      description: List
 *
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */


///GET USER BY ID
router.get('/api/user/:id',getUserById)

/**
 * @openapi
 * /api/user/{id}:
 *    get:
 *      tags:
 *        - Users
 *      summary: "View"
 *      description: List
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Succes
 *        '500':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///UPDATE USER
router.put("/api/user/:id", updateUserById);
/**
 * @openapi
 * /api/user/{id}:
 *    put:
 *      tags:
 *        - Users
 *      summary: "Update"
 *      description: Update by id
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/users"
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///DELETE USER
router.delete("/api/user/:id", deleteUserById);
/**
 * @openapi
 * /api/user/{id}:
 *    delete:
 *      tags:
 *        - Users
 *      summary: "Delete"
 *      description: Delete by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Success
 *      security:
 *       - bearerAuth: []
*/





///CREATE ROLE
router.post("/api/rol/create", createRole);
/**
 * @openapi
 * /api/rol/create:
 *    post:
 *      tags:
 *        - Roles
 *      summary: "Create"
 *      description: Register new
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/roles"
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///VIEW ROLE
router.get("/api/roles", getRoles);
/**
 * @openapi
 * /api/roles:
 *    get:
 *      tags:
 *        - Roles
 *      summary: "Get"
 *      description: List
 *
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */


///GET ROLE BY ID
router.get('/api/rol/:id',getRoleById)

/**
 * @openapi
 * /api/rol/{id}:
 *    get:
 *      tags:
 *        - Roles
 *      summary: "View"
 *      description: List
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Succes
 *        '500':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///UPDATE ROLE
router.put("/api/rol/:id", updateRoleById);
/**
 * @openapi
 * /api/rol/{id}:
 *    put:
 *      tags:
 *        - Roles
 *      summary: "Update"
 *      description: Update by id
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/roles"
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///DELETE ROLE
router.delete("/api/rol/:id", deleteRoleById);
/**
 * @openapi
 * /api/rol/{id}:
 *    delete:
 *      tags:
 *        - Roles
 *      summary: "Delete"
 *      description: Delete by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Success
 *      security:
 *       - bearerAuth: []
*/








///CREATE LOCATION
router.post("/api/location/create", createLocation);
/**
 * @openapi
 * /api/location/create:
 *    post:
 *      tags:
 *        - Locations
 *      summary: "Create"
 *      description: Register new
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/locations"
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///VIEW LOCATION
router.get("/api/locations", getLocations);
/**
 * @openapi
 * /api/locations:
 *    get:
 *      tags:
 *        - Locations
 *      summary: "Get"
 *      description: List
 *
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///GET LOCATION BY ID
router.get('/api/location/:id',getLocationById)

/**
 * @openapi
 * /api/location/{id}:
 *    get:
 *      tags:
 *        - Locations
 *      summary: "View"
 *      description: List
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Succes
 *        '500':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///UPDATE LOCATION
router.put("/api/location/:id", updateLocationById);
/**
 * @openapi
 * /api/location/{id}:
 *    put:
 *      tags:
 *        - Locations
 *      summary: "Update"
 *      description: Update by id
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/locations"
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///DELETE LOCATION
router.delete("/api/location/:id", deleteLocationById);
/**
 * @openapi
 * /api/location/{id}:
 *    delete:
 *      tags:
 *        - Locations
 *      summary: "Delete"
 *      description: Delete by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: id Numeric required
 *            schema:
 *              type: string
 *      responses:
 *        '204':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Success
 *      security:
 *       - bearerAuth: []
*/










///CREATE ORDER
router.post("/api/order/create", createOrder);
/**
 * @openapi
 * /api/order/create:
 *    post:
 *      tags:
 *        - Orders
 *      summary: "Create"
 *      description: Register new
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/orders"
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */

///VIEW LOCATION
router.get("/api/orders", getOrders);
/**
 * @openapi
 * /api/orders:
 *    get:
 *      tags:
 *        - Orders
 *      summary: "Get"
 *      description: List
 *
 *      responses:
 *        '200':
 *          description: Success
 *        '500':
 *          description: Error
 *        '404':
 *          description: Error
 *      security:
 *       - bearerAuth: []
 */




 export default router;
