import './App.css';
import { SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

function App() {

  return (
    <>

      <h1>Welcome To page</h1>
      <SignedOut>
        <SignInButton>
          <button>Click me</button>
        </SignInButton>
      </SignedOut>
     

    </>
  );
}

export default App;
