import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";

const GET_API = "https://www.melivecode.com/api/users";
const Crud = () => {

    const [api, setapi] = useState([])
    const [fleg, setfleg] = useState(false)
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [avatar, setavatar] = useState()
    const [id, setid] = useState()
    const [add, setadd] = useState(false)
    const [show, setShow] = useState(true);

    const ToggleClick = () => {
        setShow(!show);
        console.log("show", show);
    };

    const hendalGet = async () => {
        const val = await axios.get(GET_API)
        setapi(val.data);

    }
    useEffect(() => {
        hendalGet();
    }, [fleg])

    const hendalPost = async (e) => {
        e.preventDefault();
        const obj = {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            email: email,
            avatar: avatar,
        }
        await axios.post("https://www.melivecode.com/api/users/create", obj);
        setfleg(!fleg)
        setfname("")
        setlname("")
        setusername("")
        setpassword("")
        setemail("")
        setavatar("")

    }

    const hendalDelete = async (id) => {
        await axios.delete("https://www.melivecode.com/api/users/delete", { data: { id: id } })
        setfleg(!fleg)
    }

    const Edit = async (v) => {
        setfname(v.fname)
        setlname(v.lname)
        setusername(v.username)
        setpassword(v.password)
        setemail(v.email)
        setavatar(v.avatar)
        setid(v.id)
        setadd(true)
    }

    const Update = async (e) => {
        e.preventDefault();
        const obj = {
            fname: fname,
            lanem: lname,
            username: username,
            password: password,
            email: email,
            avatar: avatar,
            id: id


        }
        await axios.put("https://www.melivecode.com/api/users/update", obj)
        setfleg(!fleg)
        setfname("")
        setlname("")
        setusername("")
        setpassword("")
        setemail("")
        setavatar("")

    }
    return (
        <>

            <button type="button" className="btn btn-primary" onClick={ToggleClick} data-bs-toggle="modal" data-bs-target="#exampleModal">
                ADD USER
            </button>

            <div className={` ${show ? " modal fade " : "show"}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">type</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={fname} onChange={(e) => setfname(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={lname} onChange={(e) => setlname(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">label</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => setusername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">order</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">description</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">placeholder</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={avatar} onChange={(e) => setavatar(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" >Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={add ? Update : hendalPost}>{add ? "Update" : "Sumbit"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>fname</th>
                        <th>lname</th>
                        <th>username</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                {
                    api.map((ins) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{ins.id}</td>
                                        <td>{ins.fname}</td>
                                        <td>{ins.lname}</td>
                                        <td>{ins.username}</td>
                                        <td>{ins.avatar}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => hendalDelete(ins.id)}>DELETE</button></td>
                                        <td><button type="button" className="btn btn-success" onClick={() => Edit(ins)}>Edit</button></td>

                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>



        </>
    )
}
export default Crud;