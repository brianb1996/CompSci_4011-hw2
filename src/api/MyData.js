const SlideStyle = {
    wordWrap: 'normal',
    width: '70%',
    fontSize: '25px',
    margin: '50px 15% 0px 15%',
    padding: '20px 0px'
}

export const MyDataSlide1 = () =>{
    return (
        <p style={SlideStyle}>
            My name is Brian Bredahl and this is my 3rd semester at UMSL. I'm currently studying Computer Science. As long a things go to plan I will graduate in spring next year. Before I came to UMSL I was studting Mechanical Engineering a Missouri University of Science and Technology, but that  wasn't the right fit for me.
        </p>
    )
}

export const MyDataSlide2 = () => {
    return (
        <p style={SlideStyle}>
            I work full time as a manager for Rick's Ace Hardware. I'm in charge of the plumbing, electrical, and hardware departments as well as shipping and receiving, key and hardware services, and power equipment services. I have worked there for almost 2 years now. Before I worked at Ace Hardware I worked at Office Depot and Promac Inc. ( A small electrical engineering firm.)
        </p>
    )
}

export const MyDataSlide3 = () => {
    return (
        <p style={SlideStyle}>
            I don't get much free time outside of school and work. When I do manage to find some spare time I enjoy spending time with my girlfriend, binge watching some Netflix shows, working on cars or anything with a engine, carpentry projects, and anything outdoors. 
        </p>
    )
    
}