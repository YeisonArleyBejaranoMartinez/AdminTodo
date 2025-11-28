import prisma from "@/prisma.config";
import { NextResponse, NextRequest } from "next/server";
import { object, string, boolean } from "yup";
interface Segments {
  params: { id: string };
}
export async function GET(request: Request, { params }: Segments) {
  const id = params.id;
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return NextResponse.json(
      { error: `todo con el id ${id} no existe` },
      { status: 404 }
    );
  }
  return NextResponse.json(todo);
}
const putSchema = object({
  complete: boolean().optional(),
  description: string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const id = params.id;
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    return NextResponse.json(
      { error: `todo con el id ${id} no existe` },
      { status: 404 }
    );
  }
  const { complete, description } = await putSchema.validate(
    await request.json()
  );
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      complete,
      description,
    },
  });
  return NextResponse.json(updatedTodo);
}
