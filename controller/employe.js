import Employee from "../models/employee.js";
import parseAndSend from "../util/responseWraper.js";

export const getEmpData = async (req, res) => {
  try {
    const empData = await Employee.find({});

    return parseAndSend(res, true, 200, "emplyee data", empData);
  } catch (error) {
    console.log(error);
    return parseAndSend(res, false, 500, "somthing went wrong at our end");
  }
};
export const createEmpData = async (req, res) => {
  try {
    const { firstName, lastName, email, age, salary } = req.body;
    console.log(req.body);
    const newEmp = await new Employee({
      firstName,
      lastName,
      email,
      age,
      salary,
    }).save();
    if (!newEmp) {
      parseAndSend(res, false, 400, "somthing went wrong with our DB");
    }
    const empData = await Employee.find({});

    return parseAndSend(res, true, 200, "New employee Created", empData);
  } catch (error) {
    console.log(error);
    return parseAndSend(res, false, 500, "somthing went wrong at our end");
  }
};

export const UpdateEmpData = async (req, res) => {
  try {
    const { _id, firstName, lastName, email, age, salary } = req.body;

    const nModified = await Employee.updateOne(
      { _id },
      {
        $set: { firstName, lastName, email, age, salary },
      }
    );

    if (!nModified.modifiedCount) {
      return parseAndSend(
        res,
        false,
        502,
        "somthing went wrong with our DB not able to update"
      );
    }
    const empData = await Employee.find({});

    return parseAndSend(res, true, 200, "employee Updated", empData);
  } catch (error) {
    console.log(error);
    return parseAndSend(res, false, 500, "somthing went wrong at our end");
  }
};

export const deleteEmpData = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    await Employee.deleteOne({ _id: id });
    const empData = await Employee.find({});
    return parseAndSend(res, true, 200, "employee deleted", empData);
  } catch (error) {
    console.log(error);
    return parseAndSend(res, false, 500, "somthing went wrong at our end");
  }
};
