import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { TopicPage } from './pages/Topics/TopicPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicPage />} />
      </Routes>
    </Router>
  );
}

export default App;