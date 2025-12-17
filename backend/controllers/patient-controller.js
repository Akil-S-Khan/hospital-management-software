import mongoose from "mongoose";
import Patients from "../models/patient-models.js";


let getAllPatient = async (req, res) => {
    try {
        const patients = await Patients.find({});

        res.json({
            success: true,
            message: "PATIENTS DATA RETRIEVED SUCCESSFULLY"
        })
    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO RETRIEVED PATIENT DATA"
        });
    }
};

let AddPatients = async (req, res) => {
      let { name,age,gender,bloodGroup,phone,email }=  req.body
      console.log("REQ BODY:", req.body);

    try {
          await Patients.create({
             name,
             age,
             gender,
             bloodGroup,
             phone,
             email 
          }).then(() => {
            res.json({
                success: true,
                message: "PATIENTS DATA ADDED SUCCESSFULLY"
            })
          })
    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO ADDED PATIENT DATA"
        });
    }
};

// let UpdatePatients = async (req, res) => {
//       let { name,age,gender,bloodGroup,phone,email }=  req.body
//     try {
//           await Patients.findByIdAndUpdate({
//              name,
//              age,
//              gender,
//              bloodGroup,
//              phone,
//              email 
//           }).then(() => {
//             res.json({
//                 success: true,
//                 message: "PATIENTS DATA ADDED SUCCESSFULLY"
//             })
//           })
//     } catch (error) {
//         res.json({
//             success: false,
//             message: "FAILED TO ADDED PATIENT DATA"
//         });
//     }
// };

let UpdatePatients = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedPatients = await Patients.findByIdAndUpdate(
            id, req.body, { new: true }
        );

        if (!updatedPatients) {
            return res.json({
                success: false,
                message: "PATIENT NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "PATIENT DATA UPDATED SUCCESSFULLY",
            data: updatedPatients
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO UPDATE PATIENT DATA",
            error: error.message
        });
    }
};

let DeletePatients = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPatient = await Patients.findByIdAndDelete(id);

        if (!deletedPatient) {
            return res.json({
                success: false,
                message: "PATIENT NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "PATIENT DATA DELETED SUCCESSFULLY",
            data: deletedPatient
        });

    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO DELETE PATIENT DATA",
            error: error.message
        });
    }
};



// let DeletePatients = async (req, res) => {
//       let { name,age,gender,bloodGroup,phone,email }=  req.body
//     try {
//           await Patients.findByIdAndDelete({
//              name,
//              age,
//              gender,
//              bloodGroup,
//              phone,
//              email 
//           }).then(() => {
//             res.json({
//                 success: true,
//                 message: "PATIENTS DATA ADDED SUCCESSFULLY"
//             })
//           })
//     } catch (error) {
//         res.json({
//             success: false,
//             message: "FAILED TO ADDED PATIENT DATA"
//         });
//     }
// };``

export { getAllPatient, AddPatients, UpdatePatients, DeletePatients};