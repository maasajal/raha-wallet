import rahaWalletLogo from "./assets/rahaWalletLogo.png";

function App() {
  return (
    <div className="text-center space-y-20 font-Roboto">
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={rahaWalletLogo}
            className="logo mx-auto"
            alt="Raha Wallet logo"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold font-Montserrat">Raha Wallet</h1>
      <p className="read-the-docs">
        Welcome to Raha Wallet a Mobile Finance Service (MFS)!
      </p>
    </div>
  );
}

export default App;
