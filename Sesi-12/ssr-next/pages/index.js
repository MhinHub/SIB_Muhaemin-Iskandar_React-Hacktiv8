import { useEffect, useState } from 'react';

//* Dengan SSR

export default function Home({ users }) {
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {users}
  }
}





//* Tanpa SSR

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td>{user.name}</td>
//             <td>{user.username}</td>
//             <td>{user.email}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }


