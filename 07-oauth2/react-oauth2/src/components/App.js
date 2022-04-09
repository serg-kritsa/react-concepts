import Header from './header/Header';
import StreamList from './streams/StreamList';

const App = () => {
  return (
    <div className="ui container">
      <div>
        <Header />
        <StreamList />
      </div>
    </div>
  );
};
export default App;
