
import { Modal } from "react-bootstrap";
import "./CodeHistory.css"
import Axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {  SyncLoader } from "react-spinners";

export const CodeHistory = (props) => {
    const [codeHistory, setCodeHistory] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const getCodeHistory = async() => {
        setIsLoading(true);
        await Axios
            .get("https://www.foreverjava.com:9010/list-java-files")
            .then(function (response) {
                setCodeHistory(response.data);
                // setIsLoading(false);
            });
            setIsLoading(false);
    }

    useEffect(() => {
        getCodeHistory();
    }, [])
    return (
        <Modal size="lg" show={true} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <div className="d-flex align-items-center">
                    <h4 className="text-dark mt-2">
                        Code History
                    </h4>
                </div>
            </Modal.Header>
            <Modal.Body>
            <div className="max-modal-height">
                {isLoading ?  <div className="d-flex justify-content-center align-items-center loading-animation">
                <SyncLoader size={15} color="#00A925"/>

                </div>
                 :
                <div className="me-2">
                    {codeHistory?.map((item) => {
                        let date = item?.split("_")[1].split(".");
                        let convertInDate = moment(parseInt(date[0])).format('DD-MM-YYYY  HH:mm:ss');
                        return (
                            <div className="box my-2 p-2 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column  ms-3">
                                    <span className="font-weight-bold text-dark w-100">
                                        {item}
                                    </span>
                                    <span className="text-secondary date-font">
                                        {convertInDate}
                                    </span>
                                </div>
                                <div>
                                    <button className="d-flex align-items-center button p-2 px-4  btn-button"
                                        onClick={() => {
                                            let url = "/:id"
                                            url = url.replace(":id", item)
                                            navigate(url);
                                            props.closeModal();
                                        }}>
                                            Edit</button>
                                </div>
                            </div>
                        )
                    })
                    }
                    </div>
                }
                </div>
            </Modal.Body>
        </Modal>
    )
}