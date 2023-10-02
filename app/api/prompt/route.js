import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};


// export const GET = async (request, { params }) => {
  
//   try {
//     await connectToDB();
//     const res = await Prompt.aggregate([
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
//       }
//     ]);
    //   const prompts = await Prompt.find({ tag: params.searchText }).populate(
    //     "creator"
    //   );

    //   if (!prompts) return new Response("Prompts Not Found", { status: 404 });
    // console.log(res);
//     return new Response(JSON.stringify(res), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };
