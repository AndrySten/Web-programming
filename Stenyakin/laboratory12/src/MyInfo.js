import React from "react";
import './MyInfo.css'
class App extends Component {

 <h2>Известные люди</h2>
   
state={
people:[
    <Name={<h1>'Серджо Маттарелла'</h1> итальянский государственный деятель, юрист, политик, действующий президент Италии c 3 февраля 2015 года.
Член шести составов правительства Италии в 1987—1990 и 1998—2001 годах, судья Конституционного суда Италии (2011—2015)./>
<a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%82%D0%B0%D1%80%D0%B5%D0%BB%D0%BB%D0%B0,_%D0%A1%D0%B5%D1%80%D0%B4%D0%B6%D0%BE" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0" alt="Foto"></a>
    <Name={<h1>Франк-Вальтер Штайнмайер (нем. Frank-Walter Steinmeier; род. 5 января 1956, Детмольд, ФРГ) — немецкий государственный деятель, политик, действующий Федеральный президент ФРГ с 19 марта 2017 года.
В прошлом — министр иностранных дел Германии (2005—2009 и 2013—2017), вице-канцлер Германии (2007—2009), член Социал-демократической партии Германии с 1975 года. />
<a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0"  class="title-lecture" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/%D0%A8%D1%82%D0%B0%D0%B9%D0%BD%D0%BC%D0%B0%D0%B9%D0%B5%D1%80,_%D0%A4%D1%80%D0%B0%D0%BD%D0%BA-%D0%92%D0%B0%D0%BB%D1%8C%D1%82%D0%B5%D1%80" alt="Foto"></a>  
    <Name={<h1>Елизаве́та II (англ. Elizabeth II), полное имя — Елизаве́та Алекса́ндра Мари́я (англ. Elizabeth Alexandra Mary; род. 21 апреля 1926, Мейфэр, Вестминстер, Лондон, Англия, Великобритания) — царствующая королева Великобритании и королевств Содружества из Виндзорской династии. Верховный главнокомандующий вооруженными силами Великобритании. Верховный правитель Церкви Англии. Глава Содружества Наций. Действующий монарх в пятнадцати независимых государствах: Австралии, Антигуа и Барбуде, Багамских Островах, Барбадосе, Белизе, Гренаде, Канаде, Новой Зеландии, Папуа — Новой Гвинее, Сент-Винсенте и Гренадинах, Сент-Китсе и Невисе, Сент-Люсии, Соломоновых Островах, Тувалу, Ямайке. />
<a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%D0%BF%D0%B8%D0%BD" class="title-lecture" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D0%B8%D0%B7%D0%B0%D0%B2%D0%B5%D1%82%D0%B0_II" alt="Foto"></a>
],
pageTitle :'React components'
}
changeTitleHandler = (newTitle) =>{
this.setState({
pageTitle: newTitle
})
}
onChangeName (name, index){
const people = this.state.people[index]
people.name = name
const people = [...this.state.people]
people[index] = people
this.setState({people})
}
render() {
let people = null

 people = this.state.people.map(( people, index) =>{
return(
<People 
key={index}
name={people.name}
year={people.year}
specialization={people.specialization}
onChangeTitle={this.changeTitleHandler.bind(this, people.name)}
onChangeName={event => this.onChangeName(event.target.value,
index)}
/>
)
})
return (
<div className="App">
<h2>{this.state.pageTitle}</h2>
<div style={{
paddingTOP: '60px'
}}>
{people}
</div>
</div>
);
}
}
export default App;
<input 
type="text"
onChange={props.onChangeName}
value={props.name}
className={inputClasses.join(' ')}
/>
<button onClick={props.onChangeTitle}>Up</button>
</div>
);
}
}
export default App;