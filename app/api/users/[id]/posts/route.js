import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// export const GET = async (request, { params }) => {

//   try {
//     await connectToDB();
//     const result = await Prompt.aggregate([
//       {
//         $lookup: {
//           from: "users",
//           localField: "creator",
//           foreignField: "_id",
//           as: "user",
//         },
//       },
//       {
//         $unwind: "$user",
//       },
//       {
//         $match:{creator: params.id },
//       },
//     ]);
//     console.log(result);
//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };
