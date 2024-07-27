import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => <div>Welcome to the Home Page</div>;
const Blog = () => <div>Welcome to the Blog Page</div>;
const Project = () => <div>Welcome to the Project Page</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
