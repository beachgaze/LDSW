import logo from './logos.png';
import './App.css';
import pdf from './catalog.pdf';


function App() {
  return (
    <div className="container">
   

<img alt='' class="logo" src={logo} />

   <h1 className="title">
      KUGART SERVICES <span aria-label="emoji" role="img">🔥</span>
   </h1>

<img alt='' class="img" src= 'http://ugartrade.com/wp-content/uploads/2020/11/truck-3559573_1280.jpg'/>
<br/>
<hr/><hr/>

<br/><br/>
<h2 className="title">
     CATALOG
   </h2>

<iframe alt='' src={pdf} width="100%" height="700px">
    </iframe>

<br/><br/>
<hr/>

<br/><br/>

</div>
  );
}

export default App;
