import { getProductos } from "../Helpers/getProductos.js";
import { Footer } from "../Modules/Footer.js";
import { ModCarros} from "../Modules/ModCarros.js";
import { Navbar } from "../Modules/Navbar.js";
const Popular = document.getElementById("car-container-popular")
const FooterC= document.getElementById("footer")
const NavbarC= document.getElementById("nav")
const Trucks = document.getElementById("car-container-trucks")
const Suv = document.getElementById("car-container-suvs")
const Performance = document.getElementById("car-container-performance")
const All = document.getElementById("car-container-all")
const Cars = await getProductos()
const carpop= Cars.filter((car)=> car.popular == "yes")
const cartruck= Cars.filter((car)=> car.type == "TRUCK")
const carsuvs= Cars.filter((car)=> car.type == "SUVS")
const carperf= Cars.filter((car)=> car.type == "PERFORMANCE")

ModCarros(Cars,All)
ModCarros(carpop,Popular)
ModCarros(cartruck,Trucks)
ModCarros(carsuvs,Suv)
ModCarros(carperf,Performance)
Footer(FooterC)
Navbar(NavbarC)