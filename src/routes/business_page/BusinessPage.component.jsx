import {Component} from "react";
import {useLocation} from 'react-router-dom'
import data from "../../databases/ListData.json"


export default function BusinessPageComponent()
{
    const location = useLocation()
    const check_null = location.state === null;
    let {from} = (check_null === true) ? 0 : location.state;

    const data_on_person = data.filter((business) => business.id === from)[0]; // TODO better this stuff

    return (
        <div>
            <h1>My Business Page</h1>
            {(check_null === true) ?
                <h2> Error - business page doesn't exists</h2>
            :
                <h2> {data_on_person.name} </h2>
            }

        </div>
    );
}
// class BusinessPageComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1 >My Business Page</h1>
//             </div>
//         );
//     }
// }
//
// export default BusinessPageComponent;