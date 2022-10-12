import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home';
import { Courses } from './pages/courses'
import { CourseDetail } from './pages/courseDetail'
import { Students } from './pages/students'
import { NewCourseForm } from './components/newCourseForm'
import { NewStudentForm } from './components/newStudentForm'
import { BestStudent } from "./pages/bestStudent";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { StrictMode } from "react";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        },
        secondary: {
            main: "#575757"
        }
    }
})


export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}> </Route>
                    <Route exact path='/courses' element={<Courses />}> </Route>
                    <Route exact path='/courses/:id' element={<CourseDetail />}> </Route>
                    <Route exact path='/courses/:id/students' element={<Students />}> </Route>
                    <Route exact path='/courses/:id/bestStudent' element={<BestStudent />}> </Route>
                    <Route exact path='/courses/newCourse' element={<NewCourseForm />}> </Route>
                    <Route exact path='/courses/:id/students/newStudent' element={<NewStudentForm />}> </Route>
                </Routes>
            </BrowserRouter>
            <Typography
                marginTop={15}
                align="center"
                variant="h7"
                color="secondary"
                component="div">
                DBLandIT © 2022
                Todos los derechos reservados
            </Typography>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);

