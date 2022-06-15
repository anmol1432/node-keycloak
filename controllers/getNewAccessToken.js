
const getNewToken = async (req, res) => {
  try {
    console.log("----->", req);
    return res.status(200).json({ message: "your token" });
  } catch (error) {
    console.log("SEREVER ERROR:- ", error);
  }
};

module.exports = getNewToken;
