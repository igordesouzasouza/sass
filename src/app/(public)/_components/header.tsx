import Link from "next/link";

export default function Header(){
    return(
      <header className="fixed top-0 right-0 z-[999] left-0">
        <div className="container">
          <Link href="/">
              OdontoPro
            </Link>
            <nav>
              <a href="#">Profissionais</a>
            </nav>
        </div>
      </header>
    )
  }