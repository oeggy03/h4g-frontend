# Buddy4Good

## Problem Statement 

*"How might we, as a community empower, equip and co-create with persons with disabilities to enable them to access, use and enjoy places, services, produces and/or information, whether physical or virtual, so that persons with disabilities can connect to and be included in the wider community?"*

This is the problem statement from **SGEnable**, under **pillar 1**

From our research, we find that people with disabilities have more trouble getting around and mingling with others, compared to most of us. In addition, not all of these people have friends or family who are willing and able to bring them out for activities, or help them enjoy the many wonders of the world like the way we do.

However, there is no lack of helpful, kind-hearted people in Singapore. Yet, there is a lack of platforms aimed at connecting both groups. Hence, we have created Buddy4Good, which aims to encourage both disabled and able-bodied people to go out and enjoy activities together.

**Buddy4Good** is a platform for both persons with disabilities and able-bodied persons to connect with each other. Buddy4Good encourages the buddying up of able-bodied people (Best Buddy) with disabled people (Special Friend) to spend time doing activities together. These may be workshops, exercising, bird-watching, or any interest either party may have.

## Set-up instructions 
**Notes:**

- All of this was set up on a Windows PC. If you are using another OS, I apologise but I will not be able to give specific instructions for it.
- We have the frontend and backend in separate repos.
- Frontend (this repo): https://github.com/oeggy03/h4g-frontend Backend: https://github.com/oeggy03/h4g-backend
- The frontend was built on top of Create React App.

## Set-up for frontend

1. Install node.js
2. Clone this repo
3. Run ```npm install``` in the project directory. You may get a few vulnerability warnings, but ignore it, that is normal.
4. Run ```npm start```.
5. Launch your browser and go to localhost:3000/


## Starting the web app
Note that the backend at https://github.com/oeggy03/h4g-backend has to be set up before starting the app.

1. Run `go run main.go` in the project directory for the backend
2. Run `npm start` in the project directory for the frontend



## Future Plans

- Host the database on Google Cloud SQL rather than MySQL for easier setup
- Badges and a point system for people who create or join many activities
