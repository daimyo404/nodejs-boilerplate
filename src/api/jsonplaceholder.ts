type Users = {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const fetchUsers = async (): Promise<Users> => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  return users.json();
};
