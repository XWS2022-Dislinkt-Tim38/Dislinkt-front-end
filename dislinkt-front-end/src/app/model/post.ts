export class PostModel{

    id: string = ""
    username: string = ""
    ownerId: string = ""
    title: string = ""
    content: string = ""
    link: string = ""
    datePosted: Date = new Date()
    dateEdited: Date = new Date()
    likes: string[] = []
    dislikes: string[] = []
    image: string = ""

    datePostedString: string = ""
    dateEditedString: string = ""
    
    followFlag?: string;
    
}