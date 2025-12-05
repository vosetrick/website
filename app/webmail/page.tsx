"use client";

import { useEffect } from "react";

export default function WebmailPage() {
  useEffect(() => {
    window.location.href = "https://mail.hostinger.com/v2/auth/login";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-xl text-gray-600">Mengalihkan ke Webmail...</p>
      </div>
    </div>
  );
}
