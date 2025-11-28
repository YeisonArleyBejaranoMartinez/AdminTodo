// TODO  rag se usa para generar el codigo inicial
import prisma from "@/app/api/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await prisma.todo.deleteMany(); //esto es igual a delete * from todo
  const todo = await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma 1", complete: true },
      { description: "Piedra del alma 2" },
      { description: "Piedra del alma 3" },
      { description: "Piedra del alma 4" },
      { description: "Piedra del alma 5" },
    ],
  });
  console.log(todo);
  return NextResponse.json({ message: "seed Executed" });
}
