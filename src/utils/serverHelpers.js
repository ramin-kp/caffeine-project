import connectToDB from "@/configs/connectToDB";
import userModel from "@/models/User";
const { cookies } = require("next//headers");
const { verifyAccessToken } = require("./auth");

const authUser = async () => {
  await connectToDB();
  const token = cookies().get("token");
  let user = null;
  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      const userData = await userModel.findOne(
        { email: tokenPayload.email },
        "-__v -password"
      );
      user = JSON.parse(JSON.stringify(userData));
    } else {
      user = null;
    }
  }
  return user;
};

export { authUser };
