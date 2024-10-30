import { faker } from '@faker-js/faker';

export const fakeName = ()=>{
    const name = faker.person.fullName();
    console.log(name)
    return name;
}
