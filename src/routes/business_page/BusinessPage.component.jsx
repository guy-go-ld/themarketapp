import {Component} from "react";
import {useLocation} from 'react-router-dom'
import data from "../../databases/ListData.json"
import {deepOrange} from "@mui/material/colors";
import {Avatar, Stack} from "@mui/material";

function showPerson(data_on_person)
{
    return(
        <div>
            <h1>{data_on_person.name}</h1>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Avatar alt={`business ${data_on_person.name}`}
                        src={`https://robohash.org/${data_on_person.id}?set=set2&size=180x180`}
                        sx={{ width: 90, height: 90 }}/>
            </Stack>
            <h3>{data_on_person.title}</h3>
        </div>
    );
}
export default function BusinessPageComponent()
{
    const location = useLocation()
    const check_null = location.state === null;
    let {from} = (check_null === true) ? 0 : location.state;

    const data_on_person = data.filter((business) => business.id === from)[0]; // TODO better this stuff

    return (
        <div>
            {(check_null === true) ?
                (<div><h2> Error - business page doesn't exists</h2></div>)
            :
                (<div>{showPerson(data_on_person)}</div>)
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