import ICourse from "./course.model";

export default interface ISignUpForm {
    firstname : string ;
    lastname :string ;
    username : string ;
    email : string ;
    password :string ;
    role ?: string ;
    enrolledCourse ?:ICourse[]
}