const Contact = require("../models/Contact");
const asyncHandler = require("../middleware/asyncHandler");
const sendContactEmail = require("../utils/sendEmail");

const createContact = asyncHandler(async (req, res) => {
  const {
    name,
    mobile,
    email,
    subject,
    message,
  } = req.body;

  /* ==========================================
     Save contact in MongoDB
  ========================================== */

  const contact = await Contact.create({
    name,
    mobile,
    email,
    subject,
    message,
  });

  /* ==========================================
     Send email notification
     Email failure will NOT delete the contact
  ========================================== */

  try {
    await sendContactEmail({
      name,
      mobile,
      email,
      subject,
      message,
    });
  } catch (emailError) {
    console.error(
      "CONTACT EMAIL ERROR:",
      emailError.message
    );
  }

  /* ==========================================
     Response
  ========================================== */

  return res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data: {
      id: contact._id,
    },
  });
});

module.exports = {
  createContact,
};