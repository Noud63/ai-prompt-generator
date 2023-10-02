// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const GET = async (request, { params }) => {
//   console.log(params)
//   try {
//     await connectToDB();
//       const prompts = await Prompt.find({ tag: params.tag }).populate(
//         "creator"
//       );

//       if (!prompts) return new Response("Prompts Not Found", { status: 404 });
//     console.log(prompts);

//     return new Response(JSON.stringify(prompts), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };

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
//       },
//       {
//         $match: { tag: params.tag },
//       },
//     ]);

//     return new Response(JSON.stringify(res), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };
