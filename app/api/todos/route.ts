import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/lib/prisma";
import { object, string, boolean } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? 10;
  const skip = searchParams.get("skip") ?? 0;
  if (isNaN(Number(take)))
    return NextResponse.json(
      { error: "Take tiene que ser un numero" },
      { status: 400 }
    );
  if (isNaN(Number(skip))) {
    return NextResponse.json(
      { error: "Skip tiene que ser un numero" },
      { status: 400 }
    );
  }
  const todos = await prisma.todo.findMany({
    take: Number(take),
    skip: Number(skip),
  });
  return NextResponse.json(todos);
}
const postSchema = object({
  description: string().optional(),
  complete: boolean().optional().default(false), //!mostrar algo interesante
});
export async function POST(request: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({ data: { description, complete } });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
