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
import {
  AlignLeft,
  AlignRight,
  CircleUser,
  KeyRound,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Api } from "@/services/Api";

const formSchema = z
  .object({
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // quiero usar todos los campos menos confirmPassword
    const { confirmPassword, ...req } = data;
    const res = await Api.post("/register", req);
    console.log(res);
    if (res.status === 201) {
      navigate("/auth/login");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url(./src/assets/image.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Card className="w-full max-w-2xl p-8 shadow-lg rounded-lg bg-white">
        <CardHeader className="mb-4 text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Registrarse
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-around">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <CircleUser />
                        <span>Usename</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormDescription>Put on your username</FormDescription>
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
              </div>
              <div className="flex justify-around">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <AlignLeft />
                        <span>FirstName</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormDescription>Put on your first name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <AlignRight />
                        <span>Last Name</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormDescription>Put on your name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-around">
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
              </div>
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

export default Register;
