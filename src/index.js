import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home';
import { Courses } from './pages/courses'
import { CourseDetail } from './pages/courseDetail'
import { Students } from './pages/students'
import { NewCourseForm } from './components/newCourseForm'
import { NewStudentForm } from './components/newStudentForm'
import { BestStudent } from "./pages/bestStudent";


export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}> </Route>
                    <Route exact path='/courses' element={<Courses />}> </Route>
                    <Route exact path='/courses/:id' element={<CourseDetail/>}> </Route>
                    <Route exact path='/courses/:id/students' element={<Students/>}> </Route>
                    <Route exact path='/courses/:id/bestStudent' element={<BestStudent/>}> </Route>
                    <Route exact path='/courses/newCourse' element={<NewCourseForm/>}> </Route>
                    <Route exact path= '/courses/:id/students/newStudent' element={<NewStudentForm/>}> </Route>
                </Routes>
            </BrowserRouter>
            <footer>
                DBLandIT © 2022
                Todos los derechos reservados
            </footer>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

