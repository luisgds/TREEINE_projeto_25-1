"use client";
import { Card } from "./_componentshomepage/card";

export default function Homepage() {
  return (
    <main>
      <div className="w-100vh h-100vh bg-blue-400 mx-auto flex max-w-sm">
        <h1> Bem vindos</h1>
        
        <Card/>
      </div>
    </main>
  );
}