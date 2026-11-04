import { Show, SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";

function App() {
  const {isLoaded} = useAuth();

  if (!isLoaded) return <PageLoader/>;

  return (
    <Layout>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <p className="text-red-500 font-extrabold">Hello Pogi</p>
      <button className="btn btn-primary">click me</button>
      <button className="btn btn-secondary">click me hehe</button>
      <button className="btn btn-outline">click me hehe</button>
    </Layout>
  );
}

export default App
