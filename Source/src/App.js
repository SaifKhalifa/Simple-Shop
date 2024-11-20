import './App.css';
import Card from './Components/Card';
import NavBar from './Components/Common/NavBar';
import SiteHead from './Components/SiteHeader';


function App() {
  return (
    <> 
      <NavBar />
      <SiteHead/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            <Card 
              originalPrice = {10} 
              discountPercent = {0.25} 
              productTitle = "prdct1"
            />
            
            <Card 
              productImageSource="https://dummyimage.com/450x300/ff08ff/0011ff" 
              productTitle = "" 
              originalPrice = {135000} 
              discountPercent = {0.55} 
              buttonText = "Let me have this product"
            />
            
            <Card src="youtubrweibfebf.com" topic="Music" class="Music"/>
            
            <Card />
            <Card />
            <Card />            
            <Card />
            <Card />      
            
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </>
  );
}

export default App;
