import { Link } from "react-router-dom";
import Go from "../../Assets/fast-forward.png";
import "./Users.css";
import {useEffect, useState} from "react";

function Users(){
    
    const [AddInput , setAddInput] = useState('')
    const [AddInput2 , setAddInput2] = useState('')
    const [AddInput3 , setAddInput3] = useState('')
    const [AddInput4 , setAddInput4] = useState('')
    const [course , setCourse] = useState('')

    const hendleSubmit = (e) => {
        e.preventDefault()

        const newTodo ={
            id:new Date().getTime(),
            name:AddInput,
            surname: AddInput2,
            age: AddInput3,
            phoneNumber: AddInput4,
            course: course
        }
        
        fetch(`http://localhost:3000/todos`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newTodo)
        })
        .then(data => console.log(data)) 
        e.target[0].value = null
        e.target[1].value = null
        e.target[2].value = null
        e.target[3].value = null
    }


    return(
        <div className="container">
            <div className="users">
                <h1 className="h1">Najot Ta'lim kurslariga qabul boshlandi ro'yhatdan o'ting.😀</h1>
                <div className="wrapp__box">
                    <h2 className="head">Add users</h2>
                    <select className="wrapp__select" name="" onChange={e => setCourse(e.target.value)}>
                        <option className="wrapp__option" value="course">Course</option>
                        <option className="wrapp__option" value="SMM">SMM</option>
                        <option className="wrapp__option" value="Web development">Web developer</option>
                        <option className="wrapp__option" value="Graphic designer">Graphic designer</option>
                        <option className="wrapp__option" value="Motion Graphics">Motion Graphics</option>
                        <option className="wrapp__option" value="Python course">Python course</option>
                        <option className="wrapp__option" value="Data science">Data science</option>
                    </select>
                </div>
                <form onSubmit={e => hendleSubmit(e)} className="wrapp__form">
                    <div className="form__wrapper">
                        <label className="form__label" >Name</label>
                        <input onChange={(e) => setAddInput(e.currentTarget.value)} className="wrapper__input" type="text" placeholder="Name" />
                    </div>
                    <div className="form__wrapper">
                        <label className="form__label" >Surname</label>
                        <input onChange={(e) => setAddInput2(e.currentTarget.value)} className="wrapper__input" type="text" placeholder="Surname" />
                    </div>
                    <div className="form__wrapper">
                        <label className="form__label" >Age</label>
                        <input onChange={(e) => setAddInput3(e.currentTarget.value)} className="wrapper__input" type="text" placeholder="Age" />
                    </div>
                    <div className="form__wrapper">
                        <label className="form__label" >Phone Number</label>
                        <input onChange={(e) => setAddInput4(e.currentTarget.value)} className="wrapper__input" type="text" placeholder="Phone Number" />
                    </div>
                    <button type="submit" className="wrapper__btn">Add User</button>
                </form>
                <Link className="form__link" to="/"><button className="button">Go home <img className="img" src={Go} width={15} alt="" /> </button></Link>
            </div>
        </div>
    )
}

export default Users ; 
