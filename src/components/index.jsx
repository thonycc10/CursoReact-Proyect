import React, {Component} from 'react'
import PropTypes from 'prop-types';
import CoursesList from "./CoursesList";
import CourseAddForm from "./CourseAddForm";

class App extends Component {
    constructor(...props){
        super(...props);

        this.state = {
            courses: [
        { id: 1, name: 'React desde cero', teacher: 'Jhonatan Mircha'},
        { id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quirog'},
    ]}
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this) // se usa para la buena practica de manejo
    }

    handleOnAddCourse(event) { // es necesario para crear este metodo se agrega el event o abreviado como guste
        // alert('Event en React')
        event.preventDefault( )// par que no se procese el formulario / recibe los valores del formulario

        let form = event.target,
            course = {
            id: form.id.value,
            name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
            teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
        }

        //actualizar estado
        this.setState({ // concat - crea un nuevo dentro de un arreglo buena practica
            courses: this.state.courses.concat([course])
        })

        form.reset() // borra el valor de los formularios.
    }

    render() {
        return( // te manda error si agregas dos nodos(etiquetas) y solo debe ser uno solo. Para que no sucede esto se agrega <div></div>
            <div>
                <CourseAddForm onAddCourse={this.handleOnAddCourse}/>
                <CoursesList courses={this.state.courses}/>
            </div>

        ) //solo retorna un nodo hijo
    }
}

App.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
}
App.defaultProps = {
    name: 'Curso Desconocido',
    teacher: 'Profesor no Asignado'
}

export default App