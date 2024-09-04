// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import AddQuote from './components/AddQuote';
import PDFPreview from './components/PDFPreview';
import Home from './components/Home';

function App() {
    console.log("App is rendering");
    return (
        <Router>
            <Routes>
                <Route path="/settings" element={<Settings />} />
                <Route path="/addQuote" element={<AddQuote />} />
                <Route path="/pdf-preview" element={<PDFPreview />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
