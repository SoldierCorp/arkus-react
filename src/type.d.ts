interface IHome {
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

  type DispatchType = (args: HomeAction) => HomeAction;
