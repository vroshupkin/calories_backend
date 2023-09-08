import fastify from 'fastify';
import { AppDataSource } from './data-source';
import { fillUsers } from './fill_data';
import { UserController } from './user/user.controller';


export const app = fastify();



app.listen({port: 3000}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
   console.log(`Server is running at ${address}`);
});

app.get('/', async (request, reply) => {
  return { message: 'Hello, Fastify!' }
});



const user_controller = new UserController(app);

try
{
    await AppDataSource.initialize()
    fillUsers().then(() => {
      console.log("🍏 Data Source has been initialized!")
    });
    
}
catch(err)
{
    console.error("🍎 Error during Data Source initialization", err)
    // // @ts-ignore
    // console.log(Object.keys(err))
    // // @ts-ignore
    // console.log(err.code)
    // @ts-ignore
    console.log({err})
}



// console.log(await userRepos.query(`SELECT * from users`))

// console.log(await userRepos.query('\'' + `d users`))

// const user = new Users()
// user.created_at = new Date()
// user.role = 'admin'
// user.username = 'hello'

// userRepos.save(user)

// class UserModel
// {
//   static 
// }




// console.log(await userRepos.find())

// console.log('INIT')
process.stdin.on('data', (str) => {
  
  process.stdout.write(str)
})

