import axios from "axios";
import userModel from "../models/userModel.js";

const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const hf_api_key = process.env.HF_API_KEY; // Your Hugging Face API Key
    const model = "openfree/flux-chatgpt-ghibli-lora"; // Your Hugging Face model

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        inputs: prompt,
        parameters: { },
      },
      {
        headers: {
          Authorization: `Bearer ${hf_api_key}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export { generateImage };
