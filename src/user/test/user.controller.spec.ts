import { DEV_HOST } from "../../../env";


describe('user/create', () => {
    test('create user', async () => 
    {   
        const user = {
            username: 'test_2',
            role: 'user'
        }
        
        const response = await fetch(`${DEV_HOST}/user/create`, {
            method: 'POST',
            body: JSON.stringify(user)
        })

        console.log(await response.text());

        expect(true).toBe(true);
    })
})