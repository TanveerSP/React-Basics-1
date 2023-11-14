import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';
import Card from './component/Card';

function App() {
  const response = [
    {
      itemName: "Nirema",
      itemDate: "20",
      itemMonth: "June",
      itemyear: "2000"
    },
    {
      itemName: "SurfEcel",
      itemDate: "23",
      itemMonth: "Augest",
      itemyear: "2003"
    },
    {
      itemName: "Arial",
      itemDate: "24",
      itemMonth: "May",
      itemyear: "1998"
    }
  ];

  return (

    <div>
      <Card>

        <Item name={response[0].itemName}>
          Hello je main hu first item
        </Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

        <Item name={response[1].itemName}> </Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

        <Item name={response[2].itemName}> </Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>


        <div className="App"> Hello Jee </div>
        
      </Card>
    </div>
  );
}
export default App;
