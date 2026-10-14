import { useLocation } from "react-router"

export default function Header() {
    const param =useLocation()
    console.log(param.pathname)
  return (
    <main className="lg:hidden bg-primary p-5 text-white text-1xl flex gap-4 border-b border-gray min-w-screen">
      {param.pathname == "/dashboard" && (
        <>
          <img
            src="https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg"
            alt="profile"
            className="rounded-full h-10 w-10"
          />
          <div className="text-sm">
            <div>Hallo,</div>
            <div>Sigma Cat Wizard</div>
          </div>
        </>
      )}

      {param.pathname == "/transfer" && (
        <div className="h-10 text-xl pt-1.5">Transfer</div>
      )}

      {param.pathname == "/history" && (
        <div className="h-10 text-xl pt-1.5">History</div>
      )}

      {param.pathname == "/topup" && (
        <div className="h-10 text-xl pt-1.5">Top Up</div>
      )}

      {param.pathname == "/profile" && (
        <div className="h-10 text-xl pt-1.5">Profile</div>
      )}
    </main>
  );
}
