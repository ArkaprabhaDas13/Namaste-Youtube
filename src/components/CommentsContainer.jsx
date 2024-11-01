import React from 'react'


const commentsData = [
    {
        name: "random user",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "random user2",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "random user3",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "random user14",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "random user4",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "random user5",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "random user6",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "random user7",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "random user8",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "random user9",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "random user10",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "random user11",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "random user12",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "random user13",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];



const CommentsContainer = () => {
    
    return (
        <div>

            <h1 className='font-bold text-2xl my-5'>Comments:</h1>
            <div className='p-5 rounded-2xl'>

                <CommentsList comments={commentsData} />

            </div>

        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
        <div>
            <Comment data={comment} />
            <div className='pl-10 border border-transparent border-l-gray-300'>
                <CommentsList comments={comment.replies} />          
                {/* Here we are performing RECURSION. The Replies are basically normal comments. So, we are reusing the replies/comments as props to the CommentList component */}
            </div>
        </div>
    ))
}


const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return (
        <div className='flex border border-gray-200 p-5 rounded-xl shadow-lg my-7 bg-slate-100'>
            <img className='h-6 w-10' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />

            <div>
                <h1 className='font-bold'>@{name}</h1>
                <p className='text-gray-500'>{text}</p>
            </div>
        </div>
    )
}

export default CommentsContainer