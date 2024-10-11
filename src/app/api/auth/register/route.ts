const { NextResponse } = require("next/server");
import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
	try {
		const { email, name, password } = await req.json();
		const userFound = await db.user.findUnique({
			where: {
				email,
			},
		});
		if (userFound) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 },
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await db.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
		return NextResponse.json(newUser);
	} catch (error) {
		NextResponse.error(error);
	}
}
