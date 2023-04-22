import Day from "./DateModules/Day"
import Month from "./DateModules/Month"
import Year from "./DateModules/Year"
var txt = new Date();

function Dates(props) {
    return (
      <div className="container-boxes" id={props.data}>
        <h2>{props.name}</h2>
        <div className='flex'>
          <Day val={txt.getDate()} />
          <Month val={txt.getMonth()+1} />
          <Year val={txt.getFullYear()} />
        </div>
      </div>
    );
  }

//var datestring = txt.getDate() + " " + (txt.getMonth()+1) + " " + txt.getFullYear();
export default Dates;  