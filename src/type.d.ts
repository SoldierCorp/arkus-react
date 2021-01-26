/* interface IHome {
  title: string;
  body: string;
}

type HomeState = {
  articles: IHome[];
};

type HomeAction = {
  type: string;
  home: IHome ;
};

type DispatchType = (args: HomeAction) => HomeAction; */

/* interface Contact {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type ContactState = {
  contacts: Contact[];
};

type ContactAction = {
  type: string;
  home: Contact ;
};

type DispatchType = (args: HomeAction) => HomeAction; */



interface Contact {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  createdAt?: string
}