import Left from './itemLeft.js';
import Right from './ItemRight.js';

function itemPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Left sellerName="Sample student" sellerImage="https://i.natgeofe.com/n/6490d605-b11a-4919-963e-f1e6f3c0d4b6/sumatran-tiger-thumbnail-nationalgeographic_1456276.jpg"/>
        <Right/>
      </header>
    </div>
  );
}

export default itemPage;