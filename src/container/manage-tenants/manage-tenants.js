import Header from "@/src/common/header/header"
import Image from "next/image"
// import { LogoImg } from "@/src/assets/img"
import { QuotoneIcon, RydotIcon } from "@/src/assets/img/icons"
import { LogoImg } from "@/src/assets/img"
import logo from '../../assets/img/logo.svg'
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { BUTTON_LABEL } from "@/src/constant/labels"

const data = [{
    "id": 1,
    "name": "Revel",
    "img": LogoImg,
},
{
    "id": 2,
    "name": "Quotone ",
    "img": QuotoneIcon,


}, {
    "id": 3,
    "name": "Rydot ",
    "img": RydotIcon,


},
{
    "id": 4,
    "name": "Quotone ",
    "img": RydotIcon,


},
{
    "id": 5,
    "name": "Quotone ",
    "img": RydotIcon,


},
{
    "id": 6,
    "name": "Quotone ",
    "img": RydotIcon,


},
{
    "id": 7,
    "name": "Quotone ",
    "img": RydotIcon,


},
{
    "id": 8,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 9,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 10,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 11,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 12,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 13,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 14,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 15,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 17,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 18,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 19,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 20,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 21,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 22,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 23,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 24,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 25,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 26,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 27,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 28,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 29,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 30,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 31,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 32,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 33,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 34,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 35,
    "name": "Quotone ",
    "img": RydotIcon,


}, {
    "id": 36,
    "name": "Quotone ",
    "img": RydotIcon,


}


]


const ManageTenants = (props) => {
    const  { title } = props
    const [visibal, setvisible] = useState(7)

    const showmoreitem = () => {
        setvisible((predata) => predata + 8);
    }
    return (
        <>
            <main class="main-content" id="main">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="login-form  p-0 mt-5">
                                <div class="col-9 mx-auto ">
                                    <div class="text-center mb-5">
                                        <h3 class="font-36 mb-3">Manage the Tenants </h3>
                                        <p class="font-16 ">
                                            You can add, edit and delete Tenant anytime.
                                        </p>
                                    </div>
                                    <div class="row data-lake-cards tenants ">
                                        {
                                            data.slice(0, visibal).map((ins, index) => {
                                                return (<>
                                                    <div class="col-12 col-md-3 mb-4 ">
                                                        <div class="card text text-center mb-0">
                                                            <div class="icon">
                                                                <Image src={ins.img} alt="Revel" class="img-fluid mx-auto"
                                                                    width="140" height="100" />
                                                            </div>
                                                            {/* Revel */}
                                                            {ins.name}
                                                            {title}
                                                            <div class="actions">
                                                                <ul class="list-unstyled d-flex flex-row mb-0 justify-content-center">
                                                                    <li>
                                                                        <a href="javascript:void(0)">
                                                                            <i class="r-icon r-icon-info-outline"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0)">
                                                                            <i class="r-icon r-icon-pencil"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0)" class="text-danger">
                                                                            <i class="r-icon r-icon-delete"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>)
                                            })
                                        }
                                        <div class="col-12 col-md-3">
                                            <label for="logo" class="upload-box card">
                                                <div class="inner-content">
                                                    <div class="icon-box">
                                                        <i class="r-icon r-icon-plus"></i>
                                                    </div>
                                                    <span>
                                                        Add Tenant
                                                    </span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-success " onClick={showmoreitem}>Lode More</button>
                                    <div class="text-center my-4">
                                        <a href="javascript:void(0)" class="btn btn-primary btn-lg min-width-150">{BUTTON_LABEL.SAVE}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ManageTenants