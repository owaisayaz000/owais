document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top border-bottom">
<div class="container">
    <a class="navbar-brand pe-md-5" href="#"><img src="assets/logo.png" alt="logo" width="170px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="About.html">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Gallery</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Handicrafts
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item bb" href="#">Iron Handicrafts</a></li>
                    <li><a class="dropdown-item bb" href="#">Glass Handicrafts</a></li>
                    <li><a class="dropdown-item bb" href="#">Brass Handicrafts</a></li>
                    <li><a class="dropdown-item bb" href="#">Wood Handicrafts</a></li>
                    <li><a class="dropdown-item bb" href="#">Aluminium Handicrafts</a></li>
                    <li><a class="dropdown-item bb" href="#">Handicrafts Decorative</a></li>
                    <li><a class="dropdown-item bb" href="#">Tables wares</a></li>
                    <li><a class="dropdown-item bb" href="#">Home Decorative</a></li>
                    <li><a class="dropdown-item" href="#">Table Accessories</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">FAQs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="Contact.html">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Site Map</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`

