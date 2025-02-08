type ContactFormData = {
  email: string;
  message: string;
};

const sendEmail = async (formData: ContactFormData) => {
  try {
    const response = await fetch("/api/resendFunction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw Error;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendEmail;
