import React from 'react'
import uid from 'uid'
const CourseAddForm = (props) => (
    <form onSubmit={props.onAddCourse}>
        <input type="text" placeholder="Nombre del curso" name="name" />
        <input type="text" placeholder="Profesor" name="teacher" />
        {/*<input type="hidden" name="id" value={Math.floor(Math.random()*100)}/> Para mandar numeros enteros aleatorios*/}
        <input type="hidden" name="id" value={uid(10)}/>
        <input type="submit" value="Guardar"/>
    </form>
)

export default CourseAddForm