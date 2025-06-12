import imageLoading from "../../../../public/ZKZg.gif"
import Image from "next/image"
import {Col , Row} from "antd"

export default function Loading(){
        return(
            <Row>
                <Col><b><p style={{fontSize:"25px",marginTop:"140px", marginLeft:"5px"}}>Aspetta un secondo</p></b></Col>
                <Col><Image src={imageLoading} alt="" height={90} style={{margin:"115px 0 0 10px" }} width={90}></Image></Col>
            </Row>
        )
}