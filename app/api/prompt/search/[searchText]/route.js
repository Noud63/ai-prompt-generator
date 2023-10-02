// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const GET = async (request, { params }) => {
//     console.log(params)
//   try {
//     await connectToDB();

//     const prompts = await Prompt.find({ tag: params.searchText }).populate("creator");

//     if (!prompts) return new Response("Prompts Not Found", { status: 404 });

//     return new Response(JSON.stringify(prompts), { status: 200 });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };

// export const GET = async (request, { params }) => {
  
//   try {
//     await connectToDB();
//           const res = await Prompt.aggregate([
//             {
//               $lookup: {
//                 from: "users",
//                 localField: "creator",
//                 foreignField: "_id",
//                 as: "user",
//               },
//             },
//             {
//               $unwind: "$user",
//             },
//             {
//               $match: {
//                 $or: [
//                   { "user.username": params.searchText },
//                   { prompt: { $regex: params.searchText, $options: "i" } },
//                   { tag: params.searchText },
//                 ],
//               },
//             },
//           ]);

//     return new Response(JSON.stringify(res), { status: 200 });
    
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// };
