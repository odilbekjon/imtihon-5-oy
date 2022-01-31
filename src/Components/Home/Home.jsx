import "./Home.css";
import Serach from "../../Assets/search.png";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {Context} from "../../Context/AddUserContext"; 
 
function Home(){
    const {user, setUser} = useContext(Context)
    const [refetch, setRefetch] = useState(false)
    const [search , setSearch] = useState('')
    // sort
    const [filter, setFilter] = useState('')
    const [courseSort , setCourseSort] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/todos`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [ ])

    useEffect(() => {
        fetch(`http://localhost:3000/todos?_sort=course&_order=${courseSort}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [courseSort])

    const onFilterCourse = (e) => {
        setCourseSort(e.target.value)
    }

    const deletData = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method:"DELETE",
        })
        .then(() => {
            setRefetch(true)
        })
        }

        useEffect(() => {
            if(refetch) {
                fetch(`http://localhost:3000/todos`)
                .then(res => res.json())
                .then(data => setUser(data))
                .then(() => setRefetch(false ))
            }
        }, [refetch])
        
        useEffect(() => {
                fetch(`http://localhost:3000/todos?_sort=name&_order=${filter}`)
                .then(res => res.json())
                .then(asd => setUser(asd))
        }, [filter])

        const onFilterChanged = (e) => {
            setFilter(e.target.value)
        }

    return( 
        <div className="container">
            <h1 className="header">Course schedule</h1>
            <form className="form">
                <div className="form__input">
                    <img className="form__img" src={Serach} width={25} alt="" />
                    <input onChange={(e) => setSearch(e.currentTarget.value.trim(''))} className="input" type="text" placeholder="Search name" />
                </div>
                <select onChange={onFilterChanged} name="" className="form__select" value={filter}>
                    <option className="form__option" value="">Sort Alph</option>
                    <option className="form__option" value="asc">a-z</option>
                    <option className="form__option" value="desc">z-a</option>
                </select>
                <select onChange={onFilterCourse} name=""  className="form__select" value={courseSort} >
                    <option className="form__option" value="">Sort by course</option>
                    <option className="form__option" value="smm">SMM</option>
                    <option className="form__option" value="Web developer">Web developer</option>
                    <option className="form__option" value="Graphik designer">Graphic designer</option>
                    <option className="wrapp__option" value="Python course">Python course</option>
                    <option className="wrapp__option" value="Data science">Data science</option>
                </select>
                <Link className="link" to="/users"><button className="form__btn btn1">Foydalanuvchi qo'shish</button></Link>
            </form>
            <div className="wrapper">
                <div className="box">
                    <details className="box__details">
                        <summary className="box__summary">Name</summary>
                        {user.filter(item => {
                            if(search == ''){
                                return item 
                            }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                return item
                            }
                        }).map(i => {
                                return(
                                    <h4 className="box__title" >{i.name}</h4>
                                ) 
                            })
                        }
                    </details>
                </div>
                <div className="box">
                    <details className="box__details pol">
                        <summary className="box__summary ">Age</summary>
                        {
                            user.filter(item => {
                                if(search == ''){
                                    return item 
                                }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                    return item
                                }
                            }).map(i => {
                                return(
                                    <h4 className="box__title" >{i.age}</h4>
                                ) 
                            })
                        }
                    </details>
                </div>
                <div className="box">
                    <details className="box__details pol2">
                        <summary className="box__summary">Surname</summary>
                        {
                            user.filter(item => {
                                if(search == ''){
                                    return item 
                                }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                    return item
                                }
                            }).map(i => {
                                return(
                                    <h4 className="box__title" >{i.surname}</h4>
                                ) 
                            })
                        }
                    </details>
                </div>
                <div className="box">
                    <details className="box__details">
                        <summary className="box__summary">Course</summary>
                        {
                            user.filter(item => {
                                if(search == ''){
                                    return item 
                                }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                    return item
                                }
                            }).map(i => {
                                return(
                                    <h4 className="box__title">{i.course}</h4>

                                ) 
                            })
                        }
                    </details>
                </div>
                <div className="box">
                    <details className="box__details">
                        <summary className="box__summary">Phone Number</summary>
                        {
                            user.filter(item => {
                                if(search == ''){
                                    return item 
                                }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                                    return item
                                }
                            }).map(i => {
                                return(
                                    <div className="hover" key={i.id}>
                                    <h4 className="box__title delete">{i.phoneNumber}
                                    </h4>
                                     <button onClick={() => deletData(i.id)} className="btn__delete">DELETE</button>
                                    </div>
                                ) 
                            })
                        }
                    </details>
                </div>
            </div>
        </div> // end of container
    )
}

export default Home ;