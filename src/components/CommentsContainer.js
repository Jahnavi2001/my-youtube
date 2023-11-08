import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: 'Jahnavi',
    text: 'I am learning react hoping i will do my best',
    replies: [
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: [
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: [
              {
                name: 'Jahnavi',
                text: 'I am learning react hoping i will do my best',
                replies: [
                  {
                    name: 'Jahnavi',
                    text: 'I am learning react hoping i will do my best',
                    replies: [
                      {
                        name: 'Jahnavi',
                        text: 'I am learning react hoping i will do my best',
                        replies: [
                          {
                            name: 'Jahnavi',
                            text: 'I am learning react hoping i will do my best',
                            replies: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Jahnavi',
                text: 'I am learning react hoping i will do my best',
                replies: [
                  {
                    name: 'Jahnavi',
                    text: 'I am learning react hoping i will do my best',
                    replies: []
                  }
                ]
              },
              {
                name: 'Jahnavi',
                text: 'I am learning react hoping i will do my best',
                replies: []
              }
            ]
          }
        ]
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: [
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: []
          },
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: [
              {
                name: 'Jahnavi',
                text: 'I am learning react hoping i will do my best',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Jahnavi',
    text: 'I am learning react hoping i will do my best',
    replies: []
  },
  {
    name: 'Jahnavi',
    text: 'I am learning react hoping i will do my best',
    replies: [
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: [
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: []
          },
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: []
          }
        ]
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      }
    ]
  },
  {
    name: 'Jahnavi',
    text: 'I am learning react hoping i will do my best',
    replies: []
  },
  {
    name: 'Jahnavi',
    text: 'I am learning react hoping i will do my best',
    replies: [
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: [
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: []
          },
          {
            name: 'Jahnavi',
            text: 'I am learning react hoping i will do my best',
            replies: []
          }
        ]
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      },
      {
        name: 'Jahnavi',
        text: 'I am learning react hoping i will do my best',
        replies: []
      }
    ]
  },
]


const CommentsContainer = () => {
  return (
    <div className="my-10">
      <div className="font-bold">Comments:</div>
      <CommentsList commentsData={ commentsData} />
    </div>
  );
};

export default CommentsContainer;
