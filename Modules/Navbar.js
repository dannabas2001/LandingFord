export const Navbar= (contenedor)=>{
    contenedor.innerHTML=` <div class="container-fluid">
    <a  class="navbar-brand" href="./index.html"><img src="../Images/logo.png" id='main-logo' alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="../index.html">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="./Vehicles.html" >Vehicles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="./contacto.html" disabled>Fleet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="./contacto.html" disabled>Engineering</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="./About Us.html">About Ford</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="./contacto.html">Owner</a>
        </li>
        <ul class="icons" style="list-style: none; display:flex; flex-direction:row;padding-top:0.5rem">
          <li><a href="#" style="color:#003158; padding: 0 0.3rem;"><i class="fa-solid fa-arrow-right-arrow-left"></a></i></li>
          <li><a href="#"" style="color:#003158; padding: 0 0.3rem;"><i class="fa-regular fa-heart"></i></a></li>
          <li><a href="#" style="color:#003158; padding: 0 0.3rem;"><i class="fa-solid fa-user"></i></a></li>
          <li><a href="#" style="color:#003158; padding: 0 0.3rem;"><i class="fa-solid fa-cart-shopping"></i></a></li>
      </ul>

    </div>
  </div> `}