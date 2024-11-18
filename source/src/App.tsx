import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { TopicML } from './pages/Topics/MachineLearning/TopicML';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/machine-learning" element={<TopicML />} />
      </Routes>
    </Router>
  );
}

export default App;