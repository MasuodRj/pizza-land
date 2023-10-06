import Image from 'next/image'
import pizzas from '../data/pizzas.json';
import Banner from './components/Banner';
import CartBottom from './components/CartBottom';
import CartDesktop from './components/CartDesktop'
import CartItem from './components/CartItem';
import CartMobile from './components/CartMobile';
import CartMobileIcon from './components/CartMobileIcon';
import CartTop from './components/CartTop';
import CheckoutDetails from './components/CheckoutDetails';
import CrustSelection from './components/CrustSelection';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Pizza from './components/Pizza';
import PizzaDetails from './components/PizzaDetails';
import SizeSelection from './components/SizeSelection';
export default function Home() {
  return (
    <section>
      <Banner />
      <CartBottom />
      <CartDesktop />
      <CartItem />
      <CartMobile />
      <CartMobileIcon />
      <CartTop/>
      <CheckoutDetails />
      <CrustSelection/>
      <Footer />
      <Nav />
      <Pizza />
      <PizzaDetails />
      <SizeSelection />
      {pizzas.map((pizza) => (<div>{pizza.name}</div>))}
    </section>
  )
}
