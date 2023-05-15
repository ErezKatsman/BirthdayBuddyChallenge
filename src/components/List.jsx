import Person from "./Person.jsx";

const List = ({people}) => {
    return (
        <div>
            {people.map(person => <Person key={person.id} {...person}/>)}
        </div>
    )
}

export default List;