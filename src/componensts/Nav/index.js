function Nav() {
    return (
        <nav class="nav-menu">
        <ul>
          <li class="active"><a href="#header" class="scrollto">Home</a></li>
          <li><a href="#about" class="scrollto">About Us</a></li>
          <li><a href="#why-us" class="scrollto">Why Us</a></li>
          <li class="drop-down"><a href="google.com">Drop Down</a>
            <ul>
              <li><a href="#1">Drop Down 1</a></li>
              <li class="drop-down"><a href="#1">Drop Down 2</a>
                <ul>
                  <li><a href="#1">Deep Drop Down 1</a></li>
                  <li><a href="#1">Deep Drop Down 2</a></li>
                  <li><a href="#1">Deep Drop Down 3</a></li>
                  <li><a href="#1">Deep Drop Down 4</a></li>
                  <li><a href="#1">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#1">Drop Down 3</a></li>
              <li><a href="#1">Drop Down 4</a></li>
              <li><a href="#1">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#contact" class="scrollto">Contact Us</a></li>
        </ul>
      </nav>
    )
}

export default Nav;

