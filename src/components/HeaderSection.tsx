import Nav from "./Nav";
import Form from "./Form";
export default function HeaderSection({carFilter,carList,setCarList,reservationList}:any) {
  return (
    <div className="bg-cover bg-bottom bg-no-repeat h-[70vh] p-3" style={{ backgroundImage: "url('/images/img-home.webp')" }}>
      <div className="max-w-[1200px] m-auto">
        <Nav />
        <Form carFilter={carFilter} carList={carList} setCarList={setCarList} reservationList={reservationList} />
      </div>
    </div>
  )
}
