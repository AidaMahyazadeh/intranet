interface Part{
    title :string,
    source :string
}

export default interface ILesson{
    section :string;
    parts :Part[]
}