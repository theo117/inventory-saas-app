import SignInForm from "./sign-in-form";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="w-full max-w-md rounded bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-semibold">Sign In</h1>
        <SignInForm />
      </main>
    </div>
  );
}
