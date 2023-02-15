import Nav from "../Nav";
import { BiMenu } from "react-icons/bi";

function Header() {
    return (
        <header id="header">
          <div class="container-fluid">
            <div class="logo">
              <h1><a href="index.html">Siimple</a></h1>
            </div>
            <button type="button" class="nav-toggle"><BiMenu /></button>
            <Nav />
          </div>
        </header>
    )
}

export default Header;