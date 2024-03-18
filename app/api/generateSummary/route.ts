import openai from "@/openai";
import { Console } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();

  // communicating with openAI
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    n: 1,
    messages: [
      {
        role: "system",
        content:
          "When responding alwasy say welcome to the trellow app, limit the response to 200 characters",
      },
      {
        role: "user",
        content: ` Hi there, provide a summary og the following todos. count how many todos are in each category, such as to do, in progress and done. then tell
        here is the data" ${JSON.stringify(todos)}`,
      },
    ],
  });
  console.log("response from ai loading ......");
  return NextResponse.json(response.choices[0].message);
}
