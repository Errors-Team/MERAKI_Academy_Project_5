const connection = require("../database/db");

// This function creates new Service
const createNewService = (req, res) => {
  const { title, description, image } = req.body;

  const query = `INSERT INTO services (title,description, image ) VALUE (?,?,?)`;
  const data = [title, description, image];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    res.status(201).json({
      success: true,
      message: `Success Service Created`,
      result: result,
    });
  });
};

// This function returns all services
const getAllServices = (req, res) => {
  const query = `SELECT * FROM services `;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    if (!result) {
      return res.status(200).json({
        success: false,
        message: `No Services Yet`,
      });
    }
    res.status(200).json({
      success: true,
      message: `All the Services Available`,
      result: result,
    });
  });
};

// This function returns Service By Id
const getServiceById = (req, res) => {};

// This function to update Service by id
const updateServiceById = (req, res) => {};

// This function to delete Service By Id
const deleteServiceById = (req, res) => {};
module.exports = {
  createNewService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
};