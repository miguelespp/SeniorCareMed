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
import { KeyRound, Mail } from "lucide-react";
import bg from "@/assets/image.png";
import { Navigate, useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { email, password } = data;
    // const res = await fetch("/api/auth/login", {
    // 	method: "POST",
    // 	body: JSON.stringify({ email, password }),
    // 	headers: {
    // 		"Content-Type": "application/json",
    // 	},
    // });
    // const resJson = await res.json();
    navigate("/dashboard");
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
            Iniciar Sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Mail />
                      <span>Username</span>
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Registrate aquí
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
