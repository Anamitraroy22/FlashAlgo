import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoogleLogo } from 'phosphor-react';

const AuthModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center mt-8">
      <Button
        onClick={() => setOpen(true)}
        className="rounded-full px-6 py-3 text-white font-semibold bg-purple-600 hover:bg-purple-700 transition"
      >
        Get Started Today
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-sm relative">
            <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">Welcome to FlashAlgo</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Sign in to start using the AI-powered trading dashboard
            </p>

            <form className="space-y-4">
              <Input placeholder="Email" type="email" className="rounded-md" />
              <Input placeholder="Password" type="password" className="rounded-md" />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md">
                Login
              </Button>
            </form>

            <div className="my-4 text-center text-sm text-gray-400">or</div>

            <Button className="w-full flex items-center justify-center gap-2 border rounded-md text-sm font-medium py-2 hover:bg-gray-50">
              <GoogleLogo size={20} /> Sign in with Google
            </Button>

            <p className="text-xs text-gray-400 mt-6 text-center">
              By signing in, you agree to our Terms & Privacy Policy.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};