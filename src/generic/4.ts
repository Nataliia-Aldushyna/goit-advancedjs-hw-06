/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponent {
  title: string;
}

class Component<IComponent>{
  constructor(public props: IComponent) { }
  getInf() {
    console.log("component", this.props)
  }
}

class Page extends Component<IComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};