"use client";

/* 
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@//components/ui/input';
import { Mail, KeyRound } from 'lucide-react';

const Login: React.FC = () => {
  // Estados para los campos de entrada
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  

  // Manejo de envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Redirigir a la URL del dashboard
    window.location.href = '/dashboard';
    // Aquí se pueden implementar las validaciones y la lógica de autenticación
    alert(`Email: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white">
        <CardHeader className="mb-4 text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className=" text-sm font-medium text-gray-700 flex">
                <Mail className='mr-2' /> Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="flex text-sm font-medium text-gray-700">
                <KeyRound className='mr-2' />Contraseña
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
        <CardFooter className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿Olvidaste tu contraseña?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Recupérala aquí
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login; */

const Login: React.FC = () => {
  return (
    <>
      <p>Hola</p>
      <a href="/dashboard">Ir a demo</a>
    </>
  )};

export default Login;