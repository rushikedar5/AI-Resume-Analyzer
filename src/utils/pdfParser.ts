import pdf from "pdf-parse";
export const extractTextFromPDF = async (buffer: Buffer) => {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (err) {
    console.error("PDF PARSE ERROR:", err);
    throw err;
  }
};