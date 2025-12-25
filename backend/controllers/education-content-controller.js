// API to get all education content
const getAllEducationContent = async (req, res) => {
  try {
    const educationContents = await find({});
    res.json({
      success: true,
      message: "Education content data retrived successfully",
      educationContents,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive education content data",
      error: error,
    });
  }
};

// API to add new education content
const AddEducationContent = async (req, res) => {
  const { title, createdBy, description } = req.body;

  try {
    await create({
      title,
      createdBy,
      description,
    }).then(() =>
      res.json({
        success: true,
        message: "Education content data added successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add education content data",
      serverMessage: error,
    });
  }
};

// API to delete education content
const DeleteEducationContent = async (req, res) => {
  const { _id } = req.query;
  try {
    await findByIdAndDelete(_id);

    res.json({
      success: true,
      message: "Education content data deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete education content data",
      error,
    });
  }
};

// API to edit education content
const EditEducationContent = async (req, res) => {
  const { id, title, createdBy, description } = req.body;
  try {
    await findByIdAndUpdate(id, {
      title,
      createdBy,
      description,
    });

    res.json({
      success: true,
      message: "Education content data updated successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update education content data",
      error,
    });
  }
};

export {
  AddEducationContent,
  getAllEducationContent,
  DeleteEducationContent,
  EditEducationContent,
};
