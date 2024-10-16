"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@//components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CircleUser, KeyRound, Mail } from "lucide-react";
import bg from "@/assets/image.png";

const formSchema = z.object({
    name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});
    

const Login = () => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
            name: "",
			email: "",
			password: "",
            confirmPassword: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const { name, email, password } = data;
        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resJson = await res.json();
		console.log(resJson);
	};

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-gray-100"
			style={{
				backgroundImage: `${bg.src}`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<Card className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white">
				<CardHeader className="mb-4 text-center">
					<CardTitle className="text-2xl font-bold text-gray-800">
						Registrarse
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center space-x-2">
                                            <CircleUser />
                                            <span>Nombre</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="John Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Put on your name</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex items-center space-x-2">
											<Mail />
											<span>Email</span>
										</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="example@gmail.com"
												{...field}
											/>
										</FormControl>
										<FormDescription>Put on your email</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex items-center space-x-2">
											<KeyRound />
											<span>Password</span>
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="*********"
												{...field}
											/>
										</FormControl>
										<FormDescription>Put on your password</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center space-x-2">
                                            <KeyRound />
                                            <span>Confirm Password</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="*********"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Confirm your password</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						¿Ya tiene una cuenta?{" "}
						<a href="/auth/login" className="text-blue-600 hover:underline">
							Inicie Sesion aquí
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
