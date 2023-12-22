import Form from "../../model/form/form.js";
import UserForm from "../../model/responseForm/response.js";

export const getAllForms = async (req, res) => {
  try {
    const result = await Form.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const createForm = async (req, res) => {
  try {
    Form.create(req.body)
      .then((result) => res.status(200).json(result))
      .catch((error) =>
        res.status(500).json({ error: "Internal Server Error" })
      );
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getFormById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Form.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const submitUserResponse = (req, res) => {
  try {
    const { formId, ...responses } = req.body;

    const userForm = new UserForm({
      formId,
      responses: Object.entries(responses).map(([name, value]) => ({
        name,
        value,
      })),
    });

    userForm
      .save()
      .then(() => res.json({ message: "Form submitted successfully!" }))
      .catch((error) => res.status(500).json({ error }));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
