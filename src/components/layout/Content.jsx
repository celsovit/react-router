import { Route, Routes } from 'react-router-dom'

import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'

import './Content.css'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content