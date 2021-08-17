import React from "react";
import { Button } from "antd";

interface IHelloProps{
    message?: String;   // 设置非必填属性
}

const Hello:React.FC<IHelloProps> = (props) =>{
    return <div>
              <h2>{props.message}</h2>
              <Button type="primary">Button</Button>
           </div>
}

// 设置默认属性
Hello.defaultProps = {
    message: 'hello very good!'
}

export default Hello